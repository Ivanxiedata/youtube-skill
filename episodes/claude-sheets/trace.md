# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 71.0 min, 112 turns, $17.70 (list price; the run is on the owner's plan)
- Builds (`build.py`): 13; judges (subagents with "judge" in the brief): 2
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 412 | 208,471 | 23,508,471 | 690,016 | $13.09 |
| claude-sonnet-5-5 | 234 | 166,217 | 12,749,702 | 669,558 | $4.61 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 9.3 | 0.2 | Content gate student round 1 |
| 9.7 | 4.0 | Content gate critic round 1 |
| 16.3 | 0.2 | Content gate student round 2 |
| 16.7 | 3.5 | Content gate critic round 2 |
| 20.7 | 0.2 | Content gate student round 3 |
| 21.1 | 1.9 | Content gate critic round 3 |
| 23.8 | 1.2 | Claim check claude-sheets |
| 30.5 | 21.7 | Make and finish claude-sheets |
| 52.9 | 3.4 | Fix layout faults in 4 shots |
| 56.6 | 6.4 | Judge claude-sheets (step 6) |
| 63.7 | 2.9 | Fix meter state and edge items |
| 66.9 | 3.3 | Re-judge claude-sheets |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 27.2 | 3.2 | Bash | timeout 590 bash -c 'until [ -f /home/runner/work/youtube-skill/youtube-skill/episodes/cla |
| 45.1 | 2.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-sheets; ls film; cp ../gp |
| 54.3 | 1.6 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-sheets; python3 ../../.cl |
| 7.6 | 1.4 | Bash | D=$RUNNER_TEMP/claude-sheets/draft1; timeout 300 bash -c "until [ -f $D/vo_lines.json ]; d |
| 48.8 | 1.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-sheets; sed -i 's/^MUSIC_ |
| 64.9 | 1.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-sheets; M=/home/runner/wo |
| 47.3 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-sheets; sed -i 's/WX+14+1 |
| 44.5 | 0.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; python3 scripts/music.py get efa007f6-a5 |
| 70.6 | 0.3 | Bash | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-sheets; head -1 evaluatio |
| 48.3 | 0.2 | Bash (sub) | cd $RUNNER_TEMP/claude-sheets/make; cp /home/runner/work/youtube-skill/youtube-skill/episo |
