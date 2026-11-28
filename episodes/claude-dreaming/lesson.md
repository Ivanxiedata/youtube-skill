# Lesson: claude-dreaming

Main idea (one sentence, at most about 25 words: what the viewer will think differently; not the headline, not the mechanism):
An AI agent's memory is notes it wrote itself in the moment, so a note can be wrong; rereading the full record can fix it. (25 words, `wc -w`)

Why it matters (to the viewer or the field, with the research.md row):
An agent's memory is notes it wrote itself (row 10), and a wrong note gets trusted again, so the mistake repeats: in Anthropic's Pokémon test, Claude kept trusting one wrong note: three drops back the way it came (rows 11, 14, 15).
Rereading past sessions beside the notes and writing a clean copy fixed it: note fixed, Claude reached the next city, Anthropic says (rows 4, 16, 17). What changes for you: notes can be wrong, and dreaming, a research preview in the Claude Managed Agents service (rows 2, 23), is the reread that fixes them.

Misconception it corrects:
"You don't check an AI agent's notes" (its memory is taken as a record of fact). Said in the hook ("you never check A I agents' notes"), corrected in line 3 ("An agent's memory is notes it wrote itself.") and the takeaway ("notes can be wrong"). Worded as the step the main idea changes (checking), not an end state (L89).

The 3 questions a viewer can answer afterwards (how / why / what changes, never "what happened"), each with its full answer and the picture that shows it working:
1. Q: Why can an AI agent's memory be wrong, and what happens when a note is? / A: Because it's notes the agent wrote itself, like class notes scribbled fast; the wrong note is trusted again, so the mistake repeats: in Anthropic's Pokémon test, Claude kept trusting one wrong note: three drops back the way it came. / Spoken: "class notes, scribbled fast. One wrong line, and the mistake repeats." / "An agent's memory is notes it wrote itself." / "In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops back the way it came." / Picture: shot 5 (the same amber answer on the test, "SAME MISTAKE"); shot 6 ("MEMORY = NOTES IT WROTE ITSELF"); shots 7-9, the "WRONG NOTE" card read again before each walk, the tag "BACK THE WAY IT CAME", and the meter "DROPS OFF THE LEDGE" ticking 1, 2, 3. [rows S1, 10, 11, 14, 15]
2. Q: How does dreaming fix the notes? / A: Like a good student fixing their notes from the recording: Claude rereads past sessions beside its notes, and writes a clean copy. / Spoken: "Good students fix theirs from the recording." / "Dreaming, a research preview in the Claude Managed Agents service, does that." / "Claude rereads past sessions beside its notes, and writes a clean copy." / Picture: shot 10 (the laptop playing the class, old notebook vs new clean copy, the amber line turning teal); shots 12-13 ("PAST SESSIONS" beside "ITS NOTES", the highlight stopping on the wrong note, then "CLEAN COPY" with that note fixed). [rows S2, 4, 16]
3. Q: What changes once the wrong note is fixed? / A: In Anthropic's test, the three drops turned into reaching the next city. / Spoken: "Note fixed, Claude reached the next city, Anthropic says." / "rereading turned the test's three drops into the next city." / Picture: shots 14-15 (the note card with its "WRONG NOTE" stamp gone, the meter staying at 3 while Claude walks through the cave to "REACHED THE NEXT CITY") against shots 8-9 (the meter ticking); shot 17's two panels, "DROPS OFF THE LEDGE" 3 -> "REACHED THE NEXT CITY". [rows 15, 17]

(Shot numbers here are `viewer.md`'s items.)

The counted example: the ledge in Anthropic's Pokémon test, from the hook's "1 WRONG NOTE" (shot 3) to the takeaway's panels (shot 17). The meter "DROPS OFF THE LEDGE" ticks to 3 in BEFORE (row 15) and holds in NOW while Claude reaches the next city (row 17). No "0" is drawn: no source counts the fixed run's drops.

The story (rows S1-S3): class notes, written fast in class (a first draft, S1), fixed afterwards from the lecture recording (S2, S3). Before = studying from the first draft as it is: one wrong line, and the mistake repeats (our example); now = fixing them from the recording; the recording = the agent's past sessions; the clean copy = the new notes. Where it stops (`research.md`): a dream writes a new store and leaves the old one unchanged; it reads whole sessions (1 to 100) and costs tokens and time; it "can" fix notes, not always; it is a job you start, not nightly sleep; the wrong line is our example.

What we leave out on purpose (and why):
- The old store stays unchanged, you review or discard the new one (row 5): no spoken room in about 125 words, and L94 says no new feature after the payoff; shown in shot 13 (the old notebook stays where it was) and said in the description.
- The docs' list (duplicates merged, stale or contradicted entries replaced, new insights surfaced, row 4): said as "a clean copy" without a shortened list (L26); the full list in the description.
- How long and what a dream costs (row 7), 1 to 100 sessions (row 6): how to try it; description.
- How Claude went back into the cave (row 17, "went straight back into Mt. Moon"): cut for the word budget in gate round 1; drawn in shot 15.
- CL-Bench, the wikis and their scores, the Pokémon file counts: other lessons.
- The sleep origin of the name (row 20): context, not a reason (L62).

Lesson check (before every student run; quoted from the current `film/script.txt` and `viewer.md`, after gate rounds 1 and 2): each open `check: gate` lesson, then the line that meets it, or "n/a" and why.
- L3 / G13 (a story everyone knows, carrying before -> now): before: "Here's why: class notes, scribbled fast. One wrong line, and the mistake repeats."; now: "Good students fix theirs from the recording." / "Dreaming, a research preview in the Claude Managed Agents service, does that."; the story's "clean copy" in "and writes a clean copy". Facts: rows S1-S3; the wrong line is our example (no number on it).
- L58 (belief, at most 25 words, no who/when/how many): 25 words by `wc -w`; no name, date or count.
- L59 (test a "done but not yet" gap): the gap is "research preview" and "can": kept as "a research preview in the Claude Managed Agents service" (card: "RESEARCH PREVIEW", said in line 6) and the main idea's "can fix it"; the takeaway says "notes can be wrong".
- L60 (how/why/what-changes questions, each key part spoken): every key above quotes its spoken lines ("Spoken:"), re-ticked against `film/script.txt` after round 1.
- L61 (contrast or caught mistake): the meter ticking to 3 (shots 8-9) vs holding while Claude reaches the next city (shots 14-15); the highlight stopping on the wrong note (shot 12), the caught mistake.
- L62 (why it matters names what changes): "rereading turned the test's three drops into the next city"; the viewer stops taking an agent's notes as checked ("notes can be wrong").
- L63 (misconception said, then corrected): "you never check A I agents' notes" -> "An agent's memory is notes it wrote itself." and "notes can be wrong".
- L64 (reason in the same breath): why the mistake repeats: "Claude kept trusting one wrong note" (it reads and trusts the note again); why rereading fixes it: "rereads past sessions beside its notes" (the sessions are what happened, like the recording).
- L65 (cut lines that answer no question): every body line serves Q1, Q2 or Q3; line 6 names the feature with its kind word and condition.
- L66 (takeaway keeps every condition): "notes can be wrong" (can); "rereading" (the past sessions, the story's recording); "the test's three drops" carries the test.
- L67 (say what a label is): "Claude dreaming, Anthropic's memory cleanup" (kind and maker in line 1); "A I agents" (kind); "Anthropic's Pokemon test" (a test, by Anthropic); "the Claude Managed Agents service" (kind word "service", row 23; card "A SERVICE THAT RUNS AGENTS"); "research preview" is said as the status it is (no source sentence defines it, so the card says only "RESEARCH PREVIEW", gate round 2); "past sessions" said as what Claude rereads, mapped to "the recording".
- L68 (absolute words need a row): "never" is the viewer's habit in the misconception, not a claim about the tech; no absolute in the main idea.
- L69 (say whose claim): line 4 "In Anthropic's Pokemon test"; line 8 "Anthropic says"; the takeaway "the test's three drops"; on screen "ANTHROPIC'S POKÉMON TEST" in shots 7, 14 and 17.
- L70 (show what slips through without the check): shots 7-9, the wrong note read and trusted, three drops.
- L71 (every number on screen is said, every card condition spoken): "1 WRONG NOTE" ("one wrong note"); meter 0-3 ("three drops"); card "RESEARCH PREVIEW" (line 6), "A SERVICE THAT RUNS AGENTS" (line 6 "service"); "60s" and "IN 60 SECONDS" brand.
- L72 (every part of "why it matters" spoken): "notes it wrote itself", "An agent's memory is notes it wrote itself", "Claude kept trusting one wrong note: three drops back the way it came", "Claude rereads past sessions beside its notes, and writes a clean copy", "Note fixed, Claude reached the next city, Anthropic says", "notes can be wrong", "Dreaming, a research preview in the Claude Managed Agents service, does that".
- L74 (re-quote before each student run): every quote above re-taken from the current `film/script.txt` after rounds 1, 2 and 3 (Q3 key fixed after round 3); the main idea recounted with `wc -w` (25).
- L76 (one word for one thing): "notes" always the written memory, and the fixed result is "a clean copy" of them (story and agent alike); "memory" said once, defined as notes; "drops" for the ledge (line 4 "three drops back the way it came", the takeaway "three drops", the meter "DROPS OFF THE LEDGE"); "recording" only the class's, "past sessions" only the agent's; "mistake" the repeated error.
- L77 (say what the before withheld): the before is the notes as written and trusted again ("kept trusting"), never reread; the now adds the reread ("rereads past sessions beside its notes").
- L78: n/a (no safeguard number). L81: no line holds 3 numbers.
- L82: viewer.md and script.txt are frozen between student and critic.
- L84 (count in the maker's unit): the meter counts drops back onto the route, Anthropic's own count ("three times", row 15).
- L89 (misconception as the step): "you never check" (the step), not "you trust".
- L92: n/a (no maker's test result carried to the viewer's own work as advice).
- L93 (a win says the result was as good): the fixed run "reached the next city" (row 17), the outcome itself.

For the takeaway, the conditions the main idea rests on: "can" ("notes can be wrong"); rereading the full record ("rereading", the past sessions); the test ("the test's three drops").
