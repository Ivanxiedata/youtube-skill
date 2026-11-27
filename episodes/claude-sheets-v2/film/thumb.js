// Episode claude-sheets thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py) on its own 1920x1080 canvas.
// The channel's thumbnail template (docs/brand.md): promise top right (LEARN, the topic huge in amber, red tilted IN 60 SECONDS),
// the mascot on the left with an amber teacher's pencil behind his ear, looking at the viewer; bottom right of centre one big spreadsheet cell
// with a magnifier over it showing teal outlines of the cells its formula adds. No words or digits on the picture (L54). Nothing in the bottom-right corner (the duration badge).
const FACE = { x: 430, y: 880, s: 2.35 };   // mascot; face circle: centre (430, 880 - 116 * 2.35), radius 96 * 2.35 -> x 204-656, y 381-833
function drawThumb() {
  const cv = document.createElement('canvas'); cv.width = 1920; cv.height = 1080; const x = cv.getContext('2d'), TW_ = 1920, TH_ = 1080;
  let g = x.createLinearGradient(0, 0, 0, TH_); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  x.fillStyle = 'rgba(255,226,190,.08)'; for (let i = 0; i < 6; i++) x.fillRect(0, 120 + i * 120, TW_, 5);

  // the picture, darker than the mascot and the text: one big cell, a magnifier over it, teal outlines of the cells its formula adds
  x.save(); x.filter = 'brightness(.88)';
  const cx = 1150, cy = 890;
  x.fillStyle = '#2E2350'; x.strokeStyle = '#120A1C'; x.lineWidth = 10; x.beginPath(); x.roundRect(cx - 230, cy - 130, 460, 260, 26); x.fill(); x.stroke();
  x.strokeStyle = '#2DB2AE'; x.lineWidth = 12; x.beginPath(); x.roundRect(cx - 222, cy - 122, 444, 244, 22); x.stroke();
  x.fillStyle = '#9C90B8'; x.beginPath(); x.roundRect(cx - 100, cy - 14, 200, 28, 14); x.fill();
  // the magnifier lens over the cell's right half: zoomed in, four small cells outlined teal
  const lx = 1400, ly = 835, lr = 190;
  x.strokeStyle = '#FFC66E'; x.lineWidth = 34; x.lineCap = 'round'; x.beginPath(); x.moveTo(lx + lr * .72, ly + lr * .72); x.lineTo(lx + lr * 1.12, ly + lr * 1.12); x.stroke();
  x.strokeStyle = '#120A1C'; x.lineWidth = 8; x.beginPath(); x.moveTo(lx + lr * .72, ly + lr * .72); x.lineTo(lx + lr * 1.12, ly + lr * 1.12); x.stroke();
  x.save(); x.beginPath(); x.arc(lx, ly, lr, 0, 7); x.clip();
  x.fillStyle = '#1B1430'; x.fillRect(lx - lr, ly - lr, lr * 2, lr * 2);
  for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) { const X = lx - 135 + c * 145, Y = ly - 120 + r * 130;
    x.fillStyle = 'rgba(45,178,174,.22)'; x.fillRect(X, Y, 128, 112); x.strokeStyle = "#2DB2AE"; x.lineWidth = 12; x.strokeRect(X, Y, 128, 112);
    x.fillStyle = '#BFF2EE'; x.beginPath(); x.roundRect(X + 32, Y + 48, 64, 16, 8); x.fill(); }
  x.strokeStyle = '#2DB2AE'; x.lineWidth = 10; x.beginPath(); x.moveTo(lx - 20, ly + 140); x.lineTo(lx - 20, ly + 160); x.stroke();
  x.restore();
  x.strokeStyle = '#FFC66E'; x.lineWidth = 26; x.beginPath(); x.arc(lx, ly, lr, 0, 7); x.stroke();
  x.strokeStyle = '#120A1C'; x.lineWidth = 7; x.beginPath(); x.arc(lx, ly, lr + 13, 0, 7); x.stroke(); x.beginPath(); x.arc(lx, ly, lr - 13, 0, 7); x.stroke();
  x.restore();

  // the mascot: an amber teacher's pencil behind his ear, eyes on the viewer
  const p = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04 };
  x.save(); bodyT(x, p); pencilTip(x, -150, -290, 1.05, 240, 24); x.restore();
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `bold ${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(300, 100 * 900 / Math.max(x.measureText('CLAUDE').width, x.measureText('SHEETS').width));
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 170, 100, '#F8E9CC'); put('CLAUDE', 852, 170 + size * .98, size, '#FFC66E'); put('SHEETS', 852, 170 + size * 1.92, size, '#FFC66E');
  x.save(); x.translate(1565, 100); x.rotate(-.035); x.scale(.62, .62);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(TW_ / 2, TH_ / 2, TH_ * .5, TW_ / 2, TH_ / 2, TH_ * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  return cv.toDataURL('image/png');
}
