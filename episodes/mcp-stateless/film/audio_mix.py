"""Sound mix for one film. build.py runs this inside the film folder.
Edit the marked block only. Plants and EVENTS come from film.js, so sound stays on the picture's clock."""
import json, os, sys
sys.path.insert(0, os.environ["STICKMAN_SCRIPTS"])
from audio_kit import Mix

info = json.load(open("film.json"))
m = Mix(info["dur"], seed=9)

# ---- EDIT FROM HERE: set this from the sound brief ----
SFX, MUSIC, VOICE = True, True, "vo.wav"

MUSIC_DB = -13.5   # track gain, as in Episode 0 (there it measured 16 dB under the voice)
# No room tone, drone or other noise beds (docs/lessons.md L2). Sampled effects only.
if SFX:
    for e in info["events"]:
        t, k = e["t"], e["k"]
        if k == "step": m.step(t, pan=.4, g=.1, surface="wood")
        elif k == "door": m.sfx("doorclose-1", t, 1, 4000, .22, .35, .2)
        elif k == "tick": m.tick(t, g=.05, pan=.2)
        elif k == "paper": m.sfx("bookplace1", t, 1.1, 5000, .2, .2, .1)
        elif k == "bell": m.sfx("impactbell-heavy-000", t, 1.7, 6000, .12, 0, .25)   # the diner's service bell
        elif k == "cut": m.sfx("cloth2", t, 1, 3500, .1, 0, .15)                      # a soft brush on cuts that change place
if MUSIC:
    m.music_file("music.mp3", gain_db=MUSIC_DB)   # "Blue Sky" by Sergmusic, CC0, found through Openverse: ../music.json
if VOICE:
    m.voice(VOICE, at=.3)
# ---- TO HERE ----
m.write("audio.wav")
