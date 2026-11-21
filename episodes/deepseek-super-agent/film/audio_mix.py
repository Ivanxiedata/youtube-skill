"""Sound mix for one film. build.py runs this inside the film folder.
Edit the marked block only. Plants and EVENTS come from film.js, so sound stays on the picture's clock."""
import json, os, sys
sys.path.insert(0, os.environ["STICKMAN_SCRIPTS"])
from audio_kit import Mix

info = json.load(open("film.json"))
m = Mix(info["dur"], seed=9)

# ---- EDIT FROM HERE: set this from the sound brief ----
SFX, MUSIC, VOICE = True, False, "vo.wav"

if SFX:
    m.room_bed([(0, .5), (info["dur"], .5)])
    m.drone([(0, .1), (7.5, .25), (17.4, .15), (38.4, .08), (info["dur"], .05)])
    for e in info["events"]:
        t, k = e["t"], e["k"]
        if k == "pop": m.whoosh(t, d=.5, g=.12)
        elif k == "ready": m.tick(t, g=.08, pan=.3)
if MUSIC:
    m.music(mood="warm")
if VOICE:
    m.voice(VOICE, at=.5)
# ---- TO HERE ----
m.write("audio.wav")
