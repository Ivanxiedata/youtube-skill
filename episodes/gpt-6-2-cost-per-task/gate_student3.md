# Student, round 3

> Note (after the gate): quotes below are the script as it stood in this round, before the claim check (step 3b). `claims.md` later narrowed "rate times miles" to "mostly rate times miles", "twenty percent below" to "at least twenty percent below", "under a third per task" to "under a third as much", "knows the route" to "picks the best route", "fewer tokens per task" to "writing fewer tokens", "better everywhere" to "better", and moved the prices off the cab doors; see `claims.md` rows 3, 7, 8, 10, 12, 16, 18, 19.

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
