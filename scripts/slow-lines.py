#!/usr/bin/env python3
"""Slow, alone, every voice line spoken faster than the cap (L94: no line over 3.2 words a second), pitch kept (ffmpeg atempo).

    .skills/venv/bin/python scripts/slow-lines.py <film> [--cap 3.2]

Run right after tts.py. Rewrites film/vo.wav, vo.mp3, vo_lines.json, align.json, align_est.json and pauses.json; later times shift.
"""
import io, json, subprocess, sys
from pathlib import Path


def plan(lines, cap):
    """atempo factor per line (1 = untouched); a line over cap lands at cap - .1."""
    return [min(1.0, (cap - .1) / (len(l["text"].split()) / (l["end"] - l["start"]))) for l in lines]


def main(film, cap):
    import numpy as np, soundfile as sf
    L = json.loads((film / "vo_lines.json").read_text()); A = json.loads((film / "align.json").read_text())
    y, sr = sf.read(film / "vo.wav")
    out, prev, delta, wi, fs = [], 0, 0.0, 0, plan(L, cap)
    for l, f in zip(L, fs):
        n = len(l["text"].split()); a, b = l["start"], l["end"]; ws = A[wi:wi + n]; wi += n
        if f < 1:
            i, j = int(a * sr), int(b * sr); buf = io.BytesIO(); sf.write(buf, y[i:j], sr, format="WAV")
            o = subprocess.run(["ffmpeg", "-loglevel", "error", "-f", "wav", "-i", "-", "-filter:a", f"atempo={f:.4f}", "-f", "wav", "-"],
                               input=buf.getvalue(), capture_output=True, check=True).stdout
            out += [y[prev:i], sf.read(io.BytesIO(o))[0]]; prev = j
        for w in ws: w[1], w[2] = (round(a + delta + (t - a) / f, 3) for t in w[1:])
        l["start"], l["end"] = round(a + delta, 3), round(a + delta + (b - a) / f, 3)
        delta += (b - a) / f - (b - a)
    out.append(y[prev:]); sf.write(film / "vo.wav", np.concatenate(out), sr)
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", str(film / "vo.wav"), "-b:a", "128k", str(film / "vo.mp3")], check=True)
    (film / "vo_lines.json").write_text(json.dumps(L, indent=1))
    for name in ("align.json", "align_est.json"): (film / name).write_text(json.dumps(A))
    (film / "pauses.json").write_text(json.dumps([[p["end"], q["start"]] for p, q in zip(L, L[1:])]))
    print(f"slowed {sum(f < 1 for f in fs)} of {len(L)} lines; voice {len(np.concatenate(out)) / sr:.2f} s")


if __name__ == "__main__":
    if sys.argv[1:] == ["--selftest"]:
        f = plan([{"text": "a b c d", "start": 0, "end": 1}, {"text": "a b", "start": 0, "end": 1}], 3.2)
        assert abs(f[0] - .775) < 1e-9 and f[1] == 1, f
        print("ok")
    else:
        a = sys.argv[1:]; main(Path(a[0]), float(a[a.index("--cap") + 1]) if "--cap" in a else 3.2)
