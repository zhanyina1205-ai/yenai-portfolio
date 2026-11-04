const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pause = ms => new Promise(r=>setTimeout(r,reduced?0:ms));
const stage=$('#stage');
const portfolioBase=$('meta[name="portfolio-base"]')?.content || '';
let current='home', busy=false, toastTimer;
const chapters=[
  {title:'个人介绍',url:'/about/'},
  {title:'服务 IP · 是亮亮',url:'/liangliang/'},
  {title:'椰奶没喝饱',url:'/accounts/'},
  {title:'摇滚椰奶冻',url:'/rock/'},
  {title:'MontiRivers 山河集',url:'/montirivers/'}
];
const picks=[
  {title:'我的小工具',url:'/tools/'},
  {title:'我的 AIGC',url:'/aigc/'},
  {title:'我的剪辑作品',url:'/videos/'}
];
const cupPositions=[[50,21],[35.8,41],[61.7,41],[40.2,68],[58.8,68]];
const cupLabels=chapters.map(p=>p.title);
function addLift(button,scene,x,y,clip){
  const fragment=document.createElement('img');fragment.src=$('.scene-art',scene).getAttribute('src');fragment.alt='';fragment.className='art-fragment';fragment.draggable=false;fragment.setAttribute('aria-hidden','true');fragment.style.clipPath=clip;fragment.style.transformOrigin=`${x}% ${y}%`;scene.append(fragment);
  const on=()=>{if(!busy)fragment.classList.add('lifted')},off=()=>fragment.classList.remove('lifted');
  button.addEventListener('pointerenter',on);button.addEventListener('pointerleave',off);button.addEventListener('focus',on);button.addEventListener('blur',off);button.addEventListener('click',off);
}
addLift($('.home-cake'),$('#home'),5,60,'polygon(0% 37%, 12% 37%, 16% 48%, 21% 59%, 21% 70%, 16% 78%, 0% 81%)');
addLift($('.home-pot'),$('#home'),99,30,'polygon(80% 34%,87% 29%,89% 22%,94% 14%,100% 11%,100% 50%,94% 48%,89% 42%,82% 42%)');
let lastCake=0,trailIndex=0;
$('#home').addEventListener('pointermove',e=>{
  if(reduced||busy||e.pointerType==='touch')return;
  const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  if(x<.32||x>.7||y<.36||y>.65||performance.now()-lastCake<85)return;
  lastCake=performance.now();const n=trailIndex++,cake=document.createElement('span');cake.className='trail-cake';cake.textContent=['🍰','🧁','🎂'][n%3];cake.style.left=`${x*100}%`;cake.style.top=`${y*100}%`;$('.cake-trail').append(cake);
  cake.animate([{opacity:0,transform:'translate(-50%,-50%) scale(.5)'},{opacity:1,offset:.15,transform:`translate(-50%,-65%) rotate(${n%2?12:-12}deg) scale(1)`},{opacity:0,transform:`translate(calc(-50% + ${(n%3-1)*16}px),-100%) rotate(${n%2?25:-25}deg) scale(.45)`}],{duration:850,easing:'ease-out'}).finished.then(()=>cake.remove());
});
cupPositions.forEach(([x,y],i)=>{
  const b=document.createElement('button'); b.className='hotspot cup'; b.style.cssText=`left:${x}%;top:${y}%;--i:${i}`;
  b.setAttribute('aria-label',`第${i+1}杯：${cupLabels[i]}，点击倒茶并打开作品`);
  b.innerHTML=`<span class="steam" aria-hidden="true"><i></i><i></i><i></i></span><span class="cup-number" aria-hidden="true">0${i+1}</span><span class="tip">${cupLabels[i]}<b>为这一杯注入灵感 ↗</b></span>`;
  b.addEventListener('click',()=>pour(i,b));$('#cups').append(b);
  addLift(b,$('#tea'),x,y,`ellipse(10% 14% at ${x}% ${y}%)`);
});
picks.map(p=>p.title).forEach((label,i)=>{
  const b=document.createElement('button');b.className=`hotspot slice slice-${['one','two','three'][i]}`;b.setAttribute('aria-label',`第${i+1}块蛋糕：${label}`);
  b.innerHTML=`<span class="tip">${label}<b>尝一块创作 ↗</b></span>`;
  b.addEventListener('click',()=>pickCake(i,b));$('#slices').append(b);
});
function announce(text){clearTimeout(toastTimer);const box=$('.live-message');box.textContent=text;box.classList.add('visible');toastTimer=setTimeout(()=>box.classList.remove('visible'),2400)}
async function navigate(page){
  if(busy||page===current||!['home','tea','cake'].includes(page))return;
  busy=true;stage.classList.add('busy');stage.setAttribute('aria-busy','true');
  const prior=$(`#${current}`),next=$(`#${page}`),curtain=$('.page-curtain'),animations=[];
  const switchScene=()=>{
    prior.classList.remove('active');prior.inert=true;
    next.classList.add('active');next.inert=false;
    current=page;paintNavigation(page);history.replaceState(null,'',`#${page}`);
  };
  try{
    window.scrollTo(0,0);
    if(reduced){switchScene();return}
    stage.dataset.transition=page;
    curtain.classList.add('is-transitioning');curtain.dataset.phase='entering';
    const enter=curtain.animate([{transform:'translateY(105%)'},{transform:'translateY(0)'}],{duration:380,easing:'cubic-bezier(.65,0,.35,1)',fill:'forwards'});
    animations.push(enter);
    // Keep the old scene covered until the destination illustration is ready.
    await Promise.all([enter.finished,$('.scene-art',next).decode().catch(()=>{})]);
    curtain.dataset.phase='covered';
    switchScene();
    await pause(150);
    curtain.dataset.phase='leaving';
    const leave=curtain.animate([{transform:'translateY(0)'},{transform:'translateY(-105%)'}],{duration:420,easing:'cubic-bezier(.65,0,.35,1)',fill:'forwards'});
    animations.push(leave);await leave.finished;
  }finally{
    animations.forEach(animation=>animation.cancel());
    curtain.classList.remove('is-transitioning');delete curtain.dataset.phase;
    delete stage.dataset.transition;stage.removeAttribute('aria-busy');
    busy=false;stage.classList.remove('busy');
    $('.hotspot',next)?.focus({preventScroll:true});
  }
}
function paintNavigation(page){
  $$('.page-dot').forEach(b=>{const chosen=b.dataset.go===page;b.classList.toggle('selected',chosen);if(chosen)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
  $('#page-number').textContent={home:'01',tea:'02',cake:'03'}[page];
  $('#page-hint').textContent={home:'欢迎入席。点点蛋糕，或给自己倒杯茶。',tea:'五只茶杯，五段经历。选一杯，慢慢认识我。',cake:'小工具、AIGC、视频剪辑。今天想尝哪一块？'}[page];
}
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.go)));
async function pour(i,button){
  if(busy)return;
  if(reduced){showProject(i,'tea',button);return}
  busy=true;stage.classList.add('busy');stage.dataset.motion='teapot';
  const actor=$('#teapot-actor'),streams=$$('.tea-stream'),fill=$('.tea-fill'),animations=[];
  try{
    await actor.decode();
    const [x,y]=cupPositions[i],cx=x*16.72,cy=(y-5.5)*9.41;
    const origin=actorAnchor(actor,.078,.52),tx=cx+8,ty=cy-(i===0?38:70),dx=tx-origin.x,dy=ty-origin.y,scale=i===0?.68:.72;
    const pose=actorPose(),rest=pose(0,0,0,1),near=pose(dx,dy,-8,scale),tilted=pose(dx,dy,18,scale);
    const scene=$('#tea');$('.pour-highlight').style.clipPath=`ellipse(10% 14% at ${x}% ${y}%)`;scene.classList.add('is-pouring');
    stage.dataset.motionPhase='travelling';
    await moveActor(actor,[rest,pose(dx*.5,dy*.5-22,-5,.9),near],620);
    stage.dataset.motionPhase='tilting';
    await moveActor(actor,[near,tilted],280);
    const d=`M ${tx} ${ty} Q ${cx-12} ${ty+(cy-ty)*.65} ${cx} ${cy}`;
    streams.forEach(p=>{p.setAttribute('d',d);const len=p.getTotalLength();p.style.strokeDasharray=len;p.style.strokeDashoffset=len;p.style.opacity=1;animations.push(p.animate([{strokeDashoffset:len},{strokeDashoffset:0}],{duration:240,easing:'ease-in',fill:'forwards'}))});
    fill.setAttribute('cx',cx);fill.setAttribute('cy',cy);fill.setAttribute('rx',66);fill.setAttribute('ry',22);
    animations.push(fill.animate([{opacity:0,transform:'translateY(7px)'},{opacity:.75,transform:'translateY(0)'}],{delay:100,duration:600,fill:'forwards'}));
    $$('.ripple').forEach((r,n)=>{r.setAttribute('cx',cx);r.setAttribute('cy',cy);r.setAttribute('rx',26);r.setAttribute('ry',9);r.style.transformOrigin=`${cx}px ${cy}px`;animations.push(r.animate([{opacity:.8,transform:'scale(.3)'},{opacity:0,transform:'scale(2.7)'}],{delay:200+n*230,duration:650,iterations:2,fill:'forwards'}))});
    stage.dataset.motionPhase='pouring';
    playPour();await pause(1250);
    streams.forEach(p=>p.style.opacity=0);animations.forEach(a=>a.cancel());
    stage.dataset.motionPhase='opening';
    await showProject(i,'tea',button);
  }finally{
    actor.style.transform='';streams.forEach(p=>p.style.opacity=0);animations.forEach(a=>a.cancel());
    $('#tea').classList.remove('is-pouring');
    delete stage.dataset.motion;delete stage.dataset.motionPhase;busy=false;stage.classList.remove('busy');
  }
}
async function pickCake(i,button){
  if(busy)return;
  if(reduced){showProject(i,'cake',button);return}
  busy=true;stage.classList.add('busy');stage.dataset.motion='fork';
  const actor=$('#fork-actor'),mark=$('.cake-prick'),layer=$('.sparkles');
  try{
    await actor.decode();
    const origin=actorAnchor(actor,.475,.018),cx=[730,825,925][i],cy=[426,439,453][i],dx=cx-origin.x,dy=cy-origin.y;
    const pose=actorPose(),rest=pose(0,0,0,1),raised=pose(0,-55,-12,.98),above=pose(dx-25,dy-25,125,.8),inserted=pose(dx,dy,125,.8);
    stage.dataset.motionPhase='lifting';
    await moveActor(actor,[rest,raised],200);
    stage.dataset.motionPhase='travelling';
    await moveActor(actor,[raised,pose(dx*.45,-90,85,.9),above],520);
    stage.dataset.motionPhase='inserting';
    await moveActor(actor,[above,pose(dx+3,dy+3,125,.8),inserted],220,'cubic-bezier(.3,0,.7,1)');
    mark.style.left=`${cx/16.72}%`;mark.style.top=`${cy/9.41}%`;mark.classList.add('visible');
    for(let n=0;n<7;n++){const s=document.createElement('span');s.className='spark';s.textContent=n%2?'✧':'·';s.style.left=`${cx/16.72}%`;s.style.top=`${cy/9.41}%`;layer.append(s);const a=n*Math.PI*2/7;s.animate([{transform:'translate(0,0) scale(.3)',opacity:0},{opacity:.9,offset:.2},{transform:`translate(${Math.cos(a)*42}px,${Math.sin(a)*32}px) scale(.5)`,opacity:0}],{duration:650,easing:'ease-out'}).finished.then(()=>s.remove())}
    stage.dataset.motionPhase='piercing';
    playClink();await pause(430);
    stage.dataset.motionPhase='opening';
    await showProject(i,'cake',button);
  }finally{
    actor.style.transform='';mark.classList.remove('visible');delete stage.dataset.motion;delete stage.dataset.motionPhase;busy=false;stage.classList.remove('busy');
  }
}
// All poses use source illustration coordinates, so actors, spouts and hit targets scale together.
function actorAnchor(node,x,y){const unit=1672/stage.clientWidth;return {x:(node.offsetLeft+node.offsetWidth*x)*unit,y:(node.offsetTop+node.offsetHeight*y)*unit}}
function actorPose(){const unit=stage.clientWidth/1672;return (x,y,angle,scale)=>`translate(${x*unit}px,${y*unit}px) rotate(${angle}deg) scale(${scale})`}
async function moveActor(node,poses,duration,easing='cubic-bezier(.4,0,.2,1)'){
  const a=node.animate(poses.map(transform=>({transform})),{duration,easing,fill:'forwards'});
  try{await a.finished;node.style.transform=poses[poses.length-1]}finally{a.cancel()}
}
async function showProject(index,type){
  const item=(type==='tea'?chapters:picks)[index];
  document.title=`${item.title} · 椰奶作品集`;
  document.body.classList.add('opening-work');
  await pause(240);
  location.assign(`${portfolioBase}${item.url}`);
  // Keep the transition covered until the destination document is ready.
  await new Promise(resolve=>window.addEventListener('pagehide',resolve,{once:true}));
}
window.addEventListener('pageshow',event=>{
  if(!event.persisted)return;
  document.body.classList.remove('opening-work');document.title='椰奶作品集';
  busy=false;stage.classList.remove('busy');delete stage.dataset.motion;delete stage.dataset.motionPhase;
  $$('.motion-actor').forEach(actor=>actor.style.transform='');$('#tea').classList.remove('is-pouring');
  $$('.tea-stream').forEach(p=>p.style.opacity=0);$('.cake-prick').classList.remove('visible');
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&current!=='home')navigate('home')});
// Decode the three art pages before they are used in a scene transition.
$$('.scene-art').forEach(im=>im.decode().catch(()=>{}));
// Initialize deep links synchronously so the first interaction cannot overlap an entrance fade.
const initial=['tea','cake'].includes(location.hash.slice(1))?location.hash.slice(1):'home';
current=initial;
$$('.scene').forEach(scene=>{scene.classList.toggle('active',scene.id===initial);scene.inert=scene.id!==initial});
paintNavigation(initial);
window.addEventListener('hashchange',()=>{const page=location.hash.slice(1);if(['home','tea','cake'].includes(page))navigate(page)});
// Quiet, click-triggered interaction sounds; no autoplay or external audio files.
let audioContext,soundEnabled=true;
$('#sound-toggle').addEventListener('click',()=>{soundEnabled=!soundEnabled;$('#sound-toggle').textContent=`音效 · ${soundEnabled?'开':'关'}`;$('#sound-toggle').setAttribute('aria-pressed',String(soundEnabled))});
function getAudio(){if(!soundEnabled)return null;try{audioContext??=new(window.AudioContext||window.webkitAudioContext)();audioContext.resume().catch(()=>{});return audioContext}catch{return null}}
function playPour(){const c=getAudio();if(!c)return;const duration=1.1,b=c.createBuffer(1,Math.ceil(c.sampleRate*duration),c.sampleRate),v=b.getChannelData(0);for(let i=0;i<v.length;i++)v[i]=(Math.random()*2-1)*(.5+.5*Math.sin(i/c.sampleRate*95));const s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=b;f.type='bandpass';f.frequency.value=1500;f.Q.value=.55;g.gain.setValueAtTime(0,c.currentTime);g.gain.linearRampToValueAtTime(.07,c.currentTime+.13);g.gain.setValueAtTime(.07,c.currentTime+.8);g.gain.linearRampToValueAtTime(0,c.currentTime+duration);s.connect(f).connect(g).connect(c.destination);s.start();s.stop(c.currentTime+duration)}
function playClink(){const c=getAudio();if(!c)return;[1530,2670].forEach((f,i)=>{const o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.035/(i+1),c.currentTime);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.28);o.connect(g).connect(c.destination);o.start();o.stop(c.currentTime+.3)})}
