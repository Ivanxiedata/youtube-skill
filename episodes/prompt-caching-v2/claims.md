# Claim check (workflow step 3b) for prompt-caching-v2

Date 2026-11-23. Sources: Claude = https://docs.claude.com/en/docs/build-with-claude/prompt-caching ; OpenAI = https://platform.openai.com/docs/guides/prompt-caching .
Fetched with `curl -sL`, HTML stripped with `python3 -I`, into `$RUNNER_TEMP/prompt-caching-v2/claimcheck/` (`claude.txt`, `openai.txt`). Quotes are copied verbatim from those files.
Arithmetic: 1.25 + 29 x 0.1 = 1.25 + 2.9 = 4.15 (correct; PDF part of the input only, read rate 0.1x, all 30 questions inside the cache lifetime).

Key source sentences (C = Claude, O = OpenAI):
- C1: "By default, the cache has a 5-minute lifetime. The cache is refreshed for no additional cost each time the cached content is used."
- C2: "Cache write tokens with a 5-minute TTL are 1.25 times the base input tokens price."
- C3: "Cache read tokens are 0.1 times the base input tokens price (see the table footnote for per-model exceptions)."
- C4: "Cache hits and refreshes on Claude Opus 5.5 and Claude Sonnet 5.5 are priced at 0.05x the base input price. All other models use the standard 0.1x multiplier." (and 0.025x on Fable 5.2, Mythos 5.2, Fable 5.1, Mythos 5.1)
- C5: "This significantly reduces processing time and costs for repetitive tasks or prompts with consistent elements."
- C6: "Cached prefixes automatically expire after a minimum of 5 minutes of inactivity."
- C7: "Place static content (tool definitions, system instructions, context, examples) at the beginning of your prompt."
- C8: "Otherwise, it processes the full prompt and caches the prefix once the response starts."
- C9: "Books, papers, documentation, podcast transcripts, and other long-form content: Make any knowledge base interactive by embedding the entire document(s) into the prompt, and letting users ask it questions."
- O1: "For GPT-5.6 and later, cache writes cost 1.25× the standard, uncached input-token rate for the default 30-minute lifetime."
- O2: "Subsequent reads cost 0.1× the ordinary input rate on most of these models and 0.05× on GPT-6.2 Astra , GPT-6.2 Sol , GPT-6.1 Sol , and GPT-6.1 Terra , regardless of the selected lifetime."
- O3: "Across ten requests, one write and nine full reads cost 2.15× at that rate, compared with 10× without caching."
- O4: "Faster: Reduce the time spent processing input before the response starts."
- O5: "It does not guarantee that every request reuses stored KV tensors or has lower latency."
- O6: "Prompt caching preserves that state for a reusable prefix : the unchanged tokens at the beginning of a prompt." and "It still needs to process any new input to generate a new response."

| # | where | claim | source and quoted sentence | verdict | fix |
|---|---|---|---|---|---|
| 1 | script hook | Prompt caching means you stop paying full price for the same 100-page PDF thirty times when you ask your AI thirty questions | C2, C3: first write 1.25x, reads 0.1x, so not full price each time; C9 supports the use case | holds | none |
| 2 | script before | Without caching, each question re-reads the whole book/PDF; "Question one: all 100 pages, full price. Question two: all again. By question thirty: paid thirty times." | C8 "Otherwise, it processes the full prompt and caches the prefix once the response starts."; O3 "compared with 10× without caching." | holds | none |
| 3 | script new | Question one pays a quarter more, by default, to save its work | C2 "Cache write tokens with a 5-minute TTL are 1.25 times the base input tokens price." (5 min is the default, C1); O1 (default 30-minute lifetime) | holds | none |
| 4 | script new | Questions two to thirty reuse that work for about a tenth on most models | C3 + C4 (0.1x standard; 0.05x and 0.025x on some); O2 "0.1× the ordinary input rate on most of these models" | holds ("most models" kept) | none |
| 5 | script new | ...and usually answer sooner | C5 "This significantly reduces processing time..."; O4; O5 hedges "does not guarantee ... lower latency" | holds ("usually") | none |
| 6 | script new | The document goes first, the same every time; only the new question is read fresh | C7 "Place static content ... at the beginning of your prompt."; O6 "the unchanged tokens at the beginning of a prompt" and "It still needs to process any new input to generate a new response." | holds | none |
| 7 | script why | OpenAI's math: ten requests cost just over two full reads, not ten | O3 "Across ten requests, one write and nine full reads cost 2.15× at that rate, compared with 10× without caching." ("that rate" = 0.1x reads, 30-minute writes, GPT-5.6 and later) | holds (the on-screen source line carries the model scope, see 21) | none |
| 8 | script why | Ours for thirty: about four | Arithmetic 1.25 + 29 x 0.1 = 4.15 from C2/C3/O1/O2. "Ours" says it is our math; chart label "30 QUESTIONS · OUR MATH" and line "1.25 + 29 x 0.1" show it. Condition (PDF part only, 0.1x read rate, questions inside the lifetime) is on screen only in part; the five-minute catch follows in the takeaway | holds | none required; optional: add "PDF part" to the shot 23 label (see 22) |
| 9 | script takeaway | That's how you stop paying full price thirty times | follows from rows 1, 3, 4 | holds | none |
| 10 | script takeaway | On Claude, unused saved work can fade after five minutes, by default | C1 "By default, the cache has a 5-minute lifetime."; C6 "Cached prefixes automatically expire after a minimum of 5 minutes of inactivity." | holds | none |
| 11 | script takeaway | Same book: read once, reuse the work | C1, C3 (reuse; reads still cost about a tenth, and the work is saved once per lifetime) | holds (a metaphor line after the catch) | none |
| 12 | script outro | Subscribe for the next one | not a factual claim | holds | none |
| 13 | beats shot 0 | "LEARN / PROMPT CACHING / IN 60 SECONDS" | topic name = both pages' titles; 60 s is the film's own length | holds | none |
| 14 | beats shots 2-5 | "PDF · 100 PAGES", meter "x30", counter "Q1 ... Q30", "HOW?" | invented example inside C9 "embedding the entire document(s) into the prompt, and letting users ask it questions." | holds | none |
| 15 | beats shots 6-12 | "1 PDF · 30 QUESTIONS", "EVERY QUESTION: ALL 100 PAGES", "FULL PRICE", meter to 30, "30 PDFs PAID" | C8; O3 "compared with 10× without caching." | holds | none |
| 16 | beats shot 14 | tag "+25% · FIRST QUESTION · DEFAULT", meter "1.25" | C2; O1 | holds | none |
| 17 | beats shot 15 | "SAVED WORK" | O6 "Prompt caching preserves that state for a reusable prefix" | holds | none |
| 18 | beats shot 17 | "ABOUT 1/10 EACH · MOST MODELS", meter stops near "4.15" | C3/C4/O2 (most models); arithmetic 4.15 above. Note: on Claude Opus 5.5 and Sonnet 5.5 the read is 0.05x (C4), so the total there is lower (about 2.7); "about" and "MOST MODELS" cover it | holds | none |
| 19 | beats shot 18 | "USUALLY STARTS SOONER" | C5; O4; O5 | holds | none |
| 20 | beats shots 19-21 | "HOW IT WORKS", "FIRST", "EXACTLY THE SAME", "SAVED WORK", "REUSED", "NEW: READ FRESH" | C7; O6 "Cache reuse requires the entire rendered prefix to match." | holds | none |
| 21 | beats shot 22 | "10 REQUESTS", amber "WITHOUT CACHING 10x", teal "WITH CACHING 2.15x", source line "OpenAI docs · GPT-5.6+ · 0.1x reads" | O3; O2 "0.1× the ordinary input rate on most of these models and 0.05× on GPT-6.2 Astra , GPT-6.2 Sol , GPT-6.1 Sol , and GPT-6.1 Terra" | narrower (the line says 0.1x reads for GPT-5.6+, but four models read at 0.05x; the 2.15x is "at that rate") | Source line: "OpenAI docs · GPT-5.6+, most models · 0.1x reads" (or "... · at 0.1x reads") |
| 22 | beats shot 23 | "30 QUESTIONS · OUR MATH", amber "30", teal "ABOUT 4", line "1.25 + 29 x 0.1" | arithmetic = 4.15; shows its own formula and "OUR MATH" | holds (clear it is our math; the "PDF part only" condition is not on screen) | optional: label "30 QUESTIONS · OUR MATH · PDF PART" |
| 23 | beats shot 24 | "BEFORE" meter 30, "NOW" meter about 4, "SAME 30 QUESTIONS" | rows 8, 15, 18 | holds | none |
| 24 | beats shots 25-26 | "THE CATCH", "CLAUDE · DEFAULT", "5:00" clock, "AT LEAST 5 MIN", "EACH USE RESTARTS THE CLOCK" | C6 "a minimum of 5 minutes"; C1 "The cache is refreshed for no additional cost each time the cached content is used." | holds | none |
| 25 | beats shot 27-28 | "Same book:", "read once, reuse the work.", "NEXT IN 60 SECONDS", Subscribe | not factual (as row 11) | holds | none |
| 26 | beats "On-screen words" | the section's source map (rows cited, "Cached prefixes automatically expire after a minimum of 5 minutes of inactivity.") | C6 is a verbatim match | holds | none |
| 27 | package, Chosen title | "Prompt Caching: Stop Paying Full Price for 1 PDF 30x" | rows 1, 3, 4 | holds | none |
| 28 | package, Thumbnail text | "LEARN PROMPT CACHING IN 60 SECONDS" (picture: a "SAVED" tag, 100 PAGES stack, Q1 ... Q30) | topic name; 60 s = film length; invented example | holds | none |
| 29 | package, description line 1 | "What is prompt caching? ... the AI saves its work on the PDF once, then reuses it." | C1, C6: the saved work expires after inactivity (default 5 min on Claude), so "once, then reuses it" drops the lifetime condition | narrower | "...the AI saves its work on the PDF, then reuses it while the saved work lasts." |
| 30 | package, description line 2 | "Before, every question re-sent and re-paid the whole PDF at full price (30 questions = 30 PDFs)" | C8; O3 | holds | none |
| 31 | package, description line 2 | "with prompt caching the PDF part costs about 4 by our math on the makers' rates (Claude and OpenAI docs)" | arithmetic 4.15 on 1.25 write and 0.1 read (C2, C3, O1, O2). But Claude's own rate is 0.05x on Opus 5.5 and Sonnet 5.5 and 0.025x on four others (C4), and OpenAI's is 0.05x on four models (O2), so "the makers' rates" is not one rate | narrower | "...the PDF part costs about 4 by our math (1.25 for the first question, 0.1 for each later one, the rate on most models; some cost less)." |

## Summary
- 31 rows: 28 hold, 3 narrower, 0 wrong.
- The spoken script holds as worded in every sentence (the hedges "by default", "on most models", "usually", "can", "about", "Ours" are already in).
- Narrower rows and fixes:
  - Row 21 (beats shot 22 source line): "OpenAI docs · GPT-5.6+ · 0.1x reads" -> "OpenAI docs · GPT-5.6+, most models · 0.1x reads".
  - Row 29 (description line 1): "saves its work on the PDF once, then reuses it" -> "saves its work on the PDF, then reuses it while the saved work lasts".
  - Row 31 (description line 2): "about 4 by our math on the makers' rates (Claude and OpenAI docs)" -> "about 4 by our math (1.25 for the first question, 0.1 for each later one, the rate on most models; some cost less)".
- Optional (holds, not required): row 22, add "PDF PART" to the "OUR MATH" label.
- Commands that failed: none (one earlier `find` on a phrase that does not exist returned nothing; not a failure).

## Fixes applied (by the script writer, before anything was voiced or drawn)
| row | verdict | fixed where | how |
|---|---|---|---|
| 21 | narrower | `beats.md` shot 22 and "On-screen words"; `film/film.js` chart source line carries the fix (step 4) | "OpenAI docs · GPT-5.6+ · 0.1x reads" -> "OpenAI docs · GPT-5.6+, most models · 0.1x reads" |
| 22 | holds (optional) | `beats.md` shot 23; `film/film.js` label carries the fix (step 4) | label "30 QUESTIONS · OUR MATH" -> "30 QUESTIONS · OUR MATH · PDF PART" |
| 29 | narrower | `package.md` description line 1; `upload.json` carries the fixed wording (copied verbatim, step 5) | "saves its work on the PDF once, then reuses it" -> "saves its work on the PDF, then reuses it while the saved work lasts" |
| 31 | narrower | `package.md` description line 2; `upload.json` carries the fixed wording (copied verbatim, step 5) | "about 4 by our math on the makers' rates (Claude and OpenAI docs)" -> "about 4 by our math (1.25 for the first question, 0.1 for each later one, the rate on most models; some cost less)" |
No spoken word changed, so the voice timing (57.79 s draft) and `hookscore.py`/`title.py` results stand. Step 5 (captions, chapters, `upload.json`) must stay inside every row: "full price", "PDF part", "most models", "by default", "usually", "our math".
