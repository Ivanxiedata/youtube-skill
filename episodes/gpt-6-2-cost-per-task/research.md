# Research: gpt-6-2-cost-per-task (workflow step 1)

Made 2026-11-27 from the maker's own announcement and one press article, fetched with `curl -sL` (browser user agent) and stripped of HTML; every quote below was found in the stripped text with Python `str.find` (lessons L20, L29, L40).
Each page was checked to be the article itself: [O] holds its headline "Introducing GPT-6.2 Astra and Sol" and its sections (Pricing and availability, Safety and alignment); [D] holds its headline "OpenAI's GPT 6.2 Astra Challenges Anthropic on Price, But Not Every Benchmark", byline Jose Antonio Lanz and the date "Nov 17, 2026"; [T] and [F] are the NYC Taxi and Limousine Commission's "Taxi Fare" and "Passenger Frequently Asked Questions" pages (the story's facts).
[O] shows no date in its text; the launch date comes from [D] ("OpenAI launched GPT-6.2 Astra and Sol on Tuesday", dated Nov 17, 2026). The system card and the benchmark charts on [O] are images or JavaScript and were not read.

Sources:
- **[O]** OpenAI, "Introducing GPT-6.2 Astra and Sol": https://openai.com/index/introducing-gpt-6-2-astra-sol
- **[D]** Decrypt, Jose Antonio Lanz, "OpenAI's GPT 6.2 Astra Challenges Anthropic on Price, But Not Every Benchmark", Nov 17, 2026: https://decrypt.co/383488/openai-gpt-6-2-astra-challenges-anthropic-price-but-not-every-benchmark
- **[T]** NYC Taxi and Limousine Commission, "Taxi Fare": https://www.nyc.gov/site/tlc/passengers/taxi-fare.page
- **[F]** NYC Taxi and Limousine Commission, "Passenger Frequently Asked Questions": https://www.nyc.gov/site/tlc/passengers/passenger-frequently-asked-questions.page

The premise holds in the maker's own words: both models are priced per token (rows 5, 6), and OpenAI sells them on cost per task: GPT-6.2 Astra's token prices are 20% lower than GPT-6 Astra's (row 5), yet on Agents' Last Exam it scored higher "at less than a third of the cost" (row 3), which OpenAI credits to "better token efficiency" plus the two discounts (row 7); and on FrontierCode 2.0, a coding test, GPT-6.2 Sol came within 0.5 points of GPT-6.2 Astra "at about one-fifth the cost (both at max)" (row 9).
Age: 10 days old today (2026-11-27).

## Facts
| # | Fact | Quoted sentence | Source |
|---|---|---|---|
| 1 | What they are | "GPT‑6.2 Astra , our new frontier model for your hardest projects, and GPT‑6.2 Sol , our efficient, versatile model for everyday work." | [O] |
| 2 | Fewer output tokens (OpenAI's claim) | "Both models deliver better results on demanding tasks with fewer output tokens, so you can get more done within your usage limits." | [O] |
| 3 | **Cost per task vs GPT-6 Astra, one test** | "On Agents’ Last Exam, which tests multistep professional work, GPT‑6.2 Astra sets a new high, scoring 5.2 points higher than GPT‑6 Astra at less than a third of the cost, and 5.5 points ahead of Claude Fable 5.2 at just 5% of the cost." | [O] |
| 3b | What that test is | "Agents’ Last Exam evaluates models on long-horizon professional workflows." | [O] |
| 4 | Several benchmarks | "On several benchmarks, both models come close to or outperform other leading models at a small fraction of the cost per task." | [O] |
| 5 | **Astra's token price: 20% lower** | "In the API, GPT‑6.2 Astra’s input and output token prices are 20% lower than GPT‑6 Astra’s, with a 60% discount on cached input ($8 for input, $0.40 for cached input, and $40 for output, all per million tokens)." | [O] |
| 6 | Sol's token price, unchanged | "GPT‑6.2 Sol carries forward GPT‑6.1 Sol’s rates of $2 for input, $0.10 for cached input, and $10 for output per million tokens." / "GPT‑6.2 Sol keeps GPT‑6.1 Sol’s API token prices." | [O] |
| 7 | **Why the cost per task fell (OpenAI's reasons)** | "GPT‑6.2 Astra costs significantly less per task than GPT‑6 Astra, driven by better token efficiency, a 20% discount on input and output tokens, and a deeper 60% discount on cached input tokens." | [O] |
| 8 | Fewer output tokens, another test | "GPT‑6.2 Astra leads the models we tested, up 6.2 percentage points from GPT‑6 Astra while using 22% fewer output tokens." (OpenAI's internal GDPval v2) | [O] |
| 9 | **Sol close to Astra on code, about a fifth of the cost** | "In Cognition’s FrontierCode 2.0, GPT‑6.2 Sol comes within 0.5 points of GPT‑6.2 Astra at about one-fifth the cost (both at max)." | [O] |
| 9b | What that test is | "FrontierCode 2.0 evaluates whether changes to real codebases meet maintainers’ standards for merging." | [O] |
| 10 | Sol vs GPT-6 Astra, everyday tasks | "On our recently released LifeVal ⁠ evaluation, which measures performance on challenging everyday tasks, GPT‑6.2 Sol outscores GPT‑6 Astra at about one-seventh the cost." | [O] |
| 11 | A customer's token count | "In our Agent evals, GPT-6.2 Astra used 62% fewer tokens than GPT-6.1 Sol on complex legal-agent tasks." (Jacob Lauritzen, CTO, Legora) | [O] |
| 12 | What a token is (press) | "Tokens are the chunks of text models process and generate, so fewer tokens can mean a smaller bill even when the listed rates stay the same." | [D] |
| 13 | Not every benchmark (independent) | "Independent tests rank Astra second behind Anthropic's Claude Fable 5.2, with no improvement in coding-agent performance." | [D] |
| 14 | Independent cost per task | "Sol scores 57, matching the original Astra's performance at roughly 15% of its cost per evaluated task." (Artificial Analysis Intelligence Index) | [D] |
| 15 | Company claims | "Those are company claims, not guarantees for every assignment." | [D] |
| 16 | Launch date | "OpenAI launched GPT-6.2 Astra and Sol on Tuesday" (article dated Nov 17, 2026) | [D] |
| 17 | Availability | "Starting today, GPT-6.2 Astra and Sol are available to all Plus, Pro, Enterprise, and Edu users in ChatGPT Work and Codex." / "Developers can also access gpt-6.2-astra and gpt-6.2-sol through the OpenAI API" | [O] |
| 18 | Keep the cache warm | "we recommend keeping prompt prefixes unchanged and appending new instructions" | [O] |
| S1 | **Story:** the fare is a rate times the distance | "$3.00 initial charge. Plus 70 cents per 1/5 mile when traveling above 12mph or per 60 seconds in slow traffic or when the vehicle is stopped." | [T] |
| S2 | **Story:** the route sets the fare | "It is impossible to pre-calculate a fare, because the meter rate depends on traffic, construction, weather, and route to the destination." | [F] |
| S3 | **Story:** a driver finds the best route | "They must consult their 5-borough map to identify the best route to any destination within the 5 boroughs." | [F] |

Derived (our arithmetic, never said as OpenAI's): GPT-6.2 Astra's token rates are 4 times GPT-6.2 Sol's on every line ($8 vs $2, $0.40 vs $0.10, $40 vs $10; rows 5, 6), so "a quarter of Astra's token price" holds for Sol. Not used for any cost claim.

## The story everyone knows: a taxi fare (rows S1-S3)
- **Mechanism match.** A taxi's fare is a rate (cents per fifth of a mile) times how far the cab goes (S1), and the route decides how far (S2); a driver who picks the best route (S3) drives, in this picture, fewer miles for the same trip (our inference from the per-distance rate, S1).
  An AI job's cost is a price per token (rows 5, 6) times how many tokens the model uses (row 12: "chunks of text models process and generate"); a model that uses fewer tokens for the same task (rows 2, 7, 8) costs less per task.
- **Before, through the story:** comparing the rate (cents per fifth of a mile, S1) is comparing models by their price per token, and assuming the pricier model is better; but the rate alone can't tell the fare (S2), just as the price per token alone can't tell the cost of a task.
- **Now, through the story:** the meter at the end is the cost: GPT-6.2 Astra's input and output rates are 20% lower (row 5), but on Agents' Last Exam, OpenAI says, it scored higher at less than a third of GPT-6 Astra's cost (row 3), a shorter route, in OpenAI's words "better token efficiency", plus the discounts (row 7).
  And on FrontierCode 2.0 the cheaper model, Sol, came within 0.5 points of Astra for about a fifth of the cost (row 9); in the picture, two cabs stand for two models (no row says real cabs post different rates: NYC's is one regulated rate, S1).
- **Where the analogy stops:** (1) a long route in a taxi is waste; in AI, more tokens can also be more thinking, and OpenAI says Astra scored higher with fewer (row 3), not that fewer tokens always means better work; (2) a taxi fare is mostly distance; an AI bill has input, cached input and output at different rates (row 5), and the 60% cached-input discount is part of Astra's drop (row 7), which is why the script says "at least twenty percent"; (3) these are OpenAI's own test results on its chosen tests (row 15); independent tests rank Astra second and show no coding-agent gain (row 13), and a job like yours may use tokens differently; (4) no driver is cheating: the token count is how the model works the task, not a scam.

## The counted example
The cost on one test (OpenAI's words: "less than a third of the cost", "about one-fifth the cost", rows 3, 9; OpenAI frames such results as cost per task, rows 4, 7). The meter on screen, titled "COST", counts the cost on the test, with GPT-6 Astra's cost on Agents' Last Exam as the full meter: 20% off the price per token alone would give 80% of it (row 5; the dashed "WHAT 20% OFF WOULD BE" line); the meter stops under a third (row 3).
For Sol (row 9) the meter's full mark is GPT-6.2 Astra's cost on FrontierCode 2.0, and Sol's stops at about a fifth. Each meter names its test and its base; no dollar amount per task is given by any source, so none is drawn.

## Narrowing list (every line that states the feature carries its condition)
1. "Less than a third of the cost" is **GPT-6.2 Astra vs GPT-6 Astra on Agents' Last Exam** (row 3), one test of multistep professional work, **OpenAI's** result. Never "every task" or "always".
2. The cost per task fell for **three** reasons, in OpenAI's words: better token efficiency, the 20% discount on input and output tokens, and the 60% discount on cached input (row 7). Never "only because it writes fewer tokens"; "fewer tokens" is OpenAI's "token efficiency" (rows 2, 7, 8).
3. The 20% is **GPT-6.2 Astra's token prices vs GPT-6 Astra's** (row 5), input and output; cached input is 60% lower.
4. Sol: **within 0.5 points of GPT-6.2 Astra on FrontierCode 2.0 (Cognition's coding test), at about one-fifth the cost, both at max** (row 9). It is close, not equal or better; on that one test.
5. Sol's token prices are GPT-6.1 Sol's (row 6); a quarter of Astra's per token (derived above).
6. "Fewer output tokens" is OpenAI's claim (row 2); press calls these company claims, not guarantees for every assignment (row 15); independent tests rank Astra second behind Claude Fable 5.2, with no coding-agent gain (row 13).
7. A token is a chunk of text a model processes and generates (row 12): the bill counts tokens read and written, not only words written.
8. The story's facts are NYC's (S1-S3): the rate is per fifth of a mile **or per minute in slow traffic**, plus an initial charge and surcharges; the fare depends on traffic, weather, construction **and route** (S2). Draw the rate as a rate, never a quoted dollar fare; NYC has one regulated rate, so the two cabs are only the picture of two models, their prices on a "PRICE PER TOKEN" board above them, never a spoken claim about taxis.

## Left out, and why
- The benchmarks' scores themselves (5.2 points, the Elo, GDPval percentages): the lesson is about cost per task, not who wins; the scores add numbers without a question they answer.
- Claude Fable 5.2 "at just 5% of the cost" (row 3): a rival comparison the press disputes (row 13); not needed for the idea, and voice.md says we never claim one tool beats another.
- Legora's "62% fewer tokens than GPT-6.1 Sol" (row 11): a customer's test against the older Sol; it would need our arithmetic to turn into a cost, so it stays out.
- Safety, cybersecurity, self-improvement rating, Ultrafast, availability by plan: other topics; availability goes in the description.
- Prompt caching advice (row 18): its own episode (`episodes/prompt-caching/`).
- Exact dollar rates per million tokens (rows 5, 6): in the description; on screen the rates are shown on a "PRICE PER TOKEN" board with "$" marks, and the one number said is "at least 20 percent".
