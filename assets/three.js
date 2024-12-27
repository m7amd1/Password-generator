// Import Three.js
import * as THREE from 'three';

// Setup the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  alpha: true, // Makes the background transparent
  antialias: true, // Smooths edges
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create dots using Points
const geometry = new THREE.BufferGeometry();
const dotCount = 1000;
const positions = [];

// Generate random dot positions
for (let i = 0; i < dotCount; i++) {
  positions.push((Math.random() - 0.5) * 20); // x
  positions.push((Math.random() - 0.5) * 20); // y
  positions.push((Math.random() - 0.5) * 10); // z
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.05,
});

const dots = new THREE.Points(geometry, material);
scene.add(dots);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  dots.rotation.y += 0.001; // Subtle rotation
  renderer.render(scene, camera);
}

animate();

// Handle resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
