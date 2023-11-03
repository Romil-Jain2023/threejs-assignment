import * as THREE from 'three';
export default class Camera {

  private camera: THREE.PerspectiveCamera;

  constructor(fov: number, aspect: number, near: number, far: number) {
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.z = 2;
  }

  get fetchCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  // set cameraPosition(position:ICameraPosition){
  //   let {x, y, z} = position;

  //   if(x){
  //     this.camera.position.x = x;
  //   }

  //   if(y){
  //     this.camera.position.y = y;
  //   }

  //   if(z){
  //     this.camera.position.z = z;
  //   }
  // }
}