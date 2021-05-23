import './styles.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg'),
    alpha: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x27292B);
camera.position.setZ(25);


renderer.render(scene, camera);

const geometry = new THREE.DodecahedronGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({
    color: 0xF2D77D,
    wireframe: true
});
const ico = new THREE.Mesh(geometry, material);

scene.add(ico);
const light = new THREE.AmbientLight(0xffffff);
light.position.set(5, 5, 5);
scene.add(light);

const grid = new THREE.GridHelper(200, 50);
scene.add(grid);



/*Leaving alone for now, will do something with in the future
const orbiterShape = new THREE.IcosahedronGeometry(0.25, 24, 24);
const orbierMat = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true });
const orbiter = new THREE.Mesh(orbiterShape, orbierMat);

const orbiterArray = [];

for (let index = 0; index < 5; index++) {
    orbiterArray.push(orbiter.clone);
}

console.log(orbiterArray);

orbiterArray.forEach(e => {
    e.position.set()
});*/

function addOrb() {
    const orbiterShape = new THREE.IcosahedronGeometry(0.25, 24, 24);
    const orbierMat = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: true });
    const orb = new THREE.Mesh(orbiterShape, orbierMat);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
    orb.position.set(x, y, z);
    scene.add(orb);
}

Array(200).fill().forEach(addOrb);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    controls.update();

    ico.rotation.x += 0.01;
    ico.rotation.y += 0.005;
    ico.rotation.z += 0.01;
}

animate();