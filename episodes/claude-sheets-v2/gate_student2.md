> Record of a content-gate round (verbatim, before the claim check). Lines quoted here predate claims.md's fixes: "your math teacher's rule" is now "a math teacher's rule", "so mistakes show!" is now "so mistakes can show!", "they're formulas you can check" is now "they can be formulas you check" (claims.md rows 3, 4, 16).

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
