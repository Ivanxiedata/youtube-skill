// Episode: Claude Fable 5.2 (and Mythos 5.2), told as a restaurant counter. You (the mascot, napkin bib) hand in 10 order tickets (our example).
// The AI models are robot chefs with screen heads; the checker is a teal gate with a small screen head. Vertical 1080x1920.
// BEFORE: the best chef (Mythos Preview) cooks only for a small group; your 10 tickets go to a weaker cook, the meter fills to 10 (amber).
// NOW: a checker gate reads each ticket; 9 pass to the full chef; the attack-code ticket is blocked and goes to an older Opus cook; the meter reads 1 (teal).
// 15 shots (beats.md "Shots", numbered 0-14). Voice laid in at VOICE_AT (audio_mix.py): film time = voice time + .5. Every time below is FILM seconds.
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random. Numbers drawn: 10, 9, 1, 55%, 5.1, 5.2, 2026 (APRIL 2026), 60.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',NEU='#8A7AA8',DARK='#1B1430',PANEL='#2A1F42';
function txt(x,s,X,Y,size,col,al='left',wt='900',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function tw(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
function withIn(x,cx,cy,a,fn,s0=.9){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
/* no alpha: a figure or multi-part prop comes in by scale (pop) or slide (L44) */
function pop(x,cx,cy,a,fn,s0=.7){if(a<=0)return;x.save();const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
function slide(x,a,dx,fn){if(a<=0)return;x.save();x.translate((1-a)*dx,0);fn();x.restore()}
function ring(x,l,t,w,h,col,a,lw=8){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.lineWidth=lw;x.beginPath();x.roundRect(l,t,w,h,24);x.stroke();x.restore()}
/* a label: dark pill with 1-2 lines, sized to fit maxW (never under min px), kept inside x 100-885 */
function fitSz(x,s,maxW,size,min=34){let z=size;while(z>min&&tw(x,s,z)>maxW)z-=2;return z}
function lab(x,lines,cx,cy,size,col,o={}){if(typeof lines=='string')lines=[lines];const maxW=o.maxW||740,min=o.min||34;const z=Math.min(...lines.map(s=>fitSz(x,s,maxW,size,min)));
 const w=Math.max(...lines.map(s=>tw(x,s,z)))+52,lh=z*1.25,h=lh*lines.length+22;let X=cx;if(!o.free){X=clamp(cx,100+w/2,885-w/2)}
 const a=o.a===undefined?1:o.a;withIn(x,X,cy,a,()=>{rr(x,X-w/2,cy-h/2,w,h,22,o.bg||'rgba(18,10,28,.9)',o.line||null,o.lw||4);lines.forEach((s,i)=>txt(x,s,X,cy-(lines.length-1)*lh/2+i*lh+2,z,Array.isArray(col)?col[i]:col,'center'))},o.s0===undefined?.9:o.s0);return {w,h,X,z}}

/* THE CLOCK: cut times of the 15 shots (film seconds), from vo_lines.json + .5 s; shot 0 ends on the measured pause after "two:" (1.61-1.78 s in vo.wav), shot 2 on the pause after "model," (3.86-4.03), shot 5 on the pause before "You got" (17.72-17.90) (L36). */
const TS=[0,2.195,4.45,8.457,11.504,18.31,19.751,22.935,24.934,26.85,32.922,38.93,41.271,45.564,51.875];
const DUR=56.4;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,out=i=>ST(i)-.5;

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const CLD={skin:'#4F6468',cloth:'#4A5E62',hood:'#3A4C50',hand:'#9DB4B6',face:'#16243C',leg:'#3A4C50',shoe:'#17141F',finger:'#16243C'};
const CLO={skin:'#8C7B5A',cloth:'#7A6A4E',hood:'#5E5038',hand:'#D9C48F',face:'#16243C',leg:'#5E5038',shoe:'#17141F',finger:'#16243C'};
const HP_T={frame:'#187E86',ear:'#0E4A50',s1:'#46D0CB',s2:TEAL,face:'#0B3A40'};
const HP_D={frame:'#4F6468',ear:'#36494C',s1:'#8FB0B2',s2:'#6E9194',face:'#2A3A3C'};
const HP_O={frame:'#8C7B5A',ear:'#5E5038',s1:'#E8D6A4',s2:'#CDB57C',face:'#4A3E26'};
const TM1={skin:'#17141F',cloth:'#4C86C8',hood:'#2F5E94',hand:'#17141F',face:'#FFFFFF',leg:'#2C2A49',shoe:'#17141F',finger:'#5b5468'};
const TM2={skin:'#E9C6A0',cloth:'#7DBF6A',hood:'#4F8F47',hand:'#E9C6A0',face:'#1c1a2b',leg:'#2C2A49',shoe:'#17141F',finger:'#1c1a2b',hair:'#3A2230'};
const TM3={skin:'#B97B50',cloth:'#B58AD8',hood:'#7A56A0',hand:'#B97B50',face:'#1c1a2b',leg:'#2C2A49',shoe:'#17141F',finger:'#1c1a2b'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: a white napkin bib on the chest, drawn after the figure in body space */
function bib(x,p){x.save();bodyT(x,p);x.lineJoin='round';x.lineCap='round';
 x.strokeStyle='#E8DCC4';x.lineWidth=7;x.beginPath();x.moveTo(-38,-4);x.lineTo(-52,-26);x.moveTo(38,-4);x.lineTo(52,-26);x.stroke();
 x.fillStyle='#FFFFFF';x.strokeStyle=INKC;x.lineWidth=6;x.beginPath();x.moveTo(-44,-6);x.quadraticCurveTo(0,26,44,-6);x.lineTo(70,112);x.quadraticCurveTo(52,150,26,134);x.quadraticCurveTo(0,156,-26,134);x.quadraticCurveTo(-52,150,-70,112);x.closePath();x.fill();x.stroke();
 x.strokeStyle='#C9B8E0';x.lineWidth=5;x.beginPath();x.moveTo(-42,56);x.lineTo(42,56);x.moveTo(-50,84);x.lineTo(50,84);x.stroke();x.restore()}
function mascot(x,t,cam,o){const p={x:o.x,y:o.y,s:o.s||.72,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.4:o.look,lookY:o.lookY===undefined?.1:o.lookY,brow:o.brow===undefined?.2:o.brow,mouth:o.mouth===undefined?.6:o.mouth,mouthW:28,tilt:o.tilt||0};
 if(o.rep!==false)actor(x,'hero',HERO,p,cam);else drawPerson(x,HERO,p);bib(x,p);return p}
function head(x,hp,o){ /* head-local screen head */
 x.fillStyle=hp.ear;x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,hp.frame,hp.ear,5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,hp.s1);g.addColorStop(1,hp.s2);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle=hp.face;for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle=hp.face;x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
function hat(x,kind){x.save();x.lineJoin='round';x.fillStyle='#FFFFFF';x.strokeStyle=INKC;x.lineWidth=6;
 if(kind=='tall'){x.beginPath();x.moveTo(-84,-80);x.bezierCurveTo(-140,-130,-130,-250,-60,-246);x.bezierCurveTo(-40,-320,50,-320,62,-246);x.bezierCurveTo(130,-250,144,-130,84,-80);x.closePath();x.fill();x.stroke();rr(x,-88,-112,176,36,10,'#FFFFFF',INKC,6)}
 else if(kind=='mid'){x.beginPath();x.moveTo(-80,-80);x.bezierCurveTo(-110,-120,-90,-190,-30,-186);x.bezierCurveTo(0,-220,50,-210,56,-186);x.bezierCurveTo(100,-190,116,-120,80,-80);x.closePath();x.fill();x.stroke();rr(x,-84,-108,168,32,10,'#FFFFFF',INKC,6)}
 else if(kind=='short'){x.beginPath();x.ellipse(0,-96,78,40,0,Math.PI,0);x.closePath();x.fill();x.stroke();rr(x,-84,-100,168,28,10,'#FFFFFF',INKC,6)}
 x.restore()}
function robot(x,cx,bottom,s,t,o={}){const body=o.body||CLB,hp=o.hp||HP_T,p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1+(o.ph||0),noLegs:true,noFace:true,hands:o.hands||{},showH:{}};
 drawPerson(x,body,p);x.save();headT(x,p);head(x,hp,{blink:blinkAt(t+.7+(o.ph||0),BL),smile:o.smile});if(o.hat)hat(x,o.hat);x.restore();return p}
/* the checker: a teal gate on the slab, a small screen head on top, a scan light. open = the bar swung up; col overrides (grey = the old 5.1 gate) */
function gate(x,t,cx,base,o={}){const col=o.col||TEAL,dk=o.dk||'#0E4A50',hp=o.hp||HP_T,h=o.h||210,gw=o.gw||62;x.save();x.lineJoin='round';
 const top=base-h;
 for(const sx of [-1,1])rr(x,cx+sx*gw-14,top,28,h,8,col,INKC,5);
 if(o.open){x.save();x.translate(cx-gw,top+16);x.rotate(-1.15);rr(x,0,-12,gw*2,24,8,col,INKC,5);x.restore()}else rr(x,cx-gw-20,top-8,gw*2+40,30,10,col,INKC,5);
 if(o.scan>0){const a=o.scan*(.28+.1*Math.sin(t*14));x.fillStyle=`rgba(191,242,238,${a})`;x.beginPath();x.moveTo(cx-gw+14,top+24);x.lineTo(cx+gw-14,top+24);x.lineTo(cx+gw-14,base);x.lineTo(cx-gw+14,base);x.closePath();x.fill();
  x.fillStyle=`rgba(255,255,255,${o.scan*.8})`;x.fillRect(cx-gw+14,lerp(top+30,base-10,.5+.5*Math.sin(t*9)),gw*2-28,6)}
 x.save();x.translate(cx,top-52);x.scale(.3,.3);head(x,hp,{blink:blinkAt(t+1.1,BL),smile:o.open?4:22});x.restore();x.restore()}
function ticket(x,cx,cy,k,col,rot,o={}){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(k,k);const w=o.w||64,h=o.h||84;
 x.lineJoin='round';rr(x,-w/2,-h/2,w,h,8,col||'#FFFFFF',INKC,5);
 if(o.lines){const z=o.sz||30;o.lines.forEach((s,i)=>txt(x,s,0,(i-(o.lines.length-1)/2)*z*1.2+2,z,o.tc||INKC,'center'))}
 else{x.fillStyle='#B8AACB';for(let i=0;i<3;i++)x.fillRect(-w*.34,-h*.26+i*h*.24,w*(i==2?.36:.68),6)}
 x.restore()}

// ---------- the world ----------
const CT=900; /* slab top */
function bgRest(x,warm=.3,cx=620,cy=640){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(255,226,190,.07)';for(let i=0;i<7;i++)x.fillRect(-900,330+i*88,W+1800,4)}
function slab(x,from=-900,to=W+900){x.fillStyle='#B0705A';x.fillRect(from,CT,to-from,36);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(from,CT,to-from,5);x.fillStyle='#7A4038';x.fillRect(from,CT+36,to-from,110);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(from,CT+146,to-from,900)}
function arrowR(x,X0,X1,Y,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.fillStyle=col;x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(X0,Y);x.lineTo(X1-20,Y);x.stroke();x.beginPath();x.moveTo(X1,Y);x.lineTo(X1-30,Y-22);x.lineTo(X1-30,Y+22);x.closePath();x.fill();x.restore()}
function dashRect(x,l,t,w,h,col,a=1,lw=5){x.save();x.globalAlpha*=a;x.strokeStyle=col;x.lineWidth=lw;x.lineCap='round';const d=26,g=16;
 const seg_=(x0,y0,x1,y1)=>{const L_=Math.hypot(x1-x0,y1-y0),n=Math.floor(L_/(d+g));for(let i=0;i<=n;i++){const u0=i*(d+g)/L_,u1=Math.min(1,(i*(d+g)+d)/L_);x.beginPath();x.moveTo(lerp(x0,x1,u0),lerp(y0,y1,u0));x.lineTo(lerp(x0,x1,u1),lerp(y0,y1,u1));x.stroke()}};
 seg_(l,t,l+w,t);seg_(l+w,t,l+w,t+h);seg_(l+w,t+h,l,t+h);seg_(l,t+h,l,t);x.restore()}

// the main scene positions
const MX=190,MY=760,MS=.72,GX=450,CX=700,TY=866;
const handW=p=>h2w(p,'r');
/* the hand (rig units) that sends a ticket from the slab: world (334,832) */
const HAND_SEND=[(334-MX)/MS,(832-MY)/MS];
function ticketPath(t,t0,x0,x1,dur,lift=70){const u=seg(t,t0,t0+dur);if(u<=0||u>=1)return null;const e=ease(u);return [lerp(x0,x1,e),TY-Math.sin(Math.PI*e)*lift,u]}

// ---------- shots ----------
function drawTitleless(){}
function shot1(t,cam){const x=layer('board',cam),T=ST(1);bgRest(x,.3,540,640);
 robot(x,CX,930,.6,t,{body:CLD,hp:HP_D,hat:'short',smile:6});
 mascot(x,t,cam,{x:MX,y:MY,hands:{r:[200,56]},showH:{r:1},look:.5});
 slab(x);
 {const hw=[MX+200*MS,MY+56*MS];ticket(x,hw[0]+20,hw[1]-62,1,'#FFFFFF',.12);gripHand(x,hw[0],hw[1],-.3,HERO,.7)}
 const b=fin(t,T+.35,.6);
 if(b>0)withIn(x,330,420,b,()=>{x.save();x.lineJoin='round';const z=fitSz(x,'SAFE = WEAKER?',560,56,44),w=tw(x,'SAFE = WEAKER?',z)+80;
   x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;for(const [qx,qy,r] of [[210,600,16],[236,544,24],[270,492,32]]){x.beginPath();x.arc(qx,qy,r,0,7);x.fill();x.stroke()}
   x.beginPath();x.roundRect(330-w/2,370,w,120,60);x.fill();x.stroke();x.restore();txt(x,'SAFE = WEAKER?',330,432,z,DARK,'center')});
 const q=fin(t,T+1.0,.5);if(q>0)withIn(x,CX,470,q,()=>imp(x,'?',CX,470,150,AMB));
 comp([['board',0]])}
function kitchen(x,t,top,h,labs,o){ /* a kitchen panel: plaque top-left, the same big chef right, the gate left-bottom; o.dx slides it in, nothing fades (L44) */
 x.save();x.translate(o.dx||0,0);
 rr(x,100,top,785,h,28,'#2A1F42',o.col,6);
 const bot=top+h-26;x.save();x.beginPath();x.roundRect(100,top,785,h,28);x.clip();
 robot(x,760,bot+20,.56,t,{hat:'tall'});
 x.fillStyle='#B0705A';x.fillRect(102,bot,781,12);x.fillStyle='#7A4038';x.fillRect(102,bot+12,781,40);
 gate(x,t,280,bot,{open:o.open,h:130,gw:50,col:o.gcol||TEAL});x.restore();
 lab(x,labs,360,top+78,44,[CREAM,AMB],{maxW:470,bg:'rgba(18,10,28,.92)',line:o.col,min:34,free:true});
 x.restore()}
function shot2(t,cam){const x=layer('board',cam),T=ST(2);bgRest(x,.25,540,560);
 const a2=ease(seg(t,T+.9,T+1.5));
 kitchen(x,t,262,380,['FABLE 5.2','EVERYONE'],{col:TEAL});
 if(a2>0){kitchen(x,t,685,380,['MYTHOS 5.2','VETTED GROUPS ONLY'],{col:AMB,open:true,gcol:'#8A9A9C',dx:(1-a2)*900});
  lab(x,['MYTHOS 5 (JUNE):','CYBER CHECKS LIFTED'],490,1165,40,AMB,{maxW:700,a:fin(t,T+1.5,.5),free:true})}
 const b=fin(t,T+1.9,.6);
 if(b>0){x.save();x.globalAlpha*=b;x.strokeStyle=CREAM;x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(858,330);x.lineTo(872,330);x.lineTo(872,1000);x.lineTo(858,1000);x.stroke();x.restore();
  lab(x,'SAME UNDERLYING MODEL',490,663,44,CREAM,{maxW:700,bg:'rgba(228,73,63,.95)',line:INKC,a:b,min:36})}
 comp([['board',0]])}
function shot3(t,cam){const x=layer('board',cam),T=ST(3);bgRest(x,.3,420,640);
 const mp={x:260,y:690,s:.85},hd=[200,40];
 const p=mascot(x,t,cam,{x:mp.x,y:mp.y,s:mp.s,hands:{r:hd},showH:{r:1},look:.45,mouth:.8});
 slab(x);
 const hw=[mp.x+hd[0]*mp.s,mp.y+hd[1]*mp.s];
 for(let i=0;i<10;i++){const u=ease(seg(t,T+.2+i*.05,T+.7+i*.05)),a=lerp(.1,.05+i*.1,u);x.save();x.translate(hw[0],hw[1]);x.rotate(a);ticket(x,0,-72,1.1,'#FFFFFF',0);x.restore()}
 gripHand(x,hw[0],hw[1],-.3,HERO,.8);
 const c=fin(t,T+.6,.55);if(c>0)withIn(x,540,1010,c,()=>{pill(x,540,1010,760,150,'rgba(18,10,28,.9)');imp(x,'10 REQUESTS',540,985,76,AMB);txt(x,'OUR EXAMPLE',540,1052,40,CREAM,'center')});
 comp([['board',0]])}
// BEFORE: the glass room
function shot4(t,cam){const x=layer('board',cam),T=ST(4);bgRest(x,.3,640,640);
 robot(x,660,900,.62,t,{hat:'tall'});
 [[TM1,470],[TM2,545],[TM3,815]].forEach(([c,cx],i)=>{const pp={x:cx,y:900+34*.3-235*.3-60,s:.3,face:1,breath:t*2+i,noLegs:true,blink:blinkAt(t+i*.4,BL),look:.4,brow:.1,mouth:.7,mouthW:24,hands:{},showH:{}};drawPerson(x,c,pp);
  x.save();bodyT(x,pp);x.fillStyle='#BFF2EE';x.strokeStyle=INKC;x.lineWidth=7;x.beginPath();x.moveTo(-60,60);x.lineTo(60,60);x.lineTo(60,150);x.quadraticCurveTo(0,220,-60,150);x.closePath();x.fill();x.stroke();x.restore()});
 mascot(x,t,cam,{x:MX-20,y:MY,hands:{r:[200,56]},showH:{r:1},look:.5});
 {const hw=[MX-20+200*MS,MY+56*MS];ticket(x,hw[0]-18,hw[1]-62,1,'#FFFFFF',-.05);gripHand(x,hw[0],hw[1],-.3,HERO,.7)}
 slab(x);
 rr(x,380,350,505,570,30,`rgba(191,242,238,${.1+.05*Math.sin(t*9)})`,'#BFF2EE',7);
 /* what the voice names gets the highlight: "Mythos Preview" (the chef), "a small group of cyber defenders" (the three), "and infrastructure providers" (line 2 of the label) */
 const hc=fin(t,T+2.87,.4),hd=fin(t,T+3.9,.4);
 ring(x,505,450,310,462,AMB,hc*(1-hd),9);
 ring(x,395,590,475,320,'#BFF2EE',hd,9);
 lab(x,['NO CHECKER STRONG','ENOUGH YET'],632,425,34,'#BFF2EE',{maxW:360,a:fin(t,T+.95,.5),free:true});
 lab(x,['MYTHOS PREVIEW · BEST MODEL'],630,962,44,AMB,{maxW:760,a:fin(t,T+2.87,.5)});
 {const a=fin(t,T+3.9,.5),hi=fin(t,T+5.5,.3);if(a>0){const z=34,L1='A SMALL GROUP OF CYBER DEFENDERS',L2='+ INFRASTRUCTURE PROVIDERS',w=Math.max(tw(x,L1,z),tw(x,L2,z))+52,lh=z*1.3,h=lh*2+22,cx=490,cy=1078;
  withIn(x,cx,cy,a,()=>{rr(x,cx-w/2,cy-h/2,w,h,22,'rgba(18,10,28,.9)',null);
   txt(x,L1,cx,cy-lh/2+2,z,CREAM,'center');
   if(hi>0)pill(x,cx,cy+lh/2+2,tw(x,L2,z)+36,lh,AMB,hi);txt(x,L2,cx,cy+lh/2+2,z,mixC(CREAM,DARK,hi),'center')})}}
 comp([['board',0]])}
const ATX=440,ATY=800;
const SEND5=(i,T)=>T+.05+i*.1;
function shot5(t,cam){const x=layer('board',cam),T=ST(5);bgRest(x,.3,640,640);
 robot(x,CX,930,.6,t,{body:CLD,hp:HP_D,hat:'short',smile:6});
 mascot(x,t,cam,{x:MX,y:MY,hands:{r:HAND_SEND},showH:{r:1},look:.5,mouth:.5});
 slab(x);gripHand(x,MX+HAND_SEND[0]*MS,MY+HAND_SEND[1]*MS,-.3,HERO,.7);
 for(let i=0;i<10;i++){const q=ticketPath(t,SEND5(i,T),350,640,.45,90);if(q)ticket(x,q[0],q[1]-30,.9,'#FFFFFF',(q[2]-.5)*.5)}
 lab(x,'WEAKER MODEL',CX,1000,44,CREAM,{a:fin(t,T+.2,.5)});
 comp([['board',0]])}
function nowScene(x,t,sh,cam,o){bgRest(x,.34,640,620);
 robot(x,CX,930,.8,t,{hat:'tall',smile:o.smile});
 const mp=mascot(x,t,cam,{x:MX,y:MY,hands:{r:HAND_SEND},showH:{r:1},look:.5,mouth:.5});
 slab(x);gripHand(x,MX+HAND_SEND[0]*MS,MY+HAND_SEND[1]*MS,-.3,HERO,.7);
 gate(x,t,GX,CT+4,{scan:o.scan||0});return mp}
function shot6(t,cam){const x=layer('board',cam),T=ST(6);nowScene(x,t,6,cam,{scan:fin(t,T+.5,.4)});
 const q=ticketPath(t,T+.2,350,GX-40,.55,60);const e=seg(t,T+.2,T+.75);
 if(e>0)ticket(x,q?q[0]:GX-40,q?q[1]:TY,.9,'#FFFFFF',0);
 lab(x,'FABLE 5.2 · FULL MODEL',CX,950,44,AMB,{maxW:700,a:fin(t,T+.3,.5)});
 lab(x,['CHECKER · A SEPARATE AI'],GX,1070,44,'#BFF2EE',{maxW:760,a:fin(t,T+.6,.5),bg:'rgba(14,74,80,.92)'});
 comp([['board',0]])}
const SEND7=(i,T)=>T+.08+i*.1;
function shot7(t,cam){const x=layer('board',cam),T=ST(7);nowScene(x,t,7,cam,{scan:1,smile:30});
 for(let i=0;i<9;i++){const q=ticketPath(t,SEND7(i,T),350,CX-30,.6,60);if(q)ticket(x,q[0],q[1],.9*(1-.25*seg(q[2],.8,1)),'#FFFFFF',0)}
 const nine=fin(t,SEND7(8,T)+.5,.4);
 if(nine>0)withIn(x,840,800,nine,()=>{pill(x,840,800,110,110,'rgba(18,10,28,.92)');imp(x,'9',840,802,90,AMB)});
 lab(x,'FABLE 5.2 · FULL MODEL',CX,950,44,AMB,{maxW:700});
 lab(x,['CHECKER · A SEPARATE AI'],GX,1070,44,'#BFF2EE',{maxW:760,bg:'rgba(14,74,80,.92)'});
 comp([['board',0]])}
function shot8(t,cam){const x=layer('board',cam),T=ST(8);nowScene(x,t,8,cam,{scan:1});
 const red=fin(t,T+.35,.5),gk=ease(seg(t,T+.05,T+.45));
 ticket(x,lerp(430,ATX,gk),lerp(ATY-20,ATY,gk),1,mixC('#FFFFFF',RED,red),0,{w:250,h:150,lines:['HELP ME','BUILD','ATTACK CODE'],sz:32,tc:mixC(INKC,'#FFF6E6',red)});
 const st=fin(t,T+.7,.5);if(st>0)withIn(x,ATX,ATY+118,st,()=>{x.save();x.translate(ATX,ATY+118);x.rotate(-.1);rr(x,-120,-34,240,68,10,'rgba(228,73,63,.95)','#FFF6E6',5);txt(x,'BLOCKED',0,3,52,'#FFF6E6','center');x.restore()},1.4);
 lab(x,'RISKY CYBER REQUEST',GX-30,1090,44,CREAM,{maxW:760,a:fin(t,T+.9,.5)});
 const ia=ease(seg(t,T+1.0,T+1.5));
 slide(x,ia,900,()=>{rr(x,100,318,785,280,24,'#1B1430',null);dashRect(x,100,318,785,280,AMB);
  lab(x,['MYTHOS 5 (JUNE): CYBER CHECKS LIFTED','· VETTED GROUPS'],490,376,36,AMB,{maxW:720,min:34,bg:'rgba(0,0,0,0)',free:true});
  const u=ease(seg(t,T+1.5,T+2.2));ticket(x,lerp(270,520,u),525,1,RED,0,{w:340,h:104,lines:['HELP ME BUILD','ATTACK CODE'],sz:30,tc:'#FFF6E6'});
  robot(x,790,590,.28,t,{hat:'tall'})});
 comp([['board',0]])}
function shot9(t,cam){const x=layer('board',cam),T=ST(9);bgRest(x,.3,540,620);
 const sh=fin(t,T+.1,.5);
 rr(x,100,350,785,290,28,'#2A1F42','#8C7B5A',6);
 robot(x,260,630,.36,t,{body:CLO,hp:HP_O,hat:'mid'});
 x.fillStyle='#B0705A';x.fillRect(102,626,781,12);
 lab(x,['OLDER OPUS','LESS CAPABLE'],600,490,44,['#E8D6A4',CREAM],{maxW:420,a:sh});
 const mp=mascot(x,t,cam,{x:MX,y:MY+30,hands:{r:HAND_SEND},showH:{r:1},look:.5,mouth:.5});
 slab(x);gripHand(x,MX+HAND_SEND[0]*MS,MY+30+HAND_SEND[1]*MS,-.3,HERO,.7);
 gate(x,t,GX,CT+4,{scan:1});
 const u=ease(seg(t,T+.2,T+1.2));
 if(u<1){x.save();x.globalAlpha*=1-seg(u,.82,1);ticket(x,lerp(ATX,300,u),lerp(ATY,545,u),lerp(1,.95,u),RED,0,{w:250,h:150,lines:['HELP ME','BUILD','ATTACK CODE'],sz:30,tc:'#FFF6E6'});x.restore()}
 const c=fin(t,T+1.5,.6),cx=lerp(300,620,ease(seg(t,T+1.5,T+2.4)));
 const bob=Math.sin((t-T)*7)*8*ease(seg(t,T+2.4,T+3.0));
 if(c>0)pop(x,cx,810,c,()=>{x.translate(0,bob);rr(x,cx-200,720,400,210,18,CREAM,INKC,5);rr(x,cx-200,720,400,100,18,'#E8D6A4',INKC,5);txt(x,'MODEL SWITCHED',cx,748,34,INKC,'center');txt(x,'TO OPUS',cx,790,34,INKC,'center');x.fillStyle='#B8AACB';for(let i=0;i<3;i++)x.fillRect(cx-160,846+i*26,i==2?150:320,9)},.6);
 ring(x,cx-212,708,424,124,AMB,fin(t,T+4.1,.4),9);
 lab(x,['IN CLAUDE APPS ·','SOME ARE REFUSED OUTRIGHT'],490,1040,40,CREAM,{maxW:760,a:fin(t,T+2.6,.55)});
 comp([['board',0]])}
function shot10(t,cam){const x=layer('board',cam),T=ST(10);bgRest(x,.3,540,640);
 const BW=210,B1=140,B2=630,base=910,H1=460,H2=207;
 const g1=ease(seg(t,T+.3,T+1.5)),g2=ease(seg(t,T+1.5,T+2.7));
 txt(x,'ANTHROPIC\'S EARLY TESTS',490,285,44,CREAM,'center');
 const pl=ease(seg(t,T+2.8,T+3.2))*(.1+.08*Math.sin(t*10));const bar=(l,h,col)=>{rr(x,l,base-h,BW,h,18,mixC(col,'#FFFFFF',pl),INKC,6);x.fillStyle='rgba(255,255,255,.25)';x.fillRect(l+10,base-h+8,BW-20,8)};
 if(g1>0)bar(B1,H1*g1,'#8A7AA8');if(g2>0)bar(B2,H2*g2,TEAL);
 x.fillStyle=INKC;x.fillRect(100,base,785,10);
 lab(x,['5.1 CHECKER:','BLOCKED','REQUESTS'],B1+BW/2,1005,40,CREAM,{maxW:300,min:30,a:fin(t,T+.3,.5),free:true});
 lab(x,['5.2 CHECKER:','BLOCKED','REQUESTS'],B2+BW/2,1005,40,CREAM,{maxW:300,min:30,a:fin(t,T+.3,.5),free:true});
 const f=fin(t,T+2.6,.6);
 if(f>0)withIn(x,490,500,f,()=>{x.save();x.strokeStyle=AMB;x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(B1+BW+10,base-H1);x.lineTo(B2+BW/2,base-H1);x.moveTo(B2+BW/2,base-H1);x.lineTo(B2+BW/2,base-H2-26);x.stroke();x.fillStyle=AMB;x.beginPath();x.moveTo(B2+BW/2,base-H2-4);x.lineTo(B2+BW/2-24,base-H2-36);x.lineTo(B2+BW/2+24,base-H2-36);x.closePath();x.fill();x.restore();
  imp(x,'ABOUT 55% FEWER',490,base-H1-70,72,AMB,'center')},.85);
 ring(x,B1-14,base-H1-14,BW+28,H1+28,AMB,fin(t,T+4.9,.4),9);
 lab(x,['JUST AS ROBUST','IN CYBER AND BIOLOGY'],490,1205,44,'#BFF2EE',{maxW:760,a:fin(t,T+3.6,.55),bg:'rgba(14,74,80,.92)'});
 comp([['board',0]])}
function shot11(t,cam){const x=layer('board',cam),T=ST(11);bgRest(x,.3,540,600);
 const GXr=520,r1=250;
 const rowFrame=(top,col)=>{rr(x,100,top,785,380,28,'#2A1F42',col,6);const bot=top+300;x.fillStyle='#B0705A';x.fillRect(102,bot,781,12);x.fillStyle='#7A4038';x.fillRect(102,bot+12,781,30)};
 const TK=(cx,cy,k)=>ticket(x,cx,cy,k,'#FFFFFF',0,{w:280,h:90,lines:['OUR EXAMPLE'],sz:32});
 rowFrame(r1,'#8A7AA8');
 gate(x,t,GXr,r1+300,{col:'#8A9A9C',hp:HP_D,scan:0,h:190,gw:56});
 const u1=ease(seg(t,T+.1,T+.7)),a2=ease(seg(t,T+.8,T+1.6));
 TK(lerp(250,370,u1),r1+248,1);
 lab(x,'5.1 CHECKER',300,r1+70,44,CREAM,{maxW:330,bg:'rgba(80,92,96,.95)',a:fin(t,T+.2,.5),free:true});
 const rb=680;slide(x,a2,700,()=>{rowFrame(rb,TEAL);const bot=rb+300;
  x.save();x.beginPath();x.roundRect(100,rb,785,380,28);x.clip();robot(x,770,bot+22,.5,t,{hat:'tall',smile:30});x.restore();x.fillStyle='#B0705A';x.fillRect(102,bot,781,12);x.fillStyle='#7A4038';x.fillRect(102,bot+12,781,30);
  gate(x,t,GXr,bot,{scan:1,h:190,gw:56});const u2=ease(seg(t,T+1.3,T+2.1));TK(lerp(250,660,u2),bot-48,1-.1*u2);
  lab(x,'5.2 CHECKER',300,rb+70,44,'#BFF2EE',{maxW:330,bg:'rgba(14,74,80,.95)',free:true});
  lab(x,'FULL MODEL',720,rb+338,34,AMB,{maxW:300,min:34,free:true})});
 comp([['board',0]])}

// ---------- the meter "YOUR REQUESTS ON A WEAKER MODEL" with "OUR EXAMPLE" under it: screen space, cells 0-10 ----------
function dsp(v){if(v>=9.97)return '10';if(Math.abs(v-1)<.03)return '1';if(v<=.03)return 'NONE';return ''}
function meterCells(x,l,tp,w,h,v,col){for(let i=0;i<10;i++){const cl=l+i*(w/10),f=clamp(v-i);rr(x,cl+3,tp,w/10-6,h,8,'#241A3C',INKC,4);if(f>.01){x.save();x.beginPath();x.roundRect(cl+3,tp,w/10-6,h,8);x.clip();x.fillStyle=col;x.fillRect(cl+3,tp+h*(1-f),w/10-6,h*f);x.restore()}}}
function meterBox(x,v,col,a=1){if(a<=0)return;const l=70,tp=1180,w=840,h=340;x.save();x.globalAlpha*=a;const cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,28,'rgba(27,20,48,.94)',col,6);
 txt(x,'YOUR REQUESTS ON',l+w/2,tp+44,46,CREAM,'center');txt(x,'A WEAKER MODEL',l+w/2,tp+96,46,CREAM,'center');txt(x,'OUR EXAMPLE',l+w/2,tp+148,38,AMB,'center');
 meterCells(x,l+36,tp+206,540,100,v,col);
 const d=dsp(v);if(d)imp(x,d,l+36+540+(w-36-540-36)/2+10,tp+256,d=='NONE'?64:120,col);
 x.restore()}
function meterVal(t,sh){
 if(sh<=4)return 0;
 if(sh==5){let n=0;for(let i=0;i<10;i++)n+=ease(seg(t,SEND5(i,ST(5))+.4,SEND5(i,ST(5))+.6));return n}
 if(sh==6)return kf(t,[[ST(6),10],[ST(6)+.8,0],[999,0]]);
 if(sh==9)return kf(t,[[0,0],[ST(9)+1.9,0],[ST(9)+2.4,1],[999,1]]);
 return 0}
function meterCol(t,sh){return sh<=5?AMB:mixC(AMB,TEAL,seg(t,ST(6),ST(6)+.6))}
function meterOverlay(t,sh){if(!(sh>=3&&sh<=9))return;const a=sh==3?fin(t,ST(3)+.3,.6):1;meterBox(ctx,meterVal(t,sh),meterCol(t,sh),a)}

// ---------- WHAT WE LEARNED (shots 12, 13) ----------
function cells(x,l,tp,w,h,v,col){meterCells(x,l,tp,w,h,v,col)}
function panel(x,top,h,col,name,a,dx,fn){slide(x,a,dx,()=>{rr(x,100,top,785,h,28,mixC('#2A1F42','#46356F',.5+.5*Math.sin(t_g*7)),col,6);pill(x,100+30+tw(x,name,44)/2+22,top+4,tw(x,name,44)+60,66,col);txt(x,name,100+52+tw(x,name,44)/2,top+7,44,DARK,'center');fn()})}
function miniBefore(x,t,top,ringA){ /* same state as shot 5: 10 tickets at the weaker cook, meter 10 */
 robot(x,690,top+260,.36,t,{body:CLD,hp:HP_D,hat:'short',smile:6});
 mascot(x,t,null,{x:240,y:top+170,s:.4,hands:{r:[200,56]},showH:{r:1},look:.5,rep:false});
 x.save();x.fillStyle='#B0705A';x.fillRect(102,top+250,781,10);x.fillStyle='#7A4038';x.fillRect(102,top+260,781,20);x.restore();
 for(let i=0;i<10;i++)ticket(x,560+(i%5)*26,top+236-Math.floor(i/5)*28,.55,'#FFFFFF',(i%3-1)*.12);
 arrowR(x,360,520,top+190,AMB);
 cells(x,130,top+300,660,56,10,AMB);imp(x,'10',835,top+328,56,AMB);
 ring(x,118,top+290,764,76,CREAM,ringA||0,6)}
function miniNow(x,t,top,r1,r2){ /* same state as shot 9: 9 to the full model, 1 red to older Opus, meter 1 */
 robot(x,640,top+250,.34,t,{hat:'tall',smile:30});
 robot(x,820,top+250,.26,t,{body:CLO,hp:HP_O,hat:'mid'});
 mascot(x,t,null,{x:220,y:top+170,s:.4,hands:{r:[200,56]},showH:{r:1},look:.5,rep:false});
 x.save();x.fillStyle='#B0705A';x.fillRect(102,top+250,781,10);x.fillStyle='#7A4038';x.fillRect(102,top+260,781,20);x.restore();
 gate(x,t,420,top+254,{scan:1,h:110,gw:34});
 for(let i=0;i<9;i++)ticket(x,520+(i%3)*24,top+226-Math.floor(i/3)*24,.5,'#FFFFFF',(i%3-1)*.1);
 ticket(x,790,top+226,.5,RED,.1);
 imp(x,'9',560,top+95,60,AMB);
 cells(x,130,top+300,660,56,1,TEAL);imp(x,'1',835,top+328,56,TEAL);
 ring(x,480,top+20,260,250,AMB,r1||0,6);ring(x,745,top+110,130,170,RED,r2||0,6)}
const P1=392,P2=841,LBL_Y=1325;
function learnedBox(x,a){x.save();x.translate(490,275);const k=.88+.12*a;x.scale(k,k);x.globalAlpha*=a;const S='WHAT WE LEARNED',fs=64,w=impW(x,S,fs)+100;rr(x,-w/2,-55,w,110,40,PANEL,AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}
function shot12(t,cam){const x=layer('board',cam),T=ST(12);bgRest(x,.25,540,640);
 learnedBox(x,fin(t,T+.1,.6));
 panel(x,P1,380,AMB,'BEFORE',ease(seg(t,T+.5,T+1.1)),-950,()=>miniBefore(x,t,P1,fin(t,T+2.2,.4)));
 lab(x,['YOUR REQUESTS ON A WEAKER MODEL','OUR EXAMPLE'],490,LBL_Y,40,[CREAM,AMB],{maxW:780,min:34});
 comp([['board',0]])}
function shot13(t,cam){const x=layer('board',cam),T=ST(13);bgRest(x,.25,540,640);
 learnedBox(x,1);
 panel(x,P1,380,AMB,'BEFORE',1,0,()=>miniBefore(x,t,P1,0));
 panel(x,P2,380,TEAL,'NOW',ease(seg(t,T+.1,T+1.0)),700,()=>miniNow(x,t,P2,fin(t,T+1.2,.4)*(1-fin(t,T+2.1,.3)),fin(t,T+2.1,.4)));
 lab(x,['YOUR REQUESTS ON A WEAKER MODEL','OUR EXAMPLE'],490,LBL_Y,40,[CREAM,AMB],{maxW:780,min:34});
 comp([['board',0]])}

// ---------- the mascot big (shot 14) ----------
function shot14(t,cam){const x=layer('board',cam),T=ST(14);bgRest(x,.35,540,560);
 const w=ease(seg(t,T+.2,T+.8)),wv=Math.sin((t-T)*9);const hr=[lerp(97,170+wv*12,w),lerp(220,-30+wv*36,w)];
 const p=mascot(x,t,cam,{x:480,y:520,s:1.25,hands:{r:hr},showH:{r:w>.02?1:0},look:.05,lookY:0,brow:.45,mouth:.95});
 comp([['board',0]]);
 const c=fin(t,T+.9,.55),pulse=1+.03*Math.sin((t-T-.9)*7);
 if(c>0){ctx.save();ctx.translate(490,1170);const sc=lerp(.7,1,c)*pulse;ctx.scale(sc,sc);ctx.globalAlpha=c;ctx.fillStyle=INKC;ctx.beginPath();ctx.roundRect(-330,-90,660,180,90);ctx.fill();pill(ctx,0,0,640,160,RED);ctx.fillStyle=CREAM;ctx.beginPath();ctx.moveTo(-250,-40);ctx.lineTo(-250,40);ctx.lineTo(-186,0);ctx.closePath();ctx.fill();txt(ctx,'Subscribe',50,5,84,CREAM,'center','800');ctx.restore()}
 const C0=T+1.7,cc=fin(t,C0,.55),pu=1+.03*Math.sin((t-C0)*7);
 if(cc>0){const S='COMMENT: WHAT NEXT?',fs=46,w2=Math.min(780,tw(ctx,S,fs)+110),h=150;ctx.save();ctx.translate(490,1410);const k=lerp(.7,1,cc)*pu;ctx.scale(k,k);ctx.globalAlpha=cc;
  ctx.lineJoin='round';ctx.fillStyle=AMB;ctx.strokeStyle=INKC;ctx.lineWidth=8;ctx.beginPath();ctx.roundRect(-w2/2,-h/2,w2,h,h/2);ctx.fill();ctx.stroke();
  txt(ctx,S,0,4,fs,DARK,'center');ctx.restore()}}

// ---------- words on screen (screen space) ----------
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 44px Arial';const S='Claude Fable 5.2',tw_=x.measureText(S).width,dw=x.measureText(' ·').width;const L0=60,w=26+tw_+dw+18+112+22,cy=134;pill(x,L0+w/2,cy,w,68,'rgba(27,20,48,.92)');
  txt(x,S,L0+26,cy+2,44,AMB,'left','800');txt(x,' ·',L0+26+tw_,cy+2,44,CREAM,'left','800');pill(x,L0+26+tw_+dw+18+56,cy,112,54,RED);txt(x,'60s',L0+26+tw_+dw+18+56,cy+2,38,'#FFF6E6','center','800');x.restore()}
function tab(t,a,b,lab_,col){const v=fin(t,a,.5)*(1-fin(t,b,.5));if(v<=0)return;const x=ctx;x.save();x.font='900 44px Arial';const w=x.measureText(lab_).width+60;x.restore();const cy=241;x.save();x.translate(60+w/2,cy);x.scale(.9+.1*v,.9+.1*v);x.translate(-60-w/2,-cy);pill(x,60+w/2,cy,w,66,col,v);txt(x,lab_,60+w/2,cy+2,44,DARK,'center','900',v);x.restore()}
function sticker(x,fs){x.font=`${fs}px Impact, "Arial Black", sans-serif`;const sw=x.measureText('IN 60 SECONDS').width+70;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-fs*.74,sw+20,fs*1.48,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-fs*.64,sw,fs*1.28,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+35,fs*.06)}
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(W/2,820,60,W/2,820,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(W/2,H/2);const z=1+.025*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-W/2,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 x.font=font(100);const s1=100*820/x.measureText('CLAUDE FABLE').width;
 put('LEARN',W/2,640,130,CREAM);put('CLAUDE FABLE',W/2,640+s1*.95,s1,AMB);put('5.2',W/2,640+s1*.95+360,440,AMB);
 x.save();x.translate(W/2,1500);x.rotate(-.035);sticker(x,96);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
function takeaway(t){const T=ST(13)+3.0,v=fin(t,T,.6);if(v<=0)return;const x=ctx;x.save();x.globalAlpha=.8*v;x.fillStyle='#0C0614';x.fillRect(0,0,W,H);x.restore();
 const wrap=(s,fs,maxW)=>{const ws=s.split(' '),ls=[];let cur='';for(const w of ws){const n=cur?cur+' '+w:w;if(tw(x,n,fs)>maxW&&cur){ls.push(cur);cur=w}else cur=n}ls.push(cur);return ls};
 const fs=46,L1=wrap('OUR EXAMPLE: BEFORE, 10 OF 10 ON A WEAKER MODEL',fs,700),L2=wrap('NOW: 9 REACH THE FULL MODEL; IN CLAUDE APPS, THE BLOCKED 1 USUALLY GOES TO OLDER OPUS',fs,700);
 const lh=fs*1.3,h=(L1.length+L2.length)*lh+110,cy=800;x.save();x.translate(490,cy);const k=.92+.08*v;x.scale(k,k);x.globalAlpha=v;
 rr(x,-400,-h/2,800,h,40,'rgba(27,20,48,.97)',AMB,6);
 {const P=2*(800+h),pt=u=>{let d=((u%1)+1)%1*P;if(d<800)return [-400+d,-h/2];d-=800;if(d<h)return [400,-h/2+d];d-=h;if(d<800)return [400-d,h/2];d-=800;return [-400,h/2-d]};
  for(let k=0;k<3;k++)for(let j=0;j<8;j++){const q=pt((t-T)*.3+k/3-j*.006);x.beginPath();x.arc(q[0],q[1],15-j*1.5,0,7);x.fillStyle=`rgba(255,246,230,${.9-j*.1})`;x.fill()}}
 L1.forEach((s,i)=>txt(x,s,0,-h/2+55+lh/2+i*lh,fs,CREAM,'center'));L2.forEach((s,i)=>txt(x,s,0,-h/2+55+lh/2+(L1.length*lh+24)+i*lh,fs,AMB,'center','900',fin(t,T+1.4,.4)));x.restore()}
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(4)+.05,out(6),'BEFORE · APRIL 2026',AMB);tab(t,ST(6)+.05,out(10),'NOW · FABLE 5.2',TEAL);
 if(sh==13)takeaway(t)}

// ---------- cameras: a slow push on the flat board ----------
const E=u=>ease(u),push=(a=1,b=1.05)=>u=>({x:540,y:960,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:14},()=>push(1,1.05)));
for(const i of [1,3,14])CAM[i]=push(1,1.08);
for(const i of [2,4,9,10,11,13])CAM[i]=push(1,1.04);
CAM[12]=push(1,1.02);
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{[null,shot1,shot2,shot3,shot4,shot5,shot6,shot7,shot8,shot9,shot10,shot11,shot12,shot13,shot14][s](o,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels ----------
const PLACE='TSKSBGNNNNCKWWM'; /* place letter per shot: a cut between different places gets the big brush */
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(const t of [ST(1)+.35,ST(1)+1.0,ST(2)+1.5,ST(2)+1.9,ST(3)+.3,ST(3)+.6,ST(4)+.95,ST(4)+2.87,ST(4)+3.9,ST(4)+5.5,ST(5)+.2,ST(6)+.3,ST(6)+.6,ST(7)+.08+8*.1+.6,ST(8)+.7,ST(8)+.9,ST(9)+.1,ST(9)+1.5,ST(9)+2.6,ST(9)+4.1,ST(10)+.3,ST(10)+2.6,ST(10)+3.6,ST(10)+4.9,ST(11)+.2,ST(12)+.1,ST(12)+2.2,ST(13)+1.2,ST(13)+2.1,ST(13)+3.0,ST(14)+.9,ST(14)+1.7])say(t,'tick');
for(const t of [ST(1)+.4,ST(2)+.9,ST(3)+.2,ST(3)+.5,ST(8)+.05,ST(8)+1.0,ST(9)+.2,ST(11)+.1,ST(11)+.9,ST(11)+1.3,ST(12)+.5,ST(13)+.1])say(t,'slide');
for(let i=0;i<10;i++)say(SEND5(i,ST(5))+.5,'paper');
for(let i=0;i<9;i++)say(SEND7(i,ST(7))+.55,'paper');
for(const t of [ST(8)+.75,ST(10)+1.5,ST(10)+2.7])say(t,'stamp');
