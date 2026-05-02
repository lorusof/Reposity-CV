// 1. Escena, Cámara y Renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 0, 50);

// 2. Creación del "Cable de Energía"
// Definimos los puntos por donde pasa el cable (de arriba hacia abajo)
const points = [
    new THREE.Vector3(0, 40, 0),    // Inicio (Foco)
    new THREE.Vector3(5, 20, 10),   // Curva media
    new THREE.Vector3(-5, 0, -10),  // Curva media
    new THREE.Vector3(0, -40, 0)    // Final (Cabina)
];

const path = new THREE.CatmullRomCurve3(points);
const tubeGeometry = new THREE.TubeGeometry(path, 100, 0.5, 16, false);

// Material Metálico (Efecto Cobre/Acero)
const metalMaterial = new THREE.MeshStandardMaterial({
    color: 0x888888,       // Color base gris metal
    metalness: 0.9,        // Máximo brillo metálico
    roughness: 0.2,        // Superficie pulida
    emissive: 0x111111     // Un ligero brillo interno
});

const cable = new THREE.Mesh(tubeGeometry, metalMaterial);
scene.add(cable);

// 3. El Foco (Esfera Brillante arriba)
const bulbGeo = new THREE.SphereGeometry(2, 32, 32);
const bulbMat = new THREE.MeshStandardMaterial({
    emissive: 0xffff00,    // Color de luz amarilla
    emissiveIntensity: 2,
    color: 0x000000
});
const bulb = new THREE.Mesh(bulbGeo, bulbMat);
bulb.position.set(0, 40, 0);
scene.add(bulb);

// 4. Luces para resaltar el metal
const mainLight = new THREE.PointLight(0xffffff, 1.5);
mainLight.position.set(10, 10, 10);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(mainLight, ambientLight);

// 5. Animación según el Scroll
window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.offsetHeight - window.innerHeight);
    
    // El cable rota levemente al bajar
    cable.rotation.y = scrollPercent * Math.PI;
    
    // La cámara baja siguiendo el cable
    camera.position.y = 40 - (scrollPercent * 80);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();