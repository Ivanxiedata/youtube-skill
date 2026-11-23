// Episode chatgpt-space-live-pages thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), adapted from prompt-caching-v2/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in the amber scorekeeper's flat cap, looking at the viewer
//   picture  bottom centre: a small chat window of decision bubbles, a teal line, and the page "TEAM PLAN" with teal rows filling in; darker than the mascot and the text
// Readable at 160 px wide; nothing in the bottom-right corner (the duration badge covers it).
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): chat window -> teal line -> the page, rows filling teal
  x.save(); x.filter = 'brightness(.8)';
  rr(x, 720, 640, 330, 400, 24, '#241A3C', NEU, 5);
  x.save(); x.beginPath(); x.roundRect(720, 640, 330, 56, [24, 24, 0, 0]); x.fillStyle = '#3B2A5C'; x.fill(); x.restore();
  for (let i = 0; i < 12; i++) bubbleDraw(x, 720 + 28 + 39 + (i % 3) * 104, 740 + Math.floor(i / 3) * 80, i + 1, .74, 1);
  x.lineCap = 'round';
  for (const [c, w] of [[INKC, 28], [TEAL, 16]]) { x.strokeStyle = c; x.lineWidth = w; x.beginPath(); x.moveTo(1062, 880); x.quadraticCurveTo(1120, 740, 1178, 880); x.stroke(); }
  bubbleDraw(x, 1120, 800, 7, .66, 1);
  pageDraw(x, 1190, 648, .7, { border: TEAL, rows: i => ({ a: i < 9 ? 1 : 0, col: TEAL }) });
  x.restore();

  // the mascot, the flat cap on, eyes on the viewer
  const p = { x: 380, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: {}, showH: {} };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  flatCap(x, p);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(255, 100 * 1000 / x.measureText('CHATGPT').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('CHATGPT', 852, 180 + size * .92, size, '#FFC66E'); put('SPACE', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1535, 132); x.rotate(-.035); x.scale(.71, .71);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
