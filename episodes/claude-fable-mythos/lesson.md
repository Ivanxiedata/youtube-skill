# Lesson: claude-fable-mythos

Main idea (one sentence, at most about 25 words: what the viewer will think differently; not the headline, not the mechanism):
A safe public AI can be the full-strength model: a separate checker diverts the requests it blocks, and sharpening that checker lets more through. (23 words)

Why it matters (to the viewer or the field, with the research.md row):
You get the strongest model for the requests that aren't blocked, instead of a weaker one for everything (rows 1, 19, 20, 26); a blocked request is usually answered by an older Opus model rather than refused, and you're told (rows 10, 13);
and Anthropic sharpens the checker over time: about 55% fewer blocked requests in 5.2 than in 5.1 in early tests, so fewer requests leave the full model (rows 16-18).

Misconception it corrects:
"The safe public version must be a weaker, watered-down model." Said in the hook ("you think safety must cost you a weaker model,") and corrected in the same sentence ("but Anthropic says it's actually the same underlying model as Mythos five point two.", row 1).

The 3 questions a viewer can answer afterwards (how / why / what changes, never "what happened"), each with its full answer and the picture that shows it working:
1. Q: How can everyone get the same model as the restricted Mythos without its risky skills getting out? / A: A separate AI checker reads each request first; the ones that pass go to the full model, and a risky one (like asking for attack code) is blocked from the full model. / Picture: our 10 request tickets reach a teal checker gate in front of the big Fable chef; 9 pass through, the "HELP ME BUILD ATTACK CODE" ticket stops, turns red and gets a "BLOCKED" stamp; a dashed inset "MYTHOS 5 (JUNE): CYBER CHECKS LIFTED · VETTED GROUPS" shows the same ticket going straight to the big chef. [rows 1-6, 9, 11, 12]
2. Q: What changes for you when one of your requests is blocked? / A: It usually isn't refused: in Claude apps an older Opus model answers it instead, and you're told the model switched. / Picture: the blocked ticket goes to a smaller older cook labelled "OLDER OPUS · LESS CAPABLE"; an answer comes back with a strip "MODEL SWITCHED TO OPUS". [rows 7, 8, 10, 11, 13]
3. Q: Why does Fable 5.2 let more requests reach the full model than 5.1? / A: Anthropic sharpened the checker: in its early tests, 5.2's checker blocked about 55% fewer requests than 5.1's, so fewer requests leave the full model. / Picture: two bars "5.1 CHECKER: BLOCKED REQUESTS" tall and "5.2 CHECKER: BLOCKED REQUESTS" a bit under half as tall, "ABOUT 55% FEWER", "JUST AS ROBUST IN CYBER AND BIOLOGY"; a harmless ticket (our example) stopped by the 5.1 gate passes the 5.2 gate. [rows 16-18]

The counted example (ours): 10 requests; before, all 10 on a weaker model; now 9 on the full model and the 1 blocked one to older Opus. Meter: "YOUR REQUESTS ON A WEAKER MODEL · OUR EXAMPLE", 10 then 1.

What we leave out on purpose (and why):
- Benchmarks, price, fast mode, speed, the science demos: they answer none of the 3 questions.
- Which older Opus for which area (4.8 for cyber, 5 for biology), the third area (frontier LLM development), requests blocked outright with no fallback (on screen only, "SOME ARE REFUSED OUTRIGHT"), and that the checker also reads files and search results: in the description; covered in the voice by "an older Opus model" and "usually" (research.md narrowing 3-5, 10).
- How the checker decides what is risky (a classifier trained by Anthropic): beyond the length; the voice says what it does, and the picture shows it catching one.
- That the design started with Fable 5 in June: in the description; the video is about 5.2 and does not say 5.2 invented it.
- Covered-model data retention: a policy, not the lesson.

Lesson check (before every student run; quoted from the current `film/script.txt`, gate round 2): each open `check: gate` lesson, then the line that meets it, or "n/a" and why.
- L58 (main idea is a belief, at most 25 words, no who/when/how many): 23 words, no name, date or count.
- L59 (test a "done but not yet" gap): the sources say the safeguards are "still stricter than would be ideal" (row 18); that gap is the main idea's last clause and Q3 ("sharpening that checker lets more through").
- L60 (how/why/what-changes questions, each asking every part): Q1 how, Q2 what changes, Q3 why; each answer key's parts are spoken: Q1 "Now, a separate AI checker reads our requests first." / "Nine pass to the full model." / "One asks for attack code... blocked!"; Q2 "In Claude apps, an older Opus model usually answers, and you're told."; Q3 "In Anthropic's early tests, five point two's checker blocked about fifty-five percent fewer requests than five point one's." / "So fewer requests leave the full model."
- L61 (draw the contrast or the caught mistake): Q1 the gate stamping the attack-code ticket BLOCKED, beside the "MYTHOS 5 (JUNE): CYBER CHECKS LIFTED · VETTED GROUPS" inset where it goes through; Q3 a harmless ticket stopped by the 5.1 gate and passed by the 5.2 gate.
- L62 (why it matters names what changes): "Nine pass to the full model." / "So fewer requests leave the full model."
- L63 (misconception said, then corrected): "Claude Fable five point two: you think safety must cost you a weaker model, but Anthropic says it's actually the same underlying model as Mythos five point two."
- L64 (reason in the same breath for a trust step): why Mythos was held back: "Before, with no checker strong enough, Mythos Preview went to a small group of cyber defenders and infrastructure providers."; why block the attack code: on screen "RISKY CYBER REQUEST" on the blocked ticket; why the older model may answer: on screen "OLDER OPUS · LESS CAPABLE".
- L65 (cut lines that answer no question): every body line serves Q1, Q2 or Q3 (the before line sets up Q1's contrast and the meter).
- L66 (takeaway keeps every condition): "in our example" (the counts are ours), "in Claude apps" (where the switch is automatic), "usually" (some are refused outright), "the checker" (what diverts), "the blocked one" and "older Opus" (where it goes): "So, what we learned: in our example, all ten once got a weaker model." / "Now nine reach the full model; in Claude apps, the checker usually sends the blocked one to older Opus."
- L67 (say what a plain-word label is; fractions with a base; hedges with their other case): "checker" = "a separate AI checker"; "blocked" is the one word for what the checker does, from "One asks for attack code... blocked!" to the 55% line and the takeaway (gate round 1 M1); "about fifty-five percent fewer requests than five point one's" has its base; "usually" (its other case, refused outright, is on screen as "SOME ARE REFUSED OUTRIGHT"); "Mythos" is said as a model in the hook ("the same underlying model as Mythos"), and the BEFORE glass room is labelled "MYTHOS PREVIEW · BEST MODEL".
- L68 (absolute words need a row): none left in the voice ("a small group of cyber defenders and infrastructure providers": row 21 "a small group of cyberdefenders and infrastructure providers"; row 19 "a limited group").
- L69 (say who an estimate is from): "In Anthropic's early tests"; "Anthropic says it's actually the same underlying model".
- L70 (show what slips through without the check): the dashed inset "MYTHOS 5 (JUNE): CYBER CHECKS LIFTED · VETTED GROUPS" in picture 9: the attack-code ticket goes straight to the big chef.
- L71 (every number on screen is said): 10 (ten), 9 (nine), 1 (one), 55% (fifty-five percent), 5.1 and 5.2 (said); no other number drawn.
- L72 (every part of "why it matters" spoken): "Nine pass to the full model." / "an older Opus model usually answers instead, and you're told" / "So fewer requests leave the full model."
- L74 (re-quote Lesson check from the current script before each student run): every quote above was copied from `film/script.txt` after the round-1 gate fixes, the round-2 should-fixes, the claim-check fixes and the judge round-1 fixes.
