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
        if k == "tick": m.tick(t, g=.05, pan=.2)                                      # a card or label pops in, a loop count
        elif k == "pen": m.sfx("drawknife1", t, 2.2 + .25 * ((int(t * 10)) % 3), 6500, .05, -.2, .08)   # a pencil scratch on the paper
        elif k == "paper": m.sfx("bookplace1", t, 1.1, 5000, .2, .2, .1)             # pages and notes
        elif k == "tock": m.sfx("metalclick", t, 1.5, 5000, .05, .3, .08)            # the hang-up button click
        elif k == "slide": m.sfx("cloth3", t, 1.5, 5000, .16, .2, .15)               # a bar grows, the file box slides in, the robot arrives
        elif k == "stamp": m.sfx("impactwood-medium-001", t, .9, 3000, .16, 0, .1)   # a stamp lands
        elif k == "bump": m.sfx("impactsoft-medium-001", t, .9, 2500, .2, 0, .1)     # not used here
        # the brush starts before the cut: the samples swell for 90-110 ms, and the swell should peak on the cut
        elif k == "cut": m.sfx("cloth2", t - .125, 1, 3500, .13, 0, .15)               # a soft brush on a cut that changes place
        elif k == "cut2": m.sfx("cloth4", t - .065, 1.15, 3500, .1, 0, .12)            # a lighter one on a cut inside a place
if MUSIC:
    m.music_file("music.mp3", gain_db=MUSIC_DB)   # "Blue Sky" by Sergmusic, CC0, found through Openverse: ../music.json
if VOICE:
    m.voice(VOICE, at=.3)
# ---- TO HERE ----
m.write("audio.wav")
