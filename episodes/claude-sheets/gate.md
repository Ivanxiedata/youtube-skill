gate: pass (2 should-fix)

# Content gate: claude-sheets, round 3 (critic, re-gate, last round)

G0: pass. `viewer.md` holds only the spoken script and plain picture descriptions; its spoken lines match `film/script.txt` word for word (diffed). Style A: about 150 spoken words, at most 5% over (157.5); the script is **157** by `wc -w`. Budget: pass.

## Rounds 1-2, resolved?
- **Round 1, must-fixes 1-5** (hook framed as trust; "in its formula" never spoken; "edit"/"change" two words; `lesson.md` pictures not matching; the twelve counted were not the totals): stay resolved. Line 1 still "you think checking A I numbers will cost you a redo, but actually formulas show how."; line 6 still ends "if a total skipped a quarter, its formula shows it."; no "change" anywhere in `viewer.md`; the meter still counts "our three totals". Round-1 should-fixes a ("just text") and b ("had no live access to your edits") stay in lines 3 and 4.
- **Round 2, must-fix 1 (budget; G10 L66, L76): one word over, and the takeaway named the beta without "paid-plan"**: resolved. Line 8 is now "So, what we learned: pasted, our three totals hid their math; in the paid-plan beta, they're formulas you can check." The script is 157 words. Both feature lines say "paid-plan beta", so the beta has one name. The amber card line is "PAID-PLAN BETA: FORMULAS YOU CAN CHECK". The panel "NOW · CLAUDE SHEETS BETA" still names the product while line 8 is spoken. `lesson.md`'s L66 entry and its takeaway conditions quote "in the paid-plan beta".
- **Round 2, should-fix b (G9, L67): Claude Sheets never said to be a spreadsheet**: resolved. Line 5 says "the spreadsheet stays in Claude" (row 1: "a spreadsheet built into Claude"). The round-3 student calls it "the spreadsheet lives inside Claude" and no longer asks what the product is.
- **Round 2, should-fix c (G9): "fx" and the meter's "NONE" never named**: "fx" is resolved: shot 11 has "fx = FORMULA", and the student read it ("explained only by the label"). "NONE" is only **partly** resolved. The meter still reads "NONE" under "TOTALS WITH NO FORMULA", with "ALL 3 HAVE FORMULAS · OUR EXAMPLE" in small type under it. The round-3 student: "A meter going to 'NONE' read like a bad thing at first." That breaks round 2's own rule ("never pair 'NONE' with a label that already says 'no'"). Round 2's fix text kept that pairing, so the writer is not at fault. Should-fix 1 below.
- **Round 2 note, `brief.json`**: resolved. `predecessor.name` now says "The pasted hiring budget whose 3 team totals have no formulas is the episode's own example."

## Student (round 3), verbatim


### 1. Main idea
In the paid beta of Claude Sheets, the spreadsheet lives inside Claude and keeps real formulas in the cells, so you can check how each number was worked out instead of redoing the math like you did with a pasted chat table.

### 2. What I learned

**Pasted tables hide the math.** Before, you copied Claude's chat table (plain text) into another tool. In the hiring budget example (three teams, four quarters), the three totals were just plain numbers with no formulas. To trust them you had to redo the sums yourself, and Claude could not see the edits you made in the other tool.

**Same sheet, formulas stay.** Now, on paid plans in the beta, the sheet stays in Claude and you and Claude edit the same cells. Claude's totals are formulas, so you click one and see how it was calculated. Team A's total is =SUM(Q1:Q4), which is fine. Team B's is =SUM(Q1:Q3), so it skipped Q4, and the formula shows that mistake.

**Seeing and undoing Claude's edits.** Claude's edits get an outline as they land, such as a new "START DATE" column filling in. When Claude finishes, a card "Claude updated the sheet" appears with an Undo button that removes only those edits. It stays for just a few seconds.

### 3. What I can't explain, took on faith, or would scroll away from
- "twenty twenty-six beta: you think checking A I numbers will cost you a redo, but actually formulas show how" (the opening line). It is a bit tangled and I had to parse it.
- "paid-plan beta" / "PAID PLANS": which plans exactly? I don't know, and I don't know how to get in.
- "Claude had no live access to your edits": I took on faith why, and what "live access" means in practice.
- "fx" tag: explained only by the label "fx = FORMULA". I'd have missed it if I blinked.
- The meter ("TOTALS WITH NO FORMULA", "3", then "NONE"): confusing. A meter going to "NONE" read like a bad thing at first.
- "a card can undo just those edits, for a few seconds": I don't know what happens after the few seconds. Is the change permanent? Can I still undo it some other way? It says "then it goes" but not what that means for my work.
- "Claude's formulas stay in the cells": it doesn't say why they stay here and not when pasted. I just have to accept it.
- "Claude's edits are outlined as they land": how long does the outline last?
- Does Claude catch the Q4 skip itself, or do I have to spot it? The video implies I check. Slight scroll-away moment is "So, what we learned" recap, which repeats what I just heard.
- The subscribe line at the end: I'd scroll away.
- Numbers: the video never shows actual digits, only grey bars, so I can't see what the totals even were.

### Answers to the 3 questions

**Q1.** Because Claude's totals are real formulas kept in the cells. You click a total and the formula shows how it was calculated, such as =SUM(Q1:Q4) or one that skips Q4. A pasted chat table was plain text with plain-number totals and no formulas, so the only way to check was to redo the math.

**Q2.** Claude's edits are outlined as they land, so you see what changed. When Claude finishes, a card "Claude updated the sheet" appears with an Undo button. It undoes only Claude's edits, not the rest of the sheet, but the card is only there for a few seconds.

**Q3.** After the first answer, the sheet stays in Claude, and you and Claude both keep editing the same cells. You don't paste it into another tool, and Claude can see your edits.

## Critic: G1-G12

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass (run in full): "An AI's numbers become something you can check, not just trust, when it writes formulas into the cells instead of typing answers." It is 22 words and states a belief the viewer will hold. It has no who, when or count, and no absolute word or superlative | |
| G2 | Deepest true idea | pass (run in full): row 4 ("see and check how each number was calculated") plus "where the analogy stops" (check, not proof) is the deepest idea the sources hold. The only "not yet" is "simple spreadsheet functionality" for now (row 15), a beta limit. Row 6's card timing and row 11's "ask Claude about cells" are details, not deeper ideas | |
| G3 | The student got it | pass (run in full). Main idea: "keeps real formulas in the cells, so you can check how each number was worked out instead of redoing the math like you did with a pasted chat table", which is the core claim. Q1: every key part is there (plain text, plain-number totals with no formulas, the three totals in section 2, redoing, formulas kept in the cells, see how it was calculated, "one that skips Q4"). Q2: every part (outlined as they land, so you see, when Claude finishes, only Claude's edits, a few seconds). Q3: stays in Claude, same cells, no pasting into another tool; "paid" is in the main idea and section 2 ("on paid plans in the beta"). Two faith marks fall under the wish rule. "Why they stay here and not when pasted": the student gives the spoken reason itself in Q1 ("A pasted chat table was plain text"). "No live access ... I took on faith why": the student repeats the before/now contrast in Q3. I ticked every key part against `film/script.txt`: all spoken. Q3's key still says "the sheet stays in Claude" where line 5 now says "spreadsheet" (should-fix 2, wording only) | 2 |
| G4 | Questions worth asking | pass: Q1 why, Q2 how, Q3 what changes; each asks for every part of its key | |
| G5 | Shown, not asserted | pass: Q1 "PLAIN NUMBER · NO FORMULA" against "=SUM(Q1:Q4)" lit, and "=SUM(Q1:Q3)" with "SKIPPED Q4!" (the caught mistake). Q2: only the new column undone. Q3: the robot behind a wall, then both cursors in the same cells | |
| G6 | Why it matters | pass: "so you can check how each number was calculated" (instead of redoing, row 4); "you both edit the same cells" (rows 3, 7) | |
| G7 | Misconception | pass: "you think checking A I numbers will cost you a redo," corrected by "but actually formulas show how." and shown in line 6 | |
| G8 | No faith steps | pass: "just text", "had no live access to your edits" (row 7), "so you can check", "so you see them", "just those edits" | |
| G9 | Every line serves | should-fix (carried over from round 2's c, 0 words): the meter's now-state "NONE" under "TOTALS WITH NO FORMULA" still reads as a bad result ("read like a bad thing at first"). Changed lines: line 5's "spreadsheet" fits L67 and L76. "Claude Sheets" names the product, "spreadsheet" says what kind of thing it is, and the card "CLAUDE UPDATED THE SHEET" is the product's own wording for the same thing. "fx = FORMULA" meets L67. The scroll-away moments the student names are the hook, the recap and the subscribe ask (all exempt) and the grey bars (visual craft, the judge's) | 1 |
| G10 | True main idea | pass (run in full). The main idea and line 8 stay inside rows 3 and 4 and narrowing items 1-4. Conditions in line 8: "pasted" (the before), "our three totals" (our example, the calculated numbers), "in the paid-plan beta" (beta, rows 2 and 2b), "they're formulas" (row 3), "you can check" (check, not proof). The closing picture counts the same unit on both sides (totals). The card's lines "PASTED: OUR 3 TOTALS, NO FORMULAS" and "PAID-PLAN BETA: FORMULAS YOU CAN CHECK" match line 8, and the panel's "ALL 3 HAVE FORMULAS · OUR EXAMPLE" keeps "our". Changed line 5: "the spreadsheet stays in Claude" is rows 1 and 8. Changed labels: "fx = FORMULA" is true; "ALL 3 HAVE FORMULAS · OUR EXAMPLE" is our example, not a claim that Claude always writes formulas | |
| G11 | Carry-over limits | pass: no advice line; "you can check" never becomes "right". "For a few seconds" says nothing false about after (version history, left out on purpose, is in the description) | |
| G12 | Lessons | pass. I grepped each Lesson check and Misconception quote in `lesson.md` against the current `film/script.txt` and `viewer.md`. Every quoted line is present; the only misses are paraphrases and meta words ("n/a", "trust"), never a stale line (L74). L58-L72, L76-L78, L81 and L84 re-ticked against the current script: all met. L71: "2026" and "3" are said, "Q1"-"Q4" are the spoken quarters, "60s" is brand. L76: "edits" means one thing throughout, and no "change" is left | |
| Budget | Word budget | pass: 157 <= 157.5. Both fixes below are 0 spoken words | |

Word budget after the fixes: 157 + 0 + 0 = **157**.

## Fails (should-fix only)

### Should-fix 1 (G9): the meter's "NONE" still sits under "TOTALS WITH NO FORMULA"
- **What**: shots 11 and 19. The meter's now-state reads "NONE" under the label "TOTALS WITH NO FORMULA", with "ALL 3 HAVE FORMULAS · OUR EXAMPLE" in small type under it. Read fast, a meter that drops to "NONE" looks like a loss. The round-3 student: "A meter going to 'NONE' read like a bad thing at first." Two students in a row tripped on the same mark. Should-fix (screen only), because the student still got Q1 in full.
- **Fix** (0 spoken words): in shots 11 and 19, replace the now-state "NONE" with a big teal "ALL 3 HAVE FORMULAS" and a tick, and keep only the small "OUR EXAMPLE" under it. The meter's boxes show empty, and the label "TOTALS WITH NO FORMULA" stays, so the before and the now still count one unit. Update `viewer.md` shots 11 and 19, `lesson.md`'s Q1 Picture line and "The counted example" line ("NONE" -> "ALL 3 HAVE FORMULAS"), and `research.md`'s "Our example" meter line. Keep "OUR EXAMPLE" (narrowing: the sources do not say Claude writes every number as a formula).
- **Rule**: When a meter counts something bad going to zero, show its good end in words ("ALL 3 HAVE FORMULAS"), not "NONE" under a label that already says "no".

### Should-fix 2 (G3, L60 wording): Q3's answer key quotes the old line 5
- **What**: `lesson.md` Q3's A still says "now, in the paid-plan beta, the sheet stays in Claude", but line 5 now says "the spreadsheet stays in Claude". The L76 entry still lists '"sheet" the Claude Sheets sheet', but the spoken word is now "spreadsheet" and "sheet" is only on the card. Every part is still spoken in substance, so this is not a G3 must-fix. It is a key that was not re-quoted after the final cut, which L60's 2026-11-26 repeat warns about. Should-fix.
- **Fix** (0 spoken words, `lesson.md` only): Q3's A becomes "Before, you pasted the table into another tool, where Claude had no live access to your edits; now, in the paid-plan beta, the spreadsheet stays in Claude, and you both edit the same cells." In L76, "sheet" becomes '"spreadsheet" (line 5) and the card's "SHEET" are the Claude Sheets spreadsheet'.
- **Rule**: none (L60 and L74 already say it: re-quote every answer key and Lesson check entry from the final script).

## Notes, not fails
- The student's Q3 again ends "and Claude can see your edits". That is the maker's own before/after framing (row 7: before, "Claude didn't have live access"; row 8: now it stays in Claude). No line claims Claude watches every keystroke (narrowing item 5), so this is not a fail; keep it that way.
- The student's wishes (which paid plans and how to get in, what happens after the card goes, how long the outline lasts, real digits in the grid, whether Claude catches the Q4 skip itself) ask for more detail than 60 s holds, or are visual craft. Plans and version history belong in the description. The video shows that *you* check ("so you can check"), which is right: nothing in the sources says Claude flags a wrong range by itself in this flow.
- Re-run the claim check on lines 5 and 8 (changed since round 2) before voicing.
