// Episode windows-hybrid-intelligence thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md): LEARN <WHOSE> top right, the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker (tilted),
// the mascot large on the left with the amber headset looking at the viewer, one picture bottom centre: a PC monitor where a small teal-screen robot sorts file icons into folders,
// a small cloud above joined by a dotted arrow. Nothing in the bottom-right corner (the duration badge covers it). Mascot face box: x 154-606, y 381-833.
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(400, 500, 60, 400, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): a monitor, folders left, the teal-screen robot in the middle, files flying to the folders
  x.save(); x.filter = 'brightness(.88)';
  const cx = 1010, top = 560, mw = 640, mh = 400;           // monitor 690..1330 x 560..960
  rr(x, cx - mw / 2, top, mw, mh, 28, '#2E2250', INKC, 7); rr(x, cx - mw / 2 + 18, top + 18, mw - 36, mh - 36, 16, SCR, null);
  rr(x, cx - 40, top + mh - 4, 80, 60, 6, '#3A2D5A', INKC, 5);
  for (let i = 0; i < 3; i++) folderIcon(x, cx - 215, top + 105 + i * 100, i, 0, 1, false);
  robotAt(x, cx + 90, top + 205, .95, 1, 0);
  fileIcon(x, cx - 90, top + 90, 0, 1.15, 1); fileIcon(x, cx - 20, top + 70, 1, 1.15, 1); fileIcon(x, cx - 85, top + 230, 2, 1.15, 1); fileIcon(x, cx - 25, top + 320, 1, 1.15, 1);
  x.restore();
  // the cloud above, joined by a dotted arrow
  cloudDraw(x, 770, 450, .62, 1, 0, false);
  dotted(x, [[770, 520], [770, 575]], 1);
  x.fillStyle = CREAM; x.beginPath(); x.moveTo(770, 600); x.lineTo(752, 576); x.lineTo(788, 576); x.closePath(); x.fill();

  // the mascot, amber headset on, looking at the viewer
  const p = { x: 380, y: 880, s: 2.35, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: -.22, mouth: 1, mouthW: 34, tilt: .04, hands: {}, showH: {} };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  headset(x, p);

  // the promise: LEARN WINDOWS HYBRID INTELLIGENCE IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(285, 100 * 1000 / x.measureText('INTELLIGENCE').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y) };
  put('LEARN WINDOWS', 852, 120, 84, '#F8E9CC'); put('HYBRID', 852, 120 + size * .95, size, '#FFC66E'); put('INTELLIGENCE', 852, 120 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1500, 120 + size * 1.85 + 120); x.rotate(-.035); x.scale(.62, .62);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
