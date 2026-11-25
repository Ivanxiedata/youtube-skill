// Episode antigravity-orchestrator thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py) on its own 1920x1080 canvas.
// The channel's thumbnail template (docs/brand.md): promise top right (LEARN, the topic huge in amber, red tilted IN 60 SECONDS),
// the mascot on the left in the yellow hard hat, one picture that fills the bottom centre (a big robot architect with a blueprint, a small fast robot builder laying a brick on a half-built wall).
// No words on the picture (L54). Nothing in the bottom-right corner (the duration badge).
const FACE = { x: 430, y: 900, s: 2.35 };   // mascot; face circle: centre (430, 900 - 116 * 2.35), radius 96 * 2.35 -> x 204-656, y 401-853
function drawThumb() {
  const cv = document.createElement('canvas'); cv.width = 1920; cv.height = 1080; const x = cv.getContext('2d'), TW_ = 1920, TH_ = 1080;
  let g = x.createLinearGradient(0, 0, 0, TH_); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  x.fillStyle = 'rgba(255,226,190,.08)'; for (let i = 0; i < 6; i++) x.fillRect(0, 120 + i * 120, TW_, 5);

  // the picture, darker than the mascot and the text: ground, a half-built wall, the big architect with a blueprint, the small fast builder laying a brick
  const F = 930;
  x.save(); x.filter = 'brightness(.88)';
  // the architect (big): a blueprint held out in his right hand
  { const s = 1.0, py = F + 22 - 249 * s, cx = 800, hr = [150, 10];
    const p = robot(x, cx, py, s, 0, { hands: { r: hr }, showH: { r: 1 }, smile: 30 });
    const h = h2w(p, 'r');
    sheet(x, h[0] + 80, h[1] - 120, 250, 330, .06, '', 1);
    gripHand(x, h[0], h[1], -.3, CLB, 1.5); }
  // the builder (small, fast): a brick in his hand over the wall, speed lines behind him
  { const s = .62, py = F + 22 - 249 * s, cx = 1230, hr = [150, -20];
    speedL(x, cx - 120, py + 120, 1);
    const p = robot(x, cx, py, s, 0, { body: CLH, hp: HP_H, smile: 30, hands: { r: hr }, showH: { r: 1 } });
    const h = h2w(p, 'r'); brickG(x, h[0] + 20, h[1] - 36, 100, 54, TEAL, .12); gripHand(x, h[0], h[1], -.3, CLH, 1.3); }
  // the half-built wall in front of the builder (clear of the bottom-right corner)
  { const bw = 90, bh = 50, rows = [[1296, 2], [1340, 2], [1296, 1]];
    rows.forEach(([x0, n], r) => { const y0 = F - 30 - r * (bh + 3); for (let i = 0; i < n; i++) brickG(x, x0 + i * (bw + 3) + bw / 2, y0, bw, bh, AMB); }); }
  x.restore();
  // ground across the whole bottom
  x.fillStyle = '#6B4C8F'; x.fillRect(0, F, TW_, 40); x.fillStyle = 'rgba(255,226,190,.4)'; x.fillRect(0, F, TW_, 6); x.fillStyle = '#3E2C66'; x.fillRect(0, F + 40, TW_, 140);

  // the mascot: the yellow hard hat, a raised fist-hand, eyes on the viewer
  const hd = [200, -34];
  const p = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: {}, showH: {} };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  hardHat(x, p);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(200, 100 * 1010 / x.measureText('ORCHESTRATOR').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('ANTIGRAVITY', 852, 180 + size * .92, size, '#FFC66E'); put('ORCHESTRATOR', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1540, 112); x.rotate(-.035); x.scale(.62, .62);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(TW_ / 2, TH_ / 2, TH_ * .5, TW_ / 2, TH_ / 2, TH_ * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  return cv.toDataURL('image/png');
}
