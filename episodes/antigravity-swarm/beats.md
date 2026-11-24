# Beats: antigravity-swarm (workflow step 3)

Written 2026-11-24 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Antigravity Swarm: Watch 3 Agents Code 3 Files at Once"** + thumbnail **"LEARN ANTIGRAVITY SWARM IN 60 SECONDS"**. The hook sells the viewer's moment (your 3 files coded at once, tested before you look);
the tech (the coordinator, named workers, a verifier, one shared board) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. Times are **draft film seconds** from a draft voice of these words
(am_michael, speed 1.2, `--no-align`, laid in at 0.5 s: 54.53 s of voice after the claim-check fixes, ends at 55.03 s film); inside a line the cut is estimated, and the renderer re-times every cut to the real `vo_lines.json`.

The flow the owner chose (lesson L25): **one counted example, the maker's own: 3 API files (users, orders, products)**, from the first beat to the last; a **meter "YOUR WAITS"**
that counts one WAIT = one stretch where you sit and wait for the agent: it climbs 1, 2, 3 in BEFORE (ticking as each file's turn ends) and stays at 1 in NOW (one stretch while all three work at once, the verifier inside it); same bar, same label, tag "OUR EXAMPLE" under it (`claims.md` rows 24, 47, L34); **the how on one diagram that grows** (your chat -> the coordinator -> 3 named workers -> the verifier -> the shared board) with a highlight on what the voice names;
the proof is the maker's own words (no maker number exists: no speed-up, no time saved; `research.md`, narrowing), plus the honest catch (quota, splits cleanly).

## Hooks
Written against `.claude/skills/yt-script/hooks.json`, 15 in three rounds, scored with `hookscore.py` (word lists read first, digits in the scored text, L33). Every one opens with the topic's name (L14). Picked by the 3-second test (L16), then the score. The voice says "three".

### 1 (chosen, after the claim check) 83 STRONG
"Antigravity Swarm: you think 3 separate files cost you 3 waits, but actually 3 agents code them at once, and usually another tests them before you look."
```
VERDICT      83   STRONG
```
Rewritten after the claim check (`claims.md` row 4, narrower): the first version "... and another tests them before you look." (84) stated the verifier as given; the maker says the coordinator "usually adds a `@verifier`". Re-scored after the fix (L26): 83.
3-second test: the topic first, then the belief it corrects (three files = three waits, one after another) and the outcome (three agents at once, usually a fourth tests before you see it). No architecture word. Not a "but how?" ending (L31).
Condition in the words (L26): "separate files" (the task splits cleanly, `research.md` row 2); "usually another tests them" (row 8). "before you look" = row 2 "before you see them".
Panel: the title card, then three file cards USERS, ORDERS, PRODUCTS, the meter "YOUR WAITS" climbing to 3; then three teal robots typing at once and a fourth stamping ticks.

### 1 (first version) 84 STRONG
"Antigravity Swarm: you think 3 separate files cost you 3 waits, but actually 3 agents code them at once, and another tests them before you look." (narrower, `claims.md` row 4)

### 2 (runner-up) 85 STRONG
"Antigravity Swarm: you think 3 files cost you 3 waits, but actually 3 agents code them at once, and another tests them before you look."
Why 1 over 2: 2 drops "separate" (the task splits cleanly) and "usually"; the points are not worth an overclaim.
Panel: the same.

### All hooks scored
| Score | Formula (tool) | Hook | Note |
|---|---|---|---|
| 85 | The Warning | Antigravity Swarm: you think 3 files cost you 3 waits, but actually 3 agents code them at once, and another tests them before you look. | drops "separate" |
| 83 | (re-scored) | **Antigravity Swarm: you think 3 separate files cost you 3 waits, but actually 3 agents code them at once, and usually another tests them before you look.** | chosen, after the claim check |
| 83 | (re-scored) | ... "and another can test them before you look." | |
| 84 | The Warning | Antigravity Swarm: you think 3 separate files cost you 3 waits, but actually 3 agents code them at once, and another tests them before you look. | first choice; narrower (`claims.md` row 4) |
| 83 | The Warning | ... "and a 4th tests them before you look." | "a 4th" reads as always |
| 76 | | Antigravity Swarm: you think 1 agent costs you 3 waits for 3 files, but actually 3 agents take them at once, before you test anything. | |
| 74 | | Antigravity Swarm: you think 3 files cost you 3 waits, but actually 3 agents take 1 each at once, while you watch. | |
| 73 | | Antigravity Swarm: you think 3 files mean 3 waits, but actually 3 agents code them at once, and you never wait in line. | "never wait" overclaims |
| 73 | | Antigravity Swarm: you think 3 files cost 3 waits and 3 test runs, but actually 3 agents code them at once while you watch. | |
| 71 | The Impossible Claim | Antigravity Swarm: you think 1 agent has to code your 3 files one by one, but actually 3 agents split them and you never wait in line. | |
| 61 | Unclassified | Antigravity Swarm: you think 1 agent must take your 3 files one by one, but actually 3 agents take them at once, while you watch. | |
| 60 | The Impossible Claim | Antigravity Swarm: you think 1 agent has to code 3 files one after another, but actually 3 agents now split them, and a 4th runs the tests. | |
| 60 | The Warning | Antigravity Swarm: stop testing every change yourself; 3 agents split your task at the same time, and a verifier runs the tests. | |
| 58 | Unclassified | Antigravity Swarm: you think coding agents work alone, but actually 3 of them can split your task, and you watch them talk on 1 board. | |
| 58 | The Warning | Antigravity Swarm: stop waiting on 1 agent for 3 files; actually, 3 agents take them at once, and you watch them talk. | |
| 56 | Unclassified | Antigravity Swarm: you type 1 command, and 3 agents split your coding task at the same time, while a 4th runs the tests before you see it. | |
| 47 | The Mistake | Antigravity Swarm: you think 1 coding agent must do your 3 files one by one, but now 3 agents work at the same time, and you never run the tests. | too long; "never run the tests" overclaims |

## The parts, in one line each
- **Hook (0.0-9.9 s):** the sentence above; title card from frame 0; three file cards; the meter climbing; three robots at once; usually a fourth stamping ticks.
- **Turn (9.9 s):** "Here's what changed." Then it does it, on the 3 files.
- **Before, the pain as a scene (11.4-17.9 s):** one robot takes the files in turn; the meter ticks as each file's turn ends; the mascot presses "RUN TESTS" himself.
- **Now, the same scene + the how on one growing diagram (17.9-36.0 s):** "/swarm" typed; the chat becomes the COORDINATOR; three workers, one per file, all at once; usually a verifier runs the tests and sends a problem back to the coder; the shared BOARD under them with posts; "LIVE"; the meter stays at 1.
- **Why / the catch (36.0-41.5 s):** "WORKS BEST WHEN THE TASK SPLITS CLEANLY"; a quota bar draining fast "USES QUOTA MUCH FASTER"; "PREVIEW". Who gets it (all plans, App and CLI, business and enterprise when the admin allows) is in the description only: the spoken line was cut for time after the claim fix.
- **Close (41.5-56.5 s):** "WHAT WE LEARNED" card with the meters 3 vs 1; the takeaway card; Subscribe + comment.

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) wearing a small white **chef's hat** (the kitchen-rush story: you're the head of a small kitchen), at a laptop desk.
- **The AI = robots with teal (`#2DB2AE`) screen heads** (visibly AI, brand casting): before, one robot labelled "AGENT"; now, three robots "@USERS", "@ORDERS", "@PRODUCTS" and one "@VERIFIER" with a tick on its screen. The worker names are ours (the docs name no workers for this example; their style follows `@parser`, `@api-tests`, row 6). The coordinator is a chat window that grows a small chef's hat (the head chef) labelled "COORDINATOR · YOUR CHAT".
- **Props:** three file cards "USERS", "ORDERS", "PRODUCTS" (grey code lines, plain words, no logos); a "RUN TESTS" button; the chat box with "/swarm"; the board as an order-ticket rail: a wide dark panel "SHARED BOARD" with post rows "@ORDERS: QUESTION", "@VERIFIER: TEST RESULTS".
- **The meter "YOUR WAITS"**, right side of the frame in every BEFORE and NOW shot: a vertical bar with ticks 0, 1, 2, 3 and a big whole-number counter on top, tag "OUR EXAMPLE" under it; amber fill in BEFORE, teal in NOW. One WAIT = one stretch where you wait for the agents: BEFORE ticks when each file's turn ends; NOW one stretch for all three.
- **Places:** D the desk; X the swarm diagram; C the catch cards; K the closing cards.
- Every frame: corner tag "Antigravity Swarm · 60s" top-left. BEFORE tab amber, NOW tab teal, red for the sticker and Subscribe.

## Shots
22 shots in about 56.5 s, 2.6 s on average, plus highlight moves inside shots 10-15 (L1). Cuts on word boundaries (draft film seconds of the final words, estimated inside a line).

| # | Film time (s) | Spoken | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 0.0-1.6 | "Antigravity Swarm:" | Full-screen title card from frame 0, no fade: small off-white "LEARN", huge amber "ANTIGRAVITY SWARM", tilted red "IN 60 SECONDS"; corner tag on | hook: topic first (L14) |
| 1 | 1.6-3.3 | "you think three separate files" | Three file cards ease in side by side with clear gaps: "USERS", "ORDERS", "PRODUCTS"; slow push | hook: the counted example |
| 2 | 3.3-4.5 | "cost you three waits," | The meter "YOUR WAITS" eases in on the right and counts 1, 2, 3 (amber), "OUR EXAMPLE" under it | hook: the belief |
| 3 | 4.5-7.1 | "but actually three agents code them at once," | Three teal-headed robots ease in, one above each file card, all typing at once; code lines grow on all three cards together | hook: the outcome |
| 4 | 7.1-9.9 | "and usually another tests them before you look." | A fourth robot with a tick on its screen eases in; a teal tick cross-fades onto each card (0.5 s each); small tag "USUALLY: A VERIFIER" | hook: the moment |
| 5 | 9.9-11.4 | "Here's what changed." | Wide desk: the mascot in a chef's hat at the laptop; lower card "3 FILES · 1 TASK" | turn |
| 6 | 11.4-12.9 | "Before, one agent took" | Amber tab "BEFORE"; one robot "AGENT" beside the three cards; the meter at 0 (amber) | before: your scene |
| 7 | 12.9-15.1 | "users, orders and products in turn;" | The robot slides to USERS, then ORDERS, then PRODUCTS; each card lights amber in turn (0.5 s cross-fades); the meter ticks 1 as USERS ends, 2 as ORDERS ends; label "ONE AT A TIME" | before: in turn, it adds up |
| 8 | 15.1-17.9 | "after each, you ran the tests yourself." | PRODUCTS ends: the meter lands on "3"; the mascot presses a "RUN TESTS" button himself; label "3 WAITS" | before: the pain, counted |
| 9 | 17.9-20.4 | "Now, in preview, you type slash swarm," | Teal tab "NOW"; a chat box, the text "/swarm add validation to 3 files" types in; small tag "PREVIEW"; the meter at 0, teal | now: same scene |
| 10 | 20.4-22.7 | "and your chat becomes the coordinator:" | Diagram starts: the chat box shrinks to the top and gets a chef's hat; label "COORDINATOR · YOUR CHAT"; highlight amber on it | how: piece 1 |
| 11 | 22.7-25.9 | "it gives each file its own worker, at the same time," | Three robots grow in under it, "@USERS", "@ORDERS", "@PRODUCTS", each over its card, all typing at once; highlight moves to them; the meter goes to 1 and stays | how: piece 2, the counted example |
| 12 | 25.9-28.6 | "plus, usually, a verifier that runs the tests" | A fourth robot "@VERIFIER" eases in at the right; tag "USUALLY · RUNS THE TESTS"; highlight moves to it | how: piece 3 |
| 13 | 28.6-31.3 | "and sends problems back to the coder." | An arrow from @VERIFIER to @ORDERS with a small card "PROBLEM: BACK TO THE CODER"; @ORDERS types, its card gets a teal tick | how: the loop |
| 14 | 31.3-34.2 | "They all talk on one shared board you can watch:" | A wide panel "SHARED BOARD" grows in under the robots; lines from every robot to it; a small "LIVE" dot pulsing; the mascot watching | how: piece 4, you see it |
| 15 | 34.2-36.0 | "questions, test results." | Post rows slide in one by one: "@ORDERS: QUESTION", "@VERIFIER: TEST RESULTS"; highlight on each | how: what is on the board |
| 16 | 36.0-38.9 | "The catch: it works best when a task splits cleanly," | Card "THE CATCH"; the three file cards with clean gaps between them; tag "WORKS BEST WHEN THE TASK SPLITS CLEANLY"; slow push | why: the condition |
| 17 | 38.9-41.5 | "and it uses your quota much faster." | A "QUOTA" bar drains fast while four robot heads glow; label "USES QUOTA MUCH FASTER"; small tag "PREVIEW" | why: the honest cost |
| 18 | 41.5-45.0 | "So, what we learned: three files used to mean three waits;" | Top card "WHAT WE LEARNED"; side by side: left "BEFORE" the meter "YOUR WAITS" at 3 (amber), right "NOW" the same meter at 1 (teal); label "SAME 3 FILES" | close: the conclusion |
| 19 | 45.0-48.4 | "now, when the task splits, three agents take them at once," | The three robots over the three cards, all typing; tag "WHEN THE TASK SPLITS" | close: the after |
| 20 | 48.4-51.0 | "and usually a verifier tests first." | Takeaway card: line 1 off-white "3 FILES, 3 AGENTS, AT ONCE", line 2 amber "USUALLY, A VERIFIER TESTS FIRST", small line "WHEN THE TASK SPLITS · PREVIEW" | close: the takeaway, the promise delivered out loud |
| 21 | 51.0-56.5 | "Want more? Subscribe, and comment what we should explain next." | The mascot waves; red Subscribe button eases in and pulses; beside it a speech-bubble button "COMMENT: WHAT NEXT?"; nothing under them (L24); short fade with the corner tag drawn over it | close: the ask (L32) |

## On-screen words and their sources
"ANTIGRAVITY SWARM": [DOC] "Swarm (/swarm)". "USERS", "ORDERS", "PRODUCTS", "3 FILES · 1 TASK", "SAME 3 FILES", "/swarm add validation to 3 files": the maker's example prompt (`research.md` row 14).
"YOUR WAITS", "OUR EXAMPLE", "3 WAITS", the meter at 3 and 1, "ONE AT A TIME", "RUN TESTS": our before scene (row 19 and the topic's before); not a maker's number (description line 2 says "our picture, not Google's numbers").
"USUALLY: A VERIFIER", "@VERIFIER", "USUALLY · RUNS THE TESTS", "USUALLY, A VERIFIER TESTS FIRST", "PROBLEM: BACK TO THE CODER": rows 8, 14. "COORDINATOR · YOUR CHAT": row 5. "@USERS", "@ORDERS", "@PRODUCTS": our names (row 6: named workers, one per file; row 14: one worker per handler).
"SHARED BOARD", "LIVE", "@ORDERS: QUESTION", "@VERIFIER: TEST RESULTS": rows 9, 12. "THE CATCH", "WORKS BEST WHEN THE TASK SPLITS CLEANLY", "WHEN THE TASK SPLITS": row 2. "QUOTA", "USES QUOTA MUCH FASTER", "PREVIEW", "WHEN THE TASK SPLITS · PREVIEW": rows 2, 4. "3 FILES, 3 AGENTS, AT ONCE": rows 1, 14.
The desk, chef's hat, robots and the board's look are invented pictures inside the example; no logos or real interface.
