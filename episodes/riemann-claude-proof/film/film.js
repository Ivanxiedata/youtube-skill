// Episode riemann-claude-proof, style B copied from the reel (style.md), 1080x1920, beats.md (round 4: the learning rewrite, 14 voice lines). Voice laid in at .5 s: film time = voice time + .5 (timing.js).
// One shot per spoken line; a line gets a second shot only where a FULL begins or ends (line 6: FULL then presenter; line 9: presenter then FULL; line 13 is a FULL).
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',PAPER='#E9DCC2',GREEN='#3DBE6A',PURP='#2A1F42',LAV='#C9B8E0';
const S=n=>TL[n-1].s,E=n=>TL[n-1].e,T=(n,i)=>TL[n-1].w[i];
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1,fam='Arial'){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px ${fam}`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function imp(x,s,X,Y,size,col,al='center',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.15;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function mw(x,s,size,wt='900',fam='Arial'){x.save();x.font=`${wt} ${size}px ${fam}`;const w=x.measureText(s).width;x.restore();return w}
function fit(x,s,maxW,size,wt='900',min=20){const w=mw(x,s,size,wt);return w>maxW?Math.max(min,size*maxW/w):size}
function impFit(x,s,maxW,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w>maxW?size*maxW/w:size}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
const bo=u=>{u=clamp(u);return 1+2.70158*Math.pow(u-1,3)+1.70158*Math.pow(u-1,2)};
function tick(x,X,Y,sz,col='#fff',lw=null){x.save();x.strokeStyle=col;x.lineWidth=lw||sz*.2;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(X-sz*.5,Y+sz*.02);x.lineTo(X-sz*.12,Y+sz*.4);x.lineTo(X+sz*.55,Y-sz*.38);x.stroke();x.restore()}

// ---------- group fade: draw a figure/prop at full opacity into an offscreen canvas, then fade that one layer (judge round 1 must-fix 3) ----------
const GCV=[];let GD=0;
function grp(x,a,fn){if(a<=0)return;if(a>=.999){fn(x);return}const d=GD++,c=GCV[d]||(GCV[d]=mk()),m=c.getContext('2d');m.setTransform(1,0,0,1,0,0);m.globalAlpha=1;m.filter='none';m.clearRect(0,0,W,H);m.setTransform(x.getTransform());
 fn(m);GD--;x.save();x.setTransform(1,0,0,1,0,0);x.globalAlpha*=a;x.drawImage(c,0,0);x.restore()}
function tag(x,X,Y,s,col,a,size=34,tc='#0B2A30'){if(a<=0)return;grp(x,a,m=>{const w=mw(m,s,size)+50,k=.9+.1*a;m.save();m.translate(X,Y);m.scale(k,k);pill(m,0,0,w,size*1.8,col);txt(m,s,0,2,size,tc,'center','900');m.restore()})}

// ---------- style B, copied from the reel (style.md): beige wall, huge presenter face, CHIP 62%, SUB 68%, INSET 71-92%, FULL on the big moments ----------
(()=>{const c=mk(64,64).getContext('2d');for(const w of ['700','800','900'])for(const fam of ['Arial','Georgia, "Times New Roman", serif','Menlo, monospace']){c.font=`${w} 40px ${fam}`;c.fillText('Aa1',0,40);c.measureText('Aa1')}})(); // warm the fonts: the first frame drawn must equal every later one (audit determinism)
const CRM='#F3EEE2',NAVY='#0F1B28',DRED='#C8372D',MINT='#7FE0C0',GREY='#5A5448';
const CHIPY=1205,SUBY=1300,INX=180,INY=1356,INW=720,INH=420,PS=3.4;
const DURF=84.68;
const SL=[1,2,3,4,5,6,6,7,8,9,9,10,11,12,13,14]; // shot index -> spoken line (6 and 9 have a second shot where a FULL begins or ends)
const sc_=n=>Math.round((S(n)-.12)*30);
const CF=[0,sc_(2),sc_(3),sc_(4),sc_(5),sc_(6),Math.round((T(6,16)-.12)*30),sc_(7),sc_(8),sc_(9),Math.round((T(9,24)-.12)*30),sc_(10),sc_(11),sc_(12),sc_(13),sc_(14),Math.round(DURF*30)];
// ---------- chips and subtitles (each chunk's word range comes from the spoken line; numbers shown as digits) ----------
const DISP=[['seventeen million','17 million']];
const LN=[
 {s:['I know the world moves fast.','So you probably missed','a huge AI breakthrough last week!'],c:[[0,null],[2,'AI BREAKTHROUGH']]},
 {s:['A mathematician at Anthropic,','working with Claude,','released a proof','of the Riemann hypothesis!'],c:[[0,null],[3,'RIEMANN HYPOTHESIS']]},
 {s:['Riemann found special numbers','that encode the primes,','and predicted all the important','ones sit on one line.'],c:[[0,null],[1,'PRIMES, ENCODED'],[2,'ALL THE IMPORTANT ONES']]},
 {s:['Earlier work showed','at least two thirds','of a key set follow it.',"But most isn't all:",'one exception would sink it.'],c:[[0,null],[1,'AT LEAST 2/3'],[3,"MOST ISN'T ALL"]]},
 {s:['A proof says','every single one does.'],c:[[0,null],[1,'EVERY ONE']]},
 {s:['And the proof?','seventeen million lines of code!','Far too long for','a person to read.','So how do we know',"it's right?"],c:[[0,null],[1,'17 MILLION LINES'],[4,'HOW DO WE KNOW?']]},
 {s:['Two key checks.','First: is it the right question?','Two separate tools confirmed','it proves exactly the standard statement.'],c:[[0,null],[1,'CHECK 1: RIGHT QUESTION']]},
 {s:['Second: is every step right?',"It's written in Lean,",'a proof language','whose checker checks','every single step.'],c:[[0,'CHECK 2: EVERY STEP']]},
 {s:['Several checkers by','different people said yes;','two are even proved unable','to accept a false one,',"even if Lean's logic had a flaw.",'Certified correct!'],c:[[0,'SEVERAL CHECKERS'],[5,'CERTIFIED']]},
 {s:['What does it mean?'],c:[[0,'WHAT DOES IT MEAN?']]},
 {s:["Certified doesn't mean understood.","The checkers say it's true, not why.",'One mathematician says that could','take months... or years.'],c:[[0,'CERTIFIED ≠ UNDERSTOOD'],[3,'MONTHS... OR YEARS']]},
 {s:["That's the real change:",'checking and understanding','have come apart.','AI helped find it.','Machines checked it.','Mathematicians still have','to understand it,','to build on its ideas.'],c:[[0,'CHECKING ≠ UNDERSTANDING'],[3,'FIND · CHECK · UNDERSTAND']]},
 {s:['So, what we learned:','a proven checker on the right question',"tells you it's right.",'Only understanding tells you why.'],c:[[0,'WHAT WE LEARNED']]},
 {s:['Want more?','Subscribe,','and comment what we','should explain next.'],c:[[0,null],[1,'SUBSCRIBE']]}];
const SUBS=[],CHIPS=[];
LN.forEach((l,k)=>{const n=k+1;let i=0;const st=[];l.s.forEach(s=>{st.push(i);let d=s;for(const [a,b] of DISP)d=d.replace(a,b);SUBS.push({n,i,s:d,t:T(n,i)});i+=s.split(' ').length});
 if(i!=TL[k].w.length)console.error('token mismatch line',n,i,TL[k].w.length);
 l.c.forEach(([ci,s])=>{if(s)CHIPS.push({n,s,t:T(n,st[ci])})})});
const lineCut=n=>{let s=SL.lastIndexOf(n);return s+1<CF.length?CF[s+1]/30:DURF};
for(const L_ of [SUBS,CHIPS])L_.forEach((c,k)=>{const nx=L_[k+1];c.last=!(nx&&nx.n==c.n);c.e=c.last?lineCut(c.n):nx.t});
function chipDraw(x,s,a){let fs=72;const pad=40;let w=mw(x,s,fs)+pad*2;if(w>940){fs*=940/w;w=940}const h=fs*1.4,k=.94+.06*a;
 grp(x,a,m=>{m.save();m.translate(540,CHIPY);m.scale(k,k);rr(m,-w/2+3,-h/2+7,w,h,6,'rgba(0,0,0,.22)');rr(m,-w/2,-h/2,w,h,6,'#E8EEF4');txt(m,s,0,fs*.04,fs,'#1E2A44','center','900');m.restore()})}
function subDraw(x,s,a){let fs=54;const w=mw(x,s,fs,'800');if(w>960)fs=Math.max(38,fs*960/w);
 grp(x,a,m=>{m.save();m.shadowColor='rgba(0,0,0,.8)';m.shadowBlur=14;m.shadowOffsetY=3;txt(m,s,540,SUBY,fs,'#fff','center','800');m.shadowBlur=4;txt(m,s,540,SUBY,fs,'#fff','center','800');m.restore()})}
// each chunk is gone (out by e-.04) before the next one starts to come in; a line's last chunk ends at the cut to the next shot
function items(list,t,draw,di=.12){list.forEach(c=>{const a=fin(t,c.t,di)*(1-(c.last?fin(t,c.e-.34,.3):fin(t,c.e-di-.02,di-.02)));if(a>.01)draw(c.s,a)})}
function band(x,t){items(CHIPS,t,(s,a)=>chipDraw(x,s,a),.22);items(SUBS,t,(s,a)=>subDraw(x,s,a))}

// ---------- the wall: plain warm beige-grey, soft darker room corner at the top ----------
let WALL=null;
function wall(x){if(!WALL){WALL=mk();const w=WALL.getContext('2d');let g=w.createLinearGradient(0,0,W*.4,H);g.addColorStop(0,'#D2C9BB');g.addColorStop(1,'#B0A799');w.fillStyle=g;w.fillRect(0,0,W,H);
 w.save();w.filter='blur(46px)';w.fillStyle='rgba(80,66,50,.34)';w.beginPath();w.moveTo(W*.42,-80);w.lineTo(W+80,-80);w.lineTo(W+80,H*.34);w.closePath();w.fill();w.restore();
 g=w.createLinearGradient(0,0,0,520);g.addColorStop(0,'rgba(70,58,44,.38)');g.addColorStop(1,'rgba(70,58,44,0)');w.fillStyle=g;w.fillRect(0,0,W,520);
 g=w.createLinearGradient(0,0,W,0);g.addColorStop(0,'rgba(255,248,235,.12)');g.addColorStop(.5,'rgba(255,248,235,0)');w.fillStyle=g;w.fillRect(0,0,W,H)}
 x.drawImage(WALL,0,0)}

// ---------- hands (drawn in screen space over the arm end): palm, fist, fingers n, point (a real pointing hand), ok, thumb ----------
function cap(x,x1,y1,x2,y2,w){x.save();x.lineCap='round';x.strokeStyle=INKC;x.lineWidth=w+8;x.beginPath();x.moveTo(x1,y1);x.lineTo(x2,y2);x.stroke();x.strokeStyle=HERO.hand;x.lineWidth=w;x.stroke();x.restore()}
function drawHand(x,X,Y,kind,n,rot,u){x.save();x.translate(X,Y);x.rotate(rot);x.scale(u,u);
 const body=(w,h,r,cy=0)=>{x.beginPath();x.roundRect(-w/2,cy-h/2,w,h,r);x.fillStyle=HERO.hand;x.fill();x.lineWidth=4;x.strokeStyle=INKC;x.stroke()};
 const knuck=()=>{x.strokeStyle=INKC;x.lineWidth=4;x.lineCap='round';for(const fx of [-22,0,22]){x.beginPath();x.moveTo(fx,-30);x.lineTo(fx,-10);x.stroke()}};
 if(kind=='palm'){[[-48,-112],[-16,-132],[16,-126],[48,-104]].forEach(([fx,ty])=>cap(x,fx,-30,fx,ty,30));cap(x,-60,20,-104,-30,32);body(146,128,40,10)}
 else if(kind=='fist'){body(134,112,40,0);knuck();cap(x,-44,24,26,24,30)}
 else if(kind=='fingers'){const k=Math.max(1,Math.min(4,n));for(let i=0;i<k;i++){const fx=-48+i*32;cap(x,fx,-30,fx,-118-(i==1?14:0),30)}body(134,112,40,0);knuck();cap(x,-44,24,26,24,30)}
 else if(kind=='point'){ // index finger long and straight, three curled fingers with humps, the thumb folded across them
  cap(x,-34,-30,-34,-158,28);
  for(const fx of [-4,24,52]){x.beginPath();x.arc(fx,-52,15,Math.PI,0);x.fillStyle=HERO.hand;x.fill();x.lineWidth=4;x.strokeStyle=INKC;x.stroke()}
  body(134,112,40,0);for(const fx of [-6,22]){x.strokeStyle=INKC;x.lineWidth=4;x.lineCap='round';x.beginPath();x.moveTo(fx+6,-52);x.lineTo(fx+6,-26);x.stroke()}
  cap(x,-62,-6,-6,30,26)}
 else if(kind=='ok'){[[8,-120],[40,-110],[70,-90]].forEach(([fx,ty])=>cap(x,fx,-24,fx,ty,28));body(136,110,40,4);
  x.beginPath();x.arc(-38,-52,40,0,7);x.arc(-38,-52,15,0,7,true);x.fillStyle=HERO.hand;x.fill('evenodd');x.lineWidth=4;x.strokeStyle=INKC;x.stroke();x.beginPath();x.arc(-38,-52,15,0,7);x.stroke()}
 else if(kind=='thumb'){body(134,112,40,0);knuck();cap(x,-50,-30,-58,-120,34)}
 x.restore()}
// A hand rests out of sight at the right/left edge beside the face and fades in as one layer with its arm (never sweeps through the chip/subtitle band).
const RESTP={l:[-180,985],r:[1260,985]};
const GS={l:[],r:[]};
const gs=(h,a,b,kind,X,Y,o={})=>{GS[h].push(Object.assign({a,b,kind,X,Y,rot:0,n:0},o))};
const gv=(g,t)=>[typeof g.X=='function'?g.X(t):g.X,typeof g.Y=='function'?g.Y(t):g.Y];
function handPos(h,ci,t){const R=RESTP[h],L=GS[h],g=L[ci],pr=ci?L[ci-1]:null,q=gv(g,t),Rg=[R[0],q[1]];let from=Rg;
 if(pr&&g.a<pr.b+.35){const p0=handPos(h,ci-1,g.a);from=[p0[0],p0[1]]} // back-to-back: keep the hand up, swap its shape
 const e=ease(seg(t,g.a,g.a+.35)),lv=ease(seg(t,g.b,g.b+.35));
 return [lerp(lerp(from[0],q[0],e),R[0],lv),lerp(lerp(from[1],q[1],e),Rg[1],lv),lv]}
function handState(h,t){const L=GS[h],R=RESTP[h];let ci=-1;for(let i=0;i<L.length;i++)if(L[i].a<=t)ci=i;if(ci<0)return null;
 const g=L[ci],[X,Y,lv]=handPos(h,ci,t);
 if(Math.abs(X-R[0])<5)return null;return {X,Y,g,pk:null,mu:1,al:1}}
const HR_=[925,770];
const wag=(a,b,amp=.35,f=10)=>t=>amp*Math.sin((t-a)*f)*win(t,a,b,.2);
// gestures per spoken line (beats.md GESTURE column; the line's first word is T(n,0))
gs('r',S(1)+.5,T(1,6),'palm',HR_[0],HR_[1]);gs('r',T(1,6),E(1)-.1,'point',HR_[0],HR_[1],{rot:-.18});                       // 1 open palm, then points at the viewer
gs('r',T(2,3),E(2)-.2,'ok',HR_[0],HR_[1]);                                                                              // 2 OK sign
gs('r',T(3,6)-.2,E(3)-.1,'point',HR_[0],t=>lerp(660,880,ease(seg(t,T(3,9),T(3,17)))),{rot:0});                           // 3 traces a vertical line with one finger
gs('r',T(4,3)-.1,E(4)-.1,'fingers',HR_[0],HR_[1],{nf:t=>t<T(4,13)?2:1,rotf:t=>t<T(4,13)?0:wag(T(4,13),E(4)-.1)(t)});    // 4 two fingers, then one wags "no"
gs('r',T(5,3)-.2,E(5)-.05,'thumb',HR_[0],HR_[1]);                                                                       // 5 thumbs up
gs('r',T(6,16)-.1,E(6)-.1,'fist',665,1035);                                                                             // 6 (presenter shot) hand on chin
gs('r',T(7,3)-.1,E(7)-.1,'fingers',HR_[0],HR_[1],{n:1});                                                                 // 7 one finger up
gs('r',S(8)+.1,E(8)-.1,'fingers',HR_[0],HR_[1],{n:2});                                                                  // 8 two fingers up
gs('r',S(9)+.1,T(9,24)-.15,'fingers',HR_[0],HR_[1],{nf:t=>1+(t>T(9,3)+.05)+(t>T(9,4)+.05)+(t>T(9,5)+.05)});             // 9 counts on fingers
gs('r',S(10)-.05,T(10,3),'fist',665,1035);gs('r',T(10,3),E(10)+.15,'point',HR_[0],HR_[1],{rot:-.18});                    // 10 hand on chin, then points at the viewer
gs('r',S(11)+.05,T(11,11)-.2,'fingers',HR_[0],HR_[1],{n:1,rotf:wag(T(11,1),T(11,3)+.6,.4)});gs('r',T(11,11)-.2,E(11)-.1,'palm',950,950,{rotf:t=>-.28+.1*Math.sin((t-T(11,11))*2.4)}); // 11 wags "no", then a slow one-hand shrug
gs('r',S(12)+.15,T(12,10)-.1,'palm',HR_[0],HR_[1]);gs('r',T(12,10)-.1,E(12)-.1,'fingers',HR_[0],HR_[1],{nf:t=>1+(t>T(12,14)-.15)+(t>T(12,17)-.15)}); // 12 open palm, then counts 1, 2, 3
gs('r',S(14)-.05,T(14,2)+.25,'palm',HR_[0],HR_[1],{rotf:t=>.3*Math.sin(t*9)});                                           // 14 waves ...
gs('r',T(14,2)+.25,DURF+3,'point',950,965,{rot:-2.55});                                                                 // ... then points down at the button with a clear pointing hand

// ---------- the presenter: our stickman, huge and centred like a selfie (head top ~y 307, chin ~y 1017) ----------
const BL=[1.4,4.6,8.3,11.9,15.1,19.4,22.6,26.2,31.6,36.7,42.2,48.6,52.9,60.3,66.0,71.4,77.2,81.5];
const win=(t,a,b,d=.3)=>ease(seg(t,a,a+d))*(1-ease(seg(t,b-d,b)));
function presenter(x,t,cam,n){
 const lean=win(t,T(12,0),T(12,5),.5),sc=PS*(1+.035*lean),tw=(t>=S(n)&&t<=E(n))?1:0;
 const p={x:540,y:662+116*sc,s:sc,face:1,breath:t*2.1,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:0,lookY:.05,brow:.25,mouth:.8,mouthW:30,tilt:.025*Math.sin(t*1.3),headX:4.6*Math.cos(t*1.9),headY:4.6*Math.sin(t*1.9)+2.4*Math.sin(t*4.3)*tw,hsx:.85,hsy:1.088};
 p.open=talk(t,S(n),E(n));
 p.wide=win(t,T(1,11)-.1,T(1,11)+.9,.2);p.brow=.25+1.2*p.wide+1.0*win(t,S(10),E(10),.2)+.8*win(t,T(9,24),E(9),.2);
 p.headX+=12*Math.sin((t-T(4,13))*12)*win(t,T(4,13),T(4,17),.15);
 p.tilt+=.07*win(t,S(10),E(10),.3)+.05*lean;
 const py=p.y,bs=sc;
 // wide hoodie shoulders (same cloth colour as the rig's torso) so the chest fills the bottom of the frame
 x.fillStyle=HERO.cloth;x.beginPath();x.moveTo(380,py-8*bs);x.bezierCurveTo(190,py-6*bs,10,py+70*bs,-50,py+120*bs);x.lineTo(-50,H+60);x.lineTo(W+50,H+60);x.lineTo(W+50,py+120*bs);x.bezierCurveTo(W-10,py+70*bs,W-190,py-6*bs,700,py-8*bs);x.closePath();x.fill();
 p.noArm={l:true,r:true};drawPerson(x,HERO,p); // arms are drawn below with the hand, as one faded layer
 {const g=x.createLinearGradient(0,1250,0,H);g.addColorStop(0,'rgba(60,18,12,0)');g.addColorStop(1,'rgba(60,18,12,.28)');x.fillStyle=g;x.fillRect(0,1250,W,H-1250)}
 for(const h of ['l','r']){const st=handState(h,t);if(!st)continue;const g=st.g,sx=h=='r'?1:-1,br=Math.sin(p.breath)*3;
  const one=(gg,al)=>grp(x,al,m=>{ // arm (same limbs as the rig) + hand
    const s_=[(sx>0?1:-1)*(TW/2-34),34+br],tg=[(st.X-p.x)/sc,(st.Y-py)/sc],r=ik(s_,tg,UA,FA,sx>0?1:-1);
    m.save();m.translate(p.x,py);m.scale(sc,sc);limb(m,s_,r.e,66,54,HERO.hood);limb(m,r.e,r.h,54,44,HERO.hood);limb(m,s_,r.e,58,48,HERO.cloth);limb(m,r.e,r.h,46,38,HERO.cloth);m.restore();
    m.save();if(sx<0){m.translate(2*st.X,0);m.scale(-1,1)}const rr_=gg.rotf?gg.rotf(t):gg.rot;drawHand(m,st.X,st.Y,gg.kind,gg.nf?gg.nf(t):gg.n,sx<0?-rr_:rr_,1.6);m.restore()});
  if(st.pk){one(st.pk,st.al*(1-st.mu));one(g,st.al*st.mu)}else one(g,st.al)}
}

// ---------- INSETS: 720 x 420 at x 180, y 1356 (about 71-92%), sharp corners; drawn in their own local space; they ease in 0.45 s on scale and alpha ----------
function inset(x,t,t0,fn){const a=fin(t,t0,.45);if(a<=0)return;
 grp(x,a,m=>{const k=.9+.1*a;m.translate(INX+INW/2,INY+INH/2);m.scale(k,k);m.translate(-INW/2,-INH/2);m.save();m.beginPath();m.rect(0,0,INW,INH);m.clip();fn(m,t);m.restore()})}
function paper(x,cx,cy,w,h,rot,lines=3){x.save();x.translate(cx,cy);x.rotate(rot);rr(x,-w/2,-h/2,w,h,4,'#FBF6E8',INKC,3);x.fillStyle='#8A7AA8';for(let i=0;i<lines;i++)x.fillRect(-w/2+14,-h/2+14+i*14,i==lines-1?w*.4:w-28,6);x.restore()}
function gear(x,X,Y,r,col){x.save();x.translate(X,Y);x.fillStyle=col;for(let i=0;i<8;i++){x.rotate(Math.PI/4);x.fillRect(-r*.2,-r*1.28,r*.4,r*.5)}x.beginPath();x.arc(0,0,r,0,7);x.fill();x.fillStyle=CRM;x.beginPath();x.arc(0,0,r*.4,0,7);x.fill();x.restore()}
function okc(x,X,Y,r,a=1){if(a<=0)return;grp(x,a,m=>{m.save();m.translate(X,Y);const k=.6+.4*a;m.scale(k,k);m.fillStyle=INKC;m.beginPath();m.arc(0,0,r+5,0,7);m.fill();m.fillStyle=GREEN;m.beginPath();m.arc(0,0,r,0,7);m.fill();tick(m,0,2,r*.95,'#fff',r*.2);m.restore()})}
function hourglass(x,cx,top,bot,hw,u){const mid=(top+bot)/2,s=Math.max(2,hw*.1);
 for(const y of [top-s*1.8,bot]){rr(x,cx-hw-hw*.2,y,2*hw+hw*.4,s*1.8,s,AMB,INKC,Math.max(2,s*.4))}
 const poly=(ya,yb,w)=>{x.beginPath();x.moveTo(cx-w,ya);x.lineTo(cx+w,ya);x.lineTo(cx,yb);x.closePath()};
 x.save();poly(top,mid,hw);x.fillStyle='rgba(30,42,68,.08)';x.fill();x.clip();x.fillStyle=AMB;x.fillRect(cx-hw,lerp(top+2,mid-2,u),2*hw,(bot-top));x.restore();
 x.save();x.beginPath();x.moveTo(cx,mid);x.lineTo(cx-hw,bot);x.lineTo(cx+hw,bot);x.closePath();x.fillStyle='rgba(30,42,68,.08)';x.fill();x.clip();x.fillStyle=AMB;x.fillRect(cx-hw,lerp(bot,mid+(bot-mid)*.4,u),2*hw,(bot-top));x.restore();
 x.strokeStyle='#1E2A44';x.lineWidth=Math.max(3,s*.8);x.lineJoin='round';poly(top,mid,hw);x.stroke();x.beginPath();x.moveTo(cx,mid);x.lineTo(cx-hw,bot);x.lineTo(cx+hw,bot);x.closePath();x.stroke()}
// 2: info card, a small stickman at a laptop, a Claude chat bubble
function i2(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);txt(x,'ANTHROPIC · NOV 20, 2026',30,38,27,GREY,'left','800');x.fillStyle='#CFC6B2';x.fillRect(30,64,660,3);
 drawPerson(x,HERO,{x:118,y:300,s:.52,face:1,breath:t*2,noLegs:true,hands:{},showH:{},look:.6,lookY:-.05,brow:.3,mouth:.8,mouthW:26,open:talk(t,S(2),E(2)),blink:blinkAt(t,BL)});
 rr(x,176,270,190,112,10,'#2A2E3C');rr(x,188,282,166,88,4,'#2E6F7A');x.fillStyle='rgba(255,255,255,.55)';for(let i=0;i<3;i++)x.fillRect(200,296+i*20,i==2?70:130,8);
 x.fillStyle='#2A2E3C';x.beginPath();x.moveTo(160,384);x.lineTo(382,384);x.lineTo(366,400);x.lineTo(176,400);x.closePath();x.fill();
 const b=fin(t,T(2,7),.5);grp(x,b,m=>{m.save();m.translate(520,160);const k=.88+.12*b;m.scale(k,k);m.translate(-520,-160);
  m.fillStyle='#fff';m.strokeStyle=INKC;m.lineWidth=5;m.lineJoin='round';m.beginPath();m.moveTo(330,200);m.lineTo(262,266);m.lineTo(370,226);m.closePath();m.fill();m.stroke();
  m.beginPath();m.roundRect(330,86,370,142,26);m.fill();m.stroke();m.fillStyle='#fff';m.fillRect(334,200,40,22);
  m.fillStyle='#E4713F';m.beginPath();m.arc(366,120,13,0,7);m.fill();txt(m,'Claude',390,121,26,GREY,'left','800');
  txt(m,'a proof of the',515,160,33,'#1E2A44','center','800');txt(m,'Riemann hypothesis',515,200,33,'#1E2A44','center','800');m.restore()})}
// 3: primes appear, turn into dots ("special numbers that encode the primes"), a vertical line appears and the dots sit on it
function i3(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);
 const P=[2,3,5,7,11,13],t0=S(3)+.3,tm=T(3,3)+.2,tl=T(3,9),mo=ease(seg(t,tm,tm+.6)),ln=ease(seg(t,tl,tl+.7)),mv=ease(seg(t,tl+.3,tl+1.2));
 txt(x,'SPECIAL NUMBERS THAT ENCODE THE PRIMES',360,36,fit(x,'SPECIAL NUMBERS THAT ENCODE THE PRIMES',690,27),'#1E2A44','center','900',mo);
 x.strokeStyle='#1E2A44';x.lineWidth=6;x.lineCap='round';x.beginPath();x.moveTo(560,60);x.lineTo(560,lerp(60,404,ln));x.stroke();
 P.forEach((p,k)=>{const a=fin(t,t0+k*.1,.3),X0=70+k*116,X=lerp(X0,560,mv),Y=lerp(168,100+k*52,mv);
  if(a>0&&mo<1)txt(x,String(p),X0,Y-6,86,'#3A2418','center','900',a*(1-clamp(mo*1.8)));
  if(mo>.45){x.fillStyle=k<5?'#8A5A14':'#8A5A14';x.beginPath();x.arc(X,Y+6*(1-mv),19*clamp((mo-.45)/.55),0,7);x.fill();x.strokeStyle=INKC;x.lineWidth=3;x.stroke()}});
 const la=fin(t,tl+.9,.4);['RIEMANN: ALL THE','IMPORTANT ONES','ON THIS LINE'].forEach((s,i)=>txt(x,s,34,190+i*50,38,DRED,'left','900',la))}
// 4: 30 dots along the line, 20 turn green ("at least 2/3"), 10 stay grey with "?", one grey dot slides off the line in red
const DL=330,DY=i=>44+i*12.4,DX=i=>DL+(i%2?16:-16);
function dots30(x,gr,rogueU){x.strokeStyle='#1E2A44';x.lineWidth=5;x.lineCap='round';x.beginPath();x.moveTo(DL,22);x.lineTo(DL,418);x.stroke();
 for(let i=0;i<30;i++){const g=gr(i);if(g<0)continue;let X=DX(i),Y=DY(i),col=g>=1?GREEN:'#9C9486';
  if(i==25&&rogueU>0){X=lerp(X,540,ease(rogueU));col=rogueU>.4?RED:col}
  x.fillStyle=col;x.beginPath();x.arc(X,Y,i==25&&rogueU>0?14:10,0,7);x.fill();x.strokeStyle=INKC;x.lineWidth=2;x.stroke()}}
function i4(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);const a0=S(4)+.3,tg=T(4,3),tq=T(4,13),tr=T(4,17);
 grp(x,1,m=>{dots30(m,i=>fin(t,a0+i*.015,.2)>0?(i<20?(t>tg+i*.05?1:0):0):-1,seg(t,tr,tr+.9))});
 // dots appear one after another (alpha through the green/grey test only): hide not-yet-shown ones by covering is avoided; the whole column fades in with the inset itself
 const gl=fin(t,tg+.2,.4);['SHOWN TO','FOLLOW IT:'].forEach((s,i)=>txt(x,s,24,92+i*38,32,GREEN,'left','900',gl));txt(x,'AT LEAST 2/3',24,188,fit(x,'AT LEAST 2/3',250,40),GREEN,'left','900',gl);
 x.strokeStyle=GREEN;x.lineWidth=5;x.beginPath();x.moveTo(306,44);x.lineTo(296,44);x.lineTo(296,DY(19));x.lineTo(306,DY(19));x.globalAlpha=gl;x.stroke();x.globalAlpha=1;
 txt(x,'?',150,352,130,'#7A7468','left','900',fin(t,tq,.4));
 const rl=fin(t,tr+.5,.4);['IF ONE BROKE IT,','IT WOULD SINK','THE PREDICTION'].forEach((s,i)=>txt(x,s,396,86+i*42,31,RED,'left','900',rl))}
// 5: all 30 turn green: "PROVED: EVERY ONE"
function i5(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);const tp=T(5,3);
 dots30(x,i=>i<20?1:(t>tp+(i-20)*.07?1:0),0);
 const a=fin(t,tp+.5,.45);txt(x,'PROVED:',24,130,48,GREEN,'left','900',a);txt(x,'EVERY ONE',24,196,fit(x,'EVERY ONE',270,56),GREEN,'left','900',a);okc(x,150,300,46,fin(t,tp+.5,.4))}
// 7: first card (what if it proved a different claim: every step ticked, red not-equal), then the real card with two tools each putting a green "="
function i7(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);const sw=T(7,9)-.1,a1=1-fin(t,sw-.3,.3),a2=fin(t,sw+.15,.35);
 if(a1>0)grp(x,a1,m=>{const q='WHAT IF IT PROVED A SLIGHTLY DIFFERENT CLAIM?';txt(m,'WHAT IF IT PROVED A',360,50,36,'#1E2A44','center','900');txt(m,'SLIGHTLY DIFFERENT CLAIM?',360,96,fit(m,'SLIGHTLY DIFFERENT CLAIM?',660,36),'#1E2A44','center','900');
  for(let k=0;k<5;k++){const X=36+k*134,g=fin(t,T(7,3)+k*.18,.25);rr(m,X,150,104,84,8,'#E7E0CE','#BDB39C',3);txt(m,String(k+1),X+52,176,30,GREY,'center','900');if(g>0){m.save();m.globalAlpha*=g;tick(m,X+52,208,32,GREEN,8);m.restore()}if(k<4){m.strokeStyle='#BDB39C';m.lineWidth=4;m.beginPath();m.moveTo(X+104,192);m.lineTo(X+134,192);m.stroke()}}
  txt(m,'≠ THE RIEMANN HYPOTHESIS',360,320,fit(m,'≠ THE RIEMANN HYPOTHESIS',670,48),RED,'center','900',fin(t,T(7,6),.4))});
 if(a2>0)grp(x,a2,m=>{rr(m,24,100,250,170,8,'#FBF6E8','#1E2A44',5);txt(m,'WHAT WAS',149,160,40,'#1E2A44','center','900');txt(m,'PROVED',149,214,46,'#1E2A44','center','900');
  rr(m,446,100,250,170,8,'#FBF6E8','#1E2A44',5);txt(m,'THE STANDARD',571,160,fit(m,'THE STANDARD',220,38),'#1E2A44','center','900');txt(m,'STATEMENT',571,214,fit(m,'STATEMENT',220,38),'#1E2A44','center','900');
  [[T(7,9)+.1,T(7,12)],[T(7,10)+.1,T(7,12)+.5]].forEach(([tt,te],k)=>{const Y=146+k*80,ga=fin(t,tt,.35),e=fin(t,te,.3);
   if(ga>0){gear(m,326,Y,16,'#4A5568');m.save();m.globalAlpha*=ga;m.restore()}
   if(e>0)grp(m,e,q=>{q.save();q.translate(386,Y);const kk=.6+.4*e;q.scale(kk,kk);q.fillStyle=GREEN;q.fillRect(-26,-17,52,11);q.fillRect(-26,6,52,11);q.restore()})})})}
// 8: a TOY EXAMPLE proof of 3 steps in a LEAN window: the checker ticks step 1, stamps a red X on step 2
function i8(x,t){x.fillStyle=NAVY;x.fillRect(0,0,INW,INH);txt(x,'LEAN',32,38,30,MINT,'left','800',1,'Menlo, monospace');txt(x,'TOY EXAMPLE',688,38,26,AMB,'right','800',1,'Menlo, monospace');x.fillStyle='rgba(255,255,255,.28)';x.fillRect(32,66,656,2);
 const t1=T(8,12),t2=T(8,15),rows=['x = 2','so x + 1 = 5','so x = 4'];
 rows.forEach((s,k)=>{const Y=88+k*84,sc_=k==0?fin(t,t1,.3):0,bad=k==1?fin(t,t2,.2):0,dim=k==2?fin(t,t2+.2,.4):0;
  rr(x,32,Y,656,70,6,'#1B2D40',bad>.3?RED:(sc_>.3?GREEN:'rgba(255,255,255,.35)'),4);txt(x,String(k+1),70,Y+36,38,CRM,'center','900',1-.5*dim);txt(x,s,120,Y+36,40,CRM,'left','800',1-.5*dim,'Menlo, monospace');
  if(k==0&&sc_>0){x.save();x.globalAlpha*=sc_;x.fillStyle=GREEN;x.beginPath();x.arc(640,Y+35,26,0,7);x.fill();tick(x,640,Y+36,36,'#fff',8);x.restore()}
  if(k==1&&bad>0){x.save();x.globalAlpha*=bad;const k2=1.4-.4*bad;x.translate(640,Y+35);x.scale(k2,k2);x.fillStyle=RED;x.beginPath();x.arc(0,0,28,0,7);x.fill();x.strokeStyle='#fff';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-12,-12);x.lineTo(12,12);x.moveTo(12,-12);x.lineTo(-12,12);x.stroke();x.restore()}});

 txt(x,"DOESN'T FOLLOW: REJECTED",360,370,fit(x,"DOESN'T FOLLOW: REJECTED",660,40),'#FF7A6E','center','900',fin(t,t2+.15,.35))}
// 9: several checker boxes, each a green tick; two wear a badge "PROVED: CAN'T ACCEPT A FALSE PROOF (RELATIVE TO SET THEORY)"
const CKX=[T(9,1)+.05,T(9,3),T(9,4),T(9,5)];
function i9(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);
 CKX.forEach((tt,k)=>{const X=24+k*174,a=fin(t,S(9)+.3+k*.12,.3);if(a<=0)return;grp(x,a,m=>{rr(m,X,36,150,128,10,'#1E2A44');rr(m,X+14,50,122,66,4,'#2E6F7A');m.fillStyle='rgba(255,255,255,.6)';for(let i=0;i<3;i++)m.fillRect(X+26,62+i*16,i==2?44:84,7);gear(m,X+36,138,11,'#9FB3C8')});
  okc(x,X+120,148,26,fin(t,tt,.3))});
 const b=fin(t,T(9,10),.5);if(b>0)grp(x,b,m=>{for(const k of [2,3]){const X=24+k*174;m.fillStyle=AMB;m.strokeStyle=INKC;m.lineWidth=3;m.beginPath();m.arc(X+22,50,19,0,7);m.fill();m.stroke();txt(m,'★',X+22,52,24,'#1B1430','center','900')}
  rr(m,24,206,672,190,12,'#FBF6E8',AMB,7);txt(m,"PROVED: CAN'T ACCEPT",360,252,fit(m,"PROVED: CAN'T ACCEPT",620,50),'#1E2A44','center','900');txt(m,'A FALSE PROOF',360,310,fit(m,'A FALSE PROOF',620,56),'#1E2A44','center','900');txt(m,'(RELATIVE TO SET THEORY)',360,362,fit(m,'(RELATIVE TO SET THEORY)',620,32),GREY,'center','800')})}
// 11: the CERTIFIED stamp, beside it a thought bubble "WHY?" with an hourglass
function i11(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);
 x.save();x.translate(170,215);x.rotate(-.1);rr(x,-140,-62,280,124,10,null,GREEN,10);txt(x,'CERTIFIED',0,4,52,GREEN,'center','900');x.restore();
 const b=fin(t,T(11,7),.5);grp(x,b,m=>{m.save();m.translate(520,200);const k=.8+.2*b;m.scale(k,k);m.fillStyle='#fff';m.strokeStyle=INKC;m.lineWidth=5;
  for(const [cx,cy,r] of [[-200,90,10],[-170,62,16],[-134,30,22]]){m.beginPath();m.arc(cx,cy,r,0,7);m.fill();m.stroke()}
  m.beginPath();m.ellipse(0,-6,172,172*.0+150,0,0,7);m.fill();m.stroke();m.restore()});
 txt(x,'WHY?',520,116,64,'#1E2A44','center','900',fin(t,T(11,9),.4));
 const h=fin(t,T(11,15)-.3,.5);if(h>0)grp(x,h,m=>hourglass(m,520,170,300,52,ease(seg(t,T(11,15),E(11)+.3))))}
// 12: FIND / CHECK / UNDERSTAND cards: FIND (stickman + Claude) and CHECK (a machine) tick green, UNDERSTAND (a stickman thinking) gets an hourglass and an arrow to "BUILD ON IT"
function i12(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);
 const names=['FIND','CHECK','UNDERSTAND'],ta=[T(12,4),T(12,5),T(12,6)];
 names.forEach((nm,k)=>{const X=10+k*242,a=fin(t,ta[k],.35);if(a<=0)return;grp(x,a,m=>{m.save();const cx=X+108;m.translate(cx,170);const kk=.88+.12*a;m.scale(kk,kk);m.translate(-cx,-170);
  rr(m,X,30,216,284,12,'#FBF6E8','#1E2A44',5);txt(m,nm,cx,64,fit(m,nm,196,36),'#1E2A44','center','900');
  if(k==0){drawPerson(m,HERO,{x:cx-24,y:240,s:.4,face:1,breath:t*2,noLegs:true,hands:{},showH:{},look:.4,brow:.3,mouth:.8,mouthW:24,blink:blinkAt(t,BL)});m.fillStyle='#E4713F';m.beginPath();m.arc(cx+62,140,26,0,7);m.fill();m.strokeStyle='#fff';m.lineWidth=6;m.lineCap='round';for(let i=0;i<4;i++){const an=i*Math.PI/4;m.beginPath();m.moveTo(cx+62-Math.cos(an)*13,140-Math.sin(an)*13);m.lineTo(cx+62+Math.cos(an)*13,140+Math.sin(an)*13);m.stroke()}}
  if(k==1){rr(m,cx-58,110,116,92,8,'#1E2A44');rr(m,cx-48,120,96,52,4,'#2E6F7A');m.fillStyle='rgba(255,255,255,.6)';for(let i=0;i<3;i++)m.fillRect(cx-38,128+i*14,i==2?36:64,6);gear(m,cx,232,24,'#4A5568')}
  if(k==2){drawPerson(m,HERO,{x:cx-8,y:238,s:.4,face:1,breath:t*2,noLegs:true,hands:{},showH:{},look:-.6,lookY:-.4,brow:.9,mouth:-.2,mouthW:16,blink:blinkAt(t,BL)});m.fillStyle='#fff';m.strokeStyle=INKC;m.lineWidth=4;for(const [qx,qy,r] of [[cx+30,116,6],[cx+44,102,9]]){m.beginPath();m.arc(qx,qy,r,0,7);m.fill();m.stroke()}}
  m.restore()});
  });
 okc(x,10+108+70,282,25,fin(t,T(12,12),.3));okc(x,252+108+70,282,25,fin(t,T(12,15),.3));
 const hg=fin(t,T(12,21),.4);if(hg>0)grp(x,hg,m=>hourglass(m,494+108+70,246,296,22,ease(seg(t,T(12,21),T(12,27)+.4))));
 const ar=fin(t,T(12,24),.35);if(ar>0)grp(x,ar,m=>{m.strokeStyle=DRED;m.lineWidth=10;m.lineCap='round';m.lineJoin='round';m.beginPath();m.moveTo(602,322);m.lineTo(602,352);m.moveTo(586,338);m.lineTo(602,355);m.lineTo(618,338);m.stroke();pill(m,540,386,320,52,AMB);txt(m,'BUILD ON IT',540,388,36,'#1B1430','center','900')})}
// 14: Subscribe button clicked by a cursor, and the comment bubble
function i14(x,t){x.fillStyle=CRM;x.fillRect(0,0,INW,INH);const ck=T(14,2)+.7,pr=Math.max(0,1-Math.abs(t-ck)/.15);
 x.save();x.translate(340,120);const k=1-.06*pr;x.scale(k,k);pill(x,0,0,480,120,INKC);pill(x,0,0,460,104,pr>0?'#B8382F':RED);x.fillStyle=CRM;x.beginPath();x.moveTo(-170,-26);x.lineTo(-170,26);x.lineTo(-126,0);x.closePath();x.fill();txt(x,'Subscribe',40,3,62,CRM,'center','800');x.restore();
 const u=seg(t,T(14,2)+.1,ck),cx=lerp(600,400,ease(u)),cy=lerp(250,150,ease(u));
 const cm=fin(t,T(14,4),.5);grp(x,cm,m=>{const S1='COMMENT: WHAT NEXT?',fs=fit(m,S1,540,44),w=mw(m,S1,fs)+80,h=110;m.save();m.translate(360,318);const kk=.8+.2*cm;m.scale(kk,kk);m.fillStyle=AMB;m.strokeStyle=INKC;m.lineWidth=6;m.lineJoin='round';
  m.beginPath();m.roundRect(-w/2,-h/2,w,h,h/2);m.fill();m.stroke();m.beginPath();m.moveTo(-w/2+70,h/2-3);m.lineTo(-w/2+30,h/2+34);m.lineTo(-w/2+120,h/2-3);m.closePath();m.fill();m.stroke();m.fillRect(-w/2+76,h/2-10,40,12);txt(m,S1,0,3,fs,'#1B1430','center','900');m.restore()});
 x.save();x.translate(cx,cy);x.scale(1-.12*pr,1-.12*pr);x.fillStyle='#fff';x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';x.beginPath();x.moveTo(0,0);x.lineTo(0,70);x.lineTo(18,54);x.lineTo(36,92);x.lineTo(52,85);x.lineTo(34,48);x.lineTo(58,46);x.closePath();x.fill();x.stroke();x.restore()}
const INSETS=[[1,S(2)+.25,i2],[2,S(3)+.25,i3],[3,S(4)+.25,i4],[4,S(5)+.25,i5],[7,S(7)+.25,i7],[8,S(8)+.25,i8],[9,S(9)+.25,i9],[12,S(11)+.25,i11],[13,T(12,3)+.1,i12],[15,S(14)+.25,i14]]; // [shot index, start, drawing]

// ---------- FULLs: the picture fills the frame, chip and subtitle stay on top (keep y 1110-1340 clear) ----------
function fullBg(x,t){x.fillStyle=NAVY;x.fillRect(-10,-10,W+20,H+20);if(t!=null){x.save();x.globalAlpha=.55;codeRows(x,t,90);x.restore();const g=x.createLinearGradient(0,980,0,1400);g.addColorStop(0,'rgba(15,27,40,0)');g.addColorStop(.5,'rgba(15,27,40,.92)');g.addColorStop(1,'rgba(15,27,40,.95)');x.fillStyle=g;x.fillRect(0,980,W,H-980)}}
function codeRows(x,t,sp){const sc=t*sp,base=Math.floor(sc/58),pal=[TEAL,AMB,LAV,'#7AD0FF','#FF8FA3'];for(let i=-1;i<35;i++){const id=base+i,r=rng(id*7919+13),y=i*58-(sc%58),ind=Math.floor(r()*4)*44;let X=40+ind;const nseg=2+Math.floor(r()*4);for(let k=0;k<nseg;k++){const w=44+r()*190;x.fillStyle=pal[Math.floor(r()*5)];x.globalAlpha*=.4;x.fillRect(X,y,w,20);x.globalAlpha/=.4;X+=w+16;if(X>W-40)break}}}
// f6: code scrolling behind an odometer counter that rolls up to 17 MILLION: one whole number on screen at a time, digits roll vertically inside their own boxes (never two numbers stacked)
function f6(x,t){fullBg(x);codeRows(x,t,200);{const g=x.createLinearGradient(0,1000,0,1500);g.addColorStop(0,'rgba(15,27,40,0)');g.addColorStop(.35,'rgba(15,27,40,.9)');g.addColorStop(1,'rgba(15,27,40,.95)');x.fillStyle=g;x.fillRect(0,1000,W,H-1000)}
 const g=x.createRadialGradient(540,560,60,540,560,600);g.addColorStop(0,'rgba(15,27,40,.96)');g.addColorStop(1,'rgba(15,27,40,0)');x.fillStyle=g;x.fillRect(0,0,W,1100);
 const t0=S(6)+.1,t1=T(6,4)+.6,v=1+16*clamp((t-t0)/(t1-t0)),n=Math.min(17,Math.floor(v)),fr=v-n,pu=n>=17?1:ease(seg(fr,0,.3)); // one whole number at a time, held; a small scale/brightness settle at each change
 x.save();x.translate(540,490);const k=.94+.06*pu;x.scale(k,k);txt(x,String(n),0,0,380,AMB,'center','900',.8+.2*pu);x.restore();
 txt(x,'MILLION',540,800,150,CRM,'center','900')}
function f9(x,t){fullBg(x,t);const c0=CF[10]/30,u=ease(seg(t,c0,c0+.9)),a=ease(seg(t,c0,c0+.6));
 grp(x,a,m=>{m.translate(540,620);m.rotate(-.07);const k=lerp(1.06,1,u);m.scale(k,k);rr(m,-440,-240,880,480,12,CRM,GREEN,24);txt(m,'CERTIFIED',0,-100,fit(m,'CERTIFIED',700,150),GREEN,'center','900');txt(m,'CORRECT',0,30,fit(m,'CORRECT',700,130),GREEN,'center','900');txt(m,'NOV 21',0,150,70,GREEN,'center','900')})}
function f13(x,t){fullBg(x,t);const e=fin(t,CF[14]/30,.4);grp(x,e,m=>{pill(m,540,300,640,120,AMB);txt(m,'WHAT WE LEARNED',540,304,fit(m,'WHAT WE LEARNED',590,76),'#1B1430','center','900')});
 txt(x,'A PROVEN CHECKER',540,470,fit(x,'A PROVEN CHECKER',900,112),CRM,'center','900',fin(t,T(13,4),.45));
 txt(x,'ON THE RIGHT QUESTION:',540,580,fit(x,'ON THE RIGHT QUESTION:',900,100),CRM,'center','900',fin(t,T(13,7),.45));
 const r=fin(t,T(13,13),.45);txt(x,"IT'S RIGHT.",470,720,132,GREEN,'center','900',r);okc(x,860,718,66,fin(t,T(13,14),.4));
 const w=fin(t,T(13,16),.45);txt(x,'UNDERSTANDING:',540,860,fit(x,'UNDERSTANDING:',900,112),CRM,'center','900',fin(t,T(13,15),.45));txt(x,'WHY.',540,990,170,AMB,'center','900',w)}
const FULLS=[[5,f6],[10,f9],[14,f13]]; // shot index of each FULL

// ---------- the film ----------
FILM={dur:DURF,cuts:CF,fadeIn:0,fadeOut:.5,plain:true,
 cam(s,u){return {x:540,y:960,z:1,b:[0,0,0]}},
 draw(t,cam,s){const o=t+1e-6,x=layer('board',cam),ln=SL[s];wall(x);presenter(x,o,cam,ln);
  for(const [sh,t0,fn] of INSETS)if(s==sh)inset(x,o,t0,fn);
  for(const [i,fn] of FULLS)if(s==i){x.save();fn(x,o);x.restore()}
  comp([['board',0]]);ctx.setTransform(1,0,0,1,0,0);band(ctx,o)},
 plants(){return {}}};
// ---------- sound events (mix in audio_mix.py): whoosh on every FULL, thud on CERTIFIED, a tick on every green tick, each on its word ----------
for(const [i] of FULLS)say(CF[i]/30-.02,'whoosh');
say(T(9,24)+.12,'thud');
for(const t of [T(7,12),T(7,12)+.5,T(8,12),...CKX,T(12,12),T(12,15),T(13,14)])say(t+.05,'tick');
renderAt(3);renderAt(60); // warm-up: the first frame ever drawn (text shadows) differed from the same frame drawn later (audit determinism)
