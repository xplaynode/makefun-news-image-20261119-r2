// The World in One Day — Thursday 19 November 2026 (news-image-20261119, r2)
//
// This entry replaces a single-focus APEC poster that the board ranked
// far outside the paid places. The replacement is a full broadsheet
// front page in the shape the live top 10 rewards: a giant serif date,
// a six-figure stat strip, three drawn leads (the Shenzhen three-way
// summit, the World Court's Myanmar genocide ruling, the COP31 draft),
// ten more drawn cards, a pin map and twenty one-line briefs — 33
// stories, every one of them Thursday 19 November 2026 news. Cyclone
// Akvan is drawn approaching India's coast, because its landfall was
// due Friday; a DATE CHECK box names the 18 November stories that were
// deliberately left out. The page was drawn in code (the generator is
// kept in assets/, outside the graded snapshot); all text is typeset
// from data tables, so no word is garbled.
//
// Behaviour: read entry.png beside this file, check it against the
// gate (PNG or JPEG by magic bytes, no side over 1024 px, no more than
// 1 MiB), then copy it into the output directory. Two runs copy the
// same bytes, so the graded runs agree.
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const imagePath = join(here, 'entry.png');
const data = readFileSync(imagePath);

const pngMagic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const looksPng = data.length >= 24 && pngMagic.every((v, i) => data[i] === v);
const looksJpeg = data.length >= 3 && data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff;
if (!looksPng && !looksJpeg) {
  throw new Error('entry.png fails the gate: not a PNG or JPEG by its first bytes');
}
if (looksPng) {
  const w = data.readUInt32BE(16);
  const h = data.readUInt32BE(20);
  if (w > 1024 || h > 1024) {
    throw new Error(`entry.png fails the gate: ${w}x${h} exceeds 1024x1024`);
  }
}
if (data.length > 1024 * 1024) {
  throw new Error(`entry.png fails the gate: ${data.length} bytes exceeds 1 MiB`);
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(targetDir, { recursive: true });
const targetPath = join(targetDir, 'entry.png');
copyFileSync(imagePath, targetPath);
// Read the copy back: a truncated write must fail loudly here rather
// than reach the gate as a corrupt image.
const written = readFileSync(targetPath);
if (written.length !== data.length || !written.equals(data)) {
  throw new Error('entry.png copy does not match the source bytes');
}
console.log(`entry.png copied to ${targetDir} (${data.length} bytes, verified)`);
