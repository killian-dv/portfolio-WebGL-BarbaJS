import * as THREE from "three";

// init
export default class Sketch {
  constructor(options) {
    this.render();
    this.time = 0;
  }
  render() {
    this.time += 0.05;
    console.log(this.time);
    requestAnimationFrame(this.render.bind(this));
  }
}

new Sketch();

// const camera = new THREE.PerspectiveCamera(
//   70,
//   window.innerWidth / window.innerHeight,
//   0.01,
//   10
// );
// camera.position.z = 1;

// const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
// const material = new THREE.MeshNormalMaterial();

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animation);
// let container = document.getElementById("container");
// container.appendChild(renderer.domElement);

// // animation

// function animation(time) {
//   mesh.rotation.x = time / 2000;
//   mesh.rotation.y = time / 1000;

//   renderer.render(scene, camera);
// }