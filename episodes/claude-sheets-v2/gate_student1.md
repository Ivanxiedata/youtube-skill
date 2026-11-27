> Record of a content-gate round (verbatim, before the claim check). Lines quoted here predate claims.md's fixes: "your math teacher's rule" is now "a math teacher's rule", "so mistakes show!" is now "so mistakes can show!", "they're formulas you can check" is now "they can be formulas you check" (claims.md rows 3, 4, 16).

# Student notes

## Main idea
In the Claude Sheets paid-plan beta, the totals are live formulas you can inspect, so you can check Claude's numbers by looking at how they were calculated instead of redoing the math, unlike pasted text totals.

## Explained to a friend
1. Showing work. Like a teacher making you show your steps, a formula in a cell shows how a number was built. In the video, a homework page with only answers gets steps written under each line, and the wrong step gets circled.
2. Before versus now. Before, the hiring budget from Claude's chat was pasted into another tool as plain text. The three TOTAL cells were just text with no formula, so checking meant redoing the sums by hand, and Claude couldn't see my edits. Now the sheet stays inside Claude, we both edit the same cells, and the three totals keep their formulas (the "fx" tags).
3. Catching a mistake. Click Team A's total and the bar shows =SUM(Q1:Q4), with four cells highlighted. If Team B's total were =SUM(Q1:Q3), you'd see it skipped Q4.
4. Undo. Claude's edits get outlined as they land (a new Start Date column), and an Undo card removes just those edits. It disappears after a few seconds or when you edit a cell.

## Unclear / on faith / scroll-away
- "Claude Sheets, twenty twenty-six beta": I can't tell what it is, whether it's a real product, or what "paid-plan" includes (which plans?). I took it on faith.
- "You think checking A I numbers will cost you a redo": the opening is abstract. I might scroll away here.
- "Your math teacher's rule... show your work": fine, but it's a slow detour before the example.
- "Claude had no live access to your edits": taken on faith. It doesn't say why that matters for the totals.
- "Three totals, just text": I'm not sure why pasting loses the formulas. Is that always true? It's not explained.
- The meter ("3" filling, then emptying): it's unclear what it measures. "Totals with no work shown", I think.
- Numbers: "3" totals, "Q1 to Q4", "60s". No actual dollar figures are shown, so the budget feels abstract.
- "If our total skipped a quarter": this is shown as a hypothetical. The video doesn't say Claude actually made the error, or how likely that is.
- "Briefly" and the undo timing: "a few seconds after you're back" is vague. "Back" from where?
- "fx": I don't know the label unless I use spreadsheets. The video does say "fx = formula".
- Why formulas are trustworthy at all: I still have to read the formula to catch an error. That's checking, but it's not automatic.
- The undo section may be a scroll-away, since it's tangential to the checking idea.

## Answers Q1-Q3
Q1. The totals stay as formulas in the cells. Click a total and you see which cells it adds, for example =SUM(Q1:Q4), so you read it rather than recompute it. The pasted totals were only text, so the only check was redoing the math yourself.

Q2. A pasted total is just a number, so a wrong one looks the same as a right one. A formula shows its range, so if it said =SUM(Q1:Q3) you'd see Q4 was left out, like a wrong step circled in a worked answer.

Q3. After the first answer you don't paste it into another tool. The sheet stays in Claude and you both edit the same cells, with formulas intact. Claude's edits are outlined, and you can undo just those for a short time.
