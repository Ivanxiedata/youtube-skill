// Episode gpt-6-think-while-answering thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py) on its own 1920x1080 canvas.
// The channel's thumbnail template (docs/brand.md): promise top right (LEARN, the topic huge in amber, red tilted IN 60 SECONDS),
// the mascot on the left in the napkin bib, looking at the viewer, eating from a first plate; at the bottom a robot chef with a teal screen head,
// thinking bubble over it, still cooking while a second plate slides out. No words on the picture (L54). Nothing in the bottom-right corner (the duration badge).
const FACE = { x: 430, y: 880, s: 2.35 };   // mascot; face circle: centre (430, 880 - 116 * 2.35), radius 96 * 2.35 -> x 204-656, y 381-833
function drawThumb() {
  const cv = document.createElement('canvas'); cv.width = 1920; cv.height = 1080; const x = cv.getContext('2d'), TW_ = 1920, TH_ = 1080;
  let g = x.createLinearGradient(0, 0, 0, TH_); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  x.fillStyle = 'rgba(255,226,190,.08)'; for (let i = 0; i < 6; i++) x.fillRect(0, 120 + i * 120, TW_, 5);

  // the picture, darker than the mascot and the text: the robot chef behind the pass, still cooking (thinking bubble), a second plate sliding out
  x.save(); x.filter = 'brightness(.85)';
  robot(x, 1440, 1000, .72, 0, { smile: 30 });
  x.restore();
  // the pass across the whole bottom
  x.fillStyle = '#B0705A'; x.fillRect(0, 900, TW_, 40); x.fillStyle = 'rgba(255,226,190,.4)'; x.fillRect(0, 900, TW_, 6); x.fillStyle = '#7A4038'; x.fillRect(0, 940, TW_, 140); x.fillStyle = 'rgba(20,10,30,.35)'; x.fillRect(0, 1030, TW_, 60);
  // thinking bubble over the chef: a cog still turning
  x.save(); x.filter = 'brightness(.9)'; thinkBubble(x, 0, 1130, 640, 1320, 760, 'cog', TEAL);
  // the second plate slides out: plate, a page of text, speed lines behind it
  { const px = 1150, py = 905; x.strokeStyle = 'rgba(248,233,204,.55)'; x.lineWidth = 10; x.lineCap = 'round';
    for (let i = 0; i < 3; i++) { x.beginPath(); x.moveTo(px + 150 + i * 6, py - 24 + i * 20); x.lineTo(px + 250 + i * 6, py - 24 + i * 20); x.stroke(); }
    plateBase(x, px, py, 2.0); textCard(x, px, py - 14, 1.7, 3, '#FFFFFF'); }
  x.restore();

  // the mascot: napkin bib, a fork in the raised hand, eyes on the viewer
  const hd = [150, 40];
  const p = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: { r: hd }, showH: { r: 1 } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  bib(x, p);
  { const hw = [FACE.x + hd[0] * FACE.s, FACE.y + hd[1] * FACE.s];
    x.save(); x.strokeStyle = '#E8DCC4'; x.lineWidth = 14; x.lineCap = 'round'; x.beginPath(); x.moveTo(hw[0] + 6, hw[1] - 10); x.lineTo(hw[0] + 20, hw[1] - 150); x.stroke();
    x.lineWidth = 10; for (const dx of [-14, 6, 26]) { x.beginPath(); x.moveTo(hw[0] + 20 + dx * .6, hw[1] - 150); x.lineTo(hw[0] + 20 + dx, hw[1] - 215); x.stroke(); }
    x.fillStyle = '#FFC66E'; x.strokeStyle = '#120A1C'; x.lineWidth = 6; x.beginPath(); x.roundRect(hw[0] - 10, hw[1] - 262, 62, 50, 12); x.fill(); x.stroke(); x.restore();
    gripHand(x, hw[0], hw[1], -1.2, HERO, 2); }
  // the first plate, in front of him
  plateBase(x, 420, 990, 3.0); textCard(x, 400, 968, 1.2, 3, '#FFFFFF');

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(330, 100 * 960 / x.measureText('GPT-6').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 200, 110, '#F8E9CC'); put('GPT-6', 852, 200 + size * .98, size, '#FFC66E');
  x.save(); x.translate(1565, 130); x.rotate(-.035); x.scale(.69, .69);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(TW_ / 2, TH_ / 2, TH_ * .5, TW_ / 2, TH_ / 2, TH_ * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, TW_, TH_);
  return cv.toDataURL('image/png');
}
