# Beats: openai-dots (workflow step 3)

Written 2026-11-22 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"OpenAI Dots: Can ChatGPT Work 24/7 Now?"** + thumbnail **"LEARN OPENAI DOTS IN 60 SECONDS"**. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times below are **film seconds**: the draft voice's `vo_lines.json` (exact line starts and ends) and
`align.json` (word times estimated inside each line, `--no-align`), both + 0.3 s because the voice is laid in at 0.3 s.
Voice: am_michael, speed 1.2, 171 words, `vo.wav` 58.36 s, speech 0.30-58.66 s. The renderer may move a cut by a few frames to the real voice.

## Hooks
Scored with `python3 .claude/skills/yt-script/hookscore.py` (24 written against `hooks.json`, iterated to 100). The owner's rules: the topic first,
before -> after stated, only true numbers ("24/7" is OpenAI's own "can work towards your goals 24/7"; "60 seconds" is the video's real length), one sentence, 100.

### 1 (chosen) 100 STRONG
"OpenAI dots: before, your ChatGPT would stop, wait for you; now your dot works 24/7, but how, at what risk, in 60 seconds?"
```
SPECIFICITY  100   24/7 and 60 seconds, the names OpenAI and ChatGPT
ADDRESS      100   your / you / your, the first inside the first six words
STAKES       100   before, stop, risk
CURIOSITY    100   before, but, how, what, and it ends on "?"
BREVITY      100   24 words
VERDICT      100   STRONG
formula      The Clock (1 pattern matched: "in 60 seconds"), built as Before and After (before -> now)
```

### 2 (runner-up) 100 STRONG
"OpenAI dots: your ChatGPT, before, would stop, wait for you; now your dot works 24/7, but how, at what risk, in 60 seconds?"
```
SPECIFICITY 100 · ADDRESS 100 · STAKES 100 · CURIOSITY 100 · BREVITY 100 · VERDICT 100 STRONG
formula      The Clock (1 pattern matched)
```
Why 1 over 2: "before," straight after the topic says before -> now in order; "your ChatGPT, before," puts a comma pause in the wrong place by ear.

### Why this formula fits this idea
The episode is a before -> after (ChatGPT did a task and waited for you; a dot keeps working), so the hook is that sentence. "At what risk?" is the question
every viewer asks about an agent that works alone, and the video answers it from OpenAI's own safeguards (read-only while away, approval, passwords stay with you).
The Clock ("in 60 seconds") is the brand's promise, so it confirms the thumbnail in the same breath. The title asks "Can ChatGPT work 24/7 now?"; the hook says "now your dot works 24/7".

### All hooks scored (top 15 of 24)
| Score | Formula (tool) | Hook |
|---|---|---|
| 100 | The Clock | OpenAI dots: before, your ChatGPT would stop, wait for you; now your dot works 24/7, but how, at what risk, in 60 seconds? |
| 100 | The Clock | OpenAI dots: your ChatGPT, before, would stop, wait for you; now your dot works 24/7, but how, at what risk, in 60 seconds? |
| 100 | The Clock | OpenAI dots: before, your ChatGPT would stop, wait for you; now your dot works 24/7, but how, and what risk, in 60 seconds? |
| 98 | The Mistake | OpenAI dots: your ChatGPT, before, would stop and never start alone; now your dot works 24/7, but how, and why, in 60 seconds? |
| 96 | The Mistake | OpenAI dots: before, your ChatGPT would stop and wait for you; now your dot works 24/7, but how, at what risk, in 60 seconds? |
| 94 | The Mistake | OpenAI dots: your ChatGPT, before, would stop when you did; now your dot works 24/7, but how, and why, in 60 seconds? |
| 93 | The Mistake | OpenAI dots: your ChatGPT, before, would stop after one task; now your dot works 24/7, but how, and why, in 60 seconds? |
| 92 | The Question | OpenAI dots: before, your ChatGPT would stop, then wait for you; now your dot works 24/7, but how, at what risk? |
| 92 | The Mistake | OpenAI dots: before, your ChatGPT would stop after each task; now your dot works 24/7, but how, and is it safe, in 60 seconds? |
| 80 | The Mistake | OpenAI dots: your ChatGPT, before, would stop and wait for you; now your dot never stops, but how, and why, in 60 seconds? (also untrue: "never stops") |
| 77 | The Clock | OpenAI dots: before September 29, 2026, ChatGPT waited for your prompt; now your dot works on your goals while you sleep, but how, and why, in 60 seconds? |
| 75 | The Clock | OpenAI dots: before, you asked and ChatGPT did one task; now your dot finds work while you sleep, but how, and why, in 60 seconds? |
| 72 | The Clock | OpenAI dots: before, ChatGPT stopped when you stopped asking; now your dot keeps working while you sleep, but how, and why trust it, in 60 seconds? |
| 60 | The Question | OpenAI dots, from DevDay 2026: ChatGPT used to wait for you; now your dot works 24/7 on your goals, but how, and is it safe? |
| 55 | The Clock | What if ChatGPT kept working after you went to bed? OpenAI dots, since September 29, 2026, do; here's how in 60 seconds. |

Truth of the hook: "your ChatGPT would stop, wait for you" = a chat or a 2025 agent task ended and waited for your next ask (agent post: "describe your desired task", notified "when it's done with your task").
Not said: that the old agent stopped when you closed the window (it didn't; `research.md`, premise check).

## The parts, in one line each
- **Hook (0.0-9.6 s):** the sentence above; title card from frame 0, then the clerk that stops and waits, the dot working at night, HOW? / WHAT RISK?.
- **Turn (10.0 s):** "Here's how, in one shop you run." Then it does it. No channel intro, no subscribe pitch before the end.
- **Body:** before (11.9-23.0 s, the shop by day), new (24.0-33.4 s, the shop by night), why it matters to you (33.9-42.5 s, the morning).
- **Payoff (43.0-53.0 s):** the hook's two questions said again and answered: "How? Its own computer, working toward your goals. What risk? Away, it only reads; it asks before sensitive steps."
- **Close:** takeaway tied to the story ("The shop never closes now, but the keys are still yours."), then one ask ("Subscribe for the next one.").

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) in the episode's costume: a shopkeeper's flat cap and a brown apron. He owns the shop.
- **Old ChatGPT = the clerk**, visibly AI: a stick body with a screen for a head showing a chat bubble (brand casting rule). Grey-blue, not a skin tone.
- **The dot** = a floating round teal (`#2DB2AE`) dot with two eyes and a soft glow, visibly AI. Generic circle; no copy of OpenAI's artwork.
- **Places:** the shop by day (counter, bell, door with OPEN/CLOSED sign, back-room desk), the shop by night (moon in the window, the desk lamp on), the mascot's home (bed, then morning with a phone), the board (BEFORE vs NOW).
- On every frame: the corner tag "OpenAI dots · 60s", top-left. Amber `#FFC66E` topic and accents, teal `#2DB2AE` for the dot and new parts, red `#E4493F` for the sticker and Subscribe.

## Shots
26 shots in 60 s (title card + 25), 2.3 s on average (lesson L1). Cut times are suggestions on word boundaries (film seconds).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.00-1.65 | "OpenAI dots: before," | Full-screen title card from frame 0, no fade-in: small off-white "LEARN", huge amber "OPENAI DOTS", tilted red "IN 60 SECONDS" sticker; corner tag on. Cut, not faded | hook: topic first (L14) |
| 1 | 1.65-4.25 | "your ChatGPT would stop, wait for you;" | Shop counter by day, amber tab "BEFORE" top-left: the screen-head clerk (chat bubble on its screen) hands a parcel over the counter, then freezes; its screen shows "waiting..." | hook: before |
| 2 | 4.25-6.75 | "now your dot works 24/7," | Shop by night (moon in the window): the teal dot floats at a desk under a lamp, a wall clock's hands spin; teal tab "NOW" top-left; label "24/7" | hook: after |
| 3 | 6.75-9.60 | "but how, at what risk, in 60 seconds?" | The mascot (flat cap, apron) faces the viewer; amber cards pop on the words: "HOW?" (7.05), "WHAT RISK?" (7.6); red "IN 60 SECONDS" sticker stamps on at 8.5 | hook: open question, payoff promised |
| 4 | 9.60-11.90 | "Here's how, in one shop you run." | Wide shop by day: sign "YOUR SHOP" over the door, the mascot behind the counter, the clerk beside him; lower card "BEFORE → NOW" | turn (by 10 s) |
| 5 | 11.90-14.30 | "Old ChatGPT, even 2025's agent mode," | Close on the clerk; a small computer box beside it; label "CHATGPT · AGENT MODE (2025)" | beat: who is who |
| 6 | 14.30-16.90 | "was the clerk at the counter:" | The mascot walks up to the counter; a brass bell on it; the clerk waits behind | beat: the before world |
| 7 | 16.90-18.95 | "you ring, it does that one task," | The mascot taps the bell (ding); the clerk fetches one box; card "1 ASK = 1 TASK" | beat: before, one task on request |
| 8 | 18.95-21.10 | "then waits for the next ring." | The clerk stands still, screen "waiting...", hands at its sides; the wall clock ticks | beat: before, then it waits |
| 9 | 21.10-23.90 | "Go home, and no new work starts." | The mascot flips the door sign to "CLOSED" and walks out; the lights dim; the clerk's screen goes dark | beat: the cost of before |
| 10 | 23.90-25.90 | "Now a dot works the night shift." | Same shop at night, teal tab "NOW": the teal dot glows on, floating; small card "OPENAI DOTS · DEVDAY, SEP 29, 2026" | beat: the new |
| 11 | 25.90-27.85 | "It has its own desk, a cloud computer," | Back room: the dot at its own desk; the monitor shows a cloud icon; label "ITS OWN CLOUD COMPUTER" | beat: own computer |
| 12 | 27.85-29.90 | "and your goals pinned on the wall." | The wall above the desk: a pinned note "YOUR GOALS" with two lines "get paid on time" / "answer customers"; the dot turns to it | beat: goals |
| 13 | 29.90-31.90 | "While you're away, it reads your connected apps," | The dot looks through a glass pane at three app icons (mail, calendar, ledger); small inset: the mascot asleep at home, moon; label "READ-ONLY" | beat: proactive research |
| 14 | 31.90-33.80 | "but it can't send a thing." | The dot nudges the mail icon's "SEND" button: a padlock snaps on it; a red X | beat: read-only means no sending |
| 15 | 33.80-36.95 | "Morning, a note: you forgot an invoice; it's ready; send it?" | Morning sun in the mascot's window; his phone shows a message from the dot: "You forgot an invoice. It's ready. Send it?" with buttons "YES" / "NO" | why: what it does for you |
| 16 | 36.95-38.10 | "You tap yes." | Close on the phone: his thumb taps YES; teal check; an envelope flies off | why: your approval |
| 17 | 38.10-40.05 | "Say \"shorter notes\", and it learns." | The mascot's speech bubble "shorter notes"; the next message pops in, short: "Invoice sent ✓"; label "LEARNS FROM FEEDBACK" | why: it learns |
| 18 | 40.05-42.85 | "And changing a password always stays with you." | A key tagged "PASSWORD" in the mascot's hand; the dot floats near and stops short; label "ALWAYS YOURS" | why: what stays with you |
| 19 | 42.85-44.60 | "How?" (+ "Its own") | Board, both halves in one frame, side by side. Left "BEFORE · ChatGPT / agent mode 2025": "you ask → 1 task → waits". Right "NOW · OpenAI dots 2026": "own cloud computer → your goals → 24/7". The hook's "HOW?" card returns with a teal check | payoff (how), BEFORE vs NOW side by side |
| 20 | 44.60-46.30 | "computer, working toward your goals." | Board, the NOW half: the three nodes light teal one by one on "computer", "working", "goals" | payoff (how) |
| 21 | 46.30-48.55 | "What risk? Away, it only reads;" | Board, a row under NOW: "WHAT RISK?" card with a teal check; "away: read-only" with an eye icon | payoff (risk) |
| 22 | 48.55-50.75 | "it asks before sensitive steps." | Shop: the dot holds up a note "Send? YES / NO" to the mascot; label "ASKS FIRST" | payoff (risk) |
| 23 | 50.75-53.10 | "It still makes mistakes, so check its work." | The mascot looks over an invoice with a magnifying glass; the dot waits beside him; label "CHECK ITS WORK" | payoff: honest limit |
| 24 | 53.10-56.80 | "The shop never closes now, but the keys are still yours." | Wide shop at night, lights on, the dot working at its desk, the mascot at the door with the keys; dimmed behind the takeaway card: line 1 off-white "The shop never closes now," at 53.3; line 2 amber "but the keys are still yours." at 54.8 | close: takeaway tied to the story |
| 25 | 56.80-60.00 | "Subscribe for the next one." | The mascot waves; the red Subscribe button pops at 56.95 and pulses; no "Next" line (no next episode decided). 0.45 s fade-out | close: one ask |

## On-screen words and their sources
"CHATGPT · AGENT MODE (2025)", "1 ASK = 1 TASK", "waiting...": the agent post (`research.md`, Before). "OPENAI DOTS · DEVDAY, SEP 29, 2026", "24/7", "ITS OWN CLOUD COMPUTER", "YOUR GOALS",
"READ-ONLY", "LEARNS FROM FEEDBACK", "ASKS FIRST", "ALWAYS YOURS", "CHECK ITS WORK": the dots post (`research.md`, New). The invoice is OpenAI's own example.
"get paid on time", "answer customers", the parcel, the box and the shop are invented examples inside the analogy (said so in the description).
