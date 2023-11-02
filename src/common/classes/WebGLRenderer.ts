import * as THREE from 'three';

type WebGLData = {
    scene: THREE.Scene;
    camera: THREE.Camera;
};

export default abstract class WebGLRenderer {

    private renderer: THREE.WebGLRenderer;

    constructor() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    public render(props: WebGLData): void {
        this.renderer.render(props.scene, props.camera);
    }

    public onWindowResize(props: THREE.PerspectiveCamera): void {
        props.aspect = window.innerWidth / window.innerHeight;
        props.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    get fetchRenderer(): THREE.WebGLRenderer {
        return this.renderer;
    }
}