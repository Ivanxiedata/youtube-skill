// Episode claude-computer-use-work thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), adapted from prompt-caching-v2/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left with an office lanyard and ID badge, confident, pointing at the picture
//   picture  bottom centre: a laptop screen with an app window labelled NO CONNECTOR, a teal cursor clicking in it, the teal-headed robot beside it; darker than the mascot and the text
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): the laptop with the order tool, the robot beside it
  x.save(); x.filter = 'brightness(.8)';
  x.save(); x.translate(1120, 830); x.scale(.9, .9); x.translate(-800, -525); laptop(x, { scroll: 0, fill: 0 }); x.restore();
  robotFig(x, 1590, 1075, 1.1, 0, { smile: 30 });
  x.restore();
  // the red label on the app window, and the teal cursor clicking in it
  x.save(); x.translate(1190, 640); x.rotate(-.04);
  x.font = '66px Impact, "Arial Black", sans-serif'; const nw = x.measureText('NO CONNECTOR').width + 60;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-nw / 2 - 8, -50, nw + 16, 100, 24); x.fill();
  x.fillStyle = RED; x.beginPath(); x.roundRect(-nw / 2, -42, nw, 84, 18); x.fill();
  x.fillStyle = '#FFF6E6'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('NO CONNECTOR', 0, 4); x.restore();
  x.save(); x.strokeStyle = TEAL; x.lineWidth = 8; for (const r of [46, 74]) { x.globalAlpha = r < 60 ? .95 : .5; x.beginPath(); x.arc(1192, 790, r, 0, 7); x.stroke(); } x.restore();
  cursorDraw(x, 1192, 790, 2.8, TEAL, 1);

  // the mascot, office lanyard and ID badge on, eyes on the viewer
  const p = { x: 380, y: 760, s: 2.1, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04,
    hands: { r: [175, 62] }, showH: { r: true } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  lanyard(x, p);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(285, 100 * 1000 / x.measureText('COMPUTER USE').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('CLAUDE', 852, 180 + size * .92, size, '#FFC66E'); put('COMPUTER USE', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1535, 132); x.rotate(-.035); x.scale(.71, .71);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
