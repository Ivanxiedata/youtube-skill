// The channel's one thumbnail template (docs/brand.md, "Thumbnail template"): 1080x1920, YouTube Shorts.
// Loaded into an episode's film page after film.js, so it draws with that film's rig (HERO, personRim, props).
// An episode never edits this file. It gives film/thumb.json (the words) and, optionally, film/thumb_picture.js:
//   thumbPicture(x)    the lesson's one picture, drawn in a 620 x 620 box from (0, 0); darkened here
//   thumbCostume(x, m) the episode's costume on the mascot m (e.g. bellCap(x, m))
// Zones (top to bottom): promise y 110-900 · picture + mascot y 900-1640 · y 1640-1920 left calm (the Shorts title and view count cover it).
const THUMB = { W: 1080, H: 1920, ink: '#120A1C', amber: '#FFC66E', cream: '#F8E9CC', red: '#E4493F', font: 'Anton' };

async function drawThumbnail(cfg) {
  await document.fonts.load(`100px ${THUMB.font}`);
  const x = ctx, { W, H } = THUMB;
  x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';

  // background: the channel's dusk, warm glow behind the mascot
  let g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#120C22'); g.addColorStop(.45, '#2A1C46'); g.addColorStop(.7, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(330, 1230, 60, 330, 1230, 900);
  g.addColorStop(0, 'rgba(255,196,120,.9)'); g.addColorStop(.4, 'rgba(238,110,104,.45)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the picture, right, darker than the mascot and the words
  if (typeof thumbPicture === 'function') {
    x.save(); x.translate(430, 960); x.beginPath(); x.rect(-20, -20, 660, 680); x.clip(); x.filter = 'brightness(.82)';
    thumbPicture(x); x.restore();
  }

  // the mascot, left: large, eyes on the viewer
  const s = 2.25, m = { x: 300, y: 1250 + 116 * s, s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0,
    mouth: 1, mouthW: 34, tilt: .04, hands: {}, showH: {} };
  personRim(x, HERO, m, 'rgba(255,206,150,1)', 10, -4);
  if (typeof thumbCostume === 'function') thumbCostume(x, m);

  // the promise: LEARN <WHOSE> / topic in amber, as big as fits / IN 60 SECONDS
  x.textAlign = 'center'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const put = (str, X, Y, sz, col) => {
    x.font = `${sz}px ${THUMB.font}`; x.lineWidth = sz * .16; x.strokeStyle = THUMB.ink; x.strokeText(str, X, Y); x.fillStyle = col; x.fillText(str, X, Y);
  };
  const learn = (cfg.learn || 'LEARN').toUpperCase();
  x.font = `100px ${THUMB.font}`; put(learn, W / 2, 210, Math.min(96, Math.floor(100 * 960 / x.measureText(learn).width)), THUMB.cream);
  const lines = fitLines(x, cfg.topic.toUpperCase().split(/\s+/), 980, 450); // the sticker then ends above y 880, clear of a hat
  let y = 230;
  for (const l of lines.lines) { y += lines.size * 1.02; put(l, W / 2, y, lines.size, THUMB.amber); }
  x.save(); x.translate(W / 2, y + 115); x.rotate(-.035);
  x.font = `92px ${THUMB.font}`; const sw = x.measureText('IN 60 SECONDS').width + 80;
  x.fillStyle = THUMB.ink; x.beginPath(); x.roundRect(-sw / 2 - 10, -72, sw + 20, 144, 28); x.fill();
  x.fillStyle = THUMB.red; x.beginPath(); x.roundRect(-sw / 2, -62, sw, 124, 20); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', 0, 4); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .45, W / 2, H / 2, H * .95);
  g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.45)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  return { size: lines.size, lines: lines.lines, bottom: y + 187 };
}

// Split words into 1-3 lines and pick the split with the largest font that fits maxW wide and maxH tall in total.
// ponytail: brute force over splits, fine for the 1-6 words a topic has.
function fitLines(x, words, maxW, maxH) {
  let best = { size: 0, lines: [words.join(' ')] };
  const splits = (ws, k) => k === 1 ? [[ws.join(' ')]] :
    ws.slice(1).flatMap((_, i) => splits(ws.slice(i + 1), k - 1).map(r => [ws.slice(0, i + 1).join(' '), ...r]));
  for (let k = 1; k <= Math.min(3, words.length); k++) for (const ls of splits(words, k)) {
    x.font = `100px ${THUMB.font}`;
    const w = Math.max(...ls.map(l => x.measureText(l).width));
    const size = Math.min(260, Math.floor(100 * maxW / w), Math.floor(maxH / (k * 1.02)));
    if (size > best.size) best = { size, lines: ls };
  }
  return best;
}
