# Research: the Gemini Decisions API vs asking a chat model to write its answer

Done 2026-11-24 (daily run, workflow step 1). The maker's own page first, fetched with `curl -sL` and stripped of HTML (lesson L20; text under
`$RUNNER_TEMP/gemini-decisions-api/src/`). The API docs page (`aistudio.google.com/docs/decisions-api`) renders only with JavaScript, so `curl` got its title and nothing else;
every product fact below is from Google's own announcement [BLOG]. InfoWorld [IW] is used only to confirm and for the date it reported. One item (before, new) on one maker page, so no Deep-Research fan-out.

Sources:
- [BLOG] https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/ (Google, "Gemini Decisions API: Fast, calibrated multimodal decisions", Nov 11, 2026, Min Choi and Felix Yu, Google DeepMind)
- [IW] https://www.infoworld.com/article/4247774/googles-gemini-decisions-api-to-handle-up-to-1000-questions-per-request.html (InfoWorld, Prasanth Aby Thomas, Nov 12, 2026)

## Premise check
**Holds.** [BLOG]: "Today, we're introducing the Gemini Decisions API, a new endpoint for fast, closed-set decisions powered by our new Gemini Decision 1 model (gemini-decision-1), available through the Gemini API in Google AI Studio."
and "Rather than generating answer text token by token, Gemini Decision 1 scores your candidate options in a single forward pass, returning probabilities and confidence scores".
Released 13 days before this episode (Nov 11, 2026), so "just launched" is allowed (brand rule: about a month or less).

## Facts (every claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | What and when | "Today, we're introducing the Gemini Decisions API, a new endpoint for fast, closed-set decisions powered by our new Gemini Decision 1 model (gemini-decision-1), available through the Gemini API in Google AI Studio." (dated Nov 11, 2026) | [BLOG] |
| 2 | One input, up to 1,000 questions | "You can pass one multimodal input across text, images, audio, video, and PDFs (up to 256K tokens) along with up to 1,000 independent questions." | [BLOG] |
| 3 | Scores options instead of writing text | "Rather than generating answer text token by token, Gemini Decision 1 scores your candidate options in a single forward pass, returning probabilities and confidence scores in 150-250 ms end-to-end latency at $0.10 per 1M input tokens with zero output tokens billed." | [BLOG] |
| 4 | Three question types, mixed in one request | "You can evaluate multiple questions against that shared input in a single request, mixing yes/no checks, multiple choice, and rubric scores." | [BLOG] |
| 5 | A confidence score on every answer, for routing to a person | "Every answer includes a confidence score (from 0 to 1) so your code can route ambiguous cases to a fallback or human reviewer" | [BLOG] |
| 6 | Yes/no | "Estimates the probability that a yes/no condition holds, with optional true and false description criteria." | [BLOG] |
| 7 | Multiple choice | "Selects from 2 to 255 choices, returning the winner and normalized probabilities for every candidate." | [BLOG] |
| 8 | Rubric | "Grades inputs across an ordered rubric (starting at 0), returning a continuous weighted score and per-level probabilities." | [BLOG] |
| 9 | The claim-file example (the maker's own) | "You can combine modalities in one shared input, such as pairing a call recording with account metadata or a scanned PDF claim with damage photos" | [BLOG] |
| 10 | Shared input billed once | "Your shared input is billed once per request no matter how many questions you evaluate (each question adds only its own instruction and criteria tokens)." | [BLOG] |
| 11 | Price | "Gemini Decision 1 is priced at $0.10 per 1M input tokens and $0 for output tokens, with an API no-cost tier you can use in Google AI Studio for prototyping." | [BLOG] |
| 12 | Cheaper than a writing model, on Google's tests | "With zero output tokens billed, Gemini Decision 1 with the Decisions API is nearly 5x cheaper across the shared benchmark suite than Gemini 3.5 Flash-Lite with the Interactions API." | [BLOG] |
| 13 | Speed, with its condition | "keeping median latency 50-100 ms of model compute (150-250 ms end-to-end), across multimodal inputs and contexts up to 16K tokens, remaining nearly flat from 1 to 100 questions per request." | [BLOG] |
| 14 | Calibration, on Google's benchmarks | "On benchmarks spanning agent routing, reasoning, ranking, and multimodal understanding, Gemini Decision 1 leads across the suite, with the lowest calibration error." | [BLOG] |
| 15 | Instead of custom classifiers or generative calls | "shipping features simply by defining options rather than training custom classifiers or waiting on generative calls" | [BLOG] |
| 16 | Bigger-scale example: Gemini Notebook | "The Decisions API classifies intent in milliseconds to serve everyday queries with up to 40% lower latency while reserving deep reasoning models for complex tasks." | [BLOG] |
| 17 | Where it runs, and what's not yet | "Ecosystem integrations are rolling out across OpenRouter, LangChain, Vercel, LiteLLM, Pydantic AI, Pipecat, LiveKit, and OpenCode alongside the google-genai SDKs, with support coming soon to Gemini in Google Cloud." | [BLOG] |
| 18 | Press confirms 1,000 per request | "Powered by the company's new Gemini Decision 1 model, the API allows developers to evaluate up to 1,000 questions in a single request." | [IW] |
| 19 | A confidence score is not proof (analyst) | "Even when an API returns a confidence score, that alone does not establish whether its assessment is trustworthy." | [IW] |

## Before (the predecessor, from the same sources)
Google names the old way itself: a model "generating answer text token by token" (row 3), "waiting on generative calls" (row 15), and, for price, "Gemini 3.5 Flash-Lite with the Interactions API" (row 12).
The scene **"you ask a chat model one question at a time, it writes each answer out in words, you read or parse the words, and nothing says how sure it was" is ours** (the topic's "before" and the episode's counted example), not a Google claim.
In it, the claim file goes along with every one of the 20 prompts, so you pay to send it 20 times: that is how a per-request input price works when each question is its own request (our inference, not a Google sentence; Google's sentence is the reverse, row 10). A chat model can also be asked several questions in one prompt; the video's before is the one-question-per-prompt habit, said as "one question at a time", never "a chat model can only take one question".

## The counted example (ours, invented)
**One insurance claim** (a scanned PDF claim with damage photos, Google's own example of a shared input, row 9) and **20 questions** about it: yes/no ("Is it signed?"), multiple choice ("Which kind of damage?"), a rubric ("How bad, 0 to 2?").
Before: 20 prompts, the claim sent 20 times, 20 written answers to read, no number for how sure. Now: 1 call with the claim once and all 20 questions (well under the 1,000 limit), 20 answers each with a probability or score and a confidence from 0 to 1; the unsure ones go to a person (row 5).
Meter: **"TIMES YOU SEND THE CLAIM"**, 20 before, 1 now (the same unit both sides, lesson L34). Google gives no number for this example; the video claims none for it.
Proof: Google's own number, "nearly 5x cheaper" on its shared benchmark suite than Gemini 3.5 Flash-Lite with the Interactions API (row 12). Bigger example: Gemini Notebook, up to 40% lower latency for everyday queries (row 16).

## Narrowing conditions (write them into every line, lesson L26)
- **Up to 1,000 questions**, one input per call; the input is up to 256K tokens (row 2). Never "unlimited", never "any number of files".
- **Fixed options only**: yes/no, multiple choice (2 to 255 choices) and ordered rubrics (rows 6-8). It does not write text, summaries or explanations. Never "answers anything".
- **Confidence from 0 to 1 on every answer** (row 5). "Calibrated" and "lowest calibration error" are on Google's own benchmark suite (row 14); a confidence score is not proof the answer is right (row 19). Say "how sure it is", never "always right" or "knows when it's wrong".
- **Billed once per request**: the shared input is billed once, but each question still adds its own instruction and criteria tokens (row 10). Never "the questions are free".
- **"Nearly 5x cheaper"** only "across the shared benchmark suite" and only against "Gemini 3.5 Flash-Lite with the Interactions API" (row 12). Never "5x cheaper than ChatGPT" or "than every model". Whole on screen: "ABOUT 5X".
- **Speed**: 150-250 ms end-to-end only "across multimodal inputs and contexts up to 16K tokens", nearly flat from 1 to 100 questions (row 13). The video does not use the speed number (it would need both conditions); it says "one call".
- **40% lower latency** is "up to", for "everyday queries" in Gemini Notebook (row 16).
- **Where**: the Gemini API in Google AI Studio; Google Cloud support "coming soon" (rows 1, 17). It is a developer API: "your app" or "you, building with it", not a chat window.
- **Before is ours**: "one question at a time" and "the claim sent 20 times" are our example, said to be ours in the description.

## Left out, and why
- Latency in ms: true, but needs two conditions (16K tokens, 1-100 questions); not the one idea.
- The Stitch, CC emoji and Search safety examples, the demo apps, the SDK list: not the one idea; the description names AI Studio and links the post.
- OpenAI's own Decisions API (400 questions per request, per [IW]): the voice rules say we never claim one tool beats another; left out.
- The "noul" type name and code: developer detail, linked in the description.

## Where the analogy stops
The story is a school test: before, an essay exam (each answer written out, one question at a time, read by hand, no sign how sure the writer was); now, one bubble answer sheet for all 20 questions, each bubble with how sure it is.
A real answer sheet has no confidence on it; ours does (the analogy's extra). And a student filling bubbles still thinks; the model only scores the options you gave it. It cannot write an answer you didn't list.
