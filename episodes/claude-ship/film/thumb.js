// Episode claude-ship thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), adapted from gemini-decisions-api/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in the ship captain's cap, saluting, looking at the viewer
//   picture  bottom centre: a small boat with the sail "PR", a teal stamp "APPROVED" and a scroll "POLICY FILE"; darker than the mascot and the text
// Readable at 160 px wide; nothing in the bottom-right corner (the duration badge covers it).
const FACE = { x: 430, y: 880, s: 2.35 };   // mascot; face circle: centre (430, 880 - 116 * 2.35), radius 96 * 2.35 -> x 204..656, y 381..833; every prop and label stays off it
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): the policy scroll, the stamp, the boat "PR"
  x.save(); x.filter = 'brightness(.78)';
  { const bot = 1005, cx = 1290, k = .52;
    sailBoat(x, cx, bot, k, {});
    imp(x, 'PR', cx, bot - 380 * k, 130, '#2A1F42');
    // the scroll "POLICY FILE", two lines big enough for 160 px
    x.save(); x.translate(860, 880); x.lineJoin = 'round'; rr(x, -118, -112, 236, 224, 12, PAPER, INKC, 5);
    for (const sx of [-1, 1]) { x.beginPath(); x.ellipse(sx * 118, 0, 18, 118, 0, 0, 7); x.fillStyle = '#CDBB94'; x.fill(); x.stroke(); }
    txt(x, 'POLICY', 0, -44, 52, DARK, 'center', '900'); txt(x, 'FILE', 0, 20, 52, DARK, 'center', '900');
    x.fillStyle = '#8A7AA8'; x.fillRect(-70, 62, 140, 9); x.fillRect(-70, 82, 100, 9); x.restore();
    stamp(x, 1085, 965, -.1, 1, 'APPROVED', null, 70); }
  x.restore();

  // the mascot: captain's cap, a salute at the brim, eyes on the viewer
  const p = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: { r: [100, -178] }, showH: { r: 1 } };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  capt(x, p);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(255, 100 * 1000 / x.measureText('CLAUDE').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('CLAUDE', 852, 180 + size * .92, size, '#FFC66E'); put('SHIP', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1535, 132); x.rotate(-.035); x.scale(.71, .71);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
