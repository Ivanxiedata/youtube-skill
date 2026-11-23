# Beats: prompt-caching (workflow step 3)

Written 2026-11-23 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Prompt Caching: Stop Paying Full Price for 1 PDF 30x"** + thumbnail **"LEARN PROMPT CACHING IN 60 SECONDS"**. The hook sells the viewer's moment (the same PDF is not paid for at full price on every question);
the tech (the AI saves its work on the unchanged start of the prompt and reuses it) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** estimated from word counts (draft; the final words are 155, see Shots, about 3.1 words a second as the last episode's am_michael at 1.2, voice laid in at 0.3 s):
the renderer re-times every cut to the real `vo_lines.json` / `align.json`. The film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, 30 questions about one 100-page PDF**, from the first beat to the last; a **meter "PDF READS PAID"**
that fills to 30 in BEFORE and stops at about 4 in NOW on the same 30 questions; **the how on one diagram that grows** (request rows) with a highlight on what the voice names;
the proof is **the maker's own number** (OpenAI: 10 requests cost 2.15x, not 10x), then our 30 (about 4.15, not 30) on the same chart.

## Hooks
Written against `.claude/skills/yt-script/hooks.json`, 11 in two rounds, scored with `hookscore.py`. Every one opens with the topic's name (lesson L14, repeated). Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 73 STRONG
"Prompt caching means you stop paying full price for the same 100-page PDF thirty times when you ask your AI thirty questions, but how?"
(Rewritten after the claim check, `claims.md` row 1: the first version said "stop paying for the same 100-page PDF thirty times ... questions about it" (73), narrower than the source because reads still cost about a tenth. "Full price" with "about it" scored 71, so "about it" was dropped.)
```
SPECIFICITY   68   100-page, PDF, thirty
ADDRESS      100   you / you / your
STAKES        62   paying
CURIOSITY     76   but how?
BREVITY       93   24 words (re-scored: 73 STRONG)
VERDICT       73   STRONG
formula      The Mistake (1 pattern matched)
```
3-second test: someone who knows no AI tech hears "prompt caching = you don't pay full price for the same long PDF again on every question". It names the topic in its first two words and paints the moment; no architecture word (no tokens, layers, weights).
True: without caching 30 questions = 30 full PDF reads; with caching about 4.15 for the PDF part (`research.md` row 9); "stop paying full price ... thirty times" never says "pay once".
Tension (lesson L25): it corrects the thing people assume, that every question costs the whole document again; not the "Before, you'd ..." frame.

### 2 (runner-up) 77 STRONG
"Prompt caching means you stop wasting money on the same 100-page PDF thirty times when you ask an AI thirty questions about it, but how?"
```
SPECIFICITY 68 · ADDRESS 96 · STAKES 88 · CURIOSITY 76 · BREVITY 86 · VERDICT 77 STRONG
formula      The Mistake (1 pattern matched)
```
Why 1 over 2 despite four points less: "wasting money on ... thirty times" is clumsy to say and to hear; "stop paying full price for the same PDF" is the title's promise. The score is a check at 72, not a target (L16).

### All hooks scored
| Score | Formula (tool) | Hook | Note |
|---|---|---|---|
| 77 | The Mistake | Prompt caching means you stop wasting money on the same 100-page PDF thirty times when you ask an AI thirty questions about it, but how? | runner-up |
| 74 | The Mistake | Prompt caching: stop wasting money paying for one 100-page PDF thirty times when you ask your AI thirty questions, but how? | "wasting money paying" doubled |
| 73 | The Mistake | **Prompt caching means you stop paying full price for the same 100-page PDF thirty times when you ask your AI thirty questions, but how?** | chosen (after the claim check) |
| 73 | The Mistake | Prompt caching means you stop paying for the same 100-page PDF thirty times when you ask your AI thirty questions about it, but how? | first choice; narrower (`claims.md` row 1) |
| 71 | The Mistake | ... "stop paying full price ... thirty questions about it" | below 72 |
| 72 | The Mistake | ... same, with "an AI" | |
| 71 | The Mistake | Prompt caching: ask your AI thirty questions about one 100-page PDF and stop paying to read it thirty times, but how? | |
| 71 | The Question | Prompt caching stops you wasting money: thirty questions about one 100-page PDF, and your AI reads it once, not thirty times. How? | answers itself |
| 71 | The Question | Prompt caching: you think thirty questions about one 100-page PDF cost thirty PDFs. With caching, they cost about four. How? | answers itself |
| 71 | The Mistake | ... "stop paying and waiting for ..." | long |
| 62 | The Question | Prompt caching is why you shouldn't pay for the same 100-page PDF thirty times, but how does your AI read it only once? | |
| 57 | The Question | Prompt caching stops you paying thirty times for one 100-page PDF when you ask your AI thirty questions, so how does it work? | |
| 42 | The Question | Prompt caching: people think every question about a long PDF costs the whole PDF again. It doesn't have to, but how? | no number |

## The parts, in one line each
- **Hook (0.0-9.5 s):** the sentence above; title card from frame 0; the PDF; the meter jumping to x30; you handing 30 questions to the AI; HOW?
- **Turn (9.5 s):** "Here's how." Then it does it, on the 30 questions.
- **Before, the pain as a scene (10.5-22.2 s):** the AI as a student re-reading the whole textbook for every question; Q1 and Q2 each push all 100 pages through; the meter fills to 30.
- **Now, the same scene (22.2-33.2 s):** the same desk and the same 30 questions with caching: Q1 reads the PDF and pays 1.25 (default) to save the work; Q2-Q30 reuse it at about a tenth on most models; the meter stops near 4; answers usually start sooner.
- **How (33.2-39.4 s):** one diagram of request rows that grows: the document block first, the same in every row, turned teal "SAVED WORK" then "REUSED"; only the question block is read fresh.
- **Proof + payoff (39.4-49.1 s):** OpenAI's own 10 vs 2.15; our 30 vs about 4 on the same chart; "That's how you stop paying full price thirty times" (said out loud).
- **Catch (49.1-54.1 s):** on Claude, unused saved work can fade after five minutes, by default.
- **Close:** takeaway tied to the story ("Same book: read once, reuse the work."), then one ask ("Subscribe for the next one.").

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) wearing round amber **reading glasses** (`#FFC66E`), holding the PDF and handing over the question cards.
- **The AI = a robot with a teal (`#2DB2AE`) screen head**, label "AI" under it (plain text, no logo; visibly AI, brand casting). In shot 8 it wears a small student cap (the story: a student with a textbook).
- **Props:** the PDF as a thick document stack with a "PDF · 100 PAGES" label; question cards "Q1", "Q2", ... "Q30" (small amber cards); answer bubbles (plain lines, no text).
- **The meter "PDF READS PAID"**, right side of the frame in every BEFORE and NOW shot (7-18, 24): a vertical bar with ticks 0, 10, 20, 30 and a big counter on top; amber fill in BEFORE, teal in NOW. One unit = one full-price read of the 100-page PDF.
- **Places:** D the desk (mascot left, AI right, PDF on the desk, meter on the right); X the request-row diagram (shots 19-21); C the chart (22-23); P the payoff split (24); K cards (25-26); the takeaway and Subscribe frames.
- Every frame: corner tag "Prompt Caching · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red for the sticker and Subscribe.

## Shots
29 shots in 60 s, 2.0 s on average (lesson L1). Cuts on word boundaries. Times are **draft film seconds** from a draft voice of the final words
(am_michael, speed 1.2, `--no-align`, laid in at 0.3 s: 57.79 s of voice, ends at 58.09 s film); inside a line the cut is estimated, and the renderer re-times every cut to the real `align.json`.
Shortened after the first real voice ran 67.3 s (`mistakes.md`): 155 words, sections on one line each.

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-1.6 | "Prompt caching means" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "PROMPT CACHING", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.6-3.4 | "you stop paying full price for" | The mascot at the desk, a coin leaves his hand toward the AI | hook: the pain, money |
| 2 | 3.4-5.1 | "the same 100-page PDF" | Close: the thick PDF stack, label "PDF · 100 PAGES"; pages riffle | hook: the document |
| 3 | 5.1-5.9 | "thirty times" | The meter "PDF READS PAID" jumps to "x30", amber; the stack copies itself into a tall pile | hook: the number |
| 4 | 5.9-8.4 | "when you ask your AI thirty questions," | Wide desk: the mascot hands question cards Q1, Q2, Q3 ... to the AI; a counter "Q1 ... Q30" runs; the PDF on the desk | hook: the counted example |
| 5 | 8.4-9.5 | "but how?" | The mascot faces the viewer; amber card "HOW?" eases in | hook: open question |
| 6 | 9.5-10.5 | "Here's how." | Wide desk with the meter at 0; lower card "1 PDF · 30 QUESTIONS" | turn (by 10 s) |
| 7 | 10.5-11.5 | "Without caching," | Amber tab "BEFORE"; the same desk, meter at 0 | before: your scene |
| 8 | 11.5-14.4 | "it's a student re-reading the whole book per question." | The AI in a small student cap flips through the whole thick book, pages flying; label "EVERY QUESTION: ALL 100 PAGES" | before: the story |
| 9 | 14.4-17.6 | "Question one: all 100 pages, full price." | Card "Q1" goes in; the whole PDF stack slides into the AI's screen; the meter fills to 1; tag "FULL PRICE" | before: one |
| 10 | 17.6-19.3 | "Question two: all again." | Card "Q2"; the whole stack slides in again; the meter to 2 | before: again |
| 11 | 19.3-20.6 | "By question thirty:" | Cards Q3 ... Q30 fly in fast, the stack slides in each time; the meter races up | before: it adds up |
| 12 | 20.6-22.2 | "paid thirty times." | The meter full at "30", amber; label "30 PDFs PAID"; a tall pile of 30 stacks behind the AI | before: the pain, counted |
| 13 | 22.2-23.5 | "With prompt caching," | Teal tab "NOW"; the same desk, meter back at 0 (teal) | now: same scene |
| 14 | 23.5-25.6 | "question one pays a quarter more, by default," | Card "Q1"; the whole stack slides into the AI's screen once; the meter fills to 1 then ticks to "1.25"; tag "+25% · FIRST QUESTION · DEFAULT" | now: the first read and its price |
| 15 | 25.6-27.2 | "to save its work." | A teal box "SAVED WORK" appears on the AI's screen beside the PDF, glowing | now: the saved work |
| 16 | 27.2-29.0 | "Questions two to thirty reuse that work" | Cards Q2 ... Q30 stream in; each touches the "SAVED WORK" box, which pulses; no stack slides in; the meter barely moves | now: reuse |
| 17 | 29.0-31.2 | "for about a tenth on most models," | Each card adds a thin sliver to the meter; tag "ABOUT 1/10 EACH · MOST MODELS"; the meter stops near "4.15" | now: the meter barely moves |
| 18 | 31.2-33.2 | "and usually answer sooner." | An answer bubble pops back right after a card goes in; small label "USUALLY STARTS SOONER" | now: the wait |
| 19 | 33.2-35.9 | "How? The document goes first," | Diagram starts, title "HOW IT WORKS": request row 1 = a long block "PDF · 100 PAGES" then a short block "Q1"; the PDF block highlighted, an arrow "FIRST" | how: the diagram, piece 1 |
| 20 | 35.9-37.3 | "the same every time;" | Rows 2 and 3 grow under it: the same PDF block, then "Q2", "Q3"; "=" marks between the PDF blocks; label "EXACTLY THE SAME"; row 1's PDF block turns teal "SAVED WORK", rows 2-3's turn teal "REUSED" | how: piece 2, the same start reused |
| 21 | 37.3-39.4 | "only the new question is read fresh." | Highlight moves to the Q blocks, amber, tag "NEW: READ FRESH" | how: piece 3, highlight moves |
| 22 | 39.4-44.0 | "OpenAI's math: ten requests cost just over two full reads, not ten." | Chart "10 REQUESTS": amber bar "WITHOUT CACHING 10x", teal bar "WITH CACHING 2.15x"; small source line "OpenAI docs · GPT-5.6+ · 0.1x reads" | proof: the maker's number |
| 23 | 44.0-46.0 | "Ours for thirty: about four." | The same chart grows a second pair "30 QUESTIONS · OUR MATH": amber "30", teal "ABOUT 4"; small line "1.25 + 29 x 0.1" | proof: our example |
| 24 | 46.0-49.1 | "That's how you stop paying full price thirty times." | Side by side: left "BEFORE" the meter at 30 (amber), right "NOW" the meter at about 4 (teal), the same desk; label "SAME 30 QUESTIONS" | payoff (said out loud) |
| 25 | 49.1-51.0 | "The catch: on Claude," | Card "THE CATCH" and tag "CLAUDE · DEFAULT" | catch |
| 26 | 51.0-54.1 | "unused saved work can fade after five minutes, by default." | The "SAVED WORK" box with a clock "5:00" running down and the box fading; small lines "AT LEAST 5 MIN" and "EACH USE RESTARTS THE CLOCK" | catch: the limit |
| 27 | 54.1-56.6 | "Same book: read once, reuse the work." | The desk, warm light, the PDF with its teal "SAVED WORK" box and the meter near 4; takeaway card: line 1 off-white "Same book:", line 2 amber "read once, reuse the work." | close: takeaway |
| 28 | 56.6-60.0 | "Subscribe for the next one." | The mascot waves; red Subscribe button eases in and pulses; under it "NEXT IN 60 SECONDS"; short fade with the corner tag drawn over it | close: one ask |

## On-screen words and their sources
"PROMPT CACHING": both makers' page titles. "PDF · 100 PAGES", "Q1 ... Q30", "1 PDF · 30 QUESTIONS": the episode's counted example (an invented example inside the makers' use case "embedding the entire document(s) into the prompt, and letting users ask it questions", `research.md` row 2).
"PDF READS PAID", "x30", "30 PDFs PAID", "FULL PRICE", "EVERY QUESTION: ALL 100 PAGES": `research.md`, Before (every request processes and bills the whole prefix again; OpenAI "10x without caching").
"1.25", "+25% · FIRST QUESTION · DEFAULT": row 7 (default lifetime; `claims.md` row 3). "ABOUT 1/10 EACH · MOST MODELS", "4.15", "ABOUT 4": rows 6 and 9. "SAVED WORK", "REUSED": row 3. "USUALLY STARTS SOONER": row 11. "FIRST", "EXACTLY THE SAME": row 5. "NEW: READ FRESH": rows 3 and 16.
"10 REQUESTS", "10x", "2.15x", "OpenAI docs · GPT-5.6+ · 0.1x reads": row 8. "30 QUESTIONS · OUR MATH", "1.25 + 29 x 0.1": row 9. "CLAUDE · DEFAULT", "5:00", "AT LEAST 5 MIN", "EACH USE RESTARTS THE CLOCK": row 12 and Claude "Cached prefixes automatically expire after a minimum of 5 minutes of inactivity."
The desk, the student cap, the coin, the book and the pile of stacks are invented pictures inside the example (said in the description).
