// Episode: Copilot Workspaces (early access), told as a video game: single player vs multiplayer, through 1 team plan of 4 parts and 4 people. You (the mascot, amber gaming headset) are one of 4; the AI (a robot with a teal screen head) is "COPILOT CHAT" before and "AGENT" now.
// BEFORE: 4 booths, 4 solo chats, 4 answers pasted by hand, the meter "YOUR COPY-PASTES" (OUR EXAMPLE) fills to 4. NOW: one Workspace (early access), an agent drafts in the plan, you review, the meter stays at 0.
// 22 shots (beats.md "Shots", numbered 0-21). Voice from tts.py (vo.wav laid in at .5 s): film time = voice time + .5. Every time below is FILM seconds.
// Places: T title (0), S the single-player desk (1), N the Workspace (2, 3, 8-12), P the plan + 4 people (4), B the 4 booths (5-7), X how diagram (13-15), Y grown diagram (16-18), W side by side + WHAT WE LEARNED (19), F takeaway (20), M mascot + Subscribe + comment (21).
// Helpers follow episodes/gemini-decisions-api/film/film.js. Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',PAPER='#E9DCC2',NEU='#8A7AA8',DARK='#1B1430',PANEL='#2A1F42';
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
   (energy dips of vo.wav, voice time + .5 s): after "Workspaces:" the pause is 1.30-1.70 voice s = 1.80-2.20 film s, so shot 0 ends at 2.0 (L36). */
const TS=[0,2.0,5.1,8.2,9.83,13.44,15.9,18.1,19.78,21.8,23.9,24.9,26.0,27.73,31.0,32.9,36.1,38.2,40.7,42.9,47.4,51.8];
const DUR=57.0;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.5;
const PLACE='TSNNPBBBNNNNNXXXYYYWFM'; /* one letter per shot 0-21 (sound only, and which drawing) */

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const TM1={skin:'#17141F',cloth:'#4C86C8',hood:'#2F5E94',hand:'#17141F',face:'#FFFFFF',leg:'#2C2A49',shoe:'#17141F',finger:'#5b5468'};
const TM2={skin:'#E9C6A0',cloth:'#7DBF6A',hood:'#4F8F47',hand:'#E9C6A0',face:'#1c1a2b',leg:'#2C2A49',shoe:'#17141F',finger:'#1c1a2b',hair:'#3A2230'};
const TM3={skin:'#B97B50',cloth:'#B58AD8',hood:'#7A56A0',hand:'#B97B50',face:'#1c1a2b',leg:'#2C2A49',shoe:'#17141F',finger:'#1c1a2b'};
const TEAM=[HERO,TM1,TM2,TM3];
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: an amber gaming headset (band, two ear cups, a small mic), drawn after the figure in the head's own transform */
function headset(x,p){x.save();headT(x,p);x.lineJoin='round';x.lineCap='round';
 x.strokeStyle=INKC;x.lineWidth=26;x.beginPath();x.arc(0,-6,106,Math.PI*1.04,Math.PI*1.96);x.stroke();
 x.strokeStyle=AMB;x.lineWidth=16;x.beginPath();x.arc(0,-6,106,Math.PI*1.04,Math.PI*1.96);x.stroke();
 x.strokeStyle=INKC;x.lineWidth=11;x.beginPath();x.moveTo(-106,48);x.quadraticCurveTo(-100,108,-34,98);x.stroke();
 x.strokeStyle='#E0A24C';x.lineWidth=5;x.beginPath();x.moveTo(-106,48);x.quadraticCurveTo(-100,108,-34,98);x.stroke();
 x.fillStyle='#E0A24C';x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.arc(-28,98,12,0,7);x.fill();x.stroke();
 for(const sx of [-1,1]){x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.roundRect(sx*106-20,-30,40,80,14);x.fill();x.stroke();x.fillStyle='#E0A24C';x.beginPath();x.roundRect(sx*106-10,-18,20,56,8);x.fill()}
 x.restore()}
function mascot(x,t,cam,o){const p={x:o.x,y:o.y,s:o.s||1,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.4:o.look,lookY:o.lookY===undefined?.1:o.lookY,brow:.2,mouth:o.mouth===undefined?.6:o.mouth,mouthW:28,tilt:o.tilt||0,bend:o.bend||0};
 if(cam)actor(x,'hero',HERO,p,cam);else drawPerson(x,HERO,p);headset(x,p);return p}
function claudeHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE) and a simple face */
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();return p}
function robotLabel(x,cx,y,s){const w=txt_w(x,s,28)+56;pill(x,cx,y,w,46,'rgba(18,10,28,.88)');txt(x,s,cx,y+2,28,'#BFF2EE','center','900')}
function personFig(x,ch,cx,y,s,t,look,lookY=-.1,o={}){const p={x:cx,y,s,face:1,breath:t*2+cx*.01,noLegs:true,blink:blinkAt(t+cx*.003,BL),look,lookY,brow:.1,mouth:.7,mouthW:24,hands:{},showH:{},bend:o.bend||0};drawPerson(x,ch,p);if(ch===HERO)headset(x,p);return p}

// ---------- the world ----------
function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function table(x,Y=792){x.fillStyle='#B0705A';x.fillRect(-900,Y,W+1800,40);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,Y,W+1800,5);x.fillStyle='#7A4038';x.fillRect(-900,Y+40,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,Y+100,W+1800,10)}
function arrow(x,X0,X1,Y,col,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=10;x.lineCap='round';x.beginPath();x.moveTo(X0,Y);x.lineTo(X1-22,Y);x.stroke();x.beginPath();x.moveTo(X1,Y);x.lineTo(X1-34,Y-24);x.lineTo(X1-34,Y+24);x.closePath();x.fill();x.restore()}
function arrowD(x,X,Y0,Y1,col,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(X,Y0);x.lineTo(X,Y1-18);x.stroke();x.beginPath();x.moveTo(X,Y1);x.lineTo(X-22,Y1-30);x.lineTo(X+22,Y1-30);x.closePath();x.fill();x.restore()}
function clip(x,cx,cy,k=1,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(k,k);rr(x,-22,-28,44,56,7,CREAM,INKC,4);rr(x,-11,-35,22,14,5,'#C9B8E0',INKC,3);x.fillStyle=NEU;for(let i=0;i<3;i++)x.fillRect(-13,-8+i*12,26,5);x.restore()}
function tick(x,cx,cy,r,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.beginPath();x.arc(cx,cy,r,0,7);x.fillStyle=col;x.fill();x.strokeStyle=INKC;x.lineWidth=4;x.stroke();x.strokeStyle='#0B2A30';x.lineWidth=r*.2;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(cx-r*.45,cy+r*.02);x.lineTo(cx-r*.1,cy+r*.38);x.lineTo(cx+r*.5,cy-r*.32);x.stroke();x.restore()}
// a chat window: header bar, a question bubble, an answer bubble (qa, aa: 0..1 alpha)
function chatWin(x,l,tp,w,h,a,qa,aa,ac=TEAL){withIn(x,l+w/2,tp+h/2,a,()=>{rr(x,l,tp,w,h,20,'#241A3C',NEU,4);x.save();x.beginPath();x.roundRect(l,tp,w,Math.min(46,h*.2),[20,20,0,0]);x.fillStyle='#3B2A5C';x.fill();x.restore();
 const hh=Math.min(46,h*.2),bh=(h-hh)*.4;
 if(qa>0){x.save();x.globalAlpha*=qa;rr(x,l+w*.06,tp+hh+(h-hh)*.08,w*.66,bh,16,CREAM,INKC,3);x.fillStyle='#8A7AA8';x.fillRect(l+w*.1,tp+hh+(h-hh)*.08+bh*.3,w*.5,Math.max(5,bh*.1));x.fillRect(l+w*.1,tp+hh+(h-hh)*.08+bh*.6,w*.34,Math.max(5,bh*.1));x.restore()}
 if(aa>0){x.save();x.globalAlpha*=aa;rr(x,l+w*.22,tp+hh+(h-hh)*.52,w*.72,bh*1.1,16,mixC('#BFF2EE',ac,.25),INKC,3);x.fillStyle='#0B3A40';for(let i=0;i<3;i++)x.fillRect(l+w*.27,tp+hh+(h-hh)*.52+bh*.2+i*bh*.27,w*(.6-.12*(i==2)),Math.max(5,bh*.1));x.restore()}})}

// ---------- the team plan ----------
// vertical page: rows = 4 of {u:0..1 teal draft} ; lab false drops all text (mini panels)
function planV(x,l,tp,w,h,rows,lab,title='TEAM PLAN · OUR EXAMPLE'){rr(x,l,tp,w,h,18,'#F3E8CF',INKC,5);
 const th=lab?66:34,rh=(h-th-16)/4;if(lab){txt(x,title,l+w/2,tp+34,Math.min(30,(w-30)/txt_w(x,title,30)*30),DARK,'center','900')}
 x.fillStyle=TEAL;x.fillRect(l+24,tp+th-12,w-48,5);
 for(let i=0;i<4;i++){const y0=tp+th+i*rh,u=rows&&rows[i]?rows[i].u:0,x0=l+(lab?136:36),xw=l+w-26-x0;
  if(lab)txt(x,'PART '+(i+1),l+22,y0+rh/2,28,DARK,'left','900');
  for(let j=0;j<3;j++){const ly=y0+rh/2+(j-1)*Math.min(26,rh*.24),wj=xw*(j==2?.6:1);x.fillStyle='#CFC4A8';x.fillRect(x0,ly-5,wj,10);
   const q=clamp(u*3-j);if(q>0){x.fillStyle=TEAL;x.fillRect(x0,ly-5,wj*q,10)}}}}
// the 4-cell strip under the booths (BEFORE): paste[i] 0..1 lands an amber block
const BX=i=>250+i*350,TLT=225,TBM=650,STP={t:695,b:1000};
function planStrip(x,a,paste,lab){withIn(x,775,850,a,()=>{rr(x,90,STP.t,1370,STP.b-STP.t,22,'#F3E8CF',INKC,5);
 if(lab)txt(x,'TEAM PLAN · OUR EXAMPLE',775,STP.b-28,28,DARK,'center','900');
 for(let i=0;i<4;i++){const cx=BX(i);rr(x,cx-150,STP.t+30,300,185,12,'#E5D8BC',null);
  if(lab)txt(x,'PART '+(i+1),cx-136,STP.t+58,28,DARK,'left','900');
  x.fillStyle='#CFC4A8';for(let j=0;j<3;j++)x.fillRect(cx-136,STP.t+88+j*30,j==2?150:270,10);
  const u=paste?paste[i]:0;if(u>0){x.save();const bx=cx,by=STP.t+150;x.translate(bx,by);const k=.7+.3*u;x.scale(k,k);x.globalAlpha*=Math.min(1,u*2);rr(x,-132,-64,264,122,14,AMB,INKC,4);x.fillStyle='#8A5A1E';for(let j=0;j<3;j++)x.fillRect(-108,-40+j*30,j==2?110:216,10);x.restore()}}})}
// one booth: tile, the chat window with its robot, a person; wall strips between booths
function booth(x,t,i,chatA,lab){const cx=BX(i),T0=TBM;
 rr(x,cx-160,TLT,320,T0-TLT,26,'#241A3C',AMB,5);
 if(i<3)rr(x,cx+165,TLT-24,20,T0-TLT+48,6,'#6F5F90',INKC,3);
 chatWin(x,cx-130,TLT+22,260,94,chatA,1,chatA,AMB);
 x.save();x.beginPath();x.roundRect(cx-160,TLT,320,T0-TLT,26);x.clip();
 robotFig(x,cx-75,T0-34*.46,.46,t);
 personFig(x,TEAM[i],cx+70,T0-235*.5,.5,t,-.7);x.restore();
 if(lab)robotLabel(x,cx,TLT+148,'COPILOT CHAT')}
// the answer block's route: booth i -> cell i (flight), its landing time, the copy arrow
const LT=[ST(6)+1.5,ST(7)+.5,ST(7)+.84,ST(7)+1.18],FD=i=>i==0?.9:.55,FS=i=>LT[i]-FD(i);
const pasteU=(t,i)=>ease(seg(t,LT[i]-.05,LT[i]+.3));
function booths(x,t,sh,lab){const T=ST(5);
 for(let i=0;i<4;i++)booth(x,t,i,sh==5?fin(t,T+.1+i*.1,.5):1,lab);
 planStrip(x,sh==5?fin(t,T+.2,.55):1,sh<6?null:[0,1,2,3].map(i=>pasteU(t,i)),lab);
 if(sh==6||sh==7)for(let i=0;i<4;i++){if(sh==6&&i>0)continue;if(sh==7&&i==0)continue;const cx=BX(i),aA=fin(t,FS(i)-.3,.3);
  if(sh==7&&i==0)continue;arrowD(x,cx,TBM+14,STP.t+48,AMB,aA);clip(x,cx,TBM+48,1,aA);
  const f=ease(seg(t,FS(i),LT[i]));if(f>0&&f<1){x.save();x.globalAlpha*=Math.min(1,f*6)*(1-ease(seg(f,.85,1)));x.translate(cx,lerp(560,STP.t+150,f));x.scale(lerp(.9,.7,f),lerp(.9,.7,f));rr(x,-100,-40,200,80,14,AMB,INKC,4);x.fillStyle='#8A5A1E';for(let j=0;j<3;j++)x.fillRect(-78,-22+j*22,j==2?80:156,9);x.restore()}}
 if(sh==7){const cx=BX(0);arrowD(x,cx,TBM+14,STP.t+48,AMB,1);clip(x,cx,TBM+48,1,1)}}
const copiesDone=t=>LT.filter(l=>t>=l).length;

// ---------- the Workspace (shots 2, 3, 8-12, 20; the mini panel of shot 19) ----------
const WF={x:90,y:215,w:1420,h:800},PLN={l:560,t:275,w:480,h:520};
const AGX=1410;
function work(x,t,o){const lab=o.lab!==false;
 rr(x,WF.x,WF.y,WF.w,WF.h,36,'#2A1F42',null);
 if(o.glow>0){x.save();x.globalAlpha=.4*o.glow;x.strokeStyle=TEAL;x.lineWidth=30;x.beginPath();x.roundRect(WF.x,WF.y,WF.w,WF.h,36);x.stroke();x.restore()}
 planV(x,PLN.l,PLN.t,PLN.w,PLN.h,o.rows,lab);
 const mo=o.mo||{};
 const mp={x:420,y:690,s:.85,look:.6,mouth:.6,bend:mo.bend||0,hands:mo.hands,showH:mo.showH,mouth:mo.mouth===undefined?.6:mo.mouth};
 const mpp=mascot(x,t,o.act?o.cam:null,mp);
 personFig(x,TM1,245,725,.7,t,.6);personFig(x,TM2,1120,725,.7,t,-.6);personFig(x,TM3,1250,725,.7,t,-.6);
 robotFig(x,AGX,875,.7,t,{smile:o.smile});
 x.save();x.beginPath();x.roundRect(WF.x,WF.y,WF.w,WF.h,36);x.clip();x.fillStyle='#B0705A';x.fillRect(WF.x,880,WF.w,24);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(WF.x,880,WF.w,5);x.fillStyle='#7A4038';x.fillRect(WF.x,904,WF.w,120);x.restore();
 if(o.chk>0)tick(x,PLN.l+PLN.w-44,PLN.t+66+56,26,TEAL,o.chk);
 if(o.dots>0){const bx=AGX,by=545;x.save();x.globalAlpha*=o.dots;x.lineJoin='round';rr(x,bx-70,by-32,140,64,26,CREAM,INKC,4);x.beginPath();x.moveTo(bx-14,by+30);x.lineTo(bx,by+54);x.lineTo(bx+16,by+30);x.closePath();x.fillStyle=CREAM;x.fill();x.restore();
  for(let i=0;i<3;i++){x.beginPath();x.arc(bx-30+i*30,by-1-Math.max(0,Math.sin(t*9-i*.9))*8*o.dots,8,0,7);x.fillStyle=TEAL;x.fill()}}
 if(o.mag>0){const hw=h2w(mpp,'r');x.save();x.globalAlpha*=o.mag;const a=-.78,L=150,cx=hw[0]+Math.cos(a)*L,cy=hw[1]+Math.sin(a)*L;
  x.strokeStyle=INKC;x.lineWidth=14;x.lineCap='round';x.beginPath();x.moveTo(hw[0],hw[1]);x.lineTo(cx-Math.cos(a)*40,cy-Math.sin(a)*40);x.stroke();x.strokeStyle='#C98A3A';x.lineWidth=7;x.stroke();
  x.beginPath();x.arc(cx,cy,48,0,7);x.fillStyle='rgba(191,242,238,.38)';x.fill();x.strokeStyle=INKC;x.lineWidth=14;x.stroke();x.strokeStyle='#E0A24C';x.lineWidth=7;x.stroke();x.restore();gripHand(x,hw[0],hw[1],a,HERO,.8)}
 if(o.bub){const b=o.bub,bx=900,by=PLN.t+235;withIn(x,bx,by,b.a,()=>{x.lineJoin='round';x.fillStyle=b.c;x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.moveTo(bx-70,by+30);x.lineTo(bx-96,by+74);x.lineTo(bx-20,by+30);x.closePath();x.fill();x.stroke();rr(x,bx-110,by-34,220,68,30,b.c,INKC,5);x.fillRect(bx-72,by+24,64,10);if(lab)txt(x,'COMMENT',bx,by+2,30,DARK,'center','900')})}
 if(o.flag>0){const fx=PLN.l+PLN.w+6,top=lerp(PLN.t+130,PLN.t+8,o.flag);x.save();x.strokeStyle=CREAM;x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(fx,PLN.t+150);x.lineTo(fx,top);x.stroke();x.restore();
  x.save();x.globalAlpha*=Math.min(1,o.flag*2);rr(x,fx,top,150,56,10,AMB,INKC,4);if(lab)txt(x,'1 GOAL',fx+75,top+30,30,DARK,'center','900');x.restore()}
 rr(x,WF.x,WF.y,WF.w,WF.h,36,null,TEAL,8);
 if(lab){const S='WORKSPACE · EARLY ACCESS',w=txt_w(x,S,30)+60;pill(x,800,WF.y,w,56,TEAL);txt(x,S,800,WF.y+2,30,'#0B2A30','center','900');robotLabel(x,AGX,848,'AGENT')}}

// ---------- shot drawings ----------
function drawS(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.3,700,520);
 mascot(x,t,cam,{x:290,y:590,s:1,look:.6,mouth:.6});
 robotFig(x,660,871,.85,t,{});
 table(x);robotLabel(x,660,755,'COPILOT CHAT');
 chatWin(x,860,200,420,330,fin(t,T+.2,.55),fin(t,T+.5,.5),fin(t,T+.9,.5));
 const u=ease(seg(t,T+1.6,T+3.0));arrow(x,1295,1480,420,AMB,fin(t,T+1.4,.5));clip(x,1388,420,1,fin(t,T+1.4,.5));
 withIn(x,1650,430,fin(t,T+.6,.55),()=>planV(x,1500,250,300,380,[{u:ease(seg(t,T+3.0,T+3.5))},0,0,0].map(r=>r||{u:0}),true,'TEAM PLAN'));
 if(u>0&&u<1){x.save();x.globalAlpha*=Math.min(1,u*5)*(1-ease(seg(u,.9,1)));x.translate(lerp(1180,1590,u),lerp(470,330,u)-Math.sin(Math.PI*u)*40);rr(x,-58,-28,116,56,14,'#BFF2EE',INKC,4);x.fillStyle='#0B3A40';x.fillRect(-38,-12,76,8);x.fillRect(-38,4,50,8);x.restore()}
 comp([['board',0]])}
function drawNow(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,sh==8||sh>=9?.34:.3,800,560);
 const R=i=>({u:0});const rows=[0,1,2,3].map(R);let chk=0,mag=0,bub=null,dots=0,hands,showH,bend=0,mouth,glow=0,flag=0,smile;
 if(sh==9){rows[0].u=ease(seg(t,T+.3,T+1.6));dots=fin(t,T+.1,.5)}
 if(sh>=10&&sh<=12){rows[0].u=1;chk=fin(t,T+.9,.5);if(sh==10)chk=fin(t,T+.8,.5);else chk=1}
 if(sh==10){mag=fin(t,T+.1,.5);hands={r:[236,-30]};showH={r:1};bend=.1}
 if(sh==11){bub={a:fin(t,T+.15,.55),c:AMB};hands={r:[200,-6]};showH={r:1};mouth=.9}
 if(sh==12){bub={a:1,c:mixC(AMB,TEAL,fin(t,T+.1,.65))};rows[1].u=ease(seg(t,T+.5,T+1.4));dots=fin(t,T+.1,.5)}
 if(sh==3){flag=ease(seg(t,T+.2,T+1.0));glow=fin(t,T+.3,.6)}
 if(sh==20){rows.forEach(r=>r.u=1);chk=1;smile=34}
 work(x,t,{act:true,cam,rows,chk,mag,bub,dots,mo:{hands,showH,bend,mouth},glow,flag,smile});
 comp([['board',0]])}
function drawP(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.3,800,520);
 const a=fin(t,T+.1,.55);
 mascot(x,t,cam,{x:480,y:700,s:.75,look:.2,mouth:.7});
 for(let i=1;i<4;i++)personFig(x,TEAM[i],480+i*250,700,.75,t,.2);
 table(x,860);
 withIn(x,800,335,a,()=>planV(x,480,150,640,370,[],true));
 for(let i=0;i<4;i++)withIn(x,480+i*250,935,fin(t,T+.5+i*.12,.5),()=>{pill(x,480+i*250,935,176,50,'rgba(18,10,28,.88)');txt(x,'PART '+(i+1),480+i*250,937,30,AMB,'center','900')});
 comp([['board',0]])}
function drawB(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,800,520);booths(x,t,sh,true);comp([['board',0]])}

// ---------- the how diagram (shots 13-15) and the grown diagram (shots 16-18) ----------
function blk2(x,l,cy,w,h,l1,l2,col,a,fs=46){withIn(x,l+w/2,cy,a,()=>{rr(x,l,cy-h/2,w,h,22,PANEL,col,8);const f=Math.min(fs,(w-48)/Math.max(txt_w(x,l1,fs),l2?txt_w(x,l2,fs):1)*fs);if(l2){txt(x,l1,l+w/2,cy-f*.62,f,CREAM,'center','900');txt(x,l2,l+w/2,cy+f*.68,f,CREAM,'center','900')}else txt(x,l1,l+w/2,cy,f,CREAM,'center','900')})}
function pict(x,cx,cy,s,col,robot){x.save();x.translate(cx,cy);x.scale(s,s);x.lineJoin='round';if(robot){rr(x,-34,-60,68,58,12,TEAL,INKC,5);x.fillStyle='#0B3A40';x.fillRect(-18,-42,10,18);x.fillRect(8,-42,10,18)}else{x.beginPath();x.arc(0,-46,22,0,7);x.fillStyle=col;x.fill();x.strokeStyle=INKC;x.lineWidth=5;x.stroke()}
 x.beginPath();x.roundRect(-34,-18,68,60,[26,26,6,6]);x.fillStyle=robot?'#187E86':col;x.fill();x.strokeStyle=INKC;x.lineWidth=5;x.stroke();x.restore()}
function drawX(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.2,960,500);
 const LB=120,LW=760,RB=1000,RW=800,BY=370,BH=340;
 const a1=sh==13?fin(t,T+.1,.55):1,a2=sh==14?fin(t,T+.4,.6):1;
 // left: SINGLE PLAYER, 1 person + 1 chat
 withIn(x,LB+LW/2,BY,a1,()=>{rr(x,LB,BY-BH/2,LW,BH,22,PANEL,AMB,8);txt(x,'SINGLE PLAYER',LB+LW/2,BY-BH/2+50,46,CREAM,'center','900');
  x.save();x.beginPath();x.roundRect(LB,BY-BH/2,LW,BH,22);x.clip();personFig(x,HERO,LB+190,BY+36,.58,t,.5);x.restore();chatWin(x,LB+330,BY-BH/2+100,380,190,1,1,1,AMB)});
 // right: MULTIPLAYER · WORKSPACES, grows in; chips light with the voice
 if(sh>=14){const hl=sh==14?fin(t,T+.4,.6):1;arrow(x,LB+LW+12,RB-12,BY,CREAM,sh==14?fin(t,T,.5):1);
  withIn(x,RB+RW/2,BY,a2,()=>{rr(x,RB,BY-BH/2,RW,BH,22,PANEL,mixC(AMB,TEAL,hl),8);txt(x,'MULTIPLAYER · WORKSPACES',RB+RW/2,BY-BH/2+50,40,CREAM,'center','900');
   if(sh==14){for(let i=0;i<4;i++)pict(x,RB+90+i*100,BY+80,.9,[CREAM,'#B97B50','#E9C6A0','#B58AD8'][i]);pict(x,RB+560,BY+80,1,TEAL,true)}})}
 if(sh==15){const cs=['PEOPLE + AGENTS','1 GOAL','SHARED CONTEXT'],tm=[33.1,34.2,34.8];cs.forEach((s,i)=>chip(x,RB+RW/2,BY-45+i*80,s,fin(t,tm[i],.5),fin(t,ST(15)+.05+i*.05,.5)))}
 // quote card (shots 13-15)
 {const l1='“Until now, AI interactions have',l2='mostly been single player.”',S3='Microsoft Copilot Blog, Nov 17, 2026',w=Math.max(txt_w(x,l1,50),txt_w(x,l2,50),txt_w(x,S3,34))+120,A=sh==13?fin(t,T+.9,.6):1;
  withIn(x,960,810,A,()=>{rr(x,960-w/2,680,w,260,30,PANEL,AMB,6);txt(x,l1,960,735,50,CREAM,'center','900');txt(x,l2,960,800,50,CREAM,'center','900');txt(x,S3,960,885,34,AMB,'center','900')})}
 comp([['board',0]])}
function chip(x,cx,cy,s,lit,a){if(a<=0)return;const w=txt_w(x,s,34)+64;withIn(x,cx,cy,a,()=>{pill(x,cx,cy,w,62,mixC('#2A1F42',TEAL,lit));x.save();x.strokeStyle=mixC(NEU,INKC,lit);x.lineWidth=4;x.beginPath();x.roundRect(cx-w/2,cy-31,w,62,31);x.stroke();x.restore();txt(x,s,cx,cy+2,34,mixC(CREAM,'#0B2A30',lit),'center','900')})}
function drawY(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.2,960,500);
 const BW=400,BHt=220,BYc=400,X0=[100,760,1420];
 const hN=sh==16?1:0,hM=sh==16?1:sh==17?1-fin(t,T,.6):1,hT=sh==17?fin(t,T+.2,.6):sh==18?1:0;
 const a0=sh==16?fin(t,T+.1,.55):1,aT=sh==17?fin(t,T+.1,.55):sh>17?1:0;
 blk2(x,X0[0],BYc,BW,BHt,'COPILOT','NOTEBOOKS',mixC(NEU,TEAL,sh==16?1:0),a0,50);
 {const A=sh==16?fin(t,T+.3,.5):1;arrow(x,X0[0]+BW+8,X0[1]-8,BYc,CREAM,A);txt(x,'EVOLVED INTO',(X0[0]+BW+X0[1])/2,BYc-64,28,AMB,'center','900',A)}
 blk2(x,X0[1],BYc,BW,BHt,'MULTIPLAYER','WORKSPACES',mixC(NEU,TEAL,hM),a0,46);
 if(aT>0){arrow(x,X0[1]+BW+8,X0[2]-8,BYc,CREAM,aT);txt(x,'CONTINUES IN',(X0[1]+BW+X0[2])/2,BYc-64,28,AMB,'center','900',aT);blk2(x,X0[2],BYc,BW,BHt,'MICROSOFT','TEAMS',mixC(NEU,TEAL,hT),aT,50)}
 if(sh==18){const S='FRONTIER · EARLY ACCESS',S2='announced at Ignite, Nov 17, 2026',fs=64,w=txt_w(x,S,fs)+130,A=fin(t,T+.2,.6),B=fin(t,T+.9,.5);
  withIn(x,960,770,A,()=>{rr(x,960-w/2,680,w,180,40,PANEL,AMB,7);txt(x,S,960,740,fs,AMB,'center','900')});
  withIn(x,960,810,B,()=>txt(x,S2,960,812,38,CREAM,'center','800'))}
 comp([['board',0]])}

// ---------- the meter "YOUR COPY-PASTES" with "OUR EXAMPLE" under it (lesson L25): screen space, whole numbers 0-4 ----------
function meterBox(x,l,tp,v,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320,h=780,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,26,'rgba(27,20,48,.93)',col,5);
 txt(x,'YOUR',cx,tp+36,34,CREAM,'center','900');txt(x,'COPY-PASTES',cx,tp+74,34,CREAM,'center','900');txt(x,'OUR EXAMPLE',cx,tp+114,28,AMB,'center','900');
 imp(x,String(Math.round(v)),cx,tp+205,132,col);
 const tl=l+118,tw=90,top=tp+290,bot=tp+735,ph=bot-top;
 rr(x,tl,top,tw,ph,12,'#241A3C',INKC,4);
 for(const q of [0,1,2,3,4]){const y=bot-ph*q/4;x.fillStyle='#C9B8E0';x.fillRect(tl-18,y-2,18,4);txt(x,String(q),tl-26,y,28,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/4);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6,fh));x.restore()}
 x.restore()}
function meterVal(t,sh){
 if(sh<=5)return 0;
 if(sh==6||sh==7)return copiesDone(t);
 if(sh==8)return kf(t,[[ST(8),4],[ST(8)+.7,0],[999,0]]);
 return 0}
const MCK=[[0,0],[ST(8),0],[ST(8)+.7,1],[999,1]];
function meterCol(t){return mixC(AMB,TEAL,kf(t,MCK))}
function meterOverlay(t,sh){if(!(sh>=4&&sh<=12))return;const a=sh==4?fin(t,ST(4)+.15,.55):1;meterBox(ctx,1560,170,meterVal(t,sh),meterCol(t),a)}

// ---------- side by side + WHAT WE LEARNED (shot 19) ----------
function miniBar(x,cx,top,h,v,col,a){if(a<=0)return;x.save();x.globalAlpha*=a;imp(x,String(v),cx,top-40,118,col);rr(x,cx-34,top+30,68,h,12,'#241A3C',INKC,4);const fh=(h-8)*clamp(v/4);x.save();x.beginPath();x.roundRect(cx-34,top+30,68,h,12);x.clip();x.fillStyle=col;x.fillRect(cx-34,top+30+h-fh,68,fh);x.restore();x.restore()}
function drawW(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(19),a=fin(t,T+.5,.55),b=fin(t,T+2.6,.55);
 x.save();x.globalAlpha=a;rr(x,80,250,860,560,30,PANEL,AMB,6);x.restore();x.save();x.globalAlpha=b;rr(x,980,250,860,560,30,PANEL,TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,210,296,200,56,AMB);txt(x,'BEFORE',210,299,34,DARK,'center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1075,296,150,56,TEAL);txt(x,'NOW',1075,299,34,DARK,'center','900');x.restore();
 withIn(x,420,560,a,()=>{x.save();const k=.5;x.translate(110-90*k,350-170*k);x.scale(k,k);for(let i=0;i<4;i++)booth(x,t,i,1,false);planStrip(x,1,[1,1,1,1],false);x.restore();miniBar(x,860,380,330,4,AMB,1)});
 withIn(x,1340,560,b,()=>{x.save();const k=.48;x.translate(1000-90*k,360-175*k);x.scale(k,k);work(x,t,{act:false,lab:false,rows:[{u:1},{u:1},{u:1},{u:1}],chk:1});x.restore();miniBar(x,1760,380,330,0,TEAL,1)});
 {const S='WHAT WE LEARNED',fs=76,w=impW(x,S,fs)+120,c=fin(t,T+.1,.6);if(c>0){x.save();x.translate(960,150);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-60,w,120,40,PANEL,AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}}
 {const S='WORKSPACE · EARLY ACCESS',w=txt_w(x,S,30)+60,A=b;if(A>0){x.save();x.globalAlpha=A;pill(x,1430,296,w,52,TEAL);txt(x,S,1430,298,30,'#0B2A30','center','900');x.restore()}}
 {const S='YOUR COPY-PASTES · OUR EXAMPLE',fs=44,w=txt_w(x,S,fs)+100,A=fin(t,T+1.0,.55);if(A>0)withIn(x,960,900,A,()=>{pill(x,960,900,w,84,'rgba(27,20,48,.92)');txt(x,S,960,903,fs,CREAM,'center','900')})}
 comp([['board',0]])}

// ---------- the mascot big (shot 21) ----------
function drawMascot(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);headset(x,p);
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
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const S='Copilot Workspaces',tw=x.measureText(S).width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
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
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='COPILOT WORKSPACES';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,CREAM);put(TOPIC,W/2,Yt+sz*.2,sz,AMB);
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=800,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(5)+.05,out(8),'BEFORE · SINGLE PLAYER',AMB);tab(t,ST(8)+.05,out(13),'NOW · MULTIPLAYER',TEAL);
 card(t,ST(1)+.3,out(2),420,205,'SINGLE PLAYER · OUR EXAMPLE',CREAM,34);
 card(t,ST(2)+.3,out(3),LX,LY,'MULTIPLAYER',AMB,46);
 card(t,ST(3)+.2,out(4),LX,LY,'1 SPACE',AMB,46);
 card(t,ST(9)+.2,out(10),LX,LY,'AGENT DRAFTS',AMB,48);
 card(t,ST(10)+.2,out(11),LX,LY,'YOU REVIEW',CREAM,48);
 card(t,ST(12)+.3,out(13),LX,LY,'AGENT PICKS IT UP',AMB,48);
 if(sh==20){const fo=1-fin(t,out(21),.5),dm=fin(t,ST(20)+.1,.5);ctx.save();ctx.globalAlpha=.4*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,ST(20)+.1,.6)*fo;if(v>0){const S1='OUR EXAMPLE: 4 SOLO CHATS = 4 COPY-PASTES',S2='1 WORKSPACE (EARLY ACCESS): AGENTS DRAFT, YOU REVIEW',f=Math.min(60,1640/Math.max(txt_w(ctx,S1,100),txt_w(ctx,S2,100))*100);
   const w=Math.max(txt_w(ctx,S1,f),txt_w(ctx,S2,f))+140,h=f*3.3,cy=500;ctx.save();ctx.globalAlpha=v;ctx.translate(W/2,cy);const k=.92+.08*v;ctx.scale(k,k);ctx.translate(-W/2,-cy);
   ctx.fillStyle='rgba(27,20,48,.95)';ctx.beginPath();ctx.roundRect(W/2-w/2,cy-h/2,w,h,40);ctx.fill();ctx.strokeStyle=AMB;ctx.lineWidth=6;ctx.stroke();
   txt(ctx,S1,W/2,cy-f*.75,f,CREAM,'center','800');txt(ctx,S2,W/2,cy+f*.75,f,AMB,'center','800',fin(t,ST(20)+.8,.5));ctx.restore()}}}

// ---------- cameras: a slow push on the flat board ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:21},()=>push()));
for(const i of [1,2,4,5,8,9,10,11,12,16,17,20])CAM[i]=push(1,1.06);
CAM[3]=u=>({x:lerp(960,830,E(u)),y:lerp(540,470,E(u)),z:lerp(1,1.12,E(u)),b:[0,0,0]});
CAM[19]=push(1,1.03);
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='S')drawS(o,s,cam);else if(pl=='N'||pl=='F')drawNow(o,s,cam);else if(pl=='P')drawP(o,s,cam);else if(pl=='B')drawB(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='Y')drawY(o,s,cam);else if(pl=='W')drawW(o,cam);else drawMascot(o,s,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, page sounds ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(const t of [ST(1)+.3,ST(1)+.6,ST(1)+.9,ST(2)+.3,ST(3)+.2,ST(4)+.15,ST(4)+.5,ST(4)+.62,ST(4)+.74,ST(4)+.86,ST(5)+.1,ST(5)+.2,ST(5)+.05,ST(8)+.05,ST(9)+.2,ST(10)+.2,ST(10)+.1,ST(11)+.15,ST(12)+.3,ST(13)+.1,ST(13)+.9,ST(14)+.4,ST(15)+.05,ST(16)+.1,ST(17)+.1,ST(18)+.2,ST(18)+.9,ST(19)+.1,ST(19)+.5,ST(19)+1.0,ST(20)+.1,ST(20)+.8,ST(21)+1.0,ST(21)+1.75])say(t,'tick');
for(const t of [ST(1)+1.4,ST(1)+1.8,FS(0),FS(1),FS(2),FS(3),ST(2)+.05,ST(3)+.3,ST(8)+.2,ST(14)+.1,ST(16)+.3,ST(17)+.3,ST(19)+2.6])say(t,'slide');
for(const t of [ST(1)+.6,ST(4)+.1,ST(5)+.2,ST(10)+.9,ST(3)+.6])say(t,'paper');
for(const t of [LT[0],LT[1],LT[2],LT[3],ST(15)+.7,ST(15)+1.2,ST(15)+1.8].concat([33.1,34.2,34.8]))say(t,'stamp');
for(let k=0;k<6;k++)say(ST(9)+.3+k*.22,'pen');for(let k=0;k<4;k++)say(ST(12)+.5+k*.22,'pen');
say(ST(10)+.9,'tock');say(ST(10)+.3,'tock');say(ST(11)+.2,'tock');say(ST(12)+.3,'tock');say(ST(15)+.5,'tock');
say(ST(14)-.02,'tick');say(ST(18)-.02,'tick'); /* cuts 14 and 18 had no onset in the first earshot timeline */
