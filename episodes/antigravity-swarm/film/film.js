// Episode: Antigravity Swarm (/swarm, Nov 9 2026), told through 3 API files (users, orders, products): the maker's own example.
// You (the mascot, small white chef's hat) ask; the AI is a robot with a teal screen head. Meter "YOUR WAITS" (whole numbers, our example): BEFORE 1, 2, 3; NOW stays at 1.
// 56.5 s, 22 shots (beats.md "Shots", numbered 0-21). Voice from tts.py (vo.wav laid in at .5 s): film time = voice time + .5. Every time below is FILM seconds.
// Places: T title (0), H hook stage (1-4), D wide desk (5), B BEFORE stage (6-8), C chat (9-10), N NOW stage (10-15), K catch cards (16-17), P side by side (18), R robots (19), M takeaway (20), S subscribe (21).
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',PAPER='#F4EBD8',DEEP='#1B1430';
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function txt_w(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function hex(c){return [parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)]}
function mixc(a,b,u){u=clamp(u);const A=hex(a),B=hex(b);return `rgb(${Math.round(lerp(A[0],B[0],u))},${Math.round(lerp(A[1],B[1],u))},${Math.round(lerp(A[2],B[2],u))})`}
/* scale-and-alpha entrance about (X,Y) */
function enter(x,X,Y,a,from=.86){x.translate(X,Y);const k=lerp(from,1,a);x.scale(k,k);x.translate(-X,-Y);x.globalAlpha*=a}

/* THE CLOCK: cut times of the 22 shots (film seconds) = measured word starts of the real voice (pauses and energy dips of vo.wav, + .5 s) minus .02 s, on frames.
   Shot 0 ends on the measured pause after "Antigravity Swarm:" (voice silence 1.08-1.55 s = film 1.58-2.05 s): the name is over, "you" starts at 2.05 s. */
const TS=[0,2.0,3.47,4.87,7.46,10.27,11.59,13.03,15.39,18.14,20.71,23.01,26.14,29.08,31.52,34.18,36.2,39.39,41.73,46.82,48.49,51.2];
const DUR=56.5;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.32;
const PLACE='THHHHDBBBCNNNNNNKKPRMS'; /* one letter per shot 0-21 (sound only) */
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1];

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: a small white chef's hat (band + three puffs), drawn in the head's own transform after the figure */
function chefHat(x,cx,by,w,col='#FFFDF6'){x.save();x.lineJoin='round';x.lineWidth=Math.max(3,w*.035);x.strokeStyle=INKC;x.fillStyle=col;
 const h=w*.72,pw=w*.34;
 for(const [dx,dy,r] of [[-w*.27,-h*.72,pw*.62],[w*.27,-h*.72,pw*.62],[0,-h*.95,pw*.72]]){x.beginPath();x.arc(cx+dx,by+dy,r,0,7);x.fill();x.stroke()}
 x.beginPath();x.roundRect(cx-w*.4,by-h*.82,w*.8,h*.7,w*.08);x.fill();x.stroke();
 for(const dx of [-w*.27,w*.27,0]){x.beginPath();x.arc(cx+dx,by-h*(dx==0?.95:.72),pw*(dx==0?.72:.62)*.9,0,7);x.fill()}
 x.fillStyle='#EDE3CC';x.beginPath();x.roundRect(cx-w*.43,by-h*.34,w*.86,h*.34,w*.07);x.fill();x.stroke();x.restore()}
function mascotHat(x,p){x.save();headT(x,p);chefHat(x,0,-70,150);x.restore()}
function robotHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE); o.tick shows a tick instead of the face */
 const tk=o.tick||0;
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 x.save();x.globalAlpha*=1-tk;const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke();x.restore();
 if(tk>0){x.save();x.globalAlpha*=tk;x.strokeStyle='#0B3A40';x.lineWidth=24;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(-46,12);x.lineTo(-12,46);x.lineTo(50,-30);x.stroke();
  x.strokeStyle=CREAM;x.lineWidth=14;x.beginPath();x.moveTo(-46,12);x.lineTo(-12,46);x.lineTo(50,-30);x.stroke();x.restore()}}
/* a robot: torso bottom at `bottom`, centre cx, scale s. o: a (entrance), type (0..1 typing), tick (screen tick), label (pill under it), smile */
function robot(x,cx,bottom,s,t,o={}){const a=o.a??1;if(a<=0)return;x.save();enter(x,cx,bottom,a,.88);
 const ty=o.type||0,w=Math.sin(t*13+(o.ph||0)),w2=Math.sin(t*11+1.7+(o.ph||0));
 const p={x:cx,y:bottom-TH*s,s,face:1,breath:t*2.1+(o.ph||0),noLegs:true,noFace:true,hands:{},showH:{}};
 if(ty>0){p.hands.l=[-50+w*12*ty,184+w2*6*ty];p.hands.r=[50+w2*12*ty,184+w*6*ty];p.showH.l=p.showH.r=true}
 drawPerson(x,CLB,p);x.save();headT(x,p);robotHead(x,{blink:blinkAt(t+(o.ph||0),BL),smile:o.smile,tick:o.tick});x.restore();
 if(ty>0){ /* keyboard slab in front of the hands */
  rr(x,cx-118*s,bottom-30*s,236*s,34*s,10*s,'#0E1E2C','#5FB9B5',3*s)}
 x.restore();
 if(o.label){tagPill(x,cx,bottom+30,o.label,TEAL,26,a)}}
function tagPill(x,X,Y,s,col,size,a=1,tc='#0B2A30'){if(a<=0)return;x.save();x.globalAlpha*=a;const w=txt_w(x,s,size)+44;pill(x,X,Y,w,size*1.7,col);txt(x,s,X,Y+2,size,tc,'center','900');x.restore()}
function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function table(x,top){x.fillStyle='#B0705A';x.fillRect(-900,top,W+1800,24);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,top,W+1800,4);
 x.fillStyle='#7A4038';x.fillRect(-900,top+24,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,top+80,W+1800,10)}
function cursorDraw(x,X,Y,a,col,press=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);const k=1-.18*press;x.scale(k,k);x.lineJoin='round';x.lineWidth=5;x.strokeStyle=INKC;x.fillStyle=col;
 x.beginPath();x.moveTo(0,0);x.lineTo(0,40);x.lineTo(11,31);x.lineTo(19,49);x.lineTo(28,45);x.lineTo(20,28);x.lineTo(34,28);x.closePath();x.stroke();x.fill();x.restore()}

// ---------- the stage: 3 file cards in a row (the maker's example), robots above, the verifier at the right ----------
const CX=[290,690,1090],VX=1385,CW=340,CHH=240,CT=640,RB=565,RS=.62;
const NAMES=['USERS','ORDERS','PRODUCTS'],WN=['@USERS','@ORDERS','@PRODUCTS'];
const LINE=[.9,.72,.84,.55,.78,.66]; /* code line lengths */
/* a file card: o.a entrance, o.prog code lines grown 0..1, o.lit amber 0..1, o.tick teal 0..1, o.hl highlight */
function fileCard(x,cx,top,name,o={},w=CW,h=CHH){const a=o.a??1;if(a<=0)return;x.save();enter(x,cx,top+h/2,a,.9);const l=cx-w/2,lit=o.lit||0,tk=o.tick||0,bc=mixc(mixc(INKC,AMB,lit),TEAL,tk);
 if(lit>0||tk>0||o.hl>0){const g=x.createRadialGradient(cx,top+h/2,30,cx,top+h/2,w*.75);const gc=tk>lit?'45,178,174':'255,198,110';g.addColorStop(0,`rgba(${gc},${.34*Math.max(lit,tk,o.hl||0)})`);g.addColorStop(1,`rgba(${gc},0)`);x.fillStyle=g;x.fillRect(l-w*.6,top-h*.6,w*2.2,h*2.2)}
 x.fillStyle='rgba(0,0,0,.28)';x.beginPath();x.roundRect(l+8,top+12,w,h,16);x.fill();
 rr(x,l,top,w,h,16,PAPER,bc,5+3*Math.max(lit,tk));
 x.save();x.font=`${Math.round(h*.19)}px Impact, "Arial Black", sans-serif`;x.fillStyle=DEEP;x.textAlign='left';x.textBaseline='middle';x.fillText(name,l+w*.08,top+h*.19);x.restore();
 const pr=o.prog??1,n=6;for(let i=0;i<n;i++){const f=clamp(pr*n-i);if(f<=0)continue;x.fillStyle=mixc('#C9BFA8',TEAL,(o.typed||0)*(i==Math.floor(pr*n-.001)?1:0));x.fillRect(l+w*.08,top+h*.36+i*h*.098,(w*.84)*LINE[i]*f,h*.04)}
 if(tk>0){x.save();x.globalAlpha*=tk;const bx=l+w-h*.14,by=top+h*.84,r=h*.1;x.fillStyle=TEAL;x.beginPath();x.arc(bx,by,r,0,7);x.fill();x.strokeStyle=INKC;x.lineWidth=3;x.stroke();
  x.strokeStyle=CREAM;x.lineWidth=h*.03;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(bx-r*.5,by);x.lineTo(bx-r*.1,by+r*.42);x.lineTo(bx+r*.52,by-r*.4);x.stroke();x.restore()}
 x.restore()}

// ---------- the meter: YOUR WAITS (whole numbers), the tag OUR EXAMPLE under it ----------
function meterBox(x,l,tp,k,v,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320*k,h=780*k,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,26*k,'rgba(27,20,48,.93)',col,5*k);
 const fs=Math.min(30,280/txt_w(x,'YOUR WAITS',30)*30)*k;txt(x,'YOUR WAITS',cx,tp+46*k,fs,CREAM,'center','900');
 imp(x,String(Math.round(v)),cx,tp+150*k,132*k,col);
 const tl=l+118*k,tw=90*k,top=tp+250*k,bot=tp+670*k,ph=bot-top;
 rr(x,tl,top,tw,ph,12*k,'#241A3C',INKC,4*k);
 for(const n of [0,1,2,3]){const y=bot-ph*n/3;x.fillStyle='#C9B8E0';x.fillRect(tl-18*k,y-2*k,18*k,4*k);txt(x,String(n),tl-26*k,y,28*k,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/3);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12*k);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6*k,fh));x.restore()}
 tagPill(x,cx,tp+728*k,'OUR EXAMPLE',mixc('#3A2D5A',col,.0),22*k,1,CREAM);
 x.restore()}
/* meter value and colour over the film: hook 0 -> 3 (amber), BEFORE 1, 2, 3 (amber), NOW 0 then 1 and stays (teal) */
function meterV(t){
 if(t<ST(5))return kf(t,[[ST(2)+.15,0],[ST(2)+1.15,3]]);
 if(t<ST(9))return kf(t,[[ST(6),0],[ST(7)+.8,0],[ST(7)+1.3,1],[ST(7)+1.6,1],[ST(7)+2.15,2],[ST(8)+1.0,2],[ST(8)+1.5,3]]);
 return kf(t,[[ST(9),0],[ST(11)+.5,0],[ST(11)+1.1,1]])}
const meterCol=t=>t>=ST(9)?TEAL:AMB;

// ---------- hook stage (shots 1-4) ----------
function drawHook(t,sh,cam){const x=layer('board',cam);bgDusk(x,.3,760,560);const u=t-ST(sh);
 for(let i=0;i<3;i++){const a=sh==1?fin(u,.05+i*.22,.55):1;
  const tick=sh==4?fin(u,.9+i*.5,.55):0,prog=sh==1?0:sh==2?.1:clamp(.1+(sh==3?u/2.6*.7:.7+u*.1));
  fileCard(x,CX[i],CT,NAMES[i],{a,prog,tick,typed:sh==3?1:0})}
 if(sh>=3){for(let i=0;i<3;i++){const a=sh==3?fin(u,.1+i*.18,.55):1;robot(x,CX[i],RB,RS,t,{a,type:sh==3?1:fin(u,0,.4)*1,ph:i*1.3,tick:0})}}
 if(sh==4){const a=fin(u,.0,.6);robot(x,VX,RB,RS,t,{a,type:0,ph:2.6,tick:fin(u,.5,.6),smile:22})}
 comp([['board',0]])}

// ---------- the wide desk (shot 5): mascot, laptop, the three files ----------
function mascotPose(t,o={}){return Object.assign({x:560,y:520,s:1.25,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.2,lookY:.05,brow:.2,mouth:.6,mouthW:28},o)}
function drawDesk(t,sh,cam){const x=layer('board',cam);bgDusk(x,.3,700,520);const u=t-ST(sh);
 const pm=mascotPose(t);actor(x,'hero',HERO,pm,cam);mascotHat(x,pm);
 table(x,800);
 rr(x,380,616,360,200,18,'#2A2340','#8A7AA8',5);x.fillStyle='rgba(255,255,255,.08)';x.fillRect(404,640,312,6);
 for(let i=0;i<3;i++){const a=fin(u,.1+i*.15,.55);fileCard(x,1060+i*300,600,NAMES[i],{a,prog:1},250,190)}
 comp([['board',0]])}

// ---------- BEFORE (shots 6-8): one robot takes the files in turn ----------
function agentX(t){return kf(t,[[0,VX],[ST(7)+.05,VX],[ST(7)+.65,CX[0]],[ST(7)+1.05,CX[0]],[ST(7)+1.6,CX[1]],[ST(8)+.15,CX[1]],[ST(8)+.7,CX[2]],[ST(8)+9,CX[2]]])}
function beforeCards(t){return [0,1,2].map(i=>{const T=[ST(7)+.3,ST(7)+1.35,ST(8)+.6][i];return {lit:fin(t,T,.5),prog:clamp((t-T)/1.0)*(1)}})}
function drawBefore(t,sh,cam){const x=layer('board',cam);bgDusk(x,.3,760,560);const u=t-ST(sh),cs=beforeCards(t);
 for(let i=0;i<3;i++)fileCard(x,CX[i],CT,NAMES[i],{a:1,prog:Math.max(.1,cs[i].prog),lit:cs[i].lit,typed:cs[i].prog<1&&cs[i].prog>0?1:0});
 const ax=agentX(t),working=(sh==7&&((u>.65&&u<1.0)||(u>1.6&&u<2.2)))||(sh==8&&u>.7&&u<1.3);
 const moving=Math.abs(agentX(t+.03)-agentX(t-.03))>1;
 robot(x,ax,RB,RS,t,{a:1,type:sh==6?.0:(moving?0:1),ph:.4,label:'AGENT'});
 if(sh==8){const a=fin(u,.9,.6);
  const p=mascotPose(t,{x:VX,y:RB-TH*.8,s:.8,breath:t*2,look:-.35,lookY:.05});
  const press=Math.max(0,Math.sin(Math.PI*seg(u,1.75,2.1)));
  x.save();x.translate(VX,RB);x.scale(lerp(.8,1,a),lerp(.8,1,a));x.translate(-VX,-RB);
  const bx=VX-10,by=548,bw=250,bh=70;
  p.hands.r=[(bx+20-p.x)/p.s,(by-p.y)/p.s-76+press*32];p.showH.r=true;
  actor(x,'hero',HERO,p,cam);mascotHat(x,p);
  rr(x,bx-bw/2,by-bh/2+press*10,bw,bh-press*10,22,mixc('#E4493F','#B63329',press),INKC,5);imp(x,'RUN TESTS',bx,by+2+press*5,40,'#FFF6E6');
  x.restore()}
 comp([['board',0]])}

// ---------- the chat (shots 9-10): you type /swarm, the chat becomes the coordinator ----------
const CHAT0={l:500,t:250,w:980,h:470},COORD={l:420,t:166,w:560,h:84};
const SW='/swarm add validation to 3 files';
function chatBox(x,r,txtN,caret,a,coord,hat){x.save();x.globalAlpha*=a;
 x.fillStyle='rgba(0,0,0,.3)';x.beginPath();x.roundRect(r.l+10,r.t+14,r.w,r.h,22);x.fill();
 rr(x,r.l,r.t,r.w,r.h,22,'#241A3C',mixc(CREAM,TEAL,coord),5);
 const hh=Math.min(r.h,64);
 x.fillStyle='#2A1F42';x.beginPath();x.roundRect(r.l,r.t,r.w,hh,[22,22,r.h>hh?0:22,r.h>hh?0:22]);x.fill();
 x.globalAlpha*=1-coord;for(let i=0;i<3;i++){x.fillStyle=['#E4493F','#FFC66E','#2DB2AE'][i];x.beginPath();x.arc(r.l+40+i*34,r.t+hh/2,10,0,7);x.fill()}x.globalAlpha=a;
 if(coord<1){x.save();x.beginPath();x.roundRect(r.l,r.t,r.w,r.h,22);x.clip();x.globalAlpha*=1-Math.min(1,coord*2.2);const bw=r.w-80,bx=r.l+40,by=r.t+120;rr(x,bx,by,bw,96,26,CREAM,INKC,4);x.beginPath();x.roundRect(bx+4,by+4,bw-8,88,22);x.clip();
  const s=SW.slice(0,txtN);x.font='900 44px Arial';x.fillStyle=DEEP;x.textAlign='left';x.textBaseline='middle';x.fillText(s,bx+34,by+50);
  if(caret){const cw=x.measureText(s).width;x.fillStyle=TEAL;x.fillRect(bx+36+cw,by+22,5,56)}x.restore()}
 if(coord>0){const S='COORDINATOR · YOUR CHAT',fs=30;x.save();x.globalAlpha*=coord;txt(x,S,r.l+r.w/2,r.t+r.h/2+2,fs,CREAM,'center','900');x.restore()}
 x.restore();
 if(hat>0){x.save();const hx=r.l+r.w/2,hy=r.t+4;x.translate(hx,hy);x.scale(lerp(.5,1,hat),lerp(.5,1,hat));x.translate(-hx,-hy);chefHat(x,hx,hy,96);x.restore()}}
function drawChat(t,sh,cam){const x=layer('board',cam);bgDusk(x,.3,760,520);const u=t-ST(sh);
 const mA=sh==9?1:0,mY=0;
 if(mA>0){x.save();x.translate(0,mY);const pm=mascotPose(t,{x:250,y:560,s:1.05,look:.45,lookY:.05,mouth:.7});const k=sh==9?(clamp((u-.5)/1.6)>0&&clamp((u-.5)/1.6)<1?1:0):0;
  pm.hands.l=[-80+Math.sin(t*12)*8*k,126+Math.sin(t*15)*5*k];pm.hands.r=[80+Math.sin(t*14)*8*k,126+Math.sin(t*11)*5*k];pm.showH.l=pm.showH.r=true;
  actor(x,'hero',HERO,pm,cam);mascotHat(x,pm);table(x,800);rr(x,90,690,320,112,16,'#2A2340','#8A7AA8',5);x.fillStyle='rgba(255,255,255,.08)';x.fillRect(116,712,268,6);x.restore()}
 let r=CHAT0,coord=0,n=SW.length,hat=0;
 if(sh==9){n=Math.floor(SW.length*clamp((u-.5)/1.6))}
 if(sh==10){const e=ease(seg(u,.05,.95));r={l:lerp(CHAT0.l,COORD.l,e),t:lerp(CHAT0.t,COORD.t,e),w:lerp(CHAT0.w,COORD.w,e),h:lerp(CHAT0.h,COORD.h,e)};coord=fin(u,.55,.6);hat=fin(u,.95,.55);n=SW.length}
 const caret=sh==9&&Math.floor(t*3)%2==0;
 if(sh==10){const g=x.createRadialGradient(700,208,30,700,208,520);g.addColorStop(0,`rgba(255,198,110,${.42*fin(u,.5,.5)})`);g.addColorStop(1,'rgba(255,198,110,0)');x.fillStyle=g;x.fillRect(0,0,W,700)}
 chatBox(x,r,n,caret,1,coord,hat);
 if(sh==10){const a=fin(u,.9,.6);for(let i=0;i<3;i++)fileCard(x,CX[i],CT,NAMES[i],{a,prog:.1,lit:0});}
 comp([['board',0]])}

// ---------- NOW (shots 10-15): coordinator, workers, verifier, loop, board ----------
function coordDraw(x,hl){if(hl>0){const g=x.createRadialGradient(700,208,30,700,208,420);g.addColorStop(0,`rgba(255,198,110,${.42*hl})`);g.addColorStop(1,'rgba(255,198,110,0)');x.fillStyle=g;x.fillRect(0,0,W,700)}
 chatBox(x,COORD,SW.length,false,1,1,1);
 rr(x,COORD.l,COORD.t,COORD.w,COORD.h,22,null,mixc(TEAL,AMB,hl),5+3*hl)}
function link(x,X0,Y0,X1,Y1,a,col=TEAL,lw=5){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.lineWidth=lw;x.lineCap='round';x.beginPath();x.moveTo(X0,Y0);x.lineTo(X0+(X1-X0)*clamp(a*1.0),Y0+(Y1-Y0)*clamp(a*1.0));x.stroke();x.restore()}
function drawNow(t,sh,cam){const x=layer('board',cam);bgDusk(x,.3,760,560);const u=t-ST(sh);
 const hlC=sh==10?1:sh==11?1-fin(u,0,.5):0,hlW=sh==11?fin(u,.2,.5)*(1-fin(u,2.4,.6)):0,hlV=sh==12?fin(u,.2,.5)*(1-fin(u,2.2,.6)):0;
 const cardsA=sh>=10?fin(t,ST(10)+.7,.6):1;
 const boardIn=sh==14?fin(u,.1,.7):sh>=15?1:0,cardsOut=sh==14?1-fin(u,0,.6):sh>=15?0:1;
 const wA=[0,1,2].map(i=>sh==11?fin(u,.05+i*.2,.6):sh>=12?1:0);
 const vA=sh==12?fin(u,.0,.6):sh>=13?1:0;
 const tickU=sh==12?fin(u,1.2,.55):sh>=13?1:0,tickP=sh==12?fin(u,1.75,.55):sh>=13?1:0,tickO=sh==13?fin(u,1.9,.55):sh>=14?1:0;
 const tk=[tickU,sh>=14?tickO:tickO,tickP];
 const prog=sh==10?.1:clamp(.1+(t-ST(11))*.12);
 if(cardsOut>0){x.save();x.globalAlpha*=cardsOut;for(let i=0;i<3;i++)fileCard(x,CX[i],CT,NAMES[i],{a:cardsA,prog,tick:tk[i],typed:sh<=13?1:0,hl:hlW*.5});x.restore()}
 coordDraw(x,hlC);
 /* hub lines from the coordinator to every robot */
 for(let i=0;i<3;i++)link(x,700,250,CX[i],RB-RS*TH*2+22,wA[i]*.9);if(vA>0)link(x,700,250,VX,RB-RS*TH*2+22,vA*.9);
 /* highlight rings under the named robots */
 const ringW=hlW,ringV=hlV;
 if(ringW>0){for(let i=0;i<3;i++){x.save();x.globalAlpha*=ringW;rr(x,CX[i]-120,268,240,355,26,'rgba(255,198,110,.12)',AMB,6);x.restore()}}
 if(ringV>0){x.save();x.globalAlpha*=ringV;rr(x,VX-120,268,240,355,26,'rgba(255,198,110,.12)',AMB,6);x.restore()}
 for(let i=0;i<3;i++)robot(x,CX[i],RB,RS,t,{a:wA[i],type:sh==13&&i==1&&u>1.0&&u<1.9?1:(sh<=12?1:(sh==13?(i==1?(u>1.0&&u<1.9?1:0.6):.6):.6)),ph:i*1.3,label:WN[i]});
 robot(x,VX,RB,RS,t,{a:vA,type:0,ph:2.6,tick:sh==12?fin(u,1.0,.6):1,label:'@VERIFIER',smile:22});
 if(sh==13){ /* the loop: problems go back to the coder, along the lane below the robots */
  const g=sh==13?fin(u,.15,1.2):1,a=sh==13?fin(u,.1,.4):1;
  x.save();x.globalAlpha*=a;x.strokeStyle=AMB;x.lineWidth=10;x.lineCap='round';x.lineJoin='round';
  const P=[[VX,620],[VX,965],[CX[1],965],[CX[1],892]];const segs=[345,695,73];const tot=segs[0]+segs[1]+segs[2];let d=g*tot;x.beginPath();x.moveTo(P[0][0],P[0][1]);
  let cur=[P[0][0],P[0][1]],lastDir=[0,1];
  for(let k=0;k<3&&d>0;k++){const A=P[k],B=P[k+1],L=Math.hypot(B[0]-A[0],B[1]-A[1]),m=Math.min(d,L);cur=[A[0]+(B[0]-A[0])*m/L,A[1]+(B[1]-A[1])*m/L];lastDir=[(B[0]-A[0])/L,(B[1]-A[1])/L];x.lineTo(cur[0],cur[1]);d-=m}
  x.stroke();
  if(g>.97){x.fillStyle=AMB;x.beginPath();x.moveTo(CX[1],888);x.lineTo(CX[1]-24,922);x.lineTo(CX[1]+24,922);x.closePath();x.fill()}
  x.restore();
  const S='PROBLEM: BACK TO THE CODER';tagPill(x,1040,965,S,AMB,26,fin(u,.6,.55)*(1-fin(u,1.9,.4)),'#1B1430')}
 if(sh>=14){ /* the shared board */
  const l=120,tp=662,w=1140,h=250;x.save();enter(x,l+w/2,tp+h/2,boardIn,.93);
  for(const X of [...CX,VX])link(x,X,620,X,tp+2,1,'rgba(45,178,174,.75)',4);
  rr(x,l,tp,w,h,24,'#241A3C',TEAL,6);x.fillStyle='#2A1F42';x.beginPath();x.roundRect(l,tp,w,64,[24,24,0,0]);x.fill();
  txt(x,'SHARED BOARD',l+36,tp+34,34,CREAM,'left','900');
  {const pu=.6+.4*Math.sin(t*5),lw=txt_w(x,'LIVE',28),cx=l+w-36-lw;x.fillStyle=`rgba(45,178,174,${pu})`;x.beginPath();x.arc(cx-22,tp+33,11,0,7);x.fill();txt(x,'LIVE',l+w-36,tp+34,28,TEAL,'right','900')}
  const rows=['@ORDERS: QUESTION','@VERIFIER: TEST RESULTS'];
  rows.forEach((s,i)=>{const a=sh==15?fin(u,.1+i*.8,.55):0;if(a<=0)return;const fs=32,rw=txt_w(x,s,fs)+64,ry=tp+112+i*68,hl2=sh==15?fin(u,.1+i*.8,.4)*(1-fin(u,.1+i*.8+.9,.5)):0;
   x.save();x.translate(0,(1-a)*30);x.globalAlpha*=a;rr(x,l+36,ry-26,rw,52,26,'#352A55',mixc('#8A7AA8',AMB,hl2),3+3*hl2);txt(x,s,l+36+rw/2,ry+2,fs,CREAM,'center','900');x.restore()});
  x.restore()}
 if(sh==14||sh==15){const a=sh==14?fin(u,.5,.7):1;const p=mascotPose(t,{x:1458,y:0,s:.45,look:-.6,lookY:.2,mouth:.7});p.y=1000-TH*p.s;x.save();x.translate(0,(1-a)*300);actor(x,'hero',HERO,p,cam);mascotHat(x,p);x.restore()}
 comp([['board',0]])}

// ---------- the catch (shots 16-17) ----------
function drawCatch(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const u=t-ST(sh),A=sh==16?fin(u,0,.6):1;
 x.save();x.globalAlpha=A;imp(x,'THE CATCH',960,200,120,AMB);x.restore();
 if(sh==16){const gx=[360,960,1560];
  for(let i=0;i<3;i++)fileCard(x,gx[i],380,NAMES[i],{a:fin(u,.2+i*.12,.55),prog:1},420,300);
  for(const X of [660,1260]){const a=fin(u,.9,.6);x.save();x.globalAlpha*=a;x.fillStyle=TEAL;x.fillRect(X-5,360,10,340);x.restore()}}
 if(sh==17){
  const drain=1-.78*ease(seg(u,.3,2.1)),bl=360,bw=1200,bt=600,bh=84;
  txt(x,'QUOTA',bl,bt-48,44,CREAM,'left','900');
  rr(x,bl,bt,bw,bh,20,'#241A3C',INKC,5);
  x.save();x.beginPath();x.roundRect(bl,bt,bw,bh,20);x.clip();x.fillStyle=mixc(RED,AMB,drain*1.15);x.fillRect(bl,bt,bw*drain,bh);x.fillStyle='rgba(255,255,255,.25)';x.fillRect(bl,bt,bw*drain,8);x.restore();
  for(let i=0;i<4;i++){const cx=bl+130+i*313,gl=.6+.4*Math.sin(t*6+i);const g=x.createRadialGradient(cx,400,10,cx,400,190);g.addColorStop(0,`rgba(45,178,174,${.55*gl})`);g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(cx-200,200,400,400);
   x.save();x.translate(cx,400);x.scale(.8,.8);robotHead(x,{blink:blinkAt(t+i*.4,BL),smile:22});x.restore()}
  tagPill(x,1500,bt-48,'PREVIEW',AMB,32,fin(u,.3,.5),'#1B1430')}
 comp([['board',0]])}

// ---------- side by side + WHAT WE LEARNED (shot 18) ----------
function miniStage(x,l,tp,k,now,t){x.save();x.translate(l,tp);x.scale(k,k);x.translate(-120,-130);
 for(let i=0;i<3;i++)fileCard(x,CX[i],CT,NAMES[i],{a:1,prog:1,lit:now?0:1,tick:now?1:0});
 if(now){for(let i=0;i<3;i++)robot(x,CX[i],RB,RS,t,{a:1,type:1,ph:i*1.3});robot(x,VX,RB,RS,t,{a:1,type:0,ph:2.6,tick:1,smile:22})}
 else robot(x,CX[2],RB,RS,t,{a:1,type:1,ph:.4});
 x.restore()}
function drawLearn(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(18),a=fin(t,T+.05,.55),b=fin(t,T+.35,.55);
 x.save();enter(x,510,590,a,.94);rr(x,90,290,840,600,30,'#2A1F42',AMB,6);x.restore();
 x.save();enter(x,1410,590,b,.94);rr(x,990,290,840,600,30,'#2A1F42',TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,300,345,200,56,AMB);txt(x,'BEFORE',300,348,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1200,345,150,56,TEAL);txt(x,'NOW',1200,348,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=a;miniStage(x,125,470,.38,false,t);x.restore();
 x.save();x.globalAlpha=b;miniStage(x,1025,470,.38,true,t);x.restore();
 meterBox(x,690,370,.6,3,AMB,a);meterBox(x,1590,370,.6,1,TEAL,b);
 {const S='WHAT WE LEARNED',fs=84,w=impW(x,S,fs)+120,c=fin(t,T+.05,.6);if(c>0){x.save();x.translate(960,178);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-60,w,120,40,'#2A1F42',AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}}
 comp([['board',0]])}

// ---------- shot 19: three agents take them at once ----------
function drawAtOnce(t,sh,cam){const x=layer('board',cam);bgDusk(x,.3,960,560);const u=t-ST(sh);
 const G=[560,960,1360];
 for(let i=0;i<3;i++)fileCard(x,G[i],640,NAMES[i],{a:1,prog:clamp(.1+(t-ST(19))*.2+.4),typed:1});
 for(let i=0;i<3;i++)robot(x,G[i],565,RS,t,{a:1,type:1,ph:i*1.3});
 comp([['board',0]])}

// ---------- shot 20: the takeaway card ----------
function drawTake(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,960,540);const u=t-ST(sh),a=fin(u,.05,.6);
 const S1='3 FILES, 3 AGENTS, AT ONCE',S2='USUALLY, A VERIFIER TESTS FIRST',S3='WHEN THE TASK SPLITS · PREVIEW';
 const f1=Math.min(130,130*1500/impW(x,S1,130)),f2=Math.min(130,130*1500/impW(x,S2,130));
 const w=Math.max(impW(x,S1,f1),impW(x,S2,f2))+160,h=480,cy=520;
 x.save();enter(x,960,cy,a,.9);rr(x,960-w/2,cy-h/2,w,h,40,'rgba(27,20,48,.95)',AMB,7);
 imp(x,S1,960,cy-110,f1,CREAM);imp(x,S2,960,cy+30,f2,AMB);
 const fs3=40,w3=txt_w(x,S3,fs3)+70;pill(x,960,cy+150,w3,66,'#2A1F42');txt(x,S3,960,cy+152,fs3,TEAL,'center','900');
 x.restore();
 comp([['board',0]])}

// ---------- shot 21: the mascot, Subscribe and the comment button ----------
function drawSub(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p=mascotPose(t,{x:620,y:760,s:1.85,breath:t*2.2,look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05});
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);mascotHat(x,p);
 const T0=ST(21)+.1,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,430);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 {const S='COMMENT: WHAT NEXT?',fs=50,w=txt_w(x,S,fs,'900')+110,h=150,C0=ST(21)+1.7,cc=fin(t,C0,.55),pu=1+.035*Math.sin((t-C0)*7);
  if(cc>0){x.save();x.translate(1430,700);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
   x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w/2,-h/2,w,h,h/2);x.fill();x.stroke();
   x.beginPath();x.moveTo(-w/2+90,h/2-4);x.lineTo(-w/2+30,h/2+52);x.lineTo(-w/2+160,h/2-4);x.closePath();x.fill();x.stroke();x.fillRect(-w/2+98,h/2-12,54,14);
   txt(x,S,0,4,fs,'#1B1430','center','900');x.restore()}}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size){const v=fin(t,a,.5)*(b?1-fin(t,b,.3):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(s).width+size*2.2;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);pill(ctx,X,y,w,size*2.1,'rgba(27,20,48,.9)',v);txt(ctx,s,X,y+2,size,col,'center','800',v);ctx.restore()}
function meterOverlay(t,sh){if(!((sh>=2&&sh<=4)||(sh>=6&&sh<=15)))return;const a=sh==2?fin(t,ST(2)+.05,.55):1;meterBox(ctx,1560,150,1,meterV(t),meterCol(t),a)}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const tw=x.measureText('Antigravity Swarm').width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,'Antigravity Swarm',58,54,32,AMB,'left','800');txt(x,' ·',58+tw,54,32,CREAM,'left','800');pill(x,58+tw+dw+50,52,78,42,RED);txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}
function tab(t,a,b,lab,col){const v=fin(t,a,.5)*(1-fin(t,b,.3));if(v<=0)return;const x=ctx;x.save();x.font='900 34px Arial';const w=x.measureText(lab).width+54;x.restore();x.save();x.translate(32+w/2,128);x.scale(.9+.1*v,.9+.1*v);x.translate(-32-w/2,-128);pill(x,32+w/2,128,w,56,col,v);txt(x,lab,32+w/2,130,34,'#1B1430','center','900',v);x.restore()}
function sticker(x){x.font='104px Impact, "Arial Black", sans-serif';const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+38,6)}
// ---------- shot 0: the title card. The topic is on screen from frame 0, in the thumbnail's style ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,620,60,W/2,620,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`;
 x.font=font(100);const sz=Math.min(300,100*1500/x.measureText('ANTIGRAVITY').width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 put('LEARN',W/2,175,sz*.3,CREAM);put('ANTIGRAVITY',W/2,175+sz*.92,sz,AMB);put('SWARM',W/2,175+sz*1.85,sz,AMB);
 x.save();x.translate(W/2,175+sz*1.85+130*k);x.rotate(-.035);x.scale(k*.9,k*.9);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LY=985;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(6)+.05,out(9),'BEFORE',AMB);tab(t,ST(9)+.05,out(16),'NOW',TEAL);
 card(t,ST(4)+.9,out(5),760,LY,'USUALLY: A VERIFIER',TEAL,44);
 card(t,ST(5)+.3,out(6),960,LY,'3 FILES · 1 TASK',CREAM,48);
 card(t,ST(7)+.3,out(8),760,LY,'ONE AT A TIME',AMB,44);
 card(t,ST(8)+1.5,out(9),760,LY,'3 WAITS',AMB,48);
 card(t,ST(9)+.3,out(10),760,LY,'PREVIEW',TEAL,44);
 card(t,ST(12)+.3,out(13),760,LY,'USUALLY · RUNS THE TESTS',TEAL,44);
 card(t,ST(16)+.9,out(17),960,LY-20,'WORKS BEST WHEN THE TASK SPLITS CLEANLY',CREAM,46);
 card(t,ST(17)+1.2,out(18),960,LY-20,'USES QUOTA MUCH FASTER',AMB,52);
 card(t,ST(18)+1.0,out(19),960,LY-10,'SAME 3 FILES',CREAM,52);
 card(t,ST(19)+.2,out(20),960,LY-10,'WHEN THE TASK SPLITS',TEAL,52)}

// ---------- cameras: a slow push about the centre of the board ----------
const E=u=>ease(u),push=(a=1,b=1.05)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:21},()=>push(1,1.06)));
CAM[1]=u=>({x:864,y:743,z:lerp(1.15,1.2,E(u)),b:[0,0,0]});CAM[2]=u=>({x:864,y:743,z:lerp(1.17,1.22,E(u)),b:[0,0,0]});CAM[5]=push(1,1.07);CAM[9]=push(1,1.05);CAM[16]=push(1,1.07);CAM[18]=push(1,1.05);CAM[20]=push(1,1.06);CAM[21]=push(1,1.05);
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;
  if(!s)drawTitle(o);else{
   if(s<=4)drawHook(o,s,cam);else if(s==5)drawDesk(o,s,cam);else if(s<=8)drawBefore(o,s,cam);else if(s==9)drawChat(o,s,cam);else if(s==10)drawChat(o,s,cam)
   else if(s<=15)drawNow(o,s,cam);else if(s<=17)drawCatch(o,s,cam);else if(s==18)drawLearn(o,cam);else if(s==19)drawAtOnce(o,s,cam);else if(s==20)drawTake(o,s,cam);else drawSub(o,s,cam);
   overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, ticks on ticks ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(const t of [ST(1)+.05,ST(1)+.27,ST(1)+.49,ST(2)+.05,ST(3)+.1,ST(3)+.28,ST(3)+.46,ST(4)+.0,ST(4)+.9,ST(4)+1.4,ST(4)+1.9,ST(5)+.3,ST(5)+.1,ST(5)+.25,ST(5)+.4,ST(7)+.3,ST(7)+.8,ST(7)+1.6,ST(8)+.9,ST(8)+1.5,ST(9)+.3,ST(10)+.5,ST(10)+.7,ST(11)+.05,ST(11)+.25,ST(11)+.45,ST(12)+.0,ST(12)+.3,ST(12)+1.2,ST(12)+1.75,ST(13)+.1,ST(13)+1.9,ST(14)+.1,ST(14)+.5,ST(15)+.1,ST(15)+.9,ST(16)+.2,ST(16)+.9,ST(17)+.3,ST(17)+1.2,ST(18)+.05,ST(18)+.35,ST(18)+1.0,ST(19)+.2,ST(20)+.05,ST(21)+.1,ST(21)+1.7])say(t,'tick');
for(const t of [ST(3)+.1,ST(7)+.1,ST(7)+1.05,ST(8)+.15,ST(11)+.5,ST(13)+.15,ST(10)+.05,ST(18)+.05])say(t,'slide');
say(ST(8)+1.9,'tock');say(ST(21)+.1,'stamp');say(ST(7)+1.3,'stamp');say(ST(8)+1.45,'stamp');
