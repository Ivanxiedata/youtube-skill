gate: fail (1 must-fix, 2 should-fix)

> Note (after the gate): quotes below are the script as it stood in this round, before the claim check (step 3b). `claims.md` later narrowed "rate times miles" to "mostly rate times miles", "twenty percent below" to "at least twenty percent below", "under a third per task" to "under a third as much", "knows the route" to "picks the best route", "fewer tokens per task" to "writing fewer tokens", "better everywhere" to "better", and moved the prices off the cab doors; see `claims.md` rows 3, 7, 8, 10, 12, 16, 18, 19.

Round 2 (critic, re-gate). Style A: 150 spoken words, cap 157.5 (5% over). Current `film/script.txt`: 154 words (`wc -w`, spelled letters one word each).
G0: pass. `viewer.md` holds only the spoken script and the on-screen descriptions (corner tag and "IN 60 SECONDS" are brand); its 8 spoken lines equal `film/script.txt` (`diff`: identical).
Round-1 fails re-checked: M1 fixed (line 3 "Before, you'd compare the rate: price per token"; "door's rate" gone), M2 fixed ("OpenAI's model" in line 1, "below G P T six Astra's" in line 4, every "OLD ASTRA" label now "GPT-6 ASTRA"), M3 fixed ("price cuts", "token price", "the price list" gone; one word "price"), M4 fixed ("both at max" said, shot 15 "BOTH AT MAX"), M5 fixed ("OpenAI says the cheaper model, Sol"), M6 fixed except one stale count (M1 below), S3 fixed ("nearly matched Astra's score": the base "score" is said). S1 and S2 still open (S1, S2 below).
Fixes below: must-fix 0 words; should-fixes +4, with a 1-word cut: 154 -> 157 (inside the cap).

## Student (round 2, copied verbatim from gate_student2.md)

# Student, round 2

## 1. Main idea
Don't pick an AI model by its price per token; what you actually pay depends on how many tokens it uses for the job, so compare the cost of a whole task.

## 2. Ideas, as I'd explain them to a friend

**Fare = rate x miles.** A taxi fare is the rate times the miles, and the route decides the miles. Two drivers with the same rate can charge you very different amounts if one takes a winding route and the other goes straight. The video showed a map from A to B with a long grey route and a short teal one.

**A token is a chunk of text.** Price per token is the "rate". The video split "Book a taxi to the station" into six pieces, one token each (so roughly a word, though it wasn't explicit that it's not always exactly a word).

**Cheaper per token does not mean cheaper per task.** GPT-6.2 Astra's price per token is 20% below GPT-6 Astra's. But on one work test, OpenAI says, a task cost under a third of what GPT-6 Astra cost. A 20% discount would have left it far above that mark. So the saving must come from something besides the rate.

**Why: fewer tokens.** Like a driver who knows the route, the newer model, OpenAI says, uses fewer tokens per task, plus it has lower prices. The map showed the short route made of few boxes and the long one of many.

**The cheap model can nearly match the pricey one.** On one coding test, both at "max", OpenAI says Sol (the cheaper one, $ per token) nearly matched Astra's score at about a fifth of the cost.

**Takeaway.** Price per token is only the rate. Your cost is price times tokens, so compare cost per task.

## 3. What I can't explain, took on faith, or would scroll away from

Words, labels, numbers I can't explain:
- "Astra" vs "Sol": I'm not told what these are (tiers? sizes?). "GPT-6 Astra" vs "GPT-6.2 Astra" vs "Sol" got confusing fast. Is Sol a GPT-6.2 model? Not stated.
- "both at max": max what? Effort setting? Reasoning level? Unexplained.
- "one work test" / "one coding test": which tests? What counts as a "task"?
- "Under a third" of what: the card says full = GPT-6 Astra, so I worked it out, but only from the screen.
- "nearly matched" score: how near? Score of what?
- "$$$$" vs "$$$$$": symbols, not real prices.
- Line "plus lower prices" is vague: lower than what? It repeats the 20% point.

Claims taken on faith:
- Why would a model use fewer tokens for the same task? The taxi analogy says "knows the route" but not what that means for an AI (thinks less? answers shorter?). That is the key "why" and it is only asserted.
- "OpenAI credits fewer tokens per task": I only know that because OpenAI says so; no numbers on how many fewer.
- That fewer tokens means the same quality: not shown for the work test.
- Every number is "OpenAI says", from one test, so I can't tell if it generalizes.

Scroll-away moments:
- "Before, you'd compare the rate: price per token, a chunk of text, assuming pricier meant better everywhere." Long, packed sentence with a definition wedged in the middle.
- The opening line: "G P T six point two Astra, OpenAI's model: you pick by price, but how much text it uses..." is dense and the model names are spelled out letter by letter.
- The Sol/Astra coding-test line: a lot of names and qualifiers in one sentence ("both at max, OpenAI says the cheaper model, Sol,").

## Answers from memory

**Q1. How is what you pay for an AI task like a taxi fare?**
A taxi fare is rate times miles. An AI task cost is price per token (the rate) times the number of tokens used (the miles). The route, or how much text the model uses, sets the total, so a low rate does not guarantee a low fare.

**Q2. Why can a model's cost per task fall much more than its price per token?**
Because cost is price times tokens, and the newer model, OpenAI says, uses fewer tokens per task. Price fell 20%, but with far fewer tokens the task cost fell to under a third. Both effects multiply.

**Q3. What changes in how you pick a model?**
Instead of comparing price per token, compare cost per task, and don't assume the pricier model is better for you. A cheaper model may nearly match it for much less.

## G1-G13

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass: "An AI task costs price per token times the tokens it uses, so price per token alone can't tell you which model is cheaper." 24 words (not 22, see M1), under 25; no who/when; "can't" is logic with "alone" (rows 12, S2), not an absolute claim; it ends on what the viewer thinks differently | M1 (the count only) |
| G2 | Deepest true idea | pass: row 12 ("fewer tokens can mean a smaller bill even when the listed rates stay the same") is the main idea; the "not yet" gap (row 15 "company claims, not guarantees for every assignment"; row 13) is kept on lines 4 and 6 ("on one work test, OpenAI says", "On one coding test, both at max, OpenAI says") and carried to the viewer by S1 | - |
| G3 | The student got it | pass: main idea matches ("compare the cost of a whole task"); Q1, Q2, Q3 answered, and the notes carry Q3's example in full ("On one coding test, both at 'max', OpenAI says Sol ... nearly matched Astra's score at about a fifth of the cost"). "Why would a model use fewer tokens ... only asserted": the student repeats the spoken reason ("OpenAI says, uses fewer tokens per task") and asks how it works inside: the wish rule wins. "both at max: max what?": row 9 says only "(both at max)", a wish beyond `research.md`. Every key part re-ticked against the spoken words (below) | - |
| G4 | Questions worth asking | pass: how / why / what changes; each asks for its key | - |
| G5 | Shown, not asserted | pass: Q1 long vs short route, mile ticks (shot 5); Q2 dashed "WHAT 20% OFF WOULD BE" vs the bar "UNDER A THIRD" (shots 10-11); Q3 "NEARLY MATCHED" scores (shot 16) beside "ABOUT A FIFTH" cost (shot 17) | - |
| G6 | Why it matters | pass: "so compare cost per task" and the Sol line say what changes (rows 3, 5, 7, 9); every part of `lesson.md`'s reason is spoken | - |
| G7 | Misconception | pass: "you pick by price, but how much text it uses actually sets your cost"; "assuming pricier meant better everywhere" corrected by line 6; worded as the step (L89) | - |
| G8 | No faith steps | pass for M5 (line 6 credited aloud). **should**: the work test never says the quality held; the student again: "That fewer tokens means the same quality: not shown for the work test" (S2) | S2 |
| G9 | Every line serves | pass: Astra "OpenAI's model", Sol "the cheaper model", GPT-6 Astra said, "BOTH AT MAX" said, "score" said; one word "price" for the AI's price, "rate" mapped once in line 3. "plus lower prices" ("lower than what? It repeats the 20% point"): the student read it right (it includes the 20%, row 7), so no fail. Scroll-away moments in the body: 2 (line 3, line 6; line 1 is the hook), not more than 2 | - |
| G10 | True main idea | pass: the main idea and the takeaway ("price per token is the taxi's rate; your cost is price times tokens, so compare cost per task") state the rule and no number; every number line keeps its conditions (one work test, OpenAI says, base GPT-6 Astra; one coding test, both at max, OpenAI says); closes on "COMPARE COST PER TASK." (shot 20), the same unit as the meters | - |
| G11 | Carry-over limits | **should**: "so compare cost per task" carries OpenAI's test numbers to the viewer's own work (research "where the analogy stops" (3), row 15); the student: "Every number is 'OpenAI says', from one test, so I can't tell if it generalizes" (S1). The route analogy says "same trip", but nothing spoken says the shorter route arrived as well; row 3 says it scored higher (analogy stop (1)) (S2) | S1, S2 |
| G12 | Lessons | **fail (must)**: L74 (repeated 2026-11-27: "lesson.md's '21 words' label") broken again: `lesson.md` labels the main idea "(22 words)" and the L58 entry says "22 words"; the sentence is 24 words. Every other Lesson check, Misconception, key and Picture quote re-taken against the current script and `viewer.md`: all match | M1 |
| G13 | A story everyone knows | pass: before in the story's words on line 3 ("you'd compare the rate: price per token", S2: the rate alone can't tell the fare), now "Like a driver who knows the route" (S3), takeaway "the taxi's rate"; no unsourced story fact is spoken; two cabs with two rates stay picture-only | - |

Key parts re-ticked against `film/script.txt` (round 2), every question: Q1 "a taxi fare is rate times miles, and the route sets the miles" (line 2) / "price per token, a chunk of text" (line 3) / "your cost is price times tokens" and "price per token is the taxi's rate" (line 7); Q2 "Now Astra's price per token is twenty percent below G P T six Astra's, yet on one work test, OpenAI says, it cost under a third per task" (line 4) / "Like a driver who knows the route: OpenAI credits fewer tokens per task, plus lower prices" (line 5); Q3 "so compare cost per task" (line 7) / "you'd compare the rate: price per token ... assuming pricier meant better everywhere" (line 3) / "On one coding test, both at max, OpenAI says the cheaper model, Sol, nearly matched Astra's score at about a fifth the cost" (line 6). All spoken. Picture lines re-ticked against `viewer.md` shots 4, 5, 7, 10-20: all match.

Outside the gate (note, not graded): `beats.md` row 69 records the chosen hook as "OpenAI's pricier model ... sets your cost" with "no 'actually'", but line 1 says "OpenAI's model ... actually sets your cost"; the writer should make them agree (S2's cut below removes "actually").

## Fails

### M1 (must-fix): `lesson.md` names a word count the main idea doesn't have (G12/L74)
- **What**: `lesson.md` line 4 "... which model is cheaper. (22 words)" and the Lesson check "L58 (belief, at most 25 words ...): 22 words"; the main idea is 24 words (`wc -w`). L74's 2026-11-27 repeat names exactly this case ("lesson.md's '21 words' label"). Must-fix.
- **Fix**: `lesson.md` only: "(22 words)" -> "(24 words)"; L58 entry "22 words" -> "24 words". After the should-fixes below, re-quote every key, the Misconception (it quotes "actually sets your cost"; S2's cut changes it), the L77 entry and every Lesson check entry from the new script, and grep `lesson.md` for "actually", "so compare cost per task." and "under a third per task". Net 0 words.
- **Rule**: none new (L74: after any edit, grep `lesson.md` for every word count it names and recount it with `wc -w`).

### S1 (should-fix, open from round 1): the takeaway's advice carries OpenAI's test numbers to the viewer's work (G11)
- **What**: line 7 "so compare cost per task." never says the viewer measures it; after two OpenAI test results the student "can't tell if it generalizes" and answered Q3 "don't assume the pricier model is better for you". Should-fix.
- **Fix**: line 7 "so compare cost per task." -> "so compare cost per task yourself." (+1); shot 20's yellow line -> "COMPARE COST PER TASK YOURSELF." Remove "on your work in the takeaway (gate round 1 S1)" from `lesson.md` "What we leave out". Net +1.
- **Rule**: When advice carries a maker's test result to the viewer's own work, say the viewer measures it on their own work.

### S2 (should-fix, open from round 1): the shorter route is never said to arrive as well (G11, G8 side step)
- **What**: line 4 "it cost under a third per task" says nothing of quality, so "fewer tokens" can read as doing less (analogy stop (1); row 3: GPT-6.2 Astra scored 5.2 points higher on that test). The student, both rounds: "That fewer tokens means the same quality: not shown for the work test". Should-fix.
- **Fix**: line 4 "it cost under a third per task." -> "it scored higher and cost under a third per task." (+3; row 3, credited by the same line's "OpenAI says"); shot 11 adds a small label "SCORED HIGHER" over the GPT-6.2 Astra bar (said, L71). Budget cut: line 1 "actually sets your cost" -> "sets your cost" (-1; `beats.md` row 69 already chose the hook without it; re-run `hookscore.py`, "but" stays the curiosity word). Remove the "scored higher (row 3; gate round 1 S2)" item from `lesson.md` "What we leave out"; update shot 3's line in `viewer.md`. Net +2.
- **Rule**: When an analogy says "the same trip, shorter", say once that the result was as good or better, with its row.

Script after M1, S1, S2 (157 words, cap 157.5):
```
G P T six point two Astra, OpenAI's model: you pick by price, but how much text it uses sets your cost.
Here's why: a taxi fare is rate times miles, and the route sets the miles.
Before, you'd compare the rate: price per token, a chunk of text, assuming pricier meant better everywhere.
Now Astra's price per token is twenty percent below G P T six Astra's, yet on one work test, OpenAI says, it scored higher and cost under a third per task.
Like a driver who knows the route: OpenAI credits fewer tokens per task, plus lower prices.
On one coding test, both at max, OpenAI says the cheaper model, Sol, nearly matched Astra's score at about a fifth the cost.
So, what we learned: price per token is the taxi's rate; your cost is price times tokens, so compare cost per task yourself.
Want more? Subscribe, and comment what we should explain next.
```
