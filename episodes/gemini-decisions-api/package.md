# Package: gemini-decisions-api (workflow step 2)

Made 2026-11-24 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses AI at work and builds or runs a small tool that checks documents with it (claims, tickets, forms); curious, not a machine-learning engineer.
- **The pain today:** one insurance claim (a scanned PDF and damage photos) and 20 things to check about it; you ask a chat model one question at a time, so the claim goes along 20 times, 20 answers come back written out like essays, and none says how sure it is (`research.md`, Before and the counted example, which is ours).
- **The moment they're paying for:** the same claim sent once with all 20 questions in 1 call; 20 answers come back as yes/no, a choice or a score, each with a confidence from 0 to 1, and the unsure ones go to a person (`research.md` rows 2, 4, 5, 9, 10).

## The 10 titles
Thumbnail words: LEARN, GEMINI, DECISIONS, IN, 60, SECONDS, so no "learn", "in", "60" or "seconds" in the title.
The gate was read first (lesson L21): `title.py` on 2 titles before the 10, every title with a digit. Then `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Gemini Decisions API: 20 Questions, 1 Call, How Sure It Is | 58 | 98 | mobile |
| 2 | Gemini Decisions API: Up to 1,000 Questions, 1 Call | 51 | 98 | mobile; sells the limit, not the moment |
| 3 | Gemini Decisions API: Stop Sending 1 File 20 Times | 50 | 98 | mobile; sells cost only |
| 4 | Gemini Decisions API (Nov 11): Answers With How Sure It Is | 58 | 98 | mobile; no counted example |
| 5 | Gemini Decisions API: 20 Yes/No Checks, 1 Request | 49 | 98 | mobile; drops choice and rubric |
| 6 | Gemini Decisions API: Not Text, a Score From 0 to 1 | 51 | 98 | mobile; the tech, not the moment |
| 7 | Gemini Decisions API: 1 File, 20 Checks, No Parsing Words | 57 | 98 | mobile; jargon ("parsing") |
| 8 | Gemini Decisions API: Why 20 Prompts Become 1 | 45 | 98 | mobile; vague |
| 9 | Gemini Decisions API: 20 Questions About 1 Claim, 1 Call | 56 | 98 | mobile; "claim" alone is ambiguous |
| 10 | Gemini Decision 1: Ask 1,000 Questions at Once | 46 | 94 | mobile; model name less searched |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN GEMINI DECISIONS IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Gemini Decisions API: 20 Questions, 1 Call, How Sure It Is** | 98 | 70 | mobile, duplicate (gemini, decisions), thumb-length 6 (by design) |
| Gemini Decisions API: 20 Questions About 1 Claim, 1 Call | 98 | 70 | same |
| Gemini Decisions API: Stop Sending 1 File 20 Times | 98 | 70 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Gemini Decisions API: 20 Questions, 1..." and the subject survives.

## Chosen
**Gemini Decisions API: 20 Questions, 1 Call, How Sure It Is** (58 characters; subject at character 1; the numbers 20 and 1; no thumbnail word besides the topic's name).
The promise is the viewer's moment: all 20 questions about one input answered in one call, each answer with how sure the model is. True as worded: up to 1,000 questions per request (row 2), every answer with a confidence from 0 to 1 (row 5); 20 is our counted example, said to be ours in the description. "How sure it is" is a confidence score, not a promise that it is right (row 19).
The first seconds confirm it: the hook names the Gemini Decisions API, the 20 questions, the 1 call and "how sure it is".

## Thumbnail text
**LEARN GEMINI DECISIONS IN 60 SECONDS** (brand card). Picture: the mascot, left, in a teacher's mortarboard, holding a red pencil; bottom centre, one bubble answer sheet "1 CLAIM · 20 QUESTIONS" with filled teal bubbles and small confidence bars; nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it holds, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| gemini decisions api | Gemini, Decisions, API | line 1 |
| gemini api questions | Gemini, API, Questions | line 1 |
| gemini decisions api call | Gemini, Decisions, API, Call | line 1 |

Proposed first two description lines (step 5):
1. `Gemini Decisions API explained in 60 seconds: one call with up to 1,000 questions about one input (text, images, audio, video or PDF), and instead of writing text, the gemini-decision-1 model scores the options you gave it (yes/no, multiple choice, rubric), each answer with a confidence from 0 to 1.`
2. `Launched November 11, 2026, in the Gemini API in Google AI Studio. Our example: 20 questions about one insurance claim used to mean 20 prompts to a chat model, the claim sent each time; now it's 1 call, the claim billed once (each question still adds its own instruction and criteria tokens).`
