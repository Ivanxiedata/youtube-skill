# Beats: inkling-2-mini (workflow step 3)

Written 2026-11-22 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Inkling 2 Mini: 12 Layers, 3 Loops, Why?"** + thumbnail **"LEARN INKLING 2 MINI IN 60 SECONDS"**. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times below are **film seconds**: the draft voice's `vo_lines.json` (exact line starts and ends) and
its word times (estimated inside each line, `--no-align`), both + 0.3 s because the voice is laid in at 0.3 s.
Voice draft: am_michael, speed 1.2, 165 words, `vo.wav` 58.42 s, speech 0.30-58.42 s (film). The renderer may move a cut by a few frames to the real voice.

## Hooks
Scored with `python3 .claude/skills/yt-script/hookscore.py` (29 written against `hooks.json`, iterated to 100). The owner's rules: the topic first,
before -> after stated, only true numbers ("2" is the name; "12 layers" and "3 times" are the model card's "the middle 12 layers run three times"), one sentence, 100.

### 1 (chosen) 100 STRONG
"Inkling 2 Mini: before, you'd stop and wait; your AI's written thinking cost you; now 12 layers loop 3 times, but how, why?"
```
SPECIFICITY  100   2, 12, 3; the name Inkling 2 Mini
ADDRESS      100   you'd / your / you, the first inside the first six words
STAKES       100   before, stop, cost
CURIOSITY    100   before, but, how, why, and it ends on "?"
BREVITY      100   23 words
VERDICT      100   STRONG
formula      The Mistake (1 pattern matched), built as Before and After (before -> now)
```

### 2 (runner-up) 100 STRONG
"Inkling 2 Mini: before, you'd stop and wait: your AI's thinking, all written, cost you; now 12 layers loop 3 times, but how, why?"
```
SPECIFICITY 100 · ADDRESS 100 · STAKES 100 · CURIOSITY 100 · BREVITY 100 · VERDICT 100 STRONG
formula      The Mistake (1 pattern matched)
```
Why 1 over 2: "all written" overclaims a little (an ordinary model can do some thinking per token; only reasoning that needs more steps must be written), and 1 is a word shorter.

### Why this formula fits this idea
The episode is a before -> after (an ordinary model writes its thinking out and you wait; now the middle layers loop inside), so the hook is that sentence.
"12 layers loop 3 times, but how, why?" is the title ("12 Layers, 3 Loops, Why?") said aloud, so the first seconds confirm the click; the payoff answers "How?" then "Why?".

### All hooks scored (top 12 of 29)
| Score | Formula (tool) | Hook |
|---|---|---|
| 100 | The Mistake | Inkling 2 Mini: before, you'd stop and wait; your AI's written thinking cost you; now 12 layers loop 3 times, but how, why? |
| 100 | The Mistake | Inkling 2 Mini: before, you'd stop and wait: your AI's thinking, all written, cost you; now 12 layers loop 3 times, but how, why? |
| 100 | The Question | Inkling 2 Mini: before, you'd stop, wait: your AI's thinking, all written out, cost you; now 12 layers loop 3 times, but how, why? |
| 98 | The Question | Inkling 2 Mini: before, you'd stop, wait, pay the cost of your AI's written thinking; now 12 layers loop 3 times, but how, why? |
| 96 | The Mistake | Inkling 2 Mini: before, you'd stop and wait while your AI's thinking, written out, cost you; now 12 layers loop 3 times, but how, why? |
| 96 | The Mistake | Inkling 2 Mini: before, you'd stop and wait, your AI's thinking written out at your cost; now 12 layers loop 3 times, but how, why? |
| 96 | The Mistake | Inkling 2 Mini: before, you'd stop and wait, your AI's written thinking a cost to you; now 12 layers loop 3 times, but how, why? |
| 96 | The Question | Inkling 2 Mini: before, you'd stop, wait, you'd pay the cost of your AI's written thinking; now 12 layers loop 3 times, but how, why? |
| 94 | The Question | Inkling 2 Mini: before, you'd stop, wait, your AI's written thinking costing you; now 12 layers loop 3 times, but how, why, you ask? |
| 93 | The Question | Inkling 2 Mini: before, you'd wait while your AI wrote its thinking, at your cost; now 12 layers think 3 times inside, but how, why? |
| 93 | The Question | Inkling 2 Mini: before, you'd wait while your AI wrote every thought; now 12 layers loop 3 times, never costing you tokens, but how, why? (rejected: "never costing you tokens" is false) |
| 59 | The Clock | What if your AI could think 3 times harder without writing a word? Inkling 2 Mini does it; here's how in 60 seconds. (false: it still writes reasoning) |

Truth of the hook: "you'd stop and wait; your AI's written thinking cost you" = in a standard non-looped transformer, reasoning that needs more steps is carried out in generated text (`research.md`, Before), and tokens are produced one at a time.
"Now 12 layers loop 3 times" = "The middle 12 layers run three times with shared weights" (model card). Not said: that it writes no reasoning (it still does, less).

## The parts, in one line each
- **Hook (0.0-8.6 s):** the sentence above; title card from frame 0, then you waiting with a stopwatch, the old robot's long scroll, the new robot's looping middle blocks, HOW? / WHY?.
- **Turn (8.6 s):** "Here's how, in one hard exam question." Then it does it. No channel intro, no subscribe pitch before the end.
- **Body:** before (11.2-20.6 s, the ordinary model writes its working out, you wait), new (20.6-33.1 s, Inkling 2 Mini, the middle 12 run three times, same weights, 48 steps from 24), why it matters to you (33.1-43.4 s, it writes less; open, 20 GB, a 32 GB Mac).
- **Payoff (43.4-54.1 s):** the hook's two questions said again and answered: "How? The middle layers loop. Why? More thinking per token, fewer tokens to wait for." Plus the honest catch (it still writes some reasoning; loops add no new facts).
- **Close:** takeaway tied to the story ("Same exam; more working happens in its head."), then one ask ("Subscribe for the next one.").

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) in the episode's costume: an amber **mortarboard** (exam cap, `#FFC66E`, with an off-white tassel), the examiner. He holds a **stopwatch**.
- **The ordinary model = the old robot**, visibly AI: a stick body with a **grey-blue screen for a head** (brand casting rule). Its screen shows a small **layer stack**: 4 blocks stacked (each block = 6 layers, 24 in all); a light runs bottom to top once. It sits at a desk and writes on a **long paper scroll** that unrolls to the floor (grey scribble lines). BEFORE side only.
- **Inkling 2 Mini = the new robot**, same body shape, **teal (`#2DB2AE`) screen head**, the same size as the old one ("no bigger brain"). Its screen shows the same 4-block stack; blocks 2 and 3 (the middle 12 layers) glow teal with a **round loop arrow** and a "×3" counter. It writes on a **short** note.
- No real logos (no Thinking Machines, Gemma or Qwen artwork): names only as plain text labels.
- **Places:** the exam hall (two desks side by side, a board at the front reading "Q1 · HARD", a wall clock), the robots' screens (close-ups), the board for BEFORE vs NOW, a desk with a laptop.
- On every frame: the corner tag "Inkling 2 Mini · 60s", top-left. Amber `#FFC66E` topic and accents, teal for the new robot and the loop, red `#E4493F` for the sticker and Subscribe. Grey-blue for the old robot.

## Shots
29 shots in 60 s (title card + 28), 2.1 s on average (lesson L1). Cut times are suggestions on word boundaries (film seconds).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.00-1.35 | "Inkling Two Mini:" | Full-screen title card from frame 0, no fade-in: small off-white "LEARN", huge amber "INKLING 2 MINI", tilted red "IN 60 SECONDS" sticker; corner tag on. Cut, not faded | hook: topic first (L14) |
| 1 | 1.35-3.03 | "before, you'd stop and wait;" | Amber tab "BEFORE". The exam hall: the mascot (mortarboard) stands by the old robot's desk, stopwatch in hand, tapping his foot; the robot writes | hook: before |
| 2 | 3.03-5.19 | "your AI's written thinking cost you;" | Close on the old robot's desk: the scroll unrolls off the edge, line after line of grey scribble; a counter "TOKENS" ticks up; a small clock icon spins | hook: the cost |
| 3 | 5.19-7.28 | "now twelve layers loop three times," | Teal tab "NOW". Close on the new robot's teal screen head: the 4-block stack; blocks 2-3 glow, a loop arrow goes round, "×1 ×2 ×3" ticks on "three times"; label "MIDDLE 12 LAYERS" | hook: after |
| 4 | 7.28-8.60 | "but how, why?" | The mascot faces the viewer; amber cards pop on the words: "HOW?" (7.52), "WHY?" (7.81) | hook: open question |
| 5 | 8.60-11.20 | "Here's how, in one hard exam question." | Wide exam hall: two desks, the board at the front "Q1 · HARD"; lower card "ONE EXAM QUESTION" | turn (by 10 s) |
| 6 | 11.20-12.88 | "Before, an ordinary model," | Amber tab "BEFORE". The old robot at its desk, pencil up; label "ORDINARY MODEL" | beat: who is who |
| 7 | 12.88-14.13 | "like Gemma or Kwen," | Two plain name cards pop on its desk: "GEMMA 4 31B", "QWEN3.8-27B"; small caption "from the maker's table" | beat: named examples |
| 8 | 14.13-16.37 | "ran each layer once per token." | Close on its grey screen: the 4-block stack ("24 LAYERS"); a light runs up once, then a small chip "1 TOKEN" drops out; label "1 PASS PER TOKEN" | beat: before, one pass |
| 9 | 16.37-18.50 | "To think harder, it wrote its working out," | The old robot writes fast; the paper fills with grey lines; label "WRITTEN THINKING" | beat: before, thinking = writing |
| 10 | 18.50-19.55 | "line after line," | The scroll unrolls off the desk and down to the floor | beat: it gets long |
| 11 | 19.55-20.64 | "and you waited." | The mascot looks at his stopwatch; its hand sweeps round; he sighs | beat: the cost to you |
| 12 | 20.64-22.26 | "Now, since November twentieth," | Teal tab "NOW". The second desk: the teal robot sits down; card "NOV 20, 2026" | beat: the new |
| 13 | 22.26-24.14 | "Thinking Machines' Inkling Two Mini" | Label over it "INKLING 2 MINI · THINKING MACHINES"; a small tag "OPEN WEIGHTS" | beat: the name |
| 14 | 24.14-25.84 | "works it over in its head." | Close: the teal robot, pencil still; a thought bubble with a loop arrow going round | beat: thinking inside |
| 15 | 25.84-28.96 | "Its middle twelve layers run three times, same weights:" | Its screen big: 4 blocks of 6 labelled "1-6", "7-12", "13-18", "19-24"; blocks 7-12 and 13-18 bracketed "MIDDLE 12"; a light loops through them, "×1 ×2 ×3" (27.46-27.79); stamp "SAME WEIGHTS" at 28.2 | beat: the loop |
| 16 | 28.96-31.68 | "forty-eight layer steps from twenty-four layers," | Counter: "24 LAYERS STORED" on the left, "48 LAYER STEPS" counting up on the right (6 + 12×3 + 6) | beat: the arithmetic |
| 17 | 31.68-33.13 | "no bigger brain." | The teal screen head next to a dashed bigger outline, crossed out; label "NO NEW WEIGHTS" | beat: same size |
| 18 | 33.13-34.55 | "So it can write less." | The teal robot writes a short note: three lines, done | beat: why, fewer tokens |
| 19 | 34.55-36.61 | "In the maker's test on a research twin," | A second teal robot pops beside it, a small "RESEARCH TWIN" badge; caption "MAKER'S TEST · GPQA DIAMOND" | why: the evidence, named honestly |
| 20 | 36.61-39.43 | "three passes wrote less than half the reasoning." | Two bars: "1 PASS 3,703 tokens" long (grey), "3 PASSES 1,731" short (teal); label "LESS THAN HALF" | why: the number |
| 21 | 39.43-40.94 | "And it's open," | Card "OPEN WEIGHTS · APACHE 2.0"; a download arrow | why: you can run it |
| 22 | 40.94-43.44 | "about twenty gigabytes, for a thirty-two gig Mac." | A laptop on a desk; a file box "≈20 GB" slides into it; label "MAC · 32 GB" | why: laptop-sized |
| 23 | 43.44-46.33 | "How? The middle layers loop." | Board, both halves in one frame, side by side. Left "BEFORE · ordinary model": grey 4-block stack "1 PASS" -> long scroll. Right "NOW · Inkling 2 Mini": teal stack, middle loop "×3" -> short note. The hook's "HOW?" card returns with a teal check; the loop lights on "loop" | payoff (how), BEFORE vs NOW side by side |
| 24 | 46.33-49.53 | "Why? More thinking per token, fewer tokens to wait for." | Board, a row under the halves: "24 vs 48 LAYER STEPS PER TOKEN"; the long scroll vs the short note; "WHY?" card with a teal check | payoff (why) |
| 25 | 49.53-51.79 | "The catch: it still writes some reasoning," | The teal robot still writes a few lines on its short note (it is a reasoning model); label "STILL WRITES SOME REASONING" | payoff: honest catch |
| 26 | 51.79-54.09 | "and loops add no new facts." | A book "FACTS" on the desk; the loop arrow circles it, the book stays the same thickness; label "LOOPS ADD NO NEW FACTS" | payoff: honest catch |
| 27 | 54.09-57.02 | "Same exam; more working happens in its head." | Wide exam hall, warm light: the teal robot hands its short note to the mascot, who nods; dimmed behind the takeaway card: line 1 off-white "Same exam;" at 54.2; line 2 amber "more working happens in its head." at 54.7 | close: takeaway tied to the story |
| 28 | 57.02-60.00 | "Subscribe for the next one." | The mascot waves; the red Subscribe button pops at 57.1 and pulses; no "Next" line (no next episode decided). 0.45 s fade-out with the corner tag drawn over it | close: one ask |

## On-screen words and their sources
"MIDDLE 12 LAYERS", "×3", "1-6 / 7-12 / 13-18 / 19-24", "SAME WEIGHTS", "24 LAYERS STORED", "48 LAYER STEPS", "NO NEW WEIGHTS", "NOV 20, 2026", "OPEN WEIGHTS · APACHE 2.0", "≈20 GB", "MAC · 32 GB": the model card and the post (`research.md`, New).
"ORDINARY MODEL", "1 PASS PER TOKEN", "WRITTEN THINKING", "GEMMA 4 31B", "QWEN3.8-27B": the post (`research.md`, Before). "RESEARCH TWIN", "GPQA DIAMOND", "3,703", "1,731", "LESS THAN HALF": the post's research-variant test.
"STILL WRITES SOME REASONING" (minimum reasoning effort "does not fully disable reasoning", model card) and "LOOPS ADD NO NEW FACTS" (knowledge depends on total parameters, the post): the maker's own caveats. Changed after the judge (2026-11-22): the first draft said "unwritten thoughts are harder to check", which the post contradicts ("at this scale we do not see a meaningful reduction in the monitorability of their reasoning").
The exam, the scroll, the stopwatch and the FACTS book are invented examples inside the analogy (said so in the description).
