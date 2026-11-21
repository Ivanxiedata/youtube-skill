"""Sound mix for one film. build.py runs this inside the film folder.
Edit the marked block only. Plants and EVENTS come from film.js, so sound stays on the picture's clock."""
import json, os, sys
sys.path.insert(0, os.environ["STICKMAN_SCRIPTS"])
from audio_kit import Mix

info = json.load(open("film.json"))
m = Mix(info["dur"], seed=9)

# ---- EDIT FROM HERE: set this from the sound brief ----
SFX, MUSIC, VOICE = True, True, "vo.wav"

MUSIC_DB = -13.5   # track gain, as Episode 0: about 16 dB under the voice (measured after the build)
# No room tone, drone or other noise beds (owner: they read as white noise). Sampled effects only.
if SFX:
    for e in info["events"]:
        t, k = e["t"], e["k"]
        if k == "paper": m.sfx("bookplace1", t, 1.2, 5000, .16, .2, .1)
        elif k == "cut": m.sfx("impactsoft-medium-001", t, .85, 2000, .55, 0, .12)   # a soft sound on each cut that changes place
        elif k == "thud": m.sfx("impactwood-medium-002", t, .9, 2400, .3, 0, .15)
        elif k == "bell": m.sfx("impactbell-heavy-001", t, 1.3, 5200, .12, .3, .3)
        elif k == "tick": m.tick(t, g=.05, pan=.2)
if MUSIC:
    m.music_file("music.mp3", gain_db=MUSIC_DB)   # "Blue Sky" by Sergmusic, CC0, found through Openverse: ../music.json
if VOICE:
    m.voice(VOICE, at=.08)
# ---- TO HERE ----
m.write("audio.wav")
