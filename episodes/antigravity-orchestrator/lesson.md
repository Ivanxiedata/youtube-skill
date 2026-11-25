# Lesson: antigravity-orchestrator

Main idea (one sentence, at most about 25 words: what the viewer will think differently; not the headline, not the mechanism):
A top model needn't do every step: planning, and re-planning when a faster model gets stuck, can keep results close for less. (22 words; gate round 1 M4: no "strongest", "can")

Why it matters (to the viewer or the field, with the research.md row):
You stop paying the strong model's cost and wait on steps a faster model can do (rows 2, 4, 6): on Google's test, versus Carbon alone, almost as successful with 24% less quota and 19% faster on average (row 5);
and the faster model no longer has to struggle alone on a hard step, because it hands back and the strong model repairs the plan (rows 3, 9).

Misconception it corrects:
"For the best result, the strong model must do every step." Said in the hook ("you think Gemini four Carbon must do every step?") and corrected in the same sentence ("Google says it can plan and review: on its test, success stays close, for less quota.", rows 5, 6).

The 3 questions a viewer can answer afterwards (how / why / what changes, never "what happened"), each with its full answer and the picture that shows it working:
1. Q: How does Orchestrator split one coding task between the two models? / A: In Google's example, Carbon, a top model, reads the code and plans; Gemini 4 Hydrogen, a faster model, edits and tests. / Picture: on our 10-step wall, the big robot "GEMINI 4 CARBON · PLANNER" reads a code scroll and slot 1 becomes a blueprint "PLAN"; the small robot "GEMINI 4 HYDROGEN · FASTER" fills slots 2-5 quickly, tagged EDIT / TEST. [rows 4, 6-8]
2. Q: What happens when the faster model gets stuck, and why does that keep the result close? / A: When a test fails twice (one example of a hand-back), Hydrogen hands back, so the hard step stays with Carbon, which fixes the plan; Hydrogen carries on. One cheap model for everything can break down on harder steps (Google). / Picture: contrast: BEFORE, a small grey robot "ONE CHEAP MODEL FOR EVERYTHING" stops at slot 6 "HARDER STEP", red sign "CAN BREAK DOWN"; NOW, slot 6 turns red with two x marks "TEST FAILED x2 · FOR EXAMPLE", an arrow "HANDS BACK", the blueprint stamped "PLAN FIXED", slot 6 labelled "HARD STEP: CARBON FIXES THE PLAN", and the small robot lays the last bricks. [rows 3, 4, 9]
3. Q: What changes for you? / A: With Orchestrator the strong model does only the steps that need it (in our example two steps, not ten); in Google's Terminal-Bench results, versus Carbon, on average: close to its success, 24% less quota, 19% faster. / Picture: the meter "STEPS ON CARBON · OUR EXAMPLE" at 10 in BEFORE and 2 in NOW; then bars "CARBON" vs "ORCHESTRATOR": success nearly equal (no numbers, "NO EXACT RATE PUBLISHED"), quota 24% shorter, time 19% shorter, with "STEPS ARE OUR EXAMPLE" and "24% IS FOR THE WHOLE RUN, NOT 2 OF 10 STEPS". [rows 2, 5, 12]

The counted example (ours): one task, 10 steps; before, Carbon does all 10; now Carbon does 2 (plan, fix) and Hydrogen 8. Meter: "STEPS ON CARBON · OUR EXAMPLE", 10 then 2.

What we leave out on purpose (and why):
- Gemini 4 Neon as today's default planner on Pro/Ultra (since Nov 18-20): on screen as "PLANNER: CARBON HERE · YOU CAN PICK ANOTHER" and in the description; the voice tells the launch pairing and the one Google's numbers are for (research.md narrowing 1).
- The other hand-back triggers (an interface that behaves unexpectedly, an unsettled design choice) and the planner's progress reviews: "for example" covers them on screen; in the description (narrowing 4, 5).
- Hydrogen's standalone scores, thinking levels, the SDK demo, /swarm, plans and pricing: they answer none of the 3 questions; who gets it is in the description.
- Why 2 of 10 steps is only 24% less quota: the screen says the steps are our example and "24% IS FOR THE WHOLE RUN, NOT 2 OF 10 STEPS" (row 5 measures the whole Orchestrator run); no source says how much quota each step uses, so the voice says nothing more (budget).

Lesson check (before every student run; every quote copied from the current `film/script.txt` after the claim-check fixes and checked with `grep -F`): each open `check: gate` lesson, then the line that meets it, or "n/a" and why.
- L58: main idea 22 words, no name, date or count.
- L59: Google publishes no exact success rate, only near-Carbon (row 5); the voice says "close to its success", the screen "NO EXACT RATE PUBLISHED".
- L60: Q1 "Carbon, a top model, reads the code and plans." / "Gemini four Hydrogen, a faster model, edits and tests."; Q2 "Say a test fails twice: Hydrogen hands back, so the hard step stays with Carbon, which fixes the plan." / "Hydrogen carries on"; Q3 "Carbon: two steps, not ten." / "twenty-four percent less quota, nineteen percent faster."
- L61: Q2 the cheap model stopped at the harder step vs the hand-back; Q3 meter 10 vs 2 and the bars Carbon vs Orchestrator.
- L62: "twenty-four percent less quota, nineteen percent faster." and "so the hard step stays with Carbon, which fixes the plan."
- L63: "you think Gemini four Carbon must do every step? Google says it can plan and review: on its test, success stays close, for less quota."
- L64: why the result stays close: "Hydrogen hands back, so the hard step stays with Carbon, which fixes the plan."; why less quota: "Carbon: two steps, not ten." (our example) and the maker's number.
- L65: every body line serves Q1, Q2 or Q3.
- L66: "in our example" (step counts) and "in Google's results" (the result): "So, what we learned: in our example, Carbon did two steps, not ten; in Google's results, close to its success."
- L67: "Google's coding app"; "Now Orchestrator, in Google's example"; "Carbon, a top model"; "Gemini four Hydrogen, a faster model"; "Terminal-Bench" drawn as "A CODING TEST"; the percentages have their base "versus Carbon, on average"; "can break down" is Google's hedge.
- L68: none.
- L69: "Google says" (hook, line 4), "In Google's Terminal-Bench results".
- L70: the cheap model stopped at "HARDER STEP" (BEFORE).
- L71: 10, 2, 24%, 19%, the "4" in model names and the slot numbers are said; "TERMINAL-BENCH" drawn without its version number (4.1 is in the description); "2 OF 10 STEPS" said as "two steps, not ten".
- L72: the quota/time line and the hand-back line are spoken.
- L74: done (this list).
- L76: "quota" for what you spend everywhere; "plan" only for Carbon's plan; "hands back" for the hand-off; "hard/harder step" for what the cheap model can break down on and what stays with Carbon; "close to its success" for the result everywhere (hook "success stays close").
- L77: "Before, Carbon did all ten" -> "Now Orchestrator ... Carbon ... reads the code and plans." / "Hydrogen hands back".
- L78: n/a.
