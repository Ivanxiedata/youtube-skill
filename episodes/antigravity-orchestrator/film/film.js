// Episode: Antigravity Orchestrator, told as a building site. You (the mascot, yellow hard hat) have one coding task of 10 steps (our example): a wall of 10 brick slots.
// The AI models are robots with teal screen heads: Gemini 4 Carbon = the big architect, Gemini 4 Hydrogen = the small fast builder, "one cheap model" = a small grey robot. Vertical 1080x1920.
// BEFORE: Carbon lays all 10 bricks (meter STEPS ON CARBON to 10, amber); or one cheap model lays 5 and stops at the harder step.
// NOW: Carbon draws the plan (slot 1), Hydrogen lays 2-5 (EDIT, TEST), a test fails twice, Hydrogen hands back, Carbon fixes the plan (slot 6), Hydrogen lays 7-10: meter 2 (teal).
// 23 shots (0-22): beats.md's 20 shots, with 4 split at measured pauses (hook 3 -> 4 shots; "Now Orchestrator" 2 -> 3; proof 3 -> 3 re-cut; the ask 1 -> 2). Voice laid in at VOICE_AT (audio_mix.py): film time = voice time + .5.
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random; figures never fade on alpha (L44); every label >= 28 px, text >= 44 px where it fits.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',NEU='#8A7AA8',DARK='#1B1430',PANEL='#2A1F42',YEL='#FFD23F',PLAN='#3D6FB6',TEALB='#BFF2EE';
function txt(x,s,X,Y,size,col,al='left',wt='900',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function tw(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
/* alpha + scale for single-shape labels only (never a figure, L44) */
function withIn(x,cx,cy,a,fn,s0=.92){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
/* no alpha: a figure or multi-part prop comes in by scale (pop) (L44) */
function pop(x,cx,cy,a,fn,s0=.55){if(a<=0)return;x.save();const k=s0+(1-s0)*ease(a);x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);fn();x.restore()}
function ring(x,l,t,w,h,col,a,lw=8,r=24){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=col;x.lineWidth=lw;x.beginPath();x.roundRect(l,t,w,h,r);x.stroke();x.restore()}
function fitSz(x,s,maxW,size,min=34){let z=size;while(z>min&&tw(x,s,z)>maxW)z-=2;return z}
/* a label: dark pill with 1-3 lines, sized to fit maxW (never under min px), kept inside x 112-878 (the camera push to 1.1 stays inside the safe area) */
function lab(x,lines,cx,cy,size,col,o={}){if(typeof lines=='string')lines=[lines];const maxW=o.maxW||700,min=o.min||36;const z=Math.min(...lines.map(s=>fitSz(x,s,maxW,size,min)));
 const w=Math.max(...lines.map(s=>tw(x,s,z)))+52,lh=z*1.25,h=lh*lines.length+22;let X=cx;if(!o.free){X=clamp(cx,112+w/2,878-w/2)}
 const a=o.a===undefined?1:o.a;withIn(x,X,cy,a,()=>{rr(x,X-w/2,cy-h/2,w,h,22,o.bg||'rgba(18,10,28,.9)',o.line||null,o.lw||4);lines.forEach((s,i)=>txt(x,s,X,cy-(lines.length-1)*lh/2+i*lh+2,z,Array.isArray(col)?col[i]:col,'center'))},o.s0===undefined?.92:o.s0);return {w,h,X,z}}

/* THE CLOCK: cut times of the 23 shots (film seconds) = voice time + .5, from vo_lines.json and the silences measured in vo.wav (see progress/mistakes).
   0|1 the weak dip 1.90-1.97 after "Orchestrator:" (1.935); 1|2 the pause 3.27-3.56 after "step?"; 2|3 5.25-5.48 after "review:"; 3|4 the line gap; 5|6 13.35-13.61 after "ten:";
   8|9 21.49-21.81 after "example:"; 9|10 23.12-23.34 after "model,"; 11|12 26.99-27.11; 13|14 the dip at 30.5 between "twice:" and "Hydrogen"; 16|17 39.02-39.26 after "results,";
   19|20 47.45-47.62 after "ten;"; 21|22 53.11-53.30 after "Subscribe,". */
const TS=[0,2.435,3.915,5.86,8.90,12.23,13.98,16.00,19.39,22.15,23.73,25.775,27.55,29.195,31.0,34.21,37.96,39.64,41.97,44.785,48.03,51.478,53.7];
const DUR=57.4;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30,out=i=>ST(i)-.5,Dn=i=>ST(i+1)-ST(i);
const CXM=495; /* the centre of the safe area's drawing column */

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const CLH={skin:'#2B8791',cloth:'#4FB3BF',hood:'#2B8791',hand:'#E8FBFA',face:'#16243C',leg:'#2B8791',shoe:'#17141F',finger:'#16243C'};
const CLD={skin:'#4F6468',cloth:'#6A7E82',hood:'#3A4C50',hand:'#B8CCCE',face:'#16243C',leg:'#3A4C50',shoe:'#17141F',finger:'#16243C'};
const HP_T={frame:'#187E86',ear:'#0E4A50',s1:'#46D0CB',s2:TEAL,face:'#0B3A40'};
const HP_H={frame:'#2B8791',ear:'#0E4A50',s1:'#8FF0EA',s2:'#3CC6C0',face:'#0B3A40'};
const HP_D={frame:'#4F6468',ear:'#36494C',s1:'#8FB0B2',s2:'#6E9194',face:'#2A3A3C'};
const BL=[1.1,3.1,4.9,7.3,9.9,12.9,15.2,17.9,20.6,24.1,26.5,30.3,33.0,35.4,38.5,41.4,45.4,49.8,52.6,55.1];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: a yellow builder's hard hat, drawn after the figure in head space (brim over the forehead, above the brows) */
function hardHat(x,p){x.save();headT(x,p);x.lineJoin='round';
 x.fillStyle=YEL;x.strokeStyle=INKC;x.lineWidth=6;x.beginPath();x.moveTo(-100,-54);x.bezierCurveTo(-106,-150,-60,-190,0,-190);x.bezierCurveTo(60,-190,106,-150,100,-54);x.closePath();x.fill();x.stroke();
 rr(x,-16,-186,32,128,10,'#F2B705',INKC,5);rr(x,-128,-66,256,30,15,YEL,INKC,6);x.restore()}
function mascot(x,t,cam,o){const p={x:o.x,y:o.y,s:o.s||.72,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.4:o.look,lookY:o.lookY===undefined?.1:o.lookY,brow:o.brow===undefined?.2:o.brow,mouth:o.mouth===undefined?.6:o.mouth,mouthW:28,tilt:o.tilt||0};
 if(o.rep!==false)actor(x,'hero',HERO,p,cam);else drawPerson(x,HERO,p);hardHat(x,p);return p}
function head(x,hp,o){ /* head-local screen head */
 x.fillStyle=hp.ear;x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,hp.frame,hp.ear,5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,hp.s1);g.addColorStop(1,hp.s2);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle=hp.face;for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle=hp.face;x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
/* a robot with a screen head; py = the rig's torso top (so that the torso bottom, py+249 s, sits under the floor slab) */
function robot(x,cx,py,s,t,o={}){const p={x:cx,y:py,s,face:1,breath:t*2.1+(o.ph||0),noLegs:true,noFace:true,hands:o.hands||{},showH:o.showH||{}};
 drawPerson(x,o.body||CLB,p);x.save();headT(x,p);head(x,o.hp||HP_T,{blink:blinkAt(t+.7+(o.ph||0),BL),smile:o.smile});x.restore();return p}
const FLS=750;                                     /* stage floor (the slab top) in the meter shots */
const pyF=(floor,s)=>floor+18-249*s;               /* torso top of a figure standing on a floor */
/* a hand target in rig units from a world point, kept inside the arm's reach (about 199 units from the shoulder; audit L52) */
function rig(py,cx,s,wx,wy,k='r'){const sh=[k=='l'?-73.5:73.5,34];let r=[(wx-cx)/s,(wy-py)/s];const d=Math.hypot(r[0]-sh[0],r[1]-sh[1]);if(d>185){r=[sh[0]+(r[0]-sh[0])*185/d,sh[1]+(r[1]-sh[1])*185/d]}return r}

// ---------- props ----------
function brickG(x,cx,cy,w,h,col,rot=0){x.save();x.translate(cx,cy);x.rotate(rot);rr(x,-w/2,-h/2,w,h,6,col,INKC,4);x.strokeStyle='rgba(18,10,28,.35)';x.lineWidth=3;x.beginPath();x.moveTo(-w/2+5,0);x.lineTo(w/2-5,0);x.moveTo(-w*.12,-h/2+4);x.lineTo(-w*.12,0);x.moveTo(w*.22,0);x.lineTo(w*.22,h/2-4);x.stroke();x.restore()}
function sheet(x,cx,cy,w,h,rot,label,fixd){x.save();x.translate(cx,cy);x.rotate(rot);rr(x,-w/2,-h/2,w,h,10,PLAN,CREAM,5);x.strokeStyle='rgba(248,233,204,.35)';x.lineWidth=2;x.beginPath();for(let i=1;i<5;i++){x.moveTo(-w/2+8,-h/2+i*h/5);x.lineTo(w/2-8,-h/2+i*h/5)}for(let i=1;i<4;i++){x.moveTo(-w/2+i*w/4,-h/2+8);x.lineTo(-w/2+i*w/4,h/2-8)}x.stroke();
 if(fixd>0){x.save();x.strokeStyle=AMB;x.lineWidth=7;x.lineCap='round';x.globalAlpha*=fixd;x.beginPath();x.moveTo(-w*.3,h*.22);x.lineTo(-w*.08,h*.34);x.lineTo(w*.3,h*.08);x.stroke();x.restore()}
 if(label)txt(x,label,0,-h*.2,34,CREAM,'center');x.restore()}
function clipboard(x,cx,cy,w,h,rot,label){x.save();x.translate(cx,cy);x.rotate(rot);rr(x,-w/2,-h/2,w,h,10,'#B98A4E',INKC,5);rr(x,-w/2+12,-h/2+30,w-24,h-44,6,CREAM,null);rr(x,-34,-h/2-6,68,26,8,'#8C8C9C',INKC,4);
 x.strokeStyle=TEAL;x.lineWidth=7;x.lineCap='round';x.lineJoin='round';for(let i=0;i<3;i++){const yy=-h/2+72+i*38;x.beginPath();x.moveTo(-w/2+24,yy);x.lineTo(-w/2+36,yy+12);x.lineTo(-w/2+58,yy-12);x.stroke();x.save();x.strokeStyle='#B8AACB';x.lineWidth=6;x.beginPath();x.moveTo(-w/2+72,yy);x.lineTo(w/2-24,yy);x.stroke();x.restore()}
 if(label)txt(x,label,0,-h/2+46,32,INKC,'center');x.restore()}
function scrollP(x,cx,cy,w,h,hl){x.save();rr(x,cx-w/2,cy-h/2,w,h,14,CREAM,INKC,5);x.strokeStyle='#8A7AA8';x.lineWidth=7;x.lineCap='round';for(let i=0;i<5;i++){const yy=cy-h/2+30+i*(h-50)/4,ww=(i%2?.45:.7)*w;x.beginPath();x.moveTo(cx-w/2+24+(i==2?26:0),yy);x.lineTo(cx-w/2+24+(i==2?26:0)+ww,yy);x.stroke()}
 if(hl>0){x.globalAlpha=.5;x.fillStyle=TEAL;x.fillRect(cx-w/2+10,cy-h/2+14+hl*(h-50),w-20,34)}x.restore()}
function speedL(x,cx,cy,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=TEALB;x.lineWidth=7;x.lineCap='round';for(let i=0;i<3;i++){x.beginPath();x.moveTo(cx,cy+i*26-26);x.lineTo(cx-70+i*10,cy+i*26-26);x.stroke()}x.restore()}
function xMark(x,cx,cy,r,a){if(a<=0)return;x.save();x.globalAlpha*=a;x.strokeStyle=RED;x.lineWidth=18;x.lineCap='round';x.beginPath();x.moveTo(cx-r,cy-r);x.lineTo(cx+r,cy+r);x.moveTo(cx+r,cy-r);x.lineTo(cx-r,cy+r);x.stroke();x.restore()}
function clockP(x,cx,cy,r,t){x.save();x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.arc(cx,cy,r,0,7);x.fill();x.stroke();x.strokeStyle=INKC;x.lineWidth=7;x.lineCap='round';
 for(let i=0;i<12;i++){const a=i*Math.PI/6;x.beginPath();x.moveTo(cx+Math.sin(a)*r*.82,cy-Math.cos(a)*r*.82);x.lineTo(cx+Math.sin(a)*r*.7,cy-Math.cos(a)*r*.7);x.stroke()}
 const a=t*5;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.sin(a)*r*.7,cy-Math.cos(a)*r*.7);x.stroke();x.strokeStyle=RED;x.lineWidth=5;x.beginPath();x.moveTo(cx,cy);x.lineTo(cx+Math.sin(a*.08)*r*.45,cy-Math.cos(a*.08)*r*.45);x.stroke();x.restore()}
function quotaBar(x,l,tp,w,h,v,a=1){x.save();x.globalAlpha*=a;rr(x,l,tp,w,h,h/2,'#241A3C',INKC,6);const ww=Math.max(h,(w-8)*v);rr(x,l+4,tp+4,ww,h-8,(h-8)/2,mixC(AMB,RED,1-v),null);x.restore()}

// ---------- the world ----------
function bgDusk(x,warm=.3,cx=540,cy=700){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(1,'#2A1C46');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(255,226,190,.05)';for(let i=0;i<8;i++)x.fillRect(-900,330+i*150,W+1800,4)}
function slab(x,top,thick=36){x.fillStyle='#6B4C8F';x.fillRect(-900,top,W+1800,thick);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,top,W+1800,5);x.fillStyle='#3E2C66';x.fillRect(-900,top+thick,W+1800,60)}
function arrowL(x,X0,X1,Y,col,prog){if(prog<=0)return;const xe=lerp(X0,X1,prog);x.save();x.strokeStyle=col;x.fillStyle=col;x.lineWidth=14;x.lineCap='round';x.beginPath();x.moveTo(X0,Y);x.lineTo(xe+(X0>X1?20:-20),Y);x.stroke();const d=X0>X1?-1:1;x.beginPath();x.moveTo(xe,Y);x.lineTo(xe-d*38,Y-28);x.lineTo(xe-d*38,Y+28);x.closePath();x.fill();x.restore()}

// ---------- the wall: 10 numbered brick slots in two rows of five (the 10 steps of our example) ----------
const SW=132,SHT=118,SGX=14,WRG=12,WL=(W-5*SW-4*SGX)/2-45,WT=828; /* slot geometry; panel y 830-1120 */
const slotXY=i=>{const r=Math.floor(i/5),c=i%5;return [WL+c*(SW+SGX)+SW/2,WT+r*(SHT+WRG)+SHT/2]};
function wallPanel(x,l=WL-24,tp=810,w=5*SW+4*SGX+48,h=290){rr(x,l,tp,w,h,26,'#2A1F42','#46356F',5)}
/* a slot: s = {f fill 0-1, c colour, tag, ring colour, ringA, plan}. Empty: a big number; filled: the brick with a small number */
function drawSlot(x,i,s,sc=1,cxo=null,cyo=null,mini=false){const [cx0,cy0]=slotXY(i),cx=cxo===null?cx0:cxo,cy=cyo===null?cy0:cyo,w=SW*sc,h=SHT*sc,l=cx-w/2,tp=cy-h/2;
 rr(x,l,tp,w,h,14*sc,'#241A3C','#46356F',4);
 if(!mini&&s.f<1)txt(x,String(i+1),cx,cy+2,50,'#8A7AA8','center','900',1-s.f);
 if(s.f>0){x.save();x.globalAlpha*=s.f;rr(x,l+3,tp+3,w-6,h-6,12*sc,s.c,INKC,mini?3:5);x.strokeStyle='rgba(18,10,28,.35)';x.lineWidth=mini?2:4;x.beginPath();x.moveTo(l+8*sc,cy);x.lineTo(l+w-8*sc,cy);x.moveTo(cx-18*sc,tp+8*sc);x.lineTo(cx-18*sc,cy);x.moveTo(cx+30*sc,cy);x.lineTo(cx+30*sc,tp+h-8*sc);x.stroke();
  if(s.plan){x.strokeStyle='rgba(248,233,204,.4)';x.lineWidth=mini?1.5:2;x.beginPath();for(let k=1;k<4;k++){x.moveTo(l+8*sc,tp+k*h/4);x.lineTo(l+w-8*sc,tp+k*h/4)}for(let k=1;k<5;k++){x.moveTo(l+k*w/5,tp+8*sc);x.lineTo(l+k*w/5,tp+h-8*sc)}x.stroke()}
  x.restore()}
 if(!mini&&s.f>0){txt(x,String(i+1),l+14,tp+22,30,s.plan?CREAM:INKC,'left','900',s.f);if(s.tag)txt(x,s.tag,cx,cy+18,34,s.plan||s.dark?CREAM:INKC,'center','900',1)}
 if(s.ring&&s.ringA>0)ring(x,l-6*sc,tp-6*sc,w+12*sc,h+12*sc,s.ring,s.ringA,mini?5:8,18*sc)}
const lau=(T,D,n,i,lead=.15,tail=.55,fly=.4)=>T+lead+i*(D-lead-tail-fly)/Math.max(1,n-1); /* launch time of the i-th of n bricks; it lands fly seconds later */
const FLY=.4;
const E0={f:0,c:AMB};
/* the state of the 10 slots in shot sh at time t */
function wallState(sh,t){const T=ST(sh),D=Dn(sh),S=Array.from({length:10},()=>({f:0,c:AMB,tag:'',ring:null,ringA:0,plan:false}));
 const land=(i,l)=>fin(t,l+FLY-.12,.28);
 if(sh==5)for(let i=0;i<5;i++)S[i].f=land(i,lau(T,D,5,i,.1,.3));
 if(sh==6){for(let i=0;i<5;i++)S[i].f=1;for(let i=5;i<10;i++)S[i].f=land(i,lau(T,D,5,i-5,.05,.3))}
 if(sh==7){for(let i=0;i<5;i++)S[i].f=land(i,lau(T,D,5,i,.1,1.0));S[5].ring=RED;S[5].ringA=fin(t,T+2.2,.4);S[5].tag='?';S[5].f=0}
 if(sh>=8){for(const s of S)s.c=TEAL}
 const planF=sh<10?0:sh==10?fin(t,T+1.15,.45):1;
 if(sh>=10){S[0].f=planF;S[0].c=PLAN;S[0].plan=true;S[0].tag='PLAN'}
 if(sh==12){const tg=['EDIT','TEST','EDIT','TEST'];for(let i=1;i<5;i++){S[i].f=land(i,lau(T,D,4,i-1,.1,.25));S[i].tag=tg[i-1]}}
 if(sh>=13){const tg=['EDIT','TEST','EDIT','TEST'];for(let i=1;i<5;i++){S[i].f=1;S[i].tag=tg[i-1]}}
 if(sh==13){S[5].f=fin(t,T+.15,.3);const rd=fin(t,T+.75,.6);S[5].c=mixC(TEAL,RED,rd);S[5].tag='TEST'}
 if(sh==14){const hd=fin(t,T+1.2,.4),fx=fin(t,T+2.5,.6);S[5].f=1;S[5].c=mixC(RED,TEAL,fx);S[5].tag=fx>.5?'FIX':'TEST';S[5].ring=mixC(CREAM,TEALB,fx);S[5].ringA=hd}
 if(sh==15){S[5].f=1;S[5].tag='FIX';S[5].ring=TEALB;S[5].ringA=1;S[0].ring=TEALB;S[0].ringA=1;for(let i=6;i<10;i++)S[i].f=land(i,lau(T,D,4,i-6,.15,1.55))}
 return S}
function wallDraw(x,S){wallPanel(x);for(let i=0;i<10;i++)drawSlot(x,i,S[i])}
/* the end state of shot 6 (all 10 amber) and of shot 15 (2 on Carbon, 8 on Hydrogen), used by the WHAT WE LEARNED minis */
const S_BEFORE=()=>Array.from({length:10},()=>({f:1,c:AMB,tag:'',ring:null,ringA:0,plan:false}));
const S_NOW=()=>{const S=Array.from({length:10},()=>({f:1,c:TEAL,tag:'',ring:null,ringA:0,plan:false}));S[0].c=PLAN;S[0].plan=true;S[0].ring=TEALB;S[0].ringA=1;S[5].ring=TEALB;S[5].ringA=1;return S};
/* a brick in flight from a hand to a slot (screen coordinates), landing at launch+FLY */
function flyBrick(x,t,l,from,to,col){const u=seg(t,l,l+FLY);if(u<=0||u>=1)return;const e=ease(u);brickG(x,lerp(from[0],to[0],e),lerp(from[1],to[1],e)-Math.sin(Math.PI*e)*70,58,32,col,(u-.5)*.5)}
function zpt(p,z){return p}
/* the stage: the figures on the floor; the whole board is pushed by the camera (pushA, anchored at the floor line so the wall labels never reach the meter) */
function stage(x,t,sh,fn,top=296){fn(1);return 1}

// ---------- the meter "STEPS ON CARBON" with "OUR EXAMPLE" under it (screen space, cells 0-10) ----------
function meterCells(x,l,tp,w,h,v,col,ghost=0){for(let i=0;i<10;i++){const cl=l+i*(w/10),f=clamp(v-i);rr(x,cl+3,tp,w/10-6,h,8,'#241A3C',INKC,4);
  if(ghost>0&&f<1){x.save();x.globalAlpha=.3*ghost;x.fillStyle=AMB;x.beginPath();x.roundRect(cl+3,tp,w/10-6,h,8);x.fill();x.restore()}
  if(f>.01){x.save();x.beginPath();x.roundRect(cl+3,tp,w/10-6,h,8);x.clip();x.fillStyle=col;x.fillRect(cl+3,tp+h*(1-f),w/10-6,h*f);x.restore()}}}
function meterBox(x,v,col,a=1,ghost=0){if(a<=0)return;const l=100,tp=1316,w=785,h=212;x.save();x.globalAlpha*=a;const cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,l,tp,w,h,28,'rgba(27,20,48,.95)',col,6);
 txt(x,'STEPS ON CARBON',l+w/2,tp+34,46,CREAM,'center');txt(x,'OUR EXAMPLE',l+w/2,tp+80,38,AMB,'center');
 meterCells(x,l+30,tp+106,560,76,v,col,ghost);
 imp(x,String(Math.round(v)),l+30+560+(w-30-560-30)/2,tp+132,92,col);
 if(ghost>0)txt(x,'WAS 10',l+30+560+(w-30-560-30)/2,tp+190,30,AMB,'center','900',ghost);
 x.restore()}
/* the meter counts Carbon's steps: every brick Carbon lays (BEFORE) or Carbon's two (NOW) */
function meterVal(t,sh){const S=wallState(sh,t);
 if(sh==4||sh==8||sh==9)return 0;
 if(sh==5||sh==6)return S.reduce((n,s)=>n+s.f,0);
 if(sh==10)return S[0].f;
 if(sh>=11&&sh<=13)return 1;
 if(sh==14)return 1+fin(t,ST(14)+2.5,.6);
 if(sh==15)return 2;return 0}
function meterCol(t,sh){return sh<=6?AMB:TEAL}
function meterOverlay(t,sh){if(sh==7||sh<4||sh>15)return;const a=sh==4?fin(t,ST(4)+.3,.6):sh==8?fin(t,ST(8)+.1,.6):1;meterBox(ctx,meterVal(t,sh),meterCol(t,sh),a,sh==15?fin(t,ST(15)+2.6,.6):0)}

// ---------- shots ----------
function drawTitleless(){}
/* shot 1: "you think Gemini four Carbon must do every step?" the mascot (hard hat) and the big architect laying a brick himself */
function shot1(t,cam){const x=layer('board',cam),T=ST(1),F=1010;bgDusk(x,.32,540,820);
 const ms=.9,my=pyF(F,ms),cs=1.05,cy=pyF(F,cs),cx=660;
 mascot(x,t,cam,{x:250,y:my,s:ms,look:.5,brow:.5,mouth:.3});
 const hw=rig(cy,cx,cs,cx+150,cy+70);const cp=robot(x,cx,cy,cs,t,{hands:{r:hw},showH:{r:1}});
 slab(x,F);
 for(const [bx,by] of [[440,F-18],[512,F-18],[476,F-52]])brickG(x,bx,by,70,34,AMB);
 const hp=h2w(cp,'r');brickG(x,hp[0]+4,hp[1]-34,66,34,AMB,.1);
 const b=fin(t,T+.12,.35);
 if(b>0)withIn(x,CXM,430,b,()=>{x.save();x.lineJoin='round';x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;for(const [qx,qy,r] of [[262,520,16],[276,484,22]]){x.beginPath();x.arc(qx,qy,r,0,7);x.fill();x.stroke()}x.restore();
   const z=fitSz(x,'CARBON ON EVERY STEP?',720,46,40),w=tw(x,'CARBON ON EVERY STEP?',z)+60;x.save();x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;x.beginPath();x.roundRect(CXM-w/2,392,w,92,46);x.fill();x.stroke();x.restore();txt(x,'CARBON ON EVERY STEP?',CXM,440,z,DARK,'center')});
 lab(x,'GEMINI 4 CARBON',cx-60,1120,44,AMB,{a:fin(t,T+.3,.4)});
 comp([['board',0]])}
/* shot 2: "Google says it can plan and review:" the architect holds a blueprint (PLAN) and a clipboard (REVIEW) */
function shot2(t,cam){const x=layer('board',cam),T=ST(2),F=1060;bgDusk(x,.32,540,820);
 const s=1.15,py=pyF(F,s),cx=CXM;
 const hr=rig(py,cx,s,cx+150,py+60),hl=rig(py,cx,s,cx-150,py+60,'l');
 const bp=hr,p=robot(x,cx,py,s,t,{hands:{r:hr,l:hl},showH:{r:1,l:1}});
 const r_=h2w(p,'r'),l_=h2w(p,'l'),a1=fin(t,T+.1,.5),a2=fin(t,T+.6,.5);
 slab(x,F);
 pop(x,r_[0]+85,r_[1]-60,a1,()=>sheet(x,r_[0]+85,r_[1]-60,200,250,.07,'PLAN',0),.9);
 pop(x,l_[0]-85,l_[1]-60,a2,()=>clipboard(x,l_[0]-85,l_[1]-60,190,250,-.07,'REVIEW'),.9);
 lab(x,['GOOGLE SAYS IT CAN','PLAN AND REVIEW'],CXM,430,48,CREAM,{a:fin(t,T+.15,.45),min:44});
 lab(x,'GEMINI 4 CARBON',CXM,1170,44,AMB,{a:fin(t,T+.4,.4)});
 comp([['board',0]])}
/* shot 3: "on its test, success stays close, for less quota." the faster builder lays bricks beside the architect; Google's results */
function shot3(t,cam){const x=layer('board',cam),T=ST(3),F=1060;bgDusk(x,.32,540,820);
 const cs=.95,cpy=pyF(F,cs),hs=.7,hpy=pyF(F,hs),hx=640;
 const cr=rig(cpy,300,cs,300+150,cpy+30);robot(x,300,cpy,cs,t,{hands:{r:cr},showH:{r:1}});
 const hh=rig(hpy,hx,hs,hx+100,hpy+60);const hp=robot(x,hx,hpy,hs,t,{body:CLH,hp:HP_H,smile:30,hands:{r:hh},showH:{r:1}});
 slab(x,F);
 const rp=h2w(hp,'r');
 const pos=[[790,F-18],[850,F-18],[820,F-50],[790,F-82],[850,F-82]],n=Math.floor(clamp((t-T-.3)/.45)*5);
 pos.slice(0,n).forEach(([bx,by])=>brickG(x,bx,by,56,30,TEAL));
 {const k=((t-T)*2.2)%1;brickG(x,rp[0]+8,rp[1]-26-Math.sin(k*Math.PI)*18,56,30,TEAL,.12)}
 speedL(x,hx-80,hpy+120,fin(t,T+.4,.4));
 const a=fin(t,T+.2,.5);
 lab(x,['GOOGLE\'S RESULTS:','CLOSE TO CARBON\'S SUCCESS,','LESS QUOTA ON AVERAGE'],CXM,430,44,[AMB,CREAM,CREAM],{a,min:38,maxW:720});
 lab(x,['GEMINI 4','CARBON'],300,1170,44,AMB,{a:fin(t,T+.5,.4)});
 lab(x,['A FASTER','MODEL'],hx+30,1170,44,TEALB,{a:fin(t,T+.7,.4),bg:'rgba(14,74,80,.92)'});
 comp([['board',0]])}
/* shot 4: "Our example: ten steps in Google's coding app." the empty wall, the meter at 0 */
function shot4(t,cam){const x=layer('board',cam),T=ST(4);bgDusk(x,.3,540,760);
 const ms=.55,my=pyF(FLS,ms);
 x.save();
 const hr=rig(my,300,ms,300+120,my+110);
 mascot(x,t,cam,{x:300,y:my,s:ms,hands:{r:hr},showH:{r:1},look:.6,mouth:.8});
 scrollP(x,700,640,190,200,fin(t,T+1.0,.4)*(.5+.5*Math.sin((t-T)*3)));
 x.restore();slab(x,FLS);
 const wa=fin(t,T+.3,.5);
 lab(x,['OUR EXAMPLE:','10 STEPS IN ANTIGRAVITY,','GOOGLE\'S CODING APP'],CXM,350,44,[AMB,CREAM,CREAM],{a:wa,min:38});
 wallPanel(x);for(let i=0;i<10;i++)drawSlot(x,i,Object.assign({},E0,{f:0,ring:null,ringA:0}));
 comp([['board',0]])}
/* the BEFORE / NOW scene shared parts */
function topChip(x,lines,t,a,col=AMB,bg,cx=CXM){return lab(x,lines,cx,lines.length>1?428:398,44,col,{a,bg,maxW:720,min:38})}
/* shots 5 and 6: Carbon lays all ten */
function carbonLays(t,sh,x,cxo,sc,withLab){const T=ST(sh),D=Dn(sh);
 let hand=null;
 const z=stage(x,t,sh,(z)=>{const py=pyF(FLS,sc),hr=rig(py,cxo,sc,cxo+150,py+20);const p=robot(x,cxo,py,sc,t,{hands:{r:hr},showH:{r:1}});hand=h2w(p,'r');if(sh==6){clockP(x,700,460,64,t-T)}});
 return {z,hand:zpt(hand,z)}}
function shot5(t,cam){const x=layer('board',cam),T=ST(5),D=Dn(5);bgDusk(x,.3,540,700);
 const {z,hand}=carbonLays(t,5,x,CXM,.72);slab(x,FLS);
 const S=wallState(5,t);wallDraw(x,S);
 for(let i=0;i<5;i++)flyBrick(x,t,lau(T,D,5,i,.1,.3),[hand[0],hand[1]-20],slotXY(i),AMB);
 topChip(x,['GEMINI 4 CARBON'],t,fin(t,T+.15,.4));
 lab(x,['ONE MODEL FOR','EVERY STEP'],CXM,1160,44,CREAM,{a:fin(t,T+.3,.45)});
 comp([['board',0]])}
function shot6(t,cam){const x=layer('board',cam),T=ST(6),D=Dn(6);bgDusk(x,.3,540,700);
 const hand=[0,0];
 const z=stage(x,t,6,(z)=>{const sc=.72,py=pyF(FLS,sc),hr=rig(py,300,sc,300+150,py+20);const p=robot(x,300,py,sc,t,{hands:{r:hr},showH:{r:1},smile:6});const h=h2w(p,'r');hand[0]=h[0];hand[1]=h[1];
  clockP(x,720,470,66,(t-T)*1.5);
  quotaBar(x,540,690,320,52,1-.85*seg(t,T+.2,T+D-.2))});
 slab(x,FLS);
 const hp=zpt(hand,z),S=wallState(6,t);wallDraw(x,S);
 for(let i=5;i<10;i++)flyBrick(x,t,lau(T,D,5,i-5,.05,.3),[hp[0],hp[1]-20],slotXY(i),AMB);
 topChip(x,['GEMINI 4 CARBON'],t,1,AMB,undefined,300);
 lab(x,'SLOW',720,576,44,AMB,{a:fin(t,T+.2,.4),free:true});
 lab(x,'YOUR QUOTA',700,652,44,CREAM,{a:fin(t,T+.4,.4),free:true,min:40,maxW:340});
 comp([['board',0]])}
/* shot 7: one cheap model for everything */
function shot7(t,cam){const x=layer('board',cam),T=ST(7),D=Dn(7);bgDusk(x,.3,540,700);
 const hand=[0,0];
 const z=stage(x,t,7,(z)=>{const sc=.6,py=pyF(FLS,sc),hr=rig(py,270,sc,270+130,py+20);const p=robot(x,270,py,sc,t,{body:CLD,hp:HP_D,smile:2,hands:{r:hr},showH:{r:1}});const h=h2w(p,'r');hand[0]=h[0];hand[1]=h[1];
  const a=fin(t,T+2.0,.5);if(a>0){x.save();x.translate(640,610);x.rotate(-.07);const w=tw(x,'CAN BREAK DOWN',44)+60;rr(x,-w/2,-48,w,96,18,RED,INKC,6);txt(x,'CAN BREAK DOWN',0,3,44,'#FFF6E6','center');x.restore()}});
 slab(x,FLS);
 const hp=zpt(hand,z),S=wallState(7,t);wallDraw(x,S);
 for(let i=0;i<5;i++)flyBrick(x,t,lau(T,D,5,i,.1,1.0),[hp[0],hp[1]-20],slotXY(i),AMB);
 lab(x,['ONE CHEAP MODEL','FOR EVERYTHING'],CXM,428,44,CREAM,{a:fin(t,T+.15,.4)});
 {const [sx]=slotXY(5),a=fin(t,T+2.2,.4);lab(x,'HARDER STEP',clamp(sx,260,700),1146,44,CREAM,{a,line:RED,lw:5})}
 comp([['board',0]])}
/* shot 8: "Now Orchestrator, in Google's example:" the model dropdown */
function shot8(t,cam){const x=layer('board',cam),T=ST(8);bgDusk(x,.34,540,700);
 stage(x,t,8,(z)=>{const a=fin(t,T+.3,.5);const cx=CXM,cy=600;withIn(x,cx,cy,a,()=>{rr(x,cx-300,cy-62,600,124,30,CREAM,INKC,6);txt(x,'ORCHESTRATOR',cx-30,cy+3,52,DARK,'center');x.fillStyle=DARK;x.beginPath();x.moveTo(cx+226,cy-12);x.lineTo(cx+266,cy-12);x.lineTo(cx+246,cy+16);x.closePath();x.fill();
   rr(x,cx-300,cy+74,600,80,20,'rgba(45,178,174,.25)',TEAL,4);txt(x,'MODEL DROPDOWN',cx,cy+116,34,TEALB,'center')},.9)});
 slab(x,FLS);wallPanel(x);for(let i=0;i<10;i++)drawSlot(x,i,Object.assign({},E0,{c:TEAL,f:0}));
 lab(x,['GOOGLE\'S EXAMPLE'],CXM,398,44,TEALB,{a:fin(t,T+.5,.4),bg:'rgba(14,74,80,.92)'});
 comp([['board',0]])}
/* shot 9: "Carbon, a top model," the architect pops in as the planner */
function shot9(t,cam){const x=layer('board',cam),T=ST(9);bgDusk(x,.34,540,700);
 stage(x,t,9,(z)=>{const sc=.6,py=pyF(FLS,sc),a=fin(t,T+.1,.45);pop(x,CXM,py+120,a,()=>{const hr=rig(py,CXM,sc,CXM+130,py+30);const p=robot(x,CXM,py,sc,t,{hands:{r:hr},showH:{r:1}});const h=h2w(p,'r');roll(x,h[0]+10,h[1]-40,130,-.6)})});
 slab(x,FLS);const S=wallState(9,t);wallDraw(x,S);
 lab(x,['GEMINI 4 CARBON','· PLANNER'],CXM,428,44,[AMB,TEALB],{a:fin(t,T+.3,.4)});
 lab(x,['PLANNER: CARBON HERE ·','YOU CAN PICK ANOTHER'],CXM,1160,42,CREAM,{a:fin(t,T+.6,.45)});
 comp([['board',0]])}
function roll(x,cx,cy,len,ang){x.save();x.translate(cx,cy);x.rotate(ang);rr(x,-len/2,-17,len,34,15,PLAN,INKC,5);x.fillStyle=CREAM;x.beginPath();x.ellipse(len/2-3,0,9,17,0,0,7);x.fill();x.strokeStyle=INKC;x.lineWidth=4;x.stroke();x.fillStyle=RED;x.fillRect(-14,-17,16,34);x.restore()}
/* shot 10: "reads the code and plans." a code scroll, slot 1 becomes the blueprint tile */
function shot10(t,cam){const x=layer('board',cam),T=ST(10);bgDusk(x,.34,540,700);
 stage(x,t,10,(z)=>{const sc=.72,py=pyF(FLS,sc),cx=300,hr=rig(py,cx,sc,cx+140,py+20);const p=robot(x,cx,py,sc,t,{hands:{r:hr},showH:{r:1}});const h=h2w(p,'r');
  scrollP(x,h[0]+110,h[1]-30,200,230,fin(t,T+.2,.9))});
 slab(x,FLS);const S=wallState(10,t);wallDraw(x,S);
 topChip(x,['GEMINI 4 CARBON'],t,1,AMB,undefined,300);
 lab(x,'READS THE CODE · PLANS',CXM,1150,44,CREAM,{a:fin(t,T+.4,.4)});
 comp([['board',0]])}
/* shot 11: "Gemini four Hydrogen, a faster model," the small builder grows in beside the architect */
function shot11(t,cam){const x=layer('board',cam),T=ST(11);bgDusk(x,.34,540,700);
 stage(x,t,11,(z)=>{const cs=.6,cpy=pyF(FLS,cs);robot(x,270,cpy,cs,t,{});
  const hs=.58,hpy=pyF(FLS,hs),a=fin(t,T+.15,.5);pop(x,690,hpy+120,a,()=>{const hr=rig(hpy,690,hs,690-100,hpy+40,'l');robot(x,690,hpy,hs,t,{body:CLH,hp:HP_H,smile:30,hands:{l:hr},showH:{l:1}})})});
 slab(x,FLS);const S=wallState(11,t);wallDraw(x,S);
 lab(x,['GEMINI 4 HYDROGEN','· FASTER'],CXM,428,44,[TEALB,AMB],{a:fin(t,T+.35,.4),bg:'rgba(14,74,80,.92)'});
 comp([['board',0]])}
/* shot 12: "edits and tests." Hydrogen lays bricks 2-5 tagged EDIT, TEST, EDIT, TEST */
function shot12(t,cam){const x=layer('board',cam),T=ST(12),D=Dn(12);bgDusk(x,.34,540,700);
 const hand=[0,0];
 const z=stage(x,t,12,(z)=>{const cs=.5,cpy=pyF(FLS,cs);robot(x,250,cpy,cs,t,{});
  const hs=.62,hpy=pyF(FLS,hs),hr=rig(hpy,600,hs,600+130,hpy+30);const p=robot(x,600,hpy,hs,t,{body:CLH,hp:HP_H,smile:30,hands:{r:hr},showH:{r:1}});const h=h2w(p,'r');hand[0]=h[0];hand[1]=h[1];speedL(x,500,hpy+100,.9)});
 slab(x,FLS);const hp=zpt(hand,z),S=wallState(12,t);wallDraw(x,S);
 for(let i=1;i<5;i++)flyBrick(x,t,lau(T,D,4,i-1,.1,.25),[hp[0],hp[1]-20],slotXY(i),TEAL);
 lab(x,['GEMINI 4 HYDROGEN'],CXM,398,44,TEALB,{a:1,bg:'rgba(14,74,80,.92)'});
 comp([['board',0]])}
/* shot 13: "Say a test fails twice:" slot 6 turns red, two red x marks one after the other */
function shot13(t,cam){const x=layer('board',cam),T=ST(13);bgDusk(x,.3,540,700);
 stage(x,t,13,(z)=>{const hs=.62,hpy=pyF(FLS,hs);robot(x,290,hpy,hs,t,{body:CLH,hp:HP_H,smile:-4});
  rr(x,500,400,380,250,24,'#1B1430',RED,6);txt(x,'TEST',690,442,40,CREAM,'center');xMark(x,610,545,38,fin(t,T+.55,.3));xMark(x,770,545,38,fin(t,T+1.05,.3))});
 slab(x,FLS);const S=wallState(13,t);wallDraw(x,S);
 lab(x,['TEST FAILED x2 ·','FOR EXAMPLE'],CXM,1160,44,[RED==0?CREAM:'#FF8A80',CREAM],{a:fin(t,T+.3,.4)});
 comp([['board',0]])}
/* shot 14: "Hydrogen hands back, so the hard step stays with Carbon, which fixes the plan." */
function shot14(t,cam){const x=layer('board',cam),T=ST(14);bgDusk(x,.34,540,700);
 stage(x,t,14,(z)=>{const cs=.7,cpy=pyF(FLS,cs),cx=240,hr=rig(cpy,cx,cs,cx+110,cpy+30);const cp=robot(x,cx,cpy,cs,t,{hands:{r:hr},showH:{r:1}});const fx=fin(t,T+1.9,.5);
  sheet(x,425,585,170,200,.05,'PLAN',fx);
  const hs=.55,hpy=pyF(FLS,hs);robot(x,740,hpy,hs,t,{body:CLH,hp:HP_H,smile:10});
  arrowL(x,660,545,560,TEALB,ease(seg(t,T+.2,T+.8)));
  const st=fin(t,T+2.4,.4);if(st>0){x.save();x.translate(430,672);x.rotate(-.12);const k=1.25-.25*st;x.scale(k,k);x.globalAlpha*=st;rr(x,-125,-34,250,68,10,'rgba(20,100,100,.97)',TEALB,5);txt(x,'PLAN FIXED',0,3,38,TEALB,'center');x.restore()}});
 slab(x,FLS);const S=wallState(14,t);wallDraw(x,S);
 lab(x,'HANDS BACK',560,398,46,TEALB,{a:fin(t,T+.5,.4),bg:'rgba(14,74,80,.92)'});
 lab(x,['HARD STEP: CARBON','FIXES THE PLAN'],CXM,1160,44,[CREAM,AMB],{a:fin(t,T+1.3,.45)});
 comp([['board',0]])}
/* shot 15: "Hydrogen carries on; Carbon: two steps, not ten." the last bricks, 2 on Carbon, 8 on Hydrogen */
function shot15(t,cam){const x=layer('board',cam),T=ST(15),D=Dn(15);bgDusk(x,.34,540,700);
 const hand=[0,0];
 const z=stage(x,t,15,(z)=>{const cs=.6,cpy=pyF(FLS,cs);robot(x,250,cpy,cs,t,{});
  const hs=.62,hpy=pyF(FLS,hs),hr=rig(hpy,620,hs,620+120,hpy+30);const p=robot(x,620,hpy,hs,t,{body:CLH,hp:HP_H,smile:30,hands:{r:hr},showH:{r:1}});const h=h2w(p,'r');hand[0]=h[0];hand[1]=h[1];speedL(x,520,hpy+100,fin(t,T,.3)*(1-fin(t,T+1.8,.4)))});
 slab(x,FLS);const hp=zpt(hand,z),S=wallState(15,t);wallDraw(x,S);
 for(let i=6;i<10;i++)flyBrick(x,t,lau(T,D,4,i-6,.15,1.55),[hp[0],hp[1]-20],slotXY(i),TEAL);
 const la=fin(t,T+1.9,.5);
 if(la>0)withIn(x,CXM,1150,la,()=>{const z1=44,w1=tw(x,'CARBON',z1)+52,w2=tw(x,'HYDROGEN',z1)+52,g=30,l0=CXM-(w1+w2+g)/2;
   rr(x,l0,1115,w1,70,35,'rgba(18,10,28,.9)',TEALB,6);txt(x,'CARBON',l0+w1/2,1151,z1,TEALB,'center');
   rr(x,l0+w1+g,1115,w2,70,35,TEAL,INKC,5);txt(x,'HYDROGEN',l0+w1+g+w2/2,1151,z1,DARK,'center')});
 comp([['board',0]])}

// ---------- the proof: Google's Terminal-Bench results (shots 16-18) ----------
/* a bar row: the label and the empty track show from the first frame; the fill grows from the left over fillU 0-1 */
function barRow(x,l,tp,w,label,col,frac,fillU,lc=CREAM){txt(x,label,l,tp,46,lc,'left','900');rr(x,l,tp+36,w,60,30,'#241A3C',INKC,5);if(fillU>0)rr(x,l+4,tp+40,Math.max(2,(w-8)*frac*fillU),52,26,col,null)}
function shot16(t,cam){const x=layer('board',cam),T=ST(16);bgDusk(x,.28,540,640);
 const a=fin(t,T,.5);
 rr(x,112,340,766,400,28,'#2A1F42',AMB,6);
 txt(x,'GOOGLE\'S RESULTS',CXM,404,58,AMB,'center');txt(x,'TERMINAL-BENCH',CXM,482,58,CREAM,'center');txt(x,'(A CODING TEST)',CXM,550,46,CREAM,'center');txt(x,'ON AVERAGE',CXM,632,58,AMB,'center');
 x.save();x.fillStyle=TEAL;x.beginPath();x.roundRect(CXM-120,684,240,12,6);x.fill();x.restore();
 /* a terminal window: the coding test */
 const w1=fin(t,T+.5,.5);
 withIn(x,CXM,980,w1,()=>{rr(x,112,820,766,330,24,'#0E0A18',TEAL,5);x.fillStyle='#241A3C';x.beginPath();x.roundRect(112,820,766,58,[24,24,0,0]);x.fill();for(let i=0;i<3;i++){x.fillStyle=[RED,AMB,TEAL][i];x.beginPath();x.arc(150+i*44,849,13,0,7);x.fill()}
   const n=Math.floor(clamp((t-T-.8)/.45)*3);x.strokeStyle=TEALB;x.lineWidth=9;x.lineCap='round';x.lineJoin='round';
   for(let i=0;i<3;i++){const yy=930+i*70;txt(x,'>_',160,yy,48,TEAL,'center');rr(x,220,yy-8,300+i*60,16,8,'#3A2C5A',null);if(i<n){x.strokeStyle=TEAL;x.beginPath();x.moveTo(770,yy);x.lineTo(792,yy+22);x.lineTo(832,yy-22);x.stroke()}}},.92);
 comp([['board',0]])}
/* the condition header of shots 17 and 18: drawn from the shot's first frame (L26), 44 px, inside x 112-878 and (camera push to 1.1 applied) under the corner tag */
function condHeader(x){return lab(x,['GOOGLE\'S TERMINAL-BENCH','RESULTS · ON AVERAGE'],CXM,350,44,[AMB,CREAM],{min:44,maxW:714,line:AMB,lw:4,s0:1})}
function shot17(t,cam){const x=layer('board',cam),T=ST(17);bgDusk(x,.28,540,640);
 condHeader(x);
 txt(x,'TASK SUCCESS',CXM,520,60,AMB,'center');
 const g1=ease(seg(t,T+.3,T+1.1)),g2=ease(seg(t,T+.6,T+1.4));
 barRow(x,112,600,766,'CARBON',AMB,1,g1);
 barRow(x,112,800,766,'ORCHESTRATOR',TEAL,.93,g2,TEALB);
 lab(x,['CLOSE TO CARBON\'S SUCCESS'],CXM,1070,46,CREAM,{a:fin(t,T+1.2,.5),min:44,maxW:740});
 lab(x,['NO EXACT RATE PUBLISHED'],CXM,1190,44,TEALB,{a:fin(t,T+1.8,.5),min:44,maxW:740,bg:'rgba(14,74,80,.92)'});
 comp([['board',0]])}
function shot18(t,cam){const x=layer('board',cam),T=ST(18);bgDusk(x,.28,540,640);
 condHeader(x);
 const q=ease(seg(t,T+.2,T+.9)),n=ease(seg(t,T+1.5,T+2.2));
 txt(x,'QUOTA',112,480,52,AMB,'left');
 barRow(x,112,545,766,'CARBON',AMB,1,q);
 barRow(x,112,665,766,'ORCHESTRATOR',TEAL,.76,q,TEALB);
 {const a=fin(t,T+.5,.5);if(a>0)withIn(x,CXM,825,a,()=>imp(x,'24% LESS QUOTA',CXM,825,76,AMB,'center'))}
 const ga=fin(t,T+1.2,.5);
 if(ga>0)withIn(x,CXM,1050,ga,()=>{txt(x,'TIME',112,915,52,AMB,'left');barRow(x,112,980,766,'CARBON',AMB,1,n);barRow(x,112,1100,766,'ORCHESTRATOR',TEAL,.81,n,TEALB)},.96);
 {const a=fin(t,T+1.9,.5);if(a>0)withIn(x,CXM,1260,a,()=>imp(x,'19% FASTER',CXM,1260,76,AMB,'center'))}
 lab(x,['OUR 10 STEPS ARE AN EXAMPLE;','24% IS FOR THE WHOLE RUN'],CXM,1415,44,CREAM,{a:fin(t,T+.2,.5),min:44,maxW:714});
 comp([['board',0]])}

// ---------- WHAT WE LEARNED (shots 19, 20) ----------
function miniWall(x,top,S,l=420){const sw=70,sh_=50,g=8;for(let i=0;i<10;i++){const r=Math.floor(i/5),c=i%5;drawSlot(x,i,S[i],sw/SW,l+c*(sw+g)+sw/2,top+r*(sh_+g)+sh_/2,true)}}
function miniCells(x,top,v,col,n){meterCells(x,150,top+310,520,50,v,col);imp(x,n,770,top+335,64,col)}
function miniBefore(x,t,top){ /* same state as shot 6: Carbon laid all ten bricks, meter 10 */
 robot(x,250,top+190-249*.34+30,.34,t,{});
 miniWall(x,top+92,S_BEFORE());
 miniCells(x,top,10,AMB,'10')}
function miniNow(x,t,top){ /* same state as shot 15: slots 1 and 6 on Carbon (outlined), the other 8 on Hydrogen, meter 2 */
 robot(x,190,top+190-249*.3+30,.3,t,{});
 robot(x,320,top+190-249*.25+30,.25,t,{body:CLH,hp:HP_H,smile:30});
 miniWall(x,top+92,S_NOW());
 miniCells(x,top,2,TEAL,'2')}
const P1=432,P2=882;
function learnedBox(x,a){x.save();x.translate(CXM,340);const k=.9+.1*a;x.scale(k,k);const S='WHAT WE LEARNED',fs=64,w=impW(x,S,fs)+100;rr(x,-w/2,-55,w,110,40,PANEL,AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}
/* a panel: shown at once, or wiped in from the top over .7 s (no alpha, no slide: it holds figures) */
function panelBox(x,top,col,name,u,fn){if(u<=0)return;x.save();x.beginPath();x.rect(0,top-40,W,(400+50)*u);x.clip();rr(x,112,top,766,400,28,mixC('#2A1F42','#46356F',.5+.5*Math.sin(t_g*7)),col,6);pill(x,112+30+tw(x,name,44)/2+22,top+4,tw(x,name,44)+60,66,col);txt(x,name,112+52+tw(x,name,44)/2,top+7,44,DARK,'center');fn();x.restore()}
function sharedLabel(x,a){lab(x,['STEPS ON CARBON','OUR EXAMPLE'],CXM,1425,44,[CREAM,AMB],{a,min:44,maxW:700})}
function shot19(t,cam){const x=layer('board',cam),T=ST(19);bgDusk(x,.25,540,640);
 learnedBox(x,1);
 panelBox(x,P1,AMB,'BEFORE',1,()=>miniBefore(x,t,P1));
 panelBox(x,P2,TEAL,'NOW',ease(seg(t,T+1.5,T+2.2)),()=>miniNow(x,t,P2));
 sharedLabel(x,1);
 comp([['board',0]])}
function wrapL(x,s,fs,maxW){const ws=s.split(' '),ls=[];let cur='';for(const w of ws){const n=cur?cur+' '+w:w;if(tw(x,n,fs)>maxW&&cur){ls.push(cur);cur=w}else cur=n}ls.push(cur);return ls}
/* shot 20: the takeaway card in two lines: the plain statement, then the amber punchline */
function shot20(t,cam){const x=layer('board',cam),T=ST(20);bgDusk(x,.3,540,640);
 const v=fin(t,T+1.2,.5),fs=48;
 const A1=['OUR EXAMPLE:','CARBON\'S STEPS, 10 → 2'],A2=['GOOGLE\'S RESULTS:','CLOSE TO CARBON\'S SUCCESS'];
 const z=Math.min(...A1.concat(A2).map(s=>fitSz(x,s,690,fs,40)));
 const lh=z*1.3,h=4*lh+130,cy=860;
 rr(x,CXM-388,cy-h/2,776,h,40,'rgba(27,20,48,.97)',AMB,6);
 A1.forEach((s,i)=>txt(x,s,CXM,cy-h/2+62+lh/2+i*lh,z,CREAM,'center'));
 A2.forEach((s,i)=>txt(x,s,CXM,cy-h/2+62+lh/2+(2*lh+34)+i*lh,z,AMB,'center','900',v));
 comp([['board',0]])}

// ---------- the ask (shots 21, 22): the mascot waves, Subscribe, then comment ----------
function shot21(t,cam){const x=layer('board',cam),T=ST(21);bgDusk(x,.35,540,640);
 const w=ease(seg(t,T+.2,T+.8)),wv=Math.sin((t-T)*9);const hr=[lerp(97,170+wv*12,w),lerp(220,-30+wv*36,w)];
 mascot(x,t,cam,{x:CXM-10,y:745,s:1.25,hands:{r:hr},showH:{r:w>.02?1:0},look:.05,lookY:0,brow:.45,mouth:.95});
 comp([['board',0]])}
function shot22(t,cam){const x=layer('board',cam),T=ST(22);bgDusk(x,.35,540,640);
 const wv=Math.sin((t-T)*9);const hr=[170+wv*12,-30+wv*36];
 mascot(x,t,cam,{x:CXM-10,y:720,s:1.2,hands:{r:hr},showH:{r:1},look:.05,lookY:0,brow:.45,mouth:.95,tilt:.03});
 comp([['board',0]])}
function subscribe(t){const T=ST(21)+.9,c=fin(t,T,.55),pulse=1+.03*Math.sin((t-T)*7);
 if(c>0){ctx.save();ctx.translate(CXM,1190);const sc=lerp(.7,1,c)*pulse;ctx.scale(sc,sc);ctx.globalAlpha=c;ctx.fillStyle=INKC;ctx.beginPath();ctx.roundRect(-330,-90,660,180,90);ctx.fill();pill(ctx,0,0,640,160,RED);ctx.fillStyle=CREAM;ctx.beginPath();ctx.moveTo(-250,-40);ctx.lineTo(-250,40);ctx.lineTo(-186,0);ctx.closePath();ctx.fill();txt(ctx,'Subscribe',50,5,84,CREAM,'center','800');ctx.restore()}
 const C0=ST(22)+.15,cc=fin(t,C0,.55),pu=1+.03*Math.sin((t-C0)*7);
 if(cc>0){const S='COMMENT: WHAT NEXT?',fs=46,w2=Math.min(780,tw(ctx,S,fs)+110),h=150;ctx.save();ctx.translate(CXM,1420);const k=lerp(.7,1,cc)*pu;ctx.scale(k,k);ctx.globalAlpha=cc;
  ctx.lineJoin='round';ctx.fillStyle=AMB;ctx.strokeStyle=INKC;ctx.lineWidth=8;ctx.beginPath();ctx.roundRect(-w2/2,-h/2,w2,h,h/2);ctx.fill();ctx.stroke();
  txt(ctx,S,0,4,fs,DARK,'center');ctx.restore()}}

// ---------- words on screen (screen space) ----------
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 44px Arial';const S='Antigravity Orchestrator',tw_=x.measureText(S).width,dw=x.measureText(' ·').width;const L0=60,w=22+tw_+dw+14+104+18,cy=134;pill(x,L0+w/2,cy,w,68,'rgba(27,20,48,.92)');
  txt(x,S,L0+22,cy+2,44,AMB,'left','800');txt(x,' ·',L0+22+tw_,cy+2,44,CREAM,'left','800');pill(x,L0+22+tw_+dw+14+52,cy,104,54,RED);txt(x,'60s',L0+22+tw_+dw+14+52,cy+2,38,'#FFF6E6','center','800');x.restore();return L0+w}
function tab(t,a,b,lab_,col){const v=fin(t,a,.5)*(1-fin(t,b,.5));if(v<=0)return;const x=ctx;x.save();x.font='900 44px Arial';const w=x.measureText(lab_).width+60;x.restore();const cy=241;x.save();x.translate(60+w/2,cy);x.scale(.9+.1*v,.9+.1*v);x.translate(-60-w/2,-cy);pill(x,60+w/2,cy,w,66,col,v);txt(x,lab_,60+w/2,cy+2,44,DARK,'center','900',v);x.restore()}
function sticker(x,fs){x.font=`${fs}px Impact, "Arial Black", sans-serif`;const sw=x.measureText('IN 60 SECONDS').width+70;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-fs*.74,sw+20,fs*1.48,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-fs*.64,sw,fs*1.28,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+35,fs*.06)}
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(CXM,860,60,CXM,860,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(CXM,H/2);const z=1+.03*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-CXM,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const fitI=(s,wmax)=>{x.font=font(100);return 100*wmax/x.measureText(s).width};
 const s1=fitI('ORCHESTRATOR',800),s2=fitI('ANTIGRAVITY',800);
 put('LEARN',CXM,600,150,CREAM);put('ANTIGRAVITY',CXM,600+s2*.98+16,s2,AMB);put('ORCHESTRATOR',CXM,600+s2*.98+16+s1*.98+20,s1,AMB);
 x.save();x.translate(CXM,1290);x.rotate(-.035);sticker(x,96);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(5)+.05,out(8),'BEFORE',AMB);tab(t,ST(8)+.05,out(16),'NOW · ORCHESTRATOR',TEAL);
 if(sh==19||sh==20)ctx.setTransform(1,0,0,1,0,0);
 if(sh>=21)subscribe(t)}

// ---------- cameras: a linear push to 1.1 on every shot. The meter scene (shots 4-15) anchors the push at y 806 (the floor line), so the labels under the wall never reach the meter and the chips stay under the tab ----------
const pushA=(A,z1=1.1)=>u=>{const z=lerp(1,z1,u);return {x:540,y:A-(A-960)/z,z,b:[0,0,0]}};
const CAM=[()=>({x:540,y:960,z:1,b:[0,0,0]})];
for(let i=1;i<=22;i++)CAM.push(i>=4&&i<=15?pushA(770):pushA(960));
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{[null,shot1,shot2,shot3,shot4,shot5,shot6,shot7,shot8,shot9,shot10,shot11,shot12,shot13,shot14,shot15,shot16,shot17,shot18,shot19,shot20,shot21,shot22][s](o,cam);overlay(o,s)}
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a brush on every cut, ticks on labels, tocks on bricks ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),i==18?'cutl':'cut'); /* shot 18 starts 125 ms before the voice (L47: a cut within 200 ms before a voice line gets the louder brush) */
const tk=[];for(let i=1;i<=22;i++)tk.push(ST(i)+.15);
for(const t of tk)say(t+.2,'tick');
for(const sh of [5,6,7,12,15]){const D=Dn(sh),T=ST(sh);const n=sh==12?4:sh==15?4:5;for(let i=0;i<n;i++){const l=sh==12?lau(T,D,4,i,.1,.25):sh==15?lau(T,D,4,i,.15,1.55):sh==7?lau(T,D,5,i,.1,1.0):sh==6?lau(T,D,5,i,.05,.3):lau(T,D,5,i,.1,.3);say(l+FLY,'tock')}}
for(const t of [ST(14)+2.4,ST(13)+.55,ST(13)+1.05,ST(17)+.9,ST(18)+1.3,ST(20)+1.3,ST(21)+.9,ST(22)+.15])say(t,'stamp');
