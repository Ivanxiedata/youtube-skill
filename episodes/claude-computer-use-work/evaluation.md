ready to publish

# Evaluation: claude-computer-use-work (workflow step 6, round 2: re-judge)

Judged 2026-11-23 by a fresh evaluator agent that did not make the episode and has not seen the conversation that made it, following `docs/roles/evaluator.md`, section "Re-judge (after a fix round)".
Round 1 (`not ready: 2 must-fix`, 1 should-fix) was replaced by this file.

Files the maker changed in the fix round: `film/film.js` (meter label "YOUR COPY-PASTES" -> "YOUR STEPS", shots 3-16 re-rendered, `film/build2.log`), `video.mp4`, `film/contact_sheet.jpg`, `upload.json` (description line 1 and "Where it works"), `package.md` (description line 1), `beats.md` (meter name and unit), `claims.md` ("Judge round 1 fixes").
Because words (`package.md`, `beats.md`), picture and sound (`film/`, `video.mp4`) and `upload.json` all changed, the Re-judge rule maps them to rows 1-15, 3, 9, 14-19 and 1, 2, 4, 20: **all 20 rows were re-checked**; none is carried over.

Inputs: `video.mp4` (60.000 s; md5 a546d9f8... identical to `film/claude-computer-use-work.mp4`, both written after `film.js`), 28 frames pulled with ffmpeg (0, 1, 5.0, 5.8, 7.0, 7.5, 9.0, 11, 13.5, 15.5, 17.5, 20.5, 22, 24, 26, 28.5, 30.8, 31.3, 32.0, 32.8, 35, 38, 41, 44, 46, 48.5, 49.5, 52, 55, 59.9 s), `thumbnail.png` shrunk to 160 px, `upload.json`, `package.md`, `beats.md`, `claims.md`, `research.md`, `film/build2.log`, `film/film.js`, `film/vo_lines.json`. Scratch in `$RUNNER_TEMP/rejudge-claude-computer-use-work/`.

## Must fix
None.

## Should fix
None.

## Round 1 findings, re-checked
| Round 1 | Result now | Evidence |
|---|---|---|
| Must-fix 1 (row 12/13: meter "YOUR COPY-PASTES" showed 2 in NOW) | fixed | Every desk shot now reads **"YOUR STEPS"** (frames 5.0 s "4", 5.8 s "19", 7.5 s "3", 9.0 s "2" in the hook; 11-20.5 s amber 0 -> 1 -> 20; 22-28.5 s teal 0; 30.8 s "1"; 31.3, 32.0, 32.8 s "2"). `film.js` line 220 draws `'YOUR STEPS'`; no "COPY-PASTES" header left (`grep`). `beats.md` defines the unit: "One unit = one step you do by hand: in BEFORE one copy-paste round trip per order, in NOW one app approval", which is what `research.md`'s counted example and the voice say ("You approve 2 apps. Claude does the 20."). The "WHAT WE LEARNED" side by side (48.5-50 s) shows BEFORE 20 / NOW 2 with no unit header and "SAME 20 ORDERS" under it: unlabeled, so it states no wrong unit, and the voice under it says "now Claude types them, and you approve 2 apps". |
| Must-fix 2 (row 12, L26 repeated: date without "rolling out gradually") | fixed | `upload.json` line 1: "In beta on Claude Team and Enterprise plans since November 20, 2026, rolling out to organizations gradually: once an owner turns it on, ...". Same words in `package.md` proposed line 1. Source in `research.md` lines 13 and 21: "rolling out to organizations gradually." The other dated sentence ("Pro and Max plans have had a computer use research preview since March 23, 2026") keeps its condition (research preview, Pro and Max). |
| Should-fix 1 (scope of "In Cowork") | fixed | `upload.json` "Where it works": "On Team and Enterprise it works only in the new Claude experience, not in tasks started with the separate Cowork option or in Claude Code." Source `research.md` row 12: "Computer use works only in the new Claude experience" / "It doesn't work in tasks started with the separate "Cowork" option, or in Claude Code." [Setup]. The video's "In Cowork, the most precise tool first" stays a faithful quote of the help center (no re-voice was asked for). |

## Passed
| # | Row | Result | Evidence |
|---|---|---|---|
| 1 | Title | pass | `title.py --title "Claude Computer Use: Stop Copy-Pasting 20 Orders by Hand"`: "56 characters, inside the 60-character desktop cut", "carries a concrete figure (20)"; subject at character 1. With the thumbnail, 66/100: `duplicate` (claude, computer, use) and `thumb-length` are the brand card by design (`package.md`, `docs/workflow.md` deviations); `mobile` shows "Claude Computer Use: Stop Copy-Pasting...", the subject survives. Title unchanged. |
| 2 | Title and thumbnail as one promise | pass | Thumbnail: LEARN / CLAUDE COMPUTER USE / IN 60 SECONDS / NO CONNECTOR; the title repeats only the topic's name. |
| 3 | Thumbnail at 160 px | pass | Shrunk to 160 px: "LEARN", "CLAUDE COMPUTER USE", the red "IN 60 SECONDS" and "NO CONNECTOR" tags read; mascot in lanyard costume, laptop with teal cursor, teal-head robot (brand card). `thumbnail.png` was not changed. |
| 4 | The 3 searches | pass | "claude computer use", "claude computer use team enterprise", "what is claude computer use": all in the title + description line 1 ("What is Claude computer use? In beta on Claude Team and Enterprise plans ..."), still true after the line-1 edit. |
| 5 | Hook, 3-second test | pass | First sentence (unchanged, `vo_lines.json` line 0): "Claude computer use: you think 20 orders in an app with no connector cost you 20 copy-pastes, but actually Claude can type them, almost alone." Names the topic, paints the `package.md` moment, no architecture terms, numbers are the counted example, does not end on "but how?" (L31). `hookscore.py`: 73 STRONG (specificity 79, address 96, stakes 62, curiosity 75, brevity 86), at or above 72. |
| 6 | First seconds | pass | 0-9 s: title card, order tool #12-#20 with "NO CONNECTOR", the meter "YOUR STEPS" climbing to 19-20 (amber), then the robot at the laptop and the meter dropping to 2 (teal): promise confirmed, "how?" open, payoff shown to exist. |
| 7 | Topic first | pass | Frames 0 and 1 s: full-screen "LEARN / CLAUDE COMPUTER USE / IN 60 SECONDS" with the corner tag; first spoken words "Claude computer use:". |
| 8 | Turn | pass | "Here's how." at 9.3-10.0 s; no channel intro or subscribe pitch before it. |
| 9 | Beats | pass | 27 shots in 60 s (about 2.2 s each, L1); every pulled frame has a picture tied to its line (meter, red-cross plug, owner switch, screenshots, "CLICKS · TYPES · APPS YOU ALLOW", two approval dialogs + "APPROVALS", rows filling teal, the tool ladder, "THE CATCH", retry arrow, side by side, takeaway, Subscribe + "COMMENT: WHAT NEXT?"). The 41 s frame is mid-transition (a card easing in). |
| 10 | Payoff | pass | Spoken "You approve 2 apps. Claude does the 20." (30.2-33.1 s) while the spreadsheet fills and the meter stays at 2; restated in the takeaway "20 ORDERS, NO COPY-PASTE BY YOU: / YOU APPROVE 2 APPS". |
| 11 | Close (L32) | pass | "So, what we learned: 20 orders used to mean 20 copy-pastes; now Claude types them, and you approve 2 apps." then "Want more? Subscribe, and comment what we should explain next."; on screen "WHAT WE LEARNED" BEFORE 20 / NOW 2, takeaway card, Subscribe button and "COMMENT: WHAT NEXT?". |
| 12 | Claims | pass | Round 1's two must-fixes are fixed (table above). `claims.md` "Judge round 1 fixes" says where each fix went (`film.js` + re-render + `beats.md`; `upload.json`/`package.md` line 1; "Where it works"), so L17's "every narrower or wrong row notes where it was fixed" holds. On-screen meter now matches its unit in both states. Description sentences with a number, date or default carry their condition (L26): Team/Enterprise beta date + "rolling out to organizations gradually" + "once an owner turns it on"; Pro/Max "research preview"; "slower than a connector" with no invented number. Chapters and thumbnail say no more than the claims. |
| 13 | Before -> after | pass | Pain as a scene first (10-21 s: you copy each order, meter to 20, "20 ROUND TRIPS · BY YOU", mascot slumps), then the same desk NOW (21-33 s, meter stays at 2), then how (33-40 s), then the catch; side by side in "WHAT WE LEARNED". The meter now says "YOUR STEPS" in both states, so the viewer reads 20 vs 2 as the same unit. |
| 14 | Brand elements | pass | Format 60.0 s, one tech, everyday-work story: present. Casting (AI = teal-head robot, mascot = "you"): present. Mascot (cream face, coral hoodie, lanyard costume): present. Corner tag "Claude Computer Use · 60s" top-left on every pulled frame, 0 to 59.9 s: present. Opening title card from frame 0 (amber topic, red "IN 60 SECONDS"): present. Structure (title card, hook, problem, story, side by side, takeaway, one CTA): present. Takeaway card two lines, off-white then amber: present. CTA per `docs/brand.md`: present. Voice Kokoro am_michael 1.2, "you" in the first sentence: present. Music "Blue Sky" by Sergmusic, CC0, credited in `upload.json`: present. |
| 15 | Open `evaluate` lessons | pass | L1 pace (row 9); L2 no noise bed (row 17); L7 thumbnail names the topic (row 3); L9 brand (row 14); L11 "you" in the first sentence, tag from frame 0; L12 judged with earshot (rows 16-18); L14 (repeated) topic is the first spoken words (row 7); L16 viewer's moment, no architecture terms (row 5); L17 (repeated) `claims.md` exists and notes every fix (row 12); L25 one counted example (20 orders) first beat to last, meter with whole numbers, growing ladder diagram, the maker's own words for the catch; L31 hook ends on an outcome, whole numbers only on the meter; L32 conclusion + ask (row 11). Repeated lessons L21 (row 19) and L26 (row 12) followed. No lesson broken. |
| 16 | Loudness | pass | `earshot measure video.mp4`: -17.0 LUFS, true peak -4.0 dBTP, LRA 1.7 LU, noise floor -40.4 dBFS. |
| 17 | Noise, voice, music | pass | `earshot describe`: no noise or hum tag (top tags weak: knock on a door +2.1, liquid bloop +2.0, quick swipe +1.8); voice-over narration +3.7, a man speaking +3.0; AudioSet Speech 0.75, Music 0.68; inspirational corporate background music +2.8. |
| 18 | Sound on cuts | pass | `earshot timeline video.mp4 --video video.mp4`: "Sync to 25 cuts: 68% have an onset within 1 frame (chance 43%), 100% within 100 ms, median \|offset\| 19 ms". |
| 19 | Audit and length | pass | `film/build2.log` ends `ISSUES 0` (1800/1800 frames, max hand step 21.0, foot skate 0, lowest 1 s motion 0.23, -17.0 LUFS). `ffprobe` duration 60.000 s. Voice unchanged in this round (`vo_lines.json` last line ends 57.05 s, under 60.0); `script.md` 164 words (L21). |
| 20 | Chapters | pass | `upload.json`: 0:00, 0:10, 0:21, 0:33, 0:46: starts at 0:00, 5 entries, each at least 10 s (10, 11, 12, 13, 14 s), the rules `chapters.py` enforces; chapter lines unchanged by the fix round. |

## Not evaluated
- Pronunciation ("Cowork", "Enterprise", "copy-pastes"): earshot does not transcribe words; for the owner's ears.
- Whether the voice sounds natural at speed 1.2 beyond earshot's "voice-over narration" tag.
- The Help Center pages were not re-fetched in this round; the new description words were checked against the quotes in `research.md` (lines 13, 21, row 12), which round 1 found word for word on the live pages.
- Retention and click-through: need the published video and YouTube Studio exports (`/yt-retention`).

## Rows re-checked in round 2
All 20 rows (1-20): 1, 2, 4, 20 for `upload.json`; 1-15 for `package.md`, `beats.md` (and `claims.md`); 3, 9, 14-19 for `film/`, `video.mp4`, `film/contact_sheet.jpg`; 15 always. No row was carried over from round 1.
