ready to publish

# Evaluation: gpt-6-2-cost-per-task (step 6, judge round 2, re-judge)

Judged 2026-11-27 by a fresh agent that made neither the episode nor round 1, against `docs/roles/evaluator.md` ("Re-judge" and rows 1-20).
Round 1 (`not ready: 2 must-fix`, M1 and M2, S1-S5) is replaced by this file. The maker changed, after round 1: `research.md`, `beats.md`, `lesson.md`, `package.md`, `viewer.md` (words), and `film/film.js` plus `video.mp4` (shots 10, 11, 19, 20, 21 rebuilt). Not changed: `script.md`, `upload.json`, `captions.srt`, `thumbnail.png`, the voice and the mix.
Tools (all in `/home/runner/work/_temp/gpt-6-2-cost-per-task/rejudge/`, on a copy of `video.mp4` and of `film/` without `silent.mp4`): `title.py`, `hookscore.py`, `earshot measure / describe / timeline`, the stickman `audit.py`, `ffprobe`, 9:16 stills at the first, middle and last frame of shots 10, 11, 19, 20, 21 (`film.js` TS: 23.88, 26.80, 44.30, 47.63, 49.88) plus full-size crops of the COST panel's right edge (26.84 s, 29.12 s) and of the formula card (49.6 s), and the stems sweep `grep -rniE "know|door"` and `grep -rniE "third per task|cost per task"` across the folder.

## Must fix
None. Round 1's M1 and M2 are fixed (see Passed, rows 12 and 13).

## Should fix
| # | Row | Result | Evidence | Fix |
|---|---|---|---|---|
| S1 | 5 (hook, `hookscore.py`: should-fix below 72) | 70, WORKABLE (unchanged) | Same hook, same score: SPECIFICITY 57, ADDRESS 96, STAKES 62, CURIOSITY 75, BREVITY 100; formula Unclassified. Kept on purpose (`progress.md` Decisions: the 72 wording ran 8.14 s, over L46). | Next episode, or in a re-voice if one happens anyway. Not worth a re-voice alone. |
| S2 | 11 (L32: the conclusion restates the before -> after on the counted example) | partly (unchanged) | Line 8 restates the rule ("price per token is the taxi's rate; your cost is price times tokens: compare cost per task"), not the counted example. Shot 20 now shows the formula only, so the example is in neither the words nor the picture of the conclusion. | Next episode: put the counted example, with its condition, in the conclusion. |
| S4 | 9 / 20 (layout; L22: 40 px from edges and other labels) | partly fixed | Shots 10-11: the dashed line now runs down to the "WHAT 20% OFF WOULD BE" pill, so the label is tied to its line, and the pill no longer touches the panel. Full-size crops: pill right edge about 28 px inside the COST panel's border at 26.84 s (x about 850 vs 878), about 30 px at 29.12 s; the round-1 fix asked for 40 px. 44 px text, inside the safe area. | If shots 10-11 are rebuilt for another reason: move the pill 12 px or more left (centre `850-wl/2` -> `836-wl/2`). |
| S5 | 4 (package accuracy) | partly fixed | `package.md:52` third column now quotes line 2's real words ("token prices"), but the second column still says `Tokens ("per token" in line 2)`; description line 2 has no "per token" (checked: `'per token' in line` false for lines 1-2; "per" is in line 1, "cost per task"). Row 4 itself passes. | `package.md:52`: `AI, Price, Tokens` and in the third column `line 1 ("cost per task": per), line 2 ("token prices")`. Words only. |
| S6 | 9 / 14 (layout, new in the rebuilt shot 20) | minor | Shot 20 (48.7-49.8 s): the "PRICE × TOKENS = YOUR COST" card (y about 968-1128) covers the top half of both background taxis' blank roof signs (top at about y 1120 in the full-size crop at 49.6 s). The card is opaque and fully legible; the taxis are dimmed; no text is hidden. It reads as two props stacked, not as a collision of labels. | If shot 20 is touched again: raise the card about 40 px (`mt=968` -> `mt=925`) or end it above the roof signs. Not worth a rebuild alone. |

S3 (research.md "under a third per task") is fixed: `research.md:49` now reads "the meter at the end is the cost: ... at less than a third of GPT-6 Astra's cost (row 3)".

## Passed
| Row | Result | Evidence |
|---|---|---|
| 1 Title | pass (re-checked) | `title.py`: 55 chars, 70/100; duplicate and thumb-length by design (`docs/workflow.md` deviations); subject at character 1; carries 6.2. `upload.json` unchanged. |
| 2 One promise | pass (re-checked) | Title and thumbnail unchanged; besides the topic's name the title repeats no thumbnail word. |
| 3 Thumbnail at 160 px | passed in round 1, inputs unchanged (`thumbnail.png` 13:56, not rebuilt); re-checked only that the rebuild did not touch it. |
| 4 Searches | pass (re-checked; S5) | "gpt-6.2 astra", "gpt-6.2 sol": title and line 1; "ai price per token": ai, price (title), per (line 1), token (line 2). |
| 5 Hook, 3-second test | pass (re-checked; score is S1) | Script unchanged; first sentence names the topic, paints the moment of picking by price, no architecture term, no number but the version. |
| 6 First seconds | pass (re-checked) | Unchanged shots 1-3 and line 1; hook confirms the title. |
| 7 Topic first | pass (re-checked) | `script.md` and the voice unchanged; TS still cuts the title card at 3.18 s, inside the measured pause after "model:"; shot 1 not rebuilt. |
| 8 Turn | pass (re-checked) | Voice unchanged: line 1 6.75 s (under 8 s), "Here's why:" at 7.75 s; no channel intro. |
| 9 Beats and pace | pass (re-checked; S4, S6) | TS unchanged: 23 shots, 56.4 s, 2.45 s average, longest 4.80 s; every rebuilt shot has a picture; shots 19-21 hold no figure (taxis drawn outside eased panels, `boxIn` scales only boxes, text at scale 1.0); `beats.md` row 18 and `viewer.md` item 19 match the new shot 20. |
| 10 Payoff | pass (re-checked) | Spoken payoff unchanged; shown on shot 11 ("SCORED HIGHER", bar under "A THIRD", "UNDER A THIRD") and shot 18. |
| 11 Close | pass (re-checked; S2) | "So, what we learned: ..." then the ask with the red Subscribe and COMMENT (shot 22 unchanged). |
| 12 Claims | pass (re-checked; M1 fixed) | Stems sweep `grep -rniE "know\|door"` outside `claims.md`, `mistakes.md`, `gate*.md`, `film/sets/cafe.js`: only "the story everyone knows" (`research.md:45`, `beats.md:8`, `beats.md:28` "someone who knows no AI tech", `lesson.md:33`) and `progress.md`'s own log of the fix; no "knows the (best) route", no "door price". `research.md:46` and `beats.md:8` now say "a driver who picks the best route (S3) drives, in this picture, fewer miles ... (our inference from the per-distance rate, S1)": the inference is marked as ours. `lesson.md:22`: prices "on a 'PRICE PER TOKEN' board above them, never on the cabs". `"third per task"` appears only in `beats.md:50`, a rejected line with its reason ("drops 'on one test' and 'OpenAI says'"). Shots 10-11 keep "ONE WORK TEST · OPENAI SAYS" / "FULL = GPT-6 ASTRA" from their first frame (stills 23.92 s, 29.12 s). |
| 13 Before -> after | pass (re-checked; M2 fixed) | Shot 20 stills (47.67, 48.7 s, crop 49.6 s): WHAT WE LEARNED, "$$$$ PER TOKEN", "PRICE PER TOKEN = THE TAXI'S RATE", and the card "PRICE × TOKENS = YOUR COST" alone: no bars, no dashed line, no number, so nothing reads as the viewer's own cost falling to a third (L26, L34). The before/now meter (shots 9-11) unchanged in content. |
| 13b Lesson | pass (re-checked) | `lesson.md`'s main idea, Q1-Q3 answered in words and on screen; the only `lesson.md` change is the M1 wording. |
| 14 Brand | pass (re-checked) | Rebuilt shots: corner tag "GPT-6.2 · 60s" on every frame, NOW tag on 10-11, takeaway card "PRICE PER TOKEN IS THE RATE." + amber "COMPARE COST PER TASK." (stills 49.92, 51.56 s), background taxis at scale 1.0 with blank roof signs, robot drivers with teal screen heads; no red outside the sticker and Subscribe; text inside x 60-1020. |
| 15 Lessons (`check: evaluate`, open) | pass (re-checked) | L17 and L26 now followed (M1, M2 fixed); L34 followed (shot 20 has no meter). L22 margin partly (S4), L32 partly (S2), L16 score (S1). The rest as round 1: L1, L2, L7, L9, L11, L12, L14, L25, L31, L36, L37, L44, L46, L47, L48, L54, L79, L83, L88, L90, L91. |
| 16 Loudness | pass (re-checked) | `earshot measure`: -17.0 LUFS, true peak -3.9 dBTP, LRA 1.5 LU. |
| 17 Noise, voice, music | pass (re-checked) | `earshot describe`: no noise or hum tag; voice-over narration +3.8; AudioSet Speech 0.86, Music 0.85. |
| 18 Sound on cuts | pass (re-checked) | `earshot timeline`: 22 cuts, 82% with an onset within 1 frame (chance 44%), 100% within 100 ms, median offset 20 ms. |
| 19 Audit, duration, tails, hands | pass (re-checked) | `audit.py` on a copy: "frames in state files 1692 expected 1692", max hand step 22.2, foot skate 0, "ISSUES 0". `ffprobe`: 1080x1920, 56.4 s. Voice and line tails unchanged from round 1 (not re-voiced). |
| 20 Format | pass (re-checked for the rebuilt shots; S4) | 1080x1920, 56.4 s; rebuilt text 44 px or more (formula 48 px, labels 44-52 px), drawn at scale 1.0; `upload.json` unchanged (no chapters, 2749 bytes). |

## Not evaluated
- Pronunciation: earshot does not transcribe; "G P T six point two", "Astra", "Sol" are for the owner's ears.
- Voice speed 1.2: `film/` records the voice (`am_michael`), not the speed.
- Retention and click-through: need the video public with views (`yt-retention`).

## Rows re-checked this round
1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13b, 14, 15, 16, 17, 18, 19, 20 (words changed -> 1-15; picture changed -> 3, 9, 14-19; S4 -> 20; row 3 confirmed unchanged input). Carried over from round 1 with inputs unchanged: 3 (thumbnail not rebuilt).
