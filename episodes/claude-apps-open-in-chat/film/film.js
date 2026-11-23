// Episode: Claude Apps (MCP Apps, Nov 10 2026), told through 10 tasks in one Notion project page. You (the mascot, amber headset) ask; Claude (a robot with a teal screen head) edits.
// BEFORE: a small live preview, and the full editor in another tab: the meter "TAB SWITCHES" fills to 10. NOW (where supported): the page opens beside the chat; the meter stays at 0.
// 58.5 s, 25 shots (beats.md "Shots", numbered 0-24). Voice from tts.py (vo.wav laid in at .5 s): film time = voice time + .5. Every time below is FILM seconds.
// Places: T title (0), W window + mascot at the desk (1-4, 6-16, 23), D wide desk (5), X how diagram (17-19), Q tool tiles (20-21), P side by side + WHAT WE LEARNED (22), M mascot big + Subscribe + comment (24).
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',PAPER='#E9DCC2';
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
const bo=u=>{u=clamp(u);return 1+2.70158*Math.pow(u-1,3)+1.70158*Math.pow(u-1,2)};
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function txt_w(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function scribLines(x,X0,X1,Y,seed,h=4,col='#8A7AA8'){let X=X0,k=0;x.fillStyle=col;while(X<X1-8){const len=14+((Math.sin(seed*12.9898+k*78.233)*43758.5453)%1+1)%1*46;x.fillRect(X,Y,Math.min(len,X1-X),h);X+=len+9;k++}}

/* THE CLOCK: cut times of the 25 shots (film seconds) = word starts of the real voice (align.json + .5 s) minus .02 s, on frames. */
const TS=[0,1.23,2.8,4.8,8.5,10.3,11.63,12.8,14.83,18.0,19.5,20.63,24.07,25.33,26.13,27.67,30.13,31.87,32.6,35.4,38.63,41.07,45.27,49.33,53.33];
const DUR=58.5;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.32;
const PLACE='TWWWWDWWWWWWWWWWWXXXQQPWM'; /* one letter per shot 0-24 (sound only) */
function hex(c){return [parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)]}
function mixc(a,b,u){u=clamp(u);const A=hex(a),B=hex(b);return `rgb(${Math.round(lerp(A[0],B[0],u))},${Math.round(lerp(A[1],B[1],u))},${Math.round(lerp(A[2],B[2],u))})`}

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1,58.3];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: round amber reading glasses, drawn after the figure in the head's own transform */
/* the mascot's costume: a small amber headset (band over the head, two ear cups, a mic boom), drawn after the figure in the head's own transform */
function headset(x,p){x.save();headT(x,p);x.lineCap='round';x.lineJoin='round';
 for(const [col,w] of [[INKC,16],[AMB,9]]){x.strokeStyle=col;x.lineWidth=w;x.beginPath();x.arc(0,-8,HR+8,Math.PI*1.07,Math.PI*1.93);x.stroke();
  x.beginPath();x.moveTo(-HR-6,30);x.quadraticCurveTo(-HR+6,86,-34,78);x.stroke()}
 for(const sx of [-1,1]){rr(x,sx*(HR+4)-15,-14,30,58,12,AMB,INKC,5)}
 x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.arc(-30,78,10,0,7);x.fill();x.stroke();x.restore()}
function claudeHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE) and a simple face */
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
/* a small student cap on the robot's head (shot 8) */
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();if(o.cap)capDraw(x,p);return p}

function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
/* a thick stack of pages seen from slightly above: front edge, top face, the label "PDF"; base centre (X,Y) */
function tagP(x,X,Y,s,col,a,size=34,tc='#0B2A30'){if(a<=0)return;x.save();x.globalAlpha*=a;const w=txt_w(x,s,size)+46,sc=.9+.1*a;x.translate(X,Y);x.scale(sc,sc);pill(x,0,0,w,size*1.8,col);txt(x,s,0,2,size,tc,'center','900');x.restore()}

// ---------- the window: a browser-like window with two tabs and a body (chat strip, Notion page, or both) ----------
const WL=470,WT=180,WW=1030,WH=670,TB=56,TBL=858; /* TBL: the table top */
const ROW0=70,RH10=(WH-TB-36-ROW0-14)/10;
const rowY=i=>WT+TB+18+ROW0+i*RH10+RH10/2;
function tabGeom(x){const g=[];let X=WL+24;for(const n of ['CLAUDE','NOTION']){const w=txt_w(x,n,26)+54;g.push({n,l:X,w,cx:X+w/2,cy:WT+TB/2+3});X+=w+14}return g}
function cursorDraw(x,X,Y,a,col,press=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);const k=1-.18*press;x.scale(k,k);x.lineJoin='round';x.lineWidth=5;x.strokeStyle=INKC;x.fillStyle=col;
 x.beginPath();x.moveTo(0,0);x.lineTo(0,40);x.lineTo(11,31);x.lineTo(19,49);x.lineTo(28,45);x.lineTo(20,28);x.lineTo(34,28);x.closePath();x.stroke();x.fill();x.restore()}
function drawChat(x,l,t,w,h,s,al){if(al<=0)return;x.save();x.globalAlpha*=al;x.fillStyle='#241A3C';x.fillRect(l,t,w,h);
 const gl=(s.glow||0),pu=.75+.25*Math.sin((s.t||0)*5);
 x.save();x.translate(l+46,t+50);if(gl>0){const g=x.createRadialGradient(0,0,10,0,0,90);g.addColorStop(0,`rgba(45,178,174,${.7*gl*pu})`);g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(-100,-100,200,200)}
 const k=.3*(1+.12*gl);x.scale(k,k);claudeHead(x,{blink:0,smile:22});x.restore();
 txt(x,'CLAUDE',l+92,t+52,26,CREAM,'left','900');x.fillStyle='rgba(255,255,255,.1)';x.fillRect(l+20,t+96,w-40,2);
 const bw=Math.min(w-48,w*.78);rr(x,l+24,t+116,bw,84,18,'#352A55');x.fillStyle='#8A7AA8';x.fillRect(l+44,t+142,bw-60,10);x.fillRect(l+44,t+168,(bw-60)*.55,10);
 if(s.preview>0){const u=s.preview,cx=l+24+165,cy=t+226+95;x.save();x.globalAlpha*=u;x.translate(cx,cy);x.scale(.88+.12*u,.88+.12*u);x.translate(-cx,-cy);
  rr(x,l+24,t+226,330,190,14,'#F4EBD8',INKC,4);txt(x,'LIVE PREVIEW',l+42,t+256,24,'#1B1430','left','900');
  for(let i=0;i<4;i++){rr(x,l+42,t+288+i*30,18,18,4,null,'#2A1F42',3);x.fillStyle='#C9BFA8';x.fillRect(l+72,t+293+i*30,i%2?150:200,8)}x.restore()}
 if(s.bubble>0){const u=s.bubble,S='UPDATE ALL 10 TASKS',fs=Math.min(26,26*(w-48-44)/txt_w(x,S,26)),bw2=txt_w(x,S,fs)+44,bx=l+w-24-bw2,by=t+232,cx=bx+bw2/2,cy=by+34;
  x.save();x.globalAlpha*=u;x.translate(cx,cy);x.scale(.88+.12*u,.88+.12*u);x.translate(-cx,-cy);rr(x,bx,by,bw2,68,22,CREAM,INKC,4);txt(x,S,cx,cy+2,fs,'#1B1430','center','900');x.restore()}
 if(s.appr&&s.appr.a>0){const A=s.appr,bw3=Math.min(w-60,300),cx=l+w/2,cy=t+h-70,k=(.88+.12*A.a)*(1-.07*(A.press||0));x.save();x.globalAlpha*=A.a;x.translate(cx,cy);x.scale(k,k);
  rr(x,-bw3/2,-34,bw3,68,34,mixc(TEAL,'#BFF2EE',A.press||0),INKC,5);txt(x,'APPROVE',0,3,32,'#0B2A30','center','900');x.restore()}
 x.restore()}
function drawPage(x,l,t,w,h,s,al){if(al<=0)return;x.save();x.globalAlpha*=al;x.fillStyle='#2A1F42';x.fillRect(l,t,w,h);
 const cl=l+24,ct=t+18,cw=w-48,ch=h-36;rr(x,cl,ct,cw,ch,14,'#F4EBD8',INKC,4);
 x.save();x.font='46px Impact, "Arial Black", sans-serif';x.fillStyle='#1B1430';x.textAlign='left';x.textBaseline='middle';x.fillText('PROJECT PLAN',cl+28,ct+38);x.restore();
 x.fillStyle='#C9BFA8';x.fillRect(cl+20,ct+66,cw-40,3);
 for(let i=0;i<10;i++){const v=(s.rows||[])[i]||0,cy=rowY(i);
  rr(x,cl+28,cy-13,26,26,6,v>0?mixc('#F4EBD8',TEAL,v):null,'#2A1F42',3);
  if(v>0){x.save();x.globalAlpha*=v;x.strokeStyle='#F8E9CC';x.lineWidth=5;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(cl+34,cy+1);x.lineTo(cl+40,cy+8);x.lineTo(cl+49,cy-7);x.stroke();x.restore()}
  txt(x,'TASK '+(i+1),cl+70,cy+1,24,'#2A1F42','left','900');
  x.fillStyle=mixc('#C9BFA8',TEAL,v);x.fillRect(cl+200,cy-6,cw-200-30,12)}
 x.restore()}
function windowDraw(x,s){const a=s.a??1,sp=s.sp||0,col=mixc(AMB,TEAL,s.tm||0),by=WT+TB,bh=WH-TB;x.save();
 x.fillStyle='rgba(0,0,0,.3)';x.beginPath();x.roundRect(WL+10,WT+18,WW,WH,24);x.fill();
 rr(x,WL,WT,WW,WH,22,'#1B1430',null);
 x.fillStyle='#2A1F42';x.beginPath();x.roundRect(WL,WT,WW,TB,[22,22,0,0]);x.fill();
 const G=tabGeom(x);
 G.forEach((g,i)=>{const act=i==0?Math.max(1-a,sp):Math.max(a,sp),pr=(i==1&&s.press)?s.press:0;x.save();x.translate(g.cx,WT+TB);x.scale(1-.06*pr,1-.06*pr);x.translate(-g.cx,-(WT+TB));
  x.beginPath();x.roundRect(g.l,WT+8,g.w,TB-8,[14,14,0,0]);x.fillStyle='#3A2D5A';x.fill();x.save();x.globalAlpha*=act;x.fillStyle=col;x.fill();x.restore();
  txt(x,g.n,g.cx,g.cy,26,CREAM,'center','900',1-act);txt(x,g.n,g.cx,g.cy,26,'#1B1430','center','900',act);x.restore()});
 if(s.badge>0){const S='SIGNED IN AS YOU',fs=22,w=txt_w(x,S,fs)+44,cx=WL+WW-24-w/2,cy=WT+TB/2+2;x.save();x.globalAlpha*=s.badge;x.translate(cx,cy);x.scale(.88+.12*s.badge,.88+.12*s.badge);pill(x,0,0,w,40,TEAL);txt(x,S,0,2,fs,'#0B2A30','center','900');x.restore()}
 x.save();x.beginPath();x.roundRect(WL,by,WW,bh,[0,0,22,22]);x.clip();x.fillStyle='#241A3C';x.fillRect(WL,by,WW,bh);
 const cw=lerp(WW,WW*.38,sp),pl=lerp(0,WW*.38,sp);
 drawChat(x,WL,by,cw,bh,s,Math.max(1-a,sp));drawPage(x,WL+pl,by,WW-pl,bh,s,Math.max(a,sp));
 if(sp>0){x.fillStyle=`rgba(248,233,204,${.5*sp})`;x.fillRect(WL+pl-2,by,4,bh)}
 x.restore();rr(x,WL,WT,WW,WH,22,null,col,5);x.restore()}
function winAt(x,s,k,X,Y){x.save();x.translate(X,Y);x.scale(k,k);x.translate(-WL,-WT);windowDraw(x,s);x.restore()}

/* the meter's colour and the window's colour: amber in BEFORE (and the hook's belief), teal in NOW */
const meterCol=t=>fin(t,ST(3)+.3,.7)*(1-fin(t,ST(6),.5))+fin(t,ST(11),.6);
const MK=[[ST(2)+.3,0],[ST(2)+1.9,10],[ST(3)+.3,10],[ST(3)+1.3,0],[ST(9)+.1,0],[ST(10),7.5],[ST(10)+.7,10],[ST(11),10],[ST(11)+.7,0]];
function rowsAt(t,sh){const r=Array(10).fill(0);
 if(sh==4)for(let i=0;i<10;i++)r[i]=fin(t,ST(4)+.1+i*.12,.5);
 else if(sh==14)for(let i=0;i<5;i++)r[i]=fin(t,ST(14)+.1+i*.22,.5);
 else if(sh==15){for(let i=0;i<5;i++)r[i]=1;for(let i=5;i<10;i++)r[i]=fin(t,ST(15)+.1+(i-5)*.3,.5)}
 else if(sh>=16&&sh<=23)r.fill(1);
 return r}
function winState(t,sh){const u=t-ST(sh),s={a:0,sp:0,tm:meterCol(t),rows:rowsAt(t,sh),t};
 if(sh==1)s.a=1;
 if(sh==2)s.a=1-fin(u,.1,.7)+fin(u,.8,.7)-fin(u,1.5,.7);
 if(sh==3)s.sp=fin(u,.1,.9);
 if(sh==4||sh>=12)s.sp=1;
 if(sh==7)s.preview=fin(u,.1,.6);
 if(sh==8){s.preview=1;s.a=fin(u,1.4,.55);s.press=Math.max(0,Math.sin(Math.PI*seg(u,1.2,1.5)))}
 if(sh==9)s.a=1-fin(u,0,.75)+fin(u,.75,.75);
 if(sh==10)s.a=1-fin(u,0,.7)+fin(u,.7,.7);
 if(sh==11)s.sp=fin(u,.5,.8);
 if(sh>=12)s.badge=sh==12?fin(u,.15,.5):1;
 if(sh>=13)s.bubble=sh==13?fin(u,.05,.55):1;
 if(sh==14||sh==15)s.glow=sh==14?fin(u,0,.5):1;
 if(sh==16){s.glow=1-fin(u,0,.5);s.appr={a:fin(u,.1,.5),press:Math.max(0,Math.sin(Math.PI*seg(u,1.0,1.3)))}}
 return s}

// ---------- the desk: table, mascot (left), window ----------
function table(x,top=TBL){x.fillStyle='#B0705A';x.fillRect(-900,top,W+1800,24);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,top,W+1800,4);
 x.fillStyle='#7A4038';x.fillRect(-900,top+24,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,top+80,W+1800,10)}
function mascotP(t,sh){const u=t-ST(sh),p={x:255,y:707,s:1.15,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.25,lookY:.05,brow:.2,mouth:sh>=11?.9:.6,mouthW:28};
 if(sh==8||sh==16||sh==13){p.showH.r=true;p.hands.r=sh==13?[190+Math.sin(t*12)*10,110+Math.sin(t*15)*8]:[215,-10+Math.sin(t*3)*6]}
 return p}
function drawWin(t,sh,cam){const x=layer('board',cam),u=t-ST(sh);bgDusk(x,.3,900,520);
 const pm=mascotP(t,sh);if(sh==23){pm.mouth=1;pm.brow=.4}
 actor(x,'hero',HERO,pm,cam);headset(x,pm);table(x);
 const s=winState(t,sh);
 if(sh==23){winAt(x,s,.7,625,105)}else windowDraw(x,s);
 const G=tabGeom(x);
 if(sh==8){const e=ease(seg(u,.3,1.2)),X=lerp(700,G[1].cx+6,e),Y=lerp(760,G[1].cy+8,e);cursorDraw(x,X,Y,fin(u,.2,.4),CREAM,s.press)}
 if(sh==14||sh==15){const q=sh==14?clamp((u-.1)/.22,0,4.2):4.2+clamp((u-.1)/.3,0,4.8);
  const yi=rowY(0)+(rowY(9)-rowY(0))*clamp(q/9);const a=(sh==14?fin(u,.05,.5):1)*(sh==15?1-fin(u,1.9,.5):1);cursorDraw(x,1180,yi-6,a,TEAL,0)}
 if(sh==16){const e=ease(seg(u,.1,1.0));cursorDraw(x,lerp(920,WL+WW*.19+14,e),lerp(640,WT+TB+WH-TB-70+6,e),fin(u,.05,.4),CREAM,s.appr.press)}
 comp([['board',0]])}
// ---------- the wide desk (shot 5): mascot, Claude the robot, the one Notion page ----------
function drawDesk(t,sh,cam){const x=layer('board',cam);bgDusk(x,.3,900,520);
 const pm={x:430,y:600,s:1.35,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:0,lookY:.1,brow:.2,mouth:.6,mouthW:28};
 actor(x,'hero',HERO,pm,cam);headset(x,pm);robotFig(x,1210,871,1.35,t,{smile:22});
 table(x,792);pill(x,1210,770,170,44,'rgba(18,10,28,.85)');txt(x,'CLAUDE',1210,772,26,'#BFF2EE','center','900');
 winAt(x,{a:1,sp:0,tm:0,rows:Array(10).fill(0),t},.4,614,800-WH*.4);
 comp([['board',0]])}

// ---------- the how diagram (shots 17-19): Claude's window, then the MCP Apps block, then the tool's own screen ----------
function toolCard(x,cx,cy,w,h,hl){x.save();x.translate(cx,cy);
 if(hl>0){const g=x.createRadialGradient(0,0,40,0,0,w*.7);g.addColorStop(0,`rgba(45,178,174,${.45*hl})`);g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(-w,-h,w*2,h*2)}
 rr(x,-w/2,-h/2,w,h,16,'#F4EBD8',mixc(INKC,TEAL,hl),5+3*hl);
 x.save();x.font='46px Impact, "Arial Black", sans-serif';x.fillStyle='#1B1430';x.textAlign='left';x.textBaseline='middle';x.fillText('NOTION',-w/2+28,-h/2+40);x.restore();
 for(let i=0;i<5;i++){const y=-h/2+92+i*((h-120)/5);rr(x,-w/2+28,y-11,22,22,5,TEAL,'#2A1F42',3);x.fillStyle='#C9BFA8';x.fillRect(-w/2+66,y-5,w-130-(i%2)*60,10)}
 x.restore()}
function drawX(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const u=t-ST(sh),A=sh==17?fin(u,0,.55):1;
 x.save();x.globalAlpha=A;imp(x,'HOW IT WORKS',960,215,96,CREAM);x.restore();
 x.save();x.translate(960,495);x.scale(.94+.06*A,.94+.06*A);x.translate(-960,-495);x.globalAlpha=A;
 rr(x,360,290,1200,410,26,'#241A3C',CREAM,6);
 x.save();x.translate(425,350);x.scale(.3,.3);claudeHead(x,{blink:0,smile:22});x.restore();txt(x,'CLAUDE',475,352,40,CREAM,'left','900');
 x.fillStyle='rgba(255,255,255,.1)';x.fillRect(384,392,1152,2);
 rr(x,390,420,420,84,18,'#352A55');x.fillStyle='#8A7AA8';x.fillRect(410,446,300,10);x.fillRect(410,472,170,10);
 rr(x,390,530,300,84,18,'#352A55');x.fillStyle='#8A7AA8';x.fillRect(410,556,200,10);x.fillRect(410,582,120,10);
 rr(x,880,420,640,250,18,'#1B1430','#8A7AA8',4);x.restore();
 const b=sh==17?0:sh==18?fin(u,.1,.6):1,hl=sh==18?1:sh==19?1-fin(u,1.0,.6):0;
 if(b>0){x.save();x.globalAlpha=b;x.translate(960,795);x.scale(1,.7+.3*b);x.translate(-960,-795);
  if(hl>0){const g=x.createRadialGradient(0,0,30,0,0,700);x.save();x.translate(960,795);x.scale(1,.25);g.addColorStop(0,`rgba(255,198,110,${.45*hl})`);g.addColorStop(1,'rgba(255,198,110,0)');x.fillStyle=g;x.fillRect(-700,-700,1400,1400);x.restore()}
  rr(x,360,740,1200,110,22,mixc('#2A1F42','#4A3A22',hl),mixc('#8A7AA8',AMB,hl),7);imp(x,'MCP APPS',960,797,66,CREAM);x.restore()}
 tagP(x,960,925,'OPEN EXTENSION TO MCP',CREAM,sh==18?fin(u,1.2,.5):sh>18?1:0,38,'#1B1430');
 if(sh==19){const c=ease(seg(u,.2,1.2)),al=fin(u,.2,.5),hl2=fin(u,1.2,.7);x.save();x.globalAlpha=al;toolCard(x,lerp(1900,1200,c),545,610,250,hl2);x.restore()}
 comp([['board',0]])}
// ---------- the tool tiles (shots 20-21) ----------
function drawQ(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const u=t-ST(sh);
 {const S='TO START · WHERE SUPPORTED',fs=Math.min(96,96*1500/impW(x,S,96)),a=sh==20?fin(u,1.9,.5):1;x.save();x.globalAlpha=a;imp(x,S,960,230,fs,AMB);x.restore()}
 const N=['ASANA','CANVA','NOTION','+ MORE'],tt=[0,.45,.85,1.5];
 N.forEach((n,i)=>{const a=sh==20?fin(u,tt[i],.5):1,cx=330+i*420,cy=520;if(a<=0)return;x.save();x.globalAlpha=a;x.translate(cx,cy);x.scale(.9+.1*a,.9+.1*a);
  rr(x,-190,-100,380,200,28,'#2A1F42',i==2?TEAL:'#8A7AA8',i==2?8:5);imp(x,n,0,6,78,i==3?'#C9B8E0':CREAM);x.restore()});
 {const S='WEB + DESKTOP · ALL PLANS · NEW CLAUDE · ROLLING OUT';let fs=40;const bw=txt_w(x,S,fs)+46;if(bw>1700)fs=fs*1700/bw;tagP(x,960,780,S,TEAL,sh==21?fin(u,.3,.6):0,fs)}
 comp([['board',0]])}

// ---------- side by side + WHAT WE LEARNED (shot 22) ----------
const MINI=document.createElement('canvas');MINI.width=W;MINI.height=H;
function miniWin(x,l,tp,k,s){const m=MINI.getContext('2d');m.setTransform(1,0,0,1,0,0);m.globalAlpha=1;m.clearRect(0,0,W,H);winAt(m,s,k,l,tp);x.save();x.drawImage(MINI,0,0);x.restore()}
function meterBox(x,l,tp,k,v,col,a=1,title=true){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320*k,h=780*k,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,26*k,'rgba(27,20,48,.93)',col,5*k);
 if(title){const fs=Math.min(30,280/txt_w(x,'TAB SWITCHES',30)*30)*k;txt(x,'TAB SWITCHES',cx,tp+46*k,fs,CREAM,'center','900')}
 const s=String(Math.round(v));imp(x,s,cx,tp+(title?150:110)*k,132*k,col);
 const tl=l+118*k,tw=90*k,top=tp+260*k,bot=tp+720*k,ph=bot-top;
 rr(x,tl,top,tw,ph,12*k,'#241A3C',INKC,4*k);
 for(const n of [0,5,10]){const y=bot-ph*n/10;x.fillStyle='#C9B8E0';x.fillRect(tl-18*k,y-2*k,18*k,4*k);txt(x,String(n),tl-26*k,y,28*k,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/10);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12*k);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6*k,fh));x.restore()}
 x.restore()}
function drawP(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(22),a=fin(t,T+.05,.5),b=fin(t,T+.3,.5);
 x.save();x.globalAlpha=a;rr(x,90,250,840,540,30,'#2A1F42',AMB,6);x.restore();x.save();x.globalAlpha=b;rr(x,990,250,840,540,30,'#2A1F42',TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,300,300,200,56,AMB);txt(x,'BEFORE',300,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1200,300,150,56,TEAL);txt(x,'NOW',1200,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=a;miniWin(x,120,380,.5,{a:1,sp:0,tm:0,rows:Array(10).fill(0),t});x.restore();
 x.save();x.globalAlpha=b;miniWin(x,1020,380,.5,{a:0,sp:1,tm:1,rows:Array(10).fill(1),t});x.restore();
 meterBox(x,120+515+34,345,.55,10,AMB,a);meterBox(x,1020+515+34,345,.55,0,TEAL,b);
 {const S='WHAT WE LEARNED',fs=84,w=impW(x,S,fs)+120,c=fin(t,T+.1,.6);if(c>0){x.save();x.translate(960,150);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-60,w,120,40,'#2A1F42',AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}}
 comp([['board',0]])}

// ---------- the mascot big (shot 24) ----------
function drawMascot(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);headset(x,p);
 const T0=ST(24)+.1,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,430);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 // the comment button (speech bubble, amber, tail toward the mascot): same easing as Subscribe, eases in on the word "comment"; sized from measureText, clear of the bottom-right corner
 {const S='COMMENT: WHAT NEXT?',fs=50,w=txt_w(x,S,fs,'900')+110,h=150,C0=ST(24)+1.7,cc=fin(t,C0,.55),pu=1+.035*Math.sin((t-C0)*7);
  if(cc>0){x.save();x.translate(1430,700);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
   x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w/2,-h/2,w,h,h/2);x.fill();x.stroke();
   x.beginPath();x.moveTo(-w/2+90,h/2-4);x.lineTo(-w/2+30,h/2+52);x.lineTo(-w/2+160,h/2-4);x.closePath();x.fill();x.stroke();x.fillRect(-w/2+98,h/2-12,54,14);
   txt(x,S,0,4,fs,'#1B1430','center','900');x.restore()}}
 // no "Next" line: no next episode is decided (owner, 2026-11-23, lesson L24)
 comp([['board',0]])}


// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size){const v=fin(t,a,.5)*(b?1-fin(t,b,.3):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(s).width+size*2.2;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);pill(ctx,X,y,w,size*2.2,'rgba(27,20,48,.88)',v);txt(ctx,s,X,y+2,size,col,'center','800',v);ctx.restore()}
function meterOverlay(t,sh){if(!(sh>=2&&sh<=16))return;const a=sh==2?fin(t,ST(2)+.1,.5):1;meterBox(ctx,1560,170,1,kf(t,MK),mixc(AMB,TEAL,meterCol(t)),a)}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const tw=x.measureText('Claude Apps').width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,'Claude Apps',58,54,32,AMB,'left','800');txt(x,' ·',58+tw,54,32,CREAM,'left','800');pill(x,58+tw+dw+50,52,78,42,RED);txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}
function tab(t,a,b,lab,col){const v=fin(t,a,.5)*(1-fin(t,b,.3));if(v<=0)return;const x=ctx;x.save();x.font='900 34px Arial';const w=x.measureText(lab).width+54;x.restore();x.save();x.translate(32+w/2,128);x.scale(.9+.1*v,.9+.1*v);x.translate(-32-w/2,-128);pill(x,32+w/2,128,w,56,col,v);txt(x,lab,32+w/2,130,34,'#1B1430','center','900',v);x.restore()}
function sticker(x){x.font='104px Impact, "Arial Black", sans-serif';const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+38,6)}
// ---------- shot 0: the title card. The topic is on screen from frame 0, in the thumbnail's style ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,620,60,W/2,620,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='CLAUDE APPS';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,CREAM);put(TOPIC,W/2,Yt+sz*.2,sz,AMB);
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=985,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(6)+.05,out(11),'BEFORE',AMB);tab(t,ST(11)+.05,out(17),'NOW',TEAL);
 card(t,ST(3)+1.0,out(4),LX,LY,'IN SUPPORTED APPS',TEAL,46);
 card(t,ST(5)+.2,out(6),960,LY,'10 TASKS · 1 NOTION PAGE',CREAM,48);
 card(t,ST(8)+1.0,out(9),LX,LY,'FULL EDITOR: ANOTHER TAB',AMB,44);
 card(t,ST(10)+.3,out(11),LX,LY,'10 TAB SWITCHES',AMB,56);
 card(t,ST(13)+.05,out(15),LX,LY,'1 ASK',TEAL,52);
 card(t,ST(15)+.5,out(16),LX,LY,'CHANGES APPEAR AS CLAUDE MAKES THEM',TEAL,38);
 card(t,ST(16)+.3,out(17),LX,LY,'YOU APPROVE',TEAL,52);
 card(t,ST(22)+.8,out(23),960,890,'SAME 10 TASKS',CREAM,52);
 if(inS(t,23,24)){const fo=1-fin(t,out(24),.3),v=fin(t,ST(23)+.15,.6)*fo;if(v>0){const S1='10 TASKS, ONE SCREEN,',S2='EDITED BESIDE YOUR CHAT',S3='IN SUPPORTED APPS',f1=76;ctx.save();ctx.font=`800 ${f1}px Arial`;const w=Math.max(ctx.measureText(S1).width,ctx.measureText(S2).width)+140;ctx.restore();
   ctx.save();ctx.translate(960,775);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-960,-775);ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.94)';ctx.beginPath();ctx.roundRect(960-w/2,640,w,270,40);ctx.fill();ctx.restore();
   txt(ctx,S1,960,702,f1,CREAM,'center','800',v);txt(ctx,S2,960,786,f1,AMB,'center','800',fin(t,ST(23)+.6,.5)*fo);txt(ctx,S3,960,868,36,TEAL,'center','900',fin(t,ST(23)+1.2,.5)*fo)}}}

// ---------- cameras: a slow push on the flat board; window shots keep the window's top-right corner fixed ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const apush=(a=1,b=1.07,px=1500,py=200)=>u=>{const z=lerp(a,b,E(u));return {x:px-(px-960)/z,y:py-(py-540)/z,z,b:[0,0,0]}};
const CAM=[()=>({})].concat(Array.from({length:24},()=>apush()));
for(const i of [5,17,18,19,20,21,22,23,24])CAM[i]=push(1,1.05);
CAM[3]=apush(1,1.06);CAM[7]=apush(1,1.1);CAM[19]=push(1,1.04);CAM[20]=push(1,1.06);CAM[21]=push(1,1.06);CAM[22]=push(1,1.06);CAM[23]=push(1,1.06);
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='W')drawWin(o,s,cam);else if(pl=='D')drawDesk(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='Q')drawQ(o,s,cam);else if(pl=='P')drawP(o,cam);else drawMascot(o,s,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, ticks on rows ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(let i=0;i<10;i++)say(ST(4)+.1+i*.12+.2,'tick');
for(let i=0;i<5;i++)say(ST(14)+.1+i*.22+.2,'tick');for(let i=5;i<10;i++)say(ST(15)+.1+(i-5)*.3+.2,'tick');
for(const t of [ST(2)+.3,ST(2)+.8,ST(2)+1.35,ST(3)+1.0,ST(5)+.2,ST(8)+1.0,ST(8)+1.35,ST(10)+.3,ST(12)+.15,ST(13)+.05,ST(15)+.5,ST(16)+.3,ST(16)+1.1,ST(17)+.1,ST(18)+.3,ST(18)+1.2,ST(19)+.2,ST(20)+.1,ST(20)+.55,ST(20)+.95,ST(20)+1.6,ST(20)+1.9,ST(21)+.3,ST(22)+.1,ST(22)+.8,ST(23)+.15,ST(24)+.1,ST(24)+1.7,ST(9)+.5,ST(9)+1.0,ST(10)+.5])say(t,'tick');
for(const t of [ST(3)+.1,ST(7)+.1,ST(11)+.5,ST(19)+.7,ST(19)+1.1,ST(18)+.1,ST(22)+.05,ST(22)+.3])say(t,'slide');
say(ST(16)+1.0,'stamp');say(ST(24)+.1,'stamp');
