# Run trace

Written by `scripts/pipeline-trace.py` from this episode's daily run. Times are minutes from the start.

- Total: 80.1 min, 128 turns, $18.24 (list price; the run is on the owner's plan)
- Builds (`build.py`): 15; judges (subagents with "judge" in the brief): 2
- Ended: success

## Tokens per model

| model | input | output | cache read | cache write | cost |
|---|---|---|---|---|---|
| claude-opus-5-5 | 396 | 220,620 | 26,716,696 | 676,346 | $14.00 |
| claude-sonnet-5-5 | 218 | 157,849 | 15,412,738 | 448,141 | $4.24 |

## Subagents

| start | minutes | brief |
|---|---|---|
| 7.0 | 0.4 | Gate round 1 student |
| 7.5 | 4.0 | Gate round 1 critic |
| 13.7 | 0.3 | Gate round 2 student |
| 14.2 | 2.8 | Gate round 2 critic |
| 18.4 | 0.3 | Gate round 3 student |
| 18.9 | 1.7 | Gate round 3 critic |
| 21.2 | 1.3 | Claim check step 3b |
| 24.8 | 24.3 | Make and finish episode |
| 68.3 | 4.6 | Judge episode step 6 |
| 73.6 | 1.8 | Fix shots 16-17 and rebuild |
| 75.6 | 3.4 | Re-judge episode |

## Slowest 10 calls

| start | minutes | tool | what |
|---|---|---|---|
| 58.2 | 8.3 | Bash | until ! pgrep -f "build.py episodes/gpt-6" >/dev/null; do sleep 5; done; tail -c 1500 $RUN |
| 50.8 | 6.7 | Bash | until ! pgrep -f scripts/voice.py >/dev/null; do sleep 5; done; grep -o "line [0-9]*/[0-9] |
| 37.9 | 3.1 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/gpt-6-think-while-answering/film |
| 41.0 | 1.5 | Bash (sub) | cd $RUNNER_TEMP/gpt-6-think-while-answering/make; earshot timeline video.mp4 --video video |
| 73.8 | 1.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; S=/home/runner/work/_temp/gpt-6-think-wh |
| 73.8 | 1.4 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; grep -n "TS\s*=\|const TS\|DUR\s*=\|cons |
| 42.9 | 1.2 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill/episodes/gpt-6-think-while-answering/film |
| 44.2 | 0.9 | Bash (sub) | cd /home/runner/work/youtube-skill/youtube-skill; S=$RUNNER_TEMP/gpt-6-think-while-answeri |
| 66.9 | 0.9 | Bash | S=$RUNNER_TEMP/gpt-6-think-while-answering/make && cp episodes/gpt-6-think-while-answering |
| 68.9 | 0.9 | Bash (sub) | cd /home/runner/work/_temp/gpt-6-think-while-answering/judge && echo $EARSHOT_HOME; (earsh |
