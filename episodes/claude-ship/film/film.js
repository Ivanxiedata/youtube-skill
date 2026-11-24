// Episode: Claude Ship, told through 1 routine pull request (a small docs fix) = a small boat "PR #1" in a harbour. You = the mascot in a ship captain's cap.
// AI = robots with a teal screen head: CODE REVIEW (before: comments only), PR STEWARD (now: a wrench), CLAUDE APPROVALS (the how). The 3 problems = 3 amber patches on the sail.
// BEFORE: the meter "TIMES YOU STOP YOUR NEXT TASK" climbs to 4. NOW: it stays at 0 (teal). Voice from tts.py (vo.wav laid in at .5 s): film time = voice time + .5. Every time below is FILM seconds.
// 55.0 s, 21 shots (beats.md "Shots", numbered 0-20). Places: T title (0), H harbour (1-7, 9-11), Q the queue (8), X how diagram (12-15), P proof (16-17), W side by side (18), F takeaway (19), M mascot + Subscribe (20).
// Helpers follow episodes/gemini-decisions-api/film/film.js. Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',PAPER='#E9DCC2',NEU='#8A7AA8',DARK='#1B1430',SAIL='#F3E8CF';
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function txt_w(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
function withIn(x,cx,cy,a,fn,s0=.9){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
function tagP(x,X,Y,s,col,a,size=34,tc='#0B2A30'){if(a<=0)return;x.save();x.globalAlpha*=a;const w=txt_w(x,s,size)+46,sc=.9+.1*a;x.translate(X,Y);x.scale(sc,sc);pill(x,0,0,w,size*1.8,col);txt(x,s,0,2,size,tc,'center','900');x.restore()}
function stepV(t,p,d=.25){let v=p[0][1];for(let i=1;i<p.length;i++){const u=ease(seg(t,p[i][0]-d,p[i][0]));if(u>0)v=lerp(p[i-1][1],p[i][1],u)}return v}

/* THE CLOCK: cut times of the 21 shots (film seconds). Line starts and ends are exact (vo_lines.json + .5 s); inside a line the cuts sit on the measured pauses
   (energy dips of vo.wav, voice time + .5 s): after "Claude Ship" the pause is .53-1.01 voice s, so shot 0 ends at 1.3 (L36). */
const TS=[0,1.3,4.2,5.92,8.65,9.8,12.47,14.83,16.73,18.65,21.4,23.05,24.73,27.76,29.09,31.72,33.7,37.77,41.57,46.21,49.69];
const DUR=55.0;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,out=i=>ST(i)-.5;
const PLACE='THHHHHHHQHHHXXXXPPWFM'; /* one letter per shot 0-20 */

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: a ship captain's cap (navy, amber badge), drawn after the figure in the head's own transform */
function capt(x,p){x.save();headT(x,p);x.lineJoin='round';x.lineCap='round';x.lineWidth=5;x.strokeStyle=INKC;
 x.fillStyle='#22345F';x.beginPath();x.moveTo(-90,-56);x.quadraticCurveTo(-100,-140,0,-146);x.quadraticCurveTo(100,-140,90,-56);x.quadraticCurveTo(0,-74,-90,-56);x.closePath();x.fill();x.stroke();
 x.fillStyle='#14203F';x.beginPath();x.moveTo(-96,-56);x.quadraticCurveTo(0,-84,96,-56);x.lineTo(96,-72);x.quadraticCurveTo(0,-100,-96,-72);x.closePath();x.fill();x.stroke();
 x.fillStyle='#0E1730';x.beginPath();x.ellipse(0,-58,112,17,0,0,Math.PI);x.fill();x.stroke();
 x.fillStyle=AMB;x.beginPath();x.arc(0,-104,19,0,7);x.fill();x.stroke();
 x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.moveTo(0,-114);x.lineTo(0,-94);x.moveTo(-9,-100);x.lineTo(9,-100);x.stroke();x.restore()}
function mascot(x,t,cam,o){const p={x:o.x,y:o.y,s:o.s||1.1,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.4:o.look,lookY:o.lookY===undefined?.1:o.lookY,brow:o.brow===undefined?.2:o.brow,sad:o.sad||0,mouth:o.mouth===undefined?.6:o.mouth,mouthW:28,tilt:o.tilt||0};
 actor(x,'hero',HERO,p,cam);capt(x,p);return p}
const REV={skin:'#17141F',cloth:'#7A56A0',hood:'#5C3F80',hand:'#17141F',face:'#FFFFFF',leg:'#2C2A49',shoe:'#17141F',finger:'#5b5468'}; /* the harbour master: a different tone from the mascot */
const PB={skin:'#B07A55',cloth:'#8A4A6A',hood:'#6A3550',hand:'#B07A55',face:INKC,leg:'#2C2A49',shoe:'#17141F',finger:INKC};
const PC={skin:'#E9C7A2',cloth:'#3A5C9A',hood:'#223A6C',hand:'#E9C7A2',face:INKC,leg:'#2C2A49',shoe:'#17141F',finger:INKC};
function claudeHead(x,o){x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
function robot2(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:o.hands||{},showH:o.showH||{}};
 drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();return p}
function robotLabel(x,cx,y,s){const w=txt_w(x,s,28)+56;pill(x,cx,y,w,46,'rgba(18,10,28,.88)');txt(x,s,cx,y+2,28,'#BFF2EE','center','900')}
function personF(x,ch,cx,y,s,t,look,o={}){const p={x:cx,y,s,face:1,breath:t*2+cx*.01,noLegs:true,blink:blinkAt(t+cx*.003,BL),look,lookY:-.1,brow:.1,mouth:o.mouth===undefined?.7:o.mouth,mouthW:24,hands:o.hands||{},showH:o.showH||{}};drawPerson(x,ch,p);return p}
function wrench(x,hw,a,k=1){x.save();x.translate(hw[0],hw[1]);x.rotate(a);x.scale(k,k);x.lineJoin='round';x.fillStyle='#C9B8E0';x.strokeStyle=INKC;x.lineWidth=4;
 x.beginPath();x.roundRect(-14,-10,140,20,9);x.fill();x.stroke();x.beginPath();x.arc(140,0,27,0,7);x.fill();x.stroke();x.fillStyle='#2A1F42';x.beginPath();x.moveTo(150,-11);x.lineTo(176,-11);x.lineTo(176,11);x.lineTo(150,11);x.closePath();x.fill();x.restore()}
function stampTool(x,hx,hy,k=1){x.save();x.translate(hx,hy);x.scale(k,k);x.lineJoin='round';x.fillStyle='#8A4A3A';x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.roundRect(-14,-96,28,70,10);x.fill();x.stroke();x.fillStyle='#3A2F55';x.beginPath();x.roundRect(-46,-30,92,30,8);x.fill();x.stroke();x.restore()}

// ---------- the world: harbour ----------
function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function table(x,Y=792){x.fillStyle='#B0705A';x.fillRect(-900,Y,W+1800,40);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,Y,W+1800,5);x.fillStyle='#7A4038';x.fillRect(-900,Y+40,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,Y+100,W+1800,10)}
const DECK=792,SEAY=580,BX=1010;
function sea(x,t){let g=x.createLinearGradient(0,SEAY,0,DECK);g.addColorStop(0,'#2B2358');g.addColorStop(1,'#1B1840');x.fillStyle=g;x.fillRect(-900,SEAY,W+1800,DECK-SEAY+12);
 x.fillStyle='rgba(255,198,110,.28)';x.fillRect(-900,SEAY-2,W+1800,4);
 x.save();x.strokeStyle='rgba(248,233,204,.14)';x.lineWidth=4;x.lineCap='round';for(let i=0;i<16;i++){const wx=((i*191+t*24)%2400)-340,wy=SEAY+34+(i%5)*38;x.beginPath();x.moveTo(wx,wy);x.lineTo(wx+80,wy);x.stroke()}x.restore()}
const PN=['FAILING CHECK','MERGE CONFLICT','REVIEW COMMENT'];
/* a boat with a square sail; local origin = (cx, bottom of the hull). hull 600 wide, sail 380 wide. o: label, sub, patches [c0,c1,c2] (0 amber .. 1 teal), hl [a0,a1,a2], pale */
function sailBoat(x,cx,bot,k,o={}){x.save();x.translate(cx,bot);x.scale(k,k);x.lineJoin='round';x.lineCap='round';
 x.strokeStyle='#6B4A3A';x.lineWidth=12;x.beginPath();x.moveTo(-200,-188);x.lineTo(-200,-585);x.stroke();
 rr(x,-190,-560,380,360,16,o.pale||SAIL,INKC,5);
 const hull=()=>{x.beginPath();x.moveTo(-300,-188);x.lineTo(300,-188);x.quadraticCurveTo(290,-30,210,0);x.lineTo(-210,0);x.quadraticCurveTo(-290,-30,-300,-188);x.closePath()};
 hull();x.fillStyle=o.hull||'#EADBC0';x.fill();x.save();hull();x.clip();x.fillStyle=o.stripe||'#FF6B5E';x.fillRect(-320,-120,640,24);x.restore();hull();x.strokeStyle=INKC;x.lineWidth=5;x.stroke();
 if(o.label){imp(x,o.label,0,k<1?-520:-512,Math.max(84,28/k),'#2A1F42')}
 if(o.sub)txt(x,o.sub,0,k<1?-425:-452,Math.max(30,28/k),DARK,'center','900');
 if(o.patches)for(let i=0;i<3;i++){const y=-405+i*66+ (o.sub?0:0),c=o.patches[i],h=o.hl?o.hl[i]:0;rr(x,-168,y-28+ (o.sub?12:0),336,56,12,mixC('#FFC66E',TEAL,c),INKC,4);
  if(k>=1)txt(x,PN[i],0,y+14,28,DARK,'center','900');if(h>0){x.save();x.globalAlpha=h;rr(x,-176,y-36+12,352,72,16,null,INKC,9);x.restore()}}
 x.restore()}
function stamp(x,cx,cy,rot,a,l1,l2,size=62){if(a<=0)return;const k=lerp(1.5,1,ease(a)),w=Math.max(impW(x,l1,size),l2?impW(x,l2,Math.max(28,size*.62)):0)+60,h=l2?size*1.9:size*1.4;
 x.save();x.translate(cx,cy);x.rotate(rot);x.scale(k,k);x.globalAlpha*=a;x.fillStyle='rgba(243,232,207,.88)';x.beginPath();x.roundRect(-w/2,-h/2,w,h,14);x.fill();rr(x,-w/2,-h/2,w,h,14,null,TEAL,8);
 x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign='center';x.textBaseline='middle';x.fillStyle='#17888A';x.fillText(l1,0,l2?-size*.32:2);if(l2){x.font=`${Math.max(28,size*.62)}px Impact, "Arial Black", sans-serif`;x.fillText(l2,0,size*.5)}x.restore()}
function monitor(x,t,dim){const l=370,tp=612,w=210,h=150;x.save();rr(x,l+w/2-24,tp+h,48,DECK-tp-h,6,'#2A1F42',INKC,4);rr(x,l,tp,w,h,14,'#15102A',NEU,5);
 x.beginPath();x.roundRect(l+8,tp+8,w-16,h-16,8);x.clip();x.fillStyle='#0F0B20';x.fillRect(l,tp,w,h);
 if(!dim){for(let i=0;i<4;i++){const ww=[90,130,70,110][(i+Math.floor(t*3))%4];x.fillStyle=i%2?TEAL:AMB;x.fillRect(l+22,tp+22+i*20,ww,9)}}
 x.restore();if(dim){x.save();x.globalAlpha=.8;txt(x,'||',l+w/2,tp+52,40,NEU,'center','900');x.restore()}
 txt(x,'NEXT TASK',l+w/2,tp+h-30,28,dim?NEU:CREAM,'center','900')}

// per-shot view state of the harbour (L38: set per shot, never as a range)
function hst(t,sh){const T=ST(sh),o={mx:230,mon:1,dim:0,type:1,robot:'',rA:1,patch:[0,0,0],hl:[0,0,0],scroll:0,stamp:0,note:0,flag:0,beam:-1,sad:0,pt:0};
 const P=(a)=>fin(t,a,.5),arr=ease(seg(t,T,T+.7));
 if(sh==1){}
 else if(sh==2){o.robot='stew';o.rA=arr;const a=[T+.55,T+.9,T+1.2];o.patch=a.map(P);o.beam=a.findIndex((v,i)=>t>v-.1&&t<v+.55)}
 else if(sh==3){o.patch=[1,1,1];o.scroll=fin(t,T+.2,.55);o.stamp=fin(t,T+1.2,.5)}
 else if(sh==4){o.patch=[1,1,1].map(v=>v*(1-fin(t,T,.6)));o.stamp=1-fin(t,T,.5);o.scroll=1-fin(t,T,.5)}
 else if(sh==5){o.robot='rev';o.rA=arr;o.flag=fin(t,T+.9,.5)}
 else if(sh==6){o.mx=lerp(230,700,ease(seg(t,T,T+.7)));o.dim=fin(t,T,.5);o.type=0;o.hl=[fin(t,T+.6,.5),0,0];o.sad=1;o.pt=1}
 else if(sh==7){o.mx=700;o.dim=1;o.type=0;o.hl=[1-fin(t,T,.5),fin(t,T,.5)*(1-fin(t,T+1.1,.5)),fin(t,T+1.1,.5)];o.sad=1;o.pt=1}
 else if(sh==9){o.robot='stew';o.rA=arr;const a=[T+.9,T+1.3,T+1.7];o.patch=a.map(P);o.beam=a.findIndex((v,i)=>t>v-.1&&t<v+.55)}
 else if(sh==10){o.robot='stew';o.patch=[1,1,1]}
 else if(sh==11){o.robot='stew';o.patch=[1,1,1];o.note=fin(t,T+.2,.55)}
 return o}
function drawH(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.32,420,520);sea(x,t);const s=hst(t,sh),bob=Math.sin(t*1.7)*5,bot=800+bob;
 sailBoat(x,BX,bot,1,{label:'PR #1',sub:'DOCS FIX',patches:s.patch,hl:s.hl});
 if(s.stamp>0)stamp(x,BX,bot-88,-.12,s.stamp,'APPROVED',null,68);
 if(s.note>0)withIn(x,BX,bot-100,s.note,()=>{x.save();x.translate(BX,bot-100);x.rotate(-.04);rr(x,-190,-60,380,120,10,'#F8E9A8',INKC,4);txt(x,'WHAT I CHANGED',0,-20,32,DARK,'center','900');txt(x,'HOW TO UNDO IT',0,22,32,DARK,'center','900');x.fillStyle=RED;x.beginPath();x.arc(-166,-44,9,0,7);x.fill();x.stroke();x.restore()});
 if(s.scroll>0)withIn(x,560,430,s.scroll,()=>{x.save();x.translate(560,430);x.lineJoin='round';rr(x,-130,-100,260,200,10,PAPER,INKC,4);for(const sx of [-1,1]){x.beginPath();x.ellipse(sx*130,0,16,104,0,0,7);x.fillStyle='#CDBB94';x.fill();x.stroke()}
  txt(x,'POLICY FILE',0,-58,28,DARK,'center','900');x.fillStyle='#8A7AA8';for(let i=0;i<4;i++)x.fillRect(-92,-18+i*26,[160,130,150,100][i],8);x.restore()});
 // the robot slides up from behind the deck
 let rp=null;if(s.robot){const off=(1-s.rA)*330,hand={l:[-133,-99-(s.robot=='stew'?0:0)]};rp=robot2(x,1310,800+off,.9,t,{hands:hand,showH:{l:1},smile:s.robot=='stew'&&sh>=10?30:undefined});
  if(s.robot=='stew'&&s.rA>.95){const hw=h2w(rp,'l'),a=-1.3;wrench(x,hw,a,.9);
   if(s.beam>=0){const hx=hw[0]+Math.cos(a)*170*.9,hy=hw[1]+Math.sin(a)*170*.9,px=BX+140,py=bot-405+s.beam*66+12;x.save();x.strokeStyle=TEAL;x.lineWidth=7;x.lineCap='round';x.globalAlpha=.9;x.beginPath();x.moveTo(hx,hy);x.lineTo(px,py);x.stroke();
    for(let q=0;q<3;q++){const an=t*9+q*2.1;x.beginPath();x.moveTo(px,py);x.lineTo(px+Math.cos(an)*22,py+Math.sin(an)*22);x.stroke()}x.restore()}
   gripHand(x,hw[0],hw[1],a,CLB,.9)}}
 if(s.flag>0){const k=s.flag;x.save();x.translate(1204,bot-262);x.scale(.6+.4*k,.6+.4*k);x.globalAlpha=k;x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.roundRect(-44,-34,88,64,14);x.fill();x.stroke();x.beginPath();x.moveTo(-18,28);x.lineTo(-30,50);x.lineTo(4,28);x.closePath();x.fill();x.stroke();x.fillStyle=INKC;x.fillRect(-28,-20,56,6);x.fillRect(-28,-6,56,6);x.fillRect(-28,8,34,6);x.restore()}
 const mo={x:s.mx,y:600,look:s.pt?.6:.5,mouth:s.sad?.1:s.stamp>0||sh>=10?.9:.6,sad:s.sad?.5:0,brow:s.sad?.1:.2};
 if(s.type){mo.hands={l:[40,170+Math.sin(t*15)*7],r:[150,170+Math.cos(t*13)*7]};mo.showH={l:1,r:1}}
 if(s.pt){mo.hands={r:[100,-150]};mo.showH={r:1}}
 mascot(x,t,cam,mo);
 monitor(x,t,s.dim>.5||sh==6&&t>T+.3||sh==7);
 table(x);
 if(s.robot&&s.rA>.9)robotLabel(x,1310,760,s.robot=='stew'?'PR STEWARD':'CODE REVIEW');
 comp([['board',0]])}
// the queue (shot 8): 3 boats wait for the harbour master (a person with a stamp)
function drawQ(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.3,420,520);sea(x,t);const bob=i=>Math.sin(t*1.7+i*1.3)*4;
 sailBoat(x,560,800+bob(0),.42,{label:'PR #1'});sailBoat(x,820,800+bob(1),.42,{pale:'#B9A8D6',hull:'#8A7AA8',stripe:'#5C3F80'});sailBoat(x,1080,800+bob(2),.42,{pale:'#B9A8D6',hull:'#8A7AA8',stripe:'#5C3F80'});
 const hp=personF(x,PB,1340,640,.95,t,-.8,{hands:{r:[-96,40+Math.sin(t*3)*6]},showH:{r:1},mouth:.2});
 mascot(x,t,cam,{x:230,y:600,look:.7,mouth:.05,sad:1,brow:.6});
 const hw=h2w(hp,'r');stampTool(x,hw[0],hw[1]+2,.9);gripHand(x,hw[0],hw[1],-1.57,PB,.8);
 table(x);comp([['board',0]])}

// ---------- the how diagram (shots 12-15) ----------
function arrow(x,X0,X1,Y,col,a){if(a<=0)return;const d=Math.sign(X1-X0)||1;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=10;x.lineCap='round';x.beginPath();x.moveTo(X0,Y);x.lineTo(X1-d*22,Y);x.stroke();x.beginPath();x.moveTo(X1,Y);x.lineTo(X1-d*34,Y-24);x.lineTo(X1-d*34,Y+24);x.closePath();x.fill();x.restore()}
function cargo(x,cx,bot,k){x.save();x.translate(cx,bot);x.scale(k,k);x.lineJoin='round';
 const cols=['#E4493F','#2DB2AE','#FFC66E'];for(let i=0;i<3;i++){rr(x,-230+i*150,-210,140,86,8,cols[i],INKC,4)}rr(x,150,-250,110,126,10,SAIL,INKC,4);rr(x,170,-232,70,34,6,'#2A1F42',null);
 x.beginPath();x.moveTo(-290,-124);x.lineTo(290,-124);x.quadraticCurveTo(270,-20,200,0);x.lineTo(-210,0);x.quadraticCurveTo(-280,-20,-290,-124);x.closePath();x.fillStyle='#EADBC0';x.fill();x.strokeStyle=INKC;x.lineWidth=5;x.stroke();
 x.restore()}
function drawX(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.2,960,560);
 withIn(x,960,170,sh==12?fin(t,T,.5):1,()=>imp(x,'HOW IT WORKS',960,170,96,CREAM));
 const a1=sh==12?fin(t,T+.1,.55):1,rs=sh==12?ease(seg(t,T+.4,T+1.1)):1,sc=sh==12?fin(t,T+1.5,.55):1;
 // piece 1: the pull request boat -> the robot reads the policy file
 withIn(x,270,500,a1,()=>{sailBoat(x,270,650,.5,{label:'PR #1',sub:'DOCS FIX'})});
 arrow(x,440,590,520,CREAM,a1);
 {const off=(1-rs)*260;robot2(x,740,600+off,.72,t,{smile:sh>=14?30:undefined});rr(x,600,596,280,40,10,'#B0705A',INKC,4);if(rs>.9)robotLabel(x,740,672,'CLAUDE APPROVALS')}
 // the policy file: a scroll that opens into the rulebook (shot 13)
 const u=sh==12?0:sh==13?ease(seg(t,T,T+.7)):1,L0=lerp(1000,920,u),T0=lerp(430,330,u),W0=lerp(380,840,u),H0=lerp(130,316,u);
 if(sc>0)withIn(x,1000+190,495,sc,()=>{
  if(u<1){x.save();x.globalAlpha*=1-u;x.lineJoin='round';rr(x,L0,T0,W0,H0,16,PAPER,sh==12?mixC(INKC,AMB,fin(t,T+1.8,.5)):INKC,sh==12?lerp(4,8,fin(t,T+1.8,.5)):4);for(const sx of [0,1]){x.beginPath();x.ellipse(L0+sx*W0,T0+H0/2,14,H0/2+4,0,0,7);x.fillStyle='#CDBB94';x.fill();x.strokeStyle=INKC;x.lineWidth=4;x.stroke()}x.restore()}
  if(u>0){x.save();x.globalAlpha*=u;rr(x,L0,T0,W0,H0,22,'#2A1F42',AMB,6);x.restore()}
  if(u<1)txt(x,'.claude/approvals.yml',L0+W0/2,T0+H0/2,30,DARK,'center','900',1-u);if(u>0)txt(x,'.claude/approvals.yml',L0+36,T0+40,30,AMB,'left','900',u)});
 if(sh==12)arrow(x,990,880,520,TEAL,fin(t,T+1.6,.5));
 if(sh>=13){const ra=sh==13?fin(t,T+.55,.5):1,h1=sh==14?1:sh==15?1-fin(t,T,.6):1,h2=sh==15?fin(t,T,.6):0,rowA=(i)=>ra*(sh==13?1:(i==0?lerp(.45,1,h1):lerp(.45,1,h2)));
  // row 1
  [['ROUTINE: CLAUDE MAY APPROVE',TEAL,0],['RISKY: MORE PEOPLE',AMB,1]].forEach(([s,c,i])=>{const y=430+i*106;x.save();x.globalAlpha*=rowA(i);rr(x,950,y,780,88,18,'#34264F',i?(sh==15?mixC(NEU,AMB,h2):NEU):(sh==14?mixC(NEU,TEAL,1):NEU),sh>=14&&((i==0&&sh==14)||(i==1&&sh==15))?8:4);
   x.beginPath();x.arc(1006,y+44,20,0,7);x.fillStyle=c;x.fill();x.strokeStyle=INKC;x.lineWidth=3;x.stroke();txt(x,s,1046,y+46,32,CREAM,'left','900');x.restore()});
  tagP(x,1540,370,'EXAMPLE POLICY',AMB,ra,28,DARK)}
 // piece 3 (shot 14): the stamp on the small boat; piece 4 (shot 15): the big ship waits for people
 if(sh==14)stamp(x,270,603,-.1,fin(t,T+.5,.5),'APPROVED','BY CLAUDE',40);
 if(sh==15){const A=fin(t,T+.15,.55);withIn(x,1100,900,A,()=>{cargo(x,1040,1000,.62);txt(x,'BILLING CODE',1040,960,32,DARK,'center','900')});
  personF(x,REV,1590,915,.5,t,-.6);personF(x,PC,1730,915,.5,t,-.6);rr(x,1500,988,300,22,8,'#B0705A',INKC,3);
  withIn(x,1280,737,fin(t,T+.5,.5),()=>{const S='BILLING CODE: CAN NEED 2 PEOPLE',w=txt_w(x,S,32)+64;pill(x,1280,737,w,66,'rgba(18,10,28,.9)');txt(x,S,1280,739,32,AMB,'center','900')})}
 comp([['board',0]])}

// ---------- proof (shots 16-17) ----------
function drawProof(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.25,960,560);
 if(sh==16){const H1="ANTHROPIC'S OWN NUMBER",f1=Math.min(96,1400/impW(x,H1,100)*100),w1=impW(x,H1,f1)+120;
  withIn(x,960,260,fin(t,T+.05,.55),()=>{rr(x,960-w1/2,170,w1,180,40,'#2A1F42',AMB,6);imp(x,H1,960,260,f1,AMB)});
  const L=['CLAUDE CODE TEAM','CLAUDE\'S REVIEW: ONE LAYER','OF A BROADER PROCESS'],qw=Math.max(...L.map(s=>txt_w(x,s,56)))+120;
  withIn(x,960,600,fin(t,T+.9,.55),()=>{rr(x,960-qw/2,450,qw,300,34,'#2A1F42',TEAL,6);L.forEach((s,i)=>txt(x,s,960,520+i*90,56,i==0?AMB:CREAM,'center','900'))});
  const S1='Anthropic · Nov 23, 2026',sw=txt_w(x,S1,40,'800')+100;withIn(x,960,850,fin(t,T+1.8,.5),()=>{pill(x,960,850,sw,72,'rgba(27,20,48,.92)');txt(x,S1,960,853,40,CREAM,'center','800')})}
 if(sh==17){const H1='MERGED PRs: MORE THAN 2X',f1=Math.min(104,1400/impW(x,H1,100)*100),w1=impW(x,H1,f1)+120;
  withIn(x,960,230,fin(t,T+.05,.55),()=>{rr(x,960-w1/2,150,w1,160,40,'#2A1F42',TEAL,6);imp(x,H1,960,230,f1,TEAL)});
  const base=850,hj=190,hs=450,b1=ease(seg(t,T+.5,T+1.3)),b2=ease(seg(t,T+1.2,T+2.4));
  for(const [cx,h,col,lab,b] of [[640,hj,AMB,'JUNE',b1],[1180,hs,TEAL,'SEPTEMBER',b2]]){rr(x,cx-110,base-h,220,h,16,'#241A3C',null);if(b>0){x.save();x.beginPath();x.roundRect(cx-110,base-h,220,h,16);x.clip();x.fillStyle=col;x.fillRect(cx-110,base-h*b,220,h*b);x.fillStyle='rgba(255,255,255,.25)';x.fillRect(cx-110,base-h*b,220,8);x.restore()}
   withIn(x,cx,base+54,fin(t,T+.5,.5),()=>txt(x,lab,cx,base+54,50,col,'center','900'))}
  tagP(x,1560,520,'CLAUDE CODE TEAM',CREAM,fin(t,T+1.6,.5),34,DARK)}
 comp([['board',0]])}

// ---------- the meter "TIMES YOU STOP YOUR NEXT TASK" (L25, L34): screen space, whole numbers 0-4 ----------
const MLAB=['TIMES YOU STOP','YOUR NEXT TASK'];
function meterBar(x,cx,tp,v,col,a=1,big=150,PH=440){if(a<=0)return;x.save();x.globalAlpha*=a;imp(x,String(Math.round(v)),cx,tp+big*.5,big,col);
 const tl=cx-10,tw=84,top=tp+big+30,bot=top+PH,ph=bot-top;rr(x,tl,top,tw,ph,12,'#241A3C',INKC,4);
 for(let q=0;q<=4;q++){const y=bot-ph*q/4;x.fillStyle='#C9B8E0';x.fillRect(tl-18,y-2,18,4);txt(x,String(q),tl-26,y,28,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/4);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6,fh));x.restore()}x.restore()}
function meterBox(x,v,col,a=1){if(a<=0)return;const w=Math.max(txt_w(x,MLAB[0],28),txt_w(x,MLAB[1],28))+56,l=1880-w,tp=150,h=790,cx=l+w/2,sc=.94+.06*a;
 x.save();x.globalAlpha*=a;x.translate(cx,tp+h/2);x.scale(sc,sc);x.translate(-cx,-(tp+h/2));rr(x,l,tp,w,h,26,'rgba(27,20,48,.93)',col,5);txt(x,MLAB[0],cx,tp+40,28,CREAM,'center','900');txt(x,MLAB[1],cx,tp+76,28,CREAM,'center','900');
 meterBar(x,cx+4,tp+108,v,col,1,150);x.restore()}
// value (whole numbers) and colour (amber BEFORE, teal NOW; every change a cross-fade of .5 s or more)
function meterVal(t){return stepV(t,[[0,0],[ST(1)+.6,1],[ST(1)+1.0,2],[ST(1)+1.45,3],[ST(1)+1.9,4],[ST(2)+.8,3],[ST(2)+1.15,2],[ST(2)+1.45,1],[ST(3)+1.35,0],[ST(6)+.9,1],[ST(7)+.15,2],[ST(7)+1.2,3],[ST(8)+.9,4],[ST(9)+.35,0]])}
const MCK=[[0,1],[ST(3)+.3,1],[ST(3)+1.1,2],[ST(5)+.2,2],[ST(5)+.8,1],[ST(9)+.1,1],[ST(9)+.7,2],[999,2]];
function meterCol(t){return mixC(AMB,TEAL,kf(t,MCK)-1)}
function meterOverlay(t,sh){if(!(sh>=1&&sh<=11))return;const a=sh==1?fin(t,ST(1)+.25,.55):1;meterBox(ctx,meterVal(t),meterCol(t),a)}

// ---------- side by side + WHAT WE LEARNED (shot 18) ----------
function drawW(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(18),a=fin(t,T+.5,.55),b=fin(t,T+2.0,.55);
 x.save();x.globalAlpha=a;rr(x,130,260,780,520,30,'#2A1F42',AMB,6);x.restore();x.save();x.globalAlpha=b;rr(x,1010,260,780,520,30,'#2A1F42',TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,275,312,200,56,AMB);txt(x,'BEFORE',275,315,34,DARK,'center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1155,312,150,56,TEAL);txt(x,'NOW',1155,315,34,DARK,'center','900');x.restore();
 withIn(x,440,590,a,()=>{sailBoat(x,440,742,.5,{label:'PR #1',patches:[0,0,0],noText:1})});
 withIn(x,1340,590,b,()=>{sailBoat(x,1340,742,.5,{label:'PR #1',patches:[1,1,1]});stamp(x,1340,672,-.12,1,'APPROVED',null,34)});
 meterBar(x,710,300,4,AMB,a,110,300);meterBar(x,1610,300,0,TEAL,b,110,300);
 {const S='WHAT WE LEARNED',fs=76,w=impW(x,S,fs)+120,c=fin(t,T+.1,.6);if(c>0){x.save();x.translate(960,150);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-60,w,120,40,'#2A1F42',AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}}
 tagP(x,1560,150,'OUR EXAMPLE',CREAM,fin(t,T+1.0,.5),34,DARK);
 withIn(x,960,880,fin(t,T+1.0,.5),()=>{const w=txt_w(x,'TIMES YOU STOP YOUR NEXT TASK',40)+90;pill(x,960,880,w,76,'rgba(18,10,28,.92)');txt(x,'TIMES YOU STOP YOUR NEXT TASK',960,883,40,CREAM,'center','900')});
 comp([['board',0]])}

// ---------- the takeaway scene (shot 19): the boat approved, you coding ----------
function drawFinal(t,cam){const x=layer('board',cam),T=ST(19);bgDusk(x,.45,420,560);sea(x,t);const bob=Math.sin(t*1.7)*5;
 sailBoat(x,1130,800+bob,.8,{label:'PR #1',patches:[1,1,1]});stamp(x,1130,800+bob-70,-.12,1,'APPROVED',null,56);
 mascot(x,t,cam,{x:360,y:640,s:1.2,look:.4,mouth:1,hands:{l:[40,170+Math.sin(t*15)*7],r:[150,170+Math.cos(t*13)*7]},showH:{l:1,r:1}});
 table(x);comp([['board',0]])}

// ---------- the mascot big (shot 20) ----------
function drawMascot(t,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);capt(x,p);
 const T0=ST(20)+1.0,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,430);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 {const S='COMMENT: WHAT NEXT?',fs=50,w=txt_w(x,S,fs,'900')+110,h=150,C0=ST(20)+1.75,cc=fin(t,C0,.55),pu=1+.035*Math.sin((t-C0)*7);
  if(cc>0){x.save();x.translate(1430,700);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
   x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w/2,-h/2,w,h,h/2);x.fill();x.stroke();
   x.beginPath();x.moveTo(-w/2+90,h/2-4);x.lineTo(-w/2+30,h/2+52);x.lineTo(-w/2+160,h/2-4);x.closePath();x.fill();x.stroke();x.fillRect(-w/2+98,h/2-12,54,14);
   txt(x,S,0,4,fs,DARK,'center','900');x.restore()}}
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size,wref=s,bg='rgba(27,20,48,.88)'){const v=fin(t,a,.5)*(b?1-fin(t,b,.5):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(wref).width+size*2.2;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);pill(ctx,X,y,w,size*2.2,bg,v);txt(ctx,s,X,y+2,size,col,'center','800',v);ctx.restore()}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const S='Claude Ship',tw=x.measureText(S).width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,S,58,54,32,AMB,'left','800');txt(x,' ·',58+tw,54,32,CREAM,'left','800');pill(x,58+tw+dw+50,52,78,42,RED);txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}
function tab(t,a,b,lab,col){const v=fin(t,a,.5)*(1-fin(t,b,.5));if(v<=0)return;const x=ctx;x.save();x.font='900 34px Arial';const w=x.measureText(lab).width+54;x.restore();x.save();x.translate(32+w/2,152);x.scale(.9+.1*v,.9+.1*v);x.translate(-32-w/2,-152);pill(x,32+w/2,152,w,56,col,v);txt(x,lab,32+w/2,154,34,DARK,'center','900',v);x.restore()}
function sticker(x){x.font='104px Impact, "Arial Black", sans-serif';const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+38,6)}
// ---------- shot 0: the title card. The topic is on screen from frame 0, in the thumbnail's style ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,620,60,W/2,620,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='CLAUDE SHIP';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,CREAM);put(TOPIC,W/2,Yt+sz*.2,sz,AMB);
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=720,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(5)+.05,out(9),'BEFORE',AMB);tab(t,ST(9)+.05,out(12),'NOW',TEAL);
 card(t,ST(1)+.5,out(2),LX,LY,'OUR EXAMPLE',CREAM,46);
 card(t,ST(3)+1.7,out(4),LX,LY,'IF YOUR POLICY ALLOWS',AMB,46);
 card(t,ST(4)+.15,out(5),LX,LY,'1 ROUTINE PR · OUR EXAMPLE',CREAM,46);
 card(t,ST(5)+1.1,out(6),1230,LY,'COMMENTS ONLY',AMB,44);
 card(t,ST(8)+.3,out(9),LX,LY,'WAITING FOR A PERSON',AMB,50);
 card(t,ST(9)+.3,out(10),LX,868,'CLAUDE SHIP · BETA · NOV 23, 2026',AMB,36);card(t,ST(9)+.5,out(10),LX,958,'TEAM & ENTERPRISE PLANS · GITHUB',CREAM,36);
 if(sh==19){const fo=1-fin(t,out(20),.5),dm=fin(t,ST(19)+.1,.5);ctx.save();ctx.globalAlpha=.22*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const S1='OUR EXAMPLE: 4 STOPS, NOW 0',S2='IF THE FIXES WORK AND YOUR POLICY ALLOWS',f1=76;ctx.save();ctx.font='800 60px Arial';const f2=Math.min(60,(W-300)/ctx.measureText(S2).width*60);ctx.font=`800 ${f1}px Arial`;const w=Math.max(ctx.measureText(S1).width,txt_w(ctx,S2,f2,'800'))+140;ctx.restore();
  const v=fin(t,ST(19)+.1,.5)*fo;if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.92)';ctx.beginPath();ctx.roundRect(W/2-w/2,130,w,190,40);ctx.fill();ctx.restore();
   txt(ctx,S1,W/2,183,f1,CREAM,'center','800',v);txt(ctx,S2,W/2,266,f2,AMB,'center','800',fin(t,ST(19)+1.0,.5)*fo)}}}

// ---------- cameras: a slow push on the flat board ----------
const push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,ease(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:20},()=>push(1,1.05)));
for(const i of [1,3,5,7,9,10,11])CAM[i]=push(1,1.06);for(const i of [16,17,18,20])CAM[i]=push(1,1.08);CAM[8]=push(1,1.03);
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='H')drawH(o,s,cam);else if(pl=='Q')drawQ(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='P')drawProof(o,s,cam);else if(pl=='W')drawW(o,cam);else if(pl=='F')drawFinal(o,cam);else drawMascot(o,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(const t of [ST(1)+.25,ST(1)+.6,ST(1)+1.0,ST(1)+1.45,ST(1)+1.9,ST(2)+.8,ST(2)+1.15,ST(2)+1.45,ST(3)+.2,ST(3)+1.7,ST(4)+.15,ST(5)+.9,ST(5)+1.1,ST(6)+.9,ST(7)+.15,ST(7)+1.2,ST(8)+.3,ST(8)+.9,ST(9)+.3,ST(9)+.35,ST(11)+.2,ST(12)+.1,ST(12)+1.5,ST(13)+.55,ST(14)+.5,ST(15)+.15,ST(15)+.5,ST(16)+.05,ST(16)+.9,ST(16)+1.8,ST(17)+.05,ST(17)+1.6,ST(18)+.1,ST(18)+.5,ST(18)+1.0,ST(18)+2.0,ST(19)+.1,ST(19)+1.0,ST(20)+1.0,ST(20)+1.75])say(t,'tick');
for(const t of [ST(2)+.1,ST(5)+.1,ST(6)+.1,ST(9)+.1,ST(12)+.4,ST(13)+.05,ST(17)+.5,ST(17)+1.2])say(t,'slide');
for(const t of [ST(3)+1.35,ST(14)+.9,ST(19)+.05])say(t,'stamp');
for(const t of [ST(2)+.55,ST(2)+.9,ST(2)+1.2,ST(9)+.9,ST(9)+1.3,ST(9)+1.7])say(t,'tock');
