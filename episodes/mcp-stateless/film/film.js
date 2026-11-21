// Episode 1 v2: MCP goes stateless (spec 2026-07-28), told through a diner: one waiter who keeps your order in his head
// versus a complete order slip any waiter can take. 60 s, 28 shots (beats.md "Shots"). Voice from tts.py (vo.wav laid in at .3 s): film time = voice time + .3.
// Three places on one clock: the diner (the story), the studio (today), the board (BEFORE vs NEW). Every time below is FILM seconds.
// Helpers txt/pill/bubble/fin, the studio, the board and the overlay follow Episode 0 (episodes/deepseek-super-agent/film/film.js).
// Rules learned the hard way: no setLineDash; state changes sit on cut frames; every stroke setting sits inside save/restore; no // inside a long line.
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function bubble(x,X,Y,s,col,a,size=18){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`800 ${size}px Arial`;pill(x,X,Y,x.measureText(s).width+size*1.6,size*1.9,col);txt(x,s,X,Y+1,size,'#1B1430','center','800');x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const bo=u=>{u=clamp(u);return 1+2.70158*Math.pow(u-1,3)+1.70158*Math.pow(u-1,2)}; /* back-out: a pop with a small overshoot */
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function check(x,X,Y,sz,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(X-.5*sz,Y);x.lineTo(X-.12*sz,Y+.42*sz);x.lineTo(X+.55*sz,Y-.45*sz);
 x.strokeStyle='#120A1C';x.lineWidth=sz*.34;x.stroke();x.strokeStyle='#2DB2AE';x.lineWidth=sz*.2;x.stroke();x.restore()}
/* THE CLOCK: cut frames of the 28 shots, from beats.md "Shots" (film seconds x 30). Shot 0 is the title card. ST(i) = the second shot i starts. */
const CF=[0,65,100,132,170,215,281,338,402,498,545,622,693,750,828,897,951,996,1049,1107,1206,1248,1277,1334,1407,1488,1554,1704,1800];
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.29; /* out(i): a card fades out from here, so it is gone .04 s before the cut at shot i */
const pick=(t,rows)=>{let r=rows[0];for(const q of rows)if(t>=q[0])r=q;return r};
const PLACE='T'+'dddd'+'s'+'d'+'ss'+'dddd'+'b'+'d'+'b'+'s'+'bb'+'s'+'ddd'+'s'+'dd'+'d'+'s'; /* T title, d diner, s studio, b board, one letter per shot */

// ---------- the waiter's costume: paper diner cap and bow tie, drawn after actor() in the rig's own transforms ----------
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function cap(x,p,stripe='#E4493F'){x.save();bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0);
 x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(-86,-58);x.lineTo(-78,-132);x.quadraticCurveTo(0,-158,84,-140);x.lineTo(88,-58);x.quadraticCurveTo(0,-88,-86,-58);x.fill();
 x.fillStyle=stripe;x.beginPath();x.moveTo(-86,-58);x.quadraticCurveTo(0,-88,88,-58);x.lineTo(87,-80);x.quadraticCurveTo(0,-110,-85,-80);x.closePath();x.fill();
 x.strokeStyle='rgba(27,20,48,.22)';x.lineWidth=5;x.lineCap='round';x.beginPath();x.moveTo(-30,-150);x.lineTo(-22,-112);x.stroke();x.restore()}
function bowTie(x,p,col='#17141F'){x.save();bodyT(x,p);const y=20+Math.sin(p.breath||0)*3;x.fillStyle=col;
 for(const s of [-1,1]){x.beginPath();x.moveTo(0,y);x.lineTo(s*40,y-21);x.lineTo(s*40,y+21);x.closePath();x.fill()}x.beginPath();x.roundRect(-10,y-11,20,22,6);x.fill();x.restore()}
const waiter=(x,id,ch,p,cam,stripe)=>{actor(x,id,ch,p,cam);cap(x,p,stripe);bowTie(x,p,ch.skin=='#17141F'?'#F4EBDD':'#17141F');return p};

// ---------- food and the order slip: what the "session" is made of ----------
function burgerIcon(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#E9A04A';x.beginPath();x.ellipse(0,-12,36,22,0,Math.PI,0);x.fill();
 x.fillStyle='#6B3A22';x.beginPath();x.roundRect(-38,-12,76,14,7);x.fill();x.fillStyle='#5FA35A';x.fillRect(-34,0,68,6);x.fillStyle='#E9A04A';x.beginPath();x.roundRect(-36,6,72,15,7);x.fill();x.restore()}
function friesIcon(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#FFC66E';for(let i=-3;i<=3;i++)x.fillRect(i*9-4,-34-(i&1)*9,8,36);
 x.fillStyle='#E4493F';x.beginPath();x.moveTo(-36,-6);x.lineTo(36,-6);x.lineTo(27,26);x.lineTo(-27,26);x.closePath();x.fill();x.restore()}
/* the order slip: everything the request needs, written on the request itself */
function slip(x,X,Y,sc,rot,n,a=1,glow=0,tagNew=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.rotate(rot);x.scale(sc,sc);
 if(glow>0){x.save();x.globalAlpha*=glow;x.strokeStyle='#FFC66E';x.lineWidth=12;x.beginPath();x.roundRect(-127,-132,254,264,12);x.stroke();x.restore()}
 x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-120,-125,240,250,6);x.fill();txt(x,'ORDER',0,-94,30,'#E4493F','center','900');x.fillStyle='rgba(27,20,48,.3)';x.fillRect(-98,-70,196,3);
 [['version 2026-07-28',18],['what the app can handle',16],['burger, fries',20]].forEach((r,i)=>{const v=clamp(n-i);txt(x,r[0],-98,-34+i*50,r[1],'#1B1430','left','800',v)});
 if(tagNew>0){pill(x,96,-125,72,32,'#2DB2AE',tagNew);txt(x,'NEW',96,-124,18,'#1B1430','center','900',tagNew)}x.restore()}
/* the session: the order in the waiter's head. Label on top, burger, fries and the table number inside. drop 0..1: the contents fly onto the slip at to=[x,y] */
function thought(x,X,Y,a,drop=0,sc=1,to=[700,540]){if(a<=0)return;x.save();x.translate(X,Y);x.scale(sc,sc);x.translate(-X,-Y);x.globalAlpha*=a;
 const h=150,bx=X+62,by=Y-62-h,body=1-ease(seg(drop,0,.45));
 if(body>0){x.save();x.globalAlpha*=body;x.fillStyle='#F8E9CC';x.beginPath();x.arc(X+34,Y-16,9,0,7);x.fill();x.beginPath();x.arc(X+58,Y-44,14,0,7);x.fill();x.beginPath();x.roundRect(bx,by,270,h,30);x.fill();
  txt(x,'table 12',bx+135,by+h-26,24,'#3A2D5A','center','800');bubble(x,bx+135,by-10,'YOUR SESSION','#FFC66E',1,22);x.restore()}
 const bz=(a,c,b,e)=>(1-e)*(1-e)*a+2*(1-e)*e*c+e*e*b,P=[[bx+75,by+62,1.0],[bx+195,by+62,.95]]; /* the contents travel over the top of his head, not across his face */
 [[burgerIcon,P[0],-22],[friesIcon,P[1],18]].forEach((q,i)=>{const e=ease(seg(drop,.1+i*.08,.95));if(drop>.99)return;const T=[to[0]+q[2],to[1]+30],C=[T[0]-90,q[1][1]];q[0](x,bz(q[1][0],C[0],T[0],e),bz(q[1][1],C[1],T[1],e),lerp(q[1][2],.22,e))});x.restore()}
// ---------- diner (the engine's cafe room): fixed places ----------
const FL=868,MS=.82,MAS_X=1780,HS_X=1420,MAS_C=860,CUST=[1160,620],TA=[1050,1610],TB=[2800,3360],TC=[-880,-360],TY=830;
const CTR=[-340,860,590],SY=440,SS=.7,PUT=[745,572],HOLD=[700,520],SLIP0=[1420,650],SLIP4=[1370,450]; /* SLIP4: in shot 4 she holds it up high, so it flies over her head */
const CHEF={skin:'#E9C6A0',cloth:'#5FA35A',hood:'#3F7A40',hand:'#E9C6A0',face:INK,leg:'#2C2A49',shoe:'#17141F',finger:INK};
const WAITER5={skin:'#E9C7A2',cloth:'#C9622F',hood:'#9A431B',hand:'#E9C7A2',face:INK,leg:'#2C2A49',shoe:'#17141F',finger:INK};
const TADD=ST(20)+.12; /* shot 20: two more waiters rise behind the counter */
const STAFF=[{id:'w1',ch:FRIEND,x:230,in:0},{id:'w2',ch:GUEST_A,x:440,in:0},{id:'w3',ch:GUEST_B,x:650,in:0},{id:'w4',ch:CHEF,x:20,in:TADD},{id:'w5',ch:WAITER5,x:-190,in:TADD+.3}];
const catchPt=w=>[w.x+84,SY-49];
const outW=makeWalk({pts:[[1960,FL],[2180,FL],[2330,700]],t0:ST(2)+.04,t1:ST(3)+.02,steps:3,scale:cafeScale});
const HS=t=>[1300,585+Math.sin(t*13)*7*fin(t,ST(9)+.4,.3)*(1-fin(t,ST(10)-.5,.3))];
const TA0=ST(4)+.4,TC0=ST(22)+.3,TC1=ST(22)+.95,TL=ST(22)+1.15; /* TA0 shot 4: the slip flies; TC0-TC1 shot 22: the next slip lands on the counter; TL: the mascot lifts it */
const HOP=[ST(25)+.2,ST(25)+.7,ST(25)+1.2],HOPD=.4,HOPW=[STAFF[1],STAFF[0],STAFF[3]]; /* shot 25: the slip passes mascot -> w2 -> w1 -> w4 */
const heroOn=t=>t<ST(3)||t>=ST(5); /* shots 3-4: only the other waiters, the mascot has gone home */
function counter(x){const [a,b,top]=CTR;let g=x.createLinearGradient(0,top,0,800);g.addColorStop(0,'#7A4038');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(a,top,b-a,800-top);
 x.fillStyle='rgba(20,10,30,.28)';for(let X=a+40;X<b-60;X+=200)x.fillRect(X,top+40,150,130);
 x.fillStyle='#B0705A';x.beginPath();x.roundRect(a-16,top-12,b-a+32,24,8);x.fill();x.fillStyle='rgba(255,226,190,.45)';x.fillRect(a-16,top-12,b-a+32,4)}
function calendar(x,t){const s1=inS(t,1,2);
 if(s1){const a=fin(t,ST(1)+.12,.2);if(a>0){x.save();x.globalAlpha=a;x.fillStyle='#FFC66E';x.beginPath();x.roundRect(2618,392,150,50,10);x.fill();txt(x,'BEFORE',2693,421,26,'#1B1430','center','900');x.restore()}}
 x.fillStyle='#2A1838';x.fillRect(2590,180,190,230);x.fillStyle='#F4EBDD';x.fillRect(2600,190,170,210);x.fillStyle='#E4493F';x.fillRect(2600,190,170,54);
 txt(x,'JULY 2026',2685,218,25,'#FFF6E6','center','900');txt(x,'28',2685,330,112,'#1B1430','center','900');
 const u=ease(seg(t,ST(1)+.1,ST(1)+.8));if(u>0&&s1){x.save();x.strokeStyle='#E4493F';x.lineWidth=7;x.lineCap='round';x.beginPath();x.ellipse(2685,328,74,60,-.12,-1.2,-1.2+u*6.6);x.stroke();x.restore()}}
function neon(x,t){x.save();const fl=.92+.08*Math.sin(t*7.3)*Math.sin(t*2.1);x.translate(2320,40);x.globalAlpha=fl;x.shadowColor='rgba(255,198,110,.9)';x.shadowBlur=26;
 x.strokeStyle='#2DB2AE';x.lineWidth=6;x.beginPath();x.roundRect(-150,-52,300,104,28);x.stroke();x.shadowBlur=18;
 x.font='86px Impact, "Arial Black", sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillStyle='#FFC66E';x.fillText('DINER',0,4);x.restore()}
function numStand(x,t){const a=fin(t,ST(10)+.15,.25);if(a<=0||t>=ST(13))return;x.save();x.translate(1500,TY);x.scale(1,a);
 x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(-38,0);x.lineTo(-25,-78);x.lineTo(25,-78);x.lineTo(38,0);x.closePath();x.fill();x.fillStyle='#C9B8A0';x.fillRect(-38,-4,76,4);
 txt(x,'12',0,-38,48,'#1B1430','center','900');x.restore()}

function custPose(t){const m=pick(t,[[0,.65,0,.2],[ST(3),-.55,.6,.7],[ST(4),.7,0,.3],[ST(9),.65,0,.2],[ST(10),.3,0,.3],[ST(14),.7,0,.3],[ST(20),.6,.1,.3],[ST(24),.7,0,.3]]);
 const p={x:CUST[0],y:CUST[1],s:.86,face:1,noLegs:true,breath:t*2.1+.5,blink:blinkAt(t,[5.0,8.0,12.3,17.2,21.5,26.4,31.4,38.2,45.3,50.5,54.8]),
  look:inS(t,4,5)?-.8:inS(t,14,15)?.55:inS(t,20,27)?-.7:.85,lookY:inS(t,14,15)?.5:inS(t,4,5)?-.1:inS(t,9,10)?.1:-.15,mouth:m[1],sad:m[2],brow:m[3],open:inS(t,3,4)?.4:0,hands:{},showH:{}};
 const SH=inS(t,4,5)?SLIP4:SLIP0,hs=w2l(p,[SH[0]-84,SH[1]+74]),hold=inS(t,14,15)?1:inS(t,4,5)?1-fin(t,TA0,.5):inS(t,22,23)?1-fin(t,TC0,.5):0;
 if(hold>0){p.hands.r=[lerp(97,hs[0],hold),lerp(220,hs[1],hold)];p.showH.r=hold>.1}
 else if(inS(t,9,10)){p.hands.r=w2l(p,HS(t));p.showH.r=true}
 return p}
function masPose(t){if(inS(t,2,3)){const w=outW.at(t),q=walkPose({x:w.c[0],y:standY(w.c[1],w.s),s:w.s,face:1,breath:t*2,look:.7,lookY:.1,mouth:.5,brow:.2},w);/* a brisk exit: the arms swing less, so no hand moves more than 40 px a frame */if(q.hands&&q.hands.l){q.hands.l=[-96+(q.hands.l[0]+96)*.55,q.hands.l[1]];q.hands.r=[96+(q.hands.r[0]-96)*.55,q.hands.r[1]]}return q}
 const X=inS(t,9,10)?HS_X:t<ST(14)?MAS_X:MAS_C;
 const m=pick(t,[[0,-.7,.1,.6],[ST(6),-.8,.2,.5],[ST(9),-.8,.5,.7],[ST(10),-.75,.3,.6],[ST(11),.55,-.6,.5],[ST(14),.6,.1,.6],[ST(21),-.75,.1,.3],[ST(22),-.5,.6,.7],[ST(24),.5,-.6,.6],[ST(25),.1,.05,.85]]);
 const p={x:X,y:standY(FL,MS),s:MS,face:t<ST(14)?-1:1,breath:t*2.2,blink:blinkAt(t,[9.9,16.9,21.9,23.0,41.0,45.6,47.9,50.4,53.0]),
  look:m[1],lookY:m[2],mouth:m[3],sad:0,brow:.2,open:0,hands:{},showH:{}};
 if(inS(t,6,7)){p.hands.l=[-120,40];p.showH.l=true} /* the pad */
 else if(inS(t,9,10)){p.hands.l=w2l(p,HS(t));p.showH.l=true}
 else if(t>=ST(22)&&t<ST(26)){const s=slipAt(t),g=fin(t,TC1-.2,.35)*(1-(t>=HOP[0]?fin(t,HOP[0],.35):0));
  p.hands.l=[lerp(-97,(s?s.x+14-X:-97)/MS,g),lerp(220,(s?s.y+27-p.y:220)/MS,g)];p.showH.l=g>.1}
 return p}
const reach=(t,a,b)=>fin(t,a,.3)*(1-(b?fin(t,b,.3):0));
function staffPose(w,i,t){const sw=swapAt(i,t),up=w.in?1-ease(seg(t,w.in,w.in+.5)):0,duck=i==2?ease(seg(t,ST(21)+.22,ST(21)+.8)):0,shrug=inS(t,12,13)&&i<2?1:0;
 const p={x:sw[0],y:SY+(up+duck)*320+sw[1],s:SS,face:1,noLegs:true,breath:t*2+i*1.3,blink:blinkAt(t,[6.5+i*.7,11.5+i*.2,20+i*.3,24.9,31.9+i*.4,43.2+i*.3,50.1]),
  look:shrug?.7:inS(t,4,5)?.8:.5,lookY:inS(t,4,5)||inS(t,22,23)?-.4:0,mouth:shrug?-.25:.6,brow:shrug?.7:.25,sad:shrug?.3:0,hands:{},showH:{}};
 if(shrug){const k=Math.sin(t*3+i)*8;p.hands={l:[-170,60+k],r:[170,60+k]};p.showH={l:true,r:true}}
 let r=0;if(i==2&&inS(t,4,5))r=reach(t,TA0+.1);
 for(let k=0;k<3;k++)if(w===HOPW[k]&&inS(t,25,26))r=reach(t,HOP[k]+.05,k<2?HOP[k+1]+.1:0);
 if(r>0){const tg=[lerp(97,120,r),lerp(220,-70,r)];p.hands.r=tg;p.showH.r=r>.1}
 return p}
/* shot 26: waiters swap places, one passing in front of the other (the takeaway: a server can be replaced) */
const SWAPS=[[0,1,.4],[3,4,1.0],[1,4,2.0],[0,4,2.9],[3,1,3.8]]; /* [who, who, seconds into shot 26] */
function swapAt(i,t){const cur=STAFF.map(w=>w.x);if(t<ST(26))return [cur[i],0];
 for(const [a,b,t0] of SWAPS){const u=ease(seg(t,ST(26)+t0,ST(26)+t0+.9));if(u<=0)break;
  if((i==a||i==b)&&u<1){const o=i==a?b:a;return [lerp(cur[i],cur[o],u),i==a?34*Math.sin(u*Math.PI):0]}
  if(u>=1){const q=cur[a];cur[a]=cur[b];cur[b]=q}}
 return [cur[i],0]}
/* the slip: held by the customer, flown to a waiter, lifted by the mascot, passed along the counter */
function hop(a,b,u,arc){return [lerp(a[0],b[0],u),lerp(a[1],b[1],u)-Math.sin(u*Math.PI)*arc]}
function slipAt(t){
 if(inS(t,4,5)){const u=easeIO(seg(t,TA0,TA0+.75)),c=catchPt(STAFF[2]),s=Math.sin(u*Math.PI);return {x:lerp(SLIP4[0],c[0],u),y:lerp(SLIP4[1],c[1],u)-s*150,sc:lerp(1,.4,u),rot:lerp(-.05,-.5,s),n:3}}
 if(inS(t,14,15))return {x:SLIP0[0],y:SLIP0[1],sc:1,rot:-.05,n:clamp((t-ST(14)-.3)/.5,0,3),tag:fin(t,ST(14)+.2,.25)};
 if(inS(t,22,23)){if(t<TC0)return {x:SLIP0[0],y:SLIP0[1],sc:1,rot:-.05,n:3};
  const u=easeIO(seg(t,TC0,TC1)),g=fin(t,TL,.55),q=hop(SLIP0,PUT,u,110),sc=lerp(lerp(1,.45,u),.45,g);
  return {x:lerp(q[0],HOLD[0],g),y:lerp(q[1],HOLD[1],g),sc:sc,rot:lerp(lerp(-.05,.3,u),-.06,g),n:3}}
 if(inS(t,24,25))return {x:HOLD[0],y:HOLD[1],sc:.45,rot:-.06,n:3,glow:fin(t,49.15,.3)};
 if(inS(t,25,26)){const A=[HOLD].concat(HOPW.map(catchPt));for(let k=2;k>=0;k--)if(t>=HOP[k]){const u=easeIO(seg(t,HOP[k],HOP[k]+HOPD)),q=hop(A[k],A[k+1],u,90);return {x:q[0],y:q[1],sc:.42,rot:lerp(-.06,-.3,Math.sin(u*Math.PI)),n:3}}
  return {x:HOLD[0],y:HOLD[1],sc:.45,rot:-.06,n:3,glow:1-fin(t,ST(25),.2)}}
 return null}
function slips(x,t){const s=slipAt(t);if(s)slip(x,s.x,s.y,s.sc,s.rot,s.n,1,s.glow||0,s.tag||0)}
function pad(x,p){const h=h2w(p,'l');x.save();x.translate(h[0]+6,h[1]-26);x.rotate(-.2);x.fillStyle='#F4EBDD';x.fillRect(-18,-24,36,48);x.fillStyle='#E4493F';x.fillRect(-18,-24,36,7);x.fillStyle='rgba(27,20,48,.35)';for(let k=0;k<3;k++)x.fillRect(-12,-6+k*10,24,3);x.restore()}

function drawDiner(t,cam){const door=1.75*ease(seg(t,ST(2),ST(2)+.3))*(1-ease(seg(t,ST(3)+.15,ST(3)+.5)));
 let x=layer('out',cam,.6);cafeOutside(x);
 x=layer('wall',cam);cafeWall(x);cafeFloor(x);calendar(x,t);if(!inS(t,1,2))neon(x,t);
 x.save();x.beginPath();x.rect(XA,-900,XB-XA,900+CTR[2]);x.clip();
 STAFF.map((w,i)=>({w,p:staffPose(w,i,t)})).filter(q=>t>=q.w.in).sort((a,b)=>a.p.y-b.p.y).forEach(q=>waiter(x,q.w.id,q.w.ch,q.p,cam,'#2DB2AE'));x.restore();counter(x);
 const d=layer('door',cam);doorLeaf(d,door);
 const a=layer('act',cam);if(door>0)doorLight(a,door/1.75);for(const lx of [300,860,1500,1950,2680])pendant(a,lx,t,.1);
 const cp=actor(a,'customer',WOMAN,custPose(t),cam);let mp=null;
 if(heroOn(t)){mp=waiter(a,'hero',HERO,masPose(t),cam);if(inS(t,6,7))pad(a,mp);if(inS(t,9,10))contact('handshake',h2w(cp,'r'),h2w(mp,'l'));
  if(t>=TC1+.2&&t<HOP[0]){const s=slipAt(t);contact('slip',h2w(mp,'l'),[s.x+14,s.y+27])}}
 const f=layer('fg',cam);sideTable(f,TA[0],TA[1],TY);sideTable(f,TB[0],TB[1],TY);sideTable(f,TC[0],TC[1],TY);f.fillStyle='#F4EBDD';f.beginPath();f.ellipse(1320,TY-3,72,9,0,0,7);f.fill();numStand(f,t);slips(f,t);
 // the session: your order, in the waiter's head. It walks out with him (shot 2), pops when he is gone (3), fills again (11) and later flies onto the slip (24)
 if(mp){const hy=mp.y-(HR*2+26)*mp.s,th=inS(t,2,3)?fin(t,ST(2),.15):inS(t,11,12)?fin(t,ST(11)+.1,.3)*(1-fin(t,out(12),.25)):inS(t,24,25)?fin(t,ST(24),.2):0;thought(f,mp.x,hy,th,inS(t,24,25)?seg(t,48.25,49.25):0,1,[HOLD[0],HOLD[1]])}
 if(inS(t,3,4)){const u=seg(t,ST(3)+.55,ST(3)+.8),v=fin(t,ST(3)+.05,.2)*(1-u);thought(f,1440,560,v,0,1+.45*u);if(u>0&&u<1)for(let k=0;k<8;k++){const an=k*Math.PI/4+.3,r0=150+u*90;f.save();f.strokeStyle='#FFC66E';f.lineWidth=7;f.lineCap='round';f.globalAlpha=1-u;f.beginPath();f.moveTo(1590+Math.cos(an)*r0,455+Math.sin(an)*r0);f.lineTo(1590+Math.cos(an)*(r0+34),455+Math.sin(an)*(r0+34));f.stroke();f.restore()}}
 bubble(f,1240,400,'?','#FFC66E',inS(t,3,4)?fin(t,ST(3)+.4,.25)*(1-fin(t,out(4),.25)):0,54);
 if(inS(t,4,5))bubble(f,STAFF[2].x,SY-215,'any server','#2DB2AE',fin(t,TA0+.6,.25)*(1-fin(t,out(5),.25)),26);
 if(inS(t,12,13))STAFF.slice(0,2).forEach((w,i)=>bubble(f,w.x+10,SY-205-i*62,'NOT MY TABLE','#F8E9CC',fin(t,ST(12)+.25+i*.4,.25)*(1-fin(t,out(13),.25)),26));
 if(inS(t,10,13)){const L=fin(t,18.55,.25)*(1-fin(t,out(11),.2)),O=fin(t,18.9,.25)*(1-fin(t,out(11),.2));bubble(f,1500,676,'TABLE 12 = SESSION ID','#FFC66E',L,26);txt(f,'(optional)',1500,720,22,'#C9B8E0','center','700',O)}
 if(inS(t,20,22))STAFF.slice(3).forEach(w=>bubble(f,w.x,SY-215,'+1','#2DB2AE',fin(t,w.in+.35,.2)*(1-fin(t,out(21),.25)),28));
 if(inS(t,21,22))bubble(f,STAFF[2].x+30,SY-170,'bye!','#F8E9CC',fin(t,ST(21)+.1,.2)*(1-fin(t,out(22),.2)),24);
 comp([['out',cam.b[0]],['wall',cam.b[1]],['door',cam.b[1]],['act',0],['fg',cam.b[2]||0]])}

// ---------- studio: today. The big screen is the AI app; the mascot is the MCP server who brings it tools ----------
const DESK_Y=780,HERO_P=[430,560],MON=[],SB=[[1010,470],[1330,470],[1650,470]];
for(let i=0;i<5;i++)MON.push({cx:i?820+i*235:820,by:DESK_Y,w:i?190:280,h:i?124:180,row:0});
for(let i=0;i<5;i++)MON.push({cx:880+i*215,by:470,w:170,h:110,row:1});
const NIGHT=t=>inS(t,23,24)?1-fin(t,45.75,.6):0; /* shot 23: the laptop closes at night, the morning comes in the same shot */
function studioWall(x){let g=x.createLinearGradient(0,0,0,760);g.addColorStop(0,'#33255A');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 g=x.createRadialGradient(1100,300,30,1100,300,900);g.addColorStop(0,'rgba(255,196,130,.22)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 x.fillStyle='#237F80';x.fillRect(-800,700,W+2400,600);x.fillStyle='#2F9A98';x.fillRect(-800,692,W+2400,10);
 x.fillStyle='#241736';x.fillRect(690,470,1100,16);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(690,486,1100,10)}
function desk(x){let g=x.createLinearGradient(0,DESK_Y,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(200,DESK_Y,1700,500);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(200,DESK_Y,1700,4)}
function monitor(x,m,i,t,st){x.save();const {cx,by,w,h}=m,top=by-26-h,l=cx-w/2;
 x.fillStyle='#1B1430';x.fillRect(cx-7,by-28,14,28);x.beginPath();x.ellipse(cx,by-2,w*.2,6,0,0,7);x.fill();
 if(st.chat){x.strokeStyle='#FFC66E';x.lineWidth=6;x.beginPath();x.roundRect(l-7,top-7,w+14,h+14,12);x.stroke()}
 x.fillStyle='#1B1430';x.beginPath();x.roundRect(l,top,w,h,8);x.fill();
 const sx=l+7,sy=top+7,sw=w-14,sh=h-14;x.fillStyle='#141238';x.fillRect(sx,sy,sw,sh);
 x.save();x.beginPath();x.rect(sx,sy,sw,sh);x.clip();
 if(st.work>0){x.globalAlpha=st.work;const n=7,gap=sh/n;for(let k=0;k<n+1;k++){const y=sy+((k*gap+t*22*(1+hash(i,1))+i*9)%(sh+gap))-gap/2;x.fillStyle=k%3?'#2DB2AE':'#FF8F7A';x.fillRect(sx+8+hash(i,k)*10,y,sw*(.25+.5*hash(i+3,k)),Math.max(3,gap*.32))}}
 if(st.chat){const b=1-(st.basket||0);[[0,.55,'#C9B8E0'],[1,.42,'#2DB2AE'],[0,.64,'#C9B8E0']].forEach((r,k)=>{const v=b*fin(t,7.3+k*.35,.25);if(v<=0)return;x.globalAlpha=v;x.fillStyle=r[2];x.beginPath();x.roundRect(r[0]?sx+sw*(1-r[1])-12:sx+12,sy+16+k*48,sw*r[1],30,15);x.fill()});
  if(Math.floor(t*2.2)%2==0){x.globalAlpha=b;x.fillStyle='#F8E9CC';x.fillRect(sx+14,sy+sh-26,9,16)}
  if(st.basket>0){x.globalAlpha=st.basket;const bx=cx,byy=sy+sh*.68;x.strokeStyle='#FFC66E';x.lineWidth=7;x.lineCap='round';x.beginPath();x.arc(bx,byy-22,40,Math.PI,0);x.stroke();
   burgerIcon(x,bx-20,byy-26,.55);friesIcon(x,bx+22,byy-22,.5);
   x.fillStyle='#FFC66E';x.beginPath();x.moveTo(bx-66,byy-22);x.lineTo(bx+66,byy-22);x.lineTo(bx+48,byy+44);x.lineTo(bx-48,byy+44);x.closePath();x.fill();x.fillStyle='#141238';for(const k of [-28,0,28])x.fillRect(bx+k-3,byy-8,6,40);
   txt(x,'your basket',cx,sy+18,19,'#F8E9CC','center','800')}}
 x.restore();
 if(st.lid>0){x.fillStyle='#1B1430';x.fillRect(l,top,w,h*st.lid);x.fillStyle='#2A1F42';x.fillRect(l,top+h*st.lid-6,w,6)}
 x.restore()}
function monState(i,t){if(i==0)return {chat:1,work:0,basket:inS(t,16,17)?fin(t,ST(16)+.15,.35):0,lid:inS(t,23,24)?ease(seg(t,44.85,45.4)):0};return {work:inS(t,23,24)?0:1}}
const trayAt=t=>{const u=ease(seg(t,ST(8)+.25,ST(8)+1.4));return [lerp(600,690,u),lerp(612,602,u)+Math.sin(t*6)*3]};
function tray(x,t){const [X,Y]=trayAt(t);x.save();x.translate(X,Y-6);x.scale(1.5,1.5);x.fillStyle='#2A1F42';x.beginPath();x.roundRect(-86,-16,172,16,8);x.fill();x.fillStyle='#B0705A';x.fillRect(-86,-4,172,4);x.translate(0,-16);
 x.fillStyle='#F4EBDD';x.fillRect(-72,-48,44,46);x.fillStyle='#E4493F';x.fillRect(-72,-48,44,13);txt(x,'28',-50,-17,22,'#1B1430','center','900');
 x.fillStyle='#F4EBDD';x.fillRect(-22,-38,44,36);x.strokeStyle='#C9B8A0';x.lineWidth=3;x.beginPath();x.moveTo(-22,-38);x.lineTo(0,-18);x.lineTo(22,-38);x.stroke();
 x.fillStyle='#2DB2AE';x.fillRect(32,-40,40,38);x.fillStyle='#5FD0CB';x.beginPath();x.ellipse(52,-40,20,7,0,0,7);x.fill();x.fillStyle='#1B6F6C';x.fillRect(32,-26,40,3);x.fillRect(32,-14,40,3);x.restore()}
function heroPose(t){const s8=inS(t,8,9),hx=s8?HERO_P[0]+70*ease(seg(t,ST(8)+.2,ST(8)+1.2)):HERO_P[0],viewer=inS(t,5,6)||inS(t,19,20)||t>=ST(27)||(inS(t,23,24)&&NIGHT(t)<.5);
 const p={x:hx,y:HERO_P[1],s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[8.1,9.0,12.7,15.6,33.3,37.6,45.5,54.2,56.8,58.2]),
  look:viewer?.12:.85,lookY:inS(t,16,17)?.45:viewer?.1:.25,brow:inS(t,16,17)?.7:.25,sad:0,mouth:t>=ST(27)?.9:inS(t,16,17)?.2:.7,tilt:inS(t,16,17)?-.05:.04,hands:{},showH:{}};
 if(s8){const q=trayAt(t),g=fin(t,ST(8)+.05,.3);p.hands.r=[lerp(97,w2l(p,q)[0],g),lerp(220,w2l(p,q)[1],g)];p.showH.r=g>.1}
 if(t>=ST(27)+.3){const g=fin(t,ST(27)+.3,.4);p.hands.r=[lerp(97,140+Math.sin(t*9)*22,g),lerp(220,-95,g)];p.showH.r=g>.1}
 return p}
function window_(x,t){const n=NIGHT(t);x.save();x.fillStyle='#1B1430';x.beginPath();x.roundRect(960,92,700,360,14);x.fill();x.beginPath();x.rect(976,108,668,328);x.clip();
 let g=x.createLinearGradient(0,108,0,436);g.addColorStop(0,`rgb(${lerp(255,22,n)|0},${lerp(143,18,n)|0},${lerp(122,58,n)|0})`);g.addColorStop(1,`rgb(${lerp(255,56,n)|0},${lerp(198,40,n)|0},${lerp(110,104,n)|0})`);x.fillStyle=g;x.fillRect(976,108,668,328);
 if(n>.02){x.globalAlpha=n;x.fillStyle='#F8E9CC';x.beginPath();x.arc(1500,200,34,0,7);x.fill();x.fillStyle='#1E1850';x.beginPath();x.arc(1514,192,30,0,7);x.fill();for(let k=0;k<9;k++){x.fillRect(1010+hash(k,1)*560,130+hash(k,2)*160,5,5)}}
 if(n<.98){x.globalAlpha=1-n;x.fillStyle='#FFE9A8';x.beginPath();x.arc(1180,360,54,0,7);x.fill();x.strokeStyle='#FFE9A8';x.lineWidth=7;x.lineCap='round';for(let k=0;k<8;k++){const a=k*Math.PI/4+.2;x.beginPath();x.moveTo(1180+Math.cos(a)*74,360+Math.sin(a)*74);x.lineTo(1180+Math.cos(a)*100,360+Math.sin(a)*100);x.stroke()}}
 x.restore();x.fillStyle='#1B1430';x.fillRect(1306,92,8,360);x.fillRect(960,262,700,8)}
function serverBox(x,X,Y,lab,t,k){x.save();x.translate(X,Y);x.fillStyle='#2A1F42';x.beginPath();x.roundRect(-82,-200,164,200,12);x.fill();x.strokeStyle='#2DB2AE';x.lineWidth=5;x.stroke();
 for(let i=0;i<3;i++){x.fillStyle='#3A2D5A';x.fillRect(-62,-176+i*44,124,34);x.fillStyle=(Math.floor(t*3+k+i)%3)?'#2DB2AE':'#FFC66E';x.fillRect(42,-166+i*44,12,12)}
 txt(x,lab,0,-20,24,'#F8E9CC','center','800');x.restore()}
function phone(x,t,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(1300,640);x.fillStyle='#1B1430';x.beginPath();x.roundRect(-86,-160,172,320,26);x.fill();x.fillStyle='#141238';x.beginPath();x.roundRect(-74,-146,148,292,16);x.fill();
 x.fillStyle='#C9B8E0';x.beginPath();x.roundRect(-62,-122,96,26,13);x.fill();pill(x,10,-72,140,40,'#2DB2AE');txt(x,'ticket #42',10,-71,19,'#1B1430','center','900');
 x.fillStyle='#C9B8E0';x.beginPath();x.roundRect(-62,-34,110,26,13);x.fill();x.beginPath();x.roundRect(-62,6,70,26,13);x.fill();
 x.strokeStyle='#FFC66E';x.lineWidth=5;x.beginPath();x.roundRect(-76,-94,152,44,22);x.stroke();x.restore()}
function drawStudio(t,cam){const n=NIGHT(t),s19=inS(t,19,20),s23=inS(t,23,24);let x=layer('wall',cam,1);studioWall(x);
 if(s23)window_(x,t);else if(s19){const g=fin(t,ST(19)+.1,.3);x.save();x.globalAlpha=g;SB.forEach((b,k)=>serverBox(x,b[0],b[1],'Server '+'ABC'[k],t,k));x.restore()}
 else for(let i=5;i<10;i++)monitor(x,MON[i],i,t,monState(i,t));
 const a=layer('lamp',cam);pendant(a,520,t,.08);pendant(a,1500,t,.08);
 const h=layer('hero',cam);if(inS(t,8,9))tray(h,t);const hp=waiter(h,'hero',HERO,heroPose(t),cam);if(t>=ST(8)+.36&&inS(t,8,9)){const q=trayAt(t);contact('tray',h2w(hp,'r'),q)}
 const f=layer('fg',cam);desk(f);for(let i=0;i<5;i++)monitor(f,MON[i],i,t,monState(i,t));
 if(inS(t,7,8)){const L=bo(seg(t,11.85,12.15))*(1-fin(t,out(8),.25));if(L>0){f.save();f.translate(820,520);f.scale(L,L);f.font='800 26px Arial';const w=f.measureText('AI APP = THE CUSTOMER').width+41.6,lx=18-w/2-34;bubble(f,18,0,'AI APP = THE CUSTOMER','#FFC66E',1,26);
   f.fillStyle='#F4EBDD';f.beginPath();f.moveTo(lx-22,20);f.lineTo(lx-14,-22);f.lineTo(lx+14,-22);f.lineTo(lx+22,20);f.closePath();f.fill();txt(f,'12',lx,-2,22,'#1B1430','center','900');f.restore()}}
 if(inS(t,8,9)){const L=bo(seg(t,13.75,14.05))*(1-fin(t,out(9),.25));if(L>0){f.save();f.translate(560,290);f.scale(L,L);bubble(f,0,0,'MCP SERVER = THE WAITER','#FFC66E',1,26);f.restore()}}
 if(s19){const sn=ST(19)+2.55,u=seg(t,sn,sn+.5),a0=[820,568],tx=[1010,1330,1650];
  if(t<sn){f.strokeStyle='#E4493F';f.lineWidth=8;f.lineCap='round';f.beginPath();f.moveTo(a0[0]+20,a0[1]);f.quadraticCurveTo(900,430+Math.sin(t*4)*6,tx[0]-40,470);f.stroke()}
  else if(u<1){const e=u*u;f.save();f.globalAlpha=1-u*u;f.strokeStyle='#E4493F';f.lineWidth=6;f.lineCap='round';f.beginPath();f.moveTo(a0[0]+20,a0[1]);f.quadraticCurveTo(a0[0]+40,a0[1]+60*e,a0[0]+30,a0[1]+190*e);f.stroke();
   f.beginPath();f.moveTo(tx[0]-40,470);f.quadraticCurveTo(tx[0]-48,470+60*e,tx[0]-60,470+190*e);f.stroke();f.restore()}
  tx.forEach((X,k)=>{const p=fin(t,sn+.3+k*.12,.35);if(p<=0)return;const E=[lerp(a0[0]+60,X-30+k*0,p),lerp(a0[1]-10,478,p)];f.save();f.strokeStyle='#2DB2AE';f.lineWidth=8;f.lineCap='round';f.beginPath();f.moveTo(a0[0]+60,a0[1]-10);f.lineTo(E[0],E[1]);f.stroke();
   const an=Math.atan2(478-(a0[1]-10),X-30-(a0[0]+60));f.fillStyle='#2DB2AE';f.beginPath();f.moveTo(E[0]+Math.cos(an)*8,E[1]+Math.sin(an)*8);f.lineTo(E[0]-Math.cos(an-.5)*22,E[1]-Math.sin(an-.5)*22);f.lineTo(E[0]-Math.cos(an+.5)*22,E[1]-Math.sin(an+.5)*22);f.fill();f.restore()})}
 if(s23)phone(f,t,fin(t,45.9,.5));
 comp([['wall',cam.b[0]],['lamp',0],['hero',0],['fg',cam.b[2]]]);
 if(n>0){ctx.save();ctx.fillStyle=`rgba(14,10,64,${.4*n})`;ctx.fillRect(0,0,W,H);ctx.restore()}}

// ---------- board: brief.json "architecture", by hand. Left: MCP 2025-11-25. Right: MCP 2026-07-28 ----------
const BN={app:[230,560,'AI app'],sA:[650,350,'Server A'],sB:[650,560,'Server B'],sC:[650,770,'Server C'],
 app2:[1040,560,'AI app'],req:[1380,560,'Request'],n1:[1760,350,'Server A'],n2:[1760,560,'Server B'],n3:[1760,770,'Server C']};
const NEW={req:1},CH={app:WOMAN,app2:WOMAN,sA:HERO,sB:FRIEND,sC:GUEST_A,n1:HERO,n2:FRIEND,n3:GUEST_A},DIM={sB:1,sC:1};
const BW=240,BH=96,nodeIn={app2:26.75,req:26.9,n1:27.05,n2:27.15,n3:27.25};
const STRIKE=26.58; /* "drops": the handshake and the session ID are struck */
function edgePt(a,b){const A=BN[a],B=BN[b],dx=B[0]-A[0],dy=B[1]-A[1],k=Math.min(Math.abs(dx)>1?(BW/2+8)/Math.abs(dx):9,Math.abs(dy)>1?(BH/2+8)/Math.abs(dy):9);return [[A[0]+dx*k,A[1]+dy*k],[B[0]-dx*k,B[1]-dy*k]]}
function head(x,E,an,col){x.fillStyle=col;x.beginPath();x.moveTo(E[0]+Math.cos(an)*4,E[1]+Math.sin(an)*4);x.lineTo(E[0]-Math.cos(an-.45)*20,E[1]-Math.sin(an-.45)*20);x.lineTo(E[0]-Math.cos(an+.45)*20,E[1]-Math.sin(an+.45)*20);x.fill()}
function arrow(x,a,b,p,col='#C9B8E0',wd=4){if(p<=0)return;const [P,Q]=edgePt(a,b),E=[lerp(P[0],Q[0],p),lerp(P[1],Q[1],p)],an=Math.atan2(Q[1]-P[1],Q[0]-P[0]);
 x.save();x.globalAlpha*=Math.min(1,p*4);x.strokeStyle=col;x.lineWidth=wd;x.lineCap='round';x.beginPath();x.moveTo(P[0],P[1]);x.lineTo(E[0],E[1]);x.stroke();head(x,E,an,col);x.restore()}
function token(x,a,b,u,lab,col){if(u<=0||u>=1)return;const [P,Q]=edgePt(a,b),e=easeIO(u);bubble(x,lerp(P[0],Q[0],e),lerp(P[1],Q[1],e),lab,col,Math.min(1,u*6,(1-u)*6),18)}
const TK=[[1700,612],[1400,780],[1120,650]]; /* the ticket's way home: Server B, under the Request, to the AI app */
const qb=(u,i)=>{const [A,B,C]=TK;return (1-u)*(1-u)*A[i]+2*(1-u)*u*B[i]+u*u*C[i]};
function node(x,id,t){const a=(nodeIn[id]?fin(t,nodeIn[id],.5):1)*(DIM[id]?.5:1);if(a<=0)return;const [X,Y,lab]=BN[id],nw=NEW[id];x.save();x.globalAlpha=a;const sc=nodeIn[id]?lerp(.85,1,fin(t,nodeIn[id],.5)):1;x.translate(X,Y);x.scale(sc,sc);
 x.fillStyle='#2A1F42';x.beginPath();x.roundRect(-BW/2,-BH/2,BW,BH,16);x.fill();x.strokeStyle=nw?'#FFC66E':'#6E5D8E';x.lineWidth=nw?7:3;x.stroke();
 const c=CH[id];let tx=0;if(c){x.save();x.beginPath();x.roundRect(-BW/2,-BH/2,BW,BH,16);x.clip();const q={x:-BW/2+48,y:-BH/2+40,s:.16,face:1,noLegs:true,breath:t*2+X,blink:blinkAt(t,[X%7+21,X%5+29,X%9+36]),mouth:.6,look:.5,lookY:.4};
  drawPerson(x,c,q);if(c!=WOMAN)cap(x,q,c==HERO?'#E4493F':'#2DB2AE');x.restore();tx=28}
 txt(x,lab,tx,2,28,'#F8E9CC','center','700');
 if(nw){pill(x,BW/2-30,-BH/2,64,28,'#2DB2AE');txt(x,'NEW',BW/2-30,-BH/2+1,16,'#1B1430','center','900')}
 if(id=='sA')txt(x,'holds your session',0,BH/2+24,22,'#FFC66E','center','700');
 if(id=='n3')txt(x,'opens your basket',0,BH/2+24,22,'#2DB2AE','center','700',fin(t,36.35,.3));
 x.restore()}
function chip(x,X,Y,lab,st){pill(x,X,Y,270,54,'#3A2D5A');txt(x,lab,X,Y+1,29,'#F8E9CC','center','800');
 if(st>0){x.save();x.strokeStyle='#E4493F';x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(X-124,Y);x.lineTo(X-124+248*st,Y);x.stroke();x.restore()}}
function drawBoard(t,cam){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1400,560,40,1400,560,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=120;y<960;y+=28)x.fillRect(898,y,4,14); /* dashes as rects: setLineDash is not deterministic in headless Chromium */
 const LEFT=t<ST(14);if(LEFT)txt(x,'BEFORE · MCP 2025-11-25',90,156,40,'#C9B8E0');
 const R=fin(t,nodeIn.app2,.5);pill(x,1000,156,84,42,'#2DB2AE',R);txt(x,'NEW',1000,157,24,'#1B1430','center','900',R);txt(x,'MCP 2026-07-28 · the current version',1058,156,40,'#FFC66E','left','700',R);
 if(LEFT){arrow(x,'app','sA',1);chip(x,300,318,'1  handshake',fin(t,STRIKE,.25));chip(x,300,384,'2  session ID',fin(t,STRIKE+.14,.25));
  token(x,'app','sA',(t*.6)%1,'request','#F8E9CC')}
 arrow(x,'app2','req',fin(t,26.9,.4),'#FFC66E',5);[['n1',27.1],['n2',27.2],['n3',27.3]].forEach(q=>arrow(x,'req',q[0],fin(t,q[1],.4)));
 if(inS(t,15,16)){const m=[['n1',0],['n2',1],['n3',2]];token(x,'app2','req',seg(t,ST(15),ST(15)+.4),'request','#FFC66E');
  m.forEach(([n,k])=>{const [P,Q]=edgePt('req',n);token(x,'req',n,seg(t,ST(15)+.4+k*.15,ST(15)+.95+k*.15),'request','#FFC66E');bubble(x,lerp(P[0],Q[0],.5),lerp(P[1],Q[1],.5),'any','#2DB2AE',fin(t,ST(15)+.95+k*.12,.2),24)})}
 // state the app can see: the server hands back a ticket, a handle; the app passes it back as an ordinary argument
 if(inS(t,17,19)){const u=seg(t,ST(17)+.2,ST(17)+1.2),a0=fin(t,ST(17)+.1,.2);
  if(u>0&&u<1)bubble(x,qb(easeIO(u),0),qb(easeIO(u),1),'ticket #42','#FFC66E',Math.min(1,u*6,(1-u)*6),20);
  if(u>0){x.save();x.strokeStyle='#FFC66E';x.lineWidth=5;x.lineCap='round';x.beginPath();for(let k=0;k<=24;k++){const v=easeIO(u)*k/24;k?x.lineTo(qb(v,0),qb(v,1)):x.moveTo(qb(0,0),qb(0,1))}x.globalAlpha=.8;x.stroke();x.restore()}
  const v=fin(t,ST(17)+1.15,.3);bubble(x,1040,690,'ticket #42','#FFC66E',v,24);pill(x,1154,664,64,28,'#2DB2AE',v);txt(x,'NEW',1154,665,16,'#1B1430','center','900',v);txt(x,'ticket = state handle',1040,736,22,'#2DB2AE','center','700',v);
  if(inS(t,18,19)){token(x,'app2','req',seg(t,ST(18)+.15,ST(18)+.7),'request + #42','#FFC66E');token(x,'req','n3',seg(t,ST(18)+.7,ST(18)+1.3),'request + #42','#FFC66E')}}
 for(const id in BN)if(LEFT||BN[id][0]>900)node(x,id,t);
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function tag(){/* the brand's corner tag: the topic and the 60 s promise, on every frame */
 {const x=ctx;x.font='800 32px Arial';const tw=x.measureText('Stateless MCP').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'Stateless MCP',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800')}}
function tab(t,a,b,lab,col){const v=fin(t,a,.2)*(1-fin(t,b,.25));if(v<=0)return;const x=ctx;x.font='900 34px Arial';const w=x.measureText(lab).width+54;pill(x,32+w/2,128,w,56,col,v);txt(x,lab,32+w/2,130,34,'#1B1430','center','900',v)}
function sticker(x){x.font='104px Impact, "Arial Black", sans-serif';const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle='#120A1C';x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle='#E4493F';x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+38,6)}
// ---------- shot 0: the title card. The topic is on screen from frame 0, in the thumbnail's style (thumb.js); it is cut, not faded, at its end ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,620,60,W/2,620,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='STATELESS MCP';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,'#F8E9CC');put(TOPIC,W/2,Yt+sz*.2,sz,'#FFC66E');
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H);
 tag()}
function popCard(t,s,t0,X,Y,size,fo,rot=-.04){const u=bo(seg(t,t0,t0+.3));if(u<=0)return;ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(X,Y);ctx.rotate(rot);ctx.scale(u,u);imp(ctx,s,0,0,size,'#FFC66E');ctx.restore()}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 tag();
 tab(t,ST(4)+.05,out(5),'NOW','#2DB2AE');tab(t,ST(9)+.05,out(13),'BEFORE','#FFC66E');tab(t,ST(14)+.05,out(15),'NEW','#2DB2AE');
 if(inS(t,5,6)){const fo=1-fin(t,out(6),.25);popCard(t,'HOW?',7.42,1010,230,180,fo);popCard(t,'WHY?',7.97,1530,230,180,fo,.03);
  const u=bo(seg(t,8.45,8.7));if(u>0){ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(1500,640);ctx.rotate(-.035);ctx.scale(.5*u,.5*u);sticker(ctx);ctx.restore()}}
 card(t,ST(6)+.2,out(7),960,1000,'THE OLD WAY → THE NEW WAY','#F8E9CC',38);
 card(t,ST(9)+.15,out(10),960,540,'1  HANDSHAKE','#FFC66E',44);
 card(t,ST(19)+.1,out(20),130,420,'FOR YOU','#FFC66E',60);
 card(t,ST(20)+.1,out(21),130,820,'BUSY DAY: + SERVERS','#F8E9CC',44);
 card(t,46.0,out(24),960,760,'tomorrow · another device','#F8E9CC',38);
 if(inS(t,24,25)){const fo=1-fin(t,out(25),.25);popCard(t,'HOW?',47.2,200,200,110,fo,-.03);check(ctx,372,196,64,bo(seg(t,47.6,47.85))*fo)}
 if(inS(t,25,26)){const fo=1-fin(t,out(26),.25);popCard(t,'WHY?',49.72,200,200,110,fo,-.03);check(ctx,372,196,64,bo(seg(t,50.1,50.35))*fo)}
 // the takeaway card: a stateless server is a server anyone can replace
 if(inS(t,26,27)){const fo=1-fin(t,out(27),.25),dm=fin(t,ST(26)+.15,.5);ctx.save();ctx.globalAlpha=.55*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const u=bo(seg(t,52.3,52.6));if(u>0){ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(W/2,146);ctx.scale(u,u);pill(ctx,0,0,470,88,'#FFC66E');ctx.font='66px Impact, "Arial Black", sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#1B1430';ctx.fillText('STATELESS',0,5);ctx.restore()}
  const v=fin(t,52.9,.35)*fo;if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-560,206,1120,196,40);ctx.fill();ctx.restore();
   txt(ctx,'A server that remembers nothing',W/2,272,58,'#F8E9CC','center','800',v);txt(ctx,'is a server anyone can replace.',W/2,350,64,'#FFC66E','center','800',fin(t,54.7,.35)*fo)}}
 // call to action: the subscribe button pops in on the spoken line. No "Next in 60 seconds" line: the next episode is not decided
 const c=fin(t,56.95,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-56.95)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}}

// ---------- cameras, one per shot ----------
const E=u=>ease(u),CAM=[
 ()=>({}),
 u=>({x:2685,y:lerp(315,310,E(u)),z:lerp(2.1,2.5,E(u)),b:[5,0,0]}),                                    /* 1 the calendar: July 28 */
 u=>({x:lerp(1900,2090,E(u)),y:440,z:lerp(1,1.06,E(u)),b:[3,.6,0]}),                                    /* 2 he goes home, the order goes with him */
 u=>({x:lerp(1360,1320,E(u)),y:lerp(560,550,E(u)),z:lerp(1.5,1.72,E(u)),b:[4,1,0]}),                    /* 3 you, with nothing */
 u=>({x:lerp(980,800,E(u)),y:lerp(550,520,E(u)),z:lerp(1,1.06,E(u)),b:[3,0,0]}),                        /* 4 any waiter takes it */
 u=>({x:lerp(720,760,E(u)),y:520,z:lerp(1.3,1.42,E(u)),b:[2,0,0]}),                                     /* 5 studio: how, and why */
 u=>({x:lerp(1300,1330,E(u)),y:560,z:lerp(.48,.52,E(u)),b:[2,0,0]}),                                    /* 6 the diner, wide */
 u=>({x:lerp(760,800,E(u)),y:lerp(560,545,E(u)),z:lerp(1.5,1.62,E(u)),b:[2,0,0]}),                      /* 7 the AI app is the customer */
 u=>({x:lerp(680,780,E(u)),y:lerp(540,560,E(u)),z:lerp(1.25,1.4,E(u)),b:[2,0,0]}),                      /* 8 the server is the waiter with its tools */
 u=>({x:lerp(1280,1300,E(u)),y:lerp(560,550,E(u)),z:lerp(1.6,1.85,E(u)),b:[4,1,0]}),                    /* 9 the handshake */
 u=>{const k=E(seg(u,.1,.95));return {x:lerp(1470,1490,k),y:lerp(590,715,k),z:lerp(1.18,1.95,k),b:[3,.6,0]}}, /* 10 a table number: the session ID */
 u=>({x:lerp(1900,1930,E(u)),y:lerp(310,290,E(u)),z:lerp(1.75,1.95,E(u)),b:[5,1.5,0]}),                 /* 11 the order lives in his head */
 u=>({x:lerp(350,320,E(u)),y:lerp(420,410,E(u)),z:lerp(1.6,1.78,E(u)),b:[4,0,0]}),                      /* 12 the others: not my table */
 (u,t)=>{const k=E(seg(t,26.55,27.5)),d=E(seg(t,ST(13),26.55));return {x:lerp(lerp(450,490,d),985,k),y:lerp(520,540,k),z:lerp(lerp(1.22,1.27,d),1.0,k)}},  /* 13 board: BEFORE, then the whole board: BEFORE and NEW side by side */
 u=>({x:lerp(1450,1470,E(u)),y:lerp(600,590,E(u)),z:lerp(1.8,1.95,E(u)),b:[4,1,0]}),                    /* 14 the complete order slip */
 u=>({x:lerp(1400,1420,E(u)),y:560,z:lerp(1.15,1.22,E(u))}),                                             /* 15 board: any server */
 u=>({x:lerp(720,760,E(u)),y:lerp(600,590,E(u)),z:lerp(1.7,2.0,E(u)),b:[3,0,0]}),                      /* 16 studio: a shopping basket */
 u=>({x:lerp(1380,1400,E(u)),y:lerp(575,590,E(u)),z:lerp(1.2,1.28,E(u))}),                             /* 17 board: the server hands back a ticket */
 u=>({x:lerp(1400,1420,E(u)),y:lerp(620,640,E(u)),z:lerp(1.2,1.28,E(u))}),                             /* 18 board: the app shows it to another server */
 u=>({x:lerp(1000,1040,E(u)),y:lerp(500,490,E(u)),z:lerp(1.02,1.1,E(u)),b:[2,0,0]}),                                    /* 19 studio: not hanging on one machine */
 u=>({x:lerp(400,460,E(u)),y:lerp(500,490,E(u)),z:lerp(1.22,1.12,E(u)),b:[3,0,0]}),                     /* 20 a busy day adds servers */
 u=>({x:lerp(690,720,E(u)),y:lerp(470,480,E(u)),z:lerp(1.55,1.7,E(u)),b:[4,0,0]}),                      /* 21 one quits */
 u=>({x:lerp(1000,960,E(u)),y:lerp(520,500,E(u)),z:lerp(1.3,1.45,E(u)),b:[4,0,0]}),                     /* 22 the next takes your next order */
 u=>({x:lerp(880,940,E(u)),y:lerp(480,490,E(u)),z:lerp(1.2,1.3,E(u)),b:[2,0,0]}),                                       /* 23 night, then the ticket on another device */
 u=>({x:lerp(850,780,E(u)),y:lerp(295,420,E(u)),z:lerp(1.5,1.95,E(u)),b:[4,0,0]}),                     /* 24 how: the order moved onto the slip */
 u=>({x:lerp(560,480,E(u)),y:lerp(440,430,E(u)),z:lerp(1.35,1.5,E(u)),b:[3,0,0]}),                      /* 25 why: any waiter can take it */
 u=>({x:lerp(900,880,E(u)),y:lerp(500,490,E(u)),z:lerp(.72,.78,E(u)),b:[2,.4,0]}),                      /* 26 the takeaway, wide */
 u=>({x:lerp(640,700,E(u)),y:lerp(462,478,E(u)),z:lerp(1.38,1.26,E(u)),b:[2,0,0]})                      /* 27 subscribe */
];
FILM={dur:60,cuts:CF,fadeIn:0,fadeOut:.45,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6; /* the epsilon keeps a cut frame on its side of the ST() frames */if(!s){drawTitle(o);return}({d:drawDiner,s:drawStudio,b:drawBoard})[PLACE[s]](o,cam);overlay(o)},
 plants(){return {hero:outW.plants()}}};
// ---------- sound events (the mix is in audio_mix.py): footsteps, the door, paper, a bell, ticks, and a soft brush on every cut ----------
for(const t of outW.plants())say(t,'step');
say(ST(2)+.05,'dooropen');say(ST(3)+.3,'door');
for(const t of [7.42,7.97,47.2,49.72,11.85,13.75])say(t,'tick');say(8.45,'stamp');say(STRIKE,'tick');say(STRIKE+.14,'tick');
for(const t of [TA0,ST(15)+.4,ST(15)+.55,ST(15)+.7,TC0,TC1,HOP[0],HOP[1],HOP[2]])say(t,'paper');
say(TC1,'bell');say(ST(19)+2.55,'snap');say(ST(17)+1.2,'tick');say(ST(23)+.4,'tick');say(56.95,'tick');
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
