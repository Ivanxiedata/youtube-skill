// Episode 0, cut 2: DeepSeek Super-agent told through Napoleon and his chief of staff, Berthier.
// 60 s. Voice from tts.py (vo.wav laid in at .3 s), so every time below is voice time + .3.
// Three places on one clock: the battlefield (the story), the studio (today), the board (the architecture).
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function bubble(x,X,Y,s,col,a,size=18){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`800 ${size}px Arial`;pill(x,X,Y,x.measureText(s).width+size*1.6,size*1.9,col);txt(x,s,X,Y+1,size,'#1B1430','center','800');x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));

// ---------- battlefield: Napoleon on a hill, Berthier at a camp table, the army on the plain ----------
const HZ=610,HILL_Y=632,NAP_X=480,BER_X=800,PAPER=[836,497];
const CORPS=[{x:1560,y:1250},{x:2200,y:1285},{x:2840,y:1250}],CK=2; // the front row of the army
const marchD=(t,i)=>t<40?250*ramp(t,25.2+i*.3,27.9+i*.3,.2):300+(t-49.47)*40;
const marching=(t,i)=>(t>25.2+i*.3&&t<27.9+i*.3)||t>49;
function sky(x){let g=x.createLinearGradient(0,-300,0,HZ);g.addColorStop(0,'#2B2050');g.addColorStop(.45,'#6A4590');g.addColorStop(.78,'#E0708A');g.addColorStop(1,'#FFC66E');x.fillStyle=g;x.fillRect(-3000,-1500,9500,1500+HZ);
 x.fillStyle='#8A5298';x.beginPath();x.moveTo(-3000,HZ);for(let i=0;i<=42;i++)x.lineTo(-3000+i*225,HZ-26-58*hash(i,5)-(i%3==0?36:0));x.lineTo(6500,HZ);x.fill()}
function ground(x){const g=x.createLinearGradient(0,HZ,0,1100);g.addColorStop(0,'#9A5A80');g.addColorStop(.25,'#5A3A78');g.addColorStop(1,'#2E2150');x.fillStyle=g;x.fillRect(-3000,HZ,9500,1600)}
// one soldier, feet at X,Y. Far ones (small k) are two blocks of colour.
function soldier(x,X,Y,k,ph,mv,t){const y=Y-(mv?Math.abs(Math.sin(t*7+ph))*4*k:Math.sin(t*1.6+ph)*k);
 if(k<.3){x.fillStyle='#34508C';x.fillRect(X-9*k,y-62*k,18*k,62*k);x.fillStyle='#17141F';x.fillRect(X-8*k,y-96*k,16*k,34*k);return}
 const st=mv?Math.sin(t*7+ph)*6*k:0;
 x.fillStyle='#2C2A49';x.fillRect(X-9*k+st,Y-28*k,7*k,28*k);x.fillRect(X+2*k-st,Y-28*k,7*k,28*k);
 x.fillStyle='#3A5C9A';x.fillRect(X-11*k,y-62*k,22*k,38*k);
 x.strokeStyle='#C9D3E8';x.lineWidth=2.5*k;x.lineCap='butt';x.beginPath();x.moveTo(X-10*k,y-61*k);x.lineTo(X+10*k,y-27*k);x.moveTo(X+10*k,y-61*k);x.lineTo(X-10*k,y-27*k);x.stroke();
 x.fillStyle='#F8E9CC';x.beginPath();x.arc(X,y-72*k,10*k,0,7);x.fill();
 x.fillStyle='#17141F';x.fillRect(X-9*k,y-98*k,18*k,20*k);x.fillStyle='#E4493F';x.fillRect(X-2*k,y-108*k,4*k,10*k);
 x.strokeStyle='#C9B8E0';x.lineWidth=2.5*k;x.beginPath();x.moveTo(X+13*k,y-30*k);x.lineTo(X+17*k,y-112*k);x.stroke()}
// a block of 18 soldiers; a corps also carries a flag
function block(x,cx,cy,k,t,mv,seed,flag){for(let r=2;r>=0;r--)for(let c=0;c<6;c++)soldier(x,cx+(c-2.5)*27*k+r*9*k,cy-r*13*k,k,mv?seed:seed+c*1.7+r*.9,mv,t);
 if(flag){const px=cx-96*k,top=cy-168*k-(mv?Math.abs(Math.sin(t*7+seed))*4*k:0);x.fillStyle='#C9B8E0';x.fillRect(px-2*k,top,4*k,168*k);
  ['#3A5C9A','#F4EBDD','#E4493F'].forEach((c,i)=>{x.fillStyle=c;x.fillRect(px+2*k+i*16*k,top+Math.sin(t*3+seed+i*.9)*3*k,16*k,32*k)})}}
const ROWS=[.12,.2,.28,.36,.44,.52,.6,.68,.75,.81,.87,.92,.96,.985];
function army(x,t){for(let i=ROWS.length-1;i>=0;i--){const d=ROWS[i],k=lerp(2.1,.08,d),y=lerp(1320,HZ+10,Math.pow(d,.75)),sp=190*k+26;x.globalAlpha=d<.5?1:lerp(1,.5,d*2-1);
  for(let X=1180+hash(i,2)*sp;X<4600;X+=sp)block(x,X,y,k,t,false,i*31+X*.01,false)}x.globalAlpha=1;
 {const g=x.createLinearGradient(0,HZ,0,1150);g.addColorStop(0,'rgba(154,90,128,.72)');g.addColorStop(1,'rgba(154,90,128,0)');x.globalCompositeOperation='source-atop';x.fillStyle=g;x.fillRect(-3000,HZ-200,9500,800);x.globalCompositeOperation='source-over'}
  const hz=(t>24.59&&t<28)?.5:0;if(hz){x.fillStyle=`rgba(46,33,80,${hz})`;x.fillRect(-3000,HZ-140,9500,1800)}
 CORPS.forEach((c,i)=>block(x,c.x+marchD(t,i),c.y,CK,t,marching(t,i),i*7,true))}
function hill(x){const path=()=>{x.beginPath();x.moveTo(-3000,1700);x.lineTo(-3000,700);x.quadraticCurveTo(100,640,400,HILL_Y);x.lineTo(930,HILL_Y+8);x.quadraticCurveTo(1130,662,1310,900);x.lineTo(1400,1700)};
 const g=x.createLinearGradient(0,620,0,1100);g.addColorStop(0,'#4A2F6A');g.addColorStop(1,'#241736');x.fillStyle=g;path();x.closePath();x.fill();
 x.strokeStyle='rgba(255,190,150,.4)';x.lineWidth=5;x.beginPath();x.moveTo(-3000,700);x.quadraticCurveTo(100,640,400,HILL_Y);x.lineTo(930,HILL_Y+8);x.quadraticCurveTo(1130,662,1310,900);x.stroke()}
function campTable(x){x.fillStyle='#6E3A34';x.fillRect(712,512,10,134);x.fillRect(888,512,10,134);x.fillStyle='#8A4A3A';x.fillRect(696,502,218,13);x.fillStyle='rgba(255,226,190,.5)';x.fillRect(696,502,218,3);
 x.fillStyle='#E0D2C0';x.fillRect(738,496,46,6);x.fillStyle='#F4EBDD';x.fillRect(812,494,54,8)}
// the hat goes on after actor(), in the head's own transform, so the engine file stays untouched
function bicorne(x,p,col,trim){x.save();x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}
 x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0);
 x.fillStyle=col;x.beginPath();x.moveTo(-170,-42);x.quadraticCurveTo(-120,-152,0,-178);x.quadraticCurveTo(120,-152,170,-42);x.quadraticCurveTo(0,-108,-170,-42);x.fill();
 x.strokeStyle=trim;x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(-162,-45);x.quadraticCurveTo(0,-109,162,-45);x.stroke();
 x.fillStyle='#E4493F';x.fillRect(-10,-150,20,30);x.fillStyle='#F4EBDD';x.fillRect(-10,-140,20,10);x.restore()}
function napPose(t){const sh=fin(t,3.35,.2)*(1-fin(t,5.2,.3));
 return {x:NAP_X,y:standY(HILL_Y,.5),s:.5,face:1,breath:t*2.2,blink:blinkAt(t,[1.1,6.5,17.6,19.9,21.9,26.2,50.6,54.3]),
  look:kf(t,[[0,.75],[16.6,.75],[18,.3],[20.4,.9],[53.8,.8],[54.9,.1]]),lookY:kf(t,[[0,.15],[16.6,.3],[20.4,.1]]),
  brow:kf(t,[[0,.2],[3.3,.2],[3.5,-.4],[5.3,-.4],[16.6,.5],[20.4,.1]]),sad:kf(t,[[0,-.25],[3.3,-.25],[3.5,-.6],[5.3,-.6],[5.6,.5],[20.2,.5],[20.6,0]]),
  mouth:kf(t,[[0,-.25],[16.6,-.4],[20.3,-.3],[20.6,.5],[49,.6],[50,.8]]),open:sh*(.55+.4*Math.abs(Math.sin(t*9)))+talk(t,20.6,22),bend:sh*.13,tilt:sh*.06}}
function berPose(t){const w=fin(t,22.3,.3)*(1-fin(t,24.3,.3));
 return {x:BER_X,y:standY(HILL_Y+8,.5),s:.5,face:1,breath:t*2+1,blink:blinkAt(t,[19.3,21.2,25.5,56.9]),
  look:kf(t,[[0,-.85],[22.1,-.85],[22.5,.25],[24.3,.25],[24.7,.9]]),lookY:kf(t,[[0,.1],[22.1,.1],[22.5,.9],[24.3,.9],[24.7,.2]]),
  mouth:.55,brow:.2,hands:{r:[62+Math.sin(t*10)*9*w,222+Math.sin(t*14)*2*w]},showH:{r:true}}}
// shouted orders that die out before they reach anyone
function shout(x,t){['MARCH!','HOLD!','LEFT!','RIGHT!'].forEach((s,i)=>{const u=seg(t,3.4+i*.42,4.6+i*.42);if(u<=0||u>=1)return;const e=ease(u);
  x.save();x.translate(lerp(570,1120+i*60,e),lerp(318,470+i*30,e*e)-Math.sin(u*Math.PI)*60);const sc=lerp(1.1,.7,u);x.scale(sc,sc);bubble(x,0,0,s,'#F8E9CC',Math.min(1,u*7)*Math.pow(1-u,.6),34);x.restore()})}
function tokens(x,t){const u=seg(t,20.7,21.8);if(u>0&&u<1)bubble(x,lerp(552,742,easeIO(u)),322-Math.sin(u*Math.PI)*26,'Take that hill.','#F8E9CC',Math.min(1,u*7,(1-u)*7),15);
 CORPS.forEach((c,i)=>{const v=seg(t,23.5+i*.3,25.3+i*.3);if(v<=0||v>=1)return;const e=easeIO(v);
  bubble(x,lerp(PAPER[0],c.x,e),lerp(PAPER[1]-22,c.y-280,e)-Math.sin(e*Math.PI)*170,'orders','#FFC66E',Math.min(1,v*8,(1-v)*8),lerp(13,34,e))})}
function drawBattle(t,cam){let x=layer('sky',cam);sky(x);
 x=layer('field',cam);ground(x);army(x,t);
 x=layer('hill',cam);hill(x);const np=actor(x,'napoleon',HERO,napPose(t),cam);bicorne(x,np,'#17141F','#FFC66E');
 if(t>16.5){const bp=actor(x,'berthier',FRIEND,berPose(t),cam);bicorne(x,bp,'#223A6C','#F4EBDD');campTable(x);
  const h=h2w(bp,'r');x.strokeStyle='#F4EBDD';x.lineWidth=4;x.lineCap='round';x.beginPath();x.moveTo(h[0]+5,h[1]+3);x.lineTo(h[0]+22,h[1]-44);x.stroke()}
 shout(x,t);tokens(x,t);
 comp([['sky',cam.b[0]],['field',cam.b[1]],['hill',0]])}

// ---------- studio: the same general, today, with ten coding-agent sessions ----------
const DESK_Y=780,HERO_P=[430,560],MON=[];
for(let i=0;i<5;i++)MON.push({cx:i?820+i*235:820,by:DESK_Y,w:i?190:280,h:i?124:180,row:0});
for(let i=0;i<5;i++)MON.push({cx:880+i*215,by:470,w:170,h:110,row:1});
function studioWall(x){let g=x.createLinearGradient(0,0,0,760);g.addColorStop(0,'#33255A');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 g=x.createRadialGradient(1100,300,30,1100,300,900);g.addColorStop(0,'rgba(255,196,130,.22)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-800,-500,W+2400,1700);
 x.fillStyle='#237F80';x.fillRect(-800,700,W+2400,600);x.fillStyle='#2F9A98';x.fillRect(-800,692,W+2400,10);
 x.fillStyle='#241736';x.fillRect(690,470,1100,16);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(690,486,1100,10)}
function desk(x){let g=x.createLinearGradient(0,DESK_Y,0,1100);g.addColorStop(0,'#B0705A');g.addColorStop(.08,'#8A4A3A');g.addColorStop(1,'#4A2838');x.fillStyle=g;x.fillRect(200,DESK_Y,1700,500);x.fillStyle='rgba(255,226,190,.45)';x.fillRect(200,DESK_Y,1700,4)}
// st: a appear 0..1, work 0..1 (scrolling code), wait 0..1 (needs you), hot 0..1 (you are watching it), dim 0..1
function monitor(x,m,i,t,st){const a=st.a;if(a<=0)return;x.save();x.globalAlpha=a;const {cx,by,w,h}=m,top=by-26-h,l=cx-w/2;
 x.fillStyle='#1B1430';x.fillRect(cx-7,by-28,14,28);x.beginPath();x.ellipse(cx,by-2,w*.2,6,0,0,7);x.fill();
 if(st.hot>0){x.save();x.globalAlpha=a*st.hot;x.strokeStyle='#FFC66E';x.lineWidth=6;x.beginPath();x.roundRect(l-7,top-7,w+14,h+14,12);x.stroke();x.restore()}
 x.fillStyle='#1B1430';x.beginPath();x.roundRect(l,top,w,h,8);x.fill();
 const sx=l+7,sy=top+7,sw=w-14,sh=h-14;x.fillStyle=st.dim>0?`rgb(${20+st.dim*14},${18+st.dim*14},${56-st.dim*16})`:'#141238';x.fillRect(sx,sy,sw,sh);
 x.save();x.beginPath();x.rect(sx,sy,sw,sh);x.clip();
 if(st.work>0){x.globalAlpha=a*st.work*(1-st.dim*.7);const n=7,gap=sh/n;for(let k=0;k<n+1;k++){const y=sy+((k*gap+t*22*(1+hash(i,1))+i*9)%(sh+gap))-gap/2;x.fillStyle=k%3?'#2DB2AE':'#FF8F7A';x.fillRect(sx+8+hash(i,k)*10,y,sw*(.25+.5*hash(i+3,k)),Math.max(3,gap*.32))}}
 if(st.wait>0){x.globalAlpha=a*st.wait;if(Math.floor(t*2.2+i*.3)%2==0){x.fillStyle='#F8E9CC';x.fillRect(sx+10,sy+sh*.5-8,10,16)}}
 x.restore();
 if(st.wait>0){const b=1+Math.sin(t*4+i)*.05*st.wait;x.save();x.globalAlpha=a*st.wait;x.translate(cx+w*.32,top-16);x.scale(b,b);pill(x,0,0,46,40,'#FFC66E');x.fillStyle='#FFC66E';x.beginPath();x.moveTo(-8,16);x.lineTo(0,28);x.lineTo(6,16);x.fill();txt(x,'?',0,1,28,'#1B1430','center','900');x.restore()}
 if(st.badge){const [lab,col,ba]=st.badge;if(ba>0){x.save();x.globalAlpha=a*ba;const bw=lab.length*13+40;pill(x,cx,top-24-(1-ba)*10,bw,40,col);txt(x,lab,cx,top-23-(1-ba)*10,22,'#1B1430','center','800');x.restore()}}
 x.restore()}
function monState(i,t){const m=MON[i],s={a:i?fin(t,7.45+i*.2,.3):1,work:0,wait:0,hot:0,dim:0,badge:null};
 // today: sessions start, then every one waits on you; "three to five": the desk row is watched, the back row is not; later they run alone
 if(t<9.7)s.work=1;else if(t<30){s.wait=1;s.hot=m.row==0?fin(t,13.2,.5):0;s.dim=m.row==1?fin(t,13.2,.6):0}
 else{s.work=1;if(i==3)s.badge=['decide?','#FFC66E',fin(t,44.9)*(1-fin(t,47.2))];if(i==7)s.badge=['ready','#2DB2AE',fin(t,46.3)*(1-fin(t,47.3,.1))]}
 return s}
function heroPose(t){const amp=fin(t,9.7,.3)*(1-fin(t,12,.3));
 return {x:HERO_P[0],y:HERO_P[1],s:.86,face:1,noLegs:true,breath:t*2.1,blink:blinkAt(t,[6.6,8.9,13.5,15.6,42.8,44.6,56.8,59.2]),
  look:kf(t,[[0,.6],[7.3,.6],[7.7,.9],[42,.75],[44.9,.75],[45.2,.95],[46.2,.95],[46.5,.8],[55.5,.8],[55.6,.12]])-amp*(.2+.2*Math.sin(t*5.2)),
  lookY:kf(t,[[0,.35],[7.3,.35],[7.8,-.15],[9.7,.3],[42,.3],[46.2,.25],[46.5,-.25],[55.5,-.25],[55.6,.1]]),
  brow:kf(t,[[0,.1],[7.5,.1],[8,.7],[16.6,.7],[42,.1]]),sad:kf(t,[[0,0],[7.5,0],[8.1,.55],[16.6,.6],[42,0]]),
  mouth:kf(t,[[0,.7],[7.5,.7],[8.1,-.3],[16.6,-.35],[42,.7],[55.5,.7],[55.6,.9]]),tilt:kf(t,[[0,0],[7.5,0],[8.1,-.05],[16.6,-.05],[42,.04]])}}
function drawStudio(t,cam){let x=layer('wall',cam,1);studioWall(x);for(let i=5;i<10;i++)monitor(x,MON[i],i,t,monState(i,t));
 const a=layer('lamp',cam);pendant(a,520,t,.08);pendant(a,1500,t,.08);
 const h=layer('hero',cam),hp=actor(h,'hero',HERO,heroPose(t),cam);bicorne(h,hp,'#17141F','#FFC66E');
 const f=layer('fg',cam);desk(f);for(let i=0;i<5;i++)monitor(f,MON[i],i,t,monState(i,t));
 comp([['wall',cam.b[0]],['lamp',0],['hero',0],['fg',cam.b[2]]])}

// ---------- board: brief.json "architecture", by hand (the diagram feature will generate this) ----------
const BN={you:[230,540,'You'],s1:[650,330,'Agent session 1'],s2:[650,540,'Agent session 2'],s3:[650,750,'Agent session 3'],
 team:[1090,260,'Team'],chat:[1090,540,'Chat + GitHub'],router:[1390,540,'Router agent'],w1:[1700,330,'Worker 1'],w2:[1700,540,'Worker 2'],w3:[1700,750,'Worker 3'],pr:[1390,860,'Result (PR)']};
const NEW={router:1,w1:1,w2:1,w3:1},CH={you:HERO,team:WOMAN,router:FRIEND,w1:GUEST_A,w2:GUEST_B,w3:GUEST_A};
const LIKE={you:'the general',router:'like Berthier',w1:'like a corps',w2:'like a corps',w3:'like a corps'};
const BW=270,BH=96;
const nodeIn={router:30.3,chat:31.5,team:32.3,w1:36.3,w2:40.4,w3:40.7,pr:41.2};
function edgePt(a,b){const A=BN[a],B=BN[b],dx=B[0]-A[0],dy=B[1]-A[1],k=Math.min(Math.abs(dx)>1?(BW/2+8)/Math.abs(dx):9,Math.abs(dy)>1?(BH/2+8)/Math.abs(dy):9);return [[A[0]+dx*k,A[1]+dy*k],[B[0]-dx*k,B[1]-dy*k]]}
function arrow(x,a,b,p,lab,col='#C9B8E0',wd=4){if(p<=0)return;const [P,Q]=edgePt(a,b),E=[lerp(P[0],Q[0],p),lerp(P[1],Q[1],p)],an=Math.atan2(Q[1]-P[1],Q[0]-P[0]);
 x.save();x.globalAlpha*=Math.min(1,p*4);x.strokeStyle=col;x.lineWidth=wd;x.lineCap='round';x.beginPath();x.moveTo(P[0],P[1]);x.lineTo(E[0],E[1]);x.stroke();
 x.fillStyle=col;x.beginPath();x.moveTo(E[0]+Math.cos(an)*4,E[1]+Math.sin(an)*4);x.lineTo(E[0]-Math.cos(an-.45)*20,E[1]-Math.sin(an-.45)*20);x.lineTo(E[0]-Math.cos(an+.45)*20,E[1]-Math.sin(an+.45)*20);x.fill();x.restore();
 if(lab){const M=[(P[0]+Q[0])/2,(P[1]+Q[1])/2],vert=Math.abs(Q[0]-P[0])<Math.abs(Q[1]-P[1]);txt(x,lab,M[0]+(vert?14:0),M[1]-(vert?0:20),20,col,vert?'left':'center','600',ease(seg(p,.6,1)))}}
function token(x,a,b,u,lab,col){if(u<=0||u>=1)return;const [P,Q]=edgePt(a,b),e=easeIO(u);bubble(x,lerp(P[0],Q[0],e),lerp(P[1],Q[1],e),lab,col,Math.min(1,u*6,(1-u)*6),18)}
function node(x,id,t){const a=nodeIn[id]?fin(t,nodeIn[id],.5):1;if(a<=0)return;const [X,Y,lab]=BN[id],nw=NEW[id];x.save();x.globalAlpha=a;const sc=lerp(.85,1,a);x.translate(X,Y);x.scale(sc,sc);
 x.fillStyle='#2A1F42';x.beginPath();x.roundRect(-BW/2,-BH/2,BW,BH,16);x.fill();x.strokeStyle=nw?'#FFC66E':'#6E5D8E';x.lineWidth=nw?7:3;x.stroke();
 const c=CH[id];let tx=0;if(c){x.save();x.beginPath();x.roundRect(-BW/2,-BH/2,BW,BH,16);x.clip();drawPerson(x,c,{x:-BW/2+48,y:-BH/2+32,s:.16,face:1,noLegs:true,breath:t*2+X,blink:blinkAt(t,[X%7+1,X%5+19,X%9+30]),mouth:.6,look:.5,lookY:.4});x.restore();tx=28}
 txt(x,lab,tx,2,c?28:26,'#F8E9CC','center','700');
 if(nw){pill(x,BW/2-30,-BH/2,64,28,'#FFC66E');txt(x,'NEW',BW/2-30,-BH/2+1,16,'#1B1430','center','900')}
 if(LIKE[id])txt(x,LIKE[id],-BW/2+6,-BH/2-22,24,'#C9B8E0','left','600',fin(t,(nodeIn[id]||27)+.5));
 if(id[0]=='w'){const on=fin(t,nodeIn[id]+.8,.6);x.fillStyle='rgba(45,178,174,.25)';x.fillRect(-BW/2+92,BH/2-20,BW-118,7);x.fillStyle='#2DB2AE';x.fillRect(-BW/2+92,BH/2-20,(BW-118)*on*(.25+.75*((t*.23+X*.001)%1)),7)}
 if(id=='w1'){txt(x,'own session',-BW/2+92,BH/2+26,19,'#2DB2AE','left','700',fin(t,38));txt(x,'own folder',-BW/2+92,BH/2+50,19,'#2DB2AE','left','700',fin(t,39.1))}
 x.restore()}
function drawBoard(t,cam){const x=layer('board',cam);let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1390,540,40,1390,540,900);g.addColorStop(0,'rgba(255,196,130,.10)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=120;y<960;y+=28)x.fillRect(888,y,4,14); // not setLineDash: its anti-aliasing differs between renders
 txt(x,'BEFORE',90,120,40,'#C9B8E0');txt(x,'you drive every step',90,170,28,'#C9B8E0','left','600');
 txt(x,'SUPER-AGENT',960,120,40,'#FFC66E');txt(x,'many workers run at once',960,170,28,'#FFC66E','left','600',fin(t,40.3));
 for(const s of ['s1','s2','s3'])arrow(x,'you',s,1,'every step');
 const cyc=(t*.55)%3,ci=Math.floor(cyc);token(x,'you',['s1','s2','s3'][ci],cyc-ci,'step','#F8E9CC');
 arrow(x,'team','chat',fin(t,32.6,.5),'asks');arrow(x,'chat','router',fin(t,31.8,.5),'');
 for(const [w,t0] of [['w1',35.9],['w2',40.2],['w3',40.5]])arrow(x,'router',w,fin(t,t0,.5),'');
 arrow(x,'w3','pr',fin(t,41.2,.4),'');arrow(x,'pr','chat',fin(t,41.4,.5),'only when ready','#2DB2AE',5);
 token(x,'team','chat',seg(t,33.7,34.25),'ask','#F8E9CC');token(x,'chat','router',seg(t,34.25,34.9),'ask','#F8E9CC');
 token(x,'router','w1',seg(t,35.2,36.4),'ticket','#FFC66E');token(x,'router','w2',seg(t,40,40.7),'ticket','#FFC66E');token(x,'router','w3',seg(t,40.3,41),'ticket','#FFC66E');
 for(const id in BN)node(x,id,t);
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,y,w,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;pill(ctx,W/2,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,W/2,y+2,size,col,'center','800',v)}
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 card(t,1.7,3.0,120,760,'100,000+ soldiers','#FFC66E',58);
 card(t,5.8,7.0,960,640,'today, you are the general','#F8E9CC',38);
 card(t,14.5,16.3,110,740,'one person follows 3–5 at once','#F8E9CC',38);
 card(t,18.6,20.1,960,640,'Berthier · chief of staff','#FFC66E',40);
 card(t,25.3,27.0,960,660,'each corps: a small army','#F8E9CC',38);
 card(t,27.6,29.7,960,640,'DeepSeek Super-agent','#FFC66E',46);
 card(t,43.8,47.1,110,760,'it speaks up only when needed','#F8E9CC',38);
 card(t,47.5,49.15,972,860,'still a research prototype · open source','#FFC66E',36);
 card(t,49.75,51.45,120,640,'a 200-year-old lesson','#FFC66E',44);
 const v=fin(t,56.1,.35);if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.88)';ctx.beginPath();ctx.roundRect(W/2-560,70,1120,210,40);ctx.fill();ctx.restore();
  txt(ctx,'The limit isn’t your agents.',W/2,132,58,'#F8E9CC','center','800',v);txt(ctx,'It’s your attention.',W/2,214,64,'#FFC66E','center','800',fin(t,56.7,.35))}
 // call to action: a subscribe button that pops in on the spoken line, with the next episode under it
 const c=fin(t,57.6,.3);if(c>0){const sc=lerp(.6,1,c)*(1+.035*Math.sin((t-57.6)*7)),x=ctx;x.save();x.globalAlpha=c;x.translate(W/2,905);x.scale(sc,sc);
  pill(x,0,0,400,96,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-150,-22);x.lineTo(-150,22);x.lineTo(-112,0);x.closePath();x.fill();txt(x,'Subscribe',22,3,50,'#F8E9CC','center','800');x.restore()}
 card(t,58.1,0,1010,720,'Next: what is a coding-agent session?','#C9B8E0',28)}

FILM={dur:60,cuts:[0,45,99,168,219,291,369,432,498,552,612,666,738,819,900,1008,1110,1200,1260,1308,1368,1422,1484,1553,1613,1670,1800],fadeIn:.15,fadeOut:.45,
 cam(s,u,t){const e=ease(u);return [
  {x:lerp(540,520,e),y:lerp(350,370,e),z:lerp(2.3,2.05,e),b:[6,3]},              // 0 Napoleon, close
  {x:lerp(1420,1700,(u+e)/2),y:lerp(520,560,e),z:lerp(.98,.72,(u+e)/2),b:[2,1+2.5*Math.sin(Math.PI*u)]},             // 1 pull out: the whole army
  {x:lerp(800,880,e),y:470,z:lerp(1.3,1.2,e),b:[4,1.5]},                         // 2 he shouts; the orders die in the air
  {x:lerp(540,580,e),y:lerp(500,520,e),z:lerp(1.55,1.4,e),b:[2,0,0]},            // 3 today: same hat, at a desk
  {x:lerp(760,1250,e),y:lerp(520,500,e),z:lerp(1.2,1,e),b:[2,0,0]},              // 4 ten sessions pop in
  {x:lerp(720,760,e),y:520,z:lerp(1.3,1.42,e),b:[2,0,0]},                        // 5 every one waits on you
  {x:lerp(1040,1100,e),y:540,z:lerp(.9,.84,e),b:[2,0,0]},                        // 6 wide: too many
  {x:lerp(1180,1240,e),y:lerp(620,640,e),z:lerp(1.05,1.22,e),b:[3,0,0]},         // 7 only the desk row is watched
  {x:lerp(560,520,e),y:lerp(400,380,e),z:lerp(1.6,1.8,e),b:[6,3]},               // 8 Napoleon thinks
  {x:lerp(790,810,e),y:lerp(420,400,e),z:lerp(1.9,2.1,e),b:[6,3]},               // 9 Berthier
  {x:lerp(630,660,e),y:420,z:lerp(1.5,1.6,e),b:[5,2]},                           // 10 one sentence to one man
  {x:lerp(830,880,e),y:lerp(450,440,e),z:lerp(2.2,1.9,e),b:[6,3]},               // 11 he writes; orders leave
  {x:lerp(2210,2270,e),y:lerp(885,895,e),z:lerp(.97,1,e),b:[2,.8]},            // 12 orders land; each corps marches
  {x:lerp(560,980,e),y:lerp(560,540,e),z:lerp(1.25,1.02,e)},                     // 13 board: before, then across
  {x:lerp(1120,1240,e),y:lerp(470,410,e),z:lerp(1.25,1.5,e)},                    // 14 the router
  {x:lerp(1240,1500,e),y:440,z:lerp(1.5,1.6,e)},                                 // 15 ask once; a ticket
  {x:lerp(1600,1660,e),y:lerp(400,390,e),z:lerp(2,2.3,e)},                       // 16 one worker: own session, own folder
  {x:lerp(1500,960,e),y:540,z:lerp(1.35,1,e)},                                   // 17 many workers
  {x:lerp(1100,1060,e),y:540,z:lerp(.86,.92,e),b:[2,0,0]},                       // 18 studio: it runs without you
  {x:lerp(980,1040,e),y:lerp(600,590,e),z:lerp(1.1,1.2,e),b:[2,0,0]},            // 19 a question
  {x:lerp(1280,1310,e),y:lerp(430,415,e),z:lerp(1.55,1.8,e),b:[0,0,0]},          // 20 a result
  {x:lerp(960,975,e),y:lerp(540,548,e),z:lerp(1,1.05,e)},                        // 21 the whole design: still a prototype
  {x:lerp(1300,1380,e),y:lerp(560,548,e),z:lerp(.8,.75,e),b:[2,0]},              // 22 back on the hill: the old lesson
  {x:lerp(2380,2420,e),y:lerp(880,870,e),z:lerp(1,1.07,e),b:[3,0]},              // 23 not the soldiers
  {x:lerp(310,285,e),y:lerp(365,350,e),z:lerp(1.9,2.25,e),b:[6,3]},              // 24 the general's attention
  {x:lerp(640,700,e),y:lerp(462,478,e),z:lerp(1.38,1.26,e),b:[2,0,0]}            // 25 that general is you
 ][s]},
 draw(t,cam,s){if(s<=2||(s>=8&&s<=12)||(s>=22&&s<=24))drawBattle(t,cam);else if((s>=13&&s<=17)||s==21)drawBoard(t,cam);else drawStudio(t,cam);overlay(t)},
 plants(){return {}}};
say(.15,'drum');say(1.5,'drum');for(let i=1;i<10;i++)say(7.45+i*.2,'tick');
for(const t of [23.5,23.8,24.1])say(t,'paper');for(let t=25.3;t<27.3;t+=.28)say(t,'march');for(let t=49.6;t<53.6;t+=.28)say(t,'march',{soft:1});say(57.65,'tick');
for(const t of [30.3,36.3,40.4,40.7,44.9,46.3])say(t,'tick');
