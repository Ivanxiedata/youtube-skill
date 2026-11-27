"""Sound mix for one film. build.py runs this inside the film folder.
Edit the marked block only. Plants and EVENTS come from film.js, so sound stays on the picture's clock."""
import json, os, sys
sys.path.insert(0, os.environ["STICKMAN_SCRIPTS"])
from audio_kit import Mix

info = json.load(open("film.json"))
m = Mix(info["dur"], seed=9)

# ---- EDIT FROM HERE: set this from the sound brief ----
SFX, MUSIC, VOICE = True, True, "vo.wav"

MUSIC_DB = -14.5   # music stem about 16 dB under the voice as mixed (brand number, docs/brand.md); checked on the mix, trap L19
# No room tone, drone or other noise beds (docs/lessons.md L2). Sampled effects only.
if SFX:
    for e in info["events"]:
        t, k = e["t"], e["k"]
        if k == "whoosh": m.whoosh(t + .1, d=.7, g=.3)                                  # a FULL cutaway replaces the presenter
        elif k == "thud": m.sfx("impactwood-heavy-001", t, .8, 2600, .4, 0, .15)        # the CERTIFIED stamp lands
        elif k == "tick": m.tick(t, g=.05, pan=.2)                                      # a checklist row ticks green
if MUSIC:
    m.music_file("music.mp3", gain_db=MUSIC_DB)   # "Blue Sky" by Sergmusic, CC0, found through Openverse: ../music.json
if VOICE:
    m.voice(VOICE, at=.5)
# ---- TO HERE ----
m.write("audio.wav")
