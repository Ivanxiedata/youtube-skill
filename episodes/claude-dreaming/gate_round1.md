gate: fail (4 must-fix, 2 should-fix)

Round 1 (first gate). Critic: a fresh agent that did not write the episode.
G0 passes: `viewer.md`'s Spoken section equals `film/script.txt` line for line (diffed, empty). The on-screen part holds only words and plain pictures, numbered in order, with no notes, lesson ids, rows or drawing instructions.
Word budget: `wc -w film/script.txt` = 125 (style A, about 120-125, L94; cap 131 at 5% over). Line 1 = 20 spoken words (L46 cap 20).
The fixes below together bring the script to 131 words (must-fix only) or 130 (with should-fix 1), checked with `wc -w` on the rewritten script; line 1 is untouched.

## Student (round 1, verbatim from gate_student1.md)

## Student notes (round 1)

1. Main idea: An AI agent keeps notes it wrote itself, and if one note is wrong it keeps causing the same mistake, but a cleanup step called dreaming rereads past sessions against the notes and fixes the wrong one.

2. Ideas learned:
- Wrong notes repeat the mistake. Like a student who scribbles class notes fast and gets one line wrong: that wrong line then shows up as the same wrong answer on the test. The video showed the notebook line and the test paper with the same amber answer crossed out.
- An agent's memory is notes it wrote itself. In Anthropic's Pokemon test, the robot had a wrong note on a card, and it dropped off a ledge three times because of it.
- Dreaming fixes the notes. Like a good student who rewatches the class recording and writes a clean copy, Claude rereads its past sessions next to its old notes and writes a new, cleaned-up memory. It is a research preview in Claude Managed Agents.
- After the fix, Claude went back into the game and reached the next city. The ledge count stayed at 3, so the old drops were not undone.

3. Things I can't explain or took on faith:
- "Claude Managed Agents": what is it? Is it a product I can use? Not explained.
- "Research preview": I assume it means early and not final, but it is not said.
- "Dreaming": why is it called dreaming? Not explained, and I don't know when it runs (overnight? on demand? automatically?).
- "Claude rereads its past sessions beside its notes": how does it know which note is wrong? Taken on faith. The highlight "stops on the amber wrong note", but not why.
- "Anthropic's Pokemon test": what was the test for? How does a wrong note get written in the first place? Not said.
- "One wrong note dropped Claude off a ledge three times": why would a note cause a drop? What did the note say? Why did it not learn after the first fall?
- "you never check A I agents' notes": do I, as a user, even have access to them? Not clear.
- The meter "DROPS OFF THE LEDGE": fine, but the video doesn't say what a drop costs.
- Whether this is a real-world benefit for my work (cost, time) is not shown. "Cost you" in the opening is vague.
- "Rereading turned three drops into the next city": a bit of a leap. One run got three drops, and a later run reached the city. Is this one example or typical?

Scroll-away moments:
- "Dreaming, a research preview in Claude Managed Agents, does that." It is a dense label dump with no explanation.
- "Want more? Subscribe, and comment what we should explain next." Standard outro.
- Possibly the opening "Claude dreaming, Anthropic's memory cleanup: you never check A I agents' notes" because it is a long, abstract sentence.

## Answers to the 3 questions

Q1: An agent's memory is notes it wrote itself, and it writes them fast, so a note can be wrong, like scribbled class notes. When one is wrong, the agent repeats the same mistake. In the Pokemon test, one wrong note made Claude drop off a ledge three times.

Q2: Dreaming has Claude reread its past sessions next to its old notes, find the wrong note, and write a new, cleaned-up memory with that note corrected. It is like a student fixing their notes from the class recording.

Q3: With the note fixed, Claude went back in, did not fall, and reached the next city. The earlier count of 3 drops stays, but there are no new ones.

## Checks

| # | Check | Result | Evidence |
|---|---|---|---|
| G0 | viewer.md only what the viewer sees; spoken = `film/script.txt` | pass | diff of the Spoken section against `film/script.txt` is empty; no notes, ids, rows or production notes |
| G1 | Main idea is an insight | pass | "An AI agent's memory is notes it wrote itself in the moment, so a note can be wrong; rereading the full record can fix it." A belief the viewer takes away, not a headline (no who/when) or a mechanism. `wc -w` = 25, at the cap (lesson.md says 24: see must-fix 4). Both "can"s are hedges; no absolute word. Rows 10, 11 ("based on what it judges to be salient in-session", "wrong from the start") and 12, 16 support it |
| G2 | Deepest true idea | pass | The sources' "not yet" gaps are the research preview (row 2) and "can" (rows 16, 21); both are kept. Row 11's "read, and trusted, by Claude in a later session" and row 12's "ground truth" are the main idea's own two halves, not a deeper one. Row 5 (old store kept, you review) is a condition of the product, not a deeper idea |
| G3 | The student got it | **fail (must-fix 1, must-fix 4)** | Main idea matches lesson.md's (notes it wrote itself, one wrong note repeats the mistake, rereading past sessions against the notes fixes it); all 3 answers are right in substance. But: (a) the student marks the Q1 core as faith: "Why would a note cause a drop? ... Why did it not learn after the first fall?" Q1's key part "a wrong line gets used again" has no spoken line: the script says only "the mistake repeats" (must-fix 1). (b) Q3's key opens "The mistake stops repeating", never spoken (spoken: "With the note fixed, Claude went back in and reached the next city", "rereading turned three drops into the next city"); the student got it from the frozen meter only (must-fix 4). Ticked otherwise: Q1 "class notes, scribbled fast", "notes it wrote itself, too", "one wrong note dropped Claude off a ledge three times"; Q2 "Good students fix theirs from the recording", "Claude rereads its past sessions beside its notes, and writes a cleaned-up memory"; Q3 "went back in and reached the next city", "three drops". The student's "how does it know which note is wrong?" comes after it repeats the spoken reason (the recording), so the wish rule wins there |
| G4 | Questions worth asking | pass | Q1 why + what happens, Q2 how, Q3 what changes; each asks for every part of its key |
| G5 | Shown, not asserted | pass | Q1: shot 5 (the same amber answer on the test, "SAME MISTAKE") and shots 8-9 (meter "DROPS OFF THE LEDGE" ticking to 3), the without-picture, in `viewer.md`. Q2: shot 12, the highlight stopping on the amber wrong note (a mistake caught). Q3: shots 14-15 (the meter holding at 3 while Claude reaches the city) against shots 8-9, and shot 17's two panels. Every Picture line in lesson.md matches a `viewer.md` item |
| G6 | Why it matters | **fail, should-fix part (folded into must-fix 1)** | The reason is a real change, not proxies (three drops -> the next city, rows 15, 17). But lesson.md's first part, "carries what it learned from one session to the next only through its memory notes ... so a wrong one is read again later and the mistake repeats" (rows 9, 10, 11), never reaches the script. Same root cause as must-fix 1 |
| G7 | Misconception | pass | Said: "you never check A I agents' notes" (the step, checking, L89); corrected: "An agent's memory is notes it wrote itself, too" and "notes can be wrong". The student's "do I even have access to them?" is a wish (row 5's review is left out on purpose) |
| G8 | No faith steps | **fail (must-fix 1, must-fix 3)** | (1) "One wrong note dropped Claude off a ledge three times" has no reason why one note gives the same mistake again and again; the sources give it: Claude reads and trusts its notes in a later session (row 11: "can be read, and trusted, by Claude in a later session"; row 9: each session starts fresh, memory carries over). lesson.md's L64 entry gives the reason only in a parenthesis "(you study from the same line)", never spoken; "the mistake repeats" restates the problem. (3) Anthropic's result is credited only in line 4; line 8 ("With the note fixed, Claude went back in and reached the next city.") and the takeaway state Anthropic's result uncredited (L69, repeated 2026-11-27) |
| G9 | Every line serves | **fail (must-fix 2; should-fix 1, should-fix 2)** | Every body line serves Q1-Q3. But "Claude Managed Agents" (the product dreaming lives in) is never said to be what kind of thing it is (L67: the product gets a kind word); the student: "what is it? Is it a product I can use?" and calls line 6 a scroll-away "label dump" (must-fix 2). "Research preview" never said to be an early version (student: "I assume it means early... but it is not said"; should-fix 2). One thing, two words: line 7 reads "beside its notes, and writes a cleaned-up memory", and the labels go "AGENT'S NOTES" (shot 2), "MEMORY" (6), "OLD NOTES" (12), "NEW MEMORY" (13) for the same notebook (should-fix 1). Body scroll-aways: 1 (line 6), within 2 |
| G10 | True main idea | **fail (must-fix 3)** | The main idea is supported (rows 10-12, 16). The takeaway "rereading turned three drops into the next city" drops the condition the result needs: one test, Anthropic's (rows 15-18; research.md "where the analogy stops" (3): "the ledge is one example"). L66: "even when an earlier line said it"; lesson.md's own condition list says "the test's numbers stay with line 4", which is the case L66 forbids. The student: "a bit of a leap ... Is this one example or typical?" The takeaway's unit (drops, the next city) matches shot 17's panels. "Rereading" points back to line 7's "rereads its past sessions", and the student kept that object, so it holds |
| G11 | Carry-over limits | pass | No advice to the viewer's own work. "writes a cleaned-up memory" does not claim the old store is changed (row 5); should-fix 1's "clean copy" fits row 5 better still. "can" is on the card ("REREADING CAN FIX THEM.") |
| G12 | Lessons | **fail (must-fix 1-4)** | Broken: L60 (Q1 key "gets used again", Q3 key "The mistake stops repeating", never spoken), L64 (why the mistake repeats, left in lesson.md), L66 and L69 (the test's result uncredited in line 8 and the takeaway; lesson.md's L69 entry "line 8 continues the same test" is the case the repeat forbids), L67 ("Claude Managed Agents" with no kind word; lesson.md's L67 entry counts "research preview", a status, as its kind word), L72 (why-it-matters part never spoken), L74 (lesson.md's "(24 words)" and L58 "24 words" count 25 with `wc -w`). Held: L58, L59, L61, L62, L63, L65, L68, L70, L71 ("1 WRONG NOTE" said as "one wrong note", the meter's 3 said, "60s"/"IN 60 SECONDS" brand), L76 except should-fix 1, L77, L78 n/a, L81 (no line over 25 words or with two models), L84 (the meter counts Anthropic's own unit, drops, row 15), L89, L92 n/a, L93 ("reached the next city", row 17). Every other spoken quote in the Lesson check is found in `film/script.txt` (grepped) |
| G13 | A story everyone knows | pass | Class notes scribbled fast, fixed afterwards from the lecture recording (rows S1-S3); the mechanism matches (written in the moment, checked against the full record, rows 4, 11, 12). Before in the story's own words: "class notes, scribbled fast. One wrong line, and the mistake repeats."; now: "Good students fix theirs from the recording."; the takeaway reuses "notes". The repeated test mistake (shot 5) is recorded in research.md as our example ("where the analogy stops" (5)), not stated as a sourced fact about the world |

## Must-fix 1: why one wrong note repeats the mistake is never said (G8, G3, G6, G12: L60, L64, L72)
- **What**: Line 4, "In Anthropic's Pokemon test, one wrong note dropped Claude off a ledge three times." The script says the mistake repeats but never why: Claude reads its own notes again and trusts them (rows 9, 11). "One wrong line, and the mistake repeats" restates the problem. The student asked "Why did it not learn after the first fall?"; Q1's key part "a wrong line gets used again" has no spoken line. Must-fix.
- **Fix**: replace line 4 with "In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops off a ledge." (15 words, **net +1**). "kept trusting" is row 11's "read, and trusted". Shots 8-9 keep their picture, with the new words. Rewrite Q1's key to the spoken words ("Claude kept trusting one wrong note: three drops off a ledge"), and lesson.md's L64, L69, L76 entries ("dropped" -> "drops"). The claim check (3b) re-reads line 4: it no longer says the note itself "dropped Claude".
- **Rule**: When a mistake repeats, say in the same line why it comes back (what is read again and trusted); "and it repeats" is the problem, not its reason.

## Must-fix 2: "Claude Managed Agents" has no kind word (G9, G12: L67)
- **What**: Line 6, "Dreaming, a research preview in Claude Managed Agents, does that." The product dreaming lives in is never said to be what kind of thing it is; lesson.md's L67 entry counts "research preview", a status, as its kind word. The student: "what is it? Is it a product I can use?", and called the line a scroll-away. Must-fix.
- **Fix**: replace line 6 with "Dreaming, a research preview in the Claude Managed Agents platform, does that." (12 words, **net +2**). On screen, shot 11's card: "CLAUDE MANAGED AGENTS" -> "CLAUDE MANAGED AGENTS PLATFORM". Add a quoted row for "platform" to research.md before the claim check ([D] is "Claude Platform Docs", page header "Dreams Feature of Managed Agents"; the narrowing list's "Anthropic's platform for running agents" has no quote yet). Update lesson.md's L67 entry.
- **Rule**: The product a feature lives in gets its kind word ("the ... platform", "the app") the first time it is said; a status ("research preview", "beta") is not a kind word.

## Must-fix 3: Anthropic's result is credited only in line 4 (G8, G10, G12: L66, L69)
- **What**: Line 8, "With the note fixed, Claude went back in and reached the next city.", and the takeaway, "So, what we learned: notes can be wrong; rereading turned three drops into the next city.", state Anthropic's one test result with no "Anthropic" and no "test". The takeaway reads as a general rule; the student: "Is this one example or typical?". lesson.md's L69 entry ("line 8 continues the same test") and its takeaway condition ("the test's numbers stay with line 4") are the cases L69 (repeated 2026-11-27) and L66 ("even when an earlier line said it") forbid. One root cause, two lines. Must-fix.
- **Fix**: replace line 8 with "Note fixed, Claude went back in and reached the next city, Anthropic says." (13 words, **net 0**); replace the takeaway with "So, what we learned: notes can be wrong; in Anthropic's test, rereading turned three drops into the next city." (19 words, **net +3**). Shot 17's panels are unchanged (same unit). Update lesson.md's L66, L69 entries, Q3's key and the takeaway conditions list. Together: **net +3**.
- **Rule**: Every line that states a maker's test result names the maker or its test, the takeaway too, even when an earlier line already said it.

## Must-fix 4: lesson.md was not re-ticked against the final script (G3, G12: L60, L74)
- **What**: lesson.md's "(24 words)" after the main idea and its L58 entry "24 words": `wc -w` counts 25. Q3's key opens "The mistake stops repeating", which is never spoken. Must-fix (L74 repeated 2026-11-27: recount every "(N words)" with `wc -w`; L60: every key part has a spoken line).
- **Fix**: lesson.md only, **net 0 spoken words**: write "(25 words)" and "25 words"; rewrite Q3's key to the spoken words: "With the note fixed, Claude went back in and reached the next city, Anthropic says; in Anthropic's test, rereading turned three drops into the next city" (after must-fix 3). Then re-quote every key and Lesson check entry from the final `film/script.txt` and grep each one, and recount every "(N words)".
- **Rule**: none (L60 and L74 already say it; mark them `Repeated:`).

## Should-fix 1: one notebook, two words, "notes" and "memory" (G9, L76)
- **What**: Line 7, "Claude rereads its past sessions beside its notes, and writes a cleaned-up memory.": the input is "notes", the output "memory", and the labels for the same notebook go "AGENT'S NOTES", "MEMORY", "OLD NOTES", "NEW MEMORY". Line 3 ties the words, and the student followed it, so this is should-fix, not must-fix.
- **Fix**: replace line 7 with "Claude rereads past sessions beside its notes, and writes a clean copy." (12 words, **net -1**). It is the story's own word (shot 10: "writes a clean copy"), and "copy" fits row 5 (the old store is never modified). Shot 13's label "NEW MEMORY" -> "CLEAN COPY". Update Q2's key, the L76 entry and the "cleaned-up memory" lines in lesson.md (L26: still no shortened list of the docs).
- **Rule**: The thing before and after a fix keeps one name ("notes" -> "a clean copy" of them), never a second word for the result.

## Should-fix 2: "research preview" never said to be an early version (G9)
- **What**: Line 6's "research preview": the student guessed "early and not final" but notes "it is not said". A status label never explained. Should-fix.
- **Fix**: on screen only, **net 0 spoken words** (the budget has no room): shot 11's "RESEARCH PREVIEW" -> "RESEARCH PREVIEW: AN EARLY VERSION" (row 2). No access condition on the card (L71: a condition on a card is said in the line under it).
- **Rule**: Say once what a status label means ("research preview": an early version), on screen when the words don't fit.

## The script with every fix (130 words by `wc -w`; 131 with the must-fixes only)
```
Claude dreaming, Anthropic's memory cleanup: you never check A I agents' notes, but why can one wrong note cost you?
Here's why: class notes, scribbled fast. One wrong line, and the mistake repeats.

An agent's memory is notes it wrote itself, too.
In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops off a ledge.

Good students fix theirs from the recording.
Dreaming, a research preview in the Claude Managed Agents platform, does that.
Claude rereads past sessions beside its notes, and writes a clean copy.
Note fixed, Claude went back in and reached the next city, Anthropic says.

So, what we learned: notes can be wrong; in Anthropic's test, rereading turned three drops into the next city.
Want more? Subscribe, and comment what we should explain next.
```
Net: +1 (line 4) +2 (line 6) +0 (line 8) +3 (takeaway) -1 (line 7) = +5 -> 130, inside the cap of 131. Line 1 stays at 20 words. Lines 1, 2, 3, 5 and the call to action are unchanged.
