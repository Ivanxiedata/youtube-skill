// Episode: Copilot Autopilot, told through a plane's autopilot and one supplier review with 10 follow-ups. You (the mascot, navy pilot's cap with an amber badge) set the course; the AI (a robot with a teal screen head) is "COPILOT CHAT" before and "AUTOPILOT" now.
// BEFORE: 10 follow-ups, 10 prompts typed, the meter "PROMPTS YOU TYPE" fills to 10, then the meetings stall it. NOW: 1 goal, the follow-ups go out by themselves along the route, the meter stops at 1.
// 58.4 s, 21 shots (beats.md "Shots", numbered 0-20). Voice from tts.py (vo.wav laid in at .5 s): film time = voice time + .5. Every time below is FILM seconds.
// Places: T title (0), D the desk (1, 4-10), H hook route (2, 3), X how diagram (11, 12, 15-17), Q proof cards (13, 14), W WHAT WE LEARNED (18), F takeaway (19), M mascot + Subscribe + comment (20).
// Helpers follow episodes/gemini-decisions-api/film/film.js. Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',NEU='#8A7AA8',DARK='#1B1430',GREY='#4A3C68',PANEL='#2A1F42';
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function txt_w(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function fitS(x,s,size,maxW,wt='900'){return Math.max(28,Math.min(size,maxW/txt_w(x,s,size,wt)*size))}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
/* a panel or card eases in on scale and alpha around (cx,cy) */
function withIn(x,cx,cy,a,fn,s0=.9){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
function tagP(x,X,Y,s,col,a,size=34,tc='#0B2A30'){if(a<=0)return;x.save();x.globalAlpha*=a;const w=txt_w(x,s,size)+46,sc=.9+.1*a;x.translate(X,Y);x.scale(sc,sc);pill(x,0,0,w,size*1.8,col);txt(x,s,0,2,size,tc,'center','900');x.restore()}

/* THE CLOCK: cut times of the 21 shots (film seconds). Line starts and ends are exact (vo_lines.json + .5 s); inside a line the cuts sit on the measured pauses
   (energy dips of vo.wav, voice time + .5 s): after "Copilot Autopilot:" the pause is 1.27-1.76 voice s, so shot 0 ends at 2.0 (L36). */
const TS=[0,2.0,4.7,7.85,9.7,10.9,15.0,16.88,18.8,22.08,23.3,26.85,30.45,33.0,35.85,37.95,40.8,42.15,44.35,49.55,52.15];
const DUR=58.4;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,out=i=>ST(i)-.5;
const PLACE='TDHHDDDDDDDXXQQXXXWFM'; /* one letter per shot 0-20 (sound only) */

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const MGR={skin:'#A8704F',cloth:'#3A5C9A',hood:'#223A6C',hand:'#A8704F',face:INKC,leg:'#2C2A49',shoe:'#17141F',finger:INKC}; /* the manager: a different tone from the mascot */
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1,58.3];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: a navy pilot's cap with an amber badge, drawn after the figure in the head's own transform */
function pilotCap(x,p){x.save();headT(x,p);x.lineJoin='round';x.lineCap='round';x.lineWidth=5;x.strokeStyle=INKC;
 x.fillStyle='#1F2F5C';x.beginPath();x.moveTo(-94,-44);x.bezierCurveTo(-104,-120,-62,-158,0,-158);x.bezierCurveTo(62,-158,104,-120,94,-44);x.closePath();x.fill();x.stroke();
 x.fillStyle='#16224A';x.beginPath();x.roundRect(-98,-64,196,30,10);x.fill();x.stroke();
 x.fillStyle=AMB;x.fillRect(-90,-54,180,6);
 x.fillStyle='#0F1838';x.beginPath();x.ellipse(72,-36,66,13,.05,0,7);x.fill();x.stroke();
 x.fillStyle=AMB;x.beginPath();x.arc(0,-104,22,0,7);x.fill();x.stroke();
 x.fillStyle='#16224A';x.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?6:14;x.lineTo(Math.cos(a)*r,-104+Math.sin(a)*r)}x.closePath();x.fill();x.restore()}
function mascot(x,t,cam,o){const p={x:o.x,y:o.y,s:o.s||1.15,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.4:o.look,lookY:o.lookY===undefined?.1:o.lookY,brow:o.brow===undefined?.2:o.brow,mouth:o.mouth===undefined?.6:o.mouth,mouthW:28,tilt:o.tilt||0};
 actor(x,'hero',HERO,p,cam);pilotCap(x,p);return p}
function claudeHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE) and a simple face */
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
/* a small headset on the robot (NOW only): a band over the head, an ear pad on each side, a mic boom */
function headset(x,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.lineCap='round';x.lineJoin='round';x.strokeStyle='#F8E9CC';x.lineWidth=12;x.beginPath();x.moveTo(-106,-6);x.bezierCurveTo(-112,-150,112,-150,106,-6);x.stroke();
 x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.moveTo(-106,-6);x.bezierCurveTo(-112,-150,112,-150,106,-6);x.stroke();
 x.fillStyle=AMB;x.beginPath();x.roundRect(-128,-30,30,70,12);x.fill();x.stroke();
 x.strokeStyle='#F8E9CC';x.lineWidth=8;x.beginPath();x.moveTo(-114,40);x.quadraticCurveTo(-100,86,-52,80);x.stroke();x.fillStyle=AMB;x.beginPath();x.arc(-48,80,11,0,7);x.fill();x.restore()}
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});headset(x,o.hs||0);x.restore();return p}
function robotLabel(x,cx,y,s,a=1){if(a<=0)return;const w=txt_w(x,s,28)+56;pill(x,cx,y,w,46,'rgba(18,10,28,.88)',a);txt(x,s,cx,y+2,28,'#BFF2EE','center','900',a)}
function personFig(x,ch,cx,y,s,t,look,lookY=-.1){drawPerson(x,ch,{x:cx,y,s,face:1,breath:t*2+cx*.01,noLegs:true,blink:blinkAt(t+cx*.003,BL),look,lookY,brow:.1,mouth:.7,mouthW:24,hands:{},showH:{}})}

// ---------- the world ----------
function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function table(x,Y=792){x.fillStyle='#B0705A';x.fillRect(-900,Y,W+1800,40);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,Y,W+1800,5);x.fillStyle='#7A4038';x.fillRect(-900,Y+40,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,Y+100,W+1800,10)}
function arrowD(x,X0,X1,Y,col,a){if(a<=0)return;const d=Math.sign(X1-X0)||1;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=10;x.lineCap='round';x.beginPath();x.moveTo(X0,Y);x.lineTo(X1-22*d,Y);x.stroke();x.beginPath();x.moveTo(X1,Y);x.lineTo(X1-34*d,Y-24);x.lineTo(X1-34*d,Y+24);x.closePath();x.fill();x.restore()}
function chip(x,cx,cy,s,lit,a){if(a<=0)return;const w=txt_w(x,s,34)+64;withIn(x,cx,cy,a,()=>{pill(x,cx,cy,w,62,mixC('#2A1F42',TEAL,lit));x.save();x.strokeStyle=mixC(NEU,INKC,lit);x.lineWidth=4;x.beginPath();x.roundRect(cx-w/2,cy-31,w,62,31);x.stroke();x.restore();txt(x,s,cx,cy+2,34,mixC(CREAM,'#0B2A30',lit),'center','900')})}
/* a speech bubble with a tail toward (tx,ty) */
function bubble(x,cx,cy,w,h,tx,ty,a,fn,fill=CREAM){if(a<=0)return;withIn(x,cx,cy,a,()=>{x.save();x.lineJoin='round';x.fillStyle=fill;x.strokeStyle=INKC;x.lineWidth=5;const dx=tx-cx>0?1:-1;x.beginPath();x.moveTo(cx+dx*(w/2-60),cy+h/2-3);x.lineTo(tx,ty);x.lineTo(cx+dx*(w/2-20),cy+h/2-3);x.closePath();x.fill();x.stroke();x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,h/2.4);x.fill();x.stroke();x.fillRect(cx+dx*(w/2-56),cy+h/2-9,36,12);x.restore();fn()})}
function checkBtn(x,cx,cy,r,col=TEAL){x.save();x.fillStyle=col;x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.arc(cx,cy,r,0,7);x.fill();x.stroke();x.strokeStyle='#F8F4EA';x.lineWidth=r*.24;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(cx-r*.42,cy+r*.02);x.lineTo(cx-r*.1,cy+r*.34);x.lineTo(cx+r*.46,cy-r*.3);x.stroke();x.restore()}
// the small paper plane: nose at +x, drawn at (px,py) turned by a
function paper(x,px,py,a,k=1.6){x.save();x.translate(px,py);x.rotate(a);x.scale(k,k);x.lineJoin='round';x.lineWidth=3;x.strokeStyle=INKC;
 x.fillStyle=CREAM;x.beginPath();x.moveTo(30,0);x.lineTo(-20,-16);x.lineTo(-8,0);x.lineTo(-20,16);x.closePath();x.fill();x.stroke();
 x.fillStyle='#D9C7A0';x.beginPath();x.moveTo(30,0);x.lineTo(-8,0);x.lineTo(-20,16);x.closePath();x.fill();x.stroke();x.restore()}

// ---------- the route: 10 waypoints (the follow-ups) ----------
const mkRoute=(x0,dx,y0,amp)=>Array.from({length:10},(_,i)=>[x0+i*dx,y0-amp*Math.sin(Math.PI*i/9)]);
const RH=mkRoute(620,125,370,34),RD=mkRoute(600,92,350,30),RF=mkRoute(560,120,430,30);
function drawRoute(x,P,col){x.save();x.fillStyle='#6F5F90';for(let i=0;i<9;i++){const A=P[i],B=P[i+1],n=Math.floor(Math.hypot(B[0]-A[0],B[1]-A[1])/16);for(let k=1;k<n;k++){x.beginPath();x.arc(lerp(A[0],B[0],k/n),lerp(A[1],B[1],k/n),3.5,0,7);x.fill()}}
 for(let i=0;i<10;i++){x.beginPath();x.arc(P[i][0],P[i][1],20,0,7);x.fillStyle=col(i);x.fill();x.lineWidth=5;x.strokeStyle=INKC;x.stroke()}x.restore()}
function planeAt(P,u){const q=clamp(u)*9,i=Math.min(8,Math.floor(q)),f=q-i,A=P[i],B=P[i+1];return {x:lerp(A[0],B[0],f),y:lerp(A[1],B[1],f),a:Math.atan2(B[1]-A[1],B[0]-A[0])}}
function routeLabel(x,cx,y,a){if(a<=0)return;const S='SUPPLIER REVIEW · 2 WEEKS · OUR EXAMPLE',w=txt_w(x,S,30)+60;withIn(x,cx,y,a,()=>{pill(x,cx,y,w,64,'rgba(27,20,48,.92)');txt(x,S,cx,y+2,30,AMB,'center','900')})}

// ---------- the desk (shots 1, 4-10) ----------
const MX=300,MYM=600,MSC=1.15,TABLE=792,RBX=1250;
const CWX=590,CWY=430,CWW=450,CWH=334;
const CHC=i=>[CWX+16+(i%2)*212+98,CWY+78+Math.floor(i/2)*54+22];   // 2 columns x 5 rows of prompt cells
const promptT=k=>ST(6)+.12+(k-1)*.13;                                  // prompt k starts easing in (k = 1..10); counted at +.3
function chatWin(x,a,cellA,idle,t){withIn(x,CWX+CWW/2,CWY+CWH/2,a,()=>{
  x.fillStyle='#4A3C68';x.fillRect(CWX+CWW/2-45,CWY+CWH-2,90,34);x.fillStyle='#3B2A5C';x.beginPath();x.roundRect(CWX+CWW/2-110,CWY+CWH+22,220,12,6);x.fill();
  rr(x,CWX,CWY,CWW,CWH,22,'#241A3C',NEU,4);x.save();x.beginPath();x.roundRect(CWX,CWY,CWW,52,[22,22,0,0]);x.fillStyle='#3B2A5C';x.fill();x.restore();rr(x,CWX+24,CWY+20,120,12,6,'#6F5F90',null);
  for(let i=0;i<10;i++){const c=CHC(i),ca=cellA(i);if(ca>0){x.save();x.globalAlpha*=ca;x.translate(c[0],c[1]);const k=.88+.12*ca;x.scale(k,k);x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=3;x.beginPath();x.roundRect(-98,-22,196,44,14);x.fill();x.stroke();x.fillStyle=AMB;x.beginPath();x.arc(-70,0,11,0,7);x.fill();txt(x,String(i+1),18,2,28,DARK,'center','900');x.restore()}}
  })}
function idleBubble(x,cx,cy,a,t){if(a<=0)return;bubble(x,cx,cy,170,84,cx-10,cy+66,a,()=>{x.save();x.fillStyle='#6F5F90';for(let j=0;j<3;j++){x.beginPath();x.arc(cx-40+j*40,cy+(Math.sin(t*4-j*.8)>.6?-4:0),9,0,7);x.fill()}x.restore()},'#D9D2DE')}
function calendar(x,a){if(a<=0)return;const cx=300,cy=670;withIn(x,cx,cy,a,()=>{rr(x,110,570,380,206,18,'#F3E8CF',INKC,5);x.save();x.beginPath();x.roundRect(110,570,380,54,[18,18,0,0]);x.fillStyle=AMB;x.fill();x.restore();txt(x,'IN MEETINGS',300,599,36,DARK,'center','900');
  const cs=['#2DB2AE','#E4493F','#8A7AA8'];cs.forEach((c,i)=>{rr(x,130+i*120,642,108,40,10,c,INKC,3);rr(x,130+i*120,696,108,40,10,cs[(i+1)%3],INKC,3)})},.85)}
function mascotPose(t,sh,T){
 const o={x:MX,y:MYM,s:MSC,look:.5,mouth:.6,hands:{},showH:{}};
 if(sh==1){const typing=t<T+1.3;if(typing){o.hands.r=[205+Math.sin(t*14)*9,48+Math.cos(t*11)*8];o.showH.r=1;o.mouth=.3}else{const u=ease(seg(t,T+1.3,T+1.9));o.hands.l=[lerp(-97.5,-135,u),lerp(220,-100,u)];o.hands.r=[lerp(205,135,u),lerp(48,-100,u)];o.showH.l=1;o.showH.r=1;o.mouth=.1+.5*u}}
 if(sh==6){o.hands.r=[205+Math.sin(t*12)*10,48+Math.cos(t*9.5)*9];o.showH.r=1;o.mouth=.2}
 if(sh==7){o.mouth=-.35;o.brow=.9;o.look=.1}
 if(sh==9){o.hands.r=[200,6+Math.sin(t*3)*3];o.showH.r=1;o.mouth=.8}
 if(sh>=8&&sh!=9)o.mouth=.8;
 return o}
function drawDesk(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,sh>=8?.36:.3,900,520);
 const now=sh>=8,rob=true;
 // the route (shots 5-10), label above it
 if(sh>=5){const nowCol=i=>{if(sh==8)return mixC(AMB,GREY,fin(t,T+.2,.7));if(sh==9)return GREY;const tw=T+.5+2.6*i/9;return mixC(GREY,TEAL,fin(t,tw,.5))};
  const befCol=i=>{if(sh==5)return GREY;if(sh==6){const s0=promptT(i+1)+.1;return mixC(GREY,AMB,fin(t,s0,.5))}return AMB};
  const a=sh==5?fin(t,T+.6,.55):1;withIn(x,1000,350,a,()=>drawRoute(x,RD,now?nowCol:befCol));routeLabel(x,1010,225,a);
  if(sh==10){const u=ease(seg(t,T+.5,T+3.1)),q=planeAt(RD,u);paper(x,q.x,q.y-30+Math.sin(t*5)*3,q.a*.6-.15)}}
 const mp=mascot(x,t,cam,mascotPose(t,sh,T));
 // the robot, label cross-fades to AUTOPILOT in shot 8; the headset comes in with NOW
 const hs=sh>=9?1:sh==8?fin(t,T+.3,.5):0;
 robotFig(x,RBX,871,.95,t,{hs,smile:now?30:undefined});
 // the chat window (BEFORE only)
 if(sh<=7){const wa=sh==1?fin(t,T+.1,.5):1;
  chatWin(x,wa,i=>{if(sh==1)return i==0?fin(t,T+.5,.5):0;if(sh==6)return fin(t,promptT(i+1),.5);if(sh==7)return 1;return 0},sh==7?fin(t,T+.3,.5):0,t)}
 if(sh==1||sh==7)idleBubble(x,RBX,405,sh==1?fin(t,T+1.5,.5):fin(t,T+.3,.5),t);
 if(sh==7){const a=fin(t,T+.4,.5);if(a>0){x.save();x.globalAlpha*=a;drawClock(x,510,500,32,t*3,t*.5,5.05);x.restore()}}
 // the meetings card covers the mascot's torso (shots 7-10)
 if(sh>=7){const a=sh==7?fin(t,T+.15,.55):1;calendar(x,a)}
 // shot 9: the goal card, offered by the mascot
 if(sh==9){const a=fin(t,T+.15,.55),sl=ease(seg(t,T+.35,T+1.05))*16;withIn(x,795,590,a,()=>{x.save();x.translate(sl,0);rr(x,530,470,530,230,24,'#2A1F42',AMB,7);txt(x,'GOAL:',795,516,44,AMB,'center','900');txt(x,'RUN THE SUPPLIER REVIEW',795,576,fitS(x,'RUN THE SUPPLIER REVIEW',40,470),CREAM,'center','900');tagP(x,795,646,'OUR EXAMPLE',CREAM,1,30,DARK);x.restore()})}
 // shot 10: the follow-ups land in Teams and Outlook
 if(sh==10){const a1=fin(t,T+.8,.5),a2=fin(t,T+1.4,.5);
  arrowD(x,1120,975,545,TEAL,a1);arrowD(x,1120,975,665,TEAL,a2);
  chip(x,810,545,'TEAMS',fin(t,T+1.3,.5),a1);chip(x,810,665,'OUTLOOK',fin(t,T+1.9,.5),a2)}
 table(x);
 robotLabel(x,RBX,760,'COPILOT CHAT',sh<8?1:sh==8?1-fin(t,T+.2,.5):0);robotLabel(x,RBX,760,'AUTOPILOT',sh==8?fin(t,T+.2,.5):sh>8?1:0);
 comp([['board',0]])}

// ---------- the hook scene (shots 2, 3): one goal, the route, the plane, the OK check ----------
function drawHook(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.32,900,520);
 const hl=ST(2)+.5,hr=ST(2)+2.9;                                  // the plane leaves waypoint 1 and reaches waypoint 7
 const lit=i=>sh==2?mixC(GREY,TEAL,fin(t,hl+(hr-hl)*i/6,.5)):(i<=6?TEAL:GREY);
 drawRoute(x,RH,lit);
 const u=sh==2?ease(seg(t,hl,hr))*6/9:6/9,q=planeAt(RH,u);paper(x,q.x,q.y-38+(sh==3?Math.sin(t*4)*4:0),sh==3?-.05:q.a*.6-.15);
 const po={x:MX,y:MYM,s:MSC,look:sh==3?.8:.5,mouth:sh==3?.3:.8,hands:{l:[-135,-100],r:[135,-100]},showH:{l:1,r:1}};
 mascot(x,t,cam,po);
 const ca=sh==2?fin(t,T+.3,.55):1;
 withIn(x,1060,620,ca,()=>{rr(x,760,500,600,240,30,'#2A1F42',AMB,7);const f=Math.min(150,480/impW(x,'1 GOAL',100)*100);imp(x,'1 GOAL',1060,622,f,AMB)});
 if(sh==3)bubble(x,600,545,310,128,420,600,fin(t,T+.2,.55),()=>{imp(x,'OK?',554,547,86,DARK);checkBtn(x,690,547,40)});
 table(x);comp([['board',0]])}

// ---------- the how diagram (shots 11, 12, 15-17) ----------
const HLS=[[ST(11),'A',0],[ST(11)+2.2,'B',.6],[ST(12),'C',.6],[ST(15),'D',.6],[ST(16),'E',.6],[ST(17),'F',.6]];
function hlOf(p,t){let v=0;for(let i=0;i<HLS.length;i++){const [s,q,d]=HLS[i];if(q!=p)continue;const up=d?ease(seg(t,s,s+d)):(t>=s?1:0),dn=HLS[i+1]?ease(seg(t,HLS[i+1][0],HLS[i+1][0]+HLS[i+1][2])):0;v=Math.max(v,up*(1-dn))}return v}
function blk(x,l,tp,w,h,p,t,a,fn){withIn(x,l+w/2,tp+h/2,a,()=>{rr(x,l,tp,w,h,22,PANEL,mixC(TEAL,AMB,hlOf(p,t)),8);fn()})}
function polyArrow(x,P,col,prog){x.save();x.strokeStyle=col;x.fillStyle=col;x.lineWidth=9;x.lineCap='round';x.lineJoin='round';let tot=0;const L=[];for(let i=1;i<P.length;i++){L.push(Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]));tot+=L[i-1]}
 let d=tot*prog;x.beginPath();x.moveTo(P[0][0],P[0][1]);let end=P[0],dirv=[0,-1];for(let i=1;i<P.length&&d>0;i++){const f=Math.min(1,d/L[i-1]);end=[lerp(P[i-1][0],P[i][0],f),lerp(P[i-1][1],P[i][1],f)];dirv=[(P[i][0]-P[i-1][0])/L[i-1],(P[i][1]-P[i-1][1])/L[i-1]];x.lineTo(end[0],end[1]);d-=L[i-1]}x.stroke();
 if(prog>.97){const e=P[P.length-1],n=[-dirv[1],dirv[0]];x.beginPath();x.moveTo(e[0],e[1]);x.lineTo(e[0]-dirv[0]*34+n[0]*24,e[1]-dirv[1]*34+n[1]*24);x.lineTo(e[0]-dirv[0]*34-n[0]*24,e[1]-dirv[1]*34-n[1]*24);x.closePath();x.fill()}x.restore()}
function drawX(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.2,960,560);
 withIn(x,1000,160,sh==11?fin(t,T,.5):1,()=>imp(x,'HOW IT WORKS',1000,160,92,CREAM));
 const aA=sh==11?fin(t,T+.15,.5):1,aAr=sh==11?fin(t,T+.55,.5):1,aB=sh==11?fin(t,T+.95,.5):1;
 blk(x,110,330,330,250,'A',t,aA,()=>{txt(x,'YOU:',275,402,50,CREAM,'center','900');imp(x,'1 GOAL',275,486,Math.min(98,260/impW(x,'1 GOAL',100)*100),AMB)});
 arrowD(x,440,560,455,CREAM,aAr);
 blk(x,560,330,500,250,'B',t,aB,()=>{x.save();x.translate(810,392);x.scale(.42,.42);claudeHead(x,{blink:blinkAt(t+.7,BL)});x.restore();txt(x,'AUTOPILOT:',810,484,42,CREAM,'center','900');txt(x,'HOLDS THE COURSE',810,534,fitS(x,'HOLDS THE COURSE',40,450),CREAM,'center','900')});
 if(sh==11){const u=ease(seg(t,T+1.2,T+2.9));if(u>0&&u<1)paper(x,lerp(430,1070,u),392+Math.sin(t*5)*3,0,1.3)}
 const aC=sh==12?fin(t,T+.1,.5):sh>12?1:0,aCr=sh==12?fin(t,T+.1,.5):sh>12?1:0;
 if(aC>0){arrowD(x,1060,1180,455,CREAM,aCr);
  blk(x,1180,330,560,250,'C',t,aC,()=>{checkBtn(x,1256,420,40);imp(x,'OK?',1420,424,100,CREAM);txt(x,'CAN CHECK WITH YOU',1460,510,fitS(x,'CAN CHECK WITH YOU',36,490),CREAM,'center','900');txt(x,'BEFORE KEY ACTIONS',1460,552,fitS(x,'BEFORE KEY ACTIONS',36,490),AMB,'center','900')});
  const pr=sh==12?ease(seg(t,T+.8,T+1.9)):1;if(pr>0)polyArrow(x,[[1460,584],[1460,640],[275,640],[275,596]],'#BFA8E0',pr)}
 const aD=sh==15?fin(t,T+.1,.5):sh>15?1:0,aE=sh==16?fin(t,T+.1,.5):sh>16?1:0,aF=sh==17?fin(t,T+.1,.5):0;
 if(aD>0)blk(x,90,700,560,240,'D',t,aD,()=>{x.save();x.translate(180,820);x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.roundRect(-52,-82,104,164,12);x.fill();x.stroke();x.fillStyle=TEAL;x.beginPath();x.arc(0,-34,26,0,7);x.fill();x.stroke();x.fillStyle='#8A7AA8';x.fillRect(-34,10,68,9);x.fillRect(-34,30,48,9);x.fillStyle=AMB;x.beginPath();x.roundRect(-18,-98,36,20,6);x.fill();x.stroke();x.restore();
  txt(x,'ENTRA AGENT ID',266,790,fitS(x,'ENTRA AGENT ID',36,360),CREAM,'left','900');txt(x,'IN PREVIEW',266,850,36,AMB,'left','900')});
 if(aE>0)blk(x,680,700,500,240,'E',t,aE,()=>{personFig(x,MGR,760,846,.36,t,-.3,.05);txt(x,'NAMED',840,790,40,CREAM,'left','900');txt(x,'MANAGER',840,846,40,CREAM,'left','900')});
 if(aF>0||sh>17){const a=aF;const on=1-fin(t,T+.9,.5)+fin(t,T+1.5,.5);const u=clamp(on,0,1);
  blk(x,1210,700,520,240,'F',t,a,()=>{const kx=lerp(1262,1330,u);pill(x,1296,820,120,62,mixC('#6F5F90',TEAL,u));x.save();x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.arc(kx,820,24,0,7);x.fill();x.stroke();x.restore();
   txt(x,'IT: BLOCK',1380,790,38,CREAM,'left','900');txt(x,'ANYTIME',1380,846,38,AMB,'left','900')})}
 comp([['board',0]])}

// ---------- the proof cards (shots 13, 14) ----------
function drawProof(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.25,960,560);
 const a0=sh==13?fin(t,T+.1,.55):1;
 withIn(x,960,360,a0,()=>{rr(x,380,210,1160,300,40,PANEL,AMB,7);imp(x,"MICROSOFT'S NUMBER:",960,300,86,CREAM);imp(x,'LAST 30 DAYS',960,425,150,AMB)});
 {const S='ONLY WHAT YOU CAN ALREADY ACCESS',w=txt_w(x,S,40)+90,a=sh==13?fin(t,T+1.0,.5):1;withIn(x,960,590,a,()=>{pill(x,960,590,w,76,'rgba(27,20,48,.92)');txt(x,S,960,593,40,CREAM,'center','900')})}
 if(sh==14){const cs=['MAIL','MEETINGS','CHATS','FILES'],cw=cs.map(s=>txt_w(x,s,34)+64),tot=cw.reduce((a,b)=>a+b)+3*40;let c0=960-tot/2;cs.forEach((s,i)=>{chip(x,c0+cw[i]/2,720,s,fin(t,T+[.15,.65,1.15,1.6][i],.5),fin(t,T,.5));c0+=cw[i]+40});
  const S2='WHILE GETTING ORIENTED: SENDS OR CHANGES NOTHING',w2=txt_w(x,S2,38)+90,a2=fin(t,T+1.0,.5);withIn(x,960,860,a2,()=>{pill(x,960,860,w2,80,'rgba(27,20,48,.92)');txt(x,S2,960,863,38,AMB,'center','900')})}
 comp([['board',0]])}

// ---------- the meter "PROMPTS YOU TYPE" (lesson L25): screen space, whole numbers 0-10 ----------
function meterBox(x,l,tp,k,v,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320*k,h=780*k,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,26*k,'rgba(27,20,48,.93)',col,5*k);
 txt(x,'PROMPTS',cx,tp+40*k,30*k,CREAM,'center','900');txt(x,'YOU TYPE',cx,tp+76*k,30*k,CREAM,'center','900');
 imp(x,String(Math.round(v)),cx,tp+172*k,132*k,col);
 const tl=l+118*k,tw=90*k,top=tp+270*k,bot=tp+735*k,ph=bot-top;
 rr(x,tl,top,tw,ph,12*k,'#241A3C',INKC,4*k);
 for(const q of [0,5,10]){const y=bot-ph*q/10;x.fillStyle='#C9B8E0';x.fillRect(tl-18*k,y-2*k,18*k,4*k);txt(x,String(q),tl-26*k,y,28*k,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/10);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12*k);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6*k,fh));x.restore()}
 x.restore()}
function meterVal(t,sh){
 if(sh==4||sh==5)return 0;
 if(sh==6){let n=0;for(let k=1;k<=10;k++)if(t>=promptT(k)+.3)n=k;return n}
 if(sh==7)return 10;
 if(sh==8)return kf(t,[[ST(8),10],[ST(8)+.25,10],[ST(8)+.95,0]]);
 if(sh==9)return t>=ST(9)+.7?1:0;
 return 1}
const MCK=[[0,0],[ST(5)+.1,0],[ST(5)+.7,1],[ST(8)+.1,1],[ST(8)+.8,2],[999,2]];
function meterCol(t){const u=kf(t,MCK);return u<=1?mixC(NEU,AMB,u):mixC(AMB,TEAL,u-1)}
function meterOverlay(t,sh){if(!(sh>=4&&sh<=10))return;const a=sh==4?fin(t,ST(4)+.1,.55):1;meterBox(ctx,1560,170,1,meterVal(t,sh),meterCol(t),a)}

// ---------- side by side + WHAT WE LEARNED (shot 18) ----------
function miniMeter(x,cx,v,col,a){withIn(x,cx,600,a,()=>{imp(x,String(v),cx,545,150,col);rr(x,cx-300,690,600,52,14,'#241A3C',INKC,4);
  const fw=600*v/10;x.save();x.beginPath();x.roundRect(cx-300,690,600,52,14);x.clip();x.fillStyle=col;x.fillRect(cx-300,690,fw,52);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(cx-300,690,fw,6);x.restore();
  for(const q of [0,5,10]){x.fillStyle='#C9B8E0';x.fillRect(cx-300+q*60-2,742,4,14);txt(x,String(q),cx-300+q*60,776,28,'#C9B8E0','center','900')}})}
function drawW(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(18),a=fin(t,T+.8,.6),b=fin(t,T+2.4,.6);
 withIn(x,510,550,a,()=>{rr(x,90,270,840,570,30,PANEL,AMB,6);pill(x,510,328,txt_w(x,'BEFORE · COPILOT CHAT',34)+60,58,AMB);txt(x,'BEFORE · COPILOT CHAT',510,331,34,DARK,'center','900');
  drawRoute(x,Array.from({length:10},(_,i)=>[510-315+i*70,420]),()=>AMB)});
 withIn(x,1410,550,b,()=>{rr(x,990,270,840,570,30,PANEL,TEAL,6);pill(x,1410,328,txt_w(x,'NOW · AUTOPILOT',34)+60,58,TEAL);txt(x,'NOW · AUTOPILOT',1410,331,34,DARK,'center','900');
  drawRoute(x,Array.from({length:10},(_,i)=>[1410-315+i*70,420]),()=>TEAL)});
 miniMeter(x,510,10,AMB,a);miniMeter(x,1410,1,TEAL,b);
 {const S='PROMPTS YOU TYPE',w=txt_w(x,S,36)+70,c=fin(t,T+2.4,.6);withIn(x,960,620,Math.max(a,0)*c,()=>{pill(x,960,620,w,66,'rgba(27,20,48,.96)');txt(x,S,960,623,36,CREAM,'center','900')})}
 {const S='WHAT WE LEARNED',fs=76,w=impW(x,S,fs)+120,c=fin(t,T+.1,.6);if(c>0){x.save();x.translate(960,175);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-60,w,120,40,PANEL,AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}}
 tagP(x,1580,175,'OUR EXAMPLE',CREAM,fin(t,T+1.0,.5),34,DARK);
 comp([['board',0]])}

// ---------- the takeaway scene (shot 19) ----------
function drawFinal(t,cam){const x=layer('board',cam),T=ST(19);bgDusk(x,.45,960,560);
 drawRoute(x,RF,()=>TEAL);const q=planeAt(RF,1);paper(x,q.x+10,q.y-38+Math.sin(t*4)*3,-.12);
 mascot(x,t,cam,{x:300,y:720,s:1.0,look:.5,mouth:1,hands:{l:[-135,-100],r:[135,-100]},showH:{l:1,r:1}});
 robotFig(x,1500,900,.9,t,{hs:1,smile:30});
 bubble(x,700,650,300,124,500,720,fin(t,T+.3,.55),()=>{imp(x,'OK?',654,652,84,DARK);checkBtn(x,782,652,38)});
 table(x,850);robotLabel(x,1500,800,'AUTOPILOT');
 comp([['board',0]])}

// ---------- the mascot big (shot 20) ----------
function drawMascot(t,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:760,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*5)*10,-30+Math.sin(t*5)*30];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);pilotCap(x,p);
 const T0=ST(20)+1.65,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,430);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 // the comment button (speech bubble, amber, tail toward the mascot) eases in on the word "comment"; nothing under the buttons (lesson L24)
 {const S='COMMENT: WHAT NEXT?',fs=50,w=txt_w(x,S,fs,'900')+110,h=150,C0=ST(20)+2.4,cc=fin(t,C0,.55),pu=1+.035*Math.sin((t-C0)*7);
  if(cc>0){x.save();x.translate(1430,700);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
   x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w/2,-h/2,w,h,h/2);x.fill();x.stroke();
   x.beginPath();x.moveTo(-w/2+90,h/2-4);x.lineTo(-w/2+30,h/2+52);x.lineTo(-w/2+160,h/2-4);x.closePath();x.fill();x.stroke();x.fillRect(-w/2+98,h/2-12,54,14);
   txt(x,S,0,4,fs,DARK,'center','900');x.restore()}}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,lines,size,maxW=1380,bg='rgba(27,20,48,.88)'){const v=fin(t,a,.5)*(b?1-fin(t,b,.5):1);if(v<=0)return;const x=ctx;
 let sz=size;const mw=Math.max(...lines.map(l=>txt_w(x,l[0],sz,'800')));if(mw+sz*2.2>maxW)sz=Math.max(28,(maxW-sz*2.2)/mw*sz);
 const w=Math.max(...lines.map(l=>txt_w(x,l[0],sz,'800')))+sz*2.2,lh=sz*1.35,h=lines.length*lh+sz*.9;x.save();x.translate(X,y);x.scale(.9+.1*v,.9+.1*v);x.translate(-X,-y);
 x.save();x.globalAlpha=v;x.fillStyle=bg;x.beginPath();x.roundRect(X-w/2,y-h/2,w,h,Math.min(h/2,34));x.fill();x.restore();
 lines.forEach((l,i)=>txt(x,l[0],X,y-h/2+sz*.45+lh*(i+.5)+2,sz,l[1],'center','800',v));x.restore()}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const S='Copilot Autopilot',tw=x.measureText(S).width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
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
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`;
 x.font=font(100);const sz=Math.min(300,100*1500/x.measureText('AUTOPILOT').width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 put('LEARN',W/2,215,110,CREAM);put('COPILOT',W/2,215+sz*.95,sz,AMB);put('AUTOPILOT',W/2,215+sz*1.85,sz,AMB);
 x.save();x.translate(W/2,215+sz*1.85+105*k);x.rotate(-.035);x.scale(k*.8,k*.8);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=760,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(5)+.05,out(8),'BEFORE',AMB);tab(t,ST(8)+.05,out(18),'NOW',TEAL);
 card(t,ST(1)+.9,out(2),LX+200,LY,[['WAITING FOR YOUR NEXT PROMPT',CREAM]],46);
 card(t,ST(2)+.3,out(4),960,LY,[['10 FOLLOW-UPS · OUR EXAMPLE',CREAM]],46);
 card(t,ST(4)+.1,out(5),LX,LY,[['SUPPLIER REVIEW · 10 FOLLOW-UPS · OUR EXAMPLE',CREAM]],40);
 card(t,ST(7)+.3,out(8),LX,LY,[['WAITING ON YOU',AMB]],50);
 card(t,ST(8)+.2,out(9),LX,LY-24,[['AUTOPILOT · ROLLING OUT TO FRONTIER CUSTOMERS',AMB],['NOV 17, 2026',CREAM]],38);
 card(t,ST(18)+1.4,out(19),960,925,[['SAME 10 FOLLOW-UPS',CREAM]],44);
 if(sh==19){const v=fin(t,ST(19)+.1,.55);if(v>0){const S1='IN OUR EXAMPLE: 10 PROMPTS BECAME 1 GOAL',S2='IT CAN CHECK BEFORE KEY ACTIONS',f1=48,f2=56;ctx.save();ctx.font=`800 ${f1}px Arial`;const w=Math.max(ctx.measureText(S1).width,txt_w(ctx,S2,f2,'800'))+140;ctx.restore();
   ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.93)';ctx.beginPath();ctx.roundRect(W/2-w/2,135,w,190,40);ctx.fill();ctx.restore();
   txt(ctx,S1,W/2,195,f1,CREAM,'center','800',v);txt(ctx,S2,W/2,272,f2,AMB,'center','800',fin(t,ST(19)+1.1,.5))}}}

// ---------- cameras: a slow push on the flat board ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:20},()=>push()));
for(const i of [1,2,3,5,7,8,10,11,13,14,15,17,18,19])CAM[i]=push(1,1.06);
for(const i of [4,6,9])CAM[i]=push(1,1.03);for(const i of [11,12,15,16,17,18])CAM[i]=push(1,1.04);
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='D')drawDesk(o,s,cam);else if(pl=='H')drawHook(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='Q')drawProof(o,s,cam);else if(pl=='W')drawW(o,cam);else if(pl=='F')drawFinal(o,cam);else drawMascot(o,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, page sounds ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(const t of [ST(1)+.5,ST(1)+1.5,ST(1)+.9,ST(2)+.3,ST(3)+.2,ST(4)+.1,ST(5)+.6,ST(5)+.1,ST(7)+.15,ST(7)+.3,ST(7)+.4,ST(8)+.2,ST(8)+.05,ST(9)+.15,ST(10)+.8,ST(10)+1.4,ST(11)+.15,ST(11)+.95,ST(12)+.1,ST(13)+.1,ST(13)+1.0,ST(14)+.15,ST(14)+.65,ST(14)+1.15,ST(14)+1.6,ST(14)+1.0,ST(15)+.1,ST(16)+.1,ST(17)+.1,ST(18)+.1,ST(18)+.8,ST(18)+1.0,ST(18)+1.4,ST(18)+2.4,ST(19)+.1,ST(19)+.3,ST(19)+1.1,ST(20)+1.65,ST(20)+2.4])say(t,'tick');
for(let k=1;k<=10;k++)say(promptT(k)+.3,'tick');
for(const t of [ST(2)+.5,ST(2)+1.5,ST(10)+.5,ST(10)+1.5,ST(11)+1.2,ST(11)+2.3,ST(12)+.8,ST(17)+.9,ST(17)+1.5])say(t,'slide');
for(const t of [ST(9)+.35])say(t,'paper');
for(let i=0;i<7;i++)say(ST(2)+.5+(2.4)*i/6+.1,'tock');
for(let i=0;i<10;i++)say(ST(10)+.5+2.6*i/9+.1,'tock');
say(ST(9)+.7,'stamp');say(ST(3)+.2+.5,'stamp');say(ST(12)+.1+.5,'stamp');say(ST(13)+.1+.5,'stamp');say(ST(19)+.3+.5,'stamp');
