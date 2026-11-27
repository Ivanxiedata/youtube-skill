// Episode: GPT-6.2 Astra & Sol, told as a taxi fare (rate x miles; the route sets the miles). You = the mascot (coral hoodie, amber flat cap with a dusk-purple band); the AI drivers = robots with teal screen heads.
// Vertical 1080x1920. 23 shots (beats.md's 21, with shot 8 and shot 14 split at a measured pause so none passes 5 s). Voice laid in at VOICE_AT (audio_mix.py): film time = voice time + .5.
// Every cut time below is a FILM second taken from a measured silence of vo.wav (the pause after "model:", commas, colons, line gaps), never typed by hand (L36, L53).
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random. Digits drawn: 6.2, 6, 20%, 60s only (every one is spoken). Every text is 44 px or more and drawn at scale 1.0.
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',DARK='#1B1430',PANEL='#2A1F42',MINT='#BFF2EE',GREY='#8C8299',GREYL='#C9C0D6',DUSK='#2A1C46';
const WARN=[];window.WARN=WARN;
function txt(x,s,X,Y,size,col,al='left',wt='900',a=1){if(a<=0)return;if(size<44)size=44;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`bold ${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function tw(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`bold ${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function mixC(a,b,u){const p=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));const A=p(a),B=p(b);u=clamp(u);return '#'+A.map((v,i)=>Math.round(lerp(v,B[i],u)).toString(16).padStart(2,'0')).join('')}
/* a card with TEXT: the box eases in on scale+alpha, the text only on alpha at scale 1.0 (L48) */
function boxIn(x,cx,cy,a,s0,drawBox,drawText){if(a<=0)return;x.save();x.globalAlpha*=a;const k=s0+(1-s0)*a;x.translate(cx,cy);x.scale(k,k);x.translate(-cx,-cy);drawBox();x.restore();x.save();x.globalAlpha*=a;drawText();x.restore()}
/* a label: dark pill with 1-3 lines at 44 px or more, kept inside x 112-878 unless o.free */
function lab(x,lines,cx,cy,size,col,o={}){if(typeof lines=='string')lines=[lines];const z=Math.max(44,size||44);
 const w=Math.max(...lines.map(s=>tw(x,s,z)))+52,lh=z*1.25,h=lh*lines.length+22;let X=cx;if(!o.free){X=clamp(cx,112+w/2,878-w/2)}
 if(w>766)WARN.push('lab too wide '+Math.round(w)+' '+lines.join('|'));
 const a=o.a===undefined?1:o.a;
 boxIn(x,X,cy,a,o.s0===undefined?.9:o.s0,()=>rr(x,X-w/2,cy-h/2,w,h,22,o.bg||'rgba(18,10,28,.92)',o.line||null,o.lw||4),
  ()=>lines.forEach((s,i)=>txt(x,s,X,cy-(lines.length-1)*lh/2+i*lh+2,z,Array.isArray(col)?col[i]:col,'center')));return {w,h,X,z}}
/* a dashed horizontal or vertical line drawn as short strokes (no setLineDash) */
function dashed(x,x0,y0,x1,y1,col,lw=6,dl=20,gp=14){const L_=Math.hypot(x1-x0,y1-y0),ux=(x1-x0)/L_,uy=(y1-y0)/L_;x.save();x.strokeStyle=col;x.lineWidth=lw;x.lineCap='butt';for(let d=0;d<L_;d+=dl+gp){const e=Math.min(L_,d+dl);x.beginPath();x.moveTo(x0+ux*d,y0+uy*d);x.lineTo(x0+ux*e,y0+uy*e);x.stroke()}x.restore()}

/* THE CLOCK: cut times of the 23 shots (film seconds) = measured silences of vo.wav + .5 (the title cut sits in the pause after "model:", L36) */
const TS=[0,3.18,4.49,7.48,11.17,12.85,15.87,17.38,18.60,20.63,23.88,26.80,29.18,31.40,34.38,35.95,38.28,40.48,42.53,44.30,47.63,49.88,51.60];
const DUR=56.4;
const CF=TS.map(t=>Math.round(t*30)).concat([Math.round(DUR*30)]);
const ST=i=>CF[i]/30;

// ---------- the cast: the mascot with the cabbie's cap, the robot drivers ----------
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s)}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the amber flat cap with a dusk-purple band, in head-local units (head radius 96); its lower edge stays above the brows */
function cap(x){x.save();x.lineJoin='round';x.lineWidth=5;x.strokeStyle=INKC;
 x.fillStyle=AMB;x.beginPath();x.moveTo(-92,-54);x.quadraticCurveTo(-104,-150,0,-148);x.quadraticCurveTo(104,-150,92,-54);x.closePath();x.fill();x.stroke();
 x.fillStyle='#3B2A6B';x.beginPath();x.roundRect(-94,-78,188,28,8);x.fill();x.stroke();
 x.fillStyle=AMB;x.beginPath();x.roundRect(30,-62,128,20,10);x.fill();x.stroke();
 x.beginPath();x.arc(0,-148,7,0,7);x.fillStyle='#D9962A';x.fill();x.restore()}
function mascot(x,t,cam,o){const s=o.s||.7,p={x:o.x,y:standY(o.floor,s),s,face:1,breath:t*2,blink:blinkAt(t,BL),hands:o.hands||{},showH:o.showH||{},look:o.look===undefined?.4:o.look,lookY:o.lookY===undefined?.1:o.lookY,brow:o.brow===undefined?.2:o.brow,mouth:o.mouth===undefined?.5:o.mouth,mouthW:28,tilt:o.tilt||0};
 actor(x,'hero',HERO,p,cam);x.save();headT(x,p);cap(x);x.restore();return p}
const HP_T={frame:'#187E86',ear:'#0E4A50',s1:'#46D0CB',s2:TEAL,face:'#0B3A40'};
/* a robot head (teal screen face), centre (cx,cy), scale k */
function robotHead(x,cx,cy,k,t=0,ph=0){x.save();x.translate(cx,cy);x.scale(k,k);const hp=HP_T;
 x.fillStyle=hp.ear;x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,hp.frame,hp.ear,5);
 const g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,hp.s1);g.addColorStop(1,hp.s2);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=blinkAt(t+ph,BL);x.fillStyle=hp.face;for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle=hp.face;x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,58,34,36);x.stroke();x.restore()}

// ---------- the world: street at dusk, the taxi ----------
function bgDusk(x,warm=.3,cx=489,cy=700){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 x.fillStyle='rgba(255,226,190,.07)';for(let i=0;i<7;i++)x.fillRect(-900,330+i*88,W+1800,4)}
function ground(x,y){x.fillStyle='#3B2F5C';x.fillRect(-900,y,W+1800,900);x.fillStyle='rgba(255,226,190,.35)';x.fillRect(-900,y,W+1800,5)}
function street(x,KY){let g=x.createLinearGradient(0,-300,0,KY);g.addColorStop(0,'#1A1230');g.addColorStop(.55,'#3B2A66');g.addColorStop(1,'#8A5486');x.fillStyle=g;x.fillRect(-900,-600,W+1800,KY+600);
 g=x.createRadialGradient(489,KY-420,40,489,KY-420,900);g.addColorStop(0,'rgba(255,196,130,.3)');g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,2600);
 const r=rng(11);let px=-300;while(px<W+300){const bw=70+r()*90,bh=140+r()*260;x.fillStyle=r()<.5?'#2B1F4D':'#352761';x.fillRect(px,KY-130-bh,bw,bh+130);
  for(let wy=KY-130-bh+24;wy<KY-190;wy+=54)for(let wx=px+14;wx<px+bw-26;wx+=34){const on=r()<.35;x.fillStyle=on?'rgba(255,200,120,.75)':'rgba(20,12,36,.5)';x.fillRect(wx,wy,18,26)}px+=bw+6}
 x.fillStyle='#2A2040';x.fillRect(-900,KY-120,W+1800,120);x.fillStyle='rgba(255,220,170,.35)';for(let i=-1;i<9;i++)x.fillRect(i*160+20,KY-66,90,6);
 x.fillStyle='#7A688F';x.fillRect(-900,KY,W+1800,24);x.fillStyle='#34294F';x.fillRect(-900,KY+24,W+1800,900);
 x.strokeStyle='rgba(20,12,36,.35)';x.lineWidth=3;for(let i=-4;i<12;i++){x.beginPath();x.moveTo(i*200,KY+24);x.lineTo(i*260-200,KY+520);x.stroke()}}
/* an amber taxi seen from the side, facing right; cx = centre, gy = the ground line under its wheels; 360 wide at s=1 */
function taxi(x,cx,gy,s,sign,o={}){x.save();x.translate(cx,gy);x.scale(s,s);const body=o.body||AMB;
 x.fillStyle='rgba(8,4,20,.4)';x.beginPath();x.ellipse(0,2,196,11,0,0,7);x.fill();
 if(o.ring){x.save();x.strokeStyle=TEAL;x.lineWidth=12;x.lineJoin='round';x.beginPath();x.roundRect(-206,-262,412,284,34);x.stroke();x.restore()}
 rr(x,-180,-100,360,68,[20,26,12,12],body,INKC,5);x.fillStyle='#D9962A';x.fillRect(-176,-62,352,8);
 rr(x,-112,-172,206,76,[36,46,0,0],body,INKC,5);
 rr(x,-96,-158,170,52,[24,32,4,4],DUSK,INKC,4);
 if(o.robot!==false)robotHead(x,28,-132,.24,o.t||0,o.ph||0);
 rr(x,-116,-234,232,62,14,'#14101F',AMB,5);txt(x,sign,0,-203,44,AMB,'center');
 rr(x,164,-90,18,22,6,'#FFF2C8',INKC,3);
 x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.moveTo(-8,-98);x.lineTo(-8,-40);x.stroke();
 for(const wx of [-112,112]){x.fillStyle='#1C1430';x.beginPath();x.arc(wx,-34,40,0,7);x.fill();x.fillStyle='#14111F';x.beginPath();x.arc(wx,-34,32,0,7);x.fill();x.fillStyle=GREY;x.beginPath();x.arc(wx,-34,13,0,7);x.fill()}
 x.restore()}
/* the price board: title PRICE PER TOKEN, rows [name, dollars, hl 0..1 (teal), alpha] */
function priceBoard(x,cx,top,rows,o={}){const fz=o.fz||48,RH=o.rh||88,w=o.w||Math.min(766,Math.max(600,Math.max(...rows.map(r=>tw(x,r[0],fz)+tw(x,r[1],fz+4)+120))+60)),h=88+rows.length*RH+16,a=o.a===undefined?1:o.a;
 if(w>766)WARN.push('board too wide '+w);
 boxIn(x,cx,top+h/2,a,o.s0===undefined?.92:o.s0,()=>rr(x,cx-w/2,top,w,h,26,'rgba(27,20,48,.96)',o.edge||AMB,6),()=>{
  txt(x,'PRICE PER TOKEN',cx,top+46,52,AMB,'center');x.fillStyle='rgba(248,233,204,.25)';x.fillRect(cx-w/2+30,top+88-2,w-60,3);
  rows.forEach((r,i)=>{const cy=top+88+RH*i+RH/2+8,hl=r[2]||0,ra=r[3]===undefined?1:r[3];if(ra<=0)return;
   x.save();x.globalAlpha*=ra;if(hl>0){rr(x,cx-w/2+16,cy-RH/2+6,w-32,RH-12,18,'rgba(45,178,174,'+(.25*hl)+')',mixC('#1B1430',TEAL,hl),5)}
   txt(x,r[0],cx-w/2+40,cy,fz,hl>0?MINT:CREAM,'left');txt(x,r[1],cx+w/2-40,cy,fz+4,AMB,'right');x.restore()})});
 return {w,h,rowY:i=>top+88+RH*i+RH/2+8}}
/* the screen-space tag (corner), tab, sticker */
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 44px Arial';const S='GPT-6.2',tw_=x.measureText(S).width,dw=x.measureText(' ·').width;const L0=60,w=26+tw_+dw+18+130+22,cy=134;
 pill(x,L0+w/2,cy,w,68,'rgba(27,20,48,.92)');txt(x,S,L0+26,cy+2,44,AMB,'left','800');txt(x,' ·',L0+26+tw_,cy+2,44,CREAM,'left','800');pill(x,L0+26+tw_+dw+18+65,cy,130,56,AMB);txt(x,'60s',L0+26+tw_+dw+18+65,cy+2,44,DARK,'center','800');x.restore()}
function tab(t,s,e,lab_,col){if(t<s||t>e)return;const v=1-fin(t,e-.5,.5);const x=ctx;x.save();x.font='900 44px Arial';const w=x.measureText(lab_).width+60;x.restore();const cy=242,L0=60;if(L0+w>918)WARN.push('tab too wide '+(L0+w));pill(x,L0+w/2,cy,w,66,col,v);txt(x,lab_,L0+w/2,cy+2,44,DARK,'center','900',v)}
function sticker(x,fs){x.font=`bold ${fs}px Impact, "Arial Black", sans-serif`;const sw=x.measureText('IN 60 SECONDS').width+70;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-sw/2-10,-fs*.74,sw+20,fs*1.48,30);x.fill();x.fillStyle=RED;x.beginPath();x.roundRect(-sw/2,-fs*.64,sw,fs*1.28,22);x.fill();
 x.fillStyle='#FFF6E6';x.textBaseline='middle';x.textAlign='left';x.fillText('IN 60 SECONDS',-sw/2+35,fs*.06)}

// ---------- shot 0: the title card, up to the measured pause after "model:" ----------
function drawTitle(t){const x=ctx;x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;x.filter='none';x.globalCompositeOperation='source-over';
 let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#120C22');g.addColorStop(.5,'#2A1C46');g.addColorStop(.58,'#56305E');g.addColorStop(1,'#170F2B');x.fillStyle=g;x.fillRect(0,0,W,H);
 g=x.createRadialGradient(489,820,60,489,820,980);g.addColorStop(0,'rgba(255,196,120,.55)');g.addColorStop(.4,'rgba(238,110,104,.28)');g.addColorStop(1,'rgba(228,90,110,0)');x.fillStyle=g;x.fillRect(0,0,W,H);
 x.save();x.translate(489,H/2);const z=1+.03*Math.min(1,t/ST(1));x.scale(z,z);x.translate(-489,-H/2);
 x.textAlign='center';x.textBaseline='alphabetic';x.lineJoin='round';
 const font=q=>`bold ${q}px Impact, "Arial Black", sans-serif`;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 x.font=font(100);const s1=100*740/x.measureText('GPT-6.2').width,s2=100*740/x.measureText('ASTRA & SOL').width,s0=100*700/x.measureText('LEARN OPENAI\'S').width;
 const y0=600;put('LEARN OPENAI\'S',489,y0,Math.min(110,s0),CREAM);put('GPT-6.2',489,y0+s1*.82,s1,AMB);put('ASTRA & SOL',489,y0+s1*.82+s2*.98,s2,AMB);
 x.save();x.translate(489,1390);x.rotate(-.035);sticker(x,96);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}

// ---------- shot 1: two taxis under the price-per-token board, the rider chooses ----------
const KY=1140;
function shot1(t,cam){const x=layer('board',cam),T=ST(1);street(x,KY);
 x.fillStyle='#14101F';x.fillRect(298,720,16,KY-820);x.fillRect(664,720,16,KY-820);
 priceBoard(x,489,500,[['ASTRA','$$$$'],['SOL','$']],{fz:56,rh:96,w:620});
 taxi(x,300,KY-4,1,'ASTRA',{t,ph:0});taxi(x,680,KY-4,1,'SOL',{t,ph:1.3});
 ground(x,KY+24);
 const look=kf(t,[[T,.15],[T+.6,.15],[T+1.0,1]]);
 mascot(x,t,cam,{x:250,floor:1610,s:.6,look,lookY:-.45,brow:.4,mouth:.4,tilt:kf(t,[[T,-.04],[T+.6,-.04],[T+1.0,.05]])});
 comp([['board',0]])}

// ---------- shot 2: the taxi meter on the dash: a bar climbs as text pages feed in ----------
function page(x,cx,cy,k=1){x.save();x.translate(cx,cy);x.scale(k,k);rr(x,-70,-52,140,104,10,CREAM,INKC,5);x.fillStyle=GREYL;for(const [yy,ww] of [[-26,100],[-4,100],[18,64]]){x.beginPath();x.roundRect(-50,yy-6,ww,12,6);x.fill()}x.restore()}
function shot2(t,cam){const x=layer('board',cam),T=ST(2);bgDusk(x,.3,560,760);
 const ML=340,MT=420,MW=538,MH=720;
 // pages feed in from the left and vanish into the meter's edge
 const arr=[T+.45,T+1.05,T+1.65,T+2.25],lane=800;
 arr.forEach((ta,i)=>{const u=seg(t,ta-.55,ta);if(u>0&&u<1){const px=lerp(150,ML+30,ease(u));page(x,px,lane,1)}});
 rr(x,ML,MT,MW,MH,34,'#14101F',GREYL,6);
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(ML+22,MT+110,MW-44,MH-136,22);x.fill();
 const gg=x.createLinearGradient(0,MT+110,0,MT+MH-26);gg.addColorStop(0,'#1F8F8C');gg.addColorStop(1,'#0E4A50');x.fillStyle=gg;x.beginPath();x.roundRect(ML+22,MT+110,MW-44,MH-136,22);x.fill();
 imp(x,'YOUR COST',ML+MW/2,MT+62,62,MINT);
 const k=arr.reduce((s,ta)=>s+ease(seg(t,ta,ta+.4)),0)/4;
 const bx=ML+MW/2-80,by=MT+MH-70,bh=420;
 rr(x,bx,by-bh,160,bh,20,'#0B3A40',INKC,5);if(k>.01)rr(x,bx+8,by-8-(bh-16)*k,144,(bh-16)*k,14,AMB,null);
 for(let i=1;i<4;i++){x.fillStyle='rgba(18,10,28,.6)';x.fillRect(bx,by-bh*i/4-2,160,4)}
 lab(x,'TEXT USED',270,lane-130,48,CREAM,{free:true,a:fin(t,T+.2,.5)});
 // dash under the meter
 x.fillStyle='#2E2350';x.beginPath();x.roundRect(-40,1180,W+80,500,[60,60,0,0]);x.fill();x.fillStyle='rgba(255,226,190,.25)';x.fillRect(-40,1184,W+80,6);
 x.fillStyle='#14101F';for(const kx of [200,330,760]){x.beginPath();x.arc(kx,1290,38,0,7);x.fill();x.fillStyle=GREY;x.beginPath();x.arc(kx,1290,12,0,7);x.fill();x.fillStyle='#14101F'}
 comp([['board',0]])}

// ---------- shot 3: the card "FARE: MOSTLY RATE x MILES" ----------
function shot3(t,cam){const x=layer('board',cam),T=ST(3);bgDusk(x,.3,489,700);
 const a=.7+.3*fin(t,T+.1,.6);
 const f1='FARE: MOSTLY',sz=64,w=Math.max(tw(x,f1,sz),tw(x,'RATE × MILES',sz))+90,cx=489,top=400,h=420;
 const wR=tw(x,'RATE',sz),wX=tw(x,' × ',sz),wM=tw(x,'MILES',sz),l0=cx-(wR+wX+wM)/2;
 boxIn(x,cx,top+h/2,a,.88,()=>rr(x,cx-w/2,top,w,h,34,PANEL,AMB,7),()=>{
  txt(x,f1,cx,top+70,sz,CREAM,'center');txt(x,'RATE',l0,top+150,sz,AMB,'left');txt(x,' × ',l0+wR,top+150,sz,CREAM,'left');txt(x,'MILES',l0+wR+wX,top+150,sz,AMB,'left');
  // rate sign under RATE: a price tag; odometer under MILES: four dark boxes with amber tick bars (no digits)
  const rx=l0+wR/2,mx=l0+wR+wX+wM/2,iy=top+290;
  x.save();x.translate(rx,iy);x.rotate(-.12);x.fillStyle=TEAL;x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';x.beginPath();x.moveTo(-70,-44);x.lineTo(34,-44);x.lineTo(78,0);x.lineTo(34,44);x.lineTo(-70,44);x.closePath();x.fill();x.stroke();x.fillStyle=INKC;x.beginPath();x.arc(44,0,9,0,7);x.fill();x.fillStyle=MINT;for(const yy of [-16,6]){x.beginPath();x.roundRect(-50,yy,64,12,6);x.fill()}x.restore();
  for(let i=0;i<4;i++){rr(x,mx-104+i*54,iy-40,48,80,8,'#14101F',GREYL,4);x.fillStyle=AMB;x.beginPath();x.roundRect(mx-104+i*54+14,iy-20,20,40,6);x.fill()}});
 // the mascot points up at the card (right hand; shoulder (73.5,34); target inside 195 units)
 const MX=330,MS=.8,e=fin(t,T+.5,.6),hr=[lerp(97.5,170,e),lerp(220,-70,e)];
 if(Math.hypot(hr[0]-73.5,hr[1]-34)>195)WARN.push('shot3 reach');
 mascot(x,t,cam,{x:MX,floor:1450,s:MS,hands:{r:hr},showH:{r:e>.25?1:0},look:.2,lookY:-.5,brow:.5,mouth:.7});
 ground(x,1450);
 comp([['board',0]])}

// ---------- the map (shots 4, 12, 13) ----------
const MP={l:112,t:330,w:766,h:870};
const AP=[240,1110],BP=[760,520];
function poly(pts){const L_=[0];for(let i=1;i<pts.length;i++)L_.push(L_[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]));return {pts,L:L_,len:L_[L_.length-1]}}
function polyAt(P,d){d=clamp(d,0,P.len);let i=1;while(i<P.pts.length-1&&P.L[i]<d)i++;const k=(d-P.L[i-1])/((P.L[i]-P.L[i-1])||1);const a=P.pts[i-1],b=P.pts[i];return {x:lerp(a[0],b[0],k),y:lerp(a[1],b[1],k),ang:Math.atan2(b[1]-a[1],b[0]-a[0])}}
function polyStroke(x,P,d,col,lw){if(d<=0)return;x.save();x.strokeStyle=col;x.lineWidth=lw;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(P.pts[0][0],P.pts[0][1]);
 for(let i=1;i<P.pts.length&&P.L[i-1]<d;i++){const f=(d-P.L[i-1])/(P.L[i]-P.L[i-1]);const e=f>=1?P.pts[i]:[lerp(P.pts[i-1][0],P.pts[i][0],f),lerp(P.pts[i-1][1],P.pts[i][1],f)];x.lineTo(e[0],e[1])}x.stroke();x.restore()}
function polyTicks(x,P,step,d,col){x.save();x.strokeStyle=col;x.lineWidth=5;x.lineCap='round';for(let s=step;s<=Math.min(d,P.len-14);s+=step){const q=polyAt(P,s),nx=-Math.sin(q.ang)*17,ny=Math.cos(q.ang)*17;x.beginPath();x.moveTo(q.x-nx,q.y-ny);x.lineTo(q.x+nx,q.y+ny);x.stroke()}x.restore()}
const RG=poly([AP,[175,930],[340,880],[250,720],[430,690],[380,540],[560,500],BP]);
const RT=poly([AP,BP]);
function mapBase(x){rr(x,MP.l,MP.t,MP.w,MP.h,30,'#1B1430','#6B6488',6);x.save();x.beginPath();x.roundRect(MP.l,MP.t,MP.w,MP.h,30);x.clip();
 x.fillStyle='#241A3C';for(let r=0;r<8;r++)for(let c=0;c<7;c++)if((r*3+c*5)%4!=0)x.fillRect(MP.l+20+c*112,MP.t+20+r*112,90,90);
 x.fillStyle='rgba(60,45,96,.8)';x.restore()}
function pin(x,P,s){x.save();x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;x.beginPath();x.arc(P[0],P[1],40,0,7);x.fill();x.stroke();x.restore();txt(x,s,P[0],P[1]+3,52,DARK,'center')}
function miniCab(x,px,py,ang,body,glow){x.save();x.translate(px,py);x.rotate(ang);
 if(glow){x.fillStyle='rgba(45,178,174,.35)';x.beginPath();x.roundRect(-52,-34,104,68,26);x.fill()}
 rr(x,-38,-21,76,42,12,body,INKC,5);rr(x,-6,-14,26,28,6,DUSK,INKC,3);rr(x,-26,-9,14,18,4,'#14101F',null);rr(x,30,-14,7,10,3,'#FFF2C8',null);x.restore()}
function shot4(t,cam){const x=layer('board',cam),T=ST(4);bgDusk(x,.3,489,760);mapBase(x);
 const g=ease(seg(t,T+.1,T+.8)),tl=ease(seg(t,T+.6,T+1.2));
 polyStroke(x,RG,RG.len*g,GREY,12);polyTicks(x,RG,50,RG.len*g,GREYL);polyStroke(x,RT,RT.len*tl,TEAL,14);polyTicks(x,RT,50,RT.len*tl,MINT);
 pin(x,AP,'A');pin(x,BP,'B');
 lab(x,'SAME TRIP',489,415,48,AMB,{a:fin(t,T+.05,.5)});
 lab(x,'MORE MILES',308,760,44,CREAM,{a:fin(t,T+.45,.5)});
 lab(x,'FEWER MILES',650,930,44,MINT,{a:fin(t,T+.95,.5),bg:'rgba(14,74,80,.95)'});
 comp([['board',0]])}

// ---------- shot 5: BEFORE, the price board ----------
function shot5(t,cam){const x=layer('board',cam),T=ST(5);bgDusk(x,.32,489,900);
 priceBoard(x,489,400,[['GPT-6 ASTRA','$$$$$'],['SOL','$']],{fz:52,rh:96});
 ground(x,1460);
 mascot(x,t,cam,{x:300,floor:1460,s:.78,look:.5,lookY:-.9,brow:.2,mouth:.2,tilt:-.05});
 comp([['board',0]])}

// ---------- shot 6: a token is a chunk of text ----------
function shot6(t,cam){const x=layer('board',cam),T=ST(6);bgDusk(x,.3,489,760);
 const W1=['Book','a','taxi'],W2=['to','the','station'],fz=76,pad=34,gap=26;
 const rows=[W1,W2],ys=[560,720],bo=fin(t,T+.12,.55);
 rows.forEach((ws,ri)=>{const widths=ws.map(s=>tw(x,s,fz,'800')+2*pad),tot=widths.reduce((a,b)=>a+b,0)+gap*(ws.length-1);let X=489-tot/2;
  ws.forEach((s,i)=>{const w=widths[i],cx=X+w/2,cy=ys[ri];
   x.save();x.globalAlpha*=bo;rr(x,X,cy-58,w,116,22,'rgba(45,178,174,.18)',TEAL,7);x.restore();txt(x,s,cx,cy+2,fz,CREAM,'center','800');X+=w+gap})});
 lab(x,'TOKEN = A CHUNK OF TEXT',489,930,44,MINT,{a:bo,bg:'rgba(14,74,80,.95)'});
 lab(x,'OUR EXAMPLE SPLIT',489,1040,44,AMB,{a:bo});
 comp([['board',0]])}

// ---------- the vertical-free meter pieces (horizontal bars) ----------
const TL=150,TR=850;
function hbar(x,y,v,col,h=80){rr(x,TL,y-h/2,TR-TL,h,20,'#150F26',INKC,5);if(v>.01)rr(x,TL+5,y-h/2+5,(TR-TL-10)*v,h-10,14,col,null)}
function meterFrame(x,top,h,col,a=1){x.save();x.globalAlpha*=a;rr(x,112,top,766,h,30,'rgba(27,20,48,.97)',col,6);x.restore()}
function meterHead(x,top,subs,note,a=1){imp(x,'COST',489,top+62,84,AMB);let y=top+62+64;for(const s of subs){txt(x,s,489,y,44,CREAM,'center','900',a);y+=54}if(note){txt(x,note,489,y,44,AMB,'center','900',a);y+=54}return y}

// ---------- shot 7: pricier = better? the GPT-6 Astra bar fills to full ----------
function shot7(t,cam){const x=layer('board',cam),T=ST(7);bgDusk(x,.3,489,800);
 priceBoard(x,489,395,[['GPT-6 ASTRA','$$$$$',1],['SOL','$']],{fz:52,rh:96});
 ground(x,1110);
 const MX=200,MS=.5,e=fin(t,T+.1,.4),hr=[lerp(97.5,150,e),lerp(220,-30,e)];if(Math.hypot(hr[0]-73.5,hr[1]-34)>195)WARN.push('shot7 reach');
 mascot(x,t,cam,{x:MX,floor:1110,s:MS,hands:{r:hr},showH:{r:e>.3?1:0},look:.5,lookY:-.6,brow:.5,mouth:.1});
 const ba=fin(t,T+.15,.5);
 if(ba>0){x.save();x.globalAlpha*=ba;x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=6;for(const [qx,qy,r] of [[350,925,12],[392,885,17]]){x.beginPath();x.arc(qx,qy,r,0,7);x.fill();x.stroke()}x.restore()}
 lab(x,['PRICIER =','BETTER?'],640,840,52,AMB,{a:ba,free:true});
 // the meter: the bar belongs to this drawing
 const mt=1160,ma=fin(t,T+.2,.5);
 boxIn(x,489,mt+145,ma,.92,()=>rr(x,112,mt,766,290,30,'rgba(27,20,48,.97)',AMB,6),()=>{
  imp(x,'COST',489,mt+52,70,AMB);txt(x,'FULL = GPT-6 ASTRA',489,mt+118,44,AMB,'center');
  txt(x,'GPT-6 ASTRA',TL,mt+170,44,CREAM,'left');hbar(x,mt+232,fin(t,T+.55,.6),AMB,64)});
 comp([['board',0]])}

// ---------- shot 8: NOW, the price board with two rows ----------
function shot8(t,cam){const x=layer('board',cam),T=ST(8);bgDusk(x,.32,489,900);
 priceBoard(x,489,400,[['GPT-6 ASTRA','$$$$$'],['GPT-6.2 ASTRA','$$$$']],{fz:48,rh:96,w:720});
 ground(x,1460);
 mascot(x,t,cam,{x:300,floor:1460,s:.78,look:.5,lookY:-.9,brow:.6,mouth:.8,tilt:-.05});
 comp([['board',0]])}
// ---------- shot 9: the same board, the new row highlighted, the tag AT LEAST 20% LOWER ----------
function shot9(t,cam){const x=layer('board',cam),T=ST(9);bgDusk(x,.32,489,760);
 const hl=fin(t,T+.2,.6);
 const b=priceBoard(x,489,420,[['GPT-6 ASTRA','$$$$$'],['GPT-6.2 ASTRA','$$$$',hl]],{fz:48,rh:96,w:720});
 const ta=fin(t,T+.25,.6);
 // an arrow from the old row to the new row, drawn with the tag
 if(ta>0){x.save();x.globalAlpha*=ta;x.fillStyle=TEAL;x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';const ax=489+250,ay=b.rowY(1)+60;x.beginPath();x.moveTo(ax-22,ay);x.lineTo(ax+22,ay);x.lineTo(ax,ay+42);x.closePath();x.fill();x.stroke();x.restore()}
 lab(x,['AT LEAST','20% LOWER'],489,880,64,MINT,{a:ta,s0:.8,bg:'rgba(14,74,80,.95)',line:TEAL,lw:7});
 comp([['board',0]])}

// ---------- the COST meter, vertical-free version for shots 10, 11, 18 ----------
function workMeter(x,t,T,st){ // st: {bar2:0..1, a:0..1 for tag, mark:0..1, under:0..1}
 const top=390;meterFrame(x,top,990,AMB);
 imp(x,'COST',489,top+62,84,AMB);
 txt(x,'ONE WORK TEST ·',489,top+126,44,CREAM,'center');txt(x,'OPENAI SAYS',489,top+180,44,CREAM,'center');
 txt(x,'FULL = GPT-6 ASTRA',489,top+246,44,AMB,'center');
 const n1=top+316,t1=top+380,n2=top+482,tg=top+552,t2=top+676,u1=top+776,u2=top+906;
 txt(x,'GPT-6 ASTRA',TL,n1,44,CREAM,'left');hbar(x,t1,1,AMB);
 txt(x,'GPT-6.2 ASTRA',TL,n2,44,CREAM,'left');hbar(x,t2,st.bar2,TEAL);
 const dx=TL+.8*(TR-TL),WL='WHAT 20% OFF WOULD BE',wl=tw(x,WL,44)+52,wy=top+900;dashed(x,dx,t2-58,dx,wy-39,CREAM,7);
 lab(x,WL,850-wl/2,wy,44,CREAM,{free:true});
 if(st.mark>0){const mx=TL+(TR-TL)/3;x.save();x.globalAlpha*=st.mark;x.strokeStyle=CREAM;x.lineWidth=7;x.beginPath();x.moveTo(mx,t2-52);x.lineTo(mx,t2+52);x.stroke();x.restore();
  lab(x,'A THIRD',mx+8+(tw(x,'A THIRD',44)+52)/2,t2,44,CREAM,{free:true,a:st.mark})}
 if(st.tag>0)lab(x,'SCORED HIGHER',TL+(tw(x,'SCORED HIGHER',44)+52)/2-14,tg,44,MINT,{free:true,a:st.tag,bg:'rgba(14,74,80,.95)',line:TEAL});
 if(st.under>0)lab(x,'UNDER A THIRD',TL+(tw(x,'UNDER A THIRD',44)+52)/2-14,u1,48,MINT,{free:true,a:st.under,bg:'rgba(14,74,80,.95)',line:TEAL})}
function shot10(t,cam){const x=layer('board',cam),T=ST(10);bgDusk(x,.3,489,800);
 workMeter(x,t,T,{bar2:0,tag:0,mark:0,under:0});
 comp([['board',0]])}
function shot11(t,cam){const x=layer('board',cam),T=ST(11);bgDusk(x,.3,489,800);
 const g=ease(seg(t,T+.3,T+1.45));
 workMeter(x,t,T,{bar2:.28*g,tag:fin(t,T+.25,.5),mark:fin(t,T+.25,.5),under:fin(t,T+1.3,.5)});
 comp([['board',0]])}

// ---------- shot 12: the two cabs on the routes; the new one arrives first ----------
function mapCabLabels(x,pg,pt){
 lab(x,'GPT-6 ASTRA',pg.x+20,pg.y-76,44,CREAM,{});
 lab(x,'GPT-6.2 ASTRA',pt.x+190,pt.y+78,44,MINT,{bg:'rgba(14,74,80,.95)',line:TEAL})}
function shot12(t,cam){const x=layer('board',cam),T=ST(12);bgDusk(x,.3,489,760);mapBase(x);
 polyStroke(x,RG,RG.len,GREY,12);polyStroke(x,RT,RT.len,TEAL,14);pin(x,AP,'A');pin(x,BP,'B');
 const v=470,d0=70,dg=d0+v*(t-T),dt=d0+v*(t-T);
 const pg=polyAt(RG,dg),pt=polyAt(RT,Math.min(RT.len,dt));
 miniCab(x,pg.x,pg.y,pg.ang,'#9A8FA6',false);miniCab(x,pt.x,pt.y,pt.ang,AMB,true);
 mapCabLabels(x,pg,pt);
 comp([['board',0]])}
// ---------- shot 13: each route turns into token chunks: many on the long one, few on the short one ----------
function chunks(x,P,step,d,col,fill){for(let s=step*.6,i=0;s<P.len-30;s+=step,i++){if(s>d)break;const q=polyAt(P,s),k=ease(seg(d,s,s+step*.5));x.save();x.translate(q.x,q.y);x.rotate(q.ang);x.scale(.5+.5*k,.5+.5*k);rr(x,-17,-13,34,26,7,fill,col,5);x.restore()}}
function shot13(t,cam){const x=layer('board',cam),T=ST(13);bgDusk(x,.3,489,760);mapBase(x);
 const g=ease(seg(t,T+.1,T+1.8)),k=ease(seg(t,T+.1,T+1.2));
 polyStroke(x,RG,RG.len,'rgba(140,130,153,.28)',10);polyStroke(x,RT,RT.len,'rgba(45,178,174,.3)',10);
 chunks(x,RG,44,RG.len*g,GREYL,'rgba(140,130,153,.35)');chunks(x,RT,104,RT.len*k,TEAL,'rgba(45,178,174,.4)');
 pin(x,AP,'A');pin(x,BP,'B');
 lab(x,['WRITES FEWER TOKENS','· OPENAI SAYS'],489,1330,48,MINT,{a:fin(t,T+.3,.5),bg:'rgba(14,74,80,.95)',line:TEAL});
 comp([['board',0]])}
// ---------- shot 14: lower prices ----------
function shot14(t,cam){const x=layer('board',cam),T=ST(14);street(x,1330);
 const b=priceBoard(x,489,440,[['GPT-6.2 ASTRA','$$$$',1]],{fz:56,rh:120,w:740});
 taxi(x,489,1326,1.05,'ASTRA',{t,ph:2});ground(x,1354);
 lab(x,'LOWER PRICES',489,830,60,MINT,{a:fin(t,T+.15,.55),s0:.8,bg:'rgba(14,74,80,.95)',line:TEAL,lw:7});
 comp([['board',0]])}

// ---------- shots 15, 16: the coding test, both at max ----------
function codingStreet(x,t,ring,KYc=1360){street(x,KYc);
 x.fillStyle='#14101F';x.fillRect(298,900,16,KYc-1000);x.fillRect(664,900,16,KYc-1000);
 priceBoard(x,489,680,[['SOL','$'],['ASTRA','$$$$']],{fz:52,rh:84,w:620});
 taxi(x,300,KYc-4,1,'SOL',{t,ph:0,ring:ring});taxi(x,680,KYc-4,1,'ASTRA',{t,ph:1.1});ground(x,KYc+24)}
function shot15(t,cam){const x=layer('board',cam),T=ST(15);
 codingStreet(x,t,false);
 lab(x,['ONE CODING TEST','· OPENAI SAYS'],489,415,52,AMB,{});
 lab(x,'BOTH AT MAX',489,548,52,CREAM,{});
 comp([['board',0]])}
function shot16(t,cam){const x=layer('board',cam),T=ST(16);
 const ra=fin(t,T+.5,.6);
 codingStreet(x,t,false);
 if(ra>0){x.save();x.globalAlpha*=ra;x.strokeStyle=TEAL;x.lineWidth=12;x.lineJoin='round';x.beginPath();x.roundRect(94,1098,412,284,34);x.stroke();x.restore()}
 lab(x,['ONE CODING TEST','· OPENAI SAYS'],489,415,52,AMB,{});
 lab(x,'BOTH AT MAX',489,548,52,CREAM,{});
 comp([['board',0]])}

// ---------- shot 17: the scoreboard, nearly level ----------
function shot17(t,cam){const x=layer('board',cam),T=ST(17);bgDusk(x,.3,489,800);
 const top=390;meterFrame(x,top,860,AMB);
 imp(x,'SCORE',489,top+62,84,AMB);txt(x,'ONE CODING TEST',489,top+126,44,CREAM,'center');txt(x,'BOTH AT MAX ·',489,top+180,44,CREAM,'center');txt(x,'OPENAI SAYS',489,top+234,44,CREAM,'center');
 const base=top+780,th=380,bw=210,cA=300,cS=678,g=ease(seg(t,T+.1,T+.9));
 for(const [cx,v,col,nm] of [[cA,.93,AMB,'ASTRA'],[cS,.91,TEAL,'SOL']]){rr(x,cx-bw/2,base-th,bw,th,20,'#150F26',INKC,5);const bh=(th-10)*v*g;if(bh>2)rr(x,cx-bw/2+5,base-5-bh,bw-10,bh,14,col,null);txt(x,nm,cx,base+36,48,CREAM,'center')}
 // the bracket between the two tops
 const bk=fin(t,T+.8,.5),ya=base-5-(th-10)*.93-26;
 if(bk>0){x.save();x.globalAlpha*=bk;x.strokeStyle=MINT;x.lineWidth=8;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(cA,ya+16);x.lineTo(cA,ya-18);x.lineTo(cS,ya-18);x.lineTo(cS,ya+16);x.stroke();x.restore()}
 lab(x,'NEARLY MATCHED',489,ya-84,48,MINT,{a:bk,bg:'rgba(14,74,80,.95)',line:TEAL});
 comp([['board',0]])}

// ---------- shot 18: the coding-test meter: SOL stops at about a fifth ----------
function shot18(t,cam){const x=layer('board',cam),T=ST(18);bgDusk(x,.3,489,800);
 const top=390;meterFrame(x,top,760,AMB);
 imp(x,'COST',489,top+62,84,AMB);
 txt(x,'ONE CODING TEST',489,top+126,44,CREAM,'center');txt(x,'BOTH AT MAX ·',489,top+180,44,CREAM,'center');txt(x,'OPENAI SAYS',489,top+234,44,CREAM,'center');
 txt(x,'FULL = ASTRA',489,top+300,44,AMB,'center');
 const n1=top+372,t1=top+430,n2=top+530,t2=top+590,u=top+670;
 txt(x,'ASTRA',TL,n1,44,CREAM,'left');hbar(x,t1,1,AMB);
 const g=ease(seg(t,T+.15,T+1.0));
 txt(x,'SOL',TL,n2,44,CREAM,'left');hbar(x,t2,.2*g,TEAL);
 lab(x,'ABOUT A FIFTH',TL+(tw(x,'ABOUT A FIFTH',48)+52)/2-14,u,48,MINT,{free:true,a:fin(t,T+.9,.5),bg:'rgba(14,74,80,.95)',line:TEAL});
 comp([['board',0]])}

// ---------- shots 19-21: WHAT WE LEARNED and the takeaway, over the dimmed street ----------
function dimStreet(x,t,a=.78){const KYc=1360;street(x,KYc);taxi(x,300,KYc-4,1,'',{t,ph:0});taxi(x,680,KYc-4,1,'',{t,ph:1.2});ground(x,KYc+24);x.save();x.setTransform(1,0,0,1,0,0);x.restore();
 x.save();x.fillStyle=`rgba(12,6,20,${a})`;x.fillRect(-900,-600,W+1800,H+1200);x.restore()}
function learnedCard(x,a,y=410){const S='WHAT WE LEARNED',fs=64,w=impW(x,S,fs)+100;boxIn(x,489,y,a,.88,()=>rr(x,489-w/2,y-62,w,124,42,PANEL,AMB,7),()=>imp(x,S,489,y+6,fs,AMB))}
function miniBoard(x,t,top,a){const w=700,h=150;boxIn(x,489,top+h/2,a,.9,()=>rr(x,489-w/2,top,w,h,26,'rgba(27,20,48,.96)',AMB,6),()=>imp(x,'$$$$ PER TOKEN',489,top+h/2+4,76,AMB))}
function shot19(t,cam){const x=layer('board',cam),T=ST(19);dimStreet(x,t);
 const e=24*ease(seg(t,T,ST(20)));learnedCard(x,1);
 const a=fin(t,T+.4,.6);miniBoard(x,t,560,a);lab(x,['PRICE PER TOKEN =','THE TAXI\'S RATE'],489,850,52,CREAM,{a:fin(t,T+.9,.6)});
 comp([['board',0]])}
function shot20(t,cam){const x=layer('board',cam),T=ST(20);dimStreet(x,t);
 learnedCard(x,1);miniBoard(x,t,560,1);lab(x,['PRICE PER TOKEN =','THE TAXI\'S RATE'],489,850,52,CREAM,{});
 // the formula as a card on its own (the mini meter is gone: M2)
 const a=fin(t,T+.15,.6),mt=968;
 boxIn(x,489,mt+80,a,.92,()=>rr(x,112,mt,766,160,30,'rgba(27,20,48,.97)',AMB,6),()=>{
  txt(x,'PRICE × TOKENS',489,mt+48,48,CREAM,'center');txt(x,'= YOUR COST',489,mt+112,48,AMB,'center')});
 comp([['board',0]])}
function shot21(t,cam){const x=layer('board',cam),T=ST(21);dimStreet(x,t,.86);comp([['board',0]])}
const TK=[['PRICE PER TOKEN',CREAM],['IS THE RATE.',CREAM],['COMPARE COST',AMB],['PER TASK.',AMB]];
function takeawayCard(t,T,E){const x=ctx;x.setTransform(1,0,0,1,0,0);const fs=70,lh=fs*1.3,h=TK.length*lh+120,e=28*ease(seg(t,T,E)),cy=700;
 const w=Math.max(...TK.map(r=>tw(x,r[0],fs)))+110;if(w>766)WARN.push('takeaway too wide '+w);
 rr(x,489-w/2-e,cy-h/2-e,w+2*e,h+2*e,44,'rgba(27,20,48,.97)',AMB,7);
 TK.forEach((r,i)=>txt(x,r[0],489,cy-h/2+60+lh/2+i*lh+(i>=2?20:0),fs,r[1],'center'))}

// ---------- shot 22: the ask ----------
function shot22(t,cam){const x=layer('board',cam),T=ST(22);bgDusk(x,.35,489,760);
 const w=ease(seg(t,T+.2,T+.8)),wv=Math.sin((t-T)*9);const hr=[lerp(97.5,170+wv*12*w,w),lerp(220,-30+wv*36*w,w)];
 ground(x,1090);
 mascot(x,t,cam,{x:489,floor:1090,s:.9,hands:{r:hr},showH:{r:w>.3?1:0},look:.05,lookY:0,brow:.45,mouth:.95});
 comp([['board',0]])}
function buttons(t,T){const x=ctx;x.setTransform(1,0,0,1,0,0);
 const c=fin(t,T+.3,.55),pulse=1+.03*Math.sin((t-T-.3)*7);
 if(c>0){x.save();x.translate(489,1265);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;x.fillStyle=INKC;x.beginPath();x.roundRect(-330,-90,660,180,90);x.fill();pill(x,0,0,640,160,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-250,-40);x.lineTo(-250,40);x.lineTo(-186,0);x.closePath();x.fill();
  x.globalAlpha=1;x.restore();x.save();x.globalAlpha=c;txt(x,'Subscribe',539,1270,84,CREAM,'center','800');x.restore()}
 const C0=T+1.1,cc=fin(t,C0,.55),pu=1+.03*Math.sin((t-C0)*7);
 if(cc>0){const S='COMMENT',fs=56,w2=tw(x,S,fs)+210,h=140;x.save();x.translate(489,1440);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
  x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w2/2,-h/2,w2,h,h/2);x.fill();x.stroke();
  // speech-bubble icon
  const ix=-w2/2+80;x.fillStyle=DARK;x.beginPath();x.roundRect(ix-38,-30,76,52,16);x.fill();x.beginPath();x.moveTo(ix-14,20);x.lineTo(ix-26,44);x.lineTo(ix+8,20);x.closePath();x.fill();x.fillStyle=AMB;for(const dx of [-18,0,18]){x.beginPath();x.arc(ix+dx,-4,5,0,7);x.fill()}
  x.restore();x.save();x.globalAlpha=cc;txt(x,S,489+60,1444,fs,DARK,'center');x.restore()}}

function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 if(sh==21)takeawayCard(t,ST(21),ST(22));
 if(sh==22)buttons(t,ST(22))}

// ---------- cameras: a linear push on the whole board ----------
const push=(a=1,b=1.1)=>u=>({x:540,y:960,z:lerp(a,b,u),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:22},()=>push(1,1.1)));
const SHOTS=[null,shot1,shot2,shot3,shot4,shot5,shot6,shot7,shot8,shot9,shot10,shot11,shot12,shot13,shot14,shot15,shot16,shot17,shot18,shot19,shot20,shot21,shot22];
FILM={dur:DUR,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;
  if(!s)drawTitle(o);else{SHOTS[s](o,cam);overlay(o,s)}
  tag();
  if(s>=5&&s<=7)tab(o,ST(5),ST(8)-.01,'BEFORE',AMB);if(s>=8&&s<=18)tab(o,ST(8),ST(19)-.01,'NOW',TEAL);
  const fo=seg(o,DUR-.45,DUR-.03);if(fo>0)fadeTo(ctx,fo)},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a brush on every cut, pops on cards and labels ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),i==14?'cutL':'cut');
for(const t of [ST(1)+.0,ST(2)+.2,ST(3)+.15,ST(4)+.1,ST(4)+.45,ST(4)+.95,ST(5)+.2,ST(6)+.12,ST(6)+.12,ST(7)+.15,ST(7)+.2,ST(8)+.2,ST(9)+.25,ST(10)+.3,ST(11)+.25,ST(11)+1.3,ST(13)+.3,ST(14)+.15,ST(16)+.5,ST(17)+.8,ST(18)+.9,ST(19)+.4,ST(19)+.9,ST(20)+.15,ST(22)+.3,ST(22)+1.1])say(t,'tick');
for(const t of [ST(2)+.45,ST(2)+1.05,ST(2)+1.65,ST(2)+2.25])say(t,'paper');
for(const t of [ST(4)+.1,ST(4)+.6,ST(13)+.1,ST(7)+.55,ST(11)+.3,ST(18)+.15,ST(17)+.1])say(t,'slide');
