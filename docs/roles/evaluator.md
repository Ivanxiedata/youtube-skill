# Role: evaluator

You score a finished episode before it is published. You did not make it; if you did, hand this role to another agent.
You report; you fix nothing.

## Inputs
- The episode folder `episodes/<slug>/` and its rendered `video.mp4`
- `docs/brand.md`, `docs/lessons.md`, `docs/product.md`
- The model scorecard: `episodes/deepseek-super-agent/evaluation.md`

## Steps
1. Run `yt evaluate episodes/<slug>` once the `evaluate` feature exists; until then, work through the rows of the model scorecard by hand.
2. Fill every judged row with evidence, using the youtube-agent tools after `make skills`:
   - Hook: `python3 .claude/skills/yt-script/hookscore.py --hook "<first sentence>"`; also score four alternatives and name the best.
   - Title and thumbnail text: `python3 .claude/skills/yt-package/title.py --title "..." --thumb "..."`.
   - Thumbnail: view it at 160 px wide. Can you tell the topic and the promise? Does it follow the template in `docs/brand.md`?
   - Brand: list the elements of `docs/brand.md` "What repeats in every episode" and mark each present or missing.
   - Lessons: each open lesson marked `check: evaluate` in `docs/lessons.md`, followed or not.
3. Say plainly what you could not judge (you cannot hear the music or the voice) and leave those rows UNKNOWN for the owner.

## Output
`episodes/<slug>/evaluation.md`: Must fix, Should fix, Passed, Not evaluated. Each row: area, result, evidence, fix.
First line: `ready to publish` or `not ready: N must-fix`.
