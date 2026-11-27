// Episode: Claude Sheets (beta), told as a maths test and "show your working". You = the mascot (coral hoodie, amber pencil behind his ear); Claude = a robot with a teal screen head.
// Vertical 1080x1920. Our example: a hiring budget, 3 teams x 4 quarters, 3 team totals (ours). The meter counts TOTALS WITH NO WORK SHOWN (BEFORE fills to 3; NOW empties one box per fx tag, then a teal tick).
// 21 shots (beats.md "Shots", numbered 0-20, no shot over 5 s). Voice laid in at VOICE_AT (audio_mix.py): film time = voice time + .5. Every time below is FILM seconds.
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random. No digits drawn except 2026, 60, Q1-Q4, SUM(Q1:Q4), SUM(Q1:Q3), 3 (our example). Every text is 44 px or more and is drawn at scale 1.0.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',NEU='#8A7AA8',DARK='#1B1430',PANEL='#2A1F42',MINT='#BFF2EE',CORAL='#FF6B5E';
const WARN=[];
function txt(x,s,X,Y,size,col,al='left',wt='900',a=1){if(a<=0)return;if(size<44)size=44;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`bold ${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function tw(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`bold ${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
/* a card with TEXT: the box eases in on scale+alpha, the text only on alpha at scale 1.0 (L48) */
function boxIn(x,cx,cy,a,s0,drawBox,drawText){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);drawBox();x.restore();x.save();x.globalAlpha*=a;drawText();x.restore()}
/* a figure or multi-part prop comes in by scale only, never alpha (L44) */
function pop(x,cx,cy,a,fn,s0=.7){if(a<=0)return;x.save();const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
/* a label: dark pill with 1-3 lines at size 44 or more, kept inside x 112-878 */
function lab(x,lines,cx,cy,size,col,o={}){if(typeof lines=='string')lines=[lines];const z=Math.max(44,size||44);
 const w=Math.max(...lines.map(s=>tw(x,s,z)))+52,lh=z*1.25,h=lh*lines.length+22;let X=cx;if(!o.free){X=clamp(cx,112+w/2,878-w/2)}
 if(w>766)WARN.push('lab too wide '+Math.round(w)+' '+lines.join('|'));
 const a=o.a===undefined?1:o.a;
 boxIn(x,X,cy,a,o.s0===undefined?.9:o.s0,()=>rr(x,X-w/2,cy-h/2,w,h,22,o.bg||'rgba(18,10,28,.92)',o.line||null,o.lw||4),
  ()=>lines.forEach((s,i)=>txt(x,s,X,cy-(lines.length-1)*lh/2+i*lh+2,z,Array.isArray(col)?col[i]:col,'center')));return {w,h,X,z}}

/* THE CLOCK: cut times of the 21 shots (film seconds): voice lines from vo_lines.json + .5 s, cuts on the measured pauses of vo.wav (L16, L36). */
const TS=[0,1.16,4.6,6.22,8.46,11.14,15.97,18.03,19.75,22.77,26.8,29.17,32.08,34.57,37.15,39.9,42.27,43.33,44.12,46.95,50.69];
const DUR=55.65;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,out=i=>ST(i)-.5;

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:MINT,face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const HP_T={frame:'#187E86',ear:'#0E4A50',s1:'#46D0CB',s2:TEAL,face:'#0B3A40'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1];
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
 if(o.q){x.save();x.font=`900 ${o.q}px Arial`;x.textAlign='center';x.textBaseline='middle';x.fillText('?',0,8);x.restore();return}
 for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle=hp.face;x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
/* robot: cx = centre, bottom = the floor/slab/tile line it stands on; o.q = size in local units of a "?" on its screen face */
function robot(x,cx,bottom,s,t,o={}){const body=o.body||CLB,hp=o.hp||HP_T,p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1+(o.ph||0),noLegs:true,noFace:true,hands:o.hands||{},showH:{}};
 drawPerson(x,body,p);x.save();headT(x,p);head(x,hp,{blink:blinkAt(t+.7+(o.ph||0),BL),smile:o.smile,q:o.q});x.restore();return p}
/* a pointer arrow (a user's cursor) with its tip at (X,Y) */
function cursor(x,X,Y,col,k=1){x.save();x.translate(X,Y);x.scale(k,k);x.lineJoin='round';x.fillStyle=col;x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.moveTo(0,0);x.lineTo(0,62);x.lineTo(16,48);x.lineTo(30,76);x.lineTo(44,69);x.lineTo(30,42);x.lineTo(52,42);x.closePath();x.fill();x.stroke();x.restore()}
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
const GW={lbl:182,q:64,tot:148,neu:152},GR={row:96};
const COLS=['','Q1','Q2','Q3','Q4','TOTAL'];
const QB=[[30,22,34,26],[26,34,22,30],[34,26,30,22]];
function gridGeo(wide){const hd=wide?118:64,w=GW.lbl+4*GW.q+GW.tot+(wide?GW.neu:0);return {hd,w,x0:495-w/2,wide}}
function cr(g,top,r,c){const ws=[GW.lbl,GW.q,GW.q,GW.q,GW.q,GW.tot,GW.neu];let X=g.x0;for(let k=0;k<c;k++)X+=ws[k];return [X,r==0?top:top+g.hd+(r-1)*GR.row,ws[c],r==0?g.hd:GR.row]}
/* o: totHi (amber tint 0-1), fx [a,a,a], hl {'r,c':[col,a]} outlines, dark {'r,c':1}, neu [a,a,a] new column cells, neuHd header alpha, flat true = plain grey cells (BEFORE) */
function grid(x,g,top,o={}){const nc=g.wide?7:6;
 for(let r=0;r<4;r++)for(let c=0;c<nc;c++){const [X,Y,w,h]=cr(g,top,r,c);let al=1;
  if(c==6){al=r==0?(o.neuHd===undefined?1:o.neuHd):(o.neu?o.neu[r-1]:0);if(al<=0)continue}
  let fill=(r==0||c==0)?'#3A2D60':'#2E2350';if(o.flat&&r>0&&c>0)fill='#4B4468';
  if(c==5&&r>0&&o.totHi)fill=mixC(fill,AMB,.3*(Array.isArray(o.totHi)?o.totHi[r-1]:o.totHi));
  if(o.dark&&o.dark[r+','+c])fill='#150F26';
  x.save();x.globalAlpha*=al;rr(x,X,Y,w,h,0,fill,INKC,3);
  if(r==0&&c>=1&&c<=5)txt(x,COLS[c],X+w/2,Y+h/2+2,44,CREAM,'center');
  if(r==0&&c==6){txt(x,'START',X+w/2,Y+h/2-26,44,CREAM,'center');txt(x,'DATE',X+w/2,Y+h/2+28,44,CREAM,'center')}
  if(r>0&&c==0)txt(x,'TEAM '+'ABC'[r-1],X+w/2,Y+h/2+2,44,CREAM,'center');
  const barC=(o.dark&&o.dark[r+','+c])?'#3A3050':'#9C90B8';
  if(r>0&&c>=1&&c<=4){x.fillStyle=barC;x.beginPath();x.roundRect(X+w/2-QB[r-1][c-1]/2,Y+h/2-6,QB[r-1][c-1],12,6);x.fill()}
  if(r>0&&c==5){const f=o.fx?o.fx[r-1]:0;
   if(f>0){boxIn(x,X+38,Y+h/2,f,.6,()=>rr(x,X+8,Y+h/2-27,60,54,14,TEAL,INKC,4),()=>txt(x,'fx',X+38,Y+h/2+2,44,DARK,'center'));x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+80,Y+h/2-7,56,14,7);x.fill()}
   else{x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+w/2-36,Y+h/2-7,72,14,7);x.fill()}}
  if(r>0&&c==6){x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+w/2-26,Y+h/2-6,52,12,6);x.fill()}
  x.restore()}
 if(o.hl)for(const k in o.hl){const [r,c]=k.split(',').map(Number),[col,a]=o.hl[k];if(a<=0)continue;const [X,Y,w,h]=cr(g,top,r,c);x.save();x.globalAlpha*=a;x.fillStyle=col;x.globalAlpha*=.25;x.fillRect(X+2,Y+2,w-4,h-4);x.globalAlpha/=.25;x.strokeStyle=col;x.lineWidth=8;x.strokeRect(X+4,Y+4,w-8,h-8);x.restore()}
 return {top,g}}
const WL=112,WR=878,WTOP=392;
/* the window frame: title bar (66) + body; returns nothing; hh = total height */
function win(x,title,col,top,hh,o={}){const a=o.a===undefined?1:o.a;x.save();x.globalAlpha*=a;rr(x,WL,top,WR-WL,hh,24,'#1B1430',col,6);
 x.save();x.beginPath();x.roundRect(WL,top,WR-WL,66,[24,24,0,0]);x.fillStyle=col;x.fill();x.restore();
 txt(x,title,WL+30,top+35,44,o.tc||CREAM,'left');x.restore()}
function fbar(x,s,top,col,tc,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;rr(x,WL+10,top,WR-WL-20,70,16,'#241A3C',col,4);txt(x,s,WL+30,top+37,44,tc,'left');x.restore()}
const G0=gridGeo(false),G1=gridGeo(true);
const GT0=WTOP+66+12+70+12; /* grid top inside a window with a formula bar */

// ---------- the meter "TOTALS WITH NO WORK SHOWN" / "OUR EXAMPLE": screen space, shots 5-12 ----------
const M_L=70,M_T=1218,M_W=838,M_H=312;
function meterBox(x,st){if(st.a<=0)return;const l=M_L,tp=M_T,w=M_W,h=M_H,col=mixC(AMB,TEAL,st.tint),a=st.a;x.save();x.setTransform(1,0,0,1,0,0);
 boxIn(x,l+w/2,tp+h/2,a,.94,()=>rr(x,l,tp,w,h,28,'rgba(27,20,48,.95)',col,6),()=>{
  txt(x,'TOTALS WITH NO WORK SHOWN',l+w/2,tp+42,44,CREAM,'center');txt(x,'OUR EXAMPLE',l+w/2,tp+96,44,AMB,'center');
  const cy=tp+210;for(let i=0;i<3;i++){const bx=l+34+i*96;rr(x,bx,cy-42,84,84,14,'#241A3C',INKC,5);if(st.f[i]>0){x.save();x.globalAlpha*=st.f[i];rr(x,bx+6,cy-36,72,72,10,col,null);x.restore()}}
  {const dg=st.dg||[st.cnt,0,0];['3','2','1'].forEach((d,i)=>{if(dg[i]>0){x.save();x.globalAlpha*=dg[i];imp(x,d,l+34+3*96+110,cy+2,170,AMB);x.restore()}})}
  if(st.tick>0){const tx=l+34+3*96+10;x.save();x.globalAlpha*=st.tick;tick(x,tx+40,cy,80,TEAL,st.tick,22);x.restore();
   txt(x,'ALL 3 SHOW',tx+110,cy-27,44,MINT,'left','900',st.tick);txt(x,'THEIR WORK',tx+110,cy+27,44,MINT,'left','900',st.tick)}});x.restore()}
function meterState(t,sh){const T=i=>ST(i);const z=[0,0,0];
 if(sh==5)return {a:fin(t,T(5)+.3,.6),f:z,tint:0,cnt:0,tick:0};
 if(sh==6)return {a:1,f:[fin(t,T(6)+.3,.35),fin(t,T(6)+.75,.35),fin(t,T(6)+1.2,.35)],tint:0,cnt:fin(t,T(6)+1.55,.3),tick:0};
 if(sh>=7&&sh<=10)return {a:1,f:[1,1,1],tint:0,cnt:1,tick:0};
 if(sh==11){const q=T(11),u=i=>1-fin(t,q+.1+i*.3,.5);const d3=u(0),d2=fin(t,q+.1,.5)*(1-fin(t,q+.4,.5)),d1=fin(t,q+.4,.5)*(1-fin(t,q+.7,.5));
  return {a:1,f:[u(0),u(1),u(2)],tint:fin(t,q+1.2,.5),cnt:0,dg:[d3,d2,d1],tick:fin(t,q+1.2,.5)}}
 if(sh==12)return {a:1,f:z,tint:1,cnt:0,tick:1};
 return null}

// ---------- the story: the homework page and the chalkboard ----------
const HP={l:300,t:590,w:570,h:410};
const GREYL='#9C90B8',GREYD='#7B6F96';
function bar(x,X,Y,w,col=GREYL,h=14){x.fillStyle=col;x.beginPath();x.roundRect(X,Y-h/2,w,h,h/2);x.fill()}
/* the homework page (coordinates before the 90 px shift of shots 1 and 4): mode 'ans' = answers only (grey scribble, "=", an empty box); 'steps' = two grey step lines under each problem */
function hwPage(x,mode){rr(x,HP.l,HP.t,HP.w,HP.h,14,CREAM,INKC,6);
 for(let i=0;i<3;i++){
  if(mode=='ans'){const y=725+i*100;bar(x,HP.l+34,y,240,GREYL,16);txt(x,'=',HP.l+318,y,44,GREYD,'center');rr(x,HP.l+372,y-32,80,64,12,null,GREYD,5)}
  else{const y=650+i*120;bar(x,HP.l+34,y,240,GREYL,16);txt(x,'=',HP.l+318,y,44,GREYD,'center');bar(x,HP.l+372,y,80,GREYL,16);
   bar(x,HP.l+64,y+38,200,GREYL,12);bar(x,HP.l+64,y+72,160,GREYL,12)}}}
const CH_SZ=108;
function chalk(x,s,X,Y,size){x.save();x.font=`bold ${size}px Impact, "Arial Black", sans-serif`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#F8E9CC';x.shadowColor='rgba(248,233,204,.5)';x.shadowBlur=6;x.fillText(s,X,Y);x.restore()}
function shot1(t,cam){const x=layer('board',cam),T=ST(1);bgRest(x,.34,495,800);x.translate(0,90);
 const MX=185,MY=890,MS=.8;
 mascot(x,t,cam,{x:MX,y:MY,s:MS,look:.5,brow:.5,mouth:.1});
 slab(x);
 hwPage(x,'ans');
 lab(x,'ANSWERS ONLY',HP.l+HP.w/2,640,44,AMB,{free:true});
 lab(x,'LIKE OUR PASTED TABLE',495,CT+92,44,CREAM,{});
 lab(x,'BETA · 2026',495,372,44,AMB,{});
 const b=fin(t,T+.35,.6);
 if(b>0){const S='REDO THE MATH?',w=tw(x,S,44)+84,bcx=Math.max(355,112+w/2);x.save();x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;x.globalAlpha*=b;
  for(const [qx,qy,r] of [[255,690,12],[290,646,17],[335,596,24]]){x.beginPath();x.arc(qx,qy,r,0,7);x.fill();x.stroke()}
  x.restore();boxIn(x,bcx,510,b,.9,()=>{x.save();x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;x.beginPath();x.roundRect(bcx-w/2,455,w,110,55);x.fill();x.stroke();x.restore()},()=>txt(x,S,bcx,512,44,DARK,'center'))}
 comp([['board',0]])}
function shot2(t,cam){const x=layer('board',cam),T=ST(2);bgRest(x,.3,495,820);x.translate(0,90);
 const bx=495,by=880,cw=300,ch=190;
 const o=fin(t,T+.1,.5);
 for(let i=0;i<4;i++){const cx=495+(i-1.5)*140,lit=fin(t,T+.3+i*.3,.5);
  if(o>0){x.save();x.strokeStyle=TEAL;x.lineWidth=7;x.globalAlpha*=lit*.9;x.beginPath();x.moveTo(cx,620);x.lineTo(cx,650);x.lineTo(bx+(i-1.5)*60,690);x.stroke();x.restore()}
  rr(x,cx-60,520,120,100,12,mixC('#2E2350','#1E7F7C',lit),mixC(INKC,TEAL,lit),5+3*lit);x.fillStyle=mixC('#9C90B8',MINT,lit);x.beginPath();x.roundRect(cx-18,514+60,36,12,6);x.fill()}
 boxIn(x,bx,725,o,.7,()=>rr(x,bx-190,690,380,70,16,'#241A3C',TEAL,5),()=>txt(x,'=SUM(...)',bx,727,44,MINT,'center'));
 rr(x,bx-cw/2,by-ch/2,cw,ch,18,'#2E2350',TEAL,7);x.fillStyle='#9C90B8';x.beginPath();x.roundRect(bx-50,by-8,100,16,8);x.fill();
 lab(x,'THE FORMULA SHOWS HOW',495,1090,44,MINT,{a:fin(t,T+.5,.5),bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}
/* shot 3: the chalkboard; the teacher points at the words with a stick */
function shot3(t,cam){const x=layer('board',cam),T=ST(3);bgRest(x,.3,495,700);
 const BL_=112,BT=380,BW=766,BH=420;
 rr(x,BL_,BT,BW,BH,18,'#7A4038',INKC,6);rr(x,BL_+20,BT+20,BW-40,BH-40,8,'#2F3E3A',INKC,4);
 rr(x,BL_+60,BT+BH-4,BW-120,18,6,'#5A2F2A',INKC,4);
 const u=seg(t,T+.2,T+1.0);
 if(u>0){x.save();x.beginPath();x.rect(BL_+20,BT+20,(BW-40)*u,BH-40);x.clip();chalk(x,'SHOW YOUR',495,BT+135,CH_SZ);chalk(x,'WORK!',495,BT+275,CH_SZ);x.restore()}
 const MX=700,MY=1000,MS=.9,H0=[585,950]; /* the LEFT hand points (shoulder -73.5,34; default -97.5,220), so the pointer goes up-left, away from the face */
 const hr=[(H0[0]-MX)/MS,(H0[1]-MY)/MS];if(Math.hypot(hr[0]+73.5,hr[1]-34)>195)WARN.push('shot3 reach '+Math.hypot(hr[0]+73.5,hr[1]-34));
 const hh=[kf(t,[[T,-97.5],[T+.5,hr[0]]]),kf(t,[[T,220],[T+.5,hr[1]]])];
 mascot(x,t,cam,{x:MX,y:MY,s:MS,hands:{l:hh},showH:{l:1},look:-.3,lookY:-.3,brow:.4,mouth:.7});
 slab(x,1110);
 const hw=[MX+hh[0]*MS,MY+hh[1]*MS],sa=fin(t,T+.5,.4);
 if(sa>0){x.save();x.globalAlpha*=sa;x.strokeStyle=AMB;x.lineWidth=14;x.lineCap='round';x.beginPath();x.moveTo(hw[0],hw[1]);x.lineTo(hw[0]-70,hw[1]-200);x.stroke();x.restore();
  gripHand(x,hw[0],hw[1],-.3,HERO,.9)}  /* drawn only once the hand is up, above the desk */
 comp([['board',0]])}
/* shot 4: the same page, now with steps; an amber circle round one step of the middle problem; the teacher's pencil near it */
function shot4(t,cam){const x=layer('board',cam),T=ST(4);bgRest(x,.34,495,800);x.translate(0,90);
 const MX=202,MY=890,MS=.9; /* left of the page, so the page never covers the face (judge round 1) */
 const tip=[336+Math.sin((t-T)*6)*3,850],hand=[tip[0]+32,tip[1]-50],hr=[(hand[0]-MX)/MS,(hand[1]-MY)/MS];
 const hh=[kf(t,[[T,97.5],[T+.75,hr[0]]]),kf(t,[[T,220],[T+.75,hr[1]]])];
 if(Math.hypot(hr[0]-73.5,hr[1]-34)>195)WARN.push('shot4 reach '+Math.hypot(hr[0]-73.5,hr[1]-34));
 mascot(x,t,cam,{x:MX,y:MY,s:MS,hands:{r:hh},showH:{r:1},look:.5,lookY:.3,brow:.3,mouth:.2,ear:false});
 slab(x);
 hwPage(x,'steps');
 const cu=seg(t,T+.9,T+1.5);
 if(cu>0){x.save();x.strokeStyle=AMB;x.lineWidth=7;x.lineCap='round';x.beginPath();x.ellipse(444,842,112,23,-.04,-2.2,-2.2+cu*Math.PI*2.1);x.stroke();x.restore()}
 const hp=[MX+hh[0]*MS,MY+hh[1]*MS];
 if(t>=T+.6){pencilTip(x,hp[0]-32,hp[1]+50,-1.0,200,22);
 gripHand(x,hp[0],hp[1],-.5,HERO,.9)}  /* only once the arm is up, never on the desk front (judge round 1) */
 lab(x,'THE WRONG STEP SHOWS',495,CT+92,44,AMB,{a:fin(t,T+1.2,.6)});
 comp([['board',0]])}
// ---------- before ----------
function shot5(t,cam){const x=layer('board',cam),T=ST(5);bgRest(x,.3,495,640);
 lab(x,'OUR EXAMPLE: HIRING BUDGET',495,420,44,AMB,{});
 const P=480;
 rr(x,WL,P,WR-WL,200,26,PANEL,AMB,6);
 x.save();x.beginPath();x.roundRect(WL,P,WR-WL,200,26);x.clip();robot(x,235,P+200,.45,t,{smile:30});x.restore();
 lab(x,'CLAUDE',235,P+172,44,CREAM,{free:true,bg:'rgba(18,10,28,.92)'});
 rr(x,380,P+18,470,164,20,'#3A2D60',CREAM,5);
 for(let r=0;r<3;r++)for(let c=0;c<3;c++){x.fillStyle='#B8AACB';x.beginPath();x.roundRect(410+c*140,P+44+r*44,100,14,7);x.fill()}
 const pl=.5+.5*Math.sin((t-T)*6);x.save();x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';x.beginPath();x.moveTo(465,P+214);x.lineTo(525,P+214);x.lineTo(525,P+256+pl*8);x.lineTo(552,P+256+pl*8);x.lineTo(495,P+306+pl*8);x.lineTo(438,P+256+pl*8);x.lineTo(465,P+256+pl*8);x.closePath();x.fill();x.stroke();x.restore();
 lab(x,'PASTE',700,P+260,44,AMB,{free:true});
 win(x,'OTHER TOOL','#6B6488',810,330);
 const pa=fin(t,T+1.4,.7);
 for(let r=0;r<4;r++)for(let c=0;c<5;c++){x.save();x.globalAlpha*=pa;rr(x,136+c*144,884+r*60,140,56,0,'#4B4468',INKC,3);x.fillStyle='#9C90B8';x.beginPath();x.roundRect(136+c*144+32,884+r*60+22,76,12,6);x.fill();x.restore()}
 comp([['board',0]])}
function shot6(t,cam){const x=layer('board',cam),T=ST(6);bgRest(x,.3,495,640);
 win(x,'OTHER TOOL','#6B6488',WTOP,540);
 fbar(x,'NO FORMULA',WTOP+78,'#6B6488',CREAM);
 const hv=[0,1,2].map(i=>fin(t,T+.2+i*.45,.4)),hl={};for(let r=1;r<=3;r++)hl[r+',5']=[AMB,hv[r-1]];
 grid(x,G0,GT0,{flat:true,totHi:hv,hl});
 const jx=cr(G0,GT0,1,5),S='PLAIN TEXT',pw=tw(x,S,44)+52,py=GT0+G0.hd+3*GR.row+66,pc=jx[0]+jx[2]/2-60;
 boxIn(x,pc,py,fin(t,T+.5,.5),.9,()=>{rr(x,pc-pw/2,py-39,pw,78,22,'rgba(18,10,28,.92)',AMB,4);x.fillStyle=AMB;x.beginPath();x.moveTo(jx[0]+jx[2]/2,py-56);x.lineTo(jx[0]+jx[2]/2-16,py-36);x.lineTo(jx[0]+jx[2]/2+16,py-36);x.fill()},()=>txt(x,S,pc,py+2,44,AMB,'center'));
 comp([['board',0]])}
function wall(x,l,t,w,h){x.fillStyle='#7A4038';x.fillRect(l,t,w,h);x.strokeStyle='#4A2420';x.lineWidth=4;for(let r=0;r<Math.ceil(h/40);r++){x.beginPath();x.moveTo(l,t+r*40);x.lineTo(l+w,t+r*40);x.stroke();for(let c=(r%2?0:1);c*80<w;c++){x.beginPath();x.moveTo(l+c*80-(r%2?0:40),t+r*40);x.lineTo(l+c*80-(r%2?0:40),t+r*40+40);x.stroke()}}}
function shot7(t,cam){const x=layer('board',cam),T=ST(7);bgRest(x,.34,495,700);
 rr(x,WL,420,WR-WL,150,24,'#1B1430','#6B6488',6);
 const pu=.55+.45*Math.sin((t-T)*5);
 for(let c=0;c<6;c++){const [X,,w]=cr(G0,0,1,c),Y=450,h=GR.row;rr(x,X,Y,w,h,0,c==0?'#3A2D60':(c==5?mixC('#4B4468',AMB,.3):'#4B4468'),INKC,3);
  if(c==0)txt(x,'TEAM B',X+w/2,Y+h/2+2,44,CREAM,'center');else{x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+w/2-(c==5?36:QB[1][c-1]/2),Y+h/2-7,c==5?72:QB[1][c-1],14,7);x.fill()}}
 {const [X,,w]=cr(G0,0,1,5);x.save();x.strokeStyle=AMB;x.lineWidth=7+2*pu;x.strokeRect(X+4,454,w-8,GR.row-8);x.restore()}
 const MX=380,MS=1.0,MY=CT-150;
 const u=seg(t,T+.1,T+1.4),pts=[[440,880],[505,890],[445,905],[510,915],[450,930],[505,940],[455,952],[500,958]];
 const n=pts.length-1,k=u*n,i0=Math.min(n-1,Math.floor(k)),f=k-i0;const tip=[lerp(pts[i0][0],pts[i0+1][0],f),lerp(pts[i0][1],pts[i0+1][1],f)];
 const hand=[tip[0]+32,tip[1]-50],hr=[(hand[0]-MX)/MS,(hand[1]-MY)/MS];
 const hh=[kf(t,[[T,97.5],[T+.35,hr[0]]]),kf(t,[[T,220],[T+.35,hr[1]]])];
 if(Math.hypot(hh[0]-73.5,hh[1]-34)>195)WARN.push('shot7 reach');
 mascot(x,t,cam,{x:MX,y:MY,s:MS,hands:{r:hh},showH:{r:1},look:.1,lookY:.5,brow:.3,mouth:.2,ear:false});
 slab(x);
 rr(x,360,858,300,150,10,'#F8E9CC',INKC,5);
 x.save();x.strokeStyle='#5A4A8A';x.lineWidth=6;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(pts[0][0],pts[0][1]);for(let j=1;j<=i0;j++)x.lineTo(pts[j][0],pts[j][1]);x.lineTo(tip[0],tip[1]);x.stroke();
 x.fillStyle='#5A4A8A';x.fillRect(570,880,50,8);x.fillRect(588,859,14,50);x.restore();
 pencilTip(x,tip[0],tip[1],-1.0,200,22);
 gripHand(x,hand[0],hand[1],-.5,HERO,.9);
 comp([['board',0]])}
function shot8(t,cam){const x=layer('board',cam),T=ST(8);bgRest(x,.3,495,720);
 slab(x,CT+110);
 lab(x,['OUTSIDE: CAN\'T','FOLLOW YOUR EDITS'],374,440,44,CREAM,{a:fin(t,T+.4,.6)});
 robot(x,730,660,.42,t,{q:110});
 x.save();x.beginPath();x.rect(480,0,420,H);x.clip();wall(x,500,616,380,110);x.restore();
 lab(x,'CLAUDE',700,760,44,CREAM,{free:true});
 const WX=330,WY=810;
 rr(x,WX,WY,WR-WX,330,22,'#1B1430','#6B6488',6);x.save();x.beginPath();x.roundRect(WX,WY,WR-WX,66,[22,22,0,0]);x.fillStyle='#6B6488';x.fill();x.restore();txt(x,'OTHER TOOL',WX+22,WY+35,44,CREAM,'left');
 for(let r=0;r<3;r++)for(let c=0;c<4;c++){const X=WX+14+c*132,Y=WY+80+r*76;rr(x,X,Y,128,72,0,'#4B4468',INKC,3);x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+30,Y+30,68,12,6);x.fill()}
 const tp=seg(t,T+.2,T+2.2);rr(x,WX+14,WY+80+76,128,72,0,null,AMB,6);
 const MS=.72,MX=215,MY=CT-20;
 const ty=Math.sin((t-T)*12)*8,hand=[WX+14+64-36,WY+80+76+36+ty];
 const hr=[(hand[0]-MX)/MS,(hand[1]-MY)/MS],e=fin(t,T,.5);
 const hh=[lerp(97.5,hr[0],e),lerp(220,hr[1],e)];if(Math.hypot(hr[0]-73.5,hr[1]-34)>195)WARN.push('shot8 reach '+Math.hypot(hr[0]-73.5,hr[1]-34));
 mascot(x,t,cam,{x:MX,y:MY,s:MS,hands:{r:hh},showH:{r:1},look:.55,brow:.2,mouth:.3});
 {const X=WX+14,Y=WY+80+76;x.fillStyle='#F8E9CC';x.beginPath();x.roundRect(X+20,Y+30,16+tp*60,12,6);x.fill();
  if(Math.floor((t-T)*3)%2==0){x.fillStyle=AMB;x.fillRect(X+20+16+tp*60+6,Y+20,5,32)}}
 gripHand(x,hand[0]+14,hand[1]+10,-.6,HERO,.8);
 comp([['board',0]])}
// ---------- now ----------
function shot9(t,cam){const x=layer('board',cam),T=ST(9);bgRest(x,.3,495,640);
 win(x,'CLAUDE SHEETS · BETA','#187E86',WTOP,540);
 fbar(x,'',WTOP+78,TEAL,MINT);
 grid(x,G0,GT0,{});
 lab(x,'PAID PLANS',495,1020,44,MINT,{a:fin(t,T+.5,.6),bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}
function shot10(t,cam){const x=layer('board',cam),T=ST(10);bgRest(x,.3,495,640);
 win(x,'CLAUDE SHEETS · BETA','#187E86',WTOP,540);
 fbar(x,'',WTOP+78,TEAL,MINT);
 const c1=cr(G0,GT0,1,1),c2=cr(G0,GT0,2,1);
 const me=seg(t,T+.1,T+1.0),cl=seg(t,T+1.3,T+2.1);
 grid(x,G0,GT0,{});
 if(me>0){rr(x,c1[0]+3,c1[1]+3,c1[2]-6,c1[3]-6,0,'#2E2350',CORAL,6);x.fillStyle=CREAM;x.beginPath();x.roundRect(c1[0]+10,c1[1]+c1[3]/2-6,8+me*40,12,6);x.fill();if(me<1&&Math.floor((t-T)*4)%2==0){x.fillStyle=CORAL;x.fillRect(c1[0]+10+8+me*40+4,c1[1]+22,4,52)}}
 if(cl>0){rr(x,c2[0]+3,c2[1]+3,c2[2]-6,c2[3]-6,0,'#2E2350',TEAL,6);x.fillStyle=MINT;x.beginPath();x.roundRect(c2[0]+10,c2[1]+c2[3]/2-6,8+cl*40,12,6);x.fill();if(cl<1&&Math.floor((t-T)*4)%2==0){x.fillStyle=TEAL;x.fillRect(c2[0]+10+8+cl*40+4,c2[1]+22,4,52)}}
 cursor(x,c1[0]+c1[2]-18,c1[1]+c1[3]-20+Math.sin((t-T)*5)*3*(1-me),CORAL);
 {const cx=lerp(c2[0]+c2[2]+150,c2[0]+c2[2]-18,ease(seg(t,T+1.0,T+1.3)));const a=fin(t,T+1.0,.5);if(a>0){x.save();x.globalAlpha*=a;cursor(x,cx,c2[1]+c2[3]-20,TEAL);x.restore()}}
 lab(x,'SAME CELLS',495,1020,44,CREAM,{a:fin(t,T+.3,.6)});
 comp([['board',0]])}
function shot11(t,cam){const x=layer('board',cam),T=ST(11);bgRest(x,.3,495,640);
 win(x,'CLAUDE SHEETS · BETA','#187E86',WTOP,540);
 fbar(x,'',WTOP+78,TEAL,MINT);
 grid(x,G0,GT0,{fx:[fin(t,T+.1,.5),fin(t,T+.4,.5),fin(t,T+.7,.5)]});
 lab(x,'fx = FORMULA',130+(309+52)/2,1020,44,MINT,{a:fin(t,T+.4,.6),bg:'rgba(14,74,80,.95)',free:true});
 lab(x,'OUR EXAMPLE',878-(323+52)/2,1020,44,AMB,{a:fin(t,T+1.2,.6),free:true});
 comp([['board',0]])}
const GT12=GT0+88;
function shot12(t,cam){const x=layer('board',cam),T=ST(12);bgRest(x,.3,495,640);
 win(x,'CLAUDE SHEETS · BETA','#187E86',WTOP,628);
 fbar(x,'=SUM(Q1:Q4)',WTOP+78,TEAL,MINT);
 lab(x,'=SUM: ADDS THESE CELLS',495,WTOP+78+70+12+38,44,MINT,{a:fin(t,T+.3,.6),bg:'rgba(14,74,80,.95)'});
 const hl={'1,5':[TEAL,1]};for(let c=1;c<=4;c++)hl['1,'+c]=[TEAL,fin(t,T+.2+c*.3,.45)];
 grid(x,G0,GT12,{fx:[1,1,1],hl});
 const MS=.3,MX=720,MY=1150-138*MS;const e=fin(t,T+.2,.7);
 const hr=[lerp(97.5,150,e),lerp(220,10,e)];
 mascot(x,t,cam,{x:MX,y:MY,s:MS,hands:{r:hr},showH:{r:1},look:.1,brow:.5,mouth:.9,ear:false});
 {const hw=[MX+hr[0]*MS,MY+hr[1]*MS];pencilTip(x,hw[0]+5,hw[1]-52,1.45,90,14);gripHand(x,hw[0],hw[1],-.3,HERO,.4)}
 tick(x,170,1110,55,TEAL,fin(t,T+.9,.5),15);
 lab(x,'OUR EXAMPLE',400,1110,44,AMB,{a:1});
 comp([['board',0]])}
function shot13(t,cam){const x=layer('board',cam),T=ST(13);bgRest(x,.3,495,640);
 const rs=GR.row;GR.row=66;
 win(x,'CLAUDE SHEETS · BETA','#187E86',WTOP,440);
 fbar(x,'=SUM(Q1:Q3)',WTOP+78,TEAL,MINT);
 const hl={'2,5':[TEAL,1]};for(let c=1;c<=3;c++)hl['2,'+c]=[TEAL,fin(t,T+.15+c*.2,.4)];
 grid(x,G0,GT0,{fx:[1,1,1],hl,dark:{'2,4':1}});
 const q4=cr(G0,GT0,2,4),cu=seg(t,T+1.0,T+1.5);
 if(cu>0){x.save();x.strokeStyle=AMB;x.lineWidth=7;x.lineCap='round';x.beginPath();x.ellipse(q4[0]+q4[2]/2,q4[1]+q4[3]/2,q4[2]/2+14,q4[3]/2+12,-.15,-1.2,-1.2+cu*Math.PI*2.1);x.stroke();x.restore()}
 GR.row=rs;
 const sa=fin(t,T+1.4,.5),SY=918;
 boxIn(x,495,SY,sa,.9,()=>{x.save();x.translate(495,SY);x.rotate(-.05);rr(x,-190,-46,380,92,16,'rgba(18,10,28,.92)',AMB,8);x.restore()},()=>{x.save();x.translate(495,SY);x.rotate(-.05);txt(x,'SKIPPED Q4!',0,2,44,AMB,'center');x.restore()});
 lab(x,'OUR EXAMPLE',495,1040,44,AMB,{a:1});
 /* the pasted version, small: the same total as a plain grey number, and a homework line with a skipped step */
 const PT=1120,PHH=340,pa=fin(t,T+1.7,.6);
 boxIn(x,495,PT+PHH/2,pa,.9,()=>rr(x,WL,PT,WR-WL,PHH,28,mixC('#2A1F42','#46356F',.5),AMB,6),()=>{
  const w=tw(x,'PASTED',44)+50;pill(x,WL+30+w/2,PT+4,w,62,AMB);txt(x,'PASTED',WL+55,PT+6,44,DARK,'left');
  rr(x,136,PT+60,250,74,0,'#4B4468',INKC,3);bar(x,136+55,PT+97,140,GREYL,16);
  lab(x,'LOOKS FINE',626,PT+97,44,CREAM,{free:true,a:fin(t,T+2.0,.5)});
  rr(x,136,PT+160,718,150,14,CREAM,INKC,5);
  bar(x,166,PT+205,200,GREYL,16);txt(x,'=',410,PT+205,44,GREYD,'center');bar(x,450,PT+205,110,GREYL,16);
  bar(x,166,PT+262,130,GREYL,12);bar(x,480,PT+262,130,GREYL,12);
  const cu2=seg(t,T+2.2,T+2.7);if(cu2>0){x.save();x.strokeStyle=AMB;x.lineWidth=7;x.lineCap='round';x.beginPath();x.ellipse(388,PT+262,86,24,0,-2.2,-2.2+cu2*Math.PI*2.1);x.stroke();x.restore()}});
 comp([['board',0]])}
function shot14(t,cam){const x=layer('board',cam),T=ST(14);bgRest(x,.3,495,700);
 win(x,'CLAUDE SHEETS · BETA','#187E86',WTOP,584);
 fbar(x,'',WTOP+78,TEAL,MINT);
 const gt=GT0,neu=[fin(t,T+.3,.4),fin(t,T+1.2,.4),fin(t,T+2.1,.4)],hl={};
 for(let r=1;r<=3;r++)hl[r+',6']=[TEAL,neu[r-1]];
 grid(x,G1,gt,{fx:[1,1,1],neu,hl});
 const c=cr(G1,gt,1,6),k=seg(t,T+.1,T+2.4),r=clamp(k*3-.3,0,2.5);
 const cyp=c[1]+c[3]*Math.min(r,2)+c[3]-24,cxp=c[0]+c[2]-54;
 cursor(x,cxp,cyp+Math.sin((t-T)*7)*3,TEAL);
 robot(x,250,1330,.62,t,{smile:30});
 slab(x,1330);
 lab(x,'CLAUDE',250,1380,44,CREAM,{free:true});
 lab(x,'EACH EDIT OUTLINED',612,1250,44,MINT,{a:fin(t,T+.5,.6),bg:'rgba(14,74,80,.95)',free:true});
 comp([['board',0]])}
function undoCard(x,t,l,tp,w,h,ring,a=1,left=false,RR=30){
 boxIn(x,l+w/2,tp+h/2,a,.92,()=>rr(x,l,tp,w,h,26,PANEL,TEAL,6),()=>{txt(x,'CLAUDE\'S EDITS',l+28,tp+50,44,CREAM,'left');
  const ux=left?l+26:l+w-196;rr(x,ux,tp+h-96,170,70,20,TEAL,INKC,4);txt(x,'UNDO',ux+85,tp+h-60,44,DARK,'center');
  const rx=l+w-52,ry=left?tp+h-61:tp+52;x.save();x.lineCap='round';x.lineWidth=11;x.strokeStyle='#46356F';x.beginPath();x.arc(rx,ry,RR,0,7);x.stroke();x.strokeStyle=AMB;x.beginPath();x.arc(rx,ry,RR,-Math.PI/2,-Math.PI/2+Math.PI*2*ring);x.stroke();x.restore()})}
function shot15(t,cam){const x=layer('board',cam),T=ST(15);bgRest(x,.3,495,700);
 win(x,'CLAUDE SHEETS · BETA','#187E86',WTOP,584);
 fbar(x,'',WTOP+78,TEAL,MINT);
 const gone=fin(t,T+1.2,.7),keep=1-gone,hl={};for(let r=1;r<=3;r++)hl[r+',6']=[TEAL,keep];
 grid(x,G1,GT0,{fx:[1,1,1],neu:[keep,keep,keep],neuHd:keep,hl});
 const CL=330,CTP=1060,CW=Math.ceil(tw(x,'CLAUDE\'S EDITS',44))+56,CH=240;
 slab(x,1380);
 undoCard(x,t,CL,CTP,CW,CH,1,1,true);
 const MS=.8,MX=200,MY=1380-150*MS+12;
 const tapAt=T+.7,e=fin(t,T,.6),dn=fin(t,tapAt,.12)*(1-fin(t,tapAt+.15,.15));
 const tgt=[CL+6,CTP+CH-61];const hr0=[(tgt[0]-MX)/MS,(tgt[1]-MY)/MS],hr=[lerp(97.5,hr0[0],e)+dn*10,lerp(220,hr0[1],e)+dn*10];
 const sl=[73.5,34];if(Math.hypot(hr0[0]-sl[0],hr0[1]-sl[1])>195)WARN.push('shot15 reach '+Math.hypot(hr0[0]-sl[0],hr0[1]-sl[1]));
 mascot(x,t,cam,{x:MX,y:MY,s:MS,hands:{r:hr},showH:{r:1},look:.3,brow:.3,mouth:.6});
 lab(x,'ONLY THOSE EDITS',CL+(424+52)/2,1345,44,MINT,{a:fin(t,T+1.3,.6),free:true,bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}
function shot16(t,cam){const x=layer('board',cam),T=ST(16);bgRest(x,.3,495,760);
 const ring=1-seg(t,T,T+1.4);
 undoCard(x,t,150,480,690,300,ring,1,false,46);
 lab(x,['IT GOES A FEW SECONDS','AFTER YOU\'RE BACK IN','THE SHEET','OR WHEN YOU EDIT A CELL'],495,1020,44,CREAM,{a:fin(t,T+.05,.5)});
 comp([['board',0]])}
// ---------- WHAT WE LEARNED (shots 17, 18, 19) ----------
const P1=440,PH=400,P2=880;
function mini(x,t,top,now){ /* the same state as shot 6 (BEFORE) or shot 12 (NOW) */
 x.save();x.beginPath();x.roundRect(WL,top,WR-WL,PH,28);x.clip();
 const fb=top+34,gt=top+108,rh=36;
 rr(x,WL+10,fb,WR-WL-20,70,16,'#241A3C',now?TEAL:'#6B6488',4);txt(x,now?'=SUM(Q1:Q4)':'NO FORMULA',WL+30,fb+37,44,now?MINT:CREAM,'left');
 const g=G0;for(let r=0;r<4;r++)for(let c=0;c<6;c++){const [X,,w]=cr(g,0,r,c),Y=gt+r*rh,h=rh;let fill=(r==0||c==0)?'#3A2D60':(now?'#2E2350':'#4B4468');if(c==5&&r>0&&!now)fill=mixC(fill,AMB,.3);
  rr(x,X,Y,w,h,0,fill,INKC,3);if(r>0&&c>0&&c<5){x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+w/2-14,Y+h/2-5,28,10,5);x.fill()}
  if(r>0&&c==5){if(now){rr(x,X+6,Y+h/2-17,46,34,10,TEAL,INKC,3);x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+w-48,Y+h/2-5,36,10,5);x.fill()}else{x.fillStyle='#9C90B8';x.beginPath();x.roundRect(X+w/2-22,Y+h/2-5,44,10,5);x.fill()}}}
 if(now){x.strokeStyle=TEAL;x.lineWidth=6;const [X1]=cr(g,0,1,1),[X4,,w4]=cr(g,0,1,4);x.strokeRect(X1+3,gt+rh+3,X4+w4-X1-6,rh-6);const [X5,,w5]=cr(g,0,1,5);x.strokeRect(X5+3,gt+rh+3,w5-6,rh-6)}
 const my=top+304;for(let i=0;i<3;i++){const bx=WL+30+i*66;rr(x,bx,my-28,56,56,10,'#241A3C',INKC,4);if(!now)rr(x,bx+5,my-23,46,46,7,AMB,null)}
 if(now){tick(x,WL+290,my,34,TEAL,1,12);txt(x,'ALL 3 SHOW',WL+345,my-26,44,MINT,'left');txt(x,'THEIR WORK',WL+345,my+26,44,MINT,'left')}else imp(x,'3',WL+290,my+4,90,AMB);
 x.restore()}
function panel(x,top,col,name,a,fn){boxIn(x,495,top+PH/2,a,.9,()=>{rr(x,WL,top,WR-WL,PH,28,mixC('#2A1F42','#46356F',.5),col,6)},()=>{});
 if(a>0){x.save();x.globalAlpha*=a;fn();const w=tw(x,name,44)+50;pill(x,WL+30+w/2,top+4,w,62,col);txt(x,name,WL+55,top+6,44,DARK,'left');x.restore()}}
function learnedBox(x,a){const S='WHAT WE LEARNED',fs=64,w=impW(x,S,fs)+100;boxIn(x,495,330,a,.88,()=>rr(x,495-w/2,275,w,110,40,PANEL,AMB,6),()=>imp(x,S,495,336,fs,AMB))}
const WWL_LAB=['TOTALS WITH NO WORK SHOWN','OUR EXAMPLE'];
function shot17(t,cam){const x=layer('board',cam),T=ST(17);bgRest(x,.34,495,700);
 robot(x,730,CT+32,.7,t,{smile:30});
 mascot(x,t,cam,{x:250,y:CT-120,s:.8,look:.2,brow:.5,mouth:.9});
 slab(x);
 lab(x,'CLAUDE',730,CT+84,44,CREAM,{free:true});
 learnedBox(x,fin(t,T+.1,.6));
 comp([['board',0]])}
function shot18(t,cam){const x=layer('board',cam),T=ST(18);bgRest(x,.25,495,640);
 learnedBox(x,1);
 panel(x,P1,AMB,'BEFORE · PASTED',1,()=>mini(x,t,P1,false));
 lab(x,WWL_LAB,495,1395,44,[CREAM,AMB],{});
 comp([['board',0]])}
function shot19(t,cam){const x=layer('board',cam),T=ST(19);bgRest(x,.25,495,640);
 learnedBox(x,1);
 panel(x,P1,AMB,'BEFORE · PASTED',1,()=>mini(x,t,P1,false));
 panel(x,P2,TEAL,'NOW · CLAUDE SHEETS BETA',fin(t,T+.1,.7),()=>mini(x,t,P2,true));
 lab(x,WWL_LAB,495,1395,44,[CREAM,AMB],{});
 comp([['board',0]])}
// ---------- the ask (shot 20) ----------
function shot20(t,cam){const x=layer('board',cam),T=ST(20);bgRest(x,.35,495,860);
 const w=ease(seg(t,T+.2,T+.8)),wv=Math.sin((t-T)*9);const hr=[lerp(97.5,170+wv*12*w,w),lerp(220,-30+wv*36*w,w)];
 slab(x,1150);
 mascot(x,t,cam,{x:489,y:1040,s:.7,hands:{r:hr},showH:{r:w>.02?1:0},look:.05,lookY:0,brow:.45,mouth:.95});
 comp([['board',0]])}

// ---------- screen space: the corner tag, the tabs, the title card, the takeaway card, the buttons ----------
let TAG_R=0;
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 44px Arial';const S='CLAUDE SHEETS',tw_=x.measureText(S).width,dw=x.measureText(' ·').width;const L0=60,w=26+tw_+dw+18+130+22,cy=134;TAG_R=L0+w;pill(x,L0+w/2,cy,w,68,'rgba(27,20,48,.92)');
 txt(x,S,L0+26,cy+2,44,AMB,'left','800');txt(x,' ·',L0+26+tw_,cy+2,44,CREAM,'left','800');pill(x,L0+26+tw_+dw+18+65,cy,130,56,RED);txt(x,'60s',L0+26+tw_+dw+18+65,cy+2,44,'#FFF6E6','center','800');x.restore()}
function tab(t,s,e,lab_,col){if(t<s||t>e)return;const v=1-fin(t,e-.5,.5);const x=ctx;x.save();x.font='900 44px Arial';const w=x.measureText(lab_).width+60;x.restore();const cy=242,L0=60;if(L0+w>918)WARN.push('tab too wide '+(L0+w));pill(x,L0+w/2,cy,w,66,col,v);txt(x,lab_,L0+w/2,cy+2,44,DARK,'center','900',v)}
function sticker(x,fs){x.font=`bold ${fs}px Impact, "Arial Black", sans-serif`;const sw=x.measureText('IN 60 SECONDS').width+70;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-fs*.74,sw+20,fs*1.48,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-fs*.64,sw,fs*1.28,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+35,fs*.06)}
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(489,820,60,489,820,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(489,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-489,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`bold ${q}px Impact, "Arial Black", sans-serif`;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 x.font=font(100);const s1=100*740/x.measureText('CLAUDE').width,s2=100*740/x.measureText('SHEETS').width;
 put('LEARN',489,470,120,CREAM);put('CLAUDE',489,470+s1*.8,s1,AMB);put('SHEETS',489,470+s1*.8+s2*.98,s2,AMB);
 put('BETA · 2026',489,470+s1*.8+s2*.98+110,96,CREAM);
 x.save();x.translate(489,1390);x.rotate(-.035);sticker(x,96);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const TK_CY=600,TK_L=['PASTED: OUR 3 TOTALS,','NO WORK SHOWN'],TK_M=['PAID-PLAN BETA: TOTALS CAN','BE FORMULAS YOU CHECK'];
function takeaway(t,a,dim){if(a<=0)return;const x=ctx;if(dim){x.save();x.setTransform(1,0,0,1,0,0);x.globalAlpha=.8*a;x.fillStyle='#0C0614';x.fillRect(0,0,W,H);x.restore()}
 const fs=48,lh=fs*1.3,h=(TK_L.length+TK_M.length)*lh+110;x.save();x.setTransform(1,0,0,1,0,0);
 const e=dim?24*ease(seg(t,ST(19)+2.2,ST(20))):24; /* the card keeps growing a little while it is up, so the picture never freezes */
 boxIn(x,489,TK_CY,a,.92,()=>rr(x,489-400-e,TK_CY-h/2-e,800+2*e,h+2*e,40,'rgba(27,20,48,.97)',AMB,6),()=>{
  TK_L.forEach((s,i)=>txt(x,s,489,TK_CY-h/2+55+lh/2+i*lh,fs,CREAM,'center'));TK_M.forEach((s,i)=>txt(x,s,489,TK_CY-h/2+55+lh/2+(TK_L.length*lh+24)+i*lh,fs,AMB,'center'))});x.restore()}
function buttons(t,T){const x=ctx;x.setTransform(1,0,0,1,0,0);
 const c=fin(t,T+.3,.55),pulse=1+.03*Math.sin((t-T-.3)*7);
 if(c>0){x.save();x.translate(489,1265);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;x.fillStyle=INKC;x.beginPath();x.roundRect(-330,-90,660,180,90);x.fill();pill(x,0,0,640,160,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-250,-40);x.lineTo(-250,40);x.lineTo(-186,0);x.closePath();x.fill();
  x.globalAlpha=1;x.restore();x.save();x.globalAlpha=c;txt(x,'Subscribe',539,1270,84,CREAM,'center','800');x.restore()}
 const C0=T+1.1,cc=fin(t,C0,.55),pu=1+.03*Math.sin((t-C0)*7);
 if(cc>0){const S='COMMENT: WHAT NEXT?',fs=46,w2=Math.min(780,tw(x,S,fs)+110),h=150;x.save();x.translate(489,1440);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
  x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w2/2,-h/2,w2,h,h/2);x.fill();x.stroke();x.restore();x.save();x.globalAlpha=cc;txt(x,S,489,1444,fs,DARK,'center');x.restore()}}
function meterOverlay(t,sh){const st=meterState(t,sh);if(st)meterBox(ctx,st)}
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 if(sh==19)takeaway(t,fin(t,ST(19)+1.7,.6),true);
 if(sh==20){takeaway(t,1,false);buttons(t,ST(20))}}

// ---------- cameras: a linear push on the whole board ----------
const push=(a=1,b=1.1)=>u=>({x:540,y:960,z:lerp(a,b,u),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:20},()=>push(1,1.1)));
const SHOTS=[null,shot1,shot2,shot3,shot4,shot5,shot6,shot7,shot8,shot9,shot10,shot11,shot12,shot13,shot14,shot15,shot16,shot17,shot18,shot19,shot20];
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{SHOTS[s](o,cam);overlay(o,s)}
  tag();
  if(s>=5&&s<=8)tab(o,ST(5),out(9),'BEFORE',AMB);if(s>=9&&s<=16)tab(o,ST(9),out(17),'NOW',TEAL);
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo)},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a full brush on every cut, pops on cards and labels ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),'cut');
for(const t of [ST(1)+.2,ST(1)+.35,ST(2)+.3,ST(2)+.5,ST(3)+.2,ST(4)+1.2,ST(5)+.2,ST(5)+.3,ST(5)+1.4,ST(6)+.3,ST(6)+.5,ST(6)+.75,ST(6)+1.2,ST(7)+.1,ST(8)+.4,ST(9)+.5,ST(10)+.3,ST(11)+.1,ST(11)+.4,ST(11)+.7,ST(11)+1.2,ST(12)+.3,ST(12)+.5,ST(12)+.8,ST(12)+1.1,ST(13)+.35,ST(13)+.55,ST(13)+.75,ST(13)+1.7,ST(13)+2.0,ST(14)+.3,ST(14)+1.2,ST(14)+2.1,ST(15)+.7,ST(15)+1.3,ST(16)+.1,ST(17)+.1,ST(19)+.1,ST(19)+1.7,ST(20)+.3,ST(20)+1.1])say(t,'tick');
for(const t of [ST(3)+.3,ST(3)+.55,ST(3)+.8,ST(4)+.95,ST(4)+1.2,ST(7)+.1,ST(7)+.5,ST(7)+.9,ST(8)+.4,ST(8)+.8,ST(8)+1.2,ST(13)+1.0,ST(13)+1.25,ST(13)+2.2,ST(13)+2.45])say(t,'pen');
for(const t of [ST(5)+1.4,ST(15)+1.2])say(t,'paper');
for(const t of [ST(13)+1.4,ST(13)+1.7])say(t,'stamp');
