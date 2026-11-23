// Episode: Claude Meetings, told through one planning call. You (the mascot, an amber headset on) run a call with two teammates; Claude joins as a fourth tile (a robot with a teal screen head),
// writes the plan doc live while teammates edit, asks before it looks things up, and keeps notes. BEFORE: you hang up and write it all yourself at a desk.
// 60 s, 31 shots (beats.md "Shots", numbered 0-30). Voice from tts.py (vo.wav laid in at .3 s): film time = voice time + .3. Every time below is FILM seconds.
// Everything is flat 2D on one layer ('board'); places: T title, C the call window (tiles, doc, chat, whiteboard), S the desk after the call, M the mascot big, K flat cards, H Claude's head big, B board, L laptop, P payoff.
// Helpers follow episodes/inkling-2-mini-v2/film/film.js. Rules: no setLineDash; state changes sit on cut frames or fade; every stroke setting sits inside save/restore; no // inside a long line.
let t_g=0;
const hash=(a,b)=>{const s=Math.sin(a*12.9898+b*78.233)*43758.5453;return s-Math.floor(s)};
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.4)=>ease(seg(t,a,a+d));
const bo=u=>{u=clamp(u);return 1+2.70158*Math.pow(u-1,3)+1.70158*Math.pow(u-1,2)}; /* back-out: a pop with a small overshoot */
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function check(x,X,Y,sz,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(X-.5*sz,Y);x.lineTo(X-.12*sz,Y+.42*sz);x.lineTo(X+.55*sz,Y-.45*sz);
 x.strokeStyle='#120A1C';x.lineWidth=sz*.34;x.stroke();x.strokeStyle='#2DB2AE';x.lineWidth=sz*.2;x.stroke();x.restore()}
function scribLines(x,X0,X1,Y,seed,h=4,col='#8A7AA8'){let X=X0,k=0;x.fillStyle=col;while(X<X1-8){const len=14+hash(seed,k)*46;x.fillRect(X,Y,Math.min(len,X1-X),h);X+=len+9;k++}}

/* THE CLOCK: cut times of the 31 shots (film seconds) = word starts of the real voice (vo_lines.json + align.json, +.3 s) minus .02 s, on frames. */
const TS=[0,1.70,3.35,4.55,5.69,6.77,7.91,8.92,11.16,12.79,14.25,15.25,16.11,18.87,20.62,23.31,25.82,27.75,29.47,30.91,32.23,33.13,33.94,35.47,37.64,41.86,44.70,48.66,51.57,53.79,56.73];
const CF=TS.map(t=>Math.round(t*30)).concat([1800]);
const shotOf=t=>{const f=Math.round(t*30+1e-6);let s=0;for(let i=0;i<CF.length-1;i++)if(f>=CF[i])s=i;return s};
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.29; /* out(i): a card fades out from here, so it is gone .04 s before the cut at shot i */
const PLACE='T'+'C'+'S'+'CCC'+'M'+'CCCCC'+'S'+'C'+'K'+'CCCCCC'+'H'+'CC'+'B'+'L'+'P'+'KK'+'C'+'M'; /* one letter per shot 0-30 (sound only: a bigger brush when the place changes) */

// ---------- the cast ----------
const TMA={skin:'#8A5A3C',cloth:'#3A9C97',hood:'#27726F',hand:'#8A5A3C',face:'#1c1a2b',leg:'#2C2A49',shoe:'#17141F',finger:'#1c1a2b'}; /* teammate 2: dark skin, teal top */
const TMB={skin:'#E1B48C',cloth:'#8C94A8',hood:'#6A7388',hand:'#E1B48C',face:'#1c1a2b',leg:'#2C2A49',shoe:'#17141F',finger:'#1c1a2b'}; /* teammate 3: tan skin, grey top */
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const CH=[HERO,TMA,TMB];
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1,58.3];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: an amber headset (band, two ear cups, a mic on a boom), drawn after the figure in the head's own transform */
function headset(x,p){x.save();headT(x,p);x.lineCap='round';
 for(const [c,w] of [['#8A5A14',22],['#FFC66E',13]]){x.strokeStyle=c;x.lineWidth=w;x.beginPath();x.arc(0,0,HR+10,Math.PI*1.03,Math.PI*1.97);x.stroke()}
 for(const sx of [-1,1]){x.fillStyle='#D9962A';x.strokeStyle='#8A5A14';x.lineWidth=5;x.beginPath();x.roundRect(sx*(HR+10)-19,-26,38,70,14);x.fill();x.stroke();x.fillStyle='#FFC66E';x.beginPath();x.roundRect(sx*(HR+10)-11,-18,22,54,9);x.fill()}
 for(const [c,w] of [['#8A5A14',13],['#FFC66E',7]]){x.strokeStyle=c;x.lineWidth=w;x.beginPath();x.moveTo(-HR-12,44);x.quadraticCurveTo(-HR+8,112,-30,100);x.stroke()}
 x.fillStyle='#FFC66E';x.strokeStyle='#8A5A14';x.lineWidth=4;x.beginPath();x.roundRect(-52,88,30,24,10);x.fill();x.stroke();x.restore()}
function claudeHead(x,o){ /* head-local: a screen head with a teal screen (#2DB2AE) and a simple face */
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,'#2DB2AE');x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();return p}

// ---------- the call window ----------
const WINL=90,WINT=180,WINW=1740,WINH=795;
const ROW3=[130,690,1250].map(l=>({l,t:236,w:540,h:600}));
const ROW4=[130,550,970,1390].map(l=>({l,t:236,w:400,h:600}));
const GB=[[130,236],[540,236],[130,541],[540,541]].map(([l,t])=>({l,t,w:390,h:295})); /* 2x2 tiles with the doc beside them */
const GC=[[130,236],[695,236],[130,541],[695,541]].map(([l,t])=>({l,t,w:545,h:295})); /* 2x2 tiles with the chat strip beside them */
const STR=[130,550,970,1390].map(l=>({l,t:236,w:400,h:160})); /* a strip of tiles above the doc and the whiteboard */
const DOCB={l:960,t:236,w:830,h:600}, CHAT={l:1270,t:236,w:520,h:600}, DOCS={l:130,t:410,w:845,h:430}, WBS={l:1005,t:410,w:785,h:430};
const TBG=['#3B2A5E','#2E3A5C','#4A2F57','#1E3A44'];
function winFrame(x,caption){rr(x,WINL,WINT,WINW,WINH,28,'#17122A','#3A2D5C',6);x.fillStyle='#211A3A';x.beginPath();x.roundRect(WINL,WINT,WINW,46,[28,28,0,0]);x.fill();if(caption)txt(x,'GOOGLE MEET',WINL+34,WINT+24,22,'#C9B8E0','left','900')}
/* one tile: k 0 you (mascot), 1 and 2 teammates, 3 Claude. o: speak, dark 0..1, pop 0..1, glow, shrug 0..1, smile */
function tile(x,rc,k,t,o={}){const sc=o.pop===undefined?1:o.pop;if(sc<=0)return;
 x.save();const cx=rc.l+rc.w/2,cy=rc.t+rc.h/2;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 if(o.glow>0){const g=x.createRadialGradient(cx,cy,40,cx,cy,rc.w*.9);g.addColorStop(0,`rgba(45,178,174,${.5*o.glow})`);g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(rc.l-rc.w*.5,rc.t-rc.h*.5,rc.w*2,rc.h*2)}
 x.beginPath();x.roundRect(rc.l,rc.t,rc.w,rc.h,22);x.save();x.clip();
 let g=x.createLinearGradient(0,rc.t,0,rc.t+rc.h);g.addColorStop(0,TBG[k]);g.addColorStop(1,'#1A1230');x.fillStyle=g;x.fillRect(rc.l,rc.t,rc.w,rc.h);
 const s=(rc.h-14-rc.h*.2)/447,fx=rc.l+rc.w/2,fb=rc.t+rc.h;
 if(k==3){robotFig(x,fx,fb,s,t,{talk:o.speak,smile:o.smile})}
 else{const p={x:fx,y:fb+34*s-235*s,s,face:1,breath:t*2+k*1.3,noLegs:true,hands:{},showH:{},blink:blinkAt(t+k*.9,BL),mouthW:26,mouth:.6,look:0,brow:.2};
  if(o.speak){p.open=talk(t,-1,1e9,9+k*1.7);p.mouth=.8}
  if(o.shrug>0){const a=ease(o.shrug);p.hands.l=[lerp(-97,-150,a),lerp(220,95,a)];p.hands.r=[lerp(97,150,a),lerp(220,95,a)];p.showH.l=p.showH.r=true;p.headY=a*4;p.tilt=Math.sin(t*3)*.04*a;p.sad=.5*a}
  drawPerson(x,CH[k],p);if(k==0)headset(x,p)}
 if(k==3){const w=rc.h>400?34:rc.h>200?24:16;pill(x,fx,fb-(rc.h>200?34:12),txt_w(x,'CLAUDE',w)+w*1.2,w*1.7,'rgba(18,10,28,.8)');txt(x,'CLAUDE',fx,fb-(rc.h>200?33:11),w,'#BFF2EE','center','900')}
 if(o.dark>0){x.fillStyle=`rgba(10,6,20,${.94*o.dark})`;x.fillRect(rc.l,rc.t,rc.w,rc.h)}
 x.restore();if(o.glow>0){x.strokeStyle='#2DB2AE';x.lineWidth=7;x.beginPath();x.roundRect(rc.l,rc.t,rc.w,rc.h,22);x.stroke()}x.restore()}
function txt_w(x,s,size){x.save();x.font=`900 ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function emptySlot(x,rc,a=1){x.save();x.globalAlpha=.5*a;rr(x,rc.l,rc.t,rc.w,rc.h,22,'rgba(30,22,52,.8)','#3A2D5C',4);x.restore()}
function hangBtn(x,X,Y,press){const s=1-.14*press;x.save();x.translate(X,Y);x.scale(s,s);x.fillStyle='#120A1C';x.beginPath();x.arc(0,0,44,0,7);x.fill();x.fillStyle=press>.3?'#B8322B':'#E4493F';x.beginPath();x.arc(0,0,38,0,7);x.fill();
 x.strokeStyle='#FFF6E6';x.lineWidth=11;x.lineCap='round';x.beginPath();x.arc(0,16,26,Math.PI*1.2,Math.PI*1.8);x.stroke();x.beginPath();x.moveTo(-26,-2);x.lineTo(-26,6);x.moveTo(26,-2);x.lineTo(26,6);x.stroke();x.restore()}
function pointer(x,X,Y){x.save();x.translate(X,Y);x.beginPath();x.moveTo(0,0);x.lineTo(0,38);x.lineTo(10,29);x.lineTo(18,45);x.lineTo(26,41);x.lineTo(18,26);x.lineTo(31,26);x.closePath();x.fillStyle='#FFF6E6';x.strokeStyle='#120A1C';x.lineWidth=4;x.lineJoin='round';x.fill();x.stroke();x.restore()}
const HX=960,HY=912;
function bubble(x,cx,cy,lines,size,tx,ty,u=1){if(u<=0)return;x.save();x.translate(cx,cy);const sc=bo(u);x.scale(sc,sc);x.globalAlpha*=Math.min(1,u*3);x.translate(-cx,-cy);
 x.font=`900 ${size}px Arial`;let w=0;for(const l of lines)w=Math.max(w,x.measureText(l).width);w+=size*1.6;const h=lines.length*size*1.25+size*.9;
 x.fillStyle='#F8E9CC';x.strokeStyle='#120A1C';x.lineWidth=5;x.lineJoin='round';const bx=clamp(tx,cx-w/2+36,cx+w/2-36);
 x.beginPath();x.moveTo(bx-18,cy+h/2-3);x.lineTo(tx,ty);x.lineTo(bx+18,cy+h/2-3);x.closePath();x.fill();x.stroke();
 x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,size*.6);x.fill();x.stroke();
 x.fillStyle='#F8E9CC';x.fillRect(bx-14,cy+h/2-8,28,10);
 lines.forEach((l,i)=>txt(x,l,cx,cy-h/2+size*.45+size*.625+i*size*1.25,size,'#1B1430','center','900'));x.restore()}
function sticky(x,X,Y,w,s,col,rot,a=1,tc='#1B1430'){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.rotate(rot);x.fillStyle='rgba(0,0,0,.25)';x.fillRect(-w/2+6,-w/2+8,w,w);x.fillStyle=col;x.fillRect(-w/2,-w/2,w,w);txt(x,s,0,2,w*.24,tc,'center','900');x.restore()}

// ---------- the doc, the chat strip, the whiteboard ----------
/* n lines written so far (float); cursors: teal writes at the end of the newest line, amber sits on line ed (edits); full: panel has this many line slots */
function docPanel(x,R,t,n,o={}){const a=o.a===undefined?1:o.a;if(a<=0)return;x.save();const cx=R.l+R.w/2,cy=R.t+R.h/2,sc=o.pop===undefined?1:.92+.08*o.pop;x.globalAlpha*=a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,R.l,R.t,R.w,R.h,22,'#F4EBDD','#8A5A14',5);x.fillStyle='#E4D8C0';x.beginPath();x.roundRect(R.l,R.t,R.w,74,[22,22,0,0]);x.fill();
 imp(x,'EVENT PLAN',R.l+28,R.t+38,50,'#2A1F42','left');
 const step=o.step||40,slots=Math.floor((R.h-120)/step);
 for(let i=0;i<Math.min(slots,Math.ceil(n));i++){const y=R.t+108+i*step,f=clamp(n-i),W0=(R.w-110)*(.5+.48*hash(i,3)),ed=o.ed===i&&o.edA>0,Wi=ed?W0*lerp(1,.62,o.edA):W0;
  x.fillStyle='#2DB2AE';x.fillRect(R.l+30,y,12,12);
  if(ed){x.fillStyle=`rgba(255,198,110,${.55*o.edA})`;x.fillRect(R.l+50,y-8,Wi+14,28)}
  scribLines(x,R.l+58,R.l+58+Wi*f,y+1,i+5,9,ed?'#8A5A14':'#8A7AA8');
  if(i==Math.ceil(n)-1&&o.teal!==false&&f<1.001){const cxp=R.l+58+Wi*f+4;x.fillStyle='#2DB2AE';x.fillRect(cxp,y-8,5,28);x.fillRect(cxp,y-8,34,5)}}
 if(o.ed!==undefined&&o.edA>0&&o.ed<slots){const y=R.t+108+o.ed*step,cxp=R.l+58+(R.w-110)*(.5+.48*hash(o.ed,3))*lerp(1,.62,o.edA)+22;x.fillStyle='#E49A1C';x.fillRect(cxp,y-10,5,32);x.fillRect(cxp,y-10,34,5)}
 if(o.amber&&n>1.5){const y=R.t+108+(o.amberAt||0)*step,w=o.amberW||260;x.fillStyle='#E49A1C';x.globalAlpha*=.6+.4*Math.sin(t*6);x.fillRect(R.l+58+w,y-10,5,32);x.fillRect(R.l+58+w,y-10,34,5)}
 x.restore()}
function chatStrip(x,R,t,o){rr(x,R.l,R.t,R.w,R.h,22,'#1D1633','#3A2D5C',4);let y=R.t+40;
 if(o.joined>0){txt(x,'Claude joined',R.l+R.w/2,y,28,'#9FD9D6','center','700',o.joined)}y+=66;
 if(o.ask>0){x.save();x.globalAlpha=o.ask;const w=txt_w(x,'OK TO LOOK THIS UP?',28)+44;rr(x,R.l+18,y-30,w,60,26,'#2DB2AE');txt(x,'OK TO LOOK THIS UP?',R.l+40,y+1,28,'#0B3A40','left','900');x.restore()}y+=76;
 if(o.yes>0){x.save();x.globalAlpha=o.yes;const w=150;rr(x,R.l+R.w-18-w,y-30,w,60,26,'#F8E9CC');txt(x,'YES',R.l+R.w-18-w+26,y+1,28,'#1B1430','left','900');check(x,R.l+R.w-18-w+110,y+1,20);x.restore()}y+=80;
 if(o.ans>0){const v=o.ans;x.save();x.globalAlpha=Math.min(1,v*3);rr(x,R.l+18,y-26,R.w-36,272,20,'#2A1F42','#2DB2AE',4);
  txt(x,"LAST YEAR'S COST",R.l+42,y+10,28,'#F8E9CC','left','900');
  txt(x,'LAST YEAR',R.l+42,y+74,22,'#C9B8E0','left','800');rr(x,R.l+42,y+92,(R.w-84)*.78*ease(seg(v,.3,.8)),36,10,'#FFC66E');
  txt(x,'THIS PLAN',R.l+42,y+156,22,'#C9B8E0','left','800');rr(x,R.l+42,y+174,(R.w-84)*.6*ease(seg(v,.5,1)),36,10,'#2DB2AE');x.restore()}}
function boxN(x,l,t,w,h,col,a=1){x.save();x.globalAlpha*=a;rr(x,l,t,w,h,16,'#FFFFFF',col,6);scribLines(x,l+22,l+w-22,t+h*.35,Math.round(l),8,'#8A7AA8');scribLines(x,l+22,l+w-22,t+h*.6,Math.round(l)+9,8,'#B8AACC');x.restore()}
function whiteboard(x,R,t,k){rr(x,R.l,R.t,R.w,R.h,22,'#EFE6D2','#8A5A14',5);const bw=190,bh=150,gx=(R.w-3*bw)/4,y=R.t+R.h/2-bh/2;
 for(let i=0;i<3;i++){const a=bo(seg(k,i*.34,i*.34+.3)),bx=R.l+gx+i*(bw+gx);if(a>0){x.save();x.translate(bx+bw/2,y+bh/2);x.scale(a,a);x.translate(-bx-bw/2,-y-bh/2);boxN(x,bx,y,bw,bh,i==1?'#2DB2AE':'#6E5D8E');x.restore()}
  if(i<2){const p=seg(k,i*.34+.25,i*.34+.5),ax=bx+bw+10,bx2=bx+bw+gx-10;if(p>0){x.save();x.strokeStyle='#2A1F42';x.fillStyle='#2A1F42';x.lineWidth=7;x.lineCap='round';x.beginPath();x.moveTo(ax,y+bh/2);x.lineTo(lerp(ax,bx2-6,p),y+bh/2);x.stroke();x.beginPath();x.moveTo(bx2,y+bh/2);x.lineTo(bx2-20,y+bh/2-14);x.lineTo(bx2-20,y+bh/2+14);x.globalAlpha=p;x.fill();x.restore()}}}}

// ---------- the call, one function for every call shot ----------
function bgDark(x,warm=.1){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(1100,560,40,1100,560,900);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function pressOf(t,t0){return seg(t,t0,t0+.12)} /* hang-up pressed from t0 on */
function drawCall(t,sh,cam){const x=layer('board',cam);bgDark(x,sh==29?.4:.1);const u=t-ST(sh);
 winFrame(x,sh==1);
 let hang=0,ptr=null,dark=0,rcs=ROW3,speak=[0,0,0,0],spk=[1,1,1,0];
 // ---- per shot state ----
 if(sh==1){const a=fin(t,ST(1)+.2,.55);ptr=[lerp(1500,HX+14,a),lerp(760,HY+10,a)];hang=pressOf(t,ST(1)+.85);dark=ease(seg(t,ST(1)+1.0,ST(1)+1.35));spk=[1,1,0,0];ptr=dark>0?null:ptr}
 if(sh==7||sh==8){spk=sh==8?[1,1,1,0]:[1,0,1,0]}
 if(sh==9){spk=[0,1,0,0]}
 if(sh==10){spk=[0,0,1,0]}
 if(sh==11){const a=fin(t,ST(11)+.02,.2);ptr=[lerp(1450,HX+14,a),lerp(760,HY+10,a)];hang=pressOf(t,ST(11)+.3);dark=ease(seg(t,ST(11)+.4,ST(11)+.7));ptr=dark>0?null:ptr}
 const rects4=(sh==13||sh==3||sh==16||sh==19);
 if(rects4)rcs=ROW4;
 if(sh==4||sh==5||sh==17||sh==18||sh==29)rcs=GB;
 if(sh==15||sh==20||sh==22)rcs=GC;
 if(sh==23)rcs=STR;
 // ---- tiles ----
 const n=rcs.length>=4||rects4||sh==3||sh==13?4:3;
 const claudePop=sh==3?bo(seg(t,ST(3)+.3,ST(3)+.65)):sh==13?bo(seg(t,ST(13)+.5,ST(13)+.85)):1;
 const glow=sh==15?.6+.4*Math.sin(t*5):0,csmile=sh>=16?30:22;
 for(let k=0;k<3;k++)tile(x,rcs[k],k,t,{speak:(sh==16&&k==0)||(sh==19&&k==1)||(sh==20&&k==1)||(sh>=17&&sh<=18&&k==(sh==18?1:0))||spk[k]&&sh!=15&&sh!=3&&sh!=4&&sh!=5&&sh!=13&&sh<16,dark,shrug:(sh==10&&k==2)?fin(t,ST(10)+.2,.3):0});
 if(rects4&&claudePop<1)emptySlot(x,rcs[3],1-claudePop);
 if(sh>=3&&sh!=7&&sh!=8&&sh!=9&&sh!=10&&sh!=11&&sh!=12&&sh!=14)tile(x,rcs[3],3,t,{pop:claudePop,glow,speak:sh==21||sh==22||sh==20,smile:csmile});
 // ---- panels ----
 if(sh==4){const o=fin(t,ST(4)+.05,.7),nn=seg(t,ST(4)+.2,ST(5)-.1)*4.6;docPanel(x,DOCB,t,nn,{a:o,pop:o,ed:1,edA:fin(t,ST(4)+.75,.2)})}
 if(sh==5){docPanel(x,DOCB,t,4.6+seg(t,ST(5),ST(6))*3,{ed:1,edA:1,amber:true,amberAt:5,amberW:200})}
 if(sh==17){const o=fin(t,ST(17)+.02,.7);docPanel(x,DOCB,t,seg(t,ST(17)+.15,ST(18)-.05)*5.4,{a:o,pop:o})}
 if(sh==18){docPanel(x,DOCB,t,5.4+seg(t,ST(18)+.2,ST(19))*1.4,{ed:2,edA:fin(t,ST(18)+.4,.3)})}
 if(sh==29){docPanel(x,DOCB,t,8+seg(t,ST(29),ST(30))*2.6,{ed:2,edA:1,amber:true,amberAt:6,amberW:300,teal:false})}
 if(sh==15||sh==20||sh==22){const j=sh==15?fin(t,ST(15)+.35,.3):1,ask=sh==20?fin(t,ST(20)+.05,.2):sh==22?1:0,yes=sh==20?fin(t,ST(20)+.5,.2):sh==22?1:0,ans=sh==22?seg(t,ST(22)+.25,ST(23)-.1):0;chatStrip(x,CHAT,t,{joined:j,ask,yes,ans})}
 if(sh==23){docPanel(x,DOCS,t,6.5+Math.sin(t*2)*.0,{ed:2,edA:1,amber:true,amberAt:4,amberW:240,step:42,teal:false});const k=seg(t,ST(23)+.15,ST(24)-.1);whiteboard(x,WBS,t,k)}
 // ---- bubbles and notes ----
 if(sh==8)sticky(x,1700,300,130,'EVENT','#FFC66E',.08,fin(t,ST(8)+.2,.2));
 if(sh==9)bubble(x,960,300,["LAST YEAR'S COST?"],40,960,370,seg(t,ST(9)+.08,ST(9)+.35));
 if(sh==10){bubble(x,1520,300,["I'LL CHECK LATER"],38,1520,375,seg(t,ST(10)+.08,ST(10)+.35));sticky(x,1700,820,140,'LATER','#9FA0AE',.07,seg(t,ST(10)+.5,ST(10)+.75))}
 if(sh==16)bubble(x,520,292,['CLAUDE, START A','DOC FOR THIS PLAN'],34,350,400,seg(t,ST(16)+.1,ST(16)+.4));
 if(sh==19)bubble(x,760,300,["LAST YEAR'S COST?"],40,760,380,seg(t,ST(19)+.08,ST(19)+.35));
 // ---- the hang-up button, the pointer ----
 if(sh!=14)hangBtn(x,HX,HY,hang);
 if(sh==5){const a=fin(t,ST(5)+.1,.4),px=lerp(1300,HX+70,a),py=lerp(760,HY+4,a);pointer(x,px,py)}
 if(ptr)pointer(x,ptr[0],ptr[1]);
 comp([['board',0]])}

// ---------- the desk after the call (shots 2 and 12) ----------
function clock(x,X,Y,r,ang){x.save();x.translate(X,Y);x.fillStyle='#120A1C';x.beginPath();x.arc(0,0,r+10,0,7);x.fill();x.fillStyle='#FFF6E6';x.beginPath();x.arc(0,0,r,0,7);x.fill();
 x.strokeStyle='#8A5A14';x.lineWidth=5;for(let i=0;i<12;i++){const a=i*Math.PI/6;x.beginPath();x.moveTo(Math.cos(a)*(r-10),Math.sin(a)*(r-10));x.lineTo(Math.cos(a)*(r-24),Math.sin(a)*(r-24));x.stroke()}
 x.lineCap='round';x.strokeStyle='#120A1C';x.lineWidth=9;x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(ang/12)*r*.5,-Math.cos(ang/12)*r*.5);x.stroke();
 x.strokeStyle='#E4493F';x.lineWidth=6;x.beginPath();x.moveTo(0,0);x.lineTo(Math.sin(ang)*(r-14),-Math.cos(ang)*(r-14));x.stroke();x.restore()}
function pageSheet(x,X,Y,w,h,rot,title,n,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.rotate(rot);x.fillStyle='rgba(0,0,0,.25)';x.fillRect(-w/2+8,-h/2+10,w,h);x.fillStyle='#F4EBDD';x.fillRect(-w/2,-h/2,w,h);imp(x,title,-w/2+24,-h/2+44,52,'#2A1F42','left');
 const lines=Math.floor((h-110)/36);for(let i=0;i<lines;i++){const f=clamp(n-i);if(f>0)scribLines(x,-w/2+26,-w/2+26+(w-52)*f,-h/2+100+i*36,i+Math.round(X),9,'#8A7AA8')}x.restore()}
function drawDesk(t,sh,cam){const x=layer('board',cam);const u=t-ST(sh);
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#2A1C46');g.addColorStop(1,'#4C2D63');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(900,520,60,900,520,1200);g.addColorStop(0,'rgba(255,196,130,.3)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='#3B2352';x.fillRect(-900,700,W+1800,12);
 clock(x,300,380,104,sh==2?t*1.4:(t-ST(12))*5+1);
 if(sh==12)sticky(x,520,330,140,'LATER','#9FA0AE',-.06,fin(t,ST(12)+.05,.2));
 x.fillStyle='#B0705A';x.fillRect(-900,792,W+1800,30);
 const p={x:760,y:520,s:1.15,face:1,breath:t*2.1,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.5,lookY:.3,brow:.1,sad:.3,mouth:-.2,mouthW:22,headY:3};
 const ty=sh==2?2.5:7;
 p.hands.l=[-82+Math.sin(t*15)*9,206-Math.abs(Math.sin(t*19))*14];p.hands.r=[82+Math.sin(t*13+1)*9,206-Math.abs(Math.sin(t*17+2))*14];p.showH.l=p.showH.r=true;
 actor(x,'hero',HERO,p,cam);headset(x,p);
 x.fillStyle='#1B1430';x.beginPath();x.roundRect(620,800,290,22,8);x.fill();
 x.fillStyle='#7A4038';x.fillRect(-900,822,W+1800,400);x.fillStyle='rgba(255,226,190,.35)';x.fillRect(-900,822,W+1800,5);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,880,W+1800,10);
 if(sh==2)pageSheet(x,1370,520,420,520,.04,'PLAN',seg(t,ST(2)+.1,ST(3)-.05)*8);
 if(sh==12){const a=seg(t,ST(12)+.15,ST(12)+1.5),b=seg(t,ST(12)+1.3,ST(13)-.1);pageSheet(x,1260,540,400,500,-.06,'NOTES',a*9,1);pageSheet(x,1470,500,400,500,.07,'PLAN',b*9,fin(t,ST(12)+1.25,.2))}
 comp([['board',0]])}

// ---------- the mascot big (shots 6 and 30) ----------
function drawMascot(t,sh,cam){const x=layer('board',cam);bgDark(x,.3);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.9,mouthW:30,tilt:.03};
 if(sh==6){p.mouth=.7+Math.sin(t*8)*.05}
 if(sh==30){p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;p.mouth=.95;p.tilt=.05}
 actor(x,'hero',HERO,p,cam);headset(x,p);
 if(sh==30){const T0=ST(30)+.1,c=bo(seg(t,T0,T0+.35)),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,560);const sc=lerp(.6,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=Math.min(1,c*3);
  x.fillStyle='#120A1C';x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,'#E4493F');x.fillStyle='#F8E9CC';x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,'#F8E9CC','center','800');x.restore();
  txt(x,'NEXT IN 60 SECONDS',1430,700,50,'#FFC66E','center','900',fin(t,ST(30)+.5,.35))}
 comp([['board',0]])}

// ---------- flat places: K (cards), H (Claude's head big), B (board), L (laptop), P (payoff) ----------
function drawK(t,sh,cam){const x=layer('board',cam);bgDark(x,.16);
 if(sh==27){const c=bo(seg(t,ST(27)+.3,ST(27)+.6));
  pillCard(x,960,420,880,240,c);imp(x,'BETA',960,420,200,'#FFC66E');if(c>.97)sweep(x,960,420,880,240,t);
  for(const [s,X,d] of [['TEAM',640,.9],['ENTERPRISE',1280,1.15]]){const v=bo(seg(t,ST(27)+d,ST(27)+d+.3));if(v>0){x.save();x.translate(X,700);x.scale(v,v);x.globalAlpha=Math.min(1,v*3);pill(x,0,0,s=='TEAM'?340:560,120,'#2DB2AE');x.restore();imp(x,s,X,704,76*v,'#120A1C')}}}
 if(sh==28){const c=bo(seg(t,ST(28)+.1,ST(28)+.45));pillCard(x,960,540,1760,260,c);if(c>0){x.save();x.font='96px Impact, "Arial Black", sans-serif';const wa=x.measureText('GOOGLE MEET ONLY ').width,wb=x.measureText('· FOR NOW').width,L0=960-(wa+wb)/2;x.restore();x.save();x.globalAlpha=Math.min(1,c*3);imp(x,'GOOGLE MEET ONLY ',L0,545,96,'#F8E9CC','left');imp(x,'· FOR NOW',L0+wa,545,96,'#FFC66E','left');x.restore()}}
 if(sh==14){const c1=.8+.2*ease(seg(t,ST(14)+.05,ST(14)+.9)),c2=.8+.2*ease(seg(t,ST(14)+.75,ST(14)+1.6)),c3=.8+.2*ease(seg(t,ST(14)+1.35,ST(14)+2.2)),f1=seg(t,ST(14)+.05,ST(14)+.9),f2=seg(t,ST(14)+.75,ST(14)+1.6),f3=seg(t,ST(14)+1.35,ST(14)+2.2);
  const pc=(c,f,y,w,h,col,s,sz,tc)=>{if(f<=0)return;const al=ease(f);x.save();x.translate(960,y);x.scale(c,c);x.globalAlpha=al;rr(x,-w/2,-h/2,w,h,40,'#2A1F42',col,8);x.restore();x.save();x.globalAlpha=al;imp(x,s,960,y+4,sz*c,tc);x.restore()};
  pc(c1,f1,330,1640,200,'#FFC66E','CLAUDE MEETINGS',140,'#FFC66E');pc(c2,f2,560,420,150,'#2DB2AE','BETA',110,'#2DB2AE');pc(c3,f3,790,1640,160,'#F8E9CC','ROLLING OUT SINCE NOV 12, 2026',80,'#F8E9CC')}
 comp([['board',0]])}
function sweep(x,X,Y,w,h,t){const q=((t*.8)%1.6)/1.6*1.6-.3;x.save();x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,48);x.clip();x.globalAlpha=.16;x.fillStyle='#FFF6E6';x.beginPath();const a=X-w/2+q*(w+200)-100;x.moveTo(a,Y-h/2);x.lineTo(a+90,Y-h/2);x.lineTo(a+30,Y+h/2);x.lineTo(a-60,Y+h/2);x.closePath();x.fill();x.restore()}
function pillCard(x,X,Y,w,h,c){if(c<=0)return;x.save();x.translate(X,Y);x.scale(c,c);x.globalAlpha=Math.min(1,c*3);rr(x,-w/2,-h/2,w,h,48,'#2A1F42','#2DB2AE',8);x.restore()}
function drawH(t,cam){const x=layer('board',cam);bgDark(x,.12);const u=t-ST(21);
 let g=x.createRadialGradient(560,520,40,560,520,520);g.addColorStop(0,'rgba(45,178,174,.4)');g.addColorStop(1,'rgba(45,178,174,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(560,520);x.scale(3.2,3.2);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:26});x.restore();
 pill(x,560,845,360,64,'rgba(18,10,28,.8)');txt(x,'CLAUDE',560,847,40,'#BFF2EE','center','900');
 const cards=[[1220,300],[1540,300],[1380,610]].map(([X,Y])=>({X,Y}));
 const cs=[[1080,330],[1380,330],[1680,330]];
 for(let i=0;i<3;i++){const X=cs[i][0],Y=cs[i][1],v=bo(seg(t,ST(21)+.05+i*.12,ST(21)+.35+i*.12));if(v<=0)continue;x.save();x.translate(X,Y+110);x.scale(v,v);x.globalAlpha=Math.min(1,v*3);rr(x,-135,-190,270,380,22,'#2A1F42','#8CA0BF',5);
  x.fillStyle=i==1?'#2DB2AE':'#6E5D8E';x.beginPath();x.roundRect(-95,-150,70,70,12);x.fill();for(let k=0;k<5;k++)scribLines(x,-95,95,-40+k*40,i*7+k,10,'#8A7AA8');x.restore()}
 const m=ease(seg(t,ST(21)+.15,ST(22)-.05)),mx=lerp(1080,1680,m),my=lerp(420,430,m)+Math.sin(m*9)*16;
 x.save();x.strokeStyle='#8A5A14';x.lineWidth=16;x.lineCap='round';x.beginPath();x.moveTo(mx+120,my+190);x.lineTo(mx+30,my+30);x.stroke();
 x.fillStyle='rgba(191,242,238,.28)';x.beginPath();x.arc(mx,my,78,0,7);x.fill();x.strokeStyle='#FFC66E';x.lineWidth=14;x.stroke();x.strokeStyle='#8A5A14';x.lineWidth=3;x.beginPath();x.arc(mx,my,86,0,7);x.stroke();
 x.fillStyle='rgba(255,255,255,.35)';x.beginPath();x.ellipse(mx-27,my-32,22,10,-.6,0,7);x.fill();x.restore();
 comp([['board',0]])}

// ---------- the board: BEFORE (left) and NOW (right), side by side ----------
function miniCall(x,X,Y,s,claude,dim){x.save();x.translate(X,Y);x.scale(s,s);x.globalAlpha*=dim===undefined?1:dim;rr(x,-120,-80,240,160,14,'#17122A','#6E5D8E',5);
 const xs=claude?[-84,-28,28,84]:[-70,0,70],w=claude?46:60;for(let i=0;i<xs.length;i++){const k=i==3?3:i;x.fillStyle=(claude&&i==3)?'#2DB2AE':['#5A4690','#3F5C86','#7A4F7E'][i%3];x.beginPath();x.roundRect(xs[i]-w/2,-40,w,90,8);x.fill()}x.restore()}
function chip(x,X,Y,w,h,s,col,lit,sz=34,tc='#F8E9CC',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;rr(x,X-w/2,Y-h/2,w,h,18,lit>0?'rgba(45,178,174,.28)':'#2A1F42',lit>0?'#2DB2AE':col,lit>0?7:4);
 if(lit>0){x.fillStyle='#2DB2AE';x.beginPath();x.arc(X-w/2+34,Y,11,0,7);x.fill()}txt(x,s,X+(lit>0?16:0),Y+2,sz,tc,'center','900');x.restore()}
function bArrow(x,a,b,Y,col,p){if(p<=0)return;x.save();x.globalAlpha*=p;x.strokeStyle=col;x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(a,Y);x.lineTo(b-8,Y);x.stroke();x.fillStyle=col;x.beginPath();x.moveTo(b,Y);x.lineTo(b-22,Y-14);x.lineTo(b-22,Y+14);x.fill();x.restore()}
function drawBoard(t,cam){const x=layer('board',cam);bgDark(x);const u=t-ST(24);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=140;y<960;y+=28)x.fillRect(958,y,4,14);
 const I=fin(t,ST(24)+.05,.25);
 pill(x,195,200,176,54,'#FFC66E',I);txt(x,'BEFORE',195,202,34,'#1B1430','center','900',I);
 pill(x,1020,200,120,54,'#2DB2AE',I);txt(x,'NOW',1020,202,34,'#1B1430','center','900',I);txt(x,'Claude Meetings',1100,204,38,'#FFC66E','left','800',I);
 // left: call -> hang up -> you write
 const a1=fin(t,ST(24)+.12,.25),a2=fin(t,ST(24)+.3,.25),a3=fin(t,ST(24)+.5,.25),a4=fin(t,ST(24)+.65,.25);
 x.save();x.globalAlpha=a1;miniCall(x,250,390,1.15,false);txt(x,'CALL',250,545,34,'#F8E9CC','center','900');x.restore();
 bArrow(x,400,520,390,'#C9B8E0',a2);
 x.save();x.globalAlpha=a2;x.translate(670,390);hangBtn(x,0,0,0);x.restore();txt(x,'HANG UP',670,545,34,'#F8E9CC','center','900',a2);
 chip(x,490,690,800,110,'YOU WRITE NOTES + PLAN','#FFC66E',0,40,'#F8E9CC',a3);chip(x,490,830,800,100,'LOOKUPS LATER','#6E5D8E',0,38,'#C9B8E0',a4);
 // right: the call with the Claude tile; during the call: doc, whiteboard, notes; after: the meeting page
 const b1=fin(t,ST(24)+.35,.25);x.save();x.globalAlpha=b1;miniCall(x,1130,430,1.15,true);txt(x,'CALL',1130,585,34,'#F8E9CC','center','900');x.restore();
 const pulse=.5+.5*Math.sin(t*5);
 txt(x,'DURING THE CALL',1560,305,34,'#2DB2AE','center','900',fin(t,ST(24)+.5,.25));
 chip(x,1560,380,520,84,'DOC','#2DB2AE',fin(t,ST(24)+.65,.2),38,'#F8E9CC',fin(t,ST(24)+.55,.2));
 chip(x,1560,480,520,84,'WHITEBOARD','#2DB2AE',fin(t,ST(24)+.9,.2),38,'#F8E9CC',fin(t,ST(24)+.8,.2));
 chip(x,1560,580,520,84,'NOTES','#2DB2AE',fin(t,ST(24)+1.05,.2),38,'#F8E9CC',fin(t,ST(24)+.95,.2));
 txt(x,'AFTER: MEETING PAGE',1560,722,34,'#FFC66E','center','900',fin(t,ST(24)+1.3,.25));
 chip(x,1560,810,520,96,'ACTION ITEMS','#FFC66E',0,40,'#F8E9CC',fin(t,ST(24)+1.45,.25));
 comp([['board',0]])}
function drawL(t,cam){const x=layer('board',cam);bgDark(x);const u=t-ST(25);
 x.fillStyle='#7A4038';x.fillRect(-100,800,W+200,400);x.fillStyle='#B0705A';x.fillRect(-100,790,W+200,26);
 rr(x,360,160,1200,600,26,'#1B1430','#8CA0BF',8);let g=x.createLinearGradient(0,180,0,740);g.addColorStop(0,'#1F4C58');g.addColorStop(1,'#16243C');x.save();x.beginPath();x.roundRect(388,188,1144,544,10);x.clip();x.fillStyle=g;x.fillRect(388,188,1144,544);
 imp(x,'MEETING PAGE',960,262,84,'#F8E9CC');
 const cards=[['NOTES',650,430],['ACTION ITEMS',1270,430],['PLAN',650,610],['WHITEBOARD',1270,610]];
 for(let i=0;i<4;i++){const [s,X,Y]=cards[i],v=ease(seg(t,ST(25)+.35+i*.4,ST(25)+.8+i*.4));if(v<=0)continue;x.save();x.globalAlpha=v;x.translate((1-v)*(X<960?-260:260),0);rr(x,X-240,Y-65,480,130,18,'#2A1F42',i==1?'#FFC66E':'#2DB2AE',6);txt(x,s,X,Y+2,48,'#F8E9CC','center','900');x.restore()}
 x.restore();x.fillStyle='#3A3350';x.beginPath();x.roundRect(260,760,1400,50,[0,0,26,26]);x.fill();
 comp([['board',0]])}
function drawP(t,cam){const x=layer('board',cam);bgDark(x);const u=t-ST(26);
 x.fillStyle='rgba(201,184,224,.25)';for(let y=140;y<860;y+=28)x.fillRect(958,y,4,14);
 const I=fin(t,ST(26)+.05,.3);
 pill(x,195,200,176,54,'#FFC66E',I);txt(x,'BEFORE',195,202,34,'#1B1430','center','900',I);
 pill(x,1020,200,120,54,'#2DB2AE',I);txt(x,'NOW',1020,202,34,'#1B1430','center','900',I);
 const a=fin(t,ST(26)+.15,.3),b=fin(t,ST(26)+.5,.3);
 // left: you alone after the call, the clock running, the pages pile up
 x.save();x.globalAlpha=a;rr(x,90,270,780,540,30,'#2A1F42','#6E5D8E',5);x.save();x.beginPath();x.roundRect(90,270,780,540,30);x.clip();
 x.fillStyle='#4C2D63';x.fillRect(90,270,780,330);x.fillStyle='#B0705A';x.fillRect(90,690,780,20);x.fillStyle='#7A4038';x.fillRect(90,710,780,110);
 clock(x,230,400,70,t*5);
 const p={x:480,y:520,s:.8,face:1,breath:t*2.1,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.4,lookY:.3,mouth:-.2,sad:.3,mouthW:22};
 p.hands.l=[-82+Math.sin(t*15)*9,200-Math.abs(Math.sin(t*19))*14];p.hands.r=[82+Math.sin(t*13+1)*9,200-Math.abs(Math.sin(t*17+2))*14];p.showH.l=p.showH.r=true;
 drawPerson(x,HERO,p);headset(x,p);x.fillStyle='#7A4038';x.fillRect(90,700,780,120);
 pageSheet(x,730,520,200,250,.06,'PLAN',seg(t,ST(26)+.3,ST(27)-.2)*4,1);
 x.restore();x.restore();
 // right: the hang-up button beside the plan doc, full of lines, teammates' cursors still on it
 x.save();x.globalAlpha=b;rr(x,1050,270,780,540,30,'#2A1F42','#2DB2AE',6);
 docPanel(x,{l:1085,t:300,w:500,h:480},t,6.5+Math.sin(t*2)*.0,{ed:3,edA:1,amber:true,amberAt:1,amberW:170,step:38,teal:true});
 hangBtn(x,1700,420,0);x.restore();
 comp([['board',0]])}

// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size){const v=fin(t,a,.25)*(b?1-fin(t,b,.25):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(s).width+size*2.2;ctx.restore();pill(ctx,X,y,w,size*2.2,'rgba(27,20,48,.84)',v);txt(ctx,s,X,y+2,size,col,'center','800',v)}
function tag(){/* the brand's corner tag: the topic and the 60 s promise, on every frame, drawn after the fade-out too */
 {const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const tw=x.measureText('Claude Meetings').width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,'Claude Meetings',58,54,32,'#FFC66E','left','800');txt(x,' ·',58+tw,54,32,'#F8E9CC','left','800');pill(x,58+tw+dw+50,52,78,42,'#E4493F');txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}}
function tab(t,a,b,lab,col){const v=fin(t,a,.2)*(1-fin(t,b,.25));if(v<=0)return;const x=ctx;x.save();x.font='900 34px Arial';const w=x.measureText(lab).width+54;x.restore();pill(x,32+w/2,128,w,56,col,v);txt(x,lab,32+w/2,130,34,'#1B1430','center','900',v)}
function sticker(x){x.font='104px Impact, "Arial Black", sans-serif';const sw=x.measureText('IN 60 SECONDS').width+76;
 x.fillStyle='#120A1C';x.beginPath();x.roundRect(-sw/2-10,-76,sw+20,152,30);x.fill();x.fillStyle='#E4493F';x.beginPath();x.roundRect(-sw/2,-66,sw,132,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+38,6)}
// ---------- shot 0: the title card. The topic is on screen from frame 0, in the thumbnail's style (thumb.js); it is cut, not faded, at its end ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,620,60,W/2,620,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='CLAUDE MEETINGS';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle='#120A1C';x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,'#F8E9CC');put(TOPIC,W/2,Yt+sz*.2,sz,'#FFC66E');
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
function popCard(t,s,t0,X,Y,size,fo,rot=-.04,col='#FFC66E'){const u=bo(seg(t,t0,t0+.3));if(u<=0)return;ctx.save();ctx.globalAlpha=Math.min(1,u*3)*fo;ctx.translate(X,Y);ctx.rotate(rot);ctx.scale(u,u);imp(ctx,s,0,0,size,col);ctx.restore()}
const LX=1400,LY=915; /* where a label sits in a call shot: right of the hang-up button */
function overlay(t){ctx.setTransform(1,0,0,1,0,0);
 tab(t,ST(1)+.1,out(3),'BEFORE','#FFC66E');tab(t,ST(3)+.05,out(6),'NOW','#2DB2AE');tab(t,ST(8)+.05,out(13),'BEFORE','#FFC66E');tab(t,ST(13)+.05,out(24),'NOW','#2DB2AE');
 card(t,ST(5)+.3,out(6),LX,LY,'WRITTEN LIVE','#2DB2AE',46);
 if(inS(t,6,7)){const fo=1-fin(t,out(7),.25);popCard(t,'HOW?',ST(6)+.08,1430,360,230,fo)}
 card(t,ST(7)+.3,out(8),LX,LY,'ONE PLANNING CALL','#F8E9CC',46);
 card(t,ST(15)+.4,out(16),LX,LY,'VISIBLE PARTICIPANT','#2DB2AE',46);
 card(t,ST(18)+.3,out(19),LX,LY,'TEAMMATES EDIT LIVE','#FFC66E',46);
 card(t,ST(21)+.3,out(22),960,985,'WITH YOUR PERMISSION','#2DB2AE',46);
 card(t,ST(22)+.3,out(23),LX,LY,'IN THE CHAT','#F8E9CC',46);
 card(t,ST(23)+.3,out(24),LX,LY,'WHITEBOARD','#F8E9CC',46);
 card(t,ST(26)+.5,out(27),960,925,'BUILT DURING THE CALL','#FFC66E',52);
 card(t,ST(27)+.3,out(28),960,170,'THE CATCH','#FFC66E',50);
 /* the takeaway card: two lines, the plain statement, then the amber punchline */
 if(inS(t,29,30)){const fo=1-fin(t,out(30),.25),dm=fin(t,ST(29)+.15,.5);ctx.save();ctx.globalAlpha=.5*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,ST(29)+.1,.35)*fo;if(v>0){ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.9)';ctx.beginPath();ctx.roundRect(W/2-640,400,1280,230,40);ctx.fill();ctx.restore();
   txt(ctx,'Same call;',W/2,478,70,'#F8E9CC','center','800',v);txt(ctx,'the writing happens while you talk.',W/2,568,60,'#FFC66E','center','800',fin(t,ST(29)+.6,.35)*fo)}}}

// ---------- cameras, one per shot: a slow push on the flat board ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:30},()=>push()));CAM[27]=push(1,1.09);CAM[29]=push(1,1.1);
FILM={dur:60,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6; /* the epsilon keeps a cut frame on its side of the ST() frames */t_g=o;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='C')drawCall(o,s,cam);else if(pl=='S')drawDesk(o,s,cam);else if(pl=='M')drawMascot(o,s,cam);else if(pl=='K')drawK(o,s,cam);else if(pl=='H')drawH(o,cam);else if(pl=='B')drawBoard(o,cam);else if(pl=='L')drawL(o,cam);else drawP(o,cam);overlay(o)}
  const fo=seg(o,60-.45,60-.03);if(fo>0)fadeTo(ctx,fo);tag()}, /* the fade-out is ours so the corner tag stays drawn over it */
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, typing and writing scratches, clicks on the hang-up button, pops on cards and tiles ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
const WR=(a,b,dt)=>{for(let t=a;t<b;t+=dt)say(t,'pen')};
WR(ST(2)+.1,ST(3)-.15,.3);WR(ST(12)+.2,ST(13)-.3,.3);WR(ST(4)+.25,ST(5)-.1,.28);WR(ST(5)+.1,ST(6)-.1,.3);WR(ST(17)+.2,ST(18)-.1,.28);WR(ST(18)+.3,ST(19)-.2,.4);WR(ST(23)+.2,ST(24)-.2,.45);WR(ST(26)+.3,ST(27)-.3,.35);
for(const t of [ST(1)+.85,ST(11)+.3])say(t,'tock');
for(const t of [ST(3)+.3,ST(13)+.5,ST(15)+.35,ST(20)+.05,ST(20)+.5,ST(22)+.25,ST(8)+.2,ST(9)+.08,ST(10)+.08,ST(16)+.1,ST(19)+.08,ST(5)+.3,ST(7)+.3,ST(15)+.4,ST(18)+.3,ST(21)+.3,ST(22)+.3,ST(23)+.3,ST(26)+.5,ST(27)+.3,ST(28)+.35,ST(6)+.08,ST(29)+.1,ST(29)+.6,ST(30)+.1,ST(30)+.5,ST(10)+.5,ST(14)+.1,ST(14)+.7,ST(14)+1.4,ST(27)+.9,ST(27)+1.15,ST(28)+.1,ST(24)+.65,ST(24)+.9,ST(24)+1.05,ST(24)+1.45])say(t,'tick');
for(const t of [ST(23)+.15,ST(23)+.5,ST(23)+.85,ST(25)+.35,ST(25)+.75,ST(25)+1.15,ST(25)+1.55,ST(21)+.05,ST(4)+.05,ST(17)+.02])say(t,'slide');
say(ST(27)+.3,'stamp');say(ST(28)+.1,'stamp');
