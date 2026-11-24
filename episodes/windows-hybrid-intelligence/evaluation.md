ready to publish

# Evaluation: windows-hybrid-intelligence (step 6, round 2, re-judge)

Re-judged 2026-11-24 by a fresh agent that did not make the episode, following `docs/roles/evaluator.md`, "Re-judge (after a fix round)". Round 1 (`not ready: 1 must-fix`, rows 12 and 15, chapter 2 title; should-fix row 8) is kept at `$RUNNER_TEMP/windows-hybrid-intelligence/evaluation_round1.md`.
Files the maker changed after round 1: `upload.json` (chapter 2 retitled from "0:13 Today 40 steps, soon 2" to "0:13 Our 40 steps, soon 2 on Copilot+") and `claims.md` (row 8 note).

**Rows re-checked:** 1, 2, 4, 20 (`upload.json` changed), 12 (`claims.md` changed, and round-1 must-fix), 15 (lessons, always, and round-1 must-fix), 8 (round-1 should-fix).
Tools run this round: `title.py`, `chapters.py captions.srt`, `ffprobe` on `video.mp4` (57.70 s), and a read of `upload.json`, `claims.md`, `research.md` (narrowing list), `captions.srt` and `docs/lessons.md` (unchanged since 2026-11-23 22:20 UTC, before round 1).

## Must fix
None.

## Should fix
| # | Row | Result | Evidence | Fix |
|---|---|---|---|---|
| 8 | Turn by about 10 s | late (unchanged, carried as should-fix) | `captions.srt` cue 2 "Here's what changes." still starts at 00:00:11,955, so the turn lands about 2 s after the 10-s mark. The hook is one 11-s sentence (cue 1, 0.5-11.455 s). Nothing comes before the turn: no channel intro and no subscribe pitch. The maker chose not to fix it, because a fix needs a re-voice and a rebuild (`mistakes.md`, row 36). | No rebuild for this alone. In future episodes, time the hook line in the draft voice and keep it under about 8 s (the new lesson candidate in `mistakes.md`). Re-voice it only if the episode is rebuilt for another reason. |

## Re-checked, passed
| # | Row | Result | Evidence | Rule |
|---|---|---|---|---|
| 1 | Title | pass | The title is unchanged: "Windows Hybrid Intelligence: 40 Steps to 2, Soon on Copilot+". `title.py` printed "60 characters, inside the 60-character desktop cut" and "carries a concrete figure (40, 2,)". The score is 66. The flags `mobile`, `duplicate` and `thumb-length 7` come from the brand card and are allowed (`package.md`). The subject starts at character 1. | "Must-fix: over 60 characters, or the subject not in the first 40." |
| 2 | Title + thumbnail, one promise | pass | The title and thumbnail text are the same as round 1. Besides the topic's name, the title repeats no thumbnail word. The new chapter title brings no conflict. | "besides the topic's name, the title repeats no thumbnail word" |
| 4 | The 3 searches | pass | Description lines 1-2 are unchanged. "windows hybrid intelligence", "windows hybrid intelligence copilot" and "copilot windows" are each in the title and in line 1, word by word. | L37 |
| 12 | Claims traced | pass | Chapter 2 now reads "0:13 Our 40 steps, soon 2 on Copilot+" (32 characters). It marks the numbers as our example ("Our"), keeps "soon" and keeps "Copilot+", which matches `claims.md` row 8 and `research.md`'s narrowing list ("Not out yet", "Only on Copilot+ PCs"). `claims.md` row 8 now notes "Also FIXED after judge round 1: chapter 2 in `upload.json` now ...", and the note matches the file. The other chapter titles hold no number: "Soon on Copilot+: fewer steps", "Local or cloud, per task" and "What we learned, soon". Every other description line is unchanged from round 1, where each sentence carried its condition. The 49 rows are still 35 holds, 14 narrower (all FIXED) and 0 wrong. | L17, L26 |
| 15 | Open `evaluate` lessons | followed | **L17/L26 (Repeated)**: fixed, see row 12. Now every chapter title, description sentence, label and card that states a number of the example says it is ours and gives its condition. `docs/lessons.md` has not changed since round 1, and every other open `evaluate` lesson is followed as in round 1: L1, L2, L7, L9, L11, L12, L14, L16, L25, L31, L32, L34, L36 and L37. | `docs/lessons.md` |
| 20 | Chapters (validity) | pass | `upload.json` has chapters at 0:00, 0:13, 0:30 and 0:45 in a 57.70-s video: 13, 17, 15 and 12.7 s long. They start at 0:00, there are 4 of them, and each is at least 10 s. `chapters.py captions.srt` proposes 0:00, 0:13, 0:34 and 0:45. The maker moved the third chapter to the 0:30 "How?" cut, which is still valid. Only chapter 2's wording changed; its time is the same. | `/yt-chapters` |

## Carried over
| # | Row | Result |
|---|---|---|
| 3 | Thumbnail at 160 px | passed in round 1, inputs unchanged |
| 5 | Hook, 3-second test | passed in round 1, inputs unchanged |
| 6 | First seconds do three things | passed in round 1, inputs unchanged |
| 7 | Topic first | passed in round 1, inputs unchanged |
| 9 | Beats | passed in round 1, inputs unchanged |
| 10 | Payoff | passed in round 1, inputs unchanged |
| 11 | Close | passed in round 1, inputs unchanged |
| 13 | Before -> after | passed in round 1, inputs unchanged |
| 14 | Brand elements | passed in round 1, inputs unchanged |
| 16 | Loudness | passed in round 1, inputs unchanged |
| 17 | Noise, voice, music | passed in round 1, inputs unchanged |
| 18 | Sound on cuts | passed in round 1, inputs unchanged |
| 19 | Audit, length | passed in round 1, inputs unchanged |

## Not evaluated
- **Pronunciation:** earshot does not transcribe. The owner should listen for "Copilot plus P Cs" (the voice script spells it out, 4 times), "A I inferences" and "M X C", which is shown on screen only. Also check that "Windows hybrid intelligence:" finishes cleanly before the 2.2 s cut.
- **Motion between frames:** judged from 46 stills and the audit (max hand step 21, foot skate 0, lowest 1-s motion 0.2), not by watching in real time. Two moments are worth one look: the files gliding into the folders in shot 4 and in shot 12, and the meter's 40 -> 2 cross-fade.
- **Pace and feel of the voice and music:** for the owner's ears. earshot only confirms a clear voice-over over quiet music.
- **Whether the "before" feels true to viewers:** the 20 uploads are our illustration. No source says Copilot needs files uploaded one by one today, and the description says so. The owner decides whether the scene reads as fair.
- **Retention, CTR, audience fit:** these need the video to be public (`yt-retention`).
- **Thumbnail on a real phone feed:** judged at 160 px on screen only.
