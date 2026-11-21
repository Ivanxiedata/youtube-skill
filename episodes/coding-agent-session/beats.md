# Beats: coding-agent-session v2

Step 3 of `docs/workflow.md` (`/yt-script`, scaled to 60 s). The renderer builds `film/film.js` from this file: every row's ON SCREEN is a shot to draw.
Title (from `package.md`): **Coding Agent vs Chatbot: 1 Loop, 4 Steps**. Thumbnail and title card: **LEARN / CODING AGENTS / IN 60 SECONDS**.

## The hooks (7 written, scored with `hookscore.py`; top two below, both 100)

**Chosen:** the first sentence of `script.md`, as written there (digits, so `hookscore.py` reads the numbers; the voice says them as words, see the timing note):

```
  Coding agents, 60s: before, you paste your chatbot's code and never stop, but how does 1 agent loop 4 steps until you're done?
    SPECIFICITY  100    ADDRESS  100    STAKES  100    CURIOSITY  100    BREVITY  100
    VERDICT      100  STRONG
    formula      The Question  (1 pattern matched)
```
- Formula: hookscore classifies it as **The Question** (it ends on the viewer's question); its shape is **Before and After** (the formula in `hooks.json`: "two states, one cut between them"). It fits because the episode is a before vs now: the before is said ("you paste your chatbot's code and never stop"), the after is asked ("1 agent loop 4 steps until you're done"), and the video answers it out loud at 36.5 s.
- Owner's rules: topic first ("Coding agents, 60s"); before -> after stated; true numbers only (60s = the video's length, 1 agent, 4 steps = read, edit, run, check: `research.md` "Numbers said in the video"); score 100.
- Confirms the title: "chatbot" and "1 loop, 4 steps" are the title's promise; the thumbnail's "LEARN CODING AGENTS IN 60 SECONDS" is the first five spoken words.

**Runner-up:** the owner-approved v1 hook, also 100:
```
  Coding agents, 60s: why do you lose hours, never stop pasting your code, but how can 1 agent loop 4 steps until you're done?
    SPECIFICITY  100    ADDRESS  100    STAKES  100    CURIOSITY  100    BREVITY  100
    VERDICT      100  STRONG
    formula      The Mistake  (1 pattern matched)
```
Not chosen because "you lose hours" is a claim about the viewer with no source in `research.md` (the judge's row 12), and it never names the chatbot, the "before" that the new title promises.

Also scored (not kept): "Coding agent vs chatbot, 60s: you never stop pasting your code before it works, but how does 1 agent loop 4 steps for you?" 96 (no "you" in the first six words);
"Coding agents, 60s: before, your chatbot only talked; now 1 agent reads, edits, runs and checks your code in 4 steps until done." 73 (a summary: no question left);
"Coding agents, 60s: what if your chatbot stopped talking and fixed your code itself, in 1 loop of 4 steps?" 61; "Why do you paste your chatbot's code, run it and carry the error back, when 1 coding agent loops 4 steps for you in 60s?" 61 (topic not first);
v1 cut 2's "Coding agents, explained: you would never fix your car with the mechanic on the phone, but that is how you use an AI chatbot." 58.

Spoken form (`film/script.txt`): "Coding agents, in sixty seconds: before, you paste your chatbot's code and never stop, but how does one agent loop four steps until you're done?"
hookscore gives the spoken form 63 because it only counts digits as numbers. Score the written form in `script.md`, as v1's evaluation did.

## Timing
Voice: `tts.py film film/script.txt --voice am_michael --speed 1.2 --no-align` (already run; `film/vo.wav`, `film/vo_lines.json`, `film/align_est.json` are in `film/`).
21 lines, 179 words, the voice is 58.21 s long and its last word ends at 57.91 s. Lay it in at **0.08 s**, as v1 did: the voice ends at **57.99 s** of film, and the film ends at **59.9 s** (at most 60).
Times below are **film time** (voice + 0.08). Line starts and ends are exact (`vo_lines.json`); times inside a line come from `align_est.json` (estimated), so cut on the nearest word start.
A new shot about every 2 to 3 s (lesson L1): 27 shots, 2.2 s average. Put a sound on every cut (v1 had 5 cuts with no sound: an earshot should-fix).

## Places and characters (reuse v1's `film.js`)
- **Garage** (the story): v1's `drawGarage`: the cream car with the hood up and the code in the engine bay, the phone on a stand (`phone()`), the red `toolbox()`, smoke, pendant lights, the window at dusk.
- **Studio** (today's screen): v1's `drawStudio`: the desk and monitor with `win()` windows: "AI chat" and "your code" (before), one "terminal" (now).
- **Board** (the side-by-side diagram): v1's `drawBoard`, relabelled as below.
- **Mechanic** = the mascot: HERO (cream face, coral hoodie) wearing the teal mechanic's cap (`cap()` after `actor()`). **You** = FRIEND (dark face, yellow hoodie), the car's owner.
- Corner tag on every frame from frame 0: **"Coding agents · 60s"** (v1 said "Coding-agent session").
- On-screen text never shows a number except the sourced counts (1 agent, 1 loop, 4 steps). Drop v1's "3 files", "1 failed" and "line 42". The example words ("fix the failing test", "Error: it still fails", "passed") are invented examples and must be named as such in the description (`research.md`).

## Beats (film time; S = shot)
| S | Time | Spoken (voice span) | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.00-2.10 | "Coding agents, in sixty seconds:" (0.08-2.04) | Full-screen title card, as v1's `title()`: dusk-purple ground, small off-white "LEARN", huge amber "CODING AGENTS" (Impact), the red tilted sticker "IN 60 SECONDS". Corner tag from frame 0, no fade-in | hook: topic first |
| 1 | 2.10-5.25 | "before, you paste your chatbot's code and never stop," (2.04-5.25) | Studio, close on the monitor. Top-left chip "BEFORE: CHATBOT". Left window "AI chat": a reply bubble of code bars. A code token (amber outline) lifts off the reply and flies into the right window "your code" (key sound on landing); the output flashes red; a red token flies back to the chat. The round trip runs 3 times, faster each time; FRIEND's head and shoulders in the left foreground, wearier each trip | hook: the before |
| 2 | 5.25-7.57 | "but how does one agent loop four steps" (5.25-7.57) | Split screen. Left half: shot 1, dimmed and grey, still looping. Amber "vs" in the middle. Right half, board ground: a teal node "CODING AGENT" with the mechanic's avatar (cap), ringed by four chips READ, EDIT, RUN, CHECK joined by arrows. On "one agent" the node pops with a badge "1 AGENT"; on "loop" the ring arrow draws round; on "four steps" the 4 chips light in turn (a tick each). Top chip across both halves: "CHATBOT vs CODING AGENT" | hook: the after; shows the payoff exists |
| 3 | 7.57-9.15 | "until you're done?" (7.57-8.70) | Push in on the right half: the ring goes round once more, CHECK becomes a teal tick (good sound), then a big amber "?" pops beside the ring and stays | hook: the open question |
| 4 | 9.15-11.90 | "Here's how, in one story: a mechanic." (9.20-11.42) | Garage, wide (establishing): the car with the hood up and a curl of smoke, FRIEND beside it holding a wrench, the phone on its stand by the wall showing the mechanic's face in the teal cap. Top chip: "one story: your car and a mechanic" | turn |
| 5 | 11.90-14.60 | "A chatbot is the mechanic on the phone." (12.37-14.45) | Garage, close on the phone: the mechanic's face on the screen, talking. Top chip: "chatbot = the mechanic on the phone" | beat: before (story) |
| 6 | 14.60-16.05 | "He can only talk." (14.75-15.85) | Garage, two-shot: the phone left, FRIEND right holding the wrench. Speech bubbles from the phone: "try this", "now tighten it". The phone mechanic has no hands in frame; FRIEND shrugs | beat: before (story) |
| 7 | 16.05-17.95 | "So you paste his fix, run it," (16.15-17.79) | Studio, the monitor: left window "AI chat" (the mechanic's avatar on the reply), right window "your code". A code token flies chat -> code (paste); FRIEND presses a key (key sound); the "output" panel runs. Top chip: "you paste, you run" | beat: before (today) |
| 8 | 17.95-20.40 | "and carry the error back to him." (17.79-19.60) | Same monitor, closer: the output turns red: an X `mark()` + "Error: it still fails" (bad sound); a red "error" token flies from your code back into the chat window; FRIEND's face tired. Top chip: "you carry the error back" | beat: before (today) |
| 9 | 20.40-22.55 | "A coding agent is the same mechanic," (20.55-22.55) | Garage: the phone screen goes dark; the mechanic walks in from the left, same face, same cap (steps sound). Top chip: "coding agent = the same mechanic" | beat: new (story) |
| 10 | 22.55-24.45 | "in your garage, with tools." (22.66-24.26) | Garage, medium: he sets the red toolbox down by the car (box sound) and picks up the wrench. Chip at the bottom: "with tools" | beat: new (story) |
| 11 | 24.45-27.35 | "You give it one job, in your terminal or editor." (24.56-27.18) | Studio: the monitor now holds ONE window, "terminal", and no chat window. FRIEND types "fix the failing test" (key sounds), then Enter. Top chip: "one job". Small label under the window: "terminal or editor" | beat: new (today) |
| 12 | 27.35-28.80 | "It reads your files." (27.48-28.62) | Garage, medium-close: the mechanic leans into the engine bay and looks; the code bars in the bay light up as he reads. Chip bar along the bottom: READ -> EDIT -> RUN -> CHECK, READ lit (tick) | beat: the loop, step 1 |
| 13 | 28.80-30.10 | "It edits the code." (28.91-29.89) | Close on the engine bay: the wrench turns a bolt (ratchet sound), one code bar changes colour. EDIT lit | beat: step 2 |
| 14 | 30.10-32.25 | "It runs a command, and checks the result." (30.19-32.04) | Garage, medium: he turns the key (engine sound), the car shakes, he leans an ear to the hood. RUN lit, then CHECK lit | beat: steps 3 and 4 |
| 15 | 32.25-33.40 | "Still broken?" (32.34-33.20) | Close: the engine coughs (cough sound), smoke puffs, the CHECK chip turns red with an X (bad sound). Top chip: "still broken?" | beat: the check fails |
| 16 | 33.40-36.30 | "It goes around again, until the job is done." (33.50-35.98) | Garage, wide: the chip bar's arrow loops back to READ and runs READ -> EDIT -> RUN -> CHECK fast (4 ticks); the smoke stops, the engine purrs, a teal tick over the hood (good sound). Chip: "until done" | beat: the loop closes |
| 17 | 36.30-38.15 | "That's the answer I promised:" (36.48-37.95) | Board, wide, the side by side. Left column "BEFORE: CHATBOT": Chatbot -> You -> Your code, arrows "only text", "paste, run", "error", "ask again"; side tags "the mechanic on the phone", "the messenger", "the car". Right column "NOW: CODING AGENT": You at the top, arrow "one job" down to the Coding agent node (mechanic avatar) in the middle of the ring READ files, EDIT code, RUN commands, CHECK result (each tagged NEW); side tag "in your garage". Top chip: "THE ANSWER" | payoff: said and shown |
| 18 | 38.15-40.30 | "one agent, one loop, four steps." (38.19-40.07) | Board, push in on the right column: on "one agent" the agent node pops with "1 AGENT"; on "one loop" the ring arrow draws round, "1 LOOP"; on "four steps" a "4 STEPS" badge pops (a tick each) | payoff: the hook's numbers |
| 19 | 40.30-41.90 | "Read, edit, run, check." (40.37-41.64) | Same framing: the four ring nodes light in turn, one per word (4 ticks); the return arrow CHECK -> READ is labelled "until done" | payoff: the hook's 4 steps |
| 20 | 41.90-43.95 | "The whole visit is one session." (41.94-43.56) | Board, pull back to the whole right column: a dashed amber box draws around You, the agent and the ring, labelled "ONE SESSION"; under it a thin transcript strip appears: "every step · every result" | payoff: the session |
| 21 | 43.95-45.65 | "You stop being the messenger." (44.06-45.48) | Board, push to the left column: the BEFORE "You" node (tag "the messenger") flashes red and fades out; on the right, You stays outside the ring at the top. Top chip: "you stop being the messenger" | beat: why it matters |
| 22 | 45.65-48.60 | "You watch, and you can stop it at any moment." (45.78-47.86) | Garage, wide: FRIEND watches. On "stop" he raises a hand, bubble "wait!"; the mechanic freezes mid-turn, nods, then carries on. Chip: "you can stop it at any moment" | beat: why it matters |
| 23 | 48.60-51.40 | "It can still be wrong, so give it a test to run." (48.81-51.24) | Studio, the terminal: a row "run the tests" -> red "failed" (bad sound); the four chips flick round in the corner of the window -> the row turns teal "passed" (good sound). Chip: "give it a test to run" | close: the honest limit |
| 24 | 51.40-53.65 | "The mechanic did not get a bigger brain." (51.54-53.42) | Garage, close on the mechanic, smiling, tapping his cap with one finger. Takeaway card, line 1 (off-white): "It didn't get a bigger brain." | close: takeaway tied to the story |
| 25 | 53.65-56.45 | "He got hands, and a way to check his own work." (53.72-56.09) | Garage, wide: the fixed car with a teal tick, the mechanic holding up the wrench, FRIEND smiling. Takeaway card, line 2 (amber): "It got hands, and a way to check." | close: takeaway tied to the story |
| 26 | 56.45-59.90 | "Subscribe for the next one." (56.59-57.99) | The same wide shot held, the takeaway card stays on. The red Subscribe button pops in at the bottom centre (click sound); under it "Next in 60 seconds: what are Agent Skills?"; hold to the last frame | close: the one ask |

## Checks against `docs/workflow.md` step 3
- Hook 100 (written form), topic first, before -> after, true numbers: see above.
- Turn by about 10 s: "Here's how, in one story: a mechanic." 9.20-11.42 s, says what the video does (shows how, through one story); no channel intro, no subscribe pitch before it.
- One idea per beat, something to look at on every beat: 27 shots, every one drawn above.
- BEFORE vs NEW side by side: the board, shots 17-21 (and the teaser split screen, shot 2).
- Payoff said out loud and named as the payoff: "That's the answer I promised: one agent, one loop, four steps. Read, edit, run, check." (36.48 s), on the board.
- Close: the takeaway tied to the story (the mechanic's brain vs his hands), then exactly one ask ("Subscribe for the next one."), then the end-card line on screen.
- Length: 179 spoken words (about 170 asked; the four steps are each said once in the garage and once in the payoff); the voice ends at 57.99 s of film.
