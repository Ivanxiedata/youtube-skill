# Claims: claude-sheets-v3 (the slower re-cut of claude-sheets-v2)

## v3 spoken lines (2026-11-27), each against the same sources [A] [B] [P] and the v2 rows below
| # | v3 line | source / v2 row | verdict |
|---|---|---|---|
| v1 | "Many math teachers ask you to show your work, not just 1 answer." | [P] "Many math teachers ask their students to show their work" (row 3 fix kept: "many", not "your teacher") | holds |
| v2 | "But before Claude Sheets, how could you check an AI total?" | a question, no claim; [A] "moving the output over to another tool" | holds |
| v3 | "Showing your work can show where a mistake happened." | [P] "Showing work can help you figure out where you made a mistake." (row 4 fix kept: "can") | holds |
| v4 | "Before, in our example, you pasted a budget from Claude's chat into another tool." | row 5 ([A]), labelled "our example" | holds |
| v5 | "Plain text: three totals, no work behind them." | row 6 (ours) | holds (ours) |
| v6 | "To check one, you redid the math." | row 7 (ours, follows "in our example") | holds (ours) |
| v7 | "Now, Claude Sheets, a beta on paid plans, keeps the sheet in Claude." | row 9 ([A] "can stay in Claude", "available on all paid plans"; beta) | holds |
| v8 | "Its totals can be formulas, and a formula shows how the number was calculated." | rows 11, 16 ([B] "Formulas stay in the cells, so you can see and check how each number was calculated"); "can be", not "are" | holds |
| v9 | "In our example, one total skips a quarter. Its formula shows that right away." | row 12 (ours, =SUM(Q1:Q3)) | holds (ours) |
| v10 | "So, plain totals hide the work. Formulas show it." | rows 6, 11; recap of our example | holds |
| v11 | Labels: "ANSWERS ONLY", "TOTAL ?", "THE WRONG STEP CAN SHOW", "BEFORE · OUR EXAMPLE", "NO FORMULA", "PAID PLANS", "SKIPPED Q4", "HIDES / SHOWS THE WORK" | as v1-v10; "CAN SHOW" per row 4 | holds |
Dropped from v2 (no longer said or shown): rows 1, 2, 8, 10, 13, 14, 17, 18 (title card, edits outlined, the undo card). The description keeps them, quoted from [B].

## The v2 table (kept for its sources and fixes)
### claude-sheets-v2 (workflow step 3b)

Checked 2026-11-27 by a claim checker that did not write the script, against the three sources themselves (not research.md's quotes):
- [A] https://claude.com/resources/articles/sheets-whiteboards-data (dated "November 10, 2026")
- [B] https://support.claude.com/en/articles/18324300 ("Claude Sheets is a spreadsheet built into Claude.")
- [P] https://www.library.pima.gov/blogs/post/why-showing-your-work-works/ ("March 20, 2021")

Fetched with `curl -sL` (browser user agent), HTML stripped with a short Python script (script/style removed, tags removed, `html.unescape`, whitespace collapsed); each quote located with `str.find` (curly apostrophes kept). All 28 quotes checked were found verbatim. The narrowing list in `research.md` was applied to every line.

| # | claim (where) | source and quoted sentence | verdict | fix |
|---|---|---|---|---|
| 1 | "Claude Sheets, 2026 beta spreadsheet" (script Hook l1) | [A] "Today we’re launching Claude Whiteboards and Claude Sheets in beta" (Nov 10, 2026); [B] "Claude Sheets is a spreadsheet built into Claude." | holds | |
| 2 | "you think checking AI math will cost you a redo, but actually formulas show how" (Hook l1) | [B] "Formulas stay in the cells, so you can see and check how each number was calculated." "AI math" is wide, but the same sentence limits the answer to formulas | holds | |
| 3 | "your math teacher's rule... show your work" (Hook l2) | [P] "Many math teachers ask their students to show their work" | narrower: "your" teacher implies all teachers | "a math teacher's rule... show your work" **Fixed 2026-11-27:** "a math teacher's rule" in film/script.txt line 2, script.md, viewer.md, beats.md, lesson.md. |
| 4 | "so mistakes show!" (Hook l2) | [P] "Showing work can help you figure out where you made a mistake." | narrower: "can help", not always | "show your work, so mistakes can show!" **Fixed:** "so mistakes can show!" in film/script.txt line 2, script.md, viewer.md, beats.md, lesson.md. |
| 5 | "Before, in our example, you pasted Claude's chat budget into another tool as plain text" (Before) | [A] "Working with Claude on a project often meant moving the output over to another tool or program"; plain text is ours, labelled "in our example" | holds | |
| 6 | "three totals, no work shown" (Before) | ours (3 totals, research.md "Our example"); labelled "in our example" one sentence earlier | holds (ours) | |
| 7 | "Checking meant redoing the math" (Before) | ours, for a pasted number; [P] S2 reversed (the work lets you see the mistake) | holds (ours) | |
| 8 | "Claude, outside that tool, couldn't follow your edits." (Before) | [A] "where Claude didn’t have live access to follow progress and changes." | holds | |
| 9 | "Now, in the paid-plan beta, it stays in Claude" (New) | [A] "Now, your documents, boards, sheets, and dashboards can stay in Claude"; "available on all paid plans" | holds | |
| 10 | "you both edit the same cells" (New) | [B] "A sheet is an artifact that you and Claude edit in the same cells." | holds | |
| 11 | "Its formulas stay in the cells, like shown work: you can check how each number was calculated." (New) | [B] "Formulas stay in the cells, so you can see and check how each number was calculated." "Its formulas" keeps it to formulas; "can check" not "is right"; "like shown work" is a labelled analogy | holds | |
| 12 | "If our total skipped a quarter, its formula shows it!" (New) | ours (our =SUM(Q1:Q3)); mechanism from [B] row 4 and [P] "skipped an important step" | holds (ours) | |
| 13 | "Claude's edits are outlined as they land" (Why) | [B] "each edit is outlined as it lands, so you can see what changed." | holds | |
| 14 | "a card can undo just those, briefly." (Why) | [B] "If it shows “Undo,” select it to take back only that change. The card goes away a few seconds after you’re back in the sheet, or as soon as you work in the cells." "can" and "briefly" carry the condition | holds | |
| 15 | "our three pasted totals showed no work" (Takeaway) | ours, labelled "our" | holds (ours) | |
| 16 | "in the paid-plan beta, they're formulas you can check." (Takeaway) | [B] "Formulas stay in the cells..." and "Claude can ... write formulas". No source says Claude writes every total as a formula (research.md, Our example); "they're" states it as the product's behaviour | narrower | "in the paid-plan beta, they can be formulas you check." **Fixed:** "they can be formulas you check" in film/script.txt line 9, script.md, viewer.md, beats.md, lesson.md. |
| 17 | Shot 0: "LEARN", "CLAUDE SHEETS", "BETA · 2026", "IN 60 SECONDS" | [A]/[B] beta, dated 2026; the rest is brand | holds | |
| 18 | Shot 1: homework page with only answers, bubble "REDO THE MATH?", tag "BETA · 2026" | analogy picture; in the hook it comes before "our example" and has no tie to our pasted table, so it can read as "AI hands back answers only" (research.md "Where the analogy stops" 3) | narrower | add a small tag on the page: "ANSWERS ONLY, LIKE OUR PASTED TABLE" **Fixed:** shot 1 page tag "ANSWERS ONLY" + small line "LIKE OUR PASTED TABLE" in beats.md and viewer.md. |
| 19 | Shot 2: "THE FORMULA SHOWS HOW", "=SUM(...)" | [B] "see and check how each number was calculated" | holds | |
| 20 | Shot 3: chalk "SHOW YOUR WORK!" | [P] "Many math teachers ask their students to show their work" | holds | |
| 21 | Shot 4: "THE WRONG STEP SHOWS" | [P] "the teacher will see that Mica knows how to multiply but just mixed up two digits" | holds | |
| 22 | Shot 5: "BEFORE", "OUR EXAMPLE: HIRING BUDGET", "OTHER TOOL", "PASTE" | [A] "moving the output over to another tool"; [B] "Make a hiring budget by team and quarter" (the example prompt; the budget is ours, labelled) | holds | |
| 23 | Shot 6: "PLAIN TEXT", "NO FORMULA" | ours for our pasted table; shot carries the meter label "OUR EXAMPLE" | holds (ours) | |
| 24 | Shot 8: "OUTSIDE: CAN'T FOLLOW YOUR EDITS", robot behind a wall | [A] "Claude didn’t have live access to follow progress and changes" | holds | |
| 25 | Shot 9: "NOW", "CLAUDE SHEETS · BETA", "PAID PLANS" | [A] "These are available on all paid plans."; [B] beta on Pro, Max, Ultra, Team, Enterprise | holds | |
| 26 | Shot 10: "SAME CELLS" | [B] "you and Claude edit in the same cells" | holds | |
| 27 | Shot 11: "fx = FORMULA", meter empties, "ALL 3 SHOW THEIR WORK" + "OUR EXAMPLE" | the 3 and "ALL 3" are ours and labelled; [B] "write formulas" | holds (ours) | |
| 28 | Shot 12: "=SUM(Q1:Q4)", "=SUM: ADDS THESE CELLS" | [B] "see and check how each number was calculated"; the formula is ours | holds (ours) | |
| 29 | Shot 13: "SKIPPED Q4!", "OUR EXAMPLE", "PASTED", "LOOKS FINE" | ours (=SUM(Q1:Q3)); [P] "skipped an important step" | holds (ours) | |
| 30 | Shot 14: "EACH EDIT OUTLINED" | [B] "each edit is outlined as it lands" | holds | |
| 31 | Shot 15: card "CLAUDE'S EDITS", "UNDO", "ONLY THOSE EDITS" | [B] "a card says what Claude updated. If it shows “Undo,” select it to take back only that change." Card title is ours (illustration) | holds | |
| 32 | Shot 16: "IT GOES A FEW SECONDS AFTER YOU'RE BACK IN THE SHEET" / "OR WHEN YOU EDIT A CELL" | [B] "The card goes away a few seconds after you’re back in the sheet, or as soon as you work in the cells." | holds | |
| 33 | Shot 18: "BEFORE · PASTED", "TOTALS WITH NO WORK SHOWN · OUR EXAMPLE" | ours, labelled | holds (ours) | |
| 34 | Shot 19: takeaway card "PASTED: OUR 3 TOTALS, NO WORK SHOWN" / "PAID-PLAN BETA: FORMULAS YOU CAN CHECK" | line 1 ours; line 2 sits under it and reads as "our totals are formulas" (same issue as #16); "can check" itself is [B] | narrower | "PAID-PLAN BETA: TOTALS CAN BE FORMULAS YOU CHECK" **Fixed:** card line 2 "PAID-PLAN BETA: TOTALS CAN BE FORMULAS YOU CHECK" in beats.md and viewer.md. |
| 35 | Cast labels: corner tag "CLAUDE SHEETS · 60s", robot "CLAUDE", "TEAM A-C", "Q1-Q4", "TOTAL", meter label, "NO FORMULA" | brand/ours; the meter label carries "OUR EXAMPLE"; Shot 20 "COMMENT: WHAT NEXT?" states no fact | holds | |
| 36 | Package: chosen title "Claude Sheets Beta (2026): Formulas That Show Their Work" | [B] row 4; "Beta" and 2026 carried; "show their work" is the [P] story's word for "see and check how each number was calculated"; says formulas show it, not that they are right | holds | |
| 37 | Package: thumbnail text "LEARN CLAUDE SHEETS IN 60 SECONDS" | brand card; product name from [B] | holds | |
| 38 | Package desc line 1: "through your math teacher's "show your work"" | [P] "Many math teachers ask their students to show their work" | narrower (same as #3) | "through a math teacher's "show your work"" **Fixed:** "through a math teacher's" in package.md description line 1. |
| 39 | Package desc line 1: "since November 10, 2026, on paid plans, Claude Sheets is a spreadsheet inside Claude where you and Claude edit the same cells" | [A] dated Nov 10, 2026, "in beta ... available on all paid plans"; [B] "a spreadsheet built into Claude", "edit in the same cells" (Enterprise default is in line 3) | holds | |
| 40 | Package desc line 2 (formulas stay; edits outlined; card undoes only that change; goes a few seconds after / as soon as you work in the cells; Version history restores an earlier version and removes later edits) | [B] every clause found verbatim: "Formulas stay in the cells...", "each edit is outlined as it lands", "take back only that change", "a few seconds after you’re back in the sheet, or as soon as you work in the cells", "Version history to restore an earlier version, which also removes edits made after it" | holds | |
| 41 | Package desc line 3 (Team on by default; Enterprise off by default until turned on in Organization settings > Artifacts) | [B] "It’s on by default on Team plans. On Enterprise plans, it’s off by default until it’s turned on in Organization settings > Artifacts." Attributed to the Help Center, undated | holds | |

Story trace: the math teacher's "show your work" traces to [P] ("Many math teachers ask their students to show their work", "Showing work can help you figure out where you made a mistake", the Mica and skipped-step examples). The analogy stays tied to our pasted table in the script (every "before" line says "in our example"/"our"), except the hook picture (#18). No line says Claude's chat can never write a formula.

**41 claims, 35 hold, 6 narrower, 0 wrong.**
