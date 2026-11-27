gate: fail (1 must-fix, 1 should-fix)

> Record of a content-gate round (verbatim, before the claim check). Lines quoted here predate claims.md's fixes: "your math teacher's rule" is now "a math teacher's rule", "so mistakes show!" is now "so mistakes can show!", "they're formulas you can check" is now "they can be formulas you check" (claims.md rows 3, 4, 16).


Round 2 (re-gate), critic. G0 passes: `viewer.md` holds only spoken lines and screen descriptions, and its Spoken section matches `film/script.txt` line for line (diffed).
Word count (film/script.txt, "A I" = 2): 23 + 12 + 20 + 13 + 15 + 17 + 10 + 14 + 20 + 10 = **154** (budget about 150, cap 157.5). After every fix below: **154** (both fixes add no spoken words).

## Student notes (verbatim, from gate_student2.md)

# Student notes: Claude Sheets video

## Main idea
In Claude Sheets (a paid-plan beta), Claude's totals are live formulas you can open and inspect, so you can check them without redoing the math, unlike plain-text totals pasted into another tool.

## Explained to a friend
1. Pasted totals hide the work. In the hiring budget example, Claude's chat gave a budget grid (Teams A, B, C, quarters Q1-Q4, a total each). You pasted it into another tool as plain text. The three totals were just numbers with no formula, so to trust them you had to redo the sums yourself.
2. Claude Sheets keeps formulas in the cells. The budget stays inside Claude, and you and Claude edit the same cells. The three totals are formulas, like a teacher's "show your work". Click Team A's total and you see =SUM(Q1:Q4), with the four cells it adds highlighted.
3. Shown work catches mistakes. Team B's total was =SUM(Q1:Q3), which skips Q4. You see that at a glance in the formula. A pasted plain number would just "look fine".
4. Edits are outlined and can be undone. Claude's new cells (a START DATE column) get outlines as they land. A card lets you undo just those edits, but only for a few seconds after you're back in the sheet, or until you edit a cell.

## Unclear / on faith / scroll-away
- "Claude Sheets, twenty twenty-six beta spreadsheet" (opening): I don't know what it is or who makes it beyond "Claude". The line "you think checking A I numbers will cost you a redo" is a bit tangled.
- "paid-plan beta": which plan? What does it cost? Taken on faith.
- "Claude, outside that tool, couldn't follow your edits": I don't see why it matters. Does it change what I do? Unclear.
- "you both edit the same cells": taken on faith, no sense of how or when it helps.
- "If our total skipped a quarter, its formula shows it!": I'm told the pasted total hides it, but not why Claude would skip a quarter. It also isn't clear if the formula is always right, or only readable. Reading =SUM(Q1:Q3) assumes I know spreadsheet notation. "fx" tag and "=SUM(Q1:Q4)" are unexplained for a non-spreadsheet person.
- "a card can undo just those, briefly": the timing is only said on screen ("a few seconds"). I'd have to guess how long.
- The meter "3" and "TOTALS WITH NO WORK SHOWN" are a bit abstract. The meter emptying as the fx tags land is a nice touch but easy to miss.
- Scroll-away moments: the opening title and teacher-desk setup (a bit slow before the point); the undo/timer part (lines 15-17), which feels like a side feature, not the main idea; the closing "Subscribe" line.

## Answers Q1-Q3
Q1. The totals in Claude Sheets are formulas that stay in the cells, so I can click one and see exactly which cells it adds, instead of recalculating. The pasted ones were plain text with no formula, so the only way to check was to redo the sums myself.

Q2. A shown formula exposes the steps. Team B's total was =SUM(Q1:Q3), so the missing Q4 is visible right in the formula. A pasted total is just a number that "looks fine", so the skipped quarter stays hidden.

Q3. After its first answer, the budget stays inside Claude Sheets instead of being pasted elsewhere. You and Claude edit the same cells, so Claude can follow your edits. Its edits are outlined, and you can undo just them for a short time.

## Round-1 fails: status

| Round 1 | Status | Evidence |
|---|---|---|
| M1 (before's "no" claims had no reason; G3, G8, L64) | **fixed** | Line 3 "into another tool as plain text: three totals, no work shown." gives the reason (pasted as plain text, so it carries no formula); line 4 "Claude, outside that tool, couldn't follow your edits." gives it for the second. Student 2 repeats both without marking them as faith ("pasted it into another tool as plain text... just numbers with no formula"; Q3 "so Claude can follow your edits"). Its "I don't see why it matters" is a request for more benefit than the sources give (see G3). |
| M2 (Q2's without-picture missing from viewer.md; G5, L70, L74) | **fixed** | Shot 14 now has the "PASTED" panel "LOOKS FINE" and the circled homework line. Student 2's Q2: "A pasted total is just a number that 'looks fine'". `lesson.md` Q2 Picture and L61 entry match `viewer.md`. |
| M3 ("UPDATED" on the card for "edit"; G9, L76) | **fixed** | Shot 16's card reads "CLAUDE'S EDITS". Grep of `viewer.md` for "chang"/"updat": none. Shot 9 "CAN'T FOLLOW YOUR EDITS" and shot 17 "WHEN YOU EDIT A CELL" keep the one word. |
| S1 (no kind word when the product is first named; G9, L67) | **fixed** | Line 1 "Claude Sheets, twenty twenty-six beta spreadsheet:". "2026" stays said, so "BETA · 2026" on screen is fine (L71). Student 2's "who makes it beyond 'Claude'" is a wish, not a fail. |
| S2 ("after you're back" had no place; G9) | **fixed** | Shot 17 reads "...AFTER YOU'RE BACK IN THE SHEET" / "OR WHEN YOU EDIT A CELL". Student 2 repeats it correctly. |

## G1-G13

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass (run in full): "When an AI shows its work as formulas in the cells, checking its numbers means checking each step, not redoing the math." 21 words. It is a belief change, not a headline or a mechanism. No who, when or count. "each" is row 4's word ("each number"). No superlative. | |
| G2 | Deepest true idea | pass (run in full): the deepest gap in the rows is "check, not proof" (row 4 "see and check", where the analogy stops (1)). The idea's frame ("checking ... each step") and every line ("you can check") already hold it. Nothing deeper fits 60 s. | |
| G3 | The student got it | **must-fix** (run in full; every key part re-ticked against the current script). Main idea matches (formulas you can inspect, so you can check without redoing the math). Q1, Q2 and Q3 are each answered in full. Two key parts have no spoken line, though. Q1's key "like answers alone" is never spoken (line 3 says "as plain text: three totals, no work shown"). Q3's key "the spreadsheet stays in Claude" is no longer spoken: round 1's change made line 5 "it stays in Claude". The student's "you both edit the same cells: taken on faith, no sense of how or when it helps" comes after its own Q3 answer repeats the spoken reason ("so Claude can follow your edits"). It asks for a benefit beyond rows 3, 7 and 8, so the wish rule applies and this is not a fail. | M1 |
| G4 | Questions worth asking | pass: why / how / what changes; each asks for its whole key | |
| G5 | Shown, not asserted | pass: Q1 "NO FORMULA" vs "=SUM(Q1:Q4)" with cells lit; Q2 "=SUM(Q1:Q3)" "SKIPPED Q4!" beside "PASTED · LOOKS FINE" and the circled homework step; Q3 robot behind the wall vs both cursors in "SAME CELLS", and only the new column undone | |
| G6 | Why it matters | pass: "you can check how each number was calculated" (row 4), "you both edit the same cells" (row 3), "Claude, outside that tool, couldn't follow your edits" (row 7); every part of `lesson.md`'s reason is spoken | |
| G7 | Misconception | pass: "you think checking A I numbers will cost you a redo, but actually its formulas show how." It is worded as the step (checking), not as trusting (L89). | |
| G8 | No faith steps | pass: "show your work, so mistakes show!" gives its reason. Each "no"/"couldn't" in the before has its reason in the same line ("as plain text", "outside that tool", L64). "Its formulas stay in the cells" is the reason for "you can check". | |
| G9 | Every line serves | **should-fix** (new, 0 words): "=SUM(Q1:Q4)" / "=SUM(Q1:Q3)" are on screen with only "fx = FORMULA" to name them. The student: "Reading =SUM(Q1:Q3) assumes I know spreadsheet notation... '=SUM(Q1:Q4)' [is] unexplained for a non-spreadsheet person". The student did read it right ("see exactly which cells it adds"), so L67 is met by the label and the lit cells, and this stays a should-fix. Scroll-away moments in the body: one (undo, lines 15-17, which serves Q3). The opening and the subscribe ask are exempt. Every line serves a question. Changed lines: "spreadsheet" (line 1), "plain text" (line 3 = shot 7 tag "PLAIN TEXT"), "outside that tool" (line 4 = shot 9 label), "it" (line 5, read by the student as the budget): one word per thing, no new term left unexplained. | S1 |
| G10 | True main idea | pass (run in full). The takeaway "our three pasted totals showed no work; in the paid-plan beta, they're formulas you can check." keeps every condition: "our three pasted totals" (our example, the before, numbers a formula calculates), "paid-plan beta", "formulas", "you can check" (not "right"). It uses the same unit as the meter it closes on (totals, "ALL 3 SHOW THEIR WORK"). It counts the 3 totals, the cells the formulas show working (L84). It is as long as the now line it restates, and the condition line 5 gained ("paid-plan") is in it (L66). The main idea's "an AI" is conditional ("when ... formulas in the cells") and claims no more than row 4. | |
| G11 | Carry-over limits | pass: "you can check", never "right" or "trust". The student itself asks whether the formula is "always right, or only readable", which is the limit the script keeps. | |
| G12 | Lessons | **must-fix**: L74 (repeated claude-sheets 2026-11-26: "Q3's key kept 'the sheet' after a should-fix changed it") and L60 broken again. `lesson.md` was not re-ticked after round 1's line changes: Q3's key keeps "the spreadsheet stays in Claude", Q1's key "like answers alone" is unspoken, and Q3's Picture quotes a label "BRIEFLY" that `viewer.md` shot 17 doesn't have. The Lesson check and Misconception entries, re-quoted and grepped against the current script, all match: L58, L59, L60's quoted lines, L61, L62, L63, L64 ("as plain text", "outside that tool"), L65, L66, L67 ("twenty twenty-six beta spreadsheet", "fx = FORMULA", "ALL 3 SHOW THEIR WORK"), L68, L69, L71 ("2026" said), L72, L76 ("CLAUDE'S EDITS"), L77, L78 n/a, L81, L82, L84, L89. The keys and one Picture line are the stale part. | M1 |
| G13 | A story everyone knows | pass: the math teacher's "show your work" (S1-S4). The mechanism matches: a formula is the written step, and the skipped quarter is the skipped step (S4). The story carries the before (shot 2, the answers-only page; shot 14's circled homework line) and the now ("like shown work", line 6). "Our example" lives inside it. | |

## Fixes

### M1 (must-fix): `lesson.md`'s keys and one Picture line were not re-ticked after round 1's changes (G3, G12 L60, L74)
- **What:** must-fix, a repeat of L74 and L60. In `lesson.md`:
  - Q1's key holds "like answers alone", which is never spoken.
  - Q3's key holds "the spreadsheet stays in Claude", but line 5 now says "it stays in Claude".
  - Q3's Picture quotes a label ("BRIEFLY") that `viewer.md` shot 17 doesn't show: its label is "IT GOES A FEW SECONDS AFTER YOU'RE BACK IN THE SHEET" / "OR WHEN YOU EDIT A CELL".
- **Fix:** 0 spoken words, `lesson.md` only (the script and `viewer.md` are unchanged, so the next student sees the same file).
  - Q1's key: "Our totals were pasted as plain text, no work shown, like answers alone, so checking meant redoing the math;" becomes "Our totals were pasted into another tool as plain text, no work shown, so checking meant redoing the math;".
  - Q3's key: "the spreadsheet stays in Claude" becomes "it stays in Claude".
  - Q3's Picture: "the card's ring drains (\"BRIEFLY\")" becomes "the card's ring drains (\"IT GOES A FEW SECONDS AFTER YOU'RE BACK IN THE SHEET\" / \"OR WHEN YOU EDIT A CELL\")".
  - Then grep every key part and every quoted Picture label against `film/script.txt` and `viewer.md`.
  - If the writer would rather keep the story's before in words: in line 3, "three totals, no work shown." (5 words) becomes "three totals, answers alone, no work shown." (7 words, +2, total 156, inside the cap). Q1's key then keeps "answers alone".
- **Rule:** none new (L74 repeated: after any line change, even a should-fix, re-tick every answer-key part and every Picture label in `lesson.md` against the current script and `viewer.md`).

### S1 (should-fix): the formula on screen is named but not read (G9)
- **What:** should-fix. Shots 13 and 14 show "=SUM(Q1:Q4)" and "=SUM(Q1:Q3)" with only "fx = FORMULA" to name them. The student called the notation "unexplained for a non-spreadsheet person", though it read it right.
- **Fix:** 0 spoken words, on screen only. Under shot 13's formula bar, add the small label "=SUM: ADDS THESE CELLS" while the four cells outline. Shot 14 keeps "SKIPPED Q4!". Write it into `viewer.md` shot 13 (the spoken lines are unchanged), and add the label to `lesson.md` Q1's Picture.
- **Rule:** The first time a formula appears on screen, a short label says in plain words what it does.

## Budget
154 now; M1 0 (or +2 with the optional line 3 wording), S1 0: **154** (at most 156; cap 157.5).
