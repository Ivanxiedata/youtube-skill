# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 74.3 min, 117 turns, $20.17 (list price; the run is on the owner's plan)
- Builds (`build.py` runs): 4 full, 2 --shots; judges (subagents with "judge" in the brief): 3
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 388 | 272,617 | 27,472,588 | 768,286 | $15.81 |
| claude-sonnet-5-5 | 224 | 156,097 | 12,459,074 | 622,074 | $4.36 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 10.5 | 0.2 | Gate round 1 student |
| 10.8 | 6.3 | Gate round 1 critic |
| 20.6 | 0.2 | Gate round 2 student |
| 21.0 | 2.9 | Gate round 2 critic |
| 24.5 | 0.2 | Gate round 3 student |
| 24.9 | 2.1 | Gate round 3 critic |
| 27.4 | 0.2 | Draft voicing timing check |
| 27.6 | 1.9 | Claim check step 3b |
| 32.6 | 0.7 | Voice the final script |
| 35.3 | 22.7 | Make and finish (steps 4-5) |
| 59.6 | 6.5 | Judge episode (step 6) |
| 66.8 | 2.9 | Picture fix round (judge M2) |
| 70.2 | 3.2 | Re-judge episode (round 2) |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 48.9 | 2.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/gpt-6-2-cost-per-task; S=/hom |
| 68.1 | 1.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; time .skills/venv/bin/python .claude/ski |
| 56.2 | 1.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/gpt-6-2-cost-per-task; S=/hom |
| 60.5 | 1.2 | Bash (sub) | cd /home/runner/work/_temp/gpt-6-2-cost-per-task/judge && (earshot timeline video.mp4 --vi |
| 53.8 | 1.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/gpt-6-2-cost-per-task; S=/hom |
| 52.1 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/gpt-6-2-cost-per-task; S=/hom |
| 55.0 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/gpt-6-2-cost-per-task; S=/hom |
| 71.3 | 1.0 | Bash (sub) | cd /home/runner/work/_temp/gpt-6-2-cost-per-task/rejudge && E=/home/runner/work/youtube-sk |
| 60.5 | 0.7 | Bash (sub) | cd /home/runner/work/_temp/gpt-6-2-cost-per-task/judge && (earshot describe video.mp4 2>&1 |
| 62.3 | 0.6 | Bash (sub) | cd /home/runner/work/_temp/gpt-6-2-cost-per-task/judge && mkdir -p f && /home/runner/work/ |
