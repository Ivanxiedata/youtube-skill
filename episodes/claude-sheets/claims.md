# Claims: claude-sheets (workflow step 3b)

Checked 2026-11-26 by a checker who did not write the script. Sources fetched fresh with `curl -sL` (browser UA), HTML stripped, quotes found with Python `str.find`: [A] claude.com/resources/articles/sheets-whiteboards-data (Nov 10, 2026), [B] support.claude.com/en/articles/18324300. Scope: script.md, every ON SCREEN text in beats.md Shots, package.md (title, thumbnail, two description lines).

| # | claim (where) | source and quoted sentence | holds, narrower or wrong | fix |
|---|---|---|---|---|
| 1 | "Claude Sheets, 2026 beta" (script Hook; beats shot 0/1 "BETA · 2026") | [A] "Today we're launching Claude Whiteboards and Claude Sheets in beta" (dated November 10, 2026); [B] "available in beta" | holds | |
| 2 | "you think checking AI numbers will cost you a redo" (script Hook; shot 1 bubble "REDO THE MATH?") | no source; the viewer's belief is the script's framing | holds (framing, not a feature claim) | |
| 3 | "but actually formulas show how" (script Hook; shot 2 "THE FORMULA SHOWS HOW", cell opens "=SUM(...)") | [B] "Formulas stay in the cells, so you can see and check how each number was calculated." | holds | Note: only numbers a formula calculates (typed inputs have none); the hook gives "checking", not "correct". Fine as written. |
| 4 | "Here's how, on our hiring budget: three teams, four quarters." (script Hook; shot 3 "OUR EXAMPLE: HIRING BUDGET") | [B] "Make a hiring budget by team and quarter." (the prompt only; 3x4 is ours) | holds (our example) | |
| 5 | "Before, you pasted Claude's chat table, just text, into another tool" (script Before; shot 4 "JUST TEXT", PASTE arrow) | [A] "Working with Claude on a project often meant moving the output over to another tool or program". No source says a chat table, pasting, or "just text". | narrower | "Before, you moved Claude's output into another tool: our example was a table of plain text." Add "OUR EXAMPLE" to the "JUST TEXT" tag. |
| 6 | "our three totals, no formulas" (script Before; shot 5 "PLAIN NUMBER · NO FORMULA", meter "TOTALS WITH NO FORMULA · OUR EXAMPLE" at 3) | Ours: [B] has no such statement; research.md "Our example" says a pasted table holds values, not formulas | holds (our example) | Labelled "our" in speech; meter carries "OUR EXAMPLE" in the same shots. |
| 7 | "Checking meant redoing the math" (script Before; shot 6 notepad, amber TEAM B total) | No source says checking a pasted number meant redoing the math. | narrower | "In our example, checking a pasted total meant redoing the math." |
| 8 | "and Claude had no live access to your edits" (script Before; shot 7 "NO LIVE ACCESS TO YOUR EDITS") | [A] "...another tool or program, where Claude didn't have live access to follow progress and changes." | holds | Source says "follow progress and changes"; "your edits" is a close paraphrase. Keep, or say "to follow your changes". |
| 9 | "Now, in the paid-plan beta, the spreadsheet stays in Claude" (script New; shot 8 "PAID PLANS", "CLAUDE SHEETS · BETA") | [A] "These are available on all paid plans." and "Now, your documents, boards, sheets, and dashboards can stay in Claude"; [B] "available in beta on Pro, Max, Ultra, Team, and Enterprise plans. ... On Enterprise plans, it's off by default" | holds | Enterprise off-by-default is not in the video; it is in description line 1, as research.md plans. |
| 10 | "you both edit the same cells" (script New; shot 9 "SAME CELLS") | [B] "A sheet is an artifact that you and Claude edit in the same cells." | holds | |
| 11 | Shot 9 picture: mascot's cursor and robot's cursor "both typing" in the same grid | [B] says same cells; research.md narrowing 5: sources do not say Claude works at the same instant as you | narrower | Show the two cursors in the same grid without both typing at once, or leave the label "SAME CELLS" only. |
| 12 | "Claude's formulas stay in the cells, so you can check how each number was calculated" (script New; shot 10 "fx = FORMULA", fx tags; shot 11 "=SUM(Q1:Q4)", pencil tick) | [B] "Formulas stay in the cells, so you can see and check how each number was calculated." | holds | "can check", as the source. Shot 11's four teal-outlined cells and "=SUM(Q1:Q4)" are our example (meter/"OUR EXAMPLE" in frame in shots 10, 12; shot 11 has no "OUR EXAMPLE" tag, add one). |
| 13 | Meter "ALL 3 HAVE FORMULAS" / "OUR EXAMPLE" (shot 10, 18) | Ours; [B] row 3 "write formulas that work across tabs" shows Claude can write formulas, not that it writes every total as one | holds (our example) | Labelled in every place it appears. |
| 14 | "if a total skipped a quarter, its formula shows it" (script New; shot 12 "=SUM(Q1:Q3)", "SKIPPED Q4!") | No source. Inference from "see and check how each number was calculated". | narrower | "in our example, if a total skipped a quarter, its formula would show it" (shot 12 already has "OUR EXAMPLE"; the spoken line has no label). |
| 15 | "Claude's edits are outlined as they land, so you see them" (script Why; shot 13 "EACH EDIT OUTLINED") | [B] "When Claude changes a sheet, each edit is outlined as it lands, so you can see what changed." [A] "outlining each new edit so you can track changes" | holds | The "START DATE" column is an invented illustration; harmless. |
| 16 | "when it finishes, a card can undo just those edits" (script Why; shot 14 card "CLAUDE UPDATED THE SHEET", "UNDO", "ONLY THOSE EDITS") | [B] "When Claude finishes, a card says what Claude updated. If it shows "Undo," select it to take back only that change." | holds | "can" matches "If it shows Undo". Card wording is paraphrase of "a card says what Claude updated". |
| 17 | "for a few seconds" (script Why; shot 15 "A FEW SECONDS, THEN IT GOES") | [B] "The card goes away a few seconds after you're back in the sheet, or as soon as you work in the cells. After that, use Version history to restore an earlier version, which also removes edits made after it." | narrower | The countdown starts when you are back in the sheet, and working in the cells ends it sooner. "...a card can undo just those edits, and it goes away a few seconds after you're back in the sheet." Label: "GONE A FEW SECONDS AFTER YOU'RE BACK". |
| 18 | "pasted, our three totals hid their math" (script Takeaway; shot 17 "BEFORE · PASTED", "TOTALS WITH NO FORMULA · OUR EXAMPLE") | Ours (see row 6) | holds (our example) | |
| 19 | "in the paid-plan beta, they're formulas you can check" (script Takeaway; shot 18 "NOW · CLAUDE SHEETS BETA", "PAID-PLAN BETA: FORMULAS YOU CAN CHECK") | [B] "Formulas stay in the cells, so you can see and check..."; [A]/[B] beta, paid plans | holds (our example) | "they" = our three totals, set up by "our three totals" and the card line "PASTED: OUR 3 TOTALS, NO FORMULAS"; the takeaway card's second line has no "our", add "OUR 3 TOTALS" if cut to that line alone. |
| 20 | Takeaway card "PASTED: OUR 3 TOTALS, NO FORMULAS" (shot 18) | Ours | holds (our example) | |
| 21 | Outro "Want more? Subscribe, and comment what we should explain next." (script Outro; shot 19) | not a factual claim | holds | |
| 22 | Shot 1 picture: robot's answer sheet with "= ?" and no working, desk scene | No source says Claude's earlier answers carried no working; it is the "show your working" analogy | narrower | Keep as analogy, tie it to the pasted table ("OUR PASTED TABLE") and do not imply Claude could never write a formula (research.md narrowing 4). |
| 23 | Shot 7 picture/label: robot behind a wall with "?" | [A] "Claude didn't have live access to follow progress and changes" | holds | |
| 24 | Package title "Claude Sheets Beta (2026): Check Claude's Math in the Cells" | [B] "Formulas stay in the cells, so you can see and check how each number was calculated."; [A] beta, Nov 10, 2026 | holds | "check", not "correct"; "Math" is the numbers a formula calculates. |
| 25 | Package thumbnail text "LEARN CLAUDE SHEETS IN 60 SECONDS" | not a claim | holds | |
| 26 | Package thumbnail picture: a cell holding a number, a magnifier over it showing the formula's highlighted cells in teal | [B] "see and check how each number was calculated" | holds | |
| 27 | Description line 1: "since November 10, 2026" | [A] Date "November 10, 2026", "Today we're launching ... in beta" | holds | |
| 28 | Line 1: "on paid plans (on by default on Team, off by default on Enterprise ...)" | [B] "It's on by default on Team plans. On Enterprise plans, it's off by default until it's turned on in Organization settings > Artifacts."; [A] "available on all paid plans" | holds | |
| 29 | Line 1: "...until an admin turns it on" | [B] says "until it's turned on in Organization settings > Artifacts"; "admin" appears only in "an admin can turn off Sheets in Organization settings > Capabilities" | narrower | "off by default on Enterprise until it's turned on in Organization settings". |
| 30 | Line 1: "a spreadsheet inside Claude where you and Claude edit the same cells, and Claude can write tabs, formulas, dropdowns and charts" | [B] "Claude Sheets is a spreadsheet built into Claude." / "Claude can add tabs, write formulas that work across tabs, ... and add dropdowns, checkboxes, and charts." | holds | |
| 31 | Line 2: "Anthropic says formulas stay in the cells, so you can see and check how each number was calculated" | [B] same sentence | holds | |
| 32 | Line 2: "Claude's edits are outlined as they land" | [B] row 15 sentence | holds | |
| 33 | Line 2: "a card can undo just that change, for a few seconds; after that, version history restores an earlier version" | [B] "...take back only that change. The card goes away a few seconds after you're back in the sheet, or as soon as you work in the cells. After that, use Version history to restore an earlier version, which also removes edits made after it." | narrower | Same as row 17; add "which also removes edits made after it": "...it goes away a few seconds after you're back in the sheet; after that, version history restores an earlier version, which also removes later edits." |

## Summary
Counts: holds 25 (7 of them "holds (our example)" or framing), narrower 8 (rows 5, 7, 11, 14, 17, 22, 29, 33), wrong 0. Rows 22 and 11 are picture-only.

Narrower rows to fix before the voice or film is built:
- 5: "pasted Claude's chat table, just text" is inference; the source says only "moving the output over to another tool". Tag "JUST TEXT" needs "OUR EXAMPLE".
- 7: "Checking meant redoing the math" has no source; add "in our example".
- 11: shot 9 shows both cursors typing; the sources do not say Claude edits at the same instant as you.
- 14: "if a total skipped a quarter, its formula shows it" is an inference; the spoken line needs "our example" (the shot has it).
- 17: "for a few seconds" drops "after you're back in the sheet, or as soon as you work in the cells".
- 22: shot 1's answers-only robot sheet implies Claude never showed working; keep as an analogy tied to the pasted table.
- 29: "until an admin turns it on" is not in the source; use "until it's turned on in Organization settings".
- 33: description line 2 repeats the row 17 narrowing and omits that Version history also removes later edits.

## Where each narrower row was fixed (writer, before any voicing)
| Row | Fixed in | Now reads |
|---|---|---|
| 5 | `script.md`/`film/script.txt` line 3, `viewer.md` 5-6, `beats.md` shots 4-5, `lesson.md` Q1 | "Before, in our example, you pasted Claude's chat table into another tool: three totals, just text, no formulas."; shot 4 carries "OUR EXAMPLE", "JUST TEXT" moved to the totals in shot 5 under the meter's "OUR EXAMPLE" |
| 7 | line 4 (follows line 3's "in our example") | "Checking meant redoing the math; Claude had no live access to your edits." |
| 11 | `beats.md` shot 9, `viewer.md` 10, `lesson.md` Q3 picture | the two cursors type one after the other, never at the same instant |
| 14 | line 6, `viewer.md` 13, `beats.md` shot 12, `lesson.md` Q1 | "if our total skipped a quarter, its formula shows it." |
| 17 | line 7, `viewer.md` 16, `beats.md` shot 15, `lesson.md` Q2 | spoken "a card can undo just those edits, but only briefly."; label "IT GOES A FEW SECONDS AFTER YOU'RE BACK" / "OR WHEN YOU EDIT A CELL" (both conditions of [B]) |
| 22 | `beats.md` shot 1, `viewer.md` 2 | the answers-only sheet is drawn and described as the maths-test analogy ("like a maths test handed in with answers only") |
| 29 | `package.md` description line 1 | "off by default on Enterprise until it's turned on in Organization settings" |
| 33 | `package.md` description line 2 | "a card can undo just that change; it goes a few seconds after you're back in the sheet, or as soon as you work in the cells, and after that version history restores an earlier version, which also removes edits made after it." |
Also from the "held, with notes": shot 10 (beats numbering; viewer 11) gets a small "OUR EXAMPLE" by the totals; the takeaway card's first line "PASTED: OUR 3 TOTALS, NO FORMULAS" stays on screen with the second.
