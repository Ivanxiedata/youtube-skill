// Agent Skills thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), copied from Episode 0:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber, the red "IN 60 SECONDS" sticker
//   mascot   the hero on the left in this episode's costume (the head chef's hat), confident, looking at the viewer
//   picture  one image of the lesson: a recipe box of skill cards, one card pulled out (load only what the task needs)
// Readable at 160 px wide; nothing that matters in the bottom-right corner (the duration badge covers it).
const TOPIC = 'AGENT SKILLS';

function skillBox(x) {
  // cards standing in the box, each with a tab; one pulled up and glowing
  const bx = 0, by = 0, names = ['PDF', 'CODE', 'BRAND', 'SLIDES', 'MAIL'];
  x.save(); x.translate(1230, 960); x.scale(1.45, 1.45);
  names.forEach((s, i) => { if (i == 1) return; const X = bx - 180 + i * 90;
    x.fillStyle = '#E9DCC6'; x.fillRect(X - 40, by - 120, 80, 130); x.beginPath(); x.roundRect(X - 36, by - 150, 54, 34, [8, 8, 0, 0]); x.fill();
    x.fillStyle = '#5A4A6A'; x.font = '900 15px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s, X - 9, by - 133) });
  x.fillStyle = '#8A4A3A'; x.beginPath(); x.roundRect(bx - 250, by - 40, 470, 140, [8, 8, 0, 0]); x.fill(); x.fillStyle = 'rgba(255,226,190,.4)'; x.fillRect(bx - 250, by - 40, 470, 5);
  // the pulled card: SKILL.md
  x.translate(bx - 90, by - 150); x.rotate(-.1);
  x.shadowColor = 'rgba(255,198,110,.8)'; x.shadowBlur = 40; x.fillStyle = '#FFF6E6'; x.fillRect(-90, -110, 180, 210); x.shadowBlur = 0;
  x.beginPath(); x.roundRect(-90, -146, 80, 40, [10, 10, 0, 0]); x.fill();
  x.fillStyle = '#1B1430'; x.font = '900 20px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('CODE', -50, -126);
  x.font = '900 28px Arial'; x.fillStyle = '#B4521E'; x.fillText('SKILL.md', 0, -76);
  x.fillStyle = 'rgba(27,20,48,.35)'; for (let k = 0; k < 6; k++) x.fillRect(-70, -44 + k * 22, k % 2 ? 110 : 140, 8);
  x.restore();
}

function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  // brand ground: dusk purple, one warm light low behind the mascot
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  // counter under the lesson picture
  g = x.createLinearGradient(0, 960, 0, H); g.addColorStop(0, '#8A4A3A'); g.addColorStop(1, '#3A2030'); x.fillStyle = g; x.fillRect(0, 960, W, H - 960);
  skillBox(x);
  // the mascot in this episode's costume: confident, eyes on the viewer
  const p = { x: 380, y: 960, s: 2.05, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04 };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  toque(x, p);
  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(230, 100 * 1000 / x.measureText(TOPIC).width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN', 880, 150, size * .56, '#F8E9CC'); put(TOPIC, 880, 150 + size * .98, size, '#FFC66E');
  // the sticker is the brand mark: same red, same tilt, same words on every thumbnail
  x.save(); x.translate(880, 150 + size * .98 + 122); x.rotate(-.035);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(0, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', 38, 6); x.restore();
  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
