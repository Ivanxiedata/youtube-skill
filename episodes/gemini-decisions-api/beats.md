# Beats: gemini-decisions-api (workflow step 3)

Written 2026-11-24 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Gemini Decisions API: 20 Questions, 1 Call, How Sure It Is"** + thumbnail **"LEARN GEMINI DECISIONS IN 60 SECONDS"**. The hook sells the viewer's moment (20 checks on one claim in one call, each answer saying how sure it is);
the tech (the model scores the options you gave it instead of writing text) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** from a draft voice of the final words
(am_michael, speed 1.2, `--no-align`, 159 words as spoken after the claim-check fixes, 56.81 s of voice, laid in at 0.5 s, so it ends at about 57.3 s); the renderer re-times every cut to the real `vo_lines.json`. The film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, 1 insurance claim (a scanned PDF and damage photos) and 20 questions about it**, from the first beat to the last;
a **meter "TIMES YOU SEND THE CLAIM"** (0 to 20) that fills to 20 in BEFORE and stops at 1 in NOW on the same 20 questions (the same unit both sides, lesson L34); **the how on one diagram that grows**
(1 claim + 20 questions -> the model scores the options -> a confidence 0 to 1 on each answer -> unsure ones to a person) with a highlight on what the voice names; the proof is **Google's own number** ("nearly 5x cheaper" on its shared benchmark suite than Gemini 3.5 Flash-Lite with the Interactions API).

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33: digits; cost for stakes; but, actually, how for curiosity), 11 in two rounds. Every one opens with the topic's name (lesson L14). Picked by the 3-second test (lesson L16), then the score.
The tool's formula field says "Unclassified": the top two correct a belief ("you think X, but ..."), the owner's preferred tension (lesson L31), not a template.

### 1 (chosen) 73 STRONG
"Gemini Decisions API: you think 20 questions about 1 insurance claim actually cost you 20 prompts, but 1 call picks all 20 answers, each with how sure it is."
```
SPECIFICITY  100 · ADDRESS 96 · STAKES 62 (cost) · CURIOSITY 75 (but, actually, how) · BREVITY 72 · VERDICT 73 STRONG
```
3-second test: someone who knows no AI tech hears "Gemini Decisions API = ask all 20 of your questions about one claim in one go, and every answer says how sure it is". The topic is the first three words; no architecture word.
After the claim check (`claims.md` row 3) "answers all 20" became "picks all 20 answers" (it picks from the options you give it); re-scored 73 (lesson L26). True: up to 1,000 questions per request (`research.md` row 2), a confidence from 0 to 1 on every answer (row 5); 20 and the claim are our counted example inside Google's own "scanned PDF claim with damage photos" (row 9). Ends on the outcome, not "but how?" (L31).

### 2 (runner-up) 74 STRONG
"Gemini Decisions API: you think 20 questions about 1 claim form cost you 20 prompts, but 1 call actually answers all 20, with how sure it is."
Why 1 over 2 despite one point less: "claim form" reads as paperwork in general, "insurance claim" is the picture (the scanned claim with damage photos); the score is a check at 72, not a target (L16).

### All hooks scored
| Score | Hook | Note |
|---|---|---|
| 74 | ... 1 claim form cost you 20 prompts, but 1 call actually answers all 20, with how sure it is. | runner-up |
| 74 | ... 1 claim actually cost you 20 prompts, but 1 call answers all 20, each with how sure it is. | "1 claim" alone could mean a statement |
| 73 | **... 1 insurance claim actually cost you 20 prompts, but 1 call answers all 20, each with how sure it is.** | chosen |
| 73 | ... 1 claim form actually cost you 20 prompts ... | |
| 73 | ... 20 checks on 1 claim form ... | |
| 71 | ... 1 claim cost you 20 prompts, but now 1 call answers all 20, with how sure it is. | below 72 |
| 61 | ... you never had to send 1 claim 20 times; now 1 call answers all 20 questions ... | |
| 61 | ... checking 1 claim 20 ways costs you 20 prompts, but actually ... | |
| 60 | ... used to cost you 20 prompts and 20 essays, but now it's 1 call ... | |
| 60 | ... your app asks 20 questions about 1 claim in 1 call ... until now impossible. | "impossible" is untrue |
| 57 | ... stop sending 1 claim 20 times; your app asks all 20 questions in 1 call ... | answers itself |

## The parts, in one line each
- **Hook (0.0-11.0 s):** the sentence above; title card from frame 0; the claim folder and 20 question cards; the meter climbing to 20; one "1 CALL" arrow; an answer sheet filling with 20 answers and their confidence bars.
- **Turn (11.5 s):** "Here's how." Then it does it, on the same claim and the same 20 questions.
- **Before, the pain as a scene (12.5-19.9 s):** a chat window with a robot; one question at a time; the claim sent again with each, the meter to 20; 20 essay answers the mascot reads with a red pencil; no number for how sure.
- **Now, the same scene (20.4-27.8 s):** the Gemini Decisions API; the claim sent once with all 20 questions; the three question kinds; one answer sheet; the meter stops at 1.
- **How (28.3-35.7 s):** one diagram that grows: claim + questions -> "SCORES YOUR OPTIONS" (no text written) -> "HOW SURE: 0 TO 1" on each answer -> low ones to a reviewer.
- **Why it helps, proof (36.2-44.9 s):** up to 1,000 questions per call, the claim billed once; Google's own number, nearly 5x cheaper, with its conditions.
- **Close (45.4-56.4 s):** "So, what we learned:" with BEFORE 20 vs NOW 1 side by side; the NOW answer sheet filled; takeaway card; the ask (subscribe + comment).

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) in a **teacher's mortarboard** (amber `#FFC66E`) with a red pencil, the story's costume: the teacher who grades a pile of essay answers vs one bubble answer sheet.
- **The AI = a robot with a teal (`#2DB2AE`) screen head**, label "CHAT MODEL" in BEFORE and "GEMINI DECISION 1" in NOW (plain text, no logo; visibly AI, brand casting).
- **Props:** the **claim folder** "CLAIM · PDF + PHOTOS" (a page with a small photo square); 20 small **question cards** "Q1 ... Q20"; a **chat window** with question and essay bubbles; an **essay page** (grey scribble lines, "ESSAY"); the **answer sheet** "1 CLAIM · 20 QUESTIONS" with 20 rows of bubbles and a small confidence bar per row (bars only, no decimals, lesson L31).
- **The meter "TIMES YOU SEND THE CLAIM"**, right side of the frame in every BEFORE and NOW shot: a vertical bar with ticks 0, 5, 10, 15, 20 and a big whole-number counter on top; amber fill in BEFORE, teal at 1 in NOW.
- **The reviewer:** one small stick figure of a different tone from the mascot (no tone maps to rank) at the end of the how diagram.
- **Places:** D the desk (mascot left, claim and chat window or answer sheet centre, meter right); X the how diagram (13-15); P the proof cards (16-18); K the close.
- Every frame: corner tag "Gemini Decisions API · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red only for the sticker and Subscribe.

## Shots
22 shots in about 57.5 s, 2.6 s on average (lesson L1). Cuts on word boundaries; inside a line the cut is estimated, and the renderer re-times every cut to the real line times; shot 0 ends on the measured pause after "Gemini Decisions API" (lesson L36).
Every card and panel eases in on scale and alpha over at least 0.5 s; every colour change cross-fades over at least 0.5 s (0.7 s between views of very different brightness); every shot over 2 s with little motion gets a slow push to about 1.1 (lesson L23). View state is set per shot, never as a range (lesson L38).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-2.4 | "Gemini Decisions API:" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "GEMINI DECISIONS", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 2.4-5.0 | "you think 20 questions about 1 insurance claim" | The desk: the mascot (mortarboard) beside the claim folder "CLAIM · PDF + PHOTOS"; 20 question cards "Q1 ... Q20" fan out beside it; counter "20 QUESTIONS" | hook: the counted example |
| 2 | 5.0-7.2 | "actually cost you 20 prompts," | 20 small prompt bubbles stack up one by one; the meter "TIMES YOU SEND THE CLAIM" eases in and climbs to 20, amber | hook: the real cost |
| 3 | 7.2-9.3 | "but 1 call picks all 20 answers," | One teal arrow "1 CALL" from the claim to an answer sheet; its 20 rows fill with marks, top to bottom (slowly) | hook: the outcome |
| 4 | 9.3-11.3 | "each with how sure it is." | Beside each row a small teal confidence bar grows, most long, two short; label "HOW SURE IT IS" | hook: the promise |
| 5 | 11.8-12.5 | "Here's how." | Wide desk, meter at 0; lower card "1 CLAIM · 20 QUESTIONS" | turn (by about 10 s) |
| 6 | 12.8-15.1 | "Before, you asked a chat model one at a time:" | Amber tab "BEFORE"; a chat window with the robot "CHAT MODEL"; one bubble "Q1" goes in | before: one at a time |
| 7 | 15.1-17.0 | "the claim sent 20 times," | A copy of the claim folder rides along with each question into the chat, Q1, Q2, Q3 ...; the meter counts up to 20; small tag "OUR EXAMPLE" | before: the cost, one by one |
| 8 | 17.0-18.6 | "20 essay answers," | A pile of essay pages "ESSAY" (grey scribble lines) lands on the desk; the mascot reads with the red pencil; tag "20 ANSWERS TO READ" | before: the story (an essay exam) |
| 9 | 18.6-19.95 | "no number for how sure." | One essay bubble "Looks signed, probably." with an empty grey tag "OUR EXAMPLE: NO NUMBER FOR HOW SURE" (claims.md row 30: narrower without "OUR EXAMPLE"); the meter at 20 | before: no confidence |
| 10 | 20.4-23.3 | "Now your app sends the claim once" | Teal tab "NOW"; card "GEMINI DECISIONS API · GEMINI-DECISION-1 · NOV 11, 2026"; the claim folder goes once into the robot "GEMINI DECISION 1"; the meter stops at "1", teal | now: what it is |
| 11 | 23.3-26.3 | "with all 20 questions: yes or no, multiple choice, a score." | All 20 question cards go in together; three chips light in turn as the voice names them: "YES / NO", "MULTIPLE CHOICE", "SCORE (RUBRIC)" | now: the three kinds |
| 12 | 26.6-27.8 | "Like one answer sheet." | The answer sheet "1 CLAIM · 20 QUESTIONS" with 20 rows of filled teal bubbles; the mascot holds it | now: the story |
| 13 | 28.3-30.9 | "It doesn't write; it scores the options you gave it." | Diagram starts, title "HOW IT WORKS": piece 1, "1 CLAIM + 20 QUESTIONS" -> block "SCORES YOUR OPTIONS", highlighted; a small essay page with a strike "NO TEXT WRITTEN" | how: piece 1 |
| 14 | 31.2-33.5 | "Each answer gets a confidence, 0 to 1;" | Piece 2: answers with bars on a scale "HOW SURE: 0 TO 1", highlight moves to it | how: piece 2 |
| 15 | 33.5-36.0 | "unsure ones can go to a person." | Piece 3: the two short-bar answers slide along an arrow to a reviewer figure "YOU CAN SEND THEM TO A PERSON" (claims.md row 36: Google says your code can route them), highlight moves | how: piece 3 |
| 16 | 36.5-39.8 | "Up to 1,000 questions per call, the claim sent once." | Card "UP TO 1,000 QUESTIONS PER CALL"; line "THE CLAIM: BILLED ONCE PER CALL · EACH QUESTION ADDS ITS OWN INSTRUCTION AND CRITERIA TOKENS" | why: the scale and the bill |
| 17 | 40.1-42.5 | "Google's own benchmarks:" | Card "GOOGLE'S OWN NUMBER"; small source line "Google blog · Nov 11, 2026" | proof: the maker |
| 18 | 42.5-45.5 | "nearly 5 times cheaper than Gemini 3.5 Flash-Lite." | Two bars grow: amber "GEMINI 3.5 FLASH-LITE + INTERACTIONS API" long, teal "GEMINI DECISION 1 + DECISIONS API" short (claims.md row 39); label "NEARLY 5X CHEAPER"; condition line "ON GOOGLE'S SHARED BENCHMARK SUITE" | proof: the number with its conditions |
| 19 | 46.0-49.4 | "So, what we learned: in our example, 20 questions took 20 prompts;" | Top card "WHAT WE LEARNED" with small tag "OUR EXAMPLE"; side by side: left "BEFORE" the meter at 20 (amber), right "NOW" the meter at 1 (teal), each meter labelled "TIMES YOU SEND THE CLAIM" (claims.md row 40); label "SAME 20 QUESTIONS" | close: the conclusion |
| 20 | 49.4-53.0 | "now 1 call, each answer with how sure it is." | The NOW answer sheet with all 20 rows filled and their bars; takeaway card: line 1 off-white "20 QUESTIONS, 1 CALL,", line 2 amber "EACH ANSWER SAYS HOW SURE" | close: the takeaway, the promise delivered out loud |
| 21 | 53.5-57.5 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; red Subscribe button eases in and pulses; beside it a speech-bubble button "COMMENT: WHAT NEXT?"; nothing under them (L24); short fade with the corner tag drawn over it | close: the ask (L32) |

## On-screen words and their sources
"GEMINI DECISIONS", "GEMINI DECISIONS API · GEMINI-DECISION-1 · NOV 11, 2026", "GEMINI DECISION 1": row 1. "CLAIM · PDF + PHOTOS": row 9 (Google's example). "20 QUESTIONS", "Q1 ... Q20", "1 CLAIM · 20 QUESTIONS", "TIMES YOU SEND THE CLAIM", "OUR EXAMPLE", "20 ANSWERS TO READ", "SAME 20 QUESTIONS", "20 QUESTIONS, 1 CALL": the episode's counted example (ours, `research.md`).
"CHAT MODEL", "ESSAY", "Looks signed, probably.", "OUR EXAMPLE: NO NUMBER FOR HOW SURE": the before scene (ours, `research.md` Before). "1 CALL": rows 2, 4. "HOW SURE IT IS", "HOW SURE: 0 TO 1", "EACH ANSWER SAYS HOW SURE": row 5.
"YES / NO", "MULTIPLE CHOICE", "SCORE (RUBRIC)": rows 4, 6-8. "SCORES YOUR OPTIONS", "NO TEXT WRITTEN": row 3. "YOU CAN SEND THEM TO A PERSON": row 5. "UP TO 1,000 QUESTIONS PER CALL": row 2. "THE CLAIM: BILLED ONCE PER CALL · EACH QUESTION ADDS ITS OWN INSTRUCTION AND CRITERIA TOKENS": row 10.
"GOOGLE'S OWN NUMBER", "Google blog · Nov 11, 2026", "NEARLY 5X CHEAPER", "GEMINI 3.5 FLASH-LITE + INTERACTIONS API", "GEMINI DECISION 1 + DECISIONS API", "ON GOOGLE'S SHARED BENCHMARK SUITE": row 12.
The essay pile, the answer sheet, the mortarboard and the robot are invented pictures inside the example (said in the description).
