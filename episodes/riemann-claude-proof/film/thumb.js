// Riemann thumbnail, 1280x720 (style B): the presenter's big face on the beige wall, "TOO BIG TO READ?" with a green CERTIFIED stamp, small RIEMANN HYPOTHESIS. Render with thumb.py.
// Nothing in the bottom-right corner (the duration badge covers it).
function drawThumb() {
  const cv = document.createElement('canvas'); cv.width = 1280; cv.height = 720; const x = cv.getContext('2d');
  let g = x.createLinearGradient(0, 0, 1280, 720); g.addColorStop(0, '#D8CFC0'); g.addColorStop(1, '#B3AA9C'); x.fillStyle = g; x.fillRect(0, 0, 1280, 720);
  g = x.createLinearGradient(0, 0, 0, 260); g.addColorStop(0, 'rgba(70,58,44,.35)'); g.addColorStop(1, 'rgba(70,58,44,0)'); x.fillStyle = g; x.fillRect(0, 0, 1280, 260);
  const out = (s, X, Y, sz) => { x.save(); x.font = `900 ${sz}px Arial`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineJoin = 'round'; x.lineWidth = sz * .16; x.strokeStyle = '#1c1a2b'; x.strokeText(s, X, Y); x.fillStyle = '#fff'; x.fillText(s, X, Y); x.restore() };
  const put = (s, X, Y, sz, col, al = 'center') => { x.save(); x.font = `900 ${sz}px Arial`; x.textAlign = al; x.textBaseline = 'middle'; x.shadowColor = 'rgba(0,0,0,.35)'; x.shadowBlur = 8; x.shadowOffsetY = 3; x.fillStyle = col; x.fillText(s, X, Y); x.restore() };
  const fitSize = (s, maxW, size) => { x.font = `900 ${size}px Arial`; const w = x.measureText(s).width; return w > maxW ? size * maxW / w : size };
  const s = 2.6, p = { x: 340, y: 340 + 116 * s, s, face: 1, noLegs: true, breath: 0, look: .3, lookY: 0, brow: 2.2, mouth: .95, mouthW: 30, open: 0, tilt: -.03, hsx: .85, hsy: 1.088, hands: { r: [100, -30] }, showH: {}, tuck: { r: true } };
  x.fillStyle = HERO.cloth; x.beginPath(); x.moveTo(110, p.y - 8 * s); x.bezierCurveTo(0, p.y, -80, p.y + 80, -80, 720); x.lineTo(660, 720); x.bezierCurveTo(660, p.y + 80, 620, p.y, 570, p.y - 8 * s); x.closePath(); x.fill();
  drawPerson(x, HERO, p);
  const hp = [p.x + p._h.r[0] * s, p.y + p._h.r[1] * s]; drawHand(x, hp[0], hp[1], 'point', 0, 1.2, 1.1);
  const X0 = 975; { const r = rng(11); for (let i = 0; i < 24; i++) { x.save(); x.translate(X0 - 10 + (r() - .5) * 18, 700 - i * 36); x.rotate((r() - .5) * .05); x.fillStyle = i % 2 ? '#FBF6E8' : '#EFE6CF'; x.fillRect(-215, -18, 430, 36); x.strokeStyle = '#1c1a2b'; x.lineWidth = 4; x.strokeRect(-215, -18, 430, 36); x.fillStyle = 'rgba(138,122,168,.5)'; x.fillRect(-190, -4, 250, 6); x.restore(); } }
  { const s_ = fitSize('RIEMANN HYPOTHESIS', 520, 44); x.font = `900 ${s_}px Arial`; const cw = x.measureText('RIEMANN HYPOTHESIS').width + 50; x.fillStyle = '#E8EEF4'; x.fillRect(X0 - cw / 2, 40, cw, 66); put('RIEMANN HYPOTHESIS', X0, 74, s_, '#1E2A44'); }
  out('TOO BIG', X0, 200, fitSize('TOO BIG', 540, 190));
  out('TO READ?', X0, 365, fitSize('TO READ?', 540, 190));
  x.save(); x.translate(X0 - 10, 565); x.rotate(-.08); const w = 500, h = 140;
  x.fillStyle = '#F3EEE2'; x.fillRect(-w / 2, -h / 2, w, h); x.strokeStyle = '#2E9E58'; x.lineWidth = 12; x.strokeRect(-w / 2, -h / 2, w, h);
  put('CERTIFIED', -40, 4, fitSize('CERTIFIED', w - 170, 100), '#2E9E58');
  x.strokeStyle = '#2E9E58'; x.lineWidth = 16; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); x.moveTo(w / 2 - 105, 6); x.lineTo(w / 2 - 80, 34); x.lineTo(w / 2 - 36, -26); x.stroke(); x.restore();
  return cv.toDataURL('image/png');
}
