/* ============================================================
   PORTFOLIO — IVÁN ROJAS ROBLES
   Three.js (Neural Network) + GSAP + ScrollTrigger + Filters Engine
   ============================================================ */

// ── BASE DE DATOS DE PROYECTOS & CERTIFICACIONES ─────────────
const projects = [
  {
    id: "01",
    categories: ["hardware", "software"],
    primaryCategory: "hardware",
    typeLabel: "Robótica & IA",
    title: "Androide Bioinspirado Azra",
    desc: "Plataforma colaborativa para laboratorios de mecatrónica orientada a salvaguardar la integridad física, tutoría socrática y optimización de impresión 3D.",
    tags: ["Mecatrónica", "Visión IA", "Seguridad Activa", "Impresión 3D"],
    fullDesc: "El androide bioinspirado Azra opera como una plataforma colaborativa y de asistencia integral para laboratorios de mecatrónica. Está concebido para salvaguardar la integridad de los usuarios previniendo incidentes con gases tóxicos o conatos de incendio, brindar tutoría socrática a estudiantes y evitar el desperdicio masivo de insumos al identificar anomalías tempranas en procesos de impresión 3D.",
    file: "assets/Resumen_Infografia_Azra.pdf",
    fileLabel: "Ver Infografía Técnica",
    issuer: "Proyecto de Ingeniería Mecatrónica",
    isCert: false
  },
  {
    id: "02",
    categories: ["cert"],
    primaryCategory: "cert",
    typeLabel: "Certificación Oficial",
    title: "Diploma Siemens TIA Portal",
    desc: "Programación y Automatización Industrial con Controladores Lógicos Programables Siemens (TIA Portal) con 60 horas de formación técnica.",
    tags: ["Siemens", "TIA Portal", "PLC S7", "60 Horas STPS"],
    fullDesc: "Certificado de Reconocimiento otorgado por ABAG Engineering Solutions por haber acreditado satisfactoriamente el curso de formación técnica 'Programación y Automatización Industrial con PLC Siemens (TIA Portal)', con una duración total de 60 horas prácticas orientadas a arquitecturas industriales reales.",
    file: "assets/DIPLOMA SIEMENS - Rojas Robles Ivan.pdf",
    fileLabel: "Abrir Diploma Siemens (PDF)",
    issuer: "ABAG Engineering Solutions · 60 Horas",
    isCert: true,
    badgeText: "Acreditado 60 Horas"
  },
  {
    id: "03",
    categories: ["cert"],
    primaryCategory: "cert",
    typeLabel: "Certificación Oficial",
    title: "Constancia DC-3 STPS Siemens",
    desc: "Constancia oficial de competencias laborales de la Secretaría del Trabajo y Previsión Social (STPS) en PLCs Siemens avanzados.",
    tags: ["STPS México", "Formato DC-3", "Competencia Laboral", "PLC Siemens"],
    fullDesc: "Formato DC-3 expedido conforme a las directrices de la Secretaría del Trabajo y Previsión Social (STPS) de México. Acredita formalmente las competencias laborales de Iván Rojas Robles en 'Programación avanzada de Controladores Lógicos Programables SIEMENS' con una carga lectiva y práctica de 60 horas.",
    file: "assets/DC3 SIEMENS- Rojas Robles Ivan.pdf",
    fileLabel: "Abrir Constancia DC-3 STPS (PDF)",
    issuer: "STPS México · ABAG Engineering",
    isCert: true,
    badgeText: "Validez Oficial STPS"
  },
  {
    id: "04",
    categories: ["cert"],
    primaryCategory: "cert",
    typeLabel: "Certificación Oficial",
    title: "Semana de la Automatización",
    desc: "Entrenamiento especializado en programación de PLCs, instrumentación y simulación 3D de líneas de producción por Control+.",
    tags: ["Control+", "Automatización", "Simulación 3D", "Lazo Cerrado"],
    fullDesc: "Certificado de Participación y Aprobación en la 'Semana de la Automatización Industrial' validado por el centro de capacitación técnica Control+. El programa cubrió simulación avanzada de entornos de manufactura en 3D sin dependencia de hardware físico e instrumentación con PLC para control de variables analógicas de proceso.",
    file: "assets/Ivan Rojas Robles.pdf",
    fileLabel: "Abrir Certificado Control+ (PDF)",
    issuer: "Control+ Automatización Industrial",
    isCert: true,
    badgeText: "Simulación & Control"
  },
  {
    id: "05",
    categories: ["cert", "software"],
    primaryCategory: "cert",
    typeLabel: "Certificación Oficial",
    title: "Masterclass 4.0 | IngeLearn",
    desc: "Capacitación intensiva en Python para entornos industriales, Inteligencia Artificial aplicada y Ciberseguridad OT/IT.",
    tags: ["Industria 4.0", "Python", "IA Aplicada", "Ciberseguridad"],
    fullDesc: "Certificado de Participación emitido por la institución IngeLearn tras completar con éxito la capacitación 'Masterclass 4.0: Python, Inteligencia Artificial y Ciberseguridad aplicados a la Industria'. Especialización enfocada en la digitalización, análisis de datos y protección en plantas automatizadas.",
    file: "assets/Ivan-Rojas-3-6865D22A130B9-2025-07-02-21-43-22.pdf",
    fileLabel: "Abrir Certificado IngeLearn (PDF)",
    issuer: "IngeLearn · Industria 4.0",
    isCert: true,
    badgeText: "Especialización 4.0"
  },
  {
    id: "06",
    categories: ["hardware", "software"],
    primaryCategory: "hardware",
    typeLabel: "IoT / Salud Biomédica",
    title: "Pulsera de Monitoreo Cardíaco",
    desc: "Dispositivo wearable con ESP32, sensor MAX30102, acelerómetro MPU-6050 y transmisión telemática en tiempo real a Firebase.",
    tags: ["ESP32", "MAX30102", "MPU-6050", "Firebase", "Salud IoT"],
    fullDesc: "Diseño e implementación de un prototipo portátil en forma de pulsera para el monitoreo continuo de signos vitales (frecuencia cardíaca y pulsioximetría SpO2). Integra microcontrolador ESP32, sensor óptico MAX30102 y un acelerómetro/giroscopio MPU-6050 para detección automática de caídas, enlazado vía WiFi con Firebase y una app móvil de alerta médica.",
    file: "assets/Desarrollo de un prototipo portátil de monitoreo cardiaco en forma de pulsera.pdf",
    fileLabel: "Leer Documento Técnico",
    issuer: "Desarrollo Biomédico & IoT",
    isCert: false
  },
  {
    id: "07",
    categories: ["hardware", "software"],
    primaryCategory: "hardware",
    typeLabel: "IA & Seguridad Activa",
    title: "Casco Inteligente para Motociclistas",
    desc: "Sistema embebido de seguridad predictiva con ESP32, sensores IMU, módulo GPS y análisis en tiempo real para detección de colisiones.",
    tags: ["IA", "ESP32", "Sensores IMU", "GPS", "Seguridad Activa"],
    fullDesc: "Casco inteligente con Inteligencia Artificial diseñado como sistema de protección activa. Monitorea mediante sensores inerciales de alta frecuencia y geolocalización GPS las dinámicas del vehículo, detectando impactos severos o derrapes para disparar protocolos de emergencia y transmisión de coordenadas a servicios de asistencia.",
    file: "assets/El Casco Inteligente con IA es un sistema de seguridad activa diseñado para motociclistas, capaz de detectar accidentes en tiempo real mediante la combina.pdf",
    fileLabel: "Leer Ensayo & Arquitectura",
    issuer: "Sistemas Embebidos Inteligentes",
    isCert: false
  },
  {
    id: "08",
    categories: ["hardware"],
    primaryCategory: "hardware",
    typeLabel: "Robótica Aplicada",
    title: "Brazo Robótico Articulado",
    desc: "Diseño cinemático en SolidWorks, manufactura digital por corte láser en MDF y control servomotorizado con Arduino Uno.",
    tags: ["SolidWorks", "Corte Láser", "Arduino Uno", "Servomotores"],
    fullDesc: "Diseño, fabricación y puesta en marcha de un brazo robótico articulado multi-eje. El desarrollo abarcó el modelado 3D de piezas en SolidWorks, corte y ensamblaje de precisión en MDF, cableado de servomotores y programación en C++ para Arduino para manipulación manual por potenciómetros.",
    file: "assets/Brazo Robotico.pdf",
    fileLabel: "Descargar Reporte Técnico",
    issuer: "Ingeniería Mecatrónica",
    isCert: false
  },
  {
    id: "09",
    categories: ["hardware"],
    primaryCategory: "hardware",
    typeLabel: "Agrotech & Automatización",
    title: "Agronauta Verde",
    desc: "Invernadero automatizado autosustentable con paneles solares fotovoltaicos, telemetría Bluetooth/WiFi y monitoreo edáfico.",
    tags: ["ESP32", "Energía Solar", "Sensores de Suelo", "WiFi / BLE"],
    fullDesc: "Solución de agrotecnología sustentable impulsada mediante energía solar fotovoltaica. Optimiza el cuidado agronómico supervisando humedad, temperatura y conductividad iónica del suelo a distancia vía conectividad inalámbrica, automatizando electroválvulas y ventiladores sin intervención humana continua.",
    file: "assets/Agronauta Verde Tríptico.pdf",
    fileLabel: "Ver Tríptico del Proyecto",
    issuer: "Automatización Sustentable",
    isCert: false
  },
  {
    id: "10",
    categories: ["software", "hardware"],
    primaryCategory: "software",
    typeLabel: "Manufactura Digital & CAD",
    title: "Diseño, CAD & Fabricación Digital",
    desc: "Modelado paramétrico avanzado en SolidWorks y Fusion 360, maquinado en Router CNC, manufactura aditiva e inyección.",
    tags: ["SolidWorks", "Fusion 360", "Router CNC", "Impresión 3D"],
    fullDesc: "Documentación y ejecución práctica de metodologías de ingeniería inversa y prototipado rápido con SolidWorks y Fusion 360. Implementación de manufactura digital que incluye mecanizado en router CNC para acrílico y maderas, optimización FDM en impresión 3D, corte láser y concepción de moldes.",
    file: "assets/Proyecto de ingenieria.pdf",
    fileLabel: "Ver Portafolio de Fabricación",
    issuer: "Manufactura & CAD Avanzado",
    isCert: false
  },
  {
    id: "11",
    categories: ["invest"],
    primaryCategory: "invest",
    typeLabel: "Investigación & Sociedad",
    title: "The Trueque of Cholula",
    desc: "Estudio sobre la permanencia sociocultural y económica del trueque prehispánico tradicional en San Pedro y San Andrés Cholula.",
    tags: ["Investigación", "Intercultural", "Puebla", "Historia"],
    fullDesc: "Proyecto académico e interdisciplinario que analiza la vigencia milenaria del trueque en la región de Cholula, Puebla. Examina la economía solidaria, las relaciones comunitarias indígenas y la resistencia cultural de comerciar sin la intermediación de moneda en el mundo moderno.",
    file: "assets/Poster intercultural.pdf",
    fileLabel: "Ver Póster Académico",
    issuer: "Universidad Iberoamericana Puebla",
    isCert: false
  }
];

/* ============================================================
   CURSOR INTERACTIVO DE ALTA PRECISIÓN CON LOGO INTEGRADO
   ============================================================ */
(function initPrecisionCursorWithLogo() {
  const cur = document.getElementById('cursor');
  const dot = document.getElementById('cursor-dot');
  if (!cur || !dot) return;

  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  let dx = cx;
  let dy = cy;
  let isCursorVisible = false;

  window.addEventListener('mousemove', e => {
    dx = e.clientX;
    dy = e.clientY;
    dot.style.left = dx + 'px';
    dot.style.top = dy + 'px';

    if (!isCursorVisible) {
      isCursorVisible = true;
      cx = dx;
      cy = dy;
      cur.style.opacity = '1';
      dot.style.opacity = '1';
    }
  });

  document.addEventListener('mouseleave', () => {
    cur.style.opacity = '0';
    dot.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    if (isCursorVisible) {
      cur.style.opacity = '1';
      dot.style.opacity = '1';
    }
  });

  function moveCur() {
    cx += (dx - cx) * 0.16;
    cy += (dy - cy) * 0.16;
    cur.style.left = cx + 'px';
    cur.style.top = cy + 'px';
    requestAnimationFrame(moveCur);
  }
  moveCur();

  function bindCursor() {
    document.querySelectorAll('a, button, .project-card, .skill-chip, .stat-item, .contact-card, .filter-btn, input').forEach(el => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });
  }

  function onMouseEnter() { cur.classList.add('active'); }
  function onMouseLeave() { cur.classList.remove('active'); }

  bindCursor();
  window.bindCursor = bindCursor;
})();

/* ============================================================
   FONDO 3D CON THREE.JS (RED NEURONAL OPTIMIZADA)
   ============================================================ */
(function initNeuralNetwork() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 4.2;

  const particlesGroup = new THREE.Group();
  scene.add(particlesGroup);

  const particleCount = 130;
  const maxDistance = 1.7;
  const maxDistanceSq = maxDistance * maxDistance;
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 11;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 11;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    velocities.push({
      x: (Math.random() - 0.5) * 0.0035,
      y: (Math.random() - 0.5) * 0.0035,
      z: (Math.random() - 0.5) * 0.0035
    });
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pMat = new THREE.PointsMaterial({
    color: 0x7effd4,
    size: 0.045,
    transparent: true,
    opacity: 0.85
  });
  const pointCloud = new THREE.Points(pGeo, pMat);
  particlesGroup.add(pointCloud);

  // Buffer de líneas preasignado para máximo rendimiento (sin reasignar atributos 60fps)
  const maxLines = 450;
  const linePositions = new Float32Array(maxLines * 6);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

  const lineMat = new THREE.LineBasicMaterial({
    color: 0xb57bff,
    transparent: true,
    opacity: 0.18
  });
  const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
  particlesGroup.add(linesMesh);

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
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  function tick() {
    requestAnimationFrame(tick);

    tgt.x += (mouse.x - tgt.x) * 0.03;
    tgt.y += (mouse.y - tgt.y) * 0.03;

    particlesGroup.rotation.y = tgt.x * 0.25;
    particlesGroup.rotation.x = -tgt.y * 0.25;
    camera.position.y = -scrollY * 0.0008;

    const posAttr = pGeo.attributes.position;
    let lineIdx = 0;

    for (let i = 0; i < particleCount; i++) {
      let px = posAttr.getX(i) + velocities[i].x;
      let py = posAttr.getY(i) + velocities[i].y;
      let pz = posAttr.getZ(i) + velocities[i].z;

      if (px > 5.5 || px < -5.5) velocities[i].x *= -1;
      if (py > 5.5 || py < -5.5) velocities[i].y *= -1;
      if (pz > 2   || pz < -2)   velocities[i].z *= -1;

      posAttr.setXYZ(i, px, py, pz);

      for (let j = i + 1; j < particleCount; j++) {
        if (lineIdx >= maxLines * 6) break;
        const jx = posAttr.getX(j);
        const jy = posAttr.getY(j);
        const jz = posAttr.getZ(j);

        const dx = px - jx;
        const dy = py - jy;
        const dz = pz - jz;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistanceSq) {
          linePositions[lineIdx++] = px;
          linePositions[lineIdx++] = py;
          linePositions[lineIdx++] = pz;
          linePositions[lineIdx++] = jx;
          linePositions[lineIdx++] = jy;
          linePositions[lineIdx++] = jz;
        }
      }
    }

    posAttr.needsUpdate = true;
    lineGeo.setDrawRange(0, lineIdx / 3);
    lineGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  tick();
})();

/* ============================================================
   MOTOR DE FILTRADO Y BÚSQUEDA DE PROYECTOS / CERTIFICACIONES
   ============================================================ */
const grid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('project-search');

let currentFilter = 'all';
let currentSearch = '';

function renderProjects() {
  if (!grid) return;
  grid.innerHTML = '';

  let filtered = projects;

  // Filtrado por categoría
  if (currentFilter === 'cert') {
    filtered = filtered.filter(p => p.isCert || p.categories.includes('cert'));
  } else if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.categories.includes(currentFilter));
  }

  // Filtrado por texto de búsqueda en tiempo real
  if (currentSearch.trim() !== '') {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      (p.issuer && p.issuer.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted); font-family: var(--font-m);">
        <p style="font-size: 1.1rem; margin-bottom: 0.8rem; color: var(--accent);">No se encontraron proyectos con ese criterio.</p>
        <button onclick="document.getElementById('project-search').value=''; currentSearch=''; renderProjects();" class="cta-btn secondary" style="margin-top: 1rem;">Limpiar búsqueda</button>
      </div>
    `;
    return;
  }

  filtered.forEach((p, i) => {
    const originalIndex = projects.indexOf(p);
    const card = document.createElement('div');
    card.className = `project-card ${p.isCert ? 'is-cert' : ''}`;
    card.dataset.index = originalIndex;

    const certRibbon = p.isCert 
      ? `<div class="cert-badge-ribbon">${p.badgeText || 'Certificación Validada'}</div>` 
      : '';
      
    const issuerTag = p.issuer 
      ? `<div class="card-issuer">${p.issuer}</div>` 
      : '';

    const safeFilePath = encodeURI(p.file);

    card.innerHTML = `
      <span class="card-type ${p.primaryCategory}">${p.typeLabel}</span>
      <div class="card-number">${p.id} / 11</div>
      ${certRibbon}
      <h3 class="card-title">${p.title}</h3>
      ${issuerTag}
      <p class="card-desc">${p.desc}</p>
      <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      
      <div class="card-bottom-actions">
        <span class="card-cta">
          <span>Ver Detalle</span>
          <span class="card-arrow">→</span>
        </span>
        ${p.isCert ? `<a href="${safeFilePath}" target="_blank" rel="noopener noreferrer" class="direct-pdf-btn" onclick="event.stopPropagation()">PDF ↗</a>` : ''}
      </div>
      <div class="card-line"></div>
    `;

    // Efecto 3D Dinámico de Inclinación al pasar el mouse
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y - r.height / 2) / r.height) * -6;
      const ry = ((x - r.width / 2) / r.width) * 6;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.setProperty('--mx', (x / r.width * 100) + '%');
      card.style.setProperty('--my', (y / r.height * 100) + '%');
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
    });

    // Abrir modal de detalle completo
    card.addEventListener('click', () => openModal(originalIndex));

    // Animación suave de entrada con GSAP
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(card, 
        { opacity: 0, y: 25, scale: 0.97 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.4, delay: i * 0.04, ease: 'power2.out' }
      );
    }

    grid.appendChild(card);
  });

  if (window.bindCursor) window.bindCursor();
}

// Escuchar cambios de filtro
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProjects();
  });
});

// Escuchar búsqueda en tiempo real
if (searchInput) {
  searchInput.addEventListener('input', e => {
    currentSearch = e.target.value;
    renderProjects();
  });
}

// Función accesible globalmente para seleccionar filtro
window.selectFilter = function(category) {
  currentFilter = category;
  filterBtns.forEach(b => {
    if (b.dataset.filter === category) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  renderProjects();
};

// Renderizado inicial
renderProjects();

/* ============================================================
   MODAL DE DETALLE COMPLETO DE PROYECTO / CERTIFICADO
   ============================================================ */
const overlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalCont = document.getElementById('modal-content');

function openModal(index) {
  const p = projects[index];
  if (!p || !modalCont) return;

  const safeFilePath = encodeURI(p.file);
  const isCertificate = p.isCert || p.categories.includes('cert');

  modalCont.innerHTML = `
    <p class="modal-pre">${p.id} · ${p.typeLabel.toUpperCase()}</p>
    <h2 class="modal-title">${p.title}</h2>
    ${p.issuer ? `<div class="modal-issuer-box"><span>Emisor / Acreditación:</span> <strong>${p.issuer}</strong></div>` : ''}
    <div class="modal-tag-row">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
    <p class="modal-desc">${p.fullDesc}</p>
    <div class="modal-links">
      <a href="${safeFilePath}" target="_blank" rel="noopener noreferrer" class="modal-link-btn ${isCertificate ? 'gold' : 'primary'}">
        <span>${p.fileLabel || 'Abrir Documento Oficial'}</span>
        <span>↗</span>
      </a>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.bindCursor) window.bindCursor();
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   ANIMACIONES GSAP & SCROLLTRIGGER
   ============================================================ */
if (typeof gsap !== 'undefined') {
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Animaciones de Entrada en Hero (USANDO FROM PARA GARANTIZAR VISIBILIDAD)
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl.from('#hero-sub', { opacity: 0, y: -20, duration: 0.8, delay: 0.15 })
        .from('.hero-title .line', { opacity: 0, y: 50, duration: 1, stagger: 0.15 }, '-=0.4')
        .from('#hero-desc', { opacity: 0, y: 25, duration: 0.8 }, '-=0.5')
        .from('#hero-actions', { opacity: 0, y: 25, duration: 0.8 }, '-=0.5')
        .from('.hero-quick-tags', { opacity: 0, y: 15, duration: 0.7 }, '-=0.4');

  // Función de respaldo para garantizar que el Perfil nunca permanezca oculto
  function ensureAboutVisibility() {
    const aboutText = document.querySelector('.about-text');
    const aboutRight = document.querySelector('.about-right');
    const chips = document.querySelectorAll('.skill-chip');
    if (aboutText) {
      aboutText.style.opacity = '1';
      aboutText.style.transform = 'none';
      aboutText.style.visibility = 'visible';
    }
    if (aboutRight) {
      aboutRight.style.opacity = '1';
      aboutRight.style.transform = 'none';
      aboutRight.style.visibility = 'visible';
    }
    chips.forEach(c => {
      c.style.opacity = '1';
      c.style.transform = 'none';
      c.style.visibility = 'visible';
    });
  }

  // Animaciones al hacer Scroll
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none', once: true }
        }
      );
    });

    // Perfil: Animación suave con immediateRender: false (Garantiza que siempre sea visible por defecto)
    gsap.fromTo('.about-text',
      { opacity: 0, x: -35 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );

    gsap.fromTo('.about-right',
      { opacity: 0, x: 35 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );

    gsap.fromTo('.skill-chip',
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.03,
        ease: 'back.out(1.5)',
        immediateRender: false,
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );

    // Contador Numérico para las Estadísticas de la Cabina
    document.querySelectorAll('.stat-num').forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          let count = 0;
          const durationMs = 1200;
          const steps = 30;
          const stepValue = Math.ceil(target / steps) || 1;
          const interval = durationMs / steps;

          const timer = setInterval(() => {
            count = Math.min(count + stepValue, target);
            el.textContent = count;
            if (count >= target) clearInterval(timer);
          }, interval);
        }
      });
    });
  }

  // Respaldos de Visibilidad Inmediata:
  // 1. IntersectionObserver nativo como guardián
  if ('IntersectionObserver' in window) {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ensureAboutVisibility();
        }
      });
    }, { threshold: 0.05 });
    const aboutSec = document.getElementById('about');
    if (aboutSec) aboutObserver.observe(aboutSec);
  }

  // 2. Al pulsar cualquier enlace al Perfil en la navegación
  document.querySelectorAll('a[href="#about"]').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(ensureAboutVisibility, 80);
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  });

  // 3. Fallback de seguridad al cargar la página completa
  window.addEventListener('load', () => {
    ensureAboutVisibility();
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });
}

/* ============================================================
   UTILIDADES: MENÚ MÓVIL, SCROLLSPY Y VOLVER ARRIBA
   ============================================================ */
const mobileToggle = document.getElementById('mobile-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');

if (mobileToggle && mobileDrawer) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    mobileDrawer.classList.toggle('open');
  });
}

window.closeMobileMenu = function() {
  if (mobileToggle && mobileDrawer) {
    mobileToggle.classList.remove('open');
    mobileDrawer.classList.remove('open');
  }
};

// Botón Volver Arriba
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Scroll Event (Navbar Scrolled + Back to top + ScrollSpy)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  // Navbar scrolled class
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', scrollPos > 50);

  // Back to top button visibility
  if (backToTop) {
    backToTop.classList.toggle('visible', scrollPos > 400);
  }

  // ScrollSpy
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { passive: true });
