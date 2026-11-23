// Episode: Prompt Caching, told through 30 questions about one 100-page PDF. You (the mascot, round amber reading glasses) ask; the AI (a robot with a teal screen head) answers.
// BEFORE: every question makes it read the whole PDF again, and the meter "PDF READS PAID" fills to 30. NOW: the same 30 questions, the PDF read once and its work saved; the meter stops near 4.15.
// 60 s, 29 shots (beats.md "Shots", numbered 0-28). Voice from tts.py (vo.wav laid in at .3 s): film time = voice time + .3. Every time below is FILM seconds.
// Places: T title, D the desk (shots 1,4-18,27), S the PDF close-up (2,3), X the request-row diagram (19-21), C the chart (22,23), P payoff split (24), K cards (25,26), M mascot big (28).
// Helpers follow episodes/claude-meetings/film/film.js. Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random.
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

/* THE CLOCK: cut times of the 29 shots (film seconds) = word starts of the real voice (align.json + .3 s) minus .02 s, on frames. */
const TS=[0,1.58,3.50,5.24,6.05,8.47,9.53,10.55,11.39,14.43,17.64,19.36,20.57,22.23,23.39,25.93,27.23,29.43,31.30,33.28,35.50,36.75,39.44,44.10,46.14,49.20,50.48,54.23,56.67];
const CF=TS.map(t=>Math.round(t*30)).concat([1800]);
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.32;
const PLACE='TDSSDDDDDDDDDDDDDDDXXXCCPKKDM'; /* one letter per shot 0-28 (sound only) */

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1,58.3];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: round amber reading glasses, drawn after the figure in the head's own transform */
function reading(x,p){x.save();headT(x,p);const lk=p.look||0,fx=lk*46,fy=(p.lookY||0)*18+6;x.lineCap='round';
 const cs=[-30+fx*.9,30+fx*1.1];
 x.fillStyle='rgba(255,236,200,.14)';for(const c of cs){x.beginPath();x.arc(c,fy,28,0,7);x.fill()}
 for(const [col,w] of [['#8A5A14',12],[AMB,6.5]]){x.strokeStyle=col;x.lineWidth=w;for(const c of cs){x.beginPath();x.arc(c,fy,28,0,7);x.stroke()}
  x.beginPath();x.moveTo(cs[0]+28,fy-4);x.quadraticCurveTo((cs[0]+cs[1])/2,fy-14,cs[1]-28,fy-4);x.stroke();
  x.beginPath();x.moveTo(cs[0]-28,fy-6);x.lineTo(-HR+4,fy-12);x.moveTo(cs[1]+28,fy-6);x.lineTo(HR-4,fy-12);x.stroke()}
 x.restore()}
function claudeHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE) and a simple face */
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
/* a small student cap on the robot's head (shot 8) */
function capDraw(x,p){x.save();headT(x,p);x.fillStyle='#1E1830';x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';
 x.beginPath();x.moveTo(-62,-84);x.lineTo(-56,-112);x.lineTo(56,-112);x.lineTo(62,-84);x.closePath();x.fill();x.stroke();
 x.fillStyle='#2A2342';x.beginPath();x.moveTo(-112,-108);x.lineTo(0,-142);x.lineTo(112,-108);x.lineTo(0,-80);x.closePath();x.fill();x.stroke();
 x.strokeStyle=AMB;x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(104,-108);x.lineTo(110,-56);x.stroke();x.fillStyle=AMB;x.beginPath();x.arc(110,-52,9,0,7);x.fill();x.restore()}
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();if(o.cap)capDraw(x,p);return p}

// ---------- the desk ----------
const MXp=430,MYp=600,MSp=1.35,AXp=1210,ABp=871,ASp=1.35,STX=820,STY=832,HEAD=[1210,444],HANDR=[665,690],SSC=1.25;
function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
/* a thick stack of pages seen from slightly above: front edge, top face, the label "PDF"; base centre (X,Y) */
function stackDraw(x,X,Y,sc=1,a=1,lab=true,riffle=-1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.scale(sc,sc);
 x.fillStyle='rgba(0,0,0,.28)';x.beginPath();x.ellipse(10,2,150,16,0,0,7);x.fill();
 x.fillStyle=PAPER;x.strokeStyle=INKC;x.lineWidth=4;x.lineJoin='round';x.beginPath();x.rect(-125,-96,250,96);x.fill();x.stroke();
 x.strokeStyle='#B9A88A';x.lineWidth=2;for(let i=1;i<8;i++){x.beginPath();x.moveTo(-125,-i*12);x.lineTo(125,-i*12);x.stroke()}
 x.fillStyle='#F8E9CC';x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.moveTo(-125,-96);x.lineTo(-95,-136);x.lineTo(155,-136);x.lineTo(125,-96);x.closePath();x.fill();x.stroke();
 scribLines(x,-60,110,-122,3,5,'#8A7AA8');
 if(riffle>=0){for(let k=0;k<4;k++){const ph=((riffle*.8+k*.25)%1),L=Math.sin(Math.PI*ph)*(30+k*13),dx=(k-1.5)*14;x.save();x.translate(dx,-L);x.globalAlpha*=.95;x.fillStyle='#F8E9CC';x.strokeStyle=INKC;x.lineWidth=3;x.beginPath();x.moveTo(-125,-96);x.lineTo(-95,-136);x.lineTo(155,-136);x.lineTo(125,-96);x.closePath();x.fill();x.stroke();scribLines(x,-60,110,-118,k+9,5,'#8A7AA8');x.restore()}}
 if(lab)imp(x,'PDF',0,-48,56,INKC==='#120A1C'?'#E4493F':'#E4493F');
 x.restore()}
function coinDraw(x,X,Y,sc,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.scale(sc,sc);x.fillStyle=INKC;x.beginPath();x.arc(0,0,34,0,7);x.fill();x.fillStyle=AMB;x.beginPath();x.arc(0,0,28,0,7);x.fill();x.strokeStyle='#B97A14';x.lineWidth=4;x.beginPath();x.arc(0,0,20,0,7);x.stroke();txt(x,'$',0,2,30,'#8A5A14','center','900');x.restore()}
function qCard(x,X,Y,n,sc=1,a=1,rot=0){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.rotate(rot);x.scale(sc,sc);rr(x,-54,-33,108,66,12,AMB,INKC,4);txt(x,'Q'+n,0,2,38,'#1B1430','center','900');x.restore()}
function flyCard(x,t,t0,n,dur,end=[1120,690]){const u=(t-t0)/dur;if(u<0||u>1)return;const e=ease(u),X=lerp(HANDR[0]+30,end[0],e),Y=lerp(HANDR[1],end[1],e)-Math.sin(Math.PI*e)*120;
 qCard(x,X,Y,n,lerp(.9,.7,e),Math.min(1,u*8)*Math.min(1,(1-u)*6),(e-.5)*.4)}
function ghost(x,t,t0,dur){const u=(t-t0)/dur;if(u<0||u>1)return;const e=ease(u),X=lerp(STX,HEAD[0],e),Y=lerp(STY-60,HEAD[1]+80,e)-Math.sin(Math.PI*e)*60;stackDraw(x,X,Y,lerp(SSC,.3,e),.92*Math.min(1,(1-u)*5),false)}
function savedBox(x,t,a,pulse){if(a<=0)return;x.save();const cx=AXp,cy=700,w=330,h=76,sc=(.88+.12*a)*(1+pulse*.06);x.globalAlpha*=a;x.translate(cx,cy);x.scale(sc,sc);
 let g=x.createRadialGradient(0,0,20,0,0,260);g.addColorStop(0,'rgba(45,178,174,.5)');g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(-300,-160,600,320);
 rr(x,-w/2,-h/2,w,h,16,'#0E3A44',TEAL,6);txt(x,'SAVED WORK',0,3,36,'#BFF2EE','center','900');x.restore()}
function pileDraw(x,t,t0){for(let r=0;r<5;r++)for(let c=0;c<6;c++){const k=r*6+c,a=fin(t,t0+k*.03,.5);if(a<=0)continue;stackDraw(x,1170+(c-2.5)*100,300+r*64,.32*(.7+.3*a),a,false)}}
function deskWorld(x,t,o){bgDusk(x,o.warm===undefined?.3:o.warm);
 if(o.pile)pileDraw(x,t,o.pileT0);
 const pm={x:MXp,y:MYp,s:MSp,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:0,lookY:.1,brow:.2,mouth:o.smile?1:.6,mouthW:28};
 if(o.hand){pm.hands.r=[170,70];pm.showH.r=true}
 if(o.mini)personRim(x,HERO,pm,'rgba(255,196,150,1)',3,-1);else actor(x,'hero',HERO,pm,o.cam);reading(x,pm);
 robotFig(x,AXp,ABp,ASp,t,{cap:o.cap,smile:o.smile?30:22});
 x.fillStyle='#B0705A';x.fillRect(-900,792,W+1800,40);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,792,W+1800,5);
 x.fillStyle='#7A4038';x.fillRect(-900,832,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,892,W+1800,10);
 pill(x,AXp,770,86,44,'rgba(18,10,28,.85)');txt(x,'AI',AXp,772,30,'#BFF2EE','center','900');
 if(o.stack)stackDraw(x,o.stackX||STX,STY,SSC,1);
 if(o.box)savedBox(x,t,o.box,o.pulse||0)}
function deskState(sh,t){const u=t-ST(sh),s={stack:sh>=4&&sh!=8,hand:[4,9,10,11,14,16,17,18].includes(sh),cap:sh==8,smile:sh==18||sh==27,warm:sh==27?.45:.3};
 if(sh==1)s.hand=true;
 if(sh==12){s.pile=1;s.pileT0=ST(12)+.05}
 if(sh==15)s.box=fin(t,ST(15)+.25,.6);
 if(sh>=16&&sh<=18||sh==27)s.box=1;
 if(sh==16||sh==17)s.pulse=Math.max(0,Math.sin(t*22))*(sh==16?1:.6);
 return s}
function drawDesk(t,sh,cam){const x=layer('board',cam),u=t-ST(sh),s=deskState(sh,t);s.cam=cam;deskWorld(x,t,s);
 // book in front of the AI (shot 8): the whole thick stack, pages flying
 if(sh==8){const a=fin(t,ST(8)+.2,.5);stackDraw(x,AXp,846,1.4,a,true);
  for(let i=0;i<6;i++){const ph=((t*1.5+i/6)%1),X=AXp+(i%3-1)*130+Math.sin(ph*6+i)*30,Y=760-ph*300;x.save();x.globalAlpha=Math.sin(Math.PI*ph)*.95*a;x.translate(X,Y);x.rotate(Math.sin(ph*5+i)*.9);rr(x,-45,-58,90,116,6,'#F8E9CC',INKC,3);scribLines(x,-32,32,-30,i,4);scribLines(x,-32,32,-10,i+3,4);scribLines(x,-32,32,10,i+5,4);x.restore()}}
 if(sh==1){for(const [d,i] of [[.3,0],[.95,1]]){const v=(t-(ST(1)+d))/1.0;if(v<0||v>1)continue;const e=ease(v);coinDraw(x,lerp(HANDR[0]+20,AXp-60,e),lerp(HANDR[1]-10,610,e)-Math.sin(Math.PI*e)*140,lerp(1,.6,e),Math.min(1,v*6)*Math.min(1,(1-v)*5))}}
 if(sh==4){for(let k=0;k<30;k++)flyCard(x,t,ST(4)+.05+k*.072,k+1,.4)}
 if(sh==9){flyCard(x,t,u>0?ST(9)+.1:0,1,.45);ghost(x,t,ST(9)+.7,.9)}
 if(sh==10){flyCard(x,t,ST(10)+.1,2,.4);ghost(x,t,ST(10)+.45,.7)}
 if(sh==11){for(let k=0;k<10;k++)flyCard(x,t,ST(11)+.02+k*.11,3+k*3,.3);for(let k=0;k<5;k++)ghost(x,t,ST(11)+.05+k*.22,.4)}
 if(sh==14){flyCard(x,t,ST(14)+.15,1,.45);ghost(x,t,ST(14)+.55,.9)}
 if(sh==16){for(let k=0;k<29;k++)flyCard(x,t,ST(16)+.1+k*.07,2+k,.33,[AXp-110,700])}
 if(sh==18){flyCard(x,t,ST(18)+.1,7,.4,[AXp-110,700]);const b=fin(t,ST(18)+.7,.5);if(b>0)bubbleLines(x,780,300,420,150,[1130,420],b)}
 if(sh==27){}
 comp([['board',0]])}
function bubbleLines(x,cx,cy,w,h,tip,u){x.save();x.translate(cx,cy);const sc=.85+.15*u;x.scale(sc,sc);x.translate(-cx,-cy);x.globalAlpha*=u;x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';
 x.beginPath();x.moveTo(cx+w/2-70,cy+h/2-3);x.lineTo(tip[0],tip[1]);x.lineTo(cx+w/2-10,cy+h/2-3);x.closePath();x.fill();x.stroke();x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,36);x.fill();x.stroke();
 x.fillStyle=CREAM;x.fillRect(cx+w/2-66,cy+h/2-8,52,12);
 x.fillStyle='#8A7AA8';for(let i=0;i<3;i++)x.fillRect(cx-w/2+40,cy-h/2+34+i*34,(w-80)*(i==2?.55:1-.08*i),12);x.restore()}

// ---------- the PDF close-up (shots 2 and 3) ----------
function drawS(t,sh,cam){const x=layer('board',cam);bgDusk(x,.4,700,560);
 x.fillStyle='#B0705A';x.fillRect(-900,860,W+1800,40);x.fillStyle='#7A4038';x.fillRect(-900,900,W+1800,400);
 if(sh==2){stackDraw(x,700,880,2.6,1,true,t-ST(2));pill(x,700,320,780,100,'rgba(27,20,48,.88)',fin(t,ST(2)+.1,.5));txt(x,'PDF · 100 PAGES',700,324,58,AMB,'center','800',fin(t,ST(2)+.1,.5))}
 if(sh==3){for(let k=4;k>=0;k--){const a=k==0?1:fin(t,ST(3)+.02+k*.05,.5);stackDraw(x,700,880-k*100,1.1,a,k==0||k==4)}}
 comp([['board',0]])}

// ---------- the request-row diagram (shots 19-21) ----------
const RY=[400,600,800],PL=200,PW=1000,QL=1230,QW=220,RH=130;
function block(x,l,cy,w,s,mode,a,size=46,sa=a){if(a<=0)return;x.save();x.globalAlpha*=a;const sc=.94+.06*sa,cx=l+w/2;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 const col=mode=='amber'?AMB:mode=='teal'?TEAL:'#8A7AA8',fill=mode=='amber'?'rgba(255,198,110,.22)':mode=='teal'?'rgba(45,178,174,.26)':'#2A1F42';
 if(mode=='amber'){x.save();x.translate(cx,cy);x.scale(1,.32);const g=x.createRadialGradient(0,0,30,0,0,w*.62);g.addColorStop(0,'rgba(255,198,110,.4)');g.addColorStop(1,'rgba(255,198,110,0)');x.fillStyle=g;x.fillRect(-w*.62,-w*.62,w*1.24,w*1.24);x.restore()}
 rr(x,l,cy-RH/2,w,RH,22,fill,col,mode=='plain'?5:8);txt(x,s,cx,cy+2,size,CREAM,'center','900');x.restore()}
function tagP(x,X,Y,s,col,a,size=34,tc='#0B2A30'){if(a<=0)return;x.save();x.globalAlpha*=a;const w=txt_w(x,s,size)+46,sc=.9+.1*a;x.translate(X,Y);x.scale(sc,sc);pill(x,0,0,w,size*1.8,col);txt(x,s,0,2,size,tc,'center','900');x.restore()}
function drawX(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(sh),u=t-T;
 const ti=sh==19?fin(t,T+.05,.5):1;imp(x,'HOW IT WORKS',960,215,96,CREAM);
 const r1=sh==19?fin(t,T+.2,.5):1,q1=sh==19?fin(t,T+1.0,.5):1,r2=sh==20?fin(t,T+.0,.5):sh>20?1:0,r3=sh==20?fin(t,T+.25,.5):sh>20?1:0;
 const teal=sh==19?0:sh==20?fin(t,T+.6,.8):1;
 const modeP=(i)=>teal>=1?'teal':(sh==19&&i==0?'amber':'plain');
 const amQ=sh==21?fin(t,T+.1,.5):0;
 const rows=[[r1,q1,'Q1'],[r2,r2,'Q2'],[r3,r3,'Q3']];
 for(let i=0;i<3;i++){const [a,b,q]=rows[i];block(x,PL,RY[i],PW,'PDF · 100 PAGES',modeP(i),a);if(teal>0&&teal<1)block(x,PL,RY[i],PW,'PDF · 100 PAGES','teal',a*teal,46,a);block(x,QL,RY[i],QW,q,amQ>.5?'amber':'plain',b)}
 // "=" marks between the PDF blocks and the label
 for(let i=0;i<2;i++){const a=i==0?r2:r3;if(a>0)imp(x,'=',PL+PW*.2,(RY[i]+RY[i+1])/2,56,CREAM)}
 tagP(x,1040,(RY[0]+RY[1])/2,'EXACTLY THE SAME',CREAM,sh==20?fin(t,T+.5,.5):sh>20?1:0,32,'#1B1430');
 // FIRST arrow above row 1
 if(sh==19){const a=fin(t,T+.9,.5);if(a>0){x.save();x.globalAlpha=a;tagP(x,330,300,'FIRST',AMB,1,36,'#1B1430');x.fillStyle=AMB;x.beginPath();x.moveTo(330-16,327);x.lineTo(330+16,327);x.lineTo(330,350);x.closePath();x.fill();x.restore()}}
 // tags on the right
 const tg=sh==20?fin(t,T+.8,.6):sh>20?1:0;
 tagP(x,1660,RY[0],'SAVED WORK',TEAL,tg,34);tagP(x,1660,RY[1],'REUSED',TEAL,tg,34);tagP(x,1660,RY[2],'REUSED',TEAL,tg,34);
 tagP(x,QL+QW/2,RY[2]+120,'NEW: READ FRESH',AMB,amQ,34,'#1B1430');
 comp([['board',0]])}

// ---------- the chart (shots 22 and 23) ----------
const BASE=850,BW=200,CH=440;
function bar(x,cx,h,col,a){if(a<=0||h<=0)return;rr(x,cx-BW/2,BASE-h,BW,h,14,col,INKC,5)}
function drawC(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,960,600);
 x.fillStyle='rgba(201,184,224,.35)';x.fillRect(-100,BASE,W+200,6);
 const T22=ST(22),T23=ST(23);
 const g1=1,ha=sh==22?fin(t,T22+.9,.9):1,ht=sh==22?fin(t,T22+2.3,.8):1;
 imp(x,'10 REQUESTS',520,205,84,CREAM);
 bar(x,360,CH*ha,AMB,1);bar(x,680,CH*(2.15/10)*ht,TEAL,1);
 if(ha>.05)imp(x,'10x',360,BASE-CH*ha-44,76,AMB);if(ht>.05)imp(x,'2.15x',680,BASE-CH*.215*ht-44,76,TEAL);
 txt(x,'WITHOUT CACHING',360,BASE+46,28,CREAM,'center','900');txt(x,'WITH CACHING',680,BASE+46,28,CREAM,'center','900');
 {const S1='OpenAI docs · GPT-5.6+, most models · 0.1x reads',fs=Math.min(30,30*716/txt_w(x,S1,30,'800'));txt(x,S1,520,BASE+104,fs,'#C9B8E0','center','800',sh==22?fin(t,T22+.4,.5):1)}
 if(sh==23){const hh=fin(t,T23+.15,.6),a2=fin(t,T23+.4,.7),b2=fin(t,T23+.9,.7),l2=fin(t,T23+1.2,.5);
  x.fillStyle='rgba(201,184,224,.3)';for(let y=150;y<BASE+120;y+=26)x.fillRect(898,y,4,12);
  {const S2='30 QUESTIONS · OUR MATH · PDF PART',fs=Math.min(60,60*900/impW(x,S2,60));imp(x,S2,1390,205,fs,CREAM)}
  bar(x,1230,CH*a2,AMB,1);bar(x,1550,CH*(4.15/30)*b2,TEAL,1);
  if(a2>.05)imp(x,'30',1230,BASE-CH*a2-44,76,AMB);if(b2>.05)imp(x,'ABOUT 4',1550,BASE-CH*(4.15/30)*b2-44,70,TEAL);
  txt(x,'1.25 + 29 x 0.1',1550,BASE+46,34,CREAM,'center','900',l2)}
 comp([['board',0]])}

// ---------- the payoff split (shot 24) ----------
function miniScene(x,l,tp,sc,t,o){x.save();x.beginPath();x.rect(l,tp,W*sc,H*sc);x.clip();x.translate(l,tp);x.scale(sc,sc);o.mini=true;deskWorld(x,t,o);x.restore();rr(x,l,tp,W*sc,H*sc,0,null,INKC,4)}
function drawP(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(24),a=fin(t,T+.05,.5),b=fin(t,T+.3,.5);
 x.save();x.globalAlpha=a;rr(x,90,250,840,540,30,'#2A1F42',AMB,6);x.restore();x.save();x.globalAlpha=b;rr(x,990,250,840,540,30,'#2A1F42',TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,300,300,200,56,AMB);txt(x,'BEFORE',300,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1200,300,150,56,TEAL);txt(x,'NOW',1200,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=a;miniScene(x,115,380,.3,t,{stack:true,pile:1,pileT0:-9,warm:.3});x.restore();
 x.save();x.globalAlpha=b;miniScene(x,1015,380,.3,t,{stack:true,box:1,smile:true,warm:.3});x.restore();
 meterBox(x,115+576+30,285,.58,30,AMB,a,false);meterBox(x,1015+576+30,285,.58,4.15,TEAL,b,false);
 comp([['board',0]])}

// ---------- the catch (shots 25, 26) ----------
function drawK(t,sh,cam){const x=layer('board',cam);bgDusk(x,.18,960,560);const T=ST(sh);
 if(sh==25){const c=fin(t,T+.1,.6);x.save();x.translate(960,430);x.scale(.85+.15*c,.85+.15*c);x.globalAlpha=c;rr(x,-640,-170,1280,340,60,'#2A1F42',AMB,8);imp(x,'THE CATCH',0,6,176,AMB);x.restore();
  tagP(x,960,720,'CLAUDE · DEFAULT',TEAL,fin(t,T+.9,.55),58)}
 if(sh==26){const e=fin(t,T+.1,.6),p=seg(t,T+1.1,T+3.2),bx=lerp(1,.35,ease(p)),secs=Math.round(300*(1-p)),tm=Math.floor(secs/60)+':'+String(secs%60).padStart(2,'0');
  x.save();x.translate(650,480);x.scale(.88+.12*e,.88+.12*e);x.globalAlpha=e*bx;
  let g=x.createRadialGradient(0,0,40,0,0,520);g.addColorStop(0,'rgba(45,178,174,.4)');g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(-600,-300,1200,600);
  rr(x,-450,-190,900,380,34,'#0E3A44',TEAL,8);imp(x,'SAVED WORK',0,-95,84,'#BFF2EE');x.restore();
  imp(x,tm,650,540,190,AMB);x.save();x.globalAlpha=e;clockDraw(x,1400,480,130,p*Math.PI*2);x.restore();
  tagP(x,960,790,'AT LEAST 5 MIN',TEAL,fin(t,T+1.5,.5),44);tagP(x,960,900,'EACH USE RESTARTS THE CLOCK',CREAM,fin(t,T+2.2,.5),40,'#1B1430')}
 comp([['board',0]])}
function clockDraw(x,X,Y,r,ang){x.save();x.translate(X,Y);x.fillStyle=INKC;x.beginPath();x.arc(0,0,r+12,0,7);x.fill();x.fillStyle='#FFF6E6';x.beginPath();x.arc(0,0,r,0,7);x.fill();
 x.strokeStyle='#8A5A14';x.lineWidth=7;for(let i=0;i<12;i++){const a=i*Math.PI/6;x.beginPath();x.moveTo(Math.cos(a)*(r-12),Math.sin(a)*(r-12));x.lineTo(Math.cos(a)*(r-30),Math.sin(a)*(r-30));x.stroke()}
 x.fillStyle=TEAL;x.beginPath();x.moveTo(0,0);x.arc(0,0,r-40,-Math.PI/2,-Math.PI/2+ang,false);x.closePath();x.globalAlpha=.35;x.fill();x.globalAlpha=1;
 x.lineCap='round';x.strokeStyle=RED;x.lineWidth=9;x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(ang)*(r-20),-Math.cos(ang)*(r-20));x.stroke();x.restore()}

// ---------- the mascot big (shot 28) ----------
function drawMascot(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);reading(x,p);
 const T0=ST(28)+.1,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,560);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 txt(x,'NEXT IN 60 SECONDS',1430,700,50,AMB,'center','900',fin(t,ST(28)+.6,.5));
 comp([['board',0]])}

// ---------- the meter "PDF READS PAID" (lesson L25): screen space ----------
function meterBox(x,l,tp,k,v,col,a=1,title=true){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320*k,h=780*k,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,26*k,'rgba(27,20,48,.93)',col,5*k);
 if(title){const fs=Math.min(30,280/txt_w(x,'PDF READS PAID',30)*30)*k;txt(x,'PDF READS PAID',cx,tp+46*k,fs,CREAM,'center','900')}
 const amber=col===AMB,s=amber?(v>29.6?'x30':String(Math.round(v))):(v<.005?'0':v.toFixed(2));imp(x,s,cx,tp+(title?150:110)*k,(s.length>4?112:132)*k,col);
 const tl=l+118*k,tw=90*k,top=tp+260*k,bot=tp+720*k,ph=bot-top;
 rr(x,tl,top,tw,ph,12*k,'#241A3C',INKC,4*k);
 for(const n of [0,10,20,30]){const y=bot-ph*n/30;x.fillStyle='#C9B8E0';x.fillRect(tl-18*k,y-2*k,18*k,4*k);txt(x,String(n),tl-26*k,y,28*k,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/30);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12*k);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6*k,fh));x.restore()}
 x.restore()}
const MK=[[ST(3)+.05,0],[ST(3)+.65,30],[ST(6)+.02,30],[ST(6)+.55,0],[ST(9)+1.3,0],[ST(9)+2.0,1],[ST(10)+.8,1],[ST(10)+1.4,2],[ST(11),2],[ST(12),27],[ST(12)+.8,30],[ST(13),30],[ST(13)+.5,0],[ST(14)+.3,0],[ST(14)+.9,1],[ST(14)+1.2,1],[ST(14)+1.55,1.25],[ST(16)+.1,1.25],[ST(17),2.6],[ST(17)+1.7,4.15]];
function meterOverlay(t,sh){if(!((sh>=3&&sh<=18)||sh==27))return;const a=sh==3?fin(t,ST(3),.5):1,col=t<ST(13)+.5&&sh<19?AMB:TEAL;meterBox(ctx,1560,170,1,sh==27?4.15:kf(t,MK),col,a)}
/* a sliver for every card: small teal chips fly from the SAVED WORK box to the meter (shot 17) */
function slivers(t){if(!inS(t,17,18))return;const f=kf(t,MK);for(let k=0;k<9;k++){const u=(t-(ST(17)+.1+k*.17))/.5;if(u<0||u>1)continue;const e=ease(u);const X=lerp(1360,1723,e),Y=lerp(700,890-460*clamp(f/30),e)-Math.sin(Math.PI*e)*90;ctx.save();ctx.globalAlpha=Math.min(1,u*6)*Math.min(1,(1-u)*5);ctx.fillStyle=TEAL;ctx.strokeStyle=INKC;ctx.lineWidth=3;ctx.beginPath();ctx.roundRect(X-20,Y-6,40,12,5);ctx.fill();ctx.stroke();ctx.restore()}}

// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size){const v=fin(t,a,.5)*(b?1-fin(t,b,.3):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(s).width+size*2.2;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);pill(ctx,X,y,w,size*2.2,'rgba(27,20,48,.88)',v);txt(ctx,s,X,y+2,size,col,'center','800',v);ctx.restore()}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const tw=x.measureText('Prompt Caching').width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,'Prompt Caching',58,54,32,AMB,'left','800');txt(x,' ·',58+tw,54,32,CREAM,'left','800');pill(x,58+tw+dw+50,52,78,42,RED);txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}
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
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='PROMPT CACHING';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,CREAM);put(TOPIC,W/2,Yt+sz*.2,sz,AMB);
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=800,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);slivers(t);
 tab(t,ST(7)+.05,out(13),'BEFORE',AMB);tab(t,ST(13)+.05,out(19),'NOW',TEAL);
 if(sh==4){const n=Math.min(30,1+Math.floor(seg(t,ST(4)+.1,ST(5)-.2)*30));const a=fin(t,ST(4)+.05,.5);ctx.save();ctx.globalAlpha=a;pill(ctx,830,215,330,150,'rgba(27,20,48,.88)');imp(ctx,'Q'+n,830,218,124,AMB);ctx.restore()}
 if(sh==5){const v=fin(t,ST(5)+.1,.55);if(v>0){ctx.save();ctx.translate(820,200);ctx.scale(.75+.25*v,.75+.25*v);ctx.globalAlpha=v;ctx.rotate(-.04);imp(ctx,'HOW?',0,0,200,AMB);ctx.restore()}}
 card(t,ST(6)+.3,out(7),LX,LY,'1 PDF · 30 QUESTIONS',CREAM,46);
 card(t,ST(8)+.5,out(9),LX,LY,'EVERY QUESTION: ALL 100 PAGES',AMB,44);
 card(t,ST(9)+2.0,out(10),LX,LY,'FULL PRICE',AMB,50);
 card(t,ST(12)+.3,out(13),LX,LY,'30 PDFs PAID',AMB,50);
 card(t,ST(14)+.9,out(15),LX,LY,'+25% · FIRST QUESTION · DEFAULT',TEAL,42);
 card(t,ST(17)+.2,out(18),LX,LY,'ABOUT 1/10 EACH · MOST MODELS',TEAL,44);
 card(t,ST(18)+.5,out(19),LX,LY,'USUALLY STARTS SOONER',TEAL,46);
 card(t,ST(24)+.8,out(25),960,890,'SAME 30 QUESTIONS',CREAM,52);
 if(inS(t,27,28)){const fo=1-fin(t,out(28),.3),dm=fin(t,ST(27)+.15,.5);ctx.save();ctx.globalAlpha=.22*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,ST(27)+.1,.5)*fo;if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.92)';ctx.beginPath();ctx.roundRect(W/2-550,108,1100,175,40);ctx.fill();ctx.restore();
   txt(ctx,'Same book:',W/2,158,66,CREAM,'center','800',v);txt(ctx,'read once, reuse the work.',W/2,232,62,AMB,'center','800',fin(t,ST(27)+.6,.5)*fo)}}}

// ---------- cameras: a slow push on the flat board ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:28},()=>push()));CAM[25]=push(1,1.08);CAM[26]=push(1,1.06);CAM[2]=push(1,1.08);CAM[19]=push(1,1.03);CAM[20]=push(1,1.03);CAM[21]=push(1,1.03);CAM[22]=push(1,1.1);CAM[23]=push(1,1.03);
FILM={dur:60,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='D')drawDesk(o,s,cam);else if(pl=='S')drawS(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='C')drawC(o,s,cam);else if(pl=='P')drawP(o,cam);else if(pl=='K')drawK(o,s,cam);else drawMascot(o,s,cam);overlay(o,s)}
  const fo=seg(o,60-.45,60-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, page sounds ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(let k=0;k<30;k+=3)say(ST(4)+.05+k*.072+.4,'tick');
for(const t of [ST(1)+.5,ST(1)+1.1,ST(9)+.55,ST(10)+.5,ST(14)+.55,ST(14)+1.55,ST(18)+.5,ST(19)+.2,ST(19)+1.0,ST(20)+.1,ST(20)+.35,ST(20)+.8,ST(21)+.1,ST(22)+.9,ST(22)+2.3,ST(23)+.4,ST(23)+.9,ST(25)+.1,ST(25)+.9,ST(26)+.1,ST(26)+1.5,ST(26)+2.2,ST(27)+.1,ST(28)+.1,ST(5)+.1,ST(6)+.3,ST(8)+.5,ST(9)+2.0,ST(12)+.3,ST(14)+.9,ST(17)+.2,ST(18)+.5,ST(24)+.8,ST(3)+.1])say(t,'tick');
for(const t of [ST(2)+.2,ST(2)+.7,ST(2)+1.2,ST(8)+.2,ST(8)+.8,ST(8)+1.4,ST(8)+2.0])say(t,'paper');
for(const t of [ST(9)+.7,ST(10)+.45,ST(14)+.55,ST(11)+.05,ST(11)+.5,ST(11)+.95,ST(16)+.1,ST(16)+1.0,ST(12)+.3,ST(3)+.3])say(t,'slide');
say(ST(15)+.25,'stamp');say(ST(25)+.1,'stamp');
