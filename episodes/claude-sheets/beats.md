# Beats: claude-sheets (workflow step 3)

Written 2026-11-26 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Claude Sheets Beta (2026): Check Claude's Math in the Cells"** + thumbnail **"LEARN CLAUDE SHEETS IN 60 SECONDS"**. The hook sells the viewer's moment (no redoing the math to trust a number: the formula shows how);
the tech (a sheet inside Claude, the same cells, formulas that stay in the cells, outlined edits, a card's undo) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. The renderer times every cut from the real `vo_lines.json` and the measured pauses; the film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, our hiring budget by team and quarter** (the maker's own example prompt, `research.md` row 10): **3 teams x 4 quarters, with 3 team totals** (ours), from the first beat to the last;
a **meter "TOTALS WITH NO FORMULA · OUR EXAMPLE"** (0 to 3: the budget's three team totals, the numbers a formula calculates; the 12 quarter cells are typed inputs) that fills to 3 in BEFORE (the pasted table) and stays empty, with a teal tick "ALL 3 HAVE FORMULAS", in NOW on the same budget (the same unit both sides, lesson L34; gate round 1 fix 5);
**the how on one sheet that grows** (the same 3 x 4 grid: pasted plain numbers -> the sheet in Claude -> formulas in the cells -> one total's formula lit -> a skipped quarter caught -> Claude's outlined edit -> its Undo card) with a highlight on what the voice names;
the proof is **Anthropic's own words** (Claude Help Center: "Formulas stay in the cells, so you can see and check how each number was calculated", row 4); Anthropic gives no number, so no number is claimed beyond our example.
The story everyone knows (lesson L3): **"show your working" on a maths test**: before, our pasted table is like a test handed in with answers only (an analogy for our example, not a claim about Claude's answers; claims.md row 22); now its working sits in the cells it calculates, and you check it like a teacher with a pencil.

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33: a digit, "you", cost/before for stakes; but, how, before for curiosity); every draft had all four groups before scoring.
Every one opens with the topic's name (lesson L14), in one sentence with the hook (lesson L16). Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 72 STRONG (formula: myth correction, "you think X, but Y")
"Claude Sheets, 2026 beta: you think checking AI numbers will cost you a redo, but actually formulas show how."
(Gate round 1 fix 1: the first pick, "you think AI numbers cost a redo before you trust them, but formulas show how." (78), framed the belief as trust, which the sources never promise; the belief is now about checking. Re-scored alone with `--hook`.)
```
SPECIFICITY 63 · ADDRESS 100 · STAKES 62 (cost) · CURIOSITY 92 (but, actually, how) · BREVITY 100 · VERDICT 72 STRONG
```
3-second test: someone who knows no AI tech hears "in Claude Sheets, checking an AI's numbers doesn't mean redoing them: the formulas show how they were made". The topic is the first words; no architecture word. The condition "beta" (and its year) is in the line (lesson L26).
Corrects a belief (the misconception of `lesson.md`), ends on the outcome, not "but how?" (L31). "Formulas show how": "Formulas stay in the cells, so you can see and check how each number was calculated" (row 4).
Panels: title card; then you at a teacher's desk with a pencil over a robot's answer sheet that shows answers only (the analogy for our pasted table), a thought bubble "REDO THE MATH?"; then a sheet cell that opens to show its formula, the cells it adds lit in teal.

### 2 (runner-up) 73 STRONG
"Claude Sheets, 2026 beta: you think checking AI numbers means a redo before you know, but formulas show how."
Why 1 over 2: "before you know" hints the formula proves the number right; 1 says only that checking needs no redo.

### All hooks scored
| Score | Hook | Note |
|---|---|---|
| 80 | Claude Sheets, 2026 beta: you think checking AI math will cost you a redo before you can stop, but formulas show how. | "before you can stop" says nothing |
| 78 | Claude Sheets, 2026 beta: you think AI numbers cost a redo before you trust them, but formulas show how. | first pick; gate round 1: "trust" claims more than "check" |
| 79 | Claude Sheets beta: you think an AI's 12 numbers cost you a redo before you trust them, but its formulas show how. | an invented number in the hook, without "our" |
| 79 | Claude Sheets, a 2026 beta: you think AI numbers cost you a redo before you trust them, but formulas show how. | 22 spoken words: line 1 past 8 s (lesson L46) |
| 78 | Claude Sheets, 2026 beta: you never have to redo AI numbers before you trust them, but formulas show how. | "never"; "trust" |
| 73 | Claude Sheets, 2026 beta: you think checking AI numbers means a redo before you know, but formulas show how. | runner-up |
| 72 | **Claude Sheets, 2026 beta: you think checking AI numbers will cost you a redo, but actually formulas show how.** | chosen |
| 55 | Claude Sheets, 2026 beta: you think checking AI numbers costs a redo, but formulas show how. | "costs" is not the scorer's "cost" |
| 74 | Claude Sheets, 2026 beta: AI numbers cost you a redo before you trust them, but now formulas show how. | no belief named |
| 72 | Claude Sheets: you think an AI's 12 budget numbers cost you a redo by hand, but actually each formula shows how it was made. | invented number; 23 words |
| 72 | Claude Sheets, 2026 beta: you think AI numbers cost you a redo, but actually formulas show how they were made. | |
| 70 | Claude Sheets: you think AI numbers cost you a check by hand, but actually Claude writes the formula into each of your 12 cells. | answers itself |
| 57 | Claude Sheets, 2026 beta: stop redoing AI numbers by hand before you trust them, because the formulas show how. | "because" closes the gap |
| 39 | Claude Sheets: you never have to just trust an AI's 12 numbers, because each cell shows the formula behind it. | first draft |

## The parts, in one line each
- **Hook:** title card; you think "REDO THE MATH?" over an answers-only sheet; a cell opens to show its formula.
- **Turn:** "Here's how, on our hiring budget: three teams, four quarters." Then it does it, on that budget.
- **Before, the pain as a scene:** in our example, you pasted Claude's chat table into another tool: three totals, just text, no formulas (meter fills to 3); checking meant redoing the math; Claude had no live access to your edits.
- **Now, the same scene:** in the paid-plan beta the spreadsheet stays in Claude; you both edit the same cells; Claude's formulas stay in the cells (meter: none of our totals without a formula).
- **How, and why it helps you:** you can check how each number was calculated: our total that skipped a quarter shows it in its formula; Claude's edits are outlined as they land, so you see them, and when it finishes a card can undo just those edits, but only briefly (a few seconds after you're back, or when you edit a cell).
- **Close:** "So, what we learned:" BEFORE our 3 pasted totals, no formulas vs NOW formulas you can check, side by side; takeaway card; the ask (subscribe + comment).

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) with an amber **teacher's pencil** behind his ear (the maths-test story's costume); he holds it to check.
- **Claude = a robot with a teal screen head** (visibly AI, brand casting), label "CLAUDE"; in the hook it hands in an answer sheet (the analogy for our pasted table) and, in NOW, works in the same sheet with a teal cursor. No logos.
- **The budget grid** (our example): a 3 x 4 grid, rows "TEAM A", "TEAM B", "TEAM C", columns "Q1" to "Q4", and a "TOTAL" column. The cells show grey bars, never digits (lesson L71: every number on screen is said or cut).
  BEFORE: inside a plain grey window "OTHER TOOL", the cells flat grey. NOW: inside a window "CLAUDE SHEETS · BETA", each of the three TOTAL cells has a small teal "fx" tag.
- **The formula bar** over the grid: BEFORE "PLAIN NUMBER · NO FORMULA"; NOW, for TEAM A's total "=SUM(Q1:Q4)" with its four cells outlined teal; for TEAM B's total "=SUM(Q1:Q3)" with Q1-Q3 lit and Q4 dark, an amber stamp "SKIPPED Q4!".
- **The meter "TOTALS WITH NO FORMULA"** with "OUR EXAMPLE" under its label, lower part of the frame (under the picture, above y 1536) in every BEFORE and NOW shot: 3 boxes that fill one by one, a big counter "3" in amber in BEFORE; empty boxes and a teal tick "ALL 3 HAVE FORMULAS" in NOW. Labels at least 44 px (lesson L48).
- **The Undo card:** "CLAUDE UPDATED THE SHEET" with an "UNDO" button and a small timer ring; the new cells Claude added carry a teal outline as they land.
- Every frame: corner tag "CLAUDE SHEETS · 60s" top-left inside the safe area (x >= 60, y >= 100, 44 px or more; lesson L79). BEFORE tabs amber, NOW tabs teal, red only for the sticker and Subscribe.

## Shots
Times come from `vo_lines.json` at build. Shot 0 cuts on the measured pause after "Claude Sheets," inside line 1 (lessons L16, L36); every voice line over about 4 s gets two or three shots (lesson L1).

| # | Line | Spoken line (part) | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 1a | "Claude Sheets," | Full-screen title card: "LEARN" small, "CLAUDE SHEETS" huge in amber, "BETA · 2026" under it, red tilted sticker "IN 60 SECONDS"; corner tag. Holds until the measured pause after "Sheets" | hook |
| 1 | 1b | "2026 beta: you think checking AI numbers will cost you a redo," | The maths-test analogy (claims.md row 22): the mascot (pencil) at a teacher's desk over the robot's answer sheet: three answer lines, each "= ?" with no working; thought bubble "REDO THE MATH?"; small tag "BETA · 2026"; slow linear push to 1.1 | hook |
| 2 | 1c | "but actually formulas show how." | Cut: one big sheet cell; its formula opens above it "=SUM(...)" and the cells it adds light up teal one after another; label "THE FORMULA SHOWS HOW" | hook |
| 3 | 2 | "Here's how, on our hiring budget: three teams, four quarters." | An order card "OUR EXAMPLE: HIRING BUDGET" over the 3 x 4 grid (TEAM A-C, Q1-Q4); the meter "TOTALS WITH NO FORMULA" / "OUR EXAMPLE" enters under the picture, empty | turn |
| 4 | 3a | "Before, in our example, you pasted Claude's chat table into another tool:" | Cut: amber tab "BEFORE" and a small "OUR EXAMPLE"; left, a chat bubble from the robot holding a small table of plain text; right, a grey window "OTHER TOOL"; a "PASTE" arrow between them; the table appears in the other window | beat |
| 5 | 3b | "three totals, just text, no formulas." | Cut: the "OTHER TOOL" grid, larger: flat grey cells, the three TOTAL cells highlighted, tagged "JUST TEXT"; formula bar "PLAIN NUMBER · NO FORMULA"; the meter fills box by box to "3" (amber) | beat |
| 6 | 4a | "Checking meant redoing the math," | Cut: the mascot at a notepad, pencil moving, scribbles of a sum; TEAM B's total cell highlighted amber; meter stays 3 | beat |
| 7 | 4b | "Claude had no live access to your edits." | Cut: the mascot types into a cell of "OTHER TOOL"; the robot stands behind a wall, outside the window, a "?" on its screen face; label "NO LIVE ACCESS TO YOUR EDITS"; meter 3 | beat |
| 8 | 5a | "Now, in the paid-plan beta, the spreadsheet stays in Claude;" | Cut: teal tab "NOW"; one window "CLAUDE SHEETS · BETA" holding the same 3 x 4 grid; small line "PAID PLANS"; meter (teal) empty | beat |
| 9 | 5b | "you both edit the same cells." | Cut: the mascot's coral cursor types in one cell, then the robot's teal cursor types in the next cell of the same grid (one after the other, claims.md row 11); label "SAME CELLS" | beat |
| 10 | 6a | "Claude's formulas stay in the cells," | Cut: each of the three TOTAL cells gets a teal "fx" tag one after another; a label "fx = FORMULA" and a small "OUR EXAMPLE" by the totals; the meter's boxes stay empty and its counter becomes a big teal tick "ALL 3 HAVE FORMULAS", small "OUR EXAMPLE" under it (none of our totals without a formula); "OUR EXAMPLE" under its label | beat |
| 11 | 6b | "so you can check how each number was calculated:" | Cut (closer): TEAM A's total selected; formula bar "=SUM(Q1:Q4)"; its four cells outlined teal one by one; the mascot holds up the pencil, a tick; slow linear push to 1.1 | beat |
| 12 | 6c | "if our total skipped a quarter, its formula shows it." | Cut: TEAM B's total selected; formula bar "=SUM(Q1:Q3)"; Q1-Q3 lit teal, Q4 dark; amber stamp "SKIPPED Q4!" with the pencil's circle round Q4; small line "OUR EXAMPLE" | beat |
| 13 | 7a | "Claude's edits are outlined as they land, so you see them;" | Cut: the robot's cursor fills a new column "START DATE" cell by cell; each new cell gets a teal outline as it lands; label "EACH EDIT OUTLINED" | beat |
| 14 | 7b | "when it finishes, a card can undo just those edits," | Cut: a card "CLAUDE UPDATED THE SHEET" with an "UNDO" button; the mascot taps UNDO; the new column cross-fades away (0.7 s) while the rest of the grid stays; label "ONLY THOSE EDITS" | beat |
| 15 | 7c | "but only briefly." | Cut: the card again, closer, its timer ring draining; label in two lines "IT GOES A FEW SECONDS AFTER YOU'RE BACK" / "OR WHEN YOU EDIT A CELL" (claims.md row 17) | beat |
| 16 | 8a | "So, what we learned:" | Cut: the mascot and the robot side by side; "WHAT WE LEARNED" card eases in | payoff |
| 17 | 8b | "pasted, our three totals hid their math;" | Mini panel "BEFORE · PASTED": the grey grid and the meter at 3 (same state as shot 5, lesson L38); one shared label "TOTALS WITH NO FORMULA · OUR EXAMPLE" at full size | payoff |
| 18 | 8c | "in the paid-plan beta, they're formulas you can check." | Beside it, mini panel "NOW · CLAUDE SHEETS BETA": the grid with "fx" tags on the totals, the formula bar "=SUM(Q1:Q4)" lit, the meter's teal tick "ALL 3 HAVE FORMULAS" (small "OUR EXAMPLE") (same state as shot 11); then the takeaway card: "PASTED: OUR 3 TOTALS, NO FORMULAS" / amber "PAID-PLAN BETA: FORMULAS YOU CAN CHECK" (stays into "Want more?") | payoff |
| 19 | 9 | "Want more? Subscribe, and comment what we should explain next." | Red Subscribe button and a comment button; the mascot (pencil) waves; nothing under them (lesson L24) | close |

Planned as 20 shots (0-19): lines 1, 3-8 each get two or three shots so no shot passes 5 s (lesson L1). Shot times: `film/film.js` TS table (from the measured pauses of `film/vo.wav`).
