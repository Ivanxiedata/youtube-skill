# Package: antigravity-swarm (workflow step 2)

Made 2026-11-24 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses a coding assistant at work (here Google Antigravity); curious, not a machine-learning engineer.
- **The pain today:** you ask one agent to add checks to 3 files (users, orders, products); it does them one after another in one conversation, and after each one you read the change and run the tests yourself: 3 waits, and you're the tester (`research.md`, our scene; the 3 files are the maker's own example, row 14).
- **The moment they're paying for:** you type `/swarm` once; 3 named agents each take one file at the same time, usually a verifier runs the tests and sends problems back to whoever wrote the code, and you watch it all on one board (`research.md` rows 1, 8, 9, 12, 14; a preview that uses quota much faster, row 4).

## The 10 titles
Gate (L21): `title.py` counts digits and dates only, so every title carries a digit. Thumbnail words: LEARN, ANTIGRAVITY, SWARM, IN, 60, SECONDS, so no "learn", "in", "60" or "seconds" in the title.
`python3 .claude/skills/yt-package/title.py titles.txt`: all 10 scored 94 alone (issue `mobile` on each; the subject is in the first 18 characters, so it survives the phone cut).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Antigravity Swarm: 3 Coding Agents at Once, 1 Runs the Tests | 60 | 94 | mobile; at the 60 cut; "1 runs the tests" is usual, not always (`research.md` row 8) |
| 2 | Antigravity Swarm: 3 Files, 3 Agents, 1 Board You Can Watch | 59 | 94 | mobile; a list |
| 3 | Antigravity /swarm: 3 AI Coders Work While a 4th Tests Them | 59 | 94 | mobile; "a 4th tests" is usual, not always |
| 4 | Antigravity Swarm: 3 Agents Code Together on 1 Board (2026) | 59 | 94 | mobile |
| 5 | Antigravity Swarm: Split 1 Coding Task Across 3 Agents | 54 | 94 | mobile; sells the feature, not the moment |
| 6 | Antigravity Swarm: 0 Tests You Run, 3 Agents Coding | 51 | 94 | mobile; the 0 is our example, reads as a maker's number |
| 7 | Antigravity Swarm: Watch 3 Agents Split Your Code Task | 54 | 94 | mobile |
| 8 | Antigravity Swarm: 3 Workers and a Verifier, Live | 49 | 94 | mobile; jargon "verifier" |
| 9 | Antigravity /swarm: Your Chat Becomes the Boss of 3 Agents | 58 | 94 | mobile |
| 10 | Antigravity Swarm: 3 Agents, 1 Shared Board, Nov 2026 | 53 | 94 | mobile; no moment |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN ANTIGRAVITY SWARM IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| **Antigravity Swarm: Watch 3 Agents Code 3 Files at Once** (11th, written after the claim check) | 94 | 66 | mobile, duplicate (antigravity, swarm), thumb-length 6 (by design) |
| Antigravity Swarm: Watch 3 Agents Split Your Code Task (first pick; narrower, `claims.md` row 39) | 94 | 66 | same |
| Antigravity Swarm: 3 Files, 3 Agents, 1 Board You Can Watch | 94 | 66 | same |
| Antigravity Swarm: 3 Coding Agents at Once, 1 Runs the Tests | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.

## Chosen
**Antigravity Swarm: Watch 3 Agents Code 3 Files at Once** (54 characters; subject at character 1; number 3; no thumbnail word besides the topic's name; alone 94, pair 66 with the same by-design issues; both re-run after the claim fix, L26).
Changed after the claim check (`claims.md` row 39, narrower): the first pick, #7 "Antigravity Swarm: Watch 3 Agents Split Your Code Task", made 3 sound like the number for any task, though the coordinator decides how many workers to add, and "your code task" carried no "splits cleanly" condition.
The new title names the example itself: 3 separate files, one agent each (the maker's own example, `research.md` row 14), a task that splits cleanly (row 2); "at once" = "work on the pieces at the same time" (row 1).
The promise is the viewer's moment: your 3 files coded at the same time, and you can watch them (the live board, rows 9, 12).

## Thumbnail text
**LEARN ANTIGRAVITY SWARM IN 60 SECONDS** (brand card). Picture: the mascot, left, in a chef's hat, at a laptop; bottom centre, one board with three teal-headed robot workers above three file cards ("USERS", "ORDERS", "PRODUCTS") and a fourth robot with a tick (the verifier); nothing in the bottom-right corner. No logos.

## The 3 searches this video should win (`/yt-seo`), picked after the title (L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| antigravity swarm | Antigravity, Swarm | line 1 |
| antigravity agents | Antigravity, Agents | line 1 |
| antigravity swarm agents | Antigravity, Swarm, Agents | line 1 |

Proposed first two description lines (step 5; every condition from `research.md`'s narrowing list):
1. `Antigravity Swarm explained in 60 seconds: since November 9, 2026, /swarm in Google Antigravity (preview; all plans, App and CLI; business and enterprise accounts since November 17, when their admin allows) turns your conversation into a coordinator that splits a coding task across named agents working at the same time.`
2. `Our example is the 3 API files from Google's own docs. Before (our picture, not Google's numbers): one agent took them in turn and you ran the tests yourself, 3 waits; now 3 agents take one file each at once, usually a verifier runs the tests, and you watch them on one shared board. It works best when a task splits cleanly, and it uses your quota much faster.`

Fixed after the claim check (`claims.md` rows 38, 42, 44): line 1 carries the business/enterprise admin condition; line 2 says the before scene and the waits are our picture, and "usually" for the verifier.
