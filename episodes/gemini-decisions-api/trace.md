# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 42.4 min, 43 turns, $7.65 (list price; the run is on the owner's plan)
- Builds (`build.py`): 9; judges (subagents with "judge" in the brief): 1
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 134 | 73,314 | 5,886,737 | 253,573 | $4.30 |
| claude-sonnet-5-5 | 126 | 140,262 | 11,458,144 | 317,689 | $3.34 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 7.2 | 1.5 | Claim check gemini-decisions-api |
| 10.7 | 25.8 | Make and finish episode film |
| 36.9 | 4.9 | Judge gemini-decisions-api episode |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 25.2 | 2.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; timeout 170 bash -c 'until grep -q "ISSU |
| 32.3 | 1.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; sed -i 's/^MUSIC_DB = -14.5 /MUSIC_DB =  |
| 30.6 | 1.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; python3 .claude/skills/stickman/scripts/ |
| 30.6 | 1.4 | Read (sub) | /home/runner/work/_temp/gemini-decisions-api/make/s10.jpg |
| 33.7 | 1.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; V=episodes/gemini-decisions-api/video.mp |
| 29.3 | 1.1 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; timeout 100 bash -c 'until grep -q "DONE |
| 24.2 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; date; nproc; (python3 .claude/skills/sti |
| 11.0 | 0.6 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; python scripts/music.py get efa007f6-a5f |
| 3.1 | 0.6 | Bash | mkdir -p $RUNNER_TEMP/gemini-decisions-api/draft && cd $RUNNER_TEMP/gemini-decisions-api/d |
| 11.6 | 0.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; mkdir -p /home/runner/work/_temp/gemini- |
