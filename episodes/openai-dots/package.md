# Package: openai-dots (workflow step 2)

Made 2026-11-22 with `/yt-package` and `/yt-seo`, before the script, so the first seconds can confirm this promise.
Patterns from `docs/studies/2026-11-21-yt-viral.md` (A, B, D, E, F; patterns only, no wording copied).
Rules: at most 60 characters, the subject (OpenAI dots) in the first 40, a number, name or date, and besides the topic's name no thumbnail word repeated.

## The 10 titles (first set) and the shortened set
`python3 .claude/skills/yt-package/title.py titles.txt` (alone), then each with `--thumb "LEARN OPENAI DOTS IN 60 SECONDS"` (pair).
The first ten all lost 6 points to the mobile cut (over 40 characters), so a second, shorter set was written and scored.

| # | Title | Chars | Pattern | Alone | Pair | Pair issues |
|---|---|---|---|---|---|---|
| 1 | Does ChatGPT Still Wait for You? OpenAI Dots (2026) | 51 | B | 94 | 66 | mobile, duplicate (dots, openai), thumb-length |
| 2 | OpenAI Dots: ChatGPT That Works While You Sleep | 47 | D | 76 | 48 | mobile, no-number, duplicate, thumb-length |
| 3 | What Are OpenAI Dots? The Always-On ChatGPT Agent | 49 | F | 76 | 48 | mobile, no-number, duplicate, thumb-length |
| 4 | OpenAI Dots vs ChatGPT Agent: What Changed in 2026 | 50 | E | 94 | 66 | mobile, duplicate, thumb-length |
| 5 | Does ChatGPT Still Need Your Prompt? OpenAI Dots | 48 | B | 76 | 48 | mobile, no-number, duplicate, thumb-length |
| 6 | OpenAI Dots, Clearly Explained (DevDay 2026) | 44 | A | 94 | 66 | mobile, duplicate, thumb-length |
| 7 | OpenAI Dots Work 24/7 Toward Your Goals. Here's How | 51 | D | 94 | 66 | mobile, duplicate, thumb-length |
| 8 | What OpenAI Dots Do While You're Away (2026) | 44 | F | 94 | 66 | mobile, duplicate, thumb-length |
| 9 | OpenAI Dots: An AI Agent With Its Own Computer | 46 | D | 76 | 48 | mobile, no-number, duplicate, thumb-length |
| 10 | Why OpenAI Dots Ask Before They Act (DevDay 2026) | 49 | D | 94 | 66 | mobile, duplicate, thumb-length |

Shortened set (at most 40 characters):
| Title | Chars | Pattern | Alone | Pair | Pair issues |
|---|---|---|---|---|---|
| **OpenAI Dots: Can ChatGPT Work 24/7 Now?** | 39 | B | 100 | 84 | duplicate (dots, openai), thumb-length |
| OpenAI Dots: Will ChatGPT Work 24/7 Now? | 40 | B | 100 | 84 | duplicate, thumb-length |
| Do OpenAI Dots Really Work 24/7 for You? | 40 | B | 100 | 84 | duplicate, thumb-length |
| OpenAI Dots vs ChatGPT Agent (2026) | 35 | E | 100 | 80 | duplicate, thumb-length |
| What Are OpenAI Dots? (DevDay 2026) | 35 | F | 100 | 80 | duplicate, thumb-length |
| OpenAI Dots, Clearly Explained (2026) | 37 | A | 100 | 80 | duplicate, thumb-length |
| Does ChatGPT Still Wait for You in 2026? | 40 | B | 100 | 100 | thumb-length |
| What Changed in ChatGPT at DevDay 2026? | 39 | F | 100 | 100 | thumb-length |
| Does ChatGPT Still Need a Prompt in 2026? | 41 | B | 98 | 88 | mobile, thumb-length |

The pair issues are on purpose (`docs/workflow.md`, deviations): the brand card has 6 words, and it repeats the topic's name "OpenAI Dots", which search needs in the title.
The two 100/100 pairs score higher only because they leave out "Dots", the name people search for, so they fail the subject rule in spirit: the subject would not be in the title at all.

## Top 3
1. **OpenAI Dots: Can ChatGPT Work 24/7 Now?** 100 alone, 84 with the thumbnail, only the by-design issues. Pattern B (the old requirement, "you had to be there", still holding?).
   "24/7" is OpenAI's own words: a dot "can work towards your goals 24/7" (`research.md`).
2. **OpenAI Dots vs ChatGPT Agent (2026)**: 100, 80. Pattern E; names the "before", but no open question.
3. **What Are OpenAI Dots? (DevDay 2026)**: 100, 80. Pattern F; the plain question, weaker promise.

## Chosen
**OpenAI Dots: Can ChatGPT Work 24/7 Now?** (39 characters; "OpenAI Dots" at character 1; the number 24/7.)
Title and thumbnail as one promise: the title asks whether ChatGPT now keeps working without you; the thumbnail promises the answer in 60 seconds.
The answer the video gives: yes, toward your goals, on its own computer, reading but not sending while you're away, and asking you before sensitive steps.
The first seconds confirm it: the spoken hook names OpenAI dots, says before (it waited for you) -> now (it keeps working while you sleep).

## Thumbnail text
**LEARN OPENAI DOTS IN 60 SECONDS** (the brand card: "LEARN" small off-white, "OPENAI DOTS" huge amber, red "IN 60 SECONDS" sticker).
`title.py --title "OpenAI Dots: Can ChatGPT Work 24/7 Now?" --thumb "LEARN OPENAI DOTS IN 60 SECONDS"`: 84/100 (duplicate on dots/openai, thumb-length 6, both by design).

## The 3 searches this video should win (`/yt-seo` query test)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| openai dots | OpenAI, Dots | OpenAI, dots (line 1) |
| what are openai dots | OpenAI, Dots | what, are, OpenAI, dots (line 1) |
| chatgpt always on agent | ChatGPT | ChatGPT, always-on, agent (line 1) |

Proposed first two description lines for step 5 (`upload.json`):
1. `What are OpenAI dots? Always-on ChatGPT agents, launched at DevDay on September 29, 2026, explained in 60 seconds.`
2. `Before, ChatGPT and its 2025 agent mode did one task when you asked. Now a dot works toward your goals on its own cloud computer, and asks you before sensitive steps.`
