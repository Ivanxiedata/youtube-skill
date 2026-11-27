gate: fail (6 must-fix, 3 should-fix)

> Note (after the gate): quotes below are the script as it stood in this round, before the claim check (step 3b). `claims.md` later narrowed "rate times miles" to "mostly rate times miles", "twenty percent below" to "at least twenty percent below", "under a third per task" to "under a third as much", "knows the route" to "picks the best route", "fewer tokens per task" to "writing fewer tokens", "better everywhere" to "better", and moved the prices off the cab doors; see `claims.md` rows 3, 7, 8, 10, 12, 16, 18, 19.

Round 1 (critic). Style A: 150 spoken words, cap 157.5 (5% over). Current `film/script.txt`: 149 words (`wc -w`, spelled letters one word each).
G0: pass. `viewer.md` holds only the spoken script and the on-screen descriptions (the corner tag and "IN 60 SECONDS" are brand); its 8 spoken lines equal `film/script.txt` line for line (`diff`: identical).
Must-fix total: +8 net words -> 157 (inside the cap). The 3 should-fixes (+7) do not fit after the must-fixes; each is listed with the cut it would need.

## Student (round 1, copied verbatim from gate_student1.md)

# Student, round 1

## 1. Main idea
Don't pick an AI model by its price list; what you actually pay depends on how much text it uses for a task, so compare the cost of a whole task.

## 2. Ideas, as I'd explain them to a friend

**Cost = price x amount used (taxi fare).** A taxi fare is the rate times the miles, and the route decides the miles. An AI bill works the same way: the price per unit is the rate, and how much text the model uses is the miles. The video showed a meter climbing as pages of text slid in.

**What a token is.** A token is a chunk of text. The example was "Book a taxi to the station" split into Book / a / taxi / to / the / station. Models are priced per token.

**Old habit: compare price per token.** People assumed the pricier model was better everywhere, and compared the price board only (old Astra $$$$$ vs Sol $).

**New Astra example.** New Astra's price per token is 20% lower than old Astra's. But on one work test, OpenAI says, a task cost under a third of the old one. That is far more than 20% off. The video says this is because it uses fewer tokens per task, like a driver who knows a shorter route to the same place. (It also says "and price cuts", which I read as the 20% cut adding on top.)

**Sol vs Astra.** On one coding test, with both at their max setting, Sol scored within half a point of Astra at about a fifth of the cost.

**Takeaway.** The price list is only the rate. Your cost is price times tokens, so compare cost per task.

## 3. What I can't explain, took on faith, or would scroll away from

Words, labels and numbers I can't explain:
- "Astra" and "Sol": no idea what they are. I guessed bigger and smaller models, but it's never said. "The old Astra" vs "new Astra" is also unclear: is the old one GPT-6.1?
- "Their max setting" (line 9, "both at their max setting"): max of what? Reasoning effort? Never explained.
- "Within half a point" of what scale? Points out of 100? Which test?
- "One work test" and "one coding test": which tests? Who made them?
- "Under a third": a third of what? (The visual says old Astra's cost, but the audio doesn't say.) "About a fifth of the cost": of Astra's cost, I think, but I had to infer it.
- "Price cuts" (line 8): a price cut of what? It's unclear if this is the same 20% or an extra one.
- "$$$$ vs $": no real numbers anywhere, so I can't tell how big the gaps are.

Claims taken on faith:
- Why would the new model use fewer tokens? "Like a driver who knows the route" is an analogy, not a reason. Does it think shorter? Write less? Skip steps? The video never says.
- "OpenAI says" appears several times: these are the company's own numbers, with no independent check.
- That cost per task is a fair comparison when the quality of the answers may differ. For the work test, nothing is said about whether the results were equally good.
- That one test result generalizes.

Moments I'd scroll away:
- The opening line, "you pick A I by price, but how much text it uses actually sets your cost": dense, and the first-sentence jargon ("G P T six point two Astra") loses me.
- Line 6, "a chunk of text," arrives mid-sentence after "price per token," so the token definition feels tacked on and interrupts the flow.
- Line 8, "Like a driver who knows the route: OpenAI credits fewer tokens per task, and price cuts." The last phrase is garbled, and I'm not sure what it means.
- The Sol vs Astra part feels like a second topic after I was following the first.

## Answers (from memory)

**Q1. How is what you pay for an AI task like a taxi fare?**
A taxi fare is the rate times the miles, and the route decides the miles. An AI task costs the price per token times the number of tokens used. The price list is the rate, and how much text the model uses is the miles.

**Q2. Why can a model's cost per task fall much more than its price per token?**
Because cost is price times tokens. If the model uses fewer tokens for the same task (a shorter route), the cost drops on top of any cut in price per token. The new Astra had 20% lower price per token but cost under a third per task, per OpenAI. Why it uses fewer tokens is not explained.

**Q3. What changes in how you pick a model?**
Instead of comparing price per token and assuming pricier is better, compare the cost per task, and look at how good the result is for that cost. Sol, the cheaper one, came close to Astra on one coding test for a fifth of the cost.

## G1-G13

| # | Check | Result | Fix |
|---|---|---|---|
| G1 | Main idea is an insight | pass (24 words; no who/when; "can't" is logic with "alone"). Note: "which task is cheaper" should read "which model is cheaper"; folded into M3 | M3 (wording only) |
| G2 | Deepest true idea | pass: row 12 ("fewer tokens can mean a smaller bill even when the listed rates stay the same") is the main idea itself; row 15's "not guarantees for every assignment" is the "not yet" gap, kept on the lines ("one work test") and carried to the viewer's work by S1 | - |
| G3 | The student got it | pass: main idea matches; Q1, Q2, Q3 answered with every key part; every key part is spoken (ticked below). "Why it uses fewer tokens is not explained": the student repeated the spoken reason ("fewer tokens per task") and asks how it works inside: the wish rule wins | - |
| G4 | Questions worth asking | pass: how / why / what changes, each asks for its key | - |
| G5 | Shown, not asserted | pass: Q1 long vs short route with mile ticks (shot 5); Q2 dashed "WHAT 20% OFF WOULD BE" vs the bar under a third (shots 10-11); Q3 level score bars beside the fifth-size cost bar (shots 16-17) | - |
| G6 | Why it matters | pass: "so compare cost per task" and the Sol line say what changes (rows 3, 5, 7, 9) | - |
| G7 | Misconception | pass: "you pick A I by price, but how much text it uses actually sets your cost"; "assuming pricier meant better everywhere" -> the Sol line; worded as the step (L89) | - |
| G8 | No faith steps | **fail (must)**: line 6's Sol result is OpenAI's report, said as fact, credited only on screen (L69). **should**: the work test never says the quality held (S2) | M5; S2 |
| G9 | Every line serves | **fail (must)**: Astra never said to be what kind of model, "the old Astra" never said which model (L67); "BOTH AT THEIR MAX SETTING" on screen, never said (L67, student: "max of what?"); the price named four ways, "price cuts" unexplained (L76). **should**: "half a point" without its base (S3). Scroll-away moments in the body: 3 (line 3 "a chunk of text", line 5, the Sol part); M3 fixes line 5, leaving 2 | M2, M3, M4; S3 |
| G10 | True main idea | pass: the takeaway states the rule and no number; it closes on the cost-per-task meter (shots 19-20), the same unit | - |
| G11 | Carry-over limits | **should**: "compare cost per task" carries OpenAI's test numbers to the viewer's own work (research "where the analogy stops" (3), row 15) (S1); the driver analogy says "same trip", but nothing spoken says the shorter route reached the same place (analogy stop (1); row 3 says it scored higher) (S2) | S1, S2 |
| G12 | Lessons | **fail (must)**: L3 (M1), L67 (M2, M4), L76 (M3), L69 (M5), L74 (M6) broken; `lesson.md`'s L67 entry ("'Astra' = 'GPT-6.2 Astra' in line 1 with 'AI'") claims a kind word line 1 doesn't have | M1-M6 |
| G13 | A story everyone knows | **fail (must)**: the taxi carries the "now" ("Like a driver who knows the route") but the spoken "before" (line 3) has no taxi word, and the story's "before", picking a cab by the rate on its door ("the door's rate", first said in the takeaway, and shot 2's two door prices), has no `research.md` row: S1-S3 are NYC's one metered rate, the route and the map. Mechanism otherwise matches (rate x miles = price x tokens, route = tokens; rows S1-S3, 12) | M1 |

Key parts ticked against `film/script.txt` (round 1): Q1 "a taxi fare is rate times miles, and the route sets the miles" / "price per token, a chunk of text" / "your cost is price times tokens" / "the price list is the door's rate"; Q2 "Astra's token price is twenty percent below the old Astra's, yet on one work test, OpenAI says, it cost under a third per task" / "Like a driver who knows the route: OpenAI credits fewer tokens per task, and price cuts"; Q3 "so compare cost per task" / "assuming pricier meant better everywhere" / "the cheaper model, Sol, came within half a point of Astra for about a fifth of the cost". All spoken. After the fixes below, every one of these quotes changes in `lesson.md` (M6).

## Fails

### M1 (must-fix): the taxi story carries the "now" but not the "before"; the "door's rate" has no row (G13, G12/L3)
- **What**: line 3 "Before, you'd compare price per token, a chunk of text, assuming pricier meant better everywhere." says the before only in AI words; the story's before ("picking the cab by the rate on its door", `lesson.md`) is spoken only in the takeaway as "the door's rate", a word never introduced, and no `research.md` row says cabs post different rates on their doors (S1 is one regulated NYC rate; S2 says the rate can't pre-calculate the fare). Must-fix.
- **Fix**: line 3 -> "Before, you'd compare the rate: price per token, a chunk of text, assuming pricier meant better everywhere." (+2: "the rate" ties the before to line 2's taxi rate; S2: the rate alone can't tell the fare). Line 7 "the door's rate" -> "the taxi's rate" (0). On screen, shots 2, 9, 14, 15, 18: label the signs "RATE: $$$$" / "RATE: $", and shot 18 "PRICE PER TOKEN = THE TAXI'S RATE"; keep two cabs with two rates only as the picture of two models (no spoken claim), or add a source row for cabs with different posted rates. `lesson.md` "The story" and `research.md` "Before, through the story": "comparing the rate" instead of "the rate on its door". Net +2.
- **Rule**: Say the story's before in the story's own words on the before line, and only story facts a `research.md` row holds; a story word first said in the takeaway is not the story carrying the before.

### M2 (must-fix): Astra and "the old Astra" never said to be what kind of model, or which (G9, G12/L67)
- **What**: line 1 "G P T six point two Astra: you pick A I by price, ..." gives Astra no kind word; line 4 "below the old Astra's" never says which model; the student: "'Astra' and 'Sol': no idea what they are ... is the old one GPT-6.1?". `lesson.md`'s L67 entry claims line 1 meets this. Must-fix.
- **Fix**: line 1 -> "G P T six point two Astra, OpenAI's pricier model: you pick by price, but how much text it uses sets your cost." (+3 "OpenAI's pricier model", -2 "A I", -1 "actually": net 0; "pricier" per token: $8/$40 vs Sol's $2/$10, rows 5, 6; it pairs with line 6's "the cheaper model, Sol"; re-run `hookscore.py`, "but" stays the curiosity word, "cost" the stakes word). Line 4 "below the old Astra's" -> "below G P T six Astra's" (+2; rows 3, 5, 7 name GPT-6 Astra); every "OLD ASTRA" label (shots 6, 8, 10, 11, 12) -> "GPT-6 ASTRA", now said (L71). Net +2.
- **Rule**: none new (L67: the product's kind word is in line 1; every named model says what it is and which version it is compared with).

### M3 (must-fix): the per-token price has four names, and "price cuts" is unexplained (G9, G12/L76)
- **What**: the same price is "price per token" (line 3), "token price" (line 4), "price cuts" (line 5) and "the price list" (line 7, and the main idea); the student: "a price cut of what? It's unclear if this is the same 20% or an extra one" and called line 5 "garbled" (a scroll-away moment). The main idea also says "which task is cheaper" where it means which model. Must-fix.
- **Fix**: line 5 "OpenAI credits fewer tokens per task, and price cuts." -> "OpenAI credits fewer tokens per task, plus lower token prices." (+1; row 7: the 20% input/output and 60% cached-input discounts are both lower token prices; on screen shot 14 "PRICE CUTS" -> "LOWER TOKEN PRICES"). Line 7 "the price list is" -> "price per token is" (0). `lesson.md` main idea -> "An AI task costs price per token times the tokens it uses, so price per token alone can't tell you which model is cheaper." (22 words). Net +1.
- **Rule**: none new (L76: one word for one thing; a later "cuts" or "list" for a price already named is a second name).

### M4 (must-fix): "BOTH AT THEIR MAX SETTING" is on screen and never said (G9, G12/L67)
- **What**: shot 15's label, a condition of row 9 ("both at max"), is never spoken; the student: "max of what?". Must-fix.
- **Fix**: line 6 -> "On one coding test, both at max, OpenAI says the cheaper model, Sol, came within half a point of Astra at about a fifth the cost." (this fix: +3 "both at max", -1 "And", -1 "for ... of the" -> "at ... the", the source's own "at about one-fifth the cost": net +1; "OpenAI says" is M5's +2). Shot 15's label -> "BOTH RUN AT MAX", the words said. What "max" is a level of, the source doesn't say: that part is a wish beyond `research.md`. Net +1.
- **Rule**: none new (L67/L71: every label on screen is said, with what it is a level of when the source says it).

### M5 (must-fix): the Sol result is OpenAI's report, said as fact (G8, G12/L69)
- **What**: line 6 "And on one coding test, the cheaper model, Sol, came within half a point of Astra ..." states row 9 (OpenAI's post, citing Cognition's test) with no spoken credit; "OPENAI SAYS" is only on screen (shot 15), exactly L69's case ("credited only on screen"); the student lists "'OpenAI says' ... no independent check" as a faith claim. Must-fix.
- **Fix**: in line 6 (see M4's full line) "OpenAI says" before "the cheaper model" (+2). Net +2.
- **Rule**: none new (L69: say aloud whose claim each surprising result is, on every line that states one).

### M6 (must-fix): `lesson.md` quotes screens `viewer.md` doesn't have (G12/L74)
- **What**: Q3's Picture names "the scoreboard 'ONE CODING TEST · BOTH AT THEIR MAX SETTING'", but shot 16's scoreboard is "SCORE · ONE CODING TEST" (the setting is on shot 15); the L69 entry says "on screen '(OPENAI)'", but shot 15 says "ONE CODING TEST · OPENAI SAYS"; the L67 entry claims line 1 gives Astra a kind word (M2). Must-fix.
- **Fix**: `lesson.md` only (0 words): re-quote Q3's Picture from shots 15-17, the L69 entry from shot 15 and the new line 6, the L67 entry from the new lines 1 and 4; after M1-M5, re-quote every key part of Q1-Q3, the Misconception and every Lesson check entry from the new `film/script.txt` ("door's rate", "price cuts", "the old Astra's", "the price list", "A I by price", "actually" all leave), and grep each old phrase in `lesson.md`, `viewer.md`, `research.md`, `beats.md`, `script.md`. Net 0.
- **Rule**: none new (L74: re-tick `lesson.md`'s Picture lines and quotes against the final `viewer.md` before the first student run, not only after fix rounds).

Script after M1-M6 (157 words, cap 157.5):
```
G P T six point two Astra, OpenAI's pricier model: you pick by price, but how much text it uses sets your cost.
Here's why: a taxi fare is rate times miles, and the route sets the miles.
Before, you'd compare the rate: price per token, a chunk of text, assuming pricier meant better everywhere.
Now Astra's token price is twenty percent below G P T six Astra's, yet on one work test, OpenAI says, it cost under a third per task.
Like a driver who knows the route: OpenAI credits fewer tokens per task, plus lower token prices.
On one coding test, both at max, OpenAI says the cheaper model, Sol, came within half a point of Astra at about a fifth the cost.
So, what we learned: price per token is the taxi's rate; your cost is price times tokens, so compare cost per task.
Want more? Subscribe, and comment what we should explain next.
```
Time line 1 alone in the draft voice (L46: under about 8 s).

### S1 (should-fix): the takeaway's advice carries OpenAI's test numbers to the viewer's own work (G11)
- **What**: line 7 "so compare cost per task" never says where the viewer gets a cost per task; heard after two OpenAI test results, it suggests those numbers are the viewer's (`research.md` "where the analogy stops" (3): "a job like yours may use tokens differently"; row 15). The student: "That one test result generalizes" taken on faith. Should-fix.
- **Fix**: line 7 "so compare cost per task." -> "so compare cost per task on your work." (+3). Does not fit after M1-M6 (160); fits only with a 3-word cut the writer picks (candidate: "Here's why:" -2 if the judge accepts the turn without it, plus one more).
- **Rule**: When advice carries a maker's test result to the viewer's own work, say the viewer measures it on their own work.

### S2 (should-fix): the shorter route is never said to reach the same place (G11, G8 side step)
- **What**: line 4 "it cost under a third per task" says nothing of quality, so "fewer tokens" can read as doing less (analogy stop (1): more tokens can be more thinking); row 3 says Astra scored 5.2 points higher on that test. The student: "nothing is said about whether the results were equally good". Should-fix.
- **Fix**: line 4 "it cost under a third per task" -> "it scored higher and cost under a third per task" (+3; row 3; the claim check reads "higher" as OpenAI's, already credited by "OpenAI says"). Does not fit after M1-M6; fits only with a 3-word cut.
- **Rule**: When an analogy says "the same trip, shorter", say once that the result was as good or better, with its row.

### S3 (should-fix): "within half a point" without its base (G9)
- **What**: line 6 "within half a point of Astra": a point of what? (student: "of what scale?"). Should-fix.
- **Fix**: line 6 "of Astra" -> "of Astra's score" (+1; shot 16 "SCORE" already shows it). Does not fit after M1-M6 alone; fits with any 1-word cut.
- **Rule**: none (L67: every number says what it counts).
