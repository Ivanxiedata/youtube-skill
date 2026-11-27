# Package: gpt-6-2-cost-per-task (workflow step 2)

Made 2026-11-27 with `/yt-package` and `/yt-seo`, before the script. Facts: `research.md`.

## The viewer's moment (lesson L16)
- **Who** (`docs/voice.md`): someone who uses AI at work, sees a new model's price list every month (dollars per million tokens) and has to pick which one to use or pay for; curious, not an engineer.
- **The pain today (before):** like judging a taxi ride by its rate alone: you compare price per token (GPT-6 Astra's rates, GPT-6.1 Sol's) and assume the cheaper rate is the cheaper job, or the pricier model is better at everything; the cost at the end is the price times how many tokens the job used, and price per token never shows that number (`research.md` rows 5, 6, 12).
- **The moment they're paying for:** like reading the meter, not the rate: GPT-6.2 Astra's token prices are only 20% lower than GPT-6 Astra's (row 5), yet on Agents' Last Exam, OpenAI says, it scored higher at less than a third of the cost (row 3), which OpenAI credits to better token efficiency plus the discounts (row 7); and on FrontierCode 2.0, a coding test, the cheaper Sol came within 0.5 points of Astra at about a fifth of the cost, both at max (row 9). These are OpenAI's results on its chosen tests (row 15).

## The 10 titles (and an 11th)
Thumbnail words: LEARN, OPENAI'S, GPT-6.2, ASTRA, SOL, IN, 60, SECONDS; so no "learn", "60" or "seconds" in the title besides the topic's name ("GPT-6.2 Astra & Sol").
Every title carries a digit (lesson L21). `python3 .claude/skills/yt-package/title.py titles.txt` (alone).

| # | Title | Chars | Alone | Issues |
|---|---|---|---|---|
| 1 | GPT-6.2 Astra: 20% Off Per Token, Under 1/3 the Cost Per Task | 61 | - | over 60 characters; drops "on one test" (row 3) |
| 2 | GPT-6.2 Astra & Sol: Why Cost Per Task Beats the Price List | 59 | 98 | mobile; "beats" is an opinion |
| 3 | GPT-6.2 Astra & Sol: The Price List Isn't Your AI Bill | 54 | 98 | mobile; vague on what the bill is |
| 4 | GPT-6.2 Astra & Sol: Your AI Bill Is Price Times Tokens | 55 | 98 | mobile; "bill" is a second word for the script's "cost" (L76) |
| 11 | **GPT-6.2 Astra & Sol: Your AI Cost Is Price Times Tokens** | 55 | 98 | mobile (subject survives: "GPT-6.2 Astra & Sol: Your AI Cost Is...") |
| 5 | GPT-6.2 Sol vs Astra: Close on Code at About 1/5 the Cost | 57 | 98 | mobile; only half the lesson; "vs" invites a winner |
| 6 | GPT-6.2 Astra & Sol: Pick AI by Cost Per Task, Not Price | 56 | 98 | mobile; advice without the reason |
| 7 | GPT-6.2 Astra & Sol: Why Fewer Tokens Can Cut Your AI Bill | 58 | 98 | mobile; "can" is right but weak |
| 8 | GPT-6.2 Astra: Tokens 20% Cheaper, Tasks Far Cheaper (2026) | 59 | 98 | mobile; "far cheaper" without "on one test" |
| 9 | GPT-6.2 Astra & Sol: The Taxi-Meter Rule for AI Costs | 53 | 98 | mobile; the analogy, not what you get |
| 10 | GPT-6.2 Astra & Sol (2026): Cost Per Task, Not Per Token | 56 | 98 | mobile; "not per token" reads as if the price weren't per token |

## Top 3 (with the thumbnail, `title.py --title "..." --thumb "LEARN OPENAI'S GPT-6.2 ASTRA & SOL IN 60 SECONDS"`)
| Title | Alone | Pair | Pair issues |
|---|---|---|---|
| GPT-6.2 Astra & Sol: Your AI Cost Is Price Times Tokens | 98 | 70 | mobile, duplicate (gpt, 6, 2, astra, sol), thumb-length 10 (by design) |
| GPT-6.2 Astra & Sol: Why Cost Per Task Beats the Price List | 98 | 70 | same |
| GPT-6.2 Astra & Sol (2026): Cost Per Task, Not Per Token | 98 | 70 | same |

The duplicate and thumb-length issues are on purpose (`docs/workflow.md`, deviations): the brand card repeats the topic's name, which search needs in the title.

## Chosen
**GPT-6.2 Astra & Sol: Your AI Cost Is Price Times Tokens** (55 characters; the subject at character 1; the digits 6.2; no thumbnail word besides the topic's name; 98 alone, 70 with the thumbnail, by design).
It holds in OpenAI's and the press's words: prices are "per million tokens" (rows 5, 6), and "fewer tokens can mean a smaller bill even when the listed rates stay the same" (row 12); the cost counts input, cached input and output tokens, each at its rate (row 5), which "price times tokens" covers line by line.
The first seconds confirm it: the hook names the GPT-6.2 Astra model and says how much text it uses sets your cost, over two taxis under a board of their price per token, then a meter climbing as text feeds in.

## Thumbnail text
`film/thumb.json`: learn **"LEARN OPENAI'S"**, topic **"GPT-6.2 ASTRA & SOL"**, read as **LEARN OPENAI'S GPT-6.2 ASTRA & SOL IN 60 SECONDS** (brand card).
Picture: an amber taxi seen from the side, its roof light dark, a big taxi meter on the dash glowing teal; a short teal route line beside a long grey one behind it; no words or digits (lesson L54).
The mascot, left, wears the story's costume: a cabbie's flat cap in amber with a dusk-purple band (palette, lesson L88).

## The 3 searches this video should win (`/yt-seo`; picked after the title, from words it and description lines 1-2 hold, lesson L37)
| Search | Words in the title | Words in the first two description lines |
|---|---|---|
| gpt-6.2 astra | GPT-6.2, Astra | line 1 |
| gpt-6.2 sol | GPT-6.2, Sol | line 1 |
| ai price per token | AI, Price, Tokens ("per" in line 1, "cost per task"; "token prices" in line 2) | line 1 ("price times tokens"), line 2 ("token prices") |

Proposed first two description lines (step 5; every condition from `research.md`'s narrowing list, re-read before writing them):
1. `GPT-6.2 Astra and Sol (OpenAI, Nov 17, 2026), explained in 60 seconds with a taxi meter: your AI cost is price times tokens, so compare cost per task, not the price list.`
2. `OpenAI says GPT-6.2 Astra's input and output token prices are 20% lower than GPT-6 Astra's (cached input 60% lower), yet on Agents' Last Exam it scored higher at less than a third of the cost, which it credits to better token efficiency plus a 20% discount on input and output tokens and a 60% discount on cached input; on FrontierCode 2.0 (both at max), GPT-6.2 Sol came within 0.5 points of GPT-6.2 Astra at about one-fifth the cost.`
Line 3: `These are OpenAI's results on its own chosen tests; Decrypt reports independent tests rank Astra second behind Claude Fable 5.2, with no improvement in coding-agent performance.`
