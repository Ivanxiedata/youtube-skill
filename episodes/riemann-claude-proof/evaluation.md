ready to publish

# Evaluation, round 5 (re-judge): riemann-claude-proof (style B, judged against `style.md`, lesson L57)

Fresh evaluator, 2026-11-24. I did not make this episode or its fixes.
Per L57 it is judged against `style.md`, `lesson.md`, `viewer.md` and `claims.md` (round 4 and its fixes), not against the style-A rules or scorers.
These were not held against it: topic not first, hookscore, no title card or corner tag, no turn by 10 s, length over 60 s, no side-by-side diagram, 9:16, no chapters, inset low in the frame.

Inputs: `video.mp4` (1080x1920, 30 fps, 84.67 s, byte-identical to `film/video.mp4`), `film/vo_lines.json` (14 lines, ends 82.681 s), `film/vo.wav` (82.98 s), `film/film.js`, `film/film.json` (16 shots), `film/script.txt`, `captions.srt`, `viewer.md`, `claims.md`.
Changed since round 4: line 2 re-voiced (one new take in `film/voice_parts`, 5.79 s; the other 13 takes are unchanged since round 4), `timing.js`, `film.js`, every shot re-rendered, `video.mp4`, `captions.srt`, `viewer.md`.
Film time = `vo_lines.json` time + 0.5 s. All times below are video times.

## Rows re-checked
- Round-4 must-fix 1-4 and should-fix 1-3 (all below).
- Voice (every line re-transcribed), captions times, on-screen words against `viewer.md` and `claims.md`, chip/subtitle overlap at two chip changes, hands at every gesture entry and exit.
- Sound and picture rows 16-19: stickman audit, earshot `measure`, `describe`, `timeline`.
- Row 15 (open `check: evaluate` lessons that apply to style B: L2, L12, L32, L44, L56).

## Must fix
None.

## Should fix
1. **Line 2's last word, "line" (video 16.28-16.85 s), may sound like two syllables ("la-line"). The owner should listen.**
   - In `film/vo.wav` the vowel of "line" breaks in the middle. It is loud at vo 15.80-15.90 (-6.5 dB, pitch about 350-400 Hz), drops to -24 dB and loses voicing at 15.92-15.96, then comes back at 15.98-16.10 with pitch falling to about 140-250 Hz. Then there are about 200 ms of breathy hiss (16.10-16.30).
   - For comparison, "lines" on line 5 (vo 28.24-28.66) is one smooth vowel with steady, rising pitch.
   - Whisper base hears "line" cleanly in 5 of 8 passes. These include the line-2 tail of `video.mp4` ("important ones. Sit on one line."), the whole line ("...Sit on one line!"), and crops from vo 15.0 and 15.3 ("one line").
   - In the other 3 passes it hears a doubled syllable: "Sit on one lulline!" (whole `vo.wav`), "and lowline." (vo 15.55-16.45) and "Lawline!" (vo 15.75-16.45).
   - The line ends cleanly, so this is not round 4's stray "Bye!". If the owner hears a stutter, re-voice line 2 again.
2. **The OK-sign hand has a stray hairline through its ring, 6.7-10.7 s (line 2's gesture).**
   - In a full-res crop at 10.43 s, a thin dark line runs from inside the small ring across the thumb-finger loop to its outer edge.
   - Cause, in `film/film.js` `drawHand` 'ok': `x.arc(-38,-52,40,0,7);x.arc(-38,-52,15,0,7,true)` is stroked as one path, so the segment joining the outer and inner arcs is drawn too.
   - Fix: stroke the outer ring as its own path (or `moveTo` the inner arc's start first). Then re-render the shots for lines 1-2.

## Re-checked and fixed (round-4 rows)
- **Must-fix 1, the stray word after line 2: fixed.**
  - Whisper base on `video.mp4` 14.423-16.923 s (the last 2.5 s of line 2, 16 kHz mono) hears "important ones. Sit on one line." The gap after it, 16.42-17.67 s, hears "line earlier". That is the end of "line" and the start of line 3's "Earlier", with no extra word.
  - In `vo.wav`, line 2 decays to -46 dB at 16.40 and is at -61 dB by 16.42. Its `end` is 16.423.
  - Last 50 ms of every line in `vo.wav`, all quieter than -28 dB: -33.2, -36.6, -44.7 (line 2), -42.2, -39.2, -37.8, -31.1, -49.4, -36.1, -45.8, -40.5, -35.6, -46.1 and -39.5 dB. Each pause after a line is -77 to -115 dB.
- **Every line transcribed again (`vo_lines` + 0.5 s, `video.mp4`), plus the whole `vo.wav`, compared with `film/script.txt`.**
  - No word is dropped, repeated, cut off or garbled, apart from should-fix 1.
  - Expected mishears:
    - "Raven/Reuben/even" for Riemann;
    - "lean/Ling" for Lean;
    - "shaker" for checker;
    - "One more" for "Want more";
    - "Who K checks" for "Two key checks" (as in round 4);
    - "And a proof" for "And the proof";
    - "following" for "follow it";
    - "help find" for "helped find" (as in round 4).
  - Line 10's per-line crop loses "Certified". The word starts 13 ms after the line's `start` (energy from vo 55.75), so the crop clips it. A crop from vo 55.6 hears "Certified, doesn't mean understood", and so does the video from 55.9 s.
  - Line 1's "A" is lost in whisper, as in round 4 (the take is unchanged).
- **Must-fix 2, the counter: fixed.** In a 30 fps tile of 26.4-30.0 s (108 frames), every frame shows one whole number: 1, 2, 3 ... 17. There is no leading zero, no half digit and nothing stacked. Each number is held 3-4 frames, with a small brightness settle when it changes. 17 is reached at about 28.0 s and held. `f6()` now draws only `String(n)`.
- **Must-fix 3, the hands: fixed (L44).**
  - The hand and arm are now drawn at alpha 1 (`handState` returns `al:1`, no `pk` cross-fade). They slide in and out from beyond the right frame edge (x 1260).
  - I looked at 72 crops, 3 per transition (+0.07, +0.17 and +0.27 s), at all 12 slide-ins (1.0, 6.71, 13.18, 18.26, 24.62, 31.8, 34.86, 41.21, 46.98, 54.99, 63.48, 80.14) and all 12 slide-outs (5.41, 10.33, 16.82, 23.77, 26.0, 33.7, 40.76, 46.53, 53.32, 56.14, 62.63, 73.56).
  - Hand and sleeve are opaque in every frame. Nothing shows through, including full-res crops at 13.28, 56.33 and 10.43 s.
  - Back-to-back gestures (2.19, 55.69, 59.6, 67.24, 80.96) swap shape with the hand up.
- **Must-fix 4, the chip: fixed.** Line 3's second chip reads "ALL THE IMPORTANT ONES" (frame at 15.5 s). That is row 54's accurate wording, and `viewer.md` lists it.
- **Should-fix 1, the "=" card: fixed.** Its right box reads "THE STANDARD STATEMENT" (39.5 and 40.6 s), matching the fix to row 64 and `viewer.md`.
- **Should-fix 2, the stamp: fixed.** In a full-res crop at 54.3 s, "CERTIFIED", "CORRECT" and "NOV 21" all sit well inside the green border. There is no leading dot.
- **Should-fix 3, `viewer.md` and the chips: fixed.**
  - Every chip in `film.js` is in `viewer.md`, in order: AI BREAKTHROUGH; RIEMANN HYPOTHESIS; PRIMES, ENCODED; ALL THE IMPORTANT ONES; AT LEAST 2/3; MOST ISN'T ALL; EVERY ONE; 17 MILLION LINES; HOW DO WE KNOW?; CHECK 1: RIGHT QUESTION; CHECK 2: EVERY STEP; SEVERAL CHECKERS; CERTIFIED; WHAT DOES IT MEAN?; CERTIFIED ≠ UNDERSTOOD; MONTHS... OR YEARS; CHECKING ≠ UNDERSTANDING; FIND · CHECK · UNDERSTAND; WHAT WE LEARNED; SUBSCRIBE.
  - Every inset and FULL string in `film.js` matches `viewer.md`.
  - None says more than its `claims.md` row: 54 (fixed), 55, 57, 59 (ANTHROPIC · NOV 20, 2026), 64 (fixed), 65, 67 (TOY EXAMPLE), 69 (badge with RELATIVE TO SET THEORY) and 70 (CERTIFIED CORRECT, NOV 21).
- **Captions.** `captions.srt` (39 cues) starts and ends on each `vo_lines.json` line + 0.5 s, to the millisecond (0.500-5.511, 5.761-10.529, 11.129-16.923 ... 80.190-83.181). Its words match `film/script.txt` (numbers as digits).
- **Chips and subtitles never overlap.** 10 fps strips at 13.3-14.3 s (PRIMES, ENCODED to ALL THE IMPORTANT ONES) and 16.7-17.7 s (line 2 to line 3): the old chip and subtitle are gone before the new ones fade in.
- **Stickman audit**, re-run on a scratch copy of `film/` (with `shots/`) with `PLAYWRIGHT_BROWSERS_PATH=$PWD/.skills/browsers`: **`ISSUES 0`**. 2540/2540 frames in the state files, max hand step 0, lowest 1 s motion 0.24.
- **earshot measure:** -17.0 LUFS (target -17 ±1), true peak -5.3 dBTP (under -1), LRA 3.0 LU, noise floor -39.8 dBFS.
- **earshot describe:** Speech 0.88, Music 0.81, voice-over narration +3.7. No noise or hum tag (L2); the strongest tag is "a mouth pop" at +2.1.
- **earshot timeline:** 75% of 12 cuts have an onset within 100 ms (threshold 50%). No hit at 17.07, 26.53 or 80.07 s; the nearest sounds are at +131, +112 and +201 ms.
- **Row 15, lessons:**
  - L44 (no faded figures or multi-part props) is followed now.
  - L2: no noise bed.
  - L12: the sound was listened to with earshot.
  - L32: the close is unchanged, "So, what we learned:" then subscribe and comment.
  - L56: Ivan's Chatterbox voice.

## Passed in round 4, inputs unchanged
- **Teaches `lesson.md`.** Q1-Q3 and the misconception are spoken and shown. The line-2 re-voice keeps the same words, and the on-screen fixes only narrow the wording.
- **Claims.** Every spoken line matches the round-4 rows and fixes. The script text is unchanged.
- **`upload.json`.** Its sources and every factual sentence trace to `research.md` and `claims.md`. "About 85 seconds" still matches 84.67 s.
- **Layout faithful to `style.md` and the reel:**
  - the wall;
  - the presenter centred like a selfie;
  - the chip at about 62%;
  - the subtitle at about 67%;
  - the inset at 70-92%;
  - three FULL screens.
  - Spoken words: 245 against a target of 235 (+4%).
- **Close (L32).** Re-seen in the rebuild: the hand at 80.14 s.
- **Thumbnail at 160 px.** `thumbnail.png` was not changed (16:26, before round 4's evaluation).

## Not evaluated
- Pronunciation and tone are for the owner's ears:
  - should-fix 1 ("line" at 16.3-16.85 s);
  - line 2's 250 ms pause inside the phrase "all the important ones ... sit on one line" (vo 14.40-14.65);
  - "Two key checks" (34.1 s);
  - "helped" (67.6 s).
- The music's license and the A/B outcome are outside this check.
