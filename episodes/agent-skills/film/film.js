// Episode: Agent Skills, told through a kitchen. You are the head chef; your AI agent is the cook.
// Before: every rule sits in one giant binder (the one big prompt) and the cook rereads all of it before every order.
// New: a recipe box. The cook reads only the tabs (name + when to use it) and pulls one card when an order matches.
// 60 s. Voice from tts.py (vo.wav laid in at .08 s), so every time below is voice time + .08.
// Three places on one clock: the kitchen (the story), the studio (today), the board (BEFORE vs AGENT SKILLS).
// Helpers txt/pill/bubble/fin/card and the studio set are reused from episodes/deepseek-super-agent/film/film.js.
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function bubble(x,X,Y,s,col,a,size=18){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`800 ${size}px Arial`;pill(x,X,Y,x.measureText(s).width+size*1.6,size*1.9,col);txt(x,s,X,Y+1,size,'#1B1430','center','800');x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const F=f=>f/30; // a state change is timed on a cut frame, so it never shows as a one-frame pop
// Cut 2 opens on a title card and has a shorter hook (the topic is spoken first), so everything from the end of the hook on
// is 29 frames earlier than cut 1. The scenes below keep cut 1's clock: TO() maps the film's clock onto it from HK on.
const S=29/30,HK=262/30,TO=t=>{if(t<HK-1e-6)return t;const f=Math.round(t*30);return Math.abs(t*30-f)<1e-6?(f+29)/30:t+S}; // on a cut frame the result is exactly F(n), as in cut 1

// ---------- costumes: drawn after actor(), in the head's own transform, so the engine file stays untouched ----------
function headT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}
 x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
// the head chef's tall hat: the mascot's costume in this episode
function toque(x,p){x.save();headT(x,p);x.fillStyle='#FFF6E6';
 x.beginPath();x.moveTo(-84,-112);x.bezierCurveTo(-158,-146,-124,-238,-54,-214);x.bezierCurveTo(-34,-266,40,-266,58,-214);x.bezierCurveTo(126,-238,158,-146,84,-112);x.closePath();x.fill();
 x.beginPath();x.roundRect(-84,-128,168,64,10);x.fill();
 x.strokeStyle='#D9C7B0';x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(-74,-124);x.lineTo(74,-124);x.moveTo(-34,-136);x.quadraticCurveTo(-44,-176,-52,-204);x.moveTo(36,-136);x.quadraticCurveTo(46,-176,54,-204);x.stroke();x.restore()}
// the cook's flat cap, in the "working" teal
function cap(x,p){x.save();headT(x,p);x.fillStyle='#2DB2AE';x.beginPath();x.moveTo(-88,-56);x.quadraticCurveTo(-92,-150,0,-150);x.quadraticCurveTo(92,-150,88,-56);x.closePath();x.fill();
 x.fillStyle='#187E86';x.beginPath();x.roundRect(-90,-74,180,24,8);x.fill();x.restore()}

// ---------- kitchen: head chef (you) on the left, the cook on the right, one counter ----------
const CY=780,T_FIX=F(528),BX=1010,TABN=['EGG','SOUP','CAKE','RICE','PIE'];
const tabX=i=>BX-112+i*56;
function ticket(x,X,Y,head,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle='#17141F';x.fillRect(X-8,Y-8,16,12);x.fillStyle='#F8E9CC';x.fillRect(X-38,Y,76,108);x.fillStyle=col;x.fillRect(X-38,Y,76,30);
 txt(x,head,X,Y+16,17,'#1B1430','center','900');x.fillStyle='rgba(27,20,48,.35)';for(let k=0;k<4;k++)x.fillRect(X-28,Y+44+k*15,k%2?40:56,5);x.restore()}
function kitWall(x,t){let g=x.createLinearGradient(0,0,0,CY);g.addColorStop(0,'#2E2152');g.addColorStop(1,'#56305E');x.fillStyle=g;x.fillRect(-900,-600,W+2600,1400);
 g=x.createRadialGradient(560,380,30,560,380,900);g.addColorStop(0,'rgba(255,196,130,.26)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+2600,1400);
 x.fillStyle='rgba(248,233,204,.05)';for(let i=0;i<36;i++)for(let j=0;j<3;j++)x.fillRect(-860+i*104+(j%2)*52,486+j*74,96,66);
 x.fillStyle='#241736';x.fillRect(-900,CY-4,W+2600,900);
 // the shelf: jars, and after the fix, the retired binder
 x.fillStyle='#241736';x.fillRect(560,232,480,14);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(560,246,480,8);
 [[940,'#2DB2AE',64],[996,'#FFC66E',46]].forEach(([X,c,h])=>{x.globalAlpha=.55;x.fillStyle=c;x.fillRect(X-18,232-h,36,h);x.globalAlpha=1;x.fillStyle='#17141F';x.fillRect(X-20,224-h,40,8)});
 if(t>=T_FIX){x.fillStyle='#8E2F2C';x.beginPath();x.roundRect(620,164,262,68,6);x.fill();x.fillStyle='#F4EBDD';x.fillRect(650,174,226,48);
  x.fillStyle='rgba(60,40,70,.2)';for(let y=180;y<220;y+=7)x.fillRect(650,y,226,2);txt(x,'ALL THE RULES',763,199,20,'#6E3A44','center','900')}
 // the order rail
 x.fillStyle='#C9B8E0';x.fillRect(1400,326,900,7);
 if(t<T_FIX){ticket(x,1450,333,'1 EGG','#FFC66E');for(let k=1;k<4;k++){const a=fin(t,16.3+(k-1)*.4,.2);ticket(x,1450+k*92,333-(1-a)*30,'ORDER','#C9B8E0',a)}}
 else if(t>=F(765))ticket(x,lerp(2150,1450,ease(seg(t,25.6,26.05))),333,'SOUP','#FFC66E')}
function counter(x){const g=x.createLinearGradient(0,CY,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(-900,CY,W+2600,700);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(-900,CY,W+2600,4)}
// before: 500 pages, open on the counter, and the cook keeps turning them
function bigBinder(x,t){const L=850,R=1150,T=CY-150,m=1000;
 x.fillStyle='#8E2F2C';x.beginPath();x.roundRect(L-12,T+8,R-L+24,CY-T-8,8);x.fill();x.fillStyle='#F4EBDD';x.fillRect(L,T,R-L,CY-T-12);
 x.fillStyle='rgba(60,40,70,.16)';for(let y=T+10;y<CY-16;y+=7)x.fillRect(L,y,R-L,2);
 x.fillStyle='#FFF6E6';for(const d of [-1,1]){x.beginPath();x.moveTo(m,T+6);x.quadraticCurveTo(m+d*80,T-30,m+d*156,T-8);x.lineTo(m+d*156,T+6);x.lineTo(m,T+18);x.fill()}
 x.fillStyle='rgba(27,20,48,.28)';for(let k=0;k<3;k++){x.fillRect(m-132,T-10+k*5-k*k,96,3);x.fillRect(m+36,T-10+k*5-k*k,96,3)}
 const a=((t*1.6)%1)*Math.PI,c=Math.cos(a),s=Math.sin(a);x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(m,T+6);x.quadraticCurveTo(m+c*80,T-s*84-14,m+c*152,T-s*100-6);x.lineTo(m+c*152,T-s*100+6);x.lineTo(m,T+18);x.fill();
 rr(x,m-128,T+44,256,74,10,'#1B1430');txt(x,'ALL THE RULES',m,T+68,26,'#FFC66E','center','900');txt(x,'500 pages',m,T+98,22,'#F8E9CC','center','700')}
// after: a recipe box. Each card has a tab: the recipe's name.
const pull=t=>t<45?ease(seg(t,26.95,27.8)):0;
function soupCard(x,t){const P=pull(t),sc=lerp(1,1.35,P);x.save();x.translate(lerp(tabX(1)+43,1075,P),lerp(CY-8,CY-185,P));x.rotate(.1*P);x.scale(sc,sc);
 x.fillStyle='#FFF6E6';x.fillRect(-70,-120,140,120);x.beginPath();x.roundRect(-70,-152,54,34,[8,8,0,0]);x.fill();txt(x,'SOUP',-43,-134,15,'#1B1430','center','900');
 x.fillStyle='rgba(27,20,48,.3)';for(let k=0;k<5;k++)x.fillRect(-56,-100+k*18,k%2?84:108,6);x.restore()}
function recipeBox(x,t){const e=seg(t,T_FIX+.03,T_FIX+.36),dy=-380*(1-e*e),P=pull(t),dim=t<45?lerp(1,.38,fin(t,27.6,.5)):1;
 const hi=t>=23.8&&t<25.4?Math.floor((t-23.8)/.32)%5:t>=F(1680)&&t<F(1720)?Math.floor((t-56)/.26)%5:-1;
 x.save();x.translate(0,dy);
 x.fillStyle='#E9DCC6';x.fillRect(BX-140,CY-128,280,60);
 TABN.forEach((s,i)=>{if(i==1&&P>0)return;const u=t>=30?1:ease(seg(t,19.7+i*.3,19.95+i*.3));if(u<=0)return;x.save();x.globalAlpha=dim;x.fillStyle=i==1?'#FFF6E6':'#F4EBDD';x.beginPath();x.roundRect(tabX(i)-26,CY-128-34*u,52,34*u+2,[8,8,0,0]);x.fill();
  if(i==hi){x.strokeStyle='#FFC66E';x.lineWidth=5;x.stroke()}txt(x,s,tabX(i),CY-110,15,'#1B1430','center','900',seg(u,.7,1));x.restore()});
 if(P>0&&P<.45)soupCard(x,t);
 x.fillStyle='#8A4A3A';x.beginPath();x.roundRect(BX-150,CY-96,300,96,[6,6,0,0]);x.fill();x.fillStyle='rgba(255,226,190,.4)';x.fillRect(BX-150,CY-96,300,4);
 rr(x,BX-78,CY-66,156,40,8,'#F4EBDD');txt(x,'RECIPES',BX,CY-45,22,'#6E3A34','center','900');
 if(P>=.45)soupCard(x,t);x.restore()}
// one tab, read aloud: the name, and when to use it
function callout(x,t){if(t<F(648)||t>=F(711))return;const X=1010,Y=452;x.fillStyle='#FFF6E6';x.beginPath();x.moveTo(X-70,Y+84);x.lineTo(tabX(1),CY-166);x.lineTo(X-20,Y+84);x.fill();
 rr(x,X-236,Y-84,472,170,18,'#FFF6E6');txt(x,'name:',X-206,Y-34,26,'#8A6A7A','left','800');txt(x,'soup',X-112,Y-36,46,'#1B1430','left','900');
 const a=fin(t,22.35,.3);txt(x,'use when:',X-206,Y+40,26,'#8A6A7A','left','800',a);txt(x,'soup is ordered',X-70,Y+39,32,'#8E2F2C','left','900',a)}
function stove(x,t){x.fillStyle='#17141F';x.fillRect(1420,CY-8,440,8);
 x.fillStyle='#2A2536';x.beginPath();x.roundRect(1450,CY-36,150,28,[4,4,12,12]);x.fill();x.fillRect(1596,CY-32,92,10);
 if(t<T_FIX){x.fillStyle='#F8E9CC';x.beginPath();x.ellipse(1396,CY-24,17,23,0,0,7);x.fill()} // the one egg, still waiting
 else{x.fillStyle='#FFF6E6';x.beginPath();x.ellipse(1525,CY-37,50,10,0,0,7);x.fill();x.fillStyle='#FFC66E';x.beginPath();x.ellipse(1530,CY-43,16,8,0,0,7);x.fill()}
 x.fillStyle='#6E5D8E';x.beginPath();x.roundRect(1722,CY-92,118,84,[4,4,10,10]);x.fill();x.fillStyle='#8A78AC';x.fillRect(1714,CY-100,134,10);x.fillRect(1772,CY-110,18,10);
 if(t>28)for(let i=0;i<3;i++){const u=((t*.45+i*.37)%1);x.fillStyle=`rgba(248,233,204,${.26*Math.sin(u*Math.PI)*fin(t,28,.6)})`;x.beginPath();x.roundRect(1746+i*30+Math.sin(t*2+i*2)*9,CY-124-u*130,14,40,7);x.fill()}}
function chefPose(t){const ok=t>=T_FIX,end=t>=F(1720);
 return {x:430,y:560,s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[1.2,3.3,10.9,13.6,18.4,24.6,28.2,52.6,58.3,59.4]),
  look:end?.1:.9,lookY:end?.08:.3,brow:ok?.15:.7,sad:ok?0:.55,mouth:end?.95:ok?.7:-.3,tilt:ok?.04:-.05}}
function cookPose(t){const ok=t>=T_FIX;
 return {x:1290,y:575,s:.8,face:-1,noLegs:true,breath:t*2+1,blink:blinkAt(t,[.9,2.9,11.6,15.6,18.8,22.6,24.9,27.7,52.9]),
  look:ok?kf(t,[[17.6,-.8],[25.5,-.8],[25.7,.75],[26.8,.75],[27.1,-.55],[50,-.55],[51,.7]])+(t>23.8&&t<25.4?.1*Math.sin(t*5):0):-.75+.16*Math.sin(t*3.1),
  lookY:ok?kf(t,[[17.6,.7],[25.5,.75],[25.7,-.7],[26.8,-.7],[27.1,.25],[50,.25],[51,.6]]):.75,
  brow:ok?.15:.6,sad:ok?0:.7,mouth:ok?kf(t,[[17.6,.45],[27,.5],[27.6,.85]]):-.45,tilt:ok?-.03:.07}}
function drawKitchen(t,cam){const b=cam.b||[2,0];let x=layer('wall',cam,1);kitWall(x,t);
 const a=layer('lamp',cam);pendant(a,300,t,.06);pendant(a,1240,t,.06);
 const h=layer('hero',cam);toque(h,actor(h,'chef',HERO,chefPose(t),cam));cap(h,actor(h,'cook',FRIEND,cookPose(t),cam));
 const f=layer('fg',cam);counter(f);stove(f,t);if(t<T_FIX)bigBinder(f,t);else{recipeBox(f,t);callout(f,t)}
 comp([['wall',b[0]],['lamp',0],['hero',b[1]||0],['fg',0]])}

// ---------- studio: you, today, and your AI agent's screen ----------
const DESK_Y=780,SCR={cx:1180,w:760,h:450},T_NEW=40;
const RULES=['PDF rules','code review rules','brand voice rules','report rules','email rules','invoice rules','slide rules','legal rules'];
const SKILLS=['pdf-processing','code-review','brand-voice','sales-report','invoices','slides'];
function studioWall(x){let g=x.createLinearGradient(0,0,0,760);g.addColorStop(0,'#33255A');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 g=x.createRadialGradient(1100,300,30,1100,300,900);g.addColorStop(0,'rgba(255,196,130,.22)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 x.fillStyle='#237F80';x.fillRect(-800,700,W+2400,600);x.fillStyle='#2F9A98';x.fillRect(-800,692,W+2400,10)}
function desk(x){let g=x.createLinearGradient(0,DESK_Y,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(200,DESK_Y,1700,500);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(200,DESK_Y,1700,4)}
// before: the prompt is an endless wall of rules and the context is full. After: a short list of skills, and room to work.
function agentScreen(x,t){const {cx,w,h}=SCR,by=DESK_Y,top=by-30-h,l=cx-w/2,old=t<T_NEW;
 x.fillStyle='#1B1430';x.fillRect(cx-9,by-32,18,32);x.beginPath();x.ellipse(cx,by-2,w*.16,7,0,0,7);x.fill();x.beginPath();x.roundRect(l,top,w,h,12);x.fill();
 const sx=l+10,sy=top+10,sw=w-20,sh=h-20,mx=sx+sw-78;x.fillStyle='#141238';x.fillRect(sx,sy,sw,sh);x.save();x.beginPath();x.rect(sx,sy,sw,sh);x.clip();
 if(old){const gap=30,n=RULES.length*6,span=n*gap;
  for(let k=0;k<n;k++){const y=sy+40+((((k*gap-t*95)%span)+span)%span);if(y>sy+sh+20)continue;
   if(k%6==0){pill(x,sx+134,y,220,26,'#FF8F7A');txt(x,RULES[k/6],sx+38,y+1,17,'#1B1430','left','800')}
   else{x.fillStyle='rgba(248,233,204,.5)';x.fillRect(sx+24,y-4,(sw-150)*(.45+.5*hash(k,3)),8)}}
  x.fillStyle='#141238';x.fillRect(sx,sy,sw-96,48);txt(x,'PROMPT',sx+24,sy+26,22,'#F8E9CC','left','800');txt(x,'every rule · every task',sx+134,sy+27,18,'#C9B8E0','left','600')}
 else{txt(x,'SKILLS',sx+24,sy+26,22,'#FFC66E','left','800');txt(x,'names + descriptions only',sx+124,sy+27,18,'#C9B8E0','left','600');
  SKILLS.forEach((s,i)=>{const y=sy+82+i*56;pill(x,sx+129,y,210,34,'#FFC66E');txt(x,s,sx+129,y+1,18,'#1B1430','center','800');x.fillStyle='rgba(201,184,224,.45)';x.fillRect(sx+252,y-5,(sw-390)*(.6+.4*hash(i,7)),10)})}
 const mh=sh-112,f=old?1:.14+.02*Math.sin(t*2);x.fillStyle='rgba(201,184,224,.18)';x.fillRect(mx,sy+62,40,mh);x.fillStyle=old?'#FF6B5E':'#2DB2AE';x.fillRect(mx,sy+62+mh*(1-f),40,mh*f);
 txt(x,'context',mx+20,sy+36,16,'#C9B8E0','center','700');txt(x,old?'FULL':'free',mx+20,sy+sh-26,18,old?'#FF8F7A':'#2DB2AE','center','800');x.restore()}
function heroPose(t){const late=t>=T_NEW,turn=false;
 return {x:430,y:560,s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[6.6,8.9,45.6,47.4]),
  look:late?.85:turn?.12:.9,lookY:late?.2:turn?.05:.25,brow:late?.1:turn?.3:.7,sad:late?0:turn?.1:.55,mouth:late?.75:turn?.5:-.3,tilt:late?.04:-.05}}
function drawStudio(t,cam){let x=layer('wall',cam,1);studioWall(x);
 const a=layer('lamp',cam);pendant(a,520,t,.08);pendant(a,1700,t,.08);
 const h=layer('hero',cam);toque(h,actor(h,'hero',HERO,heroPose(t),cam));
 const f=layer('fg',cam);desk(f);agentScreen(f,t);
 comp([['wall',cam.b?cam.b[0]:2],['lamp',0],['hero',0],['fg',0]])}

// ---------- board: brief.json "architecture", by hand ----------
function newTag(x,X,Y,a=1){pill(x,X,Y,64,28,'#FFC66E',a);txt(x,'NEW',X,Y+1,16,'#1B1430','center','900',a)}
function arrowP(x,P,Q,p,lab,col='#C9B8E0',wd=4){if(p<=0)return;const E=[lerp(P[0],Q[0],p),lerp(P[1],Q[1],p)],an=Math.atan2(Q[1]-P[1],Q[0]-P[0]);
 x.save();x.globalAlpha*=Math.min(1,p*4);x.strokeStyle=col;x.lineWidth=wd;x.lineCap='round';x.beginPath();x.moveTo(P[0],P[1]);x.lineTo(E[0],E[1]);x.stroke();
 x.fillStyle=col;x.beginPath();x.moveTo(E[0]+Math.cos(an)*4,E[1]+Math.sin(an)*4);x.lineTo(E[0]-Math.cos(an-.45)*20,E[1]-Math.sin(an-.45)*20);x.lineTo(E[0]-Math.cos(an+.45)*20,E[1]-Math.sin(an+.45)*20);x.fill();x.restore();
 if(lab)txt(x,lab,(P[0]+Q[0])/2,(P[1]+Q[1])/2-22,19,col,'center','700',ease(seg(p,.6,1)))}
function tokenP(x,P,Q,u,lab,col,size=18){if(u<=0||u>=1)return;const e=easeIO(u);bubble(x,lerp(P[0],Q[0],e),lerp(P[1],Q[1],e),lab,col,Math.min(1,u*6,(1-u)*6),size)}
function agentNode(x,X,Y,t,like){rr(x,X-130,Y-48,260,96,16,'#2A1F42','#6E5D8E',3);x.save();x.beginPath();x.roundRect(X-130,Y-48,260,96,16);x.clip();
 drawPerson(x,FRIEND,{x:X-82,y:Y-16,s:.16,face:1,noLegs:true,breath:t*2+X,blink:blinkAt(t,[X%7+30,X%5+38,X%9+47]),mouth:.6,look:.5,lookY:.4});x.restore();
 txt(x,'Agent',X+28,Y+2,30,'#F8E9CC','center','700');if(like)txt(x,like,X-124,Y-70,22,'#C9B8E0','left','600');x.fillStyle='#6E5D8E';x.fillRect(X-2,Y+48,4,62)}
// a skill's name + description, as it sits in the agent's context
function chip(x,l,y,name,a,hot=0){if(a<=0)return;x.save();x.globalAlpha*=a;rr(x,l,y-19,290,38,10,'#3A2C58');if(hot>0){x.save();x.globalAlpha*=hot;rr(x,l,y-19,290,38,10,null,'#2DB2AE',5);x.restore()}
 pill(x,l+78,y,140,26,'#FFC66E');txt(x,name,l+78,y+1,15,'#1B1430','center','800');x.fillStyle='rgba(201,184,224,.5)';x.fillRect(l+158,y-4,118,8);x.restore()}
function boardBefore(x,t){txt(x,'like the binder',112,278,22,'#C9B8E0','left','600');rr(x,110,300,340,550,14,'#2A1F42','#6E5D8E',3);txt(x,'ONE BIG PROMPT',130,336,24,'#F8E9CC','left','800');
 RULES.forEach((s,i)=>{rr(x,130,366+i*58,300,42,8,'#3A2C58');txt(x,s,146,388+i*58,19,'#C9B8E0','left','700')});
 agentNode(x,700,330,t);rr(x,540,440,320,390,14,'#2A1F42','#6E5D8E',3);txt(x,'context window',556,466,19,'#C9B8E0','left','700');pill(x,810,466,72,28,'#FF6B5E');txt(x,'FULL',810,467,16,'#1B1430','center','900');
 RULES.forEach((s,i)=>{rr(x,556,488+i*41,288,34,7,'rgba(255,107,94,.55)');txt(x,s,568,506+i*41,16,'#1B1430','left','800')});
 arrowP(x,[456,610],[534,610],1,'all of it');tokenP(x,[300,610],[700,640],(t*.62)%1,'every rule','#F8E9CC')}
// AGENT SKILLS side: other skill folders behind, then the one folder with SKILL.md and its extra files
function boardFolder(x,t){const fa=fin(t,31.5,.45),oa=fin(t,32.3,.4);
 [[56,'brand-voice/'],[28,'code-review/']].forEach(([o,s])=>{x.save();x.globalAlpha=oa;rr(x,1000+o,350-o,400,480,14,'#241A3C','#4E4070',2);rr(x,1226+o,318-o,174,34,[10,10,0,0],'#4E4070');txt(x,s,1313+o,336-o,16,'#F8E9CC','center','700');x.restore()});
 x.save();x.globalAlpha=fa;rr(x,1000,350,400,480,14,'#2A1F42','#FFC66E',5);rr(x,1000,316,236,40,[12,12,0,0],'#FFC66E');txt(x,'pdf-processing/',1118,337,20,'#1B1430','center','900');
 txt(x,'like one recipe card',1004,286,22,'#C9B8E0','left','600',fin(t,32));x.restore();
 const da=fin(t,32.9,.4),pulse=fin(t,33.5,.3)*(1-fin(t,34.9,.3));
 x.save();x.globalAlpha=da;rr(x,1030,385,340,305,10,'#F4EBDD');txt(x,'SKILL.md',1046,408,24+4*pulse,pulse>0?'#B4521E':'#1B1430','left','900');
 rr(x,1040,428,320,90,8,'rgba(255,198,110,.4)','#E0A040',3);txt(x,'name: pdf-processing',1052,450,18,'#1B1430','left','800');txt(x,'description: Fill PDF forms.',1052,476,17,'#1B1430','left','700');txt(x,'Use when the user mentions PDFs.',1052,500,17,'#1B1430','left','700');
 txt(x,'full instructions',1052,548,18,'#5A4A6A','left','800');x.fillStyle='rgba(27,20,48,.28)';for(let k=0;k<6;k++)x.fillRect(1052,572+k*18,300*(.55+.4*hash(k,9)),7);
 txt(x,'extra files',1046,722,19,'#C9B8E0','left','700');rr(x,1046,748,120,42,8,'#F4EBDD');txt(x,'FORMS.md',1106,770,18,'#1B1430','center','800');rr(x,1178,748,110,42,8,'#F4EBDD');txt(x,'scripts/',1233,770,18,'#1B1430','center','800');
 txt(x,'stay on disk',1233,808,16,'#C9B8E0','center','600',fin(t,43.3));
 newTag(x,1338,428);newTag(x,1338,542);newTag(x,1338,722);x.restore()}
// the agent and what is in its context, stage by stage
function boardContext(x,t){agentNode(x,1690,330,t,'like your cook');rr(x,1530,440,320,390,14,'#2A1F42','#6E5D8E',3);txt(x,'context window',1546,466,19,'#C9B8E0','left','700');
 arrowP(x,[1372,472],[1524,505],fin(t,35.4,.5),'at startup','#FFC66E');arrowP(x,[1372,610],[1524,700],fin(t,40.8,.5),'task matches','#2DB2AE',5);arrowP(x,[1300,769],[1524,792],fin(t,42.6,.5),'if needed');
 chip(x,1545,505,'pdf-processing',fin(t,36.15,.15),fin(t,40,.3));chip(x,1545,550,'code-review',fin(t,36.55,.15));chip(x,1545,595,'brand-voice',fin(t,36.95,.15));
 txt(x,'about 100 tokens each',1546,632,18,'#FFC66E','left','700',fin(t,37.4));
 {const a=fin(t,41.85,.2);if(a>0){x.save();x.globalAlpha=a;rr(x,1545,652,290,112,10,'rgba(45,178,174,.28)','#2DB2AE',3);txt(x,'SKILL.md: full instructions',1558,674,17,'#F8E9CC','left','800');x.fillStyle='rgba(248,233,204,.4)';for(let k=0;k<4;k++)x.fillRect(1558,696+k*16,250*(.55+.4*hash(k,9)),6);x.restore()}}
 {const a=fin(t,43.85,.2);if(a>0){x.save();x.globalAlpha=a;rr(x,1545,774,130,38,8,'#F4EBDD');txt(x,'FORMS.md',1610,794,17,'#1B1430','center','800');x.restore()}}
 tokenP(x,[1360,472],[1690,505],seg(t,35.5,36.2),'pdf-processing','#FFC66E',15);tokenP(x,[1340,300],[1690,550],seg(t,35.9,36.6),'code-review','#FFC66E',15);tokenP(x,[1370,272],[1690,595],seg(t,36.3,37),'brand-voice','#FFC66E',15);
 tokenP(x,[1200,610],[1690,708],seg(t,40.9,41.9),'full instructions','#2DB2AE',18);tokenP(x,[1106,769],[1610,793],seg(t,42.9,43.9),'FORMS.md','#F8E9CC',16);
 bubble(x,1690,lerp(180,214,ease(seg(t,39.3,39.7))),'task: fill this PDF form','#F8E9CC',fin(t,39.3,.25),20)}
function drawBoard(t,cam){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1390,540,40,1390,540,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=120;y<960;y+=28)x.fillRect(918,y,4,14); // not setLineDash: its anti-aliasing differs between renders
 txt(x,'BEFORE',90,156,40,'#C9B8E0');txt(x,'one big prompt: all of it, every task',90,204,26,'#C9B8E0','left','600'); // below the corner tag
 txt(x,'AGENT SKILLS',990,156,40,'#FFC66E');txt(x,'load only what the task needs',990,204,26,'#FFC66E','left','600',fin(t,35.3));
 boardBefore(x,t);boardFolder(x,t);boardContext(x,t);comp([['board',0]])}

// ---------- title card: the topic in the thumbnail's style, on screen until "Agent Skills, explained" has been spoken ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,560,60,W/2,560,980);g.addColorStop(0,'rgba(255,196,120,.85)');g.addColorStop(.4,'rgba(238,110,104,.45)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();const z=1+.035*t/1.77;x.translate(W/2,H/2);x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=s=>`${s}px Impact, "Arial Black", sans-serif`,TOPIC='AGENT SKILLS';
 x.font=font(100);const size=Math.min(300,100*1560/x.measureText(TOPIC).width);
 const put=(s,X,Y,sz,col)=>{x.font=font(sz);x.lineWidth=sz*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 put('EXPLAINED',W/2,282,size*.4,'#F8E9CC');put(TOPIC,W/2,282+size*.98,size,'#FFC66E');
 // the sticker is the brand mark: same red, same tilt, same words as the thumbnail
 x.save();x.translate(W/2,282+size*.98+190);x.rotate(-.035);
 x.font=font(104);const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle='#120A1C';x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();
 x.fillStyle='#E4493F';x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.fillText('IN 60 SECONDS',0,6);x.restore();x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}

// ---------- words on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 // the brand's corner tag: the topic and the 60 s promise, on every frame, so a viewer always knows what this is
 {const x=ctx;x.font='800 32px Arial';const tw=x.measureText('Agent Skills').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'Agent Skills',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800')}
 card(t,4.8,5.7,960,620,'…to fry one egg','#F8E9CC',40);
 card(t,6.35,8.4,960,820,'your prompt: every rule, every time','#F8E9CC',36);
 t=TO(t); // from here on, cut 1's clock
 card(t,12.4,14.6,130,620,'the one big prompt','#FFC66E',44);
 card(t,16.35,17.3,960,560,'orders pile up','#F8E9CC',38);
 card(t,17.85,19.2,960,620,'the fix: a recipe box','#FFC66E',40);
 card(t,23.9,25.2,960,640,'he reads only the tabs','#F8E9CC',38);
 card(t,27.3,29.0,960,640,'one card · nothing else','#F8E9CC',38);
 card(t,29.5,31.0,972,820,'Agent Skills work the same way','#FFC66E',42);
 card(t,35.45,36.9,972,880,'at startup: only names + descriptions','#F8E9CC',36);
 card(t,37.5,38.9,972,640,'about 100 tokens per skill','#FFC66E',38);
 card(t,40.9,42.0,972,820,'the full instructions: only now','#F8E9CC',36);
 card(t,42.5,44.45,972,760,'extra files: only if needed','#F8E9CC',36);
 card(t,45,46.2,960,600,'many skills on hand','#F8E9CC',38);
 card(t,46.7,48.3,960,760,'context stays free for the job','#2DB2AE',38);
 card(t,48.9,51.4,972,1040,'an open standard since Dec 2025 · started by Anthropic','#FFC66E',34);
 card(t,51.95,53.8,960,760,'a lesson as old as the kitchen','#FFC66E',42);
 const v=fin(t,54.3,.35);if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-520,92,1040,210,40);ctx.fill();ctx.restore();
  txt(ctx,'Don’t tell your agent everything.',W/2,154,56,'#F8E9CC','center','800',v);txt(ctx,'Tell it where to look.',W/2,236,64,'#FFC66E','center','800',fin(t,56.1,.35))}
 // call to action: a subscribe button that pops in on the spoken line, with the next episode under it
 const c=fin(t,57.45,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-57.45)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}
 card(t,57.95,0,1010,900,'Next in 60 seconds: why MCP went stateless','#C9B8E0',28)}

// shot 0 is the title card; shots 1-4 are cut 1's 0-3 (retimed); cut 1's "Agent Skills fix that" shot is gone; shots 5-29 are cut 1's 5-29
const KIT=[1,2,3,5,6,7,8,9,10,11,12,13,14,26,27,28,29],STU=[4,23,24];
FILM={dur:1771/30,cuts:[0,53,95,140,181,262,337,418,457,499,556,619,682,736,775,850,910,967,1027,1087,1147,1192,1240,1315,1366,1429,1522,1594,1651,1691,1771],fadeIn:0,fadeOut:.45,
 cam(s,u,t){const e=ease(u);return [
  {x:lerp(1170,1200,e),y:lerp(600,590,e),z:lerp(1.5,1.62,e),b:[3,0]},            // 0 the cook rereads 500 pages
  {x:lerp(840,880,e),y:560,z:lerp(1.1,1.17,e)},                                  // 1 you watch him do it
  {x:lerp(1480,1510,e),y:lerp(620,610,e),z:lerp(1.85,2.1,e),b:[4,0]},            // 2 the one egg, waiting
  {x:lerp(900,940,e),y:560,z:lerp(1.06,1.14,e)},                                 // 3 studio: your prompt is that binder
  {x:lerp(560,600,e),y:lerp(470,460,e),z:lerp(1.5,1.68,e),b:[4]},                // 4 Agent Skills fix that
  {x:lerp(930,990,e),y:540,z:lerp(1,1.06,e)},                                    // 5 your kitchen, wide
  {x:lerp(990,1010,e),y:lerp(660,650,e),z:lerp(1.9,2.25,e),b:[4,0]},             // 6 the binder: the one big prompt
  {x:lerp(1270,1290,e),y:lerp(500,485,e),z:lerp(2.1,2.35,e),b:[5,0]},            // 7 he reads all of it
  {x:lerp(1600,1640,e),y:lerp(430,420,e),z:lerp(1.6,1.78,e),b:[3,0]},            // 8 orders pile up
  {x:lerp(1030,1010,e),y:lerp(670,662,e),z:lerp(1.6,1.8,e),b:[3,0]},             // 9 the recipe box lands
  {x:lerp(1000,1016,e),y:lerp(690,680,e),z:lerp(2.2,2.5,e),b:[5,0]},             // 10 a tab on every card
  {x:lerp(1010,1020,e),y:lerp(560,548,e),z:lerp(1.62,1.78,e),b:[4,0]},           // 11 its name, and when to use it
  {x:lerp(1130,1160,e),y:lerp(590,580,e),z:lerp(1.45,1.6,e),b:[3,0]},            // 12 he reads only the tabs
  {x:lerp(1600,1540,e),y:lerp(425,415,e),z:lerp(1.85,2.05,e),b:[4,0]},           // 13 an order: soup
  {x:lerp(1100,1130,e),y:lerp(600,585,e),z:lerp(1.5,1.7,e),b:[3,0]},             // 14 he pulls one card
  {x:lerp(560,980,e),y:lerp(560,540,e),z:lerp(1.25,1.02,e)},                     // 15 board: before, then across
  {x:lerp(1180,1210,e),y:lerp(570,560,e),z:lerp(1.25,1.45,e)},                   // 16 a skill is a folder
  {x:lerp(1200,1200,e),y:lerp(540,520,e),z:lerp(1.85,2.15,e)},                   // 17 SKILL.md
  {x:lerp(1400,1460,e),y:lerp(540,530,e),z:lerp(1.22,1.32,e)},                   // 18 at startup: names + descriptions
  {x:lerp(1680,1690,e),y:lerp(560,545,e),z:lerp(1.8,2.1,e)},                     // 19 about 100 tokens each
  {x:lerp(1660,1680,e),y:lerp(420,440,e),z:lerp(1.55,1.75,e)},                   // 20 a task arrives and matches
  {x:lerp(1420,1460,e),y:lerp(590,610,e),z:lerp(1.28,1.42,e)},                   // 21 the full instructions load
  {x:lerp(1430,1470,e),y:lerp(720,740,e),z:lerp(1.5,1.7,e)},                     // 22 extra files, only if needed
  {x:lerp(1000,1040,e),y:560,z:lerp(1.04,1.12,e)},                               // 23 studio: many skills on hand
  {x:lerp(1300,1340,e),y:lerp(540,525,e),z:lerp(1.6,1.82,e),b:[4]},              // 24 the context stays free
  {x:lerp(960,975,e),y:lerp(540,548,e),z:lerp(1,1.05,e)},                        // 25 the whole design: an open standard
  {x:lerp(1010,960,e),y:lerp(550,540,e),z:lerp(1.12,1.02,e)},                    // 26 back in the kitchen
  {x:lerp(770,790,e),y:lerp(250,235,e),z:lerp(1.9,2.15,e),b:[0,3]},              // 27 the binder, retired
  {x:lerp(890,910,e),y:lerp(688,672,e),z:lerp(2,2.2,e),b:[5,0]},                 // 28 where to look
  {x:lerp(700,690,e),y:lerp(390,380,e),z:lerp(1.04,1.12,e),b:[3,0]}              // 29 you, and the ask
 ][s<5?Math.max(s-1,0):s]},
 draw(t,cam,s){const T=TO(t);if(s==0)drawTitle(t);else if(KIT.includes(s))drawKitchen(T,cam);else if(STU.includes(s))drawStudio(T,cam);else drawBoard(T,cam);overlay(t)},
 plants(){return {}}};
// sound events on the picture's clock; 'cut' is a soft thud on every cut that changes place
// cut 1's events after the hook are all shifted by S; the hook's are new
for(const t of [2.325,2.95,3.575])say(t,'paper');
for(const t of [12.5,13.1,15.1,15.7])say(t-S,'paper');
for(const f of [53,181,262])say(F(f),'cut');
for(const f of [879,1344,1458,1551])say(F(f-29),'cut');
for(const t of [16.3,16.7,17.1])say(t-S,'tick');say(25.65-S,'bell');say(T_FIX+.36-S,'thud');
for(let i=0;i<5;i++)say(19.7+i*.3-S,'tick');say(26.95-S,'paper');
for(const t of [36.2,36.6,37,39.35,43.9,57.5])say(t-S,'tick');say(40-S,'bell');say(41.9-S,'paper');
