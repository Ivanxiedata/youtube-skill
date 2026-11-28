# Beats: claude-dreaming (workflow step 3)

Written 2026-11-28 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Claude Dreaming: Why AI Agent Memory Can Be Wrong (2026)"** + thumbnail **"LEARN ANTHROPIC'S CLAUDE DREAMING IN 60 SECONDS"**. The hook sells the viewer's moment (an agent's memory is notes it wrote itself; one wrong note costs you the same mistake again), the tech (dreaming: rereading past sessions beside the notes) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt` (126 spoken words after gate round 2). The renderer times every cut from the real `vo_lines.json` and the measured pauses; the film ends at 60.0 s at most. A blank line in `film/script.txt` is a beat change: the picture holds about 1.5 s there (L94).

**The story everyone knows (lesson L3, gate G13): class notes fixed from the lecture recording** (`research.md` rows S1-S3). Notes written fast in class are a first draft (S1); after class you go back to the recording and fix them (S2, S3).
The mascot is the student (coral hoodie, amber backpack strap, amber pencil). Before: you study from the first draft; one wrong line and the mistake repeats (our example). Now: a good student fixes the notes from the recording; dreaming does that for an agent: Claude rereads past sessions (the recording) beside its notes and writes a clean copy.
Where it stops (`research.md`): a dream writes a new store and never modifies the old one; it reads 1 to 100 whole sessions and costs tokens and time; it "can" fix notes; it is a job you start, not nightly sleep; the wrong line is our example.

The flow the owner chose (lesson L25): **one counted example, the ledge in Anthropic's Pokémon test**, from the hook's "1 WRONG NOTE" to the close;
a **meter "DROPS OFF THE LEDGE"** that ticks 1, 2, 3 in BEFORE (row 15) and holds at 3 in NOW while Claude walks through the cave to "REACHED THE NEXT CITY" (row 17); the meter's state is tied to the robot's drops in the drawing (each tick lands on the frame the robot lands), never to the tab (L34);
**the how on one diagram that grows** ("PAST SESSIONS" -> beside "ITS NOTES" -> a highlight sweeping both and stopping on the wrong note -> "CLEAN COPY" with that note fixed) with a highlight on what the voice names;
the proof is **Anthropic's own test** (rows 15-17), named "ANTHROPIC'S POKÉMON TEST".

Colours (`docs/brand.md`, lesson L88): ground dusk purple `#120C22` -> `#2A1C46`, one warm light behind the mascot; robot (Claude the agent): off-white body, teal `#2DB2AE` screen head (visibly AI, casting rule); notebook pages off-white `#F8E9CC` with grey `#8C8299` lines; the wrong note and the meter's 3 in amber `#FFC66E`; fixed notes, the NOW tab, the highlight and "REACHED THE NEXT CITY" stamp in teal; the BEFORE tab amber; mountain grey `#5A4E73`, the ledge a darker step; the mascot's backpack strap and pencil amber; text off-white `#F8E9CC` outlined `#120A1C`. Red `#E4493F` only on the "IN 60 SECONDS" sticker and the Subscribe button (marks on the test paper are amber, never red).

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33): every draft had "you", a digit, a stakes word (never, cost) and a curiosity word (but, why) before scoring.
Every one opens with the topic's name (lesson L14), in one sentence with the hook (lesson L16). Picked by the 3-second test (lesson L16), then the score. Numbers as digits here, as words in `film/script.txt`.

### 1 (chosen) 79 STRONG (formula: The Question)
"Claude dreaming, Anthropic's memory cleanup: you never check AI agents' notes, but why can 1 wrong note cost you?" (19 written words; 20 spoken with "A I" as two; L46)
```
`hookscore.py --hook`: VERDICT 79 STRONG, formula The Question
```
3-second test: someone who knows no AI tech hears "AI agents keep notes I never check, and one wrong note can cost me; this is about Claude dreaming, a memory cleanup". The topic is the first words; no architecture word; it names the step it corrects, checking (L89); it ends on a question the story answers at once ("Here's why"), not "but how?" (L31).
Source: "a note that's wrong from the start or that drifts as the environment changes can be read, and trusted, by Claude in a later session" (row 11); "one wrong note" cost three drops (row 15).
Panels: title card; then the robot writing in "AGENT'S NOTES" while the mascot walks past; then one line turning amber, "1 WRONG NOTE".

### 2 (runner-up) 81 STRONG
"Claude dreaming, Anthropic's memory cleanup: you never check what AI agents wrote, but why can 1 wrong note cost you?" (20 written, 21 spoken)
Why 1 over 2: 21 spoken words is over the 20-word line-1 cap (L46); "notes" also sets up the story's word.

## Beats (times are planned; the build times every cut from `vo_lines.json`)
| # | time | spoken (film/script.txt) | ON SCREEN | purpose |
|---|---|---|---|---|
| 1 | 0.0-1.3 | "Claude dreaming," | Title card: "LEARN ANTHROPIC'S" / amber "CLAUDE DREAMING" / red sticker "IN 60 SECONDS"; cut on the measured pause after "dreaming" (L36) | hook |
| 2 | 1.3-4.6 | "Anthropic's memory cleanup: you never check A I agents' notes," | Desk at dusk; robot (teal screen head) writing in a notebook "AGENT'S NOTES"; mascot walks past without looking; push to 1.1 | hook |
| 3 | 4.6-7.0 | "but why can one wrong note cost you?" | Close on the page: grey lines; one line cross-fades to amber (0.6 s); tag "1 WRONG NOTE" eases in | hook |
| 4 | 7.4-9.6 | "Here's why: class notes, scribbled fast." | Classroom: board with chalk lines; mascot at a desk scribbling fast | turn |
| 5 | 9.6-12.0 | "One wrong line, and the mistake repeats." | Notebook page with one amber line; a test paper beside it with the same amber answer and an amber X; tag "SAME MISTAKE" | beat (before, story) |
| 6 | 13.5-15.5 | "An agent's memory is notes it wrote itself." | Amber tab "BEFORE"; robot writing in its notebook "AGENT'S NOTES"; card "MEMORY = NOTES IT WROTE ITSELF" | beat (before) |
| 7 | 16.4-18.4 | "In Anthropic's Pokemon test," | Game map from above: grey mountain with a cave mouth, a path and a step ledge; tag "ANTHROPIC'S POKÉMON TEST"; robot by the cave holding a note card stamped amber "WRONG NOTE"; meter "DROPS OFF THE LEDGE" at 0 on the right | beat (before, proof) |
| 8 | 18.4-20.6 | "Claude kept trusting one wrong note:" | Robot reads its note card, walks the path, hops off the ledge, lands on the route below, reads the card again, walks the same way; meter ticks 1, then 2, each on the landing frame | beat (before, meter) |
| 9 | 20.6-22.6 | "three drops back the way it came." | Third drop, landing on the route it came from; tag "BACK THE WAY IT CAME"; meter ticks to 3 and glows amber | beat (before, meter) |
| 10 | 23.5-26.0 | "Good students fix theirs from the recording." | Teal tab "NOW"; mascot at home, laptop playing the class (play bar moving); old notebook left, new notebook right; the amber line rewritten as a teal line | beat (now, story) |
| 11 | 26.4-29.8 | "Dreaming, a research preview in the Claude Managed Agents service, does that." | Card with a small crescent moon: "DREAMING" / "RESEARCH PREVIEW" / "CLAUDE MANAGED AGENTS: A SERVICE THAT RUNS AGENTS" (rows 2, 23); card grows slowly | beat (now) |
| 12 | 30.0-32.4 | "Claude rereads past sessions beside its notes," | Diagram: page stack "PAST SESSIONS" left, notebook "ITS NOTES" right; teal highlight sweeps down the pages, then the notes, stops on the amber wrong note | beat (how) |
| 13 | 32.4-34.4 | "and writes a clean copy." | Arrow from both into a new notebook "CLEAN COPY": neat lines, the wrong note now teal with a check; "ITS NOTES" stays where it was (the old store is kept, row 5) | beat (how) |
| 14 | 35.4-36.6 | "Note fixed," | Game map again, tag "ANTHROPIC'S POKÉMON TEST"; the robot's note card: "WRONG NOTE" stamp cross-fades away (0.6 s), teal check; meter still at 3 | beat (proof, now) |
| 15 | 36.6-39.4 | "Claude reached the next city, Anthropic says." | Robot walks into the cave mouth, out the far side to small houses; teal stamp "REACHED THE NEXT CITY"; the meter does not move | payoff |
| 16 | 41.5-43.0 | "So, what we learned:" | Card "WHAT WE LEARNED" | takeaway |
| 17 | 43.0-47.8 | "notes can be wrong; rereading turned the test's three drops into the next city." | Tag "ANTHROPIC'S POKÉMON TEST"; two mini panels: meter at 3 "DROPS OFF THE LEDGE" -> the city "REACHED THE NEXT CITY" (same state as shots 9 and 15, L38); two-line card "NOTES CAN BE WRONG." / amber "REREADING CAN FIX THEM." | takeaway (payoff said) |
| 18 | 48.0-52.0 | "Want more? Subscribe, and comment what we should explain next." | Red "SUBSCRIBE" button + comment button; mascot waves; nothing under them (L24) | close |

Shot 17 runs over 4 s of voice: the make step splits it in two at the ";" pause (17a the "NOTES CAN BE WRONG." card, 17b the panels and the amber line) so no shot passes 5 s (L1).

## The parts, in one line each
- The wrong note: one amber line, "1 WRONG NOTE" (shot 3), "WRONG NOTE" (shot 7).
- The meter: "DROPS OFF THE LEDGE", 0 -> 3 in BEFORE, held at 3 in NOW.
- The diagram: "PAST SESSIONS" beside "ITS NOTES" -> "CLEAN COPY".
- The proof: "ANTHROPIC'S POKÉMON TEST": three drops (row 15) -> "REACHED THE NEXT CITY" (row 17).
