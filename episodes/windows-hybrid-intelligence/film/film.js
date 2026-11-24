// Episode: Windows Hybrid Intelligence (blog "Building Windows for hybrid intelligence", 2026-10-07), told through ONE counted example: 20 files in a Downloads folder.
// You (the mascot, amber headset) sort them. TODAY: many Copilot tasks run in the cloud: 20 uploads + 20 moves = 40 steps. SOON on Copilot+ PCs: Copilot (a robot with a teal screen head) reads them on your PC with your permission: 1 ask + 1 yes = 2 steps.
// 57.7 s, 23 shots (beats.md "Shots", numbered 0-22). Voice from tts.py (vo.wav laid in at .5 s): film time = voice time + .5. Every time below is FILM seconds.
// Places: T title (0), W desk + monitor (1-12, 21), X how diagram (13-17), Q proof (18-19), P side by side + WHAT WE LEARNED (20), M mascot big + Subscribe + comment (22).
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',GREY='#9A8DB4',PANEL='#2A1F42',SCR='#1B1430';
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function txt_w(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function tagP(x,X,Y,s,col,a,size=34,tc='#0B2A30'){if(a<=0)return;x.save();x.globalAlpha*=a;const w=txt_w(x,s,size)+46,sc=.9+.1*a;x.translate(X,Y);x.scale(sc,sc);pill(x,0,0,w,size*1.8,col);txt(x,s,0,2,size,tc,'center','900');x.restore()}

/* THE CLOCK: cut times of the 23 shots (film seconds) = word starts of the real voice (vo_lines.json + .5 s) minus .02 s, on frames. Shot 0 ends on the measured pause after "Windows hybrid intelligence" (silence in vo.wav 1.56-1.92 s). */
const TS=[0,2.2,5.10,6.81,9.41,11.93,13.59,16.58,19.15,21.16,22.96,26.59,27.53,29.59,30.32,32.01,34.61,36.76,39.37,41.41,45.18,48.55,52.36];
const DUR=57.7;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.32;
const PLACE='TWWWWWWWWWWWWXXXXXQQPWM'; /* one letter per shot 0-22 (sound only) */
function hex(c){return [parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)]}
function mixc(a,b,u){u=clamp(u);const A=hex(a),B=hex(b);return `rgb(${Math.round(lerp(A[0],B[0],u))},${Math.round(lerp(A[1],B[1],u))},${Math.round(lerp(A[2],B[2],u))})`}

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1,58.3];
function headT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: a small amber headset (band over the head, two ear cups, a mic boom), drawn after the figure in the head's own transform */
function headset(x,p){x.save();headT(x,p);x.lineCap='round';x.lineJoin='round';
 for(const [col,w] of [[INKC,16],[AMB,9]]){x.strokeStyle=col;x.lineWidth=w;x.beginPath();x.arc(0,-8,HR+8,Math.PI*1.07,Math.PI*1.93);x.stroke();
  x.beginPath();x.moveTo(-HR-6,30);x.quadraticCurveTo(-HR+6,86,-34,78);x.stroke()}
 for(const sx of [-1,1]){rr(x,sx*(HR+4)-15,-14,30,58,12,AMB,INKC,5)}
 x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.arc(-30,78,10,0,7);x.fill();x.stroke();x.restore()}
function claudeHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE) and a simple face (Copilot, drawn as visibly AI) */
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();return p}
function robotAt(x,cx,cy,k,a=1,blink=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(k,k);claudeHead(x,{blink,smile:22});x.restore()}

function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function table(x,top=858){x.fillStyle='#B0705A';x.fillRect(-900,top,W+1800,24);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,top,W+1800,4);
 x.fillStyle='#7A4038';x.fillRect(-900,top+24,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,top+80,W+1800,10)}

// ---------- props: file icons, folders, the cloud, the monitor ----------
const TYPEC=['#E4493F','#8FB8E8','#FFC66E'],TYPEN=['PDFS','PHOTOS','INVOICES'];
function fileIcon(x,cx,cy,ty,sc=1,a=1,hl=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(sc,sc);const w=56,h=66,f=16;x.lineJoin='round';
 x.fillStyle='#F4EBD8';x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.moveTo(-w/2,-h/2);x.lineTo(w/2-f,-h/2);x.lineTo(w/2,-h/2+f);x.lineTo(w/2,h/2);x.lineTo(-w/2,h/2);x.closePath();x.fill();x.stroke();
 x.fillStyle='#CDBFA6';x.beginPath();x.moveTo(w/2-f,-h/2);x.lineTo(w/2-f,-h/2+f);x.lineTo(w/2,-h/2+f);x.closePath();x.fill();
 if(ty==0){x.fillStyle=TYPEC[0];x.fillRect(-w/2+7,-h/2+22,w-14,13);x.fillStyle='#8A7AA8';x.fillRect(-w/2+7,h/2-22,w-14,5);x.fillRect(-w/2+7,h/2-12,(w-14)*.6,5)}
 else if(ty==1){x.fillStyle=TYPEC[1];x.fillRect(-w/2+7,-h/2+22,w-14,30);x.fillStyle='#4D6FA6';x.beginPath();x.moveTo(-w/2+7,-h/2+52);x.lineTo(-w/2+20,-h/2+34);x.lineTo(-w/2+30,-h/2+45);x.lineTo(w/2-16,-h/2+30);x.lineTo(w/2-7,-h/2+52);x.closePath();x.fill()}
 else{x.fillStyle=TYPEC[2];x.fillRect(-w/2+7,-h/2+22,w-14,10);x.fillStyle='#8A7AA8';for(let k=0;k<3;k++)x.fillRect(-w/2+7,-h/2+38+k*8,(w-14)*(k==2?.5:1),4)}
 if(hl>0){x.globalAlpha*=hl;x.strokeStyle=TEAL;x.lineWidth=6;x.beginPath();x.roundRect(-w/2-4,-h/2-4,w+8,h+8,8);x.stroke()}
 x.restore()}
function folderIcon(x,cx,cy,ty,n=0,a=1,lab=true){if(a<=0)return;x.save();x.globalAlpha*=a;const w=150,h=70;x.lineJoin='round';
 x.fillStyle='#6A58A0';x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.roundRect(cx-w/2,cy-h/2-14,64,28,[8,8,0,0]);x.fill();x.stroke();
 x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,10);x.fill();x.stroke();
 for(let k=0;k<n;k++){const px=cx-52+(k%7)*15;x.fillStyle=TYPEC[ty];x.strokeStyle=INKC;x.lineWidth=3;x.beginPath();x.roundRect(px-6,cy-h/2-10,13,28,3);x.fill();x.stroke()}
 x.fillStyle='#9784CC';x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.roundRect(cx-w/2,cy-h/2+14,w,h-14,[0,0,10,10]);x.fill();x.stroke();
 x.fillStyle=TYPEC[ty];x.fillRect(cx-w/2+14,cy-h/2+26,34,8);
 x.restore();if(lab)txt(x,TYPEN[ty],cx,cy+h/2+20,24,CREAM,'center','900',a)}
function cloudDraw(x,cx,cy,sc,a=1,robot=1,label=true,blink=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(sc,sc);
 const parts=[[-95,15,62],[-30,-28,82],[55,-12,76],[112,22,54]];
 x.lineJoin='round';x.strokeStyle=INKC;x.fillStyle='#E7DEF5';x.lineWidth=10;
 x.beginPath();x.roundRect(-150,5,300,70,35);x.stroke();for(const [px,py,r] of parts){x.beginPath();x.arc(px,py,r,0,7);x.stroke()}
 x.beginPath();x.roundRect(-150,5,300,70,35);x.fill();for(const [px,py,r] of parts){x.beginPath();x.arc(px,py,r,0,7);x.fill()}
 x.restore();
 robotAt(x,cx,cy+8*sc,.36*sc,a*robot,blink);
 if(label)txt(x,'CLOUD',cx,cy-(110*sc+28),Math.round(34*Math.max(sc,.7)),CREAM,'center','900',a)}
// ---------- the monitor: Downloads window with 20 files (right), three folders (left), a Copilot chip ----------
const MX=380,MY=190,MW=760,MH=540,SX=398,SY=208,SW=724,SH=504;
const GC=i=>[690+(i%5)*92,366+Math.floor(i/5)*90],FC=ty=>[517,350+ty*130];
function monitorDraw(x,s,stand=true){
 if(stand){rr(x,700,MY+MH-6,120,128,6,'#3A2D5A',INKC,4);rr(x,610,838,300,26,12,'#4A3A70',INKC,4)}
 rr(x,MX,MY,MW,MH,26,'#2E2250',INKC,5);rr(x,SX,SY,SW,SH,14,SCR,null);
 x.fillStyle='#241A3C';x.beginPath();x.roundRect(SX,SY,SW,54,[14,14,0,0]);x.fill();
 rr(x,414,280,206,420,12,PANEL);rr(x,640,280,468,420,12,PANEL);txt(x,'DOWNLOADS',660,304,24,CREAM,'left','900');
 if(s.chip>0){x.save();x.globalAlpha*=s.chip;x.translate(992,235);x.scale(.9+.1*s.chip,.9+.1*s.chip);x.translate(-992,-235);rr(x,880,213,224,44,22,'#0E4A50',TEAL,3);robotAt(x,908,236,.2,1,0);txt(x,'COPILOT',932,237,22,'#BFF2EE','left','900');x.restore()}
 for(let ty=0;ty<3;ty++){const [fx,fy]=FC(ty);folderIcon(x,fx,fy,ty,s.fn[ty])}
 for(const f of s.files)fileIcon(x,f.x,f.y,f.ty,f.sc,f.a,f.hl||0);
 if(s.scan>0&&s.scan<1){const bx=640+468*s.scan,al=Math.min(1,s.scan*8)*Math.min(1,(1-s.scan)*8);x.save();x.beginPath();x.roundRect(640,280,468,420,12);x.clip();
  const g=x.createLinearGradient(bx-70,0,bx+4,0);g.addColorStop(0,'rgba(45,178,174,0)');g.addColorStop(1,`rgba(45,178,174,${.55*al})`);x.fillStyle=g;x.fillRect(bx-70,280,74,420);x.fillStyle=`rgba(191,242,238,${.9*al})`;x.fillRect(bx,280,4,420);x.restore()}}
function sortSet(t,T0,d,L){const fs=[],fn=[0,0,0];
 for(let i=0;i<20;i++){const ty=i%3,g=GC(i),f=FC(ty),uu=seg(t,T0+i*d,T0+i*d+L),e=ease(uu);
  if(uu>=1){fn[ty]++;continue}if(uu>.85)fn[ty]++;
  fs.push({x:lerp(g[0],f[0]+(i%2?10:-10),e),y:lerp(g[1],f[1],e)-30*Math.sin(Math.PI*e),sc:lerp(1,.6,e),a:uu>.85?1-(uu-.85)/.15:1,ty,hl:1})}
 return {fs,fn}}
function monState(t,sh){const u=t-ST(sh);let fs=Array.from({length:20},(_,i)=>{const g=GC(i);return {x:g[0],y:g[1],sc:1,a:1,ty:i%3,hl:0}}),fn=[0,0,0];
 if(sh==4){const r=sortSet(t,ST(4)+.25,.055,.8);fs=r.fs;fn=r.fn}
 else if(sh==8){const r=sortSet(t,ST(8)+.1,.07,.5);fs=r.fs;fn=r.fn;fs.forEach(f=>f.hl=0)}
 else if(sh==12){const r=sortSet(t,ST(12)+.1,.06,.7);fs=r.fs;fn=r.fn}
 else if(sh==20||sh==21||sh==-1){fs=[];fn=[7,7,6]}
 else if(sh==11)fs.forEach(f=>f.hl=1);
 const chip=sh>=10&&sh<=12||sh==21||sh==20?1:sh==9?fin(u,.1,.7):0;
 const scan=sh==10?seg(u,1.3,3.1):0;
 if(sh==10){const bx=640+468*scan;fs.forEach(f=>{f.hl=clamp((bx-f.x+10)/60)})}
 return {files:fs,fn,chip,scan}}

// ---------- the desk: mouse, mascot (left), monitor ----------
function mascotP(t,sh){const p={x:230,y:707,s:1.15,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.3,lookY:.05,brow:.2,mouth:sh>=9?.9:.6,mouthW:28};
 const bob=(sh==8||sh==12)?Math.sin(t*6)*3:0;p.showH.r=true;p.hands.r=[207,103+bob];if(sh==21){p.mouth=1;p.brow=.4}return p}
function polyAt(P,u){let tot=0;const Ls=[];for(let i=1;i<P.length;i++){const l=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);Ls.push(l);tot+=l}
 let d=clamp(u)*tot;for(let i=0;i<Ls.length;i++){if(d<=Ls[i]||i==Ls.length-1){const k=clamp(d/(Ls[i]||1));return [lerp(P[i][0],P[i+1][0],k),lerp(P[i][1],P[i+1][1],k)]}d-=Ls[i]}return P[P.length-1]}
const UPL=[[1140,470],[1340,470],[1340,338]];
function dotted(x,P,a){x.save();x.globalAlpha*=a;x.fillStyle=GREY;for(let i=1;i<P.length;i++){const dx=P[i][0]-P[i-1][0],dy=P[i][1]-P[i-1][1],l=Math.hypot(dx,dy),n=Math.floor(l/26);
  for(let k=0;k<=n;k++){const px=P[i-1][0]+dx*k/Math.max(1,n),py=P[i-1][1]+dy*k/Math.max(1,n);if(Math.abs(dx)>Math.abs(dy))x.fillRect(px-7,py-3,14,6);else x.fillRect(px-3,py-7,6,14)}}x.restore()}
function cursorDraw(x,X,Y,a,col,press=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);const k=1-.18*press;x.scale(k,k);x.lineJoin='round';x.lineWidth=5;x.strokeStyle=INKC;x.fillStyle=col;
 x.beginPath();x.moveTo(0,0);x.lineTo(0,40);x.lineTo(11,31);x.lineTo(19,49);x.lineTo(28,45);x.lineTo(20,28);x.lineTo(34,28);x.closePath();x.stroke();x.fill();x.restore()}
function upArrow(x,cx,cy,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(.9+.1*a,.9+.1*a);x.fillStyle=GREY;x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';
 x.beginPath();x.moveTo(0,-90);x.lineTo(60,-20);x.lineTo(24,-20);x.lineTo(24,80);x.lineTo(-24,80);x.lineTo(-24,-20);x.lineTo(-60,-20);x.closePath();x.fill();x.stroke();x.restore();txt(x,'UPLOAD',cx,cy+118,30,GREY,'center','900',a)}
// the permission card and the chat bubble, right of the monitor (shots 10-12)
const RX=1340;
function permCard(x,a,press){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(RX,575);x.scale(.9+.1*a,.9+.1*a);x.translate(-RX,-575);
 rr(x,1180,430,320,290,26,'#241A3C',TEAL,6);['LET COPILOT','READ YOUR','FILES?'].forEach((s,i)=>txt(x,s,RX,482+i*46,38,CREAM,'center','900'));
 const k=1-.07*press;x.save();x.translate(RX,655);x.scale(k,k);pill(x,0,0,210,76,mixc(TEAL,'#BFF2EE',press));x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.roundRect(-105,-38,210,76,38);x.stroke();txt(x,'YES',0,3,46,'#0B2A30','center','900');x.restore();x.restore()}
function bubble(x,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(RX,355);x.scale(.9+.1*a,.9+.1*a);x.translate(-RX,-355);
 x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;x.beginPath();x.roundRect(1180,305,320,100,32);x.fill();x.stroke();
 x.beginPath();x.moveTo(1230,403);x.lineTo(1214,430);x.lineTo(1266,403);x.closePath();x.fill();x.stroke();x.fillRect(1224,398,48,10);
 txt(x,'SORT MY',RX,335,36,'#1B1430','center','900');txt(x,'20 FILES',RX,376,36,'#1B1430','center','900');x.restore()}
function drawW(t,sh,cam){const x=layer('board',cam),u=t-ST(sh);bgDusk(x,.3,700,520);
 rr(x,438,826,66,34,14,'#4A3A70',INKC,4);
 const pm=mascotP(t,sh);actor(x,'hero',HERO,pm,cam);headset(x,pm);table(x);
 const ms=monState(t,sh);
 if(sh==21){x.save();x.translate(700,100);x.scale(.62,.62);x.translate(-MX,-MY);monitorDraw(x,ms,false);x.restore()}
 else monitorDraw(x,ms,true);
 if(sh==5){robotFig(x,1330,930,1.2,t,{smile:22});table(x,858);pill(x,1330,806,200,46,'rgba(18,10,28,.85)');txt(x,'COPILOT',1330,808,28,'#BFF2EE','center','900');
  /* the robot stands behind the desk edge: redraw the desk over its feet, then the monitor stays in front */ }
 // upload arrow (hook, shots 3-4)
 if(sh==3)upArrow(x,1270,520,fin(u,.2,.6));
 if(sh==4)upArrow(x,1270,520,1-fin(u,0,.7));
 // the cloud (TODAY: far right with the robot in it; SOON: small and dim, robot moved into the monitor)
 if(sh>=6&&sh<=12){let cs=1,ca=1,rb=1;
  if(sh==6)ca=fin(u,.1,.6);if(sh>=9){const q=sh==9?fin(u,0,.7):1;cs=lerp(1,.5,q);ca=lerp(1,.4,q);rb=1-q}
  const cy=sh>=9?lerp(250,200,sh==9?fin(u,0,.7):1):250;
  if(sh<=9)dotted(x,UPL,(sh==6?ca:1)*(sh==9?1-fin(u,0,.7):1));
  cloudDraw(x,RX,cy,cs,ca,rb,true,blinkAt(t,BL))}
 // the 20 uploads (shot 7): a copy of each file travels along the dotted line into the cloud
 if(sh==7){const T0=ST(7)+.2,d=.075,L=.85;for(let i=0;i<20;i++){const uu=seg(t,T0+i*d,T0+i*d+L);if(uu<=0||uu>=1)continue;const g=GC(i);
   const pos=polyAt([g,[1122,470],[1340,470],[1340,350]],ease(uu));fileIcon(x,pos[0],pos[1],i%3,lerp(1,.7,uu),Math.min(1,uu*8)*(1-seg(uu,.88,1)))}}
 // permission card, chat bubble, cursor (shots 10-12)
 if(sh==10)permCard(x,fin(u,.15,.6),0);
 if(sh==11){const pr=Math.max(0,Math.sin(Math.PI*seg(u,.6,.88)));permCard(x,1,pr);bubble(x,fin(u,.05,.55));
  const e=ease(seg(u,.1,.62));cursorDraw(x,lerp(1250,1400,e),lerp(540,668,e),fin(u,.05,.3),CREAM,pr)}
 if(sh==12){const a=1-fin(u,0,.6);permCard(x,a,0);bubble(x,a)}
 comp([['board',0]])}

// ---------- the how diagram (shots 13-17): YOUR TASK -> WINDOWS -> ON YOUR PC / CLOUD, then the container ----------
function blk(x,cx,cy,w,h,lab,fs,v,hl,hc,fillc='#241A3C'){if(v<=0)return;x.save();x.globalAlpha*=v;x.translate(cx,cy);x.scale(.9+.1*v,.9+.1*v);
 if(hl>0){const g=x.createRadialGradient(0,0,30,0,0,w*.8);const c=hc==TEAL?'45,178,174':'255,198,110';g.addColorStop(0,`rgba(${c},${.45*hl})`);g.addColorStop(1,`rgba(${c},0)`);x.save();x.scale(1,h/w*1.8);x.fillStyle=g;x.fillRect(-w,-w,2*w,2*w);x.restore()}
 rr(x,-w/2,-h/2,w,h,22,fillc,mixc('#8A7AA8',hc,hl),6+2*hl);imp(x,lab,0,3,Math.min(fs,fs*(w-50)/impW(x,lab,fs)),CREAM);x.restore()}
function arrow(x,a0,b0,v,col=CREAM){if(v<=0)return;x.save();x.globalAlpha*=v;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=7;x.lineCap='round';const dx=b0[0]-a0[0],dy=b0[1]-a0[1],l=Math.hypot(dx,dy),ux=dx/l,uy=dy/l,e=[a0[0]+dx*v,a0[1]+dy*v];
 x.beginPath();x.moveTo(a0[0],a0[1]);x.lineTo(e[0]-ux*14,e[1]-uy*14);x.stroke();x.beginPath();x.moveTo(e[0],e[1]);x.lineTo(e[0]-ux*26-uy*14,e[1]-uy*26+ux*14);x.lineTo(e[0]-ux*26+uy*14,e[1]-uy*26-ux*14);x.closePath();x.fill();x.restore()}
function lock(x,cx,cy,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=TEAL;x.lineWidth=6;x.beginPath();x.arc(cx,cy-12,11,Math.PI,0);x.stroke();rr(x,cx-16,cy-12,32,26,5,TEAL,INKC,3);x.restore()}
function drawX(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const u=t-ST(sh);
 const A=sh==13?fin(u,0,.55):1;x.save();x.globalAlpha=A;imp(x,'HOW IT WORKS',960,160,96,CREAM);x.restore();
 const vT=sh==13?fin(u,.12,.55):1,vW=sh<14?0:sh==14?fin(u,.1,.6):1,vB=sh<15?0:sh==15?fin(u,.1,.6):1,vC=sh<16?0:sh==16?fin(u,.1,.6):1;
 const hW=sh==14?fin(u,.1,.6):sh==15?1-fin(u,0,.6):0;
 const hP=sh==15?fin(u,.2,.6)*(1-fin(u,.75,.6)):0,hC=sh==15?fin(u,.75,.6):0;
 const dim=sh>=16?.55:1;x.save();x.globalAlpha=dim;
 blk(x,290,400,340,120,'YOUR TASK',50,vT,0,AMB);
 blk(x,800,400,380,140,'WINDOWS',64,vW,hW,AMB);arrow(x,[470,400],[608,400],Math.min(vW,vT)*ease(vW));
 blk(x,1450,320,400,110,'ON YOUR PC',50,vB,hP,TEAL);blk(x,1450,490,460,110,'CLOUD · WHEN NEEDED',42,vB,hC,AMB);
 arrow(x,[992,372],[1234,326],vB);arrow(x,[992,432],[1204,482],vB);x.restore();
 tagP(x,960,615,'PICKS PER TASK',AMB,sh==14?fin(u,.9,.5)*(1):0,36,'#1B1430');
 // the container around the agent (shots 16-17)
 if(vC>0){x.save();x.globalAlpha=vC;x.translate(960,850);x.scale(.92+.08*vC,.92+.08*vC);x.translate(-960,-850);
  rr(x,460,690,1000,320,34,'rgba(45,178,174,.12)',TEAL,7);imp(x,'CONTAINER (MXC)',960,742,52,CREAM);
  robotAt(x,960,830,.46,1,blinkAt(t,BL));pill(x,960,935,190,46,'rgba(18,10,28,.85)');txt(x,'AGENT',960,937,28,'#BFF2EE','center','900');
  const hd=sh==17?fin(u,.0,.6):0;
  for(const [dx,lab] of [[460,'FILES'],[1460,'NETWORKS']]){rr(x,dx-22,770,44,130,8,'#2A1F42',mixc(TEAL,'#BFF2EE',hd),5);lock(x,dx,846);
   const w=txt_w(x,lab,32)+50;pill(x,dx,727,w,50,'rgba(18,10,28,.9)');txt(x,lab,dx,729,32,CREAM,'center','900')}
  x.restore()}
 if(sh==17){const e=ease(seg(u,.3,1.9));fileIcon(x,lerp(330,780,e),835,0,1.1,fin(u,.1,.4))}
 tagP(x,960,630,'SUPPORTED AGENTS',TEAL,sh==16?fin(u,.5,.5):0,36);
 tagP(x,960,630,'ONLY WHAT POLICY ALLOWS',CREAM,sh==17?fin(u,.1,.5):0,36,'#1B1430');
 comp([['board',0]])}

// ---------- proof (shots 18-19) ----------
function miniPC(x,cx,cy,v){if(v<=0)return;x.save();x.globalAlpha*=v;x.translate(cx,cy);x.scale(.9+.1*v,.9+.1*v);
 let g=x.createRadialGradient(0,0,20,0,0,190);g.addColorStop(0,`rgba(45,178,174,${.5*v})`);g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(-200,-170,400,340);
 rr(x,-120,-80,240,160,16,'#2E2250',INKC,5);g=x.createLinearGradient(0,-66,0,66);g.addColorStop(0,'#46D0CB');g.addColorStop(1,'#187E86');x.fillStyle=g;x.beginPath();x.roundRect(-106,-66,212,132,8);x.fill();
 x.fillStyle='rgba(11,58,64,.55)';x.fillRect(-84,-40,120,10);x.fillRect(-84,-16,168,10);x.fillRect(-84,8,90,10);rr(x,-24,80,48,44,4,'#3A2D5A',INKC,4);rr(x,-70,120,140,16,8,'#4A3A70',INKC,4);x.restore()}
function drawQ(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const u=t-ST(sh);
 if(sh==18){const S='ALREADY ON COPILOT+ PCs',fs=Math.min(100,100*1500/impW(x,S,100));x.save();x.globalAlpha=fin(u,.05,.5);imp(x,S,960,250,fs,AMB);x.restore();
  for(let i=0;i<5;i++)miniPC(x,300+i*330,560,fin(u,.2+i*.2,.55))}
 else{const a=fin(u,.15,.6),S='OVER 2 TRILLION',fs=Math.min(210,210*1500/impW(x,S,210));x.save();x.translate(960,400);x.scale(.9+.1*a,.9+.1*a);x.globalAlpha=a;imp(x,S,0,0,fs,AMB);x.restore();
  const b=fin(u,1.2,.6);x.save();x.translate(960,580);x.scale(.9+.1*b,.9+.1*b);x.globalAlpha=b;imp(x,'LOCAL AI INFERENCES A MONTH',0,0,84,CREAM);x.restore();
  {const S2='SEARCH, IMAGING, VIDEO CALLS · ALL COPILOT+ PCs · MICROSOFT';let f=36;const bw=txt_w(x,S2,f)+46;if(bw>1700)f=f*1700/bw;tagP(x,960,770,S2,TEAL,fin(u,2.2,.6),f)}}
 comp([['board',0]])}

// ---------- side by side + WHAT WE LEARNED (shot 20) ----------
function meterBox(x,l,tp,k,v,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320*k,h=780*k,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,26*k,'rgba(27,20,48,.93)',col,5*k);
 {const fs=Math.min(30,280/txt_w(x,'YOUR STEPS',30)*30)*k;txt(x,'YOUR STEPS',cx,tp+46*k,fs,CREAM,'center','900')}
 imp(x,String(Math.round(v)),cx,tp+150*k,132*k,col);
 const tl=l+118*k,tw=90*k,top=tp+260*k,bot=tp+720*k,ph=bot-top;
 rr(x,tl,top,tw,ph,12*k,'#241A3C',INKC,4*k);
 for(const n of [0,20,40]){const y=bot-ph*n/40;x.fillStyle='#C9B8E0';x.fillRect(tl-18*k,y-2*k,18*k,4*k);txt(x,String(n),tl-26*k,y,28*k,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/40);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12*k);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6*k,fh));x.restore()}
 x.restore()}
function miniMon(x,l,tp,k,s){x.save();x.translate(l,tp);x.scale(k,k);x.translate(-MX,-MY);monitorDraw(x,s,false);x.restore()}
function drawP(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(20),a=fin(t,T+.05,.5),b=fin(t,T+.3,.5);
 x.save();x.globalAlpha=a;rr(x,90,250,840,540,30,'#2A1F42',AMB,6);x.restore();x.save();x.globalAlpha=b;rr(x,990,250,840,540,30,'#2A1F42',TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,300,300,200,56,AMB);txt(x,'TODAY',300,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1200,300,150,56,TEAL);txt(x,'SOON',1200,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=a;miniMon(x,125,390,.55,monState(-9,1));x.restore();
 x.save();x.globalAlpha=b;miniMon(x,1025,390,.55,monState(-9,20));x.restore();
 meterBox(x,125+418+42,345,.55,40,AMB,a);meterBox(x,1025+418+42,345,.55,2,TEAL,b);
 {const S='WHAT WE LEARNED',fs=84,w=impW(x,S,fs)+120,c=fin(t,T+.1,.6);if(c>0){x.save();x.translate(960,150);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-60,w,120,40,'#2A1F42',AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}}
 comp([['board',0]])}

// ---------- the mascot big (shot 22) ----------
function drawMascot(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);headset(x,p);
 const T0=ST(22)+1.0,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,430);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 {const S='COMMENT: WHAT NEXT?',fs=50,w=txt_w(x,S,fs,'900')+110,h=150,C0=ST(22)+2.7,cc=fin(t,C0,.55),pu=1+.035*Math.sin((t-C0)*7);
  if(cc>0){x.save();x.translate(1430,700);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
   x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w/2,-h/2,w,h,h/2);x.fill();x.stroke();
   x.beginPath();x.moveTo(-w/2+90,h/2-4);x.lineTo(-w/2+30,h/2+52);x.lineTo(-w/2+160,h/2-4);x.closePath();x.fill();x.stroke();x.fillRect(-w/2+98,h/2-12,54,14);
   txt(x,S,0,4,fs,'#1B1430','center','900');x.restore()}}
 // no "Next" line: no next episode is decided (owner, 2026-11-23, lesson L24)
 comp([['board',0]])}

// ---------- the meter "YOUR STEPS": whole numbers, amber in TODAY, teal in SOON (screen space) ----------
function meterV(t,sh){const u=t-ST(sh);
 if(sh==2)return kf(t,[[ST(2)+.2,0],[ST(2)+1.2,40]]);
 if(sh==3)return 40;
 if(sh==4)return kf(t,[[ST(4)+.2,40],[ST(4)+1.0,2]]);
 if(sh==7)return clamp((t-(ST(7)+.2))/.075,0,20);
 if(sh==8)return 20+clamp((t-(ST(8)+.1))/.07,0,20);
 if(sh==9)return kf(t,[[ST(9)+.1,40],[ST(9)+.8,0]]);
 if(sh==10)return 0;
 if(sh==11)return kf(t,[[ST(11)+.15,0],[ST(11)+.3,1],[ST(11)+.62,1],[ST(11)+.78,2]]);
 return 2}
function meterC(t,sh){if(sh==4)return fin(t,ST(4)+.2,.8);if(sh==9)return fin(t,ST(9)+.1,.7);return sh>=10?1:0}
function meterOverlay(t,sh){if(!([2,3,4,7,8,9,10,11,12].includes(sh)))return;const a=sh==2?fin(t,ST(2)+.1,.6):sh==7?fin(t,ST(7)+.1,.6):1;meterBox(ctx,1560,170,1,meterV(t,sh),mixc(AMB,TEAL,meterC(t,sh)),a)}
// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size){const v=fin(t,a,.5)*(b?1-fin(t,b,.3):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(s).width+size*2.2;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);pill(ctx,X,y,w,size*2.2,'rgba(27,20,48,.88)',v);txt(ctx,s,X,y+2,size,col,'center','800',v);ctx.restore()}
function badge(t,a,b,X,y,s,col,size){const v=fin(t,a,.6)*(b?1-fin(t,b,.3):1);if(v<=0)return;const w=txt_w(ctx,s,size)+size*1.6;ctx.save();ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);pill(ctx,0,0,w,size*1.9,col,v);txt(ctx,s,0,2,size,'#0B2A30','center','900',v);ctx.restore()}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const N='Windows Hybrid Intelligence',tw=x.measureText(N).width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,N,58,54,32,AMB,'left','800');txt(x,' ·',58+tw,54,32,CREAM,'left','800');pill(x,58+tw+dw+50,52,78,42,RED);txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}
function tab(t,a,b,lab,col){const v=fin(t,a,.5)*(1-fin(t,b,.3));if(v<=0)return;const x=ctx;x.save();x.font='900 34px Arial';const w=x.measureText(lab).width+54;x.restore();x.save();x.translate(32+w/2,128);x.scale(.9+.1*v,.9+.1*v);x.translate(-32-w/2,-128);pill(x,32+w/2,128,w,56,col,v);txt(x,lab,32+w/2,130,34,'#1B1430','center','900',v);x.restore()}
function smallTag(t,a,b,lab,col,X,Y,size=30){const v=fin(t,a,.5)*(1-fin(t,b,.3));if(v<=0)return;const w=txt_w(ctx,lab,size)+44;ctx.save();ctx.translate(X+w/2,Y);ctx.scale(.9+.1*v,.9+.1*v);pill(ctx,0,0,w,size*1.8,'rgba(27,20,48,.88)',v);txt(ctx,lab,0,2,size,col,'center','900',v);ctx.restore()}
function sticker(x){x.font='104px Impact, "Arial Black", sans-serif';const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+38,6)}
// ---------- shot 0: the title card. The topic is on screen from frame 0, in the thumbnail's style ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,620,60,W/2,620,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='HYBRID INTELLIGENCE';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN WINDOWS',W/2,Yt-sz*.9,sz*.34,CREAM);put(TOPIC,W/2,Yt+sz*.2,sz,AMB);
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=985,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(6)+.05,out(9),'TODAY',AMB);tab(t,ST(9)+.05,out(13),'SOON',TEAL);
 card(t,ST(1)+1.0,out(2),LX,LY,'20 FILES',CREAM,56);
 badge(t,ST(3)+.7,out(4),760,205,'SOON · COPILOT+ PCs',TEAL,40);
 card(t,ST(4)+.5,out(5),LX,LY,'1 ASK + 1 YES',TEAL,52);
 card(t,ST(5)+.2,out(6),960,LY,'20 FILES · 1 FOLDER TO SORT',CREAM,46);
 card(t,ST(6)+.9,out(7),LX-60,LY,'MANY TASKS IN THE CLOUD',AMB,44);
 smallTag(t,ST(7)+.1,out(8),'OUR EXAMPLE',CREAM,32,215);
 card(t,ST(7)+1.2,out(8),LX-60,LY,'20 UPLOADS',AMB,56);
 card(t,ST(8)+.7,out(9),LX-60,LY,'40 STEPS',AMB,56);
 card(t,ST(9)+.4,out(10),LX-60,LY,'COPILOT+ PCs · COMING MONTHS',TEAL,44);
 card(t,ST(10)+1.5,out(11),LX-60,LY,'ON YOUR PC',TEAL,56);
 card(t,ST(12)+.9,out(13),LX-60,LY,'2 STEPS',TEAL,56);
 card(t,ST(20)+.8,out(21),960,LY-30,'SAME 20 FILES',CREAM,52);
 if(inS(t,21,22)){const fo=1-fin(t,out(22),.3),v=fin(t,ST(21)+.15,.6)*fo;if(v>0){const S1='OUR 20 FILES: 40 STEPS TODAY,',S2='2 STEPS SOON',S3='OUR EXAMPLE · COPILOT+ PCs · WITH YOUR PERMISSION · COMING MONTHS';let f1=70;ctx.save();ctx.font=`800 ${f1}px Arial`;const w=Math.max(ctx.measureText(S1).width,ctx.measureText(S2).width)+140;ctx.restore();
   let f3=30;const w3=txt_w(ctx,S3,f3)+100;const W2=Math.max(w,w3);
   ctx.save();ctx.translate(960,775);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-960,-775);ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.94)';ctx.beginPath();ctx.roundRect(960-W2/2,640,W2,270,40);ctx.fill();ctx.restore();
   txt(ctx,S1,960,702,f1,CREAM,'center','800',v);txt(ctx,S2,960,786,f1+10,AMB,'center','800',fin(t,ST(21)+.8,.5)*fo);txt(ctx,S3,960,868,f3,TEAL,'center','900',fin(t,ST(21)+1.6,.5)*fo)}}}

// ---------- cameras: a slow push on the flat board; desk shots keep the right side (cloud, cards, meter) still ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const apush=(a=1,b=1.05,px=1540,py=540)=>u=>{const z=lerp(a,b,E(u));return {x:px-(px-960)/z,y:py-(py-540)/z,z,b:[0,0,0]}};
const CAM=[()=>({})].concat(Array.from({length:22},()=>apush()));
for(const i of [13,14,15,16,17,18,19,20,22])CAM[i]=push(1,1.05);
CAM[1]=apush(1,1.07);CAM[5]=apush(1,1.05);CAM[12]=apush(1,1.04);CAM[19]=push(1,1.04);CAM[21]=push(1,1.06);CAM[20]=push(1,1.06);
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='W')drawW(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='Q')drawQ(o,s,cam);else if(pl=='P')drawP(o,cam);else drawMascot(o,s,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, ticks on files ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(let i=0;i<20;i+=2){say(ST(4)+.25+i*.055+.4,'tick');say(ST(8)+.1+i*.07+.25,'tick');say(ST(12)+.1+i*.06+.35,'tick');say(ST(7)+.2+i*.075+.1,'tick')}
for(const t of [ST(1)+1.0,ST(2)+.3,ST(3)+.3,ST(3)+.7,ST(4)+.5,ST(5)+.2,ST(6)+.1,ST(6)+.9,ST(7)+.1,ST(7)+1.2,ST(8)+.7,ST(9)+.1,ST(9)+.4,ST(10)+.15,ST(10)+1.5,ST(11)+.05,ST(11)+.62,ST(12)+.9,ST(13)+.05,ST(13)+.12,ST(14)+.1,ST(14)+.9,ST(15)+.1,ST(15)+.75,ST(16)+.1,ST(16)+.5,ST(17)+.1,ST(18)+.05,ST(18)+.2,ST(18)+.4,ST(18)+.6,ST(18)+.8,ST(18)+1.0,ST(19)+.15,ST(19)+1.2,ST(19)+2.2,ST(20)+.1,ST(20)+.3,ST(20)+.8,ST(21)+.15,ST(21)+.8,ST(21)+1.6,ST(22)+1.0,ST(22)+2.7])say(t,'tick');
for(const t of [ST(2)+.1,ST(3)+.2,ST(7)+.1,ST(10)+1.3,ST(14)+.1,ST(15)+.1,ST(16)+.1,ST(17)+.3,ST(19)+.7])say(t,'slide');
say(ST(11)+.62,'tock');say(ST(22)+1.0,'stamp');
