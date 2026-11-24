// Episode gemini-decisions-api thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), adapted from chatgpt-space-live-pages/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in the amber mortarboard, a red pencil in hand, looking at the viewer
//   picture  bottom centre: one bubble answer sheet "1 CLAIM · 20 QUESTIONS", teal filled bubbles, a small confidence bar per row; darker than the mascot and the text
// Readable at 160 px wide; nothing in the bottom-right corner (the duration badge covers it).
const FACE = { x: 430, y: 880, s: 2.35 };   // mascot; face circle: centre (430, 880 - 116 * 2.35), radius 96 * 2.35
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): the answer sheet, 20 rows, teal bubbles, a confidence bar on each
  x.save(); x.filter = 'brightness(.78)';
  sheetDraw(x, 1100, 832, .72, { a: 1, mark: () => 1, bar: () => 1, border: TEAL });
  x.restore();

  // the mascot: mortarboard on, red pencil in the raised hand, eyes on the viewer
  const p = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: { r: [150, -30] }, showH: { r: 1 } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  mortarboard(x, p);
  { const hw = h2w(p, 'r'), a = -1.25, k = 1.7, tip = [hw[0] + Math.cos(a) * 58 * k, hw[1] + Math.sin(a) * 58 * k];
    x.save(); x.translate(tip[0], tip[1]); x.rotate(a + Math.PI); x.scale(k, k); pencilShape(x, 175, 17); x.restore(); gripHand(x, hw[0], hw[1], a, HERO, 1.45); }

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(255, 100 * 1000 / x.measureText('DECISIONS').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('GEMINI', 852, 180 + size * .92, size, '#FFC66E'); put('DECISIONS', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1535, 132); x.rotate(-.035); x.scale(.71, .71);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
