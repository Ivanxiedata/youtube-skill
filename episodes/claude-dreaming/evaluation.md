not ready: content gate

# Evaluation: claude-dreaming

The content gate (`docs/workflow.md` step 3a, `docs/roles/content-gate.md`) failed its third and last allowed round, so the daily run stopped by the rule in `docs/pipeline/episode.md` ("if it still fails, write `evaluation.md` with the first line `not ready: content gate` and stop"). Nothing was voiced, drawn or rendered: there is no claim check (`claims.md`), no `video.mp4`, no `thumbnail.png`, no `captions.srt` or `upload.json`, and no judge.

## Gate rounds
| round | result | must-fix roots |
|---|---|---|
| 1 (`gate_round1.md`) | fail (4 must-fix, 2 should-fix) | why the wrong note repeats was never said (L64); "Claude Managed Agents" had no kind word (L67); Anthropic's result credited only once (L69, L66); lesson.md not re-ticked (L60, L74) |
| 2 (`gate_round2.md`) | fail (3 must-fix, 0 should-fix) | a "drop" never said to be a mistake (L67); a card condition never spoken (L71); lesson.md's "why it matters" not spoken (L72) |
| 3 (`gate.md`) | fail (1 must-fix, 1 should-fix) | lesson.md's Q3 key still said "off the ledge" after line 4 dropped it (L60, L74). Should-fix: line 4 "three drops back the way it came" says what a drop costs, not what it is |

## Where it stands (for the owner)
- The round-3 must-fix touched only `lesson.md` (0 spoken words) and has been applied after the round: Q3's key now reads "In Anthropic's test, the three drops turned into reaching the next city.", which the takeaway speaks. No fresh critic has checked it.
- Round 3 passed G0-G2, G10 and G13: the student got the main idea and all three answers right; the main idea is 25 words; the class-notes story carries both the before and the now.
- Open should-fix (not applied, it changes the voice): line 4 -> "In Anthropic's Pokemon test, Claude kept trusting one wrong note: three drops off a ledge, back the way it came." (+3 words, 129 total).
- The premise holds in Anthropic's own docs and post (`research.md`): dreams are a research preview in Claude Managed Agents; a dream reads a memory store beside 1 to 100 past session transcripts and writes a new store, leaving the input store unchanged; in Anthropic's Pokemon test, the uncorrected note dropped Claude back onto the earlier route three times, and after the dream rewrote it Claude reached Cerulean City.
- To finish: the owner accepts the gate (or runs one more fresh critic on the round-3 fix), then steps 3b (claim check), 4-5 (make, finish) and 6 (judge) as in `docs/workflow.md`.
