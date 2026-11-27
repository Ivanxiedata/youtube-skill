gate: pass (2 should-fix)

> Note (after the claim check, step 3b): lines quoted below predate claims.md's fixes: "your math teacher's rule" is now "a math teacher's rule", "so mistakes show!" is now "so mistakes can show!", and "they're formulas you can check" is now "they can be formulas you check" (claims.md rows 3, 4, 16).

Round 3 (re-gate, the last allowed), critic. G0 passes: `viewer.md` holds only the spoken lines and plain screen descriptions in order, and its Spoken section matches `film/script.txt` line for line (diffed, identical).
Word count (film/script.txt, "A I" = 2): 22 + 12 + 20 + 13 + 15 + 17 + 10 + 14 + 20 + 10 = **153** (budget about 150, cap 157.5). Line 1 lost one word ("numbers" -> "math", "its" dropped). After both should-fixes below: at most **156**.

## Student notes (verbatim, from gate_student3.md)


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

## Earlier fails: status

| Round | Fail | Status | Evidence |
|---|---|---|---|
| 1 | M1 (the before's "no" claims had no reason; G3, G8, L64) | still fixed | Lines 3 and 4 unchanged: "as plain text: three totals, no work shown." and "Claude, outside that tool, couldn't follow your edits." Student 3 repeats both ("pasted ... as plain text", "Claude was outside that tool and could not follow your edits"). Its "why Claude could not follow edits outside the tool: taken on faith" comes after it repeats the spoken reason; that is the wish rule (see G3), and the plainer source wording is offered as S2. |
| 1 | M2 (Q2's without-picture missing; G5, L70) | still fixed | Shot 14 keeps the "PASTED" panel "LOOKS FINE" and the circled homework line. Student 3's Q2: "A pasted total is just a number that looks fine". |
| 1 | M3 ("UPDATED" for "edit"; G9, L76) | still fixed | Shot 16 card "CLAUDE'S EDITS"; grep of `viewer.md` for "chang"/"updat": none. |
| 1 | S1 (no kind word for the product; G9, L67) | still fixed | Line 1 keeps "Claude Sheets, twenty twenty-six beta spreadsheet:". |
| 1 | S2 ("after you're back" had no place; G9) | still fixed | Shot 17 "IT GOES A FEW SECONDS AFTER YOU'RE BACK IN THE SHEET" / "OR WHEN YOU EDIT A CELL"; the student repeats it. |
| 2 | M1 (`lesson.md` keys and a Picture line stale; G3, G12 L60, L74) | **fixed** | Q1's key no longer holds "like answers alone"; it now reads "Our totals were pasted as plain text, no work shown, so checking meant redoing the math; in Claude Sheets, its formulas stay in the cells, like shown work, so you can check how each number was calculated.", and every part is spoken (lines 3, 4, 6). Q3's key now reads "it stays in Claude" (line 5). Q3's Picture now quotes shot 17's two-line label exactly. |
| 2 | S1 (=SUM on screen not read; G9) | **fixed** | Shot 13 now has "=SUM: ADDS THESE CELLS", and `lesson.md` Q1's Picture has it too. Student 3: "'=SUM' explained", "=SUM(Q1:Q4), which adds the four quarter cells". |

Changed line 1, checked: "you think checking A I math will cost you a redo, but actually formulas show how." Using "math" ties the hook to line 4's "redoing the math", the same thing, so L76 is met. It still states the wrong belief as a step (checking, not trusting; L89, G7) and corrects it in the same sentence. Dropping "its" makes "formulas show how" a general statement that is true (row 4) and claims nothing about Claude beyond what row 4 says. Shot 3 ("THE FORMULA SHOWS HOW") still matches it. The student's "takes a sentence to parse" is about hook craft, which is out of scope; it still got the idea ("see how each number was built ... instead of redoing the math").

## G1-G13

| # | Check | Result | Fix |
|---|---|---|---|
| G0 | Viewer file | pass: no notes, ids or rows; the Spoken section is identical to `film/script.txt` | |
| G1 | Main idea is an insight | pass (run in full): "When an AI shows its work as formulas in the cells, checking its numbers means checking each step, not redoing the math." It is a belief change, not a headline or a mechanism. No who, when or count. "each" is row 4's word, and there is no superlative. It is **22** words, not the "(21 words)" `lesson.md` states: still under 25, so only the label is stale (S1). | S1 |
| G2 | Deepest true idea | pass (run in full): the deepest gap in the rows is "check, not proof" (row 4 "see and check"; where the analogy stops, (1)). The idea's frame ("checking each step") and every line ("you can check") hold it, and the student draws the limit itself ("A formula could also be wrong"). "Simple for now" (row 15) is shallower. Nothing deeper fits 60 s. | |
| G3 | The student got it | pass (run in full; every key part re-ticked against the current script). The main idea matches `lesson.md`'s: "see how each number was built and spot a mistake, instead of redoing the math on pasted plain numbers". Q1 is answered in full (formulas in the cells, see what it adds; pasted plain numbers, so redo the math). Q2 is answered in full (=SUM(Q1:Q3), Q4 left out; the pasted one "looks fine"). Q3 is answered in full (same cells instead of another tool where Claude can't see your edits; outlined; undo for a short time; "just those edits" is in its friend explanation 4). Key parts, each found spoken: "as plain text: three totals, no work shown", "Checking meant redoing the math", "Its formulas stay in the cells, like shown work: you can check how each number was calculated", "show your work, so mistakes show!", "If our total skipped a quarter, its formula shows it!", "Claude, outside that tool, couldn't follow your edits.", "in the paid-plan beta, it stays in Claude; you both edit the same cells.", "Claude's edits are outlined as they land; a card can undo just those, briefly." The student marks three things as on faith: (a) why Claude couldn't follow edits outside the tool, after repeating "Claude was outside that tool"; (b) whether you'd notice =SUM(Q1:Q3) among many cells; (c) why the totals were pasted as plain text. Each comes after it repeats the spoken reason correctly and asks how it works inside, so the wish rule wins and none is a fail. For (a) the source has a plainer reason that fits the budget (S2). | S2 |
| G4 | Questions worth asking | pass: why / how / what changes; each asks for its whole key | |
| G5 | Shown, not asserted | pass: Q1 "NO FORMULA" vs "=SUM(Q1:Q4)" ("=SUM: ADDS THESE CELLS") with its cells outlined, and the meter 3 -> "ALL 3 SHOW THEIR WORK"; Q2 "=SUM(Q1:Q3)", "SKIPPED Q4!" beside "PASTED · LOOKS FINE" and the circled homework step; Q3 the robot behind the wall vs both cursors in "SAME CELLS", and only the new column undone | |
| G6 | Why it matters | pass: "you can check how each number was calculated" (row 4), "If our total skipped a quarter, its formula shows it!" (S4), "Claude, outside that tool, couldn't follow your edits." (row 7), "you both edit the same cells" (row 3), "Claude's edits are outlined as they land; a card can undo just those, briefly." (rows 5, 6) | |
| G7 | Misconception | pass: "you think checking A I math will cost you a redo, but actually formulas show how." It is worded as the step (L89) and corrected in the same sentence, then shown (line 6). `lesson.md`'s Misconception quotes the current line 1. | |
| G8 | No faith steps | pass: "show your work, so mistakes show!"; each "no"/"couldn't" in the before has a spoken reason ("as plain text", "outside that tool"; L64); "Its formulas stay in the cells" is the reason for "you can check" | |
| G9 | Every line serves | pass: every body line serves Q1, Q2 or Q3. One scroll-away moment in the body (undo/timer, lines 8 and shots 15-17, which serves Q3); the opening and the subscribe ask are exempt. The new label "=SUM: ADDS THESE CELLS" uses "adds", which no other line or label uses for anything else. The student's "paid-plan beta: which plan?" and "who offers it" ask for more detail than 60 s holds (row 2's list goes in the description), so they are not fails. | |
| G10 | True main idea | pass (run in full). The takeaway "our three pasted totals showed no work; in the paid-plan beta, they're formulas you can check." keeps every condition: "our three pasted totals" (our example, the before, the calculated numbers), "paid-plan beta", "formulas", and "you can check" (not "right"). It uses the same unit as the picture it closes on ("ALL 3 SHOW THEIR WORK", the 3 totals the formulas show working; L84). The main idea's "an AI" is conditional ("when ... formulas in the cells") and claims no more than row 4. The changed line 1 adds no claim. | |
| G11 | Carry-over limits | pass: "you can check", never "right" or "trust" | |
| G12 | Lessons | pass: each Lesson check and Misconception entry re-quoted and grepped against the current `film/script.txt` and `viewer.md`. Every quoted phrase is found, including L60's key lines, L63's "you think checking A I math will cost you a redo, but actually formulas show how.", L64's "as plain text" and "outside that tool", L66's takeaway words, L67's "twenty twenty-six beta spreadsheet" and "fx = FORMULA", L71's "2026", L76's "CLAUDE'S EDITS" and L89's "checking ... will cost you a redo". The Picture lines for Q1-Q3 match `viewer.md` shots 2, 6-17. No open `check: gate` lesson is broken. Two pieces of bookkeeping are stale, though no quote is: L74's entry says "re-quoted from the round-2 `film/script.txt` after the round-1 fixes", and the main idea says "(21 words)" (S1). | S1 |
| G13 | A story everyone knows | pass: the math teacher's "show your work" (S1-S4). The mechanism matches: a formula is the written step, and the skipped quarter is the skipped step (S4). It carries the before (shot 2's answers-only page, shot 14's circled line) and the now ("like shown work", line 6), and the takeaway's "showed no work" closes on it. "Our example" lives inside the story. | |

## Fixes

### S1 (should-fix): `lesson.md`'s own bookkeeping is stale (G1 label, G12 L74 entry)
- **What:** should-fix. The main idea is labelled "(21 words)" but has 22. The L74 Lesson check entry says it was "re-quoted from the round-2 `film/script.txt` after the round-1 fixes"; this round's quotes are from the round-3 script. Every quote itself is current.
- **Fix:** 0 spoken words, `lesson.md` only. "(21 words)" becomes "(22 words)", and in L74's entry "re-quoted from the round-2 `film/script.txt` after the round-1 fixes" becomes "re-quoted from the round-3 `film/script.txt` after the round-2 fixes".
- **Rule:** none (L74: after every round, update the Lesson check's own round and count labels along with its quotes).

### S2 (optional should-fix): line 4's reason is a place, not the source's cause (G8 should-fix, row 7)
- **What:** should-fix. "Claude, outside that tool, couldn't follow your edits." The student repeated it and still asked why. Row 7 gives the cause in plain words: "where Claude didn't have live access to follow progress and changes".
- **Fix:** line 4's second half "Claude, outside that tool, couldn't follow your edits." (8 words) becomes "Claude, with no access to that tool, couldn't follow your edits." (11 words, +3; total 156, inside 157.5). Keep the voice line's length in mind. If it runs long, skip this fix: the current line passes G8. If applied, update all of these together:
  - shot 9's label "OUTSIDE: CAN'T FOLLOW YOUR EDITS" becomes "NO ACCESS: CAN'T FOLLOW YOUR EDITS";
  - `viewer.md`'s Spoken line;
  - `lesson.md` Q3's key and Picture;
  - the L60, L64 and L72 entries ("with no access to that tool");
  - then re-grep.
- **Rule:** When the before says the AI "couldn't" do something, give the source's cause (no access), not only where the AI was.

## Budget
153 now; S1 0, S2 +3 (optional): at most **156** (cap 157.5).
