// Episode chatgpt-wallet thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), copied from openai-dots/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in this episode's costume (the amber beanie), confident, holding up his real gold card
//   picture  one image of the lesson: the teal dot holding the teal STAND-IN card (darker than the mascot and the text)
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  // brand ground: dusk purple, one warm light low behind the mascot
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture: the dot holding the teal stand-in card, in a dark frame, away from the bottom-right corner
  const PX = 930, PY = 730, PW = 810, PH = 270;
  x.save(); x.beginPath(); x.roundRect(PX, PY, PW, PH, 36); x.clip();
  g = x.createLinearGradient(0, PY, 0, PY + PH); g.addColorStop(0, '#0F0E3A'); g.addColorStop(1, '#2A2060'); x.fillStyle = g; x.fillRect(PX, PY, PW, PH);
  x.fillStyle = '#F8E9CC'; for (let k = 0; k < 16; k++) x.fillRect(PX + 20 + hash(k, 1) * (PW - 40), PY + 14 + hash(k, 2) * 110, 4, 4);
  g = x.createRadialGradient(1170, 860, 10, 1170, 860, 300); g.addColorStop(0, 'rgba(45,178,174,.45)'); g.addColorStop(1, 'rgba(45,178,174,0)'); x.fillStyle = g; x.fillRect(PX, PY, PW, PH);
  drawDot(x, 1130, 865, 96, 1, { look: .6, smile: .24 });
  cardProp(x, 1420, 880, 1.25, -.1, 'teal');
  x.fillStyle = 'rgba(12,8,44,.3)'; x.fillRect(PX, PY, PW, PH); x.restore();
  x.strokeStyle = '#120A1C'; x.lineWidth = 8; x.beginPath(); x.roundRect(PX, PY, PW, PH, 36); x.stroke();

  // the mascot in this episode's costume, holding up his real gold card, eyes on the viewer
  const p = { x: 400, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04,
    hands: { r: [170, 20] }, showH: { r: true } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  beanie(x, p);
  const h = h2w(p, 'r'); cardProp(x, h[0] + 20, h[1] - 90, 1.9, .22, 'gold');
  x.fillStyle = HERO.hand; x.beginPath(); x.roundRect(h[0] - 26, h[1] - 28, 52, 44, 18); x.fill();

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(285, 100 * 1000 / x.measureText('CHATGPT').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('CHATGPT', 852, 180 + size * .92, size, '#FFC66E'); put('WALLET', 852, 180 + size * 1.85, size, '#FFC66E');
  // the sticker is the brand mark: same red, same tilt, same words on every thumbnail (scaled to sit top right)
  x.save(); x.translate(1535, 132); x.rotate(-.035); x.scale(.71, .71);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
