> Record of a content-gate round (verbatim, before the claim check). Lines quoted here predate claims.md's fixes: "your math teacher's rule" is now "a math teacher's rule", "so mistakes show!" is now "so mistakes can show!", "they're formulas you can check" is now "they can be formulas you check" (claims.md rows 3, 4, 16).

# Student notes

## Main idea
In Claude Sheets (a paid-plan beta), Claude's totals are live formulas in the cells, so you can see how each number was built and spot a mistake, instead of redoing the math on pasted plain numbers.

## Explained to a friend
1. Show your work. Like a teacher who wants steps, not just answers, a formula in a cell shows how the number was made. In the video's hiring budget, the totals were a formula like =SUM(Q1:Q4), which adds the four quarter cells, so you can see what went in.
2. Before, the budget was pasted from the chat into another tool as plain text. The three totals (Teams A, B, C) were just numbers with no formula, so to check one you had to redo the sum yourself. Claude was outside that tool and could not follow your edits.
3. Now, in the paid-plan beta, you and Claude edit the same cells in one window. The three totals carry formulas. Team B's total was =SUM(Q1:Q3), and the formula showed it skipped Q4. A pasted number would have just looked fine.
4. Claude's edits are outlined as they land, such as a new Start Date column. A card has an Undo button that removes just those edits. It only stays for a few seconds after you're back in the sheet, or until you edit a cell.

## Unclear / on faith / scroll-away
- "Claude Sheets, twenty twenty-six beta spreadsheet" (opening line): I don't know what it is or who offers it. It's a clumsy, jargon-heavy opening, and I might scroll away here.
- "you think checking A I math will cost you a redo, but actually formulas show how": takes a sentence to parse.
- "paid-plan beta": which plan? I'm not told. The "PAID PLANS" label doesn't say which ones.
- Why Claude could not follow edits outside the tool: taken on faith, no reason given.
- "its formula shows it" for the skipped quarter: I take on faith that you'd actually notice =SUM(Q1:Q3) among many cells. It's not shown how you'd find it without checking each one.
- Why the totals were pasted as plain text, and whether Claude Sheets always writes correct formulas: not covered. A formula could also be wrong, and the video only shows one that is visibly wrong.
- "Meter" with the number 3 and "TOTALS WITH NO WORK SHOWN": visual only. It emptied box by box, but the point is slightly confusing.
- "fx" tag: explained as "FORMULA", fine. "=SUM" explained.
- "a card can undo just those, briefly": "briefly" is vague until the timer line. I'd lose interest during the undo and timer part, since it's a side feature unrelated to the main idea.
- Ending "Want more? Subscribe": scroll-away moment.

## Answers Q1-Q3
Q1. In Claude Sheets the totals keep their formulas in the cells, so you can click one and see what it adds (for example =SUM(Q1:Q4)) and check that against the cells. The pasted totals were plain numbers with no formula, so the only way to check was to redo the math yourself.

Q2. A shown formula lets you see which cells went into the total. Team B's formula was =SUM(Q1:Q3), so Q4 was visibly left out. A pasted total is just a number that looks fine, so the skipped quarter would stay hidden.

Q3. After the first answer, you and Claude work in the same sheet and edit the same cells, instead of pasting into another tool where Claude can't see your changes. Claude's edits are outlined and can be undone for a short time.
