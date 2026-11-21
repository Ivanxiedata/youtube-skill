// Episode 0: DeepSeek Super-agent vs one coding-agent session per person. 60 s, voice from tts.py (vo.wav at .5).
// One studio world (hero at a desk, ten monitors) plus one diagram board. Times are film seconds (voice + .5).
const DESK_Y=780,HERO_P=[430,560],MON=[];
for(let i=0;i<5;i++)MON.push({cx:i?820+i*235:820,by:DESK_Y,w:i?190:280,h:i?124:180,row:0});
for(let i=0;i<5;i++)MON.push({cx:880+i*215,by:470,w:170,h:110,row:1});
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));

// ---------- studio ----------
function studioWall(x){let g=x.createLinearGradient(0,0,0,760);g.addColorStop(0,'#33255A');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 g=x.createRadialGradient(1100,300,30,1100,300,900);g.addColorStop(0,'rgba(255,196,130,.22)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 x.fillStyle='#237F80';x.fillRect(-800,700,W+2400,600);x.fillStyle='#2F9A98';x.fillRect(-800,692,W+2400,10);
 x.fillStyle='#241736';x.fillRect(690,470,1100,16);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(690,486,1100,10)}
function desk(x){let g=x.createLinearGradient(0,DESK_Y,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(200,DESK_Y,1700,500);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(200,DESK_Y,1700,4)}
// st: a appear 0..1, work 0..1 (scrolling code), wait 0..1 (needs you), hot 0..1 (you are watching it), dim 0..1, term (how-beat text)
function monitor(x,m,i,t,st){const a=st.a;if(a<=0)return;x.save();x.globalAlpha=a;const {cx,by,w,h}=m,top=by-26-h,l=cx-w/2;
 x.fillStyle='#1B1430';x.fillRect(cx-7,by-28,14,28);x.beginPath();x.ellipse(cx,by-2,w*.2,6,0,0,7);x.fill();
 if(st.hot>0){x.save();x.globalAlpha=a*st.hot;x.strokeStyle='#FFC66E';x.lineWidth=6;x.beginPath();x.roundRect(l-7,top-7,w+14,h+14,12);x.stroke();x.restore()}
 x.fillStyle='#1B1430';x.beginPath();x.roundRect(l,top,w,h,8);x.fill();
 const sx=l+7,sy=top+7,sw=w-14,sh=h-14;x.fillStyle=st.dim>0?`rgb(${20+st.dim*14},${18+st.dim*14},${56-st.dim*16})`:'#141238';x.fillRect(sx,sy,sw,sh);
 x.save();x.beginPath();x.rect(sx,sy,sw,sh);x.clip();
 if(st.work>0){x.globalAlpha=a*st.work*(1-st.dim*.7);const n=7,gap=sh/n;for(let k=0;k<n+1;k++){const y=sy+((k*gap+t*22*(1+hash(i,1))+i*9)%(sh+gap))-gap/2;x.fillStyle=k%3?'#2DB2AE':'#FF8F7A';x.fillRect(sx+8+hash(i,k)*10,y,sw*(.25+.5*hash(i+3,k)),Math.max(3,gap*.32))}}
 if(st.wait>0){x.globalAlpha=a*st.wait;if(Math.floor(t*2.2+i*.3)%2==0){x.fillStyle='#F8E9CC';x.fillRect(sx+10,sy+sh*.5-8,10,16)}}
 if(st.term)st.term(x,sx,sy,sw,sh);
 x.restore();
 if(st.wait>0){const b=1+Math.sin(t*4+i)*.05*st.wait;x.save();x.globalAlpha=a*st.wait;x.translate(cx+w*.32,top-16);x.scale(b,b);pill(x,0,0,46,40,'#FFC66E');x.fillStyle='#FFC66E';x.beginPath();x.moveTo(-8,16);x.lineTo(0,28);x.lineTo(6,16);x.fill();txt(x,'?',0,1,28,'#1B1430','center','900');x.restore()}
 if(st.badge){const [lab,col,ba]=st.badge;if(ba>0){x.save();x.globalAlpha=a*ba;const bw=lab.length*13+40;pill(x,cx,top-24-(1-ba)*10,bw,40,col);txt(x,lab,cx,top-23-(1-ba)*10,22,'#1B1430','center','800');x.restore()}}
 x.restore()}
function monState(i,t){const m=MON[i],s={a:i?fin(t,2.85+i*.12,.35):1,work:0,wait:0,hot:0,dim:0,badge:null,term:null};
 // hook: working; before: every session waits on you; "three to five": the desk row is watched, the back row goes unwatched
 if(t<7.6)s.work=1;else if(t<38.4){s.wait=1;s.hot=m.row==0?fin(t,14.6,.5):0;s.dim=m.row==1?fin(t,14.6,.6):0}
 else{s.work=1;if(i==3)s.badge=['decide?','#FFC66E',fin(t,42.9)*(1-fin(t,45.4))];if(i==7)s.badge=['ready','#2DB2AE',fin(t,44.4)]}
 if(i==0&&t>=46.4&&t<55.4){s.work=0;s.term=termAt(t)}
 return s}
// the README's own setup line, typed out
function termAt(t){return (x,sx,sy,sw,sh)=>{const pad=12;x.globalAlpha=1;x.fillStyle='#0E0C24';x.fillRect(sx,sy,sw,sh);x.fillStyle='#2A1F42';x.fillRect(sx,sy,sw,22);
 for(let k=0;k<3;k++){x.fillStyle=['#FF6B5E','#FFC66E','#2DB2AE'][k];x.beginPath();x.roundRect(sx+10+k*14,sy+7,8,8,4);x.fill()}
 txt(x,'github.com/deepseek-ai/dsh-superagent-prototype',sx+pad,sy+40,9,'#F8E9CC','left','700',fin(t,46.8));
 txt(x,'open source  ·  MIT  ·  research prototype',sx+pad,sy+58,9.5,'#2DB2AE','left','700',fin(t,47.6));
 txt(x,'one GitHub repo  ·  runs on DeepSeek Harness',sx+pad,sy+74,9.5,'#C9B8E0','left','600',fin(t,48.8));
 const L1='> Read SETUP.md in this repository',L2='  and set up dsh-superagent with me.',n=Math.floor(clamp((t-50.9)/3.2)*(L1.length+L2.length));
 const s1=L1.slice(0,n),s2=L2.slice(0,Math.max(0,n-L1.length));
 txt(x,s1,sx+pad,sy+104,10.5,'#FFC66E');txt(x,s2,sx+pad,sy+120,10.5,'#FFC66E');
 if(t>50.4&&Math.floor(t*2.4)%2==0){x.font='700 10.5px Arial';const on2=n>L1.length,cw=x.measureText(on2?s2:s1).width;x.fillStyle='#FFC66E';x.fillRect(sx+pad+cw+2,sy+(on2?114:98),6,12)}}}
function heroPose(t){return {x:HERO_P[0],y:HERO_P[1],s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[1.7,5.2,9.6,13.1,40.1,43.8,57.4]),
  look:kf(t,[[0,.6],[2.9,.6],[3.3,.9],[7.7,.9],[8.4,.5],[9.4,.95],[10.4,.55],[11.4,.95],[12.4,.6],[13.4,.95],[38.4,.9],[43,.95],[44.5,.8]]),
  lookY:kf(t,[[0,.35],[2.9,.35],[3.4,-.2],[6.5,-.2],[7.7,.3],[38.4,.3],[43,.25],[44.5,-.2]]),
  brow:kf(t,[[0,.1],[2.9,.1],[3.4,.7],[38.4,.6],[39.2,.1]]),sad:kf(t,[[0,0],[3,0],[3.6,.55],[38.4,.6],[39.2,0]]),
  mouth:kf(t,[[0,.65],[2.9,.65],[3.5,-.3],[38.4,-.35],[39.4,.7],[60,.7]]),tilt:kf(t,[[0,0],[3,0],[3.6,-.05],[38.4,-.05],[39.4,.04]])}}
function drawStudio(t,cam){let x=layer('wall',cam,1);studioWall(x);for(let i=5;i<10;i++)monitor(x,MON[i],i,t,monState(i,t));
 const a=layer('lamp',cam);pendant(a,520,t,.08);pendant(a,1500,t,.08);
 const h=layer('hero',cam);actor(h,'hero',HERO,heroPose(t),cam);
 const f=layer('fg',cam);desk(f);for(let i=0;i<5;i++)monitor(f,MON[i],i,t,monState(i,t));
 comp([['wall',cam.b[0]],['lamp',0],['hero',0],['fg',cam.b[2]]])}

// ---------- diagram board: brief.json "architecture", by hand (the diagram feature will generate this) ----------
const BN={you:[230,540,'You'],s1:[650,330,'Agent session 1'],s2:[650,540,'Agent session 2'],s3:[650,750,'Agent session 3'],
 team:[1090,260,'Team'],chat:[1090,540,'Chat + GitHub'],router:[1390,540,'Router agent'],w1:[1700,330,'Worker 1'],w2:[1700,540,'Worker 2'],w3:[1700,750,'Worker 3'],pr:[1390,860,'Result (PR)']};
const NEW={router:1,w1:1,w2:1,w3:1},CH={you:HERO,team:WOMAN,router:FRIEND,w1:GUEST_A,w2:GUEST_B,w3:GUEST_A};
const BW=270,BH=96;
const nodeIn={router:20.3,chat:21.4,team:21.7,w1:27.6,w2:32.7,w3:33.1,pr:36.6};
function edgePt(a,b){const A=BN[a],B=BN[b],dx=B[0]-A[0],dy=B[1]-A[1],k=Math.min(Math.abs(dx)>1?(BW/2+8)/Math.abs(dx):9,Math.abs(dy)>1?(BH/2+8)/Math.abs(dy):9);return [[A[0]+dx*k,A[1]+dy*k],[B[0]-dx*k,B[1]-dy*k]]}
function arrow(x,a,b,p,lab,col='#C9B8E0',wd=4){if(p<=0)return;const [P,Q]=edgePt(a,b),E=[lerp(P[0],Q[0],p),lerp(P[1],Q[1],p)],an=Math.atan2(Q[1]-P[1],Q[0]-P[0]);
 x.save();x.globalAlpha*=Math.min(1,p*4);x.strokeStyle=col;x.lineWidth=wd;x.lineCap='round';x.beginPath();x.moveTo(P[0],P[1]);x.lineTo(E[0],E[1]);x.stroke();
 x.fillStyle=col;x.beginPath();x.moveTo(E[0]+Math.cos(an)*4,E[1]+Math.sin(an)*4);x.lineTo(E[0]-Math.cos(an-.45)*20,E[1]-Math.sin(an-.45)*20);x.lineTo(E[0]-Math.cos(an+.45)*20,E[1]-Math.sin(an+.45)*20);x.fill();x.restore();
 if(lab){const M=[(P[0]+Q[0])/2,(P[1]+Q[1])/2],vert=Math.abs(Q[0]-P[0])<Math.abs(Q[1]-P[1]);txt(x,lab,M[0]+(vert?14:0),M[1]-(vert?0:20),20,col,vert?'left':'center','600',ease(seg(p,.6,1)))}}
function token(x,a,b,u,lab,col){if(u<=0||u>=1)return;const [P,Q]=edgePt(a,b),e=easeIO(u),al=Math.min(1,u*6,(1-u)*6);x.save();x.globalAlpha*=al;const X=lerp(P[0],Q[0],e),Y=lerp(P[1],Q[1],e);pill(x,X,Y,lab.length*12+28,32,col);txt(x,lab,X,Y+1,18,'#1B1430','center','800');x.restore()}
function node(x,id,t){const a=nodeIn[id]?fin(t,nodeIn[id],.5):1;if(a<=0)return;const [X,Y,lab]=BN[id],nw=NEW[id];x.save();x.globalAlpha=a;const sc=lerp(.85,1,a);x.translate(X,Y);x.scale(sc,sc);
 x.fillStyle='#2A1F42';x.beginPath();x.roundRect(-BW/2,-BH/2,BW,BH,16);x.fill();x.strokeStyle=nw?'#FFC66E':'#6E5D8E';x.lineWidth=nw?7:3;x.stroke();
 const c=CH[id];let tx=0;if(c){x.save();x.beginPath();x.roundRect(-BW/2,-BH/2,BW,BH,16);x.clip();drawPerson(x,c,{x:-BW/2+48,y:-BH/2+32,s:.16,face:1,noLegs:true,breath:t*2+X,blink:blinkAt(t,[X%7+1,X%5+19,X%9+30]),mouth:.6,look:.5,lookY:.4});x.restore();tx=28}
 txt(x,lab,tx,2,c?28:26,'#F8E9CC','center','700');
 if(nw){pill(x,BW/2-30,-BH/2,64,28,'#FFC66E');txt(x,'NEW',BW/2-30,-BH/2+1,16,'#1B1430','center','900')}
 if(id[0]=='w'){const on=fin(t,nodeIn[id]+.8,.6);x.fillStyle='rgba(45,178,174,.25)';x.fillRect(-BW/2+92,BH/2-20,BW-118,7);x.fillStyle='#2DB2AE';x.fillRect(-BW/2+92,BH/2-20,(BW-118)*on*(.25+.75*((t*.23+X*.001)%1)),7)}
 if(id=='w1'){txt(x,'own session',-BW/2+92,BH/2+26,19,'#2DB2AE','left','700',fin(t,30.4));txt(x,'own folder',-BW/2+92,BH/2+50,19,'#2DB2AE','left','700',fin(t,31.7))}
 if(id=='router'){const q=fin(t,35,.5)*(1-fin(t,36.9,.4));txt(x,'quiet…',0,-BH/2-26,22,'#C9B8E0','center','700',q)}
 x.restore()}
function drawBoard(t,cam){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1390,540,40,1390,540,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=120;y<960;y+=28)x.fillRect(888,y,4,14); // not setLineDash: its anti-aliasing differs between renders
 txt(x,'BEFORE',90,120,40,'#C9B8E0');txt(x,'you drive every step',90,170,28,'#C9B8E0','left','600');
 txt(x,'SUPER-AGENT',960,120,40,'#FFC66E');txt(x,'many workers run at once',960,170,28,'#FFC66E','left','600',fin(t,32.7));
 for(const s of ['s1','s2','s3'])arrow(x,'you',s,1,'every step');
 const cyc=(t*.55)%3,ci=Math.floor(cyc);token(x,'you',['s1','s2','s3'][ci],cyc-ci,'step','#F8E9CC');
 arrow(x,'team','chat',fin(t,21.9,.5),'asks');arrow(x,'chat','router',fin(t,21.6,.5),'');
 for(const [w,t0] of [['w1',27.2],['w2',32.5],['w3',32.9]])arrow(x,'router',w,fin(t,t0,.5),'');
 arrow(x,'w3','pr',fin(t,36.6,.5),'');arrow(x,'pr','chat',fin(t,37,.6),'only when ready','#2DB2AE',5);
 token(x,'team','chat',seg(t,24,25),'ask','#F8E9CC');token(x,'chat','router',seg(t,25,26),'ask','#F8E9CC');
 token(x,'router','w1',seg(t,26.2,27.6),'ticket','#FFC66E');token(x,'router','w2',seg(t,31.9,32.9),'ticket','#FFC66E');token(x,'router','w3',seg(t,32.3,33.3),'ticket','#FFC66E');
 for(const id in BN)node(x,id,t);
 comp([['board',0]])}

// ---------- captions on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a)*(b?1-fin(t,b,.35):1);if(v<=0)return;pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 card(t,4.3,7.0,110,620,'DeepSeek Super-agent','#FFC66E',46);
 card(t,14.9,17.0,110,720,'one person watches 3–5 at once','#F8E9CC',38);
 card(t,38.9,46.0,110,780,'it asks only when you’re needed','#F8E9CC',38);
 card(t,55.8,0,960,900,'Next: what is a coding-agent session?','#FFC66E',40)}

FILM={dur:60,cuts:[0,84,222,360,522,705,972,1152,1392,1662,1800],fadeIn:.5,fadeOut:.6,
 cam(s,u,t){const e=ease(u),m0=MON[0];return [
  {x:lerp(1060,1080,e),y:560,z:.86,b:[2,0,0]},                           // 0 wide: hero and one monitor
  {x:lerp(1080,900,e),y:lerp(560,520,e),z:lerp(.86,1.05,e),b:[2,0,0]},   // 1 ten monitors appear, push in
  {x:lerp(900,960,e),y:480,z:lerp(1.05,1.12,e),b:[2,0,0]},               // 2 every session waits on you
  {x:lerp(1000,1100,e),y:lerp(500,540,e),z:lerp(1.0,.84,e),b:[2,0,0]},   // 3 pull out: only 3-5 get watched
  {x:lerp(560,980,e),y:lerp(560,540,e),z:lerp(1.25,1.02,e),b:[0,0,0]},   // 4 from "before" across to the new side
  {x:lerp(1050,1380,e),y:lerp(540,560,e),z:lerp(1.02,1.42,e),b:[0,0,0]}, // 5 push to router and worker
  {x:lerp(1300,960,e),y:540,z:lerp(1.3,1.0,e),b:[0,0,0]},                // 6 pull back: many workers, result
  {x:lerp(1120,1040,e),y:540,z:lerp(.9,.86,e),b:[2,0,0]},                // 7 studio: everything runs by itself
  {x:m0.cx+lerp(-10,10,e),y:m0.by-26-m0.h/2+4,z:lerp(5.2,5.5,e),b:[6,0,0]}, // 8 close-up: how to start
  {x:lerp(1040,1000,e),y:lerp(540,560,e),z:lerp(.92,.84,e),b:[2,0,0]}    // 9 outro
 ][s]},
 draw(t,cam,s){if(s>=4&&s<=6)drawBoard(t,cam);else drawStudio(t,cam);overlay(t)},
 plants(){return {}}};
for(const t of [2.85,20.3,27.6,32.7,33.1,36.6])say(t,'pop');say(42.9,'ready');say(44.4,'ready');
