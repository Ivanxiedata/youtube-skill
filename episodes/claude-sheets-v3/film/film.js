// Claude Sheets beta, told through the familiar classroom practice of showing your work.
// 15 shots across 11 visual beats. The paste, formulas, payoff and ask get second angles.
// Vertical 1080x1920. The example has 3 teams, 4 quarters and 3 totals.
// No setLineDash or Math.random. Isolate stroke settings. Keep essential art and
// text inside x 60–918 and y 100–1536. Draw glyphs at scale 1 with sizes >= 44 px.
// Digits on screen are limited to 60, Q1–Q4, Q1:Q4, Q1:Q3 and the count 3.

const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',NEU='#8A7AA8',DARK='#1B1430',PANEL='#2A1F42',MINT='#BFF2EE',CORAL='#FF6B5E';
// Move each text anchor with the camera while keeping glyphs at native size.
function textAnchor(x, X, Y) {
 const m = x.getTransform();
 x.setTransform(1, 0, 0, 1, m.a * X + m.c * Y + m.e, m.b * X + m.d * Y + m.f);
}
function txt(x,s,X,Y,size,col,al='left',wt='900',a=1){if(a<=0)return;if(size<44)size=44;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';textAnchor(x,X,Y);x.fillText(s,0,0);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`bold ${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;textAnchor(x,X,Y);x.strokeText(s,0,0);x.fillStyle=col;x.fillText(s,0,0);x.restore()}
function tw(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
/* a card with TEXT: the box eases in on scale+alpha, the text only on alpha at scale 1.0 (L48) */
function boxIn(x,cx,cy,a,s0,drawBox,drawText){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);drawBox();x.restore();x.save();x.globalAlpha*=a;drawText();x.restore()}
/* a label: dark pill with 1-3 lines at size 44 or more, kept inside x 112-878 */
function lab(x,lines,cx,cy,size,col,o={}){if(typeof lines=='string')lines=[lines];const z=Math.max(44,size||44);
 const w=Math.max(...lines.map(s=>tw(x,s,z)))+52,lh=z*1.25,h=lh*lines.length+22;let X=cx;if(!o.free){X=clamp(cx,112+w/2,878-w/2)}
 const a=o.a===undefined?1:o.a;
 boxIn(x,X,cy,a,o.s0===undefined?.9:o.s0,()=>rr(x,X-w/2,cy-h/2,w,h,22,o.bg||'rgba(18,10,28,.92)',o.line||null,o.lw||4),
  ()=>lines.forEach((s,i)=>txt(x,s,X,cy-(lines.length-1)*lh/2+i*lh+2,z,Array.isArray(col)?col[i]:col,'center')));return {w,h,X,z}}

// Cut frames at 30 fps, including the 0.5 s VOICE_AT offset. Every shot is at most 150 frames.
// The paste and formula angle changes use pauses within their lines measured directly from vo.wav.
const CF = [0, 144, 291, 441, 494, 609, 713, 837, 974, 1040, 1182, 1272, 1380, 1530, 1585, 1718];
const TS = CF.slice(0, -1).map(frame => frame / 30);
const DUR = CF.at(-1) / 30;
const ST = i => TS[i];

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:MINT,face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const HP_T={frame:'#187E86',ear:'#0E4A50',s1:'#46D0CB',s2:TEAL,face:'#0B3A40'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* an amber teacher's pencil: the sharpened tip at (tx,ty), the body running along angle ang */
function pencilTip(x,tx,ty,ang,len=230,w=24){x.save();x.translate(tx,ty);x.rotate(ang);x.lineJoin='round';
 x.fillStyle='#F2D9A8';x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.moveTo(0,0);x.lineTo(w*1.7,-w/2);x.lineTo(w*1.7,w/2);x.closePath();x.fill();x.stroke();
 x.fillStyle=INKC;x.beginPath();x.moveTo(0,0);x.lineTo(w*.55,-w*.17);x.lineTo(w*.55,w*.17);x.closePath();x.fill();
 rr(x,w*1.7,-w/2,len-w*1.7-w*1.1,w,0,AMB,INKC,5);x.fillStyle='#D9962A';x.fillRect(w*1.7+8,-w*.14,len-w*1.7-w*1.1-16,w*.28);
 rr(x,len-w*1.1,-w/2,w*1.1,w,6,'#E8847A',INKC,5);x.restore()}
function mascot(x,t,cam,o){const s=o.s||.72,p={x:o.x,y:o.y,s,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.4:o.look,lookY:o.lookY===undefined?.1:o.lookY,brow:o.brow===undefined?.2:o.brow,mouth:o.mouth===undefined?.5:o.mouth,mouthW:28,tilt:o.tilt||0};
 if(o.ear!==false){x.save();bodyT(x,p);pencilTip(x,-150,-290,1.05,240,24);x.restore()}  /* behind his ear: drawn first, the head covers its lower end */
 if(o.rep!==false)actor(x,'hero',HERO,p,cam);else drawPerson(x,HERO,p);return p}
function head(x,hp,o){ /* head-local screen head */
 x.fillStyle=hp.ear;x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,hp.frame,hp.ear,5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,hp.s1);g.addColorStop(1,hp.s2);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle=hp.face;
 for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle=hp.face;x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
/* robot: cx = centre, bottom = the floor/slab/tile line it stands on */
function robot(x,cx,bottom,s,t,o={}){const body=o.body||CLB,hp=o.hp||HP_T,p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1+(o.ph||0),noLegs:true,noFace:true,hands:o.hands||{},showH:{}};
 drawPerson(x,body,p);x.save();headT(x,p);head(x,hp,{blink:blinkAt(t+.7+(o.ph||0),BL),smile:o.smile});x.restore();return p}
/* the tick mark, centred at (X,Y), size r, drawn up to progress u */
function tick(x,X,Y,r,col,u=1,lw=18){if(u<=0)return;x.save();x.strokeStyle=col;x.lineWidth=lw;x.lineCap='round';x.lineJoin='round';x.beginPath();const p=[[X-r*.62,Y+r*.02],[X-r*.18,Y+r*.46],[X+r*.66,Y-r*.5]];
 x.moveTo(p[0][0],p[0][1]);const a=Math.min(1,u*2),b=Math.max(0,u*2-1);x.lineTo(lerp(p[0][0],p[1][0],a),lerp(p[0][1],p[1][1],a));if(b>0)x.lineTo(lerp(p[1][0],p[2][0],b),lerp(p[1][1],p[2][1],b));x.stroke();x.restore()}

// ---------- the world ----------
const CT=1010; /* desk / slab top */
function bgRest(x,warm=.3,cx=620,cy=640){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(255,226,190,.07)';for(let i=0;i<7;i++)x.fillRect(-900,330+i*88,W+1800,4)}
function slab(x,top=CT,from=-900,to=W+900){x.fillStyle='#B0705A';x.fillRect(from,top,to-from,36);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(from,top,to-from,5);x.fillStyle='#7A4038';x.fillRect(from,top+36,to-from,110);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(from,top+146,to-from,900)}

// ---------- the sheet: window, formula bar, grid (cells show grey bars, never digits) ----------
const GW={lbl:182,q:64,tot:148},GR={row:96};
const COLS=['','Q1','Q2','Q3','Q4','TOTAL'];
const QB=[[30,22,34,26],[26,34,22,30],[34,26,30,22]];
const G0={hd:64,w:GW.lbl+4*GW.q+GW.tot,x0:202};
function cr(g,top,r,c){const ws=[GW.lbl,GW.q,GW.q,GW.q,GW.q,GW.tot];let X=g.x0;for(let k=0;k<c;k++)X+=ws[k];return [X,r==0?top:top+g.hd+(r-1)*GR.row,ws[c],r==0?g.hd:GR.row]}
/* o: totHi (amber tint 0-1), fx [a,a,a], hl {'r,c':[col,a]} outlines, dark {'r,c':1}, flat true = plain grey cells (BEFORE) */
function grid(x,g,top,o={}){const nc=6;
 for(let r=0;r<4;r++)for(let c=0;c<nc;c++){const [X,Y,w,h]=cr(g,top,r,c);
  let fill=(r==0||c==0)?'#3A2D60':'#2E2350';if(o.flat&&r>0&&c>0)fill='#4B4468';
  if(c==5&&r>0&&o.totHi)fill=mixC(fill,AMB,.3*(Array.isArray(o.totHi)?o.totHi[r-1]:o.totHi));
  if(o.dark&&o.dark[r+','+c])fill='#150F26';
  x.save();rr(x,X,Y,w,h,0,fill,INKC,3);
  if(r==0&&c>=1&&c<=5)txt(x,COLS[c],X+w/2,Y+h/2+2,44,CREAM,'center');
  if(r>0&&c==0)txt(x,'TEAM '+'ABC'[r-1],X+w/2,Y+h/2+2,44,CREAM,'center');
  const barC=(o.dark&&o.dark[r+','+c])?'#3A3050':'#9C90B8';
  if(r>0&&c>=1&&c<=4){x.fillStyle=barC;x.beginPath();x.roundRect(X+w/2-QB[r-1][c-1]/2,Y+h/2-6,QB[r-1][c-1],12,6);x.fill()}
  if(r>0&&c==5){const f=o.fx?o.fx[r-1]:0;
   if(f>0){boxIn(x,X+38,Y+h/2,f,.6,()=>rr(x,X+8,Y+h/2-27,60,54,14,TEAL,INKC,4),()=>txt(x,'fx',X+38,Y+h/2+2,44,DARK,'center'));x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+80,Y+h/2-7,56,14,7);x.fill()}
   else{x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+w/2-36,Y+h/2-7,72,14,7);x.fill()}}
  x.restore()}
 if(o.hl)for(const k in o.hl){const [r,c]=k.split(',').map(Number),[col,a]=o.hl[k];if(a<=0)continue;const [X,Y,w,h]=cr(g,top,r,c);x.save();x.globalAlpha*=a;x.fillStyle=col;x.globalAlpha*=.25;x.fillRect(X+2,Y+2,w-4,h-4);x.globalAlpha/=.25;x.strokeStyle=col;x.lineWidth=8;x.strokeRect(X+4,Y+4,w-8,h-8);x.restore()}
 return {top,g}}
const WL=112,WR=878,WTOP=392;
/* the window frame: title bar (66) + body; returns nothing; hh = total height */
function win(x,title,col,top,hh,o={}){const a=o.a===undefined?1:o.a;x.save();x.globalAlpha*=a;rr(x,WL,top,WR-WL,hh,24,'#1B1430',col,6);
 x.save();x.beginPath();x.roundRect(WL,top,WR-WL,66,[24,24,0,0]);x.fillStyle=col;x.fill();x.restore();
 txt(x,title,WL+30,top+35,44,o.tc||CREAM,'left');x.restore()}
function fbar(x,s,top,col,tc,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;rr(x,WL+10,top,WR-WL-20,70,16,'#241A3C',col,4);txt(x,s,WL+30,top+37,44,tc,'left');x.restore()}
const GT0=WTOP+66+12+70+12; /* grid top inside a window with a formula bar */

const M_L=70,M_T=1218,M_W=838,M_H=312;
function meterBox(x,st){if(st.a<=0)return;const l=M_L,tp=M_T,w=M_W,h=M_H,col=mixC(AMB,TEAL,st.tint),a=st.a;x.save();x.setTransform(1,0,0,1,0,0);
 boxIn(x,l+w/2,tp+h/2,a,.94,()=>rr(x,l,tp,w,h,28,'rgba(27,20,48,.95)',col,6),()=>{
  txt(x,'TOTALS WITH NO WORK SHOWN',l+w/2,tp+42,44,CREAM,'center','900',1-st.tick);txt(x,'OUR EXAMPLE',l+w/2,tp+96,44,AMB,'center');
  const cy=tp+210;for(let i=0;i<3;i++){const bx=l+34+i*96;rr(x,bx,cy-42,84,84,14,'#241A3C',INKC,5);if(st.f[i]>0){x.save();x.globalAlpha*=st.f[i];rr(x,bx+6,cy-36,72,72,10,col,null);x.restore()}}
  if(st.cnt>0){x.save();x.globalAlpha*=st.cnt;imp(x,'3',l+34+3*96+110,cy+2,150,AMB);x.restore()}
  if(st.tick>0){const tx=l+34+3*96+10;x.save();x.globalAlpha*=st.tick;tick(x,tx+40,cy,80,TEAL,st.tick,22);x.restore();
   txt(x,'ALL 3 SHOW',tx+110,cy-27,44,MINT,'left','900',st.tick);txt(x,'THEIR WORK',tx+110,cy+27,44,MINT,'left','900',st.tick)}});x.restore()}
const HP={l:300,t:590,w:570,h:410};
const GREYL='#9C90B8',GREYD='#7B6F96';
function bar(x,X,Y,w,col=GREYL,h=14){x.fillStyle=col;x.beginPath();x.roundRect(X,Y-h/2,w,h,h/2);x.fill()}
/* the homework page (coordinates before the desk's 90 px shift): mode 'ans' = answers only (grey scribble, "=", an empty box); 'steps' = two grey step lines under each problem */
function hwPage(x,mode){rr(x,HP.l,HP.t,HP.w,HP.h,14,CREAM,INKC,6);
 for(let i=0;i<3;i++){
  if(mode=='ans'){const y=725+i*100;bar(x,HP.l+34,y,240,GREYL,16);txt(x,'=',HP.l+318,y,44,GREYD,'center');rr(x,HP.l+372,y-32,80,64,12,null,GREYD,5);bar(x,HP.l+393,y,38,GREYD,12)}
  else{const y=650+i*120;bar(x,HP.l+34,y,240,GREYL,16);txt(x,'=',HP.l+318,y,44,GREYD,'center');bar(x,HP.l+372,y,80,GREYL,16);
   bar(x,HP.l+64,y+38,200,GREYL,12);bar(x,HP.l+64,y+72,160,GREYL,12)}}}

function returnHomework(t, cam) {
 const x = layer('board', cam);
 bgRest(x, .34, 495, 800);
 x.translate(0, 90);
 const u = fin(t, .12, 1.28);
 const release = fin(t, 1.38, .52);
 const pageX = lerp(-10, 0, u);
 const pageY = lerp(-62, 0, u);
 const mx = 219, my = 890, ms = .72;
 const gripX = lerp(HP.l + pageX + 14, mx + 97.5 * ms, release);
 const gripY = lerp(866 + pageY, 950, release);
 const hand = [(gripX - mx) / ms, (gripY - my) / ms];
 const teacher = mascot(x, t, cam, {x:mx, y:my, s:ms, look:.5, lookY:.36, brow:.15, mouth:.6, hands:{r:hand}});
 slab(x);
 x.save();
 x.translate(pageX, pageY);
 hwPage(x, 'ans');
 txt(x, 'ANSWERS ONLY', HP.l + HP.w / 2, 646, 48, DARK, 'center');
 x.restore();
 if (t < 1.9) {
  gripHand(x, gripX, gripY, -.15, HERO, ms);
  contact('homework grip', h2w(teacher, 'r'), [gripX, gripY]);
 }
 comp([['board', 0]]);
}

function questionTotal(t, cam) {
 const x = layer('board', cam);
 bgRest(x, .3, 495, 720);
 robot(x, 270, 1040, 1.12, t, {smile:5});
 slab(x, 1040);
 const left = 435, top = 574, width = 409;
 rr(x, left, top, width, 300, 25, PANEL, NEU, 6);
 rr(x, left, top, width, 88, 23, '#3A2D60', NEU, 4);
 txt(x, 'TOTAL', left + width / 2, top + 45, 48, CREAM, 'center');
 imp(x, '?', left + width / 2, top + 187, 116, AMB);
 comp([['board', 0]]);
}

function circlePath(x, cx, cy, rx, ry, start, progress) {
 x.save();
 x.strokeStyle = AMB;
 x.lineWidth = 7;
 x.lineCap = 'round';
 x.beginPath();
 x.ellipse(cx, cy, rx, ry, 0, start, start + progress * Math.PI * 2.04);
 x.stroke();
 x.restore();
 const a = start + progress * Math.PI * 2.04;
 return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry];
}

function checkedHomework(t, cam) {
 const x = layer('board', cam);
 bgRest(x, .34, 495, 800);
 x.translate(0, 90);
 const dt = t - ST(2);
 const mx = 219, my = 890, ms = .72;
 // Circle the lower step of the middle answer on the same piece of paper.
 const u = seg(dt, .67, 1.65);
 const angle = Math.PI + u * Math.PI * 2.04;
 const withdraw = fin(dt, 1.65, .42);
 const tip = [436 + Math.cos(angle) * 87 - withdraw * 20,
              842 + Math.sin(angle) * 20 + withdraw * 40];
 const gripX = tip[0] - 110, gripY = tip[1] + 52;
 const hand = [(gripX - mx) / ms, (gripY - my) / ms];
 const teacher = mascot(x, t, cam, {x:mx, y:my, s:ms, hands:{r:hand}, look:.55, lookY:.5, brow:.35, mouth:.35, ear:false});
 slab(x);
 hwPage(x, 'steps');
 if (u > 0) circlePath(x, 436, 842, 87, 20, Math.PI, u);
 pencilTip(x, tip[0], tip[1], 2.70, 158, 18);
 gripHand(x, gripX, gripY, -.5, HERO, .72);
 contact('correction pencil', h2w(teacher, 'r'), [gripX, gripY]);
 lab(x, 'THE WRONG STEP CAN SHOW', 495, 1138, 44, AMB, {a:fin(dt, 1.42)});
 comp([['board', 0]]);
}

function pasteBudget(t,cam){const x=layer('board',cam),T=ST(3);bgRest(x,.3,495,640);
 lab(x,'HIRING BUDGET',495,420,44,AMB,{});
 const P=480;
 rr(x,WL,P,WR-WL,200,26,PANEL,AMB,6);
 x.save();x.beginPath();x.roundRect(WL,P,WR-WL,200,26);x.clip();robot(x,235,P+200,.45,t,{smile:30});x.restore();
 lab(x,'CLAUDE',235,P+172,44,CREAM,{free:true,bg:'rgba(18,10,28,.92)'});
 rr(x,380,P+18,470,164,20,'#3A2D60',CREAM,5);
 for(let r=0;r<3;r++)for(let c=0;c<3;c++){x.fillStyle='#B8AACB';x.beginPath();x.roundRect(410+c*140,P+44+r*44,100,14,7);x.fill()}
 const pl=fin(t,T+2.4,.5);x.save();x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';x.beginPath();x.moveTo(465,P+214);x.lineTo(525,P+214);x.lineTo(525,P+256+pl*8);x.lineTo(552,P+256+pl*8);x.lineTo(495,P+306+pl*8);x.lineTo(438,P+256+pl*8);x.lineTo(465,P+256+pl*8);x.closePath();x.fill();x.stroke();x.restore();
 lab(x,'PASTE',700,P+260,44,AMB,{free:true});
 win(x,'OTHER TOOL','#6B6488',810,330);
 const pa=fin(t,T+2.8,.7);
 for(let r=0;r<4;r++)for(let c=0;c<5;c++){x.save();x.globalAlpha*=pa;rr(x,136+c*144,884+r*60,140,56,0,'#4B4468',INKC,3);x.fillStyle='#9C90B8';x.beginPath();x.roundRect(136+c*144+32,884+r*60+22,76,12,6);x.fill();x.restore()}
 comp([['board',0]])}
function plainTotals(t,cam){const x=layer('board',cam),T=ST(5);bgRest(x,.3,495,640);
 win(x,'OTHER TOOL','#6B6488',WTOP,540);
 fbar(x,'NO FORMULA',WTOP+78,'#6B6488',CREAM);
 const hv=[0,1,2].map(i=>fin(t,T+.3+i*.55)),hl={};for(let r=1;r<=3;r++)hl[r+',5']=[AMB,hv[r-1]];
 grid(x,G0,GT0,{flat:true,totHi:hv,hl});
 // A shared formula-bar label branches to every total as it is selected.
 const lineX = 837;
 for (let r = 1; r <= 3; r++) {
  const [cellX, cellY, width, height] = cr(G0, GT0, r, 5);
  const y = cellY + height / 2;
  x.save();
  x.globalAlpha *= hv[r-1];
  x.strokeStyle = AMB;
  x.lineWidth = 4;
  x.lineJoin = 'round';
  x.beginPath();
  x.moveTo(lineX, r === 1 ? WTOP + 148 : y - height);
  x.lineTo(lineX, y);
  x.lineTo(cellX + width + 4, y);
  x.stroke();
  x.restore();
 }
 comp([['board',0]])}
function redoSum(t,cam){const x=layer('board',cam),T=ST(6);bgRest(x,.34,495,700);
 rr(x,WL,420,WR-WL,150,24,'#1B1430','#6B6488',6);
 const pu=fin(t,T,.5);
 for(let c=0;c<6;c++){const [X,,w]=cr(G0,0,1,c),Y=450,h=GR.row;rr(x,X,Y,w,h,0,c==0?'#3A2D60':(c==5?mixC('#4B4468',AMB,.3):'#4B4468'),INKC,3);
  if(c==0)txt(x,'TEAM B',X+w/2,Y+h/2+2,44,CREAM,'center');else{x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+w/2-(c==5?36:QB[1][c-1]/2),Y+h/2-7,c==5?72:QB[1][c-1],14,7);x.fill()}}
 {const [X,,w]=cr(G0,0,1,5);x.save();x.strokeStyle=AMB;x.lineWidth=7+2*pu;x.strokeRect(X+4,454,w-8,GR.row-8);x.restore()}
 const MX=380,MS=1.0,MY=CT-150;
 const u=seg(t,T+.1,T+1.4),pts=[[440,880],[505,890],[445,905],[510,915],[450,930],[505,940],[455,952],[500,958]];
 const n=pts.length-1,k=u*n,i0=Math.min(n-1,Math.floor(k)),f=k-i0;const tip=[lerp(pts[i0][0],pts[i0+1][0],f),lerp(pts[i0][1],pts[i0+1][1],f)];
 const hand=[tip[0]+32,tip[1]-50],hr=[(hand[0]-MX)/MS,(hand[1]-MY)/MS];
 const hh=hr;
 
 mascot(x,t,cam,{x:MX,y:MY,s:MS,hands:{r:hh},showH:{r:1},look:.1,lookY:.5,brow:.3,mouth:.2,ear:false});
 slab(x);
 rr(x,360,858,300,150,10,'#F8E9CC',INKC,5);
 x.save();x.strokeStyle='#5A4A8A';x.lineWidth=6;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(pts[0][0],pts[0][1]);for(let j=1;j<=i0;j++)x.lineTo(pts[j][0],pts[j][1]);x.lineTo(tip[0],tip[1]);x.stroke();
 x.fillStyle='#5A4A8A';x.fillRect(570,880,50,8);x.fillRect(588,859,14,50);x.restore();
 pencilTip(x,tip[0],tip[1],-1.0,200,22);
 gripHand(x,hand[0],hand[1],-.5,HERO,.9);
 comp([['board',0]])}
function sheetInClaude(t,cam){const x=layer('board',cam),T=ST(7);bgRest(x,.3,495,640);
 win(x,'CLAUDE SHEETS · BETA','#187E86',WTOP,540);

 grid(x,G0,GT0,{});
 lab(x,'PAID PLANS',495,1020,44,MINT,{a:fin(t,T+.5,.6),bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}
function subscribe(t,cam){const x=layer('board',cam),T=ST(13);bgRest(x,.35,495,860);
 const w=ease(seg(t,T+.2,T+.8)),wv=Math.sin((t-T)*9)*(1-fin(t,T+2.4,.6));const hr=[lerp(97.5,170+wv*12*w,w),lerp(220,-30+wv*36*w,w)];
 mascot(x,t,cam,{x:489,y:1040,s:.7,hands:{r:hr},showH:{r:w>.02?1:0},look:.05,lookY:0,brow:.45,mouth:.95});
 slab(x,1150);
 comp([['board',0]])}

function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 44px Arial';const S='CLAUDE SHEETS',tw_=x.measureText(S).width,dw=x.measureText(' ·').width;const L0=60,w=26+tw_+dw+18+130+22,cy=134;pill(x,L0+w/2,cy,w,68,'rgba(27,20,48,.92)');
 txt(x,S,L0+26,cy+2,44,AMB,'left','800');txt(x,' ·',L0+26+tw_,cy+2,44,CREAM,'left','800');pill(x,L0+26+tw_+dw+18+65,cy,130,56,RED);txt(x,'60s',L0+26+tw_+dw+18+65,cy+2,44,'#FFF6E6','center','800');x.restore()}
function tab(label, color) {
 const width = tw(ctx, label, 44) + 60;
 pill(ctx, 60 + width / 2, 242, width, 66, color);
 txt(ctx, label, 60 + width / 2, 244, 44, DARK, 'center');
}

function buttons(t,T){const x=ctx;x.setTransform(1,0,0,1,0,0);
 const c=fin(t,T+.25,.55),pulse=1+.03*Math.sin((t-T-.25)*7)*(1-fin(t,T+2.5,.65));
 if(c>0){x.save();x.translate(489,1265);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;x.fillStyle=INKC;x.beginPath();x.roundRect(-330,-90,660,180,90);x.fill();pill(x,0,0,640,160,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-250,-40);x.lineTo(-250,40);x.lineTo(-186,0);x.closePath();x.fill();
  x.globalAlpha=1;x.restore();x.save();x.globalAlpha=c;txt(x,'Subscribe',539,1270,84,CREAM,'center','800');x.restore()}
 const C0=T+1.1,cc=fin(t,C0,.55),pu=1+.03*Math.sin((t-C0)*7)*(1-fin(t,T+2.5,.65));
 if(cc>0){const S='COMMENT: WHAT NEXT?',fs=46,w2=Math.min(780,tw(x,S,fs)+110),h=150;x.save();x.translate(489,1440);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
  x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w2/2,-h/2,w2,h,h/2);x.fill();x.stroke();x.restore();x.save();x.globalAlpha=cc;txt(x,S,489,1444,fs,DARK,'center');x.restore()}}
const FX_ON = [ST(8) + .22, ST(8) + .75, ST(8) + 1.28];
const FX_READ = ST(8) + 1.96;
const QUARTER_CIRCLE = ST(11) + .12;
const QUARTER_READ = ST(10) + 1.56;
const COMPARE_SHOW = ST(12) + (42.258 - 1205 / 30);

function meterState(t, s) {
 const empty = [0,0,0], full = [1,1,1];
 if (s === 3 || s === 4) return {a:1, f:empty, tint:0, cnt:0, tick:0};
 if (s === 5) return {
  a:1, f:empty.map((_, i) => fin(t, ST(5) + .3 + i * .55)),
  tint:0, cnt:fin(t, ST(5) + 1.55), tick:0
 };
 if (s === 6 || s === 7) return {a:1, f:full, tint:0, cnt:1, tick:0};
 if (s === 8 || s === 9) {
  const done = fin(t, FX_ON[2] + .5);
  return {a:1, f:FX_ON.map(on => 1 - fin(t, on)), tint:done,
          cnt:1 - fin(t, FX_ON[0]), tick:done};
 }
 return null;
}

function formulasStay(t, cam) {
 const x = layer('board', cam);
 bgRest(x, .3, 495, 640);
 win(x, 'CLAUDE SHEETS · BETA', '#187E86', WTOP, 540);
 const read = fin(t, FX_READ);
 fbar(x, '=SUM(Q1:Q4)', WTOP + 78, TEAL, MINT, read);
 const hl = {'1,5':[TEAL, read]};
 for (let c = 1; c <= 4; c++) {
  hl['1,' + c] = [TEAL, fin(t, FX_READ + c * .18)];
 }
 grid(x, G0, GT0, {fx:FX_ON.map(on => fin(t, on)), hl});
 comp([['board', 0]]);
}

function skippedQuarter(t, cam) {
 const x = layer('board', cam);
 bgRest(x, .3, 495, 640);
 win(x, 'CLAUDE SHEETS · BETA', '#187E86', WTOP, 540);
 const reveal = fin(t, QUARTER_READ);
 fbar(x, '=SUM(Q1:Q3)', WTOP + 78, TEAL, MINT, reveal);
 const hl = {'2,5':[TEAL, 1]};
 for (let c = 1; c <= 3; c++) hl['2,' + c] = [TEAL, fin(t, QUARTER_READ + .04 + c * .17)];
 grid(x, G0, GT0, {fx:[1,1,1], hl, dark:{'2,4':1}});
 const [qx, qy, qw, qh] = cr(G0, GT0, 2, 4);
 const circle = seg(t, QUARTER_CIRCLE, QUARTER_CIRCLE + .83);
 if (circle > 0) {
  const tip = circlePath(x, qx + qw / 2, qy + qh / 2, 31, 41, -1.45, circle);
  const away = fin(t, QUARTER_CIRCLE + .83, .38);
  if (away < 1) {
   pencilTip(x, tip[0] + away * 132, tip[1] - away * 65, -.88, 120, 16);
  }
 }
 lab(x, 'SKIPPED Q4', 495, 1030, 48, AMB, {a:fin(t, QUARTER_CIRCLE + .5)});
 comp([['board', 0]]);
}

function compareTotals(t, cam) {
 const x = layer('board', cam);
 bgRest(x, .27, 495, 760);
 const fx = fin(t, COMPARE_SHOW);
 rr(x, 110, 504, 770, 456, 30, PANEL, NEU, 6);
 rr(x, 151, 572, 306, 190, 19, '#4B4468', NEU, 5);
 rr(x, 533, 572, 306, 190, 19, mixC('#4B4468','#23464F',fx), mixC(NEU,TEAL,fx), 5);
 bar(x, 244, 666, 120, GREYL, 22);
 bar(x, lerp(626, 677, fx), 666, 120, mixC(GREYL,MINT,fx), 22);
 boxIn(x, 611, 665, fx, .8,
       () => rr(x, 572, 624, 78, 82, 16, TEAL, INKC, 4),
       () => txt(x, 'fx', 611, 668, 57, DARK, 'center'));
 for (const [cx, alpha, verb, color] of [[304,1,'HIDES',CREAM],[686,fx,'SHOWS',MINT]]) {
  txt(x, verb, cx, 826, 48, color, 'center', '900', alpha);
  txt(x, 'THE WORK', cx, 879, 48, color, 'center', '900', alpha);
 }
 comp([['board', 0]]);
}

const SHOTS = [returnHomework, questionTotal, checkedHomework, pasteBudget, pasteBudget,
               plainTotals, redoSum, sheetInClaude, formulasStay, formulasStay, skippedQuarter, skippedQuarter,
               compareTotals, subscribe, subscribe];
const MOTION = [
 [1,1.035,550,960], [1,1.055,550,929], [1,1.045,550,960],
 [1,1.032,540,950], [1.065,1.095,547,933], [1.025,1.059,545,929], [1,1.044,547,950],
 [1,1.044,545,929], [1.025,1.06,545,929], [1.085,1.105,547,905],
 [1,1.042,540,929], [1.075,1.1,547,905], [1,1.048,545,942],
 [1,1.036,540,960], [1.075,1.11,546,954]
];

FILM = {
 dur:DUR, cuts:CF, fadeIn:0, fadeOut:.32,
 cam(s, u) {
  const [start, end, x, y] = MOTION[s];
  return {x, y, z:lerp(start, end, u), b:[0,0,0]};
 },
 draw(t, cam, s) {
  SHOTS[s](t, cam);
  const meter = meterState(t, s);
  if (meter) meterBox(ctx, meter);
  if (s >= 3 && s <= 6) tab('BEFORE · OUR EXAMPLE', AMB);
  if (s >= 7 && s <= 9) tab('NOW', TEAL);
  if (s === 10 || s === 11) tab('OUR EXAMPLE', AMB);
  if (s === 14) buttons(t, ST(14));
  tag();
 },
 plants() { return {}; }
};

for (let i = 1; i < TS.length; i++) say(ST(i), [4,5,8,9,11,14].includes(i) ? 'cut2' : 'cut');
for (const t of [1.38, ST(3) + 2.8]) say(t, 'paper');
for (const t of [ST(2) + .67, ST(6) + .1, ST(6) + .7, QUARTER_CIRCLE]) say(t, 'pen');
for (const t of [ST(5) + .3, ST(5) + .85, ST(5) + 1.4, ...FX_ON, FX_READ,
                 COMPARE_SHOW, ST(14) + .25, ST(14) + 1.1]) say(t, 'tick');
