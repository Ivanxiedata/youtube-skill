gate: pass (3 should-fix)

Round 2 (re-gate), critic: fresh agent that wrote neither the episode nor round 1. G0 passed: `viewer.md` holds only spoken lines and on-screen descriptions (the round-2 additions, the picture 9 inset and the picture 5 line, are what the viewer sees), and its spoken section matches `film/script.txt` word for word (diffed; 157 words, the style A limit of 150 + 5%).
Re-gate scope (`docs/roles/content-gate.md`, "The loop"): every round-1 fail and every changed line re-checked, G1, G2, G3 and G10 run in full; anything new elsewhere is a should-fix unless it breaks G1, G2, G10 or an open `check: gate` lesson.

## Student notes and answers (verbatim, from the round-2 student)

## Main idea
Claude Fable 5.2 is the same model as the restricted Mythos 5.2, but a separate AI checker screens each request, so ordinary users now get the full model instead of a weaker one, except for risky requests, which get diverted.

## What I learned
1. Fable 5.2 and Mythos 5.2 are the same model. Picture the same robot chef in two kitchens: Fable's kitchen is open to everyone but has a gate in front, Mythos's kitchen is for vetted groups only with no gate.
2. Before, there was no checker strong enough, so the best model (Mythos) went only to a few cyber defenders and everyone else got a weaker model. In the video's example, all 10 of your requests went to the weaker model.
3. Now a separate AI checker reads each request first. In the example, 9 of 10 pass through to the full model, and one ("help me build an exploit") is blocked.
4. In Claude apps, a blocked request usually goes to an older Opus model, which is less capable, and you get told ("model switched to Opus"). Some are refused outright.
5. In Anthropic's early tests, the 5.2 checker blocked about 55% fewer requests than the 5.1 checker, so more harmless requests reach the full model.

## Unclear / on faith / scroll-away
- "about fifty-five percent fewer requests" blocked: fewer than what exactly? It says 5.1's checker, but fewer of which requests (all of them? harmless ones?) is unclear. Also it is "Anthropic's early tests", so I take it on faith. The bars look like "a bit under half as tall", which is odd for 55% fewer.
- "Nine pass... one blocked" is "our example", not real data. I don't know how often real requests get blocked. The 9 of 10 is made up, so the "ten once got a weaker model" claim is illustrative only.
- "Anthropic says it's actually the same model": I have to take that on faith. Why does a checker make it safe to release the same model? Not explained.
- "Mythos", "cyber defenders", "Opus", "exploit": I don't really know what Mythos is, who the vetted groups are, or what Opus is relative to Fable. "an older Opus model", older than what?
- "Safety must cost you a weaker model?" Opening line is a bit confusing: it says safety costs a weaker model, then says same model.
- Scroll-away moment: "Claude Fable five point two!" as an opening says nothing to me; and the "So, what we learned" recap repeats the example, which I'd skim.
- Unclear what "usually" and "you're told" mean for people outside Claude apps (API users?). What happens there is not said.
- Contradiction-ish: the blocked person ends up on a weaker model anyway, so for that request safety still costs a weaker model.

## Answers to the 3 questions
1. Because a separate AI checker sits in front of the model and reads every request first. Risky ones (like "help me build an exploit") get stopped at the gate and never reach the full model. Mythos had no gate, so it was kept for vetted groups only. Why the checker is reliable enough, I can't say; the video just says it's the same model.
2. In Claude apps, the blocked request usually gets answered by an older, less capable Opus model instead, and you're told ("model switched to Opus"). Some are refused outright.
3. Because the 5.2 checker is better: in Anthropic's early tests it blocked about 55% fewer requests than the 5.1 checker, so fewer requests get stopped and more reach the full model. I don't know why it's better.

## Checks

| # | Check | Result | Evidence |
|---|---|---|---|
| G0 | viewer.md clean, matches script | pass | No notes, ids, rows or shot numbers; spoken section diffed against `film/script.txt`: identical. |
| G1 | Main idea is an insight | pass | "A safe public AI can be the full-strength model: a separate checker diverts the requests it blocks, and sharpening that checker lets more through." 23 words; a belief (safety need not mean a weaker model), no who, when or count; no absolute word. Rows 1, 4, 10, 16-18. |
| G2 | Deepest true idea | pass | The "done, but not yet" gap (row 18, "still stricter than would be ideal ... sometimes benign requests will trigger our classifiers") is the main idea's last clause and Q3. Row 26 (held back until safeguards were "strong enough to reliably prevent misuse") is now in line 4. Row 24 (>95% of sessions with no fallback) is Fable 5 in June, not 5.2: rightly left out. Row 17 ("as robust ... but fewer unnecessary blocks") deepens Q3 without changing the idea; it is S1 below, not a deeper main idea. |
| G3 | The student got it | pass (S1 partial) | Main idea matches the core ("the same model ... a separate AI checker screens each request, so ordinary users now get the full model instead of a weaker one, except for risky requests, which get diverted"); the "sharpening" clause it carries in Q3, as in round 1. Q1: checker reads each request, the exploit is stopped and never reaches the full model; the 9 passing are in its notes ("9 of 10 pass through to the full model"). Q2: older, less capable Opus usually answers, in Claude apps, you're told; some refused. Q3: about 55% fewer blocked requests than 5.1's, so more reach the full model. Every key part has a spoken line (lines 5, 6, 7, 8, 9, 10; ticked). "Why the checker is reliable enough, I can't say" and "I don't know why it's better" ask how it works inside after repeating the spoken reason: the wish rule. Partial: "fewer of which requests (all of them? harmless ones?)" (S1). "The bars look ... a bit under half as tall, which is odd for 55% fewer" is the student's misreading: 45% of the height is a bit under half; the picture is right. |
| G4 | Questions worth asking | pass | Unchanged: Q1 how, Q2 what changes, Q3 why; each asks for every part of its key. |
| G5 | Shown, not asserted | pass | Q1: the exploit ticket stamped BLOCKED, beside the new "WITHOUT A CHECKER" inset where it goes straight through (a contrast). Q2: the red ticket goes to "OLDER OPUS · LESS CAPABLE", the "MODEL SWITCHED TO OPUS" strip, the meter 0 to 1. Q3: a harmless ticket stopped at the 5.1 gate, passed at the 5.2 gate. |
| G6 | Why it matters | pass | Every part of lesson.md's reason is spoken: line 6 "Nine pass to the full model.", line 8 "an older Opus model usually answers instead, and you're told", line 10 "So more requests reach the full model." Rows 1, 10, 13, 16-20, 26. |
| G7 | Misconception | pass | Line 2: "You think safety must cost you a weaker model? But Anthropic says it's actually the same model as Mythos five point two." The student's "a bit confusing" note on the opening is hook craft (out of scope). |
| G8 | No faith steps | should-fix (S1) | Line 4 now gives the reason the best model was held back ("without a checker strong enough", row 26); the student repeated it. New: line 9-10 say the checker blocks fewer requests and so more reach the full model, but never that it is just as strong on risky ones (row 17), so "fewer blocks" can read as a looser checker; the student: "fewer of which requests (all of them? harmless ones?)" and "I don't know why it's better". |
| G9 | Every line serves | should-fix (S2) | Every body line serves Q1-Q3; "blocked" is now the one word for the checker's action (lines 7, 9, 12, pictures 9, 11, 14). No body scroll-away (the student's two are the title and the recap; the title is exempt and the recap is the takeaway). New: "exploit" is a term the voice never explains; the student lists it among words it can't explain (S2). "Mythos" is now "the best model, Mythos" (line 4); "Opus" is "an older Opus model" with "LESS CAPABLE" on screen; who the vetted groups are and what happens in the API are wishes beyond 60 s. |
| G10 | True main idea | pass | Main idea within rows 1, 4, 10, 16-18 ("diverts the requests it blocks": most fall back, some are refused, both kept from the full model, row 10). Takeaway line 12 keeps "in our example" (line 11), "in Claude apps" (row 13), "the checker", "the blocked one", "older Opus"; for our example's exploit request the fallback is Opus 4.8 (rows 7, 8, 9), so dropping "usually" there holds. Closing card in the same unit (requests, our example). |
| G11 | Carry-over limits | should-fix (S3) | New picture 9 inset is labelled "WITHOUT A CHECKER (MYTHOS, VETTED GROUPS ONLY)". The sources say Mythos is the same model "with the safeguards lifted in some areas" (row 21; research.md "where the analogy stops": "the same chef with fewer rules"), not that it has no checker at all. The exploit going through is true for a vetted cyber group; the label overstates. Picture only. |
| G12 | Lessons | pass | Lesson check entries ticked against the current script; every quoted phrase grepped in `film/script.txt` (L74): all present. L66: takeaway keeps "in Claude apps" (fixed). L67: one word "blocked", base "than five point one's", "usually" with its other case on screen, "the best model, Mythos". L70: the picture 9 inset shows the exploit going through without the check (fixed). L58, L59, L60, L61, L62, L63, L64, L65, L68, L69, L71, L72 hold. |

## Round-1 fails: status

| Round-1 fail | Status | Evidence |
|---|---|---|
| M1 "blocks" never tied to "flagged" (G12 via L67, G3, G9) | fixed | The writer made "blocked" the single word: line 7 "One asks for an exploit... blocked!", line 9 "blocked about fifty-five percent fewer requests than five point one's", line 12 "the blocked one"; pictures 9, 11, 14 say BLOCKED. The student repeated it with its base. Its "fewer of which requests" is a new, narrower point (S1). |
| M2 takeaway drops "in Claude apps" (G10, G12 via L66) | fixed | Line 12: "Now nine get the full model; in Claude apps, the checker sends the blocked one to older Opus."; closing card says it too; L66 entry lists it. |
| M3 no picture of what slips through without the checker (G12 via L70) | fixed | Picture 9 inset: the same exploit ticket goes straight to the big chef. Its label overstates (S3, picture-only should-fix). |
| S1 "You got a weaker one" has no reason (G8, G9) | fixed | Line 4: "Before, without a checker strong enough, the best model, Mythos, went only to a few cyber defenders." (row 26). The student: "Before, there was no checker strong enough, so the best model (Mythos) went only to a few cyber defenders". |
| S2 "Mythos" unexplained, "same model" on faith (G9, G3) | fixed | Line 2 credits Anthropic ("Anthropic says"); line 4 says what Mythos is ("the best model, Mythos"); picture 3 says "VETTED GROUPS ONLY", and the student repeated "vetted groups only". Its remaining "I have to take that on faith" about Anthropic's own claim, and "who the vetted groups are", are wishes beyond 60 s. |

## Fails (round 2)

### S1: "fewer blocks" never said to be just as strong (should-fix; G8, G3 partial)
- **What:** Lines 9-10, "In Anthropic's early tests, five point two's checker blocked about fifty-five percent fewer requests than five point one's." / "So more requests reach the full model." Nothing says the 5.2 checker still stops the risky ones, so a viewer can read the 55% as a looser checker. The student: "fewer of which requests (all of them? harmless ones?)" and, on Q3, "I don't know why it's better". Row 17: "Fable 5.2's cyber and biology safeguards are as robust as those of Fable 5.1 but produce fewer unnecessary blocks" (research.md narrowing 7: say "just as strong as 5.1's").
- **Fix:** Replace line 9 with "In Anthropic's early tests, five point two's checker, just as strong, blocked about fifty-five percent fewer requests than five point one's." (+3 words). Pay for it in line 3: replace "Here's how, on our example: ten requests." with "Our example: ten requests." (-3; "our example" is still said, and again in line 11). Net 0: 157 words. Picture 11: add a small line "JUST AS STRONG ON RISKY REQUESTS" (row 17). Re-quote the L60 entry from the new line 9 (L74), and the claim check confirms the added phrase.
- **Rule:** When a number says a safeguard stops less, say in the same line that it is just as strong on what it guards against, so "fewer" isn't heard as "looser".

### S2: "exploit" never explained (should-fix; G9)
- **What:** Line 7, "One asks for an exploit... blocked!" The student lists "exploit" among words it can't explain; picture 9 says only "HELP ME BUILD AN EXPLOIT" and "RISKY: COULD DO SERIOUS DAMAGE".
- **Fix:** Replace line 7 with "One asks for attack code... blocked!" (net 0: "an exploit" to "attack code"; row 9: "building exploits, malware, or attack tooling"). Picture 9 and its inset: the ticket reads "HELP ME BUILD ATTACK CODE". Update lesson.md's Q1 answer and picture, and the L60 entry's quote (L74).
- **Rule:** none (L67 covers plain-word labels; a technical term in a plain word is the same rule: say once what kind of thing it is).

### S3: the inset says Mythos has no checker (should-fix; G11)
- **What:** Picture 9 inset "WITHOUT A CHECKER (MYTHOS, VETTED GROUPS ONLY)" and picture 3's Mythos kitchen with "no gate". The sources say Mythos is the same model "with the safeguards lifted in some areas" (row 21) for vetted groups (rows 2, 3), not with no safeguards at all; research.md's "where the analogy stops": "the same chef with fewer rules".
- **Fix:** Picture only, net 0 words. Inset label: "MYTHOS · CHECKS LIFTED FOR VETTED GROUPS"; the exploit ticket still goes straight through. Keep the L70 entry naming picture 9 with the new label.
- **Rule:** none (research.md's "where the analogy stops" already says it; draw the restricted version as fewer rules, not none).

### Budget
Now 157 words (the limit; a draft of 149 ran 50.9 s, so about 53.6 s). S1 +3 in line 9, -3 in line 3; S2 0; S3 pictures only. After all three: 157 words.

Out of scope or not a fail: the opening line (hook craft); the 9/1 split being ours (lines 3 and 11 say "our example"); the bar height (45% is "a bit under half", correct); API users' case and which older Opus (in the description, research.md narrowing 4-5); how the checker decides and why it is reliable (wishes beyond 60 s); the blocked request landing on a weaker model (the takeaway counts it: 1 of 10).

## Writer: should-fixes applied after round 2
- S1: on screen only (picture 11 "JUST AS STRONG ON RISKY REQUESTS"); the spoken words were at the 157-word ceiling and "Here's how" (the turn) was kept.
- S2: "exploit" -> "attack code" in line 7, picture 9 and lesson.md.
- S3: the inset relabelled "MYTHOS · CHECKS LIFTED FOR VETTED GROUPS".
