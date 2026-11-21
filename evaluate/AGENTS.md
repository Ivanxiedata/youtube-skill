# evaluate

Scores a finished episode before publishing (hook, title, thumbnail, description, brand) and says what to fix first.

Spec: `docs/specs/evaluate.md` · Progress: `evaluate/progress.md` (update before you stop) · Check: `make check-evaluate`

## Notes
- It reports, it never fixes. The episode's agent fixes and reruns.
- A tool score is evidence, not a verdict: `hookscore.py` says a low score is a reason to look again, never a promise.
- The evaluator must not be the agent that made the episode.
