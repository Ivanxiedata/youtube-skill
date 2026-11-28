gate: fail (1 must-fix, 1 should-fix)

Round 3 (re-gate, the last allowed round; after this the owner decides). Critic: a fresh agent that did not write the episode and took part in no earlier round.
G0 passes: `viewer.md`'s Spoken section equals `film/script.txt` line for line (diffed, empty). The on-screen part holds only words and plain pictures, numbered in order, with no notes, lesson ids, rows or drawing instructions.
Word budget: `wc -w film/script.txt` = 126 (style A, about 120-125, L94; cap 131 at 5% over). Line 1 = 20 spoken words (unchanged).
Round-2 fails re-checked: must-fix 1 (why a drop is the mistake) fixed: line 4 now says "three drops back the way it came" (rows 14, 15), shot 9 carries "BACK THE WAY IT CAME", and the student repeats it ("each time landing back on the route it came from"). Must-fix 2 fixed: shot 11's card reads only "RESEARCH PREVIEW", said in line 6; no unsaid condition left on the card. Must-fix 3 fixed: lesson.md's "Why it matters" now holds only spoken parts (re-ticked below). But the cut that paid for must-fix 1 ("off a ledge" out of the voice) left a stale key part in lesson.md (must-fix 1 below) and a stand-in the student had to infer (should-fix 1 below).
With the fixes below the script is 129 words by `wc -w` (net +3), inside the cap of 131; line 1 is untouched.

## Student (round 3, verbatim from gate_student3.md)

## Student notes (round 3)

1. Main idea: An AI agent keeps notes it wrote itself, and one wrong note can make it repeat the same mistake. "Dreaming" lets Claude reread its past sessions next to those notes and write a corrected clean copy, which in Anthropic's test got it unstuck.

2. Ideas learned:
- Agent memory is just notes the agent wrote itself. Like scribbled class notes, one wrong line gets copied again and again. In the video, the robot's notebook had one amber wrong line, and the same wrong answer then showed up on a test paper.
- Anthropic's Pokemon test showed this. Claude trusted one wrong note and dropped off a ledge three times, each time landing back on the route it came from.
- Dreaming is the fix. It is a research preview inside a service called Claude Managed Agents. Claude rereads its past sessions next to its notes and writes a clean copy, like a student rewatching the class recording and rewriting their notes. After the fix, Claude reached the next city, according to Anthropic.

3. Things I can't explain or took on faith:
- "Claude Managed Agents": the video says it is "a service that runs agents" but not who uses it or whether I could use it.
- "Research preview": I don't know what that means for me (can I use it today? is it reliable?).
- How does Claude know which note is wrong? It "rereads past sessions beside its notes", but not how it spots the error. I had to take that on faith.
- Why would it trust the wrong note three times before anything changed? The video doesn't say whether dreaming runs between sessions or during one.
- "Three drops back the way it came": I had to infer that a "drop" means hopping off the ledge. I'm not sure what the wrong note actually said.
- "Note fixed, Claude reached the next city, Anthropic says": this is Anthropic's own claim, with no independent check and no numbers (one run? many?).
- The old notes seem to stay ("ITS NOTES stays where it was"), but I don't know why that matters.
- Why the name "dreaming"? It is never explained.
- Moments I'd scroll away: the opening "you never check A I agents' notes, but why can one wrong note cost you?" is a bit abstract. "Good students fix theirs from the recording." is a school analogy that stalls things. The closing "Want more? Subscribe, and comment..." is the usual outro.

## Answers to the 3 questions

Q1: An agent's memory is notes it wrote itself, and nobody checks them. If one note is wrong, the agent keeps trusting it and repeats the mistake. In the Pokemon test, Claude trusted one wrong note and dropped off the ledge three times, back the way it came.

Q2: Dreaming has Claude reread its past sessions beside its notes and write a clean copy. That corrects the wrong note, like a student fixing their notes from the class recording.

Q3: With the note fixed, Claude stopped dropping off the ledge and reached the next city, per Anthropic. The three drops became progress.

## Checks

| # | Check | Result | Evidence |
|---|---|---|---|
| G0 | viewer.md only what the viewer sees; spoken = `film/script.txt` | pass | diff of the Spoken section against `film/script.txt` is empty; no notes, ids, rows or production notes |
| G1 | Main idea is an insight (full) | pass | "An AI agent's memory is notes it wrote itself in the moment, so a note can be wrong; rereading the full record can fix it." `wc -w` = 25 (lesson.md says 25). A belief the viewer takes away, not a headline (no who/when/how many) or a mechanism; both "can"s are hedges, no absolute or superlative. Rows 10, 11 ("based on what it judges to be salient in-session", "wrong from the start"), 4, 12 ("ground truth"), 16, 21 support it |
| G2 | Deepest true idea (full) | pass | The sources' "not yet" gaps are "research preview" (row 2) and "can" / "one way ... but it requires compute" (rows 16, 21); both kept (line 6, the main idea's "can", the card "REREADING CAN FIX THEM."). Row 11's "read, and trusted, by Claude in a later session" and row 12's "ground truth" are the main idea's own two halves; row 5 (old store kept, you review it) is a product condition, not a deeper idea, and left out on purpose |
| G3 | The student got it (full) | **fail (must-fix 1; should-fix 1)** | Main idea matches lesson.md's (notes it wrote itself; one wrong note repeats the mistake; rereading past sessions beside the notes writes a corrected clean copy). Whole notes graded: the class-notes reason ("Like scribbled class notes, one wrong line gets copied again and again") is in its notes, so Q1's "like class notes scribbled fast" is held. Keys re-ticked against `film/script.txt`, quoting the spoken words: Q1 "notes it wrote itself" (line 3), "class notes, scribbled fast" and "the mistake repeats" (line 2), "the wrong note is trusted again" = "Claude kept trusting one wrong note" (line 4), "three drops back the way it came" (line 4): all spoken. Q2 "Good students fix theirs from the recording" (line 5), "Claude rereads past sessions beside its notes, and writes a clean copy" (line 7): all spoken. Q3 "Note fixed, Claude reached the next city, Anthropic says" (line 8), "the test's three drops into the next city" (takeaway); but Q3's key A still reads "the three drops **off the ledge** turned into reaching the next city", and "off the ledge" is no longer spoken anywhere (cut from line 4 this round) (must-fix 1, L60/L74). All 3 answers right. The student: "I had to infer that a 'drop' means hopping off the ledge": it inferred it right from the picture (shot 8, the meter "DROPS OFF THE LEDGE"), so this is a label known only from the screen, not a faith step (should-fix 1). Wishes, not fails: "how does Claude know which note is wrong?" comes after it repeats the spoken reason (the recording / past sessions); what the note said (row 13), when a dream runs (row 19), who uses the service, whether "I could use it" (row 2's request access, in the description), the name (row 20), why the old notes stay (row 5): all left out on purpose and beyond the length |
| G4 | Questions worth asking | pass | Q1 why + what happens, Q2 how, Q3 what changes; each asks for every part of its key |
| G5 | Shown, not asserted | pass | Q1: shot 5 (the same amber answer, "SAME MISTAKE"), shots 7-9 (the "WRONG NOTE" card read again, the robot landing back on the route, "BACK THE WAY IT CAME", the meter ticking to 3): the without-picture, in `viewer.md`. Q2: shot 12 (the highlight stops on the wrong note, a caught mistake), shot 13 ("CLEAN COPY"). Q3: shots 14-15 (meter holds at 3, "REACHED THE NEXT CITY") against shots 8-9; shot 17's panels. Every Picture line in lesson.md re-ticked against the current `viewer.md` (shots 5, 6, 7-9, 10, 12-13, 14-15, 17): all match, including the new "BACK THE WAY IT CAME" tag |
| G6 | Why it matters | pass | A real change, not proxies: "three drops back the way it came" -> "reached the next city" (rows 15, 17). Every part of lesson.md's "Why it matters" now reaches the script: "notes it wrote itself" (line 3), "kept trusting one wrong note: three drops back the way it came" (line 4), rereading past sessions and a clean copy (line 7), "Note fixed, Claude reached the next city, Anthropic says" (line 8), "notes can be wrong" (takeaway), "a research preview in the Claude Managed Agents service" (line 6). Round-2 must-fix 3 fixed |
| G7 | Misconception | pass | Said: "you never check A I agents' notes" (the step, L89); corrected: "An agent's memory is notes it wrote itself." and "notes can be wrong". The Misconception entry quotes the current lines (grepped) |
| G8 | No faith steps | pass | Line 4 gives the reason in the same breath ("kept trusting", row 11) and now what a drop costs ("back the way it came", rows 14, 15); line 8 credits "Anthropic says"; the takeaway "the test's three drops" (L69). Why rereading fixes it: past sessions = the recording (row 12). The student's "no independent check" is answered by the spoken credit |
| G9 | Every line serves | **fail (should-fix 1)** | Every body line serves Q1-Q3; body scroll-aways: 1 ("Good students fix theirs from the recording."), within 2 (the hook and the call to action are exempt). Kind words held: "Anthropic's memory cleanup" (line 1), "A I agents", "Anthropic's Pokemon test", "the Claude Managed Agents service", "research preview" said under the card that shows it (round-2 must-fix 2 fixed; no source defines it, so the card adds nothing). One word per thing held: "notes"/"clean copy", "drops", "recording"/"past sessions", "mistake". But "drops" is now spoken with what it costs and never with what it is: "off a ledge" left the voice this round, so a drop is said only on screen (the meter "DROPS OFF THE LEDGE", shot 8's hop); the student "had to infer that a 'drop' means hopping off the ledge" (should-fix 1: a stand-in named only on screen, not a must-fix because L67 is met on screen and the student got it right) |
| G10 | True main idea (full) | pass | The main idea is supported (rows 10-12, 16, 21). The takeaway "notes can be wrong; rereading turned the test's three drops into the next city." keeps its conditions ("can", "the test's", "rereading" = line 7's "rereads past sessions"), claims only that test's two runs (rows 15, 17), and its unit (drops, the next city) is shot 17's panels' unit. Line 4's new words "back the way it came" are row 14 ("drops the player onto the route they came from") and row 15 ("dropped back onto that earlier route three times"). The student's "one run? many?" is answered by "the test's" and the card's "CAN"; no line says it always works |
| G11 | Carry-over limits | pass | No advice to the viewer's own work. "writes a clean copy" fits row 5 (the input store is never modified); shot 13 keeps "ITS NOTES" in place |
| G12 | Lessons | **fail (must-fix 1)** | Broken: L60 and L74 (repeated 2026-11-27: "after any edit to the script, grep lesson.md for every changed line's old words"): line 4's old words "off a ledge" survive in Q3's key as "the three drops off the ledge", never spoken (must-fix 1). Held: L3 (G13), L58 (25 words by `wc -w`), L59 ("research preview", "can"), L61, L62, L63, L64 ("kept trusting", "back the way it came" in line 4), L65, L66, L67 (on screen; see should-fix 1), L68, L69 (line 4, line 8 "Anthropic says", takeaway "the test's"; on screen shots 7, 14, 17), L70 (shots 7-9), L71 (card "RESEARCH PREVIEW" said in line 6; "1 WRONG NOTE" and the meter's 3 said; "60s"/"IN 60 SECONDS" brand), L72 (re-ticked in G6), L76 (the L76 entry quotes the new line 4), L77, L78 n/a, L81 (longest line 20 words, one model), L84 (drops, Anthropic's unit, row 15), L89, L92 n/a, L93 ("reached the next city", row 17). Every other Lesson check and Misconception quote grepped in `film/script.txt`: present. The main idea's "(25 words, `wc -w`)" recounted: 25 |
| G13 | A story everyone knows | pass | Class notes scribbled fast, fixed afterwards from the lecture recording (rows S1-S3); mechanism matches (written in the moment, checked against the full record, rows 4, 11, 12). Before in the story's own words (line 2), now "Good students fix theirs from the recording." (line 5), carried into line 7's "clean copy". The repeated test mistake (shot 5) is marked our example in research.md ("where the analogy stops" (5)) |

## Must-fix 1: Q3's answer key keeps "off the ledge", cut from the voice this round (G3, G12: L60, L74)
- **What**: lesson.md, Q3: "A: In Anthropic's test, the three drops off the ledge turned into reaching the next city." Line 4 was rewritten from "three drops off a ledge" to "three drops back the way it came", and no spoken line now says "off the ledge"; Q3's own Spoken quotes ("Note fixed, Claude reached the next city, Anthropic says." / "rereading turned the test's three drops into the next city.") don't hold it. A key part with no spoken line, left by not grepping lesson.md for the changed line's old words. Must-fix (open L60, L74, both repeated).
- **Fix**: lesson.md only, **net 0 spoken words**: Q3's A -> "In Anthropic's test, the three drops turned into reaching the next city." (keep its Spoken and Picture as they are; the meter label "DROPS OFF THE LEDGE" stays in the Picture line, it is on screen). Then update the L60 and L74 entries' "after round 1" / "after rounds 1 and 2" to say they were re-ticked after round 3, and grep lesson.md for "off a ledge" and "off the ledge" outside Picture lines and the meter label: none may remain. (If should-fix 1 is applied, line 4 says "off a ledge" again, but Q3's key still quotes only Q3's own spoken lines, so the rewrite stands either way.)
- **Rule**: none (L74 already says it: after any edit to the script, grep `lesson.md` for every changed line's old words; mark L74 and L60 `Repeated:`).

## Should-fix 1: "drops" is said with its cost but never with what it is (G9, G3 partly; L67 met only on screen)
- **What**: Line 4, "In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops back the way it came." To pay for "back the way it came", "off a ledge" was dropped, so the voice never says what a drop is; only the picture (shot 8's hop) and the meter label "DROPS OFF THE LEDGE" do. The student: "I had to infer that a 'drop' means hopping off the ledge." It inferred right, so should-fix. It also reads oddly aloud ("drops back" can be heard as a verb).
- **Fix**: replace line 4 with "In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops off a ledge, back the way it came." (20 words, L81 holds; **net +3**, total 129 by `wc -w`, inside the cap of 131; row 14: "a one-way ledge that drops the player onto the route they came from"; row 15). In `viewer.md`, update the Spoken section and shot 9's cue to "three drops off a ledge, back the way it came." (picture unchanged); in lesson.md, update Q1's key and Spoken quote, "Why it matters", and the L64, L76 entries to the new line 4. The claim check (3b) re-reads line 4.
- **Rule**: When a fix cuts words to pay for itself, don't cut the words that say what the counted thing is; cut elsewhere or let the line grow within the budget (a stand-in needs both what it is and what it costs).

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
Net: +0 (must-fix 1, lesson.md) +3 (should-fix 1, line 4) = +3 -> 129, inside the cap of 131. Line 1 stays at 20 words. Every other line is unchanged.
