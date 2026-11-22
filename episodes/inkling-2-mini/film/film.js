// Episode: Inkling 2 Mini, told through one hard exam question. You (the mascot, in an amber mortarboard, a stopwatch in hand) examine two robots with
// screen heads. The ordinary model (grey-blue screen) writes its working out on a long scroll and you wait. Inkling 2 Mini (teal screen, same shape, same
// head size) loops its middle two of four blocks (x1 x2 x3) in its head and hands in a short note.
// 60 s, 29 shots (beats.md "Shots", numbered 0-28). Voice from tts.py (vo.wav laid in at .3 s): film time = voice time + .3. Every time below is FILM seconds.
// Places on one clock: T title card, E the exam hall (one world), D a robot's screen head big, K flat cards, G the token bars, L the laptop, B the board.
// Helpers follow episodes/chatgpt-wallet/film/film.js.
// Rules learned the hard way: no setLineDash; state changes sit on cut frames or fade; every stroke setting sits inside save/restore; no // inside a long line.
let t_g=0;
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const bo=u=>{u=clamp(u);return 1+2.70158*Math.pow(u-1,3)+1.70158*Math.pow(u-1,2)}; /* back-out: a pop with a small overshoot */
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function check(x,X,Y,sz,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(X-.5*sz,Y);x.lineTo(X-.12*sz,Y+.42*sz);x.lineTo(X+.55*sz,Y-.45*sz);
 x.strokeStyle='#120A1C';x.lineWidth=sz*.34;x.stroke();x.strokeStyle='#2DB2AE';x.lineWidth=sz*.2;x.stroke();x.restore()}
function cross(x,X,Y,sz,col='#E4493F',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.lineCap='round';x.strokeStyle=col;x.lineWidth=sz*.16;x.beginPath();x.moveTo(X-sz/2,Y-sz/2);x.lineTo(X+sz/2,Y+sz/2);x.moveTo(X+sz/2,Y-sz/2);x.lineTo(X-sz/2,Y+sz/2);x.stroke();x.restore()}
function loopArrow(x,X,Y,r,a0,col,lw,len=4.5,edge='#0E3A3F'){x.save();x.lineCap='round';x.lineJoin='round';const e=a0+len,ex=X+Math.cos(e)*r,ey=Y+Math.sin(e)*r,tx=-Math.sin(e),ty=Math.cos(e),h=lw*2.2;
 for(const [c,w] of [[edge,lw+4],[col,lw]]){x.strokeStyle=c;x.lineWidth=w;x.beginPath();x.arc(X,Y,r,a0,a0+len);x.stroke()}
 x.fillStyle=col;x.strokeStyle=edge;x.lineWidth=3;x.beginPath();x.moveTo(ex+tx*h*1.1,ey+ty*h*1.1);x.lineTo(ex+Math.cos(e)*h*.8,ey+Math.sin(e)*h*.8);x.lineTo(ex-Math.cos(e)*h*.8,ey-Math.sin(e)*h*.8);x.closePath();x.fill();x.stroke();x.restore()}

/* THE CLOCK: cut times of the 29 shots, from beats.md "Shots" (film seconds). Shot 0 is the title card. ST(i) = the second shot i starts. */
const TS=[0,1.35,3.03,5.19,7.28,8.60,11.20,12.88,14.13,16.37,18.50,19.55,20.64,22.26,24.14,25.84,28.96,31.68,33.13,34.55,36.61,39.43,40.94,43.44,46.33,49.53,51.70,53.63,56.56];
const CF=TS.map(t=>Math.round(t*30)).concat([1800]);
const shotOf=t=>{const f=Math.round(t*30+1e-6);let s=0;for(let i=0;i<CF.length-1;i++)if(f>=CF[i])s=i;return s};
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.29; /* out(i): a card fades out from here, so it is gone .04 s before the cut at shot i */
const PLACE='T'+'EE'+'D'+'EEEE'+'D'+'EEEEEE'+'D'+'K'+'D'+'EE'+'G'+'K'+'L'+'BB'+'E'+'K'+'EE'; /* one letter per shot 0-28 */

// ---------- the mascot's costume: an amber mortarboard (exam cap) with an off-white tassel, drawn after actor() in the rig's own transforms ----------
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
function mortar(x,p){x.save();headT(x,p);
 x.fillStyle='#D9962A';x.beginPath();x.moveTo(-82,-70);x.quadraticCurveTo(-92,-112,0,-116);x.quadraticCurveTo(92,-112,82,-70);x.quadraticCurveTo(0,-56,-82,-70);x.fill();
 x.fillStyle='#FFC66E';x.beginPath();x.moveTo(-156,-106);x.lineTo(0,-146);x.lineTo(156,-106);x.lineTo(0,-72);x.closePath();x.fill();x.strokeStyle='#8A5A14';x.lineWidth=6;x.lineJoin='round';x.stroke();
 x.fillStyle='#8A5A14';x.beginPath();x.arc(0,-108,9,0,7);x.fill();
 x.strokeStyle='#FFF2D6';x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(0,-108);x.quadraticCurveTo(100,-100,128,-100);x.lineTo(130,-52);x.stroke();
 x.fillStyle='#FFF2D6';x.beginPath();x.roundRect(120,-56,20,44,6);x.fill();x.strokeStyle='#8A5A14';x.lineWidth=3;x.stroke();x.restore()}
const hero=(x,id,p,cam)=>{actor(x,id,HERO,p,cam);mortar(x,p);return p};

// ---------- the robots: a stick body with a screen for a head (grey-blue = the ordinary model, teal frame = Inkling 2 Mini); the screen shows a 4-block layer stack ----------
const BOT={skin:'#566C90',cloth:'#7C93B5',hood:'#566C90',hand:'#B4C4DA',face:'#16243C',leg:'#44546F',shoe:'#17141F',finger:'#16243C'};
const BOT2=Object.assign({},BOT,{skin:'#187E86'});
const BLK=i=>-62+(3-i)*36; /* top y of block i (0 = bottom), in the screen's local box */
function headFrame(x,kind){const fr=kind=='new'?'#2DB2AE':'#8CA0BF',ed=kind=='new'?'#187E86':'#566C90';
 x.fillStyle=ed;x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();rr(x,-98,-84,196,180,24,fr,ed,5);rr(x,-84,-70,168,152,14,'#16243C')}
/* o.lit = 4 alphas (the running light), o.glow 0..1, o.count 0..3, o.labels, o.ring (the loop arrow and counter), o.t = time for the spin */
function stackDraw(x,kind,o){const nw=kind=='new';
 for(let i=0;i<4;i++){const y=BLK(i),mid=nw&&(i==1||i==2),col=nw?(mid?'#2DB2AE':'#3E6F78'):'#6F87AA';
  x.fillStyle=col;x.beginPath();x.roundRect(-72,y,84,28,6);x.fill();
  if(mid&&o.glow>0){x.save();x.globalAlpha=.9*o.glow;x.strokeStyle='#BFF2EE';x.lineWidth=3;x.beginPath();x.roundRect(-72,y,84,28,6);x.stroke();x.restore()}
  const l=(o.lit&&o.lit[i])||0;if(l>0){x.save();x.globalAlpha=.88*l;x.fillStyle='#F8E9CC';x.beginPath();x.roundRect(-72,y,84,28,6);x.fill();x.restore()}
  if(o.labels)txt(x,o.labels[i],-30,y+15,17,i==1||i==2?'#0B3A40':'#0B1830','center','900')}
 if(nw&&o.ring&&o.glow>0){x.save();x.globalAlpha=o.glow;loopArrow(x,46,8,19,(o.t||0)*3,'#BFF2EE',5,4.4,'#0E3A3F');if(o.count>0)txt(x,'×'+o.count,46,8,17,'#F8E9CC','center','900');x.restore()}}
function botHead(x,p,kind,o){x.save();headT(x,p);headFrame(x,kind);stackDraw(x,kind,o);x.restore()}
function bigHead(x,cx,cy,sc,kind,o){x.save();x.translate(cx,cy);x.scale(sc,sc);
 let g=x.createRadialGradient(0,0,60,0,0,260);g.addColorStop(0,kind=='new'?'rgba(45,178,174,.35)':'rgba(140,160,191,.25)');g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(-300,-260,600,520);
 headFrame(x,kind);stackDraw(x,kind,o);x.restore()}
/* which block lights up: the old robot runs once from the bottom; the new one runs up, loops its middle two blocks at the times tc, then goes on to the top */
function oldLit(t,t0,dt=.22){const i=Math.floor((t-t0)/dt),l=[0,0,0,0];if(i>=0&&i<4)l[i]=1;return l}
function newLit(t,t0,tc,d){const l=[0,0,0,0];let n=0;for(const c of tc)if(t>=c)n++;
 if(t>=t0&&t<tc[0])l[0]=1;for(const c of tc){if(t>=c&&t<c+d)l[1]=1;if(t>=c+d&&t<c+2*d)l[2]=1}if(t>=tc[2]+2*d)l[3]=1;return {lit:l,count:n}}

// ---------- props: stopwatch, pencil, note, magnifier, desk, paper scroll, the hall ----------
function stopwatch(x,X,Y,s,ang){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#8A5A14';x.fillRect(-9,-52,18,16);x.fillRect(22,-44,12,12);
 x.fillStyle='#FFC66E';x.beginPath();x.arc(0,0,38,0,7);x.fill();x.strokeStyle='#8A5A14';x.lineWidth=5;x.stroke();x.fillStyle='#FFF6E6';x.beginPath();x.arc(0,0,29,0,7);x.fill();
 x.strokeStyle='#8A5A14';x.lineWidth=3;for(let i=0;i<12;i++){const a=i*Math.PI/6;x.beginPath();x.moveTo(Math.cos(a)*24,Math.sin(a)*24);x.lineTo(Math.cos(a)*28,Math.sin(a)*28);x.stroke()}
 x.strokeStyle='#E4493F';x.lineWidth=4;x.lineCap='round';x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(ang)*24,-Math.cos(ang)*24);x.stroke();x.restore()}
function pencil(x,X,Y,s,rot){x.save();x.translate(X,Y);x.rotate(rot);x.scale(s,s);x.fillStyle='#FFC66E';x.fillRect(0,-5,70,10);x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(0,-5);x.lineTo(-16,0);x.lineTo(0,5);x.fill();x.fillStyle='#16243C';x.beginPath();x.moveTo(-12,-2);x.lineTo(-16,0);x.lineTo(-12,2);x.fill();x.fillStyle='#E4493F';x.fillRect(70,-5,10,10);x.restore()}
function scribLines(x,X0,X1,Y,seed,h=4,col='#8A7AA8'){let X=X0,k=0;x.fillStyle=col;while(X<X1-8){const len=14+hash(seed,k)*46;x.fillRect(X,Y,Math.min(len,X1-X),h);X+=len+9;k++}}
const FL=1000,DA=700,DB=2700,DC=3450,MS=.8,RY=630,BX=1300; /* DA, DB, DC the desks; BX the board and where you stand to face us */
function desk(x,DX){x.fillStyle='#4A2838';x.fillRect(DX-362,905,34,95);x.fillRect(DX+328,905,34,95);x.fillStyle='#7A4038';x.fillRect(DX-346,895,692,92);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(DX-300,920,600,52);
 x.fillStyle='#B0705A';x.beginPath();x.moveTo(DX-340,835);x.lineTo(DX+340,835);x.lineTo(DX+385,895);x.lineTo(DX-385,895);x.closePath();x.fill();x.fillStyle='rgba(255,226,190,.4)';x.fillRect(DX-385,893,770,5)}
function scrollDraw(x,DX,U,F){const A=clamp(U/.4),B=clamp((U-.4)/.2),C=clamp((U-.6)/.4),xr=DX+250,xl=lerp(xr,DX-380,A),PAP='#F4EBDD',EDG='#CDBFA6';
 if(A>0){x.fillStyle=PAP;x.beginPath();x.moveTo(xr,846);x.lineTo(xl,846);x.lineTo(xl-8,888);x.lineTo(xr-8,888);x.closePath();x.fill();
  const xb=lerp(xr,xl,F);if(xb<xr-14){scribLines(x,xb+4,xr-14,857,1);scribLines(x,xb+4,xr-14,874,2)}
  x.fillStyle=EDG;x.beginPath();x.ellipse(xr-4,867,16,24,0,0,7);x.fill();x.fillStyle=PAP;x.beginPath();x.ellipse(xr-8,867,12,21,0,0,7);x.fill()}
 if(B>0){const y1=lerp(888,992,B);x.fillStyle=PAP;x.fillRect(DX-420,884,58,y1-884);x.fillStyle=EDG;x.fillRect(DX-362,884,5,y1-884);scribLines(x,DX-412,DX-370,905,3);scribLines(x,DX-412,DX-370,926,4);scribLines(x,DX-412,DX-370,947,5);if(B>.8)scribLines(x,DX-412,DX-370,968,6)}
 if(C>0){const xe=DX-420-700*C;x.fillStyle=PAP;x.fillRect(xe,962,700*C+4,38);x.fillStyle=EDG;x.fillRect(xe,997,700*C+4,4);scribLines(x,xe+10,DX-420,972,7);scribLines(x,xe+10,DX-420,986,8);
  x.fillStyle=EDG;x.beginPath();x.ellipse(xe,981,15,20,0,0,7);x.fill();x.fillStyle=PAP;x.beginPath();x.ellipse(xe+3,981,11,17,0,0,7);x.fill()}}
function noteDraw(x,DX,n){x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(DX+30,844);x.lineTo(DX+230,844);x.lineTo(DX+240,888);x.lineTo(DX+20,888);x.closePath();x.fill();
 for(let i=0;i<3;i++){const v=clamp(n-i);if(v>0)scribLines(x,DX+44,DX+44+170*v,854+i*13,10+i,4)}}
function armOver(x,p,ch,k){const sx=(k=='l'?-1:1)*(TW/2-34),sy=34+Math.sin(p.breath||0)*3,S=[p.x+sx*p.s,p.y+sy*p.s],E=[p.x+p._e[k][0]*p.s,p.y+p._e[k][1]*p.s],Hh=h2w(p,k);
 limb(x,S,E,66*p.s,54*p.s,ch.hood);limb(x,E,Hh,54*p.s,44*p.s,ch.hood);limb(x,S,E,58*p.s,48*p.s,ch.cloth);limb(x,E,Hh,46*p.s,38*p.s,ch.cloth);
 x.fillStyle=ch.hand;x.beginPath();x.arc(Hh[0],Hh[1],19*p.s,0,7);x.fill();return Hh}
function magnifier(x,X,Y,hx,hy,r){x.save();x.strokeStyle='#8A5A14';x.lineWidth=14;x.lineCap='round';x.beginPath();x.moveTo(hx,hy);x.lineTo(X,Y);x.stroke();
 x.fillStyle='rgba(191,242,238,.28)';x.beginPath();x.arc(X,Y,r,0,7);x.fill();x.strokeStyle='#FFC66E';x.lineWidth=12;x.stroke();x.strokeStyle='#8A5A14';x.lineWidth=3;x.beginPath();x.arc(X,Y,r+6,0,7);x.stroke();
 x.fillStyle='rgba(255,255,255,.35)';x.beginPath();x.ellipse(X-r*.35,Y-r*.4,r*.28,r*.12,-.6,0,7);x.fill();x.restore()}

function hallBack(x,t,hideBoard){let g=x.createLinearGradient(0,-300,0,800);g.addColorStop(0,'#2A1C46');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-1600,-1200,6800,2000);
 g=x.createRadialGradient(1300,560,60,1300,560,1500);g.addColorStop(0,'rgba(255,196,130,.28)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-1600,-1200,6800,2400);
 for(const wx of [-350,3900]){x.fillStyle='#2A1838';x.fillRect(wx-12,196,274,396);g=x.createLinearGradient(0,208,0,584);g.addColorStop(0,'#5A4490');g.addColorStop(.6,'#C96BB0');g.addColorStop(1,'#FFC66E');x.fillStyle=g;x.fillRect(wx,208,250,372);x.fillStyle='#2A1838';x.fillRect(wx+120,208,10,372);x.fillRect(wx,370,250,10)}
 x.fillStyle='#3B2352';x.fillRect(-1600,790,6800,18);
 g=x.createLinearGradient(0,800,0,1500);g.addColorStop(0,'#6A4468');g.addColorStop(1,'#33204C');x.fillStyle=g;x.fillRect(-1600,806,6800,900);
 x.fillStyle='rgba(20,10,30,.22)';for(let i=-8;i<26;i++){x.beginPath();x.moveTo(i*260-200,812);x.lineTo(i*420-1200,1500);x.lineTo(i*420-1170,1500);x.lineTo(i*260-170,812);x.closePath();x.fill()}
 if(!hideBoard){rr(x,BX-290,112,580,300,10,'#22394A','#7A4A2E',12);x.fillStyle='#B0705A';x.fillRect(BX-290,408,580,16);imp(x,'Q1 · HARD',BX,262,132,'#FFC66E')} /* hidden where the camera crops it (shots 9-11) and behind the takeaway and the subscribe card (27-28) */
}

// ---------- the poses of the hall ----------
const BLINKS=[3.1,6.9,11.3,15.4,19.8,24.6,29.4,35.3,41.2,47.5,52.2,55.6];
const MAS_BLINKS=[3.2,7.7,12.4,16.1,22.8,24.9,36.1,38.9,45.3,50.9,53.9,58.6];
function botBase(DX,t){return {x:DX,y:RY,s:1,face:1,breath:t*2,noLegs:true,noFace:true,hands:{},showH:{}}}
function aMode(t){const sh=shotOf(t);return sh==1?'slow':sh==2||sh==9||sh==10?'fast':sh==6?'up':sh==11?'tired':'idle'}
function aPose(t){const p=botBase(DA,t),m=aMode(t),fast=m=='fast';
 if(m=='slow'||fast){const wx=DA+80+Math.sin(t*(fast?14:6))*26,wy=846+Math.abs(Math.sin(t*(fast?19:9)))*5;p.hands.r=w2l(p,[wx,wy])}
 if(m=='up'){const a=fin(t,ST(6)+.15,.45);const tg=w2l(p,[DA+120,720]);p.hands.r=[lerp(96,tg[0],a),lerp(220,tg[1],a)]}
 if(m=='tired'){p.hands.r=w2l(p,[DA+80,848])}
 return p}
const uA=t=>{const sh=shotOf(t);if(sh==1)return lerp(.18,.28,fin(t,ST(1),1.5));if(sh==2)return lerp(.28,.62,ease(seg(t,ST(2)+.1,ST(3))));if(sh>=5&&sh<=8)return .3;
 if(sh==9)return lerp(.3,.55,ease(seg(t,ST(9),ST(10))));if(sh==10)return lerp(.55,1,ease(seg(t,ST(10)+.1,ST(11)-.1)));return 1};
const fA=t=>shotOf(t)==9?ease(seg(t,ST(9)+.1,ST(10)-.2)):1;
function bMode(t){const sh=shotOf(t);return (sh==18||sh==25)?'note':sh==27?'give':'idle'}
function bPose(t){const p=botBase(DB,t),m=bMode(t);
 if(m=='note'){const wx=DB+90+Math.sin(t*7)*20,wy=846+Math.abs(Math.sin(t*10))*5,a=fin(t,ST(18)+.2,.3);const tg=w2l(p,[wx,wy]);p.hands.r=[lerp(96,tg[0],a),lerp(220,tg[1],a)]}
 if(m=='give'){const a=fin(t,ST(27)+.2,.4),tg=w2l(p,[DB-208,738+Math.sin(t*3)*3]);p.hands.l=[lerp(-96,tg[0],a),lerp(220,tg[1],a)]}
 return p}
const noteN=t=>{const sh=shotOf(t);if(sh<18)return 0;if(sh==18)return seg(t,ST(18)+.3,ST(18)+1.5)*3;return 3};
const botBVis=t=>{const sh=shotOf(t);return sh>=12?(sh==12?fin(t,ST(12)+.1,.4):1):0};
function masPose(t){const sh=shotOf(t);let X=BX,face=1,look=.1,lookY=0,mouth=.7,brow=.3,sad=0,tilt=0;const p={x:X,y:standY(FL,MS),s:MS,face:1,breath:t*2.2,blink:blinkAt(t,MAS_BLINKS),hands:{},showH:{},mouthW:26};
 if(sh==1||sh==11){p.x=1200;p.face=-1;p.look=-.8;p.lookY=.2;p.brow=.4;p.mouth=.3;
  const bob=sh==1?Math.abs(Math.sin(t*5.2))*8:0;p.hands.l=[-150,150-bob];p.showH.l=true;
  if(sh==11){p.hands.l=[-120+0,60];p.sad=.8;p.mouth=-.6;p.look=-.5;p.lookY=.5;p.tilt=-.05}}
 else if(sh==4){p.x=BX;p.look=.1;p.lookY=0;p.brow=.5;p.mouth=.95+Math.sin(t*9)*.05}
 else if(sh==5){p.x=BX;p.look=.1;p.mouth=.7;p.hands.l=[-150,150];p.showH.l=true}
 else if(sh==25){p.x=DB-400;p.look=.9;p.lookY=0;p.brow=.6;p.mouth=.2}
 else if(sh==27){p.x=DB-420;p.look=.8;p.mouth=.8;p.brow=.2;const a=fin(t,ST(27)+.4,.4);p.hands.r=[lerp(96,187,a),lerp(220,154,a)];p.showH.r=true;p.tilt=Math.max(0,Math.sin(seg(t,ST(27)+1.5,ST(27)+2.3)*Math.PI))*.1}
 else if(sh==28){p.x=BX;p.look=.1;p.mouth=.95;p.brow=.5;p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;p.hands.l=[-150,150];p.showH.l=true}
 else{p.x=sh<=10?1900:1700;p.look=.2}
 return p}
function drawHall(t,cam){const sh=shotOf(t);
 let x=layer('wall',cam);hallBack(x,t,sh>=27||(cam.y-540/cam.z>170));
 x=layer('act',cam);
 const pa=aPose(t);actor(x,'botA',BOT,pa,cam);botHead(x,pa,'old',{lit:oldLit(t,sh==8?14.4:99),t});
 desk(x,DA);scrollDraw(x,DA,uA(t),fA(t));
 {const k=armOver(x,pa,BOT,'r'),m=aMode(t);if(m=='slow'||m=='fast'||m=='tired')pencil(x,k[0]-4,k[1]-8,.7,-.9);if(m=='up')pencil(x,k[0]-4,k[1]-6,.7,-1.1)}
 desk(x,DB);
 const bv=botBVis(t);
 if(bv>0){const sp=layer('botb',cam),pb=bPose(t);actor(sp,'botB',BOT2,pb,cam);const tc=[6.24,6.53,6.88];botHead(sp,pb,'new',{lit:[0,0,0,0],glow:1,ring:true,count:sh==14?3:0,t});
  desk(sp,DB);noteDraw(sp,DB,noteN(t)*(sh==27?0:1));
  const k=armOver(sp,pb,BOT2,bMode(t)=='give'?'l':'r');if(bMode(t)=='note')pencil(sp,k[0]-4,k[1]-8,.7,-.9);
  if(sh==14){const v=fin(t,ST(14)+.25,.35);sp.save();sp.translate(DB-2300,0);sp.globalAlpha=v;sp.fillStyle='#F8E9CC';sp.beginPath();sp.arc(2440,452,12,0,7);sp.arc(2478,420,18,0,7);sp.fill();rr(sp,2470,270,290,200,70,'#F8E9CC','#187E86',6);
   loopArrow(sp,2615,370,56,t*3.2,'#2DB2AE',14,4.5,'#0E3A3F');sp.restore()}}
 const mp=masPose(t);hero(x,'hero',mp,cam);
 if(mp.showH.l){const h=h2w(mp,'l');const swing=sh==11?(t-ST(11))*(Math.PI*2/1.2):t*.6;stopwatch(x,h[0]-2,h[1]-8,sh==11?1.05:.85,swing);x.fillStyle=HERO.hand;x.beginPath();x.arc(h[0]+8,h[1]+8,17,0,7);x.fill()}
 if(sh==27){const a=fin(t,ST(27)+.2,.4),mv=ease(seg(t,ST(27)+.7,ST(27)+1.5));const nx=lerp(DB-202,DB-260,mv);x.save();x.translate(nx,730);x.rotate(.06);x.fillStyle='#F4EBDD';x.fillRect(-40,-52,80,104);scribLines(x,-30,30,-36,10);scribLines(x,-30,30,-20,11);scribLines(x,-30,30,-4,12);x.restore();
  x.fillStyle=HERO.hand;x.beginPath();x.arc(h2w(mp,'r')[0],h2w(mp,'r')[1],17,0,7);x.fill()}
 const list=[['wall',0],['act',0]];if(bv>0)list.push(['botb',0,bv]);
 if(sh==19){const v=fin(t,ST(19)+.15,.4),sp=layer('twin',cam);const pt=botBase(DC,t);pt.y=RY+(1-bo(seg(t,ST(19)+.15,ST(19)+.6)))*-40;actor(sp,'botC',BOT2,pt,cam);botHead(sp,pt,'new',{glow:1,ring:true,count:0,t});desk(sp,DC);noteDraw(sp,DC,3);
  rr(sp,DC-190,300,380,70,35,'#E4493F','#120A1C',4);txt(sp,'RESEARCH TWIN',DC,336,34,'#FFF6E6','center','900');list.push(['twin',0,v])}
 comp(list);
 if(sh>=27){ctx.save();ctx.fillStyle='rgba(255,196,120,.07)';ctx.fillRect(0,0,W,H);ctx.restore()}}

// ---------- flat places: D (a screen head big), K (cards), G (bars), L (laptop), B (the board) ----------
function bgDark(x,warm=.1){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1100,560,40,1100,560,900);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function drawD(t,cam){const sh=shotOf(t),x=layer('board',cam);bgDark(x);
 if(sh==3){const r=newLit(t,ST(3)+.2,[6.24,6.53,6.88],.12);bigHead(x,1000,560,3.3,'new',{lit:r.lit,glow:fin(t,ST(3)+.35,.4),ring:true,count:r.count,t})}
 if(sh==8){bigHead(x,1000,560,3.3,'old',{lit:oldLit(t,14.4),t});
  const v=fin(t,ST(8)+.25,.35);txt(x,'24',360,520,120,'#F8E9CC','center','900',v);txt(x,'LAYERS',360,610,44,'#C9B8E0','center','900',v);
  const u=ease(seg(t,15.55,16.3)),cy=lerp(300,170,u),cx=lerp(1000,1560,u);if(t>=15.55){x.save();x.globalAlpha=1-fin(t,16.15,.15);pill(x,cx,cy,250,70,'#FFC66E');txt(x,'1 TOKEN',cx,cy+2,36,'#1B1430','center','900');x.restore()}}
 if(sh==15){const tc=[26.85,27.46,27.79];const r=newLit(t,ST(15)+.3,tc,.15);bigHead(x,1180,560,3.2,'new',{lit:r.lit,glow:fin(t,ST(15)+.5,.4),ring:true,count:r.count,labels:['1-6','7-12','13-18','19-24'],t});
  const v=fin(t,ST(15)+.5,.35);x.save();x.globalAlpha=v;x.strokeStyle='#2DB2AE';x.lineWidth=12;x.lineCap='round';x.beginPath();x.moveTo(1180-114*3.2-34,560+(-26)*3.2);x.lineTo(1180-114*3.2-34,560+38*3.2);x.stroke();x.restore();
  txt(x,'MIDDLE',748,545,58,'#2DB2AE','right','900',v);txt(x,'12',748,625,90,'#2DB2AE','right','900',v)}
 if(sh==17){const v=fin(t,ST(17)+.2,.3);bigHead(x,640,570,2.3,'new',{glow:1,ring:true,count:3,t});
  const bx=1380,by=560,sc=3.4,w=196*sc,h=180*sc;x.save();x.globalAlpha=.9*v;x.fillStyle='#8A7AA8';
  const L=bx-w/2,T=by-84*sc+0,Rr=bx+w/2,Bt=T+h;for(let X=L;X<Rr;X+=44){x.fillRect(X,T-3,26,6);x.fillRect(X,Bt-3,26,6)}for(let Y=T;Y<Bt;Y+=44){x.fillRect(L-3,Y,6,26);x.fillRect(Rr-3,Y,6,26)}
  x.restore();cross(x,bx,by+30,300,'#E4493F',fin(t,ST(17)+.7,.25))}
 comp([['board',0]])}
function drawK(t,cam){const sh=shotOf(t),x=layer('board',cam);bgDark(x);
 if(sh==16){const a=fin(t,ST(16)+.2,.3),b=fin(t,ST(16)+1.0,.3);
  rr(x,170,300,560,520,34,'#2A1F42','#8CA0BF',6);x.save();x.globalAlpha=a;imp(x,'24',450,500,300,'#F8E9CC');txt(x,'LAYERS STORED',450,720,50,'#C9B8E0','center','900');x.restore();
  rr(x,1190,300,560,520,34,'#2A1F42','#2DB2AE',6);const n=Math.round(48*ease(seg(t,29.4,30.7)));x.save();x.globalAlpha=b;imp(x,String(n),1470,500,300,'#2DB2AE');txt(x,'LAYER STEPS',1470,720,50,'#BFF2EE','center','900');x.restore();
  txt(x,'6 + 12 × 3 + 6',1470,860,56,'#F8E9CC','center','900',fin(t,30.2,.3));
  x.save();x.globalAlpha=b;x.strokeStyle='#F8E9CC';x.lineWidth=12;x.lineCap='round';x.beginPath();x.moveTo(790,560);x.lineTo(1100,560);x.stroke();x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(1130,560);x.lineTo(1086,526);x.lineTo(1086,594);x.fill();x.restore()}
 if(sh==21){const a=fin(t,ST(21)+.05,.3);x.save();x.globalAlpha=a;x.translate(900,500);x.scale(.94+.06*a,.94+.06*a);rr(x,-520,-190,1040,380,40,'#2A1F42','#2DB2AE',8);imp(x,'OPEN WEIGHTS',0,-70,124,'#F8E9CC');imp(x,'APACHE 2.0',0,70,124,'#FFC66E');x.restore();
  const d=fin(t,ST(21)+.6,.3),by=Math.sin(t*5)*14;x.save();x.globalAlpha=d;x.translate(1620,500+by);x.fillStyle='#2DB2AE';x.strokeStyle='#120A1C';x.lineWidth=6;x.beginPath();x.moveTo(-50,-120);x.lineTo(50,-120);x.lineTo(50,-10);x.lineTo(110,-10);x.lineTo(0,110);x.lineTo(-110,-10);x.lineTo(-50,-10);x.closePath();x.fill();x.stroke();x.restore()}
 if(sh==26){const a=fin(t,ST(26)+.1,.3);x.save();x.globalAlpha=a;x.translate(960,540);
  x.fillStyle='#8A5A14';x.beginPath();x.roundRect(-190,-250,390,500,16);x.fill();x.fillStyle='#F4EBDD';x.fillRect(190,-236,40,472);x.fillStyle='#CDBFA6';for(let i=0;i<6;i++)x.fillRect(190,-236+i*80,40,4);
  rr(x,-190,-250,380,500,16,'#C9922A','#8A5A14',8);imp(x,'FACTS',0,-10,120,'#FFF6E6');x.fillStyle='#8A5A14';x.fillRect(-150,70,300,10);x.fillRect(-120,100,240,10);
  loopArrow(x,20,0,360,t*1.6,'#2DB2AE',20,4.2,'#0E3A3F');x.restore();
  x.save();x.globalAlpha=fin(t,ST(26)+.6,.3);x.strokeStyle='#F8E9CC';x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(1230,300);x.lineTo(1230,780);x.stroke();for(const yy of [300,780]){x.beginPath();x.moveTo(1210,yy);x.lineTo(1250,yy);x.stroke()}x.restore();
  txt(x,'SAME',1390,520,54,'#F8E9CC','left','900',fin(t,ST(26)+.6,.3));txt(x,'THICKNESS',1390,584,54,'#F8E9CC','left','900',fin(t,ST(26)+.6,.3))}
 comp([['board',0]])}
function drawG(t,cam){const x=layer('board',cam);bgDark(x);
 txt(x,'MAKER\'S TEST · GPQA DIAMOND',960,236,46,'#F8E9CC','center','900');
 const g1=ease(seg(t,ST(20)+.04,ST(20)+.8)),g2=ease(seg(t,36.9,37.7)),x0=300,full=1100,sh2=full*1731/3703;
 txt(x,'1 PASS',x0,370,44,'#C9B8E0','left','900',fin(t,ST(20)+.02,.3));rr(x,x0,400,Math.max(1,full*g1),120,18,'#8CA0BF');txt(x,'3,703 tokens',x0+28,462,50,'#16243C','left','900',g1);
 txt(x,'3 PASSES',x0,590,44,'#BFF2EE','left','900',fin(t,36.8,.3));rr(x,x0,620,Math.max(1,sh2*g2),120,18,'#2DB2AE');txt(x,'1,731',x0+28,682,50,'#0B3A40','left','900',g2);
 comp([['board',0]])}
function drawL(t,cam){const x=layer('board',cam);bgDark(x);
 x.fillStyle='#7A4038';x.fillRect(-100,800,W+200,400);x.fillStyle='#B0705A';x.fillRect(-100,790,W+200,26);
 rr(x,560,230,800,520,26,'#1B1430','#8CA0BF',8);let g=x.createLinearGradient(0,250,0,730);g.addColorStop(0,'#1F4C58');g.addColorStop(1,'#16243C');x.save();x.beginPath();x.roundRect(584,254,752,472,10);x.clip();x.fillStyle=g;x.fillRect(584,254,752,472);
 const u=ease(seg(t,ST(22)+.5,ST(22)+1.5));x.restore();
 x.fillStyle='#3A3350';x.beginPath();x.roundRect(480,750,960,56,[0,0,26,26]);x.fill();
 const fv=fin(t,ST(22)+.3,.3);txt(x,'MAC · 32 GB',960,780,40,'#F8E9CC','center','900',fv);
 const bx=lerp(240,960,u),by=lerp(640,470,u),sc=lerp(1,.8,u),al=1-seg(t,ST(22)+1.6,ST(22)+2.0);
 if(u<1||al>0){x.save();x.globalAlpha=Math.max(0,al)*fin(t,ST(22)+.3,.2);x.translate(bx,by);x.scale(sc,sc);rr(x,-230,-90,460,180,24,'#2A1F42','#FFC66E',8);imp(x,'≈20 GB',0,6,92,'#FFC66E');x.restore()}
 x.save();x.globalAlpha=fin(t,ST(22)+1.7,.3);check(x,960,470,120);x.restore();
 comp([['board',0]])}

// ---------- board: BEFORE (left) and NOW (right) side by side, in one frame ----------
function iHeadOld(x,X,Y,s,t){x.save();x.translate(X,Y);x.scale(s,s);headFrame(x,'old');stackDraw(x,'old',{lit:[.5,.5,.5,.5],t});x.restore()}
function iHeadNew(x,X,Y,s,t,lit){x.save();x.translate(X,Y);x.scale(s,s);headFrame(x,'new');stackDraw(x,'new',{glow:1,ring:true,count:3,t,lit:lit?[0,.7,.7,0]:[0,0,0,0]});x.restore()}
function iScroll(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#F4EBDD';x.fillRect(-52,-100,104,190);x.fillStyle='#CDBFA6';x.beginPath();x.ellipse(0,92,52,16,0,0,7);x.fill();for(let i=0;i<9;i++)scribLines(x,-44,44,-88+i*20,20+i,5);x.restore()}
function iNote(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#F4EBDD';x.fillRect(-52,-44,104,88);for(let i=0;i<3;i++)scribLines(x,-42,42,-28+i*26,30+i,5);x.restore()}
function nodeBox(x,X,Y,w,h,line,col,lit){x.save();x.translate(X,Y);rr(x,-w/2,-h/2,w,h,18,'#2A1F42',lit>0?'#2DB2AE':col,lit>0?8:4);
 if(lit>0){x.globalAlpha=lit*.28;rr(x,-w/2,-h/2,w,h,18,'#2DB2AE');x.globalAlpha=1}txt(x,line,0,h/2-34,34,'#F8E9CC','center','800');x.restore()}
function bArrow(x,a,b,Y,col,p){if(p<=0)return;x.save();x.globalAlpha*=p;x.strokeStyle=col;x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(a,Y);x.lineTo(b-8,Y);x.stroke();x.fillStyle=col;x.beginPath();x.moveTo(b,Y);x.lineTo(b-22,Y-14);x.lineTo(b-22,Y+14);x.fill();x.restore()}
function drawBoard(t,cam){const sh=shotOf(t),x=layer('board',cam);bgDark(x);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=140;y<960;y+=28)x.fillRect(958,y,4,14); /* dashes as rects: setLineDash is not deterministic in headless Chromium */
 const I=fin(t,ST(23)+.1,.35);
 pill(x,195,200,176,54,'#FFC66E',I);txt(x,'BEFORE',195,202,34,'#1B1430','center','900',I);txt(x,'ordinary model',305,204,34,'#C9B8E0','left','700',I);
 pill(x,1020,200,120,54,'#2DB2AE',I);txt(x,'NOW',1020,202,34,'#1B1430','center','900',I);txt(x,'Inkling 2 Mini',1100,204,38,'#FFC66E','left','800',I);
 const Y=500,w=330,h=330,L=[250,670],R=[1210,1630],loopLit=sh==23?fin(t,45.0,.2)*(1-fin(t,45.9,.3)):0;
 nodeBox(x,L[0],Y,w,h,'1 PASS','#6E5D8E',0);iHeadOld(x,L[0],Y-30,1.15,t);
 nodeBox(x,L[1],Y,w,h,'LONG SCROLL','#6E5D8E',0);iScroll(x,L[1],Y-28,1.05);
 nodeBox(x,R[0],Y,w,h,'MIDDLE LOOPS ×3','#FFC66E',loopLit);iHeadNew(x,R[0],Y-30,1.15,t,loopLit>0);
 nodeBox(x,R[1],Y,w,h,'SHORT NOTE','#FFC66E',0);iNote(x,R[1],Y-28,1.25);
 bArrow(x,L[0]+w/2+4,L[1]-w/2-4,Y,'#C9B8E0',1);bArrow(x,R[0]+w/2+4,R[1]-w/2-4,Y,'#FFC66E',1);
 if(sh==24){const a=fin(t,ST(24)+.2,.35);x.save();x.globalAlpha=a;rr(x,330,780,1260,120,60,'rgba(27,20,48,.9)','#2DB2AE',5);txt(x,'24 vs 48 LAYER STEPS PER TOKEN',960,842,52,'#F8E9CC','center','900');x.restore()}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;w=ctx.measureText(s).width+size*2.2;ctx.restore();pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function tag(){/* the brand's corner tag: the topic and the 60 s promise, on every frame, drawn after the fade-out too */
 {const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const tw=x.measureText('Inkling 2 Mini').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'Inkling 2 Mini',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800');x.restore()}}
function tab(t,a,b,lab,col){const v=fin(t,a,.2)*(1-fin(t,b,.25));if(v<=0)return;const x=ctx;x.save();x.font='900 34px Arial';const w=x.measureText(lab).width+54;x.restore();pill(x,32+w/2,128,w,56,col,v);txt(x,lab,32+w/2,130,34,'#1B1430','center','900',v)}
function sticker(x){x.font='104px Impact, "Arial Black", sans-serif';const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle='#120A1C';x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle='#E4493F';x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+38,6)}
// ---------- shot 0: the title card. The topic is on screen from frame 0, in the thumbnail's style (thumb.js); it is cut, not faded, at its end ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,620,60,W/2,620,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='INKLING 2 MINI';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,'#F8E9CC');put(TOPIC,W/2,Yt+sz*.2,sz,'#FFC66E');
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
function popCard(t,s,t0,X,Y,size,fo,rot=-.04,col='#FFC66E'){const u=bo(seg(t,t0,t0+.3));if(u<=0)return;ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(X,Y);ctx.rotate(rot);ctx.scale(u,u);imp(ctx,s,0,0,size,col);ctx.restore()}
function nameCard(t,s,t0,X,Y,fo){const u=bo(seg(t,t0,t0+.3));if(u<=0)return;const x=ctx;x.save();x.globalAlpha=Math.min(1,u*3)*fo;x.translate(X,Y);x.scale(u,u);x.font='900 40px Arial';const w=x.measureText(s).width+60;rr(x,-w/2,-42,w,84,16,'#F8E9CC','#120A1C',5);txt(x,s,0,2,40,'#1B1430','center','900');x.restore()}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 tab(t,ST(1)+.1,out(3),'BEFORE','#FFC66E');tab(t,ST(3)+.05,out(4),'NOW','#2DB2AE');tab(t,ST(6)+.05,out(12),'BEFORE','#FFC66E');tab(t,ST(12)+.05,out(23),'NOW','#2DB2AE');
 if(inS(t,2,3)){const v=fin(t,ST(2)+.3,.3)*(1-fin(t,out(3),.25));if(v>0){const x=ctx;x.save();x.globalAlpha=v;pill(x,1620,250,440,84,'rgba(27,20,48,.88)');txt(x,'TOKENS',1430,252,34,'#F8E9CC','left','900');
   const n=Math.floor(seg(t,ST(2)+.5,ST(3))*7);for(let i=0;i<n;i++){x.fillStyle='#FFC66E';x.beginPath();x.roundRect(1600+i*24,236,16,28,4);x.fill()}
   const a=(t-ST(2))*6;x.translate(1850,250);x.strokeStyle='#F8E9CC';x.lineWidth=6;x.beginPath();x.arc(0,0,22,0,7);x.stroke();x.lineCap='round';x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(a)*15,-Math.cos(a)*15);x.stroke();x.restore()}}
 card(t,ST(3)+.3,out(4),960,640,'MIDDLE 12 LAYERS','#2DB2AE',50);
 if(inS(t,4,5)){const fo=1-fin(t,out(5),.25);popCard(t,'HOW?',7.43,1480,330,150,fo);popCard(t,'WHY?',7.72,1600,530,150,fo,.03)}
 card(t,ST(5)+.25,out(6),960,760,'ONE EXAM QUESTION','#F8E9CC',48);
 card(t,ST(6)+.25,out(7),960,640,'ORDINARY MODEL','#F8E9CC',48);
 if(inS(t,7,8)){const fo=1-fin(t,out(8),.25);nameCard(t,'GEMMA 4 31B',13.12,560,540,fo);nameCard(t,'QWEN3.8-27B',13.70,1360,540,fo);card(t,ST(7)+.3,out(8),960,860,'from the maker\'s table','#C9B8E0',36)}
 card(t,ST(8)+.4,out(9),960,960,'1 PASS PER TOKEN','#FFC66E',48);
 card(t,ST(9)+.35,out(10),960,640,'WRITTEN THINKING','#FFC66E',48);
 card(t,ST(12)+.3,out(13),960,520,'NOV 20, 2026','#F8E9CC',50);
 if(inS(t,13,14)){card(t,ST(13)+.3,out(14),960,1100,'INKLING 2 MINI · THINKING MACHINES','#F8E9CC',38);card(t,23.55,out(14),860,520,'OPEN WEIGHTS','#2DB2AE',42)}
 if(inS(t,15,16)){const fo=1-fin(t,out(16),.25);popCard(t,'SAME WEIGHTS',28.2,1400,860,110,fo,-.05,'#FFC66E')}
 card(t,ST(17)+.4,out(18),960,960,'NO NEW WEIGHTS','#E4493F',50);
 card(t,ST(19)+.35,out(20),960,1040,'MAKER\'S TEST · GPQA DIAMOND','#F8E9CC',38);
 if(inS(t,20,21)){const fo=1-fin(t,out(21),.25);popCard(t,'LESS THAN HALF',37.95,1330,830,120,fo,-.04,'#FFC66E')}
 if(inS(t,23,24)){const fo=1-fin(t,out(24),.25);popCard(t,'HOW?',ST(23)+.1,960,990,110,fo,-.03);check(ctx,1150,982,64,bo(seg(t,ST(23)+.6,ST(23)+.85))*fo)}
 if(inS(t,24,25)){const fo=1-fin(t,out(25),.25);popCard(t,'WHY?',ST(24)+.1,640,990,110,fo,-.03);check(ctx,820,982,64,bo(seg(t,ST(24)+.6,ST(24)+.85))*fo)}
 card(t,ST(25)+.3,out(26),960,900,'STILL WRITES SOME REASONING','#FFC66E',46);
 card(t,ST(26)+.4,out(27),960,960,'LOOPS ADD NO NEW FACTS','#FFC66E',48);
 /* the takeaway card: two lines, the plain statement, then the amber punchline */
 if(inS(t,27,28)){const fo=1-fin(t,out(28),.25),dm=fin(t,ST(27)+.15,.5);ctx.save();ctx.globalAlpha=.42*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,53.74,.35)*fo;if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-590,206,1180,196,40);ctx.fill();ctx.restore();
   txt(ctx,'Same exam;',W/2,272,64,'#F8E9CC','center','800',v);txt(ctx,'more working happens in its head.',W/2,350,58,'#FFC66E','center','800',fin(t,54.25,.35)*fo)}}
 /* call to action: the subscribe button pops in on the spoken line. No "Next" line: the next episode is not decided */
 const c=fin(t,56.64,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-56.64)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}}

// ---------- cameras, one per shot ----------
const E=u=>ease(u),CAM=[
 ()=>({}),
 u=>({x:lerp(1000,1060,E(u)),y:570,z:lerp(1.1,1.18,E(u)),b:[0,0,0]}),                        /* 1 you with the stopwatch by the old robot's desk */
 u=>({x:lerp(520,450,E(u)),y:700,z:lerp(1.3,1.38,E(u)),b:[0,0,0]}),                          /* 2 its scroll runs off the desk */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 3 the new robot's head */
 u=>({x:lerp(1300,1320,E(u)),y:580,z:lerp(1.2,1.26,E(u)),b:[0,0,0]}),                       /* 4 you: how, why */
 u=>({x:lerp(1700,1740,E(u)),y:590,z:lerp(.56,.6,E(u)),b:[0,0,0]}),                        /* 5 the exam hall, wide */
 u=>({x:lerp(660,700,E(u)),y:640,z:lerp(1.35,1.45,E(u)),b:[0,0,0]}),                        /* 6 the ordinary model */
 u=>({x:lerp(700,760,E(u)),y:690,z:lerp(1.25,1.3,E(u)),b:[0,0,0]}),                         /* 7 two names on its desk */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 8 its head: one pass */
 u=>({x:lerp(620,660,E(u)),y:700,z:lerp(1.4,1.5,E(u)),b:[0,0,0]}),                          /* 9 it writes its working out */
 u=>({x:lerp(680,420,E(u)),y:790,z:lerp(1.15,1.12,E(u)),b:[0,0,0]}),                        /* 10 the scroll to the floor */
 u=>({x:lerp(1060,1040,E(u)),y:660,z:lerp(1.35,1.4,E(u)),b:[0,0,0]}),                       /* 11 you wait */
 u=>({x:lerp(2660,2700,E(u)),y:650,z:lerp(1.25,1.32,E(u)),b:[0,0,0]}),                      /* 12 now: the second desk */
 u=>({x:lerp(2700,2730,E(u)),y:640,z:lerp(1.4,1.5,E(u)),b:[0,0,0]}),                        /* 13 the name */
 u=>({x:lerp(2840,2880,E(u)),y:560,z:lerp(1.55,1.62,E(u)),b:[0,0,0]}),                      /* 14 thinking in its head */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 15 the middle 12 run three times */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 16 24 layers, 48 steps */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 17 no bigger brain */
 u=>({x:lerp(2700,2720,E(u)),y:700,z:lerp(1.4,1.48,E(u)),b:[0,0,0]}),                       /* 18 a short note */
 u=>({x:lerp(2920,3080,E(u)),y:680,z:lerp(1.2,1.22,E(u)),b:[0,0,0]}),                       /* 19 the research twin */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 20 less than half */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 21 open weights */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 22 a 32 GB Mac */
 u=>({x:960,y:540,z:lerp(1,1.04,E(u)),b:[0,0,0]}),                                          /* 23 the board: how */
 u=>({x:960,y:540,z:lerp(1.04,1.08,E(u)),b:[0,0,0]}),                                       /* 24 the board: why */
 u=>({x:lerp(2500,2520,E(u)),y:650,z:lerp(1.4,1.46,E(u)),b:[0,0,0]}),                       /* 25 it still writes a few lines */
 u=>({x:960,y:540,z:lerp(1,1.08,E(u)),b:[0,0,0]}),                                          /* 26 no new facts */
 u=>({x:lerp(1800,2040,E(u)),y:610,z:lerp(.58,.66,E(u)),b:[0,0,0]}),                        /* 27 same exam, a note handed in */
 u=>({x:lerp(1500,1480,E(u)),y:580,z:lerp(1.25,1.3,E(u)),b:[0,0,0]})                        /* 28 subscribe */
];
FILM={dur:60,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6; /* the epsilon keeps a cut frame on its side of the ST() frames */t_g=o;
  if(!s)drawTitle(o);else{({E:drawHall,D:drawD,K:drawK,G:drawG,L:drawL,B:drawBoard})[PLACE[s]](o,cam);overlay(o)}
  const fo=seg(o,60-.45,60-.03);if(fo>0)fadeTo(ctx,fo);tag()}, /* the fade-out is ours so the corner tag stays drawn over it */
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, a pencil scratch for the writing, paper for the scroll, stopwatch ticks, count ticks, card pops ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
const WR=(a,b,dt)=>{for(let t=a;t<b;t+=dt)say(t,'pen')};
WR(ST(1)+.3,ST(2)-.2,.42);WR(ST(2)+.3,ST(3)-.3,.35);WR(ST(9)+.1,ST(10)-.2,.3);WR(ST(10)+.1,ST(10)+1.3,.3);WR(ST(18)+.3,ST(18)+1.5,.4);WR(ST(25)+.3,ST(26)-.2,.4);
for(const t of [ST(2)+.15,ST(10)+.3,ST(10)+1.0,ST(27)+.7])say(t,'paper');
for(const t of [ST(1)+.5,ST(1)+1.0,ST(1)+1.5,ST(11)+.25,ST(11)+.6,ST(11)+.95])say(t,'tock');
for(const t of [6.24,6.53,6.88,26.85,27.46,27.79,ST(3)+.35,ST(15)+.5])say(t,'tick');
for(const t of [7.43,7.72,13.12,13.70,ST(3)+.3,ST(5)+.25,ST(6)+.25,ST(7)+.3,ST(8)+.4,ST(9)+.35,ST(12)+.3,ST(13)+.3,23.55,ST(17)+.4,ST(19)+.35,37.95,ST(25)+.3,ST(26)+.4,ST(15)+.3,ST(23)+.1,ST(24)+.1,53.74,54.25,56.64])say(t,'tick');
say(28.2,'stamp');say(15.55,'tick');say(ST(16)+.2,'tick');say(ST(16)+1.0,'tick');say(ST(20)+.06,'slide');say(36.9,'slide');say(ST(21)+.1,'stamp');say(ST(22)+.5,'slide');say(ST(22)+1.5,'bump');say(ST(23)+.6,'tick');say(ST(24)+.6,'tick');say(ST(12)+.1,'slide');say(ST(19)+.15,'slide');
