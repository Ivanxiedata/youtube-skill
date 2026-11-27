# Role: evaluator (step 6 of `docs/workflow.md`)

You judge a finished episode before it is published. You did not make it: if you did, or you have seen the conversation that made it,
hand this role to another agent. You report; you fix nothing.

The rubric is not your taste. It is the published rules of the youtube-agent skills (`.claude/skills/yt-*/SKILL.md`),
`docs/brand.md`, `docs/lessons.md` and `docs/workflow.md`. Quote the rule a row is judged against.

## Inputs
- `episodes/<slug>/`: `video.mp4`, `thumbnail.png`, `research.md`, `brief.json`, `package.md`, `beats.md`, `script.md`,
  `captions.srt`, `upload.json`, `film/contact_sheet.jpg`, `film/vo_lines.json`
- The model scorecard: `episodes/deepseek-super-agent/evaluation.md`
- Tools after `make skills`, inside the venv `make skills` prints, with `EARSHOT_HOME` set.

## Checklist
Every row: result, evidence (the tool output or the quoted line), and the fix if it fails. Must-fix rows block publishing.

**Click (`/yt-package`, `/yt-seo`)**
1. Title: `title.py --title "..." --thumb "..."`. Must-fix: over 60 characters, or the subject not in the first 40.
2. Title and thumbnail as one promise: besides the topic's name, the title repeats no thumbnail word. Should-fix otherwise.
3. Thumbnail at 160 px wide (shrink it and look): topic and promise readable, brand card used. Must-fix if unreadable.
4. The 3 searches in `package.md`: their words are in the title and the first two description lines. Should-fix otherwise.
   Must-fix (L37, repeated 2026-11-25): a search word (such as "vs") that is not in the title or description lines 1-2.

**Watch (`/yt-script`)**
5. Hook, the 3-second test (lesson L16): from the first spoken sentence alone, could someone who doesn't know the tech say what this video gives them?
   It must name the topic, paint the viewer's moment from `package.md`, and use no architecture terms (layers, weights, tokens, parameters, loops). Must-fix otherwise.
   Must-fix if any number in it is not true, or if it ends on "but how?" (lesson L31). `hookscore.py --hook "<first spoken sentence>"`: should-fix below 72.
6. The first seconds do three things: confirm the title's promise, open a question the viewer can't close, show the payoff exists. Must-fix if the title's promise isn't confirmed.
7. Topic first: title card from frame 0 and the topic's name in the first spoken sentence (lessons L14, L16). Must-fix.
   Must-fix (L14, repeated): the topic's name is not the first spoken words (a hook opening "Before, you'd ..." and naming the topic later fails).
   Must-fix (L16, repeated 2026-11-25): the first spoken sentence is the topic's name alone (its own voice line); the name and the hook are one sentence, and the title card cuts on the measured pause inside it.
8. Turn: by about 10 s, one sentence saying what the video will do. No channel intro or subscribe pitch before it. Should-fix.
   Must-fix (L46, repeated 2026-11-25): the first voice line runs past 8 s, or the turn sentence was cut for the word budget (cut words elsewhere, never the turn).
   Must-fix (L46, repeated 2026-11-26): line 1 in `film/vo_lines.json` over 8 s after gate or claim fixes added words to the hook; check the final take's length, not the draft's.
9. Beats: one idea per beat, and something to look at on every beat (contact sheet, `beats.md`). Should-fix for a beat with nothing to look at.
   Must-fix (L1, repeated 2026-11-25): a shot over 5 s; split it with cuts (a mid-shot highlight is not a new shot). Should-fix when shots average over 3 s.
   Must-fix (L44, repeated 2026-11-24): a figure or multi-part prop that fades with `globalAlpha`, alone or inside an easing panel, so limbs or clothes show through each other.
   Must-fix (L44, repeated 2026-11-25): a panel-entrance helper (such as `withIn()`) that eases alpha on a panel holding a figure; check every figure shot's mid-entrance still.
10. Payoff: the thing the hook promised is delivered, out loud. Must-fix if missing.
11. Close (lesson L32): a "So, what we learned:" conclusion restating the before -> after on the counted example, then the ask to subscribe and comment what to explain next. Must-fix if there is no conclusion or no ask.

**Understand**
12. Every claim in `script.md` and on screen traces to a source in `research.md` or `brief.json` (start from `claims.md`, step 3b). Must-fix for an unsourced claim or a wrong one.
   Must-fix (L17, repeated): chapter titles, the `upload.json` description and the thumbnail text say more than a `claims.md` row ruled narrower (e.g. "plan ready" where the claim is "plan written"); and every narrower or wrong row in `claims.md` notes where it was fixed.
   Must-fix (L26, repeated): any on-screen line or `upload.json` description sentence (any line, not only 1-2) that states a number, default or rate without the condition `research.md`'s narrowing list gives it (for which models, by default, at least), whether or not it has a `claims.md` row.
   Must-fix (L26, repeated 2026-11-24): a chapter title, card, label or line that states the invented example's number without "our example" (or "our"), or a condition with its own date folded under another date; should-fix when a spoken number's condition shows on screen only after the number.
   Must-fix (L17, repeated 2026-11-24): an on-screen label naming a product or agent a `claims.md` row rules out (a robot labelled "COPILOT" where the maker names no Copilot agent), or a source line in `upload.json` (article title, author) that no file in the episode holds.
   Must-fix (L26, repeated 2026-11-24): an example from the docs (a policy value, a count) spoken or drawn as the rule without "example"; a source's list shortened (an item such as "meetings" dropped); a line in `research.md` or `upload.json` stating an inference no source says.
   Must-fix (L26, repeated 2026-11-25): a label or line added by a gate or claim fix (an inset, a stamp, a shortened line) that drops a list item, a condition or its date; and an "OUR EXAMPLE" label that appears after the numbers it marks.
   Must-fix (L17, repeated 2026-11-24): an `upload.json` sentence labelled "per <maker>" (or quoting the maker) that adds words the maker's quoted sentence in `research.md` lacks.
   Must-fix (L26, repeated 2026-11-25): a card or label stating a number without its condition (whose result, which test, on average) in the same shot; a condition on another shot's panel does not count. And a phrase a judge or `claims.md` ruled out still anywhere in the episode folder: `grep -rin "<phrase>"` the folder, never only the quoted line.
   Must-fix (L26, repeated 2026-11-26): a number on screen whose condition or "OUR EXAMPLE" label enters later than the number, even by a few frames; check the stills at the number's first frame.
   Must-fix (L17, repeated 2026-11-25): an `upload.json` sentence crediting the maker that drops any condition of the quoted sentence in `research.md` ("inside a single session", "with multiple parallel agents").
   Must-fix (L17, repeated 2026-11-26): a ruled-out phrase or its paraphrase in any other form (another tense, a summary list in `beats.md`, the writer's own words in `lesson.md`); grep the folder for the phrase's word stems, not its exact words.
   Must-fix (L17, L26, repeated 2026-11-26, claude-sheets): a ruled-out phrase or analogy, by any stem ("answers only", "handed in", "hands in"), left anywhere but `claims.md` and `mistakes.md`: `research.md` ("Where the analogy stops" too), `brief.json`, `viewer.md`, `beats.md` (intro and cast list), `upload.json`; a source's list in any file not copied word for word from `research.md`'s quote.
   Must-fix (L17, L26, repeated 2026-11-27, claude-sheets-v2): a ruled-out phrase left by its stem without a suffix ("your math teacher" from "your math teacher's", "totals are formulas" from "they're formulas"), or a summary carried from an earlier episode (`research.md`'s "Our example", `brief.json` one_line) that states our example as a general fact or drops a card's condition ("If it shows"); `gate.md` lines quoting pre-claim wording need a note.
13. Before -> after is stated plainly and shown side by side (diagram), and the body sells the outcome: before = the viewer's pain as a scene,
   now = the same scene with the new tech, then how, then why it helps them. Must-fix if the viewer can't say what is new or what it does for them;
   should-fix if the tech is explained before the viewer's pain is shown.
   Must-fix (L25, repeated): the NOW side does not show the same counted example reaching its outcome (an empty NOW panel beside a filled BEFORE one reads as "nothing happened").
   Must-fix (L34, repeated): in any shot, a meter's number counts something other than the unit its label names (a "YOUR WAITS" meter ticking on a test run).
   Must-fix (L34, repeated 2026-11-24): a meter's number that disagrees with what the shot draws (the route stops at 4, the meter shows 10), or a meter fix that hides the shot's point (a stall shown only by a tag, not on the picture).
   Must-fix (L34, repeated 2026-11-26): a meter that changes before or after the thing it counts changes in the picture (boxes empty while the totals still have no fx tag; the tick before the last tag lands); check the stills at each counted item's first frame.

**Learn**
13b. The video teaches `lesson.md`: its main idea is said out loud and each of the 3 questions is answered on screen and in words, as in the script that passed `gate.md`. Must-fix if a gate-passed answer was cut or changed in the make.

**Brand and lessons**
14. The elements of `docs/brand.md` "What repeats in every episode" are present: list each, present or missing.
15. Each open lesson marked `check: evaluate` in `docs/lessons.md`: followed or not. Must-fix for a lesson broken again (its row says `Repeated:`).

**Sound and picture (earshot, stickman audit)**
16. `earshot measure video.mp4`: -17 LUFS within 1, true peak under -1 dBTP. Should-fix outside.
17. `earshot describe video.mp4`: a noise or hum tag is Must-fix; voice-over clear; music present.
18. `earshot timeline video.mp4 --video video.mp4`: share of picture cuts with a sound on them. Should-fix below 50%.
   Must-fix (L47, repeated 2026-11-25): a picture cut with no sound within 100 ms (shots sharing a PLACE letter still get a full cut brush).
   Must-fix (L47, repeated 2026-11-25): `earshot timeline` not re-run after a `MUSIC_DB` change; a cut in the last 200 ms of a pause needs a louder brush.
   Must-fix (L47, repeated 2026-11-27): a cut moved by arithmetic after a re-voice instead of placed on a measured pause or onset (more than 100 ms from one).
19. The stickman audit in the build log ends `ISSUES 0`; duration at most 60 s. Must-fix otherwise.
   Must-fix (L21, repeated): `film/vo_lines.json` or the voice runs past 60.0 s, or `script.md` is over about 170 words.
   Must-fix (L73, repeated 2026-11-27): any voice line whose last 50 ms in `vo.wav` is louder than -28 dB (a stray tail), even if the maker logged the measurement.
   Must-fix (L52, L22, repeated 2026-11-27): a hand or held prop drawn before its arm is raised (a hand on the desk front at a shot's first frame); check every figure shot's first-frame still.
20. Format: `ffprobe video.mp4` is 1080x1920; every word and key drawing inside the safe area (`docs/brand.md`); `upload.json` has no chapters. Must-fix otherwise.
   Must-fix (L48, repeated 2026-11-25; L79): any label under 28 px at any frame (a ticket scaled down in flight counts), and the corner tag outside the safe area; should-fix for text under 44 px.
   Must-fix (L48, repeated 2026-11-25): a text helper whose default or `min:` is under 44 px (`lab()`, `fitSz`, `min:38`): set every minimum to 44 and cut words to fit.
   Must-fix (L48, repeated 2026-11-26): text that scales in from under 1.0 (a `panel(...,.8)` or `lab()` entrance easing the text); only the frame or card behind the text may scale.
   Must-fix (L83): the `upload.json` description over 5000 bytes (`len(description.encode())`); re-check after every edit, aim under 4900.
   Must-fix (L88): a prop, costume or label in red `#E4493F` other than the promise sticker and the Subscribe button.

## Output
`episodes/<slug>/evaluation.md`: the first line `ready to publish` or `not ready: N must-fix`, then Must fix, Should fix, Passed, Not evaluated.
Say plainly what you could not judge: earshot does not transcribe words, so pronunciation is for the owner's ears.

## Re-judge (after a fix round)
You get the last `evaluation.md` and the list of files the maker changed. You are still a fresh agent who did not make the episode.
Re-check every row that failed (must-fix or should-fix), every row whose inputs changed, and row 15 (lessons):
words (`script.md`, `beats.md`, `package.md`, `brief.json`, `research.md`) -> rows 1-15; picture or sound (`film/`, `video.mp4`, `thumbnail.png`) -> rows 3, 9, 14-19;
`upload.json` or `captions.srt` -> rows 1, 2, 4, 20. Carry every other row over as `passed in round N, inputs unchanged`.
Write a fresh `evaluation.md` with the same first-line rule, and list which rows you re-checked.
