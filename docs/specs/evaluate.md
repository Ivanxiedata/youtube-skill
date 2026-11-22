# evaluate

## Goal
Before an episode is published, one command produces the same scorecard every time: what passes, what fails,
and what to fix first, so quality doesn't depend on which agent made the video or on the owner catching it.

## Users
Agents, after render and packaging and before upload. The owner, who reads the scorecard instead of
finding the problems by watching. `feedback` reads the scorecards to see which failures repeat.

## Inputs and outputs
In `episodes/<slug>/`: `brief.json`, `script.md`, `upload.json` (title, description, tags), `thumbnail.png`,
`captions.srt`, `film/vo_lines.json` (voice line timings) and `film/film.json` (shot cuts), plus `docs/brand.md`.
Written: `episodes/<slug>/evaluation.md`, the scorecard, in three tables: Must fix, Should fix, Passed.
The first hand-made scorecard is the model: `episodes/deepseek-super-agent/evaluation.md` (branch `ep-super-agent`).

Two kinds of rows:
- **Measured** rows are computed by `yt evaluate`. They are the acceptance criteria below.
- **Judged** rows are filled by an agent in the evaluator role (`docs/roles/evaluator.md`) with the youtube-agent
  tools (`hookscore.py`, `title.py`), earshot for the sound (levels, noise, voice against music) and its own reading:
  hook strength, story, brand fit, thumbnail appeal.
  `yt evaluate` leaves them as `TODO (evaluator)` and fails while any is left.

## Acceptance criteria
Measured rows, each a row in the scorecard with its evidence:
- [ ] Topic first: the topic's name (`brief.json` `tech.name` words) is in the first spoken sentence (`vo_lines.json`), and a title card is on screen from frame 0; a miss is Must fix.
- [ ] Hook addresses the viewer: the first spoken sentence contains "you" or "your"; a miss is Should fix.
- [ ] Title: at most 60 characters, and contains the topic's name or the thumbnail text does (`upload.json` `thumbnail_text`).
- [ ] Description: the first two lines contain the topic's name; it has at least one link; a miss is Should fix.
- [ ] Chapters in the description: first at 0:00, at least three, each at least 10 s, none past the video's end.
- [ ] Hashtags: one to three in the description. Tags: at most 15.
- [ ] Thumbnail: `thumbnail.png` exists, is 1280x720 and under 2 MB.
- [ ] Captions: `captions.srt` exists and its text matches `script.md` (ignoring case and punctuation).
- [ ] Pace: average shot length from `film.json` is at most 3 s, and no shot is longer than 6 s.
- [ ] Length: the video's duration from `film.json` is at most 60 s.
- [ ] Call to action: `script.md` has a non-empty `## outro` section.
- [ ] Sources: every claim in `brief.json` has an http(s) source (reuses `shared/brief`).
- [ ] `yt evaluate episodes/<slug>` writes `evaluation.md`, prints the Must fix rows, and exits 1 if there is a Must fix row or a `TODO (evaluator)` row.
- [ ] Rerunning keeps the judged rows an evaluator already filled in.
- [ ] Each open lesson in `docs/lessons.md` marked `check: evaluate` appears as a judged row, so a past mistake is looked at on every episode.

## Non-goals
- Judging by ear or eye in code: music, voice quality, whether the thumbnail is attractive. Those are judged rows.
- Fixing anything. It reports; the episode's agent fixes.
- Numbers from YouTube after publishing (that is `feedback`).

## Interfaces
- Uses from `shared/`: `shared/brief` (episode files, `Problem`).
- Exposes to `cmd/`: `evaluate.Run(dir string) (Scorecard, error)`.
- Used by: `cmd/yt/evaluate.go` (`yt evaluate <episode-dir>`); `upload` should later refuse an episode whose scorecard has a Must fix row.

## Later
- Loudness and silence measured from the audio (needs ffmpeg).
- Thumbnail legibility at 160 px (contrast of the text against its background).
- Run `hookscore.py` and `title.py` from the command and paste their scores into the judged rows.
- Compare against the channel's own best episode once `feedback` has numbers.

## Verification
`make check-evaluate`. Manual: `go run ./cmd/yt evaluate episodes/deepseek-super-agent` reproduces the measured rows of the hand-made scorecard:
topic first named at 12.5 s (pass), hook has no "you" (Should fix), title 65 characters (fail).

## Open questions
1. Answered 2026-11-21 by the owner: the first sentence, plus a title card from frame 0 (criterion above).
2. Where does the thumbnail's text live so it can be checked: a `thumbnail_text` field in `upload.json` (assumed above)?
