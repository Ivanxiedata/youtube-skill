ready to publish

# Evaluation: claude-sheets-v2 (step 6, round 2: re-judge after the fix round)

Judge: a fresh agent that made neither the episode nor any of its gate, claim or round-1 judge passes. Rubric: `docs/roles/evaluator.md` ("Re-judge (after a fix round)") and the rules it cites (`docs/lessons.md`, `docs/brand.md`, `docs/workflow.md`). Round 1 is at `$RUNNER_TEMP/claude-sheets-v2/evaluation_round1.md`.
Files the maker changed in the fix round: words (`research.md`, `brief.json`, `beats.md`, `package.md`, and the notes in `gate*.md`), and picture (`film/film.js` shot 4 only, then `video.mp4` and `film/film.mp4`). So I re-checked rows 1-15 and 16-19, plus row 20 for should-fix 1.
`video.mp4` is byte-identical to `film/film.mp4` (md5 bed451cd...). The build log `$RUNNER_TEMP/claude-sheets-v2/fix4/build7.log` ends `ISSUES 0`. Scratch files are in `$RUNNER_TEMP/judge2-claude-sheets-v2/`. I compared frames against round 1's copy of the video: frames 100, 200, 334, 478, 900 and 1600 are identical. Shot 3's tail (frames ~225-253) differs only by encoding drift (PSNR 52-68 dB). Shot 4 (frames 254-333) is the one that changed.

## Must fix

None.

## Should fix

| # | Row | Rule | Result | Evidence | Fix |
|---|---|---|---|---|---|
| 1 | 20 (L88) | "a prop, costume or label in red `#E4493F` other than the promise sticker and the Subscribe button" | conflict, owner decides (carried from round 1, unchanged) | `film.js:402` still draws the corner tag's "60s" pill with `pill(...,130,56,RED)`, on every frame. `docs/brand.md`'s corner tag points to Episode 0's `overlay()`, which draws the same red pill, and every episode since has it. So I am not counting it as must-fix | Owner: either exempt the corner tag's pill in L88/`brand.md`, or change the pill to amber/teal in the shared template for all episodes |

## Passed

| Row | Rule | Result | Evidence |
|---|---|---|---|
| 1 Title | under 60 chars, subject in the first 40 | pass (re-checked) | `upload.json` title is unchanged: "Claude Sheets Beta (2026): Formulas That Show Their Work", 56 chars, subject at char 1. `package.md` changed only title #10, a rejected candidate |
| 2 One promise | no thumbnail word besides the topic's name | pass, inputs unchanged | Title and thumbnail are unchanged since round 1 |
| 3 Thumbnail at 160 px | readable, brand card | pass in round 1, inputs unchanged | `thumbnail.png` was not touched by the fix round (03:51) |
| 4 Searches (L37) | search words in title and description lines 1-2 | pass (re-checked) | `package.md` searches and `upload.json` lines 1-2 are unchanged. "claude sheets", "beta" and "formulas" are all in the title and lines 1-2 |
| 5 Hook (L16, L31) | 3-second test, true numbers, hookscore >= 72 | pass (re-checked) | `script.md` and `film/script.txt` are unchanged. The spoken hook is the same sentence round 1 scored 72. In `beats.md` the runner-up hook now reads "a math teacher said", with a note that it was scored with "your" and ruled narrower |
| 6 First seconds | confirm the title's promise | pass (re-checked) | Shots 0-2 are byte-identical to round 1 (frames 100, 200). "=SUM(...)" / "THE FORMULA SHOWS HOW" appear by 6 s |
| 7 Topic first (L14, L16, L36) | title card from frame 0; name first; card cut on a measured pause | pass (re-checked) | The voice and the title card are unchanged. The cut at frame 35 still lands on the measured pause after "Sheets" |
| 8 Turn (L46) | line 1 under 8 s; turn by ~10 s | pass (re-checked) | `vo_lines.json` is unchanged. Line 1 is 5.60 s, and "Here's how: a math teacher's rule..." starts at 6.35 s |
| 9 Beats (L1, L44, L52) | no shot over 5 s; average <= 3 s; no alpha-faded figures; something to look at | pass (re-checked; round-1 should-fix 2 fixed) | The cuts in `film/film.json` are unchanged: 21 shots, average 2.65 s, longest 4.97 s. Shot 4 is 80 frames (2.67 s). Shot 4's stills (frames 254, 256, 262, 276, 294, 333): on the first frame there is no hand or pencil on the desk front. `film.js:187` draws the pencil and grip hand only from T+0.6 s, as the arm lifts (`kf` over 0.75 s). The mascot is at x 202, left of the page, and its whole face is clear of the page in every still. `mascot()` is not inside a `globalAlpha` or `boxIn`. The circled step and "THE WRONG STEP SHOWS" give the shot its point |
| 10 Payoff | promise delivered out loud | pass (re-checked) | The script and picture of shots 11-13 are unchanged (frame 478 identical) |
| 11 Close (L32) | "So, what we learned:" then the ask | pass (re-checked) | Unchanged: the WHAT WE LEARNED card, the takeaway, and the red Subscribe and "COMMENT: WHAT NEXT?" (frame 1600 identical) |
| 12 Claims | every claim sourced; ruled-out phrases nowhere but records; no unsourced inference; conditions kept | pass (re-checked; round-1 must-fix 1-2 and should-fix 3-4 fixed) | Stem grep of the whole folder (`your math`, `math teacher'?s? (said\|rule)`, `are formulas`, `totals are`, `formulas? (sit\|are\|is)`, `every (total\|number)`, `pasted from chat`, `holds? (values\|plain)`, `so mistakes show`, `formulas you can check`, `they're formulas`, `live formula`, `answers only`, `hand(ed\|s)? in`, `admin`, `write tabs`). (a) `research.md:49` now reads "in Claude Sheets, our totals can be formulas in the cells (Claude can write formulas, row 3)", and `:56` says "The sources do not say Claude writes every number as a formula". (b) `beats.md:32,39` and `package.md:25` now say "a math teacher", each with a note naming claims.md #3. (c) `research.md:54` now reads "(in our example the pasted table held plain text, no formulas)", with no general inference left. (d) `brief.json` `tech.one_line` and `research.md:12` now keep "if it shows Undo" and "the card goes away a few seconds after you're back in the sheet, or as soon as you work in the cells", matching `research.md` row 6. (e) The remaining hits are records: `gate.md:3` and the first lines of `gate_round1/2.md` and `gate_student1-3.md` mark the quoted lines as predating claims.md's fixes and name the replacements (rows 3, 4, 16). Other hits are `claims.md` and `mistakes.md`. `package.md:21` "Every Total Shows Its Work" is a rejected title whose note says "'every' is absolute". "ANSWERS ONLY" (`film.js:143`) stays tied to "LIKE OUR PASTED TABLE". `beats.md:9` "Claude's formulas sit in the cells" restates [B] "Formulas stay in the cells". `upload.json` is unchanged (3430 bytes) |
| 13 Before -> after (L25, L34) | pain first, side by side, NOW reaches the outcome, meter honest | pass (re-checked) | The picture outside shot 4 is unchanged (frames 478, 900, 1600 identical). Shot 4 has no meter |
| 13b Lesson | main idea and Q1-Q3 as gate-passed | pass (re-checked) | `script.md`, `lesson.md` and `viewer.md` are unchanged. The `gate*.md` edits are notes only |
| 14 Brand | each element of "What repeats" | pass (re-checked), all present | Format, safe area, casting, mascot, corner tag, opening, structure, takeaway card, CTA, voice and music are as in round 1. In shot 4 the mascot holds its amber pencil (`ear:false` because it is in hand). Safe area: the corner tag, the page, the words and the mascot's face are all inside x 60-918. The edge of the hoodie's shoulder reaches x ≈ 24 on shot 4's last frame, under the camera push. That is the same as the unchanged shot 1 (x ≈ 22 on its last frame, passed in round 1), and the left edge holds no Shorts UI |
| 15 Lessons (`check: evaluate`, open) | each followed | pass (re-checked) | `docs/lessons.md` has not changed since round 1 (last commit 2b528a8). L17 and L26 now hold (row 12). L1, L44 and L52 hold (row 9). L47 holds (row 18). L12: earshot measure, describe and timeline were re-run on the new mix. L48: the text helpers are unchanged, and shot 4's label fades but does not scale. L88: see should-fix 1. The other lessons are as in round 1 |
| 16 Loudness | -17 +/- 1 LUFS, TP < -1 dBTP | pass (re-checked) | `earshot measure` on a copy: -17.0 LUFS, true peak -4.4 dBTP, LRA 2.8 LU |
| 17 Describe | no noise or hum; voice clear; music | pass (re-checked) | `earshot describe`: voice-over narration +4.0, AudioSet Speech 0.92, Music 0.89. No noise or hum tag. The foley tags are weak (wooden block +2.3, lego +2.2) |
| 18 Cuts (L47) | >= 50% with a sound; none silent within 100 ms | pass (re-checked) | `earshot timeline video.mp4 --video video.mp4`: of 20 cuts, 95% have an onset within 1 frame and 100% within 100 ms (median 16 ms). Shot 4's cut at 8.47 s is at +24 ms. The worst is 6.19 s at -42 ms |
| 19 Audit, length (L21) | ISSUES 0; <= 60 s; ~150 words | pass (re-checked) | build7.log ends `ISSUES 0` with no shot-4 reach warning. `ffprobe`: 55.65 s. The voice is unchanged (ends 54.22 s). `script.md` is unchanged (153 spoken words, as counted in round 1) |
| 20 Format | 1080x1920; safe area; no chapters; text >= 44 px; description < 5000 bytes | pass except should-fix 1 (re-checked) | `ffprobe`: 1080x1920 at 30 fps. `upload.json` is unchanged: no chapters, 3430 bytes. Safe area: see row 14 |
| L73 voice tails | last 50 ms of each line under -28 dB | passed in round 1, inputs unchanged | `vo.wav` was not touched by the fix round |

## Not evaluated
- Pronunciation and delivery ("A I", "twenty twenty-six", "paid-plan"): earshot does not transcribe, so these are for the owner's ears.
- Caption timing: `film/align.json` is still byte-identical to `align_est.json`, so the word times in `captions.srt` are estimates.
- Retention and click-through: these need the published video (`yt-retention`).

## Rows re-checked in this round
Rows 1, 2, 4-20 (rows 1-15 because the words changed; rows 3, 9 and 14-19 because the picture and sound changed; row 15 always; row 20 for round-1 should-fix 1). Row 3 (thumbnail) and the L73 voice-tail check are carried over: "passed in round 1, inputs unchanged". All round-1 items were re-checked: must-fix 1 and 2 are fixed; should-fix 2, 3 and 4 are fixed; should-fix 1 is still open for the owner.
