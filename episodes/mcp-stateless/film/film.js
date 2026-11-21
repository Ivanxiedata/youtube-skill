// Episode 1: MCP goes stateless (spec 2026-07-28), told through a diner: one waiter who keeps your order in his head
// versus a complete order slip any waiter can take. 59 s. Voice from tts.py (vo.wav laid in at .3 s): times below are voice time + .3.
// Three places on one clock: the diner (the story), the studio (today), the board (BEFORE vs MCP 2026-07-28).
// Helpers txt/pill/bubble/fin, the studio, the board and the overlay follow Episode 0 (episodes/deepseek-super-agent/film/film.js).
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function bubble(x,X,Y,s,col,a,size=18){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`800 ${size}px Arial`;pill(x,X,Y,x.measureText(s).width+size*1.6,size*1.9,col);txt(x,s,X,Y+1,size,'#1B1430','center','800');x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const CUTS=[0,44,87,150,221,261,303,374,422,471,528,576,627,690,753,789,833,897,962,1041,1094,1155,1226,1289,1331,1380,1443,1491,1544,1602,1664,1770];
const CT=i=>CUTS[i]/30,inS=(t,a,b)=>t>=CT(a)&&t<CT(b); // state changes sit on cut frames, so nothing pops inside a shot
const pick=(t,rows)=>{let r=rows[0];for(const q of rows)if(t>=q[0])r=q;return r};

// ---------- the waiter's costume: paper diner cap and bow tie, drawn after actor() in the rig's own transforms ----------
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function cap(x,p,stripe='#E4493F'){x.save();bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0);
 x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(-86,-58);x.lineTo(-78,-132);x.quadraticCurveTo(0,-158,84,-140);x.lineTo(88,-58);x.quadraticCurveTo(0,-88,-86,-58);x.fill();
 x.fillStyle=stripe;x.beginPath();x.moveTo(-86,-58);x.quadraticCurveTo(0,-88,88,-58);x.lineTo(87,-80);x.quadraticCurveTo(0,-110,-85,-80);x.closePath();x.fill();
 x.strokeStyle='rgba(27,20,48,.22)';x.lineWidth=5;x.lineCap='round';x.beginPath();x.moveTo(-30,-150);x.lineTo(-22,-112);x.stroke();x.restore()}
function bowTie(x,p,col='#17141F'){x.save();bodyT(x,p);const y=20+Math.sin(p.breath||0)*3;x.fillStyle=col;
 for(const s of [-1,1]){x.beginPath();x.moveTo(0,y);x.lineTo(s*40,y-21);x.lineTo(s*40,y+21);x.closePath();x.fill()}x.beginPath();x.roundRect(-10,y-11,20,22,6);x.fill();x.restore()}
const waiter=(x,id,ch,p,cam,stripe)=>{actor(x,id,ch,p,cam);cap(x,p,stripe);bowTie(x,p,ch.skin=='#17141F'?'#F4EBDD':'#17141F');return p};

// ---------- diner (the engine's cafe room): fixed places ----------
const FL=868,MS=.82,MAS_X=1780,HS_X=1420,MAS_C=860,CUST=[1160,620],TA=[1050,1610],TB=[2800,3360],TC=[-880,-360],TY=830;
const CTR=[-140,860,590],SY=440,SS=.7,PUT=[745,572],HOLD=[700,520],SLIP0=[1420,650];
const CHEF={skin:'#E9C6A0',cloth:'#5FA35A',hood:'#3F7A40',hand:'#E9C6A0',face:INK,leg:'#2C2A49',shoe:'#17141F',finger:INK};
const STAFF=[{id:'w1',ch:FRIEND,x:230,in:0},{id:'w2',ch:GUEST_A,x:440,in:0},{id:'w3',ch:GUEST_B,x:650,in:38.9},{id:'w4',ch:CHEF,x:20,in:39.5}];
const catchPt=w=>[w.x+84,SY-49];
const outW=makeWalk({pts:[[MAS_X,FL],[2180,FL],[2330,700]],t0:CT(1),t1:CT(2)+.1,steps:5,scale:cafeScale});
const HS=t=>[1300,585+Math.sin(t*13)*7*fin(t,10.5,.3)*(1-fin(t,11.9,.3))];
// "any request can land on any of them": three slips from three tables to three different waiters
const FLY=[{from:[1300,700],w:2,t0:41.0},{from:[-470,700],w:3,t0:41.35},{from:[1560,700],w:1,t0:41.7}];
function counter(x){const [a,b,top]=CTR;let g=x.createLinearGradient(0,top,0,800);g.addColorStop(0,'#7A4038');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(a,top,b-a,800-top);
 x.fillStyle='rgba(20,10,30,.28)';for(let X=a+40;X<b-60;X+=200)x.fillRect(X,top+40,150,130);
 x.fillStyle='#B0705A';x.beginPath();x.roundRect(a-16,top-12,b-a+32,24,8);x.fill();x.fillStyle='rgba(255,226,190,.45)';x.fillRect(a-16,top-12,b-a+32,4)}
function calendar(x,t){x.fillStyle='#2A1838';x.fillRect(2590,180,190,230);x.fillStyle='#F4EBDD';x.fillRect(2600,190,170,210);x.fillStyle='#E4493F';x.fillRect(2600,190,170,54);
 txt(x,'JULY 2026',2685,218,25,'#FFF6E6','center','900');txt(x,'28',2685,330,112,'#1B1430','center','900');
 const u=ease(seg(t,5.25,6.1));if(u>0&&t<CT(4)){x.save();x.strokeStyle='#E4493F';x.lineWidth=7;x.lineCap='round';x.beginPath();x.ellipse(2685,328,74,60,-.12,-1.2,-1.2+u*6.6);x.stroke();x.restore()}}
function thought(x,X,Y,a,lines,drop=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle='#F8E9CC';
 x.beginPath();x.arc(X+34,Y-16,9,0,7);x.fill();x.beginPath();x.arc(X+58,Y-44,14,0,7);x.fill();
 const h=44+lines.length*34;x.beginPath();x.roundRect(X+62,Y-62-h,270,h,30);x.fill();
 lines.forEach((s,i)=>{const d=ease(seg(drop,i*.18,i*.18+.6)),y0=Y-62-h+40+i*34;txt(x,s,lerp(X+90,HOLD[0]-60,Math.sqrt(d)),lerp(y0,HOLD[1]-30+i*20,d*d),(i?24:27)*(1-.6*d),i?'#3A2D5A':'#E4493F','left','800',1-d*d)});x.restore()}
// the order slip: everything the request needs, written on the request itself
function slip(x,X,Y,sc,rot,n,a=1,glow=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.rotate(rot);x.scale(sc,sc);
 if(glow>0){x.save();x.globalAlpha*=glow;x.strokeStyle='#FFC66E';x.lineWidth=12;x.beginPath();x.roundRect(-97,-127,194,254,12);x.stroke();x.restore()}
 x.fillStyle='#F4EBDD';x.beginPath();x.roundRect(-90,-120,180,240,6);x.fill();txt(x,'ORDER',0,-90,28,'#E4493F','center','900');x.fillStyle='rgba(27,20,48,.3)';x.fillRect(-70,-68,140,3);
 [['who','AI app'],['version','2026-07-28'],['wants','search']].forEach((r,i)=>{const v=clamp(n-i);txt(x,r[0],-74,-34+i*52,15,'#7A6A8A','left','700',v);txt(x,r[1],-74,-13+i*52,21,'#1B1430','left','800',v)});x.restore()}
function numStand(x,t){const a=fin(t,CT(7)+.18,.25);if(a<=0||t>=CT(16))return;x.save();x.translate(1500,TY);x.scale(1,a);
 x.fillStyle='#F4EBDD';x.beginPath();x.moveTo(-38,0);x.lineTo(-25,-78);x.lineTo(25,-78);x.lineTo(38,0);x.closePath();x.fill();x.fillStyle='#C9B8A0';x.fillRect(-38,-4,76,4);
 txt(x,'12',0,-38,48,'#1B1430','center','900');x.restore()}

function custPose(t){const m=pick(t,[[0,.6,0,.2],[CT(1),-.55,.6,.7],[CT(6),.65,0,.2],[CT(10),-.5,.5,.5],[CT(16),.7,0,.3]]);
 const p={x:CUST[0],y:CUST[1],s:.86,face:1,noLegs:true,breath:t*2.1+.5,blink:blinkAt(t,[.9,3.6,11.2,13.5,18.5,28.7,31,39.6,44.9]),
  look:inS(t,16,17)?.55:.85,lookY:inS(t,16,17)?.5:inS(t,6,7)?.1:-.15,mouth:m[1],sad:m[2],brow:m[3],open:inS(t,1,2)?.5:0,hands:{},showH:{}};
 if(inS(t,1,2)){p.hands.r=[150+12*Math.sin(t*8),-30];p.showH.r=true}
 else if(inS(t,6,7)){p.hands.r=w2l(p,HS(t));p.showH.r=true}
 else if(inS(t,10,12)){p.hands.r=[140+Math.sin(t*10)*22,-95];p.showH.r=true}
 else if(inS(t,16,17)){p.hands.r=w2l(p,[SLIP0[0]-84,SLIP0[1]+74]);p.showH.r=true}
 return p}
function extraPose(i,t){const X=[-470,2900,3260][i],f=i==2?-1:1,wave=inS(t,10,12);
 return {x:X,y:CUST[1],s:.86,face:f,noLegs:true,breath:t*2+i,look:i?-.85:.85,lookY:-.15,mouth:wave?-.5:.5,sad:wave?.4:0,brow:wave?.5:.2,
 blink:blinkAt(t,[18.2+i*.3,19.9+i*.2,40+i*.4]),hands:wave?(f>0?{r:[140+Math.sin(t*9+i)*22,-95]}:{l:[-140+Math.sin(t*9+i)*22,-95]}):{},showH:wave?(f>0?{r:true}:{l:true}):{}}}
function masPose(t){if(inS(t,1,2)){const w=outW.at(t);return walkPose({x:w.c[0],y:standY(w.c[1],w.s),s:w.s,face:1,breath:t*2,look:.7,lookY:.1,mouth:.5,brow:.2},w)}
 const X=t<CT(6)?MAS_X:t<CT(7)?HS_X:t<CT(16)?MAS_X:MAS_C,busy=inS(t,10,12);
 const m=pick(t,[[0,-.7,.1,.6],[CT(6),-.8,.5,.7],[CT(7),-.75,.3,.6],[CT(9),.55,-.6,.5],[CT(10),0,0,-.3],[CT(16),.6,.1,.6],[CT(23),-.75,.1,.3],[CT(24),-.5,.6,.7],[CT(25),.1,.05,.85],[CT(26),.5,-.6,.6],[CT(27),-.3,.6,.7]]);
 const p={x:X,y:standY(FL,MS),s:MS,face:t<CT(16)?-1:1,breath:t*2.2,blink:blinkAt(t,[.7,11.4,13.2,16.6,28.5,40.2,45.6,47.2,50.4]),
  look:busy?Math.sin(t*5.5)*.85:m[1],lookY:m[2],mouth:m[3],sad:busy?.65:0,brow:busy?.7:.2,open:busy?.35+.2*Math.abs(Math.sin(t*7)):0,hands:{},showH:{}};
 if(t<CT(1)){const w=fin(t,.35,.3);p.hands.r=[lerp(97,150,w)+Math.sin(t*9)*16*w,lerp(220,-50,w)];p.showH.r=w>.1}
 else if(inS(t,6,7)){p.hands.l=w2l(p,HS(t));p.showH.l=true}
 else if(busy){p.hands={l:[-150,-30+Math.sin(t*8)*26],r:[150,-30-Math.sin(t*8)*26]};p.showH={l:true,r:true}}
 else if(t>=CT(24)){const g=fin(t,44.4,.35),s=slipAt(t);p.hands.l=[lerp(-97,(s[0]+14-X)/MS,g),lerp(220,(s[1]+27-p.y)/MS,g)];p.showH.l=g>.1}
 return p}
function staffPose(w,i,t){const up=w.in?1-ease(seg(t,w.in,w.in+.5)):0,duck=i==2?ease(seg(t,43.5,44.3)):0,shrug=inS(t,10,12)&&i<2?1:0;
 const p={x:w.x,y:SY+(up+duck)*320,s:SS,face:1,noLegs:true,breath:t*2+i*1.3,blink:blinkAt(t,[18+i*.7,20+i*.2,30.9,39.9+i*.4,43.2]),
  look:shrug?.7:inS(t,17,18)?.8:inS(t,22,23)?(i==3?-.6:.7):.5,lookY:inS(t,22,23)||inS(t,17,18)?-.4:0,mouth:shrug?-.25:.6,brow:shrug?.7:.25,sad:shrug?.3:0,hands:{},showH:{}};
 if(shrug){const k=Math.sin(t*3+i)*8;p.hands={l:[-170,60+k],r:[170,60+k]};p.showH={l:true,r:true}}
 let r=0;if(i==1)r=inS(t,17,18)?fin(t,30.5):inS(t,22,24)?fin(t,42.1):0;if(i==2)r=inS(t,22,24)?fin(t,41.4):0;if(i==3)r=inS(t,22,24)?fin(t,41.75):0;
 if(r>0){let tg=[lerp(97,120,r),lerp(220,-70,r)];if(i==2){const d=fin(t,43.05,.35);tg=[lerp(tg[0],(PUT[0]-w.x)/SS-8,d),lerp(tg[1],(PUT[1]-SY)/SS-14,d)];
   const wv=fin(t,43.05,.4); /* the hand stays up and goes down with him behind the counter: no fast drop */if(wv>0){p.hands.l=[lerp(-97.5,-150+Math.sin(t*10)*18,wv),lerp(218,-60,wv)];p.showH.l=wv>.3}}p.hands.r=tg;p.showH.r=r>.1}
 return p}
// the slip that ends in the hero's hand: caught by w3, put on the counter, picked up
function slipAt(t){const c=catchPt(STAFF[2]),d=fin(t,43.05,.35),g=fin(t,44.8,.6);return [lerp(lerp(c[0],PUT[0],d),HOLD[0],g),lerp(lerp(c[1],PUT[1],d),HOLD[1],g),lerp(.4,.45,g),lerp(lerp(-.1,.3,d),-.06,g)]}
function slips(x,t){if(inS(t,16,17))slip(x,SLIP0[0],SLIP0[1],1,-.05,fin(t,28,.3)+fin(t,28.6,.3)+fin(t,29.2,.3));
 if(inS(t,17,18)){const u=easeIO(seg(t,29.95,31.0)),c=catchPt(STAFF[1]);slip(x,lerp(SLIP0[0],c[0],u),lerp(SLIP0[1],c[1],u)-Math.sin(u*Math.PI)*170,lerp(1,.4,u),lerp(-.05,-.5,Math.sin(u*Math.PI)),3)}
 if(inS(t,22,28)){FLY.forEach((f,i)=>{const u=seg(t,f.t0,f.t0+.9);if(u<=0||(i==0&&u>=1)||t>=CT(24))return;const e=easeIO(u),c=catchPt(STAFF[f.w]);
   slip(x,lerp(f.from[0],c[0],e),lerp(f.from[1],c[1],e)-Math.sin(e*Math.PI)*190,lerp(.5,.4,e),lerp(.2,-.4,Math.sin(e*Math.PI))-.1*e,3,Math.min(1,u*8))});
  if(t>=FLY[0].t0+.9){const s=slipAt(t);slip(x,s[0],s[1],s[2],s[3],3,1,inS(t,27,28)?fin(t,50.0,.4):0)}}}
function drawDiner(t,cam){const open=t<CT(2)?1:0;
 let x=layer('out',cam,.6);cafeOutside(x);
 x=layer('wall',cam);cafeWall(x);cafeFloor(x);calendar(x,t);
 x.save();x.beginPath();x.rect(XA,-900,XB-XA,900+CTR[2]);x.clip();STAFF.forEach((w,i)=>{if(t>=w.in)waiter(x,w.id,w.ch,staffPose(w,i,t),cam,'#2DB2AE')});x.restore();counter(x);
 const d=layer('door',cam);doorLeaf(d,open*1.75);
 const a=layer('act',cam);if(open)doorLight(a,1);for(const lx of [300,860,1500,1950,2680])pendant(a,lx,t,.1);
 if(t>=CT(10))for(let i=0;i<3;i++)actor(a,'extra'+i,[GUEST_B,FRIEND,GUEST_A][i],extraPose(i,t),cam);
 const cp=actor(a,'customer',WOMAN,custPose(t),cam);let mp=null;
 if(!inS(t,2,6)){mp=waiter(a,'hero',HERO,masPose(t),cam);if(inS(t,6,7))contact('handshake',h2w(cp,'r'),h2w(mp,'l'));if(t>=44.75){const s=slipAt(t);contact('slip',h2w(mp,'l'),[s[0]+14,s[1]+27])}}
 const f=layer('fg',cam);sideTable(f,TA[0],TA[1],TY);sideTable(f,TB[0],TB[1],TY);sideTable(f,TC[0],TC[1],TY);f.fillStyle='#F4EBDD';f.beginPath();f.ellipse(1320,TY-3,72,9,0,0,7);f.fill();numStand(f,t);slips(f,t);
 // what lives in the waiter's head: your session. It walks out with him (hook), and later falls onto the slip (takeaway)
 if(mp){const hy=mp.y-(HR*2+26)*mp.s,th=t<CT(2)?1:inS(t,9,12)?fin(t,CT(9)+.1,.3):inS(t,26,27)?1:0;thought(f,mp.x,hy,th,['table 12','AI app','version 2025-11-25'],inS(t,26,27)?seg(t,48.75,49.7):0)}
 bubble(f,1240,400,'?','#FFC66E',inS(t,2,3)?fin(t,3.0,.25):0,54);
 if(inS(t,10,12)){[[-330,430],[3040,430],[3120,470]].forEach((q,i)=>bubble(f,q[0],q[1],'!','#FFC66E',fin(t,17.9+i*.25,.2),40));
  STAFF.slice(0,2).forEach((w,i)=>bubble(f,w.x+10,SY-205-i*62,'not my table','#F8E9CC',fin(t,19.3+i*.5,.25),26))}
 const tg=inS(t,6,9)?fin(t,10.4):inS(t,16,18)?fin(t,27.95):0;bubble(f,CUST[0],CUST[1]-232,'AI app','#2DB2AE',tg,24);if(mp&&inS(t,6,8))bubble(f,mp.x,mp.y-(HR*2+70)*mp.s-30,'MCP server','#FFC66E',tg,24);
 if(inS(t,21,23))STAFF.slice(2).forEach(w=>bubble(f,w.x,SY-215,'+1','#2DB2AE',fin(t,w.in+.35,.2)*(1-fin(t,w.in+1.6,.3)),28));
 if(inS(t,23,24))bubble(f,STAFF[2].x+30,SY-170,'bye!','#F8E9CC',fin(t,43.3,.2)*(1-fin(t,44,.2)),24);
 comp([['out',cam.b[0]],['wall',cam.b[1]],['door',cam.b[1]],['act',0],['fg',cam.b[2]||0]])}

// ---------- studio: today. The big screen is the AI app; the others are tools it reaches through MCP ----------
const DESK_Y=780,HERO_P=[430,560],MON=[],TOOLS=['','files','search','calendar','database','email','code','maps','tickets','docs'];
for(let i=0;i<5;i++)MON.push({cx:i?820+i*235:820,by:DESK_Y,w:i?190:280,h:i?124:180,row:0});
for(let i=0;i<5;i++)MON.push({cx:880+i*215,by:470,w:170,h:110,row:1});
function studioWall(x){let g=x.createLinearGradient(0,0,0,760);g.addColorStop(0,'#33255A');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 g=x.createRadialGradient(1100,300,30,1100,300,900);g.addColorStop(0,'rgba(255,196,130,.22)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 x.fillStyle='#237F80';x.fillRect(-800,700,W+2400,600);x.fillStyle='#2F9A98';x.fillRect(-800,692,W+2400,10);
 x.fillStyle='#241736';x.fillRect(690,470,1100,16);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(690,486,1100,10)}
function desk(x){let g=x.createLinearGradient(0,DESK_Y,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(200,DESK_Y,1700,500);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(200,DESK_Y,1700,4)}
function monitor(x,m,i,t,st){x.save();const {cx,by,w,h}=m,top=by-26-h,l=cx-w/2;
 x.fillStyle='#1B1430';x.fillRect(cx-7,by-28,14,28);x.beginPath();x.ellipse(cx,by-2,w*.2,6,0,0,7);x.fill();
 if(st.chat){x.strokeStyle='#FFC66E';x.lineWidth=6;x.beginPath();x.roundRect(l-7,top-7,w+14,h+14,12);x.stroke()}
 x.fillStyle='#1B1430';x.beginPath();x.roundRect(l,top,w,h,8);x.fill();
 const sx=l+7,sy=top+7,sw=w-14,sh=h-14;x.fillStyle='#141238';x.fillRect(sx,sy,sw,sh);
 x.save();x.beginPath();x.rect(sx,sy,sw,sh);x.clip();
 if(st.work>0){x.globalAlpha=st.work;const n=7,gap=sh/n;for(let k=0;k<n+1;k++){const y=sy+((k*gap+t*22*(1+hash(i,1))+i*9)%(sh+gap))-gap/2;x.fillStyle=k%3?'#2DB2AE':'#FF8F7A';x.fillRect(sx+8+hash(i,k)*10,y,sw*(.25+.5*hash(i+3,k)),Math.max(3,gap*.32))}}
 if(st.chat){const b=1-(st.basket||0);[[0,.55,'#C9B8E0'],[1,.42,'#2DB2AE'],[0,.64,'#C9B8E0']].forEach((r,k)=>{const v=b*fin(t,7.5+k*.35,.25);if(v<=0)return;x.globalAlpha=v;x.fillStyle=r[2];x.beginPath();x.roundRect(r[0]?sx+sw*(1-r[1])-12:sx+12,sy+16+k*48,sw*r[1],30,15);x.fill()});
  if(Math.floor(t*2.2)%2==0){x.globalAlpha=b;x.fillStyle='#F8E9CC';x.fillRect(sx+14,sy+sh-26,9,16)}
  if(st.basket>0){x.globalAlpha=st.basket;const bx=cx,byy=sy+sh*.56;x.strokeStyle='#FFC66E';x.lineWidth=7;x.lineCap='round';x.beginPath();x.arc(bx,byy-22,40,Math.PI,0);x.stroke();
   x.fillStyle='#FFC66E';x.beginPath();x.moveTo(bx-66,byy-22);x.lineTo(bx+66,byy-22);x.lineTo(bx+48,byy+44);x.lineTo(bx-48,byy+44);x.closePath();x.fill();x.fillStyle='#141238';for(const k of [-28,0,28])x.fillRect(bx+k-3,byy-8,6,40);
   txt(x,'your basket',cx,sy+24,20,'#F8E9CC','center','800')}}
 x.restore();
 if(st.badge){const [lab,col,ba]=st.badge;if(ba>0){x.save();x.globalAlpha=ba;x.font='800 22px Arial';const bw=x.measureText(lab).width+34;pill(x,cx,top-24-(1-ba)*10,bw,40,col);txt(x,lab,cx,top-23-(1-ba)*10,22,'#1B1430','center','800');x.restore()}}
 x.restore()}
function monState(i,t){if(i==0)return {chat:1,work:0,basket:inS(t,18,19)?fin(t,32.3,.35):0,badge:['AI app','#FFC66E',t<CT(6)?fin(t,7.6,.3):inS(t,18,19)?1:0]};
 return {work:1,badge:[TOOLS[i],'#2DB2AE',t<CT(6)?fin(t,8.75+i*.1,.25):0]}}
function heroPose(t){const end=t>=55.6;
 return {x:HERO_P[0],y:HERO_P[1],s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[8.1,9.4,33.2,54.2,56.8,58.2]),
  look:end?.12:.85,lookY:end?.1:inS(t,18,19)?.45:.25,brow:inS(t,18,19)?.7:.25,sad:0,mouth:end?.9:inS(t,18,19)?.2:.65,tilt:inS(t,18,19)?-.05:.04}}
function drawStudio(t,cam){let x=layer('wall',cam,1);studioWall(x);for(let i=5;i<10;i++)monitor(x,MON[i],i,t,monState(i,t));
 const a=layer('lamp',cam);pendant(a,520,t,.08);pendant(a,1500,t,.08);
 const h=layer('hero',cam);waiter(h,'hero',HERO,heroPose(t),cam);
 const f=layer('fg',cam);desk(f);for(let i=0;i<5;i++)monitor(f,MON[i],i,t,monState(i,t));
 if(t<CT(6)){const v=fin(t,8.8,.4);f.strokeStyle=`rgba(255,198,110,${.55*v})`;f.lineWidth=4;for(let i=1;i<5;i++){f.beginPath();f.moveTo(960,DESK_Y-110);f.lineTo(MON[i].cx-MON[i].w/2,DESK_Y-90);f.stroke()}bubble(f,1010,DESK_Y-150,'MCP','#FFC66E',v,30)}
 comp([['wall',cam.b[0]],['lamp',0],['hero',0],['fg',cam.b[2]]])}

// ---------- board: brief.json "architecture", by hand. Left: MCP 2025-11-25. Right: MCP 2026-07-28 ----------
const BN={app:[230,560,'AI app'],sA:[650,350,'Server A'],sB:[650,560,'Server B'],sC:[650,770,'Server C'],
 app2:[1100,560,'AI app'],req:[1400,560,'Request'],n1:[1710,350,'Server A'],n2:[1710,560,'Server B'],n3:[1710,770,'Server C']};
const NEW={req:1},CH={app:WOMAN,app2:WOMAN,sA:HERO,sB:FRIEND,sC:GUEST_A,n1:HERO,n2:FRIEND,n3:GUEST_A},DIM={sB:1,sC:1};
const LIKE={app:'the customer',sA:'your one waiter',req:'like an order slip',n1:'any waiter'};
const BW=270,BH=96,nodeIn={app2:23.1,req:23.4,n1:23.8,n2:24.1,n3:24.4};
function edgePt(a,b){const A=BN[a],B=BN[b],dx=B[0]-A[0],dy=B[1]-A[1],k=Math.min(Math.abs(dx)>1?(BW/2+8)/Math.abs(dx):9,Math.abs(dy)>1?(BH/2+8)/Math.abs(dy):9);return [[A[0]+dx*k,A[1]+dy*k],[B[0]-dx*k,B[1]-dy*k]]}
function arrow(x,a,b,p,col='#C9B8E0',wd=4){if(p<=0)return;const [P,Q]=edgePt(a,b),E=[lerp(P[0],Q[0],p),lerp(P[1],Q[1],p)],an=Math.atan2(Q[1]-P[1],Q[0]-P[0]);
 x.save();x.globalAlpha*=Math.min(1,p*4);x.strokeStyle=col;x.lineWidth=wd;x.lineCap='round';x.beginPath();x.moveTo(P[0],P[1]);x.lineTo(E[0],E[1]);x.stroke();
 x.fillStyle=col;x.beginPath();x.moveTo(E[0]+Math.cos(an)*4,E[1]+Math.sin(an)*4);x.lineTo(E[0]-Math.cos(an-.45)*20,E[1]-Math.sin(an-.45)*20);x.lineTo(E[0]-Math.cos(an+.45)*20,E[1]-Math.sin(an+.45)*20);x.fill();x.restore()}
function token(x,a,b,u,lab,col){if(u<=0||u>=1)return;const [P,Q]=edgePt(a,b),e=easeIO(u);bubble(x,lerp(P[0],Q[0],e),lerp(P[1],Q[1],e),lab,col,Math.min(1,u*6,(1-u)*6),18)}
function node(x,id,t){const a=(nodeIn[id]?fin(t,nodeIn[id],.5):1)*(DIM[id]?.5:1);if(a<=0)return;const [X,Y,lab]=BN[id],nw=NEW[id];x.save();x.globalAlpha=a;const sc=nodeIn[id]?lerp(.85,1,fin(t,nodeIn[id],.5)):1;x.translate(X,Y);x.scale(sc,sc);
 x.fillStyle='#2A1F42';x.beginPath();x.roundRect(-BW/2,-BH/2,BW,BH,16);x.fill();x.strokeStyle=nw?'#FFC66E':'#6E5D8E';x.lineWidth=nw?7:3;x.stroke();
 const c=CH[id];let tx=0;if(c){x.save();x.beginPath();x.roundRect(-BW/2,-BH/2,BW,BH,16);x.clip();const q={x:-BW/2+48,y:-BH/2+40,s:.16,face:1,noLegs:true,breath:t*2+X,blink:blinkAt(t,[X%7+21,X%5+29,X%9+36]),mouth:.6,look:.5,lookY:.4};
  drawPerson(x,c,q);if(c!=WOMAN)cap(x,q,c==HERO?'#E4493F':'#2DB2AE');x.restore();tx=28}
 txt(x,lab,tx,2,28,'#F8E9CC','center','700');
 if(nw){pill(x,BW/2-30,-BH/2,64,28,'#FFC66E');txt(x,'NEW',BW/2-30,-BH/2+1,16,'#1B1430','center','900')}
 if(LIKE[id])txt(x,LIKE[id],-BW/2+6,-BH/2-22,24,'#C9B8E0','left','600',fin(t,(nodeIn[id]||20.6)+.5));
 if(DIM[id])txt(x,'does not know you',0,BH/2+24,21,'#C9B8E0','center','600');
 if(id=='sA')txt(x,'holds your session',0,BH/2+24,21,'#FFC66E','center','700');
 if(id=='req')['its version','who is asking','what it wants'].forEach((s,i)=>txt(x,s,-BW/2+30,BH/2+28+i*27,21,'#2DB2AE','left','700',fin(t,24.6+i*.25)));
 x.restore()}
function chip(x,X,Y,lab,st){pill(x,X,Y,220,44,'#3A2D5A');txt(x,lab,X,Y+1,23,'#F8E9CC','center','800');
 if(st>0){x.save();x.strokeStyle='#E4493F';x.lineWidth=7;x.lineCap='round';x.beginPath();x.moveTo(X-104,Y);x.lineTo(X-104+208*st,Y);x.stroke();x.restore();txt(x,'removed',X+124,Y+1,20,'#E4493F','left','800',st)}}
function drawBoard(t,cam){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1400,560,40,1400,560,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=120;y<960;y+=28)x.fillRect(898,y,4,14); // dashes as rects: setLineDash is not deterministic in headless Chromium
 txt(x,'BEFORE',90,156,40,'#C9B8E0');txt(x,'pinned to one server',90,204,28,'#C9B8E0','left','600');
 txt(x,'MCP 2026-07-28',960,156,40,'#FFC66E','left','700',fin(t,22.9));txt(x,'any server can answer',960,204,28,'#FFC66E','left','600',fin(t,24.5));
 arrow(x,'app','sA',1);chip(x,300,318,'1  handshake',fin(t,CT(14)+.1,.35));chip(x,300,372,'2  session ID',fin(t,CT(15)+.1,.35));
 token(x,'app','sA',(t*.6)%1,'request','#F8E9CC');
 arrow(x,'app2','req',fin(t,23.3,.4),'#FFC66E',5);[['n1',23.7],['n2',24.0],['n3',24.3]].forEach(q=>arrow(x,'req',q[0],fin(t,q[1],.4)));
 if(t>24.8&&!inS(t,19,21)){const c=t*.625,i=Math.floor(c)%3,u=c%1;token(x,'app2','req',u*2,'request','#FFC66E');token(x,'req',['n1','n2','n3'][i],u*2-1,'request','#FFC66E')}
 // state the app can see: the server mints a handle (a ticket); the app passes it back as an ordinary argument
 if(inS(t,19,21)){token(x,'n1','req',seg(t,34.95,35.65),'ticket #42','#FFC66E');token(x,'req','app2',seg(t,35.65,36.35),'ticket #42','#FFC66E');
  token(x,'app2','req',seg(t,36.6,37.3),'request + ticket #42','#FFC66E');token(x,'req','n3',seg(t,37.3,38.0),'request + ticket #42','#FFC66E');
  txt(x,'finds your basket',1710,770+BH/2+24,21,'#2DB2AE','center','700',fin(t,38.0,.3))}
 for(const id in BN)node(x,id,t);
 if(t>=CT(19)){const v=fin(t,36.3,.3);bubble(x,1100,668,'ticket #42','#FFC66E',v,22);pill(x,1196,646,58,26,'#2DB2AE',v);txt(x,'NEW',1196,647,15,'#1B1430','center','900',v)}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 // the brand's corner tag: the topic and the 60 s promise, on every frame
 {const x=ctx;x.font='800 32px Arial';const tw=x.measureText('Stateless MCP').width;pill(x,32+(tw+138)/2,52,tw+138,62,'rgba(27,20,48,.88)');
  txt(x,'Stateless MCP',58,54,32,'#FFC66E','left','800');pill(x,58+tw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+50,54,26,'#FFF6E6','center','800')}
 card(t,3.1,4.7,960,640,'this is how MCP worked…','#F8E9CC',40);
 card(t,5.1,7.05,960,620,'until July 28, 2026','#FFC66E',52);
 card(t,7.6,9.8,960,1180,'MCP = Model Context Protocol · how AI apps reach their tools','#F8E9CC',34);
 card(t,10.5,12.15,960,560,'first: a handshake','#F8E9CC',40);
 card(t,13.0,15.4,960,760,'session ID  =  table number','#FFC66E',44);
 card(t,15.95,17.3,960,820,'the order lives in one server’s head','#F8E9CC',36);
 card(t,18.0,20.6,960,760,'the others cannot simply step in','#F8E9CC',38);
 card(t,21.5,24.8,960,1100,'MCP spec 2026-07-28 · shipped · the current version','#FFC66E',36);
 card(t,28.0,31.75,960,900,'every request carries everything it needs','#FFC66E',38);
 card(t,32.4,34.4,960,820,'what if it must remember your basket?','#F8E9CC',36);
 card(t,35.0,38.2,960,1040,'a ticket = a handle the app passes back with its request','#F8E9CC',34);
 card(t,38.9,40.55,130,620,'busy? just add servers','#F8E9CC',40);
 card(t,41.1,42.65,130,720,'any request → any server','#FFC66E',44);
 card(t,48.3,51.15,960,980,'memory: out of the server, onto the request','#FFC66E',36);
 const v=fin(t,51.6,.35);if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-560,92,1120,210,40);ctx.fill();ctx.restore();
  txt(ctx,'A server that remembers nothing',W/2,154,58,'#F8E9CC','center','800',v);txt(ctx,'is a server anyone can replace.',W/2,236,64,'#FFC66E','center','800',fin(t,53.2,.35))}
 // call to action: the subscribe button pops in on the spoken line. No "Next in 60 seconds" line: the next episode is not decided
 const c=fin(t,55.6,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-55.6)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}}

const PLACE='ddddssdddddd'+'bbbb'+'dd'+'s'+'bb'+'ddddddd'+'b'+'ss';
FILM={dur:59,cuts:CUTS,fadeIn:.15,fadeOut:.45,
 cam(s,u,t){const e=ease(u);return [
  {x:lerp(1440,1470,e),y:500,z:lerp(1.12,1.18,e),b:[3,.6,0]},                    // 0 diner: your waiter holds your order in his head
  {x:lerp(1760,1960,e),y:520,z:lerp(1,1.06,e),b:[3,.6,0]},                       // 1 he goes home, and the order goes with him
  {x:lerp(1270,1230,e),y:lerp(560,550,e),z:lerp(1.5,1.72,e),b:[4,1,0]},          // 2 you, with nothing
  {x:2685,y:lerp(310,300,e),z:lerp(2.1,2.7,e),b:[5,0,0]},                        // 3 the calendar: July 28, 2026
  {x:lerp(720,760,e),y:520,z:lerp(1.3,1.42,e),b:[2,0,0]},                        // 4 studio: the AI app
  {x:lerp(1040,1100,e),y:540,z:lerp(.9,.84,e),b:[2,0,0]},                        // 5 its tools, reached through MCP
  {x:lerp(1280,1300,e),y:lerp(560,550,e),z:lerp(1.6,1.85,e),b:[4,1,0]},          // 6 the handshake
  {x:lerp(1470,1440,e),y:lerp(590,600,e),z:lerp(1.18,1.3,e),b:[3,.6,0]},         // 7 a table number lands
  {x:lerp(1490,1500,e),y:lerp(770,760,e),z:lerp(2.5,3.1,e),b:[6,2,0]},           // 8 table 12 = the session ID
  {x:lerp(1900,1930,e),y:lerp(310,290,e),z:lerp(1.75,1.95,e),b:[5,1.5,0]},       // 9 the order lives in his head
  {x:lerp(1300,1340,e),y:560,z:lerp(.48,.52,e),b:[2,0,0]},                       // 10 busy night: everyone waves at one waiter
  {x:lerp(350,320,e),y:lerp(420,410,e),z:lerp(1.6,1.78,e),b:[4,0,0]},            // 11 the others: not my table
  {x:lerp(400,470,e),y:520,z:lerp(1.1,1.15,e)},                                  // 12 board: before
  {x:lerp(720,1260,e),y:lerp(560,550,e),z:lerp(1.1,1.2,e)},                      // 13 across to MCP 2026-07-28
  {x:lerp(340,330,e),y:lerp(335,330,e),z:lerp(2.3,2.7,e)},                       // 14 no handshake
  {x:lerp(430,450,e),y:lerp(390,400,e),z:lerp(1.8,1.65,e)},                      // 15 no session ID
  {x:lerp(1450,1470,e),y:lerp(600,590,e),z:lerp(1.8,1.95,e),b:[4,1,0]},          // 16 the complete order slip
  {x:lerp(1150,720,e),y:lerp(560,510,e),z:lerp(1,1.1,e),b:[3,0,0]},     // 17 any waiter takes it
  {x:lerp(800,830,e),y:lerp(615,600,e),z:lerp(1.9,2.25,e),b:[3,0,0]},            // 18 studio: a shopping basket
  {x:lerp(1320,1300,e),y:lerp(560,570,e),z:lerp(1.1,1.18,e)},                   // 19 board: the server hands back a ticket
  {x:lerp(1440,1460,e),y:lerp(640,650,e),z:lerp(1.15,1.2,e)},                     // 20 the app shows it to another server
  {x:lerp(400,460,e),y:lerp(500,490,e),z:lerp(1.22,1.12,e),b:[3,0,0]},           // 21 a busy restaurant adds servers
  {x:lerp(640,600,e),y:520,z:lerp(.82,.87,e),b:[2,0,0]},                         // 22 any request, any server
  {x:lerp(690,720,e),y:lerp(470,480,e),z:lerp(1.55,1.7,e),b:[4,0,0]},            // 23 one goes home
  {x:lerp(790,810,e),y:lerp(480,470,e),z:lerp(1.85,2.1,e),b:[5,0,0]},            // 24 the next one takes your order
  {x:lerp(850,858,e),y:lerp(390,380,e),z:lerp(2.4,2.75,e),b:[6,0,0]},            // 25 never a better waiter
  {x:lerp(840,860,e),y:lerp(330,340,e),z:lerp(1.6,1.7,e),b:[4,0,0]},           // 26 the memory leaves his head
  {x:lerp(720,716,e),y:lerp(545,548,e),z:lerp(3.1,3.8,e),b:[8,0,0]},             // 27 and lands on the slip
  {x:lerp(960,965,e),y:lerp(360,365,e),z:lerp(.9,.94,e)},                        // 28 the whole design
  {x:lerp(1100,1060,e),y:540,z:lerp(.86,.92,e),b:[2,0,0]},                       // 29 studio: any server will do
  {x:lerp(640,700,e),y:lerp(462,478,e),z:lerp(1.38,1.26,e),b:[2,0,0]}            // 30 subscribe
 ][s]},
 draw(t,cam,s){({d:drawDiner,s:drawStudio,b:drawBoard})[PLACE[s]](t,cam);overlay(t)},
 plants(){return {hero:outW.plants()}}};
for(const t of outW.plants())say(t,'step');say(CT(2),'door');
for(const t of [3.0,12.65,25.2,26.4,28.0,28.6,29.2,38.9,39.5,50.0,55.6])say(t,'tick');
for(const t of [29.95,41.0,41.35,41.7,44.8])say(t,'paper');for(const t of [31.0,42.6])say(t,'bell');
for(const i of [4,6,12,16,18,19,21,28,29])say(CT(i),'cut');
