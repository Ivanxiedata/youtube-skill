// Episode prompt-caching thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), adapted from claude-meetings/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in round amber reading glasses, holding one PDF, looking at the viewer
//   picture  bottom centre: one "100 PAGES" stack with a teal "SAVED" tag and small question cards Q1 ... Q30 flowing past it, darker than the mascot and the text
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): the 100-page stack, its teal SAVED tag, question cards flowing past it
  x.save(); x.filter = 'brightness(.78)';
  stackDraw(x, 900, 1020, 1.65, 1, true);
  x.restore();
  { const f = '84px Impact, "Arial Black", sans-serif'; x.save(); x.font = f; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineJoin = 'round'; x.lineWidth = 12; x.strokeStyle = '#120A1C'; x.strokeText('100 PAGES', 900, 735); x.fillStyle = '#F8E9CC'; x.fillText('100 PAGES', 900, 735); x.restore(); }
  x.save(); x.translate(1160, 870); x.rotate(.07);
  x.font = '64px Impact, "Arial Black", sans-serif'; const tw = x.measureText('SAVED').width + 56;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-tw / 2 - 8, -46, tw + 16, 92, 24); x.fill();
  x.fillStyle = TEAL; x.beginPath(); x.roundRect(-tw / 2, -38, tw, 76, 18); x.fill();
  x.fillStyle = '#10222A'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('SAVED', 0, 4); x.restore();
  const qs = [1, 2, 3, 4, 30];
  x.save(); x.filter = 'brightness(.85)';
  qs.forEach((n, i) => qCard(x, 1390 + i * 108, 1000 - i * 56, n, 1.15, 1, -.12 + i * .06));
  x.restore();

  // the mascot, amber reading glasses on, holding one PDF, eyes on the viewer
  const p = { x: 380, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04,
    hands: {}, showH: {} };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  reading(x, p);
  x.save(); x.translate(560, 920); x.rotate(.1);
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-112, -150, 224, 300, 14); x.fill();
  x.fillStyle = PAPER; x.beginPath(); x.roundRect(-104, -142, 208, 284, 10); x.fill();
  x.fillStyle = '#8A7AA8'; for (let k = 0; k < 6; k++) x.fillRect(-76, -112 + k * 22, k % 2 ? 130 : 152, 8);
  x.font = '78px Impact, "Arial Black", sans-serif'; x.lineJoin = 'round'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineWidth = 12; x.strokeStyle = '#120A1C'; x.strokeText('PDF', 0, 56); x.fillStyle = RED; x.fillText('PDF', 0, 56);
  x.fillStyle = HERO.hand; x.strokeStyle = '#120A1C'; x.lineWidth = 7;
  for (const [hx, hy] of [[-106, 110], [104, 70]]) { x.beginPath(); x.arc(hx, hy, 30, 0, 7); x.fill(); x.stroke(); }
  x.restore();

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(285, 100 * 1000 / x.measureText('CACHING').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('PROMPT', 852, 180 + size * .92, size, '#FFC66E'); put('CACHING', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1535, 132); x.rotate(-.035); x.scale(.71, .71);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
