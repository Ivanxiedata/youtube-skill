not ready: 1 must-fix

# Evaluation: claude-sheets (step 6, round 2, re-judge)

Judge: a fresh agent that made neither the episode nor round 1. Rubric: `docs/roles/evaluator.md` (yt-* skills, `docs/brand.md`, `docs/lessons.md`, `docs/workflow.md`).
I judged the layout from 9:16 stills I extracted from `video.mp4` with ffmpeg. For each of the 20 shots I took the first, middle and last frame with the safe area drawn, plus 14 extra frames through shot 10 (frames 829-880) and full-res edge crops of the last frames of shots 1 and 13. My scratch files are in `/home/runner/work/_temp/judge2-claude-sheets/`.
`video.mp4` is byte-identical to `film/film.mp4` (md5 0b682605...). The build log `/home/runner/work/_temp/claude-sheets/make/build_r2.log` ends `ISSUES 0`.

## Must fix

| # | Row | Rule | Evidence | Fix |
|---|---|---|---|---|
| 1 | 12 (L17 repeated 2026-11-26; L26 repeated 2026-11-24) | "a ruled-out phrase or its paraphrase in any other form ... grep the folder for the phrase's word stems"; "a line in `research.md` ... stating an inference no source says" | `claims.md` row 22 rules that the answers-only sheet must stay an analogy "tied to the pasted table" and must "not imply Claude could never write a formula". A grep for the stems "answer"/"hand* in" still finds `research.md:60` ("Where the analogy stops"): "before, Claude handed in only the answers (a pasted number shows no working); now it shows its working in every cell". That line pins it on Claude, not on our pasted table. "every cell" is also wider than narrowing item 2, because typed inputs have no formula. The same stem without the tie appears at `viewer.md:18` ("like a maths test handed in with answers only ... an answer sheet handed in by a robot") and `beats.md:60` ("it hands in sheets"). Round 1 fixed only `upload.json` and `beats.md:12/26` | `research.md:60`: "The story is a school maths test: before, our pasted table was like a test handed in with answers only (a pasted number shows no working); now each total's working sits in its cell, like a student who writes out the sum." `viewer.md:18`: add "(the analogy for our pasted table)" after "answers only". `beats.md:60`: "it hands in the answer sheet of the analogy (our pasted table)". These are words only, so nothing needs re-rendering. Re-grep `answer`, `hand` and `every cell` in the folder afterwards |

## Should fix

None.

## Passed

| Row | Result and evidence |
|---|---|
| 1 Title (re-checked) | `title.py`: "Claude Sheets Beta (2026): Check Claude's Math in the Cells". It is 59 chars and scores 66. The subject is at character 1. The flags are mobile, duplicate claude/sheets and thumb-length 6, all by design (the brand card) |
| 2 One promise (re-checked) | Beyond the topic's name, the title repeats no thumbnail word ("in" is a function word, not counted). The thumbnail has no picture words (L54) |
| 3 Thumbnail at 160 px (re-checked) | I shrank it to 160x90. "CLAUDE SHEETS" is clearly readable and "LEARN" / "IN 60 SECONDS" are legible. The brand card is there with the mascot (pencil) and the magnifier over the cells |
| 4 Searches (re-checked) | Each search's words are in the title or in description lines 1-2. "claude sheets": title and line 1. "claude sheets beta": title and line 1. "claude spreadsheet formulas": Claude is in the title; "spreadsheet" and "formulas" are in line 1 (L37) |
| 5 Hook (re-checked) | "Claude Sheets, 2026 beta: you think checking AI numbers will cost you a redo, but actually formulas show how." It names the topic and the viewer's moment, uses no architecture terms, and "2026 beta" is true. It does not end on "but how?". `hookscore.py`: 72 STRONG (weakest is STAKES 62), not below 72 |
| 6 First seconds (re-checked) | Shot 2's cell opens to "=SUM(...)" with "THE FORMULA SHOWS HOW", which confirms the title's promise |
| 7 Topic first (re-checked) | The title card runs from frame 0 to frame 38 (1.30 s). "Claude Sheets," is the first spoken words, inside the hook sentence. The cut is in the measured pause after "Sheets" (timeline onset at the cut +20 ms) |
| 8 Turn (re-checked) | Line 1 is 5.95 s in `vo_lines.json` (under 8 s). The turn "Here's how, on our hiring budget: three teams, four quarters." runs 6.2-10.1 s. Nothing comes before it |
| 9 Beats (re-checked) | There are 20 shots (cuts from `film.json`). The longest is shot 19 at 145 frames (4.83 s) and the average is 2.74 s. Every beat has a picture. The rebuilt shots 1, 8-11 and 13 add no alpha fade on a figure: in shot 10 only the fx tags, meter boxes and `lab` tags fade, and no figure is in frame (L1, L44) |
| 10 Payoff (re-checked) | It is said out loud ("if our total skipped a quarter, its formula shows it") and shown: "=SUM(Q1:Q3)", "SKIPPED Q4!", "OUR EXAMPLE" |
| 11 Close (re-checked) | "So, what we learned: pasted, our three totals hid their math; in the paid-plan beta, they're formulas you can check." The ask follows: "Want more? Subscribe, and comment what we should explain next." The screen shows the Subscribe button and "COMMENT: WHAT NEXT?" (L32) |
| 12 (rest, re-checked) | **Round 1 must-fix 2 is fixed:** "admin" and "turns it on" remain only in `claims.md` (where the ruling is recorded) and `mistakes.md`. `research.md:46` and `brief.json` status now read "until it's turned on in Organization settings > Artifacts". **Round 1 must-fix 3 is fixed** in `upload.json` ("Before, our pasted table was like a test handed in with answers only; now its working sits in the cells") and `beats.md:12/26`. The other files are must-fix 1 above. **Round 1 must-fix 4 is fixed:** the source's full list ("add tabs, write formulas that work across tabs, apply formatting and conditional formatting, and add dropdowns, checkboxes, and charts") is in description line 1, `package.md`, `research.md:10` and `brief.json` one_line. **Round 1 should-fix 1 is fixed:** line 1 now says only "since November 10, 2026, on paid plans" (the launch post [A]). The undated defaults have their own line 3, credited to the Help Center, with the full condition "Organization settings > Artifacts". The other description sentences carry their conditions: the card's two exit conditions, "which also removes edits made after it", and "Our example (illustration, not Anthropic's numbers)". The on-screen numbers have "OUR EXAMPLE" in the same shot from the first frame: in shots 8-10 the meter label "OUR EXAMPLE" shows on every extracted frame, from frame 656 on. Spoken lines are unchanged and trace to `research.md` rows 3-8 |
| 13 Before -> after (re-checked) | **Round 1 must-fix 1 is fixed (L34).** Shots 8-9 (frames 656-827) keep the meter's 3 boxes filled with "3", while the TOTAL column has no fx tag. In shot 10, `meterState` empties box i over `T+.1+.3i` to `+.5`, which is the same timing as fx tag i in `grid(...fx:[fin(t,T+.1,.5),fin(t,T+.4,.5),fin(t,T+.7,.5)])`. The frames show it: 835 (TEAM A fx, count 2), 847 (A and B fx, count 1), 860 (all three fx, boxes empty, no digit). The tick "ALL 3 HAVE FORMULAS" starts at T+1.2, after the third tag lands, and is full by frame 898. The before is a pain scene shown before the tech. Shot 18 puts BEFORE (3 amber) beside NOW ("ALL 3 HAVE FORMULAS") on the same counted example (L25) |
| 13b Lesson | Passed in round 1. The spoken script is unchanged (`vo_lines.json` matches `script.md`). The Q1-Q3 pictures are still present on the contact stills |
| 14 Brand (re-checked) | All present on the stills: 9:16 1080x1920; the corner tag "CLAUDE SHEETS · 60s" inside the safe area from the first frame to the last; the casting (cream mascot, teal screen-headed robot); the mascot's pencil costume; the title card in the thumbnail's style; the structure (hook, before, now, why, takeaway, outro); the two-line takeaway card; the CTA; the voice; the music ("Blue Sky", credited) |
| 15 Lessons (re-checked) | Followed: L1, L2, L7, L9, L11, L12, L14, L16, L25, L31, L32, L34 (fixed), L36, L37, L44, L46, L47, L48, L54, L56, L73, L79, L83. Not applicable: L57; L80 (fix-round time, a process lesson). Broken again: L17 / L26 (must-fix 1: a ruled-out paraphrase left in `research.md`, `viewer.md`, `beats.md`) |
| 16 Loudness (re-checked) | `earshot measure`: -17.1 LUFS, true peak -4.5 dBTP, LRA 3.0 |
| 17 Describe (re-checked) | No noise or hum tags (noise floor -38.2 dBFS). Voice-over narration +4.3; AudioSet Speech 0.85, Music 0.80 |
| 18 Timeline (re-checked) | `earshot timeline video.mp4 --video video.mp4`: of 19 cuts, 84% have an onset within 1 frame and 100% within 100 ms (median 15 ms; worst +48 ms at 0:30.02). No cut lacks a sound (L47) |
| 19 Audit and length (re-checked) | `build_r2.log` ends "ISSUES 0". The video is 54.7 s and the voice ends at 54.15 s. `script.md` is unchanged since round 1 (155 spoken words) |
| 20 Format (re-checked) | `ffprobe` 1080x1920. **Round 1 should-fix 2 is fixed:** in full-res crops of shot 1's last frame (frame 143), the bubble's left edge is at about x 75 and the pencil tip at about x 72. In shot 13's last frame (frame 1174), the window's right edge is at about x 915, the cursor at about x 912 and "EACH EDIT OUTLINED" at about x 907. All are inside x 60-918. `txt()` floors at 44 px and `boxIn` scales only the box (L48). `upload.json` has no chapters. The description is 4679 bytes (under 4900, L83) |

## Not evaluated
- Pronunciation and delivery ("A I", "twenty twenty-six"): earshot does not transcribe words, so this is for the owner's ears.
- I did not measure the music level under the voice on separate stems, only the mix.

## Rows re-checked in round 2
All of rows 1-20 except 13b: the words changed (rows 1-15), the picture changed (rows 3, 9, 14-19) and `upload.json` changed (rows 1, 2, 4, 20). Row 13b is carried over: "passed in round 1, inputs unchanged". The spoken script, `lesson.md` and the gate files did not change.
