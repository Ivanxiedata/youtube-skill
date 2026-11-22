# Beats: inkling-2-mini-v2 (workflow step 3)

Written 2026-11-22 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Inkling 2 Mini: Looped AI, Less Waiting"** + thumbnail **"LEARN INKLING 2 MINI IN 60 SECONDS"**. A remake of `episodes/inkling-2-mini/` under lesson L16:
the hook sells the viewer's moment (less waiting for a smart answer), and the tech comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **film seconds** from a draft voice (am_michael, speed 1.2, `--no-align`, laid in at 0.3 s):
58.1 s of voice, 172 words. The draft said "each step takes more work"; the final line is "each word it writes takes more work" (two words longer), so shots 27-31 move about 0.4 s later:
the renderer re-times every cut to the real `vo_lines.json`.

## Hooks
Written against `.claude/skills/yt-script/hooks.json`, 16 in three rounds, scored with `hookscore.py`. Picked by the 3-second test (lesson L16), then the score.

### 1 (chosen) 81 STRONG
"Before, you'd waste time watching your AI think out loud; now Inkling 2 Mini thinks more in its head, so you wait less, but how?"
```
SPECIFICITY   69   the name Inkling 2 Mini
ADDRESS      100   you'd / your / you
STAKES        88   before, waste
CURIOSITY     93   before, but, how, ends on "?"
BREVITY       93   23 words
VERDICT       81   STRONG
formula      The Question (1 pattern matched), built as Before and After
```
3-second test: a viewer who knows no AI tech hears "your AI makes you wait while it thinks out loud; Inkling 2 Mini makes you wait less". It names the topic and the moment; no architecture word
(no layers, weights, tokens, parameters, loops). True: the maker says it reaches the right answer "with fewer tokens" and reasons "without writing its reasoning down";
"wait less" = less written thinking to wait through (research twin: under half). The body says the limit (each word takes more work; speed depends on the setup).

### 2 (runner-up) 80 STRONG
"You waste time watching your AI think out loud before it answers; Inkling 2 Mini thinks more in its head, so you wait less, but how?"
```
SPECIFICITY 69 · ADDRESS 100 · STAKES 88 · CURIOSITY 93 · BREVITY 86 · VERDICT 80 STRONG
formula      The Question (1 pattern matched)
```
Why 1 over 2: "before ... now" sets up the video's own before -> after, and it scores a point higher.

### All hooks scored
| Score | Formula (tool) | Hook | Note |
|---|---|---|---|
| 89 | The Question | Before, you'd waste time watching your AI think out loud; now Inkling 2 Mini thinks more in its head, on a 32 gig Mac, but how? | fails the 3-second test: never says what you get (waiting less) |
| 84 | The Question | You waste time watching your AI think out loud before it answers; Inkling 2 Mini does more of that in its head, but how? | same: no "wait less" |
| 82 | The Mistake | Stop wasting time watching your AI think out loud: Inkling 2 Mini thinks in its head, so you wait less on a 32 gig Mac, but how? | ties the "wait less" to the Mac, which the maker didn't measure |
| **81** | The Question | **Before, you'd waste time watching your AI think out loud; now Inkling 2 Mini thinks more in its head, so you wait less, but how?** | chosen |
| 80 | The Question | Before, you'd waste time ...; now Inkling 2 Mini, on a 32 gig Mac, thinks in its head so you wait less: how? | same Mac coupling, longer |
| 80 | The Question | You waste time watching your AI think out loud before it answers; Inkling 2 Mini thinks more in its head, so you wait less, but how? | runner-up |
| 73 | The Question | Why waste time watching your AI think out loud before it answers? Inkling 2 Mini thinks more in its head, on a 32 gig Mac. | no "wait less" |
| 73 | The Mistake | Stop waiting while your AI thinks out loud: Inkling 2 Mini gives you the smart answer with less of the wait, on a 32 gig Mac, but how? | |
| 62 | The Question | What if your AI stopped making you wait while it thinks out loud? Inkling 2 Mini, on a 32 gig Mac, thinks more in its head; but how? | |
| 61 | The Question | What if you waited less for a smart answer, on your own 32 gig Mac? That's Inkling 2 Mini, and here's how. | |
| 61 | Unclassified | Tired of watching your AI think out loud before it answers? Inkling 2 Mini thinks in its head, so you wait less. | |
| 52-49 | Unclassified | five "Imagine ... / Inkling 2 Mini lets you ..." summaries | no stakes, no open question |

## The parts, in one line each
- **Hook (0.0-8.6 s):** the sentence above; title card from frame 0; then you waiting while the old robot writes a long scroll; the teal robot thinking in its head; your stopwatch stopping early; HOW?.
- **Turn (8.6 s):** "Here's how, in one hard exam question." Then it does it.
- **Before, the pain as a scene (11.2-19.4 s):** you hand a hard question to an ordinary model; it thinks by writing, line after line; you wait for every line.
- **Now, the same scene (19.4-28.0 s):** the same question to Inkling 2 Mini: it works in its head and writes a short note; your stopwatch stops early.
- **How (28.0-36.5 s):** middle 12 layers run three times, same weights; 48 layer steps from 24; BEFORE vs NOW side by side; no bigger brain.
- **Why it helps you (36.5-45.3 s):** research twin: less than half the reasoning written; open, about 20 GB, a 32 GB Mac.
- **Payoff (45.3-53.6 s):** "That's how you wait less: less thinking to write out." Then the honest catch: each word takes more work, speed depends on your setup, it still writes some.
- **Close:** takeaway tied to the story ("Same exam; more of the working happens in its head."), then one ask ("Subscribe for the next one.").

## Cast and places
Same cast as `episodes/inkling-2-mini/` (reuse its `film/film.js` drawing code):
- **You = the mascot** (round cream face, coral hoodie) in an amber **mortarboard** (`#FFC66E`, off-white tassel), the examiner, holding a **stopwatch**.
- **The ordinary model = the old robot**: stick body, **grey-blue screen head** showing a 4-block layer stack; writes on a **long paper scroll**.
- **Inkling 2 Mini = the new robot**: same body and head size, **teal (`#2DB2AE`) screen head**; its middle two blocks glow with a loop arrow and "×N"; writes a **short note**.
- Robots are visibly AI (screen heads), not skin tones. No real logos: Gemma, Qwen, Thinking Machines are plain text cards.
- Places: the exam hall (desk A old robot, desk B teal robot, a board "Q1 · HARD"), screen close-ups, the board for BEFORE vs NOW, a laptop desk.
- Every frame: corner tag "Inkling 2 Mini · 60s" top-left. BEFORE tabs amber, NOW tabs teal, red for the sticker and Subscribe.

## Shots
32 shots in 60 s, 1.9 s on average (lesson L1). Cuts on word boundaries (film seconds, draft voice).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.00-1.49 | "Before, you'd waste time" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "INKLING 2 MINI", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.49-3.74 | "watching your AI think out loud;" | Amber tab "BEFORE". Exam hall: the mascot taps his foot by desk A, stopwatch up; the old robot writes, the scroll growing | hook: the pain |
| 2 | 3.74-5.40 | "now Inkling Two Mini thinks" | Teal tab "NOW". Desk B: the teal robot; label "INKLING 2 MINI" | hook: the new, named |
| 3 | 5.40-6.46 | "more in its head," | Close on the teal screen head: a soft glow and a loop arrow turning inside it (no numbers) | hook: in its head |
| 4 | 6.46-7.53 | "so you wait less," | The mascot's stopwatch: the hand stops early, a teal check; he smiles; label "LESS WAITING" | hook: the moment |
| 5 | 7.53-8.57 | "but how?" | The mascot faces the viewer; amber card "HOW?" pops at 7.77 | hook: open question |
| 6 | 8.57-11.16 | "Here's how, in one hard exam question." | Wide exam hall: two desks, the board "Q1 · HARD"; lower card "ONE HARD QUESTION" | turn (by 10 s) |
| 7 | 11.16-12.72 | "You ask a hard question." | Amber tab "BEFORE". The mascot hands a question card ("Q1") to the old robot | before: your scene |
| 8 | 12.72-14.16 | "An ordinary model," | The old robot, pencil up; label "ORDINARY MODEL" | before: who |
| 9 | 14.16-15.05 | "like Gemma or Kwen," | Two plain name cards pop: "GEMMA 4 31B", "QWEN3.8-27B"; small caption "from the maker's table" | before: examples |
| 10 | 15.05-16.19 | "thinks by writing:" | Close: the old robot writes fast; label "THINKING = WRITING" | before: how it thinks |
| 11 | 16.19-17.21 | "line after line," | The scroll unrolls off the desk to the floor | before: it gets long |
| 12 | 17.21-19.44 | "and you wait for every line." | The mascot, stopwatch hand sweeping round and round; he sighs; a row of grey line-chips keeps growing (no digits) | before: the pain |
| 13 | 19.44-21.44 | "Same question on Thinking Machines'" | Teal tab "NOW". Desk B: the mascot hands the same "Q1" card to the teal robot | now: same scene |
| 14 | 21.44-23.78 | "Inkling Two Mini, out November twentieth:" | Label "INKLING 2 MINI · THINKING MACHINES", card "NOV 20, 2026", tag "OPEN WEIGHTS" | now: the name |
| 15 | 23.78-26.06 | "it does more of the working in its head," | The teal robot, pencil still; thought bubble with the loop arrow turning | now: thinking inside |
| 16 | 26.06-28.01 | "then writes a short note." | It writes a three-line note and hands it over; the mascot's stopwatch stops early, teal check | now: the moment |
| 17 | 28.01-28.74 | "How?" | The "HOW?" card returns | how: the question |
| 18 | 28.74-31.05 | "Its middle twelve layers run three times," | Teal screen big: 4 blocks labelled "1-6", "7-12", "13-18", "19-24"; the middle two bracketed "MIDDLE 12"; a light loops through them, "×1 ×2 ×3" on "three times" | how: the loop |
| 19 | 31.05-32.32 | "same weights:" | Stamp "SAME WEIGHTS" over the looping blocks | how: shared |
| 20 | 32.32-35.02 | "forty-eight layer steps from twenty-four layers," | Board, side by side. Left "BEFORE · ordinary model": grey stack, "1 PASS", "24 STEPS" -> long scroll. Right "NOW · Inkling 2 Mini": teal stack, middle "×3", "48 STEPS" counting up (6 + 12×3 + 6) -> short note | how: BEFORE vs NOW diagram |
| 21 | 35.02-36.45 | "no bigger brain." | Teal head beside a dashed bigger outline, crossed out; label "NO NEW WEIGHTS" | how: same size |
| 22 | 36.45-38.51 | "In the maker's test on a research twin," | A second teal robot pops in, badge "RESEARCH TWIN"; caption "MAKER'S TEST · GPQA DIAMOND" | why: evidence, named honestly |
| 23 | 38.51-41.33 | "three passes wrote less than half the reasoning." | Two bars: "1 PASS · 3,703" long (grey), "3 PASSES · 1,731" short (teal); label "LESS THAN HALF" | why: the number |
| 24 | 41.33-43.44 | "And it's open: about twenty gigabytes," | Card "OPEN WEIGHTS · APACHE 2.0"; a file box "≈20 GB" | why: you can run it |
| 25 | 43.44-45.34 | "for a thirty-two gig Mac." | A laptop; the box slides in; label "MAC · 32 GB", check | why: on your desk |
| 26 | 45.34-48.18 | "That's how you wait less: less thinking to write out." | Side by side in one frame: left, the long scroll and a stopwatch still running; right, the short note and a stopped stopwatch; label "LESS TO WRITE = LESS WAITING" | payoff (said out loud) |
| 27 | 48.18-50.40 | "The catch: each word it writes takes more work," | The teal screen, the loop glowing hotter on each word chip; label "MORE WORK PER WORD" | payoff: honest catch |
| 28 | 50.40-52.10 | "so speed depends on your setup," | The laptop with a small speed dial whose needle wobbles; label "SPEED DEPENDS ON YOUR SETUP" | payoff: honest catch |
| 29 | 52.10-53.90 | "and it still writes some." | The teal robot still writes a few lines; label "STILL WRITES SOME" | payoff: honest catch |
| 30 | 53.90-57.10 | "Same exam; more of the working happens in its head." | Wide exam hall, warm light: the teal robot hands its note to the mascot, who nods; takeaway card: line 1 off-white "Same exam;", line 2 amber "more of the working happens in its head." | close: takeaway |
| 31 | 57.10-60.00 | "Subscribe for the next one." | The mascot waves; red Subscribe button pops and pulses; no "Next" line (no next episode decided); short fade with the corner tag drawn over it | close: one ask |

## On-screen words and their sources
"INKLING 2 MINI · THINKING MACHINES", "NOV 20, 2026", "OPEN WEIGHTS · APACHE 2.0", "≈20 GB", "MAC · 32 GB", "MIDDLE 12", "1-6 / 7-12 / 13-18 / 19-24", "×3", "SAME WEIGHTS", "48 STEPS", "24 STEPS", "NO NEW WEIGHTS": model card and post (`research.md`, New).
"ORDINARY MODEL", "1 PASS", "THINKING = WRITING", "GEMMA 4 31B", "QWEN3.8-27B": the post (`research.md`, Before). "RESEARCH TWIN", "GPQA DIAMOND", "3,703", "1,731", "LESS THAN HALF": the post's research-variant table.
"LESS WAITING", "LESS TO WRITE = LESS WAITING": fewer reasoning tokens to wait through (`research.md`, "Waiting, honestly"). "MORE WORK PER WORD", "SPEED DEPENDS ON YOUR SETUP": the model card ("compute per token is higher", "speed varies by runtime and hardware").
"STILL WRITES SOME": minimum reasoning effort "does not fully disable reasoning" (model card). The exam, the scroll, the stopwatch are invented pictures inside the analogy (said in the description).
