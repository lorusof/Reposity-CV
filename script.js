/* ============================================================
   PORTFOLIO — Iván Rojas Robles
   Three.js + GSAP + ScrollTrigger
   ============================================================ */

const projects = [
  {
    id: "01", category: "hardware", typeLabel: "Robótica / IA", title: "Androide Bioinspirado Azra",
    desc: "Plataforma colaborativa para laboratorios enfocada en seguridad y tutoría.",
    tags: ["Mecatrónica", "Seguridad", "IA", "Impresión 3D"],
    fullDesc: "El androide bioinspirado Azra opera como una plataforma colaborativa para laboratorios de mecatrónica[cite: 25]. Está enfocado en salvaguardar la integridad física de los estudiantes previniendo accidentes y detectando conatos de incendio o gases tóxicos[cite: 25]. Asiste como tutor socrático ofreciendo pistas progresivas y evita el desperdicio masivo al identificar fallas tempranas en la impresión 3D[cite: 25].",
    file: "assets/Resumen_Infografia_Azra.pdf", fileLabel: "Leer Resumen"
  },
  {
    id: "02", category: "hardware", typeLabel: "IoT / Salud", title: "Pulsera de Monitoreo",
    desc: "Prototipo de monitoreo cardiaco portátil para adultos mayores vulnerables.",
    tags: ["ESP32", "MAX30102", "MPU-6050", "Firebase"],
    fullDesc: "Desarrollo de un prototipo portátil en forma de pulsera para el monitoreo continuo de la actividad cardíaca. El hardware integra un ESP32, un sensor biométrico MAX30102 para ritmo cardíaco y SpO2, y un acelerómetro MPU-6050. Utiliza una aplicación móvil y conectividad a Firebase para intervenir oportunamente en casos críticos.",
    file: "assets/Desarrollo de un prototipo port til de monitoreo cardiaco en forma de pulsera.pdf", fileLabel: "Leer Documento"
  },
  {
    id: "03", category: "hardware", typeLabel: "Robótica", title: "Brazo Robótico",
    desc: "Diseño CAD, corte láser y control con Arduino de un brazo funcional.",
    tags: ["Arduino", "SolidWorks", "Corte Láser", "MDF"],
    fullDesc: "Diseño y construcción de un brazo robótico desde cero. El proceso inició con modelado en SolidWorks, seguido de fabricación mediante corte láser en MDF de 3 mm. Se ensambló integrando servomotores de 9g y se programó el control manual mediante potenciómetros conectados a un Arduino Uno.",
    file: "assets/Brazo Robotico.pdf", fileLabel: "Descargar Reporte"
  },
  {
    id: "04", category: "hardware", typeLabel: "IA / Seguridad", title: "Casco Inteligente",
    desc: "Sistema de seguridad activa para motociclistas con detección de accidentes.",
    tags: ["IA", "ESP32", "IMU", "GPS"],
    fullDesc: "Casco inteligente con IA para detección y respuesta a accidentes de motociclistas. Detecta impactos fuertes o caídas mediante un ESP32 integrado con sensores IMU y GPS. Ante un accidente, inicia una cuenta regresiva que, de no cancelarse, envía alertas de emergencia automáticas.",
    file: "assets/El Casco Inteligente con IA es un sistema de seguridad activa dise ado para motociclistas, capaz de detectar accidentes en tiempo real mediante la combina.pdf", fileLabel: "Leer Ensayo"
  },
  {
    id: "05", category: "hardware", typeLabel: "Automatización", title: "Agronauta Verde",
    desc: "Invernadero automatizado sustentable con paneles solares y control remoto.",
    tags: ["ESP32", "Sensores", "Bluetooth", "WiFi"],
    fullDesc: "Proyecto enfocado en el cuidado del medio ambiente que utiliza un panel solar para alimentar el invernadero en su totalidad. Permite sustituir al personal para operaciones de recolección y control desde vía remota mediante conectividad Bluetooth y WiFi.",
    file: "assets/Agronauta Verde Tríptico.pdf", fileLabel: "Ver Proyecto"
  },
  {
    id: "06", category: "cert", typeLabel: "Certificación", title: "Diploma Siemens TIA Portal",
    desc: "Programación y Automatización Industrial con PLC Siemens.",
    tags: ["Siemens", "TIA Portal", "PLC"],
    fullDesc: "Certificado de Reconocimiento otorgado por ABAG Engineering Solutions por haber concluido satisfactoriamente el curso de Programación y Automatización Industrial con PLC Siemens (TIA Portal) con una duración total de 60 horas de formación en línea[cite: 21].",
    file: "assets/DIPLOMA SIEMENS - Rojas Robles Ivan_3.pdf", fileLabel: "Ver Diploma"
  },
  {
    id: "07", category: "cert", typeLabel: "Certificación", title: "Constancia DC-3 Siemens",
    desc: "Constancia de competencias en programación avanzada de PLCs Siemens.",
    tags: ["Siemens", "DC-3", "STPS"],
    fullDesc: "Formato DC-3 de la STPS que acredita como constancia de competencias o habilidades laborales el dominio en Programación avanzada de Controladores Lógicos Programables SIEMENS por 60 horas de duración[cite: 24].",
    file: "assets/DC3 SIEMENS- Rojas Robles Ivan_3.pdf", fileLabel: "Ver Constancia"
  },
  {
    id: "08", category: "cert", typeLabel: "Certificación", title: "Semana de la Automatización",
    desc: "Entrenamiento especializado en programación de PLC por Control+.",
    tags: ["PLC", "Automatización", "Control+"],
    fullDesc: "Certificado de asistencia al entrenamiento especializado Semana de la Automatización Industrial dictado por Control+[cite: 22]. Incluyó temas sobre simulación en 3D sin PLC físico e instrumentación con PLC para control de variables analógicas[cite: 22].",
    file: "assets/Ivan Rojas Robles_3.pdf", fileLabel: "Ver Certificado"
  },
  {
    id: "09", category: "cert", typeLabel: "Certificación", title: "Masterclass 4.0 | IngeLearn",
    desc: "Capacitación en Python, Inteligencia Artificial y Ciberseguridad industrial.",
    tags: ["Industria 4.0", "Python", "IA", "Ciberseguridad"],
    fullDesc: "Certificado de Participación otorgado por IngeLearn por finalizar la capacitación Masterclass 4.0 en Python, Inteligencia artificial, y Ciberseguridad aplicados a la Industria, con una duración de 8 horas[cite: 23].",
    file: "assets/Ivan-Rojas-3-6865D22A130B9-2025-07-02-21-43-22_3.pdf", fileLabel: "Ver Certificado"
  },
  {
    id: "10", category: "software", typeLabel: "Ingeniería 3D", title: "Diseño y Fabricación",
    desc: "Procesos de diseño 3D, corte láser, moldes e impresión 3D.",
    tags: ["SolidWorks", "Router CNC", "Impresión 3D"],
    fullDesc: "Material educativo detallando el uso de programas como SolidWorks y Fusion 360 para crear geometrías complejas y prototipado rápido. Aborda herramientas de fabricación desde router CNC para acrílico y madera, hasta impresión 3D y cortadoras láser.",
    file: "assets/Proyecto de ingenieria.pdf", fileLabel: "Ver Detalles"
  },
  {
    id: "11", category: "invest", typeLabel: "Investigación", title: "The Trueque of Cholula",
    desc: "Exploration of Pre-Hispanic Barter in Modern Puebla.",
    tags: ["Intercultural", "Puebla", "Historia"],
    fullDesc: "Proyecto cultural intercultural explorando la tradición del trueque en Cholula. La investigación aborda esta tradición milenaria que data de tiempos prehispánicos, donde las comunidades intercambian bienes sin usar dinero.",
    file: "assets/Poster intercultural.pdf", fileLabel: "Ver Póster"
  }
];

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
    
    tgt.x += (mouse.x - tgt.x) * 0.02;
    tgt.y += (mouse.y - tgt.y) * 0.02;
    particlesGroup.rotation.y = tgt.x * 0.3;
    particlesGroup.rotation.x = -tgt.y * 0.3;
    camera.position.y = -scrollY * 0.001;

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
  window.bindCursor = bindCursor; 
})();

const grid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filter = 'all') {
  grid.innerHTML = '';
  
  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);
  
  filteredProjects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card'; 
    card.dataset.index = projects.indexOf(p);

    card.innerHTML = `
      <span class="card-type ${p.category}">${p.typeLabel}</span>
      <div class="card-number">${p.id} / 11</div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.desc}</p>
      <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      <span class="card-cta">Ver detalle <span class="card-arrow">→</span></span>
      <div class="card-line"></div>
    `;

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

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
tl.to('#hero-sub', { opacity: 1, duration: 0.8, delay: 0.4 })
  .to('.hero-title .line', { opacity: 1, y: 0, duration: 1.1, stagger: 0.15 }, '-=0.4')
  .to('#hero-desc', { opacity: 1, duration: 0.7 }, '-=0.5')
  .to('#hero-actions', { opacity: 1, duration: 0.7 }, '-=0.4');

gsap.utils.toArray('.reveal').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: 55 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    }
  );
});

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

gsap.utils.toArray('.section-label').forEach(el => {
  gsap.from(el, { opacity: 0, x: -20, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 90%' } });
});
gsap.utils.toArray('.section-title').forEach(el => {
  gsap.from(el, { opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
});

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

gsap.from('.contact-section .section-title, .contact-sub, .contact-link', {
  opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: 'power3.out',
  scrollTrigger: { trigger: '.contact-section', start: 'top 80%' }
});

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});