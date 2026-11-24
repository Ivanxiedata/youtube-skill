// Episode copilot-workspaces thumbnail, drawn with the film's own rig (loaded after film.js; render with thumb.py).
// The channel's thumbnail template (docs/brand.md), adapted from gemini-decisions-api/film/thumb.js:
//   promise  LEARN <TOPIC> IN 60 SECONDS: small "LEARN", the topic huge in amber on two lines, the red "IN 60 SECONDS" sticker top right
//   mascot   the hero on the left in the amber gaming headset, looking at the viewer
//   picture  bottom centre: one shared document "TEAM PLAN" with two small teammates, a teal-screen-head agent and a comment bubble; darker than the mascot and the text
// Readable at 160 px wide; nothing in the bottom-right corner (the duration badge covers it).
const FACE = { x: 430, y: 880, s: 2.35 };   // mascot; face circle: centre (430, 880 - 116 * 2.35), radius 96 * 2.35
function drawThumb() {
  const x = ctx; x.setTransform(1, 0, 0, 1, 0, 0); x.globalAlpha = 1; x.filter = 'none'; x.globalCompositeOperation = 'source-over';
  let g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#120C22'); g.addColorStop(.5, '#2A1C46'); g.addColorStop(.58, '#56305E'); g.addColorStop(1, '#170F2B');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(440, 500, 60, 440, 500, 900); g.addColorStop(0, 'rgba(255,196,120,.95)'); g.addColorStop(.4, 'rgba(238,110,104,.5)'); g.addColorStop(1, 'rgba(228,90,110,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // the lesson picture (darker than the mascot and the text): two teammates behind one shared plan, the agent beside it, a comment bubble
  x.save(); x.filter = 'brightness(.8)';
  personFig(x, TM2, 960, 754, .55, 0, .3); personFig(x, TM3, 1200, 754, .55, 0, -.3);
  planV(x, 820, 720, 500, 290, [{ u: 1 }, { u: 1 }, { u: .6 }, { u: 0 }], true, 'TEAM PLAN');
  robotFig(x, 1470, 1040, .8, 0, { smile: 30 });
  { const bx = 1455, by = 650; x.lineJoin = 'round'; x.fillStyle = AMB; x.strokeStyle = INKC; x.lineWidth = 5; x.beginPath(); x.moveTo(bx - 40, by + 28); x.lineTo(bx - 18, by + 62); x.lineTo(bx + 6, by + 28); x.closePath(); x.fill(); x.stroke();
    rr(x, bx - 112, by - 34, 224, 68, 30, AMB, INKC, 5); x.fillRect(bx - 36, by + 22, 36, 10); txt(x, 'COMMENT', bx, by + 2, 32, DARK, 'center', '900'); }
  x.restore();

  // the mascot: gaming headset on, eyes on the viewer
  const p = { x: FACE.x, y: FACE.y, s: FACE.s, face: 1, noLegs: true, breath: 0, look: .1, lookY: 0, brow: .35, sad: 0, mouth: 1, mouthW: 34, tilt: .04, hands: {}, showH: {} };
  personRim(x, HERO, p, 'rgba(255,206,150,1)', 10, -4);
  headset(x, p);

  // the promise: LEARN <TOPIC> IN 60 SECONDS
  x.textAlign = 'left'; x.textBaseline = 'alphabetic'; x.lineJoin = 'round';
  const font = s => `${s}px Impact, "Arial Black", sans-serif`;
  x.font = font(100); const size = Math.min(255, 100 * 1000 / x.measureText('WORKSPACES').width);
  const put = (s, X, Y, sz, col) => { x.font = font(sz); x.lineWidth = sz * .17; x.strokeStyle = '#120A1C'; x.strokeText(s, X, Y); x.fillStyle = col; x.fillText(s, X, Y); };
  put('LEARN', 852, 180, 100, '#F8E9CC'); put('COPILOT', 852, 180 + size * .92, size, '#FFC66E'); put('WORKSPACES', 852, 180 + size * 1.85, size, '#FFC66E');
  x.save(); x.translate(1535, 132); x.rotate(-.035); x.scale(.71, .71);
  x.font = font(104); const sw = x.measureText('IN 60 SECONDS').width + 76;
  x.fillStyle = '#120A1C'; x.beginPath(); x.roundRect(-sw / 2 - 10, -76, sw + 20, 152, 30); x.fill();
  x.fillStyle = '#E4493F'; x.beginPath(); x.roundRect(-sw / 2, -66, sw, 132, 22); x.fill();
  x.fillStyle = '#FFF6E6'; x.textBaseline = 'middle'; x.fillText('IN 60 SECONDS', -sw / 2 + 38, 6); x.restore();

  g = x.createRadialGradient(W / 2, H / 2, H * .5, W / 2, H / 2, H * 1.1); g.addColorStop(0, 'rgba(12,6,20,0)'); g.addColorStop(1, 'rgba(12,6,20,.4)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}
