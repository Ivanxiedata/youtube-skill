# Lesson: claude-sheets

Main idea (one sentence, at most about 25 words: what the viewer will think differently; not the headline, not the mechanism):
An AI's numbers become something you can check, not just trust, when it writes formulas into the cells instead of typing answers. (22 words)

Why it matters (to the viewer or the field, with the research.md row):
Checking an AI's number no longer means redoing the math: in Claude Sheets the formulas stay in the cells, so you can check how each number was calculated (row 4), and a wrong step (a total skipping a quarter) shows in its formula instead of hiding in a plain number;
and the work stays where Claude can work on it with you: before, you moved the output to another tool, where Claude had no live access to your edits (row 7); now you both edit the same cells (row 3), Claude's edits outlined as they land, and a card can undo just those edits (rows 5, 6).

Misconception it corrects:
"Checking an AI's numbers means redoing the math yourself." Said in the hook ("you think checking A I numbers will cost you a redo,") and corrected in the same sentence ("but actually formulas show how."), then shown (line 6: "so you can check how each number was calculated").

The 3 questions a viewer can answer afterwards (how / why / what changes, never "what happened"), each with its full answer and the picture that shows it working:
1. Q: Why can you check Claude's numbers in Claude Sheets when a pasted chat table made you redo the math? / A: In our example, the pasted table was just text: three totals, no formulas, so checking meant redoing the math; in Claude Sheets, Claude's formulas stay in the cells, so you can check how each number was calculated: if our total skipped a quarter, its formula shows it. / Picture: BEFORE, the chat table tagged "JUST TEXT" pasted into "OTHER TOOL"; the formula bar reads "PLAIN NUMBER · NO FORMULA"; the meter "TOTALS WITH NO FORMULA · OUR EXAMPLE" fills to 3; the mascot scribbles the sum on a notepad. NOW, "fx" tags on the three totals, meter's teal tick "ALL 3 HAVE FORMULAS" (small "OUR EXAMPLE"); label "fx = FORMULA"; TEAM A's total shows "=SUM(Q1:Q4)" with its four cells outlined; TEAM B's shows "=SUM(Q1:Q3)", Q4 stays dark: "SKIPPED Q4!" (the caught mistake). [rows 3, 4]
2. Q: How do you keep track of, and take back, what Claude changes in your sheet? / A: Claude's edits are outlined as they land, so you see them; when it finishes, a card can undo just those edits, but only briefly. / Picture: the robot's cursor fills a new column "START DATE"; each new cell gets a teal outline as it lands ("EACH EDIT OUTLINED"); the card "CLAUDE UPDATED THE SHEET" with "UNDO"; the mascot taps it and only the new column goes, the rest of the grid stays ("ONLY THOSE EDITS"); the card's timer ring drains ("IT GOES A FEW SECONDS AFTER YOU'RE BACK" / "OR WHEN YOU EDIT A CELL"). [rows 5, 6]
3. Q: What changes for working on the sheet after Claude's first answer? / A: Before, you moved the table into another tool, where Claude had no live access to your edits; now, in the paid-plan beta, the spreadsheet stays in Claude, and you both edit the same cells. / Picture: BEFORE, the mascot types in "OTHER TOOL" while the robot stands outside behind a wall with a "?" ("NO LIVE ACCESS TO YOUR EDITS"); NOW, one window "CLAUDE SHEETS · BETA", the mascot's coral cursor, then the robot's teal cursor, in neighbouring cells ("SAME CELLS"). [rows 3, 7, 8]

The counted example (ours): a hiring budget by team and quarter (the maker's example prompt, row 10): 3 teams x 4 quarters, with 3 team totals, the numbers a formula calculates (the 12 quarter cells are typed inputs). Meter: "TOTALS WITH NO FORMULA · OUR EXAMPLE", 3 before (pasted), a teal tick "ALL 3 HAVE FORMULAS" now (our sheet).

What we leave out on purpose (and why):
- Whiteboards and Claude Data (same launch): other products.
- "Write this formula" from plain words, "Fix with Claude", sorting, filters, comments, sharing, import and export, partner tools (rows 12-16, 19): another idea or detail; some in the description.
- Version history after the Undo card goes away (row 6): the card's few seconds is said; version history is in the description.
- Limits (simple functionality for now, no macros, no live data, usage limits, rows 15, 17, 18): in the description; "beta" is said.

Lesson check (before every student run; quoted from the current `film/script.txt` and `viewer.md`, gate round 2): each open `check: gate` lesson, then the line that meets it, or "n/a" and why.
- L58 (main idea is a belief, at most 25 words, no who/when/how many): 22 words; no name, date or count.
- L59 (test a "done but not yet" gap): the sources' gap is "simple spreadsheet functionality" for now (row 15), a beta limit, not the idea; the idea's own gap, check is not proof, is kept in every line: "you can check how each number was calculated", "they're formulas you can check"; no line says "trust" or "right".
- L60 (how/why/what-changes questions, each part spoken): Q1 why: "Before, in our example, you pasted Claude's chat table into another tool: three totals, just text, no formulas." / "Checking meant redoing the math" / "Claude's formulas stay in the cells, so you can check how each number was calculated: if our total skipped a quarter, its formula shows it."; Q2 how: "Claude's edits are outlined as they land, so you see them; when it finishes, a card can undo just those edits, but only briefly."; Q3 what changes: "Claude had no live access to your edits." / "Now, in the paid-plan beta, the spreadsheet stays in Claude; you both edit the same cells."
- L61 (contrast or caught mistake): Q1 "PLAIN NUMBER · NO FORMULA" vs "=SUM(Q1:Q4)" with its cells lit, and "=SUM(Q1:Q3)" with Q4 dark, "SKIPPED Q4!"; Q2 only the new column undone while the rest stays; Q3 the robot behind a wall vs both cursors in the same cells.
- L62 (why it matters names what changes): "so you can check how each number was calculated" (instead of redoing); "you both edit the same cells".
- L63 (misconception said, then corrected): "you think checking A I numbers will cost you a redo, but actually formulas show how."
- L64 (reason in the same breath): why the pasted table had no formulas: "just text" (our example); why Claude couldn't follow: "had no live access to your edits"; why you can check: "Claude's formulas stay in the cells, so you can check"; why the outline helps: "so you see them"; why the undo is safe: "just those edits".
- L65 (cut lines that answer no question): every body line serves Q1, Q2 or Q3.
- L66 (takeaway keeps every condition): "pasted" (the before), "our three totals" (our example, the calculated numbers), "in the paid-plan beta" (beta, and its plans), "they're formulas" (numbers a formula calculates), "you can check" (check, not proven right).
- L67 (say what a label is): "Claude Sheets" said with what it is: "the spreadsheet stays in Claude"; "formulas" with what they do ("show how", "how each number was calculated"); "our hiring budget: three teams, four quarters" (our example); "card" with what it does ("a card can undo just those edits"); "beta" with its plans ("paid-plan beta"); "fx" tags sit on the totals the voice calls formulas.
- L68 (absolute words need a row): "each number was calculated" is row 4's own word "each"; no "every/any/never/first".
- L69 (say who a claim is from): n/a: no surprising maker's claim or estimate; every fact is the product's own feature description.
- L71 (every number on screen is said): "2026" (said), "3" ("three totals"), "Q1"-"Q4" (headers of the spoken "four quarters"; "SKIPPED Q4!" is "skipped a quarter"), "=SUM(Q1:Q4)"/"=SUM(Q1:Q3)" (the formulas the voice names, made of those headers); "60s" and "IN 60 SECONDS" are brand.
- L72 (every part of "why it matters" spoken): "so you can check how each number was calculated: if our total skipped a quarter, its formula shows it." / "Claude had no live access to your edits." / "you both edit the same cells" / "Claude's edits are outlined as they land, so you see them; when it finishes, a card can undo just those edits".
- L74 (re-quote before each student run): every quote here was copied from `film/script.txt` after the round-1 fixes and grepped against it.
- L76 (one word for one thing): "edits" always edits to cells (Claude's or yours; "you both edit"); the card undoes "those edits", the same word; "formula" always the cell's formula; "spreadsheet"/"sheet" the Claude Sheets spreadsheet; "table" only the pasted chat table; "totals" the three team totals.
- L77 (say what the before withheld): "three totals, just text, no formulas."
- L78 (a safeguard that stops less): n/a.
- L81 (3+ numbers in one proof line): no line has more than two numbers ("three teams, four quarters", each with its unit).
- L84 (count the example in the maker's unit): the maker gives no count; the meter counts totals with no formula, the thing row 4 is about (formulas in the cells); labelled "OUR EXAMPLE".

For the takeaway, the conditions the main idea's trust rests on: the before was pasted ("pasted"), our example ("our three totals"), the paid-plan beta ("in the paid-plan beta"), numbers a formula calculates ("they're formulas"), check, not proof ("you can check").
