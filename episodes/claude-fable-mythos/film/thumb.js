// Episode claude-fable-mythos thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py) on its own 1920x1080 canvas.
// The channel's thumbnail template (docs/brand.md): promise top right (LEARN, the topic huge in amber, red tilted IN 60 SECONDS),
// the mascot on the left in the napkin bib holding an order ticket, one picture that fills the frame (a robot chef with a teal screen head behind a counter, a teal checker gate).
// No words on the picture (L54). Nothing in the bottom-right corner (the duration badge).
const FACE = { x: 430, y: 880, s: 2.35 };   // mascot; face circle: centre (430, 880 - 116 * 2.35), radius 96 * 2.35 -> x 204-656, y 381-833
function drawThumb() {
  const cv = document.createElement('canvas'); cv.width = 1920; cv.height = 1080; const x = cv.getContext('2d'), TW_ = 1920, TH_ = 1080;
  let g = x.createLinearGradient(0, 0, 0, TH_); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  x.fillStyle = 'rgba(255,226,190,.08)'; for (let i = 0; i < 6; i++) x.fillRect(0, 120 + i * 120, TW_, 5);

  // the picture, darker than the mascot and the text: a robot chef behind the counter, a teal checker gate on it
  x.save(); x.filter = 'brightness(.85)';
  robot(x, 1450, 990, .7, 0, { hat: 'tall', smile: 30 });
  x.restore();
  // counter across the whole bottom
  x.fillStyle = '#B0705A'; x.fillRect(0, 900, TW_, 40); x.fillStyle = 'rgba(255,226,190,.4)'; x.fillRect(0, 900, TW_, 6); x.fillStyle = '#7A4038'; x.fillRect(0, 940, TW_, 140); x.fillStyle = 'rgba(20,10,30,.35)'; x.fillRect(0, 1030, TW_, 60);
  // the checker gate: posts, lintel, a big screen head, a scan light
  { const cx = 1110, base = 900, top = 660; x.save(); x.lineJoin = 'round';
    for (const sx of [-1, 1]) rr(x, cx + sx * 96 - 22, top, 44, base - top, 12, TEAL, INKC, 7);
    rr(x, cx - 130, top - 12, 260, 46, 16, TEAL, INKC, 7);
    x.fillStyle = 'rgba(191,242,238,.30)'; x.beginPath(); x.moveTo(cx - 74, top + 34); x.lineTo(cx + 74, top + 34); x.lineTo(cx + 74, base); x.lineTo(cx - 74, base); x.closePath(); x.fill();
    x.save(); x.translate(cx, top - 66); x.scale(.58, .58); head(x, HP_T, { smile: 30 }); x.restore(); x.restore(); }

  // the mascot: napkin bib, an order ticket in his raised hand, eyes on the viewer
  const hd = [200, -34];
  const p = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: { r: hd }, showH: { r: 1 } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  bib(x, p);
  { const hw = [FACE.x + hd[0] * FACE.s, FACE.y + hd[1] * FACE.s]; ticket(x, hw[0] + 36, hw[1] - 112, 2.5, '#FFFFFF', .22); gripHand(x, hw[0], hw[1], -.3, HERO, 2); }

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(170, 100 * 1000 / x.measureText('FABLE 5.2').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('CLAUDE', 852, 180 + size * .92, size, '#FFC66E'); put('FABLE 5.2', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1535, 132); x.rotate(-.035); x.scale(.71, .71);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(TW_ / 2, TH_ / 2, TH_ * .5, TW_ / 2, TH_ / 2, TH_ * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  return cv.toDataURL('image/png');
}
