// Episode copilot-autopilot thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), adapted from gemini-decisions-api/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in the navy pilot's cap, looking at the viewer
//   picture  bottom centre: a route with 10 waypoint dots lit teal, a small paper plane flying it, one card "1 GOAL"; darker than the mascot and the text
// Readable at 160 px wide; nothing in the bottom-right corner (the duration badge covers it).
const FACE = { x: 430, y: 880, s: 2.35 };   // mascot; face circle: centre (430, 880 - 116 * 2.35), radius 96 * 2.35 = (430, 607), 226
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): the card "1 GOAL" above a route of 10 teal waypoints with the paper plane flying it
  x.save(); x.filter = 'brightness(.8)';
  const P = Array.from({ length: 10 }, (_, i) => [800 + i * 92, 905 - 36 * Math.sin(Math.PI * i / 9)]);
  x.save(); x.translate(0, 0); x.lineWidth = 1;
  x.fillStyle = '#9A86C0'; for (let i = 0; i < 9; i++) { const A = P[i], B = P[i + 1], n = Math.floor(Math.hypot(B[0] - A[0], B[1] - A[1]) / 18); for (let k = 1; k < n; k++) { x.beginPath(); x.arc(lerp(A[0], B[0], k / n), lerp(A[1], B[1], k / n), 4.5, 0, 7); x.fill(); } }
  for (let i = 0; i < 10; i++) { x.beginPath(); x.arc(P[i][0], P[i][1], 27, 0, 7); x.fillStyle = TEAL; x.fill(); x.lineWidth = 7; x.strokeStyle = '#120A1C'; x.stroke(); }
  x.restore();
  const q = planeAt(P, .62); paper(x, q.x, q.y - 62, q.a * .6 - .25, 2.5);
  rr(x, 920, 530, 560, 220, 36, '#2A1F42', '#FFC66E', 9);
  x.font = '260px Impact, "Arial Black", sans-serif'; const gw = x.measureText('1 GOAL').width;
  imp(x, '1 GOAL', 1200, 642, Math.min(165, 470 / (gw / 260)), '#FFC66E');
  x.restore();

  // the mascot: pilot's cap on, eyes on the viewer
  const p = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: {}, showH: {} };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  pilotCap(x, p);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(255, 100 * 1010 / x.measureText('AUTOPILOT').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 150, 100, '#F8E9CC'); put('COPILOT', 852, 150 + size * .98, size, '#FFC66E'); put('AUTOPILOT', 852, 150 + size * 1.95, size, '#FFC66E');
  x.save(); x.translate(1540, 112); x.rotate(-.035);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76, k = Math.min(.8, 620 / sw); x.scale(k, k);
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
