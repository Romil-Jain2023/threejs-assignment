import * as THREE from 'three';
import ICameraPosition from '../interfaces/CameraInterface';

export default class Camera {

  private camera: THREE.PerspectiveCamera;

  constructor() {
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.camera.position.z = 2;
  }

  get fetchCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  set cameraPosition(position:ICameraPosition){
    let {x, y, z} = position;

    if(x){
      this.camera.position.x = x;
    }

    if(y){
      this.camera.position.y = y;
    }

    if(z){
      this.camera.position.z = z;
    }
  }
}