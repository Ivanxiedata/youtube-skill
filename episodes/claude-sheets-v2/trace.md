# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 76.1 min, 117 turns, $16.87 (list price; the run is on the owner's plan)
- Builds (`build.py`): 12; judges (subagents with "judge" in the brief): 2
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 414 | 207,946 | 27,108,102 | 678,682 | $13.81 |
| claude-haiku-5-5 | 14,146 | 970 | 0 | 0 | $0.01 |
| claude-sonnet-5-5 | 166 | 130,054 | 7,451,940 | 400,170 | $3.05 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 7.1 | 0.2 | Gate round 1 student |
| 7.6 | 2.6 | Gate round 1 critic |
| 11.8 | 0.2 | Gate round 2 student |
| 12.2 | 3.1 | Gate round 2 critic re-gate |
| 17.8 | 0.2 | Gate round 3 student |
| 18.1 | 2.4 | Gate round 3 critic re-gate |
| 20.8 | 1.5 | Claim check claims.md |
| 24.8 | 19.9 | Make step 4: film and thumbnail |
| 47.1 | 8.1 | Rebuild after line-4 re-voice |
| 55.7 | 1.4 | Finish step 5: captions, upload.json |
| 60.3 | 6.3 | Judge step 6 evaluation |
| 71.4 | 3.9 | Re-judge after fix round |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 36.8 | 3.1 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; S=$RUNNER_TEMP/claude-sheets-v2/make; E= |
| 47.5 | 2.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; python3 .claude/skills/stickman/scripts/ |
| 51.8 | 1.9 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; S=$RUNNER_TEMP/claude-sheets-v2/rebuild; |
| 67.7 | 1.8 | Bash | cd /home/runner/work/youtube-skill/youtube-skill; python3 .claude/skills/stickman/scripts/ |
| 41.9 | 1.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; S=$RUNNER_TEMP/claude-sheets-v2/make; (t |
| 15.7 | 1.5 | Bash | mkdir -p $RUNNER_TEMP/claude-sheets-v2/l1; cd $RUNNER_TEMP/claude-sheets-v2/l1; printf "Cl |
| 69.7 | 1.3 | Bash | cd /home/runner/work/youtube-skill/youtube-skill; f=episodes/claude-sheets-v2/film/film.js |
| 58.2 | 1.3 | Bash | cd /home/runner/work/youtube-skill/youtube-skill; python3 .claude/skills/stickman/scripts/ |
| 53.8 | 1.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; R=$PWD; S=$RUNNER_TEMP/claude-sheets-v2/ |
| 45.3 | 1.1 | Bash | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-sheets-v2/film; mkdir -p  |
