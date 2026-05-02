/* ============================================================
   PORTFOLIO — Iván Rojas Robles
   Three.js + GSAP + ScrollTrigger
   ============================================================ */

// ── PROYECTOS DE IVÁN (edita aquí para agregar más) ──────────
const projects = [
  {
    id: "01",
    type: "proyecto",
    typeLabel: "Proyecto",
    title: "Agronauta Verde",
    desc: "Automatización con ESP32 y sensores de conductividad diseñado para control de invernadero.",
    tags: ["ESP32", "IoT", "Sensores", "C++"],
    fullDesc: "Sistema de automatización para invernadero basado en ESP32. Utiliza sensores de conductividad para monitorear y controlar las condiciones del cultivo en tiempo real, optimizando el riego y los nutrientes de forma autónoma.",
    file: "assets/agronauta_verde.pdf",
    fileLabel: "Leer Reporte Técnico"
  },
  {
    id: "02",
    type: "cert",
    typeLabel: "Certificación",
    title: "Masterclass 4.0 | IngeLearn",
    desc: "Certificación en automatización industrial y nuevas tecnologías de la Industria 4.0.",
    tags: ["Industria 4.0", "Automatización", "IngeLearn"],
    fullDesc: "Certificación obtenida en la Masterclass 4.0 de IngeLearn, enfocada en automatización industrial, integración de sistemas inteligentes y tecnologías emergentes aplicadas a la manufactura y procesos industriales.",
    file: "assets/Ivan-Rojas-3-6865D22A130B9-2025-07-02-21-43-22.pdf",
    fileLabel: "Ver Certificado"
  },
  {
    id: "03",
    type: "cert",
    typeLabel: "Certificación",
    title: "Semana de la Automatización | Control+",
    desc: "Certificación en automatización industrial y nuevas tecnologías.",
    tags: ["Automatización", "Control+", "PLC"],
    fullDesc: "Participación y certificación en la Semana de la Automatización organizada por Control+. Evento enfocado en sistemas de control, PLC, y las últimas tendencias en automatización de procesos industriales.",
    file: "assets/Ivan Rojas Robles.pdf",
    fileLabel: "Ver Certificado"
  },
  {
    id: "04",
    type: "invest",
    typeLabel: "Investigación",
    title: "El Trueque en Cholula",
    desc: "Estudio sobre la tradición del Trueque en Cholula y su impacto social e intercultural.",
    tags: ["Investigación", "Intercultural", "Cholula"],
    fullDesc: "Investigación académica sobre la tradición milenaria del trueque en San Andrés Cholula, Puebla. Analiza su impacto social, económico y cultural en la comunidad contemporánea, documentando sus formas actuales de expresión.",
    file: "assets/Poster intercultural.pdf",
    fileLabel: "Descargar Ensayo"
  },
  {
    id: "05",
    type: "proyecto",
    typeLabel: "Proyecto",
    title: "Reporte de Actividades",
    desc: "Actividades realizadas durante el semestre orientadas al entendimiento de conceptos de ingeniería para niños.",
    tags: ["Educación", "Divulgación", "Ingeniería"],
    fullDesc: "Reporte detallado de las actividades de divulgación científica realizadas durante el semestre. El proyecto busca acercar conceptos de ingeniería y ciencias a niños de educación básica mediante dinámicas prácticas y materiales didácticos.",
    file: "assets/Proyecto de ingenieria.pdf",
    fileLabel: "Descargar Reporte"
  },
  {
    id: "06",
    type: "invest",
    typeLabel: "Investigación",
    title: "Sistema de Seguridad Inteligente",
    desc: "Idea de un sistema de seguridad activa para motociclistas: El Casco Inteligente con IA.",
    tags: ["IA", "IoT", "Seguridad", "Wearable"],
    fullDesc: "Propuesta de investigación para un casco inteligente con IA capaz de detectar accidentes en tiempo real mediante la combinación de sensores inerciales, visión artificial y conectividad IoT. El sistema activa alertas automáticas a servicios de emergencia.",
    file: "assets/El Casco Inteligente con IA es un sistema de seguridad activa diseñado para motociclistas, capaz de detectar accidentes en tiempo real mediante la combina.pdf",
    fileLabel: "Descargar Ensayo"
  },
  {
    id: "07",
    type: "invest",
    typeLabel: "Investigación",
    title: "Sistema de Salud Inteligente",
    desc: "Prototipo de pulsera de monitoreo cardiaco para adultos mayores en situación de abandono.",
    tags: ["Salud", "IoT", "Arduino", "Wearable"],
    fullDesc: "Propuesta de prototipo portátil de monitoreo cardiaco en forma de pulsera, diseñado para adultos mayores vulnerables. El dispositivo mide frecuencia cardiaca, detecta caídas y envía alertas automáticas a familiares o servicios de salud.",
    file: "assets/Desarrollo de un prototipo portátil de monitoreo cardiaco en forma de pulsera.pdf",
    fileLabel: "Descargar Ensayo"
  },
  {
    id: "08",
    type: "proyecto",
    typeLabel: "Proyecto",
    title: "Brazo Robótico — Reporte Técnico",
    desc: "Diseño en SolidWorks, corte láser en MDF y control con Arduino de un brazo robótico funcional.",
    tags: ["Arduino", "SolidWorks", "Corte Láser", "Servomotores"],
    fullDesc: "Reporte técnico completo del diseño y construcción de un brazo robótico desde cero. Modelado 3D en SolidWorks, fabricación por corte láser en MDF de 3 mm, ensamble con servomotores de 9g y programación de control mediante potenciómetros y Arduino Uno.",
    file: "assets/reporte_brazo_robotico.pdf",
    fileLabel: "Descargar Reporte PDF"
  },
  {
    id: "09",
    type: "proyecto",
    typeLabel: "Proyecto",
    title: "Máquina CNC de Dibujo — Reporte Técnico",
    desc: "Máquina CNC controlada vía serial con motores NEMA 17, impresión 3D y Arduino CNC Shield. Proyecto en equipo.",
    tags: ["CNC", "Arduino", "NEMA 17", "Impresión 3D"],
    fullDesc: "Reporte técnico del diseño, ensamble y programación de una máquina CNC para dibujo automatizado. Sistema con dos ejes de movimiento (NEMA 17), estructura en MDF y piezas en 3D, controlada desde PC por puerto serial. Proyecto en equipo: Iván Rojas · Michel Sánchez Dumit · Giovanna González Martínez.",
    file: "assets/reporte_maquina_cnc.pdf",
    fileLabel: "Descargar Reporte PDF"
  },
];

/* ============================================================
   THREE.JS — FONDO DE PARTÍCULAS
   ============================================================ */
(function initThree() {
  const canvas   = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3;

  // Partículas
  const COUNT = 3200;
  const geo   = new THREE.BufferGeometry();
  const pos   = new Float32Array(COUNT * 3);
  const col   = new Float32Array(COUNT * 3);

  const cA = new THREE.Color('#7effd4');
  const cB = new THREE.Color('#b57bff');
  const cC = new THREE.Color('#111120');

  for (let i = 0; i < COUNT; i++) {
    pos[i*3]   = (Math.random() - 0.5) * 13;
    pos[i*3+1] = (Math.random() - 0.5) * 13;
    pos[i*3+2] = (Math.random() - 0.5) * 8;
    const t = Math.random();
    const c = t < 0.38 ? cA : t < 0.62 ? cB : cC;
    col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.017, vertexColors: true,
    transparent: true, opacity: 0.65, sizeAttenuation: true
  });
  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  // Wireframe icosaedro de fondo
  const wGeo  = new THREE.IcosahedronGeometry(2.4, 2);
  const wMat  = new THREE.MeshBasicMaterial({ color: 0x7effd4, wireframe: true, transparent: true, opacity: 0.03 });
  const wMesh = new THREE.Mesh(wGeo, wMat);
  scene.add(wMesh);

  // Mouse
  const mouse = { x: 0, y: 0 };
  const tgt   = { x: 0, y: 0 };
  window.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; });

  (function tick() {
    requestAnimationFrame(tick);
    const t = Date.now() * 0.0003;
    tgt.x += (mouse.x - tgt.x) * 0.022;
    tgt.y += (mouse.y - tgt.y) * 0.022;

    particles.rotation.y = t * 0.1  + tgt.x * 0.28;
    particles.rotation.x = t * 0.06 - tgt.y * 0.18;
    particles.rotation.z = t * 0.03;

    wMesh.rotation.y = t * 0.07  + tgt.x * 0.18;
    wMesh.rotation.x = t * 0.045 - tgt.y * 0.12;

    camera.position.y = -scrollY * 0.0009;
    renderer.render(scene, camera);
  })();
})();

/* ============================================================
   CURSOR
   ============================================================ */
(function initCursor() {
  const cur = document.getElementById('cursor');
  const dot = document.getElementById('cursor-dot');
  let cx = 0, cy = 0, dx = 0, dy = 0;

  window.addEventListener('mousemove', e => {
    dx = e.clientX; dy = e.clientY;
    dot.style.left = dx + 'px';
    dot.style.top  = dy + 'px';
  });

  (function moveCur() {
    cx += (dx - cx) * 0.11;
    cy += (dy - cy) * 0.11;
    cur.style.left = cx + 'px';
    cur.style.top  = cy + 'px';
    requestAnimationFrame(moveCur);
  })();

  document.querySelectorAll('a, button, .project-card, .skill-chip, .stat-item').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('active'));
    el.addEventListener('mouseleave', () => cur.classList.remove('active'));
  });
})();

/* ============================================================
   CONSTRUIR TARJETAS
   ============================================================ */
(function buildCards() {
  const grid = document.getElementById('projects-grid');

  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.dataset.index = i;

    card.innerHTML = `
      <span class="card-type ${p.type}">${p.typeLabel}</span>
      <div class="card-number">${p.id} / 09</div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.desc}</p>
      <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      <span class="card-cta">Ver detalle <span class="card-arrow">→</span></span>
      <div class="card-line"></div>
    `;

    // Tilt 3D
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = e.clientX - r.left;
      const y  = e.clientY - r.top;
      const rx = ((y - r.height/2) / r.height) * -7;
      const ry = ((x - r.width/2)  / r.width)  *  7;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.025)`;
      card.style.setProperty('--mx', (x / r.width  * 100) + '%');
      card.style.setProperty('--my', (y / r.height * 100) + '%');
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
    });

    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });

  // Re-aplicar cursor a tarjetas recién creadas
  const cur = document.getElementById('cursor');
  document.querySelectorAll('.project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('active'));
    el.addEventListener('mouseleave', () => cur.classList.remove('active'));
  });
})();

/* ============================================================
   MODAL
   ============================================================ */
const overlay    = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalCont  = document.getElementById('modal-content');

function openModal(i) {
  const p = projects[i];
  modalCont.innerHTML = `
    <p class="modal-pre">${p.id} · ${p.typeLabel.toUpperCase()}</p>
    <h2 class="modal-title">${p.title}</h2>
    <div class="modal-tag-row">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
    <p class="modal-desc">${p.fullDesc}</p>
    <div class="modal-links">
      <a href="${p.file}" target="_blank" class="modal-link">${p.fileLabel} ↗</a>
    </div>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   GSAP — ANIMACIONES
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);

// Hero
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
tl.to('#hero-sub',         { opacity: 1, duration: 0.8, delay: 0.4 })
  .to('.hero-title .line', { opacity: 1, y: 0, duration: 1.1, stagger: 0.15 }, '-=0.4')
  .to('#hero-desc',        { opacity: 1, duration: 0.7 }, '-=0.5')
  .to('#hero-actions',     { opacity: 1, duration: 0.7 }, '-=0.4');

// Reveal genérico
gsap.utils.toArray('.reveal').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 55 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    }
  );
});

// About
gsap.from('.about-text', {
  opacity: 0, x: -55, duration: 1, ease: 'power3.out',
  scrollTrigger: { trigger: '.about-section', start: 'top 75%' }
});
gsap.from('.about-right', {
  opacity: 0, x: 55, duration: 1, ease: 'power3.out',
  scrollTrigger: { trigger: '.about-section', start: 'top 75%' }
});
gsap.from('.skill-chip', {
  opacity: 0, scale: 0.78, duration: 0.5, stagger: 0.06, ease: 'back.out(1.5)',
  scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' }
});

// Section labels & titles
gsap.utils.toArray('.section-label').forEach(el => {
  gsap.from(el, { opacity: 0, x: -20, duration: 0.7,
    scrollTrigger: { trigger: el, start: 'top 90%' } });
});
gsap.utils.toArray('.section-title').forEach(el => {
  gsap.from(el, { opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%' } });
});

// Cabina — contadores animados
document.querySelectorAll('.stat-num').forEach(el => {
  const target = parseInt(el.dataset.target);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    onEnter: () => {
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count;
        if (count >= target) clearInterval(timer);
      }, 35);
    }
  });
});

// Contact
gsap.from('.contact-section .section-title, .contact-sub, .contact-link', {
  opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
});

// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});