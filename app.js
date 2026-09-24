import * as THREE from
  "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

import { OrbitControls } from
  "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js";


// =========================
// SCENE
// =========================

const scene = new THREE.Scene();

scene.background =
  new THREE.Color(0x111111);


// =========================
// CAMERA
// =========================

const camera =
  new THREE.PerspectiveCamera(
    60,
    1,
    0.1,
    1000
  );

camera.position.set(
  5,
  5,
  5
);


// =========================
// RENDERER
// =========================

const viewport =
  document.getElementById(
    "viewport"
  );

const renderer =
  new THREE.WebGLRenderer({
    antialias: true
  });

renderer.setPixelRatio(
  window.devicePixelRatio
);

viewport.appendChild(
  renderer.domElement
);


// =========================
// CONTROLS
// =========================

const controls =
  new OrbitControls(
    camera,
    renderer.domElement
  );

controls.enableDamping = true;


// =========================
// LIGHT
// =========================

const ambientLight =
  new THREE.AmbientLight(
    0xffffff,
    1
  );

scene.add(
  ambientLight
);


const directionalLight =
  new THREE.DirectionalLight(
    0xffffff,
    2
  );

directionalLight.position.set(
  5,
  10,
  5
);

scene.add(
  directionalLight
);


// =========================
// CUBE
// =========================

const geometry =
  new THREE.BoxGeometry(
    2,
    2,
    2
  );

const material =
  new THREE.MeshStandardMaterial({
    color: 0xff8800
  });

const cube =
  new THREE.Mesh(
    geometry,
    material
  );

scene.add(
  cube
);


// =========================
// GRID
// =========================

const grid =
  new THREE.GridHelper(
    20,
    20
  );

scene.add(
  grid
);


// =========================
// RESIZE
// =========================

function resize() {

  const width =
    viewport.clientWidth;

  const height =
    viewport.clientHeight;

  camera.aspect =
    width / height;

  camera.updateProjectionMatrix();

  renderer.setSize(
    width,
    height
  );
}

window.addEventListener(
  "resize",
  resize
);

resize();


// =========================
// ANIMATION
// =========================

function animate() {

  requestAnimationFrame(
    animate
  );

  controls.update();

  renderer.render(
    scene,
    camera
  );
}

animate();
