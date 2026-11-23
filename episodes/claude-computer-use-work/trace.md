# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 32.0 min, 49 turns, $7.58 (list price; the run is on the owner's plan)
- Builds (`build.py`): 9; judges (subagents with "judge" in the brief): 2
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 190 | 82,713 | 7,631,364 | 299,731 | $5.12 |
| claude-sonnet-5-5 | 114 | 96,164 | 6,156,880 | 350,471 | $2.45 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 6.0 | 1.0 | Claim check episode words |
| 8.8 | 13.8 | Make and finish episode |
| 23.0 | 3.8 | Judge episode (evaluator) |
| 27.3 | 1.8 | Fix meter label, re-render |
| 29.3 | 2.3 | Re-judge episode after fixes |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 17.9 | 2.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-computer-use-work; cp  |
| 27.5 | 1.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; python3 .claude/skills/stickman/scripts/ |
| 9.0 | 0.9 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-computer-use-work; ls  |
| 20.2 | 0.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-computer-use-work; earsho |
| 20.2 | 0.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-computer-use-work; S=$RUN |
| 30.4 | 0.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-computer-use-work; earsho |
| 3.4 | 0.2 | Bash | T=$RUNNER_TEMP/claude-computer-use-work && mkdir -p $T/draft && cat > $T/draft/script.txt  |
| 30.2 | 0.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-computer-use-work; earsho |
| 25.1 | 0.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-computer-use-work; earsho |
| 25.1 | 0.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-computer-use-work; earsho |
