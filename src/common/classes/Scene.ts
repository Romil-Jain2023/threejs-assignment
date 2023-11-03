import * as THREE from 'three';

export default abstract class Scene {
  private scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
  }

  get fetchScene(): THREE.Scene {
    return this.scene;
  }

  abstract add(mesh: THREE.Mesh | THREE.AxesHelper): void;
  abstract get children(): THREE.Object3D[];
  abstract removeLastChildren(): void;
}