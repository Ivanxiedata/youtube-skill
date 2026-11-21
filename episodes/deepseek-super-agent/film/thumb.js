// Episode 0 thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// Rules followed (stickman packaging playbook, yt-package): one idea, one focal point, three elements
// (the general's face, his army of screens, three words); the words don't repeat the title; dark ground with one light;
// readable at 160 px wide; the bottom-right corner carries nothing that matters, because the duration badge covers it.

// a soldier whose head is a screen waiting on a question: "your soldiers are AI coding agents"
function screenSoldier(x, X, Y, k, a) {
  x.save(); x.globalAlpha = a;
  x.fillStyle = '#1F1D36'; x.fillRect(X - 9 * k, Y - 28 * k, 7 * k, 28 * k); x.fillRect(X + 2 * k, Y - 28 * k, 7 * k, 28 * k);
  x.fillStyle = '#34508C'; x.fillRect(X - 12 * k, Y - 66 * k, 24 * k, 40 * k);
  x.strokeStyle = '#C9D3E8'; x.lineWidth = 2.6 * k; x.lineCap = 'butt'; x.beginPath();
  x.moveTo(X - 11 * k, Y - 65 * k); x.lineTo(X + 11 * k, Y - 28 * k); x.moveTo(X + 11 * k, Y - 65 * k); x.lineTo(X - 11 * k, Y - 28 * k); x.stroke();
  x.strokeStyle = '#9C8FB5'; x.lineWidth = 2.6 * k; x.beginPath(); x.moveTo(X + 15 * k, Y - 30 * k); x.lineTo(X + 21 * k, Y - 118 * k); x.stroke();
  x.fillStyle = '#0B0916'; x.fillRect(X - 3 * k, Y - 72 * k, 6 * k, 8 * k);
  x.beginPath(); x.roundRect(X - 21 * k, Y - 106 * k, 42 * k, 34 * k, 4 * k); x.fill();
  x.fillStyle = '#1B1746'; x.fillRect(X - 18 * k, Y - 103 * k, 36 * k, 28 * k);
  x.fillStyle = '#FFC66E'; x.font = `900 ${26 * k}px Arial`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('?', X, Y - 88 * k);
  x.fillStyle = '#E4493F'; x.fillRect(X - 2 * k, Y - 116 * k, 4 * k, 10 * k);
  x.restore();
}

function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  // dusk: dark everywhere, one light low behind the general
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the army, back rank first, only to the right of the general so his outline stays clean
  [[640, .8, .34], [705, 1.15, .46], [790, 1.65, .6], [905, 2.35, .78], [1075, 3.3, 1]].forEach(([y, k, a], r) => {
    const sp = 118 * k;
    for (let X = (r == 4 ? 905 : 640 + (r % 2 ? sp / 2 : 0)); X < W + 80; X += sp) screenSoldier(x, X, y, k, a);
  });
  // the general: the film's hero in the bicorne, overwhelmed, looking out at the viewer
  const p = { x: 400, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .12, lookY: -.02, brow: 1, sad: .95, wide: 1.4, open: 1, tilt: -.06 };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  bicorne(x, p, '#0E0B16', '#FFC66E');

  // three words, the viewer's own verdict; the last one carries the accent colour
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = 100 * 1030 / x.measureText('BOTTLENECK.').width;
  const put = (s, Y, col) => { x.font = font(size); x.lineWidth = size * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, 852, Y); x.fillStyle = col; x.fillText(s, 852, Y) };
  put('YOU’RE THE', 262, '#F8E9CC'); put('BOTTLENECK.', 262 + size * 1.02, '#FFC66E');

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.6)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
