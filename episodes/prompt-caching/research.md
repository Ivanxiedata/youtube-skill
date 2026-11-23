# Research: prompt caching vs re-sending the whole document with every question

Done 2026-11-23 (daily run, workflow step 1). The makers' own docs only, fetched with `curl -sL` and stripped of HTML (lesson L20; text kept under
`$RUNNER_TEMP/prompt-caching/research/`). Two items (before, new), so the pages were read directly instead of the Deep-Research fan-out.
No press needed: every number in the video is on the makers' pages, or is arithmetic on their rates (shown below).

Sources:
- [Claude] https://docs.claude.com/en/docs/build-with-claude/prompt-caching (Claude Platform Docs, "Prompt caching")
- [OpenAI] https://platform.openai.com/docs/guides/prompt-caching (OpenAI API docs, "Prompt caching")

## Premise check
**Holds.** [Claude]: "Prompt caching optimizes your API usage by letting the API resume from specific prefixes in your prompts. This significantly reduces processing time and costs for repetitive tasks or prompts with consistent elements."
[Claude] names our use: "Books, papers, documentation, podcast transcripts, and other long-form content: Make any knowledge base interactive by embedding the entire document(s) into the prompt, and letting users ask it questions."
[OpenAI]: "When a later request has the same prefix and finds a matching cache entry, the model can reuse the saved state instead of processing those tokens again. It still needs to process any new input to generate a new response."
Not a new release (both makers have shipped it for a long time), so no "just dropped" (brand rule).

## Facts (every number and claim in the video traces to a row)
| # | Fact | Quote | Source |
|---|---|---|---|
| 1 | What it does | "This significantly reduces processing time and costs for repetitive tasks or prompts with consistent elements." | [Claude] |
| 2 | Long documents, asked many questions | "Books, papers, documentation, podcast transcripts, and other long-form content: Make any knowledge base interactive by embedding the entire document(s) into the prompt, and letting users ask it questions." / "Large document processing: Incorporate complete long-form material including images in your prompt without increasing response latency." | [Claude] |
| 3 | How: the saved work, reused | "When the model processes input tokens, it must calculate intermediate states, known as key-value (KV) states." / "Prompt caching preserves that state for a reusable prefix : the unchanged tokens at the beginning of a prompt. When a later request has the same prefix and finds a matching cache entry, the model can reuse the saved state instead of processing those tokens again. It still needs to process any new input to generate a new response." / "The prompt cache stores key-value (KV) tensors, not the tokens themselves." | [OpenAI] |
| 4 | How, step by step | "The system checks if a prompt prefix, up to a specified cache breakpoint, is already cached from a recent query." "If found, it uses the cached version, reducing processing time and costs." "Otherwise, it processes the full prompt and caches the prefix once the response starts." | [Claude] |
| 5 | Must match exactly, from the start | "Cache hits require 100 percent identical prompt segments, including all text and images up to and including the block marked with cache control." / "Cache reuse requires the entire rendered prefix to match." / "Put stable developer instructions and shared reference material first." | [Claude], [OpenAI] |
| 6 | Price of a read: a tenth on most models | "Cache read tokens are 0.1 times the base input tokens price (see the table footnote for per-model exceptions)." Footnotes: 0.05x on Claude Opus 5.5 and Sonnet 5.5, 0.025x on Fable 5.2 and three others. / "Subsequent reads cost 0.1× the ordinary input rate on most of these models and 0.05× on GPT-6.2 Astra , GPT-6.2 Sol , GPT-6.1 Sol , and GPT-6.1 Terra" | [Claude], [OpenAI] |
| 7 | Price of the first read (the write): a quarter more | "Cache write tokens with a 5-minute TTL are 1.25 times the base input tokens price." / "cache writes cost 1.25× the standard, uncached input-token rate for the default 30-minute lifetime" (GPT-5.6 and later) | [Claude], [OpenAI] |
| 8 | The maker's own worked number | "At the 0.1× read rate with 30-minute writes, writing a prefix once and fully reusing it once costs 1.35× its ordinary input cost, compared with 2× for processing it twice without caching. Across ten requests, one write and nine full reads cost 2.15× at that rate, compared with 10× without caching." | [OpenAI] |
| 9 | Our counted example, by the same method | 30 questions about one 100-page PDF, the PDF part of the input only: without caching 30 x 1 = **30 full reads**; with caching 1 write x 1.25 + 29 reads x 0.1 = 1.25 + 2.9 = **4.15, "about 4"**. Arithmetic on rows 6-7 (both makers' standard rates), the method of row 8. | rows 6-8 |
| 10 | Up to 95% off on OpenAI | "Cheaper input tokens: Pay the model's reduced cached-input rate for reused tokens, discounted up to 95%." | [OpenAI] |
| 11 | Faster to start answering | "You generally see improved time-to-first-token for long documents." / "Faster: Reduce the time spent processing input before the response starts." | [Claude], [OpenAI] |
| 12 | How long the cache lives (Claude) | "By default, the cache has a 5-minute lifetime. The cache is refreshed for no additional cost each time the cached content is used." / "If 5 minutes is too short, you can use a 1-hour cache duration at additional cost" | [Claude] |
| 13 | How long the cache lives (OpenAI, GPT-5.6 and later) | "\"30m\" (default) 30 minutes 1.25× the uncached input-token rate" / "\"12h\" 12 hours 2.5× the uncached input-token rate" | [OpenAI] |
| 14 | On by default (OpenAI) / opt in (Claude) | "Prompt caching is enabled by default for supported OpenAI models." / Claude Messages API: "Opt in with cache_control , at the top level or on blocks." | [OpenAI], [Claude] |
| 15 | Minimum size | "The minimum cacheable prompt length is 1,024 tokens for GPT-5.6 and later" / Claude: "1,024 tokens for Claude Opus 4.8, Claude Sonnet 5, ..." (per model) | [OpenAI], [Claude] |
| 16 | Only the new part is processed | "Cache hit at block 10. The system processes only blocks 11 through 15 fresh" | [Claude] |

## Before (the predecessor)
The same request without caching. [OpenAI]'s own comparison: "compared with 10× without caching", i.e. every request processes and bills the whole prefix again;
"Compute-efficient: Avoid recalculating a prompt prefix that the model has already processed." So, before: on each of the 30 questions the whole 100-page PDF is sent,
processed again and billed at the full input price; 30 questions = 30 full reads (row 9), and each one waits for the whole PDF to be read before the answer starts (row 11).

**Narrowing, so the video does not overclaim:**
- The saving is on the **PDF part of the input** (the repeated start). The new question and the answer are billed as usual ("It still needs to process any new input"). The meter is labelled "PDF READS PAID", never "the bill".
- "A tenth" is the standard rate; some models read for less (0.05x, 0.025x). Said as "about a tenth", "on most models".
- "About 4 instead of 30" is our arithmetic on the makers' rates, not a quoted number; the quoted proof is OpenAI's "2.15x compared with 10x" (row 8).
- No speed number: neither maker gives one for this. The video says "starts answering sooner", nothing more.
- It works only while the cache lives (5 minutes on Claude by default, each use restarts it; 30 minutes on OpenAI's newer models) and only if the document's start is exactly the same.

## Left out, and why
- Breakpoints, the 20-block lookback, TTL mixing, pre-warming, `prompt_cache_key`, routing above 15 requests per minute: true but not the viewer's moment; some in the description.
- Per-model price tables: one rate per idea is enough ("a quarter more once, then about a tenth").
- Token counts per page: the meter counts whole PDF reads, so no tokens-per-page figure is needed.
- Opt-in vs default: in the description (row 14), not in the 60 s.

## Where the analogy stops
The story: a student with a 100-page textbook and 30 homework questions. Before: re-reading the whole book for every question. Now: read it once, keep the notes, answer each question from the notes.
Where it stops: the AI keeps its *work* on the document (its saved state, row 3), not a summary; the "notes" vanish if unused for a few minutes (rows 12-13), and they only fit a book that starts exactly the same (row 5).
The AI is drawn as a robot with a teal screen head (brand casting); the mascot is the student/user asking the questions.
