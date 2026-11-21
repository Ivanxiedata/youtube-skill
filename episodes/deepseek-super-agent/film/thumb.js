// Episode 0 thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The owner's rule comes first: a viewer must see what they will learn. So the headline names the topic
// (DEEPSEEK SUPER-AGENT) and the picture is the lesson itself: YOU -> one ROUTER -> many WORKERS, told with the film's army.
// Kept from the packaging guides: big face with a readable emotion, dark ground with one light, heavy caps with one accent
// colour, readable at 160 px wide, nothing that matters in the bottom-right corner (the duration badge covers it).

// a worker: a soldier whose head is a screen with code running on it ("your soldiers are AI coding agents")
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
  [[0, 22, '#2DB2AE'], [1, 30, '#FF8F7A'], [2, 16, '#2DB2AE'], [3, 26, '#2DB2AE']].forEach(([i, w, c]) => { x.fillStyle = c; x.fillRect(X - 15 * k, Y - (100 - i * 6.4) * k, w * k, 3.4 * k) });
  x.fillStyle = '#E4493F'; x.fillRect(X - 2 * k, Y - 116 * k, 4 * k, 10 * k);
  x.restore();
}
// a name tag and an arrow, both outlined in dark so they hold on any part of the picture
function tag(x, s, X, Y, fill, ink = '#120A1C') {
  x.font = '900 62px "Arial Black", Arial, sans-serif'; const w = x.measureText(s).width + 56;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(X - w / 2 - 7, Y - 45, w + 14, 90, 45); x.fill();
  x.fillStyle = fill; x.beginPath(); x.roundRect(X - w / 2, Y - 38, w, 76, 38); x.fill();
  x.fillStyle = ink; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, X, Y + 4);
}
function arrowTo(x, x0, x1, Y) {
  for (const [col, w, h] of [['#120A1C', 40, 58], ['#FFC66E', 22, 44]]) {
    x.strokeStyle = col; x.fillStyle = col; x.lineWidth = w; x.lineCap = 'round';
    x.beginPath(); x.moveTo(x0, Y); x.lineTo(x1 - h, Y); x.stroke();
    x.beginPath(); x.moveTo(x1 + (w - 22) / 2, Y); x.lineTo(x1 - h, Y - h * .8); x.lineTo(x1 - h, Y + h * .8); x.closePath(); x.fill();
  }
}

function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  // dusk: dark everywhere, one light low behind the general, a smaller one behind the router
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(965, 700, 30, 965, 700, 330); g.addColorStop(0, 'rgba(255,206,130,.55)'); g.addColorStop(1, 'rgba(255,206,130,0)');
  x.fillStyle = g; x.fillRect(600, 350, 760, 730);

  // WORKERS: the army, back rank first, on the right
  [[640, .8, .4], [705, 1.15, .52], [790, 1.65, .66], [905, 2.35, .82], [1075, 3.3, 1]].forEach(([y, k, a], r) => {
    const sp = 118 * k;
    for (let X = (r == 4 ? 1290 : 1160 + (r % 2 ? sp / 2 : 0)); X < W + 80; X += sp) screenSoldier(x, X, y, k, a);
  });

  // ROUTER: the chief of staff from the film, standing between the general and the army
  const r = { x: 965, y: standY(1075, .7), s: .7, face: 1, breath: 0, look: .7, lookY: .1, mouth: .7, brow: .3 };
  personRim(x, FRIEND, r, 'rgba(255,214,150,1)', 6, -3);
  bicorne(x, r, '#2D4C8C', '#F4EBDD');

  // YOU: the film's hero in the general's hat, amazed, watching the router take over
  const p = { x: 400, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .75, lookY: .05, brow: 1, sad: .45, wide: 1.3, open: .6, tilt: .03 };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  bicorne(x, p, '#0E0B16', '#FFC66E');

  // the lesson, left to right
  arrowTo(x, 735, 865, 835); arrowTo(x, 1060, 1195, 835);
  tag(x, 'YOU', 235, 1000, '#F8E9CC'); tag(x, 'ROUTER', 965, 462, '#FFC66E'); tag(x, 'AI WORKERS', 1560, 520, '#2DB2AE');

  // the topic, as the headline
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = 100 * 1030 / x.measureText('SUPER-AGENT').width;
  const put = (s, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, 852, Y); x.fillStyle = col; x.fillText(s, 852, Y) };
  put('DEEPSEEK', 168, size * .62, '#F8E9CC'); put('SUPER-AGENT', 168 + size * 1.0, size, '#FFC66E');

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
