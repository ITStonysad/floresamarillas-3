'use strict';

/* PERSONALIZA AQUÍ: música, cantidades y pausas (milisegundos).
   No se necesitan nombres, imágenes, librerías ni conexión a internet.
   Las duraciones de la brisa se cambian en --breeze, dentro de style.css. */
const CONFIG = {
  musica: 'assets/music/music.mp3', volumen: 0.35,
  petalos: 22, petalosMovil: 9,
  particulas: 20, particulasMovil: 8,
  floresCampo: 38, floresCampoMovil: 24,
  floresCorazon: 46, floresCorazonMovil: 34,
  pausaNocturna: 9000, formacionCorazon: 4500
};

/* TEXTOS EDITABLES. Cada cuerpo conserva los párrafos mediante \n\n.
   El contenido se inserta como texto, sin interpretar HTML. */
const TEXT = {
  "cartas": [
    {
      "titulo": "Un pequeño recordatorio.",
      "cuerpo": "Quizá estas flores sean solamente pequeños dibujos en una pantalla, pero la intención detrás de ellas es completamente real.\n\nQuería regalarte algo diferente, algo que pudieras abrir cuando quisieras y que, aunque fuera por unos minutos, pudiera hacerte sonreír.\n\nA veces no hace falta esperar una fecha importante para recordarle a alguien que merece cosas bonitas.\n\nAsí que guarda estas flores como un pequeño recordatorio de que hoy alguien pensó en ti y quiso dedicarte un momento bonito. 💛"
    },
    {
      "titulo": "Para cuando vuelvas.",
      "cuerpo": "No sé exactamente cuándo vas a volver a abrir esta página.\n\nQuizá mañana.\n\nQuizá dentro de algunas semanas.\n\nO quizá solamente hoy.\n\nPero me gusta pensar que estas palabras van a quedarse aquí esperando.\n\nAsí que si algún día regresas, espero que recuerdes la intención con la que fueron escritas.\n\nSimplemente quería crear algo bonito para ti.\n\nAlgo pequeño, pero hecho con paciencia.\n\nPorque a veces los detalles más simples son los que terminan teniendo un significado especial. 💛"
    },
    {
      "titulo": "Quédate con lo bonito.",
      "cuerpo": "Si llegaste hasta aquí significa que recorriste todo este pequeño jardín.\n\nQuizá comenzaste solamente por curiosidad y terminaste leyendo cada palabra.\n\nY eso hace que todo esto haya valido la pena.\n\nNo quería hacer solamente una página bonita.\n\nQuería crear un pequeño lugar al que pudieras entrar y encontrar flores, música y algunas palabras capaces de acompañarte durante unos minutos.\n\nNo sé cómo habrá sido tu día antes de abrir esto.\n\nPero espero que después de llegar hasta aquí sea aunque sea un poquito más bonito.\n\nQuédate con las flores.\n\nQuédate con las palabras que más te gustaron.\n\nY sobre todo quédate con esta idea:\n\nNo siempre necesitas una ocasión especial para recibir algo bonito.\n\nA veces simplemente lo mereces.\n\nAsí que estas flores amarillas son para ti.\n\nHoy.\n\nMañana.\n\nY cualquier día en el que necesites un poquito de amarillo en medio de todo. 💛🌻"
    }
  ],
  "paginas": [
    {
      "titulo": "Para un día normal",
      "cuerpo": "Si estás leyendo esto en uno de esos días donde no ocurrió nada extraordinario, entonces quizá sea el momento perfecto.\n\nNo todos los días necesitan convertirse en recuerdos enormes.\n\nA veces un día bonito simplemente consiste en estar tranquilo, escuchar una canción que te gusta, comer algo rico o recibir inesperadamente unas flores amarillas.\n\nEspero que hoy puedas encontrar aunque sea una pequeña razón para decir: fue un buen día."
    },
    {
      "titulo": "Para cuando estés cansada",
      "cuerpo": "Si hoy fue pesado, descansa.\n\nNo siempre tienes que poder con absolutamente todo.\n\nPuedes detenerte un momento, respirar y continuar cuando tengas un poquito más de fuerzas.\n\nLas cosas pendientes pueden esperar.\n\nTu tranquilidad también importa.\n\nAsí que por ahora imagina que estas flores llegaron solamente para hacerte compañía un ratito. 🌻"
    },
    {
      "titulo": "Para cuando estés feliz",
      "cuerpo": "Si hoy estás teniendo un día bonito, entonces disfruta cada segundo.\n\nRíete todo lo que puedas.\n\nEscucha esa canción una vez más.\n\nToma muchas fotos.\n\nHaz cosas que después puedas recordar con una sonrisa.\n\nLos momentos felices también merecen ser guardados."
    },
    {
      "titulo": "Para cuando dudes de ti",
      "cuerpo": "Por si algún día empiezas a pensar que no estás avanzando lo suficiente, recuerda mirar todo el camino que ya recorriste.\n\nQuizá todavía existan muchas cosas por conseguir, pero eso no significa que estés en el mismo lugar de antes.\n\nAvanzar lentamente también sigue siendo avanzar.\n\nNo necesitas compararte con nadie.\n\nTu camino tiene su propio ritmo."
    },
    {
      "titulo": "Para cuando necesites sonreír",
      "cuerpo": "Esta página no tiene ningún consejo importante.\n\nSolamente tiene una misión:\n\nhacerte sonreír aunque sea un poquito.\n\nAsí que oficialmente acabas de recibir otra flor amarilla 🌻\n\nY como una parecía muy poco...\n\n🌻🌻🌻\n\nAhora tienes tres.\n\nProblema solucionado. 💛"
    },
    {
      "titulo": "Por si nadie te lo dijo hoy",
      "cuerpo": "Espero que estés orgullosa de las pequeñas cosas que consigues.\n\nDe levantarte incluso cuando estás cansada.\n\nDe continuar incluso cuando algo no sale como esperabas.\n\nDe intentar mejorar.\n\nDe seguir aprendiendo.\n\nNo todas las victorias hacen ruido.\n\nAlgunas simplemente ocurren dentro de nosotros."
    }
  ],
  "frases": [
    "Espero que nunca te falten razones para sonreír.",
    "Que siempre encuentres algo bonito incluso en los días difíciles.",
    "Recuerda descansar cuando el mundo vaya demasiado rápido.",
    "No tienes que tener todo resuelto para seguir avanzando.",
    "Hay días que simplemente necesitan una sonrisa y un poquito de paciencia.",
    "Espero que muchas cosas bonitas encuentren el camino hacia ti.",
    "Que nunca pierdas esa parte de ti que sabe disfrutar los pequeños momentos.",
    "También mereces recibir el mismo cariño que entregas.",
    "Espero que hoy puedas sentirte un poquito más especial.",
    "Que tus días buenos sean muchos y tus días malos cada vez más pequeños.",
    "Una flor para recordarte que incluso las cosas pequeñas pueden alegrar un día.",
    "Y otra simplemente porque nunca están de más las flores amarillas. 💛"
  ],
  "recuerdos": [
    "Una sonrisa",
    "Una conversación",
    "Una canción",
    "Una tarde tranquila",
    "Una risa inesperada",
    "Un abrazo",
    "Una mirada",
    "Un momento que valió la pena"
  ],
  "palabras": [
    "Alegría",
    "Calma",
    "Cariño",
    "Paciencia",
    "Sueños",
    "Sonrisas",
    "Esperanza",
    "Momentos",
    "Recuerdos",
    "Felicidad"
  ],
  "ramo": [
    "Una para hacerte sonreír 💛",
    "Una porque pensé en ti",
    "Una para alegrar tu día",
    "Y esta simplemente porque te la mereces"
  ]
};

/* MOTOR DEL JARDÍN. HTML + CSS + JavaScript puro, compatible con file://. */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const mobile = matchMedia('(max-width: 600px)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const music = $('#music');
const initialized = new Set();
const collectedFlowers = new Map();
const visitedMessages = new Set();
const readLetters = new Set();
let uniqueId = 0;
let started = false;
let currentPage = 0;
let turningPage = false;
let customPetals = 0;
let wantsMusic = false;
let missingMusic = false;
let toastTimer, nightTimer, heartTimer, frame;
let activeEnvelope = null;
let openingLetter = false;
let closingLetter = false;
let activeLetter = 0;
let returnToIndex = false;
let fieldVisible = false;
let nightReady = false;
let sceneObserver, revealObserver;
const timed = (fn, milliseconds) => setTimeout(fn, motion.matches ? 0 : milliseconds);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const escapeHtml = text => String(text).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));

function paragraphs(target, text) {
  target.replaceChildren();
  text.split(/\n\s*\n/).forEach(part => {
    const paragraph = document.createElement('p');
    paragraph.textContent = part;
    target.append(paragraph);
  });
}

// Arte vectorial original. IDs únicos para evitar conflictos entre gradientes.
function flowerSvg(type = 'sunflower', detail = false, unfold = false) {
  const id = `bloom-${uniqueId++}`;
  const daisy = type === 'daisy';
  const petalCount = daisy ? 12 : 16;
  const petals = Array.from({length:petalCount}, (_, i) => `<g transform="rotate(${i * 360 / petalCount} 60 60)"><g ${unfold ? `class="petal-unfold" style="--petal-delay:${i * .035}s"` : ''}><path d="M60 52 C${daisy ? 37 : 40} 33 49 6 60 3 C71 6 ${daisy ? 83 : 80} 33 60 52Z" fill="url(#${id}-petal)" stroke="#ba903d" stroke-width=".4"/><path d="M60 48 Q57 25 60 10" fill="none" stroke="#fef0a9" stroke-width=".8" opacity=".5"/></g></g>`).join('');
  const center = daisy ? 13 : 23;
  const seeds = Array.from({length:detail ? 38 : 13}, (_, i) => {
    const angle = i * 2.39996;
    const radius = Math.sqrt(i / (detail ? 38 : 13)) * (center - 3);
    return `<circle cx="${(60 + Math.cos(angle) * radius).toFixed(2)}" cy="${(60 + Math.sin(angle) * radius).toFixed(2)}" r="${detail ? 1.3 : 1.6}" fill="${i % 3 ? '#b79850' : '#e5ce80'}" opacity=".7"/>`;
  }).join('');
  return `<svg class="bloom-svg" viewBox="0 0 120 120" aria-hidden="true" focusable="false"><defs><linearGradient id="${id}-petal" x1="0" y1="0" x2=".7" y2="1"><stop stop-color="#fff0aa"/><stop offset=".55" stop-color="${daisy ? '#edd47e' : '#e7bd50'}"/><stop offset="1" stop-color="#b68530"/></linearGradient><radialGradient id="${id}-center"><stop stop-color="#776039"/><stop offset=".85" stop-color="#45472d"/><stop offset="1" stop-color="#ac914b"/></radialGradient></defs>${petals}<circle cx="60" cy="60" r="${center}" fill="url(#${id}-center)"/>${seeds}</svg>`;
}

function registerFlower(key, type = 'sunflower') { collectedFlowers.set(key, type); }
function showToast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').classList.add('visible');
  toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 4800);
}

// Partículas reutilizadas: sin intervalos, con límites y reducción automática móvil.
function ambientLights() {
  $('#ambient').replaceChildren();
  if (motion.matches) return;
  const count = clamp(mobile.matches ? CONFIG.particulasMovil : CONFIG.particulas, 0, 40);
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    dot.className = 'ambient-dot';
    dot.style.cssText = `--x:${Math.random()*100}%;--y:${Math.random()*100}%;--size:${2+Math.random()*3}px;--duration:${10+Math.random()*14}s;--delay:${-Math.random()*20}s`;
    $('#ambient').append(dot);
  }
}
function createPetals(target = $('#petals'), once = false) {
  target.replaceChildren();
  if (motion.matches) return;
  const count = clamp(mobile.matches ? CONFIG.petalosMovil : CONFIG.petalos, 0, 45);
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'falling-petal';
    petal.style.cssText = `--left:${Math.random()*100}%;--size:${6+Math.random()*10}px;--blur:${i%4===0?1:0}px;--duration:${once ? 5+Math.random()*4 : 16+Math.random()*16}s;--delay:${once ? Math.random()*2 : -Math.random()*30}s;--drift:${Math.random()*140-70}px`;
    if (once) petal.addEventListener('animationend', () => petal.remove(), {once:true});
    target.append(petal);
  }
}

function buildBouquet() {
  const positions = [[50,16,25],[27,29,25],[72,31,25],[12,50,18],[88,51,18],[46,42,28],[65,58,24],[30,61,22],[50,70,18]];
  const stems = document.createElementNS('http://www.w3.org/2000/svg','svg');
  stems.setAttribute('viewBox','0 0 100 100');
  stems.setAttribute('preserveAspectRatio','none');
  stems.setAttribute('aria-hidden','true');
  stems.classList.add('bouquet-stems');
  stems.innerHTML = positions.map(([x,y],i) => `<path d="M50 97 Q${55+i%3*5} 67 ${x} ${y}" stroke="${i%2?'#7d9052':'#56754a'}" fill="none" stroke-width=".85"/><path d="M${46+i%4*3} ${70+i%3*5} Q${i%2?18:78} ${48+i*2} ${i%2?27:84} ${57+i*2} Q65 81 50 86" fill="${i%2?'#59754b':'#708552'}" opacity=".8"/>`).join('') + '<path d="M42 89 Q50 87 59 90 L58 94 Q50 91 43 94Z" fill="#d7bc77"/>';
  $('#bouquet').append(stems);
  positions.forEach(([x,y,size], i) => {
    const flower = document.createElement('button');
    const type = [3,4,7,8].includes(i) ? 'daisy' : 'sunflower';
    flower.className = 'bouquet-bloom is-grown';
    flower.style.cssText = `--x:${x}%;--y:${y}%;--size:${size}%;--delay:${i*.18}s`;
    flower.setAttribute('aria-label',`Descubrir el mensaje de la flor ${i+1}`);
    flower.innerHTML = `<span class="bloom-sway">${flowerSvg(type,true,true)}</span>`;
    flower.addEventListener('click',() => showToast(TEXT.ramo[i % TEXT.ramo.length]));
    $('#bouquet').append(flower);
    registerFlower(`bouquet-${i}`,type);
  });
}

function buildMessageGarden() {
  TEXT.frases.forEach((message,i) => {
    const button = document.createElement('button');
    const type = i%3 ? 'daisy' : 'sunflower';
    button.className = 'garden-flower';
    button.style.cssText = `--stem-height:${42+i%3*14}px;--delay:${-i*.3}s`;
    button.setAttribute('aria-label',`Descubrir el deseo ${i+1}`);
    button.setAttribute('aria-pressed','false');
    button.setAttribute('aria-controls','garden-card');
    button.innerHTML = `<span class="flower-image"><span class="bloom-sway">${flowerSvg(type)}</span></span><span class="flower-number">${String(i+1).padStart(2,'0')}</span>`;
    button.addEventListener('click',() => {
      visitedMessages.add(i);
      button.classList.add('visited');
      $$('.garden-flower').forEach(f => f.setAttribute('aria-pressed', String(f === button)));
      $('#garden-message').textContent = message;
      $('#garden-count').textContent = `${visitedMessages.size} de ${TEXT.frases.length} pequeños deseos descubiertos`;
      $('#garden-card').classList.remove('changing');
      requestAnimationFrame(() => $('#garden-card').classList.add('changing'));
      // La tarjeta se acerca solo si quedó fuera de la pantalla del móvil.
      const card = $('#garden-card').getBoundingClientRect();
      if (card.top > innerHeight - 65 || card.bottom < 0) $('#garden-card').scrollIntoView({behavior:motion.matches?'instant':'smooth',block:'nearest'});
    });
    $('#message-flowers').append(button);
    registerFlower(`wish-${i}`,type);
  });
}

function buildPath() {
  for (let i=0;i<18;i++) {
    const flower=document.createElement('span');
    flower.className='path-bloom';
    flower.style.cssText=`left:${42+Math.sin(i*.72)*26}%;top:${i*5.6}%;--size:${24+i%4*8}px;--rotate:${i*39}deg`;
    flower.innerHTML=flowerSvg('daisy');
    $('#flower-path').append(flower);
    registerFlower(`path-${i}`,'daisy');
  }
}

function buildMemories() {
  TEXT.recuerdos.forEach((memory,i) => {
    const button=document.createElement('button');
    button.className='memory-flower';
    button.style.setProperty('--delay',`${-i*.6}s`);
    button.setAttribute('aria-label',`Descubrir el recuerdo ${i+1}`);
    button.setAttribute('aria-pressed','false');
    button.innerHTML=`<span class="memory-bloom">${flowerSvg(i%2?'daisy':'sunflower')}</span><span class="memory-label">Tócame ♡</span>`;
    button.addEventListener('click',() => {
      button.classList.add('found');
      button.setAttribute('aria-pressed','true');
      button.setAttribute('aria-label',memory);
      $('.memory-label',button).textContent=memory;
      showToast(memory);
    });
    $('#memory-flowers').append(button);
    registerFlower(`memory-${i}`,i%2?'daisy':'sunflower');
  });
}

// Libro: nunca deja páginas intermedias vacías ni permite salir del rango 1–6.
function renderPage() {
  const page=TEXT.paginas[currentPage];
  $('#book-chapter').textContent=`CARTA ${String(currentPage+1).padStart(2,'0')}`;
  $('#book-page-title').textContent=page.titulo;
  paragraphs($('#book-page-text'),page.cuerpo);
  $('#page-number').textContent=String(currentPage+1).padStart(2,'0');
  $('#book-status').textContent=`Página ${currentPage+1} de ${TEXT.paginas.length}`;
  $('#book-prev').disabled=currentPage===0;
  $('#book-next').disabled=currentPage===TEXT.paginas.length-1;
}
function changePage(direction) {
  const next=clamp(currentPage+direction,0,TEXT.paginas.length-1);
  if (turningPage || next===currentPage) return;
  turningPage=true;
  $('#book').setAttribute('aria-busy','true');
  $('#book-page').classList.remove('turn-in');
  $('#book-page').classList.add('turn-out');
  timed(() => {
    currentPage=next;
    renderPage();
    $('#book-page').classList.remove('turn-out');
    $('#book-page').classList.add('turn-in');
    $('#book').removeAttribute('aria-busy');
    timed(() => { turningPage=false;$('#book-page').classList.remove('turn-in'); },360);
  },240);
}
$('#book-prev').addEventListener('click',() => changePage(-1));
$('#book-next').addEventListener('click',() => changePage(1));
$('#book').addEventListener('keydown',event => {
  if (event.key==='ArrowRight' || event.key==='ArrowLeft') {event.preventDefault();changePage(event.key==='ArrowRight'?1:-1);}
});
let dragStart=null;
$('#book').addEventListener('pointerdown',event => {
  if (event.button!==0) return;
  dragStart={x:event.clientX,y:event.clientY,id:event.pointerId};
  $('#book').setPointerCapture(event.pointerId);
});
$('#book').addEventListener('pointerup',event => {
  if (!dragStart || dragStart.id!==event.pointerId) return;
  const dx=event.clientX-dragStart.x, dy=event.clientY-dragStart.y;
  if (Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)*1.4) changePage(dx<0?1:-1);
  dragStart=null;
});
$('#book').addEventListener('pointercancel',() => {dragStart=null;});

// Una única carta modal, con apertura, doblado, Escape y retorno del foco.
function lockScroll() {document.body.style.overflow='hidden';}
function unlockScroll() {if (!document.querySelector('dialog[open]')) document.body.style.overflow='';}
function openLetter(index, envelope = null, fromIndex = false) {
  if (openingLetter || closingLetter || $('#letter-dialog').open) return;
  openingLetter=true;activeLetter=index;activeEnvelope=envelope;returnToIndex=fromIndex;
  if ($('#letters-index').open) $('#letters-index').close();
  if (envelope) {envelope.classList.add('open');envelope.setAttribute('aria-expanded','true');}
  $('#letter-dialog-title').textContent=TEXT.cartas[index].titulo;
  $('#letter-kicker').textContent=`CARTA ${String(index+1).padStart(2,'0')} · PARA TI`;
  paragraphs($('#letter-body'),TEXT.cartas[index].cuerpo);
  timed(() => {
    $('#letter-dialog').classList.remove('folding');
    $('#letter-dialog').showModal();
    $('.letter-scroll').scrollTop=0;
    lockScroll();openingLetter=false;
  },envelope?750:0);
}
function closeLetter(save = false) {
  if (closingLetter || !$('#letter-dialog').open) return;
  closingLetter=true;
  if (save) {readLetters.add(activeLetter);if (activeEnvelope) activeEnvelope.classList.add('read');}
  $('#letter-dialog').classList.add('folding');
  timed(() => {
    $('#letter-dialog').close();
    $('#letter-dialog').classList.remove('folding');
    if (activeEnvelope) {activeEnvelope.classList.remove('open');activeEnvelope.setAttribute('aria-expanded','false');activeEnvelope.focus({preventScroll:true});}
    closingLetter=false;unlockScroll();
    if (returnToIndex) {$('#letters-index').showModal();lockScroll();}
    if (save) showToast('Guardada en su sobre, para cuando quieras volver a leerla. ♡');
  },450);
}
$$('[data-letter]').forEach(envelope => envelope.addEventListener('click',() => openLetter(Number(envelope.dataset.letter),envelope)));
$('#save-letter').addEventListener('click',() => closeLetter(true));
$('#close-letter').addEventListener('click',() => closeLetter());
$('#letter-dialog').addEventListener('cancel',event => {event.preventDefault();closeLetter();});
$('#letter-dialog').addEventListener('click',event => {
  const rect=$('#letter-dialog').getBoundingClientRect();
  if (event.target===$('#letter-dialog') && (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom)) closeLetter();
});
TEXT.cartas.forEach((letter,i) => {
  const button=document.createElement('button');
  button.className='letter-link';
  button.innerHTML=`${escapeHtml(letter.titulo)}<span aria-hidden="true">↗</span>`;
  button.addEventListener('click',() => openLetter(i,null,true));
  $('#letter-links').append(button);
});
$('#reread').addEventListener('click',() => {$('#letters-index').showModal();lockScroll();});
$('[data-close-index]').addEventListener('click',() => $('#letters-index').close());
$('#letters-index').addEventListener('close',unlockScroll);
$('#return-book').addEventListener('click',() => {$('#letters-index').close();goTo('#book-section');timed(() => $('#book').focus({preventScroll:true}),500);});

function buildNight() {
  if (!motion.matches) {
    for (let i=0;i<(mobile.matches?24:42);i++) {
      const star=document.createElement('span');
      star.className='night-star';
      star.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;--duration:${4+Math.random()*5}s;--delay:${-Math.random()*8}s`;
      $('#night-stars').append(star);
    }
  }
}
function revealContinue() {nightReady=true;$('#continue-wrap').hidden=false;}
$('#continue').addEventListener('click',() => {
  document.body.classList.remove('is-resting');
  $('#sunflower-field').classList.add('arriving');
  goTo('#sunflower-field');
});

function fieldPlant(i,total,layer) {
  const plant=document.createElement('span');
  plant.className='field-plant';
  const size=(mobile.matches?54:70)+layer*15+(i%3)*8;
  plant.style.cssText=`--x:${i*100/total}%;--size:${size}px;--height:${55+Math.sin(i*2.3)*15+layer*3}%;--lean:${Math.sin(i*1.6)*7}deg`;
  plant.innerHTML=`<span class="field-stem"></span><span class="field-leaf"></span><span class="field-leaf other"></span><span class="bloom-sway">${flowerSvg('sunflower')}</span>`;
  registerFlower(`field-${layer}-${i}`);
  return plant;
}
function buildField() {
  const total=clamp(mobile.matches?CONFIG.floresCampoMovil:CONFIG.floresCampo,12,60);
  ['#field-back','#field-middle','#field-front'].forEach((selector,layer) => {
    const count=Math.floor(total/3)+(layer<total%3?1:0);
    for(let i=0;i<count;i++) $(selector).append(fieldPlant(i,count,layer));
  });
}

// Caja: la apertura y el abrazo se pueden repetir sin acumular partículas.
let giftOpened=false, hugging=false;
function giftBurst() {
  $('#gift-burst').replaceChildren();
  if (motion.matches) return;
  const icons=['🌼','♡','✦','🌻','✧','❧'];
  for(let i=0;i<(mobile.matches?14:24);i++) {
    const item=document.createElement('span');item.className='burst-item';item.textContent=icons[i%icons.length];
    item.style.cssText=`--dx:${Math.cos(i*2.4)*(90+Math.random()*110)}px;--dy:${-80-Math.random()*160}px;--spin:${Math.random()*160-80}deg;--delay:${i*.035}s`;
    item.addEventListener('animationend',() => item.remove(),{once:true});$('#gift-burst').append(item);
  }
}
$('#gift-box').addEventListener('click',() => {
  $('#gift-box').classList.add('open');$('#gift-box').setAttribute('aria-expanded','true');$('#gift-box').setAttribute('aria-label','Volver a soltar flores y estrellas');giftBurst();
  if(!giftOpened){giftOpened=true;timed(() => {$('#gift-reward').hidden=false;$('#receive-hug').focus({preventScroll:true});},650);}
});
$('#receive-hug').addEventListener('click',() => {
  if(hugging)return;hugging=true;$('#receive-hug').disabled=true;$('#hug-message').textContent='';$('#hug').classList.remove('active');
  requestAnimationFrame(() => $('#hug').classList.add('active'));
  timed(() => {$('#hug-message').textContent='Aquí tienes. De esos que acompañan un ratito. ♡';$('#receive-hug').textContent='Otro abrazo ♡';$('#receive-hug').disabled=false;hugging=false;},1800);
});

// Flor personalizada: las palabras aparecen tanto en pétalos como en texto accesible.
function addCustomPetal() {
  if(customPetals>=TEXT.palabras.length)return;
  const i=customPetals;
  const angle=i*360/TEXT.palabras.length;
  const group=document.createElementNS('http://www.w3.org/2000/svg','g');
  group.setAttribute('transform',`rotate(${angle} 200 200)`);
  group.innerHTML=`<g class="custom-petal"><ellipse cx="200" cy="113" rx="30" ry="76" fill="url(#custom-petal)" stroke="#bc984a" stroke-width=".8"/><text class="custom-word" x="200" y="92" transform="rotate(90 200 92)">${escapeHtml(TEXT.palabras[i])}</text></g>`;
  $('#custom-petals').append(group);
  const word=document.createElement('span');word.textContent=TEXT.palabras[i];$('#created-words').append(word);
  customPetals++;
  $('#petal-count').textContent=`${customPetals} de ${TEXT.palabras.length} pétalos`;
  $('#petal-word').textContent=TEXT.palabras[i];
  $('#flower-builder').setAttribute('aria-label',customPetals<TEXT.palabras.length?`Añadir pétalo: ${TEXT.palabras[customPetals]}`:'Tu flor está completa');
  if(customPetals===TEXT.palabras.length){$('#petal-word').textContent='Mira lo que acabas de crear 🌼';$('#flower-builder').classList.add('complete');$('#flower-builder').setAttribute('aria-disabled','true');$('#custom-flower>text').textContent='♡';$('#reset-flower').hidden=false;registerFlower('custom','custom');}
}
$('#flower-builder').addEventListener('click',addCustomPetal);
$('#reset-flower').addEventListener('click',() => {
  customPetals=0;$('#custom-petals').replaceChildren();$('#created-words').replaceChildren();$('#petal-count').textContent=`0 de ${TEXT.palabras.length} pétalos`;$('#petal-word').textContent='Empieza con un poquito de alegría.';$('#flower-builder').classList.remove('complete');$('#flower-builder').removeAttribute('aria-disabled');$('#flower-builder').setAttribute('aria-label','Añadir el primer pétalo');$('#custom-flower>text').textContent='+';$('#reset-flower').hidden=true;$('#flower-builder').focus({preventScroll:true});
});

// Reúne una representación de cada flor ya creada, incluso las del campo.
function gatheredBloom(type,i,total,extra=false) {
  const bloom=document.createElement('span');bloom.className=`gathered-bloom${extra?' extra':''}`;
  const angle=i*2.39996,radius=Math.sqrt((i+.5)/total);
  const x=50+Math.cos(angle)*radius*34,y=34+Math.sin(angle)*radius*26;
  bloom.style.cssText=`--x:${x}%;--y:${y}%;--size:${extra?13:10+(i%4)*1.5}%;--delay:${extra?i*.04:Math.min(i*.025,1.5)}s;--from-x:${i%2?'-':'+'}100vw;--from-y:${-30-(i%5)*15}vh;--spin:${i*27}deg;--rotate:${i*17}deg`;
  if(type==='custom' && customPetals===TEXT.palabras.length){
    const clone=$('#custom-flower').cloneNode(true);clone.removeAttribute('id');
    // Renombra gradientes al clonar para mantener todos los IDs únicos.
    clone.innerHTML=clone.innerHTML.replaceAll('custom-petal',`gather-custom-petal-${i}`).replaceAll('custom-center',`gather-custom-center-${i}`).replace('id="custom-petals"','');
    bloom.append(clone);
  } else bloom.innerHTML=flowerSvg(type==='custom'?'daisy':type);
  return bloom;
}
function gatherFlowers() {
  $('#gather-stage').classList.add('gathered');
  const flowers=[...collectedFlowers.values()];
  flowers.forEach((type,i) => $('#gathered-flowers').append(gatheredBloom(type,i,flowers.length)));
  timed(() => $('#gather-well').classList.add('shown'),4000);
  timed(() => {
    $('#gather-more').classList.add('shown');
    for(let i=0;i<14;i++) $('#gathered-flowers').append(gatheredBloom(i%2?'daisy':'sunflower',i,14,true));
  },5900);
}

// Corazón paramétrico responsive: flores dispersas -> contorno -> lluvia breve.
function heartPoint(index,count) {
  const angle=index/count*Math.PI*2;
  return {x:50+Math.pow(Math.sin(angle),3)*39,y:44-(13*Math.cos(angle)-5*Math.cos(2*angle)-2*Math.cos(3*angle)-Math.cos(4*angle))*2.65};
}
let heartOpened=false;
$('#last-surprise').addEventListener('click',() => {
  if(heartOpened)return;heartOpened=true;
  $('#heart-result').hidden=false;$('#last-surprise').setAttribute('aria-expanded','true');$('#heart-section').classList.add('heart-active');document.body.classList.add('forming-heart');
  const count=clamp(mobile.matches?CONFIG.floresCorazonMovil:CONFIG.floresCorazon,24,64);
  for(let i=0;i<count;i++){
    const point=heartPoint(i,count),bloom=document.createElement('span');bloom.className='heart-bloom';
    bloom.style.cssText=`--x:${point.x}%;--y:${point.y}%;--size:${mobile.matches?9:7.5}%;--delay:${i*.025}s;--from-x:${Math.cos(i*2.4)*60}vw;--from-y:${Math.sin(i*2.4)*50}vh;--rotate:${i*23}deg`;
    bloom.innerHTML=flowerSvg(i%3?'daisy':'sunflower');$('#flower-heart').append(bloom);
  }
  $('#heart-title').setAttribute('tabindex','-1');$('#heart-title').focus({preventScroll:true});
  goTo('#heart-section');
  clearTimeout(heartTimer);
  heartTimer=timed(() => {document.body.classList.remove('forming-heart');createPetals($('#heart-rain'),true);},CONFIG.formacionCorazon);
});

// Audio: controla play/pause/volumen sin autoplay ni promesas rechazadas sin gestionar.
music.src=CONFIG.musica;
music.volume=clamp(CONFIG.volumen,0,1);
$('#volume').value=String(Math.round(music.volume*100));
$('#volume-value').textContent=`${Math.round(music.volume*100)} %`;
function syncMusic(){const playing=!music.paused;$('#music-toggle').setAttribute('aria-pressed',String(playing));$('#music-toggle').setAttribute('aria-label',playing?'Pausar música':'Reproducir música');$('#music-toggle span').textContent=playing?'Ⅱ':'♫';$('#listen').textContent=playing?'Pausar la música':'Escuchar la música';}
async function playMusic(feedback=false){
  if(missingMusic){if(feedback)showToast('Todavía no hay una canción en este jardín. Las flores siguen aquí para ti. 💛');return;}
  wantsMusic=true;
  try{await music.play();}catch(error){wantsMusic=false;if(feedback)showToast(error.name==='NotSupportedError'?'Todavía no hay una canción en este jardín. 💛':'No se pudo iniciar la música. Puedes volver a intentarlo.');}
  syncMusic();
}
function toggleMusic(){if(music.paused)playMusic(true);else{wantsMusic=false;music.pause();}}
music.addEventListener('play',syncMusic);music.addEventListener('pause',syncMusic);
music.addEventListener('error',() => {missingMusic=true;wantsMusic=false;syncMusic();});
$('#music-toggle').addEventListener('click',toggleMusic);$('#listen').addEventListener('click',toggleMusic);
$('#volume').addEventListener('input',event => {music.volume=Number(event.target.value)/100;$('#volume-value').textContent=`${event.target.value} %`;});

// Scroll: un solo requestAnimationFrame por actualización; no hay bucle continuo.
function goTo(selector){$(selector).scrollIntoView({behavior:motion.matches?'instant':'smooth',block:'start'});}
function updateScroll(){
  frame=null;if(!started)return;
  const available=document.documentElement.scrollHeight-innerHeight;
  $('#progress-fill').style.transform=`scaleX(${available>0?clamp(scrollY/available,0,1):0})`;
  if(fieldVisible && !motion.matches){const rect=$('#sunflower-field').getBoundingClientRect();const shift=clamp((innerHeight*.45-rect.top)*.08,-60,95);['#field-back','#field-middle','#field-front'].forEach((id,i) => $(id).style.setProperty('--parallax',`${shift*(.25+i*.4)}px`));}
}
function requestScroll(){if(!frame)frame=requestAnimationFrame(updateScroll);}
addEventListener('scroll',requestScroll,{passive:true});addEventListener('resize',requestScroll,{passive:true});

function initializeScene(scene){
  if(initialized.has(scene.id))return;initialized.add(scene.id);
  const builders={bouquet:buildBouquet,messages:buildMessageGarden,path:buildPath,memories:buildMemories,night:buildNight,field:buildField,gather:gatherFlowers};
  builders[scene.dataset.scene]?.();
  if(scene.dataset.scene==='book'){$('#book-flower').innerHTML=flowerSvg('sunflower',true);registerFlower('book');}
}
function observeGarden(){
  const reveals=$$('.reveal');
  $$('.hero-copy .reveal').forEach((element,i) => element.style.setProperty('--reveal-delay',`${.25+i*.65}s`));
  $$('.pause-lines .reveal').forEach((element,i) => element.style.setProperty('--reveal-delay',`${i*.8}s`));
  if(!('IntersectionObserver' in window)){$$('.section').forEach(scene => {initializeScene(scene);scene.classList.add('in-view');});reveals.forEach(element=>element.classList.add('visible'));revealContinue();return;}
  revealObserver=new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.08});
  reveals.forEach(element => revealObserver.observe(element));
  sceneObserver=new IntersectionObserver(entries => entries.forEach(entry => {
    const scene=entry.target;scene.classList.toggle('in-view',entry.isIntersecting);
    if(entry.isIntersecting)initializeScene(scene);
    if(scene.id==='sunflower-field'){fieldVisible=entry.isIntersecting;if(fieldVisible)requestScroll();}
    if(scene.id==='night'){
      document.body.classList.toggle('is-resting',entry.isIntersecting);
      clearTimeout(nightTimer);
      if(entry.isIntersecting && !nightReady)nightTimer=timed(revealContinue,CONFIG.pausaNocturna);
    }
  }),{threshold:.08});
  $$('.section').forEach(scene => sceneObserver.observe(scene));
}

$('#discover').addEventListener('click',() => {
  if(started)return;started=true;$('#discover').disabled=true;
  playMusic();$('#welcome').classList.add('leaving');
  timed(() => {
    $('#welcome').hidden=true;$('#experience').hidden=false;$('#music-controls').hidden=false;
    window.scrollTo({top:0,behavior:'instant'});createPetals();observeGarden();$('#hero-title').focus({preventScroll:true});requestScroll();
  },950);
});
$('#restart').addEventListener('click',() => {
  // Se conservan tus descubrimientos. Se reinicia solo el recorrido visual.
  $$('.reveal').forEach(element => {element.classList.remove('visible');if(revealObserver)revealObserver.observe(element);else element.classList.add('visible');});
  goTo('#first-bouquet');$('#hero-title').focus({preventScroll:true});
});

let lastSpark=0;
document.addEventListener('pointermove',event => {
  if(!started||motion.matches||!finePointer.matches||mobile.matches||event.pointerType!=='mouse'||performance.now()-lastSpark<110||document.querySelector('dialog[open]')||document.body.classList.contains('is-resting'))return;
  lastSpark=performance.now();const spark=document.createElement('span');spark.className='cursor-spark';spark.textContent='✧';spark.style.cssText=`left:${event.clientX+9}px;top:${event.clientY+9}px`;$('#cursor-sparks').append(spark);setTimeout(()=>spark.remove(),1000);
});
document.addEventListener('visibilitychange',() => {
  document.body.classList.toggle('tab-hidden',document.hidden);
  if(document.hidden){music.pause();if(frame){cancelAnimationFrame(frame);frame=null;}}
  else {if(wantsMusic)playMusic();requestScroll();}
});
function adaptEffects(){ambientLights();if(started)createPetals();if(motion.matches){clearTimeout(nightTimer);revealContinue();document.body.classList.remove('forming-heart');$('#heart-rain').replaceChildren();$('#cursor-sparks').replaceChildren();}}
motion.addEventListener('change',adaptEffects);mobile.addEventListener('change',adaptEffects);
$('#welcome-bloom').innerHTML=flowerSvg('sunflower',true);
$('#ending-flower').innerHTML=flowerSvg('sunflower',true);
renderPage();ambientLights();
