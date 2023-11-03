import * as THREE from 'three';
import Scene from '../common/classes/Scene';

export default class ObjectScene extends Scene {
  constructor() {
    super();
  }

  add(mesh: THREE.Mesh | THREE.AxesHelper): void {
    this.fetchScene.add(mesh);
  }

  get children(): THREE.Object3D[] {
    return this.fetchScene.children;
  }

  removeLastChildren(): void {
    this.fetchScene.children.pop();
  }
}
