import React, { useEffect } from "react";
import ObjectScene from './object/ObjectScene';
import ObjectRenderer from './object/ObjectWebGLRenderer';
import CameraClass from './common/classes/Camera';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import ToggleButton from './component/ToggleButton';

const App: React.FC = (): JSX.Element => {
  let renderer: ObjectRenderer;
  let camera: CameraClass;
  let orbit: OrbitControls;
  let scene = new ObjectScene();


  useEffect(() => {
    renderer = new ObjectRenderer();
    camera = new CameraClass(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    orbit = new OrbitControls(camera.fetchCamera, renderer.fetchRenderer.domElement);
    renderer?.fetchRenderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.fetchRenderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
    animate();
  }, []);

  const onWindowResize = (): void => {
    if (camera) {
      renderer.onWindowResize(camera.fetchCamera);
    }
  };

  const animate = (): void => {
    requestAnimationFrame(animate);
    renderFunc();
    orbit.update();
  };

  const renderFunc = (): void => {
    renderer?.render({ scene: scene.fetchScene, camera: camera.fetchCamera });
  };

  return (
    <div>
      <ToggleButton scene={scene} renderFunc={renderFunc} />
    </div>
  )
};

export default App;