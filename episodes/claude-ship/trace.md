# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 34.4 min, 43 turns, $8.63 (list price; the run is on the owner's plan)
- Builds (`build.py`): 6; judges (subagents with "judge" in the brief): 1
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 166 | 70,615 | 7,723,819 | 272,767 | $4.74 |
| claude-sonnet-5-5 | 144 | 145,913 | 12,943,159 | 454,220 | $3.89 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 4.8 | 1.7 | Claim check claude-ship |
| 7.4 | 21.3 | Make and finish claude-ship |
| 29.2 | 4.8 | Judge claude-ship episode |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 23.9 | 1.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; python3 .claude/skills/stickman/scripts/ |
| 25.9 | 1.0 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-ship/film; sed -i 's/m.sf |
| 7.8 | 0.8 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; F=episodes/claude-ship/film cat > $F/scr |
| 27.4 | 0.5 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-ship; cp film/film.mp4 vi |
| 25.2 | 0.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-ship/film; earshot measur |
| 23.1 | 0.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-ship/film; ls; which ears |
| 29.7 | 0.3 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-ship; S=$RUNNER_TEMP/judg |
| 30.7 | 0.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/claude-ship; S=$RUNNER_TEMP/judg |
| 2.9 | 0.2 | Bash | mkdir -p $RUNNER_TEMP/claude-ship/draft && cd $RUNNER_TEMP/claude-ship/draft && cat > scri |
| 31.2 | 0.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; S=$RUNNER_TEMP/judge-claude-ship/auditco |
