// import { DirectionType } from '../common/enums/ButtonEnum';
// import Scene from '../object/Scene'; // Import your Scene class
// import {PCDModel} from '../common/classes/PCDLoader'; // Import PCDModel

// export const loadNewFile = (pcdFile: string, scene: Scene, renderFunc: () => void): void => {
//     const pcdModel = new PCDModel();
//     pcdModel.loadModel(`./models/${pcdFile}.pcd`, (points) => {
//         points.geometry.center();
//         points.geometry.rotateX(Math.PI);
//         points.material.size = 0.001;
//         if (scene) {
//             scene.add(points);
//             renderFunc();
//         }
//     });
// };

// export const handleLeftClick = (pcdFile: string, setPcdFile: React.Dispatch<React.SetStateAction<string>>, loadNewPcdFile: (newFrame: string) => void, scene: Scene, renderFunc: () => void): void => {
//     const currentFileNumber = parseInt(pcdFile.replace('file', ''));
//     const newFileNumber = currentFileNumber - 1;
//     if (newFileNumber >= 1) {
//         loadNewPcdFile(`file${newFileNumber}`, scene, setPcdFile, loadNewFile, renderFunc);
//     }
// };

// export const handleRightClick = (pcdFile: string, setPcdFile: React.Dispatch<React.SetStateAction<string>>, loadNewPcdFile: (newFrame: string) => void, scene: Scene, renderFunc: () => void): void => {
//     const currentFileNumber = parseInt(pcdFile.replace('file', ''));
//     const newFileNumber = currentFileNumber + 1;
//     const maxFileNumber = 6;
//     if (newFileNumber <= maxFileNumber) {
//         loadNewPcdFile(`file${newFileNumber}`, scene, setPcdFile, loadNewFile, renderFunc);
//     }
// };

// export const loadNewPcdFile = (newFrame: string, scene: Scene, setPcdFile: React.Dispatch<React.SetStateAction<string>>, loadNewFile: (pcdFile: string, scene: Scene, renderFunc: () => void) => void, renderFunc: () => void): void => {
//     if (scene) {
//         removeAllChildren(scene);
//     }
//     setPcdFile(newFrame);
//     loadNewFile(newFrame, scene, renderFunc);
// };

// export const removeAllChildren = (scene: Scene): void => {
//     if (scene) {
//         while (scene.children.length > 0) {
//             scene.removeLastChildren();
//         }
//     }
// };


export default class btn{}