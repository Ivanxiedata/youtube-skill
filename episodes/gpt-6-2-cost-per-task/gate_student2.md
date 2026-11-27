# Student, round 2

> Note (after the gate): quotes below are the script as it stood in this round, before the claim check (step 3b). `claims.md` later narrowed "rate times miles" to "mostly rate times miles", "twenty percent below" to "at least twenty percent below", "under a third per task" to "under a third as much", "knows the route" to "picks the best route", "fewer tokens per task" to "writing fewer tokens", "better everywhere" to "better", and moved the prices off the cab doors; see `claims.md` rows 3, 7, 8, 10, 12, 16, 18, 19.

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
