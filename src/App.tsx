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

  const onWindowResize = ():void => {
    if (scene) {
      renderer.onWindowResize(camera.fetchCamera);
    }
  };

  const animate = ():void => {
    requestAnimationFrame(animate);
    renderFunc();
    orbit.update();
  };

  const renderFunc = ():void => {
    renderer.render({ scene: scene.fetchScene, camera: camera.fetchCamera });
  };

  return (
    <Button scene={scene} renderFunc={renderFunc}/>
  )
};

export default App;






















// import React, { useState, useEffect } from 'react';
// import * as THREE from 'three';
// // import * as dat from 'dat.gui';
// import { Scene } from './classes/Scene';
// import { PCDModel } from './classes/PCDLoader';
// import { StatsComponent } from './classes/Stats';
// import './css/app.css';

// const App = () => {
//   const [pcdFile, setPcdFile] = useState('file1');
//   let [scene, setScene] = useState<Scene | null>(null);

//   let pcdModel: PCDModel | null = null;
//   // let gui: dat.GUI | null = null; // Initialize gui as null

//   useEffect(() => {
//     const stats = new StatsComponent();
//     // if (!gui) {
//     //   gui = new dat.GUI();
//     // }

//     if (!scene) {
//       scene = new Scene();
//     }

//     loadNewFile(pcdFile);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (scene) {
//         scene.update();
//       }
//       stats.update();
//       if (scene) {
//         scene.render();
//       }
//     };

//     const onWindowResize = () => {
//       if (scene) {
//         scene.onWindowResize();
//       }
//     };

//     window.addEventListener('resize', onWindowResize, false);

//     animate();

//     setScene(scene);
//   }, []);

//   const loadNewFile = (pcdFile: string) => {
//     if (!pcdModel) {
//       pcdModel = new PCDModel();
//     }
//     const axesHelper = new THREE.AxesHelper();

//     pcdModel.loadModel(`./models/${pcdFile}.pcd`, (points: any) => {
//       points.geometry.center();
//       points.geometry.rotateX(Math.PI);
//       points.material.size = 0.001;
//       if (scene) {
//         scene.adds(points);
//         scene.adds(axesHelper);
//         scene.render();
//       }
//       // if (gui) {
//       //   gui.add(points.material, 'size', 0.0001, 0.02);
//       //   gui.open();
//       // }
//     });
//   };

//   const handleClick = (dir: string) => {
//     if (dir === 'left') {
//       const currentFileNumber = parseInt(pcdFile.replace('file', ''));
//       const newFileNumber = currentFileNumber - 1;
//       if (newFileNumber >= 1) {
//         loadNewPcdFile(`file${newFileNumber}`);
//       }
//     } else if (dir === 'right') {
//       const currentFileNumber = parseInt(pcdFile.replace('file', ''));
//       const newFileNumber = currentFileNumber + 1;
//       const maxFileNumber = 6;
//       if (newFileNumber <= maxFileNumber) {
//         loadNewPcdFile(`file${newFileNumber}`);
//       }
//     }
//   };

//   const loadNewPcdFile = (newFrame: string) => {
//     if (scene) {
//       while (scene.getChildren().length > 0) {
//         scene.removeLastChildren();
//       }
//     }

//     setPcdFile(newFrame);
//     loadNewFile(newFrame);
//   };

//   return (
//     <div>
//       <button className="leftBtn" onClick={() => handleClick('left')}>&larr;</button>
//       <button className="rightBtn" onClick={() => handleClick('right')}>&rarr;</button>
//     </div>
//   );
// };

// export default App;