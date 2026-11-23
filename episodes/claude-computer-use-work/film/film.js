// Episode: Claude Computer Use, told through 20 orders in an order tool with no connector, going into a spreadsheet.
// You = the mascot (office lanyard + ID badge) at a desk; the AI = a robot with a teal screen head, label CLAUDE (no logo).
// BEFORE (amber): you copy every order into the chat and type the answers back; the meter YOUR STEPS fills to 20. NOW (teal): Claude clicks and types in the apps you allow; you approve 2 apps; the meter stays at 2.
// 60 s, 27 shots (beats.md "Shots", numbered 0-26). Voice from tts.py (vo.wav laid in at .3 s): film time = voice time + .3. Every time below is FILM seconds.
// Places: T title, L laptop close-up (1-3), D the desk (4-16, 25), X the picking diagram (17-20), K catch cards (21 THE CATCH, 22 lanes, 23 retry), P side by side + WHAT WE LEARNED (24), M mascot big + Subscribe + comment (26).
// Rules: no setLineDash; every stroke setting sits inside save/restore; no Math.random. Helpers follow episodes/prompt-caching-v2/film/film.js.
let t_g=0;
const AMB='#FFC66E',TEAL='#2DB2AE',CREAM='#F8E9CC',INKC='#120A1C',RED='#E4493F',PAPER='#E9DCC2';
function txt(x,s,X,Y,size,col,al='left',wt='700',a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.fillStyle=col;x.font=`${wt} ${size}px Arial`;x.textAlign=al;x.textBaseline='middle';x.fillText(s,X,Y);x.restore()}
function pill(x,X,Y,w,h,fill,a=1){x.save();x.globalAlpha*=a;x.fillStyle=fill;x.beginPath();x.roundRect(X-w/2,Y-h/2,w,h,h/2);x.fill();x.restore()}
function rr(x,l,t,w,h,r,fill,stroke,lw=3){x.save();x.beginPath();x.roundRect(l,t,w,h,r);if(fill){x.fillStyle=fill;x.fill()}if(stroke){x.strokeStyle=stroke;x.lineWidth=lw;x.stroke()}x.restore()}
const fin=(t,a,d=.5)=>ease(seg(t,a,a+d));
function imp(x,s,X,Y,size,col,al='center'){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;x.textAlign=al;x.textBaseline='middle';x.lineJoin='round';x.lineWidth=size*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y);x.restore()}
function txt_w(x,s,size,wt='900'){x.save();x.font=`${wt} ${size}px Arial`;const w=x.measureText(s).width;x.restore();return w}
function impW(x,s,size){x.save();x.font=`${size}px Impact, "Arial Black", sans-serif`;const w=x.measureText(s).width;x.restore();return w}
function scribLines(x,X0,X1,Y,seed,h=4,col='#8A7AA8'){let X=X0,k=0;x.fillStyle=col;while(X<X1-8){const len=14+((Math.sin(seed*12.9898+k*78.233)*43758.5453)%1+1)%1*46;x.fillRect(X,Y,Math.min(len,X1-X),h);X+=len+9;k++}}
function mixC(a,b,m){const p=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),A=p(a),B=p(b);return `rgb(${A.map((v,i)=>Math.round(v+(B[i]-v)*m)).join(',')})`}

/* THE CLOCK: cut times of the 27 shots (film seconds) = word starts of the voice (align_est.json + .3 s) minus .02 s, on frames. */
const TS=[0,1.46,3.38,4.39,6.02,9.28,10.30,11.90,14.36,16.46,18.67,21.04,23.16,24.71,27.30,30.18,31.55,33.14,34.41,37.28,38.26,39.95,41.29,43.63,46.88,50.61,53.80];
const CF=TS.map(t=>Math.round(t*30)).concat([1800]);
const ST=i=>CF[i]/30,inS=(t,a,b)=>t>=ST(a)&&t<ST(b),out=i=>ST(i)-.32;
const PLACE='TLLLDDDDDDDDDDDDDXXXXKKKPDM'; /* one letter per shot 0-26 */

// ---------- the cast ----------
const CLB={skin:'#187E86',cloth:'#2A6F7A',hood:'#1A4D5A',hand:'#BFF2EE',face:'#16243C',leg:'#1A4D5A',shoe:'#17141F',finger:'#16243C'};
const BL=[2.4,4.9,7.3,9.9,12.2,15.6,17.9,21.3,24.7,27.9,31.2,34.6,38.1,41.5,45.2,49.4,52.6,55.1,58.3];
function bodyT(x,p){x.translate(p.x,p.y);x.scale(p.s,p.s);if(p.bend){x.translate(0,TH-14);x.rotate(p.bend);x.translate(0,-(TH-14))}}
function headT(x,p){bodyT(x,p);x.translate(p.headX||0,-HR-20+Math.sin(p.breath||0)*3+(p.headY||0));x.rotate(p.tilt||0)}
/* the mascot's costume: an office lanyard with a small ID badge, drawn after the figure in the body's own transform */
function lanyard(x,p){x.save();bodyT(x,p);x.lineCap='round';x.lineJoin='round';
 x.strokeStyle=INKC;x.lineWidth=17;x.beginPath();x.moveTo(-44,2);x.lineTo(-4,84);x.moveTo(44,2);x.lineTo(4,84);x.stroke();
 x.strokeStyle='#2F4FA8';x.lineWidth=9;x.beginPath();x.moveTo(-44,2);x.lineTo(-4,84);x.moveTo(44,2);x.lineTo(4,84);x.stroke();
 rr(x,-11,78,22,13,5,'#9AA0B5',INKC,3);
 rr(x,-27,89,54,60,9,CREAM,INKC,4);x.fillStyle='#2F4FA8';x.fillRect(-23,93,46,16);
 x.fillStyle='#8A7AA8';x.beginPath();x.arc(0,125,9,0,7);x.fill();x.fillRect(-16,137,32,4);
 x.restore()}
function claudeHead(x,o){
 x.fillStyle='#0E4A50';x.beginPath();x.roundRect(-114,-22,26,52,9);x.roundRect(88,-22,26,52,9);x.fill();
 rr(x,-98,-84,196,180,24,'#187E86','#0E4A50',5);
 let g=x.createLinearGradient(0,-70,0,82);g.addColorStop(0,'#46D0CB');g.addColorStop(1,TEAL);x.fillStyle=g;x.beginPath();x.roundRect(-84,-70,168,152,14);x.fill();
 const bl=o.blink||0;x.fillStyle='#0B3A40';for(const sx of [-1,1]){x.beginPath();x.roundRect(sx*38-12,-26+(bl>.5?17:0),24,bl>.5?6:40,10);x.fill()}
 x.strokeStyle='#0B3A40';x.lineWidth=9;x.lineCap='round';x.beginPath();x.moveTo(-34,36);x.quadraticCurveTo(0,36+(o.smile===undefined?22:o.smile),34,36);x.stroke()}
function robotFig(x,cx,bottom,s,t,o={}){const p={x:cx,y:bottom+34*s-235*s,s,face:1,breath:t*2.1,noLegs:true,noFace:true,hands:{},showH:{}};
  if(o.hand){p.hands.l=o.hand;p.showH.l=true}
  drawPerson(x,CLB,p);x.save();headT(x,p);claudeHead(x,{blink:blinkAt(t+.7,BL),smile:o.smile});x.restore();return p}

// ---------- the desk ----------
const MXp=300,MYp=610,MSp=1.2,AXp=1290,ABp=850,ASp=1.2;
function bgDusk(x,warm=.3,cx=900,cy=520){let g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1F1636');g.addColorStop(1,'#2E1F4A');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 g=x.createRadialGradient(cx,cy,60,cx,cy,1100);g.addColorStop(0,`rgba(255,196,130,${warm})`);g.addColorStop(1,'rgba(255,170,110,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200)}
function winFrame(x,l,title,red){rr(x,l,336,296,378,12,'#FFF6E6','#5B4C78',3);x.save();x.beginPath();x.roundRect(l,336,296,36,[12,12,0,0]);x.fillStyle='#5B4C78';x.fill();x.restore();
 txt(x,title,l+12,355,18,CREAM,'left','900');if(red){pill(x,l+296-76,354,132,24,RED);txt(x,'NO CONNECTOR',l+296-76,355,13,'#FFF6E6','center','900')}}
function cursorDraw(x,X,Y,sc,col,a=1){if(a<=0)return;x.save();x.globalAlpha*=a;x.translate(X,Y);x.scale(sc,sc);x.lineJoin='round';x.strokeStyle=INKC;x.lineWidth=4;x.fillStyle=col;
 x.beginPath();x.moveTo(0,0);x.lineTo(0,34);x.lineTo(9,26);x.lineTo(16,41);x.lineTo(23,38);x.lineTo(16,24);x.lineTo(28,24);x.closePath();x.fill();x.stroke();x.restore()}
function ripple(x,X,Y,u){if(u<=0||u>=1)return;x.save();x.globalAlpha*=(1-u)*.9;x.strokeStyle=TEAL;x.lineWidth=5;x.beginPath();x.arc(X,Y,10+u*34,0,7);x.stroke();x.restore()}
/* the laptop, world coords: screen frame 460-1140 x 300-750, left window SPREADSHEET, right window ORDER TOOL.
   o: scroll (px of the order list), fill (rows filled), fmix (0 amber, 1 teal), hl1 (order #1 teal highlight 0-1), cur [x,y,a], rip [x,y,u], flash (0-1) */
function laptop(x,o){
 rr(x,450,746,700,40,14,'#6B5A8C',INKC,4);rr(x,700,738,200,10,5,'#4A3C6B');
 rr(x,460,300,680,450,26,'#2A2342',INKC,5);
 x.save();x.beginPath();x.roundRect(480,320,640,410,10);x.clip();x.fillStyle='#E9DEC6';x.fillRect(480,320,640,410);
 // spreadsheet window: a header bar, 20 rows; filled rows get three cell bars
 winFrame(x,496,'SPREADSHEET',false);
 x.fillStyle='#D9CCAE';x.fillRect(496,372,296,24);x.fillStyle='#B9A88A';for(const dx of [60,190])x.fillRect(496+dx,372,2,342);
 const fc=mixC('#E6A23C','#1E9C98',o.fmix||0);
 for(let i=0;i<20;i++){const yy=396+i*15.9;x.fillStyle='#E4D8BC';x.fillRect(496,yy,296,1.5);const a=clamp((o.fill||0)-i);if(a>0){x.save();x.globalAlpha*=a;x.fillStyle=fc;x.fillRect(504,yy+4,40,8);x.fillRect(566,yy+4,110,8);x.fillRect(696,yy+4,70,8);x.restore()}}
 // order tool window: rows #1 ... #20 that scroll
 winFrame(x,808,'ORDER TOOL',true);
 x.save();x.beginPath();x.rect(808,372,296,342);x.clip();
 for(let i=0;i<20;i++){const yy=380+i*38-(o.scroll||0);if(yy<340||yy>714)continue;rr(x,818,yy,276,30,6,i==0?mixC('#FFE3B0','#9BE8E3',o.hl1||0):'#FFE3B0');txt(x,'#'+(i+1),830,yy+16,19,'#1B1430','left','900');x.fillStyle='#B9A88A';x.fillRect(884,yy+12,190,6)}
 x.restore();
 if(o.rip)ripple(x,o.rip[0],o.rip[1],o.rip[2]);
 if(o.cur)cursorDraw(x,o.cur[0],o.cur[1],1,TEAL,o.cur[2]);
 if(o.flash>0){x.fillStyle=`rgba(255,255,255,${.5*o.flash})`;x.fillRect(480,320,640,410)}
 x.restore()}
function deskWorld(x,t,o){bgDusk(x,o.warm===undefined?.3:o.warm,800,520);
 const pm={x:MXp,y:MYp,s:MSp,face:1,breath:t*2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:o.look||0,lookY:.1,brow:o.brow===undefined?.2:o.brow,mouth:o.mouth===undefined?(o.smile?1:.6):o.mouth,mouthW:28,sad:o.sad||0,headY:o.headY||0,tilt:o.tilt||0,bend:o.bend||0};
 if(o.hand){pm.hands.r=o.hand;pm.showH.r=true}
 if(o.mini)personRim(x,HERO,pm,'rgba(255,196,150,1)',3,-1);else actor(x,'hero',HERO,pm,o.cam);
 lanyard(x,pm);
 const rp=robotFig(x,AXp,ABp,ASp,t,{smile:o.smile?30:22,hand:o.rhand});
 x.fillStyle='#B0705A';x.fillRect(-900,792,W+1800,40);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,792,W+1800,5);
 x.fillStyle='#7A4038';x.fillRect(-900,832,W+1800,400);x.fillStyle='rgba(20,10,30,.3)';x.fillRect(-900,892,W+1800,10);
 pill(x,AXp,768,190,46,'rgba(18,10,28,.85)');txt(x,'CLAUDE',AXp,770,28,'#BFF2EE','center','900');
 laptop(x,o.lap||{});
 // hands and arms over the laptop's edges (the figures sit behind the laptop, only the reaching arms come in front)
 x.save();x.beginPath();x.rect(380,0,320,792);x.clip();drawPerson(x,HERO,pm);x.restore();
 x.save();x.beginPath();x.rect(1090,0,120,792);x.clip();robotFig(x,AXp,ABp,ASp,t,{smile:o.smile?30:22,hand:o.rhand});x.restore();
 lanyard(x,pm)}
const HREST=[167,25];
function flyOrder(x,t,t0,n,dur,legs){const u=(t-t0)/dur;if(u<0||u>1)return;const k=legs.length-1,s=u*k,i=Math.min(k-1,Math.floor(s)),e=ease(s-i);
 const X=lerp(legs[i][0],legs[i+1][0],e),Y=lerp(legs[i][1],legs[i+1][1],e)-Math.sin(Math.PI*e)*50;
 x.save();x.globalAlpha*=Math.min(1,u*8)*Math.min(1,(1-u)*6);x.translate(X,Y);x.rotate((e-.5)*.3);rr(x,-42,-23,84,46,10,AMB,INKC,4);txt(x,'#'+n,0,2,24,'#1B1430','center','900');x.restore()}
function chatPanel(x,a,n){if(a<=0)return;x.save();x.translate(690,185);const sc=.88+.12*a;x.scale(sc,sc);x.globalAlpha*=a;rr(x,-170,-78,340,156,22,'#2A1F42',CREAM,5);
 x.fillStyle='#C9B8E0';x.fillRect(-140,-48,150,12);x.fillStyle=AMB;x.fillRect(-10+0,-18,Math.min(150,60+n*8),12);x.fillStyle='#C9B8E0';x.fillRect(-140,12,200,12);x.fillStyle=AMB;x.fillRect(40,42,100,12);x.restore()}
function dashed(x,a,b,col,w,dl,gl,u){x.save();x.strokeStyle=col;x.lineWidth=w;x.lineCap='round';const L=Math.hypot(b[0]-a[0],b[1]-a[1]),ux=(b[0]-a[0])/L,uy=(b[1]-a[1])/L,end=L*u;
 for(let d=0;d<end;d+=dl+gl){const e=Math.min(end,d+dl);x.beginPath();x.moveTo(a[0]+ux*d,a[1]+uy*d);x.lineTo(a[0]+ux*e,a[1]+uy*e);x.stroke()}x.restore()}
function dialog(x,cx,cy,s,a,chk){if(a<=0)return;x.save();x.translate(cx,cy);const sc=.86+.14*a;x.scale(sc,sc);x.globalAlpha*=a;
 rr(x,-290,-74,580,148,24,CREAM,INKC,5);txt(x,s,-250,-4,36,'#1B1430','left','900');
 rr(x,-250,22,150,36,10,TEAL,INKC,3);rr(x,-80,22,150,36,10,'#C9B8E0',INKC,3);
 if(chk>0){x.save();x.globalAlpha*=chk;x.translate(215,-4);const k=.7+.3*chk;x.scale(k,k);x.fillStyle=TEAL;x.strokeStyle=INKC;x.lineWidth=5;x.beginPath();x.arc(0,0,38,0,7);x.fill();x.stroke();
  x.strokeStyle='#FFF6E6';x.lineWidth=10;x.lineCap='round';x.lineJoin='round';x.beginPath();x.moveTo(-18,2);x.lineTo(-5,15);x.lineTo(20,-14);x.stroke();x.restore()}
 x.restore()}
function shotFrame(x,X,Y,rot,a){if(a<=0)return;x.save();x.translate(X,Y);x.rotate(rot);const sc=(.8+.2*a)*1.3;x.scale(sc,sc);x.globalAlpha*=a;rr(x,-70,-46,140,92,10,'#E9DEC6',TEAL,5);rr(x,-60,-36,52,72,5,'#FFF6E6');rr(x,-2,-36,52,72,5,'#FFF6E6');x.fillStyle='#E6A23C';x.fillRect(-54,-24,40,6);x.fillRect(4,-24,40,6);x.restore()}
function dState(sh,t){const T=ST(sh),u=t-T,o={lap:{}};
 const bob=[HREST[0]+Math.sin(t*9)*4,HREST[1]+Math.sin(t*11)*6];
 if(sh==4){o.smile=1;o.lap.cur=[900+Math.sin(u*1.5)*70,470+Math.cos(u*1.2)*60,fin(t,T+.2,.5)]}
 if(sh==7){const e=fin(t,T+.2,.6);o.rhand=[lerp(-97,-150,e),lerp(220,-8,e)];o.look=.3}
 if(sh==8){o.hand=bob}
 if(sh==9){o.hand=bob;o.lap.fill=kf(t,[[T+.9,0],[T+1.4,1]])}
 if(sh==10){o.hand=bob;o.lap.fill=kf(t,[[T+.1,1],[T+2.2,20]]);const s=fin(t,T+.9,.8);o.sad=.9*s;o.mouth=.6-1.1*s;o.headY=18*s;o.bend=.06*s}
 if(sh==11){o.smile=1}
 if(sh==13){o.smile=1;o.lap.flash=Math.sin(Math.PI*seg(t,T+.3,T+1.1))}
 if(sh==14){o.smile=1;o.hand=bob;o.lap.fmix=1;const c1=seg(t,T+.5,T+1.0),mv=ease(seg(t,T+1.0,T+1.9)),ty=seg(t,T+2.0,T+2.6);
  const cx=lerp(900,560,mv),cy=lerp(396,414,mv);o.lap.cur=[cx,cy,fin(t,T+.1,.5)];
  o.lap.hl1=fin(t,T+.55,.6);o.lap.fill=ty>0?ease(ty):0;
  if(t>T+.5&&t<T+1.0)o.lap.rip=[900,396,c1];else if(t>T+1.95&&t<T+2.5)o.lap.rip=[560,414,seg(t,T+1.95,T+2.5)]}
 if(sh==15){o.smile=1;o.lap.fmix=1;o.lap.fill=1;const a1=fin(t,T+.1,.5),a2=fin(t,T+.5,.5);o.hand=[kf(t,[[T,167],[T+.4,160],[T+.8,167]]),kf(t,[[T,25],[T+.3,-70],[T+.5,-80],[T+.9,30]])]}
 if(sh==16){o.smile=1;o.lap.fmix=1;const f=kf(t,[[T+.1,1],[T+1.4,20]]);o.lap.fill=f;o.lap.cur=[560,414+(f-1)*15.9,1];o.bend=-.05*fin(t,T+.2,.6);o.tilt=-.06*fin(t,T+.2,.6)}
 if(sh==25){o.warm=.45;o.smile=1;o.lap.fmix=1;o.lap.fill=20}
 return o}
function drawDesk(t,sh,cam){const x=layer('board',cam),T=ST(sh),s=dState(sh,t);s.cam=cam;deskWorld(x,t,s);
 const OT=[960,396],CH=[690,185],SS=[620,414];
 if(sh==7){const a=fin(t,T+.5,.6);if(a>0){x.save();x.globalAlpha=a;dashed(x,[1110,545],[1062,252],'#FF8A80',7,16,12,1);x.restore();tagP(x,1030,215,'NO CONNECTOR',RED,a,34,'#FFF6E6')}}
 if(sh==8){chatPanel(x,fin(t,T+.1,.5),fin(t,T+.9,.5)*1);flyOrder(x,t,T+.55,1,.9,[OT,CH])}
 if(sh==9){chatPanel(x,1,1);flyOrder(x,t,T+.1,1,.8,[CH,SS])}
 if(sh==10){chatPanel(x,1,6);for(let k=0;k<18;k++)flyOrder(x,t,T+.08+k*.095,3+k,.62,[OT,CH,SS])}
 if(sh==12){const a=fin(t,T+.1,.5),sw=fin(t,T+.55,.6);x.save();x.translate(800,470);const sc=.86+.14*a;x.scale(sc,sc);x.globalAlpha=a;
  rr(x,-320,-95,640,190,28,'#2A1F42',TEAL,6);txt(x,'COMPUTER USE',-285,0,38,CREAM,'left','900');
  const kx=lerp(148,232,sw);rr(x,110,-38,160,76,38,mixC('#6B5A8C','#2DB2AE',sw),INKC,5);x.fillStyle=CREAM;x.strokeStyle=INKC;x.lineWidth=4;x.beginPath();x.arc(kx,0,28,0,7);x.fill();x.stroke();x.restore()}
 if(sh==13){for(const [d,X,Y,r] of [[.7,1160,200,-.1],[1.1,1290,175,.05],[1.5,1420,205,.12]])shotFrame(x,X,Y,r,fin(t,T+d,.5))}
 if(sh==15){dialog(x,800,500,'ALLOW ORDER TOOL?',fin(t,T+.05,.5),fin(t,T+.35,.5));dialog(x,800,680,'ALLOW SPREADSHEET?',fin(t,T+.45,.5),fin(t,T+.8,.5))}
 comp([['board',0]])}

// ---------- the laptop close-up (shots 1, 2, 3) ----------
function plug(x,X,Y,a,c){if(a<=0)return;x.save();x.translate(X,Y);const sc=.9+.1*a;x.scale(sc,sc);x.globalAlpha*=a;x.lineCap='round';x.lineJoin='round';
 x.strokeStyle=INKC;x.lineWidth=16;x.beginPath();x.moveTo(80,0);x.quadraticCurveTo(130,0,130,50);x.stroke();x.strokeStyle='#C9B8E0';x.lineWidth=8;x.beginPath();x.moveTo(80,0);x.quadraticCurveTo(130,0,130,50);x.stroke();
 rr(x,-10,-40,90,80,16,CREAM,INKC,5);rr(x,-50,-26,44,16,5,'#C9B8E0',INKC,4);rr(x,-50,8,44,16,5,'#C9B8E0',INKC,4);
 if(c>0){x.save();x.translate(30,0);const k=.5+.5*c;x.scale(k,k);x.globalAlpha*=c;x.strokeStyle=INKC;x.lineWidth=30;x.beginPath();x.moveTo(-62,-62);x.lineTo(62,62);x.moveTo(62,-62);x.lineTo(-62,62);x.stroke();x.strokeStyle=RED;x.lineWidth=18;x.stroke();x.restore()}
 x.restore()}
function drawL(t,sh,cam){const x=layer('board',cam),T=ST(sh);bgDusk(x,.4,800,520);
 x.fillStyle='#B0705A';x.fillRect(-900,905,W+1800,40);x.fillStyle='rgba(255,226,190,.4)';x.fillRect(-900,905,W+1800,5);x.fillStyle='#7A4038';x.fillRect(-900,945,W+1800,400);
 x.save();x.translate(800,520);x.scale(1.5,1.5);x.translate(-800,-525);laptop(x,{scroll:Math.min(430,120*(t-ST(1))),fill:0});x.restore();
 plug(x,1400,500,sh==2?fin(t,T+.1,.5):sh>2?1:0,sh==2?fin(t,T+.5,.5):sh>2?1:0);
 comp([['board',0]])}

// ---------- the picking diagram (shots 17-20) ----------
const SRY=[400,590,780],SPL=300,SPW=820;
function tagP(x,X,Y,s,col,a,size=34,tc='#0B2A30'){if(a<=0)return;x.save();x.globalAlpha*=a;const w=txt_w(x,s,size)+46,sc=.9+.1*a;x.translate(X,Y);x.scale(sc,sc);pill(x,0,0,w,size*1.8,col);txt(x,s,0,2,size,tc,'center','900');x.restore()}
function stepBlock(x,i,s,a,hl,hcol){if(a<=0)return;x.save();x.globalAlpha*=a;const sc=.94+.06*a,cx=SPL+SPW/2,cy=SRY[i];x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 rr(x,SPL,cy-65,SPW,130,22,'#2A1F42','#8A7AA8',5);
 if(hl>0){x.save();x.globalAlpha*=hl;rr(x,SPL,cy-65,SPW,130,22,hcol==AMB?'rgba(255,198,110,.24)':'rgba(45,178,174,.28)',hcol,8);x.restore()}
 txt(x,s,cx,cy+3,54,CREAM,'center','900');x.restore()}
function drawX(t,sh,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(sh);
 const ti=sh==17?fin(t,T+.05,.5):1;
 {const S='HOW CLAUDE PICKS · IN COWORK',fs=76,w=impW(x,S,fs)+100;x.save();x.translate(960,200);const sc=.88+.12*ti;x.scale(sc,sc);x.globalAlpha=ti;rr(x,-w/2,-62,w,124,40,'#2A1F42',AMB,6);imp(x,S,0,6,fs,AMB);x.restore()}
 for(let i=0;i<3;i++){const a=sh==17?fin(t,T+.25+i*.15,.5):1;x.save();x.globalAlpha=a*.5;rr(x,SPL,SRY[i]-65,SPW,130,22,'rgba(42,31,66,.5)','#6B5A8C',4);x.restore()}
 const a1=sh==18?fin(t,T+.1,.5):sh>18?1:0,a2=sh==19?fin(t,T,.5):sh>19?1:0,a3=sh==20?fin(t,T,.5):sh>20?1:0;
 const h1=sh==18?fin(t,T+.3,.6):sh==19?1-fin(t,T+.1,.6):0,h2=sh==19?fin(t,T+.1,.6):sh==20?1-fin(t,T+.15,.6):0,h3=sh==20?fin(t,T+.15,.6):0;
 stepBlock(x,0,'1 · CONNECTOR',a1,h1,AMB);stepBlock(x,1,'2 · BROWSER',a2,h2,AMB);stepBlock(x,2,'3 · YOUR SCREEN',a3,h3,TEAL);
 tagP(x,1290,SRY[0],'FASTEST',AMB,sh==18?fin(t,T+.9,.5):sh>18?1:0,34,'#1B1430');
 if(sh==20){const a=fin(t,T+.5,.5);if(a>0){x.save();x.translate(1415,SRY[2]);const sc=.9+.1*a;x.scale(sc,sc);x.globalAlpha=a;rr(x,-235,-62,470,124,16,'#FFF6E6','#5B4C78',4);
  x.save();x.beginPath();x.roundRect(-235,-62,470,34,[16,16,0,0]);x.fillStyle='#5B4C78';x.fill();x.restore();txt(x,'ORDER TOOL',-220,-45,20,CREAM,'left','900');pill(x,150,-45,170,26,RED);txt(x,'NO CONNECTOR',150,-44,15,'#FFF6E6','center','900');
  x.fillStyle='#FFE3B0';for(let r=0;r<2;r++){x.beginPath();x.roundRect(-220,-18+r*40,440,32,6);x.fill()}x.restore()}}
 comp([['board',0]])}

// ---------- the catch (shots 21 card, 22 lanes, 23 retry) ----------
function drawK(t,sh,cam){const x=layer('board',cam);bgDusk(x,.18,960,560);const T=ST(sh);
 if(sh==21){const c=fin(t,T+.1,.6);x.save();x.translate(960,430);x.scale(.85+.15*c,.85+.15*c);x.globalAlpha=c;rr(x,-640,-170,1280,340,60,'#2A1F42',AMB,8);imp(x,'THE CATCH',0,6,176,AMB);x.restore();
  tagP(x,960,720,'Claude Help Center',CREAM,fin(t,T+.6,.55),50,'#1B1430')}
 if(sh==22){const a=fin(t,T+.05,.55),LS=560,LE=1660;x.save();x.translate(1110,540);x.scale(.94+.06*a,.94+.06*a);x.translate(-1110,-540);x.globalAlpha=a;
  for(const [y,lab] of [[430,'CONNECTOR'],[650,'YOUR SCREEN']]){txt(x,lab,500,y,40,CREAM,'right','900');rr(x,LS,y-38,LE-LS,76,38,'#2A1F42','#6B5A8C',4)}
  const p1=ease(seg(t,T+.35,T+.9)),p2=ease(seg(t,T+.35,T+2.1));
  {const X=lerp(LS+60,LE-80,p1);x.fillStyle=TEAL;x.strokeStyle=INKC;x.lineWidth=5;x.lineJoin='round';x.beginPath();x.moveTo(X-44,408);x.lineTo(X+10,408);x.lineTo(X+44,430);x.lineTo(X+10,452);x.lineTo(X-44,452);x.closePath();x.fill();x.stroke()}
  cursorDraw(x,lerp(LS+50,LE-90,p2),622,1.4,TEAL,1);x.restore()}
 if(sh==23){const c=fin(t,T+.1,.6),r=fin(t,T+.5,.6),cx=960,cy=470;
  x.save();x.translate(cx,cy);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-210,-150,420,300,30,CREAM,INKC,6);scribLines(x,-160,160,-90,4,12,'#B9A88A');scribLines(x,-160,160,-50,7,12,'#B9A88A');scribLines(x,-160,110,-10,2,12,'#B9A88A');
  const xm=fin(t,T+1.0,.5)*(1-fin(t,T+1.9,.6)),ck=fin(t,T+1.9,.6);
  x.lineCap='round';x.lineWidth=18;if(xm>0){x.save();x.globalAlpha*=xm;x.strokeStyle=RED;x.beginPath();x.moveTo(-34,40);x.lineTo(34,108);x.moveTo(34,40);x.lineTo(-34,108);x.stroke();x.restore()}
  if(ck>0){x.save();x.globalAlpha*=ck;x.strokeStyle=TEAL;x.lineJoin='round';x.beginPath();x.moveTo(-44,76);x.lineTo(-10,108);x.lineTo(50,38);x.stroke();x.restore()}
  x.restore();
  x.save();x.globalAlpha=r;x.translate(cx,cy);const a0=(t-T)*.9;x.rotate(a0);x.lineCap='round';x.strokeStyle=AMB;x.lineWidth=22;x.beginPath();x.arc(0,0,290,0,Math.PI*1.5);x.stroke();
  x.fillStyle=AMB;x.beginPath();x.moveTo(0-40,-290-26);x.lineTo(34,-290+4);x.lineTo(-40,-290+36);x.closePath();x.fill();x.restore()}
 comp([['board',0]])}

// ---------- side by side + WHAT WE LEARNED (shot 24) ----------
const MINI=document.createElement('canvas');MINI.width=W;MINI.height=H;
function miniScene(x,l,tp,sc,t,o){const m=MINI.getContext('2d');m.setTransform(1,0,0,1,0,0);m.globalAlpha=1;m.clearRect(0,0,W,H);o.mini=true;deskWorld(m,t,o);
 x.save();x.drawImage(MINI,l,tp,W*sc,H*sc);x.restore();rr(x,l,tp,W*sc,H*sc,0,null,INKC,4)}
function drawP(t,cam){const x=layer('board',cam);bgDusk(x,.2,960,560);const T=ST(24),a=fin(t,T+.05,.5),b=fin(t,T+.3,.5);
 x.save();x.globalAlpha=a;rr(x,90,250,840,540,30,'#2A1F42',AMB,6);x.restore();x.save();x.globalAlpha=b;rr(x,990,250,840,540,30,'#2A1F42',TEAL,6);x.restore();
 x.save();x.globalAlpha=a;pill(x,300,300,200,56,AMB);txt(x,'BEFORE',300,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=b;pill(x,1200,300,150,56,TEAL);txt(x,'NOW',1200,303,34,'#1B1430','center','900');x.restore();
 x.save();x.globalAlpha=a;miniScene(x,115,380,.3,t,{lap:{fill:20,fmix:0},sad:.9,mouth:-.5,headY:16});x.restore();
 x.save();x.globalAlpha=b;miniScene(x,1015,380,.3,t,{lap:{fill:20,fmix:1},smile:1});x.restore();
 meterBox(x,115+576+30,285,.58,20,0,a,false);meterBox(x,1015+576+30,285,.58,2,1,b,false);
 {const S='WHAT WE LEARNED',fs=72,w=impW(x,S,fs)+110,c=fin(t,T+.1,.6);if(c>0){x.save();x.translate(960,176);x.scale(.88+.12*c,.88+.12*c);x.globalAlpha=c;rr(x,-w/2,-50,w,100,36,'#2A1F42',AMB,6);imp(x,S,0,5,fs,AMB);x.restore()}}
 comp([['board',0]])}

// ---------- the mascot big (shot 26) ----------
function drawMascot(t,sh,cam){const x=layer('board',cam);bgDusk(x,.35,620,560);
 let g=x.createRadialGradient(620,560,40,620,560,700);g.addColorStop(0,'rgba(255,196,120,.5)');g.addColorStop(1,'rgba(255,150,100,0)');x.fillStyle=g;x.fillRect(-900,-600,W+1800,H+1200);
 const p={x:620,y:720,s:1.85,face:1,breath:t*2.2,noLegs:true,blink:blinkAt(t,BL),hands:{},showH:{},look:.05,lookY:0,brow:.45,mouth:.95,mouthW:30,tilt:.05};
 p.hands.r=[170+Math.sin(t*9)*12,-30+Math.sin(t*9)*36];p.showH.r=true;
 actor(x,'hero',HERO,p,cam);lanyard(x,p);
 const T0=ST(26)+.1,c=fin(t,T0,.55),pulse=1+.035*Math.sin((t-T0)*7);x.save();x.translate(1430,430);const sc=lerp(.7,1,c)*pulse;x.scale(sc,sc);x.globalAlpha=c;
 x.fillStyle=INKC;x.beginPath();x.roundRect(-300,-80,600,160,80);x.fill();pill(x,0,0,580,142,RED);x.fillStyle=CREAM;x.beginPath();x.moveTo(-235,-34);x.lineTo(-235,34);x.lineTo(-177,0);x.closePath();x.fill();txt(x,'Subscribe',60,5,78,CREAM,'center','800');x.restore();
 {const S='COMMENT: WHAT NEXT?',fs=50,w=txt_w(x,S,fs,'900')+110,h=150,C0=ST(26)+1.7,cc=fin(t,C0,.55),pu=1+.035*Math.sin((t-C0)*7);
  if(cc>0){x.save();x.translate(1430,700);const k=lerp(.7,1,cc)*pu;x.scale(k,k);x.globalAlpha=cc;
   x.lineJoin='round';x.fillStyle=AMB;x.strokeStyle=INKC;x.lineWidth=8;x.beginPath();x.roundRect(-w/2,-h/2,w,h,h/2);x.fill();x.stroke();
   x.beginPath();x.moveTo(-w/2+90,h/2-4);x.lineTo(-w/2+30,h/2+52);x.lineTo(-w/2+160,h/2-4);x.closePath();x.fill();x.stroke();x.fillRect(-w/2+98,h/2-12,54,14);
   txt(x,S,0,4,fs,'#1B1430','center','900');x.restore()}}
 // nothing under the buttons: no next episode is decided (owner, 2026-11-23, lesson L24)
 comp([['board',0]])}

// ---------- the meter "YOUR STEPS" (lesson L25): screen space, whole numbers only ----------
function meterBox(x,l,tp,k,v,mx,a=1,title=true){if(a<=0)return;x.save();x.globalAlpha*=a;const w=320*k,h=780*k,cx=l+w/2,cy=tp+h/2,sc=.94+.06*a;x.translate(cx,cy);x.scale(sc,sc);x.translate(-cx,-cy);
 const col=mixC(AMB,TEAL,mx);rr(x,l,tp,w,h,26*k,'rgba(27,20,48,.93)',col,5*k);
 if(title){const fs=Math.min(30,280/txt_w(x,'YOUR STEPS',30)*30)*k;txt(x,'YOUR STEPS',cx,tp+46*k,fs,CREAM,'center','900')}
 imp(x,String(Math.round(v)),cx,tp+(title?150:110)*k,132*k,col);
 const tl=l+118*k,tw=90*k,top=tp+260*k,bot=tp+720*k,ph=bot-top;
 rr(x,tl,top,tw,ph,12*k,'#241A3C',INKC,4*k);
 for(const n of [0,10,20]){const y=bot-ph*n/20;x.fillStyle='#C9B8E0';x.fillRect(tl-18*k,y-2*k,18*k,4*k);txt(x,String(n),tl-26*k,y,28*k,'#C9B8E0','right','900')}
 const fh=ph*clamp(v/20);if(fh>.5){x.save();x.beginPath();x.roundRect(tl,top,tw,ph,12*k);x.clip();x.fillStyle=col;x.fillRect(tl,bot-fh,tw,fh);x.fillStyle='rgba(255,255,255,.28)';x.fillRect(tl,bot-fh,tw,Math.min(6*k,fh));x.restore()}
 x.restore()}
const MK=[[ST(3)+.2,0],[ST(4)-.08,20],[ST(4)+.5,20],[ST(4)+1.6,2],[ST(6)+.1,2],[ST(6)+.7,0],[ST(8)+1.3,0],[ST(8)+1.8,1],[ST(9)+.9,1],[ST(9)+1.4,2],[ST(10)+.3,2],[ST(10)+1.7,20],[ST(11)+.1,20],[ST(11)+.7,0],[ST(15)+.35,0],[ST(15)+.9,2]];
const MM=[[0,0],[ST(4)+.4,0],[ST(4)+1.1,1],[ST(6)+.1,1],[ST(6)+.7,0],[ST(11)+.1,0],[ST(11)+.7,1]];
function meterOverlay(t,sh){if(!(sh>=3&&sh<=16))return;const a=sh==3?fin(t,ST(3),.5):1;meterBox(ctx,1560,170,1,kf(t,MK),kf(t,MM),a)}

// ---------- words on screen (screen space) ----------
function card(t,a,b,X,y,s,col,size,fill='rgba(27,20,48,.88)'){const v=fin(t,a,.5)*(b?1-fin(t,b,.3):1);if(v<=0)return;ctx.save();ctx.font=`800 ${size}px Arial`;const w=ctx.measureText(s).width+size*2.2;ctx.translate(X,y);ctx.scale(.9+.1*v,.9+.1*v);ctx.translate(-X,-y);pill(ctx,X,y,w,size*2.2,fill,v);txt(ctx,s,X,y+2,size,col,'center','800',v);ctx.restore()}
function tag(){const x=ctx;x.setTransform(1,0,0,1,0,0);x.save();x.font='800 32px Arial';const tw=x.measureText('Claude Computer Use').width,dw=x.measureText(' ·').width;pill(x,32+(tw+dw+160)/2,52,tw+dw+160,62,'rgba(27,20,48,.88)');
  txt(x,'Claude Computer Use',58,54,32,AMB,'left','800');txt(x,' ·',58+tw,54,32,CREAM,'left','800');pill(x,58+tw+dw+50,52,78,42,RED);txt(x,'60s',58+tw+dw+50,54,26,'#FFF6E6','center','800');x.restore()}
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
 const font=q=>`${q}px Impact, "Arial Black", sans-serif`,TOPIC='CLAUDE COMPUTER USE';
 x.font=font(100);const sz=Math.min(320,100*1560/x.measureText(TOPIC).width),k=sz/230;
 const put=(s,X,Y,q,col)=>{x.font=font(q);x.lineWidth=q*.17;x.strokeStyle=INKC;x.strokeText(s,X,Y);x.fillStyle=col;x.fillText(s,X,Y)};
 const Yt=H/2-20;put('LEARN',W/2,Yt-sz*.9,sz*.34,CREAM);put(TOPIC,W/2,Yt+sz*.2,sz,AMB);
 x.save();x.translate(W/2,Yt+sz*.2+150*k);x.rotate(-.035);x.scale(k,k);sticker(x);x.restore();
 x.restore();
 g=x.createRadialGradient(W/2,H/2,H*.5,W/2,H/2,H*1.1);g.addColorStop(0,'rgba(12,6,20,0)');g.addColorStop(1,'rgba(12,6,20,.4)');x.fillStyle=g;x.fillRect(0,0,W,H)}
const LX=800,LY=935;
function overlay(t,sh){ctx.setTransform(1,0,0,1,0,0);
 meterOverlay(t,sh);
 tab(t,ST(6)+.05,out(11),'BEFORE',AMB);tab(t,ST(11)+.05,out(17),'NOW',TEAL);
 card(t,ST(2)+.3,out(3),LX,975,'NO CONNECTOR','#FFF6E6',50,RED);
 card(t,ST(5)+.2,out(6),LX,LY,'20 ORDERS · 1 APP WITH NO CONNECTOR',CREAM,46);
 card(t,ST(6)+.3,out(7),LX,LY,'TEAM & ENTERPRISE',AMB,50);
 card(t,ST(10)+.5,out(11),LX,LY,'20 ROUND TRIPS · BY YOU',AMB,50);
 card(t,ST(11)+.3,out(12),LX,LY,'BETA · TEAM & ENTERPRISE',TEAL,50);
 card(t,ST(12)+.2,out(13),LX,LY,'OWNER TURNS IT ON',TEAL,50);
 card(t,ST(13)+.3,out(14),LX,LY,'SCREENSHOTS',TEAL,50);
 card(t,ST(14)+.4,out(15),LX,LY,'CLICKS · TYPES · APPS YOU ALLOW',TEAL,46);
 card(t,ST(15)+.7,out(16),LX,LY,'APPROVALS',TEAL,50);
 card(t,ST(22)+.9,out(23),960,890,'SLOWER THAN A CONNECTOR',AMB,52);
 card(t,ST(23)+.9,out(24),960,890,'COMPLEX TASKS: SOMETIMES A 2ND TRY',AMB,50);
 card(t,ST(24)+.8,out(25),960,890,'SAME 20 ORDERS',CREAM,52);
 if(inS(t,25,26)){const fo=1-fin(t,out(26),.3),dm=fin(t,ST(25)+.15,.5);ctx.save();ctx.globalAlpha=.22*dm;ctx.fillStyle='#0C0614';ctx.fillRect(0,0,W,H);ctx.restore();
  const v=fin(t,ST(25)+.1,.5)*fo;if(v>0){const S1='20 ORDERS, NO COPY-PASTE BY YOU:',S2='YOU APPROVE 2 APPS';ctx.save();ctx.font='800 72px Arial';const w=ctx.measureText(S1).width+140;ctx.restore();
   ctx.save();ctx.globalAlpha=v;ctx.fillStyle='rgba(27,20,48,.92)';ctx.beginPath();ctx.roundRect(W/2-w/2,835,w,190,40);ctx.fill();ctx.restore();
   txt(ctx,S1,W/2,888,72,CREAM,'center','800',v);txt(ctx,S2,W/2,971,78,AMB,'center','800',fin(t,ST(25)+.6,.5)*fo)}}}

// ---------- cameras: a slow push on the flat board ----------
const E=u=>ease(u),push=(a=1,b=1.04)=>u=>({x:960,y:540,z:lerp(a,b,E(u)),b:[0,0,0]});
const CAM=[()=>({})].concat(Array.from({length:26},()=>push()));CAM[1]=push(1,1.06);CAM[4]=push(1,1.08);CAM[18]=push(1,1.08);CAM[23]=push(1,1.06);CAM[25]=push(1,1.06);CAM[24]=push(1,1.06);CAM[26]=push(1,1.06);CAM[21]=push(1,1.06);CAM[22]=push(1,1.06);
FILM={dur:60,cuts:CF,fadeIn:0,fadeOut:0,
 cam(s,u,t){return CAM[s](u,t)},
 draw(t,cam,s){const o=t+1e-6;t_g=o;
  if(!s)drawTitle(o);else{const pl=PLACE[s];if(pl=='D')drawDesk(o,s,cam);else if(pl=='L')drawL(o,s,cam);else if(pl=='X')drawX(o,s,cam);else if(pl=='P')drawP(o,cam);else if(pl=='K')drawK(o,s,cam);else drawMascot(o,s,cam);overlay(o,s)}
  const fo=seg(o,60-.45,60-.03);if(fo>0)fadeTo(ctx,fo);tag()},
 plants(){return {}}};
// ---------- sound events (the mix is in audio_mix.py): a soft brush on every cut, pops on cards and labels, page and slide sounds ----------
for(let i=1;i<CF.length-1;i++)say(ST(i),PLACE[i]!=PLACE[i-1]?'cut':'cut2');
for(const t of [ST(2)+.3,ST(2)+.6,ST(3)+.05,ST(5)+.2,ST(6)+.3,ST(6)+.05,ST(7)+.5,ST(8)+.1,ST(10)+.5,ST(11)+.3,ST(11)+.05,ST(12)+.2,ST(12)+.6,ST(13)+.3,ST(13)+.7,ST(13)+1.1,ST(13)+1.5,ST(14)+.4,ST(14)+.55,ST(14)+1.95,ST(15)+.05,ST(15)+.35,ST(15)+.45,ST(15)+.8,ST(15)+.7,ST(17)+.05,ST(17)+.25,ST(18)+.1,ST(18)+.9,ST(19)+.0,ST(19)+.1,ST(20)+.0,ST(20)+.15,ST(20)+.5,ST(21)+.1,ST(21)+.6,ST(22)+.05,ST(22)+.35,ST(22)+.9,ST(23)+.1,ST(23)+.5,ST(23)+1.0,ST(24)+.1,ST(24)+.3,ST(24)+.8,ST(25)+.1,ST(25)+.6,ST(26)+.1,ST(26)+1.7,ST(22)+.9,ST(23)+.9,ST(12)+.55,ST(9)+.9])say(t,'tick');
for(const t of [ST(8)+.55,ST(9)+.1,ST(10)+.4,ST(10)+.9,ST(10)+1.4,ST(16)+.1,ST(16)+.7,ST(16)+1.2,ST(12)+.55,ST(14)+1.0,ST(7)+.2,ST(4)+.2])say(t,'slide');
for(const t of [ST(1)+.2,ST(1)+.8,ST(3)+.3])say(t,'paper');
say(ST(14)+.5,'tock');say(ST(14)+1.95,'tock');say(ST(15)+.35,'stamp');say(ST(15)+.8,'stamp');say(ST(21)+.1,'stamp');
