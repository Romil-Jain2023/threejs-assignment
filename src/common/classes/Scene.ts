import * as THREE from 'three';

export default abstract class Scene {

  private scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
  }

  get fetchScene(): THREE.Scene {
    return this.scene;
  }

  public add(mesh: THREE.Mesh | THREE.AxesHelper): void {
    this.scene.add(mesh);
  }

  get children(): THREE.Object3D[] {
    return this.scene.children;
  }

  public removeLastChildren():void {
    this.scene.children.pop();
  }
};