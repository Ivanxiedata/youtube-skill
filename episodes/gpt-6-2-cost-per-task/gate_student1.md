# Student, round 1

> Note (after the gate): quotes below are the script as it stood in this round, before the claim check (step 3b). `claims.md` later narrowed "rate times miles" to "mostly rate times miles", "twenty percent below" to "at least twenty percent below", "under a third per task" to "under a third as much", "knows the route" to "picks the best route", "fewer tokens per task" to "writing fewer tokens", "better everywhere" to "better", and moved the prices off the cab doors; see `claims.md` rows 3, 7, 8, 10, 12, 16, 18, 19.

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
