// Episode thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's template (docs/brand.md), as in Episode 0:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN THE", the topic huge in amber, the red "IN 60 SECONDS" sticker
//   mascot   the hero on the left in this episode's costume (the mechanic's cap, a wrench in hand), confident, looking at the viewer
//   picture  one image of the lesson: your car with the hood up, fixed by the mechanic in your garage (a green check over the engine)
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
const TOPIC = ['CODING-AGENT', 'SESSION'];

function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  // brand ground: dusk purple, one warm light low behind the mascot
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.62, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture: the car with its hood up, the engine fixed, behind the text and darker than it
  x.save(); x.globalAlpha = .78; x.translate(-30, 300); car(x, 40); x.restore();
  mark(x, 1090, 790, 56, true);

  // the mascot in this episode's costume: the mechanic, wrench in hand, eyes on the viewer
  const p = { x: 400, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04, hands: { r: [150, 40] }, showH: { r: true } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  cap(x, p); const h = h2w(p, 'r'); wrench(x, h[0] - 6, h[1] + 6, -1.15, 2.2);

  // the promise: LEARN THE CODING-AGENT SESSION IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(230, 100 * 1000 / x.measureText(TOPIC[0]).width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  const X0 = 860, Y0 = 140;
  put('LEARN THE', X0, Y0, size * .56, '#F8E9CC'); put(TOPIC[0], X0, Y0 + size * .98, size, '#FFC66E'); put(TOPIC[1], X0, Y0 + size * 1.93, size, '#FFC66E');
  // the sticker is the brand mark: same red, same tilt, same words on every thumbnail
  x.save(); x.translate(X0, Y0 + size * 1.93 + 122); x.rotate(-.035);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(0, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
