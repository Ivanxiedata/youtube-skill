// Episode: GPT-6 in ChatGPT answers while it still thinks, told as a diner. You (the mascot, napkin bib) wait for an answer; the AI is a robot chef with a teal screen head.
// Vertical 1080x1920. Our example: one web-search question; the meter counts SECONDS UNTIL IT STARTS ANSWERING (BEFORE fills to 10, NOW stops at 6 when the first plate lands).
// 19 shots (beats.md "Shots", numbered 0-16; shot 13 is split in 13+14 and shot 14 in 15+16+17, +1 for the ask: no shot over 5 s). Voice laid in at VOICE_AT (audio_mix.py): film time = voice time + .5. Every time below is FILM seconds.
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random. Numbers drawn: 10, 6, 44%, GPT-6, GPT-5.6, 60. Every text is 44 px or more.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',NEU='#8A7AA8',DARK='#1B1430',PANEL='#2A1F42',MINT='#BFF2EE';
function txt(x,s,X,Y,size,col,al='left',wt='900',a=1){if(a<=0)return;if(size<44)size=44;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function tw(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
/* alpha + scale ease for flat panels and labels that hold NO figure (L44) */
function withIn(x,cx,cy,a,fn,s0=.9){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
/* no alpha: a figure or multi-part prop comes in by scale (pop) or slide (L44) */
function pop(x,cx,cy,a,fn,s0=.7){if(a<=0)return;x.save();const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
function slide(x,a,dx,fn){if(a<=0)return;x.save();x.translate((1-a)*dx,0);fn();x.restore()}
function ring(x,l,t,w,h,col,a,lw=8){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.lineWidth=lw;x.beginPath();x.roundRect(l,t,w,h,24);x.stroke();x.restore()}
/* a label: dark pill with 1-3 lines at size 44 (never smaller: wrap the words into lines instead), kept inside x 112-872 */
const WARN=[];
function lab(x,lines,cx,cy,size,col,o={}){if(typeof lines=='string')lines=[lines];const z=Math.max(44,size||44);
 const w=Math.max(...lines.map(s=>tw(x,s,z)))+52,lh=z*1.25,h=lh*lines.length+22;let X=cx;if(!o.free){X=clamp(cx,112+w/2,872-w/2)}
 if(w>760)WARN.push('lab too wide '+Math.round(w)+' '+lines.join('|'));
 const a=o.a===undefined?1:o.a;withIn(x,X,cy,a,()=>{rr(x,X-w/2,cy-h/2,w,h,22,o.bg||'rgba(18,10,28,.9)',o.line||null,o.lw||4);lines.forEach((s,i)=>txt(x,s,X,cy-(lines.length-1)*lh/2+i*lh+2,z,Array.isArray(col)?col[i]:col,'center'))},o.s0===undefined?.9:o.s0);return {w,h,X,z}}

/* THE CLOCK: cut times of the 17 shots (film seconds), from vo_lines.json + .5 s and the measured pauses in vo.wav (L16, L36). */
const TS=[0,2.515,5.63,8.233,11.344,13.249,16.305,18.909,22.849,25.224,28.654,31.939,33.449,35.244,37.364,42.319,43.874,47.504,51.419];
const DUR=55.44;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,out=i=>ST(i)-.5;

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:MINT,face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const CLD={skin:'#4F6468',cloth:'#4A5E62',hood:'#3A4C50',hand:'#9DB4B6',face:'#16243C',leg:'#3A4C50',shoe:'#17141F',finger:'#16243C'};
const HP_T={frame:'#187E86',ear:'#0E4A50',s1:'#46D0CB',s2:TEAL,face:'#0B3A40'};
const HP_D={frame:'#4F6468',ear:'#36494C',s1:'#8FB0B2',s2:'#6E9194',face:'#2A3A3C'};
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
function hat(x){x.save();x.lineJoin='round';x.fillStyle='#FFFFFF';x.strokeStyle=INKC;x.lineWidth=6;
 x.beginPath();x.moveTo(-84,-80);x.bezierCurveTo(-140,-130,-130,-250,-60,-246);x.bezierCurveTo(-40,-320,50,-320,62,-246);x.bezierCurveTo(130,-250,144,-130,84,-80);x.closePath();x.fill();x.stroke();rr(x,-88,-112,176,36,10,'#FFFFFF',INKC,6);x.restore()}
function robot(x,cx,bottom,s,t,o={}){const body=o.body||CLB,hp=o.hp||HP_T,p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1+(o.ph||0),noLegs:true,noFace:true,hands:o.hands||{},showH:{}};
 drawPerson(x,body,p);x.save();headT(x,p);head(x,hp,{blink:blinkAt(t+.7+(o.ph||0),BL),smile:o.smile});if(o.hat!==false)hat(x);x.restore();return p}
function ticket(x,cx,cy,k,col,rot,o={}){x.save();x.translate(cx,cy);x.rotate(rot||0);x.scale(k,k);const w=o.w||64,h=o.h||84;
 x.lineJoin='round';rr(x,-w/2,-h/2,w,h,8,col||'#FFFFFF',INKC,5);
 if(o.lines){const z=o.sz||44;o.lines.forEach((s,i)=>txt(x,s,0,(i-(o.lines.length-1)/2)*z*1.2+2,z,o.tc||INKC,'center'))}
 else{x.fillStyle='#B8AACB';for(let i=0;i<3;i++)x.fillRect(-w*.34,-h*.26+i*h*.24,w*(i==2?.36:.68),6)}
 x.restore()}
function cog(x,cx,cy,r,rot,col){x.save();x.translate(cx,cy);x.rotate(rot);x.fillStyle=col;x.strokeStyle=INKC;x.lineWidth=4;x.lineJoin='round';x.beginPath();for(let i=0;i<16;i++){const a=i/16*Math.PI*2,rad=(i%2?r*.78:r);x.lineTo(Math.cos(a)*rad,Math.sin(a)*rad)}x.closePath();x.fill();x.stroke();x.fillStyle='#F6EEFF';x.beginPath();x.arc(0,0,r*.32,0,7);x.fill();x.restore()}
/* the thinking bubble: three dots that pulse, then a small turning cog; trail circles lead to the chef's head */
function thinkBubble(x,t,X,Y,hx,hy,mode,col){const k=mode;x.save();x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=5;
 for(const [u,r] of [[.2,10],[.45,15],[.7,20]]){x.beginPath();x.arc(lerp(hx,X,u),lerp(hy,Y,u),r,0,7);x.fill();x.stroke()}
 x.beginPath();x.ellipse(X,Y,86,56,0,0,7);x.fill();x.stroke();
 if(k=='dots'){for(let i=0;i<3;i++){const s=.6+.4*Math.sin(t*6-i*.9);x.fillStyle=col||'#46356F';x.beginPath();x.arc(X-34+i*34,Y,10*s+4,0,7);x.fill()}}
 else cog(x,X,Y,36,t*2.2,col||TEAL);
 x.restore()}
function watch(x,cx,cy,k,t){x.save();x.translate(cx,cy);x.scale(k,k);x.fillStyle='#8A7AA8';x.fillRect(-9,-70,18,140);x.fillStyle='#F8E9CC';x.strokeStyle=INKC;x.lineWidth=6;x.beginPath();x.arc(0,0,42,0,7);x.fill();x.stroke();x.strokeStyle=INKC;x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(0,0);x.lineTo(0,-26);x.moveTo(0,0);x.rotate(t*1.2);x.lineTo(20,0);x.stroke();x.restore()}

// ---------- the world ----------
const CT=1030; /* slab top */
function bgRest(x,warm=.3,cx=620,cy=640){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(255,226,190,.07)';for(let i=0;i<7;i++)x.fillRect(-900,330+i*88,W+1800,4)}
function slab(x,from=-900,to=W+900){x.fillStyle='#B0705A';x.fillRect(from,CT,to-from,36);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(from,CT,to-from,5);x.fillStyle='#7A4038';x.fillRect(from,CT+36,to-from,110);x.fillStyle='rgba(20,10,30,.35)';x.fillRect(from,CT+146,to-from,900)}
const MX=190,MY=CT-140,MS=.72,CHX=790,CHB=CT+32,SLOT=[310,420,530,640],PY=CT+16,SRC=740;
const HAND_SEND=[(334-MX)/MS,(PY-30-MY)/MS];

// ---------- plates and what lies on them ----------
function plateBase(x,cx,cy,k){x.save();x.fillStyle='#E9DDF7';x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.ellipse(cx,cy,66*k,15*k,0,0,7);x.fill();x.stroke();x.fillStyle='#CFC0E6';x.beginPath();x.ellipse(cx,cy-2,46*k,9*k,0,0,7);x.fill();x.restore()}
function textCard(x,cx,cy,k,n=3,col='#FFFFFF',lit=1){x.save();x.translate(cx,cy);x.scale(k,k);rr(x,-48,-86,96,86,10,col,INKC,5);x.fillStyle='#B8AACB';for(let i=0;i<n;i++)x.fillRect(-34,-72+i*22,i==n-1?40:68,9);x.restore()}
function chartCard(x,cx,cy,k){x.save();x.translate(cx,cy);x.scale(k,k);rr(x,-52,-98,104,98,10,'#FFFFFF',INKC,5);const hs=[30,52,40,70];for(let i=0;i<4;i++){x.fillStyle=[AMB,TEAL,AMB,TEAL][i];x.fillRect(-38+i*21,-14-hs[i],15,hs[i])}x.fillStyle=INKC;x.fillRect(-42,-14,86,4);x.restore()}
function calcProp(x,cx,cy,k,lit){x.save();x.translate(cx,cy);x.scale(k,k);rr(x,-40,-110,80,110,10,'#3A3258',INKC,5);rr(x,-30,-100,60,24,5,'#BFF2EE',null);
 for(let i=0;i<9;i++){const c=i%3,r=Math.floor(i/3),on=lit>i;rr(x,-30+c*21,-66+r*20,17,15,4,on?AMB:'#8A7AA8',null)}x.restore()}
function platter(x,cx,cy,k){x.save();x.translate(cx,cy);x.scale(k,k);x.fillStyle='#E9DDF7';x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.ellipse(0,0,112,20,0,0,7);x.fill();x.stroke();
 x.fillStyle='#D8CCEE';x.beginPath();x.moveTo(-96,-4);x.bezierCurveTo(-96,-130,96,-130,96,-4);x.closePath();x.fill();x.stroke();x.fillStyle='#E9DDF7';x.beginPath();x.arc(0,-96,13,0,7);x.fill();x.stroke();x.restore()}
const slideX=(t,t0,d,x0,x1)=>lerp(x0,x1,ease(seg(t,t0,t0+d)));

// ---------- the main scene: you at the table (left), the chef behind the pass (right) ----------
/* o.chef: 'now' (teal, GPT-6) or 'before' (grey, GPT-5.6); o.bub: [mode] ; o.ticket draws the order ticket; o.watch; o.plates: fn drawn on the slab after it */
function scene(x,t,cam,o){bgRest(x,.34,640,700);
 const now=o.chef!='before';
 robot(x,CHX,CHB,.6,t,{body:now?CLB:CLD,hp:now?HP_T:HP_D,smile:o.smile});
 if(o.bub)thinkBubble(x,t,630,892,CHX-62,CHB-170,o.bub,now?TEAL:'#8FB0B2');
 const mp=mascot(x,t,cam,{x:MX,y:MY,hands:o.hands||{r:HAND_SEND},showH:{r:1},look:.5,mouth:o.mouth===undefined?.5:o.mouth,brow:o.brow});
 slab(x);
 const hw=[MX+(o.hands?o.hands.r[0]:HAND_SEND[0])*MS,MY+(o.hands?o.hands.r[1]:HAND_SEND[1])*MS];
 if(o.hold)o.hold(x,hw);
 gripHand(x,hw[0],hw[1],-.3,HERO,.7);
 return mp}
function chefTag(x,s,col,a=1){lab(x,s,CHX-20,CT+76,44,col,{a})}

// ---------- the chat strip (the answer area on top) ----------
const SX=112,SY=296,SW=756,SH=320;
function lines(x,l,tp,n,col,prog,w0=60){for(let i=0;i<n;i++){const u=clamp(prog*n-i);const w=(i==n-1?.5:1)*(SW-2*w0)*u;if(w>1){x.fillStyle=col;x.beginPath();x.roundRect(l+w0,tp+i*28,w,16,8);x.fill()}}}
function thinkingPill(x,t,cx,cy,col,a=1){if(a<=0)return;const p=.75+.25*Math.sin(t*5);x.save();x.globalAlpha*=a;pill(x,cx,cy,330,58,mixC('#2A1F42',col,.35*p+.1));txt(x,'THINKING...',cx,cy+2,44,mixC('#BFB3D6','#FFFFFF',p),'center');x.restore()}
function chatBox(x,col,a=1){rr(x,SX,SY,SW,SH,26,'rgba(27,20,48,.96)',col,6)}
function chatBefore(x,t,T,col){chatBox(x,col);
 const blk=fin(t,T.blk,.5);
 thinkingPill(x,t,SX+60+165,SY+46,col,1-blk);
 if(blk>0){x.save();x.globalAlpha*=blk;lines(x,SX,SY+36,8,'#9C90B8',1,34);x.restore()}}
function chatNow(x,t,T,col){chatBox(x,col);
 const a=fin(t,T.p1,.5);
 if(a>0){x.save();x.globalAlpha*=a;txt(x,'FIRST PART',SX+36,SY+40,44,AMB,'left');x.restore()}
 lines(x,SX,SY+76,3,'#9C90B8',seg(t,T.p1+.3,T.p1+1.1),34);
 if(T.p2!==undefined)lines(x,SX,SY+76+3*28+4,3,'#B8CFEA',seg(t,T.p2,T.p2+.9),34);
 thinkingPill(x,t,SX+36+165,SY+SH-40,col,1)}

// ---------- shots ----------
function shot1(t,cam){const x=layer('board',cam),T=ST(1);
 scene(x,t,cam,{chef:'now',bub:'dots',hands:{r:[150,0]},mouth:.2,brow:-.2,hold:(x,hw)=>watch(x,hw[0]+8,hw[1]-40,.75,t)});
 chefTag(x,'GPT-6 · IN CHATGPT',AMB);
 plateBase(x,SLOT[0],PY,1.1);
 const b=fin(t,T+.35,.6);
 if(b>0)withIn(x,420,600,b,()=>{x.save();x.lineJoin='round';const S='SMARTER = LONGER WAIT?',w=tw(x,S,44)+84;x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;
   for(const [qx,qy,r] of [[240,745,12],[264,708,17],[292,672,24]]){x.beginPath();x.arc(qx,qy,r,0,7);x.fill();x.stroke()}
   x.beginPath();x.roundRect(480-w/2,540,w,130,65);x.fill();x.stroke();x.restore();txt(x,S,480,606,44,DARK,'center')});
 comp([['board',0]])}
function shot2(t,cam){const x=layer('board',cam),T=ST(2);
 scene(x,t,cam,{chef:'now',bub:'cog',mouth:.8,brow:.3});
 chefTag(x,'GPT-6 · IN CHATGPT',AMB);
 plateBase(x,SLOT[0],PY,1.1);
 const px=slideX(t,T+.3,1.0,SRC,SLOT[0]);const pl=seg(t,T+.3,T+1.3);
 if(pl<1)plateBase(x,px,PY,1.1);
 textCard(x,px,PY-8,.9,3);
 lab(x,['CAN ANSWER','WHILE IT THINKS'],490,560,44,'#BFF2EE',{bg:'rgba(14,74,80,.95)',a:fin(t,T+1.0,.6),free:true});
 comp([['board',0]])}
function shot3(t,cam){const x=layer('board',cam),T=ST(3);
 scene(x,t,cam,{chef:'now',hands:{r:[170,-20]},mouth:.8,hold:(x,hw)=>{
   const c=fin(t,T+.2,.6);pop(x,hw[0]+183,hw[1]-136,c,()=>{ticket(x,hw[0]+183,hw[1]-136,1,'#FFFFFF',.05,{w:440,h:270,lines:['OUR EXAMPLE:','ONE WEB-SEARCH','QUESTION'],sz:44});
     x.save();x.translate(hw[0]-50,hw[1]-236);x.strokeStyle=INKC;x.lineWidth=12;x.beginPath();x.arc(0,0,32,0,7);x.fillStyle='rgba(191,242,238,.5)';x.fill();x.stroke();x.beginPath();x.moveTo(-24,-24);x.lineTo(-58,-60);x.stroke();x.restore()},.7)}});
 lab(x,['OUR EXAMPLE ·','NOT OPENAI\'S SECONDS'],490,CT+72,44,CREAM,{a:fin(t,T+.9,.6)});
 comp([['board',0]])}
const TB={blk:0},TN={p1:0};
function shot4(t,cam){const x=layer('board',cam),T=ST(4);
 scene(x,t,cam,{chef:'before',bub:t<T+1.2?'dots':'cog',mouth:.3});
 chefTag(x,'GPT-5.6 INSTANT',mixC(CREAM,'#8FB0B2',.3),fin(t,T+.1,.5));
 plateBase(x,SLOT[0],PY,1.1);
 chatBefore(x,t,{blk:T+99},AMB);
 comp([['board',0]])}
function shot5(t,cam){const x=layer('board',cam),T=ST(5);
 scene(x,t,cam,{chef:'before',bub:'cog',mouth:.4});
 chefTag(x,'GPT-5.6 INSTANT',mixC(CREAM,'#8FB0B2',.3));
 const T10=T+1.3; /* the meter reaches 10 first, only then the platter slides out */
 plateBase(x,SLOT[0],PY,1.1);
 const px=slideX(t,T10+.3,1.0,SRC,SLOT[1]);
 if(t>T10)platter(x,px,PY,1);
 chatBefore(x,t,{blk:T10+.9},AMB);
 lab(x,['ONE BLOCK','OF TEXT'],480,745,44,AMB,{a:fin(t,T10+1.0,.6),free:true});
 comp([['board',0]])}
const T6=()=>ST(6);
function shot6(t,cam){const x=layer('board',cam),T=ST(6);
 const land=T+1.6;
 scene(x,t,cam,{chef:'now',bub:'cog',mouth:.7,brow:.3});
 chefTag(x,'GPT-6 · IN CHATGPT',AMB);
 plateBase(x,SLOT[0],PY,1.1);
 const px=slideX(t,T+.6,1.0,SRC,SLOT[0]);
 if(t>T+.6)textCard(x,px,PY-8,.9,3);
 chatNow(x,t,{p1:land-.2},TEAL);
 lab(x,['FIRST PART:','WHAT IT HAS','SO FAR'],490,735,44,CREAM,{a:fin(t,T+.3,.6),free:true});
 comp([['board',0]])}
function shot7(t,cam){const x=layer('board',cam),T=ST(7);
 scene(x,t,cam,{chef:'now',bub:'cog',mouth:.7,brow:.3});
 plateBase(x,SLOT[0],PY,1.0);textCard(x,SLOT[0],PY-8,.8,3);
 const a1=T+.55,a2=T+1.55,a3=T+2.45;
 const p2=slideX(t,a1,.8,SRC,SLOT[1]),p3=slideX(t,a2,.8,SRC,SLOT[2]);
 if(t>a1){plateBase(x,p2,PY,1.0);textCard(x,p2,PY-8,.8,3,'#EAF2FF')}
 if(t>a2){plateBase(x,p3,PY,1.0);chartCard(x,p3,PY-8,.8)}
 const p4=slideX(t,a3,.8,SRC,SLOT[3]);
 if(t>a3){plateBase(x,p4,PY,1.0);calcProp(x,p4,PY-8,.8,Math.floor(seg(t,a3+.8,a3+1.5)*9.99));}
 const l1=fin(t,a1+.5,.5)*(1-fin(t,a2,.5)),l2=fin(t,a2+.6,.5)*(1-fin(t,a3,.5)),l3=fin(t,a3+.7,.5);
 lab(x,'NEXT PART',440,760,44,CREAM,{a:l1,free:true});lab(x,'CHART',440,760,44,CREAM,{a:l2,free:true});lab(x,'CALCULATOR',440,760,44,CREAM,{a:l3,free:true});
 lab(x,['WHEN IT FITS','YOUR QUESTION'],490,CT+96,44,MINT,{a:fin(t,T+.9,.6),bg:'rgba(14,74,80,.95)'});
 chatNow(x,t,{p1:-9,p2:T+1.2},TEAL);
 comp([['board',0]])}
function shot8(t,cam){const x=layer('board',cam),T=ST(8);bgRest(x,.3,540,640);
 const bx=SX,by=330,bw=SW,bh=640;
 rr(x,bx,by,bw,bh,28,'rgba(27,20,48,.96)',TEAL,6);
 txt(x,'FIRST PART',bx+36,by+44,44,AMB,'left');lines(x,bx,by+84,3,'#9C90B8',1,34);
 lines(x,bx,by+84+3*34+10,3,'#B8CFEA',1,34);
 chartCard(x,bx+230,by+520,1.8);calcProp(x,bx+520,by+530,1.7,9);
 const br=fin(t,T+.5,.6);
 if(br>0){x.save();x.globalAlpha*=br;x.strokeStyle=AMB;x.lineWidth=9;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(bx+bw-30,by+14);x.lineTo(bx+bw-14,by+14);x.lineTo(bx+bw-14,by+bh-14);x.lineTo(bx+bw-30,by+bh-14);x.stroke();x.restore()}
 thinkingPill(x,t,bx+36+165,by+bh-46,TEAL,1);
 lab(x,['ONE ANSWER, AS FACTUAL','AS ONE WRITTEN','AT ONCE (OPENAI)'],490,1090,44,CREAM,{a:fin(t,T+.6,.6)});
 comp([['board',0]])}
function card(x,cx,top,w,h,col,name,hpk,now,t){rr(x,cx-w/2,top,w,h,28,PANEL,col,6);
 const bot=top+310;x.save();x.beginPath();x.roundRect(cx-w/2,top,w,h,28);x.clip();robot(x,cx,bot,.62,t,{body:now?CLB:CLD,hp:now?HP_T:HP_D,smile:now?30:6});x.fillStyle='#B0705A';x.fillRect(cx-w/2,bot,w,40);x.restore();
 lab(x,name,cx,top+h-80,44,now?AMB:'#CFE3E3',{free:true,bg:'rgba(18,10,28,.92)',line:col})}
function shot9(t,cam){const x=layer('board',cam),T=ST(9);bgRest(x,.3,540,640);
 const a=.02+.98*fin(t,T,.5),b=.02+.98*fin(t,T+.7,.5);
 pop(x,300,620,a,()=>card(x,300,420,350,460,TEAL,['GPT-6','INSTANT'],0,true,t),.8);
 pop(x,680,620,b,()=>card(x,680,420,350,460,'#8FB0B2',['GPT-5.6','INSTANT'],0,false,t),.8);
 lab(x,'WEB-SEARCH QUESTIONS',490,990,44,MINT,{a:fin(t,T+2.2,.6),bg:'rgba(14,74,80,.95)'});
 lab(x,'OPENAI',490,1100,44,AMB,{a:fin(t,T+1.5,.6)});
 comp([['board',0]])}
function shot10(t,cam){const x=layer('board',cam),T=ST(10);bgRest(x,.3,540,640);
 const L=SX+12,full=730,short=full*.56;
 txt(x,'TIME UNTIL IT STARTS',490,360,44,CREAM,'center');txt(x,'ANSWERING',490,414,44,CREAM,'center');
 const g1=ease(seg(t,T+.1,T+.8)),g2=ease(seg(t,T+.5,T+1.2));
 txt(x,'GPT-5.6 INSTANT',L,500,44,'#CFE3E3','left');rr(x,L,530,full,80,16,'#241A3C',INKC,5);if(g1>0)rr(x,L,530,full*g1,80,16,'#8FB0B2',INKC,5);
 txt(x,'GPT-6 INSTANT',L,690,44,MINT,'left');rr(x,L,720,full,80,16,'#241A3C',INKC,5);if(g2>0)rr(x,L,720,short*g2,80,16,TEAL,INKC,5);
 const f=fin(t,T+1.0,.6);
 if(f>0){x.save();x.globalAlpha*=f;x.fillStyle='rgba(255,198,110,.25)';x.fillRect(L+short,720,full-short,80);x.strokeStyle=AMB;x.lineWidth=8;x.lineCap='round';x.beginPath();x.moveTo(L+full,860);x.lineTo(L+short,860);x.moveTo(L+short+22,838);x.lineTo(L+short,860);x.lineTo(L+short+22,882);x.stroke();x.restore()}
 if(f>0)withIn(x,490,960,f,()=>{imp(x,'44% SOONER',490,950,108,AMB);txt(x,'ON AVERAGE',490,1036,44,CREAM,'center')});
 lab(x,['WEB-SEARCH QUESTIONS','(OPENAI)'],490,1165,44,MINT,{a:fin(t,T+.4,.6),bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}
function cells(x,l,tp,w,h,v,col){for(let i=0;i<10;i++){const cl=l+i*(w/10),f=clamp(v-i);rr(x,cl+3,tp,w/10-6,h,8,'#241A3C',INKC,4);if(f>.01){x.save();x.beginPath();x.roundRect(cl+3,tp,w/10-6,h,8);x.clip();x.fillStyle=col;x.fillRect(cl+3,tp+h*(1-f),w/10-6,h*f);x.restore()}}}
function shot11(t,cam){const x=layer('board',cam),T=ST(11);bgRest(x,.3,540,640);
 const row=(top,name,col,tcol,v,big,a)=>withIn(x,490,top+90,a,()=>{txt(x,name,SX+16,top,44,tcol,'left');cells(x,SX+10,top+44,560,90,v,col);imp(x,big,SX+10+560+(SW-570)/2,top+90,110,col)});
 row(380,'BEFORE · GPT-5.6 INSTANT',AMB,AMB,10*ease(seg(t,T+.05,T+.6)),seg(t,T+.6,T+.65)>=1?'10':'',1);
 row(640,'NOW · GPT-6 INSTANT',TEAL,MINT,6*ease(seg(t,T+.5,T+1.0)),seg(t,T+1.0,T+1.05)>=1?'6':'',1);
 lab(x,['SECONDS UNTIL IT STARTS','ANSWERING · OUR EXAMPLE'],490,960,44,CREAM,{a:fin(t,T+.3,.6)});
 lab(x,'WEB-SEARCH QUESTION',490,1110,44,MINT,{a:fin(t,T+.6,.6),bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}
function lane(x,l,y,w,name,col,tcol,len,flagL,open,a){ /* a lane: name above, a thinking bar, a flag */
 withIn(x,490,y,a,()=>{txt(x,name,l,y+70,44,tcol,'left');rr(x,l,y-30,w,60,14,'#241A3C',INKC,4);if(len>1)rr(x,l,y-30,len,60,14,col,INKC,5);
  if(open&&len>1){x.save();x.fillStyle=col;x.beginPath();x.moveTo(l+len-4,y-30);x.lineTo(l+len+34,y);x.lineTo(l+len-4,y+30);x.closePath();x.fill();x.restore()}
  if(flagL!==null&&flagL>1){const fx=l+flagL;x.save();x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.moveTo(fx,y+30);x.lineTo(fx,y-70);x.stroke();x.fillStyle=RED;x.beginPath();x.moveTo(fx,y-70);x.lineTo(fx+54,y-52);x.lineTo(fx,y-34);x.closePath();x.fill();x.stroke();x.restore()}})}
function shot12(t,cam){const x=layer('board',cam),T=ST(12);bgRest(x,.3,540,640);
 txt(x,'BEFORE: MORE THINKING',490,370,44,AMB,'center');txt(x,'= LATER START',490,424,44,AMB,'center');
 const a=1,b=1,L=SX+10;
 const g1=ease(seg(t,T+.2,T+.8)),g2=ease(seg(t,T+.5,T+1.5));
 lane(x,L,640,700,'LESS THINKING',AMB,CREAM,220*g1,220*g1,false,a);
 lane(x,L,920,700,'MORE THINKING',AMB,CREAM,620*g2,620*g2,false,b);
 comp([['board',0]])}
function shot13(t,cam){const x=layer('board',cam),T=ST(13);bgRest(x,.3,540,640);
 const L=SX+10,a=1,b=1,g1=ease(seg(t,T+.3,T+1.0));
 lane(x,L,520,700,'GPT-5.6 · MEDIUM THINKING','#8FB0B2','#CFE3E3',220*g1,220*g1,false,a);
 lane(x,L,840,700,'GPT-6 · EXTRA HIGH THINKING',TEAL,MINT,0,null,false,b);
 lab(x,['OPENAI\'S INTERNAL TEST:','EVERYDAY AGENT TASKS'],490,1060,44,MINT,{a:fin(t,T+.7,.6),bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}
function shot14(t,cam){const x=layer('board',cam),T=ST(14);bgRest(x,.3,540,640);
 const L=SX+10,g2=ease(seg(t,T+.2,T+3.6)),fl=220*ease(seg(t,T+.6,T+1.2));
 lane(x,L,520,700,'GPT-5.6 · MEDIUM THINKING','#8FB0B2','#CFE3E3',220,220,false,1);
 lane(x,L,840,700,'GPT-6 · EXTRA HIGH THINKING',TEAL,MINT,lerp(0,600,g2),fl,true,1);
 const m=fin(t,T+1.3,.6);
 if(m>0){x.save();x.globalAlpha*=m;x.strokeStyle=AMB;x.lineWidth=7;x.lineCap='round';x.beginPath();x.moveTo(L+220,640);x.lineTo(L+220,810);x.stroke();x.restore();imp(x,'SAME START',490,705,96,AMB,'center')}
 lab(x,['OPENAI\'S INTERNAL TEST:','EVERYDAY AGENT TASKS'],490,1060,44,MINT,{a:1,bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}
// ---------- WHAT WE LEARNED (shots 15, 16, 17) ----------
const P1=445,PH=410,P2=885;
function mini(x,t,top,now,stage){ /* panel contents: same state as shot 5 (BEFORE) or shot 7 (NOW) */
 x.save();x.beginPath();x.roundRect(SX,top,SW,PH,28);x.clip();
 robot(x,730,top+280,.38,t,{body:now?CLB:CLD,hp:now?HP_T:HP_D,smile:now?30:6});
 mascot(x,t,null,{x:230,y:top+210,s:.42,hands:{r:[200,56]},showH:{r:1},look:.5,rep:false});
 x.fillStyle='#B0705A';x.fillRect(SX,top+290,SW,12);x.fillStyle='#7A4038';x.fillRect(SX,top+302,SW,30);
 if(now){for(const px of [380,470])plateBase(x,px,top+298,.7);textCard(x,380,top+292,.55,3);textCard(x,470,top+292,.55,3,'#EAF2FF');
  const q=fin(t,stage,.8);if(q>0)chartCard(x,lerp(640,560,q),top+292,.5);
  thinkBubble(x,t,620,top+150,690,top+210,'cog',TEAL)}
 else{plateBase(x,380,top+298,.7);platter(x,430,top+298,.62)}
 x.restore();
 cells(x,SX+30,top+PH-84,520,54,now?6:10,now?TEAL:AMB);imp(x,now?'6':'10',SX+30+520+90,top+PH-57,80,now?TEAL:AMB)}
function panel(x,top,col,name,a,fn){pop(x,490,top+PH/2,a,()=>{rr(x,SX,top,SW,PH,28,mixC('#2A1F42','#46356F',.5+.5*Math.sin(t_g*7)),col,6);fn();pill(x,SX+30+(tw(x,name,44)+50)/2,top+4,tw(x,name,44)+50,62,col);txt(x,name,SX+55,top+6,44,DARK,'left')},.8)}
function learnedBox(x,a){x.save();x.translate(490,330);const k=.88+.12*a;x.scale(k,k);x.globalAlpha*=a;const S='WHAT WE LEARNED',fs=64,w=impW(x,S,fs)+100;rr(x,-w/2,-55,w,110,40,PANEL,AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}
const WWL_LAB=['SECONDS UNTIL IT STARTS','ANSWERING · OUR EXAMPLE'];
function beforePanel(x,t,a){panel(x,P1,AMB,'BEFORE',a,()=>{mini(x,t,P1,false);lab(x,'GPT-5.6 INSTANT',390,P1+98,44,'#CFE3E3',{free:true,bg:'rgba(18,10,28,.92)'})})}
function shot15(t,cam){const x=layer('board',cam),T=ST(15);
 scene(x,t,cam,{chef:'now',mouth:.9,brow:.3,smile:30});
 learnedBox(x,fin(t,T+.1,.6));
 comp([['board',0]])}
function shot16(t,cam){const x=layer('board',cam),T=ST(16);bgRest(x,.25,540,640);
 learnedBox(x,1);
 beforePanel(x,t,ease(seg(t,T+.1,T+.7)));
 lab(x,WWL_LAB,490,1395,44,[CREAM,AMB],{});
 comp([['board',0]])}
function shot17(t,cam){const x=layer('board',cam),T=ST(17);bgRest(x,.25,540,640);
 learnedBox(x,1);
 beforePanel(x,t,1);
 panel(x,P2,TEAL,'NOW',ease(seg(t,T+.1,T+.8)),()=>{mini(x,t,P2,true,T+.9);lab(x,'GPT-6 INSTANT',340,P2+98,44,MINT,{free:true,bg:'rgba(18,10,28,.92)'})});
 lab(x,WWL_LAB,490,1395,44,[CREAM,AMB],{});
 comp([['board',0]])}
// ---------- the mascot big (shot 18) ----------
function shot18(t,cam){const x=layer('board',cam),T=ST(18);bgRest(x,.35,540,560);
 const w=ease(seg(t,T+.2,T+.8)),wv=Math.sin((t-T)*9);const hr=[lerp(97,170+wv*12,w),lerp(220,-30+wv*36,w)];
 mascot(x,t,cam,{x:480,y:560,s:1.15,hands:{r:hr},showH:{r:w>.02?1:0},look:.05,lookY:0,brow:.45,mouth:.95});
 comp([['board',0]]);
 const c=fin(t,T+.9,.55),pulse=1+.03*Math.sin((t-T-.9)*7);
 if(c>0){ctx.save();ctx.translate(490,1170);const sc=lerp(.7,1,c)*pulse;ctx.scale(sc,sc);ctx.globalAlpha=c;ctx.fillStyle=INKC;ctx.beginPath();ctx.roundRect(-330,-90,660,180,90);ctx.fill();pill(ctx,0,0,640,160,RED);ctx.fillStyle=CREAM;ctx.beginPath();ctx.moveTo(-250,-40);ctx.lineTo(-250,40);ctx.lineTo(-186,0);ctx.closePath();ctx.fill();txt(ctx,'Subscribe',50,5,84,CREAM,'center','800');ctx.restore()}
 const C0=T+1.7,cc=fin(t,C0,.55),pu=1+.03*Math.sin((t-C0)*7);
 if(cc>0){const S='COMMENT: WHAT NEXT?',fs=46,w2=Math.min(780,tw(ctx,S,fs)+110),h=150;ctx.save();ctx.translate(490,1380);const k=lerp(.7,1,cc)*pu;ctx.scale(k,k);ctx.globalAlpha=cc;
  ctx.lineJoin='round';ctx.fillStyle=AMB;ctx.strokeStyle=INKC;ctx.lineWidth=8;ctx.beginPath();ctx.roundRect(-w2/2,-h/2,w2,h,h/2);ctx.fill();ctx.stroke();
  txt(ctx,S,0,4,fs,DARK,'center');ctx.restore()}}

// ---------- the meter "SECONDS UNTIL IT STARTS ANSWERING" with "OUR EXAMPLE": screen space, cells 0-10, shots 3-8 ----------
const M_L=70,M_T=1228,M_W=840,M_H=304;
function dsp(v){if(v>=9.97)return '10';if(Math.abs(v-6)<.03)return '6';return ''}
function meterBox(x,v,col,a=1){if(a<=0)return;const l=M_L,tp=M_T,w=M_W,h=M_H;x.save();x.globalAlpha*=a;const cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,28,'rgba(27,20,48,.95)',col,6);
 txt(x,'SECONDS UNTIL IT STARTS',l+w/2,tp+38,44,CREAM,'center','900');{const a1='ANSWERING',a2=' · OUR EXAMPLE',w1=tw(x,a1,44),w2=tw(x,a2,44),x0=l+w/2-(w1+w2)/2;txt(x,a1,x0,tp+92,44,CREAM,'left');txt(x,a2,x0+w1,tp+92,44,AMB,'left')}
 cells(x,l+30,tp+142,560,110,v,col);
 const d=dsp(v);if(d)imp(x,d,l+30+560+(w-30-560-30)/2,tp+197,120,col);
 x.restore()}
const T10=()=>ST(5)+1.3;
function meterVal(t,sh){
 if(sh<=3)return 0;
 if(sh==4)return 10*ease(seg(t,ST(4)+.3,T10())); /* BEFORE fills to 10 across shots 4-5 */
 if(sh==5)return 10*ease(seg(t,ST(4)+.3,T10()));
 if(sh>=6){const T=ST(6);return kf(t,[[T,10],[T+.6,0],[T+2.0,6],[999,6]])}
 return 0}
function meterCol(t,sh){return sh<=5?AMB:mixC(AMB,TEAL,seg(t,ST(6),ST(6)+.6))}
function meterOverlay(t,sh){if(!(sh>=3&&sh<=8))return;const a=sh==3?fin(t,ST(3)+.3,.6):1;meterBox(ctx,sh==8?6:meterVal(t,sh),meterCol(t,sh),a)}
// ---------- words on screen (screen space) ----------
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 44px Arial';const S='GPT-6',tw_=x.measureText(S).width,dw=x.measureText(' ·').width;const L0=60,w=26+tw_+dw+18+130+22,cy=134;pill(x,L0+w/2,cy,w,68,'rgba(27,20,48,.92)');
  txt(x,S,L0+26,cy+2,44,AMB,'left','800');txt(x,' ·',L0+26+tw_,cy+2,44,CREAM,'left','800');pill(x,L0+26+tw_+dw+18+65,cy,130,56,RED);txt(x,'60s',L0+26+tw_+dw+18+65,cy+2,44,'#FFF6E6','center','800');x.restore()}
function tab(t,a,b,lab_,col){const v=fin(t,a,.5)*(1-fin(t,b,.5));if(v<=0)return;const x=ctx;x.save();x.font='900 44px Arial';const w=x.measureText(lab_).width+60;x.restore();const cy=134,L0=420;x.save();x.translate(L0+w/2,cy);x.scale(.9+.1*v,.9+.1*v);x.translate(-L0-w/2,-cy);pill(x,L0+w/2,cy,w,66,col,v);txt(x,lab_,L0+w/2,cy+2,44,DARK,'center','900',v);x.restore()}
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
 x.font=font(100);const s1=100*740/x.measureText('GPT-6').width;x.font=font(100);const s2=100*740/x.measureText('IN CHATGPT').width;
 put('LEARN',490,560,130,CREAM);put('GPT-6',490,560+s1*.78,s1,AMB);put('IN CHATGPT',490,560+s1*.78+s2*1.05,s2,CREAM);
 x.save();x.translate(490,1400);x.rotate(-.035);sticker(x,96);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
function takeaway(t){const T=ST(17)+1.8,v=fin(t,T,.6);if(v<=0)return;const x=ctx;x.save();x.globalAlpha=.8*v;x.fillStyle='#0C0614';x.fillRect(0,0,W,H);x.restore();
 const wrap=(s,fs,maxW)=>{const ws=s.split(' '),ls=[];let cur='';for(const w of ws){const n=cur?cur+' '+w:w;if(tw(x,n,fs)>maxW&&cur){ls.push(cur);cur=w}else cur=n}ls.push(cur);return ls};
 const fs=46,L1=wrap('OUR EXAMPLE (OPENAI GIVES ONLY A PERCENTAGE), WEB SEARCH, GPT-5.6 INSTANT: 10\u00a0S TILL IT STARTS',fs,700),L2=wrap('NOW, GPT-6 INSTANT: ABOUT 6\u00a0S, PARTS KEEP COMING',fs,700);
 const lh=fs*1.3,h=(L1.length+L2.length)*lh+110,cy=800;x.save();x.translate(490,cy);const k=.92+.08*v;x.scale(k,k);x.globalAlpha=v;
 rr(x,-400,-h/2,800,h,40,'rgba(27,20,48,.97)',AMB,6);
 L1.forEach((s,i)=>txt(x,s,0,-h/2+55+lh/2+i*lh,fs,CREAM,'center'));L2.forEach((s,i)=>txt(x,s,0,-h/2+55+lh/2+(L1.length*lh+24)+i*lh,fs,AMB,'center','900',fin(t,T+1.0,.4)));x.restore()}
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(4)+.05,out(6),'BEFORE',AMB);tab(t,ST(6)+.05,out(9),'NOW · GPT-6',TEAL);
 if(sh==17)takeaway(t)}

// ---------- cameras: a linear push on the whole board ----------
const push=(a=1,b=1.1)=>u=>({x:540,y:960,z:lerp(a,b,u),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:18},()=>push(1,1.1)));
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{[null,shot1,shot2,shot3,shot4,shot5,shot6,shot7,shot8,shot9,shot10,shot11,shot12,shot13,shot14,shot15,shot16,shot17,shot18][s](o,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a full brush on every cut, pops on cards and labels ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),'cut');
for(const t of [ST(1)+.35,ST(2)+1.0,ST(3)+.2,ST(3)+.9,ST(4)+.1,ST(5)+2.4,ST(6)+.4,ST(6)+1.6,ST(7)+1.0,ST(8)+.5,ST(8)+.6,ST(9)+.2,ST(9)+.9,ST(9)+1.5,ST(9)+2.2,ST(10)+1.0,ST(10)+.4,ST(11)+.1,ST(11)+.5,ST(11)+1.0,ST(12)+.1,ST(12)+.5,ST(13)+.1,ST(13)+.5,ST(14)+1.3,ST(15)+.1,ST(16)+.1,ST(16)+.3,ST(17)+.1,ST(17)+1.8,ST(18)+.9,ST(18)+1.7])say(t,'tick');
for(const t of [ST(2)+.5,ST(5)+1.6,ST(6)+.6,ST(7)+.55,ST(7)+1.55,ST(7)+2.45])say(t,'slide');
for(const t of [ST(5)+2.2,ST(6)+1.6,ST(7)+1.3])say(t,'paper');
for(const t of [ST(2)+1.5,ST(6)+1.6,ST(7)+1.35,ST(7)+2.35,ST(7)+3.25])say(t,'stamp');
