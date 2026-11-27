# Package: claude-sheets-v2 (workflow step 2)

Made 2026-11-27 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who asks Claude for a budget or a tracker at work, then has to make it real in a spreadsheet; curious, not a spreadsheet expert or an engineer.
- **The pain today (before):** like homework handed back with only the answers (the analogy for our pasted table): Claude's budget comes back in chat, you paste it into another tool, and there our example's 3 team totals are just text with no formula; to check one you redo the sum, and Claude has no live access to the edits you make there (`research.md` row 7, "Our example").
- **The moment they're paying for:** like a teacher reading the shown steps: in Claude Sheets (beta on paid plans, since November 10, 2026; rows 2, 2b) Claude's formulas stay in the cells, so you can see and check how each number was calculated (row 4), and a total that skipped a quarter shows it in its formula (our example); Claude's edits are outlined as they land, and when it finishes, a card can undo just that change, until the card goes a few seconds after you're back in the sheet or as soon as you work in the cells (rows 5, 6).

## The 10 titles
Thumbnail words: LEARN, CLAUDE, SHEETS, IN, 60, SECONDS, so no "learn", "60" or "seconds" in the title besides the topic's name ("Claude Sheets").
Every title carries a digit (lesson L21). `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | Claude Sheets 2026: Claude Finally Shows Its Work | 49 | 94 | mobile; "finally" is hype and implies Claude never could |
| 2 | Claude Sheets Beta (2026): AI Math That Shows Its Work | 54 | 94 | mobile; "AI math" is wider than "formulas" (typed numbers show no work) |
| 3 | Claude Sheets 2026: Check AI Numbers Without Redoing Them | 57 | 94 | mobile; "AI numbers" wider than numbers a formula calculates |
| 4 | Claude Sheets (Nov 2026): Formulas Are the Shown Work | 53 | 94 | mobile; awkward |
| 5 | Claude Sheets 2026: "Show Your Work" for Claude's Numbers | 57 | 94 | mobile; "numbers" wider than formulas |
| 6 | Claude Sheets Beta 2026: Every Total Shows Its Work | 51 | 94 | mobile; "every" is absolute |
| 7 | Claude Sheets 2026: Stop Redoing Claude's Math by Hand | 54 | 94 | mobile; "stop" promises more than "you can check" |
| 8 | Claude Sheets Beta (2026): Check Each Step, Not the Answer | 58 | 94 | mobile; "step" is the analogy's word, not the product's |
| 9 | Claude Sheets 2026: Why Formulas Beat Pasted Answers | 52 | 94 | mobile; "pasted answers" pins the analogy on Claude (claude-sheets judge) |
| 10 | Claude Sheets 2026: A Math Teacher's Rule, for AI | 50 | 94 | mobile; vague on what you get (drafted with "Your"; claims.md #3: the source says "many math teachers") |
| 11 | Claude Sheets Beta (2026): Formulas That Show Their Work | 56 | 94 | mobile (subject survives: "Claude Sheets Beta (2026): Formulas...") |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN CLAUDE SHEETS IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| Claude Sheets Beta (2026): Formulas That Show Their Work | 94 | 66 | mobile, duplicate (claude, sheets), thumb-length 6 (by design) |
| Claude Sheets Beta (2026): AI Math That Shows Its Work | 94 | 66 | same |
| Claude Sheets 2026: Check AI Numbers Without Redoing Them | 94 | 66 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.

## Chosen
**Claude Sheets Beta (2026): Formulas That Show Their Work** (56 characters; subject at character 1; the digits 2026; the condition "Beta" in the title; no thumbnail word besides the topic's name; 94 alone, 66 with the thumbnail, by design).
It holds in Anthropic's words: "Formulas stay in the cells, so you can see and check how each number was calculated" (`research.md` row 4): "show their work" is the story's word (rows S1-S3) for "see and check how each number was calculated"; it says formulas show it, not that they are right.
The first seconds confirm it: the hook names Claude Sheets and says its formulas show the work, over a homework page with only answers, then a cell opening to show its formula.

## Thumbnail text
**LEARN CLAUDE SHEETS IN 60 SECONDS** (brand card). Picture: the mascot, left, as the math teacher (amber pencil behind the ear, from `docs/brand.md`'s palette, lesson L88), looking at the viewer; bottom right of centre, a big spreadsheet cell with a magnifier over it, revealing the cells its formula adds as teal outlines;
no words or digits on the picture (lesson L54); nothing in the bottom-right corner.

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it and description lines 1-2 hold, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| claude sheets | Claude, Sheets | line 1 |
| claude sheets beta | Claude, Sheets, Beta | line 1 ("beta") |
| claude sheets formulas | Claude, Sheets, Formulas | line 2 ("formulas") |

Proposed first two description lines (step 5; every condition from `research.md`'s narrowing list, re-read before writing them):
1. `Claude Sheets beta, explained in 60 seconds through a math teacher's "show your work": since November 10, 2026, on paid plans, Claude Sheets is a spreadsheet inside Claude where you and Claude edit the same cells.`
2. `Anthropic says formulas stay in the cells, so you can see and check how each number was calculated; Claude's edits are outlined as they land, and when Claude finishes, a card can undo only that change; it goes a few seconds after you're back in the sheet, or as soon as you work in the cells, and after that version history restores an earlier version, which also removes edits made after it.`
Line 3: `The Claude Help Center says it's on by default on Team plans, and on Enterprise plans it's off by default until it's turned on in Organization settings > Artifacts.`
