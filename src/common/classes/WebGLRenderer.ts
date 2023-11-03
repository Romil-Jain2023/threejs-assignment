import * as THREE from 'three';

type WebGLData = {
    scene: THREE.Scene;
    camera: THREE.Camera;
};
export default abstract class Renderer {
    private renderer: THREE.WebGLRenderer;

    constructor() {
        this.renderer = new THREE.WebGLRenderer();
    }

    get fetchRenderer(): THREE.WebGLRenderer {
        return this.renderer;
    }
    
    abstract render(props: WebGLData): void;
    abstract onWindowResize(props: THREE.PerspectiveCamera): void;
}
