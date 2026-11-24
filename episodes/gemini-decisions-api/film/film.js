// Episode: Gemini Decisions API, told through 1 insurance claim and 20 questions. You (the mascot, amber teacher's mortarboard, red pencil) grade essays by hand; the AI (a robot with a teal screen head) is "CHAT MODEL" before and "GEMINI DECISION 1" now.
// BEFORE: 20 prompts, the claim sent 20 times, 20 essay answers, the meter "TIMES YOU SEND THE CLAIM" fills to 20. NOW: 1 call, the claim once with all 20 questions, one answer sheet with a confidence bar per row, the meter stops at 1.
// 58.8 s, 22 shots (beats.md "Shots", numbered 0-21). Voice from tts.py (vo.wav laid in at .5 s): film time = voice time + .5. Every time below is FILM seconds.
// Places: T title (0), D the desk (1-5, 8-12), B robot + chat window (6, 7), X how diagram (13-15), Q proof cards (16-18), W side by side + WHAT WE LEARNED (19), F answer sheet + takeaway (20), M mascot + Subscribe + comment (21).
// Helpers follow episodes/chatgpt-space-live-pages/film/film.js. Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',PAPER='#E9DCC2',NEU='#8A7AA8',DARK='#1B1430';
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function txt_w(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
/* a panel or card eases in on scale and alpha around (cx,cy) */
function withIn(x,cx,cy,a,fn,s0=.9){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
function tagP(x,X,Y,s,col,a,size=34,tc='#0B2A30'){if(a<=0)return;x.save();x.globalAlpha*=a;const w=txt_w(x,s,size)+46,sc=.9+.1*a;x.translate(X,Y);x.scale(sc,sc);pill(x,0,0,w,size*1.8,col);txt(x,s,0,2,size,tc,'center','900');x.restore()}

/* THE CLOCK: cut times of the 22 shots (film seconds). Line starts and ends are exact (vo_lines.json + .5 s); inside a line the cuts sit on the measured pauses
   (energy dips of vo.wav, voice time + .5 s): after "A P I" the pause is 1.69-2.14 voice s, so shot 0 ends at 2.4 (L36). */
const TS=[0,2.4,5.3,7.3,9.7,11.75,12.78,15.6,17.15,18.6,20.43,22.45,26.6,28.3,31.2,34.25,36.45,40.1,41.75,46.0,50.25,53.45];
const DUR=58.8;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.5;
const PLACE='TDDDDDBBDDDDDXXXQQQWFM'; /* one letter per shot 0-21 (sound only) */

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1,58.3];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: an amber teacher's mortarboard, drawn after the figure in the head's own transform */
function mortarboard(x,p){x.save();headT(x,p);x.lineJoin='round';x.lineCap='round';x.lineWidth=5;x.strokeStyle=INKC;
 x.fillStyle='#E0A24C';x.beginPath();x.moveTo(-82,-50);x.quadraticCurveTo(-90,-112,0,-118);x.quadraticCurveTo(90,-112,82,-50);x.quadraticCurveTo(0,-72,-82,-50);x.closePath();x.fill();x.stroke();
 x.fillStyle=AMB;x.beginPath();x.moveTo(-160,-112);x.lineTo(6,-166);x.lineTo(162,-122);x.lineTo(-2,-84);x.closePath();x.fill();x.stroke();
 x.strokeStyle='#E0A24C';x.lineWidth=7;x.beginPath();x.moveTo(2,-124);x.lineTo(128,-112);x.lineTo(132,-62);x.stroke();
 x.fillStyle='#E0A24C';x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.roundRect(121,-68,22,36,5);x.fill();x.stroke();
 x.beginPath();x.ellipse(2,-124,12,8,0,0,7);x.fill();x.stroke();x.restore()}
/* a red pencil along +x from its tip at (0,0): wood, graphite, red body, metal band, eraser */
function pencilShape(x,len=170,w=17){x.save();x.lineJoin='round';x.lineWidth=3;x.strokeStyle=INKC;
 x.fillStyle='#E8C9A0';x.beginPath();x.moveTo(0,0);x.lineTo(30,-w/2);x.lineTo(30,w/2);x.closePath();x.fill();x.stroke();
 x.fillStyle='#3A3347';x.beginPath();x.moveTo(0,0);x.lineTo(10,-3.5);x.lineTo(10,3.5);x.closePath();x.fill();
 x.fillStyle=RED;x.beginPath();x.rect(30,-w/2,len-30-18,w);x.fill();x.stroke();x.fillStyle='rgba(255,255,255,.28)';x.fillRect(32,-w/2+3,len-30-22,4);
 x.fillStyle='#C9B8E0';x.beginPath();x.rect(len-18,-w/2,9,w);x.fill();x.stroke();x.fillStyle='#F0A0A0';x.beginPath();x.roundRect(len-9,-w/2,9,w,3);x.fill();x.stroke();x.restore()}
function pencilEar(x,p){x.save();headT(x,p);x.translate(-90,6);x.rotate(Math.PI+.75);pencilShape(x,100,14);x.restore()}
function mascot(x,t,cam,o){const p={x:o.x,y:o.y,s:o.s||1.15,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.4:o.look,lookY:o.lookY===undefined?.1:o.lookY,brow:.2,mouth:o.mouth===undefined?.6:o.mouth,mouthW:28,tilt:o.tilt||0};
 actor(x,'hero',HERO,p,cam);mortarboard(x,p);
 if(o.pencil&&p.hands.r){const hw=h2w(p,'r'),a=.95,tip=[hw[0]+Math.cos(a)*58,hw[1]+Math.sin(a)*58];x.save();x.translate(tip[0],tip[1]);x.rotate(a+Math.PI);pencilShape(x,175,17);x.restore();gripHand(x,hw[0],hw[1],a,HERO,.85)}
 else pencilEar(x,p);
 return p}
const REV={skin:'#17141F',cloth:'#7A56A0',hood:'#5C3F80',hand:'#17141F',face:'#FFFFFF',leg:'#2C2A49',shoe:'#17141F',finger:'#5b5468'}; /* the reviewer: a different tone from the mascot */
function claudeHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE) and a simple face */
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();return p}
function robotLabel(x,cx,y,s){const w=txt_w(x,s,28)+56;pill(x,cx,y,w,46,'rgba(18,10,28,.88)');txt(x,s,cx,y+2,28,'#BFF2EE','center','900')}
function personFig(x,ch,cx,y,s,t,look,lookY=-.1){drawPerson(x,ch,{x:cx,y,s,face:1,breath:t*2+cx*.01,noLegs:true,blink:blinkAt(t+cx*.003,BL),look,lookY,brow:.1,mouth:.7,mouthW:24,hands:{},showH:{}})}

// ---------- the world ----------
function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function table(x,Y=792){x.fillStyle='#B0705A';x.fillRect(-900,Y,W+1800,40);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,Y,W+1800,5);x.fillStyle='#7A4038';x.fillRect(-900,Y+40,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,Y+100,W+1800,10)}
// the claim folder "CLAIM · PDF + PHOTOS": 380 x 230 at k = 1, standing on its bottom edge
const FW=380,FHH=230;
function claimFolder(x,cx,bot,k,a){if(a<=0)return;withIn(x,cx,bot-FHH*k/2,a,()=>{x.save();x.translate(cx,bot);x.scale(k,k);x.lineJoin='round';
 x.fillStyle='#B98336';x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.roundRect(-FW/2,-FHH,150,40,[12,12,0,0]);x.fill();x.stroke();
 x.beginPath();x.roundRect(-FW/2,-FHH+26,FW,FHH-26,14);x.fill();x.stroke();
 x.fillStyle=CREAM;x.beginPath();x.roundRect(-FW/2+26,-FHH+8,FW-52,150,8);x.fill();x.stroke();
 x.fillStyle='#8A7AA8';for(let i=0;i<4;i++)x.fillRect(-FW/2+46,-FHH+34+i*26,[150,170,130,150][i],9);
 x.fillStyle='#7C9BB5';x.beginPath();x.roundRect(FW/2-140,-FHH+30,92,70,6);x.fill();x.stroke();x.fillStyle='#4E6A86';x.beginPath();x.moveTo(FW/2-140,-FHH+100);x.lineTo(FW/2-104,-FHH+58);x.lineTo(FW/2-78,-FHH+84);x.lineTo(FW/2-60,-FHH+66);x.lineTo(FW/2-48,-FHH+100);x.closePath();x.fill();
 x.fillStyle='#D9A441';x.beginPath();x.roundRect(-FW/2,-FHH+74,FW,FHH-74,14);x.fill();x.stroke();
 const S='CLAIM · PDF + PHOTOS',fs=Math.min(30,(FW-70)/txt_w(x,S,30)*30);rr(x,-FW/2+18,-92,FW-36,60,12,CREAM,INKC,3);txt(x,S,0,-60,fs,DARK,'center','900');x.restore()})}
function folderIcon(x,cx,cy,k,col='#D9A441'){x.save();x.translate(cx,cy);x.scale(k,k);x.lineJoin='round';x.fillStyle=col;x.strokeStyle=INKC;x.lineWidth=5;
 x.beginPath();x.roundRect(-40,-34,34,14,4);x.fill();x.stroke();x.beginPath();x.roundRect(-40,-26,80,54,8);x.fill();x.stroke();x.fillStyle=CREAM;x.fillRect(-26,-20,52,8);x.restore()}
// question card "Q7" (amber) and prompt cell (folder icon + "Q7")
function cardQ(x,cx,cy,n,sc=1,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(sc,sc);rr(x,-42,-28,84,56,10,AMB,INKC,4);txt(x,'Q'+n,0,2,30,DARK,'center','900');x.restore()}
function promptB(x,cx,cy,n,sc=1,a=1,w=132){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(sc,sc);x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=3;x.beginPath();x.roundRect(-w/2,-23,w,46,14);x.fill();x.stroke();
 folderIcon(x,-w/2+34,0,.36);txt(x,'Q'+n,10,2,26,DARK,'center','900');x.restore()}
const CG=(i,x0=900)=>[x0+(i%5)*100+42,330+Math.floor(i/5)*72+28];   // 5 x 4 grid of question cards
const PRM=i=>[870+(i%4)*144+72,300+Math.floor(i/4)*62+31];            // 4 x 5 grid of prompts
// the chat window (770..1190): 2 columns x 10 rows of prompt cells
const CWX=760,CWY=190,CWW=430,CWH=570;
const CH=i=>[CWX+14+(i<10?0:1)*206+98,CWY+80+(i%10)*46+20];
function chatWin(x,a,cellA){withIn(x,CWX+CWW/2,CWY+CWH/2,a,()=>{rr(x,CWX,CWY,CWW,CWH,22,'#241A3C',NEU,4);x.save();x.beginPath();x.roundRect(CWX,CWY,CWW,56,[22,22,0,0]);x.fillStyle='#3B2A5C';x.fill();x.restore();
 rr(x,CWX+24,CWY+22,120,12,6,'#6F5F90',null);
 for(let i=0;i<20;i++){const c=CH(i),ca=cellA(i);if(ca>0)promptB(x,c[0],c[1],i+1,.85+.15*ca,ca,190)}})}
// the answer sheet "1 CLAIM · 20 QUESTIONS": 600 x 560 at k = 1, 20 rows in 2 columns; mark(i) 0..1 fills a teal bubble, bar(i) 0..1 grows the confidence bar
const SHW=600,SHH=560;
const BARS=[.92,.88,.95,.8,.9,.85,.28,.94,.87,.91,.83,.96,.89,.34,.9,.82,.93,.86,.97,.88]; /* two short ones: rows 7 and 14 */
function sheetDraw(x,cx,cy,k,o){const a=o.a===undefined?1:o.a;withIn(x,cx,cy,a,()=>{x.save();x.translate(cx-SHW*k/2,cy-SHH*k/2);x.scale(k,k);rr(x,0,0,SHW,SHH,22,'#F3E8CF',o.border||INKC,5);
 const S='1 CLAIM · 20 QUESTIONS',fs=Math.min(36,(SHW-60)/txt_w(x,S,36)*36);txt(x,S,SHW/2,44,fs,DARK,'center','900');x.fillStyle=TEAL;x.fillRect(30,74,SHW-60,5);
 for(let i=0;i<20;i++){const c=i<10?0:1,r=i%10,X0=24+c*288,Y0=100+r*44+22,m=o.mark?o.mark(i):1,b=o.bar?o.bar(i):0;
  txt(x,String(i+1),X0+22,Y0+1,21,DARK,'right','900');
  const op=(i*5+1)%3;for(let j=0;j<3;j++){const bx=X0+52+j*32;x.beginPath();x.arc(bx,Y0,11,0,7);x.fillStyle=CREAM;x.fill();x.strokeStyle='#6F5F90';x.lineWidth=2.5;x.stroke();
   if(j==op&&m>0){x.beginPath();x.arc(bx,Y0,9.5*m,0,7);x.fillStyle=TEAL;x.fill()}}
  rr(x,X0+150,Y0-8,112,16,8,'#D8CBB0',null);if(b>0){x.save();x.beginPath();x.roundRect(X0+150,Y0-8,112,16,8);x.clip();x.fillStyle=TEAL;x.fillRect(X0+150,Y0-8,112*BARS[i]*b,16);x.restore()}}
 x.restore()})}
// essay pages (a fanned row of 20 on the desk)
function essayPage(x,cx,cy,w,h,rot,i,a,top){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy+(1-a)*-60);x.rotate(rot);x.lineJoin='round';x.fillStyle=PAPER;x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.roundRect(-w/2,-h/2,w,h,8);x.fill();x.stroke();
 x.fillStyle='#8A7AA8';for(let k=0;k<7;k++)x.fillRect(-w/2+16,-h/2+(top?58:24)+k*22,(w-32)*(k==6?.5:1-.07*((i+k)%4)),7);if(top)txt(x,'ESSAY',0,-h/2+28,26,DARK,'center','900');x.restore()}
const FANX=i=>655+i*26;
function fan(x,t,T0,step,landA){for(let i=0;i<20;i++)essayPage(x,FANX(i),640,150,200,((i*7)%5-2)*.018,i,landA(i),i==19)}
function speech(x,cx,cy,w,h,s,tx,ty,a,size=44){if(a<=0)return;withIn(x,cx,cy,a,()=>{x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.moveTo(cx-30,cy+h/2-3);x.lineTo(tx,ty);x.lineTo(cx+50,cy+h/2-3);x.closePath();x.fill();x.stroke();x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,36);x.fill();x.stroke();x.fillRect(cx-26,cy+h/2-8,70,12);txt(x,s,cx,cy+2,size,DARK,'center','900')})}
function chip(x,cx,cy,s,lit,a){if(a<=0)return;const w=txt_w(x,s,34)+64;withIn(x,cx,cy,a,()=>{pill(x,cx,cy,w,62,mixC('#2A1F42',TEAL,lit));x.save();x.strokeStyle=mixC(NEU,INKC,lit);x.lineWidth=4;x.beginPath();x.roundRect(cx-w/2,cy-31,w,62,31);x.stroke();x.restore();txt(x,s,cx,cy+2,34,mixC(CREAM,'#0B2A30',lit),'center','900')})}
function arrow(x,X0,X1,Y,col,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=10;x.lineCap='round';x.beginPath();x.moveTo(X0,Y);x.lineTo(X1-22,Y);x.stroke();x.beginPath();x.moveTo(X1,Y);x.lineTo(X1-34,Y-24);x.lineTo(X1-34,Y+24);x.closePath();x.fill();x.restore()}

// ---------- the desk (shots 1-5, 8-12) and the chat scene (6, 7) ----------
const MX=300,MYM=600,MSC=1.15,FOLX=650,TABLE=792;
const RBX=1345;
// arrival times of the chat prompts Q1 ... Q20 (shots 6 and 7), the same clock for the cells and the meter
const flyStart=k=>ST(6)+1.3+(k-1)*.5;                       // Q1-Q3 ride along one by one
const cellStart=k=>k<=3?flyStart(k)+.4:ST(7)+.05+(k-4)*.055; // when its cell begins to ease in
const arrived=k=>k<=3?flyStart(k)+.6:cellStart(k)+.2;        // when the meter counts it
function drawDesk(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,sh>=10&&sh<=12?.36:.3,900,520);
 const chat=sh==6||sh==7,rob=chat||sh==10||sh==11;
 const mo={x:MX,y:MYM,look:.5,mouth:.7};
 if(sh==8){mo.hands={r:[215+Math.sin(t*5)*10,-22+Math.cos(t*4.3)*7]};mo.showH={r:1};mo.pencil=true;mo.look=.55;mo.mouth=.3}
 return drawDesk2(x,t,sh,cam,T,chat,rob,mo)}
function drawDesk2(x,t,sh,cam,T,chat,rob,mo){
 if(sh==9){mo.hands={r:[212,-26+Math.sin(t*2)*4]};mo.showH={r:1};mo.pencil=true;mo.look=.55;mo.mouth=.05}
 if(sh==12){mo.hands={r:[178,-35]};mo.showH={r:1};mo.mouth=1}
 if(chat)mo.look=.7;
 const mp=mascot(x,t,cam,mo);
 // ---- shot 11: the question cards go into the robot (drawn under it) ----
 if(sh==11){const cA=fin(t,T,.5);
  for(let i=0;i<20;i++){const g=ease(seg(t,T+.7+i*.03,T+1.5+i*.03)),c=CG(i,640),X=lerp(c[0],RBX,g),Y=lerp(c[1],640,g);cardQ(x,X,Y,i+1,lerp(1,.5,g),cA*(1-g))}}
 if(rob){const rp=robotFig(x,RBX,871,.95,t,{smile:sh==10&&t>ST(10)+1.8?32:undefined});void rp}
 table(x);
 if(rob)robotLabel(x,RBX,760,chat?'CHAT MODEL':'GEMINI DECISION 1');
 // ---- the folder ----
 if(sh<=5)claimFolder(x,FOLX,782,1,sh==1?fin(t,T+.1,.5):1);
 if(chat)claimFolder(x,520,782,.75,1);
 if(sh==10){const u=ease(seg(t,T+.45,T+1.45)),e=ease(seg(t,T+1.45,T+1.9)),px=lerp(FOLX,RBX-20,u),py=lerp(782,700-30,u)-Math.sin(Math.PI*u)*90,k=lerp(1,.5,u)*lerp(1,.6,e);
  if(t<T+.45)claimFolder(x,FOLX,782,1,1);else claimFolder(x,px,py,k,1-e)}
 // ---- hook cards ----
 if(sh==1)for(let i=0;i<20;i++){const s0=T+.4+i*.045,u=ease(seg(t,s0,s0+.6)),a=ease(seg(t,s0,s0+.35)),c=CG(i);cardQ(x,lerp(FOLX,c[0],u),lerp(600,c[1],u),i+1,.8+.2*u,a)}
 if(sh==5)for(let i=0;i<20;i++){const c=CG(i);cardQ(x,c[0],c[1],i+1,1,1)}
 if(sh==2){for(let i=0;i<20;i++){const c=CG(i);cardQ(x,c[0],c[1],i+1,1,1-fin(t,T,.5))}
  for(let i=0;i<20;i++){const s0=T+.4+i*.065,a=ease(seg(t,s0,s0+.5)),c=PRM(i);promptB(x,c[0],c[1],i+1,.85+.15*a,a)}}
 // ---- the hook answer sheet (shots 3, 4) ----
 if(sh==3||sh==4){const sa=sh==3?fin(t,T+.2,.5):1;
  const u=sh==3?ease(seg(t,T+.1,T+.8)):1;if(u>0)arrow(x,860,lerp(861,965,u),520,TEAL,u);tagP(x,800,452,'1 CALL',TEAL,sh==3?fin(t,T+.3,.5):1,36);
  sheetDraw(x,1230,500,.8,{a:sa,mark:i=>sh==3?ease(seg(t,T+.45+i*.08,T+.85+i*.08)):1,bar:i=>sh==4?ease(seg(t,T+.3+i*.05,T+.8+i*.05)):0});
  if(sh==4)tagP(x,1230,238,'HOW SURE IT IS',AMB,fin(t,T+.2,.5),34,DARK)}
 // ---- chat scene ----
 if(chat){const wa=sh==6?fin(t,T+.2,.55):1;
  chatWin(x,wa,i=>{const k=i+1,s0=cellStart(k);return t>=s0?ease(seg(t,s0,s0+.5)):0});
  if(sh==6)for(let k=1;k<=3;k++){const f0=flyStart(k),u=(t-f0)/.6;if(u>0&&u<1){const e=ease(u),c=CH(k-1),X=lerp(520,c[0]-60,e),Y=lerp(700,c[1],e)-Math.sin(Math.PI*e)*70;folderIcon(x,X,Y,lerp(.7,.4,e));txt(x,'Q'+k,X+34,Y+2,26,CREAM,'left','900',Math.min(1,e*3))}}}
 // ---- essays ----
 if(sh==8)fan(x,t,T,.04,i=>ease(seg(t,T+.05+i*.04,T+.55+i*.04)));
 if(sh==9){fan(x,t,T,.04,()=>1);speech(x,930,330,640,120,'Looks signed, probably.',1000,520,fin(t,T+.2,.55),48)}
 // ---- shot 11: three chips ----
 if(sh==11){{const cs=['YES / NO','MULTIPLE CHOICE','SCORE (RUBRIC)'],cw=cs.map(s=>txt_w(x,s,34)+64),tot=cw[0]+cw[1]+cw[2]+96;let cx0=760-tot/2;cs.forEach((s,i)=>{chip(x,cx0+cw[i]/2,880,s,fin(t,T+[1.2,2.3,3.25][i],.5),fin(t,T,.5));cx0+=cw[i]+48})}}
 // ---- the sheet, held (shot 12) ----
 if(sh==12){const a=fin(t,T,.5),hw=h2w(mp,'r');sheetDraw(x,820,465,1,{a,mark:()=>1});contact('hand-sheet',hw,[hw[0],hw[1]]);gripHand(x,hw[0],hw[1],0,HERO,.85)}
 comp([['board',0]])}

// ---------- the how diagram (shots 13-15) ----------
function blk2(x,l,cy,w,h,l1,l2,col,a,fs=46){withIn(x,l+w/2,cy,a,()=>{rr(x,l,cy-h/2,w,h,22,'#2A1F42',col,8);const f=Math.min(fs,(w-48)/Math.max(txt_w(x,l1,fs),txt_w(x,l2,fs))*fs);txt(x,l1,l+w/2,cy-f*.6,f,CREAM,'center','900');txt(x,l2,l+w/2,cy+f*.65,f,CREAM,'center','900')})}
const CROW=i=>[1100,420+i*52]; /* the 5 answer rows of the C panel */
const CBARS=[.9,.85,.28,.92,.34];
function drawX(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.2,960,560);
 withIn(x,960,215,sh==13?fin(t,T,.5):1,()=>imp(x,'HOW IT WORKS',960,215,96,CREAM));
 const a1=sh==13?fin(t,T+.15,.5):1,a2=sh==14?fin(t,T+.05,.5):sh>14?1:0,a3=sh==15?fin(t,T+.05,.5):0;
 const cB=sh==13?mixC(TEAL,AMB,fin(t,T+.9,.6)):sh==14?mixC(AMB,TEAL,fin(t,T,.6)):TEAL,cA=TEAL;
 const cC=sh==14?AMB:sh==15?mixC(AMB,TEAL,fin(t,T,.6)):AMB,cR=AMB;
 blk2(x,80,545,360,180,'1 CLAIM +','20 QUESTIONS',cA,a1,42);
 arrow(x,450,550,545,CREAM,a1);
 blk2(x,560,545,360,180,'SCORES','YOUR OPTIONS',cB,a1,46);
 // piece 1: the essay page with a strike
 {const A=sh==13?fin(t,T+.3,.5):1;withIn(x,740,775,A,()=>{x.save();x.translate(740,775);x.lineJoin='round';x.fillStyle=PAPER;x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.roundRect(-55,-70,110,140,8);x.fill();x.stroke();
   x.fillStyle='#8A7AA8';for(let k=0;k<5;k++)x.fillRect(-40,-50+k*20,80-(k%2)*18,7);x.strokeStyle=RED;x.lineWidth=11;x.lineCap='round';x.beginPath();x.moveTo(-62,-76);x.lineTo(62,76);x.stroke();x.restore()});
  tagP(x,740,890,'NO TEXT WRITTEN',CREAM,A,32,DARK)}
 // piece 2: the answers with confidence bars, the scale 0 to 1
 if(a2>0){arrow(x,930,1030,545,CREAM,a2);
  withIn(x,1220,555,a2,()=>{rr(x,1040,375,360,360,22,'#2A1F42',cC,8);
   for(let i=0;i<5;i++){const y=CROW(i)[1];x.beginPath();x.arc(1080,y,13,0,7);x.fillStyle=TEAL;x.fill();x.strokeStyle=INKC;x.lineWidth=3;x.stroke();rr(x,1110,y-9,260-0,18,9,'#4A3C68',null);
    const b=ease(seg(t,T+.25+i*.08,T+.75+i*.08));x.save();x.beginPath();x.roundRect(1110,y-9,260,18,9);x.clip();x.fillStyle=TEAL;x.fillRect(1110,y-9,260*CBARS[i]*(sh==14?b:1),18);x.restore()}
   x.fillStyle=CREAM;x.fillRect(1110,676,260,4);x.fillRect(1110,666,4,24);x.fillRect(1366,666,4,24);txt(x,'0',1112,706,28,CREAM,'center','900');txt(x,'1',1368,706,28,CREAM,'center','900')});
  tagP(x,1220,782,'HOW SURE: 0 TO 1',AMB,a2,34,DARK)}
 // piece 3: the two short-bar answers go to a person
 if(a3>0){arrow(x,1420,1560,590,CREAM,a3);
  withIn(x,1700,650,a3,()=>{personFig(x,REV,1700,640,.6,t,-.7,.1);x.fillStyle='#7A4038';x.fillRect(1590,790,220,22);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(1590,790,220,3)});
  {const w=Math.max(txt_w(x,'YOU CAN SEND THEM',36),txt_w(x,'TO A PERSON',36))+80,A=fin(t,T+.9,.5);withIn(x,1570,935,A,()=>{rr(x,1570-w/2,870,w,130,34,'#2A1F42',AMB,6);txt(x,'YOU CAN SEND THEM',1570,911,36,CREAM,'center','900');txt(x,'TO A PERSON',1570,961,36,AMB,'center','900')})}
  for(const [r,d] of [[2,.3],[4,.75]]){const u=ease(seg(t,T+d,T+d+1.0));if(u>0){const c=CROW(r),X=lerp(1240,1572,u),Y=lerp(c[1],640+(r-3)*18,u),k=lerp(1,.62,u),al=Math.min(1,u*6)*(1-ease(seg(u,.92,1)));
    x.save();x.globalAlpha*=al;x.translate(X,Y);x.scale(k,k);rr(x,-110,-20,220,40,20,'#2A1F42',AMB,4);x.beginPath();x.arc(-86,0,10,0,7);x.fillStyle=TEAL;x.fill();rr(x,-68,-7,168,14,7,'#4A3C68',null);rr(x,-68,-7,168*CBARS[r],14,7,TEAL,null);x.restore()}}}
 comp([['board',0]])}

// ---------- the proof cards (shots 16-18) ----------
function drawProof(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.25,960,560);
 if(sh==16){const H1='UP TO 1,000 QUESTIONS PER CALL',f1=Math.min(104,1250/impW(x,H1,100)*100),w1=impW(x,H1,f1)+120;
  withIn(x,960,250,fin(t,T+.05,.55),()=>{rr(x,960-w1/2,170,w1,160,40,'#2A1F42',AMB,6);imp(x,H1,960,250,f1,AMB)});
  const a=fin(t,T+.9,.5);withIn(x,960,425,a,()=>{folderIcon(x,400,425,.95);for(let i=0;i<20;i++){const s0=T+1.0+i*.05,c=ease(seg(t,s0,s0+.5));if(c>0){x.save();x.globalAlpha*=c;rr(x,500+i*44-18,402,36,46,6,AMB,INKC,3);x.restore()}}});
  const L=['THE CLAIM: BILLED ONCE PER CALL ·','EACH QUESTION ADDS ITS OWN INSTRUCTION','AND CRITERIA TOKENS'],qw=Math.max(...L.map(s=>txt_w(x,s,50)))+120;
  withIn(x,960,690,fin(t,T+2.2,.55),()=>{rr(x,960-qw/2,540,qw,300,34,'#2A1F42',TEAL,6);L.forEach((s,i)=>txt(x,s,960,600+i*80,50,i==0?AMB:CREAM,'center','900'))})}
 if(sh==17){const H1="GOOGLE'S OWN NUMBER",w1=impW(x,H1,128)+130;
  withIn(x,960,420,fin(t,T+.05,.55),()=>{rr(x,960-w1/2,330,w1,180,44,'#2A1F42',AMB,6);imp(x,H1,960,420,128,AMB)});
  const S1='Google blog · Nov 11, 2026',sw=txt_w(x,S1,44,'800')+100;withIn(x,960,610,fin(t,T+.6,.5),()=>{pill(x,960,610,sw,74,'rgba(27,20,48,.92)');txt(x,S1,960,613,44,CREAM,'center','800')})}
 if(sh==18){const LA='GEMINI 3.5 FLASH-LITE + INTERACTIONS API',LT='GEMINI DECISION 1 + DECISIONS API';
  const ba=ease(seg(t,T+.5,T+1.5)),bt=ease(seg(t,T+.8,T+1.8)),BL0=140,BW=1300;
  withIn(x,BL0+500,285,fin(t,T+.4,.5),()=>txt(x,LA,BL0,285,46,AMB,'left','900'));
  rr(x,BL0,325,BW,100,18,'#2A1F42',null);if(ba>0){x.save();x.beginPath();x.roundRect(BL0,325,BW,100,18);x.clip();x.fillStyle=AMB;x.fillRect(BL0,325,BW*ba,100);x.fillStyle='rgba(255,255,255,.25)';x.fillRect(BL0,325,BW*ba,8);x.restore()}
  withIn(x,BL0+500,525,fin(t,T+.7,.5),()=>txt(x,LT,BL0,525,46,TEAL,'left','900'));
  rr(x,BL0,565,BW,100,18,'#2A1F42',null);if(bt>0){x.save();x.beginPath();x.roundRect(BL0,565,BW,100,18);x.clip();x.fillStyle=TEAL;x.fillRect(BL0,565,BW*.21*bt,100);x.fillStyle='rgba(255,255,255,.25)';x.fillRect(BL0,565,BW*.21*bt,8);x.restore()}
  {const S='NEARLY 5X CHEAPER',a=fin(t,T+.15,.55);withIn(x,960,175,a,()=>{const w=impW(x,S,100)+110;rr(x,960-w/2,105,w,140,40,'#2A1F42',TEAL,6);imp(x,S,960,177,100,TEAL)})}
  {const S='ON GOOGLE\'S SHARED BENCHMARK SUITE',w=txt_w(x,S,44)+100,a=fin(t,T+2.3,.55);withIn(x,960,810,a,()=>{pill(x,960,810,w,86,'rgba(27,20,48,.92)');txt(x,S,960,813,44,CREAM,'center','900')})}}
 comp([['board',0]])}

// ---------- the meter "TIMES YOU SEND THE CLAIM" (lesson L25): screen space, whole numbers 0-20 ----------
function meterBox(x,l,tp,k,v,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320*k,h=780*k,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,26*k,'rgba(27,20,48,.93)',col,5*k);
 const fs=Math.min(28,(w-30*k)/Math.max(txt_w(x,'TIMES YOU SEND',28),txt_w(x,'THE CLAIM',28))*28*k/k)*k;txt(x,'TIMES YOU SEND',cx,tp+40*k,fs,CREAM,'center','900');txt(x,'THE CLAIM',cx,tp+74*k,fs,CREAM,'center','900');
 const n=Math.round(v);imp(x,String(n),cx,tp+170*k,132*k,col);
 const tl=l+118*k,tw=90*k,top=tp+270*k,bot=tp+735*k,ph=bot-top;
 rr(x,tl,top,tw,ph,12*k,'#241A3C',INKC,4*k);
 for(const q of [0,5,10,15,20]){const y=bot-ph*q/20;x.fillStyle='#C9B8E0';x.fillRect(tl-18*k,y-2*k,18*k,4*k);txt(x,String(q),tl-26*k,y,28*k,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/20);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12*k);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6*k,fh));x.restore()}
 x.restore()}
// value (whole numbers) and colour (neutral, amber BEFORE, teal NOW; every change a cross-fade of .5 s or more)
function meterVal(t,sh){
 if(sh==2){let n=0;for(let i=0;i<20;i++)if(t>=ST(2)+.4+i*.065+.25)n=i+1;return n}
 if(sh==3)return kf(t,[[ST(3),20],[ST(3)+.3,20],[ST(3)+1.0,1]]);
 if(sh==4)return 1;
 if(sh==5)return kf(t,[[ST(5),1],[ST(5)+.6,0]]);
 if(sh==6||sh==7){let n=0;for(let k=1;k<=20;k++)if(t>=arrived(k))n=k;return n}
 if(sh==8||sh==9)return 20;
 if(sh==10)return kf(t,[[ST(10),20],[ST(10)+.7,0],[ST(10)+1.6,0],[ST(10)+1.9,1]]);
 return 1}
const MCK=[[0,0],[ST(2)+.3,0],[ST(2)+.9,1],[ST(3)+.3,1],[ST(3)+1.0,2],[ST(5),2],[ST(5)+.6,0],[arrived(1)-.2,0],[arrived(1)+.4,1],[ST(10),1],[ST(10)+.7,2],[999,2]];
function meterCol(t){const u=kf(t,MCK);return u<=1?mixC(NEU,AMB,u):mixC(AMB,TEAL,u-1)}
function meterOverlay(t,sh){if(!(sh>=2&&sh<=12))return;const a=sh==2?fin(t,ST(2)+.1,.55):1;meterBox(ctx,1560,170,1,meterVal(t,sh),meterCol(t),a)}

// ---------- side by side + WHAT WE LEARNED (shot 19) ----------
function drawW(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(19),a=fin(t,T+.5,.55),b=fin(t,T+2.2,.55);
 x.save();x.globalAlpha=a;rr(x,90,270,840,550,30,'#2A1F42',AMB,6);x.restore();x.save();x.globalAlpha=b;rr(x,990,270,840,550,30,'#2A1F42',TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,230,320,200,56,AMB);txt(x,'BEFORE',230,323,34,DARK,'center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1130,320,150,56,TEAL);txt(x,'NOW',1130,323,34,DARK,'center','900');x.restore();
 withIn(x,380,590,a,()=>{for(let i=0;i<20;i++)folderIcon(x,152+(i%5)*106,418+Math.floor(i/5)*104,.95,'#D9A441')});
 withIn(x,1300,590,b,()=>{claimFolder(x,1110,680,.38,1);arrow(x,1195,1245,590,TEAL,1);sheetDraw(x,1400,600,.5,{a:1,mark:()=>1,bar:()=>1})});
 meterBox(x,699,296,.64,20,AMB,a);meterBox(x,1599,296,.64,1,TEAL,b);
 {const S='WHAT WE LEARNED',fs=76,w=impW(x,S,fs)+120,c=fin(t,T+.1,.6);if(c>0){x.save();x.translate(960,165);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-60,w,120,40,'#2A1F42',AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}}
 tagP(x,1580,165,'OUR EXAMPLE',CREAM,fin(t,T+1.0,.5),34,DARK);
 comp([['board',0]])}

// ---------- the NOW answer sheet, all 20 rows, with the takeaway (shot 20) ----------
function drawFinal(t,sh,cam){const x=layer('board',cam),T=ST(20);bgDusk(x,.45,960,560);
 mascot(x,t,cam,{x:330,y:700,s:1.15,look:.5,mouth:1});
 robotFig(x,1590,890,.9,t,{smile:30});
 table(x,830);robotLabel(x,1590,790,'GEMINI DECISION 1');
 sheetDraw(x,960,575,.85,{a:fin(t,T+.05,.55),mark:()=>1,bar:()=>1,border:TEAL});
 comp([['board',0]])}

// ---------- the mascot big (shot 21) ----------
function drawMascot(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);mortarboard(x,p);pencilEar(x,p);
 const T0=ST(21)+1.0,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,430);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 // the comment button (speech bubble, amber, tail toward the mascot), eases in on the word "comment"; nothing under the buttons (lesson L24)
 {const S='COMMENT: WHAT NEXT?',fs=50,w=txt_w(x,S,fs,'900')+110,h=150,C0=ST(21)+1.75,cc=fin(t,C0,.55),pu=1+.035*Math.sin((t-C0)*7);
  if(cc>0){x.save();x.translate(1430,700);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
   x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w/2,-h/2,w,h,h/2);x.fill();x.stroke();
   x.beginPath();x.moveTo(-w/2+90,h/2-4);x.lineTo(-w/2+30,h/2+52);x.lineTo(-w/2+160,h/2-4);x.closePath();x.fill();x.stroke();x.fillRect(-w/2+98,h/2-12,54,14);
   txt(x,S,0,4,fs,DARK,'center','900');x.restore()}}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size,wref=s,bg='rgba(27,20,48,.88)'){const v=fin(t,a,.5)*(b?1-fin(t,b,.5):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(wref).width+size*2.2;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);pill(ctx,X,y,w,size*2.2,bg,v);txt(ctx,s,X,y+2,size,col,'center','800',v);ctx.restore()}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const S='Gemini Decisions API',tw=x.measureText(S).width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,S,58,54,32,AMB,'left','800');txt(x,' ·',58+tw,54,32,CREAM,'left','800');pill(x,58+tw+dw+50,52,78,42,RED);txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}
function tab(t,a,b,lab,col){const v=fin(t,a,.5)*(1-fin(t,b,.5));if(v<=0)return;const x=ctx;x.save();x.font='900 34px Arial';const w=x.measureText(lab).width+54;x.restore();x.save();x.translate(32+w/2,128);x.scale(.9+.1*v,.9+.1*v);x.translate(-32-w/2,-128);pill(x,32+w/2,128,w,56,col,v);txt(x,lab,32+w/2,130,34,DARK,'center','900',v);x.restore()}
function sticker(x){x.font='104px Impact, "Arial Black", sans-serif';const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+38,6)}
// ---------- shot 0: the title card. The topic is on screen from frame 0, in the thumbnail's style ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,620,60,W/2,620,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='GEMINI DECISIONS';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,CREAM);put(TOPIC,W/2,Yt+sz*.2,sz,AMB);
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=760,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(6)+.05,out(10),'BEFORE',AMB);tab(t,ST(10)+.05,out(19),'NOW',TEAL);
 if(sh==1){const n=Math.min(20,Math.max(1,1+Math.floor((t-(ST(1)+.4))/.045)));card(t,ST(1)+.4,out(2),LX,LY,n+(n==1?' QUESTION':' QUESTIONS'),CREAM,50,'20 QUESTIONS')}
 card(t,ST(5)+.1,out(6),LX,LY,'1 CLAIM · 20 QUESTIONS',CREAM,48);
 card(t,ST(7)+.3,out(8),LX,LY,'OUR EXAMPLE',CREAM,46);
 card(t,ST(8)+.1,out(9),LX,LY,'20 ANSWERS TO READ',AMB,50);
 card(t,ST(9)+.3,out(10),LX,LY,'OUR EXAMPLE: NO NUMBER FOR HOW SURE',CREAM,40,undefined,'rgba(74,60,104,.92)');
 card(t,ST(10)+.2,out(11),LX,LY,'GEMINI DECISIONS API · GEMINI-DECISION-1 · NOV 11, 2026',AMB,36);
 card(t,ST(19)+.8,out(20),960,925,'SAME 20 QUESTIONS',CREAM,44);
 if(sh==20){const fo=1-fin(t,out(21),.5),dm=fin(t,ST(20)+.1,.5);ctx.save();ctx.globalAlpha=.22*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,ST(20)+.1,.5)*fo;if(v>0){const S1='20 QUESTIONS, 1 CALL,',S2='EACH ANSWER SAYS HOW SURE',f1=76,f2=76;ctx.save();ctx.font=`800 ${f1}px Arial`;const w=Math.max(ctx.measureText(S1).width,ctx.measureText(S2).width)+140;ctx.restore();
   ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.92)';ctx.beginPath();ctx.roundRect(W/2-w/2,100,w,190,40);ctx.fill();ctx.restore();
   txt(ctx,S1,W/2,153,f1,CREAM,'center','800',v);txt(ctx,S2,W/2,236,f2,AMB,'center','800',fin(t,ST(20)+1.0,.5)*fo)}}}

// ---------- cameras: a slow push on the flat board ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:21},()=>push()));
for(const i of [1,4,5,8,9,10,11,12,16,17,18,20])CAM[i]=push(1,1.08);CAM[19]=push(1,1.03);
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='D'||pl=='B')drawDesk(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='Q')drawProof(o,s,cam);else if(pl=='W')drawW(o,cam);else if(pl=='F')drawFinal(o,s,cam);else drawMascot(o,s,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, page sounds ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(let k=0;k<20;k+=4)say(ST(1)+.4+k*.045+.3,'tick');
for(let k=0;k<20;k+=4)say(ST(2)+.4+k*.065+.25,'tick');
for(const t of [ST(1)+.1,ST(2)+.1,ST(3)+.3,ST(4)+.2,ST(5)+.1,ST(6)+.2,ST(7)+.3,ST(8)+.1,ST(9)+.2,ST(9)+.3,ST(10)+.2,ST(11)+.05,ST(12)+.05,ST(13)+.15,ST(13)+.3,ST(14)+.05,ST(15)+.05,ST(15)+.9,ST(16)+.05,ST(16)+.9,ST(16)+2.2,ST(17)+.05,ST(17)+.6,ST(18)+.15,ST(18)+2.3,ST(19)+.1,ST(19)+.5,ST(19)+1.0,ST(19)+2.2,ST(19)+.8,ST(20)+.1,ST(20)+1.0,ST(21)+1.0,ST(21)+1.75])say(t,'tick');
for(const t of [ST(3)+.1,ST(4)+.3,ST(10)+.45,ST(11)+.7,ST(13)+.1,ST(14)+.25,ST(15)+.3,ST(15)+.75,ST(18)+.5,ST(18)+.8])say(t,'slide');
for(const t of [ST(8)+.05,ST(8)+.45,ST(8)+.85,ST(9)+.2])say(t,'paper');
for(const t of [ST(11)+1.2,ST(11)+2.3,ST(11)+3.25])say(t,'tock');
for(let k=0;k<6;k++)say(ST(8)+.1+k*.2,'pen');
say(ST(6)+1.3+.6,'stamp');say(ST(6)+1.8+.6,'stamp');say(ST(6)+2.3+.6,'stamp');say(ST(13)+.3,'stamp');say(ST(16)+2.2,'stamp');
