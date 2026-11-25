# Beats: antigravity-orchestrator (workflow step 3)

Written 2026-11-25 with `/yt-script`, scaled to 60 s, after `package.md` fixed the promise:
title **"Antigravity Orchestrator: 1 Task, 2 Gemini Models Take Turns"** + thumbnail **"LEARN ANTIGRAVITY ORCHESTRATOR IN 60 SECONDS"**. The hook sells the viewer's moment (the strong model no longer does every step; a faster one nearly matches it for less);
the tech (planner and executor, the hand-back on a failed check, Google's Terminal-Bench numbers) comes after, as the how. Every claim traces to `research.md` / `brief.json`.
Spoken text: `script.md`; as the voice says it: `film/script.txt`. The renderer re-times every cut to the real `vo_lines.json`. The film ends at 60.0 s at most.

The flow the owner chose (lesson L25): **one counted example, one coding task in 10 steps** (a wall of 10 brick slots), from the first beat to the last;
a **meter "STEPS ON CARBON · OUR EXAMPLE"** (0 to 10) that fills to 10 in BEFORE and reaches only 2 in NOW on the same 10-step wall (the same unit both sides, lesson L34);
**the how on one scene that grows** (the empty wall -> Carbon's blueprint on slot 1 -> Hydrogen's bricks -> the failed brick -> the hand-back arrow -> the fixed plan -> the finished wall) with a highlight on what the voice names;
the proof is **Google's own number**: on Terminal-Bench 4.1, near-Carbon task success, on average 24% less quota and 19% faster (row 5).

## Hooks
Written against `.claude/skills/yt-script/hooks.json` after reading `hookscore.py`'s word lists (lesson L33). Every one opens with the topic's name (lesson L14). Picked by the 3-second test (lesson L16), then the score; then changed by the content gate.

### 1 (chosen, after the content gate and the claim check) 47 WEAK (formula: myth correction, "you think X? Google says Y")
"Antigravity's Orchestrator: you think Gemini 4 Carbon must do every step? Google says it can plan and review: on its test, success stays close, for less quota."
```
SPECIFICITY 74 · ADDRESS 76 · STAKES 36 · CURIOSITY 24 · BREVITY 100 (23 words) · VERDICT 47 WEAK
```
The pre-gate hook ("..., but actually, let it plan, and a faster model almost matches it, at less cost.", 69) failed the gate: it stated Google's result as fact (G8, L69) and said "cost" where every other line says "quota" (L76);
the round-2 critic ruled "without wasting quota" wider than 24% less (G8); the claim check ruled "a faster model almost matches it" narrower (`claims.md`: the source's near-Carbon success is Orchestrator's, planner plus executor, not the faster model's alone).
Every higher-scoring rewrite either dropped the credit to Google, the said belief (G7), the condition, or ran past 26 words (the voice budget). Kept on purpose: the gate's and claim check's rules outrank the score (the score is a check, `docs/workflow.md` step 3); the judge may list it as a should-fix.
"Plan and review": the docs' planner "plans and reviews the work" (research row 6). 3-second test: someone who knows no AI tech hears "Antigravity's Orchestrator = the top model doesn't have to do every step; it plans and reviews, and success stays close for less of your quota". The topic is the first words; no architecture word; ends on the outcome, not "but how?" (L31).

### 2 (runner-up) 73 STRONG
"Antigravity's Orchestrator: you can stop running Gemini 4 Carbon on every step, but actually, if it plans and fixes, a faster model almost matches it, at less cost." (28 words; the same faults as the pre-gate hook)

### All hooks scored
| Score | Hook | Note |
|---|---|---|
| 76 | ... you never needed Gemini 4 Carbon on every step; but actually, if it plans, a faster model almost matches it, at less cost. | "never" is false: Google recommends one model when every step needs maximum depth (row 19) |
| 73 | ... you can stop running Gemini 4 Carbon on every step, but actually, if it plans and fixes, a faster model almost matches it, at less cost. | runner-up |
| 69 | **... you think Gemini 4 Carbon must do every step, but actually, let it plan, and a faster model almost matches it, at less cost.** | chosen |
| 67 | ... you can stop running Gemini 4 Carbon on every step, but Google says if it plans and fixes, a faster model almost matches it, at less cost. | 29 words |
| 62 | ... you think the strong AI must do every step, but Gemini 4 Carbon actually just plans, and a faster model nearly matches it, for less cost. | |
| 56 | ... you think your strongest AI must do every step, but Gemini 4 Carbon can just plan while a faster model does the work, at less cost. | |

## The parts, in one line each
- **Hook:** title card; you think "CARBON ON EVERY STEP?"; the architect plans, the fast builder builds.
- **Turn:** "Here's how: one task, ten steps, our example." Then it does it, on the 10-slot wall.
- **Before, the pain as a scene:** one model on all 10 slots: Carbon slow, the quota bar draining, the meter to 10; or one cheap model for everything, which Google says can break down on harder steps.
- **Now, the same scene:** Carbon draws the plan; Hydrogen lays the bricks fast; a test fails twice, Hydrogen hands back, Carbon fixes the plan; the meter at 2.
- **Why it helps, proof:** Google's Terminal-Bench results, versus Carbon, on average: close to its success, 24% less quota, 19% faster.
- **Close:** "So, what we learned:" BEFORE 10 vs NOW 2 side by side; takeaway card; the ask (subscribe + comment).

## Cast and places
- **You = the mascot** (round cream face, coral hoodie) in a **yellow builder's hard hat** (the building story's costume).
- **The models = robots with teal screen heads** (visibly AI, brand casting): **Carbon** = the big architect robot (tall, with a rolled blueprint, label "GEMINI 4 CARBON"); **Hydrogen** = the small fast builder robot (with a trowel and speed lines, label "GEMINI 4 HYDROGEN · FASTER"); the **cheap model** in BEFORE = a small grey robot "ONE CHEAP MODEL FOR EVERYTHING". No logos.
- **The wall:** 10 numbered brick slots in two rows of five (the 10 steps). Slot 1 becomes a blueprint tile ("PLAN"), slot 6 the hard (harder) step (red when it fails), the others bricks tagged EDIT or TEST.
- **Props:** a code scroll, the blueprint, a red "x" pair ("TEST FAILED x2 · FOR EXAMPLE"), a teal "HANDS BACK" arrow, a "PLAN FIXED" stamp, a "YOUR QUOTA" bar, a clock, the results bars.
- **The meter "STEPS ON CARBON"** with "OUR EXAMPLE" under its label, right side of the frame in every BEFORE and NOW shot (not in shot 6, where Carbon is not used): a vertical bar 0 to 10 with a big whole-number counter; amber in BEFORE, teal in NOW. Labels at least 44 px (brand), never under 28 px (L48).
- Every frame: corner tag "Antigravity Orchestrator · 60s" top-left inside the safe area (x 60-918, y 100-1536, 44 px or more; L79). BEFORE tabs amber, NOW tabs teal, red only for the sticker, the failed test and Subscribe.

## Shots
Shots split long voice lines at measured pauses (lesson L1: a new shot about every 2-3 s); the name and the hook are one voice line, cut on the pause after "Orchestrator:" (L16, L36).

| # | Line | Spoken line | ON SCREEN | Purpose |
|---|---|---|---|---|
| 0 | 1a | "Antigravity's Orchestrator:" | Full-screen title card: "LEARN" small, "ANTIGRAVITY ORCHESTRATOR" huge in amber, red tilted sticker "IN 60 SECONDS"; corner tag. Holds until the measured pause after "Orchestrator" | hook |
| 1 | 1b | "you think Gemini 4 Carbon must do every step?" | The mascot (hard hat) beside the big architect robot "GEMINI 4 CARBON" laying a brick itself; thought bubble "CARBON ON EVERY STEP?"; linear push to 1.1 | hook |
| 2 | 1c | "Google says it can plan and review: on its test, success stays close, for less quota." | Cut: the architect holds a blueprint "PLAN" and a clipboard (reviews); the small builder "A FASTER MODEL" lays bricks quickly; line under them "GOOGLE'S RESULTS: CLOSE TO CARBON'S SUCCESS, LESS QUOTA ON AVERAGE" | hook |
| 3 | 2 | "Our example: ten steps in Google's coding app." | The empty wall: 10 numbered slots; label "OUR EXAMPLE: 10 STEPS IN ANTIGRAVITY, GOOGLE'S CODING APP"; right: meter "STEPS ON CARBON" / "OUR EXAMPLE" at 0 | turn |
| 4 | 3a | "Before, Carbon did all ten:" | Amber tab "BEFORE · ONE MODEL FOR EVERY STEP"; the big architect "GEMINI 4 CARBON" lays bricks in slots 1-5; meter 0 -> 5 (amber) | beat |
| 5 | 3b | "slow, burning your quota." | Cut: slots 6-10 fill slowly; a clock "SLOW" ticks; a "YOUR QUOTA" bar drains; meter 5 -> 10 | beat |
| 6 | 4 | "One cheap model for everything? Google says it can break down." | Cut: same wall, a small grey robot "ONE CHEAP MODEL FOR EVERYTHING" lays slots 1-5, then stops at slot 6 marked "HARDER STEP"; red sign "CAN BREAK DOWN"; no meter (Carbon not used) | beat |
| 7 | 5a | "Now Orchestrator, in Google's example: Carbon, a top model," | Cut: teal tab "NOW · ORCHESTRATOR"; the big architect "GEMINI 4 CARBON · PLANNER", small lines "GOOGLE'S EXAMPLE" and "PLANNER: CARBON HERE · YOU CAN PICK ANOTHER"; the empty wall; meter 0 (teal) | beat |
| 8 | 5b | "reads the code and plans." | The architect reads a code scroll; slot 1 becomes a blueprint tile "PLAN"; meter 0 -> 1 | beat |
| 9 | 6a | "Gemini 4 Hydrogen, a faster model," | Cut: the small builder robot "GEMINI 4 HYDROGEN · FASTER" grows in (scale) beside the wall; meter 1 | beat |
| 10 | 6b | "edits and tests." | Bricks fill slots 2-5 quickly, tagged "EDIT", "TEST", "EDIT", "TEST"; meter stays 1 | beat |
| 11 | 7a | "Say a test fails twice:" | Cut: slot 6 brick cross-fades red; two red x marks appear one after the other; label "TEST FAILED x2 · FOR EXAMPLE" | beat |
| 12 | 7b | "Hydrogen hands back, so the hard step stays with Carbon, which fixes the plan." | A teal arrow "HANDS BACK" from the builder to the architect; the blueprint redraws, stamp "PLAN FIXED"; slot 6 cross-fades teal, label "HARD STEP: CARBON FIXES THE PLAN"; meter 1 -> 2 | beat |
| 13 | 8 | "Hydrogen carries on; Carbon: two steps, not ten." | Cut: the small builder lays the last bricks (7-10); the full wall, slots 1 and 6 outlined teal "CARBON", the other 8 "HYDROGEN"; meter at 2 with a faint ghost mark at 10 | beat |
| 14 | 9a | "In Google's Terminal-Bench results, versus Carbon, on average:" | Cut: panel "GOOGLE'S RESULTS · TERMINAL-BENCH (A CODING TEST) · ON AVERAGE"; two columns "CARBON" and "ORCHESTRATOR" | beat (proof) |
| 15 | 9b | "close to its success," | Success bars with no numbers: Orchestrator's nearly as tall as Carbon's; "CLOSE TO CARBON'S SUCCESS"; small line "NO EXACT RATE PUBLISHED" | beat (proof) |
| 16 | 9c | "twenty-four percent less quota, nineteen percent faster." | Cut: quota bar 24% shorter "24% LESS QUOTA", time bar 19% shorter "19% FASTER"; small lines "STEPS ARE OUR EXAMPLE" and "24% IS FOR THE WHOLE RUN, NOT 2 OF 10 STEPS" | beat (proof) |
| 17 | 10a | "So, what we learned: in our example, Carbon did two steps, not ten;" | "WHAT WE LEARNED" card; mini panel "BEFORE": the wall all amber, meter 10 (state of shot 5); mini panel "NOW": wall with slots 1 and 6 teal, meter 2 (state of shot 13); one shared label "STEPS ON CARBON · OUR EXAMPLE" shown with the panels, never after them | payoff |
| 18 | 10b | "in Google's results, close to its success." | Cut: takeaway card "OUR EXAMPLE: CARBON'S STEPS, 10 -> 2" / amber "GOOGLE'S RESULTS: CLOSE TO CARBON'S SUCCESS" | payoff |
| 19 | 11 | "Want more? Subscribe, and comment what we should explain next." | Red Subscribe button and a comment button; the mascot (hard hat) waves; nothing under them (lesson L24) | close |
