// Episode: ChatGPT Wallet, told through one errand to the corner shop. The old ChatGPT agent is a screen-head robot that stops at the till;
// you take over and type your real gold card. Now a teal dot carries a wallet: you approve with one scan, the card network hands the dot a
// teal stand-in card, the shop charges it, the bill lands on your real card. Nobody but you ever sees the gold card.
// 60 s, 30 shots (beats.md "Shots"). Voice from tts.py (vo.wav laid in at .3 s): film time = voice time + .3. Every time below is FILM seconds.
// Places on one clock: T title card, H home, S the street (your door, the card network booth, the shop, a second shop), M the money map, B the board.
// Helpers follow episodes/openai-dots/film/film.js.
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

/* THE CLOCK: cut times of the 30 shots, from beats.md "Shots" (film seconds). Shot 0 is the title card. ST(i) = the second shot i starts. */
const TS=[0,1.32,3.61,5.08,7.18,9.71,11.10,12.99,14.46,16.05,17.49,19.09,20.79,22.72,24.40,26.26,27.81,30.39,32.80,34.96,36.70,38.60,39.86,41.53,43.41,46.11,48.98,51.08,53.07,56.99];
const CF=TS.map(t=>Math.round(t*30)).concat([1800]);
const shotOf=t=>{const f=Math.round(t*30+1e-6);let s=0;for(let i=0;i<CF.length-1;i++)if(f>=CF[i])s=i;return s};
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.29; /* out(i): a card fades out from here, so it is gone .04 s before the cut at shot i */
const PLACE='T'+'HH'+'S'+'H'+'SSSSSSSSS'+'HHH'+'SSS'+'MM'+'SS'+'BB'+'SSSS'; /* T title, H home, S street, M money map, B board: one letter per shot */

// ---------- the mascot's costume: an amber knit beanie with an off-white band and a bobble, drawn after actor() in the rig's own transforms ----------
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
function beanie(x,p){x.save();headT(x,p);
 x.fillStyle='#FFC66E';x.beginPath();x.moveTo(-92,-72);x.quadraticCurveTo(-104,-172,0,-176);x.quadraticCurveTo(104,-172,92,-72);x.closePath();x.fill();
 x.strokeStyle='#D9962A';x.lineWidth=7;x.lineCap='round';for(const k of [-60,-30,0,30,60]){x.beginPath();x.moveTo(k*.9,-92);x.quadraticCurveTo(k*1.05,-130,k*.55,-166);x.stroke()}
 x.fillStyle='#FFF2D6';x.beginPath();x.roundRect(-102,-84,204,46,20);x.fill();x.strokeStyle='#6E4A2A';x.lineWidth=5;x.beginPath();x.roundRect(-102,-84,204,46,20);x.stroke();
 x.strokeStyle='rgba(110,74,42,.45)';x.lineWidth=4;for(let k=-84;k<=84;k+=28){x.beginPath();x.moveTo(k,-78);x.lineTo(k,-44);x.stroke()}
 x.fillStyle='#FFF2D6';x.beginPath();x.arc(0,-186,24,0,7);x.fill();x.strokeStyle='#6E4A2A';x.lineWidth=5;x.beginPath();x.arc(0,-186,24,0,7);x.stroke();x.restore()}
const hero=(x,id,p,cam)=>{actor(x,id,HERO,p,cam);beanie(x,p);return p};

// ---------- the old ChatGPT agent: a robot with a screen for a head showing a small browser window, grey-blue so it is not a skin tone ----------
const BOT={skin:'#566C90',cloth:'#7C93B5',hood:'#566C90',hand:'#B4C4DA',face:'#16243C',leg:'#44546F',shoe:'#17141F',finger:'#16243C'};
/* ab: the little browser window on the screen (0..1); aw: the "waiting for you" text (0..1) */
function botHead(x,p,ab,aw,t){x.save();headT(x,p);
 x.fillStyle='#566C90';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#8CA0BF','#566C90',5);rr(x,-84,-70,168,152,14,'#16243C');
 if(ab>0){x.save();x.globalAlpha=ab*(1-.7*aw);rr(x,-70,-58,140,124,8,'#DCE6F4');x.fillStyle='#8CA0BF';x.beginPath();x.roundRect(-70,-58,140,22,[8,8,0,0]);x.fill();
  x.fillStyle='#E4493F';x.beginPath();x.arc(-58,-47,4,0,7);x.fill();x.fillStyle='#FFC66E';x.beginPath();x.arc(-45,-47,4,0,7);x.fill();x.fillStyle='#2DB2AE';x.beginPath();x.arc(-32,-47,4,0,7);x.fill();
  x.fillStyle='#16243C';x.fillRect(-60,-26,120,10);x.fillStyle='#8CA0BF';for(let i=0;i<3;i++)x.fillRect(-60,-6+i*22,i==1?70:104,9);x.restore()}
 if(aw>0){txt(x,'waiting',0,-18+Math.sin(t*5)*2,30,'#F8E9CC','center','800',aw);txt(x,'for you',0,22+Math.sin(t*5)*2,30,'#F8E9CC','center','800',aw)}
 x.restore()}

// ---------- the dot: a floating teal circle with two eyes and a soft glow. Generic; not OpenAI's artwork ----------
function drawDot(x,X,Y,r,t,o={}){x.save();x.translate(X,Y);const lk=o.look||0,ly=o.lookY||0,bl=o.blink||0;
 let g=x.createRadialGradient(0,0,r*.5,0,0,r*2.8);g.addColorStop(0,'rgba(45,178,174,.55)');g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.beginPath();x.arc(0,0,r*2.8,0,7);x.fill();
 x.fillStyle='#2DB2AE';x.beginPath();x.arc(0,0,r,0,7);x.fill();x.fillStyle='rgba(255,255,255,.2)';x.beginPath();x.ellipse(-r*.32,-r*.42,r*.34,r*.18,-.5,0,7);x.fill();
 for(const s of [-1,1]){const ex=s*r*.34+lk*r*.1,ey=-r*.08+ly*r*.1,h=bl>.5?4:r*.34*(1-bl*.9)+3;x.fillStyle='#0E3A3F';x.beginPath();x.ellipse(ex,ey,r*.1,h/2,0,0,7);x.fill()}
 x.strokeStyle='#0E3A3F';x.lineWidth=r*.07;x.lineCap='round';x.beginPath();x.moveTo(lk*r*.1-r*.2,r*.3);x.quadraticCurveTo(lk*r*.1,r*.3+(o.smile??.18)*r,lk*r*.1+r*.2,r*.3);x.stroke();
 x.restore()}

// ---------- props: the two cards, a wallet, the till, the booth, a phone, a window, a bag ----------
/* kind 'gold' = the mascot's real card (dots for the number, never digits); 'teal' = the stand-in (blocks) */
function cardProp(x,X,Y,s,rot,kind,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.rotate(rot);x.scale(s,s);const gold=kind=='gold';
 x.fillStyle='rgba(10,5,20,.3)';x.beginPath();x.roundRect(-91,-52,190,120,14);x.fill();
 let g=x.createLinearGradient(-95,-60,95,60);if(gold){g.addColorStop(0,'#F8D878');g.addColorStop(1,'#C9922A')}else{g.addColorStop(0,'#3CCBC6');g.addColorStop(1,'#1B8C92')}
 x.fillStyle=g;x.beginPath();x.roundRect(-95,-60,190,120,14);x.fill();x.strokeStyle=gold?'#8A5A14':'#0E5A60';x.lineWidth=4;x.stroke();
 x.fillStyle=gold?'#FFF0B8':'#BFF2EE';x.beginPath();x.roundRect(-78,-40,34,26,5);x.fill();
 if(gold){x.fillStyle='#6B4410';for(let k=0;k<3;k++)for(let j=0;j<4;j++){x.beginPath();x.arc(-70+k*58+j*12,24,4.2,0,7);x.fill()}x.fillStyle='rgba(107,68,16,.55)';x.beginPath();x.roundRect(40,-44,40,10,5);x.fill()}
 else{txt(x,'STAND-IN',22,-26,22,'#0B3A40','center','900');x.fillStyle='rgba(255,255,255,.88)';x.beginPath();x.roundRect(-74,14,56,18,5);x.roundRect(-10,14,34,18,5);x.roundRect(32,14,42,18,5);x.fill()}
 x.restore()}
function walletProp(x,X,Y,s,rot,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.rotate(rot);x.scale(s,s);
 x.fillStyle='#187E86';x.beginPath();x.roundRect(-60,-36,120,80,12);x.fill();x.fillStyle='#2DB2AE';x.beginPath();x.roundRect(-60,-36,120,50,[12,12,0,0]);x.fill();x.fillStyle='#0E5A60';x.beginPath();x.roundRect(14,-6,56,34,10);x.fill();x.fillStyle='#FFC66E';x.beginPath();x.arc(36,11,7,0,7);x.fill();x.restore()}
function brownWallet(x,X,Y,s,rot){x.save();x.translate(X,Y);x.rotate(rot);x.scale(s,s);x.fillStyle='#7A4A2E';x.beginPath();x.roundRect(-52,-34,104,70,10);x.fill();x.fillStyle='#9A6038';x.beginPath();x.roundRect(-52,-34,104,34,[10,10,0,0]);x.fill();
 x.fillStyle='#F8D878';x.beginPath();x.roundRect(-30,-46,60,22,5);x.fill();x.restore()}
/* the till: TX is its centre on the counter top (y=TY). scr(x) draws on its screen, local box -88..88 x -52..52, clipped */
function tillProp(x,TX,TY,scr){x.save();x.translate(TX,TY);
 x.fillStyle='#3B2A52';x.beginPath();x.moveTo(-100,0);x.lineTo(-84,-70);x.lineTo(84,-70);x.lineTo(100,0);x.closePath();x.fill();x.fillStyle='#55407A';x.fillRect(-84,-70,168,10);
 x.fillStyle='#2A1F42';x.fillRect(-12,-150,24,84);rr(x,-102,-258,204,122,14,'#2A1F42','#8CA0BF',5);
 x.save();x.beginPath();x.roundRect(-92,-248,184,102,8);x.clip();x.fillStyle='#141238';x.fillRect(-92,-248,184,102);x.translate(0,-197);if(scr)scr(x);x.restore();
 x.fillStyle='#7C93B5';x.beginPath();x.roundRect(-40,-52,80,14,6);x.fill();x.restore()}
function houseFront(x){x.fillStyle='#4C2D63';x.fillRect(40,210,760,510);x.fillStyle='#3B2352';x.beginPath();x.moveTo(-10,214);x.lineTo(420,70);x.lineTo(850,214);x.closePath();x.fill();
 for(const wx of [100,590]){x.fillStyle='#2A1838';x.fillRect(wx-8,330,222,212);x.fillStyle='#FFC87E';x.fillRect(wx,338,206,196);x.fillStyle='#2A1838';x.fillRect(wx+100,338,6,196);x.fillRect(wx,432,206,6)}
 x.fillStyle='#2A1838';x.fillRect(342,418,196,302);x.fillStyle='#2F8E8E';x.fillRect(352,428,176,292);x.fillStyle='#237878';x.fillRect(372,452,136,100);x.fillRect(372,574,136,120);x.fillStyle='#E9B872';x.beginPath();x.arc(500,590,9,0,7);x.fill();
 x.fillStyle='#7A4A2E';x.fillRect(330,716,220,14)}
function shopFront(x,SX,t){const l=SX,w=1000; /* the corner shop: awning, sign, window with shelves, a counter outside */
 x.fillStyle='#3F2B63';x.fillRect(l,230,w,490);x.fillStyle='#2A1838';x.fillRect(l+96,452,520,268);x.fillStyle='#5A3A32';x.fillRect(l+108,464,496,244);
 x.fillStyle='#7A4A3A';x.fillRect(l+108,560,496,10);x.fillRect(l+108,650,496,10);
 for(let i=0;i<5;i++){x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(l+130+i*80,500,34,60,5);x.fill();x.fillStyle='#8CB8E8';x.fillRect(l+130+i*80,512,34,16)}
 for(let i=0;i<4;i++){x.fillStyle='#D9A55E';x.beginPath();x.ellipse(l+160+i*100,632,38,18,0,0,7);x.fill()}
 x.fillStyle='rgba(255,226,170,.12)';x.beginPath();x.moveTo(l+108,464);x.lineTo(l+250,464);x.lineTo(l+108,640);x.fill();
 for(let i=0;i<10;i++){x.fillStyle=i%2?'#F8E9CC':'#E4493F';x.beginPath();x.moveTo(l-20+i*104,350);x.lineTo(l+84+i*104,350);x.lineTo(l+84+i*104-10,430);x.quadraticCurveTo(l+34+i*104,448,l-20+i*104+10,430);x.closePath();x.fill()}
 x.fillStyle='#2A1838';x.fillRect(l-30,334,w+60,18);rr(x,l+w/2-190,196,380,112,14,'#2A1838','#FFC66E',6);imp(x,'SHOP',l+w/2,254,92,'#FFC66E')}
function counterProp(x,a,b){let g=x.createLinearGradient(0,690,0,790);g.addColorStop(0,'#7A4038');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(a,696,b-a,94);x.fillStyle='rgba(20,10,30,.28)';for(let X=a+24;X<b-90;X+=150)x.fillRect(X,724,120,50);
 x.fillStyle='#B0705A';x.beginPath();x.roundRect(a-14,684,b-a+28,22,8);x.fill();x.fillStyle='rgba(255,226,190,.45)';x.fillRect(a-14,684,b-a+28,4)}
function boothProp(x,BX,hand){ /* CARD NETWORK booth, BX = its centre; no real brand logos. hand 0..1 = a grey-blue glove slides out of the window */
 x.fillStyle='rgba(10,5,20,.25)';x.fillRect(BX-170,780,340,16);
 rr(x,BX-150,470,300,320,10,'#3A4E78');x.fillStyle='#2A3A5C';x.fillRect(BX-150,470,300,16);rr(x,BX-182,430,364,50,8,'#E9B872');x.fillStyle='#C9985A';x.fillRect(BX-182,468,364,12);
 rr(x,BX-170,330,340,92,12,'#1B2A4A','#8CA0BF',5);txt(x,'CARD',BX,362,34,'#F8E9CC','center','900');txt(x,'NETWORK',BX,398,34,'#FFC66E','center','900');
 rr(x,BX-110,540,220,130,8,'#141C34','#8CA0BF',5);x.fillStyle='#B4C4DA';x.beginPath();x.roundRect(BX-124,668,248,20,6);x.fill();
 if(hand>0){const hx=BX+30+hand*70;x.fillStyle='#8CA0BF';x.beginPath();x.roundRect(BX-60,606,hx-BX+50,44,16);x.fill();x.fillStyle='#B4C4DA';x.beginPath();x.roundRect(hx-8,598,50,56,16);x.fill()}
 x.fillStyle='#8CA0BF';x.beginPath();x.roundRect(BX-110,700,220,60,6);x.fill();x.fillStyle='#2DB2AE';x.beginPath();x.arc(BX+90,730,8,0,7);x.fill()}
function gateShop(x,SX){x.fillStyle='#3A2E5A';x.fillRect(SX,300,560,420);x.fillStyle='#2A1838';x.fillRect(SX+60,420,440,300);
 x.fillStyle='#8CA0BF';for(let i=0;i<16;i++)x.fillRect(SX+60+i*28,420,16,300);x.fillStyle='#6E7FA0';for(const y of [470,560,650])x.fillRect(SX+60,y,440,12);
  x.fillStyle='#E9B872';x.beginPath();x.roundRect(SX+256,670,48,40,8);x.fill();x.strokeStyle='#E9B872';x.lineWidth=8;x.beginPath();x.arc(SX+280,670,14,Math.PI,0);x.stroke();
 x.fillStyle='#2A1838';x.fillRect(SX-10,308,580,16);rr(x,SX+190,262,180,60,10,'#E4493F','#1B1430',4);txt(x,'CLOSED',SX+280,293,32,'#FFF6E6','center','900')}
function handStop(x,X,Y,s,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.scale(s,s);x.fillStyle='#E4493F';x.beginPath();for(let i=0;i<8;i++){const q=(i+.5)*Math.PI/4;x.lineTo(Math.cos(q)*54,Math.sin(q)*54)}x.closePath();x.fill();x.strokeStyle='#120A1C';x.lineWidth=5;x.stroke();
 x.fillStyle='#FFF6E6';x.beginPath();x.roundRect(-18,-6,36,34,10);x.fill();for(let i=0;i<4;i++){x.beginPath();x.roundRect(-18+i*9.6,-34+(i==0||i==3?8:0),8,38,4);x.fill()}x.beginPath();x.roundRect(-28,4,14,24,7);x.fill();x.restore()}
function browserPanel(x,X,Y,s,fill,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.scale(s,s);rr(x,-135,-95,270,190,12,'#DCE6F4','#566C90',5);x.fillStyle='#8CA0BF';x.beginPath();x.roundRect(-135,-95,270,30,[12,12,0,0]);x.fill();
 x.fillStyle='#E4493F';x.beginPath();x.arc(-116,-80,6,0,7);x.fill();x.fillStyle='#FFC66E';x.beginPath();x.arc(-98,-80,6,0,7);x.fill();x.fillStyle='#2DB2AE';x.beginPath();x.arc(-80,-80,6,0,7);x.fill();
 const L=[['CARD NUMBER',-40,150],['CODE',22,70],['EXPIRY',22,70]];
 txt(x,'CARD NUMBER',-118,-52,16,'#16243C','left','900');rr(x,-118,-42,236,26,6,'#FFFFFF','#8CA0BF',2);
 txt(x,'CODE',-118,2,16,'#16243C','left','900');rr(x,-118,12,100,26,6,'#FFFFFF','#8CA0BF',2);txt(x,'EXPIRY',2,2,16,'#16243C','left','900');rr(x,2,12,116,26,6,'#FFFFFF','#8CA0BF',2);
 x.fillStyle='#E4493F';const n=[fill[0]*12|0,fill[1]*3|0,fill[2]*5|0];for(let i=0;i<n[0];i++){x.beginPath();x.arc(-106+i*18+(i>>2)*8,-29,5.5,0,7);x.fill()}for(let i=0;i<n[1];i++){x.beginPath();x.arc(-106+i*18,25,5.5,0,7);x.fill()}for(let i=0;i<n[2];i++){x.beginPath();x.arc(14+i*18,25,5.5,0,7);x.fill()}
 x.restore()}
function bagProp(x,X,Y,s,rot){x.save();x.translate(X,Y);x.rotate(rot);x.scale(s,s);x.strokeStyle='#6E4A2A';x.lineWidth=7;x.lineCap='round';x.beginPath();x.arc(0,-48,22,Math.PI,0);x.stroke();
 x.fillStyle='#E9B872';x.beginPath();x.moveTo(-40,-46);x.lineTo(40,-46);x.lineTo(34,56);x.lineTo(-34,56);x.closePath();x.fill();x.fillStyle='#C9985A';x.fillRect(-40,-46,80,10);
 x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-26,-60,16,36,4);x.fill();x.fillStyle='#D9A55E';x.beginPath();x.ellipse(14,-34,16,10,.3,0,7);x.fill();x.restore()}
function milkIcon(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(-18,-8);x.lineTo(0,-30);x.lineTo(18,-8);x.lineTo(18,30);x.lineTo(-18,30);x.closePath();x.fill();x.fillStyle='#8CB8E8';x.fillRect(-18,6,36,16);x.restore()}
function breadIcon(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#D9A55E';x.beginPath();x.ellipse(0,4,32,20,0,0,7);x.fill();x.strokeStyle='#A8763A';x.lineWidth=4;x.lineCap='round';for(const k of [-14,0,14]){x.beginPath();x.moveTo(k-4,-6);x.lineTo(k+4,12);x.stroke()}x.restore()}
function eyeIcon(x,X,Y,s,slash){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(-34,0);x.quadraticCurveTo(0,-30,34,0);x.quadraticCurveTo(0,30,-34,0);x.fill();x.fillStyle='#2DB2AE';x.beginPath();x.arc(0,0,12,0,7);x.fill();x.fillStyle='#0E3A3F';x.beginPath();x.arc(0,0,6,0,7);x.fill();
 if(slash>0){x.strokeStyle='#120A1C';x.lineWidth=11;x.lineCap='round';x.beginPath();x.moveTo(-30,-28*slash);x.lineTo(-30+60*slash,28*slash);x.stroke();x.strokeStyle='#E4493F';x.lineWidth=6;x.stroke()}x.restore()}
function fingerIcon(x,X,Y,s,col,a=1){x.save();x.globalAlpha*=a;x.translate(X,Y);x.scale(s,s);x.strokeStyle=col;x.lineWidth=6;x.lineCap='round';for(let i=1;i<=4;i++){x.beginPath();x.arc(0,6,i*10,Math.PI*1.12,Math.PI*1.95);x.stroke()}x.beginPath();x.moveTo(0,6);x.lineTo(0,34);x.stroke();x.restore()}
function faceIcon(x,X,Y,s,col,a=1){x.save();x.globalAlpha*=a;x.translate(X,Y);x.scale(s,s);x.strokeStyle=col;x.lineWidth=6;x.lineCap='round';for(const [sx,sy] of [[-1,-1],[1,-1],[-1,1],[1,1]]){x.beginPath();x.moveTo(sx*34,sy*18);x.lineTo(sx*34,sy*34);x.lineTo(sx*18,sy*34);x.stroke()}
 x.beginPath();x.moveTo(-12,-12);x.lineTo(-12,-2);x.moveTo(12,-12);x.lineTo(12,-2);x.moveTo(0,-4);x.lineTo(-3,8);x.lineTo(3,8);x.moveTo(-12,20);x.quadraticCurveTo(0,28,12,20);x.stroke();x.restore()}

// ---------- the street: one world. Your house left, the card network booth, the corner shop with its counter, a second shop with a gate ----------
const FL=880,MS=.8,MAS_X=470,BOOTH=1650,SHOP_X=2050,TX=2700,CTR_TOP=690,DOT_TILL=[2480,520],GATE_X=3130;
const EVE=t=>shotOf(t)>=28?1:0;
function skyStreet(x,eve){let g=x.createLinearGradient(0,-400,0,760);
 if(eve){g.addColorStop(0,'#1A1445');g.addColorStop(.5,'#4A3484');g.addColorStop(.8,'#C96BB0');g.addColorStop(1,'#FF8F7A')}else{g.addColorStop(0,'#3F3480');g.addColorStop(.42,'#7A56A0');g.addColorStop(.76,'#C96BB0');g.addColorStop(1,'#FFC66E')}
 x.fillStyle=g;x.fillRect(-1800,-1400,7600,2200);
 let r=rng(5),px=-1800;x.fillStyle=eve?'#2E2358':'#8A5CA8';while(px<5800){const bw=70+r()*120,bh=120+r()*220;x.fillRect(px,720-bh,bw,bh+40);px+=bw}
 r=rng(11);px=-1800;x.fillStyle=eve?'#241A48':'#6C4690';while(px<5800){const bw=90+r()*140,bh=60+r()*150;x.fillRect(px,740-bh,bw,bh+40);px+=bw}
 x.fillStyle=eve?'rgba(255,226,160,.8)':'rgba(255,230,160,.6)';r=rng(9);for(let i=0;i<150;i++)x.fillRect(-1800+r()*7600,420+r()*300,6,8)}
function groundStreet(x,eve){let g=x.createLinearGradient(0,720,0,1300);g.addColorStop(0,eve?'#3A2A5C':'#4A3768');g.addColorStop(.12,eve?'#2E2248':'#3F3360');g.addColorStop(1,'#1E1736');x.fillStyle=g;x.fillRect(-1800,720,7600,900);
 x.fillStyle='#6C5A82';x.fillRect(-1800,726,7600,10);x.fillStyle='rgba(255,220,170,.2)';for(let i=-9;i<30;i++)x.fillRect(i*210,1000,110,6);
 x.strokeStyle='rgba(20,14,40,.3)';x.lineWidth=2;for(let i=-8;i<30;i++){x.beginPath();x.moveTo(i*260,740);x.lineTo(i*340-500,1300);x.stroke()}}
function lampPost(x,LX,on){x.fillStyle='#2A1838';x.fillRect(LX-6,420,12,310);x.fillRect(LX-6,420,60,8);x.fillStyle=on?'#FFD08A':'#B8A3C8';x.beginPath();x.roundRect(LX+30,428,50,22,8);x.fill()}

// ---------- the till's screens, by time. Every change fades; the card state names what the till received ----------
const COR='#E4493F';
function tillScreen(t){ /* returns a function drawing on the till's screen (local box -88..88 x -52..52) */
 const a1=fin(t,ST(8)+.4,.3)*(1-fin(t,ST(12),.01)),a2=fin(t,ST(11)+.1,.3)*(1-fin(t,ST(12),.01)),a3=fin(t,ST(19)+.75,.25)*(1-fin(t,out(20),.2))*(inS(t,19,20)?1:0),a4=inS(t,23,24)?fin(t,ST(23)+.05,.25):0;
 return x=>{
  if(a1>0&&a2<.5){x.save();x.globalAlpha=a1*(1-a2*2);txt(x,'CARD?',0,0,46+Math.sin(t*7)*2,COR,'center','900');x.restore()}
  if(a2>0){x.save();x.globalAlpha=a2;x.fillStyle='rgba(228,73,63,.22)';x.fillRect(-92,-52,184,104);
   [['NUMBER',-34],['CODE',0],['EXPIRY',34]].forEach((r,i)=>{const v=fin(t,ST(11)+.15+i*.28,.2);txt(x,r[0],-74,r[1],24,'#F8E9CC','left','900',v);txt(x,'✓',68,r[1],26,COR,'center','900',v)});x.restore()}
  if(a3>0){x.save();x.globalAlpha=a3;x.fillStyle='rgba(45,178,174,.22)';x.fillRect(-92,-52,184,104);txt(x,'STAND-IN',0,-10,30,'#2DB2AE','center','900');txt(x,'✓',0,26,34,'#2DB2AE','center','900');x.restore()}
  if(a4>0){x.save();x.globalAlpha=a4;cardProp(x,-52,0,.38,-.08,'gold',1);cross(x,-52,0,50,COR);txt(x,'STAND-IN',4,-16,17,'#2DB2AE','left','900');txt(x,'ONLY',4,12,22,'#2DB2AE','left','900');x.restore()}
  if(a1<=0&&a2<=0&&a3<=0&&a4<=0){x.fillStyle='#2DB2AE';x.beginPath();x.arc(70,38,4,0,7);x.fill()}}}

// ---------- poses and the one clock of the street ----------
const BLINKS=[3.1,6.9,11.3,15.4,19.8,24.6,29.4,35.3,41.2,47.5,52.2,55.6];
const MAS_BLINKS=[3.2,7.7,12.4,16.1,22.8,24.9,36.1,38.9,45.3,50.9,53.9,58.6];
const ROBOT_END=2340;
const RW=makeWalk({pts:[[800,FL],[ROBOT_END,FL]],t0:ST(6)+.5,t1:ST(8)+.3,steps:15,scale:()=>MS});
const MW=makeWalk({pts:[[1700,FL],[2000,FL]],t0:ST(9)+.02,t1:ST(9)+.95,steps:3,scale:()=>MS});
function robotPose(t){const w=RW.at(t),p={x:w.c[0],y:standY(w.c[1],w.s),s:w.s,face:1,breath:t*2,noFace:true};return walkPose(p,w)}
const robotVisible=t=>shotOf(t)>=5&&shotOf(t)<=11;
const botAB=t=>shotOf(t)<9?1:1-fin(t,ST(9)+.55,.25),botAW=t=>fin(t,ST(8)+.75,.3)*(1-fin(t,ST(9)+.5,.25)); /* browser on screen, "waiting for you" text */
const PANEL=[2150,560];
const panelPos=t=>{ /* the browser window leaves the robot's head and comes to the mascot's hands (shot 9), then stays (shot 10) */
 const u=ease(seg(t,ST(9)+.5,ST(9)+1.3));return [lerp(ROBOT_END,PANEL[0],u),lerp(400,PANEL[1],u)]};
function masStreetPose(t){const sh=shotOf(t);let X=MAS_X,look=.5,lookY=.05,mouth=.5,brow=.2;
 let p={x:X,y:standY(FL,MS),s:MS,face:1,breath:t*2.2,blink:blinkAt(t,MAS_BLINKS),look,lookY,mouth,brow,sad:0,hands:{},showH:{}};
 if(sh==9||sh==10||sh==11){const w=MW.at(t);p.x=w.c[0];p.y=standY(w.c[1],w.s);
  if(sh==9){walkPose(p,w);if(w.moving){p.hands={l:[-96+(p.hands.l[0]+96)*.5,p.hands.l[1]],r:[96+(p.hands.r[0]-96)*.5,p.hands.r[1]]}}}
  const g=sh==9?fin(t,ST(9)+.85,.35):1;
  if(g>0&&!(sh==9&&w.moving)){const tp=sh==10||sh==11?Math.sin(t*14)*5:0;p.hands.r=[lerp(96,w2l(p,[2120,610+tp])[0],g),lerp(220,w2l(p,[2120,610+tp])[1],g)];p.showH.r=g>.1;
   const lg=sh==10||sh==11?fin(t,ST(10)+.05,.3):0;if(lg>0){const tl=w2l(p,[1925,610]);p.hands.l=[lerp(-96,tl[0],lg),lerp(220,tl[1],lg)];p.showH.l=lg>.1}}
  p.look=.8;p.lookY=.25;p.mouth=.3;return p}
 if(sh==6){const a=fin(t,ST(6)+.15,.45)*(1-fin(t,ST(6)+1.4,.5));const tg=w2l(p,[MAS_X+175,440]);p.hands.r=[lerp(96,tg[0],a),lerp(220,tg[1],a)];p.showH.r=a>.1;p.mouth=.9;p.look=.9}
 if(sh==28){const tg=w2l(p,[MAS_X+120,640+Math.sin(t*2)*4]);p.hands.r=tg;p.showH.r=true;p.look=.8;p.mouth=.8}
 if(sh==29){const tg=w2l(p,[MAS_X-125,440+Math.sin(t*9)*32]);p.hands.l=[tg[0]+Math.sin(t*9)*10,tg[1]];p.showH.l=true;p.face=1;p.look=.1;p.lookY=0;p.mouth=.95;p.brow=.5}
 return p}
/* the dot in the street: position by shot */
function dotStreet(t){const sh=shotOf(t),bob=Math.sin(t*2.6)*10;let X=DOT_TILL[0],Y=DOT_TILL[1];
 if(sh==3){X=2470+Math.sin(t*1.4)*18}
 if(sh==12){X=2340;Y=520}
 if(sh==13){const u=ease(seg(t,ST(13)+.2,ST(13)+1.6));X=lerp(2000,2380,u)}
 if(sh==17){X=1930;Y=540;X+=Math.sin(t*1.6)*14}
 if(sh==18){X=1930;Y=540}
 if(sh==19){const u=ease(seg(t,ST(19)+.1,ST(19)+.6));X=lerp(2400,2480,u)}
 if(sh==22){X=2480;Y=520}
 if(sh==26){const u=ease(seg(t,ST(26),ST(27)));X=lerp(1150,1750,u);Y=300}
 if(sh==27){const u=ease(seg(t,ST(27)+.1,ST(27)+1.0)),b=ease(seg(t,ST(27)+1.0,ST(27)+1.5)),c=ease(seg(t,ST(27)+1.5,ST(27)+1.95));X=lerp(2780,GATE_X-90,u)-b*70+c*30;Y=520}
 if(sh==28){const u=ease(seg(t,ST(28)+.2,ST(28)+3.6));X=lerp(1500,800,u);Y=470}
 if(sh==29){X=800+Math.sin(t*1.5)*20;Y=470}
 return [X,Y+bob]}
function dotCard(t){ /* the teal stand-in card beside the dot: [X,Y,rot,alpha,scale] or null */
 const sh=shotOf(t),d=dotStreet(t);
 if(sh==3)return [d[0]+90,d[1]+92,-.14+Math.sin(t*1.8)*.03,fin(t,ST(3)+.02,.2),.62];
 if(sh==17){const u=ease(seg(t,ST(17)+.7,ST(17)+1.5));return [lerp(BOOTH+30,d[0]+90,u),lerp(610,d[1]+88,u),-.1,fin(t,ST(17)+.6,.15),.6]}
 if(sh==18)return [d[0]+60,d[1]+60,-.06+Math.sin(t*1.5)*.03,1,1.05];
 if(sh==19){const tap=Math.sin(seg(t,ST(19)+.5,ST(19)+1.0)*Math.PI);return [d[0]+90+tap*70,d[1]+98+tap*34,-.14+tap*.18,1,.62]}
 return null}

function drawStreet(t,cam){const sh=shotOf(t),eve=EVE(t);
 let x=layer('out',cam,.6);skyStreet(x,eve);
 x=layer('wall',cam);groundStreet(x,eve);houseFront(x);boothProp(x,BOOTH,inS(t,17,18)?ease(seg(t,ST(17)+.45,ST(17)+1.0))*(1-ease(seg(t,ST(17)+1.45,ST(17)+1.9))):0);shopFront(x,SHOP_X,t);gateShop(x,GATE_X);lampPost(x,1950,eve);lampPost(x,3020,eve);
 x=layer('act',cam);counterProp(x,2420,2980);tillProp(x,TX,CTR_TOP,tillScreen(t));
 if(robotVisible(t)){const rp=robotPose(t);actor(x,'robot',BOT,rp,cam);botHead(x,rp,botAB(t),botAW(t),t);handStop(x,rp.x,rp.y-205*rp.s-34,.9,fin(t,ST(8)+.8,.25)*(1-fin(t,ST(9)+.45,.25)))}
 let mpH=null;
 if(sh==5||sh==6||sh==9||sh==10||sh==11||sh==28||sh==29){const mp=masStreetPose(t);mpH=mp;hero(x,'hero',mp,cam);
  if(sh==28){const h=h2w(mp,'r');brownWallet(x,h[0]+4,h[1]-6,.9,-.2);gripHand(x,h[0]-6,h[1]+14,.2,HERO,.8)}
  if(sh==10||sh==11){const hl=h2w(mp,'l');cardProp(x,hl[0]+6,hl[1]-62,.62,-.18,'gold');gripHand(x,hl[0]-2,hl[1]+2,-.1,HERO,.8)}}
 if(sh>=9&&sh<=11)browserPanel(x,panelPos(t)[0],panelPos(t)[1],sh==9?lerp(.45,1,ease(seg(t,ST(9)+.5,ST(9)+1.3))):1,sh>=10?[fin(t,ST(10)+.35,.3)*0+Math.min(1,seg(t,ST(10)+.3,ST(10)+1.1)),Math.min(1,seg(t,ST(10)+.7,ST(10)+1.2)),Math.min(1,seg(t,ST(10)+1.0,ST(10)+1.5))]:[0,0,0]);
 if(sh==10||sh==11){const hr=h2w(mpH,'r');x.fillStyle=HERO.hand;x.beginPath();x.roundRect(hr[0]-14,hr[1]-12,46,30,13);x.fill()}
 const dl=layer('dot',cam);
 const showDot=[3,12,13,17,18,19,22,23,26,27,28,29].includes(sh);
 if(showDot){const d=dotStreet(t),look=sh==27?.9:sh==28||sh==29?-.8:.7;
  drawDot(dl,d[0],d[1],sh==18?70:68,t,{look,lookY:sh==22?-.5:0,blink:blinkAt(t,BLINKS),smile:sh==27?-.1:.2});
  const c=dotCard(t);if(c)cardProp(dl,c[0],c[1],c[4],c[2],'teal',c[3]);
  if(sh==13)walletProp(dl,d[0]+82,d[1]+62,.8,-.15,1);
  if(sh==28||sh==29)bagProp(dl,d[0]+88,d[1]+74,.9,.18+Math.sin(t*2.2)*.06);
  if(sh==22){const v=fin(t,ST(22)+.3,.3)*(1-fin(t,out(23),.25));if(v>0){dl.save();dl.globalAlpha=v;dl.fillStyle='#F8E9CC';dl.beginPath();dl.arc(d[0]-110,d[1]-50,12,0,7);dl.arc(d[0]-146,d[1]-70,18,0,7);dl.fill();
   rr(dl,d[0]-420,d[1]-210,260,176,40,'#F8E9CC');cardProp(dl,d[0]-290,d[1]-122,.78,.08,'gold');cross(dl,d[0]-290,d[1]-122,110);dl.restore()}}}
 comp([['out',(cam.b||[0])[0]],['wall',(cam.b||[0,0])[1]],['act',0],['dot',0]]);
 if(eve){ctx.save();ctx.fillStyle='rgba(40,14,70,.22)';ctx.fillRect(0,0,W,H);ctx.restore()}}

// ---------- home: the laptop (shot 1), the phone (2, 14-16), you facing us (4) ----------
function roomBack(x,t){let g=x.createLinearGradient(0,0,0,900);g.addColorStop(0,'#2A1C46');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-900,-500,3800,1800);
 g=x.createRadialGradient(960,420,40,960,420,900);g.addColorStop(0,'rgba(255,196,130,.3)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-500,3800,1800);
 x.fillStyle='#2A1838';x.fillRect(142,152,420,340);g=x.createLinearGradient(0,160,0,484);g.addColorStop(0,'#5A4490');g.addColorStop(.6,'#C96BB0');g.addColorStop(1,'#FFC66E');x.fillStyle=g;x.fillRect(154,164,396,316);
 x.fillStyle='#2E2358';let r=rng(4),px=154;while(px<550){const bw=34+r()*40,bh=40+r()*90;x.fillRect(px,480-bh,Math.min(bw,550-px),bh);px+=bw}
 x.fillStyle='#2A1838';x.fillRect(348,152,12,340);x.fillRect(142,300,420,10);
 x.fillStyle='#6A4468';x.fillRect(-900,850,3800,500);x.fillStyle='#3B2352';x.fillRect(-900,846,3800,8);
 x.fillStyle='#7A4A2E';x.beginPath();x.roundRect(1700,700,110,150,10);x.fill();x.fillStyle='#2F9A98';for(let i=0;i<7;i++){x.beginPath();x.ellipse(1755+Math.sin(i*1.7)*70,650-i*34,34,16,i*.5-1.5,0,7);x.fill()}}
function laptopProp(x,t,fill,takeover){rr(x,990,300,570,400,18,'#1B1430','#8CA0BF',6);x.fillStyle='#E9EEF6';x.fillRect(1006,316,538,368);
 x.fillStyle='#8CA0BF';x.fillRect(1006,316,538,34);x.fillStyle='#E4493F';x.beginPath();x.arc(1026,333,6,0,7);x.fill();x.fillStyle='#FFC66E';x.beginPath();x.arc(1044,333,6,0,7);x.fill();x.fillStyle='#2DB2AE';x.beginPath();x.arc(1062,333,6,0,7);x.fill();
 rr(x,1090,322,300,22,11,'#DCE6F4');txt(x,'checkout',1240,334,16,'#566C90','center','700');
 txt(x,'CARD NUMBER',1040,384,24,'#16243C','left','900');rr(x,1040,398,460,44,8,'#FFFFFF','#8CA0BF',3);
 txt(x,'CODE',1040,476,24,'#16243C','left','900');rr(x,1040,490,200,44,8,'#FFFFFF','#8CA0BF',3);txt(x,'EXPIRY',1290,476,24,'#16243C','left','900');rr(x,1290,490,210,44,8,'#FFFFFF','#8CA0BF',3);
 x.fillStyle=COR;const n=[fill[0]*12|0,fill[1]*3|0,fill[2]*5|0];for(let i=0;i<n[0];i++){x.beginPath();x.arc(1064+i*30+(i>>2)*14,420,9,0,7);x.fill()}for(let i=0;i<n[1];i++){x.beginPath();x.arc(1064+i*30,512,9,0,7);x.fill()}for(let i=0;i<n[2];i++){x.beginPath();x.arc(1314+i*30,512,9,0,7);x.fill()}
 rr(x,1040,560,460,56,12,'#FFC66E');txt(x,'PAY',1270,589,34,'#1B1430','center','900');
 if(takeover>0){x.save();x.globalAlpha=takeover;rr(x,1040,636,460,38,10,'#E4493F');txt(x,'TAKE OVER',1270,656,26,'#FFF6E6','center','900');x.restore()}
 x.fillStyle='#3A3350';x.beginPath();x.roundRect(960,700,630,50,[0,0,18,18]);x.fill();x.fillStyle='#524A6E';for(let i=0;i<14;i++)x.fillRect(990+i*43,712,30,10)}
const PH_REST=[1005,740];
function phoneHand(t){const sh=shotOf(t);let X=PH_REST[0],Y=PH_REST[1];
 if(sh==14){const b=Math.max(0,1-seg(t,ST(14)+.15,ST(14)+.95));X+=Math.sin(t*70)*5*b;Y+=Math.cos(t*55)*3*b}
 if(sh==16){const u=ease(seg(t,ST(16)+.05,ST(16)+.55));Y-=70*u}
 if(sh>=17)Y-=70;return [X,Y+Math.sin(t*2)*3]}
function phoneScreen(x,t){ /* local box -105..105 x -185..185; the content follows the clock of shots 2 and 14-16 */
 const sh=shotOf(t);
 if(sh==2){const v=fin(t,ST(2)+.05,.2),pr=fin(t,ST(2)+.7,.25),ok=fin(t,ST(2)+1.0,.2);
  txt(x,'APPROVE',0,-120,30,'#F8E9CC','center','900',v);fingerIcon(x,0,-10,2.6,pr>0?'#2DB2AE':'#8CA0BF',v);if(pr>0){x.save();x.globalAlpha=pr*.28;x.fillStyle='#2DB2AE';x.beginPath();x.arc(0,24,88,0,7);x.fill();x.restore()}check(x,0,100,70,ok);return}
 if(sh==4)return;
 const sheet=ease(seg(t,ST(14)+.45,ST(14)+.85));
 rr(x,-105,-185,210,370,6,'#1B1430');
 x.save();x.translate(0,(1-sheet)*340);x.globalAlpha=Math.min(1,sheet*2);
 rr(x,-98,-170,196,340,16,'#2A1F42','#8A7AA8',3);txt(x,'REVIEW',0,-142,28,'#FFC66E','center','900');
 const r1=fin(t,ST(14)+1.0,.3),r2=fin(t,ST(15)+.3,.3),r3=fin(t,ST(15)+.8,.3);
 rr(x,-84,-112,168,64,10,'rgba(248,233,204,.12)');milkIcon(x,-52,-80,.8*r1+.01);breadIcon(x,2,-78,.7*r1+.01);txt(x,'x2',24,-80,28,'#F8E9CC','left','900',r1);if(r1>.5)check(x,68,-80,22,(r1-.5)*2);
 rr(x,-84,-34,168,64,10,'rgba(248,233,204,.12)');txt(x,'TOTAL',-72,-2,24,'#F8E9CC','left','900',r2);x.save();x.globalAlpha=r2;x.fillStyle='#FFC66E';x.beginPath();x.arc(24,-2,18,0,7);x.fill();x.fillStyle='#1B1430';x.fillRect(20,-12,8,20);x.restore();if(r2>.5)check(x,68,-2,22,(r2-.5)*2);
 rr(x,-84,44,168,64,10,'rgba(248,233,204,.12)');cardProp(x,-42,76,.3,0,'gold',r3);txt(x,'••••',6,66,28,'#F8E9CC','left','900',r3);txt(x,'yours',6,92,17,'#C9B8E0','left','700',r3);
 if(sh>=16){const f1=fin(t,ST(16)+.8,.25)*(1-fin(t,ST(16)+1.6,.2)),f2=fin(t,ST(16)+1.5,.25),ok=fin(t,ST(16)+2.0,.2);
  x.save();rr(x,-84,118,168,44,12,'#1B1430','#8A7AA8',2);if(f1>0)faceIcon(x,0,140,.5,'#F8E9CC',f1);if(f2>0){fingerIcon(x,0,141,.5,ok>0?'#2DB2AE':'#F8E9CC',f2)}x.restore();if(ok>0)check(x,60,140,24,ok)}
 x.restore()}
function phoneProp(x,t,hand){const sh=shotOf(t),cx=hand[0]+115,cy=hand[1]-110,rot=-.04;x.save();x.translate(cx,cy);x.rotate(rot);
 rr(x,-118,-210,236,420,28,'#0E0A1C','#8A7AA8',4);rr(x,-110,-202,220,404,22,'#141238');x.save();x.beginPath();x.roundRect(-105,-185,210,370,6);x.clip();x.fillStyle='#1A1648';x.fillRect(-105,-185,210,370);phoneScreen(x,t);x.restore();
 x.fillStyle='#0E0A1C';x.beginPath();x.roundRect(-30,-198,60,10,5);x.fill();
 if(sh==2){const pr=ease(seg(t,ST(2)+.45,ST(2)+.75)),ty=lerp(70,-4,pr);limb(x,[-8,236],[-4,ty+30],44,38,HERO.hand);x.fillStyle=HERO.hand;x.beginPath();x.arc(-4,ty+30,19,0,7);x.fill()}
 x.restore()}
function drawHome(t,cam){const sh=shotOf(t);
 let x=layer('wall',cam);roomBack(x,t);if(sh==1)laptopProp(x,t,[fin(t,ST(1)+.5,1.0),fin(t,ST(1)+1.4,.5)*1,fin(t,ST(1)+1.7,.5)],fin(t,ST(1)+1.7,.35));
 const p={x:sh==1?880:sh==4?780:900,y:sh==1?575:565,s:1,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,MAS_BLINKS),look:.85,lookY:.2,brow:.3,sad:0,mouth:.6,tilt:.03,hands:{},showH:{}};
 let hh=null;
 if(sh==1){p.hands.r=w2l(p,[1050+Math.sin(t*16)*14,748+Math.abs(Math.sin(t*12))*8]);p.showH.r=true;p.hands.l=w2l(p,[870+Math.sin(t*9)*10,772]);p.showH.l=true;p.look=.9;p.lookY=.1;p.brow=.5;p.mouth=.3}
 else if(sh==4){p.look=.1;p.lookY=0;p.brow=.5;p.mouth=.95+Math.sin(t*9)*.05;p.tilt=0;p.face=1}
 else{hh=phoneHand(t);p.hands.r=w2l(p,hh);p.showH.r=true;p.look=.8;p.lookY=.45;p.mouth=sh==16?.9:.6;p.brow=sh==14?.7:.4;if(sh==16&&t>ST(16)+1.6)p.mouth=.95}
 const a=layer('act',cam);hero(a,'hero',p,cam);
 if(sh==1){a.fillStyle='#B0705A';a.fillRect(300,782,1320,26);a.fillStyle='rgba(255,226,190,.45)';a.fillRect(300,782,1320,4);let g=a.createLinearGradient(0,808,0,1100);g.addColorStop(0,'#6A3A4A');g.addColorStop(1,'#3A2038');a.fillStyle=g;a.fillRect(300,808,1320,300)}
 else{rr(a,230,790,1460,330,70,'#7A56A0');rr(a,230,790,1460,34,17,'#8F6CB8')}
 if(hh){phoneProp(a,t,hh);gripHand(a,hh[0]+4,hh[1]+16,.15,HERO,.8)}
 comp([['wall',(cam.b||[0])[0]],['act',0]])}

// ---------- the money map (shots 20-21): the shop, the card network, your home; the bill travels the dotted line to your real card ----------
function miniShop(x,X,Y){x.save();x.translate(X,Y);x.scale(1.25,1.25);x.fillStyle='#3F2B63';x.fillRect(-130,-190,260,190);
 for(let i=0;i<6;i++){x.fillStyle=i%2?'#F8E9CC':'#E4493F';x.fillRect(-130+i*43.3,-190,43.4,44)}
 rr(x,-112,-130,110,40,8,'#2A1838','#FFC66E',4);imp(x,'SHOP',-57,-109,30,'#FFC66E');
 x.fillStyle='#7A4038';x.fillRect(-130,-40,260,40);
 x.save();x.translate(62,-40);x.scale(.5,.5);tillProp(x,0,0,x=>{x.fillStyle='rgba(45,178,174,.2)';x.fillRect(-92,-52,184,104);txt(x,'STAND-IN',0,0,26,'#2DB2AE','center','900')});x.restore();x.restore()}
function miniBooth(x,X,Y){x.save();x.translate(X,Y);x.scale(.85,.85);x.translate(0,-790);boothProp(x,0,0);x.restore()}
function miniHome(x,X,Y,t){x.save();x.translate(X,Y-80);x.scale(1.15,1.15);x.fillStyle='#3B2352';x.beginPath();x.moveTo(-170,-70);x.lineTo(0,-190);x.lineTo(170,-70);x.closePath();x.fill();x.fillStyle='#4C2D63';x.fillRect(-140,-70,280,150);
 x.fillStyle='#FFC87E';x.fillRect(-110,-40,80,70);x.fillStyle='#2F8E8E';x.fillRect(40,-30,70,110);
 x.save();x.beginPath();x.rect(-110,-40,80,70);x.clip();x.translate(-70,20);x.fillStyle='#FF6B5E';x.beginPath();x.ellipse(0,40,44,30,0,Math.PI,0);x.fill();x.fillStyle='#F8E9CC';x.beginPath();x.arc(0,-6,26,0,7);x.fill();x.fillStyle='#FFC66E';x.beginPath();x.moveTo(-26,-12);x.quadraticCurveTo(-28,-44,0,-46);x.quadraticCurveTo(28,-44,26,-12);x.fill();x.fillStyle='#FFF2D6';x.fillRect(-27,-16,54,10);x.restore();x.restore()}
function drawMap(t,cam){const sh=shotOf(t);let x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1400,560,40,1400,560,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const NX=[330,960,1590],NY=700;
 miniShop(x,NX[0],NY);miniBooth(x,NX[1],NY);miniHome(x,NX[2],NY,t);
 txt(x,'SHOP',NX[0],770,40,'#F8E9CC','center','900');txt(x,'CARD NETWORK',NX[1],770,40,'#F8E9CC','center','900');txt(x,'YOU',NX[2],770,40,'#F8E9CC','center','900');
 const prog=ease(seg(t,ST(20)+.2,ST(20)+1.4)),LY=560;
 const pts=[[NX[0]+190,LY],[NX[1]-150,LY],[NX[1]+150,LY],[NX[2]-200,LY]];
 const dotsLine=(a,b,p0,p1)=>{const n=Math.floor((b-a)/34);for(let i=0;i<=n;i++){const u=i/n,q=(a+(b-a)*u-pts[0][0])/(pts[3][0]-pts[0][0]);if(q>prog)continue;x.fillStyle='#FFC66E';x.beginPath();x.arc(a+(b-a)*u,LY+Math.sin(t*6+i)*3,7,0,7);x.fill()}};
 dotsLine(pts[0][0],pts[1][0]);dotsLine(pts[2][0],pts[3][0]);
 const rc=ease(seg(t,ST(20)+1.1,ST(20)+1.65)),gx=NX[2],gy=900;
 cardProp(x,gx,gy,1.5,-.05+Math.sin(t*1.4)*.015,'gold');
 const sw=seg(t,ST(21)+.2,ST(21)+.9);if(sw>0&&sw<1){x.save();x.beginPath();x.roundRect(gx-142,gy-90,284,180,20);x.clip();x.fillStyle='rgba(255,255,255,.5)';x.translate(gx-200+sw*400,gy);x.rotate(.5);x.fillRect(-18,-200,36,400);x.restore()}
 if(rc>0){const ry=lerp(gy-420,gy-20,rc),a=1-fin(t,ST(21)+.05,.35);x.save();x.globalAlpha=a;x.translate(gx+60,ry);x.rotate(.12);x.fillStyle='#F4EBDD';x.fillRect(-52,-70,104,140);x.fillStyle='#8A7AA8';for(let i=0;i<5;i++)x.fillRect(-38,-52+i*20,i%2?44:76,7);txt(x,'BILL',0,52,24,'#E4493F','center','900');x.restore()}
 const bd=bo(seg(t,ST(21)+.45,ST(21)+.8));if(bd>0){x.save();x.globalAlpha=Math.min(1,bd*3);x.translate(gx+150,gy-80);x.rotate(.12);x.scale(bd,bd);x.fillStyle='#FFC66E';x.beginPath();for(let i=0;i<10;i++){const r=i%2?30:62,q=i*Math.PI/5-Math.PI/2;x.lineTo(Math.cos(q)*r,Math.sin(q)*r)}x.closePath();x.fill();x.strokeStyle='#120A1C';x.lineWidth=5;x.stroke();txt(x,'✓',0,4,40,'#1B1430','center','900');x.restore()}
 comp([['board',0]])}

// ---------- board: BEFORE (left) and NOW (right) side by side, in one frame ----------
function nodeBox(x,X,Y,w,h,lines,col,lit,icon,t){x.save();x.translate(X,Y);rr(x,-w/2,-h/2,w,h,18,'#2A1F42',lit>0?'#2DB2AE':col,lit>0?8:4);
 if(lit>0){x.globalAlpha=lit*.28;rr(x,-w/2,-h/2,w,h,18,'#2DB2AE');x.globalAlpha=1}
 icon(x,0,-46,1,t);lines.forEach((s,i)=>txt(x,s,0,52+i*40-(lines.length>1?16:0),36,'#F8E9CC','center','800'));x.restore()}
function iHand(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#B4C4DA';x.beginPath();x.roundRect(-26,-8,52,40,14);x.fill();for(let i=0;i<4;i++){x.beginPath();x.roundRect(-26+i*13.5,-40+(i==0||i==3?10:0),11,44,5);x.fill()}x.restore()}
function iCoral(x,X,Y,s){cardProp(x,X,Y,.62*s,0,'gold')}
function iTill3(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#3B2A52';x.beginPath();x.roundRect(-46,-8,92,40,8);x.fill();rr(x,-40,-44,80,38,6,'#141238','#8CA0BF',3);x.fillStyle=COR;for(let i=0;i<3;i++)x.fillRect(-30+i*22,-30,16,10);x.restore()}
function iFinger(x,X,Y,s){fingerIcon(x,X,Y-4,s*.9,'#2DB2AE')}
function iStand(x,X,Y,s){cardProp(x,X,Y,.62*s,0,'teal')}
function iTillT(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#3B2A52';x.beginPath();x.roundRect(-46,-8,92,40,8);x.fill();rr(x,-40,-44,80,38,6,'#141238','#2DB2AE',3);x.fillStyle='#2DB2AE';x.fillRect(-30,-30,60,10);x.restore()}
function bArrow(x,a,b,Y,col,p){if(p<=0)return;x.save();x.globalAlpha*=p;x.strokeStyle=col;x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(a,Y);x.lineTo(b-8,Y);x.stroke();x.fillStyle=col;x.beginPath();x.moveTo(b,Y);x.lineTo(b-22,Y-14);x.lineTo(b-22,Y+14);x.fill();x.restore()}
function lockIcon(x,X,Y,s,snap){x.save();x.translate(X,Y);x.scale(s,s);x.strokeStyle='#C9C3CF';x.lineWidth=9;x.lineCap='round';x.beginPath();x.arc(0,-12-(1-snap)*14,17,Math.PI,0);x.lineTo(17,-12+(1-snap)*-6);x.stroke();x.fillStyle='#FFC66E';x.beginPath();x.roundRect(-24,-14,48,38,8);x.fill();x.fillStyle='#1B1430';x.beginPath();x.arc(0,2,5,0,7);x.fill();x.fillRect(-2,4,4,10);x.restore()}
function drawBoard(t,cam){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1400,560,40,1400,560,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=140;y<960;y+=28)x.fillRect(958,y,4,14); /* dashes as rects: setLineDash is not deterministic in headless Chromium */
 const I=fin(t,ST(24)+.1,.35);
 pill(x,195,200,176,54,'#FFC66E',I);txt(x,'BEFORE',195,202,34,'#1B1430','center','900',I);txt(x,'ChatGPT agent',305,204,36,'#C9B8E0','left','700',I);
 pill(x,1020,200,120,54,'#2DB2AE',I);txt(x,'NOW',1020,202,34,'#1B1430','center','900',I);txt(x,'ChatGPT Wallet',1100,204,38,'#FFC66E','left','800',I);
 const Y=500,w=250,h=250,L=[195,501,807],R=[1113,1419,1725];
 const lits=[fin(t,ST(24)+.8,.3),fin(t,ST(24)+1.5,.3),fin(t,ST(24)+2.2,.3)];
 [[L[0],['you take','over'],iHand],[L[1],['type real','card'],iCoral],[L[2],['shop gets','all 3'],iTill3]].forEach(q=>nodeBox(x,q[0],Y,w,h,q[1],'#6E5D8E',0,q[2],t));
 bArrow(x,L[0]+w/2+4,L[1]-w/2-4,Y,'#C9B8E0',1);bArrow(x,L[1]+w/2+4,L[2]-w/2-4,Y,'#C9B8E0',1);
 [[R[0],['1 scan'],iFinger],[R[1],['stand-in','card'],iStand],[R[2],['shop gets','stand-in'],iTillT]].forEach((q,i)=>nodeBox(x,q[0],Y,w,h,q[1],'#FFC66E',shotOf(t)==24?lits[i]:1,q[2],t));
 bArrow(x,R[0]+w/2+4,R[1]-w/2-4,Y,'#FFC66E',1);bArrow(x,R[1]+w/2+4,R[2]-w/2-4,Y,'#FFC66E',1);
 if(shotOf(t)==25){const a=fin(t,ST(25)+.5,.35),hx=1419,hy=790;x.save();x.globalAlpha=a;x.fillStyle='#3B2352';x.beginPath();x.moveTo(hx-90,hy-30);x.lineTo(hx,hy-110);x.lineTo(hx+90,hy-30);x.closePath();x.fill();x.fillStyle='#4C2D63';x.fillRect(hx-70,hy-30,140,110);x.fillStyle='#2F8E8E';x.fillRect(hx-18,hy+10,36,70);x.restore();
  const chips=[['NUMBER',-1],['CODE',0],['EXPIRY',1]];chips.forEach((c,i)=>{const u=ease(seg(t,ST(25)+.9+i*.25,ST(25)+1.5+i*.25));const cx=lerp(1725,hx,u),cy=lerp(735,hy-8,u),s=1-.75*u;if(u<1&&seg(t,ST(25)+.9+i*.25,9)>0||u<=0){x.save();x.globalAlpha=a*(1-fin(t,ST(25)+1.5+i*.25,.01)*0);x.translate(cx,cy+(i-1)*0);x.scale(s,s);pill(x,0,(i-1)*44,200,40,'rgba(228,73,63,.9)');txt(x,c[0],0,(i-1)*44+1,24,'#FFF6E6','center','900');x.restore()}});
  const lk=ease(seg(t,ST(25)+1.9,ST(25)+2.3));lockIcon(x,hx+150,hy+10,1.1,lk);x.save();x.globalAlpha=a;txt(x,'THE 3 NUMBERS STAY HOME',hx+40,hy+120,32,'#F8E9CC','center','800',a);x.restore()}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;w=ctx.measureText(s).width+size*2.2;ctx.restore();pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function tag(){/* the brand's corner tag: the topic and the 60 s promise, on every frame */
 {const x=ctx;x.save();x.font='800 32px Arial';const tw=x.measureText('ChatGPT Wallet').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'ChatGPT Wallet',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800');x.restore()}}
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
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='CHATGPT WALLET';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,'#F8E9CC');put(TOPIC,W/2,Yt+sz*.2,sz,'#FFC66E');
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H);
 tag()}
function popCard(t,s,t0,X,Y,size,fo,rot=-.04,col='#FFC66E'){const u=bo(seg(t,t0,t0+.3));if(u<=0)return;ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(X,Y);ctx.rotate(rot);ctx.scale(u,u);imp(ctx,s,0,0,size,col);ctx.restore()}
function chip(t,a,b,X,Y,lab){const v=fin(t,a,.25)*(1-fin(t,b,.25));if(v<=0)return;const x=ctx;x.save();x.globalAlpha=v;x.font='900 32px Arial';const w=x.measureText(lab).width+130;x.restore();
 x.save();x.globalAlpha=v;x.fillStyle='rgba(27,20,48,.88)';x.beginPath();x.roundRect(X-w/2,Y-40,w,80,40);x.fill();x.strokeStyle='#2DB2AE';x.lineWidth=4;x.stroke();x.restore();
 eyeIcon(x,X-w/2+52,Y,.8,fin(t,a+.25,.3));txt(x,lab,X-w/2+96,Y+2,32,'#F8E9CC','left','900',v)}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 tag();
 tab(t,ST(1)+.1,out(2),'BEFORE','#FFC66E');tab(t,ST(2)+.05,out(5),'NOW','#2DB2AE');tab(t,ST(7)+.05,out(12),'BEFORE','#FFC66E');tab(t,ST(12)+.05,out(24),'NOW','#2DB2AE');
 if(inS(t,2,3)){const fo=1-fin(t,out(3),.25);popCard(t,'1 SCAN',ST(2)+1.0,1400,300,130,fo,-.04,'#2DB2AE')}
 if(inS(t,3,4)){const fo=out(4);chip(t,5.45,fo,500,250,'NUMBER');chip(t,5.85,fo,960,330,'CODE');chip(t,6.25,fo,1420,250,'EXPIRY')}
 if(inS(t,4,5)){const fo=1-fin(t,out(5),.25);popCard(t,'HOW?',7.43,1330,250,150,fo);popCard(t,'WHY?',7.75,1520,450,150,fo,.03);
  const u=bo(seg(t,8.26,8.51));if(u>0){ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(1420,820);ctx.rotate(-.035);ctx.scale(.52*u,.52*u);sticker(ctx);ctx.restore()}}
 card(t,ST(5)+.25,out(6),960,520,'ONE ERRAND','#F8E9CC',46);
 card(t,ST(7)+.2,out(8),960,860,'CHATGPT AGENT (2025)','#F8E9CC',42);
 card(t,ST(9)+.55,out(10),960,640,'TAKEOVER MODE','#FFC66E',46);
 card(t,ST(11)+.9,out(12),960,760,'THE SHOP GOT ALL 3','#E4493F',46);
 card(t,ST(12)+.3,out(13),960,1200,'CHATGPT WALLET · NOV 13, 2026','#F8E9CC',38);
 card(t,ST(13)+.3,out(14),960,560,'INSIDE DOTS','#2DB2AE',50);
 card(t,ST(15)+.3,out(16),960,940,'YOU SEE WHAT YOU BUY','#FFC66E',44);
 card(t,ST(16)+.3,out(17),960,1060,'YOU APPROVE EACH PURCHASE','#2DB2AE',42);
 if(inS(t,14,15)){const v=fin(t,ST(14)+.3,.35)*(1-fin(t,out(15),.25));if(v>0){const x=ctx;x.save();x.globalAlpha=v;x.beginPath();x.roundRect(1330,150,520,330,26);x.clip();x.translate(1330-2000*.5,150-330*.5);x.scale(.5,.5);
   skyStreet(x,0);groundStreet(x,0);boothProp(x,BOOTH,0);shopFront(x,SHOP_X,t);counterProp(x,2420,2980);tillProp(x,TX,CTR_TOP,tillScreen(t));const d=dotStreet(t);
   x.translate(0,0);drawDot(x,2480+Math.sin(t*1.3)*10,520+Math.sin(t*2.6)*10,76,t,{look:.8});cardProp(x,2575,610,.7,-.12,'teal');x.restore();
   x.save();x.globalAlpha=v;x.strokeStyle='#2DB2AE';x.lineWidth=7;x.beginPath();x.roundRect(1330,150,520,330,26);x.stroke();x.restore()}}
 if(inS(t,18,19)){const v=fin(t,ST(18)+.5,.35)*(1-fin(t,out(19),.25));if(v>0){const x=ctx;x.save();x.globalAlpha=v;rr(x,70,640,480,300,26,'#1B1430','#FFC66E',6);x.save();x.beginPath();x.roundRect(76,646,468,288,22);x.clip();
   x.fillStyle='#FF6B5E';x.beginPath();x.roundRect(90,820,440,200,30);x.fill();x.fillStyle='#E4493F';x.beginPath();x.roundRect(170,790,280,90,16);x.fill();cardProp(x,310,780,.95+Math.sin(t*1.5)*.01,-.08,'gold');x.restore();
   txt(x,'YOUR REAL CARD',310,690,32,'#FFC66E','center','900');txt(x,'still in your pocket',310,925,28,'#F8E9CC','center','800');x.restore()}}
 card(t,ST(22)+.5,out(23),960,640,'AGENT: NEVER SEES IT','#2DB2AE',46);
 card(t,ST(23)+.3,out(24),960,640,'SHOP: NEVER SEES IT','#FFC66E',46);
 if(inS(t,24,25)){const fo=1-fin(t,out(25),.25);popCard(t,'HOW?',ST(24)+.1,960,990,110,fo,-.03);check(ctx,1150,982,64,bo(seg(t,ST(24)+.6,ST(24)+.85))*fo)}
 if(inS(t,25,26)){const fo=1-fin(t,out(26),.25);popCard(t,'WHY?',ST(25)+.1,640,990,110,fo,-.03);check(ctx,820,982,64,bo(seg(t,ST(25)+.6,ST(25)+.85))*fo)}
 card(t,ST(26)+.3,out(27),960,500,'FOR NOW: CHATGPT PRO · US · 18+','#FFC66E',44);
 card(t,ST(27)+.3,out(28),960,740,'SOME SHOPS MAY BLOCK IT','#E4493F',46);
 /* the takeaway card: two lines, the plain statement, then the amber punchline */
 if(inS(t,28,29)){const fo=1-fin(t,out(29),.25),dm=fin(t,ST(28)+.15,.5);ctx.save();ctx.globalAlpha=.42*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,53.2,.35)*fo;if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-610,206,1220,196,40);ctx.fill();ctx.restore();
   txt(ctx,'Your helper still runs the errand;',W/2,272,60,'#F8E9CC','center','800',v);txt(ctx,'it just never holds your wallet.',W/2,350,64,'#FFC66E','center','800',fin(t,54.9,.35)*fo)}}
 /* call to action: the subscribe button pops in on the spoken line. No "Next" line: the next episode is not decided */
 const c=fin(t,57.1,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-57.1)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}}

// ---------- cameras, one per shot ----------
const E=u=>ease(u),CAM=[
 ()=>({}),
 u=>({x:lerp(1220,1260,E(u)),y:540,z:lerp(1.12,1.22,E(u)),b:[3,0,0]}),                       /* 1 you at the laptop, typing your card */
 u=>({x:lerp(1040,1080,E(u)),y:lerp(540,560,E(u)),z:lerp(1.4,1.5,E(u)),b:[3,0,0]}),          /* 2 the phone: one scan */
 u=>({x:lerp(2520,2570,E(u)),y:lerp(530,520,E(u)),z:lerp(1.3,1.42,E(u)),b:[3,.5,0]}),         /* 3 the dot at the till with the stand-in card */
 u=>({x:lerp(980,1010,E(u)),y:520,z:lerp(1.15,1.24,E(u)),b:[3,0,0]}),                        /* 4 you, facing us: how, why */
 u=>({x:lerp(1250,1330,E(u)),y:480,z:lerp(.62,.66,E(u)),b:[2,.4,0]}),                        /* 5 the street, wide */
 u=>({x:lerp(780,1080,E(u)),y:490,z:lerp(.95,.9,E(u)),b:[3,.5,0]}),                          /* 6 you send the helper */
 u=>({x:lerp(1830,1990,E(u)),y:500,z:lerp(1.42,1.5,E(u)),b:[3,.5,0]}),                       /* 7 close on the robot, walking */
 u=>({x:lerp(2460,2500,E(u)),y:lerp(490,480,E(u)),z:lerp(1.52,1.65,E(u)),b:[3,.5,0]}),        /* 8 it stops at the till */
 u=>({x:lerp(2160,2200,E(u)),y:lerp(500,495,E(u)),z:lerp(1.42,1.5,E(u)),b:[3,.5,0]}),         /* 9 you take over its browser */
 u=>({x:lerp(2130,2170,E(u)),y:lerp(480,470,E(u)),z:lerp(1.75,1.85,E(u)),b:[3,.5,0]}),        /* 10 your real card goes in */
 u=>({x:lerp(2540,2580,E(u)),y:lerp(530,520,E(u)),z:lerp(1.65,1.78,E(u)),b:[3,.5,0]}),        /* 11 the shop got all three */
 u=>({x:lerp(2300,2340,E(u)),y:lerp(500,490,E(u)),z:lerp(1.2,1.3,E(u)),b:[3,.5,0]}),          /* 12 now: the dot where the robot stood */
 u=>({x:lerp(2200,2300,E(u)),y:lerp(500,495,E(u)),z:lerp(1.4,1.5,E(u)),b:[3,.5,0]}),         /* 13 the dot carries a wallet */
 u=>({x:lerp(1000,1040,E(u)),y:lerp(560,580,E(u)),z:lerp(1.2,1.3,E(u)),b:[3,0,0]}),          /* 14 the phone buzzes */
 u=>({x:lerp(1060,1080,E(u)),y:lerp(520,530,E(u)),z:lerp(1.6,1.75,E(u)),b:[3,0,0]}),         /* 15 total and card */
 u=>({x:lerp(1040,1060,E(u)),y:lerp(500,495,E(u)),z:lerp(1.55,1.7,E(u)),b:[3,0,0]}),         /* 16 you approve */
 u=>({x:lerp(1760,1800,E(u)),y:lerp(530,525,E(u)),z:lerp(1.4,1.5,E(u)),b:[3,.5,0]}),         /* 17 the card network hands over a stand-in */
 u=>({x:lerp(2010,2040,E(u)),y:lerp(580,570,E(u)),z:lerp(2.2,2.45,E(u)),b:[3,.5,0]}),         /* 18 its own number, code and date */
 u=>({x:lerp(2560,2600,E(u)),y:lerp(540,535,E(u)),z:lerp(1.5,1.6,E(u)),b:[3,.5,0]}),         /* 19 the till charges the stand-in */
 u=>({x:960,y:540,z:lerp(1,1.06,E(u)),b:[0,0,0]}),                                            /* 20 the bill lands on your card */
 u=>({x:lerp(1450,1540,E(u)),y:lerp(760,790,E(u)),z:lerp(1.5,1.75,E(u)),b:[0,0,0]}),         /* 21 rewards and all */
 u=>({x:lerp(2440,2490,E(u)),y:lerp(470,480,E(u)),z:lerp(1.45,1.55,E(u)),b:[3,.5,0]}),        /* 22 the agent never sees your card */
 u=>({x:lerp(2690,2710,E(u)),y:lerp(540,545,E(u)),z:lerp(2,2.15,E(u)),b:[3,.5,0]}),          /* 23 neither does the shop */
 u=>({x:960,y:540,z:lerp(1,1.045,E(u)),b:[0,0,0]}),                                           /* 24 the board: how */
 u=>({x:lerp(960,1260,E(u)),y:lerp(540,600,E(u)),z:lerp(1.04,1.25,E(u)),b:[0,0,0]}),        /* 25 the board: why */
 u=>({x:lerp(1180,1500,E(u)),y:lerp(480,490,E(u)),z:lerp(.7,.66,E(u)),b:[2,.4,0]}),          /* 26 for now: Pro, US, 18+ */
 u=>({x:lerp(2900,3030,E(u)),y:lerp(500,505,E(u)),z:lerp(1.1,1.2,E(u)),b:[3,.5,0]}),         /* 27 some shops may block it */
 u=>({x:lerp(1000,900,E(u)),y:lerp(330,340,E(u)),z:lerp(.95,1.02,E(u)),b:[3,.5,0]}),         /* 28 the helper floats home */
 u=>({x:lerp(560,600,E(u)),y:lerp(500,495,E(u)),z:lerp(1.32,1.42,E(u)),b:[3,.5,0]})          /* 29 subscribe */
];
FILM={dur:60,cuts:CF,fadeIn:0,fadeOut:.45,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6; /* the epsilon keeps a cut frame on its side of the ST() frames */t_g=o;if(!s){drawTitle(o);return}({S:drawStreet,H:drawHome,M:drawMap,B:drawBoard})[PLACE[s]](o,cam);overlay(o)},
 plants(){return {robot:RW.plants(),hero:MW.plants()}}};
// ---------- sound events (the mix is in audio_mix.py): steps, a soft brush on every cut, clicks for cards, a phone buzz, scan blips, a card slide, the till ding, paper ----------
for(const t of RW.plants())say(t,'step');for(const t of MW.plants())say(t,'step');
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(const t of [ST(1)+1.2,ST(1)+1.45,ST(1)+1.7,ST(1)+1.95,ST(1)+2.2])say(t,'key');
for(const t of [ST(10)+.75,ST(10)+.95,ST(10)+1.15,ST(10)+1.35,ST(10)+1.55])say(t,'key');
say(ST(2)+.7,'blip');say(ST(2)+1.0,'blip');say(ST(16)+.85,'blip');say(ST(16)+1.55,'blip');say(ST(16)+2.0,'blip');
say(ST(14)+.12,'buzz');say(ST(14)+.5,'buzz');say(ST(14)+.95,'tick');say(ST(15)+.3,'tick');say(ST(15)+.8,'tick');
for(const t of [5.45,5.85,6.25,7.43,7.75,ST(24)+.1,ST(25)+.1,ST(13)+.3,ST(15)+.3,ST(16)+.3])say(t,'tick');say(8.26,'stamp');say(ST(8)+.8,'tick');say(ST(11)+.15,'tick');say(ST(11)+.43,'tick');say(ST(11)+.71,'tick');
say(ST(17)+.7,'slide');say(ST(19)+.75,'ding');say(ST(20)+1.3,'paper');say(ST(21)+.45,'tick');say(ST(27)+1.0,'bump');say(ST(25)+2.1,'lock');say(ST(9)+.5,'paper');say(57.1,'tick');say(ST(12)+.05,'tick');
