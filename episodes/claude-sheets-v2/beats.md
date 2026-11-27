# Beats: claude-sheets-v2 (workflow step 3)

Written 2026-11-27 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Claude Sheets Beta (2026): Formulas That Show Their Work"** + thumbnail **"LEARN CLAUDE SHEETS IN 60 SECONDS"**. The hook sells the viewer's moment (checking an AI's math without redoing it: formulas show how);
the tech (a spreadsheet inside Claude, the same cells, formulas that stay in the cells, outlined edits, a card's undo) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. The renderer times every cut from the real `vo_lines.json` and the measured pauses; the film ends at 60.0 s at most.

**The story everyone knows (lesson L3, gate G13): the math teacher's "show your work"** (`research.md` rows S1-S5). Many math teachers ask students to show their work, because the work shows where a mistake came from (S2, S3), such as a skipped step (S4).
The mascot is the teacher. Before: our pasted totals are like homework with the answers alone (the picture of our pasted table, not a claim about what Claude's chat can write); checking one means doing the sum again. Now: Claude's formulas sit in the cells like the shown steps; you check each formula, and our skipped quarter shows like a skipped step.
Where it stops (`research.md`): shown work lets you check, it doesn't make the number right; and you and Claude keep editing the same cells, while a teacher only grades.

The flow the owner chose (lesson L25): **one counted example, our hiring budget by team and quarter** (the maker's own example prompt, `research.md` row 10): **3 teams x 4 quarters, with 3 team totals** (ours), from the before to the close;
a **meter "TOTALS WITH NO WORK SHOWN · OUR EXAMPLE"** (0 to 3: the three team totals, the numbers a formula calculates; the 12 quarter cells are typed inputs) that fills to 3 in BEFORE (the pasted budget) and, in NOW, empties one box as each total's "fx" tag lands, then a teal tick "ALL 3 SHOW THEIR WORK" (same unit both sides, lesson L34; the meter's state is tied to the fx tags' timing, never to the tab);
**the how on one sheet that grows** (the same 3 x 4 grid: pasted plain numbers -> the sheet in Claude -> formulas in the cells -> one total's formula lit -> a skipped quarter caught -> Claude's outlined edit -> its Undo card) with a highlight on what the voice names;
the proof is **Anthropic's own words** (Claude Help Center: "Formulas stay in the cells, so you can see and check how each number was calculated", row 4); Anthropic gives no number, so no number is claimed beyond our example.

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33): every draft had a digit, "you", a stakes word (cost, stop, before, never) and a curiosity word (but, actually, how, why) before scoring.
Every one opens with the topic's name (lesson L14), in one sentence with the hook (lesson L16). Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 72 STRONG (formula: myth correction, "you think X, but Y")
"Claude Sheets, 2026 beta spreadsheet: you think checking AI math will cost you a redo, but actually formulas show how."
(Gate round 1 should-fix S1: "spreadsheet" added so the product's kind is said in line 1; then "numbers" -> "math" and "its" cut so line 1 stays under 7.5 s (re-timed alone: 7.0 s); re-scored alone with `--hook`: 72 STRONG.)
```
SPECIFICITY 63 · ADDRESS 96 · STAKES 62 (cost) · CURIOSITY 75 (but, actually, how) · BREVITY 100 · VERDICT 72 STRONG
```
3-second test: someone who knows no AI tech hears "in Claude Sheets, checking an AI's numbers doesn't mean redoing them: its formulas show how they were made". The topic is the first words; no architecture word; the condition "beta" and its year are in the line (lesson L26).
It corrects a belief worded as the step, checking, not trusting (lesson L89), and ends on the outcome, not "but how?" (L31). Source: "Formulas stay in the cells, so you can see and check how each number was calculated" (row 4).
Panels: title card; then the teacher (mascot) at a desk over a homework page with only answers, a thought bubble "REDO THE MATH?"; then one sheet cell that opens to show its formula, the cells it adds lit in teal.

### 2 (runner-up) 73 STRONG
"Claude Sheets, 2026 beta: a math teacher said show your work, but before, AI numbers cost you a redo." (scored with "your"; claims.md #3 rules "a math teacher", since the source says "many math teachers")
Why 1 over 2: 2 names the story but not the outcome (the viewer hears only the pain, and "AI numbers" in general); 1 says what the viewer gets, and line 2 brings the story in at once.

### All hooks scored (`hookscore.py`, each alone with `--hook`)
| Score | Hook | Note |
|---|---|---|
| 72 | **Claude Sheets, 2026 beta spreadsheet: you think checking AI math will cost you a redo, but actually formulas show how.** | final (gate round 1 + round 2 timing); line 1 voiced alone 7.0 s |
| 73 | Claude Sheets, 2026 beta: a math teacher said show your work, but before, AI numbers cost you a redo. | runner-up; no outcome (scored with "your", ruled narrower: claims.md #3) |
| 72 | **Claude Sheets, 2026 beta spreadsheet: you think checking AI math will cost you a redo, but actually formulas show how.** | chosen (gate round 1: + "spreadsheet"; 72 STRONG) |
| 72 | Claude Sheets, 2026 beta: you think checking AI numbers will cost you a redo, but actually its formulas show how they were made. | 3 words longer, same score |
| 70 | Claude Sheets, 2026 beta: you think checking AI numbers will cost you a redo, but actually its formulas show how, like homework. | "like homework" unclear in one breath |
| 70 | Claude Sheets, 2026 beta: you think checking AI math will cost you a redo, but its formulas show the work, how your teacher asked. | 23 words |
| 69 | Claude Sheets, 2026 beta: you think checking AI numbers will cost you a redo, but actually its formulas show the work. | curiosity lower |
| 69 | Claude Sheets, 2026 beta: you think checking AI math will cost you a redo, but actually its formulas show their work. | same |
| 69 | Claude Sheets, 2026 beta: remember "show your work"? You stop redoing AI math, because its formulas show how. | "stop" promises more than "can check" |
| 61 | Claude Sheets, 2026 beta: why redo AI numbers before you trust them? Actually, its formulas show their work. | "trust" (L89) |
| 48 | Claude Sheets, 2026 beta: you never had to redo the math, actually, when the formulas show their work. | "never"; false for the before |

## The parts, in one line each
- **Hook:** title card; the teacher over a homework page with only answers, "REDO THE MATH?"; a cell opens to show its formula.
- **Turn:** "Here's how: a math teacher's rule... show your work, so mistakes can show!" Then it does it, on our budget.
- **Before, the pain as a scene:** in our example, you pasted Claude's chat budget into another tool as plain text: three totals, no work shown (meter fills to 3); checking meant redoing the math; Claude, outside that tool, couldn't follow your edits.
- **Now, the same scene:** in the paid-plan beta it stays in Claude; you both edit the same cells; its formulas stay in the cells, like shown work (meter empties as each total's fx tag lands).
- **How, and why it helps you:** you can check how each number was calculated; our total that skipped a quarter shows it in its formula; Claude's edits are outlined as they land, and a card can undo just those, briefly.
- **Close:** "So, what we learned:" BEFORE our 3 pasted totals, no work shown vs NOW totals that can be formulas you check, side by side; takeaway card; the ask (subscribe + comment).

## Cast and places (colours from `docs/brand.md`, lesson L88)
- **You = the mascot** (round cream face, coral hoodie) as the **math teacher**: an amber pencil behind his ear (the story's costume); he holds it to check and circles a step.
- **Claude = a robot with a teal screen head** (visibly AI, brand casting), label "CLAUDE"; it appears in the before (behind a wall) and in NOW (a teal cursor in the same sheet). It never hands in homework: the homework page is the story's picture only.
- **The homework page** (the story): a cream sheet with three problem lines. Answers-only version: each line a grey squiggle then "= ▢" (a box, no digits). Shown-work version: each line with grey step lines under it; one step circled in amber, label "THE WRONG STEP SHOWS".
- **The chalkboard** (the story): dark green-grey board, chalk words "SHOW YOUR WORK!" in off-white, the teacher pointing.
- **The budget grid** (our example): a 3 x 4 grid, rows "TEAM A", "TEAM B", "TEAM C", columns "Q1" to "Q4", and a "TOTAL" column. The cells show grey bars, never digits (lesson L71).
  BEFORE: inside a plain grey window "OTHER TOOL", the cells flat grey. NOW: inside a window "CLAUDE SHEETS · BETA", each of the three TOTAL cells gets a small teal "fx" tag.
- **The formula bar** over the grid: BEFORE "NO FORMULA"; NOW, for TEAM A's total "=SUM(Q1:Q4)" with its four cells outlined teal; for TEAM B's total "=SUM(Q1:Q3)" with Q1-Q3 lit and Q4 dark, an amber stamp "SKIPPED Q4!".
- **The meter "TOTALS WITH NO WORK SHOWN"** with "OUR EXAMPLE" under its label, lower part of the frame (under the picture, above y 1536) in every BEFORE and NOW shot: 3 boxes that fill one by one and a counter "3" in amber in BEFORE; in NOW the boxes empty one per fx tag, then a teal tick "ALL 3 SHOW THEIR WORK". Labels at least 44 px (lesson L48).
- **The Undo card:** "CLAUDE'S EDITS" with an "UNDO" button and a small timer ring; the new cells Claude added carry a teal outline as they land.
- Every frame: corner tag "CLAUDE SHEETS · 60s" top-left inside the safe area (x >= 60, y >= 100, 44 px or more; lesson L79). BEFORE tabs amber, NOW tabs teal, red only for the sticker and Subscribe (L88).

## Shots
Times come from `vo_lines.json` at build. Shot 0 cuts on the measured pause after "Claude Sheets," inside line 1 (lessons L16, L36); every voice line over about 4 s gets two or three shots (lesson L1).

| # | Line | Spoken line (part) | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 1a | "Claude Sheets," | Full-screen title card: "LEARN" small, "CLAUDE SHEETS" huge in amber, "BETA · 2026" under it, red tilted sticker "IN 60 SECONDS"; corner tag. Holds until the measured pause after "Sheets" | hook |
| 1 | 1b | "2026 beta spreadsheet: you think checking AI math will cost you a redo," | The story: the teacher (mascot, pencil) at a desk over a homework page with only answers: three lines, each a grey squiggle then "= ▢"; a tag on the page "ANSWERS ONLY" with a small line "LIKE OUR PASTED TABLE" (claims.md row 18); thought bubble "REDO THE MATH?"; small tag "BETA · 2026"; slow linear push to 1.1 | hook |
| 2 | 1c | "but actually formulas show how." | Cut: one big sheet cell; its formula opens above it "=SUM(...)" and the cells it adds light up teal one after another; label "THE FORMULA SHOWS HOW" | hook |
| 3 | 2a | "Here's how: a math teacher's rule..." | Cut: a chalkboard; chalk words "SHOW YOUR WORK!" write on; the teacher points at it; slow push | turn |
| 4 | 2b | "show your work, so mistakes can show!" | Cut: the homework page, now with steps under each line; the teacher's amber pencil circles one wrong step; label "THE WRONG STEP SHOWS" | turn |
| 5 | 3a | "Before, in our example, you pasted Claude's chat budget into another tool" | Cut: amber tab "BEFORE" and "OUR EXAMPLE: HIRING BUDGET"; left, a chat bubble from the robot holding a small grid of plain text; right, a grey window "OTHER TOOL"; a "PASTE" arrow between them; the grid (TEAM A-C, Q1-Q4, TOTAL) appears in the other window; the meter enters under the picture, empty | beat |
| 6 | 3b | "as plain text: three totals, no work shown." | Cut: the "OTHER TOOL" grid, larger: flat grey cells, the three TOTAL cells highlighted, tagged "PLAIN TEXT"; formula bar "NO FORMULA"; the meter fills box by box to "3" (amber) as each total is highlighted | beat |
| 7 | 4a | "Checking meant redoing the math;" | Cut: the teacher at a notepad, pencil moving, scribbles of a sum; TEAM B's total cell highlighted amber; meter stays 3 | beat |
| 8 | 4b | "Claude, outside that tool, couldn't follow your edits." | Cut: the mascot types into a cell of "OTHER TOOL"; the robot stands behind a wall, outside the window, a "?" on its screen face; label "OUTSIDE: CAN'T FOLLOW YOUR EDITS"; meter 3 | beat |
| 9 | 5a | "Now, in the paid-plan beta, it stays in Claude;" | Cut: teal tab "NOW"; one window "CLAUDE SHEETS · BETA" holding the same 3 x 4 grid; small line "PAID PLANS"; meter still 3 (no totals have formulas yet) | beat |
| 10 | 5b | "you both edit the same cells." | Cut: the mascot's coral cursor types in one cell, then the robot's teal cursor types in the next cell of the same grid (one after the other); label "SAME CELLS"; meter 3 | beat |
| 11 | 6a | "Its formulas stay in the cells, like shown work:" | Cut: each TOTAL cell gets a teal "fx" tag one after another; label "fx = FORMULA"; the meter empties one box per tag at the same moment; after the third, a teal tick "ALL 3 SHOW THEIR WORK" with "OUR EXAMPLE" under it | beat |
| 12 | 6b | "you can check how each number was calculated." | Cut (closer): TEAM A's total selected; formula bar "=SUM(Q1:Q4)" with a small label "=SUM: ADDS THESE CELLS" (gate round 2 S1); its four cells outlined teal one by one; the teacher holds up the pencil, a tick; slow linear push to 1.1 | beat |
| 13 | 7 | "If our total skipped a quarter, its formula shows it!" | Cut: TEAM B's total selected; formula bar "=SUM(Q1:Q3)"; Q1-Q3 lit teal, Q4 dark; amber stamp "SKIPPED Q4!" with the pencil's circle round Q4; small line "OUR EXAMPLE"; beside it a small panel "PASTED": the same total as a plain grey number, no formula, labelled "LOOKS FINE"; under it the homework page's line with its skipped step circled amber (gate round 1 M2: the without-picture) | beat |
| 14 | 8a | "Claude's edits are outlined as they land;" | Cut: the robot's cursor fills a new column "START DATE" cell by cell; each new cell gets a teal outline as it lands; label "EACH EDIT OUTLINED" | beat |
| 15 | 8b | "a card can undo just those," | Cut: a card "CLAUDE'S EDITS" with an "UNDO" button; the mascot taps UNDO; the new column cross-fades away (0.7 s) while the rest of the grid stays; label "ONLY THOSE EDITS" | beat |
| 16 | 8c | "briefly." | Cut: the card again, closer, its timer ring draining; label in two lines "IT GOES A FEW SECONDS AFTER YOU'RE BACK IN THE SHEET" / "OR WHEN YOU EDIT A CELL" | beat |
| 17 | 9a | "So, what we learned:" | Cut: the mascot and the robot side by side; "WHAT WE LEARNED" card eases in | payoff |
| 18 | 9b | "our three pasted totals showed no work;" | Mini panel "BEFORE · PASTED": the grey grid and the meter at 3 (same state as shot 6, lesson L38); one shared label "TOTALS WITH NO WORK SHOWN · OUR EXAMPLE" at full size | payoff |
| 19 | 9c | "in the paid-plan beta, they can be formulas you check." | Beside it, mini panel "NOW · CLAUDE SHEETS BETA": the grid with "fx" tags on the totals, the formula bar "=SUM(Q1:Q4)" lit, the teal tick "ALL 3 SHOW THEIR WORK" (same state as shot 12); then the takeaway card: "PASTED: OUR 3 TOTALS, NO WORK SHOWN" / amber "PAID-PLAN BETA: TOTALS CAN BE FORMULAS YOU CHECK" (stays into "Want more?") | payoff |
| 20 | 10 | "Want more? Subscribe, and comment what we should explain next." | Red Subscribe button and a comment button "COMMENT: WHAT NEXT?"; the mascot (pencil) waves; nothing under them (lesson L24) | close |

Planned as 21 shots (0-20) so no shot passes 5 s (lesson L1). Shot times: `film/film.js` TS table (from the measured pauses of `film/vo.wav`).
