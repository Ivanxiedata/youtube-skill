# episode progress

Update before you stop, written for an agent that has never seen your conversation.
`make status` shows the Status and first Next line of every feature.

## Status
spec drafted, no code yet. Blocked on Episode 0.

## Next
1. Wait for Episode 0 (`docs/progress.md`); then answer the spec's open questions and update `docs/specs/episode.md`.
2. Create `shared/brief/` (Brief type + `Load(dir)`) as its own small PR.
3. Add `episode/testdata/ok/` (copy of Episode 0's real brief + script) and `episode/testdata/bad/`.
4. Implement `episode.Check` test-first, one acceptance criterion at a time.
5. Add `cmd/yt check`.

## Blockers
Episode 0 not made yet: brief fields and words-per-second are guesses until then.

## Decisions
- 2026-11-20: Data lives in `episodes/<slug>/` (brief.json + script.md), because lineage and diagram read the same files.
- 2026-11-20: `Brief` type goes in `shared/brief/`, because three features read it (architecture rule: shared types live in shared/).
- 2026-11-20: Word limits assume 2.5 words/s (150 words / 60s); replace with the measured TTS rate after Episode 0.

## Log
- 2026-11-20 product-doc: feature scaffolded, spec drafted.
