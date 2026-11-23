// Episode: ChatGPT Space, told through 12 Slack decisions and one team plan. You (the mascot, amber scorekeeper's flat cap) copy by hand; the AI (a robot with a teal screen head, "CHATGPT") is beside the page.
// BEFORE: each of the 12 decisions is carried by hand into the plan, the meter "COPIED BY HAND" fills to 12. NOW: the plan is set to update from the connected Slack; the meter stays at 0.
// 58.5 s, 24 shots (beats.md "Shots", numbered 0-23). Voice from tts.py (vo.wav laid in at .3 s): film time = voice time + .3. Every time below is FILM seconds.
// Places: T title (0), D the desk (1-5, 8, 10, 12, 13), B robot + reply/library (6, 7), S scoreboard (9), U team around the page (11), X how diagram (14-16),
// Q the quote (17, 18), C the catch card (19), H check with a magnifier (20), P side by side + WHAT WE LEARNED (21), F the finished page + takeaway (22), M mascot + Subscribe + comment (23).
// Helpers follow episodes/prompt-caching-v2/film/film.js. Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',PAPER='#E9DCC2',NEU='#8A7AA8';
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

/* THE CLOCK: cut times of the 24 shots (film seconds) = word starts of the voice (align_est.json + .3 s) minus .02 s, on frames. */
const TS=[0,1.38,3.87,5.52,8.01,10.64,11.68,14.04,16.10,19.04,20.85,22.86,24.45,27.18,30.17,31.96,33.31,35.57,37.28,41.14,43.20,45.47,49.64,52.73];
const CF=TS.map(t=>Math.round(t*30)).concat([1755]);
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.32;
const PLACE='TDDDDDBBDSDUDDXXXQQCHPFM'; /* one letter per shot 0-23 (sound only) */

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1,58.3];
const TEAM=[GUEST_A,WOMAN,GUEST_B]; /* mixed tones: dark, tan, light; nobody gives orders here, so no tone maps to rank */
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: an amber scorekeeper's flat cap, drawn after the figure in the head's own transform */
function flatCap(x,p){x.save();headT(x,p);x.lineJoin='round';x.lineWidth=5;x.strokeStyle=INKC;
 x.fillStyle=AMB;x.beginPath();x.moveTo(-96,-46);x.bezierCurveTo(-104,-130,-44,-150,18,-146);x.bezierCurveTo(74,-142,104,-112,98,-48);x.quadraticCurveTo(0,-68,-96,-46);x.closePath();x.fill();x.stroke();
 x.fillStyle='#E0A24C';x.beginPath();x.moveTo(20,-60);x.quadraticCurveTo(84,-72,138,-52);x.quadraticCurveTo(134,-34,88,-40);x.quadraticCurveTo(52,-44,20,-48);x.closePath();x.fill();x.stroke();
 x.fillStyle='#E0A24C';x.beginPath();x.arc(8,-146,9,0,7);x.fill();x.stroke();x.restore()}
function claudeHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE) and a simple face */
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();return p}
function robotLabel(x,cx,y){pill(x,cx,y,196,46,'rgba(18,10,28,.88)');txt(x,'CHATGPT',cx,y+2,28,'#BFF2EE','center','900')}
function mascot(x,t,cam,o){const p={x:o.x,y:o.y,s:o.s||1.35,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.3:o.look,lookY:.1,brow:.2,mouth:o.mouth===undefined?.6:o.mouth,mouthW:28,tilt:o.tilt||0};
 actor(x,'hero',HERO,p,cam);flatCap(x,p);return p}
function teamFig(x,ch,cx,y,s,t,look,lookY=-.1){drawPerson(x,ch,{x:cx,y,s,face:1,breath:t*2+cx*.01,noLegs:true,blink:blinkAt(t+cx*.003,BL),look,lookY,brow:.1,mouth:.7,mouthW:24,hands:{},showH:{}})}

// ---------- the world ----------
function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function table(x,Y=792){x.fillStyle='#B0705A';x.fillRect(-900,Y,W+1800,40);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,Y,W+1800,5);x.fillStyle='#7A4038';x.fillRect(-900,Y+40,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,Y+100,W+1800,10)}
// the chat window "SLACK · #project": 12 decision bubbles in 3 columns x 4 rows (plain text, no logo)
const SLX=80,SLY=220,SLW=380,SLH=560;
const cellC=i=>[SLX+22+(i%3)*116+52,SLY+92+Math.floor(i/3)*110+42];
function bubbleDraw(x,cx,cy,n,sc=1,a=1,fill=CREAM){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(sc,sc);x.lineJoin='round';x.fillStyle=fill;x.strokeStyle=INKC;x.lineWidth=3;
 x.beginPath();x.roundRect(-52,-40,104,80,18);x.fill();x.stroke();x.beginPath();x.moveTo(-40,38);x.lineTo(-48,56);x.lineTo(-20,38);x.closePath();x.fill();x.stroke();x.fillStyle=fill;x.fillRect(-42,34,26,8);
 txt(x,'D'+n,0,2,38,'#1B1430','center','900');x.restore()}
function cardDraw(x,cx,cy,n,sc=1,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(cx,cy);x.scale(sc,sc);rr(x,-54,-33,108,66,12,AMB,INKC,4);txt(x,'D'+n,0,2,38,'#1B1430','center','900');x.restore()}
function slackWin(x,a,cellA){withIn(x,SLX+SLW/2,SLY+SLH/2,a,()=>{rr(x,SLX,SLY,SLW,SLH,22,'#241A3C',NEU,4);x.save();x.beginPath();x.roundRect(SLX,SLY,SLW,64,[22,22,0,0]);x.fillStyle='#3B2A5C';x.fill();x.restore();
 const S='SLACK · #project',fs=Math.min(30,(SLW-44)/txt_w(x,S,30)*30);txt(x,S,SLX+22,SLY+34,fs,CREAM,'left','900');
 for(let i=0;i<12;i++){const c=cellC(i),ca=cellA(i);bubbleDraw(x,c[0],c[1],i+1,.85+.15*ca,ca)}})}
// the team plan page: 12 rows D1 ... D12; o.rows(i) -> {a,col}; o.wf widens it
const PGL=1000,PGT=220;
const rowC=i=>[PGL+190,PGT+98+i*38+14];
function pageDraw(x,l,t,k,o={}){const wf=o.wf||1,w=380*k*wf,h=560*k;rr(x,l,t,w,h,22*k,'#241A3C',o.border||NEU,5*k);
 const S=o.title||'TEAM PLAN',fs=Math.min(34,(w/k-48)/txt_w(x,S,34)*34);txt(x,S,l+24*k,t+38*k,fs*k,CREAM,'left','900');
 for(let i=0;i<12;i++){const y=t+(98+i*38)*k,rh=28*k,rx=l+20*k,rw=w-40*k;rr(x,rx,y,rw,rh,8*k,'#2A1F42','#4A3C68',2);txt(x,'D'+(i+1),rx+14*k,y+rh/2+1,20*k,'#6F5F90','left','900');
  const r=o.rows?o.rows(i):null;if(r&&r.a>0){x.save();x.globalAlpha*=r.a;rr(x,rx,y,rw,rh,8*k,r.col,INKC,2);txt(x,'D'+(i+1),rx+14*k,y+rh/2+1,20*k,'#1B1430','left','900');x.restore()}}}
function switchCard(x,cx,cy,k,on,a,wf=1){const w=380*k*wf,h=56*k;withIn(x,cx,cy,a,()=>{rr(x,cx-w/2,cy-h/2,w,h,14*k,'#1B1430',mixC(NEU,TEAL,on),4*k);txt(x,'SET TO UPDATE',cx-w/2+22*k,cy+1,26*k,CREAM,'left','900');
 const tw=72*k,th=36*k,tx=cx+w/2-22*k-tw;rr(x,tx,cy-th/2,tw,th,th/2,mixC('#4A3C68',TEAL,on),null);x.fillStyle=CREAM;x.beginPath();x.arc(tx+th/2+(tw-th)*on,cy,th/2-5*k,0,7);x.fill()})}
// the teal line CONNECTED from the chat window, over the mascot's head, to the page
const AP=[[462,300],[731,60],[1000,300]];
const bz=u=>{const a=1-u;return [a*a*AP[0][0]+2*a*u*AP[1][0]+u*u*AP[2][0],a*a*AP[0][1]+2*a*u*AP[1][1]+u*u*AP[2][1]]};
function arcLine(x,u,label){if(u<=0)return;x.save();x.lineCap='round';x.lineJoin='round';
 for(const [c,w] of [[INKC,16],[TEAL,9]]){x.strokeStyle=c;x.lineWidth=w;x.beginPath();let p=bz(0);x.moveTo(p[0],p[1]);for(let k=1;k<=40;k++){if(k/40>u+1e-6)break;p=bz(k/40);x.lineTo(p[0],p[1])}x.stroke()}
 x.restore();if(label){const a=clamp((u-.6)/.4),p=bz(.5);tagP(x,p[0],110,'CONNECTED',TEAL,a,34)}}
// a decision travels: its cell -> the line's start -> along the line -> the line's end -> its row (slow ease at every joint)
function flyPos(i,u){const c=cellC(i),r=rowC(i);if(u<.2){const e=ease(u/.2);return [lerp(c[0],AP[0][0],e),lerp(c[1],AP[0][1],e)]}
 if(u<.8)return bz(ease((u-.2)/.6));const e=ease((u-.8)/.2);return [lerp(AP[2][0],r[0],e),lerp(AP[2][1],r[1],e)]}
function fly(x,t,t0,dur,i,kind){const u=(t-t0)/dur;if(u<0||u>1)return;const p=flyPos(i,u),a=Math.min(1,u*5)*Math.min(1,(1-u)*7);
 if(kind=='card')cardDraw(x,p[0],p[1],i+1,.8,a);else bubbleDraw(x,p[0],p[1],i+1,.8,a)}

// ---------- the desk (shots 1-5, 8, 10, 12, 13) ----------
function drawDesk(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,sh==10?.36:.3);
 const reach=sh==3||sh==8,bob=reach?Math.sin(t*5)*22:0;
 mascot(x,t,cam,{x:730,y:600,hands:reach?{l:[-175,-10+bob],r:[175,-10-bob]}:{},showH:reach?{l:1,r:1}:{},look:.4,mouth:sh==13?1:.6});
 table(x);
 const wA=sh==2?fin(t,T,.55):(sh>=3?1:0);
 if(wA>0)slackWin(x,wA,i=>sh==2?fin(t,T+.15+i*.07,.5):1);
 let rows=null,border=NEU,swA=0,swOn=0,tagA=0,lineU=0,lab=false;
 if(sh==3)rows=i=>({a:fin(t,T+.1+i*.16+.47,.4),col:AMB});
 if(sh==4||sh==5)rows=()=>({a:sh==5?1-fin(t,T,.5):1,col:AMB});
 if(sh==8)rows=i=>i<3?{a:fin(t,T+.05+i*.85+.75,.4),col:AMB}:null;
 if(sh==13)rows=i=>({a:fin(t,T+.1+i*.17+.65,.45),col:TEAL});
 if(sh<=3)tagA=sh==1?fin(t,T+.5,.5):1;
 if(sh==4){tagA=1-fin(t,T,.5);swA=fin(t,T,.5);swOn=fin(t,T+.5,.6);border=mixC(NEU,TEAL,fin(t,T+.6,.6));lineU=ease(seg(t,T+1.0,T+1.8))}
 if(sh==5){swA=1;swOn=1;border=TEAL;lineU=1}
 if(sh==12){swA=fin(t,T,.5);swOn=fin(t,T+.6,.6);border=mixC(NEU,TEAL,fin(t,T+.7,.6));lineU=ease(seg(t,T+1.2,T+2.0));lab=true}
 if(sh==13){swA=1;swOn=1;border=TEAL;lineU=1;lab=true}
 withIn(x,PGL+190,PGT+280,sh==1?fin(t,T+.05,.55):1,()=>pageDraw(x,PGL,PGT,1,{rows,border}));
 if(tagA>0)tagP(x,PGL+190,170,'SHARED WITH THE TEAM',AMB,tagA,26,'#1B1430');
 if(swA>0)switchCard(x,PGL+190,170,1,swOn,swA);
 arcLine(x,lineU,lab);
 if(sh==3)for(let i=0;i<12;i++)fly(x,t,T+.1+i*.16,.62,i,'card');
 if(sh==8)for(let i=0;i<3;i++)fly(x,t,T+.05+i*.85,.9,i,'card');
 if(sh==13)for(let i=0;i<12;i++)fly(x,t,T+.1+i*.17,.8,i,'bub');
 comp([['board',0]])}

// ---------- before: the robot's reply, then a file in the Library (shots 6, 7) ----------
function drawBefore(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.3,800,520);
 mascot(x,t,cam,{x:290,y:600,look:.5});
 robotFig(x,780,871,1.35,t,{});
 table(x);robotLabel(x,780,760);
 if(sh==6){const a=fin(t,T+.3,.55);withIn(x,1110,330,a,()=>{const cx=1110,cy=330,w=440,h=220;x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=5;
   x.beginPath();x.moveTo(cx-w/2+30,cy+h/2-3);x.lineTo(930,455);x.lineTo(cx-w/2+110,cy+h/2-3);x.closePath();x.fill();x.stroke();x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,36);x.fill();x.stroke();x.fillRect(cx-w/2+34,cy+h/2-8,70,12);
   txt(x,'A REPLY',cx,cy-52,48,'#1B1430','center','900');x.fillStyle=NEU;for(let i=0;i<3;i++)x.fillRect(cx-w/2+44,cy-6+i*36,(w-88)*(i==2?.55:1-.08*i),12)})}
 if(sh==7){const a=fin(t,T+.1,.55);
  withIn(x,1200,420,a,()=>{rr(x,1050,208,300,84,42,'#2A1F42',AMB,5);imp(x,'LIBRARY',1200,252,60,AMB);
   x.fillStyle='#B0705A';x.fillRect(960,560,480,22);x.fillStyle='rgba(0,0,0,.25)';x.fillRect(960,582,480,10);
   for(const [bx,bh,bc] of [[988,150,'#8A7AA8'],[1034,190,'#C9B8E0'],[1080,130,'#B0705A'],[1122,170,'#8A7AA8']]){x.fillStyle=bc;x.strokeStyle=INKC;x.lineWidth=3;x.beginPath();x.roundRect(bx,560-bh,36,bh,5);x.fill();x.stroke()}});
  const e=ease(seg(t,T+.5,T+1.3)),fa=fin(t,T+.4,.4);if(fa>0){const X=lerp(930,1330,e),Y=lerp(440,455,e)-Math.sin(Math.PI*e)*25;x.save();x.globalAlpha*=fa;x.translate(X,Y);
   x.lineJoin='round';x.fillStyle=PAPER;x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.moveTo(-75,-100);x.lineTo(35,-100);x.lineTo(75,-60);x.lineTo(75,100);x.lineTo(-75,100);x.closePath();x.fill();x.stroke();
   x.fillStyle='#CDBE9E';x.beginPath();x.moveTo(35,-100);x.lineTo(35,-60);x.lineTo(75,-60);x.closePath();x.fill();x.stroke();x.fillStyle=NEU;for(let i=0;i<3;i++)x.fillRect(-52,-30+i*22,104-i*18,8);
   txt(x,'PLAN FILE',0,76,22,'#1B1430','center','900');x.restore()}
  tagP(x,1200,664,'OUR EXAMPLE: UPDATED BY HAND',CREAM,fin(t,T+1.0,.55),32,'#1B1430')}
 comp([['board',0]])}

// ---------- the old scoreboard (shot 9) ----------
function drawScore(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.3,900,520);
 x.lineCap='round';
 for(const [c,w] of [[INKC,20],['#B0705A',12]]){x.strokeStyle=c;x.lineWidth=w;for(const r0 of [430,560]){x.beginPath();x.moveTo(r0,860);x.lineTo(r0+50,300);x.stroke()}
  for(let k=0;k<7;k++){const y=800-k*75,f=(860-y)/560;x.beginPath();x.moveTo(430+50*f,y);x.lineTo(560+50*f,y);x.stroke()}}
 x.fillStyle='#7A4038';x.fillRect(960,620,26,200);x.fillRect(1374,620,26,200);
 withIn(x,1180,440,fin(t,T,.5),()=>{rr(x,900,260,560,360,24,'#33244F',AMB,8);imp(x,'DECISIONS',1180,302,56,CREAM);
  for(let i=0;i<12;i++){const px=923+(i%6)*88,py=352+Math.floor(i/6)*118,f=seg(t,T+.1+i*.1,T+.1+i*.1+.5),sy=Math.abs(Math.cos(Math.PI*f));x.save();x.translate(px+37,py+50);x.scale(1,Math.max(.02,sy));
   if(f<.5){rr(x,-37,-50,74,100,8,'#241A3C',NEU,3)}else{rr(x,-37,-50,74,100,8,CREAM,INKC,3);txt(x,String(i+1),0,3,56,'#1B1430','center','900')}x.restore()}});
 mascot(x,t,cam,{x:700,y:640,s:1.2,look:.6,hands:{r:[200,-95+Math.sin(t*4)*18]},showH:{r:1}});
 table(x,820);
 comp([['board',0]])}

// ---------- the team around the shared page (shot 11) ----------
function drawTeam(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.3,900,520);
 teamFig(x,TEAM[0],340,670,.62,t,.8);teamFig(x,TEAM[1],490,670,.62,t,.8);teamFig(x,TEAM[2],1215,670,.62,t,-.8);
 robotFig(x,1440,871,.8,t,{smile:28});
 table(x);robotLabel(x,1440,756);
 withIn(x,867,480,fin(t,T+.05,.55),()=>pageDraw(x,620,200,1,{wf:1.3,title:'TEAM PLAN · SHARED PAGE',border:NEU}));
 comp([['board',0]])}

// ---------- the how diagram (shots 14-16) ----------
function blk(x,l,cy,w,h,s,col,a,fs=46){withIn(x,l+w/2,cy,a,()=>{rr(x,l,cy-h/2,w,h,22,'#2A1F42',col,8);const f=Math.min(fs,(w-48)/txt_w(x,s,fs)*fs);txt(x,s,l+w/2,cy+2,f,CREAM,'center','900')})}
function arrow(x,X0,X1,Y,col,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=10;x.lineCap='round';x.beginPath();x.moveTo(X0,Y);x.lineTo(X1-22,Y);x.stroke();x.beginPath();x.moveTo(X1,Y);x.lineTo(X1-34,Y-24);x.lineTo(X1-34,Y+24);x.closePath();x.fill();x.restore()}
function drawX(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.2,960,560);
 withIn(x,960,215,sh==14?fin(t,T,.5):1,()=>imp(x,'HOW IT WORKS',960,215,96,CREAM));
 const a1=sh==14?fin(t,T+.15,.5):1,a2=sh==15?fin(t,T+.05,.5):sh>15?1:0,a3=sh==16?fin(t,T+.05,.5):0;
 const c1=sh==14?AMB:sh==15?mixC(AMB,TEAL,fin(t,T,.6)):TEAL,c2=sh==15?AMB:sh==16?mixC(AMB,TEAL,fin(t,T,.6)):TEAL,c3=AMB;
 blk(x,110,400,400,120,'SLACK',c1,a1);blk(x,110,560,400,120,'OTHER APPS',c1,a1);tagP(x,310,690,'CONNECTED',TEAL,a1,34);
 arrow(x,520,700,480,CREAM,a2);
 if(a2>0){blk(x,710,480,400,190,'SET TO UPDATE',c2,a2,40);withIn(x,910,430,a2,()=>{const tw=84,th=42;rr(x,910-tw/2,422-th/2,tw,th,th/2,TEAL,null);x.fillStyle=CREAM;x.beginPath();x.arc(910+tw/2-th/2,422,th/2-6,0,7);x.fill()})}
 arrow(x,1120,1300,480,CREAM,a3);
 if(a3>0){blk(x,1310,480,500,160,'ONE SHARED PAGE',c3,a3,44);
  withIn(x,1560,760,a3,()=>{for(let k=0;k<3;k++)teamFig(x,TEAM[k],1410+k*160,739,.6,t,0,-.6);x.fillStyle='#7A4038';x.fillRect(1310,860,500,34);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(1310,860,500,4)})}
 comp([['board',0]])}

// ---------- the quote (shots 17, 18) ----------
function drawQuote(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.25,960,560);
 const H1="OPENAI'S OWN EXAMPLE",w1=impW(x,H1,84)+120;
 withIn(x,960,260,sh==17?fin(t,T+.05,.55):1,()=>{rr(x,960-w1/2,190,w1,140,40,'#2A1F42',AMB,6);imp(x,H1,960,262,84,AMB)});
 const S1='ChatGPT release notes · Nov 20, 2026',sw=txt_w(x,S1,36,'800')+90;
 withIn(x,960,385,sh==17?fin(t,T+.6,.5):1,()=>{pill(x,960,385,sw,60,'rgba(27,20,48,.92)');txt(x,S1,960,388,36,CREAM,'center','800')});
 const Q=['"a project plan that','stays current with decisions','from Slack"'],qw=Math.max(...Q.map(s=>txt_w(x,s,64)))+180;
 withIn(x,960,700,sh==17?fin(t,T+1.0,.55):1,()=>{rr(x,960-qw/2,525,qw,350,34,PAPER,INKC,6);
  Q.forEach((s,i)=>txt(x,s,960,600+i*88,64,'#1B1430','center','900',sh==17?0:fin(t,T+.1+i*.9,.5)))});
 comp([['board',0]])}

// ---------- the catch (shot 19) ----------
function drawCatch(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.2,960,560);
 withIn(x,960,262,fin(t,T+.05,.55),()=>imp(x,'THE CATCH',960,262,170,AMB));
 const L1='NEEDS VIEW ACCESS + PLUS, PRO,',L2='BUSINESS OR ENTERPRISE WITH SPACE',w1=Math.max(txt_w(x,L1,54),txt_w(x,L2,54))+110;
 withIn(x,960,560,fin(t,T+.5,.55),()=>{rr(x,960-w1/2,456,w1,208,40,'#2A1F42',TEAL,6);txt(x,L1,960,520,54,CREAM,'center','900');txt(x,L2,960,598,54,CREAM,'center','900')});
 const L3="FREE CAN'T OPEN IT · NO PUBLIC LINKS",w3=txt_w(x,L3,52)+110;
 withIn(x,960,800,fin(t,T+1.1,.55),()=>{rr(x,960-w3/2,745,w3,110,55,'#2A1F42',AMB,6);txt(x,L3,960,802,52,AMB,'center','900')});
 comp([['board',0]])}

// ---------- check it: a magnifier over the page (shot 20) ----------
function drawCheck(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.3,800,520);
 const mp=mascot(x,t,cam,{x:470,y:600,look:.6,hands:{r:[237,-44+Math.sin(t*3)*8]},showH:{r:1},mouth:.7});
 table(x);
 withIn(x,1030,500,fin(t,T+.05,.55),()=>pageDraw(x,840,232,.95,{border:TEAL,rows:()=>({a:1,col:TEAL})}));
 const hy=600+(-44+Math.sin(t*3)*8)*1.35,hx=470+237*1.35;
 x.save();x.lineCap='round';x.strokeStyle=INKC;x.lineWidth=22;x.beginPath();x.moveTo(hx,hy);x.lineTo(hx+34,hy-60);x.stroke();x.strokeStyle='#B0705A';x.lineWidth=12;x.stroke();
 x.fillStyle='rgba(255,255,255,.1)';x.beginPath();x.arc(hx+110,hy-130,85,0,7);x.fill();x.strokeStyle=INKC;x.lineWidth=20;x.stroke();x.strokeStyle=AMB;x.lineWidth=10;x.stroke();x.restore();
 tagP(x,1030,150,'CHECK NAMES, DATES, SOURCES',AMB,fin(t,T+.5,.55),38,'#1B1430');
 comp([['board',0]])}

// ---------- the meter "COPIED BY HAND" (lesson L25): screen space, whole numbers 0-12 ----------
function meterBox(x,l,tp,k,v,col,a=1,title=true){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320*k,h=780*k,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,26*k,'rgba(27,20,48,.93)',col,5*k);
 if(title){const fs=Math.min(30,280/txt_w(x,'COPIED BY HAND',30)*30)*k;txt(x,'COPIED BY HAND',cx,tp+46*k,fs,CREAM,'center','900')}
 const n=Math.round(v);imp(x,String(n),cx,tp+(title?150:110)*k,132*k,col);
 const tl=l+118*k,tw=90*k,top=tp+260*k,bot=tp+720*k,ph=bot-top;
 rr(x,tl,top,tw,ph,12*k,'#241A3C',INKC,4*k);
 for(const q of [0,4,8,12]){const y=bot-ph*q/12;x.fillStyle='#C9B8E0';x.fillRect(tl-18*k,y-2*k,18*k,4*k);txt(x,String(q),tl-26*k,y,28*k,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/12);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12*k);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6*k,fh));x.restore()}
 x.restore()}
// value (whole numbers on screen) and colour (amber BEFORE / teal NOW, cross-faded over .5 s) of the meter
const MK=[[ST(3)+.1,0],[ST(3)+2.4,12],[ST(5),12],[ST(5)+.6,0],[ST(8)+.45,0],[ST(8)+.95,1],[ST(8)+1.3,1],[ST(8)+1.8,2],[ST(8)+2.15,2],[ST(8)+2.65,3],[ST(9),3],[ST(10)-.2,3],[ST(10)-.19,12],[ST(10),12],[ST(10)+.5,0]];
const MC=[[0,0],[ST(5),0],[ST(5)+.6,1],[ST(6),1],[ST(6)+.5,0],[ST(10),0],[ST(10)+.5,1],[999,1]];
function meterVal(t,sh){if(sh==9){let n=3;for(let i=0;i<12;i++)if(t>=ST(9)+.1+i*.1+.3)n=Math.max(n,i+1);return n}if(sh==10)return kf(t,[[ST(10),12],[ST(10)+.5,0]]);return kf(t,MK)}
function meterOverlay(t,sh){if(!(sh>=3&&sh<=13))return;const a=sh==3?fin(t,ST(3)+.1,.5):1;meterBox(ctx,1560,170,1,meterVal(t,sh),mixC(AMB,TEAL,kf(t,MC)),a)}

// ---------- side by side + WHAT WE LEARNED (shot 21) ----------
function drawP(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(21),a=fin(t,T+.05,.5),b=fin(t,T+.3,.5);
 x.save();x.globalAlpha=a;rr(x,90,250,840,540,30,'#2A1F42',AMB,6);x.restore();x.save();x.globalAlpha=b;rr(x,990,250,840,540,30,'#2A1F42',TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,300,300,200,56,AMB);txt(x,'BEFORE',300,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1200,300,150,56,TEAL);txt(x,'NOW',1200,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=a;pageDraw(x,268,365,.72,{border:AMB,rows:()=>({a:1,col:AMB})});x.restore();
 x.save();x.globalAlpha=b;pageDraw(x,1168,365,.72,{border:TEAL,rows:()=>({a:0,col:TEAL})});x.restore();
 meterBox(x,115+576+30,285,.58,12,AMB,a,true);meterBox(x,1015+576+30,285,.58,0,TEAL,b,true);
 {const S='WHAT WE LEARNED',fs=84,w=impW(x,S,fs)+120,c=fin(t,T+.1,.6);if(c>0){x.save();x.translate(960,150);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-60,w,120,40,'#2A1F42',AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}}
 comp([['board',0]])}

// ---------- the finished page, switch on (shot 22) ----------
function drawFinal(t,sh,cam){const x=layer('board',cam),T=ST(22);bgDusk(x,.45,960,560);
 mascot(x,t,cam,{x:470,y:690,s:1.2,look:.5,mouth:1});
 robotFig(x,1420,890,1.0,t,{smile:30});
 table(x,830);robotLabel(x,1420,790);
 withIn(x,960,606,fin(t,T+.05,.55),()=>pageDraw(x,820,400,.74,{border:TEAL,rows:()=>({a:1,col:TEAL})}));
 switchCard(x,960,366,.74,1,fin(t,T+.05,.55));
 comp([['board',0]])}

// ---------- the mascot big (shot 23) ----------
function drawMascot(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);flatCap(x,p);
 const T0=ST(23)+.9,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,430);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 // the comment button (speech bubble, amber, tail toward the mascot), eases in on the word "comment"; nothing under the buttons (lesson L24)
 {const S='COMMENT: WHAT NEXT?',fs=50,w=txt_w(x,S,fs,'900')+110,h=150,C0=ST(23)+1.65,cc=fin(t,C0,.55),pu=1+.035*Math.sin((t-C0)*7);
  if(cc>0){x.save();x.translate(1430,700);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
   x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w/2,-h/2,w,h,h/2);x.fill();x.stroke();
   x.beginPath();x.moveTo(-w/2+90,h/2-4);x.lineTo(-w/2+30,h/2+52);x.lineTo(-w/2+160,h/2-4);x.closePath();x.fill();x.stroke();x.fillRect(-w/2+98,h/2-12,54,14);
   txt(x,S,0,4,fs,'#1B1430','center','900');x.restore()}}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size,wref=s){const v=fin(t,a,.5)*(b?1-fin(t,b,.3):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(wref).width+size*2.2;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);pill(ctx,X,y,w,size*2.2,'rgba(27,20,48,.88)',v);txt(ctx,s,X,y+2,size,col,'center','800',v);ctx.restore()}
function card2(t,a,b,X,y,l1,l2,col,size){const v=fin(t,a,.5)*(b?1-fin(t,b,.3):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=Math.max(ctx.measureText(l1).width,ctx.measureText(l2).width)+size*2.2,h=size*3.3;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);
 ctx.save();ctx.globalAlpha*=v;ctx.fillStyle='rgba(27,20,48,.9)';ctx.beginPath();ctx.roundRect(X-w/2,y-h/2,w,h,h/4);ctx.fill();ctx.restore();txt(ctx,l1,X,y-size*.65,size,col,'center','800',v);txt(ctx,l2,X,y+size*.7,size,CREAM,'center','800',v);ctx.restore()}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const tw=x.measureText('ChatGPT Space').width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,'ChatGPT Space',58,54,32,AMB,'left','800');txt(x,' ·',58+tw,54,32,CREAM,'left','800');pill(x,58+tw+dw+50,52,78,42,RED);txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}
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
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='CHATGPT SPACE';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,CREAM);put(TOPIC,W/2,Yt+sz*.2,sz,AMB);
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=800,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(6)+.05,out(10),'BEFORE',AMB);tab(t,ST(10)+.05,out(21),'NOW',TEAL);
 if(sh==2){const n=Math.min(12,Math.max(1,1+Math.floor((t-(ST(2)+.15))/.07)));card(t,ST(2)+.15,out(3),LX,LY,n+(n==1?' DECISION':' DECISIONS'),CREAM,50,'12 DECISIONS')}
 card(t,ST(5)+.1,out(6),LX,LY,'1 PLAN · 12 DECISIONS',CREAM,48);
 card(t,ST(9)+1.1,out(10),LX,LY,'12 BY HAND',AMB,50);
 card2(t,ST(10)+.2,out(11),LX,LY-5,'CHATGPT SPACE · PLUS · 18+','ROLLING OUT SINCE NOV 20, 2026',AMB,42);
 card(t,ST(21)+.8,out(22),960,890,'SAME 12 DECISIONS',CREAM,52);
 if(inS(t,22,23)){const fo=1-fin(t,out(23),.3),dm=fin(t,ST(22)+.15,.5);ctx.save();ctx.globalAlpha=.22*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,ST(22)+.1,.5)*fo;if(v>0){const S1='12 DECISIONS,',S2='0 COPIED BY HAND',f1=78,f2=78;ctx.save();ctx.font=`800 ${f1}px Arial`;const w=Math.max(ctx.measureText(S1).width,ctx.measureText(S2).width)+140;ctx.restore();
   ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.92)';ctx.beginPath();ctx.roundRect(W/2-w/2,100,w,190,40);ctx.fill();ctx.restore();
   txt(ctx,S1,W/2,153,f1,CREAM,'center','800',v);txt(ctx,S2,W/2,236,f2,AMB,'center','800',fin(t,ST(22)+.6,.5)*fo)}}}

// ---------- cameras: a slow push on the flat board ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:23},()=>push()));
for(const i of [1,5,10,17,19,20,22])CAM[i]=push(1,1.08);
FILM={dur:58.5,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='D')drawDesk(o,s,cam);else if(pl=='B')drawBefore(o,s,cam);else if(pl=='S')drawScore(o,s,cam);else if(pl=='U')drawTeam(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='Q')drawQuote(o,s,cam);else if(pl=='C')drawCatch(o,s,cam);else if(pl=='H')drawCheck(o,s,cam);else if(pl=='P')drawP(o,cam);else if(pl=='F')drawFinal(o,s,cam);else drawMascot(o,s,cam);overlay(o,s)}
  const fo=seg(o,58.5-.45,58.5-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, page sounds ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(let k=0;k<12;k+=2)say(ST(2)+.15+k*.07+.25,'tick');
for(const t of [ST(1)+.5,ST(2)+.15,ST(4)+.3,ST(5)+.1,ST(6)+.3,ST(7)+.1,ST(7)+1.0,ST(9)+1.1,ST(10)+.2,ST(11)+.05,ST(12)+.6,ST(14)+.15,ST(15)+.05,ST(16)+.05,ST(17)+.05,ST(17)+.6,ST(17)+1.0,ST(19)+.05,ST(19)+.5,ST(19)+1.1,ST(20)+.5,ST(21)+.05,ST(21)+.8,ST(22)+.1,ST(23)+.9,ST(23)+1.65])say(t,'tick');
for(const t of [ST(7)+.5,ST(8)+.05,ST(8)+.9,ST(8)+1.75,ST(13)+.1,ST(13)+1.0,ST(13)+1.9])say(t,'slide');
for(let k=0;k<12;k+=3)say(ST(3)+.1+k*.16,'slide');
for(let k=0;k<12;k+=3)say(ST(9)+.1+k*.1,'paper');
say(ST(4)+.5,'stamp');say(ST(12)+.6,'stamp');say(ST(19)+.05,'stamp');
