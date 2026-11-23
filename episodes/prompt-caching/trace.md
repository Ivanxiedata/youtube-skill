# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 13.0 min, 49 turns, $5.49 (list price; the run is on the owner's plan)
- Builds (`build.py`): 2; judges (subagents with "judge" in the brief): 0
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 96 | 62,132 | 5,373,680 | 158,682 | $3.59 |
| claude-sonnet-5-5 | 90 | 85,013 | 3,621,968 | 275,424 | $1.90 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 5.5 | 1.3 | Claim check prompt-caching |
| 9.1 | 1.3 | Make and finish prompt-caching |
| 12.1 | 0.0 | Re-check changed claims |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 21.1 | 0.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching/film; python - << |
| 9.4 | 0.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching; date -u; mkdir - |
| 11.3 | 0.4 | Bash | D=$RUNNER_TEMP/prompt-caching/draftvo && mkdir -p $D && cp film/script.txt $D/ && cp -r fi |
| 13.1 | 0.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching; S=../../.claude/ |
| 11.8 | 0.2 | Bash | for f in script.md film/script.txt; do sed -i -e 's/re-reading the whole book for every qu |
| 19.5 | 0.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching; S=../../.claude/ |
| 20.9 | 0.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching/film; python - << |
| 20.3 | 0.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching; S=../../.claude/ |
| 20.1 | 0.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching/film; python - << |
| 20.5 | 0.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/prompt-caching/film; python - << |
