gate: pass (5 should-fix)

## Student (round 1)

### 1. Main idea
Instead of making one big, expensive AI model do every step of a coding job, Antigravity's Orchestrator lets the big model (Carbon) write the plan and a faster model (Hydrogen) do the edits and tests, and Google says the results are almost as good for less quota and time.

### 2. Ideas, explained to a friend

**Split of work.** Imagine a 10-step coding task. The big model, Gemini 4 Carbon, reads the code and writes a plan (step 1). The faster model, Gemini 4 Hydrogen, then does the edits and runs the tests (steps 2 to 5 and onward). The video showed this as a wall of 10 brick slots, with a meter counting how many steps Carbon had to do.

**What it was like before.** Before, Carbon did all ten steps. That was slow and ate your quota. The other option, a cheaper model alone, could break down on a hard step (it stopped at step 6 in the example). So you had to choose between expensive and slow, or cheap and risky.

**When it gets stuck.** If a test fails twice (the video's example was step 6), Hydrogen hands the problem back to Carbon, who fixes the plan. Then Hydrogen carries on. In the example Carbon did only two steps (the plan and the fix) and Hydrogen did the other eight.

**The numbers.** On Google's test, on average, compared with Carbon alone, the Orchestrator was "almost as successful", used 24 percent less quota and was 19 percent faster. The "10 steps down to 2" figure is only the video's own example, not a Google result.

### 3. Confusions, faith claims, scroll-away moments

Words, labels, numbers I can't explain:
- "Anti-gravity" / "Antigravity": what is it? A product, an editor, a tool? Never said. "Orchestrator" is not defined either, beyond the diagram.
- "Gemini four Carbon" and "Hydrogen": odd names. Is Carbon the "top" model and Hydrogen the small one? Said "a top Google model", but it isn't clear how they relate to the Gemini models I know.
- "Quota": quota of what (tokens, requests, money, a monthly allowance)? "24 percent less quota" is vague.
- "Almost as successful": no number. Almost as in 95 percent or 70 percent?
- "Google's test" / "Terminal-Bench": shown on screen only. What does it measure? How many tasks?
- "On average": averaged over what?
- "Or the planner you pick" (small on-screen line): unexplained. Can I choose a different planner?
- "Steps": what counts as a step? Is a plan one step, an edit one step, a test one step?
- Line 4 says "a faster model almost matches it, at less cost" but the later numbers are about quota and time, not cost.

Claims taken on faith:
- That a faster model can do the edits and tests well. Why it is good enough is not explained.
- That Carbon "fixes the plan" in one step, so two steps always suffice. The failure is "for example", so it is unclear how often that happens.
- That the 10-to-2 reduction is typical. It is flagged as "our example", so I don't know whether real tasks look like this.
- Why "twice" is the threshold for handing back.
- Why success stays close: it is stated, not explained.

Scroll-away moments:
- "you think Gemini four Carbon must do every step, but actually, let it plan..." The opening is garbled and jargon-heavy; I don't know what the product is yet.
- "Here's how: one task, ten steps, our example." Setup before any payoff.
- "Or a cheaper one alone could break down on a hard step." A thin, abstract line.
- "On Google's test, versus Carbon alone: almost as successful, twenty-four percent less quota, nineteen percent faster, on average." Many numbers in one breath, with vague "almost".
- The "So, what we learned" recap repeats what was just said.

### Q&A from memory

**Q1. How does Orchestrator split one coding task between the two models?**
Carbon, the big model, reads the code and writes the plan. Hydrogen, the faster model, makes the edits and runs the tests.

**Q2. What happens when the faster model gets stuck, and why does that keep the result close?**
When a test fails twice, Hydrogen hands back to Carbon, who fixes the plan, and then it continues. The result stays close because the big model still handles the planning and the hard fix. The video only asserted it, and I'm inferring the reason.

**Q3. What changes for you?**
Less of your quota is spent on the big model: in the example, 2 steps instead of 10. On Google's test it was about 24 percent less quota and 19 percent faster, with success staying close. It isn't clear what I actually do differently. Maybe nothing, if Orchestrator is a setting.

## Student (round 2, fresh Sonnet student, viewer.md before the line-7 change below)
Main idea: In Google's Antigravity coding app, you don't have to use the top model, Gemini 4 Carbon, for every step: let Carbon write the plan, let a faster model (Hydrogen) do the edits and tests, and you get almost the same success while using less quota and finishing faster.
Q1: Carbon, the top model, reads the code and writes the plan; Hydrogen, the faster model, does the edits and runs the tests.
Q2: After a test fails twice, Hydrogen hands the hard step back to Carbon, which fixes the plan. The video implies this keeps results close because the strong model handles the hard part; it doesn't say outright why that's enough, so I'm partly inferring it.
Q3: I can choose Orchestrator instead of running the top model on every step: about 24% less quota and about 19% faster, with success close to Carbon alone (per Google's test, on average). In the example Carbon's steps go 10 -> 2. I can also pick a different planner.
Flagged: "Gemini four Carbon"/"Hydrogen" names; "quota" never defined; "almost as successful" has no number; Terminal-Bench only on screen; why "twice"; narration "Carbon fixes the plan" vs label "HARD STEP -> CARBON"; 10 -> 2 steps (80%) vs 24% quota feels inflated, covered only by a small on-screen line; scroll-away: the opening's three names, the setup line, the cheaper-model line, the dense numbers line, the recap.

Writer's change after this student run (before the critic): line 7 now "A test fails twice? Hydrogen hands the hard step back, so the hard thinking stays with Carbon, which fixes the plan." (+6 words; for the student's partly-inferred Q2 reason); the shot-13 label is now "HARD STEP: CARBON FIXES THE PLAN".

## Student (round 3, fresh Sonnet student, current viewer.md)
Main idea: In Google's Antigravity coding app, a top model (Gemini 4 Carbon) plans the work and a faster model (Gemini 4 Hydrogen) does most of the editing and testing, handing the hard steps back to Carbon, so you get almost the same success for less quota and less time.
Ideas: before, Carbon did all ten steps, slow and using up your subscription quota; with Orchestrator, Carbon reads the code and writes the plan, Hydrogen does the edits and tests, Carbon ends up doing 2 of 10 (our example). A test on step 6 fails twice; Hydrogen hands the step back to Carbon; Carbon fixes the plan; Hydrogen carries on. A cheaper model alone can break down on a hard step (stopped at step 6). On Google's coding test, averaged, almost as successful as Carbon alone, 24% less quota, 19% faster.
Flagged: Carbon/Hydrogen names (what Hydrogen is worse at); "quota" in practice (tokens, messages, dollars?); "almost as successful" has no number; Terminal-Bench never explained, Google's own test; "OUR STEPS ARE NOT EQUAL IN QUOTA" confusing (why 2 of 10 steps only saves 24%); "twice" spoken as fact, "for example" only on screen; "you can pick another" planner only on screen; the 10-step meter looks like a result though it's an illustration; why a plan fix fixes the failing step. Scroll-away: the dense hook, the cheaper-model aside, the stats line, the recap.
Q1: Carbon, the top model, reads the code and makes the plan; Hydrogen, the faster model, does the edits and tests.
Q2: When a test fails twice, Hydrogen hands the step back to Carbon; Carbon fixes the plan and Hydrogen continues. Carbon still handles the hard step, so the result stays close to Carbon doing everything; the only evidence is Google's average.
Q3: You can pick Orchestrator, so the expensive model only does the planning and the hard fixes; Google's test shows about 24% less quota and 19% faster, with success almost the same. The video doesn't say how to switch it on or what it costs in money.

## Critic (round 3, re-gate, last round)

G0: pass. `viewer.md` holds only the spoken script and plain picture descriptions (no notes, ids, rows or shot-number instructions); its 11 spoken lines equal `film/script.txt` (diffed, identical).
Word budget: 155 spoken words (hyphenated words as two), inside style A's 157 limit (150 + 5%); the fixes below bring it to 156.

Re-check of round 2's fails:
- M1 (G12 via L74, G7): **fixed.** Every quoted phrase in `lesson.md`'s Lesson check and Misconception entry is in `film/script.txt` (checked with `grep -F`, 27 phrases, none missing); main idea word count 22, right.
- M2 (G3, "Hydrogen carries on" unspoken): **fixed.** Line 8 "Hydrogen carries on; Carbon: two steps, not ten."; the round-3 student repeats it in Q2 ("Hydrogen continues").
- M3 (budget): **fixed.** 155 words.
- S1 ("plan" for two things): **fixed.** Line 3 "draining your subscription's quota"; shot 6 "YOUR SUBSCRIPTION'S QUOTA"; "plan" now only means Carbon's plan.
- S2 (hook "without wasting quota"): **fixed.** "for less quota", matching shot 3 and the proof.
- S3 (steps are not quota): **not fixed.** The writer rightly refused the proposed "A PLANNING STEP USES MORE QUOTA THAN AN EDIT" (no `research.md` row says it; only "where the analogy stops" does, unsourced), but the replacement "OUR STEPS ARE NOT EQUAL IN QUOTA" gives no reason, and the round-3 student flagged it as confusing ("why 2 of 10 steps only saves 24%"). Still should-fix: S1 below.
- Round-2 writer's line-7 change (reason for the hand-back, not heard by a student before): **confirmed.** The round-3 student gives the reason without marking it as inferred: "Carbon still handles the hard step, so the result stays close".

Changed lines checked: hook, lines 3, 5, 6, 7, 8, 10, shots 6 and 17. All carry their conditions (narrowing 2, 3, 8, 9); line 6 ties Hydrogen to the hook's "a faster model" and says what kind of thing it is (L67). Only shot 17's new line fails (S1).

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass (in full): "A top model needn't do every step: planning, and re-planning when a faster model gets stuck, can keep results close for less." 22 words; a belief the viewer will hold, no who/when/count; "every" sits inside the negated misconception, not an absolute claim; "a top", "can" keep narrowing 8 and row 5 | |
| G2 | Deepest true idea | pass (in full): the deeper rows 3 and 11 idea (difficulty shows up as the task unfolds, so the split changes mid-task, not per prompt) is the main idea's "re-planning when a faster model gets stuck"; the "done but not yet" gap (no exact success rate, row 5) is carried by "can" and "almost"; row 22 (no per-step logs) is a governance caveat, not a deeper idea within 60 s | |
| G3 | The student got it | pass (in full): main idea matches (top model plans, faster model does most steps, hands hard steps back, almost the same success for less quota). Q1 full. Q2 full, reason included and not marked as faith; the "cheaper model alone could break down" part is in the student's notes ("stopped at step 6"); "why a plan fix fixes the failing step" is a how-it-works-inside wish after repeating the spoken reason (wish rule). Q3 full ("pick Orchestrator", 24% / 19% / almost the same; "2 of 10 (our example)" in the notes); "how to switch it on" is a wish (the voice says "pick Orchestrator"). Every answer-key part ticked against a spoken line | |
| G4 | Questions worth asking | pass (unchanged) | |
| G5 | Shown, not asserted | pass (unchanged: cheaper model alone stuck at HARD STEP vs the hand-back; meter 10 vs 2; bars) | |
| G6 | Why it matters | pass (quota/time line and hand-back line both spoken) | |
| G7 | Misconception | pass: said and corrected in the hook; `lesson.md` now quotes the current hook | |
| G8 | No faith steps | pass on must-fix. Should-fix: "A test fails twice?" is spoken as the trigger; "for example" (narrowing 4) is only on screen, and the student flagged "'twice' spoken as fact" | S4 |
| G9 | Every line serves | pass on must-fix. Should-fix: 3 scroll-away moments in the body (the cheaper-model line, the stats line, the recap; the recap is brand, the stats line was split in round 1), the cheaper-model line flagged in all three rounds | S3 |
| G10 | True main idea | pass (in full): takeaway keeps "in our example" (steps) and "on Google's test" (success), in the units of the closing card ("OUR EXAMPLE: CARBON'S STEPS, 10 -> 2", "GOOGLE'S TEST: SUCCESS STAYED CLOSE"), as long as the now lines it restates; main idea keeps "a top" and "can". S5 keeps both conditions | |
| G11 | Carry-over limits | should-fix: shot 17's "OUR STEPS ARE NOT EQUAL IN QUOTA" names the gap but not why; the student still asks why 2 of 10 steps is only 24% less quota; `lesson.md`'s leave-out list still says the screen gives the planning-step reason | S1 |
| G12 | Lessons | pass: L58-L72, L74, L76, L77 met (Lesson check entries re-quoted and grepped); L78 n/a. Near-miss under L76, not a break (the student read them as one result): the result is "almost matches it" (hook), "almost as successful" (proof) and "success stayed close" (takeaway); S5 makes the takeaway reuse the proof's words. Stale non-Lesson-check text in `lesson.md`: S2 | S2, S5 |

No must-fix is left, so the gate passes. The should-fixes below cost net +1 spoken word (156).

### S1 (should-fix; G11): shot 17 names the steps-vs-quota gap without the reason
- **What:** the round-2 S3 line was replaced with "OUR STEPS ARE NOT EQUAL IN QUOTA", which only says the gap exists; the round-3 student: "confusing (why 2 of 10 steps only saves 24%)". `lesson.md`'s "What we leave out" still says "(a planning step uses more than an edit): said on screen in the proof shot", which neither the screen nor a row says.
- **Fix:** on screen only, shot 17: "OUR STEPS ARE NOT EQUAL IN QUOTA" -> "THE QUOTA COUNTS BOTH MODELS" (row 5: "Orchestrator ... consuming 24% less quota": the 24% is Orchestrator's quota, both models together, so Hydrogen's eight steps are inside it). No new number (L71). In `lesson.md`'s leave-out bullet, replace "(a planning step uses more than an edit): said on screen in the proof shot" with "(the 24% counts both models' quota, Hydrogen's steps too): said on screen in the proof shot as THE QUOTA COUNTS BOTH MODELS"; and in Q3's Picture the same label. Net 0 spoken words.
- **Rule:** When a counted example's unit differs from the maker's number, say on screen what the maker's number counts, with its row; never a reason no row gives.

### S2 (should-fix; G9 in `lesson.md`, near L74): the leave-out list quotes an old on-screen label
- **What:** `lesson.md` "What we leave out": "on screen as 'OR THE PLANNER YOU PICK'"; shot 8 has said "PLANNER: CARBON HERE · YOU CAN PICK ANOTHER" since round 1. Not a Lesson check entry, so L74 is not broken.
- **Fix:** in `lesson.md` only: "OR THE PLANNER YOU PICK" -> "PLANNER: CARBON HERE · YOU CAN PICK ANOTHER". Net 0 spoken words.
- **Rule:** none new (extend L74's re-quote to every quote in `lesson.md`, not only the Lesson check).

### S3 (should-fix; G9): the cheaper-model line reads as an aside
- **What:** line 4 "Or a cheaper one alone could break down on a hard step." Flagged as a scroll-away moment in rounds 1, 2 and 3: "one" is vague and the line hangs after the before line instead of posing the other choice.
- **Fix:** line 4 -> "A cheaper model alone? It could break down on a hard step." Net 0 (12 words; "model" says what "one" was; the question makes it the second option of the before, which shot 7 already shows).
- **Rule:** none.

### S4 (should-fix; G8, narrowing 4): "twice" is spoken as the only trigger
- **What:** line 7 "A test fails twice? Hydrogen hands back, ..." Row 9 gives a check failing twice as one example of friction; the voice says it as the rule, "FOR EXAMPLE" is only on screen; the student flagged it.
- **Fix:** line 7 "A test fails twice? Hydrogen hands back," -> "Say a test fails twice: Hydrogen hands back," (rest of the line unchanged). Net +1.
- **Rule:** A hedge the sources need ("for example", "one of") is spoken, not only drawn.

### S5 (should-fix; G12 near L76): the takeaway names the result with a third phrase
- **What:** line 10 "...on Google's test, success stayed close." while the proof line says "almost as successful" and the hook "almost matches it".
- **Fix:** line 10 "on Google's test, success stayed close." -> "on Google's test, almost as successful." Net 0. On screen, shot 19's amber line "GOOGLE'S TEST: SUCCESS STAYED CLOSE" -> "GOOGLE'S TEST: ALMOST AS SUCCESSFUL" (same as shot 16). `lesson.md` L66 entry: re-quote the new line.
- **Rule:** none new (L76).

### Word budget
155 now; S1 0, S2 0, S3 0, S4 +1, S5 0 = 156 (at most 157). After the fixes, update `viewer.md` (lines 4, 7, 10; shots 17, 19) to equal `film/script.txt` (G0) and re-quote `lesson.md`'s L64, L60, L66 entries (L74). This was round 3, the last: the owner decides on anything still open.

## Round 2 critic (kept)

G0: pass. `viewer.md` holds only the spoken script and plain picture descriptions; its 11 spoken lines are identical to `film/script.txt` (diffed).
Word budget: 166 spoken words now (hyphenated words as two), over style A's 157 limit (150 + 5%). The fixes below bring it to 157.

Re-check of round 1's fails: M1 (hook credit, "cost" vs "quota") fixed: "Google says", "quota" (but see S2). M2 (labels) fixed: "Google's coding app", "pick Orchestrator", "Google's coding test"; "your plan's quota" fixed the base but brings a new clash (S1). M3 (reason for the hand-back) fixed by the writer's line-7 change: "so the hard thinking stays with Carbon" is the answer key's reason, said in the same breath; no student has heard it yet, so the round-3 student must confirm it. M4 (main idea) fixed. S1 (planner line) fixed on screen. S2 (numbers line split) fixed. The L74 re-quote round 1 asked for was not done (M1 below).

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass: "A top model needn't do every step: planning, and re-planning when a faster model gets stuck, can keep results close for less." 22 words, a belief, no who/when/count; "every" belongs to the misconception, not an absolute claim | |
| G2 | Deepest true idea | pass: the deeper row 3/11 idea (difficulty shows up as the task unfolds, so the split changes mid-task, not per prompt) is already "re-planning when a faster model gets stuck"; the "done but not yet" gap (no exact success rate, row 5) is carried by "close" and "can" | |
| G3 | The student got it | **must-fix**: Q2's answer key ends "and Hydrogen carries on"; no spoken line says it (ticked against the script: only the picture of the finished wall shows it). The round-2 student's "partly inferring" on Q2's reason is answered by the writer's line-7 change (pass, pending the round-3 student). Main idea: the student's matches the core claim (top model needn't do every step, close results for less quota). Q1, Q3 full | M2 |
| G4 | Questions worth asking | pass (unchanged) | |
| G5 | Shown, not asserted | pass (unchanged; shot 13's new label still shows the hand-back working) | |
| G6 | Why it matters | pass (quota and time line, hand-back line both spoken) | |
| G7 | Misconception | pass in the script (said and corrected in the hook); `lesson.md`'s Misconception entry quotes the old hook ("at less cost"), part of M1 | M1 |
| G8 | No faith steps | pass: the hook's claim is credited ("Google says"); line 7 gives the reason in the same breath. Should-fix: the hook's "without wasting quota" claims more than the proof's "24 percent less quota" | S2 |
| G9 | Every line serves | pass on must-fix. Should-fix: "your plan's quota" uses "plan" for the subscription while every other line uses "plan" for Carbon's plan, and the round-2 student still wrote "quota never defined" | S1 |
| G10 | True main idea | pass: the main idea keeps "a top" and "can" (narrowing 8, row 5); the takeaway keeps "in our example" (steps) and "on Google's test" (success), in the units of the closing cards ("CARBON'S STEPS, 10 -> 2", "SUCCESS STAYED CLOSE"); the rewrite below keeps both | |
| G11 | Carry-over limits | should-fix: the round-2 student read "10 -> 2 steps (80%) vs 24% quota" as inflated; the reason (a planning step uses more quota than an edit, research "where the analogy stops") is only implied on screen | S3 |
| G12 | Lessons | **must-fix**: L74 repeated: `lesson.md`'s Lesson check still quotes lines that are no longer spoken (see M1). L64, L67, L69, L76 now met | M1 |
| Budget | Word budget | **must-fix**: 166 words, over the 157 limit | M3 |

### M1 (must-fix; G12 via L74 repeated, G7): `lesson.md` quotes lines no longer spoken
- **What:** after the round-1 fixes, the Lesson check and the Misconception entry were not re-quoted. Not in `film/script.txt`: L62 and L64 "Hydrogen hands back; Carbon fixes the plan."; L63 and the Misconception entry "but actually, let it plan, and a faster model almost matches it, at less cost."; L67 "a top Google model" and "Orchestrator shown splitting the task" (now "pick Orchestrator", "Google's coding app", "Google's coding test"); L69 only "On Google's test" (the hook's "Google says" is now the first credit); L76 "'cost' in the hook ... 'it cost you quota'"; L77 "Before, one model did all ten" and "Now Carbon ... writes the plan"; L58 "24 words" (now 22); L59 "results stay close" (now "can keep results close"). Must-fix.
- **Fix:** in `lesson.md` only, after the script fixes below land: re-quote every Lesson check entry and the Misconception entry from the new `film/script.txt`, and grep each quoted phrase against it (`grep -F`). L76 becomes: "quota" is the one word for the cost in every line and label, "hands back" for the hand-off, "plan" only for Carbon's plan (after S1). Net 0 spoken words.
- **Rule:** none new (L74: after every fix round, re-quote each Lesson check entry from the current `film/script.txt` and grep it, before the next student run).

### M2 (must-fix; G3): "Hydrogen carries on" has no spoken line
- **What:** Q2's answer key is "Hydrogen hands back to Carbon, which fixes the plan, and Hydrogen carries on"; the voice stops at "fixes the plan", and line 8 only counts Carbon's steps. The back-and-forth (row 11: control goes back and forth as the work unfolds) is heard only half. Must-fix.
- **Fix:** line 8 "Carbon: two steps, not ten." -> "Hydrogen carries on; Carbon: two steps, not ten." Net +3.
- **Rule:** Every part of an answer key is spoken once, including the step after the fix (who carries on).

### M3 (must-fix; word budget): 166 words, 9 over the 157 limit
- **What:** the round-1 fixes (+7 planned) and the writer's line-7 addition (+6) pushed the script past 5% over 150. Must-fix.
- **Fix** (every condition and gate reason kept):
  - line 5 "Now pick Orchestrator: Carbon, a top model, reads the code and writes the plan." -> "Now pick Orchestrator: Carbon, a top model, reads the code and plans." Net -2.
  - line 6 "The faster Gemini four Hydrogen makes the edits and runs the tests." -> "Gemini four Hydrogen, a faster model, edits and tests." Net -3 (also ties Hydrogen to the hook's "a faster model" and says what kind of thing it is, L67).
  - line 7 "A test fails twice? Hydrogen hands the hard step back, so the hard thinking stays with Carbon, which fixes the plan." -> "A test fails twice? Hydrogen hands back, so the hard step stays with Carbon, which fixes the plan." Net -3 (keeps the reason in the same breath, and "hard step" from line 4's "break down on a hard step"; shot 13's label "HARD STEP: CARBON FIXES THE PLAN" still matches).
  - line 10 "So, what we learned: in our example, Carbon went from ten steps to two, and on Google's test, success stayed close." -> "So, what we learned: in our example, Carbon did two steps, not ten; on Google's test, success stayed close." Net -2 (both conditions kept; same words as line 8, L76).
  - M3 total -10.
- **Rule:** When a gate fix adds words, cut the same number in the same round and recount before the next student run.

### S1 (should-fix; G9, near L76): "plan" names two things
- **What:** line 3 "...and it used up your plan's quota." "Plan" here is the subscription; everywhere else it is Carbon's plan (lines 5, 7, labels "PLAN", "PLAN FIXED"). The round-2 student still flagged "quota never defined". Should-fix.
- **Fix:** line 3 "Before, Carbon did all ten: slow, and it used up your plan's quota." -> "Before, Carbon did all ten: slow, and it drained your subscription's quota." Net -1 (row 16: Pro and Ultra subscribers). On screen, shot 6: "YOUR PLAN'S QUOTA" -> "YOUR SUBSCRIPTION'S QUOTA" (the bar already drains).
- **Rule:** Use one word for one thing in both directions: never reuse a word the episode needs for something else.

### S2 (should-fix; G8, narrowing 9): the hook's "without wasting quota" claims more than the proof
- **What:** line 1 "...and a faster model almost matches it, without wasting quota." The proof is "twenty-four percent less quota" (row 5); "without wasting" says none is wasted. Should-fix.
- **Fix:** line 1 "but Google says let it plan, and a faster model almost matches it, without wasting quota." -> "but Google says let it plan: a faster model almost matches it, for less quota." Net -1 (the credit still covers both clauses; shot 3's "GOOGLE SAYS: ALMOST AS SUCCESSFUL, LESS QUOTA" now matches the voice).
- **Rule:** A hook's saving says no more than the proof: "less", not "without", when the number is a share.

### S3 (should-fix; G11): steps are not quota, only implied
- **What:** the round-2 student read 2 of 10 steps against 24% less quota as "inflated"; shot 17's "STEPS ARE OUR EXAMPLE; QUOTA IS GOOGLE'S TEST" separates the sources but not the reason. Should-fix.
- **Fix:** on screen only, shot 17: add a second small line "A PLANNING STEP USES MORE QUOTA THAN AN EDIT" (no number, L71). Net 0 spoken words.
- **Rule:** none.

### Word budget
166 now; M2 +3, M3 -10, S1 -1, S2 -1, M1 0, S3 0 = 157 (at most 157 allowed; hyphenated words as two, as in the 166). The full script after the fixes, counted at 157:
```
Anti-gravity's Orchestrator: you think Gemini four Carbon must do every step, but Google says let it plan: a faster model almost matches it, for less quota.
Our example: ten steps in Anti-gravity, Google's coding app.
Before, Carbon did all ten: slow, and it drained your subscription's quota.
Or a cheaper one alone could break down on a hard step.
Now pick Orchestrator: Carbon, a top model, reads the code and plans.
Gemini four Hydrogen, a faster model, edits and tests.
A test fails twice? Hydrogen hands back, so the hard step stays with Carbon, which fixes the plan.
Hydrogen carries on; Carbon: two steps, not ten.
On Google's coding test, versus Carbon alone, on average: almost as successful. Twenty-four percent less quota, nineteen percent faster.
So, what we learned: in our example, Carbon did two steps, not ten; on Google's test, success stayed close.
Want more? Subscribe, and comment what we should explain next.
```
Update `viewer.md` (spoken lines, shots 6 and 17) to match `film/script.txt` (G0), then re-quote `lesson.md` (M1) before the round-3 student.

## Round 1 critic (kept)


G0: pass. `viewer.md` holds only the spoken script and plain descriptions of the pictures; its 11 spoken lines are identical to `film/script.txt`. Spoken words now: 150 (style A budget about 150, at most 157).

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass (24 words, a belief, no who/when/count; its overclaim is G10's) | M4 |
| G2 | Deepest true idea | pass: the deeper row-3/row-11 idea (difficulty shows up mid-task, so the model must change mid-task, not per prompt) is already the main idea's "re-plan when the faster model gets stuck" | |
| G3 | The student got it | **must-fix**: Q2's "why does that keep the result close" is marked by the student as inferred ("The video only asserted it"), and that part of the answer key ("the hard thinking stays with the strong model, where a cheaper one alone breaks down") has no spoken line. Should-fix part: Q3 "what do I actually do differently? Maybe nothing, if Orchestrator is a setting" | M3; M2 |
| G4 | Questions worth asking | pass (how / what happens + why / what changes; each asks every part) | |
| G5 | Shown, not asserted | pass (Q1 meter 10 vs 2; Q2 cheaper model alone stuck at the hard brick vs the hand-back; Q3 bars Carbon alone vs Orchestrator) | |
| G6 | Why it matters | pass (24% less quota, 19% faster; the hand-back; both spoken) | |
| G7 | Misconception | pass (said and corrected in the hook) | |
| G8 | No faith steps | **must-fix**: (a) the hook says as fact that "a faster model almost matches it" (Google's claim, credited only 7 lines later; L69); (b) "Carbon fixes the plan" is not tied to why the result stays close (L64) | M1; M3 |
| G9 | Every line serves | **must-fix**: "Anti-gravity", "Orchestrator", "quota" and "Google's test" are never said to be what kind of thing they are (L67); the student asked about each. Should-fix: on-screen "OR THE PLANNER YOU PICK" never explained; 3 scroll-away moments in the body ("Here's how...", "Or a cheaper one...", the numbers line) | M2; S1; S2 |
| G10 | True main idea | **must-fix**: `lesson.md`'s main idea says "The strongest AI" (narrowing 8: never "the strongest"; row 1: "our strongest models ... including Carbon") and "results stay close" unconditionally, from one benchmark's average (row 5, narrowing 2). Takeaway passes: keeps "in our example" and "on Google's test" (L66) | M4 |
| G11 | Carry-over limits | pass (steps are not quota: shown on screen in shot 17, and the student kept "10 to 2 is only our example" apart from Google's numbers) | |
| G12 | Lessons | **must-fix**: L69 repeated (hook claim uncredited), L76 repeated ("cost" in the hook, "quota" in the proof: the student wrote "the later numbers are about quota and time, not cost"), L67 repeated (four labels), L64 repeated (no reason why the result stays close). L74: the Lesson check must be re-quoted after these fixes | M1, M2, M3 |

### M1 (must-fix; G8, G12 via L69 and L76): the hook's result is uncredited and in a different word than its proof
- **What:** line 1, "...and a faster model almost matches it, at less cost." States Google's benchmark claim as fact (credited only at line 9), and names the saving "cost" while every later line and label says "quota" (one thing, two words). Must-fix.
- **Fix:** line 1 "and a faster model almost matches it, at less cost." -> "and Google says a faster model almost matches it, with less quota." Net +2 words.
- **Rule:** Credit a maker's result in the first line that states it, and name the saving with the same word the proof uses.

### M2 (must-fix; G9, G12 via L67; G3 should-fix part for Q3): four labels never said to be what kind of thing
- **What:** "Anti-gravity" (an app? a tool?), "Orchestrator" (defined only by the diagram; the student: "maybe nothing, if Orchestrator is a setting"), "quota" (of what?), "Google's test" (measures what?). Must-fix.
- **Fix** (four one-phrase rewrites, rows 1, 2, 5, 16):
  - line 2 "Here's how: one task, ten steps, our example." -> "Our example: ten steps in Anti-gravity, Google's coding app." Net +1.
  - line 3 "Before, one model did all ten: Carbon was slow, and it cost you quota." -> "Before, Carbon did all ten: slow, and it used up your plan's quota." Net -1 (also drops "cost", see M1).
  - line 5 "Now Carbon, a top Google model, reads the code and writes the plan." -> "Now pick Orchestrator: Carbon, a top model, reads the code and writes the plan." Net +1 (row 1: Orchestrator is an option in the model dropdown; this also answers Q3's "what do I do differently").
  - line 9 "On Google's test, versus Carbon alone:" -> "On Google's coding test, versus Carbon alone:" Net +1.
  - M2 total net +2.
- **Rule:** none new (L67: say once what a plain-word label or name really is, the first time you use it; a product name and the thing you choose in it count).

### M3 (must-fix; G3, G8, G12 via L64): no spoken reason why the hand-back keeps the result close
- **What:** line 7, "A test fails twice? Hydrogen hands back; Carbon fixes the plan." The answer key's reason (the hard step goes to the strong model, where a cheaper model alone could break down) is never said; the line doesn't reuse "hard step" from line 4, so the contrast isn't heard. The student marked the reason as inferred. Must-fix.
- **Fix:** line 7 -> "A test fails twice? Hydrogen hands the hard step back; Carbon fixes the plan." Net +3. On screen, shot 13: add "HARD STEP -> CARBON" beside the "HANDS BACK" arrow (0 words).
- **Rule:** When a step is why the result holds up, say that reason in the same line, reusing the word of the failure it prevents.

### M4 (must-fix; G10): the main idea claims more than the sources
- **What:** `lesson.md` main idea "The strongest AI needn't do every step: if it plans and fixes the plan when a faster model gets stuck, results stay close, for less." "The strongest" breaks narrowing 8; "results stay close" turns one benchmark's average (row 5) into a rule. Must-fix (lesson.md only).
- **Fix:** -> "A top model needn't do every step: planning, and re-planning when a faster model gets stuck, can keep results close for less." (22 words). Script net 0.
- **Rule:** The main idea keeps the sources' strength: "a top" not "the strongest", "can" when the proof is one test.

### S1 (should-fix; G9): on-screen "OR THE PLANNER YOU PICK" is never explained
- **What:** shot 8's small line; the student: "Can I choose a different planner?" Should-fix.
- **Fix:** on screen only: "OR THE PLANNER YOU PICK" -> "PLANNER: CARBON HERE · YOU CAN PICK ANOTHER". Net 0 spoken words.
- **Rule:** none.

### S2 (should-fix; G9): three scroll-away moments in the body
- **What:** "Here's how: one task, ten steps, our example." (fixed by M2), "Or a cheaper one alone could break down on a hard step." (gets its payoff from M3's "hard step"), and the numbers line, four results in one breath. Should-fix.
- **Fix:** line 9, after M2 -> two sentences: "On Google's coding test, versus Carbon alone, on average: almost as successful. Twenty-four percent less quota, nineteen percent faster." Net 0.
- **Rule:** none.

### Word budget
150 now; M1 +2, M2 +2, M3 +3, M4 0, S1 0, S2 0 = 157 (4.7% over 150, inside the 5%). After the fixes, re-quote every Lesson check entry from the new `film/script.txt` (L74), and update `viewer.md` (shots 8, 13) to match.


