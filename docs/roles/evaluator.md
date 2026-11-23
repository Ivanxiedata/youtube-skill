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

**Watch (`/yt-script`)**
5. Hook, the 3-second test (lesson L16): from the first spoken sentence alone, could someone who doesn't know the tech say what this video gives them?
   It must name the topic, paint the viewer's moment from `package.md`, and use no architecture terms (layers, weights, tokens, parameters, loops). Must-fix otherwise.
   Must-fix if any number in it is not true. `hookscore.py --hook "<first spoken sentence>"`: should-fix below 72.
6. The first seconds do three things: confirm the title's promise, open a question the viewer can't close, show the payoff exists. Must-fix if the title's promise isn't confirmed.
7. Topic first: title card from frame 0 and the topic's name in the first spoken sentence (lessons L14, L16). Must-fix.
   Must-fix (L14, repeated): the topic's name is not the first spoken words (a hook opening "Before, you'd ..." and naming the topic later fails).
8. Turn: by about 10 s, one sentence saying what the video will do. No channel intro or subscribe pitch before it. Should-fix.
9. Beats: one idea per beat, and something to look at on every beat (contact sheet, `beats.md`). Should-fix for a beat with nothing to look at.
10. Payoff: the thing the hook promised is delivered, out loud. Must-fix if missing.
11. Close: the takeaway tied to the story, then exactly one ask. Should-fix for two asks or none.

**Understand**
12. Every claim in `script.md` and on screen traces to a source in `research.md` or `brief.json` (start from `claims.md`, step 3b). Must-fix for an unsourced claim or a wrong one.
   Must-fix (L17, repeated): chapter titles, the `upload.json` description and the thumbnail text say more than a `claims.md` row ruled narrower (e.g. "plan ready" where the claim is "plan written"); and every narrower or wrong row in `claims.md` notes where it was fixed.
13. Before -> after is stated plainly and shown side by side (diagram), and the body sells the outcome: before = the viewer's pain as a scene,
   now = the same scene with the new tech, then how, then why it helps them. Must-fix if the viewer can't say what is new or what it does for them;
   should-fix if the tech is explained before the viewer's pain is shown.

**Brand and lessons**
14. The elements of `docs/brand.md` "What repeats in every episode" are present: list each, present or missing.
15. Each open lesson marked `check: evaluate` in `docs/lessons.md`: followed or not. Must-fix for a lesson broken again (its row says `Repeated:`).

**Sound and picture (earshot, stickman audit)**
16. `earshot measure video.mp4`: -17 LUFS within 1, true peak under -1 dBTP. Should-fix outside.
17. `earshot describe video.mp4`: a noise or hum tag is Must-fix; voice-over clear; music present.
18. `earshot timeline video.mp4 --video video.mp4`: share of picture cuts with a sound on them. Should-fix below 50%.
19. The stickman audit in the build log ends `ISSUES 0`; duration at most 60 s. Must-fix otherwise.
20. `/yt-chapters`: chapters in `upload.json` pass `chapters.py` rules. Must-fix if invalid (they would not render).

## Output
`episodes/<slug>/evaluation.md`: the first line `ready to publish` or `not ready: N must-fix`, then Must fix, Should fix, Passed, Not evaluated.
Say plainly what you could not judge: earshot does not transcribe words, so pronunciation is for the owner's ears.

## Re-judge (after a fix round)
You get the last `evaluation.md` and the list of files the maker changed. You are still a fresh agent who did not make the episode.
Re-check every row that failed (must-fix or should-fix), every row whose inputs changed, and row 15 (lessons):
words (`script.md`, `beats.md`, `package.md`, `brief.json`, `research.md`) -> rows 1-15; picture or sound (`film/`, `video.mp4`, `thumbnail.png`) -> rows 3, 9, 14-19;
`upload.json` or `captions.srt` -> rows 1, 2, 4, 20. Carry every other row over as `passed in round N, inputs unchanged`.
Write a fresh `evaluation.md` with the same first-line rule, and list which rows you re-checked.
