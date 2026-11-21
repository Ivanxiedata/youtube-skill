"""Sound mix for one film. build.py runs this inside the film folder.
Edit the marked block only. Plants and EVENTS come from film.js, so sound stays on the picture's clock."""
import json, os, sys
sys.path.insert(0, os.environ["STICKMAN_SCRIPTS"])
from audio_kit import Mix

info = json.load(open("film.json"))
m = Mix(info["dur"], seed=9)

# ---- EDIT FROM HERE: set this from the sound brief ----
SFX, MUSIC, VOICE = True, True, "vo.wav"

MUSIC_DB = -13.5   # the brand's signature track, as in Episode 0: about 16 dB under the voice
# No room tone, drone or other noise beds (lesson L2). Voice, the music file and sampled effects only.
if SFX:
    for e in info["events"]:
        t, k = e["t"], e["k"]
        if k == "clink": m.sfx(f"impactmetal-light-00{int(t * 7) % 5}", t, 1.0, 5000, .12, .3, .15)    # you, wrenching at the hood
        elif k == "tick": m.tick(t, g=.05, pan=.2)
        elif k == "key": m.sfx("metalclick", t, 1.4, 6000, .05, .25, .05)                          # typing the job
        elif k == "bad": m.sfx("impactsoft-heavy-001", t, .7, 600, .35, 0, .15)                   # a failed run
        elif k == "good": m.sfx("impactglass-light-002", t, 1.0, 6000, .14, 0, .25)               # a passing check
        elif k == "box": m.sfx("impactmetal-medium-001", t, .7, 2400, .18, -.2, .3)              # the toolbox lands
        elif k == "ratchet": m.sfx("metallatch", t, 1.3, 5000, .14, .2, .1)
        elif k == "engine": m.sfx("impactsoft-medium-002", t, .5, 300, .22, .1, .1)               # the engine turns over
        elif k == "cough": m.sfx("impactsoft-heavy-003", t, .55, 400, .45, .1, .3)               # and dies
        elif k == "cut": m.sfx("cloth2", t, .9, 2600, .06, 0, .15)                                 # a soft sound where the place changes
if MUSIC:
    m.music_file("music.mp3", gain_db=MUSIC_DB)   # "Blue Sky" by Sergmusic, CC0, found through Openverse: ../music.json
if VOICE:
    m.voice(VOICE, at=.08)
# ---- TO HERE ----
m.write("audio.wav")
