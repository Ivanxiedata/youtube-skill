# Package: agent-skills (v2, workflow step 2)

The promise is fixed before the script: the title and the thumbnail are one promise, and the hook (`beats.md`) confirms it in its first sentence.
Tools: `python3 .claude/skills/yt-package/title.py titles.txt` and `title.py --title "..." --thumb "..."`, run 2026-11-21.
Patterns from `docs/studies/2026-11-21-yt-viral.md` (patterns only, no wording copied): D = what it is + what changes for the viewer,
A = subject + one bounding frame, G = choosing between two named options, B = does the old requirement still hold, H = a warning about what the viewer does now.

## The 10 titles (`title.py`, alone)
| # | Title | Pattern | Chars | Score | Issues |
|---|---|---|---|---|---|
| 1 | What Are Agent Skills? (100 Tokens Each) | A | 40 | 100 | none |
| 2 | Agent Skills vs 1 Big Prompt | G | 28 | 100 | none |
| 3 | Agent Skills: Does Your AI Still Need 1 Big Prompt? | B | 51 | 98 | mobile (cut at "...Still Need 1...") |
| 4 | What Are Agent Skills? 100 Tokens Instead of 1 Big Prompt | D | 57 | 94 | mobile |
| 5 | Agent Skills: Why Your AI Stops Loading 1 Big Prompt | D | 52 | 94 | mobile |
| 6 | Agent Skills (SKILL.md) Explained in 3 Steps | A | 44 | 94 | mobile |
| 7 | Agent Skills Explained: 1 Folder, 1 File, 100 Tokens | A | 52 | 94 | mobile |
| 8 | Agent Skills: Stop Loading 1 Big Prompt Every Task | H | 50 | 94 | mobile |
| 9 | Agent Skills vs CLAUDE.md: What Loads on Every Task? | G | 52 | 80 | mobile, no-number |
| 10 | What Are Agent Skills? Your AI Stops Loading Every Rule | D | 55 | 76 | mobile, no-number |

## Top 3, scored with the thumbnail ("LEARN AGENT SKILLS IN 60 SECONDS")
| Title | Alone | With thumbnail | Issues with thumbnail |
|---|---|---|---|
| **Agent Skills vs 1 Big Prompt** | 100 | **80** | duplicate on "agent, skills" (the topic's name: allowed, `docs/workflow.md` deviations); thumb-length 6 words (the brand card: allowed, lessons L7, L8) |
| What Are Agent Skills? (100 Tokens Each) | 100 | 80 | the same two allowed issues; also "Each" states "~100" as exact, and the hook does not say "each" |
| Agent Skills: Does Your AI Still Need 1 Big Prompt? | 98 | 70 | the same two allowed issues, plus mobile: a phone feed cuts it at "...Still Need 1..." |

80 is the ceiling for any title that names the topic next to the brand card (v1 also scored 80). No title repeats "learn", "60" or "seconds".

## Chosen title
**Agent Skills vs 1 Big Prompt** (28 characters; subject in the first 12; the number 1; pattern G).
- The channel's format is new tech side by side with what came before, and this title is that before vs new: Agent Skills against the one big prompt.
- The hook confirms it word for word in its first sentence: "Agent Skills in 60s: you stop loading your 1 big prompt before each task; skills cost 100 tokens until you need them, but how?"
- Every word is true without rounding (title 1's "100 Tokens Each" rounds "~100"); it fits a phone feed whole (under 40 characters).
- It wins search 3 below by itself. The thumbnail carries "learn it in 60 seconds"; the title carries the contrast, so the pair says different things.

## Thumbnail
Text: **LEARN AGENT SKILLS IN 60 SECONDS** (the brand card, `docs/brand.md`). Keep v1's `thumbnail.png` (`film/thumb.js`, `film/thumb.py`): it already follows the template
(promise top right, mascot in the chef's toque on the left looking at the viewer, a recipe box with one SKILL.md card pulled out, bottom right kept clear)
and was checked readable at 160 px wide. It contains no number, so no change is needed for v2's "no invented numbers" fix.

## The 3 searches this video should win (`/yt-seo`)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| what are agent skills | agent skills | "What are Agent Skills?" opens line 1 |
| agent skills explained | agent skills | "Agent Skills explained in 60 seconds" in line 1 |
| agent skills vs prompt | agent skills vs ... prompt | "Agent Skills vs 1 big prompt" opens line 2 |

First two description lines for step 5 (they hold all three searches' words; keep them when writing `upload.json`):
1. What are Agent Skills? Agent Skills explained in 60 seconds: a skill is a folder with a SKILL.md file, and your AI agent reads its full instructions only when a task needs them.
2. Agent Skills vs 1 big prompt: before, every rule you wrote loaded on every task; now each skill costs about 100 tokens until a task matches it.
