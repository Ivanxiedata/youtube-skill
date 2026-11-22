// Episode: Agent Skills, told through a kitchen. You are the head chef; your AI agent is the cook.
// Before: every rule sits in one giant binder (the one big prompt) and the cook rereads all of it before every order.
// New: a recipe box. The cook reads only the tabs (name + when to use it) and pulls one card when an order matches.
// v2 (workflow step 4): 27 shots, cut on the new voice (vo.wav laid in at .08 s, so film time = voice time + .08), from beats.md.
// Four places on one clock: the title card, the studio (today), the kitchen (the story), the board (BEFORE vs AGENT SKILLS).
// Helpers txt/pill/bubble/fin/card and the studio set are reused from episodes/deepseek-super-agent/film/film.js.
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function bubble(x,X,Y,s,col,a,size=18){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`800 ${size}px Arial`;pill(x,X,Y,x.measureText(s).width+size*1.6,size*1.9,col);txt(x,s,X,Y+1,size,'#1B1430','center','800');x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const F=f=>f/30; // a state change is timed on a cut frame, so it never shows as a one-frame pop
const mixc=(a,b,u)=>{const p=c=>[1,3,5].map(i=>parseInt(c.slice(i,i+2),16)),A=p(a),B=p(b);return `rgb(${A.map((v,i)=>Math.round(lerp(v,B[i],u))).join(',')})`};
// dashed outline from small rects (not setLineDash: its anti-aliasing differs between renders)
function dashRect(x,l,t,w,h,col,a=1){x.save();x.globalAlpha*=a;x.fillStyle=col;for(let i=0;i<w;i+=22){x.fillRect(l+i,t,12,3);x.fillRect(l+i,t+h-3,12,3)}for(let j=0;j<h;j+=22){x.fillRect(l,t+j,3,12);x.fillRect(l+w-3,t+j,3,12)}x.restore()}

// ---------- the picture's clock: shot n starts at frame CUTS[n]; shot 0 is the title card (beats.md, v2) ----------
// 21->22 moved from beats.md's 44.40 s to 43.93 s so the tab/chip split lands on the spoken word "tab" (43.98 s)
const CUTS=[0,59,108,156,244,275,321,378,441,486,542,608,651,703,759,798,854,945,1026,1110,1203,1278,1318,1394,1505,1574,1670,1758];
const T=n=>CUTS[n]/30;
const SH=t=>{const f=Math.round(t*30);let s=0;while(s<27&&CUTS[s+1]<=f)s++;return s};

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

// the AI agent (the cook) is not a person: a dark rounded screen for a head, glowing eyes and mouth (coral when overloaded, teal when calm).
// Drawn after actor() (noFace) and before cap(), in the head's own transform, so the cook keeps his body and cap; hands are a light steel, not skin.
const COOK=Object.assign({},FRIEND,{skin:'#2B2750',hand:'#9C8FB5'});
function screenHead(x,p){x.save();headT(x,p);const g=p.glow||'#5FE0D6',lk=p.look||0,ly=p.lookY||0,fx=lk*38,fy=ly*14+10,bl=p.blink||0;
 x.fillStyle='#6E5D8E';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#2B2750','#6E5D8E',5);rr(x,-84,-70,168,152,14,'#0C0A24');
 x.fillStyle='rgba(95,224,214,.07)';for(let y=-48;y<80;y+=10)x.fillRect(-84,y,168,3);
 x.fillStyle=g;x.strokeStyle=g;x.lineCap='round';
 for(let i=0;i<2;i++){const e=(i?32:-32)+fx*(i?1.1:.9),hgt=bl>.5?6:26*(1-bl*1.4)+4;
  x.globalAlpha=.25;x.beginPath();x.roundRect(e-17,fy-hgt/2-8,34,hgt+16,17);x.fill();x.globalAlpha=1;
  x.beginPath();x.roundRect(e-(bl>.5?14:9),fy-hgt/2,bl>.5?28:18,hgt,bl>.5?3:9);x.fill();
  const by=fy-38-(p.brow||0)*6,sl=(p.sad||0)*9*(i?-1:1);x.lineWidth=6;x.beginPath();x.moveTo(e-15,by+sl);x.lineTo(e+15,by-sl);x.stroke()}
 const m=p.mouth||0,my=fy+42,mx=fx*.9;x.lineWidth=7;x.beginPath();x.moveTo(mx-24,my-m*5);x.quadraticCurveTo(mx,my+m*22,mx+24,my-m*5);x.stroke();
 x.restore()}

// ---------- kitchen: head chef (you) on the left, the cook on the right, one counter ----------
const CY=780,BX=1010,TABN=['EGG','SOUP','CAKE','RICE','PIE'];
const T_SLAM=T(6),T_FIX=T(10),T_SHELF=T_FIX+.68,T_BOX=T_FIX+.7;
const tabX=i=>BX-112+i*56;
function ticket(x,X,Y,head,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle='#17141F';x.fillRect(X-8,Y-8,16,12);x.fillStyle='#F8E9CC';x.fillRect(X-38,Y,76,108);x.fillStyle=col;x.fillRect(X-38,Y,76,30);
 txt(x,head,X,Y+16,17,'#1B1430','center','900');x.fillStyle='rgba(27,20,48,.35)';for(let k=0;k<4;k++)x.fillRect(X-28,Y+44+k*15,k%2?40:56,5);x.restore()}
// the binder lying shut (on the shelf after the fix): same drawing at any size, so the slide to the shelf has no pop
function closedBinder(x,L,Tp,w,h){x.fillStyle='#8E2F2C';x.beginPath();x.roundRect(L,Tp,w,h,6*h/68);x.fill();x.fillStyle='#F4EBDD';x.fillRect(L+w*.115,Tp+h*.147,w*.863,h*.706);
 x.fillStyle='rgba(60,40,70,.2)';for(let k=0;k<6;k++)x.fillRect(L+w*.115,Tp+h*.19+k*h*.1,w*.863,Math.max(1,h*.03));txt(x,'EVERY RULE',L+w*.57,Tp+h*.5,h*.3,'#6E3A44','center','900')}
function kitWall(x,t){let g=x.createLinearGradient(0,0,0,CY);g.addColorStop(0,'#2E2152');g.addColorStop(1,'#56305E');x.fillStyle=g;x.fillRect(-900,-600,W+2600,1400);
 g=x.createRadialGradient(560,380,30,560,380,900);g.addColorStop(0,'rgba(255,196,130,.26)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+2600,1400);
 x.fillStyle='rgba(248,233,204,.05)';for(let i=0;i<36;i++)for(let j=0;j<3;j++)x.fillRect(-860+i*104+(j%2)*52,486+j*74,96,66);
 x.fillStyle='#241736';x.fillRect(-900,CY-4,W+2600,900);
 // the shelf: jars, and after the fix, the retired binder
 x.fillStyle='#241736';x.fillRect(560,232,480,14);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(560,246,480,8);
 [[940,'#2DB2AE',64],[996,'#FFC66E',46]].forEach(([X,c,h])=>{x.globalAlpha=.55;x.fillStyle=c;x.fillRect(X-18,232-h,36,h);x.globalAlpha=1;x.fillStyle='#17141F';x.fillRect(X-20,224-h,40,8)});
 if(t>=T_SHELF)closedBinder(x,620,164,262,68);
 // the order rail: the one egg order; in the "before" shot more orders pile up; later the soup order slides in
 x.fillStyle='#C9B8E0';x.fillRect(1400,326,900,7);
 if(t<T_FIX){ticket(x,1450,333,'1 EGG','#FFC66E');if(SH(t)==9)for(let k=1;k<4;k++){const a=fin(t,T(9)+.3+(k-1)*.4,.2);ticket(x,1450+k*92,333-(1-a)*30,'ORDER','#C9B8E0',a)}}
 else if(t>=T(14))ticket(x,lerp(2150,1450,ease(seg(t,T(14)+.05,T(14)+.5))),333,'SOUP','#FFC66E')}
function counter(x){const g=x.createLinearGradient(0,CY,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(-900,CY,W+2600,700);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(-900,CY,W+2600,4)}
// before: the big binder slams onto the counter, loose pages stick out, and the cook keeps turning them (faster in the cook's shot)
function bigBinder(x,t){const L=850,R=1150,T0=CY-150,m=1000,e=seg(t,T_SLAM,T_SLAM+.55),dy=-150*(1-ease(e)),fa=Math.min(1,e*4);
 x.save();x.globalAlpha*=fa;x.translate(0,dy);
 for(const [dx,dy2,r] of [[46,-30,-.14],[-34,-36,.1],[112,-14,.34]]){x.save();x.translate(m+dx,T0+dy2);x.rotate(r);x.fillStyle='#F8F0E0';x.fillRect(-60,-70,120,86);x.fillStyle='rgba(60,40,70,.22)';for(let k=0;k<5;k++)x.fillRect(-48,-60+k*13,96,3);x.restore()}
 x.fillStyle='#8E2F2C';x.beginPath();x.roundRect(L-12,T0+8,R-L+24,CY-T0-8,8);x.fill();x.fillStyle='#F4EBDD';x.fillRect(L,T0,R-L,CY-T0-12);
 x.fillStyle='rgba(60,40,70,.16)';for(let y=T0+10;y<CY-16;y+=7)x.fillRect(L,y,R-L,2);
 x.fillStyle='#FFF6E6';for(const d of [-1,1]){x.beginPath();x.moveTo(m,T0+6);x.quadraticCurveTo(m+d*80,T0-30,m+d*156,T0-8);x.lineTo(m+d*156,T0+6);x.lineTo(m,T0+18);x.fill()}
 x.fillStyle='rgba(27,20,48,.28)';for(let k=0;k<3;k++){x.fillRect(m-132,T0-10+k*5-k*k,96,3);x.fillRect(m+36,T0-10+k*5-k*k,96,3)}
 const fast=SH(t)==8,rate=fast?3.4:1.6;
 for(const ph of (fast?[0,.34,.67]:[0])){const a=(((t-T_SLAM)*rate+ph)%1)*Math.PI,c=Math.cos(a),s=Math.sin(a);x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(m,T0+6);x.quadraticCurveTo(m+c*80,T0-s*84-14,m+c*152,T0-s*100-6);x.lineTo(m+c*152,T0-s*100+6);x.lineTo(m,T0+18);x.fill()}
 rr(x,m-128,T0+44,256,74,10,'#1B1430');txt(x,'EVERY RULE',m,T0+81,36,'#FFC66E','center','900');x.restore()}
// after: a recipe box. Each card has a tab: the recipe's name.
const pull=t=>SH(t)==15?ease(seg(t,T(15)+.15,T(15)+.95)):0;
// the cook's finger runs along the tabs (shots 13 and 25): u 0..1 over the sweep, idx = the tab it is on
function scan(t){const s=SH(t);let a,b;if(s==13){a=T(13)+.2;b=T(13)+1.5}else if(s==25){a=T(25)+.3;b=T(25)+2.9}else return null;const u=seg(t,a,b);return {u,idx:Math.min(4,Math.round(4*u))}}
function soupCard(x,t){const P=pull(t),sc=lerp(1,1.35,P);x.save();x.translate(lerp(tabX(1)+43,1075,P),lerp(CY-8,CY-185,P));x.rotate(.1*P);x.scale(sc,sc);
 x.fillStyle='#FFF6E6';x.fillRect(-70,-120,140,120);x.beginPath();x.roundRect(-70,-152,54,34,[8,8,0,0]);x.fill();txt(x,'SOUP',-43,-134,15,'#1B1430','center','900');
 x.fillStyle='rgba(27,20,48,.3)';for(let k=0;k<5;k++)x.fillRect(-56,-100+k*18,k%2?84:108,6);x.restore()}
function recipeBox(x,t){if(t<T_BOX)return;const e=seg(t,T_BOX,T_BOX+.55),dy=-700*(1-e*e),P=pull(t),s=SH(t),dim=s==15?lerp(1,.38,fin(t,T(15)+.8,.4)):1,sc=scan(t),hi=sc?sc.idx:-1;
 x.save();x.translate(0,dy);
 x.fillStyle='#E9DCC6';x.fillRect(BX-140,CY-128,280,60);
 TABN.forEach((n,i)=>{if(i==1&&P>0)return;const u=t>=T(13)?1:ease(seg(t,T(11)+.17+i*.2,T(11)+.42+i*.2));if(u<=0)return;x.save();x.globalAlpha=dim;x.fillStyle=i==1?'#FFF6E6':'#F4EBDD';x.beginPath();x.roundRect(tabX(i)-26,CY-128-34*u,52,34*u+2,[8,8,0,0]);x.fill();
  if(i==hi){x.strokeStyle='#FFC66E';x.lineWidth=5;x.stroke()}txt(x,n,tabX(i),CY-110,15,'#1B1430','center','900',seg(u,.7,1));x.restore()});
 if(P>0&&P<.45)soupCard(x,t);
 x.fillStyle='#8A4A3A';x.beginPath();x.roundRect(BX-150,CY-96,300,96,[6,6,0,0]);x.fill();x.fillStyle='rgba(255,226,190,.4)';x.fillRect(BX-150,CY-96,300,4);
 rr(x,BX-78,CY-66,156,40,8,'#F4EBDD');txt(x,'RECIPES',BX,CY-45,22,'#6E3A34','center','900');
 if(P>=.45)soupCard(x,t);x.restore()}
// one tab, read aloud: the name, and when to use it, each with a small label pointing at it
function callout(x,t){if(SH(t)!=12)return;const X=1010,Y=452;x.fillStyle='#FFF6E6';x.beginPath();x.moveTo(X-70,Y+84);x.lineTo(tabX(1),CY-166);x.lineTo(X-20,Y+84);x.fill();
 rr(x,X-236,Y-84,472,170,18,'#FFF6E6');txt(x,'SOUP',X-206,Y-24,66,'#1B1430','left','900');
 const a=fin(t,22.5,.3);txt(x,'use when:',X-206,Y+46,26,'#8A6A7A','left','800',a);txt(x,'soup is ordered',X-70,Y+45,32,'#8E2F2C','left','900',a);
 const la=fin(t,22.05,.25),lb=fin(t,22.85,.25);
 if(la>0){x.save();x.globalAlpha*=la;x.fillStyle='#FFC66E';x.beginPath();x.moveTo(X-240,Y-24);x.lineTo(X-262,Y-36);x.lineTo(X-262,Y-12);x.fill();x.restore();pill(x,X-322,Y-24,110,38,'#FFC66E',la);txt(x,'name',X-322,Y-23,22,'#1B1430','center','900',la)}
 if(lb>0){x.save();x.globalAlpha*=lb;x.fillStyle='#FFC66E';x.beginPath();x.moveTo(X-240,Y+46);x.lineTo(X-262,Y+34);x.lineTo(X-262,Y+58);x.fill();x.restore();pill(x,X-372,Y+46,194,38,'#FFC66E',lb);txt(x,'when to use it',X-372,Y+47,22,'#1B1430','center','900',lb)}}
function stove(x,t){x.fillStyle='#17141F';x.fillRect(1420,CY-8,440,8);
 x.fillStyle='#2A2536';x.beginPath();x.roundRect(1450,CY-36,150,28,[4,4,12,12]);x.fill();x.fillRect(1596,CY-32,92,10);
 if(t<T(24)){x.fillStyle='#F8E9CC';x.beginPath();x.ellipse(1396,CY-24,17,23,0,0,7);x.fill()} // the one egg, still waiting
 else{x.fillStyle='#FFF6E6';x.beginPath();x.ellipse(1525,CY-37,50,10,0,0,7);x.fill();x.fillStyle='#FFC66E';x.beginPath();x.ellipse(1530,CY-43,16,8,0,0,7);x.fill()}
 x.fillStyle='#6E5D8E';x.beginPath();x.roundRect(1722,CY-92,118,84,[4,4,10,10]);x.fill();x.fillStyle='#8A78AC';x.fillRect(1714,CY-100,134,10);x.fillRect(1772,CY-110,18,10);
 if(t>=T(24))for(let i=0;i<3;i++){const u=((t*.45+i*.37)%1);x.fillStyle=`rgba(248,233,204,${.26*Math.sin(u*Math.PI)*fin(t,T(24),.6)})`;x.beginPath();x.roundRect(1480+i*30+Math.sin(t*2+i*2)*9,CY-70-u*130,14,40,7);x.fill()}}
function chefPose(t){const s=SH(t),ok=t>=T_FIX;
 const p={x:430,y:560,s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[1.2,3.3,10.9,13.6,18.4,24.6,28.2,52.6,58.3]),
  look:ok?.1:.9,lookY:ok?.08:.3,brow:ok?.15:.7,sad:ok?0:.55,mouth:ok?.7:-.3,tilt:ok?.04:-.05};
 if(s==6||s==8)p.lookY=.5;
 if(s==7){ // he steps to the binder and points at it: "your big prompt"
  const g=ease(seg(t,T(7)+.1,T(7)+.6));Object.assign(p,{x:670,look:.9,lookY:.45,tilt:-.02,hands:{r:[lerp(97.5,232,g),lerp(220,116,g)]},showH:{r:true}})}
 if(s==10||s==11||s==12||s==13)Object.assign(p,{look:.9,lookY:.4});
 if(s==24)Object.assign(p,{look:.8,lookY:.2,mouth:.8});
 if(s==26){ // faces the viewer and waves goodbye
  const g=ease(seg(t,T(26),T(26)+.8)),w=Math.sin((t-T(26))*9);
  Object.assign(p,{look:.05,lookY:.1,brow:.3,mouth:.95,tilt:.03,hands:{r:[lerp(97.5,186+22*w,g),lerp(220,-100+8*Math.cos((t-T(26))*9),g)]},showH:{r:true}})}
 return p}
// the cook: worn out by the binder before the fix, calm with the recipe box after
function cookPose(t){const s=SH(t),ok=t>=T_FIX,sc=scan(t);
 const p={x:1290,y:575,s:.8,face:-1,noLegs:true,breath:t*2+1,blink:blinkAt(t,[.9,2.9,11.6,15.6,18.8,22.6,24.9,27.7,52.9,56.2]),
  look:-.8,lookY:.3,brow:.15,sad:0,mouth:.5,tilt:-.03,noFace:true,glow:ok?'#5FE0D6':'#FF8F7A'};
 if(!ok){Object.assign(p,{brow:.6,sad:.7,mouth:-.45,tilt:.07,look:-.75+.16*Math.sin(t*3.1),lookY:s>=6?.75:.2});
  if(s==8){ // he flips the pages with his near hand
   Object.assign(p,{hands:{l:[-162+6*Math.sin(t*21),132+10*Math.abs(Math.sin(t*10.6))]},showH:{l:true},tuck:{l:true}})}}
 else if(s==10||s==11||s==12)Object.assign(p,{look:-.8,lookY:.45,mouth:.55});
 else if(s==13||s==25){const u=sc.u;Object.assign(p,{x:1100,look:lerp(-1,-.2,u),lookY:.6,tilt:-.03+.1*(u-.5),mouth:.45})}
 else if(s==14)Object.assign(p,{look:.8,lookY:-.55,mouth:.7});
 else if(s==15){const P=pull(t),g=ease(seg(P,0,.35)),sch=lerp(1,1.35,P),rot=.1*P;
  // his near hand follows the card's right edge as it rises
  const ox=lerp(tabX(1)+43,1075,P),oy=lerp(CY-8,CY-185,P),ex=70*sch+22,ey=-60*sch,ex2=ox+ex*Math.cos(rot)-ey*Math.sin(rot),ey2=oy+ex*Math.sin(rot)+ey*Math.cos(rot);
  const hx=lerp(1180,ex2,g),hy=lerp(650,ey2,g);
  Object.assign(p,{look:kf(t,[[T(15),.8],[T(15)+.5,.8],[T(15)+.9,-.55]]),lookY:kf(t,[[T(15),-.55],[T(15)+.5,-.55],[T(15)+.9,.25]]),mouth:kf(t,[[T(15),.5],[T(15)+1,.85]]),
   hands:{l:[(hx-p.x)/p.s,(hy-p.y)/p.s]},showH:{l:true},tuck:{l:true}})}
 else if(s==24)Object.assign(p,{look:kf(t,[[T(24),.5],[T(24)+.8,.5],[T(24)+1.2,-.7]]),lookY:.4,mouth:.8,tilt:-.03+.03*Math.sin(t*2)});
 else if(s==26)Object.assign(p,{look:-.35,lookY:.1,mouth:.85});
 return p}
function drawKitchen(t,cam){const b=cam.b||[2,0];let x=layer('wall',cam,1);kitWall(x,t);
 const a=layer('lamp',cam);pendant(a,300,t,.06);pendant(a,1240,t,.06);
 const h=layer('hero',cam);toque(h,actor(h,'chef',HERO,chefPose(t),cam));{const cp=actor(h,'cook',COOK,cookPose(t),cam);screenHead(h,cp);cap(h,cp)}
 const f=layer('fg',cam);counter(f);stove(f,t);
 if(t>=T_SLAM&&t<T_FIX)bigBinder(f,t);
 if(t>=T_FIX&&t<T_SHELF){const e=ease(seg(t,T_FIX+.03,T_SHELF));closedBinder(f,lerp(850,620,e),lerp(CY-78,164,e),lerp(300,262,e),lerp(78,68,e))}
 recipeBox(f,t);callout(f,t);
 comp([['wall',b[0]],['lamp',0],['hero',b[1]||0],['fg',0]])}

// ---------- studio: you, today, and your AI agent's screen ----------
const DESK_Y=780,SCR={cx:1180,w:760,h:450};
const RULES=['PDF rules','code review rules','brand voice rules','report rules','email rules','invoice rules','slide rules','legal rules'];
const SKILLS=['pdf-processing','code-review','brand-voice','sales-report'];
const MORE=['pdf-processing','code-review','brand-voice','sales-report','invoices','slides','meeting-notes','data-analysis','email-triage','changelog','legal-review','translate'];
function studioWall(x){let g=x.createLinearGradient(0,0,0,760);g.addColorStop(0,'#33255A');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 g=x.createRadialGradient(1100,300,30,1100,300,900);g.addColorStop(0,'rgba(255,196,130,.22)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 x.fillStyle='#237F80';x.fillRect(-800,700,W+2400,600);x.fillStyle='#2F9A98';x.fillRect(-800,692,W+2400,10)}
function desk(x){let g=x.createLinearGradient(0,DESK_Y,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(200,DESK_Y,1700,500);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(200,DESK_Y,1700,4)}
// before (shots 1-2): the prompt is an endless wall of rules; a task arrives and all of it pours into the context, which fills up.
// after (shots 3-4): a short list of skills, about 100 tokens each, and the context is nearly empty. Shot 23: many skills, still room.
function agentScreen(x,t){const {cx,w,h}=SCR,by=DESK_Y,top=by-30-h,l=cx-w/2,s=SH(t);
 x.fillStyle='#1B1430';x.fillRect(cx-9,by-32,18,32);x.beginPath();x.ellipse(cx,by-2,w*.16,7,0,0,7);x.fill();x.beginPath();x.roundRect(l,top,w,h,12);x.fill();
 const sx=l+10,sy=top+10,sw=w-20,sh=h-20,mx=sx+sw-78,mh=sh-112;x.fillStyle='#141238';x.fillRect(sx,sy,sw,sh);x.save();x.beginPath();x.rect(sx,sy,sw,sh);x.clip();
 const k3=s==3?ease(seg(t,T(3)+.05,T(3)+.95)):s>3?1:0; // the wall collapses into the skill list
 if(k3<1){x.save();x.globalAlpha*=1-k3;const ky=lerp(1,.85,k3);x.translate(0,sy+50);x.scale(1,ky);x.translate(0,-(sy+50));
  const gap=30,n=RULES.length*6,span=n*gap;
  for(let k=0;k<n;k++){const y=sy+40+((((k*gap-t*42)%span)+span)%span);if(y>sy+sh+20)continue;
   if(k%6==0){pill(x,sx+134,y,220,26,'#FF8F7A');txt(x,RULES[k/6],sx+38,y+1,17,'#1B1430','left','800')}
   else{x.fillStyle='rgba(248,233,204,.5)';x.fillRect(sx+24,y-4,(sw-150)*(.45+.5*hash(k,3)),8)}}
  x.fillStyle='#141238';x.fillRect(sx,sy,sw-96,48);txt(x,'YOUR PROMPT',sx+24,sy+26,22,'#F8E9CC','left','800');txt(x,'every rule, every task',sx+206,sy+27,18,'#C9B8E0','left','600');x.restore()}
 if(k3>0){const ha=s==3?fin(t,T(3)+.3,.4):1;txt(x,'SKILLS',sx+24,sy+26,22,'#FFC66E','left','800',ha);txt(x,s==23?'many skills · names + descriptions only':'names + descriptions only',sx+124,sy+27,18,'#C9B8E0','left','600',ha);
  if(s<23)SKILLS.forEach((n,i)=>{const y=sy+82+i*56,a=s==3?fin(t,T(3)+.45+i*.18,.2):1;if(a<=0)return;x.save();x.globalAlpha*=a;
   pill(x,sx+129,y,210,34,'#FFC66E');txt(x,n,sx+129,y+1,18,'#1B1430','center','800');pill(x,sx+300,y,120,28,'#2DB2AE');txt(x,'~100 tokens',sx+300,y+1,15,'#0F2F33','center','900');
   x.fillStyle='rgba(201,184,224,.45)';x.fillRect(sx+380,y-5,(sw-480)*(.6+.4*hash(i,7)),10);x.restore()});
  else MORE.slice(0,10).forEach((n,i)=>{const y=sy+72+i*33,a=fin(t,T(23)+.1+i*.1,.2);if(a<=0)return;x.save();x.globalAlpha*=a;
   pill(x,sx+110,y,190,26,'#FFC66E');txt(x,n,sx+110,y+1,16,'#1B1430','center','800');x.fillStyle='rgba(201,184,224,.45)';x.fillRect(sx+226,y-4,(sw-340)*(.5+.5*hash(i,7)),8);x.restore()})}
 // the context meter
 let f;if(s==1)f=.18+.3*seg(t,T(1),T(2));else if(s==2)f=.48+.37*ease(seg(t,3.9,4.8));else if(s==3)f=lerp(.85,.14,ease(seg(t,T(3)+.2,T(3)+1.2)));else if(s==23)f=.22+.02*Math.sin(t*2);else f=.14+.02*Math.sin(t*2);
 const tu=s==3?ease(seg(t,T(3)+.2,T(3)+1.2)):s>3?1:0,col=mixc('#FF6B5E','#2DB2AE',tu);
 x.fillStyle='rgba(201,184,224,.18)';x.fillRect(mx,sy+62,40,mh);x.fillStyle=col;x.fillRect(mx,sy+62+mh*(1-f),40,mh*f);
 txt(x,'context',mx+20,sy+36,16,'#C9B8E0','center','700');if(f>.8&&tu<.6){txt(x,'EVERY RULE,',mx+20,sy+sh-40,13,'#FF8F7A','center','800');txt(x,'EVERY TASK',mx+20,sy+sh-22,13,'#FF8F7A','center','800')} // what fills it, as the sources say
 else txt(x,tu>.6?'free':'filling',mx+20,sy+sh-26,18,tu>.6?'#2DB2AE':'#C9B8E0','center','800');
 if(s==2){ // the task arrives, then the whole prompt pours into the context
  const ta=ease(seg(t,T(2)+.05,T(2)+.4));bubble(x,sx+470,lerp(sy-30,sy+27,ta),'task','#FFC66E',Math.min(1,ta*3),22);
  for(let i=0;i<6;i++)tokenP(x,[sx+134,sy+80+i*50],[mx-60,sy+62+mh*(1-f)+10],seg(t,3.9+i*.14,3.9+i*.14+.45),RULES[i],'#FF8F7A',16)}
 x.restore()}
function heroPose(t){const s=SH(t),late=s>=3;
 const p={x:430,y:560,s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[2.6,6.6,8.9,45.6,47.4]),
  look:late?.85:.9,lookY:late?.2:.25,brow:late?.1:.7,sad:late?0:.55,mouth:late?.75:-.3,tilt:late?.04:-.05};
 if(s==4)Object.assign(p,{look:.7,lookY:-.2,brow:.7,sad:.3,mouth:.35,tilt:.14});
 if(s==23)Object.assign(p,{look:.85,lookY:.1,brow:.15,sad:0,mouth:.85,tilt:.05,bend:-.1});
 return p}
function drawStudio(t,cam){let x=layer('wall',cam,1);studioWall(x);
 const a=layer('lamp',cam);pendant(a,520,t,.08);pendant(a,1700,t,.08);
 const h=layer('hero',cam);toque(h,actor(h,'hero',HERO,heroPose(t),cam));
 const f=layer('fg',cam);desk(f);agentScreen(f,t);
 const s=SH(t);
 if(s==4){const q=fin(t,T(4)+.1,.25);bubble(f,1205,lerp(428,412,Math.abs(Math.sin(t*4))),'?','#FFC66E',q,46)}
 if(s==23){const q=fin(t,T(23)+.8,.4);pill(f,SCR.cx,862,560,50,'rgba(27,20,48,.88)',q);txt(f,'an open standard · started by Anthropic',SCR.cx,863,26,'#FFC66E','center','800',q)}
 comp([['wall',cam.b?cam.b[0]:2],['lamp',0],['hero',0],['fg',0]])}
// ---------- board: brief.json "architecture", by hand. BEFORE (left) vs AGENT SKILLS (right), new parts tagged NEW ----------
function newTag(x,X,Y,a=1){if(a<=0)return;pill(x,X,Y,64,28,'#FFC66E',a);txt(x,'NEW',X,Y+1,16,'#1B1430','center','900',a)}
function arrowP(x,P,Q,p,lab,col='#C9B8E0',wd=4){if(p<=0)return;const E=[lerp(P[0],Q[0],p),lerp(P[1],Q[1],p)],an=Math.atan2(Q[1]-P[1],Q[0]-P[0]);
 x.save();x.globalAlpha*=Math.min(1,p*4);x.strokeStyle=col;x.lineWidth=wd;x.lineCap='round';x.beginPath();x.moveTo(P[0],P[1]);x.lineTo(E[0],E[1]);x.stroke();
 x.fillStyle=col;x.beginPath();x.moveTo(E[0]+Math.cos(an)*4,E[1]+Math.sin(an)*4);x.lineTo(E[0]-Math.cos(an-.45)*20,E[1]-Math.sin(an-.45)*20);x.lineTo(E[0]-Math.cos(an+.45)*20,E[1]-Math.sin(an+.45)*20);x.fill();x.restore();
 if(lab)txt(x,lab,(P[0]+Q[0])/2,(P[1]+Q[1])/2-22,19,col,'center','700',ease(seg(p,.6,1)))}
function tokenP(x,P,Q,u,lab,col,size=18){if(u<=0||u>=1)return;const e=easeIO(u);bubble(x,lerp(P[0],Q[0],e),lerp(P[1],Q[1],e),lab,col,Math.min(1,u*6,(1-u)*6),size)}
function agentNode(x,X,Y,t,like){rr(x,X-130,Y-48,260,96,16,'#2A1F42','#6E5D8E',3);x.save();x.beginPath();x.roundRect(X-130,Y-48,260,96,16);x.clip();
 const q={x:X-82,y:Y-16,s:.16,face:1,noLegs:true,breath:t*2+X,blink:blinkAt(t,[X%7+30,X%5+38,X%9+47]),mouth:.6,look:.5,lookY:.4,noFace:true,glow:like?'#5FE0D6':'#FF8F7A'};drawPerson(x,COOK,q);screenHead(x,q);x.restore();
 txt(x,'Agent',X+28,Y+2,30,'#F8E9CC','center','700');if(like)txt(x,like,X-124,Y-70,22,'#C9B8E0','left','600');x.fillStyle='#6E5D8E';x.fillRect(X-2,Y+48,4,62)}
// a skill's name (+ description), as it sits in the agent's context; tg = the "~100 tokens" tag, hot = the match outline, dy = drop-in offset
function chip(x,l,y,name,a,hot=0,tg=0,dy=0){if(a<=0)return;x.save();x.globalAlpha*=a;y+=dy;rr(x,l,y-19,290,38,10,'#3A2C58');if(hot>0){x.save();x.globalAlpha*=hot;rr(x,l,y-19,290,38,10,null,'#2DB2AE',5);x.restore()}
 pill(x,l+78,y,140,26,'#FFC66E');txt(x,name,l+78,y+1,15,'#1B1430','center','800');
 if(tg>0){pill(x,l+232,y,100,26,'#2DB2AE',tg);txt(x,'~100 tokens',l+232,y+1,14,'#0F2F33','center','900',tg)}else{x.fillStyle='rgba(201,184,224,.5)';x.fillRect(l+158,y-4,118,8)}x.restore()}
function boardBefore(x,t){txt(x,'like the binder',112,278,22,'#C9B8E0','left','600');rr(x,110,300,340,550,14,'#2A1F42','#6E5D8E',3);txt(x,'ONE BIG PROMPT',130,336,24,'#F8E9CC','left','800');
 RULES.forEach((s,i)=>{rr(x,130,366+i*58,300,42,8,'#3A2C58');txt(x,s,146,388+i*58,19,'#C9B8E0','left','700')});
 agentNode(x,700,330,t);rr(x,540,440,320,390,14,'#2A1F42','#6E5D8E',3);txt(x,'context window',556,462,19,'#C9B8E0','left','700');pill(x,700,490,246,28,'#FF6B5E');txt(x,'EVERY RULE, EVERY TASK',700,491,15,'#1B1430','center','900');
 RULES.forEach((s,i)=>{rr(x,556,516+i*38,288,31,7,'rgba(255,107,94,.55)');txt(x,s,568,532+i*38,16,'#1B1430','left','800')});
 arrowP(x,[456,610],[534,610],1,null);txt(x,'all of it,',495,572,16,'#C9B8E0','center','700');txt(x,'every task',495,592,16,'#C9B8E0','center','700');
 tokenP(x,[466,612],[528,618],(t*.62)%1,'every rule','#F8E9CC')}
// AGENT SKILLS side: other skill folders behind, then the one folder with SKILL.md; its extra files appear when they are talked about (shot 20)
function boardFolder(x,t){const fa=fin(t,T(16)+.9,.45),oa=fin(t,T(16)+1.4,.4);
 [[56,'brand-voice/'],[28,'code-review/']].forEach(([o,s])=>{x.save();x.globalAlpha=oa;rr(x,1000+o,350-o,400,480,14,'#241A3C','#4E4070',2);rr(x,1226+o,318-o,174,34,[10,10,0,0],'#4E4070');txt(x,s,1313+o,336-o,16,'#F8E9CC','center','700');x.restore()});
 x.save();x.globalAlpha=fa;rr(x,1000,350,400,480,14,'#2A1F42','#FFC66E',5);rr(x,1000,316,236,40,[12,12,0,0],'#FFC66E');txt(x,'pdf-processing/',1118,337,20,'#1B1430','center','900');
 txt(x,'like one recipe card',1004,286,22,'#C9B8E0','left','600',fin(t,T(16)+1));x.restore();
 // the folder opens: SKILL.md rises out of it
 const da=fin(t,T(16)+1.5,.9),ry=lerp(70,0,da),pulse=fin(t,30.0,.3)*(1-fin(t,31.0,.3)),lit=fin(t,T(17)+.6,.4);
 x.save();x.beginPath();x.roundRect(1000,350,400,480,14);x.clip();x.globalAlpha*=da;x.translate(0,ry);
 rr(x,1030,385,340,305,10,'#F4EBDD');txt(x,'SKILL.md',1046,408,24+4*pulse,pulse>0?'#B4521E':'#1B1430','left','900');
 rr(x,1040,428,320,96,8,`rgba(255,198,110,${.14+.28*lit})`,lit>0?'#E0A040':null,3);
 ['name: pdf-processing','description: Extract text and tables','from PDF files ... Use when working','with PDFs'].forEach((s,i)=>txt(x,s,1052,447+i*21,15,'#1B1430','left','800'));
 txt(x,'full instructions',1052,548,18,'#5A4A6A','left','800');x.fillStyle='rgba(27,20,48,.28)';for(let k=0;k<6;k++)x.fillRect(1052,572+k*18,300*(.55+.4*hash(k,9)),7);
 x.restore();
 // extra files: grey, tagged "if needed", never opened in this task
 const ea=fin(t,T(20)+.1,.4);
 if(ea>0){x.save();x.globalAlpha*=ea;txt(x,'extra files',1046,722,19,'#C9B8E0','left','700');
  rr(x,1046,748,120,42,8,'#6E6580');txt(x,'FORMS.md',1106,770,18,'#D8CFE6','center','800');rr(x,1178,748,110,42,8,'#6E6580');txt(x,'scripts/',1233,770,18,'#D8CFE6','center','800');
  pill(x,1106,812,96,26,'rgba(255,198,110,.18)');pill(x,1233,812,96,26,'rgba(255,198,110,.18)');txt(x,'if needed',1106,813,15,'#FFC66E','center','800');txt(x,'if needed',1233,813,15,'#FFC66E','center','800');x.restore()}
 newTag(x,1338,432,fin(t,T(17)+.5,.25));newTag(x,1338,548,fin(t,T(19)+.7,.25));newTag(x,1338,722,fin(t,T(20)+.3,.25));
 // labels: "= the tab" on the two lit lines; "= pulling the card" is drawn in the column (boardContext)
 {const a=fin(t,T(17)+.9,.3);if(a>0){pill(x,1250,408,112,30,'#FFC66E',a);txt(x,'= the tab',1250,409,18,'#1B1430','center','900',a)}}}
// the agent and what is in its context, stage by stage
function boardContext(x,t){const s=SH(t);agentNode(x,1690,330,t,'like your cook');rr(x,1530,440,320,390,14,'#2A1F42','#6E5D8E',3);txt(x,'context window',1546,466,19,'#C9B8E0','left','700');
 const fr=fin(t,T(21)+.1,.3);if(fr>0){pill(x,1810,466,72,28,'#2DB2AE',fr);txt(x,'free',1810,467,16,'#0F2F33','center','900',fr)}
 {const ap=fin(t,32.6,.5);arrowP(x,[1372,480],[1524,497],ap,null,'#FFC66E');txt(x,'at startup',1458,520,19,'#FFC66E','center','700',ease(seg(ap,.6,1)))}
 const cy=[497,539,581,623],land=[33.8,34.5,34.8,35.1];
 SKILLS.forEach((n,i)=>{const u=seg(t,land[i],land[i]+.25);chip(x,1545,cy[i],n,fin(t,land[i],.15),i==0?fin(t,37.9,.3):0,fin(t,35.5+i*.3,.2),(i?-26:0)*(1-ease(u)))});
 {const a=fin(t,39.1,.2);if(a>0){x.save();x.globalAlpha=a;rr(x,1545,656,290,102,10,'rgba(45,178,174,.28)','#2DB2AE',3);txt(x,'SKILL.md: full instructions',1558,678,17,'#F8E9CC','left','800');x.fillStyle='rgba(248,233,204,.4)';for(let k=0;k<4;k++)x.fillRect(1558,698+k*14,250*(.55+.4*hash(k,9)),6);x.restore();
  const pa=a*(s<=20?1:0);pill(x,1690,790,234,32,'#2DB2AE',pa);txt(x,'= pulling the card',1690,791,19,'#0F2F33','center','900',pa)}}
 if(s==21){const q=fin(t,T(21)+.2,.4);dashRect(x,1540,772,300,52,'#2DB2AE',q);txt(x,'room to work',1690,799,22,'#2DB2AE','center','800',q)}
 tokenP(x,[1380,484],[1690,497],seg(t,33.0,33.8),'pdf-processing','#FFC66E',15);
 tokenP(x,[1200,610],[1690,708],seg(t,38.4,39.2),'full instructions','#2DB2AE',18);
 if(s==19){const ta=ease(seg(t,37.1,37.6));bubble(x,1690,lerp(150,205,ta),'Extract the text from this PDF','#F8E9CC',Math.min(1,ta*3),20)}}
function drawBoard(t,cam,s){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1390,540,40,1390,540,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 if(s==22){drawSplit(x,t);comp([['board',0]]);return}
 x.fillStyle='rgba(201,184,224,.25)';for(let y=120;y<960;y+=28)x.fillRect(918,y,4,14); // not setLineDash: its anti-aliasing differs between renders
 txt(x,'BEFORE',90,156,40,'#C9B8E0');txt(x,'one big prompt: all of it, every task',90,204,26,'#C9B8E0','left','600'); // below the corner tag
 txt(x,'AGENT SKILLS',990,156,40,'#FFC66E');newTag(x,1318,152,fin(t,T(16)+.9,.3));txt(x,'load only what the task needs',990,204,26,'#FFC66E','left','600',fin(t,T(16)+1));
 boardBefore(x,t);boardFolder(x,t);boardContext(x,t);comp([['board',0]])}
// shot 22: the kitchen and the technology side by side: tab = chip, card = SKILL.md body
function drawSplit(x,t){const a1=fin(t,T(22)+.1,.4),a2=fin(t,45.45,.4);
 rr(x,60,130,870,800,24,'rgba(138,74,58,.28)','#8A4A3A',3);rr(x,990,130,870,800,24,'rgba(45,178,174,.12)','#2DB2AE',3);
 txt(x,'IN THE KITCHEN',100,176,34,'#F8E9CC');txt(x,'IN YOUR AGENT',1030,176,34,'#2DB2AE');
 // the tab, then the chip
 x.save();x.globalAlpha=a1;rr(x,160,260,260,78,[18,18,0,0],'#FFF6E6');txt(x,'SOUP',290,300,48,'#1B1430','center','900');txt(x,'the tab: its name, and when to use it',100,372,22,'#F8E9CC','left','700');
 rr(x,1080,260,430,78,14,'#3A2C58');pill(x,1190,299,200,42,'#FFC66E');txt(x,'pdf-processing',1190,300,22,'#1B1430','center','800');pill(x,1390,299,150,34,'#2DB2AE');txt(x,'~100 tokens',1390,300,17,'#0F2F33','center','900');
 txt(x,'the chip: its name + description',1030,372,22,'#2DB2AE','left','700');x.restore();
 arrowP(x,[560,299],[1050,299],fin(t,T(22)+.5,.5),'= only this loads at startup','#FFC66E',5);
 // the card, then the SKILL.md body
 x.save();x.globalAlpha=a2;rr(x,160,490,340,330,12,'#FFF6E6');rr(x,160,458,130,38,[10,10,0,0],'#FFF6E6');txt(x,'SOUP',225,478,22,'#1B1430','center','900');
 x.fillStyle='rgba(27,20,48,.3)';for(let k=0;k<8;k++)x.fillRect(184,530+k*34,k%2?200:280,10);txt(x,'the card: the whole recipe',100,862,22,'#F8E9CC','left','700');
 rr(x,1080,458,450,362,12,'rgba(45,178,174,.28)','#2DB2AE',4);txt(x,'SKILL.md body',1104,488,24,'#F8E9CC','left','900');x.fillStyle='rgba(248,233,204,.42)';for(let k=0;k<8;k++)x.fillRect(1104,520+k*34,380*(.5+.45*hash(k,9)),10);
 txt(x,'the body: the full instructions',1030,862,22,'#2DB2AE','left','700');x.restore();
 arrowP(x,[560,640],[1050,640],fin(t,45.7,.5),'= only when a task needs it','#2DB2AE',5)}

// ---------- title card: LEARN / AGENT SKILLS / IN 60 SECONDS in the thumbnail's style, on screen until "Agent Skills in sixty seconds" is spoken ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,560,60,W/2,560,980);g.addColorStop(0,'rgba(255,196,120,.85)');g.addColorStop(.4,'rgba(238,110,104,.45)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();const z=1+.035*t/T(1);x.translate(W/2,H/2);x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=s=>`${s}px Impact, "Arial Black", sans-serif`,TOPIC='AGENT SKILLS';
 x.font=font(100);const size=Math.min(300,100*1560/x.measureText(TOPIC).width);
 const put=(s,X,Y,sz,col)=>{x.font=font(sz);x.lineWidth=sz*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 put('LEARN',W/2,282,size*.4,'#F8E9CC');put(TOPIC,W/2,282+size*.98,size,'#FFC66E');
 // the sticker is the brand mark: same red, same tilt, same words as the thumbnail
 x.save();x.translate(W/2,282+size*.98+190);x.rotate(-.035);
 x.font=font(104);const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle='#120A1C';x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();
 x.fillStyle='#E4493F';x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.fillText('IN 60 SECONDS',0,6);x.restore();x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}

// ---------- words on screen (screen space). A card finishes fading before its shot's cut. ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 // the brand's corner tag: the topic and the 60 s promise, on every frame, so a viewer always knows what this is
 {const x=ctx;x.font='800 32px Arial';const tw=x.measureText('Agent Skills').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'Agent Skills',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800')}
 card(t,3.75,4.9,960,760,'before: 1 big prompt, every task','#F8E9CC',38);                    // 2
 card(t,5.7,7.8,960,800,'now: about 100 tokens per skill','#FFC66E',40);                     // 3
 card(t,9.3,10.4,960,520,'here’s how','#F8E9CC',40);                                     // 5
 card(t,13.4,14.4,960,700,'= your big prompt','#FFC66E',44);                                // 7
 card(t,16.55,17.75,960,620,'…to fry one egg','#F8E9CC',40);                           // 9
 card(t,18.5,19.95,960,860,'Agent Skills = a recipe box','#FFC66E',40);                     // 10
 card(t,23.6,24.9,960,640,'he reads only the tabs','#F8E9CC',38);                           // 13
 card(t,27.0,28.15,960,640,'one card · nothing else','#F8E9CC',38);                   // 15
 card(t,29.2,31.2,972,860,'a skill = a folder + SKILL.md','#F8E9CC',38);                    // 16
 card(t,35.5,36.7,972,820,'about 100 tokens per skill','#FFC66E',38);                       // 18
 card(t,37.6,39.8,972,880,'the full instructions: only now','#F8E9CC',36);                  // 19
 card(t,40.4,42.3,972,820,'extra files: only if needed','#F8E9CC',36);                      // 20
 card(t,42.75,43.65,960,880,'THAT’S THE HOW','#FFC66E',72);                           // 21
 card(t,44.6,46.15,972,820,'tab first · card on a match','#F8E9CC',38);               // 22
 card(t,46.7,49.9,960,900,'many skills on hand · room to work','#2DB2AE',38);         // 23
 card(t,50.4,52.2,960,820,'a lesson as old as the kitchen','#FFC66E',42);                   // 24
 // the takeaway card, two lines (brand): plain statement, then the amber punchline; it stays to the end
 const v=fin(t,52.55,.35);if(v>0){const hh=lerp(124,210,fin(t,54.2,.35));ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-520,92,1040,hh,40);ctx.fill();ctx.restore();
  txt(ctx,'Don’t tell your agent everything.',W/2,154,56,'#F8E9CC','center','800',v);txt(ctx,'Tell it where to look.',W/2,236,64,'#FFC66E','center','800',fin(t,54.3,.35))}
 // call to action: a subscribe button that pops in on the spoken line, with the next episode under it
 const c=fin(t,55.7,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-55.7)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,915);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}
 card(t,56.2,0,1016,900,'Next in 60 seconds: why MCP went stateless','#C9B8E0',28)}

// shot 0 title, 1-4 and 23 studio, 5-15 and 24-26 kitchen, 16-22 board
const KIT=[5,6,7,8,9,10,11,12,13,14,15,24,25,26],STU=[1,2,3,4,23];
const CAMS=[null,
 (u,t)=>({x:lerp(900,940,u),y:560,z:lerp(1.06,1.14,u)}),                                      // 1 you at your desk; the wall of rules
 (u,t)=>({x:lerp(1180,1170,u),y:585,z:lerp(1.62,1.75,u)}),                        // 2 a task arrives; the wall pours into the context
 (u,t)=>({x:lerp(1180,1150,u),y:lerp(560,570,u),z:lerp(1.8,1.65,u)}),                        // 3 the screen flips: skills, ~100 tokens each
 (u,t)=>({x:lerp(720,760,u),y:lerp(470,460,u),z:lerp(1.5,1.68,u),b:[4]}),                     // 4 but how?
 (u,t)=>({x:lerp(930,990,u),y:540,z:lerp(1,1.06,u)}),                                         // 5 your kitchen, wide
 (u,t)=>({x:lerp(880,890,u),y:lerp(575,562,u),z:lerp(1.4,1.5,u),b:[4,0]}),                  // 6 the binder slams down
 (u,t)=>({x:lerp(820,860,u),y:lerp(560,556,u),z:lerp(1.5,1.6,u),b:[3,0]}),                  // 7 he points: your big prompt
 (u,t)=>({x:lerp(1130,1160,u),y:lerp(560,550,u),z:lerp(1.65,1.8,u),b:[3,0]}),                 // 8 the cook rereads all of it
 (u,t)=>({x:lerp(1480,1510,u),y:lerp(600,590,u),z:lerp(1.7,1.9,u),b:[4,0]}),                  // 9 the one egg, waiting
 (u,t)=>({x:lerp(900,930,u),y:lerp(518,524,u),z:lerp(1.3,1.34,u),b:[0,0]}),                   // 10 the binder goes to the shelf; the recipe box lands
 (u,t)=>({x:lerp(1040,1050,u),y:lerp(600,590,u),z:lerp(2.0,2.2,u),b:[5,0]}),                  // 11 a tab on every card
 (u,t)=>({x:lerp(850,860,u),y:lerp(542,536,u),z:lerp(1.5,1.6,u),b:[4,0]}),                // 12 its name, and when to use it
 (u,t)=>({x:lerp(1180,1210,u),y:lerp(590,580,u),z:lerp(1.55,1.7,u),b:[3,0]}),                 // 13 he reads only the tabs
 (u,t)=>({x:lerp(1600,1540,u),y:lerp(425,415,u),z:lerp(1.85,2.05,u),b:[4,0]}),                // 14 an order: soup
 (u,t)=>({x:lerp(1200,1230,u),y:lerp(600,585,u),z:lerp(1.5,1.7,u),b:[3,0]}),                  // 15 he pulls one card
 (u,t)=>{const v=(t-T(16))/(T(17)-T(16));return {x:lerp(540,985,v*.8+u*.2),y:lerp(500,540,u),z:lerp(1.25,1.03,v*.8+u*.2)}}, // 16 board: before, then across to a skill folder
 (u,t)=>({x:lerp(1300,1360,u),y:lerp(385,390,u),z:lerp(1.72,1.76,u)}),                                    // 17 SKILL.md's top lines
 (u,t)=>({x:lerp(1700,1720,u),y:lerp(528,506,u),z:lerp(1.8,1.95,u)}),                          // 18 the context column
 (u,t)=>({x:lerp(1300,1320,u),y:lerp(528,520,u),z:lerp(1.34,1.37,u)}),                          // 19 a task matches
 (u,t)=>({x:lerp(1380,1400,u),y:lerp(647,618,u),z:lerp(1.3,1.4,u)}),                         // 20 extra files, only if needed
 (u,t)=>({x:lerp(960,975,u),y:lerp(540,548,u),z:lerp(1,1.05,u)}),                             // 21 the whole board: that's the how
 (u,t)=>({x:960,y:540,z:lerp(1,1.06,u)}),                                                      // 22 tab = chip, card = body
 (u,t)=>({x:lerp(1000,1040,u),y:560,z:lerp(1.04,1.12,u)}),                                    // 23 studio: many skills on hand
 (u,t)=>({x:lerp(1010,960,u),y:lerp(550,540,u),z:lerp(1.12,1.02,u),b:[0,0]}),                 // 24 back in the kitchen, calm
 (u,t)=>({x:lerp(940,960,u),y:lerp(500,495,u),z:lerp(1.4,1.45,u),b:[3,0]}),                // 25 where to look
 (u,t)=>({x:lerp(960,950,u),y:lerp(472,468,u),z:lerp(1,1.03,u),b:[3,0]})                   // 26 you, and the ask
];
FILM={dur:CUTS[27]/30,cuts:CUTS,fadeIn:0,fadeOut:.45,
 cam(s,u,t){return s==0?{x:W/2,y:H/2,z:1}:CAMS[s](ease(u),t)},
 draw(t,cam,s){if(s==0)drawTitle(t);else if(KIT.includes(s))drawKitchen(t,cam);else if(STU.includes(s))drawStudio(t,cam);else drawBoard(t,cam,s);overlay(t)},
 plants(){return {}}};
// sound events on the picture's clock. Every cut gets a soft sound: 'cut' where the place changes, 'cutl' (quieter) on the others.
for(let i=1;i<27;i++)say(F(CUTS[i]),[1,5,16,23,24].includes(i)?'cut':'cutl'); // the hit's body lands on the cut (earshot measured it ~30 ms late otherwise)
say(T_SLAM+.5,'thud');say(T_BOX+.55,'thud');say(T_FIX+.05,'paper');                                  // binder slams, box lands, binder slides to the shelf
for(const t of [14.8,15.1,15.4,15.7,16.0])say(t,'paper');                                              // the cook flips the pages
for(let i=0;i<6;i++)say(3.9+i*.14,'tick');                                                             // the prompt pours into the context
for(let i=0;i<4;i++)say(T(3)+.45+i*.18,'tick');                                                        // skill chips appear
for(let i=0;i<5;i++)say(T(11)+.17+i*.2,'flip');                                                        // tabs rise: one soft card flip each
for(const t of [T(13)+.2,T(13)+.5,T(13)+.8,T(13)+1.1,T(13)+1.4])say(t,'tick');                         // he reads the tabs
say(T(14)+.02,'bell');say(T(15)+.2,'paper');                                                           // the soup order, the card is pulled
for(let i=0;i<5;i++)say(T(25)+.3+i*.65,'tick');                                                        // where to look
for(const t of [33.8,35.5,35.8,36.1,36.4,38.4,55.7])say(t,'tick');                                     // chip lands, tokens tags, body slides, subscribe
say(39.1,'paper');say(T(23)+.8,'tick');
