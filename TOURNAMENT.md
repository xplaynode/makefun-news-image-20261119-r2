# Tournament log — news-image-20261119 r2

20 candidates built from one parameterized broadsheet engine
(assets/gen.py): original PIL vector art, all text typeset from data.
Variants crossed header (cream / navy band / ink band), accent (red /
burgundy / crimson), lead order (Shenzhen–Hague–COP31 in the board's
order, Hague first, COP31 first), stat strip (A: $81bn / 9–6 / 109–0;
B: $81.3bn with the study's exact captions) and density (calm 31
stories, full 33, max 36).

Before any candidate work, the live top 10 was read image by image
(study: news1119-top10-study.md): all ten are cream broadsheet front
pages with a giant serif date "Thursday 19 November 2026", a red
italic strapline naming the same three leads, a six-stat strip
(3 / 9–6 / $120bn / $81.3bn / 109–0 / 4.9%), three drawn leads, ten
drawn cards (13 drawn stories), a pin map, numbered briefs to 33+
stories and a DATE CHECK box. Our standing entry's failure was also
diagnosed first: a single-focus APEC poster, the exact style this
board buries (~#15,069, paid = top 50).

Date discipline was checked story by story: Cyclone Akvan NEARS the
coast on Thursday (landfall Friday, drawn as forecast only); COP31's
draft is Thursday, its close Friday; Anthropic PRICED at $83 on
Wednesday and STARTS TRADING Thursday. The DATE CHECK box lists the
18 November stories left out (EU €45bn Ukraine loan, Iran–Kuwait/
Bahrain, Nvidia results, Jeffries speaker, Van Gogh $190.4m, Anthropic
$83 pricing) and the 20 November events not yet news.

Scoring used the kit rubric in the judge's priority order
(Date & specificity /25, Breadth /20, Readability /25, Faithful /10,
Craft /20). Visual reads killed real defects during the build:
max-density briefs overflowing into the DATE CHECK box (the bottom
block was rebalanced — narrower map, tighter leads and cards — and
the full 33-story density chosen), in-art text clipped at the 24 px
card bands (removed), the lead-1 summary clipped at three lines
(shortened), and the COP31 CUT stamp sitting on the document's edge
(moved inside).

| cand | config | Date | Breadth | Read | Faith | Craft | Total |
|------|--------|------|---------|------|-------|-------|-------|
| 11 | cream, red, stats B, full, board order | 25 | 19 | 24 | 10 | 19.5 | 97.5 |
| 01 | cream, red, stats A, full, board order | 25 | 19 | 24 | 9.5 | 19.5 | 97.0 |
| 18 | cream, red, stats B, max, board order | 25 | 20 | 22 | 10 | 18.5 | 95.5 |
| 07 | navy, red, stats B, max, Hague first | 25 | 20 | 22 | 10 | 18.5 | 95.5 |
| 20 | navy, red, stats B, full, board order | 25 | 19 | 23 | 10 | 18.5 | 95.5 |
| 05 | cream, red, stats B, calm, board order | 25 | 17 | 24 | 10 | 19.5 | 95.5 |

The max-density pages lost on readability: 36 stories pushed the
briefs into the DATE CHECK box even after rebalancing. The calm pages
lost on breadth. Between the two full-density finalists, stats B wins
on faithfulness — $81.3bn is the figure the day's reporting and the
board's leaders carry. At 300 px the winner's date, stat strip and
three lead headlines stay legible, matching the board's #1–#3 test.

Winner: cand-11 — entry.png, 1024x1024, 263,994 bytes,
sha256 cec5075c74644ad5d0a1fe949af75774112c643a2f2bf891e112f48e6fe2e268.
