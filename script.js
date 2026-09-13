/* ============================================================
   PORTFOLIO — Iván Rojas Robles
   Three.js (Neural Network effect) + GSAP + ScrollTrigger
   ============================================================ */

const projects = [
  {
    id: "01", category: "hardware", typeLabel: "Robótica / IA", title: "Androide Azra",
    desc: "Diseño y arquitectura para androide biomimético de asistencia en laboratorios.",
    tags: ["Raspberry Pi", "YOLO", "Visión Artificial", "Mecatrónica"],
    fullDesc: "Diseño de la arquitectura técnica para un androide biomimético enfocado en asistencia y seguridad en laboratorios de mecatrónica. El proyecto integra hardware de Raspberry Pi, procesamiento de visión computacional mediante modelos YOLO y control robótico avanzado.",
    file: "#", fileLabel: "En Desarrollo"
  },
  {
    id: "02", category: "software", typeLabel: "Desarrollo Móvil", title: "App Cotizaciones Eléctricas",
    desc: "Aplicación móvil para generar presupuestos de materiales y recibos en PDF.",
    tags: ["React Native", "Expo", "Móvil"],
    fullDesc: "Aplicación móvil multiplataforma desarrollada en React Native y Expo. Permite gestionar inventarios de materiales para instalaciones eléctricas, calcular costos dinámicamente y exportar tickets o recibos profesionales en formato PDF.",
    file: "#", fileLabel: "Ver Proyecto"
  },
  {
    id: "03", category: "hardware", typeLabel: "IoT / Salud", title: "Pulsera de Monitoreo",
    desc: "Prototipo de monitoreo cardiaco portátil para adultos mayores vulnerables.",
    tags: ["ESP32", "Sensores", "Supabase", "Firebase"],
    fullDesc: "Diseño y desarrollo de un prototipo IoT tipo pulsera enfocado en el control de salud de adultos mayores. Mide parámetros cardíacos y registra anomalías en tiempo real, almacenando datos vitales de forma segura en la nube mediante Firebase y Supabase.",
    file: "assets/Desarrollo de un prototipo port til de monitoreo cardiaco en forma de pulsera.pdf", fileLabel: "Leer Documento"
  },
  {
    id: "04", category: "software", typeLabel: "Desarrollo", title: "Cocina Tita - Sistema POS",
    desc: "App de escritorio para gestión de pedidos y automatización vía WhatsApp.",
    tags: ["Python", "Flask", "PyWebView", "Selenium"],
    fullDesc: "Sistema integral de escritorio para la gestión de órdenes en restaurante. Integra una base de datos local para seguimiento de comandas y automatiza las notificaciones de pedidos mediante WhatsApp utilizando Selenium y Python.",
    file: "#", fileLabel: "Ver Proyecto"
  },
  {
    id: "05", category: "hardware", typeLabel: "Mecatrónica", title: "Brazo Robótico",
    desc: "Diseño CAD, corte láser y control con Arduino de un brazo funcional de 4 ejes.",
    tags: ["Arduino", "SolidWorks", "Corte Láser", "Servomotores"],
    fullDesc: "Proyecto completo de robótica básica: modelado 3D de piezas mecánicas en SolidWorks, fabricación mediante corte láser en MDF y ensamble de servomotores controlados por rutinas de Arduino.",
    file: "assets/Brazo Robotico.pdf", fileLabel: "Descargar Reporte"
  },
  {
    id: "06", category: "hardware", typeLabel: "Automatización", title: "Simulación de Planta",
    desc: "Control logístico industrial mediante PLCs y lógica Ladder.",
    tags: ["Siemens PLC", "TIA Portal", "Automatización"],
    fullDesc: "Desarrollo de simulaciones de control automatizado y gestión logística para una planta de alimentos. Se aplicó lógica Ladder rigurosa sobre entornos SIEMENS TIA Portal para garantizar tiempos óptimos y prevención de fallos.",
    file: "#", fileLabel: "Ver Detalles"
  },
  {
    id: "07", category: "cert", typeLabel: "Certificación", title: "Siemens TIA Portal DC-3",
    desc: "Constancia de competencias en programación avanzada de PLCs Siemens.",
    tags: ["Siemens", "TIA Portal", "DC-3", "Industrial"],
    fullDesc: "Certificación oficial DC-3 (STPS) en Programación y Automatización Industrial. Incluye arquitectura S7-1200/S7-300, diagnóstico de sistemas y simulación de entornos industriales complejos.",
    file: "assets/DC3 SIEMENS- Rojas Robles Ivan.pdf", fileLabel: "Ver Certificado"
  },
  {
    id: "08", category: "invest", typeLabel: "Investigación", title: "Casco Inteligente IA",
    desc: "Sistema de seguridad activa para motociclistas con detección de accidentes.",
    tags: ["IA", "IoT", "Seguridad", "Hardware"],
    fullDesc: "Investigación y propuesta de un casco inteligente capaz de detectar colisiones o caídas en tiempo real mediante la combinación de sensores inerciales y visión artificial, emitiendo alertas autónomas a servicios de emergencia.",
    file: "assets/El Casco Inteligente con IA es un sistema de seguridad activa dise ado para motociclistas, capaz de detectar accidentes en tiempo real mediante la combina.pdf", fileLabel: "Leer Ensayo"
  },
  {
    id: "09", category: "cert", typeLabel: "Certificación", title: "Masterclass 4.0 | IngeLearn",
    desc: "Capacitación en Python, Inteligencia Artificial y Ciberseguridad industrial.",
    tags: ["Industria 4.0", "Python", "IA", "Ciberseguridad"],
    fullDesc: "Capacitación intensiva centrada en la aplicación de la inteligencia artificial, lenguajes de alto nivel como Python y protocolos de ciberseguridad adaptados a los retos de la Industria 4.0.",
    file: "assets/CINGELEARN.pdf", fileLabel: "Ver Certificado"
  }
];

/* ============================================================
   THREE.JS — RED NEURONAL / CONSTELACIÓN
   ============================================================ */
(function initThree() {
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 4.5;

  const particlesGroup = new THREE.Group();
  scene.add(particlesGroup);

  // Parámetros
  const particleCount = 200;
  const maxDistance = 1.8;
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    velocities.push({
      x: (Math.random() - 0.5) * 0.005,
      y: (Math.random() - 0.5) * 0.005,
      z: (Math.random() - 0.5) * 0.005
    });
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pMat = new THREE.PointsMaterial({
    color: 0x7effd4,
    size: 0.03,
    transparent: true,
    opacity: 0.8
  });
  const pointCloud = new THREE.Points(pGeo, pMat);
  particlesGroup.add(pointCloud);

  const lineMat = new THREE.LineBasicMaterial({
    color: 0xb57bff,
    transparent: true,
    opacity: 0.15
  });
  const linesMesh = new THREE.LineSegments(new THREE.BufferGeometry(), lineMat);
  particlesGroup.add(linesMesh);

  // Mouse interaction
  const mouse = { x: 0, y: 0 };
  const tgt = { x: 0, y: 0 };
  window.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
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
    
    // Movimiento fluido de cámara por el mouse
    tgt.x += (mouse.x - tgt.x) * 0.02;
    tgt.y += (mouse.y - tgt.y) * 0.02;
    particlesGroup.rotation.y = tgt.x * 0.3;
    particlesGroup.rotation.x = -tgt.y * 0.3;
    camera.position.y = -scrollY * 0.001;

    // Animar posiciones y calcular conexiones
    const posAttr = pGeo.attributes.position;
    const linePositions = [];
    
    for (let i = 0; i < particleCount; i++) {
      let x = posAttr.getX(i) + velocities[i].x;
      let y = posAttr.getY(i) + velocities[i].y;
      let z = posAttr.getZ(i) + velocities[i].z;

      if (x > 6 || x < -6) velocities[i].x *= -1;
      if (y > 6 || y < -6) velocities[i].y *= -1;
      if (z > 2 || z < -2) velocities[i].z *= -1;

      posAttr.setXYZ(i, x, y, z);

      // Conexiones de línea basadas en distancia
      for (let j = i + 1; j < particleCount; j++) {
        const dx = x - posAttr.getX(j);
        const dy = y - posAttr.getY(j);
        const dz = z - posAttr.getZ(j);
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance) {
          linePositions.push(
            x, y, z,
            posAttr.getX(j), posAttr.getY(j), posAttr.getZ(j)
          );
        }
      }
    }
    posAttr.needsUpdate = true;
    linesMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

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
    dot.style.top = dy + 'px';
  });

  (function moveCur() {
    cx += (dx - cx) * 0.11;
    cy += (dy - cy) * 0.11;
    cur.style.left = cx + 'px';
    cur.style.top = cy + 'px';
    requestAnimationFrame(moveCur);
  })();

  function bindCursor() {
    document.querySelectorAll('a, button, .project-card, .skill-chip, .stat-item, .filter-btn').forEach(el => {
      el.addEventListener('mouseenter', () => cur.classList.add('active'));
      el.addEventListener('mouseleave', () => cur.classList.remove('active'));
    });
  }
  bindCursor();
  window.bindCursor = bindCursor; // Expose to re-bind when rendering projects
})();

/* ============================================================
   RENDERIZAR TARJETAS Y FILTROS
   ============================================================ */
const grid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filter = 'all') {
  grid.innerHTML = '';
  
  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);
  
  filteredProjects.forEach((p, i) => {
    const card = document.createElement('div');
    // Para no romper la animación de GSAP, usamos la clase reveal si no ha sido scrolleado aún
    card.className = 'project-card'; 
    card.dataset.index = projects.indexOf(p); // Usar index original para el modal

    card.innerHTML = `
      <span class="card-type ${p.category}">${p.typeLabel}</span>
      <div class="card-number">${p.id} / 09</div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.desc}</p>
      <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      <span class="card-cta">Ver detalle <span class="card-arrow">→</span></span>
      <div class="card-line"></div>
    `;

    // Efecto 3D Tilt
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y - r.height/2) / r.height) * -7;
      const ry = ((x - r.width/2) / r.width) * 7;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.025)`;
      card.style.setProperty('--mx', (x / r.width * 100) + '%');
      card.style.setProperty('--my', (y / r.height * 100) + '%');
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
    });

    card.addEventListener('click', () => openModal(card.dataset.index));
    
    // Pequeña animación de entrada al filtrar
    gsap.fromTo(card, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, delay: i * 0.05 });
    
    grid.appendChild(card);
  });
  
  window.bindCursor();
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

renderProjects('all');

/* ============================================================
   MODAL
   ============================================================ */
const overlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalCont = document.getElementById('modal-content');

function openModal(originalIndex) {
  const p = projects[originalIndex];
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
  window.bindCursor();
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   GSAP — ANIMACIONES GLOBALES
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);

// Hero intro
const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
tl.to('#hero-sub', { opacity: 1, duration: 0.8, delay: 0.4 })
  .to('.hero-title .line', { opacity: 1, y: 0, duration: 1.1, stagger: 0.15 }, '-=0.4')
  .to('#hero-desc', { opacity: 1, duration: 0.7 }, '-=0.5')
  .to('#hero-actions', { opacity: 1, duration: 0.7 }, '-=0.4');

// Scroll reveal simple
gsap.utils.toArray('.reveal').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 55 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    }
  );
});

// About Section
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

// Animación de los labels de cada sección
gsap.utils.toArray('.section-label').forEach(el => {
  gsap.from(el, { opacity: 0, x: -20, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 90%' } });
});
gsap.utils.toArray('.section-title').forEach(el => {
  gsap.from(el, { opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
});

// Contadores numéricos
document.querySelectorAll('.stat-num').forEach(el => {
  const target = parseInt(el.dataset.target);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    onEnter: () => {
      let count = 0;
      const step = Math.ceil(target / 40) || 1;
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count;
        if (count >= target) clearInterval(timer);
      }, 50);
    }
  });
});

// Contacto
gsap.from('.contact-section .section-title, .contact-sub, .contact-link', {
  opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
});

// Efecto Navbar blur en scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});