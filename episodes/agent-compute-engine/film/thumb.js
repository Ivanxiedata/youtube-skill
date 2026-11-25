// Episode agent-compute-engine thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md):
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on three lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in the bellhop's cap, looking at the viewer, a ring of 3 keys held behind his back (keys poke out beside him)
//   picture  bottom centre: the robot in a small sealed glass room, apron pockets turned out and empty, a scam envelope at its feet; no words; darker than the mascot and the text
// Readable at 160 px wide; nothing in the bottom-right corner (the duration badge covers it).
const FACE = { x: 430, y: 880, s: 2.35 };   // mascot; face circle: centre (430, 880 - 116 * 2.35), radius 96 * 2.35 = (430, 607), 226
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): the robot in a small sealed glass room, pockets turned out and empty, a scam envelope at its feet
  x.save(); x.filter = 'brightness(.82)';
  const RL = 790, RT = 702, RR = 1490, RB = 1010, BOT = 960, S = .6;
  const pr = { x: 1140, s: S }; const py = BOT + 34 * S - 235 * S;
  const p = robot(x, 0, { x: pr.x, bot: BOT, s: S, pock: 1, gl: 1, gr: 1, l: [pr.x - 86 * S, py + 144 * S], r: [pr.x + 86 * S, py + 144 * S] });
  x.fillStyle = '#B0705A'; x.fillRect(RL, BOT, RR - RL, RB - BOT); x.fillStyle = 'rgba(255,226,190,.4)'; x.fillRect(RL, BOT, RR - RL, 4);
  handTop(x, p, 'l'); handTop(x, p, 'r');
  envDraw(x, 940, BOT - 18, 150, { seal: true, ang: -.1 });
  glassRoom(x, 1, RL, RT, RR, RB);
  x.restore();

  // the mascot: bellhop's cap on, eyes on the viewer; a ring of 3 keys behind his back, the keys poking out on his right
  x.save(); x.translate(690, 835); x.strokeStyle = '#120A1C'; x.lineWidth = 8;
  for (const a of [-.55, 0, .55]) keyDraw(x, 0, 0, a, 1.5);
  x.restore();
  const m = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: {}, showH: {} };
  personRim(x, HERO, m, 'rgba(255,206,150,1)', 10, -4);
  bellCap(x, m);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  const size = 172;
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 150, 100, '#F8E9CC'); put('AGENT', 852, 150 + size * .98, size, '#FFC66E'); put('COMPUTE', 852, 150 + size * 1.95, size, '#FFC66E'); put('ENGINE', 852, 150 + size * 2.92, size, '#FFC66E');
  x.save(); x.translate(1540, 112); x.rotate(-.035);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76, k = Math.min(.8, 620 / sw); x.scale(k, k);
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
