## Student (round 1)

### 1. Main idea
In the new Claude Sheets beta, Claude's numbers are real formulas in the cells, so you can see how each one was worked out and trust it without redoing the math.

### 2. What I learned

**Formulas show how a number was made.** A cell can hold a formula like =SUM(...), and the cells it adds light up. So you see where the number came from instead of just trusting it.

**The old way: paste a chat table.** The video's example was a hiring budget, three teams by four quarters. Claude gave a table in chat, and you pasted it into another tool. You got twelve plain numbers with no formulas. To check them you had to redo the math yourself, and Claude couldn't see what you changed in the other tool.

**The new way: Claude Sheets (paid-plan beta).** The sheet stays inside Claude. You and Claude edit the same cells. Claude writes formulas that stay in the cells (little "fx" tags). Click Team A's total and you see =SUM(Q1:Q4), with the four cells outlined. Team B's total showed =SUM(Q1:Q3), so it skipped Q4. That's the kind of mistake you can now spot.

**Tracking and undoing edits.** Each Claude edit gets outlined as it lands (the example was a new "START DATE" column). A card "Claude updated the sheet" has an Undo button that removes just that change, but only for a few seconds.

### 3. What I can't explain, took on faith, or would scroll away from
- "twenty twenty-six beta: you think A I numbers cost a redo before you trust them, but formulas show how." The opening is a dense, awkward sentence. I had to reread it in my head to parse it.
- "The meter" ("NUMBERS WITH NO FORMULA", fills to 12, then "NONE"). It is never explained in speech. I only half got that it counts cells without formulas. It is on screen only.
- "fx" tag: never explained what it means. I guessed it marks a formula cell.
- "Paid-plan beta": which plan? Is it available to me? Not said. I took it on faith.
- "Claude couldn't follow your changes": why not? The wall picture shows it but nothing says why. Taken on faith.
- "Claude writes formulas that stay in the cells": why do the formulas stay here but not when pasted? Not explained (I guess paste drops them).
- "if our total skipped a quarter, you'd see it": you'd see it only if you click the cell and read the formula. The line doesn't say that, and a plain-number viewer might not know how to read =SUM(Q1:Q3).
- Does it say whether Claude's formulas are actually correct? Only that you can check them. Whether Claude gets it right is left open.
- "A few seconds" for undo: how many? What happens after? "Then it goes" is on screen only. What if I notice later? Not answered.
- Numbers in the hiring budget are never shown (grey bars only), so I can't picture what the data was.
- I'd scroll away at the recap ("So, what we learned..."), which repeats what I just heard, and at "Want more? Subscribe...".
- "Each Claude edit is outlined as it lands; then a card can undo just that change": the "then" is confusing. Is the card a separate step from the outline?
- The "twelve" count: 3 teams x 4 quarters = 12, but the Total column would add more cells. Minor confusion.

### Answers to the 3 questions
**Q1.** In Claude Sheets, Claude puts formulas in the cells, so you can click a number and see how it was calculated, for example =SUM(Q1:Q4) with its cells outlined. The pasted chat table was just twelve plain numbers with no formulas, so the only way to check was to redo the math yourself.

**Q2.** Each Claude edit is outlined as it lands, so you can see what changed. Then a card appears with an Undo button that takes back just that change and leaves the rest of the sheet alone. It's only available for a few seconds.

**Q3.** After Claude's first answer, the sheet stays in Claude and you both edit the same cells, so Claude can follow your changes. Before, you took the table to another tool, edited it there, and Claude was outside and couldn't see your edits.
