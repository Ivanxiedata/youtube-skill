gate: fail (3 must-fix, 0 should-fix)

Round 2 (re-gate). Critic: a fresh agent that did not write the episode and did not take part in round 1.
G0 passes: `viewer.md`'s Spoken section equals `film/script.txt` line for line (diffed, empty). The on-screen part holds only words and plain pictures, numbered in order, with no notes, lesson ids, rows or drawing instructions.
Word budget: `wc -w film/script.txt` = 124 (style A, about 120-125, L94; cap 131 at 5% over). Line 1 = 20 spoken words (unchanged).
Round-1 fails re-checked: must-fix 1 (why the mistake repeats) fixed by "Claude kept trusting one wrong note"; must-fix 2 (kind word) fixed by "the Claude Managed Agents service" (row 23); must-fix 3 (credit) fixed by "Anthropic says" and "the test's three drops"; must-fix 4 fixed ("(25 words, `wc -w`)", every key quotes its spoken lines, all grepped in `film/script.txt`); should-fix 1 fixed ("a clean copy", labels "ITS NOTES", "CLEAN COPY"). Should-fix 2 was not done as written: the card says "ACCESS ON REQUEST", a condition, instead of what a research preview is (must-fix 2 below). Round 1's G6 part was folded into must-fix 1, but `lesson.md`'s "Why it matters" still holds unspoken parts (must-fix 3 below).
The fixes below bring the script to 129 words by `wc -w` (net +5), inside the cap of 131; line 1 is untouched.

## Student (round 2, verbatim from gate_student2.md)

## Student notes (round 2)

1. Main idea: An AI agent keeps notes it wrote itself, and one wrong note can make it repeat the same mistake. A cleanup called "dreaming" rereads past sessions next to the notes and writes a corrected copy, so the agent stops repeating the mistake.

2. Ideas learned:
- Notes can be wrong, and a wrong note repeats. Think of scribbling class notes fast. If one line is wrong, you'd get the same answer wrong on the test every time. The video showed a test paper with the same wrong answer crossed out.
- An agent's memory is just notes it wrote itself. In Anthropic's Pokemon test, Claude trusted one wrong note and fell off a ledge three times. A meter counted 0, 1, 2, 3 drops.
- Dreaming fixes this. It's like a good student who rewatches the class recording and writes a clean copy of the notes. Claude rereads its past sessions next to its notes, finds the wrong one, and writes a clean copy. The old notebook stays where it was.
- After the fix, Claude reached the next city in the test, according to Anthropic. The drop meter stayed at 3 and didn't move.
- Dreaming is a research preview (access on request) in Claude Managed Agents, a service that runs agents.

3. Things I can't explain or took on faith:
- "Claude Managed Agents": the screen says "a service that runs agents", but I don't know what that means in practice or who uses it.
- "Research preview · access on request": I don't know whether I could use dreaming, or what it costs.
- How does it know which note is wrong? "Claude rereads past sessions beside its notes" doesn't say how it spots the mistake. I took that on faith.
- The Pokemon test: I don't know what the test was for or how many tries there were. "Anthropic says" means I'm taking their word, and there was no number for how often it works.
- "Three drops off a ledge": I couldn't tell why a ledge drop is a mistake. A ledge drop in Pokemon is normally a one-way hop.
- Why the "dreaming" name? Nothing explains it.
- "Reached the next city": is that one run or every run? It isn't clear.
- "Memory cleanup" in the opening: I didn't know what "cleanup" meant until much later.
- I might scroll away at the opening line, "you never check A I agents' notes, but why can one wrong note cost you?" It's a long, dense sentence with the product name stuffed in. The "Subscribe, and comment" ending is also skippable.
- The recap, "notes can be wrong; rereading turned the test's three drops into the next city", is dense. It's a bit wordy for a summary.

## Answers to the 3 questions

Q1: An agent's memory is notes it wrote itself, like class notes scribbled fast, so a line can be wrong. When a note is wrong, the agent trusts it and repeats the mistake. In the Pokemon test, Claude fell off the same ledge three times.

Q2: Dreaming has Claude reread its past sessions beside its notes, like a student rewatching the class recording. It finds the wrong note and writes a clean copy with the line fixed.

Q3: With the note fixed, Claude stopped dropping off the ledge and reached the next city, Anthropic says. The old drop count of 3 stayed in the past.

## Checks

| # | Check | Result | Evidence |
|---|---|---|---|
| G0 | viewer.md only what the viewer sees; spoken = `film/script.txt` | pass | diff of the Spoken section against `film/script.txt` is empty; no notes, ids, rows or production notes |
| G1 | Main idea is an insight (full) | pass | "An AI agent's memory is notes it wrote itself in the moment, so a note can be wrong; rereading the full record can fix it." `wc -w` = 25 (lesson.md says 25). A belief, not a headline or a mechanism; no who/when/how many; both "can"s are hedges, no absolute or superlative. Rows 10, 11 ("based on what it judges to be salient in-session", "wrong from the start"), 4, 12 ("ground truth"), 16, 21 support it |
| G2 | Deepest true idea (full) | pass | The sources' "not yet" gaps are "research preview" (row 2) and "can"/"one way ... requires compute" (rows 16, 21); both kept (line 6, main idea's "can"). Row 11's "read, and trusted, by Claude in a later session" and row 12's "ground truth" are the main idea's two halves; row 5 (old store kept, you review) is a product condition, not a deeper idea |
| G3 | The student got it (full) | **fail (must-fix 1)** | Main idea matches lesson.md's (notes it wrote itself, one wrong note repeats the mistake, rereading past sessions beside the notes writes a corrected copy). Keys re-ticked against `film/script.txt`, quoting the spoken words: Q1 "notes it wrote itself" (line 3), "class notes, scribbled fast" and "the mistake repeats" (line 2), "trusted again" = "Claude kept trusting one wrong note" (line 4), "three drops off a ledge" (line 4); Q2 "Good students fix theirs from the recording" (line 5), "Claude rereads past sessions beside its notes, and writes a clean copy" (line 7); Q3 "Note fixed, Claude reached the next city, Anthropic says" (line 8), "rereading turned the test's three drops into the next city" (takeaway). All 3 answers right. But the student marks Q1's example, the mistake itself, as not understood: "'Three drops off a ledge': I couldn't tell why a ledge drop is a mistake. A ledge drop in Pokemon is normally a one-way hop." Nothing spoken says a drop sends Claude back onto the route it came from (row 14: "a one-way ledge that drops the player onto the route they came from"; row 15: "dropped back onto that earlier route"), so "three drops" -> "the next city" rests on faith. The student's "how does it know which note is wrong?" comes after it repeats the spoken reason (the recording, Q2), so the wish rule wins there; "who uses it", cost and the name are wishes (row 7 and row 20 left out on purpose) |
| G4 | Questions worth asking | pass | Q1 why + what happens, Q2 how, Q3 what changes; each asks for every part of its key |
| G5 | Shown, not asserted | pass | Q1: shot 5 (same amber answer, "SAME MISTAKE"), shots 7-9 (the "WRONG NOTE" card read again, meter "DROPS OFF THE LEDGE" ticking to 3), the without-picture, in `viewer.md`. Q2: shot 12 (highlight stops on the wrong note, a caught mistake), shot 13 ("CLEAN COPY"). Q3: shots 14-15 (meter holds at 3, "REACHED THE NEXT CITY") against shots 8-9; shot 17's panels. Every Picture line in lesson.md matches a `viewer.md` item (re-ticked: shots 5, 6, 7-9, 10, 12-13, 14-15, 17) |
| G6 | Why it matters | **fail (must-fix 3)** | The reason is a real change (three drops -> the next city, rows 15, 17), not proxies. But lesson.md's "Why it matters" still opens with parts no line speaks: "An agent carries what it learned from one session to the next only through its memory notes (rows 9, 10)", "it writes them from what seemed important in that session", and "so they are worth rechecking against the past sessions". Breaks open L72 |
| G7 | Misconception | pass | Said: "you never check A I agents' notes" (the step, L89); corrected: "An agent's memory is notes it wrote itself." and "notes can be wrong". Lesson.md's Misconception entry quotes the current lines (grepped) |
| G8 | No faith steps | pass | Line 4 gives the reason in the same breath ("kept trusting", row 11); line 8 credits "Anthropic says"; the takeaway "the test's three drops" (L69). Why rereading fixes it: the recording / "past sessions", the record (row 12), and the student repeats it |
| G9 | Every line serves | **fail (must-fix 1, must-fix 2)** | Every body line serves Q1-Q3; body scroll-aways: 0 (the student's are the hook and the call to action, both exempt). Kind words held: "Anthropic's memory cleanup" (line 1), "A I agents", "Anthropic's Pokemon test", "the Claude Managed Agents service" (row 23), card "A SERVICE THAT RUNS AGENTS". One word per thing held: "notes"/"clean copy", "drops", "recording"/"past sessions", "mistake" (L76). But: (1) "drops off a ledge" is a stand-in never said to be what it is, a fall back the way Claude came (L67; must-fix 1). (2) Shot 11's card "RESEARCH PREVIEW · ACCESS ON REQUEST" carries a condition, access on request, that line 6 never says (L71, repeated 2026-11-27: a condition on a card is said in the line under it), and it still doesn't say what a research preview is (round-1 should-fix 2, not done as written; must-fix 2) |
| G10 | True main idea (full) | pass | The main idea is supported (rows 10-12, 16, 21). The takeaway "notes can be wrong; rereading turned the test's three drops into the next city." carries the test ("the test's", L66/L69) and claims only that test's two runs (rows 15, 17); its unit (drops, the next city) is shot 17's panels' unit; "rereading" points back to line 7's "rereads past sessions"; the card keeps "REREADING CAN FIX THEM." The student's "one run or every run?" is answered by "the test's" and the card's "CAN"; no line says it always works. Must-fix 1's rewrite leaves the takeaway's unit unchanged |
| G11 | Carry-over limits | pass | No advice to the viewer's own work. "writes a clean copy" fits row 5 (the input store is never modified), and shot 13 keeps "ITS NOTES" in place |
| G12 | Lessons | **fail (must-fix 1-3)** | Broken: L67 ("drops off a ledge" never said to be a fall back the way it came; must-fix 1), L71 (the card's "ACCESS ON REQUEST" never said; must-fix 2), L72 (lesson.md's "Why it matters" parts never spoken; must-fix 3). Held: L3 (G13), L58 (25 words by `wc -w`), L59, L60 (every key part spoken, re-ticked in G3), L61, L62, L63, L64 ("kept trusting" in line 4), L65, L66, L68, L69 (line 4, line 8 "Anthropic says", takeaway "the test's"; on screen shots 7, 14, 17), L70, L74 (every Lesson check and Misconception quote grepped in `film/script.txt`; old words "too.", "dropped Claude", "went back in", "cleaned-up memory", "platform", "OLD NOTES", "NEW MEMORY" absent from lesson.md and viewer.md except as prose about row 15 and the "left out" note), L76, L77, L78 n/a, L81 (longest line 20 words, one model), L84 (drops, Anthropic's unit, row 15), L89, L92 n/a, L93 ("reached the next city", row 17) |
| G13 | A story everyone knows | pass | Class notes scribbled fast, fixed afterwards from the lecture recording (rows S1-S3); mechanism matches (written in the moment, checked against the full record, rows 4, 11, 12). Before in the story's own words (line 2), now "Good students fix theirs from the recording." (line 5), carried into line 7's "clean copy". The repeated test mistake (shot 5) is marked our example in research.md ("where the analogy stops" (5)), a hypothetical, not a fact about the world |

## Must-fix 1: "three drops off a ledge" never says why a drop is the mistake (G3, G9, G12: L67)
- **What**: Line 4, "In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops off a ledge." A drop is the counted mistake and the takeaway's before side, but nothing spoken says what a drop does: it lands Claude back on the route it came from (rows 14, 15). The student: "I couldn't tell why a ledge drop is a mistake. A ledge drop in Pokemon is normally a one-way hop." So Q1's example, and the takeaway's "three drops into the next city", rest on faith. Must-fix (G3: part of an answer taken on faith; L67: a stand-in never said to be what it is).
- **Fix**: replace line 4 with "In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops off a ledge, back the way it came." (20 words, **net +5**; row 14: "drops the player onto the route they came from"; row 15: "dropped back onto that earlier route"). In `viewer.md`, shot 9 splits its cue: "three drops off a ledge," keeps its picture, and "back the way it came.": the robot lands on the route below and a small tag "BACK THE WAY IT CAME" points at the path it already walked. Update `viewer.md`'s Spoken section, Q1's key and Spoken quote, and the L64, L67, L70, L72 entries in lesson.md. The claim check (3b) re-reads line 4.
- **Rule**: When the counted mistake is a stand-in (a drop, a fall, a red light), say in the same line what it costs ("back the way it came"); the count alone doesn't say why it is bad.

## Must-fix 2: the research-preview card carries an unsaid condition and still doesn't say what the label means (G9, G12: L71, L67)
- **What**: Shot 11's card under line 6 ("Dreaming, a research preview in the Claude Managed Agents service, does that."): "RESEARCH PREVIEW · ACCESS ON REQUEST". "Access on request" is a condition the line never says (L71, repeated 2026-11-27: "a condition on a card is said in the line under it"; round 1's should-fix 2 said "No access condition on the card"). And "research preview" is still never said to be an early version: the student, "I don't know whether I could use dreaming". Must-fix (open L71).
- **Fix**: on screen only, **net 0 spoken words**: shot 11's second line "RESEARCH PREVIEW · ACCESS ON REQUEST" -> "RESEARCH PREVIEW: AN EARLY VERSION". Before the claim check, add a quoted row for "early version" (a maker's sentence saying a research preview is an early or not-yet-final release); if no source says it, the card reads only "RESEARCH PREVIEW" (drop the condition either way). "Request access" goes in the description (row 2). Update lesson.md's L59 and L67 entries, which quote "ACCESS ON REQUEST".
- **Rule**: none (L71 already says it: a condition on a card is said in the line under it or cut; mark it `Repeated:`).

## Must-fix 3: lesson.md's "Why it matters" still holds parts no line speaks (G6, G12: L72)
- **What**: lesson.md, "Why it matters": "An agent carries what it learned from one session to the next only through its memory notes (rows 9, 10), and it writes them from what seemed important in that session", and "so they are worth rechecking against the past sessions". No line says sessions start fresh, that memory is the only carry-over, or what seemed important in a session; "only" is an absolute no spoken line backs. Round 1 folded this G6 part into must-fix 1, and only "trusted again" reached the script. Must-fix (open L72: every part is spoken, or cut from lesson.md).
- **Fix**: lesson.md only, **net 0 spoken words**: replace the first paragraph's opening with "An agent's memory is notes it wrote itself (rows 10, 11), like class notes scribbled fast, so a wrong one is trusted again and the mistake repeats: in Anthropic's Pokémon test, Claude kept trusting one wrong note: three drops off a ledge, back the way it came (rows 11, 14, 15)." and the last sentence's "so they are worth rechecking against the past sessions, which is what dreaming does" with "and rereading past sessions beside them can fix them, which is what dreaming does". Then re-quote the L72 entry from the final script.
- **Rule**: none (L72 already says it; mark it `Repeated:`).

## The script with every fix (129 words by `wc -w`)
```
Claude dreaming, Anthropic's memory cleanup: you never check A I agents' notes, but why can one wrong note cost you?
Here's why: class notes, scribbled fast. One wrong line, and the mistake repeats.

An agent's memory is notes it wrote itself.
In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops off a ledge, back the way it came.

Good students fix theirs from the recording.
Dreaming, a research preview in the Claude Managed Agents service, does that.
Claude rereads past sessions beside its notes, and writes a clean copy.
Note fixed, Claude reached the next city, Anthropic says.

So, what we learned: notes can be wrong; rereading turned the test's three drops into the next city.
Want more? Subscribe, and comment what we should explain next.
```
Net: +5 (line 4) +0 (must-fix 2, on screen) +0 (must-fix 3, lesson.md) = +5 -> 129, inside the cap of 131. Line 1 stays at 20 words. Every other line is unchanged.
