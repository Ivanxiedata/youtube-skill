# Beats: gpt-6-think-while-answering (workflow step 3)

Written 2026-11-26 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"GPT-6 in ChatGPT Answers While It Still Thinks"** + thumbnail **"LEARN GPT-6 IN 60 SECONDS"**. The hook sells the viewer's moment (no long blank wait: the answer starts while it still thinks);
the tech (interleaved partial answers, Intelligent UI parts, 44% sooner, Extra High vs Medium) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. The renderer times every cut from the real `vo_lines.json` and the measured pauses; the film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, our web-search question** and its **wait until it starts answering** (10 seconds, ours), from the first beat to the last;
a **meter "SECONDS UNTIL IT STARTS ANSWERING · OUR EXAMPLE"** (0 to 10) that fills to 10 in BEFORE and stops at 6 in NOW on the same question (the same unit both sides and OpenAI's own unit, lessons L34, L84);
**the how on one scene that grows** (the chef thinking -> plate 1 goes out while the bubble still turns -> plate 2 -> a chart -> a calculator) with a highlight on what the voice names;
the proof is **OpenAI's own numbers**: 44% sooner on average for web-search questions on GPT-6 Instant (row 6), then GPT-6 on Extra High starting as soon as GPT-5.6 on Medium (row 7).

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33: a digit, "you", cost/before for stakes; but, actually, before for curiosity); every draft had all four groups before scoring.
Every one opens with the topic's name (lesson L14), in one sentence with the hook (lesson L16). Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 73 STRONG (formula: myth correction, "you think X, but actually Y")
"GPT-6 in ChatGPT: you think smarter answers cost you a longer blank wait, but actually it can start answering before it's done thinking." (gate round 1 added "blank", fix 1; re-scored 73 STRONG with `--hook`)
```
SPECIFICITY 57 · ADDRESS 96 · STAKES 88 (cost, before) · CURIOSITY 75 (but, actually, before) · BREVITY 100 · VERDICT 73 STRONG
```
3-second test: someone who knows no AI tech hears "in GPT-6, ChatGPT doesn't make you wait for a smart answer: it can start answering while it thinks". The topic is the first words; no architecture word.
Corrects a belief (the misconception of `lesson.md`), ends on the outcome, not "but how?" (L31). "Can start answering before it's done thinking": "begin answering while it continues to think" (row 1; the claim check made "starts" into "can start", claims.md row 1).
Panels: title card, then you at a diner table with an empty plate and a watch, a thought bubble "SMARTER = LONGER WAIT?"; then the robot chef, thinking bubble still turning, already sliding plate 1 to you.

### 2 (runner-up) 73 STRONG
"GPT-6 in ChatGPT: you think smart answers cost you a long, blank wait, but it actually can start answering before it's done thinking."
Why 1 over 2: "smarter answers ... a longer wait" names the trade the video breaks (more thinking, more waiting), and is one word shorter (lesson L46).

### All hooks scored
(Every draft was scored with "starts answering"; the claim check ruled "starts" narrower, so each is shown here with "can start", the words that hold.)

| Score | Hook | Note |
|---|---|---|
| 73 | **GPT-6 in ChatGPT: you think smarter answers cost you a longer blank wait, but actually it can start answering before it's done thinking.** | chosen (gate round 1: "blank"; "cost a longer blank wait" without "you" scored 70) |
| 73 | ... you think smart answers cost you a long, blank wait, but it actually can start answering before it's done thinking. | runner-up |
| 73 | ... you think deeper thinking must cost you a longer wait, but actually it can start answering before it stops. | "before it stops" is vague |
| 72 | ... you think a smarter answer costs you a blank wait until it's done, but actually it can start answering before. | ends on a dangling "before" |
| 71 | ... you think deep thinking must cost you 10 seconds of nothing, but it actually can start answering mid-thought. | an invented number in the hook |
| 68 | ... you think smarter answers cost you a longer wait, but it actually can start answering while it still thinks. | first draft |
| 63 | ... why should a smarter answer cost you a longer wait? Actually, it now can start answering before it's done thinking. | two sentences |
| 61 | ... you never have to stare at a blank wait until it stops thinking; it can start answering while it thinks. | "never" is absolute |
| 57 | ... a smarter answer used to cost you a long wait, but now it can start answering before it stops thinking. | no misconception |
| 57 | ... you used to wait until the thinking was done, but now your answer starts while it still thinks. | no stakes word |

## The parts, in one line each
- **Hook:** title card; you think "SMARTER = LONGER WAIT?"; the chef slides plate 1 out while still thinking.
- **Turn:** "Here's how, on one web-search question." Then it does it, on that question.
- **Before, the pain as a scene:** it finished thinking first (GPT-5.6 Instant, the 44%'s base): the meter fills to 10 over an empty table and a "THINKING..." chat; then one big block lands at once.
- **Now, the same scene:** the first part at 6 while the thinking bubble still turns; more parts follow, one answer that OpenAI says is just as factual; a part can be a chart or a calculator.
- **Why it helps, proof:** OpenAI: GPT-6 Instant starts answering web-search questions 44% sooner on average than GPT-5.6 Instant (our 10 on 5.6 Instant -> about 6); and in OpenAI's internal test on everyday agent tasks GPT-6 on Extra High starts as soon as GPT-5.6 on Medium.
- **Close:** "So, what we learned:" BEFORE 10 + one block vs NOW about 6 + parts, side by side; takeaway card; the ask (subscribe + comment).

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) with a white **napkin bib** (the diner story's costume), at a small table with a plate, on the left.
- **ChatGPT = a robot chef with a teal screen head** (visibly AI, brand casting), behind a **pass** (a counter with a shelf) on the right, tall chef's hat, label "GPT-6 · IN CHATGPT" in NOW, "GPT-5.6 INSTANT" in BEFORE (dimmer hat band). A **thinking bubble** (three dots that pulse, then a small turning cog) over its head whenever it is thinking. No logos.
- **The answer = plates** that slide from the pass to your table: in BEFORE one big covered **platter** labelled "ONE BLOCK OF TEXT"; in NOW plates labelled "FIRST PART: WHAT IT HAS SO FAR", "NEXT PART", a plate with a small **bar chart** standing on it ("CHART"), a plate with a small **calculator** ("CALCULATOR").
- **The chat strip** (top of the frame, inside the safe area): a phone-style answer area that mirrors the kitchen: BEFORE a "THINKING..." bar over an empty area, then one block of grey text lines; NOW text lines appear under "FIRST PART" while "THINKING..." still pulses at the bottom.
- **The meter "SECONDS UNTIL IT STARTS ANSWERING"** with "OUR EXAMPLE" under its label, lower part of the frame (under the picture, above y 1536) in every BEFORE and NOW shot: a horizontal bar with ticks 0 to 10 and a big whole-number counter; amber in BEFORE, teal in NOW. Labels at least 44 px (lesson L48).
- **Two lanes** (proof shots): horizontal thinking bars on a time line with a flag where the first part lands.
- Every frame: corner tag "GPT-6 · 60s" top-left inside the safe area (x >= 60, y >= 100, 44 px or more; lesson L79). BEFORE tabs amber, NOW tabs teal, red only for the sticker and Subscribe.

## Shots
Times come from `vo_lines.json` at build. Shot 0 cuts on the measured pause after "ChatGPT:" inside line 1 (lessons L16, L36); every voice line over about 4 s gets two or three shots (lesson L1).

| # | Line | Spoken line (part) | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 1a | "GPT six in ChatGPT:" | Full-screen title card: "LEARN" small, "GPT-6" huge in amber, "IN CHATGPT" under it, red tilted sticker "IN 60 SECONDS"; corner tag. Holds until the measured pause after "ChatGPT" | hook |
| 1 | 1b | "you think smarter answers cost you a longer blank wait," | The mascot (napkin bib) at a diner table with an empty plate, looking at a watch; thought bubble "SMARTER = LONGER WAIT?"; behind the pass the robot chef with a thinking bubble; slow linear push to 1.1 | hook |
| 2 | 1c | "but actually it can start answering before it's done thinking." | Cut: the chef, thinking bubble still turning, slides the first plate across the pass to the mascot; teal label "CAN ANSWER WHILE IT THINKS" | hook |
| 3 | 2 | "Here's how, on one web-search question." | The mascot holds up an order ticket "OUR EXAMPLE: ONE WEB-SEARCH QUESTION" with a small magnifier icon; the meter "SECONDS UNTIL IT STARTS ANSWERING" / "OUR EXAMPLE" appears under the picture at 0, "OUR EXAMPLE · NOT OPENAI'S SECONDS" | turn |
| 4 | 3a | "Before, it finished thinking first:" | Cut: amber tab "BEFORE"; the chef "GPT-5.6 INSTANT" thinking (bubble, cog turning); the mascot's table empty; the chat strip: "THINKING..." bar over an empty answer area; the meter starts filling (amber) | beat |
| 5 | 3b | "our ten-second wait... then one block of text." | Cut: the meter reaches 10 (counter "10"); only then the big covered platter "ONE BLOCK OF TEXT" slides to the table; the chat strip fills with one block of grey lines at once | beat |
| 6 | 4a | "Now, it answers with what it has so far," | Cut: teal tab "NOW · GPT-6"; the chef "GPT-6 · IN CHATGPT", bubble still turning, slides plate "FIRST PART: WHAT IT HAS SO FAR" out; chat strip: lines appear under "FIRST PART" while "THINKING..." still pulses below; the meter (teal) stops at 6 when the first plate lands | beat |
| 7 | 4b | "keeps thinking, adds parts, sometimes a chart or a calculator:" | Cut (closer on the pass): the bubble keeps turning; plate "NEXT PART" slides out after the first, then a plate with a small bar chart standing on it ("CHART"), then a plate with a small calculator whose keys light up one by one ("CALCULATOR"); small line "WHEN IT FITS YOUR QUESTION"; chat strip: the next part's lines appear under the first; meter stays at 6 | beat |
| 8 | 4c | "one answer, OpenAI says, just as factual." | Cut: the chat strip, larger: the first part, the next part, the chart and the calculator joined in one answer bubble under one bracket; label "ONE ANSWER, AS FACTUAL AS ONE WRITTEN AT ONCE (OPENAI)" (two lines); "THINKING..." still pulsing at the bottom; slow linear push to 1.1 | beat |
| 9 | 5a | "OpenAI says GPT six, on its Instant setting, starts web-search answers" | Cut: card "GPT-6 INSTANT" vs "GPT-5.6 INSTANT"; small line "WEB-SEARCH QUESTIONS"; source line "OPENAI" | beat (proof) |
| 10 | 5b | "forty-four percent sooner, on average," | Two start bars: "GPT-5.6 INSTANT" long, "GPT-6 INSTANT" 56% of it; between them "44% SOONER · ON AVERAGE"; the condition "WEB-SEARCH QUESTIONS (OPENAI)" in the same shot | beat (proof) |
| 11 | 5c | "than five point six Instant." | Cut: two meters, "BEFORE · GPT-5.6 INSTANT" amber at 10 and "NOW · GPT-6 INSTANT" teal at 6, one label "SECONDS UNTIL IT STARTS ANSWERING · OUR EXAMPLE" at full size; small line "WEB-SEARCH QUESTION" | beat (proof, the counted example) |
| 12 | 6a | "So thinking harder needn't delay the start:" | Cut: a lane "BEFORE: MORE THINKING = LATER START": a short amber thinking bar with its answer flag at its end, and below it a long one with its flag only at its far end | beat (why) |
| 13 | 6b | "in OpenAI's internal agent-task test," | Cut: two empty lanes "GPT-5.6 · MEDIUM THINKING" and "GPT-6 · EXTRA HIGH THINKING" on one time line; small line "OPENAI'S INTERNAL TEST: EVERYDAY AGENT TASKS"; the first bars start to grow | beat (why) |
| 14 | 6c | "GPT six on Extra High thinking started as soon as five point six on Medium." | Cut: "GPT-5.6 · MEDIUM THINKING" short thinking bar, flag at its end; "GPT-6 · EXTRA HIGH THINKING" a much longer teal thinking bar whose first-part flag lands at the same mark, "SAME START", its bar still going; "OPENAI'S INTERNAL TEST: EVERYDAY AGENT TASKS" in the same shot; slow linear push to 1.1 | beat (why) |
| 15 | 7a | "So, what we learned:" | Cut: the mascot and the chef at the diner; "WHAT WE LEARNED" card eases in | payoff |
| 16 | 7b | "our ten-second web-search wait till it starts, on five point six Instant," | Mini panel "BEFORE · GPT-5.6 INSTANT": the meter at 10 and the one-block platter (same state as shot 5, lesson L38); one shared label "SECONDS UNTIL IT STARTS ANSWERING · OUR EXAMPLE" at full size | payoff |
| 17 | 7c | "becomes about six on GPT six Instant, parts still coming." | Beside it, mini panel "NOW · GPT-6 INSTANT": meter at 6, plates out, the bubble still turning (same state as shot 7); then the takeaway card: "OUR EXAMPLE (OPENAI GIVES ONLY A PERCENTAGE), WEB SEARCH, GPT-5.6 INSTANT: 10 S TILL IT STARTS" / amber "NOW, GPT-6 INSTANT: ABOUT 6 S, PARTS KEEP COMING" (stays into "Want more?") | payoff |
| 18 | 8 | "Want more? Subscribe, and comment what we should explain next." | Red Subscribe button and a comment button; the mascot (napkin bib) waves; nothing under them (lesson L24) | close |

Built as 19 shots (0-18): line 6 and line 7 each got three shots so no shot passes 5 s (lesson L1); longest about 4.96 s, average about 2.9 s. Shot times: `film/film.js` TS table (from the measured pauses of `film/vo.wav`).
