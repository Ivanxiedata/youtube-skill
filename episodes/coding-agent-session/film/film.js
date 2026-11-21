// Episode 1: what is a coding-agent session? Told through a mechanic: on the phone (a chat assistant) or in your garage (a coding agent).
// 60 s. Voice from tts.py (vo.wav laid in at .08 s), so every time below is voice time + .08.
// Three places on one clock: the garage (the story), the studio (today's screen), the board (BEFORE vs CODING-AGENT SESSION).
// The mascot is the mechanic (teal cap): on the phone until 18.5 s, in the garage after. "You" is the car's owner.
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function bubble(x,X,Y,s,col,a,size=18){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`800 ${size}px Arial`;pill(x,X,Y,x.measureText(s).width+size*1.6,size*1.9,col);txt(x,s,X,Y+1,size,'#1B1430','center','800');x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const F=f=>f/30-1e-4;   // a state change on a cut: compare t with the cut frame, never with a rounded second
// a tick or a cross, drawn (not a font glyph, so every machine renders the same)
function mark(x,X,Y,r,ok,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=ok?'#2DB2AE':'#E4493F';x.beginPath();x.arc(X,Y,r,0,7);x.fill();x.strokeStyle='#FFF6E6';x.lineWidth=r*.28;x.lineCap='round';x.lineJoin='round';x.beginPath();
 if(ok){x.moveTo(X-r*.45,Y+r*.02);x.lineTo(X-r*.1,Y+r*.38);x.lineTo(X+r*.48,Y-r*.34)}else{x.moveTo(X-r*.36,Y-r*.36);x.lineTo(X+r*.36,Y+r*.36);x.moveTo(X+r*.36,Y-r*.36);x.lineTo(X-r*.36,Y+r*.36)}x.stroke();x.restore()}

// ---------- the clock: when the mechanic walks in, the loop's steps, when the job is done ----------
const IN=F(555),FIXED=35.2;
// the loop: once in the garage (27.1-33.1, ends on a failed check), once more on the board (33.1-35.2, ends on a pass)
const STEPS=[[F(813),0],[F(855),1],[F(894),2],[30.9,3],[F(993),0],[33.8,1],[34.4,2],[35,3]];
const stepAt=t=>{let s=-1;for(const [a,i] of STEPS)if(t>=a)s=i;return s};

// ---------- costume: the mechanic's cap goes on after actor(), in the head's own transform (the engine stays untouched) ----------
function cap(x,p){x.save();x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}
 x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0);const lk=(p.look||0)*40;
 x.fillStyle='#2DB2AE';x.beginPath();x.moveTo(-102,-50);x.quadraticCurveTo(-112,-152,0,-152);x.quadraticCurveTo(112,-152,102,-50);x.closePath();x.fill();
 x.fillStyle='#187E86';x.beginPath();x.moveTo(-104+Math.min(0,lk),-54);x.quadraticCurveTo(lk,-72,104+Math.max(0,lk),-54);x.quadraticCurveTo(lk*1.2,-16,-104+Math.min(0,lk),-54);x.fill();
 x.fillStyle='#FFC66E';x.beginPath();x.roundRect(lk*.5-18,-120,36,27,7);x.fill();x.restore()}
function wrench(x,X,Y,ang,k){x.save();x.translate(X,Y);x.rotate(ang);x.scale(k,k);x.fillStyle='#C9D3E8';x.beginPath();x.roundRect(-26,-8,132,16,6);x.fill();
 x.strokeStyle='#C9D3E8';x.lineWidth=15;x.lineCap='butt';x.beginPath();x.arc(120,0,19,.7,Math.PI*2-.7);x.stroke();x.restore()}
// a hand's world position, following the hip lean (h2w ignores p.bend)
function handW(p,k){let [hx,hy]=p._h[k];if(p.bend){const c=Math.cos(p.bend),s=Math.sin(p.bend),dy=hy-(TH-14);[hx,hy]=[hx*c-dy*s,(TH-14)+hx*s+dy*c]}return [p.x+hx*p.s,p.y+hy*p.s]}
// the mechanic as a small picture in a window title
function avatar(x,X,Y,r,t,open=0){x.save();x.beginPath();x.roundRect(X-r,Y-r,r*2,r*2,r*.35);x.clip();x.fillStyle='#3A2A5C';x.fillRect(X-r,Y-r,r*2,r*2);
 const p={x:X,y:Y+r*.95,s:r/125,face:1,noLegs:true,breath:0,look:.25,lookY:.1,mouth:.6,brow:.25,open};drawPerson(x,HERO,p);cap(x,p);x.restore()}

// ---------- garage: your car with the hood up, a phone on a stand, and from 18.5 s the mechanic himself ----------
const FL=830,PS=.6,PY=standY(FL,PS),PH_X=600,AT_CAR=860,YOU_X=330;
function garageWall(x){let g=x.createLinearGradient(0,0,0,FL);g.addColorStop(0,'#2B2050');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-900,-600,W+2700,FL+600);
 g=x.createRadialGradient(900,420,40,900,420,950);g.addColorStop(0,'rgba(255,196,130,.24)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+2700,FL+600);
 g=x.createLinearGradient(0,190,0,430);g.addColorStop(0,'#6A4590');g.addColorStop(.6,'#E0708A');g.addColorStop(1,'#FFC66E');x.fillStyle='#241736';x.fillRect(96,176,348,268);x.fillStyle=g;x.fillRect(110,190,320,240);x.fillStyle='#241736';x.fillRect(264,190,12,240);x.fillRect(110,304,320,12);
 x.fillStyle='#3A2A5C';x.beginPath();x.roundRect(1330,170,500,270,12);x.fill();x.fillStyle='#6E5D8E';
 x.fillRect(1402,236,14,150);x.fillRect(1378,220,62,28);x.fillRect(1502,250,16,140);x.beginPath();x.arc(1510,236,24,0,7);x.fill();x.fillRect(1602,220,10,120);x.fillRect(1595,336,24,54);
 x.beginPath();x.moveTo(1690,226);x.lineTo(1790,226);x.lineTo(1790,262);x.lineTo(1690,300);x.closePath();x.fill();x.fillStyle='#3A2A5C';x.beginPath();x.arc(1510,236,10,0,7);x.fill();
 g=x.createLinearGradient(0,FL,0,1250);g.addColorStop(0,'#4A3566');g.addColorStop(.2,'#33244E');g.addColorStop(1,'#1E1430');x.fillStyle=g;x.fillRect(-900,FL,W+2700,700);x.fillStyle='rgba(255,196,150,.22)';x.fillRect(-900,FL,W+2700,4)}
// the engine turns over at 29.9 and dies at 30.85; once the job is done it purrs
const engine=t=>fin(t,29.9,.25)*(1-fin(t,30.85,.15))+(t>=FIXED?.22:0);
function car(x,t){const e=engine(t);x.save();x.translate(Math.sin(t*52)*2.6*e,Math.sin(t*61+1)*1.6*e);
 x.fillStyle='rgba(15,8,25,.45)';x.beginPath();x.ellipse(1385,FL+8,470,18,0,0,7);x.fill();
 x.fillStyle='#EBD9B8';x.beginPath();x.moveTo(962,772);x.lineTo(962,668);x.quadraticCurveTo(964,628,1000,624);x.lineTo(1235,620);x.lineTo(1335,506);x.quadraticCurveTo(1345,496,1365,496);x.lineTo(1590,496);
 x.quadraticCurveTo(1612,496,1626,510);x.lineTo(1722,612);x.lineTo(1795,622);x.quadraticCurveTo(1812,626,1812,650);x.lineTo(1812,772);x.closePath();x.fill();
 x.fillStyle='#C9B090';x.fillRect(962,730,850,42);
 x.fillStyle='#2A1F42';x.beginPath();x.moveTo(1262,612);x.lineTo(1345,518);x.lineTo(1460,518);x.lineTo(1460,612);x.closePath();x.fill();x.beginPath();x.moveTo(1478,518);x.lineTo(1590,518);x.lineTo(1680,612);x.lineTo(1478,612);x.closePath();x.fill();
 x.fillStyle='rgba(255,226,190,.16)';x.beginPath();x.moveTo(1300,600);x.lineTo(1362,530);x.lineTo(1392,530);x.lineTo(1330,600);x.closePath();x.fill();
 x.fillStyle='rgba(60,40,70,.3)';x.fillRect(1468,612,3,150);x.fillRect(1640,640,44,8);
 // the engine bay, cut open: your code lives under the hood
 x.fillStyle='#1B1430';x.beginPath();x.roundRect(990,630,228,64,10);x.fill();x.fillStyle='#4A3A68';x.beginPath();x.roundRect(1008,584,190,104,8);x.fill();
 for(let k=0;k<4;k++){x.fillStyle=k%3?'#2DB2AE':'#FF8F7A';x.fillRect(1060+hash(k,1)*10,598+k*21,118*(.4+.6*hash(k,2)),10)}
 x.fillStyle='#FFC66E';x.beginPath();x.roundRect(1022,640,22,22,5);x.fill();
 x.fillStyle=e>.05?'#FFE3A8':'#8A7CA5';x.beginPath();x.roundRect(962,660,16,30,6);x.fill();
 x.strokeStyle='#8A7CA5';x.lineWidth=5;x.lineCap='round';x.beginPath();x.moveTo(1010,628);x.lineTo(1118,470);x.stroke();
 limb(x,[1235,622],[1081,424],20,14,'#C9B090');limb(x,[1235,618],[1081,420],16,10,'#EBD9B8');
 for(const cx of [1130,1650]){x.fillStyle='#17141F';x.beginPath();x.arc(cx,FL-72,72,0,7);x.fill();x.fillStyle='#8A7CA5';x.beginPath();x.arc(cx,FL-72,30,0,7);x.fill();x.fillStyle='#17141F';x.beginPath();x.arc(cx,FL-72,9,0,7);x.fill()}
 x.restore()}
// smoke from the engine while the car is broken; more when the first check fails
const smokeLvl=t=>t>=FIXED?0:t<F(894)?.6:t<F(993)?.25+1.5*fin(t,30.85,.3):.5;
function smoke(x,t){const lv=smokeLvl(t);if(lv<=0)return;const n=lv>1?12:7;for(let i=0;i<n;i++){const u=(t*.45+i/n+hash(i,3)*.1)%1,X=1085+Math.sin(i*7.3)*36+u*56+Math.sin(t*1.3+i)*8,Y=580-u*300,r=16+u*46;
  x.fillStyle=`rgba(201,184,224,${(1-u)*Math.min(1,u*6)*.4*Math.min(1,lv)})`;x.beginPath();x.ellipse(X,Y,r*1.15,r,0,0,7);x.fill()}}
function phone(x,t,on){x.fillStyle='#241736';x.fillRect(PH_X-7,560,14,FL-560);x.beginPath();x.ellipse(PH_X,FL+2,70,10,0,0,7);x.fill();
 x.fillStyle='#17141F';x.beginPath();x.roundRect(PH_X-102,282,204,296,24);x.fill();
 x.save();x.beginPath();x.roundRect(PH_X-88,298,176,264,12);x.clip();
 if(on){const g=x.createLinearGradient(0,298,0,562);g.addColorStop(0,'#2A4E7A');g.addColorStop(1,'#35306A');x.fillStyle=g;x.fillRect(PH_X-88,298,176,264);
  const sp=talk(t,.1,1.9)+talk(t,2.3,3.7)+talk(t,8.3,10.5)+talk(t,10.9,12.1)+talk(t,16.8,18.3),
   p={x:PH_X,y:478,s:.62,face:1,noLegs:true,breath:t*2.3,blink:blinkAt(t,[1.4,3.2,9.3,11.6,17.5]),look:.45,lookY:.15,brow:.3,mouth:.55,open:sp,tilt:Math.sin(t*1.9)*.03};
  drawPerson(x,HERO,p);cap(x,p);x.fillStyle='#2DB2AE';x.fillRect(PH_X-76,540,28,10);x.fillStyle='rgba(248,233,204,.5)';x.fillRect(PH_X-40,540,60+Math.sin(t*9)*18,10)}
 else{x.fillStyle='#1E1830';x.fillRect(PH_X-88,298,176,264);x.fillStyle='rgba(255,226,190,.07)';x.beginPath();x.moveTo(PH_X-88,470);x.lineTo(PH_X+30,298);x.lineTo(PH_X+88,298);x.lineTo(PH_X-88,560);x.fill()}
 x.restore()}
function toolbox(x){x.fillStyle='rgba(15,8,25,.4)';x.beginPath();x.ellipse(712,FL+12,84,10,0,0,7);x.fill();x.strokeStyle='#8A7CA5';x.lineWidth=7;x.lineCap='round';x.beginPath();x.moveTo(684,FL-54);x.lineTo(684,FL-74);x.lineTo(740,FL-74);x.lineTo(740,FL-54);x.stroke();
 x.fillStyle='#E4493F';x.beginPath();x.roundRect(650,FL-56,124,68,8);x.fill();x.fillStyle='#B8352E';x.fillRect(650,FL-32,124,7);x.fillStyle='#FFC66E';x.fillRect(702,FL-38,20,18)}
// before 18.5 s: you, alone at the hood, doing what the phone tells you
function youBefore(t){const wr=Math.sin(t*9)*((t<2.2||t>16.7)?1:.25);
 return {x:AT_CAR,y:PY,s:PS,face:1,breath:t*2.2,blink:blinkAt(t,[1.2,2.9,9.1,11.3,17.2]),
  look:kf(t,[[0,.8],[1.7,.8],[2.1,-.7],[8.1,-.7],[8.3,.8],[9.3,.8],[9.7,-.7],[16.6,-.7],[16.7,.8]]),lookY:.35,brow:.7,sad:.55,mouth:-.35,tilt:-.04,
  hands:{r:[158+wr*9,150+wr*13]},showH:{r:true}}}
function youAfter(t){const ask=fin(t,22.7,.25)*(1-fin(t,23.7,.3)),stop=fin(t,42.2,.25)*(1-fin(t,43.5,.3)),up=Math.max(ask,stop);
 return {x:YOU_X,y:PY,s:PS,face:1,breath:t*2.2,blink:blinkAt(t,[19.6,23.2,30.6,42.9,54.4,57.8]),look:.85,lookY:.2,brow:.25,sad:0,mouth:kf(t,[[18.5,.5],[35,.5],[41.4,.8]]),open:talk(t,22.75,23.6)+talk(t,42.3,43.2),
  hands:up>.02?{r:[lerp(96,lerp(150,128,stop),up),lerp(240,lerp(70,-20,stop),up)]}:{},showH:{r:up>.02}}}
// after 18.5 s: the mechanic at the car. He looks (27.1), turns the wrench (28.5), starts the engine and listens (29.8)
function mechPose(t){const st=t<F(993)?stepAt(t):-1,hi=t>=F(1527)&&t<F(1566),end=t>=F(1608);
 return {x:AT_CAR,y:PY,s:PS,face:1,breath:t*2.1,blink:blinkAt(t,[19.4,21.7,23.1,31.4,32.5,42.6,49.6,54.6,56.9,58.8]),bend:st==0?.3:st==1?.2:0,
  look:end?kf(t,[[53.6,.5],[55.5,.5],[55.6,.08]]):kf(t,[[18.5,.2],[20,.2],[20.5,.7],[22.6,.7],[22.7,-.6],[23.9,-.6],[24,.8],[42.2,.8],[42.6,-.6],[43.9,-.6],[44,.8],[48.7,.8],[48.75,.25]]),
  lookY:end?.05:kf(t,[[18.5,.1],[27,.1],[27.1,.55],[29.7,.55],[29.8,.3],[48.7,.3],[48.75,.1]]),
  brow:kf(t,[[18.5,.3],[31,.3],[31.3,.75],[33,.75],[33.2,.3]]),mouth:kf(t,[[18.5,.7],[30.9,.7],[31.3,.15],[33,.15],[33.2,.6],[53.6,.6],[55.6,.9]]),tilt:kf(t,[[18.5,.03],[30,.03],[30.4,-.09],[31.6,-.09],[32,.02]]),
  hands:{r:st==0?[150,120]:st==1?[168+Math.sin(t*12)*10,150+Math.cos(t*12)*7]:hi?[150+Math.sin(t*5)*8,112+Math.cos(t*5)*8]:[150,140+Math.sin(t*1.7)*4]},showH:{r:true}}}
function gBubbles(x,t){for(const [t0,s] of [[.45,'try the bolt'],[2.4,'now tighten it'],[8.7,'try this'],[10.85,'try this'],[11.25,'now that'],[16.95,'again'],[17.35,'again']]){const u=seg(t,t0,t0+.9);if(u<=0||u>=1)continue;const e=ease(u);
  bubble(x,lerp(700,800,e),lerp(372,318,e)-Math.sin(u*Math.PI)*26,s,'#F8E9CC',Math.min(1,u*7,(1-u)*5),26)}
 let u=seg(t,22.8,23.85);if(u>0&&u<1){const e=easeIO(u);bubble(x,lerp(440,780,e),lerp(390,350,e)-Math.sin(e*Math.PI)*150,'fix that noise','#FFC66E',Math.min(1,u*7,(1-u)*7),26)}
 u=seg(t,42.3,43.6);if(u>0&&u<1)bubble(x,452,318-u*18,'wait, stop','#F8E9CC',Math.min(1,u*8,(1-u)*5),28)}
function drawGarage(t,cam){let x=layer('gwall',cam);garageWall(x);pendant(x,760,t,.06);pendant(x,1480,t,.06);
 x=layer('gmid',cam);phone(x,t,t<IN);car(x,t);
 if(t<IN){const yp=actor(x,'you',FRIEND,youBefore(t),cam),h=handW(yp,'r');wrench(x,h[0],h[1],.2+Math.sin(t*9)*.3*((t<2.2||t>16.7)?1:.25),.55)}
 else{actor(x,'you',FRIEND,youAfter(t),cam);const mp=actor(x,'mech',HERO,mechPose(t),cam),h=handW(mp,'r'),st=t<F(993)?stepAt(t):-1;cap(x,mp);
  if(st==0){x.fillStyle='rgba(255,214,150,.3)';x.beginPath();x.moveTo(h[0]+26,h[1]+6);x.lineTo(1050,588);x.lineTo(1205,640);x.lineTo(1190,700+Math.sin(t*3)*6);x.lineTo(1030,690);x.closePath();x.fill();
   x.save();x.translate(h[0],h[1]);x.rotate(.35);x.fillStyle='#17141F';x.beginPath();x.roundRect(-22,-11,62,22,6);x.fill();x.fillStyle='#FFE3A8';x.fillRect(38,-13,8,26);x.restore()}
  else wrench(x,h[0],h[1],st==1?.25+Math.sin(t*12)*.35:-.95+Math.sin(t*1.7)*.05,.55)}
 smoke(x,t);if(t<F(993))mark(x,1104,470,34,false,fin(t,31.1,.25));if(t>=FIXED)mark(x,1104,505,34,true);gBubbles(x,t);
 x=layer('gfg',cam);if(t>=IN)toolbox(x);
 comp([['gwall',cam.b?cam.b[0]:0],['gmid',0],['gfg',0]])}

// ---------- studio: the same story on today's screen. Before: a chat window and your code. After: one terminal ----------
const DESK_Y=780;
function studioWall(x){let g=x.createLinearGradient(0,0,0,760);g.addColorStop(0,'#33255A');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 g=x.createRadialGradient(1100,300,30,1100,300,900);g.addColorStop(0,'rgba(255,196,130,.22)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 x.fillStyle='#237F80';x.fillRect(-800,700,W+2400,600);x.fillStyle='#2F9A98';x.fillRect(-800,692,W+2400,10)}
function desk(x){let g=x.createLinearGradient(0,DESK_Y,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(200,DESK_Y,1700,500);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(200,DESK_Y,1700,4)}
function win(x,X,Y,w,h,title,col){x.fillStyle='#141238';x.beginPath();x.roundRect(X,Y,w,h,10);x.fill();x.fillStyle='#2A1F42';x.beginPath();x.roundRect(X,Y,w,40,[10,10,0,0]);x.fill();txt(x,title,X+16,Y+21,21,col,'left','800')}
function bars(x,X,Y,n,w,seed,gap=22,h=9,a=1){x.save();x.globalAlpha*=a;for(let k=0;k<n;k++){x.fillStyle=k%3?'#2DB2AE':'#FF8F7A';x.fillRect(X+(k%2)*18,Y+k*gap,w*(.35+.6*hash(seed,k)),h)}x.restore()}
const ROWS=[[27.2,'read','3 files'],[28.6,'edit','app.js'],[29.9,'run','the tests',31.2,false,'1 failed'],[33.8,'edit','app.js'],[34.4,'run','the tests',35.2,true,'passed']];
function screen(x,t){x.fillStyle='#1B1430';x.fillRect(1255,744,30,36);x.beginPath();x.ellipse(1270,DESK_Y-2,150,8,0,0,7);x.fill();x.beginPath();x.roundRect(770,214,1000,530,14);x.fill();
 if(t<IN){ // BEFORE: he can only talk in the chat window; you carry his fix to your code and the error back
  win(x,790,234,440,490,'AI chat','#C9B8E0');avatar(x,1196,254,15,t);
  pill(x,1090,310,230,40,'#4C3A70');txt(x,'my code is broken',1090,311,19,'#F8E9CC','center','700');
  avatar(x,828,380,22,t,talk(t,4,5.6)+talk(t,8.3,12));for(let k=0;k<2;k++){x.fillStyle='#8A7CA5';x.fillRect(864,366+k*22,300*Math.min(1,fin(t,4.1+k*.4,.8)+(t>6?1:0))*(k?.7:1),10)}
  x.fillStyle='#0E0C24';x.beginPath();x.roundRect(864,418,340,118,8);x.fill();x.save();x.strokeStyle='#FFC66E';x.lineWidth=3;x.globalAlpha=.35+.65*fin(t,12.3,.3);x.stroke();x.restore();bars(x,882,438,4,280,5);
  const eb=fin(t,16.25,.3);if(eb>0){pill(x,1034,590,210,40,'#7A2E3A',eb);txt(x,'new error…',1034,591,19,'#FFD9D0','center','700',eb)}
  x.fillStyle='#2A1F42';x.beginPath();x.roundRect(806,672,408,38,8);x.fill();if(Math.floor(t*2.2)%2==0){x.fillStyle='#F8E9CC';x.fillRect(820,682,3,18)}
  win(x,1250,234,500,490,'your code','#C9B8E0');
  bars(x,1276,296,4,400,2);const pa=fin(t,13.45,.3);bars(x,1276,384,3,400,7,22,9,(1-pa)*.6);
  if(pa>0){x.save();x.globalAlpha=pa;x.fillStyle='rgba(255,198,110,.12)';x.fillRect(1264,374,472,74);x.strokeStyle='#FFC66E';x.lineWidth=3;x.strokeRect(1264,374,472,74);x.restore();bars(x,1276,386,3,330,5,22,9,pa)}
  bars(x,1276,462,3,400,9);
  x.fillStyle='#0E0C24';x.beginPath();x.roundRect(1262,548,476,160,8);x.fill();txt(x,'output',1278,568,17,'#8A7CA5','left','700');
  const run=fin(t,14.25,.15)*(1-fin(t,14.6,.1)),er=fin(t,14.6,.2);
  if(run>0){txt(x,'running',1278,610,22,'#F8E9CC','left','700',run);x.save();x.fillStyle='#2DB2AE';x.globalAlpha=run;x.fillRect(1380,604,200*seg(t,14.25,14.65),10);x.restore()}
  if(er>0){x.save();x.globalAlpha=er;x.fillStyle='rgba(228,73,63,.22)';x.beginPath();x.roundRect(1272,590,456,104,8);x.fill();x.restore();mark(x,1312,642,24,false,er);txt(x,'Error: it still fails',1350,628,25,'#FF8F7A','left','800',er);txt(x,'line 42',1350,662,20,'#C9B8E0','left','600',er)}
  let u=seg(t,12.55,13.5);if(u>0&&u<1){const e=easeIO(u);bubble(x,lerp(1034,1500,e),lerp(476,410,e)-Math.sin(e*Math.PI)*90,'his fix','#FFC66E',Math.min(1,u*8,(1-u)*8),26)}
  u=seg(t,15.3,16.3);if(u>0&&u<1){const e=easeIO(u);bubble(x,lerp(1500,1010,e),lerp(642,690,e)-Math.sin(e*Math.PI)*110,'the error','#FF8F7A',Math.min(1,u*8,(1-u)*8),26)}
  return}
 // AFTER: one terminal. You type one job; every step and every result lands in the same session
 win(x,790,234,960,490,'terminal','#2DB2AE');avatar(x,1716,254,15,t);txt(x,'coding agent',1692,255,19,'#C9B8E0','right','700');
 const job='fix the failing test',n=Math.floor(seg(t,24.2,25.3)*job.length);txt(x,'>',822,318,30,'#FFC66E','left','800');txt(x,job.slice(0,n),856,318,30,'#F8E9CC','left','700');
 if(t<27&&Math.floor(t*3)%2==0){x.font='700 30px Arial';x.fillStyle='#F8E9CC';x.fillRect(860+x.measureText(job.slice(0,n)).width,303,4,30)}
 const hl=t>=36&&t<37.45?Math.floor(seg(t,36,37.45)*ROWS.length):-1;
 ROWS.forEach(([t0,verb,what,t1,ok,res],i)=>{const a=fin(t,t0,.2),y=386+i*56;if(a<=0)return;if(i==hl){x.fillStyle='rgba(255,198,110,.16)';x.fillRect(806,y-25,928,50)}
  x.save();x.fillStyle='#2DB2AE';x.globalAlpha=a;x.beginPath();x.roundRect(826,y-7,14,14,4);x.fill();x.restore();txt(x,verb,860,y+1,28,'#2DB2AE','left','800',a);txt(x,what,960,y+1,28,'#F8E9CC','left','600',a);
  if(t1){const b=fin(t,t1,.25);mark(x,1210,y,17,ok,b);txt(x,res,1240,y+1,27,ok?'#2DB2AE':'#FF8F7A','left','800',b)}});
 txt(x,'done: the test passes',826,676,26,'#FFC66E','left','800',fin(t,35.45,.3))}
function youDesk(t){const ok=t>=IN;return {x:430,y:560,s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[4.8,6.9,13.1,15.9,24.9,36.8,44.9,46.4]),look:.9,lookY:.3,
  brow:ok?.15:.7,sad:ok?0:.55,mouth:ok?.7:kf(t,[[3.9,-.3],[14.6,-.3],[14.9,-.6]]),tilt:ok?.04:-.05}}
function drawStudio(t,cam){let x=layer('wall',cam,1);studioWall(x);
 const a=layer('lamp',cam);pendant(a,520,t,.08);pendant(a,1500,t,.08);
 const h=layer('hero',cam);actor(h,'you',FRIEND,youDesk(t),cam);
 const f=layer('fg',cam);desk(f);screen(f,t);
 comp([['wall',cam.b[0]],['lamp',0],['hero',0],['fg',cam.b[2]]])}

// ---------- board: BEFORE vs CODING-AGENT SESSION (brief.json "architecture", by hand) ----------
const BN={chat:[440,330,'Chat assistant'],you:[440,560,'You'],code:[440,790,'Your code'],
 you2:[1100,262,'You'],agent:[1100,560,'Coding agent'],read:[1410,560,'READ files',204,74],edit:[1600,410,'EDIT code',204,74],run:[1790,560,'RUN commands',204,74],check:[1600,710,'CHECK result',204,74]};
const NEW={agent:1,read:1,edit:1,run:1,check:1},CH={chat:HERO,you:FRIEND,you2:FRIEND,agent:HERO},RING=['read','edit','run','check'];
const LIKE={chat:['mechanic on the phone',150,0],you:['the messenger',150,0],code:['the car',150,0],agent:['in your garage',-135,72]};
const nodeIn={read:25.85,edit:26.05,run:26.25,check:26.45};
const sz=id=>[BN[id][3]||270,BN[id][4]||96];
function edgePt(a,b,off=[0,0]){const A=BN[a],B=BN[b],[aw,ah]=sz(a),[bw,bh]=sz(b),dx=B[0]-A[0],dy=B[1]-A[1],
  ka=Math.min(Math.abs(dx)>1?(aw/2+8)/Math.abs(dx):9,Math.abs(dy)>1?(ah/2+8)/Math.abs(dy):9),kb=Math.min(Math.abs(dx)>1?(bw/2+8)/Math.abs(dx):9,Math.abs(dy)>1?(bh/2+8)/Math.abs(dy):9);
 return [[A[0]+dx*ka+off[0],A[1]+dy*ka+off[1]],[B[0]-dx*kb+off[0],B[1]-dy*kb+off[1]]]}
function arrow(x,a,b,p,lab,col='#C9B8E0',wd=4,off=[0,0],side=1){if(p<=0)return;const [P,Q]=edgePt(a,b,off),E=[lerp(P[0],Q[0],p),lerp(P[1],Q[1],p)],an=Math.atan2(Q[1]-P[1],Q[0]-P[0]);
 x.save();x.globalAlpha*=Math.min(1,p*4);x.strokeStyle=col;x.lineWidth=wd;x.lineCap='round';x.beginPath();x.moveTo(P[0],P[1]);x.lineTo(E[0],E[1]);x.stroke();
 x.fillStyle=col;x.beginPath();x.moveTo(E[0]+Math.cos(an)*4,E[1]+Math.sin(an)*4);x.lineTo(E[0]-Math.cos(an-.45)*20,E[1]-Math.sin(an-.45)*20);x.lineTo(E[0]-Math.cos(an+.45)*20,E[1]-Math.sin(an+.45)*20);x.fill();x.restore();
 if(lab)txt(x,lab,(P[0]+Q[0])/2+14*side,(P[1]+Q[1])/2,21,col,side>0?'left':'right','600',ease(seg(p,.6,1)))}
function token(x,a,b,u,lab,col,off=[0,0],al=1){if(u<=0||u>=1||al<=0)return;const [P,Q]=edgePt(a,b,off),e=easeIO(u),X=lerp(P[0],Q[0],e),Y=lerp(P[1],Q[1],e),A=Math.min(1,u*6,(1-u)*6)*al;
 if(lab)bubble(x,X,Y,lab,col,A,19);else{x.save();x.globalAlpha=A;x.fillStyle=col;x.beginPath();x.arc(X,Y,11,0,7);x.fill();x.restore()}}
function node(x,id,t){const a=nodeIn[id]?fin(t,nodeIn[id],.4):1;if(a<=0)return;const [X,Y,lab]=BN[id],[w,h]=sz(id),nw=NEW[id],chip=RING.indexOf(id),on=chip>=0&&t>=F(813)&&t<FIXED&&stepAt(t)==chip;
 x.save();x.globalAlpha=a;const sc=lerp(.85,1,a);x.translate(X,Y);x.scale(sc,sc);
 x.fillStyle=on?'#1F5F6A':'#2A1F42';x.beginPath();x.roundRect(-w/2,-h/2,w,h,16);x.fill();x.strokeStyle=on?'#2DB2AE':nw?'#FFC66E':'#6E5D8E';x.lineWidth=nw?(chip>=0?5:7):3;x.stroke();
 const c=CH[id];let tx=0;if(c){x.save();x.beginPath();x.roundRect(-w/2,-h/2,w,h,16);x.clip();const p={x:-w/2+50,y:-h/2+46,s:.16,face:1,noLegs:true,breath:t*2+X,blink:blinkAt(t,[X%7+1,X%5+19,X%9+30]),mouth:.6,look:.5,lookY:.4};drawPerson(x,c,p);if(c==HERO)cap(x,p);x.restore();tx=30}
 txt(x,lab,tx,2,chip>=0?23:27,'#F8E9CC','center','700');
 if(nw){pill(x,w/2-30,-h/2,64,28,'#FFC66E');txt(x,'NEW',w/2-30,-h/2+1,16,'#1B1430','center','900')}
 if(LIKE[id])txt(x,LIKE[id][0],LIKE[id][1],LIKE[id][2],22,'#C9B8E0','left','600');
 if(id=='check')mark(x,-w/2+2,-h/2+2,17,true,fin(t,FIXED,.25));
 x.restore()}
function drawBoard(t,cam){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1500,560,40,1500,560,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=120;y<960;y+=28)x.fillRect(888,y,4,14); // not setLineDash: its anti-aliasing differs between renders
 txt(x,'BEFORE',90,156,40,'#C9B8E0');txt(x,'you carry everything by hand',90,204,28,'#C9B8E0','left','600'); // below the corner tag
 txt(x,'CODING-AGENT SESSION',960,156,40,'#FFC66E');
 // one session: the agent and its loop, from your request to the result
 const sb=fin(t,37.8,.7);if(sb>0){x.save();x.globalAlpha=sb;x.fillStyle='rgba(255,198,110,.06)';x.strokeStyle='#FFC66E';x.lineWidth=4;x.beginPath();x.roundRect(940,212,972,592,28);x.fill();x.stroke();
  pill(x,1740,212,250,44,'#FFC66E');txt(x,'ONE SESSION',1740,214,24,'#1B1430','center','900');x.restore();txt(x,'your request · every step · every result',1426,850,26,'#FFC66E','center','700',fin(t,38.5,.5))}
 // before: he can only send text, so you are the messenger, down with the fix and up with the error
 arrow(x,'chat','you',1,'only text','#C9B8E0',4,[42,0],1);arrow(x,'you','code',1,'paste, run','#C9B8E0',4,[42,0],1);arrow(x,'code','you',1,'error','#FF8F7A',4,[-42,0],-1);arrow(x,'you','chat',1,'ask again','#FF8F7A',4,[-42,0],-1);
 const al=1-fin(t,40.5,.5),cyc=(t*.62)%4,ci=Math.floor(cyc),cu=cyc-ci;
 if(ci==0)token(x,'chat','you',cu,'fix','#F8E9CC',[42,0],al);if(ci==1)token(x,'you','code',cu,'fix','#F8E9CC',[42,0],al);if(ci==2)token(x,'code','you',cu,'error','#FF8F7A',[-42,0],al);if(ci==3)token(x,'you','chat',cu,'error','#FF8F7A',[-42,0],al);
 // new: one job in, then the agent goes round the loop itself
 arrow(x,'you2','agent',1,'one job','#FFC66E',5);arrow(x,'agent','read',1,'');
 RING.forEach((id,i)=>arrow(x,id,RING[(i+1)%4],fin(t,nodeIn[id]+.35,.4),'','#2DB2AE',5));
 txt(x,'LOOP',1600,548,36,'#FFC66E','center','900',fin(t,26.5,.4));txt(x,'until done',1600,586,22,'#C9B8E0','center','600',fin(t,26.6,.4));
 token(x,'you2','agent',seg(t,25.8,26.5),'job','#FFC66E');
 for(const [t0,i] of [[33.2,0],[33.85,1],[34.45,2],[35.05,3]])token(x,RING[i],RING[(i+1)%4],seg(t,t0,t0+.5),'','#2DB2AE');
 const lp=(t*.5)%4,li=Math.floor(lp);if(t>=FIXED+.6)token(x,RING[li],RING[(li+1)%4],lp-li,'','#2DB2AE',[0,0],.55);
 for(const id in BN)node(x,id,t);
 const st=fin(t,40.2,.35);if(st>0){x.strokeStyle='#E4493F';x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(586,560);x.lineTo(586+160*st,560);x.stroke()}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function overlay(t,s){ctx.setTransform(1,0,0,1,0,0);
 // the brand's corner tag: the topic and the 60 s promise, on every frame, so a viewer always knows what this is
 {const x=ctx;x.font='800 32px Arial';const tw=x.measureText('Coding-agent session').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'Coding-agent session',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800')}
 card(t,.3,1.85,960,620,'the mechanic · on the phone','#F8E9CC',38);
 card(t,4.0,5.6,960,640,'coding with an AI chatbot','#F8E9CC',38);
 card(t,6.05,7.75,960,900,'What is a coding-agent session?','#FFC66E',48);
 card(t,8.3,10.45,130,940,'chat assistant = the mechanic on the phone','#F8E9CC',36);
 card(t,10.95,12.0,960,480,'he can only talk','#FFC66E',44);
 card(t,12.4,13.75,130,520,'you paste his fix','#F8E9CC',40);
 card(t,14.15,14.8,130,400,'you run it','#F8E9CC',40);
 card(t,15.3,16.45,130,660,'you carry the error back','#F8E9CC',40);
 card(t,16.85,18.2,130,500,'again and again','#FFC66E',46);
 card(t,18.7,20.35,960,960,'coding agent = the mechanic in your garage','#FFC66E',38);
 card(t,20.85,22.35,960,420,'with tools','#F8E9CC',44);
 card(t,22.8,23.75,130,560,'you give it one job','#F8E9CC',40);
 card(t,24.2,25.4,960,760,'in your terminal or your editor','#F8E9CC',38);
 card(t,32.1,32.8,130,480,'still broken?','#FF8F7A',46);
 card(t,36.1,37.3,960,700,'every step · every result','#F8E9CC',40);
 card(t,39.9,41.1,960,800,'you stop being the messenger','#F8E9CC',40);
 card(t,41.6,43.6,130,900,'you watch · you can stop it at any moment','#F8E9CC',36);
 card(t,44.65,45.35,130,620,'it can still be wrong','#FF8F7A',42);
 card(t,45.85,46.95,130,640,'so give it a test to run','#FFC66E',42);
 card(t,48.9,50.6,960,560,'not a bigger brain','#F8E9CC',44);
 card(t,51.1,51.9,960,440,'hands = tools','#2DB2AE',44);
 card(t,52.4,53.3,960,760,'and a way to check its own work','#2DB2AE',40);
 // the loop, lit step by step while the mechanic does it (shots 15-18)
 if(s>=15&&s<=18){const x=ctx,st=stepAt(t),bad=t>=31.2;pill(x,W/2,985,860,92,'rgba(27,20,48,.88)');
  ['READ','EDIT','RUN','CHECK'].forEach((lab,i)=>{const X=W/2-303+i*202,on=i==st;x.fillStyle=on?(i==3&&bad?'#E4493F':'#2DB2AE'):'#2A1F42';x.beginPath();x.roundRect(X-88,957,176,56,14);x.fill();
   x.strokeStyle=i<st?'#2DB2AE':on?'#F8E9CC':'#6E5D8E';x.lineWidth=3;x.stroke();txt(x,lab,X,987,28,on?'#1B1430':i<st?'#2DB2AE':'#C9B8E0','center','900');
   if(i<3){x.fillStyle='#C9B8E0';x.beginPath();x.moveTo(X+95,975);x.lineTo(X+108,986);x.lineTo(X+95,997);x.closePath();x.fill()}})}
 // the takeaway in two lines: the plain statement, then the amber punchline
 const v=fin(t,53.75,.35);if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-580,92,1160,210,40);ctx.fill();ctx.restore();
  txt(ctx,'It didn’t get a bigger brain.',W/2,154,56,'#F8E9CC','center','800',v);txt(ctx,'It got hands, and a way to check.',W/2,236,60,'#FFC66E','center','800',fin(t,54.35,.35))}
 // call to action: a subscribe button that pops in on the spoken line, with the next episode under it
 const c=fin(t,55.8,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-55.8)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}
 card(t,56.5,0,1010,820,'Next in 60 seconds: what are Agent Skills?','#C9B8E0',30)}

const GARAGE=[0,1,4,5,9,10,11,12,15,16,17,18,23,27,28,29,30,31],BOARD=[14,19,21,22,26];
FILM={dur:60,cuts:[0,66,117,177,243,324,366,420,453,501,555,618,678,720,771,813,855,894,960,993,1077,1128,1191,1242,1317,1368,1416,1461,1527,1566,1608,1668,1800],fadeIn:.15,fadeOut:.45,
 cam(s,u,t){const e=ease(u);return [
  {x:lerp(820,860,e),y:lerp(530,515,e),z:lerp(1.22,1.34,e),b:[2]},        // 0 garage: you at the hood, the mechanic on the phone
  {x:lerp(650,625,e),y:lerp(440,425,e),z:lerp(2.2,2.5,e),b:[5]},          // 1 the phone: there he is
  {x:lerp(760,810,e),y:lerp(510,500,e),z:lerp(1.3,1.42,e),b:[2,0,0]},     // 2 studio: you and an AI chat window
  {x:lerp(1040,1090,e),y:540,z:lerp(.94,.86,e),b:[2,0,0]},                // 3 wide: the question
  {x:lerp(1010,1090,e),y:lerp(545,535,e),z:lerp(.98,.9,e),b:[1]},         // 4 garage, wide: the whole problem
  {x:lerp(720,700,e),y:lerp(430,415,e),z:lerp(1.85,2.05,e),b:[4]},        // 5 he can only talk
  {x:lerp(1230,1280,e),y:lerp(470,480,e),z:lerp(1.5,1.62,e),b:[3,0,0]},   // 6 you paste his fix
  {x:lerp(1480,1500,e),y:lerp(560,600,e),z:lerp(2.1,2.35,e),b:[4,0,0]},   // 7 you run it: error
  {x:lerp(1290,1180,e),y:lerp(590,570,e),z:lerp(1.6,1.45,e),b:[3,0,0]},   // 8 you carry the error back
  {x:lerp(940,975,e),y:lerp(530,515,e),z:lerp(1.45,1.6,e),b:[3]},         // 9 again and again
  {x:lerp(870,850,e),y:lerp(470,500,e),z:lerp(1.95,1.5,e),b:[3]},         // 10 the mechanic, in your garage
  {x:lerp(735,925,e),y:lerp(705,605,e),z:lerp(2.25,2.05,e),b:[4]},        // 11 with tools
  {x:lerp(580,620,e),y:lerp(490,475,e),z:lerp(1.42,1.52,e),b:[2]},        // 12 you give it one job
  {x:lerp(1120,1170,e),y:lerp(400,390,e),z:lerp(1.7,1.88,e),b:[3,0,0]},   // 13 in a terminal
  {x:lerp(1470,1560,e),y:lerp(545,560,e),z:lerp(1.3,1.5,e)},              // 14 board: it works in a loop
  {x:lerp(990,1010,e),y:lerp(560,575,e),z:lerp(1.65,1.85,e),b:[3]},       // 15 it reads
  {x:lerp(1030,1050,e),y:lerp(600,610,e),z:lerp(2.4,2.7,e),b:[5]},        // 16 it edits
  {x:lerp(1130,1180,e),y:lerp(590,570,e),z:lerp(1.3,1.16,e),b:[2]},       // 17 it runs, and checks
  {x:lerp(930,960,e),y:lerp(455,445,e),z:lerp(2.3,2.55,e),b:[5]},         // 18 still broken?
  {x:lerp(1600,1585,e),y:560,z:lerp(1.75,1.55,e)},                        // 19 board: round again, until it passes
  {x:lerp(1250,1290,e),y:lerp(480,500,e),z:lerp(1.5,1.64,e),b:[3,0,0]},   // 20 every step, every result
  {x:lerp(1430,960,e),y:lerp(530,540,e),z:lerp(1.28,1,e)},                // 21 board: one session
  {x:lerp(470,520,e),y:lerp(560,545,e),z:lerp(1.5,1.66,e)},               // 22 before: you were the messenger
  {x:lerp(820,770,e),y:lerp(545,530,e),z:lerp(1.06,1.16,e),b:[2]},        // 23 you watch, and you can stop it
  {x:lerp(1100,1140,e),y:lerp(486,498,e),z:lerp(2.3,2.55,e),b:[4,0,0]},   // 24 it can still be wrong
  {x:lerp(1140,1100,e),y:lerp(590,612,e),z:lerp(2.45,2.2,e),b:[4,0,0]},   // 25 give it a test to run
  {x:lerp(960,1080,e),y:lerp(540,550,e),z:lerp(1,1.14,e)},                // 26 board: notice what changed
  {x:lerp(730,760,e),y:lerp(445,435,e),z:lerp(1.95,2.2,e),b:[4]},         // 27 the same mechanic, the phone now dark
  {x:lerp(930,955,e),y:lerp(560,545,e),z:lerp(2.6,2.95,e),b:[6]},         // 28 hands
  {x:lerp(1090,1115,e),y:lerp(560,540,e),z:lerp(2.25,2,e),b:[4]},         // 29 a way to check
  {x:lerp(940,975,e),y:lerp(505,495,e),z:lerp(1,1.09,e),b:[1]},           // 30 the garage, the job done
  {x:lerp(850,862,e),y:lerp(480,470,e),z:lerp(1.3,1.42,e),b:[3]}          // 31 the mechanic looks at you
 ][s]},
 draw(t,cam,s){if(GARAGE.includes(s))drawGarage(t,cam);else if(BOARD.includes(s))drawBoard(t,cam);else drawStudio(t,cam);overlay(t,s)},
 plants(){return {}}};
// sound events on the picture's clock (audio_mix.py turns them into sampled effects)
for(const t of [.3,1,1.7,16.9,17.3,17.7,18.1])say(t,'clink');
for(const t of [12.55,13.5,14.25,16.3,23.9,27.2,33.15,33.8,34.4,35,42.3,55.85])say(t,'tick');
for(let t=24.2;t<25.3;t+=.12)say(t,'key');
say(14.6,'bad');say(31.15,'bad');say(18.5,'box');for(const t of [28.7,29,29.3])say(t,'ratchet');
for(let t=29.9;t<30.8;t+=.13)say(t,'engine');say(30.9,'cough');say(35.2,'good');say(52.4,'good');
for(const f of [117,243,366,501,555,720,771,813,993,1077,1128,1242,1317,1416,1461,1608])say(f/30,'cut'); // a soft sound where the place changes
