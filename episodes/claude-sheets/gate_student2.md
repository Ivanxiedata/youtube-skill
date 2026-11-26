## Student (round 2)

### 1. Main idea
In the Claude Sheets beta, Claude's numbers are real formulas in the cells, so you can click a total and see how it was calculated instead of redoing the math.

### 2. What I learned

**Pasted tables hide the math.** Before, you copied Claude's chat table (just text) into another tool. In the hiring budget example (three teams, four quarters), the three totals were plain numbers with no formulas. To trust one, you had to redo the sum yourself. Claude also couldn't see your edits in that other tool.

**Claude Sheets keeps the sheet inside Claude.** On paid plans in the beta, you and Claude edit the same cells. Claude's formulas stay in the cells, with a small "fx" tag on the totals. Click a total and the formula bar shows how it was built.

**The formula exposes mistakes.** Team A's total was =SUM(Q1:Q4), which is correct. Team B's was =SUM(Q1:Q3), so it skipped Q4. You can spot that by looking at the formula and which cells light up.

**Claude's edits are visible and undoable.** As Claude fills cells (the example was a new "START DATE" column), each new cell gets an outline. When it finishes, a card "Claude updated the sheet" with an Undo button appears. Undo removes just those edits, but only for a few seconds, then the card goes away.

### 3. What I can't explain, took on faith, or would scroll away from
- "twenty twenty-six beta" in the opening line is mumbled into the hook, and the title card is just a label with no information. I'd barely register it.
- "paid-plan beta": which paid plans? Is it available to me? Not said. The "PAID PLANS" label gives no detail.
- "Claude had no live access to your edits": why not? Claude chat can't see another tool's cells. It's stated, not explained, and I had to take it on faith.
- "the sheet stays in Claude": what is Claude Sheets, physically? A tab, a feature, a separate product? I don't know where I open it.
- "fx": I'm guessing it means "formula", but it's never said aloud.
- The meter ("TOTALS WITH NO FORMULA", going to 3, then "NONE") is a visual I had to puzzle out. The word "NONE" next to a "no formulas" label is confusing, since it reads as "no formulas" when it means "no totals lacking formulas."
- "you both edit the same cells": what happens if we both edit the same cell at once? Not covered.
- "Claude's formulas stay in the cells": does Claude always write formulas rather than typed numbers? What if it doesn't? I take on faith that it does.
- The check for Team B only works if I know to open the formula and read the range. The video doesn't say how to check, just shows it.
- "for a few seconds": how many? The label says "A FEW SECONDS, THEN IT GOES", which is vague. What if I miss the card? Can I undo another way? Not answered.
- Is the undo a card only after Claude finishes, so I can't undo mid-edit? Unclear.
- Scroll-away moments: the opening hook (lines 4 and the title card), the "Here's how, on our hiring budget" setup where cells are grey bars with no numbers, and the recap, which repeats what was just said.

### Answers to the 3 questions

**Q1.** Because in Claude Sheets the totals stay as formulas in the cells, so I can click one and see how it was calculated (like =SUM(Q1:Q4), or Team B's =SUM(Q1:Q3) that skipped Q4). A pasted chat table was just text, with plain numbers and no formulas, so the only way to check was to redo the math.

**Q2.** Claude's edits are outlined as they land, so I can watch what it changes. When it finishes, a card appears with an Undo button that removes just those edits, but only for a few seconds before the card disappears.

**Q3.** The sheet stays in Claude and we both edit the same cells, so after the first answer I keep working in that same sheet, with no pasting into another tool. Claude can see my edits and I can see and check its formulas.
