import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Scene extends THREE.Scene{
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;

  constructor() {
    super()
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 2;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  adds(mesh: THREE.Mesh | THREE.AxesHelper) {
    this.scene.add(mesh);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  update() {
    this.controls.update();
  }

  getChildren(): THREE.Object3D[] {
    return this.scene.children;
}

removeLastChildren() {
    this.scene.children.pop();
}

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
