# Lesson: claude-sheets-v2

Main idea (one sentence, at most about 25 words: what the viewer will think differently; not the headline, not the mechanism):
When an AI shows its work as formulas in the cells, checking its numbers means checking each step, not redoing the math. (22 words)

Why it matters (to the viewer or the field, with the research.md row):
Checking an AI's number no longer means doing the sum again: in Claude Sheets the formulas stay in the cells, so you can check how each number was calculated (row 4), the way a teacher reads the shown steps (rows S2, S3); a wrong step (our total skipping a quarter) shows in its formula instead of hiding in a plain number (row S4 is the story's skipped step).
And the work stays where Claude can work on it with you: before, you moved the output to another tool, and Claude, outside that tool, couldn't follow your edits (row 7: no live access to follow progress and changes); now you both edit the same cells (row 3), Claude's edits outlined as they land, and a card can undo just those edits, briefly (rows 5, 6).

Misconception it corrects:
"Checking an AI's numbers means redoing the math yourself." Said in the hook ("you think checking A I math will cost you a redo,") and corrected in the same sentence ("but actually formulas show how."), then shown (line 6: "you can check how each number was calculated"). Worded as the step (checking), never as trusting (L89).

The 3 questions a viewer can answer afterwards (how / why / what changes, never "what happened"), each with its full answer and the picture that shows it working:
1. Q: Why can you check Claude's totals in Claude Sheets without redoing the math, when the pasted ones made you redo it? / A: Our totals were pasted as plain text, no work shown, so checking meant redoing the math; in Claude Sheets, its formulas stay in the cells, like shown work, so you can check how each number was calculated. / Picture: BEFORE, the teacher (mascot) with a homework page of answers only (like our pasted table), redoing a sum on scrap paper; the chat budget pasted into "OTHER TOOL", the totals tagged "PLAIN TEXT", the formula bar "NO FORMULA", the meter "TOTALS WITH NO WORK SHOWN · OUR EXAMPLE" filling to 3; NOW, "fx" tags land on the three totals one by one while the meter's boxes empty, tick "ALL 3 SHOW THEIR WORK"; TEAM A's total opens to "=SUM(Q1:Q4)" ("=SUM: ADDS THESE CELLS") with its four cells outlined. [rows 3, 4, S1-S3]
2. Q: How does a shown formula catch a mistake a pasted total would hide? / A: Like the teacher's rule, "show your work, so mistakes can show": if our total skipped a quarter, its formula shows it. / Picture: TEAM B's total opens to "=SUM(Q1:Q3)": Q1-Q3 lit, Q4 dark, stamp "SKIPPED Q4!"; beside it, a small panel "PASTED": the same total as a plain grey number, no formula, labelled "LOOKS FINE"; under it the homework page's line with its skipped step circled amber. [rows 4, S2, S4]
3. Q: What changes for working on the budget with Claude after its first answer? / A: Before, Claude, outside that tool, couldn't follow your edits; now, in the paid-plan beta, it stays in Claude, you both edit the same cells, Claude's edits are outlined as they land, and a card can undo just those, briefly. / Picture: BEFORE, the mascot types in "OTHER TOOL" while the robot waits outside behind a wall with a "?" ("OUTSIDE: CAN'T FOLLOW YOUR EDITS"); NOW, one window "CLAUDE SHEETS · BETA", the mascot's coral cursor and the robot's teal cursor in neighbouring cells ("SAME CELLS"); a new column lands, each cell outlined teal ("EACH EDIT OUTLINED"); the card "CLAUDE'S EDITS" with "UNDO", tapped: only the new column goes; the card's ring drains ("IT GOES A FEW SECONDS AFTER YOU'RE BACK IN THE SHEET" / "OR WHEN YOU EDIT A CELL"). [rows 3, 5, 6, 7]

The counted example (ours): a hiring budget by team and quarter (the maker's example prompt, row 10): 3 teams x 4 quarters, with 3 team totals, the numbers a formula calculates (the 12 quarter cells are typed inputs). Meter: "TOTALS WITH NO WORK SHOWN · OUR EXAMPLE", 3 before (pasted), emptied one box per fx tag now, then "ALL 3 SHOW THEIR WORK".

The story (rows S1-S5): the math teacher's "show your work". Before = homework with answers alone (the picture of our pasted totals); now = the shown steps (Claude's formulas); the caught mistake = a skipped step (our skipped quarter). Where it stops: shown work lets you check, it doesn't make the number right; and you keep editing together, the teacher only grades.

What we leave out on purpose (and why):
- Whiteboards and Claude Data (same launch): other products.
- "Fix with Claude", cell history, sorting, filters, sharing, import and export (rows 12-19): another idea or detail; some in the description.
- Version history after the Undo card goes away (row 6): "briefly" is said; the card's exact conditions and version history go in the description and on the card's label.
- Limits (simple functionality for now, no macros, no live data, usage limits, rows 15, 17, 18): in the description; "beta" is said.

Lesson check (before every student run; quoted from the current `film/script.txt` draft and `viewer.md`): each open `check: gate` lesson, then the line that meets it, or "n/a" and why.
- L58 (belief, at most 25 words, no who/when/how many): 21 words; no name, date or count.
- L59 (test a "done but not yet" gap): the idea's own gap, check is not proof, is kept: "you can check how each number was calculated", "they can be formulas you check"; no line says "trust" or "right".
- L60 (how/why/what-changes questions, each key part spoken): Q1: "you pasted Claude's chat budget into another tool as plain text: three totals, no work shown." / "Checking meant redoing the math" / "Its formulas stay in the cells, like shown work: you can check how each number was calculated."; Q2: "show your work, so mistakes can show!" / "If our total skipped a quarter, its formula shows it!"; Q3: "Claude, outside that tool, couldn't follow your edits." / "Now, in the paid-plan beta, it stays in Claude; you both edit the same cells." / "Claude's edits are outlined as they land; a card can undo just those, briefly."
- L61 (contrast or caught mistake): Q1 "NO FORMULA" vs "=SUM(Q1:Q4)" with its cells lit; Q2 "=SUM(Q1:Q3)", Q4 dark, "SKIPPED Q4!" beside the "PASTED" panel's plain number "LOOKS FINE" and the homework line's circled skipped step; Q3 the robot behind a wall vs both cursors in the same cells, and only the new column undone.
- L62 (why it matters names what changes): "you can check how each number was calculated" (instead of "redoing the math"); "you both edit the same cells".
- L63 (misconception said, then corrected): "you think checking A I math will cost you a redo, but actually formulas show how."
- L64 (reason in the same breath): why the rule: "show your work, so mistakes can show!"; why the pasted totals had no work: "as plain text" (pasted text carries no formula); why Claude couldn't follow: "outside that tool"; why you can check: "Its formulas stay in the cells".
- L65 (cut lines that answer no question): every body line serves Q1, Q2 or Q3.
- L66 (takeaway keeps every condition): "our three pasted totals" (our example, the before, the calculated numbers), "in the paid-plan beta", "they can be formulas" (numbers a formula calculates; the source says Claude can write formulas, not that it always does), "you check" with "can" (check, not proven right).
- L67 (say what a label is): "Claude Sheets, twenty twenty-six beta spreadsheet" (its kind, in line 1); "formulas" ("like shown work", "how each number was calculated"); "our example" budget (on screen: hiring budget, 3 teams, Q1-Q4); "card" ("a card can undo just those"); "beta" with "paid-plan"; "fx" labelled "fx = FORMULA".
- L68 (absolute words need a row): "each number was calculated" is row 4's word; no "every/any/never/first".
- L69 (say whose claim): the teacher's rule is the viewer's own school memory, said as "a math teacher's rule"; no maker's estimate.
- L71 (every number on screen is said): "2026" (said, "twenty twenty-six beta spreadsheet"), "3" ("three totals"), Q1-Q4 (the quarters, "skipped a quarter"), "=SUM(Q1:Q4)"/"=SUM(Q1:Q3)" (the formulas); "60s" and "IN 60 SECONDS" brand. The cells show grey bars, no digits.
- L72 (every part of "why it matters" spoken): "you can check how each number was calculated" / "If our total skipped a quarter, its formula shows it!" / "Claude, outside that tool, couldn't follow your edits." / "you both edit the same cells" / "Claude's edits are outlined as they land; a card can undo just those, briefly."
- L74 (re-quote before each student run): re-quoted from the round-3 `film/script.txt` after the round-1 and round-2 fixes; every quote grepped against it.
- L76 (also): the card reads "CLAUDE'S EDITS", the spoken word.
- L76 (one word for one thing): "edits" always edits to cells; "formula" always a cell's formula; "work" always the shown work (steps); "totals" the three team totals; "table" is not used.
- L77 (say what the before withheld): "as plain text: three totals, no work shown".
- L78: n/a. L81: no line has 3 numbers. 
- L82: viewer.md and script.txt are frozen between student and critic.
- L84 (count in the maker's unit): the maker gives no count; the meter counts totals with no formula, the thing row 4 is about; labelled "OUR EXAMPLE".
- L89 (misconception as the step, not trust): "checking ... will cost you a redo".

For the takeaway, the conditions the main idea rests on: our example and the before ("our three pasted totals"), the paid-plan beta ("in the paid-plan beta"), numbers a formula calculates ("they can be formulas": Claude can write formulas, row 3), check, not proof ("you check", after "can").
