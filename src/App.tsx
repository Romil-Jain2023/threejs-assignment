import React, { useEffect } from "react";
import Button from './component/Button';
import Scene from './object/Scene';
import Camera from './common/classes/Camera';
import Renderer from './object/WebGLRenderer';
import IComponentProps from "./common/interfaces/AppInterface";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const App: React.FC<IComponentProps> = (): JSX.Element => {
  let renderer = new Renderer();
  let scene = new Scene();
  let camera = new Camera();
  let orbit: OrbitControls;

  useEffect(() => {
    orbit = new OrbitControls(camera.fetchCamera, renderer.fetchRenderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    animate();
  }, []);

  const onWindowResize = (): void => {
    if (scene) {
      renderer.onWindowResize(camera.fetchCamera);
    }
  };

  const animate = (): void => {
    requestAnimationFrame(animate);
    renderFunc();
    orbit.update();
  };

  const renderFunc = (): void => {
    renderer.render({ scene: scene.fetchScene, camera: camera.fetchCamera });
  };

  return (
    <Button scene={scene} renderFunc={renderFunc} />
  )
};

export default App;