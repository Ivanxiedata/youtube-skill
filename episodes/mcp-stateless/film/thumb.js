// Episode 1 thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), copied from Episode 0's thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber, the red "IN 60 SECONDS" sticker
//   mascot   the hero on the left in this episode's costume (diner cap and bow tie), confident, holding the order slip
//   picture  one image of the lesson behind the text: a row of waiters, any of whom can take the slip
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
const TOPIC = 'STATELESS MCP';

function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  // brand ground: dusk purple, one warm light low behind the mascot
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture: a row of waiters, each ready to take any order slip; darker than the mascot and the text
  [[FRIEND, 1000], [GUEST_A, 1200], [GUEST_B, 1400], [CHEF, 1600], [FRIEND, 1800]].forEach(([ch, X], i) => {
    const q = { x: X, y: 905 + (i % 2) * 18, s: .62, face: 1, noLegs: true, breath: i, look: -.4, lookY: -.2, mouth: .7, brow: .3, hands: { r: [110, -40] }, showH: { r: true } };
    drawPerson(x, ch, q); cap(x, q, '#2DB2AE'); bowTie(x, q, ch.skin == '#17141F' ? '#F4EBDD' : '#17141F');
  });
  g = x.createLinearGradient(0, 600, 0, H); g.addColorStop(0, 'rgba(23,15,43,0)'); g.addColorStop(1, 'rgba(23,15,43,.7)');
  x.fillStyle = g; x.fillRect(0, 600, W, H - 600);

  // the mascot in this episode's costume, holding the complete order slip, eyes on the viewer
  const p = { x: 400, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04,
    hands: { r: [150, -10] }, showH: { r: true } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  cap(x, p); bowTie(x, p);
  const h = h2w(p, 'r'); slip(x, h[0] + 80, h[1] - 150, 1.25, .1, 3);
  // the hand goes over the slip's corner, so the fingers hold it
  x.fillStyle = HERO.hand; x.beginPath(); x.roundRect(h[0] - 10, h[1] - 20, 44, 34, 15); x.fill();

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(230, 100 * 1030 / x.measureText(TOPIC).width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN', 852, 170, size * .62, '#F8E9CC'); put(TOPIC, 852, 170 + size * .98, size, '#FFC66E');
  // the sticker is the brand mark: same red, same tilt, same words on every thumbnail
  x.save(); x.translate(852, 170 + size * .98 + 122); x.rotate(-.035);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(0, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
