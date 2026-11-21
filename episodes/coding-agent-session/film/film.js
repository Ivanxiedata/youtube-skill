// Episode 1 (v2): coding agents, told through a mechanic: on the phone (a chatbot) or in your garage (a coding agent).
// Steps 4-5 of docs/workflow.md. The picture follows beats.md shot by shot, 27 shots, 59.9 s. Every time in this file is FILM time:
// the voice (film/vo.wav, line times in vo_lines.json) is laid in at .08 s, so film time = voice time + .08. A state change on a cut uses C(shot) (the cut frame).
// Three places on one clock: the garage (the story), the studio (today's screen), the board (BEFORE: CHATBOT vs NOW: CODING AGENT).
// The mascot is the mechanic (teal cap): on the phone until 20.6 s, in the garage after. "You" is the car's owner.
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function bubble(x,X,Y,s,col,a,size=18){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`800 ${size}px Arial`;pill(x,X,Y,x.measureText(s).width+size*1.6,size*1.9,col);txt(x,s,X,Y+1,size,'#1B1430','center','800');x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const F=f=>f/30-1e-4;   // a state change on a cut: compare t with the cut frame, never with a rounded second
// a tick or a cross, drawn (not a font glyph, so every machine renders the same)
function mark(x,X,Y,r,ok,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=ok?'#2DB2AE':'#E4493F';x.beginPath();x.arc(X,Y,r,0,7);x.fill();x.strokeStyle='#FFF6E6';x.lineWidth=r*.28;x.lineCap='round';x.lineJoin='round';x.beginPath();
 if(ok){x.moveTo(X-r*.45,Y+r*.02);x.lineTo(X-r*.1,Y+r*.38);x.lineTo(X+r*.48,Y-r*.34)}else{x.moveTo(X-r*.36,Y-r*.36);x.lineTo(X+r*.36,Y+r*.36);x.moveTo(X+r*.36,Y-r*.36);x.lineTo(X-r*.36,Y+r*.36)}x.stroke();x.restore()}

// ---------- the clock: cut frames (beats.md shots 0-26), when the mechanic walks in, the loop's steps, when the job is done ----------
const CUTS=[0,63,158,227,275,357,438,482,539,612,677,734,821,864,903,968,1002,1089,1145,1209,1257,1319,1370,1458,1542,1610,1694,1797];
const C=i=>F(CUTS[i]);
const IN=C(9),PH_OFF=20.6,FAIL=C(15),FIXED=35.7,LAND=23.2;
// the loop: once in the garage (27.4-32.3, ends on a failed check), once more (33.55-35.7, ends on a pass)
const STEPS=[[C(12),0],[C(13),1],[C(14),2],[31.3,3],[33.55,0],[34.15,1],[34.75,2],[35.35,3]];
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

// ---------- garage: your car with the hood up, a phone on a stand, and from 20.8 s the mechanic himself ----------
const FL=830,PS=.6,PY=standY(FL,PS),PH_X=600,AT_CAR=860,YOU_X=330;
function garageWall(x){let g=x.createLinearGradient(0,0,0,FL);g.addColorStop(0,'#2B2050');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-900,-600,W+2700,FL+600);
 g=x.createRadialGradient(900,420,40,900,420,950);g.addColorStop(0,'rgba(255,196,130,.24)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+2700,FL+600);
 g=x.createLinearGradient(0,190,0,430);g.addColorStop(0,'#6A4590');g.addColorStop(.6,'#E0708A');g.addColorStop(1,'#FFC66E');x.fillStyle='#241736';x.fillRect(96,176,348,268);x.fillStyle=g;x.fillRect(110,190,320,240);x.fillStyle='#241736';x.fillRect(264,190,12,240);x.fillRect(110,304,320,12);
 x.fillStyle='#3A2A5C';x.beginPath();x.roundRect(1330,170,500,270,12);x.fill();x.fillStyle='#6E5D8E';
 x.fillRect(1402,236,14,150);x.fillRect(1378,220,62,28);x.fillRect(1502,250,16,140);x.beginPath();x.arc(1510,236,24,0,7);x.fill();x.fillRect(1602,220,10,120);x.fillRect(1595,336,24,54);
 x.beginPath();x.moveTo(1690,226);x.lineTo(1790,226);x.lineTo(1790,262);x.lineTo(1690,300);x.closePath();x.fill();x.fillStyle='#3A2A5C';x.beginPath();x.arc(1510,236,10,0,7);x.fill();
 g=x.createLinearGradient(0,FL,0,1250);g.addColorStop(0,'#4A3566');g.addColorStop(.2,'#33244E');g.addColorStop(1,'#1E1430');x.fillStyle=g;x.fillRect(-900,FL,W+2700,700);x.fillStyle='rgba(255,196,150,.22)';x.fillRect(-900,FL,W+2700,4)}
// the engine turns over (30.3-31.3), coughs when the check fails (FAIL), turns over again (34.75-35.35); once the job is done it purrs
const engine=t=>fin(t,30.3,.25)*(1-fin(t,31.25,.15))+.8*fin(t,FAIL,.1)*(1-fin(t,FAIL+.4,.2))+fin(t,34.75,.2)*(1-fin(t,35.3,.15))+(t>=FIXED?.22:0);
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
// smoke from the engine while the car is broken; a puff when the check fails; none once it is fixed
const smokeLvl=t=>t<FIXED?.5+1.4*fin(t,FAIL,.1)*(1-fin(t,FAIL+.5,.7)):.5*(1-fin(t,FIXED,.6));
function smoke(x,t){const lv=smokeLvl(t);if(lv<=.01)return;const n=12,big=Math.max(0,lv-.6);for(let i=0;i<n;i++){const u=(t*.45+i/n+hash(i,3)*.1)%1,X=1085+Math.sin(i*7.3)*36+u*56+Math.sin(t*1.3+i)*8,Y=580-u*300,r=(16+u*46)*(1+.35*big);
  x.fillStyle=`rgba(201,184,224,${(1-u)*Math.min(1,u*6)*.4*Math.min(1,lv)})`;x.beginPath();x.ellipse(X,Y,r*1.15,r,0,0,7);x.fill()}}
// the phone shows the mechanic's face until 20.6 s, then it goes dark
function phone(x,t){const on=t<PH_OFF?1:1-fin(t,PH_OFF,.35);x.fillStyle='#241736';x.fillRect(PH_X-7,560,14,FL-560);x.beginPath();x.ellipse(PH_X,FL+2,70,10,0,0,7);x.fill();
 x.fillStyle='#17141F';x.beginPath();x.roundRect(PH_X-102,282,204,296,24);x.fill();
 x.save();x.beginPath();x.roundRect(PH_X-88,298,176,264,12);x.clip();
 x.fillStyle='#1E1830';x.fillRect(PH_X-88,298,176,264);x.fillStyle='rgba(255,226,190,.07)';x.beginPath();x.moveTo(PH_X-88,470);x.lineTo(PH_X+30,298);x.lineTo(PH_X+88,298);x.lineTo(PH_X-88,560);x.fill();
 if(on>0){x.globalAlpha=on;const g=x.createLinearGradient(0,298,0,562);g.addColorStop(0,'#2A4E7A');g.addColorStop(1,'#35306A');x.fillStyle=g;x.fillRect(PH_X-88,298,176,264);
  const sp=talk(t,10.7,11.3)+talk(t,12.4,14.4)+talk(t,14.75,15.85)+talk(t,16.1,17.2),
   p={x:PH_X,y:478,s:.62,face:1,noLegs:true,breath:t*2.3,blink:blinkAt(t,[9.8,12.0,13.9,16.6,19.1]),look:.45,lookY:.15,brow:.3,mouth:.55,open:sp,tilt:Math.sin(t*1.9)*.03};
  drawPerson(x,HERO,p);cap(x,p);x.fillStyle='#2DB2AE';x.fillRect(PH_X-76,540,28,10);x.fillStyle='rgba(248,233,204,.5)';x.fillRect(PH_X-40,540,60+Math.sin(t*9)*18,10)}
 x.restore()}
// the red toolbox: (cx, by) = centre and bottom of the box; the handle stands 86 above the bottom
function toolbox(x,cx,by){x.fillStyle='rgba(15,8,25,.4)';x.beginPath();x.ellipse(cx,FL+12,84,10,0,0,7);x.fill();x.strokeStyle='#8A7CA5';x.lineWidth=7;x.lineCap='round';x.beginPath();x.moveTo(cx-28,by-66);x.lineTo(cx-28,by-86);x.lineTo(cx+28,by-86);x.lineTo(cx+28,by-66);x.stroke();
 x.fillStyle='#E4493F';x.beginPath();x.roundRect(cx-62,by-68,124,68,8);x.fill();x.fillStyle='#B8352E';x.fillRect(cx-62,by-44,124,7);x.fillStyle='#FFC66E';x.fillRect(cx-10,by-50,20,18)}
// before 20.6 s: you, alone at the hood, doing what the phone tells you (shrugging at "he can only talk")
function youBefore(t){const wr=Math.sin(t*9)*.6,sh=fin(t,15.35,.2)*(1-fin(t,15.95,.15));
 return {x:AT_CAR,y:PY,s:PS,face:1,breath:t*2.2,blink:blinkAt(t,[9.6,11.3,13.2,15.0,16.5]),
  look:kf(t,[[0,.8],[9.15,.8],[9.9,-.7],[11.6,-.7],[11.9,.8],[14.6,.8],[15.0,-.7],[15.8,-.7],[16.0,.8]]),lookY:.35,brow:.7+.3*sh,sad:.55,mouth:-.35,tilt:-.04+.08*sh,
  hands:{r:[158+wr*9+sh*50,150+wr*13-sh*70]},showH:{r:true}}}
// after 20.6 s: you step back to the left of the phone and watch; you raise a hand on "stop"
function youAfter(t){const stop=fin(t,46.85,.25)*(1-fin(t,47.9,.3));
 return {x:YOU_X,y:PY,s:PS,face:1,breath:t*2.2,blink:blinkAt(t,[20.5,24.4,30.6,38.8,46.0,49.6,54.4,57.8]),look:.85,lookY:.2,brow:.25,sad:0,mouth:kf(t,[[20,.5],[35,.5],[45.8,.8]]),open:talk(t,46.9,47.5),
  hands:stop>.02?{r:[lerp(96,145,stop),lerp(222,-95,stop)]}:{},showH:{r:stop>.02}}}
// the mechanic walks in carrying the toolbox (20.85-22.5), kneels and sets it down (22.95-23.2), then looks (27.4), turns the wrench (28.8), starts the engine and listens (30.1)
const MW=makeWalk({pts:[[40,FL+55],[700,FL+55],[AT_CAR,FL]],t0:20.7,t1:22.5,steps:7,scale:y=>PS*(1+(y-FL)*.0013)});
const FROZEN=[47.0,47.9],REL=23.05,BOXX=AT_CAR-140*PS,BOXY0=PY+(130+215)*PS+86;
function wrenchAng(t,st){if(t<23.4)return 1.4;if(t<23.9)return lerp(1.4,-.95,ease(seg(t,23.4,23.9)));
 if(t>=C(12)&&t<FIXED&&st==1)return .25+Math.sin(t*12)*.35;
 if(t>=C(22)&&t<C(23))return (t>=FROZEN[0]&&t<FROZEN[1])?.25:.25+Math.sin(t*12)*.35;
 return -.95+Math.sin(t*1.7)*.05}
function mechPose(t){const w=MW.at(t),st=t<FIXED?stepAt(t):-1,crouch=kf(t,[[22.6,0],[22.95,1],[23.2,1],[23.6,0]])*130;
 const inTap=t>=C(24)&&t<C(25),inUp=t>=C(25),frz=t>=FROZEN[0]&&t<FROZEN[1],work=t>=C(22)&&t<C(23)&&!frz;
 const p={x:w.c[0],y:standY(w.c[1],w.s)+crouch*w.s,s:w.s,face:1,breath:t*2.1,blink:blinkAt(t,[21.7,23.1,31.4,32.5,42.6,47.4,49.6,54.6,56.9,58.8]),
  bend:st==0?.3:st==1?.2:(work||frz)?.2:0,
  look:kf(t,[[20,.2],[22.5,.7],[22.9,.3],[23.6,.7],[48.7,.7],[53.6,.5],[55.5,.5],[55.6,.08]]),
  lookY:kf(t,[[22.5,.1],[22.95,.55],[23.2,.55],[23.6,.2],[27.3,.1],[27.4,.55],[30.0,.55],[30.1,.3],[45.6,.3],[47.0,.55],[47.3,.1],[47.6,.5],[47.9,.5],[48.1,.3],[51.5,.05]]),
  brow:kf(t,[[20,.3],[31,.3],[31.3,.75],[33,.75],[33.2,.3]]),mouth:kf(t,[[20,.7],[31.3,.6],[31.7,.15],[33,.15],[33.4,.6],[53.6,.6],[55.6,.9]]),tilt:kf(t,[[20,.03],[30.9,.03],[31.4,-.09],[32.2,-.09],[32.5,.02]])};
 walkPose(p,w,{arms:false});
 // hands: the right holds the wrench (hanging while he walks, ready after 23.4); the left holds the toolbox until it is down
 const sw=clamp((w.rW[0]-w.lW[0])/w.s/110,-1,1),ready=fin(t,23.4,.5);
 let r=w.moving?[96-sw*38,222]:[lerp(96,150,ready),lerp(222,140+Math.sin(t*1.7)*4,ready)];
 if(t>=C(12)&&t<FIXED)r=st==0?[150,120]:st==1?[168+Math.sin(t*12)*10,150+Math.cos(t*12)*7]:[150,140+Math.sin(t*1.7)*4];
 if(frz)r=[168,150];else if(work)r=[168+Math.sin(t*12)*10,150+Math.cos(t*12)*7];
 if(inTap)r=[100,-150+Math.sin(t*14)*10]; // one finger taps the cap's brim
 if(inUp)r=[150+Math.sin(t*5)*8,112+Math.cos(t*5)*8];
 p.hands={r,l:t<REL?[-140,215]:[kf(t,[[REL,-140],[REL+.4,-97.5]]),kf(t,[[REL,215],[REL+.4,220]])]};
 p.showH={r:true,l:t<REL};
 return p}
function gBubbles(x,t){for(const [t0,s,oy] of [[12.6,'try the bolt',0],[13.45,'now this one',0],[14.7,'try this',0],[15.25,'now tighten it',62]]){const u=seg(t,t0,t0+.9);if(u<=0||u>=1)continue;const e=ease(u);
  bubble(x,lerp(700,800,e),oy+lerp(372,318,e)-Math.sin(u*Math.PI)*26,s,'#F8E9CC',Math.min(1,u*7,(1-u)*5),26)}
 const u=seg(t,46.95,47.95);if(u>0&&u<1)bubble(x,452,318-u*18,'wait!','#F8E9CC',Math.min(1,u*8,(1-u)*5),30)}
function drawGarage(t,cam){let x=layer('gwall',cam);garageWall(x);pendant(x,760,t,.06);pendant(x,1480,t,.06);
 x=layer('gmid',cam);phone(x,t);car(x,t);
 if(t<IN){const yp=actor(x,'you',FRIEND,youBefore(t),cam),h=handW(yp,'r');wrench(x,h[0],h[1],.2+Math.sin(t*9)*.18,.55)}
 else{actor(x,'you',FRIEND,youAfter(t),cam);const mp=actor(x,'mech',HERO,mechPose(t),cam),st=t<FIXED?stepAt(t):-1,h=handW(mp,'r'),hl=handW(mp,'l');cap(x,mp);
  if(st==0){x.fillStyle='rgba(255,214,150,.3)';x.beginPath();x.moveTo(h[0]+26,h[1]+6);x.lineTo(1050,588);x.lineTo(1205,640);x.lineTo(1190,700+Math.sin(t*3)*6);x.lineTo(1030,690);x.closePath();x.fill();
   x.save();x.translate(h[0],h[1]);x.rotate(.35);x.fillStyle='#17141F';x.beginPath();x.roundRect(-22,-11,62,22,6);x.fill();x.fillStyle='#FFE3A8';x.fillRect(38,-13,8,26);x.restore()}
  else if(t>=C(24)&&t<C(25))wrench(x,hl[0]+4,hl[1],1.4,.55);   // the cap tap: the wrench hangs from his other hand
  else wrench(x,h[0],h[1],wrenchAng(t,st),.55);
  // the toolbox hangs from his left hand until 23.05, drops the last bit to the floor and stays there (drawn behind everyone)
  x.save();x.globalCompositeOperation='destination-over';
  if(t<REL)toolbox(x,hl[0],hl[1]+86);else toolbox(x,BOXX,lerp(BOXY0,FL+12,seg(t,REL,LAND)**2));x.restore()}
 smoke(x,t);
 mark(x,1104,470,34,false,fin(t,FAIL,.25)*(1-fin(t,33.5,.2)));mark(x,1104,505,34,true,fin(t,FIXED,.25));gBubbles(x,t);
 comp([['gwall',cam.b?cam.b[0]:0],['gmid',0]])}

// ---------- studio: the same story on today's screen. Before: a chat window and your code. After: one terminal ----------
const DESK_Y=780;
function studioWall(x){let g=x.createLinearGradient(0,0,0,760);g.addColorStop(0,'#33255A');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 g=x.createRadialGradient(1100,300,30,1100,300,900);g.addColorStop(0,'rgba(255,196,130,.22)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 x.fillStyle='#237F80';x.fillRect(-800,700,W+2400,600);x.fillStyle='#2F9A98';x.fillRect(-800,692,W+2400,10)}
function desk(x){let g=x.createLinearGradient(0,DESK_Y,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(200,DESK_Y,1700,500);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(200,DESK_Y,1700,4)}
function win(x,X,Y,w,h,title,col){x.fillStyle='#141238';x.beginPath();x.roundRect(X,Y,w,h,10);x.fill();x.fillStyle='#2A1F42';x.beginPath();x.roundRect(X,Y,w,40,[10,10,0,0]);x.fill();txt(x,title,X+16,Y+21,21,col,'left','800')}
function bars(x,X,Y,n,w,seed,gap=22,h=9,a=1){x.save();x.globalAlpha*=a;for(let k=0;k<n;k++){x.fillStyle=k%3?'#2DB2AE':'#FF8F7A';x.fillRect(X+(k%2)*18,Y+k*gap,w*(.35+.6*hash(seed,k)),h)}x.restore()}
// a code token: a small block of code bars with a coloured outline, flying between the windows
function codeToken(x,X,Y,col,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.fillStyle='#0E0C24';x.beginPath();x.roundRect(-58,-26,116,52,10);x.fill();x.strokeStyle=col;x.lineWidth=5;x.stroke();
 for(let k=0;k<3;k++){x.fillStyle=col==='#E4493F'?'#FF8F7A':k%2?'#2DB2AE':'#FFC66E';x.fillRect(-40,-14+k*14,68*(.5+.5*hash(k,4)),7)}x.restore()}
// one round trip of the code: lift off the chat reply (a), land in your code (b), the run fails (c), the error flies back (d-e)
const mkTrip=(a,d)=>({a,b:a+.36*d,c:a+.55*d,d:a+.62*d,e:a+d});
const HOOK=[[2.2,1.4],[3.6,1.0],[4.6,.7],[5.3,.7],[6.0,.7],[6.7,.7],[7.4,.7]].map(([a,d])=>mkTrip(a,d));
const STORY=[{a:16.45,b:17.05,c:18.05,d:18.45,e:19.4}];
function screenBefore(x,t,TR){
 let cur=null,landed=null;for(const r of TR){if(t>=r.a)cur=r;if(t>=r.b)landed=r}
 const glow=cur?fin(t,cur.a-.05,.15)*(1-fin(t,cur.b,.12)):0;
 win(x,790,234,440,490,'AI chat','#C9B8E0');avatar(x,1196,254,15,t);
 pill(x,1090,310,230,40,'#4C3A70');txt(x,'my code is broken',1090,311,19,'#F8E9CC','center','700');
 avatar(x,828,380,22,t,talk(t,4,5.6)+talk(t,12.4,14.4)+talk(t,16.1,17.2));for(let k=0;k<2;k++){x.fillStyle='#8A7CA5';x.fillRect(864,366+k*22,300*(k?.7:1),10)}
 x.fillStyle='#0E0C24';x.beginPath();x.roundRect(864,418,340,118,8);x.fill();x.save();x.strokeStyle='#FFC66E';x.lineWidth=3;x.globalAlpha=.35+.65*glow;x.stroke();x.restore();bars(x,882,438,4,280,5);
 if(landed){const eb=fin(t,landed.e,.25)*(cur===landed?1:1-fin(t,cur.a,.2));if(eb>0){pill(x,1034,590,210,40,'#7A2E3A',eb);txt(x,'new error…',1034,591,19,'#FFD9D0','center','700',eb)}}
 x.fillStyle='#2A1F42';x.beginPath();x.roundRect(806,672,408,38,8);x.fill();if(Math.floor(t*2.2)%2==0){x.fillStyle='#F8E9CC';x.fillRect(820,682,3,18)}
 win(x,1250,234,500,490,'your code','#C9B8E0');
 const pa=landed?fin(t,landed.b,.25):0;
 bars(x,1276,296,4,400,2);bars(x,1276,384,3,400,7,22,9,(1-pa)*.6);
 if(pa>0){x.save();x.globalAlpha=pa;x.fillStyle='rgba(255,198,110,.12)';x.fillRect(1264,374,472,74);x.strokeStyle='#FFC66E';x.lineWidth=3;x.strokeRect(1264,374,472,74);x.restore();bars(x,1276,386,3,330,5,22,9,pa)}
 bars(x,1276,462,3,400,9);
 x.fillStyle='#0E0C24';x.beginPath();x.roundRect(1262,548,476,160,8);x.fill();txt(x,'output',1278,568,17,'#8A7CA5','left','700');
 if(landed){const run=t<landed.c?fin(t,landed.b+.05,.12):0,er=fin(t,landed.c,.15);
  if(run>0){txt(x,'running',1278,610,22,'#F8E9CC','left','700',run);x.save();x.fillStyle='#2DB2AE';x.globalAlpha=run;x.fillRect(1380,604,200*seg(t,landed.b+.05,landed.c),10);x.restore()}
  if(er>0){x.save();x.globalAlpha=er;x.fillStyle='rgba(228,73,63,.22)';x.beginPath();x.roundRect(1272,590,456,104,8);x.fill();x.restore();mark(x,1312,642,24,false,er);txt(x,'Error: it still fails',1350,642,25,'#FF8F7A','left','800',er)}}
 if(cur){let u=seg(t,cur.a,cur.b);if(u>0&&u<1){const e=easeIO(u);codeToken(x,lerp(1034,1500,e),lerp(478,412,e)-Math.sin(e*Math.PI)*90,'#FFC66E',Math.min(1,u*8,(1-u)*8))}}
 if(landed){const u=seg(t,landed.d,landed.e);if(u>0&&u<1){const e=easeIO(u);codeToken(x,lerp(1500,1010,e),lerp(642,690,e)-Math.sin(e*Math.PI)*110,'#E4493F',Math.min(1,u*8,(1-u)*8))}}}
// AFTER: one terminal. You type one job (24.65-26.65); later the test row fails, then passes
const MINI=['READ','EDIT','RUN','CHECK'],MINI_ON=[50.05,50.3,50.55,50.8];
function screenAfter(x,t){
 win(x,790,234,960,490,'terminal','#2DB2AE');avatar(x,1716,254,15,t);txt(x,'coding agent',1692,255,19,'#C9B8E0','right','700');
 const job='fix the failing test',n=Math.floor(seg(t,24.65,26.65)*job.length);txt(x,'>',822,318,30,'#FFC66E','left','800');txt(x,job.slice(0,n),856,318,30,'#F8E9CC','left','700');
 if(t<26.85&&Math.floor(t*3)%2==0){x.font='700 30px Arial';x.fillStyle='#F8E9CC';x.fillRect(860+x.measureText(job.slice(0,n)).width,303,4,30)}
 if(t>=26.9&&t<C(12)){const a=fin(t,26.9,.25);txt(x,'working',856,386,26,'#C9B8E0','left','700',a);for(let k=0;k<3;k++){x.save();x.globalAlpha=a*(.35+.65*(Math.sin(t*9-k*1.3)*.5+.5));x.fillStyle='#FFC66E';x.beginPath();x.arc(968+k*20,386,6,0,7);x.fill();x.restore()}}
 if(t>=C(23)){ // the test row: runs, fails (49.55), the four steps flick round, passes (51.0)
  const a=fin(t,48.7,.2),y=386,bad=fin(t,49.55,.12),ok=fin(t,51.0,.15);
  x.save();x.fillStyle=ok>.5?'#2DB2AE':'#FF8F7A';x.globalAlpha=a;x.beginPath();x.roundRect(826,y-7,14,14,4);x.fill();x.restore();txt(x,'run',860,y+1,28,'#2DB2AE','left','800',a);txt(x,'the tests',960,y+1,28,'#F8E9CC','left','600',a);
  if(t<49.55){x.save();x.fillStyle='#2DB2AE';x.globalAlpha=a;x.fillRect(1180,y-5,200*seg(t,48.8,49.5),10);x.restore()}
  if(bad>0&&ok<.5){mark(x,1210,y,17,false,bad);txt(x,'failed',1240,y+1,27,'#FF8F7A','left','800',bad)}
  if(ok>0){mark(x,1210,y,17,true,ok);txt(x,'passed',1240,y+1,27,'#2DB2AE','left','800',ok)}
  const mv=fin(t,49.85,.2)*(1-fin(t,51.15,.2));if(mv>0){MINI.forEach((lab,i)=>{const X=1330+i*112,on=t>=MINI_ON[i]&&t<MINI_ON[i]+.25;x.save();x.globalAlpha=mv;pill(x,X,300,100,38,on?'#2DB2AE':'#2A1F42');x.strokeStyle=on?'#F8E9CC':'#6E5D8E';x.lineWidth=2.5;x.beginPath();x.roundRect(X-50,281,100,38,19);x.stroke();txt(x,lab,X,301,19,on?'#1B1430':'#C9B8E0','center','900');x.restore()})}}}
function youDesk(t){const ok=t>=IN,wear=ok?0:clamp((HOOK.filter(r=>t>=r.a).length+(t>=16.45?1:0))/3);return {x:430,y:560,s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[2.8,4.1,6.9,13.1,15.9,19.3,24.9,36.8,44.9,50.4]),look:.9,lookY:.3,
  brow:ok?.15:.7,sad:ok?0:.55+.3*wear,mouth:ok?.7:-.3-.3*wear,tilt:ok?.04:-.05-.05*wear}}
// the studio is drawn with the before screen (S1, S2, S7, S8) or the after screen (S11, S23)
function drawStudio(t,cam,after,TR){let x=layer('wall',cam,1);studioWall(x);
 const a=layer('lamp',cam);pendant(a,520,t,.08);pendant(a,1500,t,.08);
 const h=layer('hero',cam);actor(h,'you',FRIEND,youDesk(t),cam);
 const f=layer('fg',cam);desk(f);x=f;x.fillStyle='#1B1430';x.fillRect(1255,744,30,36);x.beginPath();x.ellipse(1270,DESK_Y-2,150,8,0,0,7);x.fill();x.beginPath();x.roundRect(770,214,1000,530,14);x.fill();
 if(after)screenAfter(f,t);else screenBefore(f,t,TR);
 if(after&&t<C(12))txt(f,'terminal or editor',1270,812,28,'#F8E9CC','center','700',fin(t,25.6,.3));
 comp([['wall',cam.b[0]],['lamp',0],['hero',0],['fg',cam.b[2]]])}

// ---------- board: BEFORE: CHATBOT vs NOW: CODING AGENT (brief.json "architecture", by hand) ----------
// right column: You, one arrow "one job" down to the Coding agent, which sits in the middle of the ring READ -> EDIT -> RUN -> CHECK -> back to READ
const BN={chat:[440,330,'Chatbot'],you:[440,560,'You'],code:[440,790,'Your code'],
 you2:[1100,290,'You'],agent:[1440,560,'Coding agent',250,96],read:[1440,395,'READ files',204,74],edit:[1730,560,'EDIT code',204,74],run:[1440,725,'RUN commands',204,74],check:[1150,560,'CHECK result',204,74]};
const NEW={agent:1,read:1,edit:1,run:1,check:1},CH={chat:HERO,you:FRIEND,you2:FRIEND,agent:HERO},RING=['read','edit','run','check'];
const LIKE={chat:['mechanic on the phone',150,0],you:['the messenger',150,0],code:['the car',150,0],agent:['in your garage',-125,72]};
const nodeIn={agent:5.3,read:5.4,edit:5.55,run:5.7,check:5.85};     // the ring pops in on "but how does" (S2)
const LIT=[[6.95,0],[7.12,1],[7.28,2],[7.42,3],[7.65,0],[7.9,1],[8.12,2],[8.35,3],[40.38,0],[40.7,1],[41.0,2],[41.28,3]]; // chips lit in turn: "four steps", the ring once more, "Read, edit, run, check."
const litChip=t=>{let c=-1;for(const [a,i] of LIT)if(t>=a&&t<a+.3)c=i;return c};
const sz=id=>[BN[id][3]||270,BN[id][4]||96];
const LEFTCOL={chat:1,you:1,code:1},ldim=t=>1-.7*fin(t,38.2,.4)*(1-fin(t,43.9,.3));const LD=(id,t)=>LEFTCOL[id]?ldim(t):1;
function edgePt(a,b,off=[0,0]){const A=BN[a],B=BN[b],[aw,ah]=sz(a),[bw,bh]=sz(b),dx=B[0]-A[0],dy=B[1]-A[1],
  ka=Math.min(Math.abs(dx)>1?(aw/2+8)/Math.abs(dx):9,Math.abs(dy)>1?(ah/2+8)/Math.abs(dy):9),kb=Math.min(Math.abs(dx)>1?(bw/2+8)/Math.abs(dx):9,Math.abs(dy)>1?(bh/2+8)/Math.abs(dy):9);
 return [[A[0]+dx*ka+off[0],A[1]+dy*ka+off[1]],[B[0]-dx*kb+off[0],B[1]-dy*kb+off[1]]]}
function arrow(x,a,b,p,lab,col='#C9B8E0',wd=4,off=[0,0],side=1,al=1){if(p<=0||al<=0)return;const [P,Q]=edgePt(a,b,off),E=[lerp(P[0],Q[0],p),lerp(P[1],Q[1],p)],an=Math.atan2(Q[1]-P[1],Q[0]-P[0]);
 x.save();x.globalAlpha*=Math.min(1,p*4)*al;x.strokeStyle=col;x.lineWidth=wd;x.lineCap='round';x.beginPath();x.moveTo(P[0],P[1]);x.lineTo(E[0],E[1]);x.stroke();
 x.fillStyle=col;x.beginPath();x.moveTo(E[0]+Math.cos(an)*4,E[1]+Math.sin(an)*4);x.lineTo(E[0]-Math.cos(an-.45)*20,E[1]-Math.sin(an-.45)*20);x.lineTo(E[0]-Math.cos(an+.45)*20,E[1]-Math.sin(an+.45)*20);x.fill();x.restore();
 if(lab)txt(x,lab,(P[0]+Q[0])/2+14*side,(P[1]+Q[1])/2,21,col,side>0?'left':'right','600',ease(seg(p,.6,1))*al)}
function token(x,a,b,u,lab,col,off=[0,0],al=1){if(u<=0||u>=1||al<=0)return;const [P,Q]=edgePt(a,b,off),e=easeIO(u),X=lerp(P[0],Q[0],e),Y=lerp(P[1],Q[1],e),A=Math.min(1,u*6,(1-u)*6)*al;
 if(lab)bubble(x,X,Y,lab,col,A,19);else{x.save();x.globalAlpha=A;x.fillStyle=col;x.beginPath();x.arc(X,Y,11,0,7);x.fill();x.restore()}}
function node(x,id,t){const a=nodeIn[id]?fin(t,nodeIn[id],.35):1;if(a<=0)return;const [X,Y,lab]=BN[id],[w,h]=sz(id),nw=NEW[id],chip=RING.indexOf(id),on=chip>=0&&litChip(t)==chip;
 let al=a*LD(id,t);if(id=='you')al*=1-fin(t,44.7,.5);
 const red=id=='you'?fin(t,44.1,.15)*(1-fin(t,44.55,.15)):0;
 x.save();x.globalAlpha*=al;const sc=lerp(.85,1,a);x.translate(X,Y);x.scale(sc,sc);
 x.fillStyle=on?'#1F5F6A':red>.3?'#7A2E3A':'#2A1F42';x.beginPath();x.roundRect(-w/2,-h/2,w,h,16);x.fill();x.strokeStyle=on?'#2DB2AE':red>.3?'#E4493F':nw?'#FFC66E':'#6E5D8E';x.lineWidth=nw?(chip>=0?5:7):3;x.stroke();
 const c=CH[id];let tx=0;if(c){const a2=layer('av',null);a2.save();a2.setTransform(x.getTransform());a2.beginPath();a2.roundRect(-w/2,-h/2,w,h,16);a2.clip();const p={x:-w/2+50,y:-h/2+46,s:.16,face:1,noLegs:true,breath:t*2+X,blink:blinkAt(t,[X%7+1,X%5+19,X%9+30]),mouth:.6,look:.5,lookY:.4};drawPerson(a2,c,p);if(c==HERO)cap(a2,p);a2.restore();
  const g=x.globalAlpha;x.save();x.setTransform(1,0,0,1,0,0);x.globalAlpha=g;x.drawImage(L.av,0,0);x.restore();tx=30}
 txt(x,lab,tx,2,chip>=0?23:27,'#F8E9CC','center','700');
 if(nw){pill(x,w/2-30,-h/2,64,28,'#FFC66E');txt(x,'NEW',w/2-30,-h/2+1,16,'#1B1430','center','900')}
 if(LIKE[id])txt(x,LIKE[id][0],LIKE[id][1],LIKE[id][2],22,'#C9B8E0','left','600',id=='you'?al:1);
 x.restore()}
// a badge that pops (scale overshoot) at time t0
function badge(x,X,Y,s,t,t0,a=1){const u=seg(t,t0,t0+.3);if(u<=0)return;const k=lerp(.4,1,easeIO(u))+.1*Math.sin(u*Math.PI);x.save();x.globalAlpha*=Math.min(1,u*4)*a;x.translate(X,Y);x.scale(k,k);pill(x,0,0,s.length*20+44,46,'#FFC66E');x.strokeStyle='#1B1430';x.lineWidth=3;x.beginPath();x.roundRect(-(s.length*20+44)/2,-23,s.length*20+44,46,23);x.stroke();txt(x,s,0,2,26,'#1B1430','center','900');x.restore()}
function drawBoard(t,cam,nocomp){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1440,560,40,1440,560,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const left=t>=C(17),hook=t<C(17);   // the hook shows only the new half (S2, S3); the payoff shows BEFORE and NOW side by side
 const ld=ldim(t);
 if(left){x.fillStyle=`rgba(201,184,224,${.25*ld})`;for(let y=120;y<960;y+=28)x.fillRect(888,y,4,14); // not setLineDash: its anti-aliasing differs between renders
  const tt=1-fin(t,38.2,.3)*(1-fin(t,43.9,.3));txt(x,'BEFORE: CHATBOT',90,156,40,'#C9B8E0','left','700',tt);txt(x,'you carry everything by hand',90,204,28,'#C9B8E0','left','600',tt);txt(x,'NOW: CODING AGENT',960,156,40,'#FFC66E','left','700',tt)}
 // one session: the box draws on from the left on "The whole visit is one session." (S20)
 const sb=ease(seg(t,42.0,42.9));if(sb>0){x.save();x.beginPath();x.rect(930,200,sb*990,640);x.clip();x.fillStyle='rgba(255,198,110,.06)';x.strokeStyle='#FFC66E';x.lineWidth=4;x.beginPath();x.roundRect(940,226,972,578,28);x.fill();x.stroke();x.restore();
  const pl=fin(t,42.8,.3);if(pl>0){x.save();x.globalAlpha=pl;pill(x,1740,226,250,44,'#FFC66E');txt(x,'ONE SESSION',1740,228,24,'#1B1430','center','900');x.restore()}
  const ts=fin(t,43.0,.4);if(ts>0){x.save();x.globalAlpha=ts;x.fillStyle='rgba(255,198,110,.14)';x.beginPath();x.roundRect(1096,830,660,40,20);x.fill();for(let k=0;k<9;k++){x.fillStyle=k%3?'#2DB2AE':'#FF8F7A';x.fillRect(1116+k*14,846,10,8)}x.restore();txt(x,'every step · every result',1450,851,24,'#FFC66E','left','700',ts)}}
 if(left){ // before: he can only send text, so you are the messenger, down with the fix and up with the error
  const yo=(1-fin(t,44.7,.5)),yl=yo*ld;
  arrow(x,'chat','you',1,'only text','#C9B8E0',4,[42,0],1,yl);arrow(x,'you','code',1,'paste, run','#C9B8E0',4,[42,0],1,yl);arrow(x,'code','you',1,'error','#FF8F7A',4,[-42,0],-1,yl);arrow(x,'you','chat',1,'ask again','#FF8F7A',4,[-42,0],-1,yl);
  const al=yl,cyc=(t*.62)%4,ci=Math.floor(cyc),cu=cyc-ci;
  if(ci==0)token(x,'chat','you',cu,'fix','#F8E9CC',[42,0],al);if(ci==1)token(x,'you','code',cu,'fix','#F8E9CC',[42,0],al);if(ci==2)token(x,'code','you',cu,'error','#FF8F7A',[-42,0],al);if(ci==3)token(x,'you','chat',cu,'error','#FF8F7A',[-42,0],al)}
 // now: one job in, then the agent goes round the loop itself
 if(left){arrow(x,'you2','agent',1,'','#FFC66E',5);txt(x,'one job',1162,378,22,'#FFC66E','right','700');for(const id of ['you2'])node(x,id,t)}
 RING.forEach((id,i)=>arrow(x,id,RING[(i+1)%4],fin(t,6.6+i*.1,.3),i==3?'until done':'','#2DB2AE',5,[0,0],-1));
 for(const [t0,i] of LIT)token(x,RING[i],RING[(i+1)%4],seg(t,t0,t0+.3),'','#2DB2AE');
 for(const [t0,i] of [[38.9,0],[39.0,1],[39.1,2],[39.2,3]])token(x,RING[i],RING[(i+1)%4],seg(t,t0,t0+.35),'','#FFC66E');
 const lp=(t*.5)%4,li=Math.floor(lp);if(t>=C(17))token(x,RING[li],RING[(li+1)%4],lp-li,'','#2DB2AE',[0,0],.45);
 for(const id of ['chat','you','code'])if(left)node(x,id,t);
 for(const id of ['agent','read','edit','run','check'])node(x,id,t);
 // the loop closes: CHECK becomes a tick the second time round (S3), and a big amber "?" stays beside the ring
 if(hook)mark(x,1150-102+2,560-37+2,17,true,fin(t,8.35,.25));
 const qa=fin(t,8.55,.3);if(qa>0&&hook){x.save();x.globalAlpha=qa;x.translate(1865,395);x.scale(lerp(.5,1,qa),lerp(.5,1,qa));x.font='200px Impact, "Arial Black", sans-serif';x.textAlign='center';x.textBaseline='middle';x.lineJoin='round';x.lineWidth=34;x.strokeStyle='#120A1C';x.strokeText('?',0,0);x.fillStyle='#FFC66E';x.fillText('?',0,0);x.restore()}
 // the hook's numbers, said again in the payoff: 1 AGENT, 1 LOOP, 4 STEPS
 const bt=hook?6.03:38.22;if((hook&&t>=6.03)||t>=38.22){badge(x,1440,470,'1 AGENT',t,bt)}
 if(t>=38.85)badge(x,1700,690,'1 LOOP',t,38.85);if(t>=39.45)badge(x,1180,690,'4 STEPS',t,39.45);
 if(!nocomp)comp([['board',0]])}
// S2: the studio on the left (dimmed, grey, still looping), the board's new half on the right, an amber "vs" between
function drawSplit(t,cam){drawStudio(t,cam,false,HOOK);const x=ctx;x.save();x.setTransform(1,0,0,1,0,0);x.beginPath();x.rect(0,0,960,H);x.clip();
 x.globalCompositeOperation='saturation';x.fillStyle='#808080';x.globalAlpha=.9;x.fillRect(0,0,960,H);x.globalCompositeOperation='source-over';x.globalAlpha=1;x.fillStyle='rgba(18,12,34,.5)';x.fillRect(0,0,960,H);x.restore();
 drawBoard(t,{x:W/2,y:H/2,z:1},true);const k=lerp(1,1.05,seg(t,C(2),C(3)));x.save();x.setTransform(1,0,0,1,0,0);x.beginPath();x.rect(960,0,960,H);x.clip();
 x.fillStyle='#120a1c';x.fillRect(960,0,960,H);x.translate(1440,540);x.scale(k,k);x.translate(-1440,-540);x.drawImage(L.board,0,0);x.restore();
 x.save();x.setTransform(1,0,0,1,0,0);x.fillStyle='#120A1C';x.fillRect(954,0,12,H);const v=fin(t,5.4,.3),vs=lerp(.5,1,v);x.translate(960,540);x.scale(vs,vs);x.globalAlpha=v;
 x.font='120px Impact, "Arial Black", sans-serif';x.textAlign='center';x.textBaseline='middle';x.lineJoin='round';x.lineWidth=26;x.strokeStyle='#120A1C';x.strokeText('vs',0,0);x.fillStyle='#FFC66E';x.fillText('vs',0,0);x.restore()}

// ---------- words on screen (screen space) ----------
// a caption chip: fades in at a, out at b (b is chosen so the fade ends before the shot's cut); o.x/o.al/o.y place it (top-left, centred, bottom)
function chip(t,a,b,s,col='#F8E9CC',size=38,o={}){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;const x=ctx;x.save();x.font=`800 ${size}px Arial`;const w=x.measureText(s).width+size*1.7;x.restore();
 const al=o.al||'center',X=o.x??W/2,Y=o.y??130,cx=al=='left'?X+w/2:al=='right'?X-w/2:X;pill(x,cx,Y,w,size*2.2,'rgba(27,20,48,.86)',v);txt(x,s,cx,Y+2,size,col,'center','800',v)}
function cornerTag(){const x=ctx;x.save();x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.font='800 32px Arial';const tw=x.measureText('Coding agents').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'Coding agents',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800');x.restore()}
function overlay(t,s){ctx.setTransform(1,0,0,1,0,0);
 // the brand's corner tag: the topic and the 60 s promise, on every frame, so a viewer always knows what this is
 cornerTag();
 const TOP={y:52};
 chip(t,2.25,4.95,'BEFORE: CHATBOT','#FF8F7A',36,{x:32,al:'left',y:130});
 chip(t,5.45,7.25,'CHATBOT  vs  CODING AGENT','#F8E9CC',36,TOP);
 chip(t,9.3,11.55,'one story: your car and a mechanic','#F8E9CC',38);
 chip(t,12.1,14.3,'chatbot = the mechanic on the phone','#F8E9CC',38);
 chip(t,14.75,15.75,'he can only talk','#FFC66E',44);
 chip(t,16.2,17.65,'you paste, you run','#F8E9CC',40);
 chip(t,18.1,20.05,'you carry the error back','#F8E9CC',40);
 chip(t,20.55,22.25,'coding agent = the same mechanic','#FFC66E',38);
 chip(t,23.5,24.15,'with tools','#F8E9CC',44,{y:960});
 chip(t,24.6,27.05,'one job','#F8E9CC',44);
 chip(t,32.35,33.1,'still broken?','#FF8F7A',46);
 chip(t,33.55,36.0,'until done','#2DB2AE',44);
 chip(t,36.45,37.9,'THE ANSWER','#FFC66E',44,TOP);
 chip(t,44.1,45.35,'you stop being the messenger','#F8E9CC',40,TOP);
 chip(t,46.7,48.3,'you can stop it at any moment','#F8E9CC',38);
 chip(t,48.85,49.95,'it can still be wrong','#FF8F7A',42);
 chip(t,50.05,51.1,'give it a test to run','#FFC66E',42);
 // the loop, lit step by step while the mechanic does it (S12-S16): READ -> EDIT -> RUN -> CHECK, and the arrow back to READ
 if(s>=12&&s<=16){const x=ctx,st=stepAt(t),bad=t>=FAIL&&t<33.55;pill(x,W/2,985,860,92,'rgba(27,20,48,.88)');
  ['READ','EDIT','RUN','CHECK'].forEach((lab,i)=>{const X=W/2-303+i*202,on=i==st&&t<FIXED,done=t>=FIXED||i<st;x.fillStyle=on?(i==3&&bad?'#E4493F':'#2DB2AE'):(i==3&&bad)?'#7A2E3A':'#2A1F42';x.beginPath();x.roundRect(X-88,957,176,56,14);x.fill();
   x.strokeStyle=(i==3&&bad)?'#E4493F':done?'#2DB2AE':on?'#F8E9CC':'#6E5D8E';x.lineWidth=3;x.stroke();txt(x,lab,X,987,28,on?'#1B1430':done?'#2DB2AE':'#C9B8E0','center','900');
   if(i<3){x.fillStyle='#C9B8E0';x.beginPath();x.moveTo(X+95,975);x.lineTo(X+108,986);x.lineTo(X+95,997);x.closePath();x.fill()}});
  if(bad)mark(x,W/2-303+3*202+78,960,16,false,fin(t,FAIL,.2));
  if(t>=C(16)){const a=fin(t,C(16)+.05,.3),X0=W/2-303,X3=W/2+303;x.save();x.globalAlpha=a;x.strokeStyle='#C9B8E0';x.lineWidth=5;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(X3,1033);x.lineTo(X3,1054);x.lineTo(X0,1054);x.lineTo(X0,1036);x.stroke();
   x.fillStyle='#C9B8E0';x.beginPath();x.moveTo(X0,1018);x.lineTo(X0-11,1036);x.lineTo(X0+11,1036);x.closePath();x.fill();x.restore()}
  if(t>=FIXED)mark(x,W/2-303+3*202+78,960,16,true,fin(t,FIXED,.25))}
 // the takeaway in two lines: the plain statement, then the amber punchline (S24, S25; stays through the outro)
 const v=fin(t,51.65,.35);if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-580,92,1160,210,40);ctx.fill();ctx.restore();
  txt(ctx,'It didn’t get a bigger brain.',W/2,154,56,'#F8E9CC','center','800',v);txt(ctx,'It got hands, and a way to check.',W/2,236,60,'#FFC66E','center','800',fin(t,53.8,.35))}
 // call to action: the Subscribe button pops in on the spoken line ("Subscribe", 56.6 s), the next episode under it
 const c=fin(t,56.6,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-56.6)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}
 chip(t,56.9,0,'Next in 60 seconds: what are Agent Skills?','#C9B8E0',30,{y:1010})}

// ---------- title card: the topic in the first frame, in the thumbnail's style (film/thumb.js) ----------
function title(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.62,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,680,60,W/2,680,1000);g.addColorStop(0,'rgba(255,196,120,.8)');g.addColorStop(.4,'rgba(238,110,104,.42)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();const z=1+.03*clamp(t/2.1);x.translate(W/2,H/2);x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=n=>`${n}px Impact, "Arial Black", sans-serif`,TOPIC='CODING AGENTS';
 x.font=font(100);const size=Math.min(330,100*1560/x.measureText(TOPIC).width);
 const put=(str,Y,sz,col)=>{x.font=font(sz);x.lineWidth=sz*.17;x.strokeStyle='#120A1C';x.strokeText(str,W/2,Y);x.fillStyle=col;x.fillText(str,W/2,Y)};
 const Y0=600;put('LEARN',Y0-size*.95,size*.5,'#F8E9CC');put(TOPIC,Y0,size,'#FFC66E');
 // the sticker is the brand mark: same red, same tilt, same words as the thumbnail
 x.save();x.translate(W/2,Y0+200);x.rotate(-.035);x.font=font(104);const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle='#120A1C';x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle='#E4493F';x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textAlign='left';x.textBaseline='middle';x.fillText('IN 60 SECONDS',-sw/2+38,6);x.restore();x.restore();
 cornerTag()}

// ---------- the film: 27 shots (beats.md S0-S26). Scene per shot: t title, s studio (before), a studio (after), p split, b board, g garage ----------
const SCENE='t s p b g g g s s g g a g g g g g b b b b b g a g g g'.split(' ');
FILM={dur:59.9,cuts:CUTS,fadeIn:0,fadeOut:.45,
 cam(s,u,t){if(!s)return {x:W/2,y:H/2,z:1};const e=ease(u);return [
  null,
  {x:lerp(1000,1040,e),y:lerp(510,500,e),z:lerp(1.15,1.24,e),b:[2,0,0]},      // 1 studio: the paste loop, you tired on the left
  {x:lerp(1832,1820,e),y:540,z:lerp(.62,.64,e),b:[2,0,0]},                     // 2 split: the studio on the left half (the board's half is fixed)
  {x:lerp(1440,1455,e),y:lerp(540,548,e),z:lerp(1.38,1.5,e)},                // 3 push in on the ring: one more round, the question
  {x:lerp(1010,1090,e),y:lerp(545,535,e),z:lerp(.98,.9,e),b:[1]},            // 4 garage wide: the car, you, the phone
  {x:lerp(650,625,e),y:lerp(440,425,e),z:lerp(2.2,2.5,e),b:[5]},             // 5 the phone: there he is
  {x:lerp(820,860,e),y:lerp(530,515,e),z:lerp(1.22,1.34,e),b:[2]},           // 6 phone and you: he can only talk
  {x:lerp(1230,1280,e),y:lerp(470,480,e),z:lerp(1.5,1.62,e),b:[3,0,0]},      // 7 you paste his fix
  {x:lerp(1130,1170,e),y:lerp(520,510,e),z:lerp(1.34,1.4,e),b:[3,0,0]},      // 8 the error comes back
  {x:lerp(740,780,e),y:lerp(575,560,e),z:lerp(1.5,1.62,e),b:[4]},            // 9 the phone goes dark, the mechanic walks in
  {x:lerp(760,900,e),y:lerp(640,575,e),z:lerp(1.95,1.8,e),b:[4]},            // 10 with tools
  {x:lerp(1080,1130,e),y:500,z:lerp(1.12,1.22,e),b:[3,0,0]},                  // 11 one job, in the terminal
  {x:lerp(990,1010,e),y:lerp(560,575,e),z:lerp(1.65,1.85,e),b:[3]},          // 12 it reads
  {x:lerp(1030,1050,e),y:lerp(600,610,e),z:lerp(2.4,2.7,e),b:[5]},           // 13 it edits
  {x:lerp(1130,1180,e),y:lerp(590,570,e),z:lerp(1.3,1.16,e),b:[2]},          // 14 it runs, and checks
  {x:lerp(930,960,e),y:lerp(455,445,e),z:lerp(2.3,2.55,e),b:[5]},            // 15 still broken?
  {x:lerp(940,975,e),y:lerp(505,495,e),z:lerp(1,1.09,e),b:[1]},              // 16 around again, until done
  {x:lerp(960,1000,e),y:540,z:lerp(1,1.04,e)},                                // 17 board: the answer
  {x:lerp(1470,1510,e),y:lerp(522,516,e),z:lerp(1.3,1.4,e)},                 // 18 board: one agent, one loop, four steps
  {x:lerp(1510,1500,e),y:516,z:lerp(1.4,1.36,e)},                            // 19 board: read, edit, run, check
  {x:lerp(1500,1440,e),y:lerp(530,540,e),z:lerp(1.3,1.04,e)},                // 20 board: one session
  {x:lerp(560,500,e),y:lerp(430,450,e),z:lerp(1.2,1.4,e)},                   // 21 board: you stop being the messenger
  {x:lerp(820,770,e),y:lerp(545,530,e),z:lerp(1.06,1.16,e),b:[2]},           // 22 you watch, and can stop it
  {x:lerp(1270,1280,e),y:lerp(480,490,e),z:lerp(1.62,1.72,e),b:[4,0,0]},     // 23 the test
  {x:lerp(850,862,e),y:lerp(480,470,e),z:lerp(1.3,1.42,e),b:[3]},            // 24 not a bigger brain
  {x:lerp(860,900,e),y:lerp(500,495,e),z:lerp(1.02,1.08,e),b:[1]},           // 25 hands, and a way to check
  {x:lerp(900,940,e),y:lerp(505,500,e),z:lerp(1.18,1.24,e),b:[1]}            // 26 subscribe
 ][s]},
 draw(t,cam,s){const k=SCENE[s];if(k=='t'){title(t);return}
  if(k=='p')drawSplit(t,cam);else if(k=='g')drawGarage(t,cam);else if(k=='b')drawBoard(t,cam);else if(k=='a')drawStudio(t,cam,true,[]);else drawStudio(t,cam,false,s<5?HOOK:STORY);
  overlay(t,s)},
 plants(){return {mech:MW.plants()}}};
// sound events on the film's clock (audio_mix.py turns them into sampled effects)
for(const t of [2.7,3.96,4.85])say(t,'key');                        // the code lands in your code (the paste loop)
say(3.2,'tick');say(4.3,'tick');say(5.0,'bad');                     // the run fails (S1), softer the first two times
for(const t of [6.03,6.95,7.12,7.28,7.42,7.65,7.9,8.12])say(t,'tick'); // 1 agent; four steps lit one by one; the ring once more
say(8.35,'good');
say(17.07,'key');say(18.07,'bad');                                  // you paste; the error comes back (S7, S8)
say(LAND,'box');for(let t=24.65;t<26.65;t+=.12)say(t,'key');say(26.85,'key');
for(const t of [C(12)+.05,C(13)+.05,C(14)+.05,31.3,33.55,34.15,34.75,35.35])say(t,'tick');for(const t of [28.9,29.2,29.5])say(t,'ratchet');
for(let t=30.3;t<31.25;t+=.13)say(t,'engine');say(FAIL+.02,'cough');say(FAIL+.1,'bad');say(FIXED,'good');
for(const t of [38.22,38.85,39.45,40.38,40.7,41.0,41.28,42.4])say(t,'tick');
say(44.1,'bad');say(46.95,'tick');
say(49.55,'bad');for(const t of MINI_ON)say(t,'tick');say(51.0,'good');
say(56.6,'tick');
for(let i=1;i<CUTS.length-1;i++)say(CUTS[i]/FPS,'cut'); // a soft sampled sound where the picture cuts to a new place or a new angle
