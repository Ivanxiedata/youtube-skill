# Lesson: riemann-claude-proof

Main idea: A machine can confirm a proof is right before mathematicians understand why: checking and understanding are now separate jobs. (19 words)

Why it matters: a proof turns "most" into "all": earlier work showed at least two thirds of the special numbers that encode the primes fit Riemann's pattern; a proof says every one does (research.md rows 16, 18). And understanding is what lets mathematicians build on a proof, which is still to come (rows 11, 17).

Misconception it corrects: "Certified means mathematicians understand it." Certified means correct, not understood (rows 11, 17); said out loud in beat 4.

The 3 questions:
1. Q: Why does a proof matter when most cases were already known to fit the pattern? / A: Riemann predicted all the important special numbers that encode the primes sit on one line; earlier work showed at least two thirds do, but one exception would sink Riemann's prediction; only a proof says every single one fits. / Picture: a row of 30 dots labelled "special numbers that encode the primes", 20 turn green ("KNOWN TO FIT: AT LEAST 2/3"), 10 grey with "?"; then all 30 green ("PROVED: EVERY ONE"). [16, 18, 19]
2. Q: How can a proof that almost nobody can read be trusted? / A: two checks: the right question (two separate tools confirmed it proves exactly the Riemann hypothesis), and every step (written in Lean, a proof language whose checker rejects any step that doesn't follow; several checkers by different people said yes, and two of them are proved unable to accept a false proof, even if Lean's own logic had a flaw). / Picture: two "=" signs matching "WHAT WAS PROVED" to "THE RIEMANN HYPOTHESIS"; a toy proof where the checker stamps a red X on a bad step; then the real proof passing several checkers, two with a badge "PROVED: CAN'T ACCEPT A FALSE PROOF". [13, 6, 8, 14]
3. Q: What is still missing, and why does it matter? / A: understanding why it's true; the checkers say it's true, not why; one mathematician says that could take months or years, and understanding is what lets mathematicians build on its ideas. / Picture: three cards FIND (AI + mathematician, ticked), CHECK (machines, ticked), UNDERSTAND (an hourglass), with an arrow from UNDERSTAND to "BUILD ON IT". [17, 11, 12]

What we leave out on purpose: the zeta function by name (the "special numbers that encode the primes" carry it), the 167 years and the $1 million prize (fame, not a reason: L62), the second human-only proof (a detour: L65), advice for checking your own AI's work (a different lesson; G11 risk).

Lesson check (before the student run, round 3):
- L58 main idea, at most 25 words, no who/when/how many: 19 words, none.
- L59 the "done, not yet understood" gap is the main idea: yes.
- L60 questions are why/how/what's missing, every answer part spoken: Q1 beat 2 lines 2-3; Q2 beat 3 lines 2-4 ("two are proved unable to accept a false proof" spoken); Q3 beat 4 line 2 and beat 5 ("to build on its ideas").
- L61 a picture showing it working: the dots turning green; the red X on a bad step; the matching "=".
- L62/L69 why it matters names the consequence: one exception would sink the prediction (beat 2), "to build on its ideas" (beat 5).
- L63 the misconception said out loud: "certified doesn't mean understood" (beat 4).
- L64 reasons in the same breath: trust = right question + checkers that can't accept a false proof (beat 3); understanding matters = to build on its ideas (beat 5).
- L65 no line serves none of the questions: date, 167 years, prize, rival proof, "Here's what that is" cut; first line and closing ask exempt.
- L66 the takeaway keeps every condition the trust rests on: the checker is itself checked ("proven"), it checked the right question ("on the right question"); and that understanding is separate ("Only understanding tells you why").
- L67 the prediction said in plain words before counting ("all the important ones sit on one line"); labels explained: "special numbers that encode the primes"; Lean = "a proof language"; "two thirds" is of those numbers; the estimate is "one mathematician" aloud.
