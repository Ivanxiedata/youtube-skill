# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 33.6 min, 51 turns, $6.23 (list price; the run is on the owner's plan)
- Builds (`build.py`): 0; judges (subagents with "judge" in the brief): 1
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 136 | 58,393 | 5,008,898 | 207,548 | $3.59 |
| claude-haiku-5-5 | 49,265 | 6,396 | 0 | 0 | $0.01 |
| claude-sonnet-5-5 | 114 | 106,284 | 8,672,131 | 281,160 | $2.63 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 5.9 | 1.0 | Claim check claude-meetings |
| 7.9 | 21.5 | Make and finish claude-meetings |
| 29.8 | 3.1 | Judge claude-meetings episode |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 17.2 | 1.7 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-meetings; (time python |
| 24.7 | 1.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-meetings; M=$RUNNER_TE |
| 20.1 | 1.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-meetings/film; python - < |
| 27.6 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-meetings; sed -i "s|rr |
| 22.5 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-meetings; python - <<' |
| 21.4 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-meetings; python - <<' |
| 18.9 | 0.8 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-meetings; sleep 45; ta |
| 16.6 | 0.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-meetings; I=episodes/i |
| 3.2 | 0.4 | Bash | D=$RUNNER_TEMP/claude-meetings/draftvo; mkdir -p $D && cp $RUNNER_TEMP/claude-meetings/pkg |
| 8.3 | 0.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; S=.claude/skills/stickman/scripts; E=epi |
