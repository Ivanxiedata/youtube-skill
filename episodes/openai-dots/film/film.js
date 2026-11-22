// Episode: OpenAI dots, told through a shop you run. The old ChatGPT is a clerk (a screen for a head) who does one task per ring of the bell,
// then waits; a dot works the night shift at its own desk, reads through glass, asks before it sends, and never gets the keys.
// 60 s, 26 shots (beats.md "Shots"). Voice from tts.py (vo.wav laid in at .3 s): film time = voice time + .3. Every time below is FILM seconds.
// Places on one clock: the shop (day or night), the mascot's bedroom (night inset, then morning), the board (BEFORE vs NOW).
// Helpers (txt, pill, bubble, tag, title card, overlay) follow episodes/mcp-stateless/film/film.js.
// Rules learned the hard way: no setLineDash; state changes sit on cut frames; every stroke setting sits inside save/restore; no // inside a long line.
let t_g=0;
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function bubble(x,X,Y,s,col,a,size=18){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`800 ${size}px Arial`;pill(x,X,Y,x.measureText(s).width+size*1.6,size*1.9,col);txt(x,s,X,Y+1,size,'#1B1430','center','800');x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const bo=u=>{u=clamp(u);return 1+2.70158*Math.pow(u-1,3)+1.70158*Math.pow(u-1,2)}; /* back-out: a pop with a small overshoot */
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function check(x,X,Y,sz,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(X-.5*sz,Y);x.lineTo(X-.12*sz,Y+.42*sz);x.lineTo(X+.55*sz,Y-.45*sz);
 x.strokeStyle='#120A1C';x.lineWidth=sz*.34;x.stroke();x.strokeStyle='#2DB2AE';x.lineWidth=sz*.2;x.stroke();x.restore()}
/* THE CLOCK: cut frames of the 26 shots, from beats.md "Shots" (film seconds x 30). Shot 0 is the title card. ST(i) = the second shot i starts. */
const CF=[0,50,128,203,288,357,429,507,569,633,717,777,836,897,957,1014,1109,1143,1202,1286,1338,1389,1457,1523,1593,1704,1800];
const shotOf=t=>{const f=Math.round(t*30+1e-6);let s=0;for(let i=0;i<CF.length-1;i++)if(f>=CF[i])s=i;return s};
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.29; /* out(i): a card fades out from here, so it is gone .04 s before the cut at shot i */
const PLACE='T'+'S'.repeat(14)+'HHH'+'S'+'BBB'+'SSSS'; /* T title, S shop, H home, B board, one letter per shot */
const DN='-DN'+'DDDDDDD'+'NNNNN'+'MMM'+'D'+'BBB'+'DDND'; /* day or night of each shot: the cut sound is stronger when the place or the light changes */

// ---------- the shopkeeper's costume: a flat cap and a brown apron, drawn after actor() in the rig's own transforms ----------
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
function flatCap(x,p){x.save();headT(x,p);x.fillStyle='#8A5A3C';x.beginPath();x.moveTo(-94,-56);x.quadraticCurveTo(-100,-128,-14,-130);x.quadraticCurveTo(70,-134,96,-60);x.quadraticCurveTo(0,-86,-94,-56);x.fill();
 x.fillStyle='#5E3B26';x.beginPath();x.roundRect(-98,-70,198,24,11);x.fill();x.fillStyle='#5E3B26';x.beginPath();x.arc(-6,-132,8,0,7);x.fill();
 x.strokeStyle='rgba(27,20,48,.25)';x.lineWidth=5;x.lineCap='round';x.beginPath();x.moveTo(-46,-118);x.lineTo(-30,-86);x.stroke();x.restore()}
function apron(x,p){x.save();bodyT(x,p);x.fillStyle='#7A4A2E';x.beginPath();x.moveTo(-72,96);x.lineTo(72,96);x.lineTo(80,TH+6);x.quadraticCurveTo(0,TH+22,-80,TH+6);x.closePath();x.fill();
 x.fillStyle='#5E3822';x.fillRect(-84,88,168,16);x.fillStyle='#9A6038';x.beginPath();x.roundRect(-34,150,68,46,8);x.fill();x.restore()}
const shopkeeper=(x,id,p,cam)=>{actor(x,id,HERO,p,cam);apron(x,p);flatCap(x,p);return p};

// ---------- the old ChatGPT: a clerk with a screen for a head, grey-blue so it is not a skin tone ----------
const CLERK={skin:'#566C90',cloth:'#7C93B5',hood:'#566C90',hand:'#B4C4DA',face:'#16243C',leg:'#2C2A49',shoe:'#17141F',finger:'#16243C'};
/* mode 0 typing dots, 1 "waiting...", 2 screen off */
function clerkHead(x,p,mode,t){x.save();headT(x,p);
 x.fillStyle='#566C90';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#8CA0BF','#566C90',5);rr(x,-84,-70,168,152,14,'#16243C');
 if(mode<2){x.fillStyle='#9FB3D1';x.beginPath();x.roundRect(-72,-50,144,84,24);x.fill();x.beginPath();x.moveTo(-44,30);x.lineTo(-58,58);x.lineTo(-12,30);x.closePath();x.fill();
  if(mode==0){for(let i=-1;i<=1;i++){x.fillStyle='#16243C';x.beginPath();x.arc(i*32,-8+Math.sin(t*6+i)*4,9,0,7);x.fill()}}
  else txt(x,'waiting...',0,-8,25,'#16243C','center','800')}
 else{x.fillStyle='rgba(159,179,209,.10)';x.beginPath();x.moveTo(-84,-70);x.lineTo(-30,-70);x.lineTo(-84,10);x.closePath();x.fill()}
 x.restore()}

// ---------- the dot: a floating teal circle with two eyes and a soft glow. Generic; not OpenAI's artwork ----------
function drawDot(x,X,Y,r,t,o={}){x.save();x.translate(X,Y);const lk=o.look||0,ly=o.lookY||0,bl=o.blink||0;
 let g=x.createRadialGradient(0,0,r*.5,0,0,r*2.8);g.addColorStop(0,'rgba(45,178,174,.55)');g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.beginPath();x.arc(0,0,r*2.8,0,7);x.fill();
 x.fillStyle='#2DB2AE';x.beginPath();x.arc(0,0,r,0,7);x.fill();x.fillStyle='rgba(255,255,255,.2)';x.beginPath();x.ellipse(-r*.32,-r*.42,r*.34,r*.18,-.5,0,7);x.fill();
 for(const s of [-1,1]){const ex=s*r*.34+lk*r*.1,ey=-r*.08+ly*r*.1,h=bl>.5?4:r*.34*(1-bl*.9)+3;x.fillStyle='#0E3A3F';x.beginPath();x.ellipse(ex,ey,r*.1,h/2,0,0,7);x.fill()}
 x.strokeStyle='#0E3A3F';x.lineWidth=r*.07;x.lineCap='round';x.beginPath();x.moveTo(lk*r*.1-r*.2,r*.3);x.quadraticCurveTo(lk*r*.1,r*.3+(o.smile??.18)*r,lk*r*.1+r*.2,r*.3);x.stroke();
 x.restore()}

// ---------- props ----------
function bell(x,X,Y,press){x.save();x.translate(X,Y);x.fillStyle='#6B3A22';x.beginPath();x.roundRect(-40,-8,80,12,5);x.fill();x.fillStyle='#E9B872';x.beginPath();x.ellipse(0,-8,32,28,0,Math.PI,0);x.fill();
 x.fillStyle='#F6D79A';x.beginPath();x.ellipse(-10,-24,8,10,-.5,0,7);x.fill();x.fillStyle='#8A5A3C';x.fillRect(-4,-40+press*9,8,10);x.fillStyle='#E9B872';x.beginPath();x.arc(0,-42+press*9,9,0,7);x.fill();x.restore()}
function parcel(x,X,Y,s=1){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#C9985A';x.fillRect(-40,-56,80,56);x.fillStyle='#E9C98A';x.fillRect(-8,-56,16,56);x.fillStyle='#A87A44';x.fillRect(-40,-56,80,6);
 x.fillStyle='#F4EBDD';x.fillRect(12,-34,22,16);x.restore()}
function computerBox(x,X,Y){x.save();x.translate(X,Y);x.fillStyle='#B9C3D6';x.beginPath();x.roundRect(-62,-92,124,92,10);x.fill();rr(x,-50,-80,100,60,6,'#16243C');
 x.fillStyle='#9FB3D1';x.beginPath();x.roundRect(-34,-72,68,28,12);x.fill();x.fillStyle='#8CA0BF';x.fillRect(-52,-14,104,6);x.fillStyle='#2DB2AE';x.beginPath();x.arc(42,-10,3,0,7);x.fill();x.restore()}
function wallClock(x,X,Y,r,hr,mn){x.save();x.translate(X,Y);x.fillStyle='#3B2352';x.beginPath();x.arc(0,0,r+8,0,7);x.fill();x.fillStyle='#F4EBDD';x.beginPath();x.arc(0,0,r,0,7);x.fill();
 x.strokeStyle='#3B2352';x.lineCap='round';for(let k=0;k<12;k++){const a=k*Math.PI/6;x.lineWidth=k%3?3:6;x.beginPath();x.moveTo(Math.sin(a)*(r-8),-Math.cos(a)*(r-8));x.lineTo(Math.sin(a)*(r-16),-Math.cos(a)*(r-16));x.stroke()}
 x.lineWidth=7;x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(hr)*r*.5,-Math.cos(hr)*r*.5);x.stroke();x.lineWidth=5;x.strokeStyle='#E4493F';x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(mn)*r*.78,-Math.cos(mn)*r*.78);x.stroke();
 x.fillStyle='#3B2352';x.beginPath();x.arc(0,0,6,0,7);x.fill();x.restore()}
function cloudIcon(x,X,Y,s,col='#9FE3DE'){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle=col;x.beginPath();x.arc(-26,6,20,0,7);x.arc(0,-8,28,0,7);x.arc(28,4,22,0,7);x.fill();x.fillRect(-26,6,54,20);x.beginPath();x.arc(-26,16,10,0,7);x.arc(28,14,12,0,7);x.fill();x.restore()}
function mailIcon(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-44,-30,88,60,8);x.fill();x.strokeStyle='#C9B8A0';x.lineWidth=4;x.lineJoin='round';x.beginPath();x.moveTo(-44,-24);x.lineTo(0,6);x.lineTo(44,-24);x.stroke();x.restore()}
function calIcon(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-40,-34,80,68,8);x.fill();x.fillStyle='#E4493F';x.beginPath();x.roundRect(-40,-34,80,20,8);x.fill();x.fillRect(-40,-24,80,10);
 x.fillStyle='#8A7AA8';for(let i=0;i<3;i++)for(let j=0;j<2;j++)x.fillRect(-28+i*22,-6+j*20,14,12);x.restore()}
function ledgerIcon(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#2A6F86';x.beginPath();x.roundRect(-38,-34,76,68,8);x.fill();x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-28,-26,56,52,4);x.fill();
 x.fillStyle='#8A7AA8';for(let i=0;i<4;i++)x.fillRect(-20,-18+i*12,40,4);x.restore()}
function padlock(x,X,Y,s,snap){x.save();x.translate(X,Y);x.scale(s,s);const up=(1-snap)*16;x.strokeStyle='#C9C3CF';x.lineWidth=9;x.lineCap='round';x.beginPath();x.arc(0,-12-up*.2,17,Math.PI,0);x.lineTo(17,-12+(1-snap)*-10);x.stroke();
 x.fillStyle='#FFC66E';x.beginPath();x.roundRect(-24,-14,48,38,8);x.fill();x.fillStyle='#1B1430';x.beginPath();x.arc(0,2,5,0,7);x.fill();x.fillRect(-2,4,4,10);x.restore()}
function envelope(x,X,Y,s,rot=0){x.save();x.translate(X,Y);x.rotate(rot);x.scale(s,s);x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-38,-26,76,52,6);x.fill();x.strokeStyle='#C9B8A0';x.lineWidth=4;x.lineJoin='round';x.beginPath();x.moveTo(-38,-20);x.lineTo(0,6);x.lineTo(38,-20);x.stroke();x.restore()}
function keyProp(x,X,Y,s,rot,tag,t){x.save();x.translate(X,Y);x.rotate(rot);x.scale(s,s);
 x.strokeStyle='#E9B872';x.lineWidth=9;x.lineCap='round';x.beginPath();x.arc(0,0,20,0,7);x.stroke();x.fillStyle='#E9B872';x.fillRect(-4,18,8,64);x.fillRect(4,52,16,8);x.fillRect(4,68,12,8);
 if(tag){x.save();x.translate(0,-4);x.rotate(Math.sin(t*3)*.04);x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-84,-110,168,50,8);x.fill();x.strokeStyle='#E9B872';x.lineWidth=4;x.beginPath();x.moveTo(0,-60);x.lineTo(0,-24);x.stroke();txt(x,'PASSWORD',0,-84,27,'#1B1430','center','900');x.restore()}x.restore()}
function note(x,X,Y,sc,rot){x.save();x.translate(X,Y);x.rotate(rot);x.scale(sc,sc);x.fillStyle='rgba(20,10,30,.25)';x.fillRect(-148,-96,300,206);x.fillStyle='#FFE08A';x.beginPath();x.roundRect(-150,-100,300,206,6);x.fill();
 x.fillStyle='#E4493F';x.beginPath();x.arc(0,-92,9,0,7);x.fill();txt(x,'YOUR GOALS',0,-56,34,'#1B1430','center','900');
 x.fillStyle='rgba(27,20,48,.4)';x.fillRect(-124,-36,248,3);
 [['get paid on time',-6],['answer customers',44]].forEach(r=>{x.strokeStyle='#1B1430';x.lineWidth=4;x.beginPath();x.roundRect(-124,r[1]-14,26,26,4);x.stroke();txt(x,r[0],-84,r[1]-1,29,'#1B1430','left','800')});x.restore()}
function askNote(x,X,Y,sc,rot,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.rotate(rot);x.scale(sc,sc);x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-90,-62,180,124,10);x.fill();
 txt(x,'Send?',0,-30,38,'#1B1430','center','900');pill(x,-40,22,70,34,'#2DB2AE');txt(x,'YES',-40,23,22,'#1B1430','center','900');pill(x,44,22,70,34,'#C9B8E0');txt(x,'NO',44,23,22,'#1B1430','center','900');x.restore()}
function invoicePaper(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='rgba(20,10,30,.25)';x.fillRect(-58,-76,124,160);x.fillStyle='#F4EBDD';x.fillRect(-60,-80,120,160);x.fillStyle='#E4493F';x.fillRect(-60,-80,120,22);
 x.fillStyle='#8A7AA8';for(let i=0;i<5;i++)x.fillRect(-46,-46+i*20,i%2?60:88,6);txt(x,'$',40,50,36,'#1B1430','center','900');x.restore()}
function magnifier(x,LX,LY,HX,HY,r){x.save();x.strokeStyle='#5E3B26';x.lineWidth=14;x.lineCap='round';const a=Math.atan2(HY-LY,HX-LX);x.beginPath();x.moveTo(LX+Math.cos(a)*r,LY+Math.sin(a)*r);x.lineTo(HX,HY);x.stroke();
 x.fillStyle='rgba(190,235,245,.35)';x.beginPath();x.arc(LX,LY,r,0,7);x.fill();x.strokeStyle='#E9B872';x.lineWidth=10;x.beginPath();x.arc(LX,LY,r,0,7);x.stroke();
 x.strokeStyle='rgba(255,255,255,.55)';x.lineWidth=5;x.beginPath();x.arc(LX,LY,r*.66,Math.PI*1.15,Math.PI*1.5);x.stroke();x.restore()}
/* the OPEN / CLOSED sign: u 0 open, 1 closed; it turns on its chain (the width squashes through the flip) */
function shopSign(x,X,Y,u){x.save();x.translate(X,Y);x.strokeStyle='#2A1838';x.lineWidth=4;x.beginPath();x.moveTo(-34,-80);x.lineTo(-24,-20);x.moveTo(34,-80);x.lineTo(24,-20);x.stroke();
 const sq=Math.abs(Math.cos(u*Math.PI)),closed=u>.5;x.scale(Math.max(.08,sq),1);rr(x,-64,-20,128,64,10,closed?'#E4493F':'#2DB2AE','#1B1430',5);
 txt(x,closed?'CLOSED':'OPEN',0,12,closed?28:34,'#FFF6E6','center','900');x.restore()}
function yourShopBoard(x,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(2320,56);rr(x,-190,-46,380,92,16,'#FFC66E','#3B2352',8);imp(x,'YOUR SHOP',0,4,66,'#1B1430');x.restore()}

// ---------- the shop: counter on the right, the night desk on the left, one wall clock between the windows ----------
const FL=868,MS=.82,SY=440,SS=.7,CTR=[840,1840,590],CL_X=1500,BELL=[1790,590],MAS_C=1930,DOOR_X=2260,SIGN=[2078,490];
const NIGHT=t=>{const sh=shotOf(t);return DN[sh]=='N'?1:sh==9?.55*fin(t,23.0,.85):0};
const BOX0=[1590,562],BOX1=[1695,562],DESKY=735;
function shopOutside(x,n){let g=x.createLinearGradient(0,-300,0,640);
 if(n>.5){g.addColorStop(0,'#0F0E3A');g.addColorStop(.6,'#2A2060');g.addColorStop(1,'#4A3470')}else{g.addColorStop(0,'#6E9AD8');g.addColorStop(.6,'#BDB6D8');g.addColorStop(1,'#F6C9A0')}
 x.fillStyle=g;x.fillRect(-1600,-1200,7000,1900);
 if(n>.5){x.fillStyle='#F8E9CC';x.beginPath();x.arc(1500,230,46,0,7);x.fill();x.fillStyle='#2A2060';x.beginPath();x.arc(1522,216,42,0,7);x.fill();x.fillStyle='#F8E9CC';for(let k=0;k<30;k++)x.fillRect(-300+hash(k,1)*2600,-100+hash(k,2)*420,4,4)}
 else{x.fillStyle='#FFE9A8';x.beginPath();x.arc(1450,250,50,0,7);x.fill()}
 const r=rng(3);let px=-1600;x.fillStyle=n>.5?'#1E1850':'#8A74B0';while(px<5400){const bw=70+r()*120,bh=140+r()*240;x.fillRect(px,640-bh,bw,bh);px+=bw}
 if(n>.5){x.fillStyle='rgba(255,226,160,.8)';for(let i=0;i<120;i++)x.fillRect(-1600+r()*7000,300+r()*320,6,8)}
 x.fillStyle=n>.5?'#1A1440':'#7A6498';x.fillRect(-1600,600,7000,1500)}
function counter(x){const [a,b,top]=CTR;let g=x.createLinearGradient(0,top,0,800);g.addColorStop(0,'#7A4038');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(a,top,b-a,800-top);
 x.fillStyle='rgba(20,10,30,.28)';for(let X=a+40;X<b-60;X+=200)x.fillRect(X,top+40,150,130);
 x.fillStyle='#B0705A';x.beginPath();x.roundRect(a-16,top-12,b-a+32,24,8);x.fill();x.fillStyle='rgba(255,226,190,.45)';x.fillRect(a-16,top-12,b-a+32,4)}
function desk(x){let g=x.createLinearGradient(0,DESKY,0,FL+20);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(110,DESKY,810,FL+20-DESKY);
 x.fillStyle='rgba(255,226,190,.45)';x.fillRect(110,DESKY,810,4);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(130,DESKY+30,360,90);x.fillRect(520,DESKY+30,380,90)}
function monitor(x,X,Y,w,h,t,work){x.save();x.fillStyle='#1B1430';x.fillRect(X-8,Y-26,16,26);x.beginPath();x.ellipse(X,Y-2,w*.22,6,0,0,7);x.fill();rr(x,X-w/2,Y-26-h,w,h,10,'#1B1430');rr(x,X-w/2+8,Y-18-h,w-16,h-16,6,'#141238');
 x.save();x.beginPath();x.rect(X-w/2+8,Y-18-h,w-16,h-16);x.clip();if(work>0){x.globalAlpha=work;cloudIcon(x,X,Y-26-h*.5,.95+Math.sin(t*3)*.03);x.fillStyle='#F8E9CC';for(let k=0;k<3;k++)x.fillRect(X-40+k*30,Y-26-h*.5+46,18,5)}x.restore();x.restore()}
function lampDesk(x,X,Y){x.save();x.translate(X,Y);x.fillStyle='#2A1F42';x.beginPath();x.ellipse(0,-4,40,8,0,0,7);x.fill();x.strokeStyle='#2A1F42';x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(0,-6);x.lineTo(24,-110);x.lineTo(-8,-170);x.stroke();
 x.fillStyle='#FFC66E';x.beginPath();x.moveTo(-44,-176);x.lineTo(30,-196);x.lineTo(46,-150);x.lineTo(-22,-132);x.closePath();x.fill();x.restore()}
/* the glass pane on the desk: three apps behind it. The dot reads through it but cannot reach through it */
function paneProp(x,X,Y,t,sendA,snap){x.save();x.translate(X,Y);rr(x,-90,-330,180,330,12,'#2A1F42','#8CA0BF',8);
 mailIcon(x,-8,-258,.9);calIcon(x,-8,-168,.9);ledgerIcon(x,-8,-78,.9);
 if(sendA>0)pill(x,44,-222,70,30,'#E4493F',sendA),txt(x,'SEND',44,-221,19,'#FFF6E6','center','900',sendA);
 x.save();x.beginPath();x.roundRect(-82,-322,164,314,8);x.clip();x.fillStyle='rgba(190,235,245,.16)';x.fillRect(-82,-322,164,314);x.fillStyle='rgba(255,255,255,.14)';x.beginPath();x.moveTo(-82,-250);x.lineTo(-30,-322);x.lineTo(2,-322);x.lineTo(-82,-210);x.fill();x.restore();
 if(snap>0){padlock(x,44,-222+(1-snap)*-40,.9,snap);x.save();x.globalAlpha=snap;x.strokeStyle='#E4493F';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(8,-250);x.lineTo(80,-194);x.moveTo(80,-250);x.lineTo(8,-194);x.stroke();x.restore()}x.restore()}
function pinboard(x){rr(x,296,122,408,272,10,'#5E3B26');rr(x,308,134,384,248,6,'#A97B50');x.save();x.fillStyle='rgba(94,59,38,.35)';for(let k=0;k<26;k++)x.fillRect(320+hash(k,5)*340,148+hash(k,6)*210,5,5);x.restore()}
function homeInShop(t){return false}
/* shot 9: lights dim as the shop closes; the lamps are drawn with a dim factor */
function pendantL(x,lx,t,dim){pendant(x,lx,t,.1,dim)}

// ---------- poses ----------
const DESKP=[520,572];
function dotP(t){let X=DESKP[0],Y=DESKP[1];
 if(inS(t,14,15)){const u=ease(seg(t,ST(14)+.2,ST(14)+.75)),b=ease(seg(t,ST(14)+1.1,ST(14)+1.6));X=lerp(DESKP[0],630,u*(1-b))}
 if(inS(t,18,19)){const u=ease(seg(t,ST(18)+.15,ST(18)+1.25));X=lerp(DESKP[0],1000,u);Y=lerp(572,540,u)}
 if(inS(t,22,23)){X=1270;Y=500}
 if(inS(t,23,24)){X=1180;Y=520}
 if(inS(t,24,25)){X+=Math.sin(t*1.5)*46;Y+=Math.sin(t*2.1)*14}
 return [X,Y+Math.sin(t*2.6)*9]}
const BLINKS=[3.1,6.9,11.3,15.4,19.8,24.6,29.4,35.3,41.2,47.5,52.2,55.6];
const MAS_BLINKS=[3.2,7.7,12.4,16.1,22.8,24.9,36.1,38.9,45.3,50.9,53.9,58.6];
/* the clerk: shop shots 1-9 and 22-24 (it stands at the counter in the old way; later it is dark) */
function carry(t,t0){return ease(seg(t,t0,t0+1.0))}
const CARRY=[ST(1)+.2,ST(7)+.3];
function boxPos(t){let k=-1;if(inS(t,1,2))k=0;else if(t>=ST(7)&&t<ST(10))k=1;if(k<0)return null;const u=carry(t,CARRY[k]);return [lerp(BOX0[0],BOX1[0],u),BOX0[1]-Math.sin(u*Math.PI)*14]}
function clerkPose(t){const p={x:CL_X,y:SY,s:SS,face:1,noLegs:true,breath:t*2+1,blink:blinkAt(t,BLINKS),look:.5,lookY:0,mouth:.5,brow:.2,hands:{},showH:{}};
 const bp=boxPos(t);let g=0;
 if(inS(t,1,2))g=fin(t,CARRY[0]-.1,.3)*(1-fin(t,CARRY[0]+.95,.4));
 else if(t>=ST(7)&&t<ST(8))g=fin(t,CARRY[1]-.1,.3)*(1-fin(t,CARRY[1]+.95,.4));
 if(g>0&&bp){p.hands.r=[lerp(97,w2l(p,[bp[0]-46,bp[1]-14])[0],g),lerp(220,w2l(p,[bp[0]-46,bp[1]-14])[1],g)];p.showH.r=g>.1}
 return p}
function clerkMode(t){if(t>=ST(9)+1.9)return 2;if(inS(t,1,2))return t>ST(1)+1.5?1:0;if(inS(t,5,7))return 0;if(t>=ST(7)&&t<ST(8))return 0;if(inS(t,8,9)||t>=ST(8)&&t<ST(9)+1.9)return 1;return t<ST(1)?0:1}
const outW=makeWalk({pts:[[MAS_C,FL],[2200,FL],[2330,730]],t0:ST(9)+1.15,t1:ST(9)+2.25,steps:3,scale:()=>MS});
const inW=makeWalk({pts:[[DOOR_X,FL],[MAS_C,FL]],t0:ST(6)+.1,t1:ST(6)+2.3,steps:4,scale:()=>MS});
function masShopPose(t){
 if(inS(t,9,10)&&t>=ST(9)+1.15){const w=outW.at(t),q=walkPose({x:w.c[0],y:standY(w.c[1],w.s),s:w.s,face:1,breath:t*2,look:.7,lookY:.1,mouth:.5,brow:.2},w);
  /* a brisk exit: the arms swing less, so no hand moves more than 40 px a frame */
  if(q.hands&&q.hands.l){q.hands.l=[-96+(q.hands.l[0]+96)*.55,q.hands.l[1]];q.hands.r=[96+(q.hands.r[0]-96)*.55,q.hands.r[1]]}return q}
 if(inS(t,6,7)){const w=inW.at(t),q=walkPose({x:w.c[0],y:standY(w.c[1],w.s),s:w.s,face:-1,breath:t*2,look:-.7,lookY:.1,mouth:.5,brow:.2},w);
  if(q.hands&&q.hands.l){q.hands.l=[-96+(q.hands.l[0]+96)*.55,q.hands.l[1]];q.hands.r=[96+(q.hands.r[0]-96)*.55,q.hands.r[1]]}
  const g=fin(t,ST(6)+2.35,.25);if(g>0&&!w.moving){q.showH=q.showH||{};q.hands=q.hands||{};const l0=q.hands.l||[-97,220],tg=w2l(q,[BELL[0]+14,BELL[1]-44]);q.hands.l=[lerp(l0[0],tg[0],g),lerp(l0[1],tg[1],g)];q.showH.l=true}return q}
 let X=MAS_C,face=-1,look=-.7,lookY=.05,mouth=.5,brow=.2;
 if(inS(t,3,4)){X=1560;face=1;look=.1;lookY=0;mouth=.9}
 if(inS(t,4,6)){X=DOOR_X;look=-.8}
 if(inS(t,18,19)){X=1380}
 if(inS(t,22,23)){X=1600;look=-.7}
 if(inS(t,23,24)){X=1560;look=-.6;lookY=.3}
 if(inS(t,24,25)){X=2010;look=-.75}
 if(inS(t,25,26)){X=1560;face=1;look=.1;lookY=0;mouth=.95}
 const p={x:X,y:standY(FL,MS),s:MS,face,breath:t*2.2,blink:blinkAt(t,MAS_BLINKS),look,lookY,mouth,sad:0,brow,open:0,hands:{},showH:{}};
 if(inS(t,3,4)){p.brow=.45;p.tilt=.03}
 if(inS(t,7,8)){const g=1-fin(t,ST(7)+.95,.1)*0,press=Math.max(0,Math.sin(seg(t,ST(7)+.2,ST(7)+.55)*Math.PI)),tg=w2l(p,[BELL[0]+14,BELL[1]-48+press*18]);p.hands.l=tg;p.showH.l=true}
 else if(inS(t,8,9)){const lo=1-fin(t,ST(8)+.05,.5),tg=w2l(p,[BELL[0]+14,BELL[1]-48]);p.hands.l=[lerp(-97,tg[0],lo),lerp(220,tg[1],lo)];p.showH.l=lo>.1}
 else if(inS(t,9,10)){const a=fin(t,ST(9)+.1,.4)*(1-fin(t,ST(9)+.85,.35)),tg=w2l(p,[SIGN[0]-20,SIGN[1]-8]);p.hands.r=[lerp(97,tg[0],a),lerp(220,tg[1],a)];p.showH.r=a>.1;p.look=.6}
 else if(inS(t,18,19)){const a=fin(t,ST(18),.01),tg=w2l(p,[X-150,540]);p.hands.l=tg;p.showH.l=true;p.brow=.5}
 else if(inS(t,23,24)){const sc=Math.sin(t*2.2)*10,l=[-185,40],r=[-115+sc,25];p.hands.l=l;p.hands.r=r;p.showH.l=true;p.showH.r=true;p.tuck={}}
 else if(inS(t,24,25)){p.hands.l=[-140,62+Math.sin(t*4)*4];p.showH.l=true}
 else if(inS(t,25,26)){const g=fin(t,ST(25)+.3,.5);p.hands.r=[lerp(97,140+Math.sin(t*9)*22,g),lerp(220,-95,g)];p.showH.r=g>.1}
 return p}
const heroInShop=t=>(t>=ST(3)&&t<ST(10))||inS(t,18,19)||(t>=ST(22)&&t<ST(26));

function drawShop(t,cam){const n=NIGHT(t);
 const door=1.75*ease(seg(t,ST(9)+1.0,ST(9)+1.3))*(1-ease(seg(t,ST(9)+2.2,ST(9)+2.65)));
 let x=layer('out',cam,.6);shopOutside(x,n>.7?1:0);
 x=layer('wall',cam);cafeWall(x);cafeFloor(x);
 pinboard(x);wallClock(x,1100,250,62,t*.02+1.4,(inS(t,2,3)?t*9:inS(t,8,9)?Math.floor(t*1)*Math.PI/30:inS(t,24,25)?t*1.6:t*.3));
 if(t>=ST(12)+.15&&!inS(t,0,1))note(x,500,262,1,-.025);
 yourShopBoard(x,inS(t,4,5)?fin(t,ST(4)+.2,.3)*(1-fin(t,out(5),.25)):0);
 shopSign(x,SIGN[0],SIGN[1],t<ST(9)+.55||t>=ST(18)?0:ease(seg(t,ST(9)+.55,ST(9)+.9)));
 desk(x);monitor(x,300,DESKY,230,150,t,t>=ST(11)-.01&&(n>.5||t>=ST(11))?1:(n>.5?.55:0));lampDesk(x,160,DESKY);
 paneProp(x,820,DESKY,t,inS(t,13,15)?fin(t,ST(13)+.3,.3):0,inS(t,14,15)?ease(seg(t,ST(14)+.8,ST(14)+1.0)):0);
 x.save();x.beginPath();x.rect(XA,-900,XB-XA,900+CTR[2]);x.clip();
 if(!(inS(t,22,24)||inS(t,25,26))){const cp=clerkPose(t);actor(x,'clerk',CLERK,Object.assign({},cp,{noFace:true}),cam);clerkHead(x,cp,clerkMode(t),t)}x.restore();
 counter(x);computerBox(x,1300,CTR[2]-12);bell(x,BELL[0],BELL[1]-12,inS(t,7,8)?Math.max(0,Math.sin(seg(t,ST(7)+.2,ST(7)+.55)*Math.PI)):0);
 const bp=boxPos(t);if(bp)parcel(x,bp[0],bp[1]+8);
 const d=layer('door',cam);doorLeaf(d,door);
 const a=layer('act',cam);if(door>0)doorLight(a,door/1.75);for(const lx of [1100,1600,2200])pendantL(a,lx,t,1-n*.7);
 if(heroInShop(t)){const mp=shopkeeper(a,'hero',masShopPose(t),cam);
  if(inS(t,18,19)){const h=h2w(mp,'l');keyProp(a,h[0]-4,h[1]+6,.9,-.12,true,t);contact('key',h,[h[0],h[1]])}
  if(inS(t,23,24)){const hl=h2w(mp,'l'),hr=h2w(mp,'r');invoicePaper(a,hl[0]-6,hl[1]-74,.86);magnifier(a,hl[0]+6+(hr[0]-1466),hl[1]-66,hr[0],hr[1],46)}
  if(inS(t,24,25)){const h=h2w(mp,'l');keyProp(a,h[0],h[1]+4,.55,.15,false,t)}}
 const f=layer('fg',cam);
 const dl=layer('dot',cam);const dp=dotP(t),dd=inS(t,10,11)?fin(t,ST(10)+.1,.5):1;
 if(n>.7||inS(t,2,3)){const g=dl.createRadialGradient(160,DESKY-150,10,160,DESKY-150,420);g.addColorStop(0,'rgba(255,214,150,.45)');g.addColorStop(1,'rgba(255,200,130,0)');dl.fillStyle=g;dl.fillRect(-300,DESKY-600,1000,900)}
 const showDot=(n>.7&&!inS(t,24,26)?true:false)||inS(t,2,3)||inS(t,18,19)||inS(t,22,25)||inS(t,24,25);
 if(showDot&&!inS(t,25,26)){const look=inS(t,12,13)?-.2:inS(t,13,14)||inS(t,14,15)?.9:inS(t,18,19)?.9:inS(t,22,24)?.8:0,lookY=inS(t,12,13)?-.9:0;
  dl.save();dl.globalAlpha=dd;drawDot(dl,dp[0],dp[1],64,t,{look,lookY,blink:blinkAt(t,BLINKS),smile:inS(t,14,15)?-.05:.18});dl.restore();
  if(inS(t,22,23))askNote(dl,dp[0]+100,dp[1]+34,1,.08,fin(t,ST(22)+.25,.3)*(1-fin(t,out(23),.25)))}
 comp([['out',(cam.b||[0])[0]],['wall',(cam.b||[0,0])[1]],['door',(cam.b||[0,0])[1]],['act',0],['fg',0]]);
 if(n>0){ctx.save();ctx.fillStyle=`rgba(14,10,64,${.5*n})`;ctx.fillRect(0,0,W,H);ctx.restore()}
 blit(ctx,L.dot,0)}

// ---------- home: night (an inset in shot 13) and morning (shots 15-17) ----------
function homeBack(x,night){let g=x.createLinearGradient(0,0,0,900);if(night){g.addColorStop(0,'#1A1445');g.addColorStop(1,'#322058')}else{g.addColorStop(0,'#B5728A');g.addColorStop(1,'#E8A07A')}
 x.fillStyle=g;x.fillRect(-900,-500,3800,1500);x.fillStyle=night?'#2A1C46':'#6A4468';x.fillRect(-900,840,3800,400);
 rr(x,1170,110,430,380,16,'#3B2352');x.save();x.beginPath();x.roundRect(1186,126,398,348,8);x.clip();g=x.createLinearGradient(0,126,0,474);
 if(night){g.addColorStop(0,'#0F0E3A');g.addColorStop(1,'#2A2060')}else{g.addColorStop(0,'#FFB98A');g.addColorStop(1,'#FFE9A8')}x.fillStyle=g;x.fillRect(1186,126,398,348);
 if(night){x.fillStyle='#F8E9CC';x.beginPath();x.arc(1470,230,40,0,7);x.fill();x.fillStyle='#2A2060';x.beginPath();x.arc(1490,218,36,0,7);x.fill();x.fillStyle='#F8E9CC';for(let k=0;k<8;k++)x.fillRect(1210+hash(k,3)*330,150+hash(k,4)*160,4,4)}
 else{x.fillStyle='#FFF2C0';x.beginPath();x.arc(1330,330,56,0,7);x.fill();x.strokeStyle='#FFF2C0';x.lineWidth=7;x.lineCap='round';for(let k=0;k<8;k++){const a=k*Math.PI/4+.2;x.beginPath();x.moveTo(1330+Math.cos(a)*76,330+Math.sin(a)*76);x.lineTo(1330+Math.cos(a)*102,330+Math.sin(a)*102);x.stroke()}}
 x.restore();x.fillStyle='#3B2352';x.fillRect(1380,110,10,380);x.fillRect(1170,296,430,10);
 rr(x,60,380,60,520,12,'#5E3B26');rr(x,420,540,360,110,40,'#F4EBDD')}
function blanket(x){rr(x,100,690,860,230,44,'#7A56A0');rr(x,100,690,860,36,18,'#5C3F80')}
function homeMascot(x,p){return actor(x,'hero',HERO,p,null)}
const PH=[880,560];
function drawPhone(x,t,sh){const m=sh==16?1:0,buzz=inS(t,15,16)&&t<ST(15)+.8?Math.sin(t*60)*3*(1-seg(t,ST(15)+.4,ST(15)+.8)):0;
 x.save();x.translate(PH[0]+buzz,PH[1]);x.rotate(.05);rr(x,-118,-215,236,430,30,'#1B1430');rr(x,-106,-200,212,400,20,'#141238');
 const a1=bo(seg(t,ST(15)+.35,ST(15)+.7)),sent=t>=ST(16)+.7;
 if((!sent||inS(t,16,17))&&t>=ST(15)+.35&&!inS(t,17,18)){x.save();x.globalAlpha=Math.min(1,a1*3)*(1-fin(t,ST(16)+.5,.25));x.translate(0,-60);x.scale(a1,a1);rr(x,-92,-120,184,206,16,'#C9B8E0');
  txt(x,'You forgot',-78,-94,24,'#1B1430','left','800');txt(x,'an invoice.',-78,-64,24,'#1B1430','left','800');txt(x,"It's ready.",-78,-32,24,'#1B1430','left','800');txt(x,'Send it?',-78,0,28,'#1B1430','left','900');
  pill(x,-48,48,78,36,'#2DB2AE');txt(x,'YES',-48,49,22,'#1B1430','center','900');pill(x,44,48,78,36,'#8A7AA8');txt(x,'NO',44,49,22,'#1B1430','center','900');x.restore()}
 if(sent&&!inS(t,17,18)){check(x,0,-40,90,fin(t,ST(16)+.7,.25));txt(x,'sent',0,50,30,'#2DB2AE','center','900',fin(t,ST(16)+.8,.25))}
 if(inS(t,17,18)){const o=1-fin(t,ST(17)+.9,.25);if(o>0){x.save();x.globalAlpha=o;check(x,0,-40,90);txt(x,'sent',0,50,30,'#2DB2AE','center','900');x.restore()}
  const w=bo(seg(t,ST(17)+1.2,ST(17)+1.5));if(w>0){x.save();x.translate(0,-20);x.scale(w,w);rr(x,-92,-26,184,70,16,'#2DB2AE');txt(x,'Invoice sent ✓',0,9,25,'#1B1430','center','900');x.restore()}}
 x.restore()}
function drawHome(t,cam){const sh=shotOf(t);
 let x=layer('wall',cam);homeBack(x,false);
 const p={x:640,y:560,s:1,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,MAS_BLINKS),look:.85,lookY:.2,brow:sh==16?.7:.3,sad:0,mouth:sh==16?.95:.7,tilt:.03,hands:{},showH:{}};
 const tg=w2l(p,[PH[0]-60,PH[1]+120]);p.hands.r=tg;p.showH.r=true;
 if(sh==17){p.look=.2;p.lookY=0;p.mouth=.95+Math.sin(t*10)*.05}
 const a=layer('act',cam);homeMascot(a,p);
 const f=layer('fg',cam);blanket(f);drawPhone(f,t,sh);
 if(sh==16){const u=ease(seg(t,ST(16)+.05,ST(16)+.4)),pr=Math.sin(seg(t,ST(16)+.4,ST(16)+.6)*Math.PI),X=lerp(PH[0]+200,PH[0]-48+4,u),Y=lerp(PH[1]+330,PH[1]+110-pr*(-8),u);
  f.save();f.translate(X,Y);f.rotate(-.5);f.fillStyle=HERO.hand;f.beginPath();f.roundRect(-18,-30,36,150,18);f.fill();f.restore();
  if(t>=ST(16)+.7){const e=seg(t,ST(16)+.7,ST(16)+1.12);if(e<1)envelope(f,lerp(PH[0],PH[0]+420,easeIO(e)),lerp(PH[1]-40,PH[1]-300,easeIO(e)),1+.1*e,-.3*e)}}
 if(sh==17){const v=fin(t,ST(17)+.1,.25)*(1-fin(t,ST(17)+1.3,.25));if(v>0){bubble(f,380,300,'shorter notes','#F8E9CC',v,34)}}
 comp([['wall',0],['act',0],['fg',0]])}
function homeInset(){const x=ctx,k=.34;x.save();x.beginPath();x.roundRect(1420,92,440,290,22);x.clip();x.translate(1420-300*k,92-110*k);x.scale(k,k);
 homeBack(x,true);const p={x:640,y:640,s:1,face:1,noLegs:true,breath:t_g*1.2,blink:1,look:0,lookY:.2,brow:.1,sad:0,mouth:.2,tilt:-.08,hands:{},showH:{}};drawPerson(x,HERO,p);blanket(x);x.restore();
 x.save();x.strokeStyle='#FFC66E';x.lineWidth=6;x.beginPath();x.roundRect(1420,92,440,290,22);x.stroke();x.restore()}

// ---------- board: BEFORE (left) and NOW (right) side by side, in one frame ----------
const NB=[[70,'you ask','1 task','waits'],[990,'own cloud','computer','']];
function nodeBox(x,X,Y,w,h,lines,col,lit,icon){x.save();x.translate(X,Y);rr(x,-w/2,-h/2,w,h,18,'#2A1F42',lit>0?'#2DB2AE':col,lit>0?8:4);
 if(lit>0){x.globalAlpha=lit*.28;rr(x,-w/2,-h/2,w,h,18,'#2DB2AE');x.globalAlpha=1}
 icon(x,0,-44,1.15);lines.forEach((s,i)=>txt(x,s,0,50+i*42-(lines.length>1?20:0),38,'#F8E9CC','center','800'));x.restore()}
function iconBell(x,X,Y,s){x.save();x.translate(X,Y+22);x.scale(s,s);bell(x,0,0,0);x.restore()}
function iconBox(x,X,Y,s){x.save();x.translate(X,Y+22);x.scale(s,s);parcel(x,0,0,.9);x.restore()}
function iconClock(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);wallClock(x,0,0,34,t_g*.8,t_g*5);x.restore()}
function iconCloud(x,X,Y,s){cloudIcon(x,X,Y,s*.8)}
function iconNote(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#FFE08A';x.beginPath();x.roundRect(-34,-30,68,60,5);x.fill();x.fillStyle='#1B1430';for(let i=0;i<3;i++)x.fillRect(-22,-16+i*16,44,4);x.restore()}
function iconEye(x,X,Y,s){x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(-40,0);x.quadraticCurveTo(0,-34,40,0);x.quadraticCurveTo(0,34,-40,0);x.fill();x.fillStyle='#2DB2AE';x.beginPath();x.arc(0,0,15,0,7);x.fill();x.fillStyle='#0E3A3F';x.beginPath();x.arc(0,0,7,0,7);x.fill();x.restore()}
function bArrow(x,a,b,Y,col,p){if(p<=0)return;x.save();x.globalAlpha*=p;x.strokeStyle=col;x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(a,Y);x.lineTo(b-8,Y);x.stroke();x.fillStyle=col;x.beginPath();x.moveTo(b,Y);x.lineTo(b-22,Y-14);x.lineTo(b-22,Y+14);x.fill();x.restore()}
function drawBoard(t,cam){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1400,560,40,1400,560,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=140;y<960;y+=28)x.fillRect(958,y,4,14); /* dashes as rects: setLineDash is not deterministic in headless Chromium */
 const I=fin(t,ST(19)+.1,.35);
 pill(x,170,180,176,54,'#FFC66E',I);txt(x,'BEFORE',170,182,34,'#1B1430','center','900',I);txt(x,'ChatGPT · agent mode 2025',280,184,36,'#C9B8E0','left','700',I);
 pill(x,1070,180,120,54,'#2DB2AE',I);txt(x,'NOW',1070,182,34,'#1B1430','center','900',I);txt(x,'OpenAI dots 2026',1150,184,38,'#FFC66E','left','800',I);
 const Y=500,w=260,h=240,L=[170,490,810],R=[1100,1420,1740];
 const lits=[fin(t,ST(20)+.1,.3),fin(t,ST(20)+.75,.3),fin(t,ST(20)+1.35,.3)];
 [[L[0],['you ask'],iconBell],[L[1],['1 task'],iconBox],[L[2],['waits'],iconClock]].forEach((q,i)=>nodeBox(x,q[0],Y,w,h,q[1],'#6E5D8E',0,q[2]));
 bArrow(x,L[0]+w/2+4,L[1]-w/2-4,Y,'#C9B8E0',1);bArrow(x,L[1]+w/2+4,L[2]-w/2-4,Y,'#C9B8E0',1);
 [[R[0],['own cloud','computer'],iconCloud],[R[1],['your goals'],iconNote],[R[2],['24/7'],iconClock]].forEach((q,i)=>nodeBox(x,q[0],Y,w,h,q[1],'#FFC66E',inS(t,20,22)||t>=ST(20)?lits[i]:0,q[2]));
 bArrow(x,R[0]+w/2+4,R[1]-w/2-4,Y,'#FFC66E',1);bArrow(x,R[1]+w/2+4,R[2]-w/2-4,Y,'#FFC66E',1);
 const k=fin(t,ST(21)+.3,.4);if(k>0){pill(x,R[1]+30,760,520,86,'#2A1F42',k);x.save();x.globalAlpha=k;iconEye(x,R[1]-190,760,1.1);x.restore();txt(x,'away: read-only',R[1]+50,762,40,'#F8E9CC','center','800',k)}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function tag(){/* the brand's corner tag: the topic and the 60 s promise, on every frame */
 {const x=ctx;x.save();x.font='800 32px Arial';const tw=x.measureText('OpenAI dots').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'OpenAI dots',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800');x.restore()}}
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
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='OPENAI DOTS';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,'#F8E9CC');put(TOPIC,W/2,Yt+sz*.2,sz,'#FFC66E');
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H);
 tag()}
function popCard(t,s,t0,X,Y,size,fo,rot=-.04,col='#FFC66E'){const u=bo(seg(t,t0,t0+.3));if(u<=0)return;ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(X,Y);ctx.rotate(rot);ctx.scale(u,u);imp(ctx,s,0,0,size,col);ctx.restore()}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 tag();
 tab(t,ST(1)+.1,out(2),'BEFORE','#FFC66E');tab(t,ST(2)+.05,out(3),'NOW','#2DB2AE');tab(t,ST(10)+.05,out(11),'NOW','#2DB2AE');
 if(inS(t,2,3)){const fo=1-fin(t,out(3),.25);popCard(t,'24/7',ST(2)+.9,1180,300,120,fo,-.04,'#FFC66E')}
 if(inS(t,3,4)){const fo=1-fin(t,out(4),.25);popCard(t,'HOW?',7.05,1230,200,150,fo);popCard(t,'WHAT RISK?',7.6,1480,390,125,fo,.03);
  const u=bo(seg(t,8.5,8.75));if(u>0){ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(1450,860);ctx.rotate(-.035);ctx.scale(.5*u,.5*u);sticker(ctx);ctx.restore()}}
 card(t,ST(4)+.25,out(5),960,560,'BEFORE → NOW','#F8E9CC',42);
 card(t,ST(5)+.2,out(6),960,980,'CHATGPT · AGENT MODE (2025)','#F8E9CC',40);
 card(t,ST(7)+.3,out(8),960,640,'1 ASK = 1 TASK','#FFC66E',46);
 card(t,ST(10)+.25,out(11),960,1260,'OPENAI DOTS · DEVDAY, SEP 29, 2026','#F8E9CC',38);
 card(t,ST(11)+.2,out(12),960,960,'ITS OWN CLOUD COMPUTER','#2DB2AE',44);
 if(inS(t,13,14)){card(t,ST(13)+.25,out(14),960,500,'READ-ONLY','#FFC66E',50);const v=fin(t,ST(13)+.1,.3)*(1-fin(t,out(14),.2));if(v>0){ctx.save();ctx.globalAlpha=v;homeInset();ctx.restore()}}
 card(t,ST(17)+.4,out(18),960,860,'LEARNS FROM FEEDBACK','#2DB2AE',44);
 card(t,ST(18)+.3,out(19),960,560,'ALWAYS YOURS','#FFC66E',50);
 if(inS(t,19,20)){const fo=1-fin(t,out(20),.25);popCard(t,'HOW?',ST(19)+.15,960,980,110,fo,-.03);check(ctx,1150,972,64,bo(seg(t,ST(19)+.6,ST(19)+.85))*fo)}
 if(inS(t,21,22)){const fo=1-fin(t,out(22),.25);popCard(t,'WHAT RISK?',ST(21)+.1,960,960,110,fo,-.03);check(ctx,1290,952,64,bo(seg(t,ST(21)+.9,ST(21)+1.15))*fo)}
 card(t,ST(22)+.5,out(23),960,460,'ASKS FIRST','#2DB2AE',50);
 card(t,ST(23)+.3,out(24),960,720,'CHECK ITS WORK','#FFC66E',50);
 /* the takeaway card: two lines, the plain statement, then the amber punchline */
 if(inS(t,24,25)){const fo=1-fin(t,out(25),.25),dm=fin(t,ST(24)+.15,.5);ctx.save();ctx.globalAlpha=.42*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,53.3,.35)*fo;if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-560,206,1120,196,40);ctx.fill();ctx.restore();
   txt(ctx,'The shop never closes now,',W/2,272,60,'#F8E9CC','center','800',v);txt(ctx,'but the keys are still yours.',W/2,350,64,'#FFC66E','center','800',fin(t,54.8,.35)*fo)}}
 /* call to action: the subscribe button pops in on the spoken line. No "Next" line: the next episode is not decided */
 const c=fin(t,56.95,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-56.95)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}}

// ---------- cameras, one per shot ----------
const E=u=>ease(u),CAM=[
 ()=>({}),
 u=>({x:lerp(1500,1560,E(u)),y:480,z:lerp(1.25,1.32,E(u)),b:[3,.6,0]}),                       /* 1 the clerk hands over a parcel, then freezes */
 u=>({x:lerp(560,620,E(u)),y:lerp(500,490,E(u)),z:lerp(1.3,1.38,E(u)),b:[3,.6,0]}),           /* 2 night: the dot at its desk, the clock spins */
 u=>({x:lerp(1700,1680,E(u)),y:lerp(480,470,E(u)),z:lerp(1.6,1.72,E(u)),b:[4,1,0]}),          /* 3 you, facing the viewer */
 u=>({x:lerp(1740,1700,E(u)),y:lerp(470,480,E(u)),z:lerp(.9,.95,E(u)),b:[3,0,0]}),            /* 4 the wide shop by day */
 u=>({x:lerp(1440,1470,E(u)),y:lerp(470,465,E(u)),z:lerp(1.85,1.95,E(u)),b:[3,.5,0]}),        /* 5 close on the clerk */
 u=>({x:lerp(1700,1780,E(u)),y:480,z:lerp(1.3,1.38,E(u)),b:[3,.5,0]}),                       /* 6 he walks up to the counter */
 u=>({x:lerp(1760,1800,E(u)),y:lerp(480,490,E(u)),z:lerp(1.45,1.55,E(u)),b:[3,.5,0]}),        /* 7 ring, one task */
 u=>({x:lerp(1480,1500,E(u)),y:lerp(450,455,E(u)),z:lerp(1.85,1.95,E(u)),b:[3,.5,0]}),        /* 8 the clerk waits */
 u=>({x:lerp(1960,1980,E(u)),y:lerp(480,485,E(u)),z:lerp(1.3,1.4,E(u)),b:[3,.5,0]}),          /* 9 closed: he goes home */
 u=>({x:lerp(780,840,E(u)),y:lerp(520,505,E(u)),z:lerp(.95,1.02,E(u)),b:[3,.5,0]}),           /* 10 the same shop at night, the dot glows on */
 u=>({x:lerp(430,470,E(u)),y:lerp(520,510,E(u)),z:lerp(1.6,1.7,E(u)),b:[3,.5,0]}),            /* 11 its own desk, a cloud computer */
 u=>({x:lerp(500,520,E(u)),y:lerp(400,390,E(u)),z:lerp(1.5,1.6,E(u)),b:[3,.5,0]}),            /* 12 goals on the wall */
 u=>({x:lerp(600,640,E(u)),y:lerp(520,510,E(u)),z:lerp(1.3,1.38,E(u)),b:[3,.5,0]}),           /* 13 reads through glass */
 u=>({x:lerp(660,700,E(u)),y:lerp(520,510,E(u)),z:lerp(1.75,1.85,E(u)),b:[3,.5,0]}),          /* 14 it cannot send */
 u=>({x:lerp(850,880,E(u)),y:lerp(540,545,E(u)),z:lerp(1.2,1.3,E(u))}),                        /* 15 morning, a note on the phone */
 u=>({x:lerp(900,920,E(u)),y:lerp(560,565,E(u)),z:lerp(1.7,1.8,E(u))}),                        /* 16 you tap yes */
 u=>({x:lerp(780,810,E(u)),y:lerp(500,505,E(u)),z:lerp(1.3,1.38,E(u))}),                       /* 17 shorter notes */
 u=>({x:lerp(1150,1190,E(u)),y:lerp(480,485,E(u)),z:lerp(1.42,1.5,E(u)),b:[3,.5,0]}),          /* 18 the password stays with you */
 u=>({x:960,y:540,z:lerp(1,1.045,E(u)),b:[0,0,0]}),                                                              /* 19 the board, both halves in one frame */
 u=>({x:lerp(960,1020,E(u)),y:lerp(540,520,E(u)),z:lerp(1,1.12,E(u))}),                        /* 20 the NOW half */
 u=>({x:lerp(1020,1060,E(u)),y:lerp(560,590,E(u)),z:lerp(1.1,1.16,E(u))}),                     /* 21 what risk */
 u=>({x:lerp(1400,1440,E(u)),y:lerp(480,490,E(u)),z:lerp(1.4,1.5,E(u)),b:[3,.5,0]}),          /* 22 it asks first */
 u=>({x:lerp(1380,1400,E(u)),y:lerp(480,485,E(u)),z:lerp(1.45,1.55,E(u)),b:[3,.5,0]}),        /* 23 check its work */
 u=>({x:lerp(1340,1130,E(u)),y:lerp(500,490,E(u)),z:lerp(.7,.83,E(u)),b:[2,.4,0]}),           /* 24 the shop never closes now */
 u=>({x:lerp(1500,1540,E(u)),y:lerp(480,480,E(u)),z:lerp(1.4,1.3,E(u)),b:[3,.5,0]})           /* 25 subscribe */
];
FILM={dur:60,cuts:CF,fadeIn:0,fadeOut:.45,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6; /* the epsilon keeps a cut frame on its side of the ST() frames */t_g=o;if(!s){drawTitle(o);return}({S:drawShop,H:drawHome,B:drawBoard})[PLACE[s]](o,cam);overlay(o)},
 plants(){return {hero:outW.plants().concat(inW.plants())}}};
// ---------- sound events (the mix is in audio_mix.py): steps, the door, the bell, a padlock, a tap, paper, and a soft brush on every cut ----------
for(const t of outW.plants())say(t,'step');for(const t of inW.plants())say(t,'step');
say(ST(9)+1.05,'dooropen');say(ST(9)+2.5,'door');say(ST(9)+.7,'sign');
say(ST(7)+.4,'bell');say(ST(14)+.9,'lock');say(ST(16)+.55,'tap');say(ST(12)+.15,'paper');
for(const t of [7.05,7.6,ST(2)+.9,ST(19)+.15,ST(21)+.1])say(t,'tick');say(8.5,'stamp');say(ST(15)+.4,'tap');say(ST(17)+1.2,'tick');say(ST(1)+1.3,'paper');say(ST(7)+1.3,'paper');
say(ST(22)+.3,'paper');say(56.95,'tick');
for(let i=1;i<CF.length-1;i++)say(ST(i),(PLACE[i]!=PLACE[i-1]||DN[i]!=DN[i-1])?'cut':'cut2');
