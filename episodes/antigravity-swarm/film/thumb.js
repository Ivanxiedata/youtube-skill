// Episode antigravity-swarm thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md):
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in a small white chef's hat, looking at the viewer
//   picture  bottom centre: three teal-headed robots over three file cards (USERS, ORDERS, PRODUCTS) and a fourth robot with a tick; darker than the mascot and the text
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): three robots over three files, a fourth robot with a tick
  x.save(); x.filter = 'brightness(.85)';
  x.translate(690, 661); x.scale(.6, .6); x.translate(-120, -265);
  for (let i = 0; i < 3; i++) fileCard(x, CX[i], CT, NAMES[i], { a: 1, prog: 1, tick: 1 });
  for (let i = 0; i < 3; i++) robot(x, CX[i], RB, RS, 0, { a: 1, type: 1, ph: i * 1.3 });
  robot(x, VX, RB, RS, 0, { a: 1, type: 0, ph: 2.6, tick: 1, smile: 22 });
  x.restore();

  // the mascot, chef's hat on, looking at the viewer
  const p = { x: 380, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04,
    hands: {}, showH: {} };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  mascotHat(x, p);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(285, 100 * 1000 / x.measureText('ANTIGRAVITY').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('ANTIGRAVITY', 852, 180 + size * .92, size, '#FFC66E'); put('SWARM', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1545, 112); x.rotate(-.035); x.scale(.68, .68);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
