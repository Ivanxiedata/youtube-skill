# Package: claude-sheets (workflow step 2)

Made 2026-11-26 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who asks Claude for a budget or a tracker at work, then has to make it real in a spreadsheet; curious, not a spreadsheet expert or an engineer.
- **The pain today (before):** Claude's answer arrives as a table in chat; you paste it into another tool, where it is just text: our example, a hiring budget by team and quarter whose 3 team totals have no formula (ours); to check one you redo the math by hand, and Claude has no live access to the edits you make there (`research.md` row 7).
- **The moment they're paying for:** in Claude Sheets (beta on paid plans, since November 10, 2026, rows 2, 2b), Claude builds that budget as a spreadsheet in Claude whose cells you both edit; Claude's formulas stay in the cells, so you can see and check how each number was calculated (row 4); Claude's edits are outlined as they land, and when it finishes, a card can undo just those edits, until it goes a few seconds after you're back in the sheet or as soon as you work in the cells (rows 5, 6).

## The 10 titles
Thumbnail words: LEARN, CLAUDE, SHEETS, IN, 60, SECONDS, so no "learn", "60" or "seconds" in the title besides the topic's name ("Claude Sheets").
The gate was read first (lesson L21): every title carries a digit (2026, 1), since a product name never passes `no-number`. `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Claude Sheets (2026 Beta): Every Number Shows Its Formula | 57 | 94 | mobile; "every number" says more than "each number was calculated" (typed inputs have no formula) |
| 2 | Claude Sheets: AI Numbers You Can Check, Not Just Trust (2026) | 62 | 76 | length over 60 |
| 3 | Claude Sheets 2026: Stop Redoing AI Math by Hand | 48 | 94 | mobile; "stop" promises more than "you can check" |
| 4 | Claude Sheets Beta: Claude Writes the Formulas, You Check Them | 62 | 58 | length, no number |
| 5 | Claude Sheets (Nov 2026): A Spreadsheet You and Claude Edit | 59 | 94 | mobile; a feature, not the moment |
| 6 | Claude Sheets 2026: Why Formulas Beat Pasted Answers | 52 | 94 | mobile |
| 7 | Claude Sheets: 1 Sheet, You and Claude in the Same Cells | 56 | 94 | mobile; a feature, not the moment |
| 8 | Claude Sheets 2026: See How Every AI Number Was Made | 52 | 94 | mobile; "every" is absolute |
| 9 | Claude Sheets Beta (2026): Check Claude's Math in the Cells | 59 | 94 | mobile (subject survives: "Claude Sheets Beta (2026): Check...") |
| 10 | Claude Sheets 2026: Undo Any Claude Edit, One at a Time | 55 | 94 | mobile; "any" is wrong: the Undo card goes away after a few seconds |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN CLAUDE SHEETS IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| Claude Sheets Beta (2026): Check Claude's Math in the Cells | 94 | 66 | mobile, duplicate (claude, sheets), thumb-length 6 (by design) |
| Claude Sheets 2026: Why Formulas Beat Pasted Answers | 94 | 66 | same |
| Claude Sheets 2026: Stop Redoing AI Math by Hand | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.

## Chosen
**Claude Sheets Beta (2026): Check Claude's Math in the Cells** (59 characters; subject at character 1; the digits 2026; the condition "Beta" in the title; no thumbnail word besides the topic's name; 94 alone, 66 with the thumbnail, same issues by design).
It holds in Anthropic's words: "Formulas stay in the cells, so you can see and check how each number was calculated" (`research.md` row 4); "check", not "trust" or "correct".
The first seconds confirm it: the hook names Claude Sheets and says formulas show how its numbers were made, over a sheet cell opening to show its formula.

## Thumbnail text
**LEARN CLAUDE SHEETS IN 60 SECONDS** (brand card). Picture: the mascot, left, with an amber teacher's pencil behind his ear, looking at the viewer; bottom right of centre, a big spreadsheet cell holding a number, with a magnifier over it revealing the formula's highlighted cells as teal outlines;
no words or digits on the picture (lesson L54); nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it and description lines 1-2 hold, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| claude sheets | Claude, Sheets | line 1 |
| claude sheets beta | Claude, Sheets, Beta | line 1 ("beta") |
| claude spreadsheet formulas | Claude | line 1 ("spreadsheet", "formulas") |

Line 3 (judge round 1 should-fix: the help page's undated defaults get their own sentence): `The Claude Help Center says it's on by default on Team plans, and on Enterprise plans it's off by default until it's turned on in Organization settings > Artifacts.`

Proposed first two description lines (step 5; every condition from `research.md`'s narrowing list):
1. `Claude Sheets beta, explained in 60 seconds: since November 10, 2026, on paid plans, Claude Sheets is a spreadsheet inside Claude where you and Claude edit the same cells; Claude can add tabs, write formulas that work across tabs, apply formatting and conditional formatting, and add dropdowns, checkboxes, and charts.`
2. `Anthropic says formulas stay in the cells, so you can see and check how each number was calculated; Claude's edits are outlined as they land, and when Claude finishes, a card can undo just that change; it goes a few seconds after you're back in the sheet, or as soon as you work in the cells, and after that version history restores an earlier version, which also removes edits made after it.`
