gate: pass (2 should-fix)

> Note (after the gate): quotes below are the script as it stood in this round, before the claim check (step 3b). `claims.md` later narrowed "rate times miles" to "mostly rate times miles", "twenty percent below" to "at least twenty percent below", "under a third per task" to "under a third as much", "knows the route" to "picks the best route", "fewer tokens per task" to "writing fewer tokens", "better everywhere" to "better", and moved the prices off the cab doors; see `claims.md` rows 3, 7, 8, 10, 12, 16, 18, 19.

Round 3 (critic, re-gate, last round). Style A: 150 spoken words, cap 157.5 (5% over). Current `film/script.txt`: 157 words (`wc -w`, spelled letters one word each).
G0: pass. `viewer.md` holds only the spoken script and the on-screen descriptions (corner tag "GPT-6.2 · 60s" and "IN 60 SECONDS" are brand, `docs/brand.md`); its 8 spoken lines equal `film/script.txt` (`diff`: identical).
Round-2 fails re-checked: M1 fixed (`lesson.md` "(24 words)" and L58 "24 words"; the main idea is 24 words by `wc -w`). S2 fixed (line 4 "it scored higher and cost under a third per task", row 3, credited by the same line's "OpenAI says"; shot 11 "SCORED HIGHER", said; `lesson.md` Q2 key, Q2 picture, L60, L61, L69, L72 entries carry it; the "scored higher" leave-out item is gone). S1 still open (S1 below): it was left out "for the word budget", but it fits with a named cut.
No must-fix left. Should-fixes below: S1 net -1 (157 -> 156), S2 net 0: both together 156, inside the cap.

## Student (round 3, copied verbatim from gate_student3.md)

## 1. Main idea
Price per token is only the rate; what you actually pay is price times how many tokens the task uses, so you should compare cost per task, not price per token.

## 2. Ideas, explained to a friend

**Cost is rate times amount.** A taxi fare is the rate times the miles, and the route decides the miles. An AI task works the same way. The price per token is the rate, and the amount of text the model uses is the miles. The video showed a long winding grey route against a short direct teal route for the same trip.

**A token is a chunk of text.** "Book a taxi to the station" gets split into pieces: Book, a, taxi, to, the, station. You are charged per piece.

**Cheaper per token does not mean cheaper per task.** GPT-6.2 Astra's price per token is 20% below GPT-6 Astra's. On one work test, OpenAI says it scored higher and cost under a third per task. That is far more than 20% off. The video said OpenAI credits this to fewer tokens per task plus the lower prices. It compared this to a driver who knows the route.

**The cheap model can nearly match the pricey one.** On one coding test, with both at max, OpenAI says Sol (the cheaper model) nearly matched Astra's score at about a fifth of the cost.

**Takeaway.** Price per token is the taxi's rate. Your cost is price times tokens, so compare cost per task.

## 3. What I can't explain, what I took on faith, where I'd scroll

Words, labels and numbers I can't explain:
- "Under a third" of what? The screen says full = GPT-6 Astra, so I inferred a third of GPT-6 Astra's cost. The narration alone doesn't say.
- "About a fifth the cost" of what? The screen says Astra, but the audio doesn't.
- "Both at max": max what? Effort? Reasoning setting? Unexplained.
- "One work test" and "one coding test": which tests, and what do the scores measure? No idea.
- "Scored higher": by how much, and on what scale?
- Astra vs Sol: the video never says what Sol is, or whether it is a smaller model or a different tier. I only know it is "cheaper".
- "G P T six Astra" vs "G P T six point two Astra": easy to mix up when heard. In the opening, "Astra" alone is ambiguous.
- "Price per token" with "$$$$" signs: the dollar signs are not real prices.
- What a "token" is relative to a word. The video showed one word per token, but I suspect that's not exactly true.

Claims I took on faith:
- Fewer tokens per task is the reason for the savings. It says OpenAI credits this, but not why the new model would use fewer tokens (shorter reasoning? less rambling?).
- "Pricier means better everywhere" was presented as what people assumed. It wasn't shown to be wrong in general, only in these two examples.
- Everything is "OpenAI says", with no independent check. I'm not sure how far to trust it.
- That the taxi route analogy holds: a model "knowing the route" is a loose picture.

Where I'd scroll away:
- Lines 5 and 6 ("Before, you'd compare the rate: price per token, a chunk of text, assuming pricier meant better everywhere"). It is one long sentence with a definition squeezed in the middle.
- Line 7 ("Now Astra's price per token is twenty percent below G P T six Astra's, yet on one work test..."). The two Astras blur together and there are a lot of numbers in one breath.
- Line 9 (the Sol coding test). A third comparison right after the second, with new terms ("both at max").
- The ending "Subscribe, and comment" is a standard outro and easy to skip.

## Answers from memory

**Q1. How is what you pay for an AI task like a taxi fare?**
A taxi fare is the rate times the miles. For an AI task, the price per token is the rate and the number of tokens used is the miles. The route (how the model gets to the answer) sets the miles. A cheap rate with a long route can still cost a lot.

**Q2. Why can a model's cost per task fall much more than its price per token?**
Cost is price times tokens. If the price drops 20% and the model also uses far fewer tokens for the same task, the two reductions multiply. That is how GPT-6.2 Astra's price per token fell 20% while its cost per task fell to under a third, according to OpenAI.

**Q3. What changes in how you pick a model?**
I stop comparing price per token and compare cost per task, meaning the total to finish the same job. A model with a higher or similar rate can be cheaper overall, and a cheaper model like Sol can nearly match a pricier one at a fraction of the cost.

## G1-G13

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass: "An AI task costs price per token times the tokens it uses, so price per token alone can't tell you which model is cheaper." 24 words (`wc -w`), under 25; no who/when/how many; not a mechanism of the model but what the viewer will think differently when picking; "can't" is logic carried by "alone" (rows 12, S2), no superlative | - |
| G2 | Deepest true idea | pass: row 12 ("fewer tokens can mean a smaller bill even when the listed rates stay the same") is the main idea itself; the "not yet" gap (row 15 "company claims, not guarantees for every assignment", row 13) is kept on lines 4 and 6 ("on one work test, OpenAI says", "On one coding test, both at max, OpenAI says") and reaches the viewer through S1; analogy stop (1) (more tokens can be more thinking) is now answered by "it scored higher" (row 3). No row supports a deeper idea that fits 60 s | - |
| G3 | The student got it | pass: main idea matches ("what you actually pay is price times how many tokens the task uses, so you should compare cost per task, not price per token"). Q1 answered in full (rate x miles, price per token = rate, tokens = miles, route sets the miles; "a token is a chunk of text" in the notes). Q2 in full (price times tokens, 20% vs under a third, "according to OpenAI"; "scored higher", "fewer tokens per task plus the lower prices" and "a driver who knows the route" in the notes). Q3 in full (compare cost per task; pricier not better everywhere; Sol "nearly matched Astra's score at about a fifth of the cost", in the notes). "not why the new model would use fewer tokens": the student repeats the spoken reason ("OpenAI credits this to fewer tokens per task") and asks how it works inside: the wish rule wins. "Under a third of what?" / "a fifth the cost of what?": the student gives the right base both times (GPT-6 Astra; Astra) and each line names it in the same sentence ("below G P T six Astra's, yet ... it ... cost under a third"; "nearly matched Astra's score at about a fifth the cost"); not a G3 partial. "both at max: max what?" and "scored higher: by how much?": row 9 says only "(both at max)", and the 5.2 points are left out on purpose (`lesson.md`): wishes. Every key part re-ticked below | - |
| G4 | Questions worth asking | pass: how / why / what changes; each asks for its key | - |
| G5 | Shown, not asserted | pass: Q1 long vs short route with mile ticks (shot 5); Q2 dashed "WHAT 20% OFF WOULD BE" vs the bar "UNDER A THIRD", now tagged "SCORED HIGHER" (shots 10-11); Q3 "NEARLY MATCHED" scores (shot 16) beside "ABOUT A FIFTH" cost (shot 17) | - |
| G6 | Why it matters | pass: "so compare cost per task" and line 6 say what changes (rows 3, 5, 7, 9); every part of `lesson.md`'s reason, including "it scored higher", is spoken | - |
| G7 | Misconception | pass: "you pick by price, but how much text it uses actually sets your cost"; "assuming pricier meant better everywhere" corrected by line 6; worded as the step (L89). The student: "only in these two examples": one counter-example is enough to break "everywhere" | - |
| G8 | No faith steps | pass: round-2 S2 closed ("it scored higher" answers "fewer tokens = same quality?", which the student no longer asks); every core step has its reason in the same breath | - |
| G9 | Every line serves | **should**: scroll-away moments in the body are now 3 (line 3, line 4, line 6; the outro is exempt), up from 2 in round 2: line 4 grew to 30 words with "scored higher" and the student: "The two Astras blur together and there are a lot of numbers in one breath" (S2). Otherwise pass: Astra "OpenAI's model", Sol "the cheaper model", GPT-6 Astra said, "BOTH AT MAX" and "SCORED HIGHER" said; one word "score" (line 4 "scored", line 6 "score"); "price" one word, "rate" only the taxi's | S2 |
| G10 | True main idea | pass: the main idea and the takeaway ("price per token is the taxi's rate; your cost is price times tokens, so compare cost per task") state the rule and no number; the new "it scored higher" is row 3 ("scoring 5.2 points higher than GPT-6 Astra"), on the same test, credited ("OpenAI says"), with the same base (GPT-6 Astra); closes on "COMPARE COST PER TASK." (shot 20), the meters' unit | - |
| G11 | Carry-over limits | **should** (open from rounds 1-2): "so compare cost per task" carries OpenAI's own test results to the viewer's work (analogy stop (3), row 15); the student, a third time: "Everything is 'OpenAI says', with no independent check. I'm not sure how far to trust it." `lesson.md`'s leave-out says "no room in the word budget", but a cut pays for it (S1) | S1 |
| G12 | Lessons | pass: every Lesson check, Misconception, key and Picture entry re-quoted against the current script and `viewer.md` (below): all match; "24 words" correct; "scored higher" in every entry that quotes line 4; grep of `lesson.md` for line 4's old ending ("it cost under a third per task", without "scored higher"): none; "22 words": none. L81: line 4 has two numbers ("twenty percent", "a third"), under L81's three. (S1 and S2 change lines 1/2, 4 and 7: L74 then needs the Misconception, L63, L77, L60, L62, L69, L72 entries and Q2/Q3 keys re-quoted, see S1, S2) | - |
| G13 | A story everyone knows | pass: before in the story's words (line 3 "you'd compare the rate: price per token"; S2: the rate alone can't tell the fare), now "Like a driver who knows the route" (S3), takeaway "the taxi's rate"; the shorter route now also arrives as well ("scored higher"); no unsourced taxi fact spoken | - |

Key parts re-ticked against `film/script.txt` (round 3), every question:
- Q1: "a taxi fare is rate times miles, and the route sets the miles" (line 2); "price per token, a chunk of text" (line 3); "your cost is price times tokens" and "price per token is the taxi's rate" (line 7). All spoken.
- Q2: "Now Astra's price per token is twenty percent below G P T six Astra's, yet on one work test, OpenAI says, it scored higher and cost under a third per task." (line 4); "Like a driver who knows the route: OpenAI credits fewer tokens per task, plus lower prices." (line 5); "your cost is price times tokens" (line 7). All spoken.
- Q3: "so compare cost per task" (line 7); "you pick by price" (line 1) and "you'd compare the rate: price per token" (line 3) for "not just price per token"; "assuming pricier meant better everywhere" (line 3); "On one coding test, both at max, OpenAI says the cheaper model, Sol, nearly matched Astra's score at about a fifth the cost." (line 6). All spoken.
Picture lines re-ticked against `viewer.md`: shots 4, 5, 7, 10-20 as `lesson.md` names them, including shot 11's "SCORED HIGHER" tag: all match.

## Fails

### S1 (should-fix, open from rounds 1 and 2): the takeaway carries OpenAI's test results to the viewer's work (G11)
- **What**: line 7 "so compare cost per task." never says the viewer measures it on their own work; all three students doubted the numbers carry over (round 3: "Everything is 'OpenAI says', with no independent check. I'm not sure how far to trust it."). `lesson.md` keeps it out for "no room in the word budget", but round 2's cut of "actually" was not used (the writer kept it for the hook's curiosity score, `beats.md` hook table: 72 with it), so a cut is named here that leaves the hook alone. Should-fix.
- **Fix**: line 7 "so compare cost per task." -> "so compare cost per task yourself." (+1); shot 20's yellow line -> "COMPARE COST PER TASK YOURSELF." Pay for it with line 2 "Here's why: a taxi fare is rate times miles, and the route sets the miles." -> "A taxi fare is rate times miles, and the route sets the miles." (-2; the line still opens the story; shot 4's spoken cue becomes "A taxi fare is rate times miles,"). Net -1: 157 -> 156. (Or cut line 1's "actually" (-1) as round 2 named: net 0, the hook drops to about 69 (the `beats.md` hook-table draft without "actually" scored 69); the writer's choice.) Then in `lesson.md`: delete the "'on your work' / 'yourself' in the takeaway" leave-out item; Q3's key and picture ("COMPARE COST PER TASK YOURSELF."), L3/G13's "before" quote (line 2) and L62, L60 Q3 quotes re-taken from the new lines; grep `lesson.md` for "Here's why" and "compare cost per task" (L74).
- **Rule**: When a fix is dropped "for the word budget", name the cut you tried; a should-fix kept open three rounds is paid for by any line outside the brand's fixed words, not only by the hook.

### S2 (should-fix, new): line 4 is one 30-word breath with two numbers and two Astras (G9)
- **What**: "Now Astra's price per token is twenty percent below G P T six Astra's, yet on one work test, OpenAI says, it scored higher and cost under a third per task." Adding "scored higher" made it the third body scroll-away moment (lines 3, 4, 6); the student: "The two Astras blur together and there are a lot of numbers in one breath". Should-fix (more than 2 scroll-away moments in the body).
- **Fix**: split line 4 at the "yet" into two sentences, 0 words: "Now Astra's price per token is twenty percent below G P T six Astra's. Yet on one work test, OpenAI says, it scored higher and cost under a third per task." (L81's two-sentence rule, applied at two numbers.) In `viewer.md` keep it on one spoken line (or two, matching `film/script.txt` exactly); shot 9 ends on the first sentence, shot 10 starts on "Yet". Net 0. Re-quote line 4 in `lesson.md` (Q2 key, L60, L69, L81) after the split (L74).
- **Rule**: When a fix adds words to a line that already holds two numbers, split it into two sentences, one number each.

Script after S1 and S2 (156 words, cap 157.5):
```
G P T six point two Astra, OpenAI's model: you pick by price, but how much text it uses actually sets your cost.
A taxi fare is rate times miles, and the route sets the miles.
Before, you'd compare the rate: price per token, a chunk of text, assuming pricier meant better everywhere.
Now Astra's price per token is twenty percent below G P T six Astra's. Yet on one work test, OpenAI says, it scored higher and cost under a third per task.
Like a driver who knows the route: OpenAI credits fewer tokens per task, plus lower prices.
On one coding test, both at max, OpenAI says the cheaper model, Sol, nearly matched Astra's score at about a fifth the cost.
So, what we learned: price per token is the taxi's rate; your cost is price times tokens, so compare cost per task yourself.
Want more? Subscribe, and comment what we should explain next.
```
