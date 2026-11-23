ready to publish

# Evaluation: prompt-caching-v2 (round 3, re-judge after round 2's M1 and S1)

Evaluator: a fresh agent that did not make the episode and has not seen the conversation that made it (step 6 of `docs/workflow.md`, `docs/roles/evaluator.md`, "Re-judge"), 2026-11-23.
Inputs: round 2 `evaluation.md` and the list of files changed since: `film/film.js` (chart labels in shots 22-23), `video.mp4` (shots 22 and 23 re-rendered), `beats.md`, `claims.md`, `progress.md`.
`video.mp4` is identical to `film/prompt-caching-v2.mp4` (`cmp`). Stills pulled with ffmpeg every 0.5 s from 39.0 to 46.0 s (15 stills) and every 2 s over the whole film (0-58 s, 30 stills), all looked at (scratch only).

## Rows re-checked
- M1 (row 15, L31, chart in shots 22-23): stills every 0.5 s, 39.0-46.0 s, every number read.
- S1 (rows 9 and 12, the record): the changed lines of `beats.md` and `claims.md` read against the film.
- Row 15 (lessons), L31 across the whole video: stills every 2 s, any decimal on screen; `film/film.js` number formatting.
- Row 19 (audit and length): `film/build.log`, `ffprobe`.
- Rows 9 and 14 (picture changed): from the same stills. Row 16 (loudness): ffmpeg `ebur128`, a spot check that the sound did not change.
- Every other row is carried over: `passed in round 2, inputs unchanged` (spoken words, voice, captions, `upload.json`, `thumbnail.png`, title and package did not change; the sound measures the same).

## Must fix
None.

## Should fix
| # | Row | Result | Evidence | Rule quoted | Fix |
|---|---|---|---|---|---|
| S1 | 9 and 12 (the record) | Half fixed: `beats.md` still names decimals the film no longer shows | Fixed: `claims.md` summary "32 rows: 29 hold, 3 narrower, 0 wrong"; `beats.md` shot 17 "the meter stops at "4""; shot 23 "no formula on screen"; shot 28 "nothing under it (L24)"; the on-screen text map line for the chart ("ABOUT 2x", "reads at 1/10"). Still out of line: `beats.md` line 110 (shot 14) "the meter fills to 1 (whole numbers on screen, L31) then ticks to "1.25"" (the film shows "1", stills 22 s and 24 s); line 118 (shot 22) "teal bar "WITH CACHING 2.15x"; small source line "... · 0.1x reads"" (the film shows "ABOUT 2x" and "reads at 1/10", stills 39.5-46 s); line 129 lists on-screen texts "1.25" and "4.15" (the film shows "1" and "4"). | Row 9: "something to look at on every beat (contact sheet, `beats.md`)"; row 12 starts "from `claims.md`" | `beats.md` line 110: drop "then ticks to "1.25""; line 118: "WITH CACHING ABOUT 2x", "... · reads at 1/10"; line 129: "1.25" -> "1", "4.15" -> "4". Text only, no rebuild. |

## Passed
| # | Row | Result | Evidence | Rule quoted |
|---|---|---|---|---|
| 1 | Title | passed in round 2, inputs unchanged | Round 2: `title.py` 52 chars, 70 with the thumbnail; subject at character 1. | "Must-fix: over 60 characters, or the subject not in the first 40." |
| 2 | Title + thumbnail, one promise | passed in round 2, inputs unchanged | Round 2: no title word besides the topic repeats a thumbnail word. | "besides the topic's name, the title repeats no thumbnail word" |
| 3 | Thumbnail at 160 px | passed in round 2, inputs unchanged | `thumbnail.png` not changed. | "topic and promise readable, brand card used." |
| 4 | The 3 searches | passed in round 2, inputs unchanged | Description lines 1-2 and title unchanged. | "their words are in the title and the first two description lines" |
| 5 | Hook, 3-second test | passed in round 2, inputs unchanged | Round 2: topic first, true, does not end on "but how?", `hookscore.py` 74 STRONG. | L16; "Must-fix if any number in it is not true, or if it ends on "but how?" (lesson L31)"; "should-fix below 72" |
| 6 | First seconds | passed in round 2, inputs unchanged | Round 2: the title's promise confirmed by the meter climbing to "x30" and "FULL PRICE". | "Must-fix if the title's promise isn't confirmed." |
| 7 | Topic first | passed in round 2, inputs unchanged | Title card from frame 0 (still 0 s seen again this round); first spoken words "Prompt caching". | L14: "the topic's name is the first spoken words" |
| 8 | Turn | passed in round 2, inputs unchanged | "Here's why." at 9.28 s. | "by about 10 s, one sentence saying what the video will do" |
| 9 | Beats | pass (record drift: S1) | Re-checked from stills every 2 s: something to look at on every beat. The re-rendered chart builds in steps: "10 REQUESTS" header (39.5 s), amber bar "10x" (40.5 s), teal bar "ABOUT 2x" (41.5 s), the second pair "30 QUESTIONS · OUR MATH · PDF PART" with "30" (44.5 s) and "ABOUT 4" (45-46 s). No empty frame. | "Should-fix for a beat with nothing to look at." |
| 10 | Payoff | passed in round 2, inputs unchanged | Spoken at 45.8 s over the BEFORE x30 / NOW 4 split (still 46 s seen again). | "Must-fix if missing." |
| 11 | Close | passed in round 2, inputs unchanged | Takeaway "Same book: read once, reuse the work." (still 52 s), one ask "Subscribe for the next one." (stills 54, 56 s). | "Should-fix for two asks or none." |
| 12 | Claims | pass (record drift: S1) | New chart labels stay inside the claims: "ABOUT 2x" under the spoken "just over two full reads" and OpenAI "one write and nine full reads cost 2.15× ... compared with 10× without caching" (`claims.md` row 8); "reads at 1/10" = "0.1 times" / "about a tenth" (rows 6, 8). Removing "1.25 + 29 x 0.1" drops a line, adds no claim. `claims.md` summary now counts 32 rows. | Row 12, L17, L26 |
| 13 | Before -> after | passed in round 2, inputs unchanged | Round 2: pain as a scene, same desk now, how, proof, side by side BEFORE x30 / NOW 4. | "Must-fix if the viewer can't say what is new or what it does for them" |
| 14 | Brand elements | pass | Re-checked from the stills: corner tag "Prompt Caching · 60s" top-left on every still 0-58 s, including the re-rendered 39-46 s; opening title card (0 s); mascot with amber glasses; two-line takeaway card, line 2 amber (52 s); red Subscribe button with nothing under it (54, 56 s). Voice and music unchanged. | `docs/brand.md`, "What repeats in every episode" |
| 15 | Lessons marked `evaluate` | all followed | L31 now followed across the whole film. Stills every 0.5 s, 39-46 s: "10 REQUESTS", "10x", "ABOUT 2x", "30 QUESTIONS", "30", "ABOUT 4", source line "OpenAI docs · GPT-5.6+, most models · reads at 1/10" ("GPT-5.6" is a model name; "1/10" is whole numbers); no "2.15x", no "0.1x", no "1.25 + 29 x 0.1". Stills every 2 s, 0-58 s: every number whole ("100 PAGES", "Q5", meter "5", "x30", "0", "1", "2", "3", "4", "30 PDFs PAID", "+25%", "SAME 30 QUESTIONS", clock "5:00", "0:43", "AT LEAST 5 MIN"). Between stills the meter cannot show a decimal: `film/film.js` line 208 draws `String(Math.round(v))` (amber, "x30" at the top) and `String(Math.max(1,Math.round(v)))` (teal); the clock (line 181) draws whole seconds. The hook still does not end on "but how?". Other lessons as in round 2 (L1, L2, L6, L7, L9, L11, L12, L14, L16, L17, L25 followed; L24 retired). | "Must-fix for a lesson broken again (its row says `Repeated:`)."; L31: "numbers on screen are whole ("about 4", not 4.15), decimals only in the description" |
| 16 | Loudness | pass | Spot check, ffmpeg `ebur128`: -17.0 LUFS integrated, LRA 1.8 LU, peak -3.3; the same as round 2's `earshot measure` (-17.0 LUFS, true peak -3.3 dBTP, LRA 1.8 LU): the sound did not change. | "-17 LUFS within 1, true peak under -1 dBTP" |
| 17 | Sound character | passed in round 2, inputs unchanged | No re-voice; sound measures the same (row 16). Round 2: no noise or hum tag. | "a noise or hum tag is Must-fix; voice-over clear; music present" |
| 18 | Sound on the cuts | passed in round 2, inputs unchanged | No cut moved (only shots 22-23 re-rendered). Round 2: 56% within 1 frame. | "Should-fix below 50%." |
| 19 | Audit and length | pass | `film/build.log` (09:26, same time as `video.mp4`): last build "frames in state files 1800 expected 1800", "max hand step 21.0 foot skate max 0", "lowest 1 s motion 0.22", ends "ISSUES 0". `ffprobe`: 60.000000 s, 1920x1080, 30 fps. | "duration at most 60 s"; L21 |
| 20 | Chapters | passed in round 2, inputs unchanged | `upload.json` and `captions.srt` not changed since round 2. | "Must-fix if invalid (they would not render)" |

## Not evaluated
- As in round 2: pronunciation and voice quality by ear, music taste, retention and click-through (needs the video public), the title's mobile cut on a real phone.
- The full earshot runs (describe, timeline) were not repeated: no audio input changed, and the loudness spot check matches round 2.
