import * as THREE from 'three';
import Renderer from '../common/classes/WebGLRenderer';

type WebGLData = {
    scene: THREE.Scene;
    camera: THREE.Camera;
};

export default class WebGLRenderer extends Renderer {
    constructor() {
        super();
    }

    render(props: WebGLData): void {
        this.fetchRenderer.render(props.scene, props.camera);
    }

    onWindowResize(props: THREE.PerspectiveCamera): void {
        props.aspect = window.innerWidth / window.innerHeight;
        props.updateProjectionMatrix();
        this.fetchRenderer.setSize(window.innerWidth, window.innerHeight);
    }
}
