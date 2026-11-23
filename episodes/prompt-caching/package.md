# Package: prompt-caching (workflow step 2)

Made 2026-11-23 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses an AI chatbot or an AI API at work, drops long documents into it (a contract, a report, a manual) and asks question after question; curious, not an engineer; some of them see the API bill.
- **The pain today:** you load one 100-page PDF and ask 30 questions; on every question the whole PDF is sent again, read again and paid for again at full price, so 30 questions = 30 PDFs on the bill (`research.md`, Before; row 9).
- **The moment they're paying for:** the same 30 questions, and from question 2 on the AI answers from the work it already did on the PDF: the answer starts sooner and the PDF part of the bill comes to about 4 PDFs, not 30 (`research.md` rows 6, 7, 9, 11).

## The 10 titles
Gate checked first on 2 titles (lesson L21): both carried a number and scored 98. Then `python3 .claude/skills/yt-package/title.py titles.txt` (alone).
Thumbnail words: LEARN, PROMPT, CACHING, IN, 60, SECONDS, so no "in", "learn", "60" or "seconds" in the title.

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Prompt Caching: Stop Paying for 1 PDF 30 Times | 46 | 98 | mobile; narrower (`claims.md` row 18): reads still cost about a tenth |
| 2 | Prompt Caching: 30 Questions, the PDF Read Once | 47 | 98 | mobile; "read once" blurs with the makers' "cache reads" |
| 3 | Prompt Caching: 1 PDF, 30 Questions, Read Once | 46 | 98 | mobile; same |
| 4 | Prompt Caching: 1 Long PDF, Paid for Once | 41 | 98 | mobile; overclaim (the reads still cost about a tenth each) |
| 5 | Prompt Caching Explained with 1 100-Page PDF | 44 | 98 | mobile; "1 100" reads badly |
| 6 | Prompt Caching: Your AI Re-Reads the PDF 30 Times | 49 | 98 | mobile; sells the pain, not the fix |
| 7 | Prompt Caching: 30 Questions for the Price of 4 | 47 | 94 | mobile; overclaim (4 is the PDF part only) |
| 8 | Prompt Caching: Why the 2nd Question Costs Less | 47 | 94 | mobile |
| 9 | Prompt Caching: 90% Off Every Repeat Read | 41 | 94 | mobile; true on most models only |
| 10 | Prompt Caching: The 5-Minute Memory of Your AI | 46 | 94 | mobile; sells the catch |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN PROMPT CACHING IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Prompt Caching: Stop Paying Full Price for 1 PDF 30x** (after the claim check) | 98 | 70 | mobile, duplicate (prompt, caching), thumb-length 6 (by design) |
| Prompt Caching: Stop Paying for 1 PDF 30 Times (first choice, narrower) | 98 | 70 | mobile, duplicate (prompt, caching), thumb-length 6 (by design) |
| Prompt Caching: 30 Questions, the PDF Read Once | 98 | 70 | same |
| Prompt Caching: 1 PDF, 30 Questions, Read Once | 98 | 70 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Prompt Caching: Stop Paying Full Price..." and the subject survives.

## Chosen
**Prompt Caching: Stop Paying Full Price for 1 PDF 30x** (52 characters; subject at character 1; numbers 1 and 30; no thumbnail word besides the topic's name; alone 98, `mobile` only:
a phone feed shows "Prompt Caching: Stop Paying Full Price..." and the subject survives).
Chosen after the claim check: the first choice "Prompt Caching: Stop Paying for 1 PDF 30 Times" was ruled narrower (`claims.md` row 18), because the PDF is still paid at 1.25 once and about 0.1 on each later question.
The promise is the viewer's moment: the same PDF is not billed at full price on every question. True as worded: with caching, 30 questions cost about 4.15 full PDF reads for the PDF part, not 30 (`research.md` row 9).
The first seconds confirm it: the hook names prompt caching and says you stop paying full price for the same 100-page PDF thirty times.

## Thumbnail text
**LEARN PROMPT CACHING IN 60 SECONDS** (brand card). Picture: the mascot, left, holding one PDF; bottom centre, one tall stack "100 PAGES" with a teal "SAVED" tag and a row of small question cards Q1 ... Q30 flowing past it; nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| prompt caching | Prompt, Caching | line 1 |
| prompt caching pdf | Prompt, Caching, PDF | line 1 |
| what is prompt caching | Prompt, Caching ("what is" is the question form; line 1 answers it) | line 1 |

Proposed first two description lines (step 5):
1. `What is prompt caching? Explained in 60 seconds with one 100-page PDF and 30 questions: the AI saves its work on the PDF once, then reuses it.`
2. `Before, every question re-sent and re-paid the whole PDF at full price (30 questions = 30 PDFs); with prompt caching the PDF part costs about 4 by our math on the makers' rates (Claude and OpenAI docs).`
