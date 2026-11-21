// Episode 0 thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// It follows the channel's thumbnail template (docs/brand.md), which every episode reuses so the channel is recognisable:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber, the red "IN 60 SECONDS" sticker
//   mascot   the hero on the left, wearing this episode's story costume (here the general's hat), confident, looking at the viewer
//   picture  one image of the lesson behind the text (here: the army of AI workers he commands)
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
const TOPIC = 'SUPER-AGENT';

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

function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  // brand ground: dusk purple, one warm light low behind the mascot
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture: his army of AI workers, back rank first, to the right of the mascot
  [[640, .8, .4], [705, 1.15, .52], [790, 1.65, .66], [905, 2.35, .82], [1075, 3.3, 1]].forEach(([y, k, a], r) => {
    const sp = 118 * k;
    for (let X = (r == 4 ? 1010 : 800 + (r % 2 ? sp / 2 : 0)); X < W + 80; X += sp) screenSoldier(x, X, y, k, a);
  });

  // the mascot in this episode's costume: confident, eyes on the viewer
  const p = { x: 400, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04 };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  bicorne(x, p, '#0E0B16', '#FFC66E');

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(230, 100 * 1030 / x.measureText(TOPIC).width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN DEEPSEEK’S', 852, 150, size * .56, '#F8E9CC'); put(TOPIC, 852, 150 + size * .98, size, '#FFC66E');
  // the sticker is the brand mark: same red, same tilt, same words on every thumbnail
  x.save(); x.translate(852, 150 + size * .98 + 122); x.rotate(-.035);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(0, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
