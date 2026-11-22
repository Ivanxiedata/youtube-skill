// Episode openai-dots thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), copied from mcp-stateless/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber, the red "IN 60 SECONDS" sticker
//   mascot   the hero on the left in this episode's costume (flat cap and brown apron), confident, holding the shop keys
//   picture  one image of the lesson: the teal dot at its desk in the night shop (darker than the mascot and the text)
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
const TOPIC = 'OPENAI DOTS';

function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  // brand ground: dusk purple, one warm light low behind the mascot
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture: the dot at its desk in the night shop, in a dark frame, away from the bottom-right corner
  x.save(); x.beginPath(); x.roundRect(930, 600, 800, 390, 36); x.clip();
  g = x.createLinearGradient(0, 600, 0, 990); g.addColorStop(0, '#0F0E3A'); g.addColorStop(1, '#2A2060'); x.fillStyle = g; x.fillRect(930, 600, 800, 390);
  x.fillStyle = '#F8E9CC'; x.beginPath(); x.arc(1560, 700, 44, 0, 7); x.fill(); x.fillStyle = '#1E1850'; x.beginPath(); x.arc(1582, 686, 40, 0, 7); x.fill();
  x.fillStyle = '#F8E9CC'; for (let k = 0; k < 14; k++) x.fillRect(960 + hash(k, 1) * 740, 620 + hash(k, 2) * 140, 4, 4);
  x.fillStyle = '#4A2838'; x.fillRect(930, 880, 800, 120); x.fillStyle = '#8A4A3A'; x.fillRect(930, 872, 800, 14);
  monitor(x, 1130, 872, 250, 160, 1, 1); lampDesk(x, 1400, 872);
  g = x.createRadialGradient(1400, 740, 10, 1400, 740, 380); g.addColorStop(0, 'rgba(255,214,150,.4)'); g.addColorStop(1, 'rgba(255,200,130,0)'); x.fillStyle = g; x.fillRect(930, 600, 800, 390);
  drawDot(x, 1330, 740, 92, 1, { look: -.3, smile: .22 });
  x.fillStyle = 'rgba(12,8,44,.32)'; x.fillRect(930, 600, 800, 390); x.restore();
  x.strokeStyle = '#120A1C'; x.lineWidth = 8; x.beginPath(); x.roundRect(930, 600, 800, 390, 36); x.stroke();

  // the mascot in this episode's costume, holding the keys, eyes on the viewer
  const p = { x: 400, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04,
    hands: { r: [170, 20] }, showH: { r: true } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  apron(x, p); flatCap(x, p);
  const h = h2w(p, 'r'); keyProp(x, h[0] + 6, h[1] - 10, 1.9, .2, false, 0);
  x.fillStyle = HERO.hand; x.beginPath(); x.roundRect(h[0] - 26, h[1] - 28, 52, 44, 18); x.fill();

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
