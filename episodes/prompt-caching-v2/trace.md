# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 15.0 min, 31 turns, $4.07 (list price; the run is on the owner's plan)
- Builds (`build.py`): 7; judges (subagents with "judge" in the brief): 1
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 96 | 33,751 | 3,506,813 | 199,198 | $2.68 |
| claude-sonnet-5-5 | 118 | 40,458 | 5,139,703 | 188,320 | $1.39 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 1.7 | 1.1 | Claim check prompt-caching-v2 |
| 3.8 | 7.7 | Make and finish prompt-caching-v2 |
| 11.9 | 2.7 | Judge prompt-caching-v2 episode |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 5.9 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2/film; cat > th |
| 8.2 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2; S=../../.clau |
| 7.0 | 0.8 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2/film; sleep 45 |
| 4.0 | 0.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2; (time python3 |
| 0.9 | 0.3 | Bash | D=$RUNNER_TEMP/prompt-caching-v2/draftvo && mkdir -p $D && cp episodes/prompt-caching-v2/f |
| 10.0 | 0.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2; O=$RUNNER_TEM |
| 9.7 | 0.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2; O=$RUNNER_TEM |
| 12.5 | 0.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2; earshot measu |
| 4.9 | 0.1 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2; S=../../.clau |
| 11.3 | 0.1 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching-v2; python3 - <<' |
