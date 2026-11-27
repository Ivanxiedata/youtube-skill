gate: fail (3 must-fix, 2 should-fix)

> Record of a content-gate round (verbatim, before the claim check). Lines quoted here predate claims.md's fixes: "your math teacher's rule" is now "a math teacher's rule", "so mistakes show!" is now "so mistakes can show!", "they're formulas you can check" is now "they can be formulas you check" (claims.md rows 3, 4, 16).


Round 1, critic. G0 passes: `viewer.md` holds only spoken lines and screen descriptions, and its Spoken section is byte-identical to `film/script.txt` (diffed).
Word count (film/script.txt, "A I" = 2): 22 + 12 + 19 + 13 + 16 + 17 + 10 + 14 + 20 + 10 = **153** (budget about 150, cap 157.5). After every fix below: **155**.

## Student notes (verbatim, from gate_student1.md)

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

## G1-G13

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass: 21 words, a belief change (checking = reading each step, not redoing), no who/when/count, no unsupported absolute ("each number" is row 4's word) | |
| G2 | Deepest true idea | pass: the deeper gap in the rows (shown work lets you check, it doesn't make the number right; row 4 "see and check", analogy limit 1) is already the idea's frame ("you can check"); nothing deeper fits 60 s | |
| G3 | The student got it | **must-fix**: main idea matches; Q1 and Q2 answered; but the student marks two key parts as taken on faith: Q1's "just text" ("I'm not sure why pasting loses the formulas") and Q3's "Claude had no live access to your edits" ("taken on faith"), and Q3's answer drops the before (Claude couldn't follow your edits) | M1 |
| G4 | Questions worth asking | pass: why / how / what changes; each asks for its key | |
| G5 | Shown, not asserted | **must-fix**: Q2 asks how a formula catches what "a pasted total would hide", but `viewer.md` shot 14 shows only the formula side; the pasted plain number that looks fine, and the homework page with the skipped step circled beside it, are in `lesson.md`'s Picture and Lesson check (L61) but not in `viewer.md` | M2 |
| G6 | Why it matters | pass: "you can check how each number was calculated" (row 4) and "you both edit the same cells" (row 3), both spoken; every part of `lesson.md`'s reason reaches the script | |
| G7 | Misconception | pass: "you think checking A I numbers will cost you a redo, but actually its formulas show how." Worded as the step (checking), not trusting (L89) | |
| G8 | No faith steps | **must-fix** (L64 repeat, G12): the before's "no work shown" gets only "just text" (a restatement, not a reason), and "Claude had no live access to your edits" gets no spoken reason; exactly the claude-sheets repeat L64 names ("why the pasted table had no formulas, why Claude couldn't follow it") | M1 |
| G9 | Every line serves | **must-fix** (L76 repeat, G12): every line says "edit(s)" for Claude's action, then shot 16's card label says "CLAUDE UPDATED THE SHEET" (one action, two words). **should-fix**: "Claude Sheets" first said in line 1 with no kind word (the student: "I can't tell what it is"); "the spreadsheet" only arrives in line 5. **should-fix**: shot 17's label "AFTER YOU'RE BACK" (the student: "'Back' from where?") | M3, S1, S2 |
| G10 | True main idea | pass: the takeaway keeps "our three pasted totals", "paid-plan beta", "formulas", "you can check"; same unit (totals) as the meter it closes on; it counts the 3 totals, the cells the formulas are | |
| G11 | Carry-over limits | pass: "you can check", never "right" or "trust"; the student itself drew the limit ("That's checking, but it's not automatic") | |
| G12 | Lessons | **must-fix**: L64 broken again (M1); L70 and L74 broken again (M2: the without-picture is in `lesson.md`, not in `viewer.md`; Lesson check L61 quotes "beside the plain pasted number", which `viewer.md` doesn't have; L64's entry calls "just text" a reason); L76 broken again (M3). Other open gate lessons re-quoted and met: L58, L59, L60, L61 (Q1, Q3), L62, L63, L65, L66, L67 (product is "the spreadsheet" in line 5, "fx = FORMULA", meter ends "ALL 3 SHOW THEIR WORK"), L68, L69, L71 ("BETA · 2026" said), L72, L77, L78 n/a, L81, L84, L89 | M1, M2, M3 |
| G13 | A story everyone knows | pass: the math teacher's "show your work" (S1-S4), mechanism matches (a formula is the written step; a skipped quarter is the skipped step, S4); the story carries before (shot 2, answers-only page) and now ("like shown work", line 6); "our example" lives inside it | |

## Fixes

### M1 (must-fix): the before's two "no" claims have no reason (G3, G8, G12 L64)
- **What:** line 3 "three totals, just text, no work shown." and line 4 "Claude had no live access to your edits." "Just text" restates "no work shown"; nothing says why the pasted totals had no formulas, or why Claude couldn't follow your edits. The student marked both as taken on faith and left the before out of Q3. Must-fix, a repeat of L64.
- **Fix:** replace line 3 (19 words) with "Before, in our example, Claude's chat gave plain numbers; you pasted them into another tool: three totals, no work shown." (20 words, +1); the reason is that the chat gave numbers only (our example's own premise, `research.md` "Our example": "a table pasted from chat holds values, not formulas"; narrowing 4 is kept by "in our example"). Replace line 4 (13 words) with "Checking meant redoing the math; and Claude, outside that tool, couldn't follow your edits." (14 words, +1; row 7: "another tool ... where Claude didn't have live access to follow progress and changes"). Net +2, total 155. On screen: shot 7's tag "JUST TEXT" becomes "PLAIN NUMBERS"; shot 9's label becomes "OUTSIDE: CAN'T FOLLOW YOUR EDITS". In `lesson.md`: Q1's key "Our pasted totals were just text" becomes "Our chat gave plain numbers, so the pasted totals showed no work"; Q3's key "Claude had no live access to your edits" becomes "Claude, outside that tool, couldn't follow your edits"; re-quote the L60, L64, L77 entries.
- **Rule:** none new (L64 repeated: every "no X" or "couldn't" in a before line gets its reason in the same line; a restatement such as "just text" is not a reason).

### M2 (must-fix): Q2's without-picture is in lesson.md, not on screen (G5, G12 L70, L74)
- **What:** Q2 asks how a formula catches a mistake "a pasted total would hide". `lesson.md`'s Picture and its L61 entry promise "the pasted version of the same total sits as a plain number that looks fine" and the homework page with the skipped step circled beside it; `viewer.md` shot 14 shows only "=SUM(Q1:Q3)" and "SKIPPED Q4!". Must-fix.
- **Fix:** no words (0 net). In shot 14, add on the left a small grey panel "PASTED": TEAM B's total as a plain grey bar, formula bar "NO FORMULA", label "LOOKS FINE"; the existing formula side on the right under "CLAUDE SHEETS"; under both, a small homework line with a skipped step circled in amber. Write it into `viewer.md` shot 14, then re-tick `lesson.md`'s Picture lines and Lesson check L61 against the new `viewer.md`.
- **Rule:** none new (L70 and L74 repeated: every picture `lesson.md` names, the without side above all, is in `viewer.md` before the student runs).

### M3 (must-fix): "UPDATED" on the card for what every line calls "edit" (G9, G12 L76)
- **What:** lines 4, 5, 8 and shot 17 say "edit(s)" for the action; shot 16's card says "CLAUDE UPDATED THE SHEET". One action, two words. Must-fix, a repeat of L76 (the sources don't quote the card's literal text: row 6 says only "a card says what Claude updated").
- **Fix:** no words (0 net). Shot 16's card reads "CLAUDE'S EDITS" with the "UNDO" button; the same in `lesson.md` Q3's Picture.
- **Rule:** none new (L76 repeated: once a line names an action, every label uses that word, cards included).

### S1 (should-fix): the product has no kind word when it is first named (G9, L67)
- **What:** line 1 "Claude Sheets, twenty twenty-six beta:" names the product with no kind word; "the spreadsheet" comes four lines later. The student: "I can't tell what it is, whether it's a real product". Should-fix (L67 is met once, in line 5, but late).
- **Fix:** replace line 1's opening "Claude Sheets, twenty twenty-six beta:" (5 words) with "Claude Sheets, Claude's new spreadsheet:" (5 words, 0 net); the rest of line 1 is unchanged. "beta" is still said in lines 5 and 9. On screen, drop "2026" from the title card's "BETA · 2026" and from shot 2's tag (L71: it would no longer be said). Update `lesson.md`'s L67 and L71 entries.
- **Rule:** Say what kind of thing a product is the first time its name is spoken, not later.

### S2 (should-fix): "after you're back" has no place (G9)
- **What:** shot 17's label "IT GOES A FEW SECONDS AFTER YOU'RE BACK"; the student: "'Back' from where?" Should-fix.
- **Fix:** no words (0 net). The label reads "IT GOES A FEW SECONDS AFTER YOU'RE BACK IN THE SHEET" / "OR WHEN YOU EDIT A CELL" (row 6: "a few seconds after you're back in the sheet").
- **Rule:** A label that shortens a source's condition keeps its place or object ("back in the sheet", not "back").

## Budget
153 now; M1 +2, M2 0, M3 0, S1 0, S2 0: **155** (cap 157.5).
