# Package: antigravity-orchestrator (workflow step 2)

Made 2026-11-25 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who codes with an AI assistant at work (here Google Antigravity, on a paid Google AI plan), picks a model from the dropdown and watches the quota bar; curious, not a machine-learning engineer.
- **The pain today (before):** our example, one coding task in 10 steps. You pick one model for all of it: Gemini 4 Carbon does every step, slow, and it burns your quota (`research.md` row 2); or one cheap model for everything, which Google says can break down when later steps need more (row 3, said of routers that send the whole task to the cheapest good-enough model).
- **The moment they're paying for:** the same task with Orchestrator: Carbon reads the code and writes the plan, the faster Gemini 4 Hydrogen makes the edits and runs the tests, and when a test fails twice it hands back and Carbon fixes the plan (rows 4, 7-9). Carbon does 2 of the 10 steps (our example). In Google's Terminal-Bench 4.1 results: near-Carbon task success, on average 24% less quota and 19% faster (row 5).

## The 10 titles
Thumbnail words: LEARN, ANTIGRAVITY, ORCHESTRATOR, IN, 60, SECONDS, so no "learn", "in", "60" or "seconds" in the title. The gate was read first (lesson L21): every title needs a digit.
`python3 .claude/skills/yt-package/title.py titles.txt` (alone):

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Antigravity Orchestrator: Gemini 4 Carbon Plans, Hydrogen Codes | 63 | 76 | length |
| 2 | Antigravity Orchestrator: 2 Gemini Models, 1 Task, 24% Less Quota | 65 | 76 | length; 24% without "on average, Google's test" |
| 3 | Antigravity Orchestrator: Carbon Plans, a Faster Model Does the Rest | 68 | 58 | length, no-number |
| 4 | Antigravity Orchestrator: Stop Running Gemini 4 Carbon on Every Step | 68 | 76 | length |
| 5 | Antigravity Orchestrator: Why 2 Models Beat 1 on Your Quota | 59 | 94 | mobile; "beat" is wider than "24% less quota on average" |
| 6 | Antigravity Orchestrator: Gemini 4 Carbon Plans and Fixes, Hydrogen Builds | 74 | 76 | length |
| 7 | Antigravity Orchestrator: The Strong Model Plans, the Fast One Works | 68 | 58 | length, no-number |
| 8 | Antigravity Orchestrator: 2 Models Hand 1 Task Back and Forth | 61 | 76 | length |
| 9 | Antigravity Orchestrator Explained: Carbon + Hydrogen (Nov 2026) | 64 | 76 | length |
| 10 | Antigravity Orchestrator: Near-Carbon Results, 19% Faster | 57 | 94 | mobile; 19% without "on average, Google's test" |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN ANTIGRAVITY ORCHESTRATOR IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Antigravity Orchestrator: 1 Task, 2 Gemini Models Take Turns** (11th, written for length) | 94 | 66 | mobile, duplicate (antigravity, orchestrator), thumb-length 6 (by design) |
| Antigravity Orchestrator: 2 Models Split 1 Task, Less Quota | 94 | 66 | same; "less quota" without its condition |
| Antigravity Orchestrator: Why 2 Models Beat 1 on Your Quota | 94 | 66 | same; "beat" too wide |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.
`mobile`: a phone feed shows "Antigravity Orchestrator: 1 Task, 2..." and the subject survives.

## Chosen
**Antigravity Orchestrator: 1 Task, 2 Gemini Models Take Turns** (60 characters; subject at character 1; digits 1 and 2; no thumbnail word besides the topic's name; 94 alone, 66 with the thumbnail, same issues by design).
It states no number that needs a condition: the two models (Carbon and Hydrogen) do hand one task back and forth (rows 4, 9, 11).
The promise is the viewer's moment: the strong model no longer does every step; it plans and fixes while a faster one does the work. The first seconds confirm it: the hook names Antigravity's Orchestrator and Gemini 4 Carbon ("it can plan and review"), and the hook shot shows the planner and a faster model taking turns on one task.

## Thumbnail text
**LEARN ANTIGRAVITY ORCHESTRATOR IN 60 SECONDS** (brand card). Picture: the mascot, left, in a builder's yellow hard hat (the building story), confident; bottom centre, a big robot architect with a teal screen head holding a blueprint and a small fast robot builder laying a brick on a half-built wall; no words on the picture (lesson L54); nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it holds, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| antigravity orchestrator | Antigravity, Orchestrator | line 1 |
| antigravity gemini models | Antigravity, Gemini, Models | line 1 |
| gemini orchestrator | Gemini, Orchestrator | line 1 |

Proposed first two description lines (step 5; every condition from `research.md`'s narrowing list; fixed after the claim check, `claims.md` rows 34-35):
1. `Antigravity Orchestrator explained in 60 seconds: since November 12, 2026, Orchestrator in Google Antigravity pairs 2 models in one task (by default 2 Gemini models): a planner model (Gemini 4 Carbon at launch and in Gemini Enterprise; on Google AI Pro and Ultra the default planner is now Gemini 4 Neon) explores the code, writes the plan and reviews the work, and the faster executor, Gemini 4 Hydrogen, makes the edits and runs the tests.`
2. `When the executor hits friction (for example a verification step that fails twice), it hands control back and the planner repairs the plan. On Terminal-Bench 4.1, Google reports that Orchestrator reached near-Carbon task success rates while, on average, consuming 24% less quota and completing 19% faster. Our 10-step example (Carbon doing 2 steps instead of 10) is ours, not Google's.`
