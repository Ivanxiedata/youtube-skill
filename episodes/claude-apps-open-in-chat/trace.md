# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 32.0 min, 51 turns, $5.60 (list price; the run is on the owner's plan)
- Builds (`build.py`): 10; judges (subagents with "judge" in the brief): 1
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 122 | 63,031 | 5,201,506 | 218,264 | $3.80 |
| claude-sonnet-5-5 | 90 | 77,476 | 4,875,541 | 216,172 | $1.80 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 6.0 | 0.9 | Claim check episode words |
| 9.9 | 18.3 | Make and finish episode |
| 28.6 | 2.8 | Judge the episode |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 17.9 | 3.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-apps-open-in-chat; SKI |
| 23.0 | 1.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-apps-open-in-chat; cp fil |
| 21.5 | 1.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-apps-open-in-chat/film; p |
| 24.6 | 1.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-apps-open-in-chat; python |
| 10.1 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; E=episodes/claude-apps-open-in-chat; SKI |
| 25.9 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-apps-open-in-chat; cp fil |
| 2.7 | 0.5 | Bash | cd $RUNNER_TEMP/claude-apps-open-in-chat/draft && time python3 /home/runner/work/youtube-s |
| 28.9 | 0.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-apps-open-in-chat; earsho |
| 7.6 | 0.3 | Bash | cd $RUNNER_TEMP/claude-apps-open-in-chat/draft && python3 /home/runner/work/youtube-skill/ |
| 29.0 | 0.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-apps-open-in-chat; earsho |
