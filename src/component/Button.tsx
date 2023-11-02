import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import IButton from '../common/interfaces/ButtonInterface';
import { DirectionType } from '../common/enums/ButtonEnum';
import { PCDModel } from '../common/classes/PCDLoader';
import '../style/button.css';

const Button: React.FC<IButton> = (props): JSX.Element => {

    const [pcdFile, setPcdFile] = useState<string>('file1');
    let { scene, renderFunc } = props;
    let pcdModel: PCDModel | null = null;

    useEffect(() => {
        loadNewFile(pcdFile);
        const axesHelper = new THREE.AxesHelper();
        scene.add(axesHelper);
    }, [pcdFile]);

    const handleClick = (dir: DirectionType): void => {
        if (dir === 0) {
            const currentFileNumber = parseInt(pcdFile.replace('file', ''));
            const newFileNumber = currentFileNumber - 1;
            if (newFileNumber >= 1) {
                loadNewPcdFile(`file${newFileNumber}`);
            }
        } else if (dir === 1) {
            const currentFileNumber = parseInt(pcdFile.replace('file', ''));
            const newFileNumber = currentFileNumber + 1;
            const maxFileNumber = 6;
            if (newFileNumber <= maxFileNumber) {
                loadNewPcdFile(`file${newFileNumber}`);
            }
        }
    };

    const loadNewPcdFile = (newFrame: string): void => {
        if (scene) {
            while (scene.children.length > 0) {
                scene.removeLastChildren();
            }
        }
        setPcdFile(newFrame);
        loadNewFile(newFrame);
    };

    const loadNewFile = (pcdFile: string): void => {
        if (!pcdModel) {
            pcdModel = new PCDModel();
        }
        pcdModel.loadModel(`./models/${pcdFile}.pcd`, (points) => {
            points.geometry.center();
            points.geometry.rotateX(Math.PI);
            points.material.size = 0.001;
            if (scene) {
                scene.add(points);
                renderFunc();
            }
        });
    };

    return (
        <div>
            <button className="leftBtn" onClick={() => handleClick(DirectionType.LEFT)}>&larr;</button>
            <button className="rightBtn" onClick={() => handleClick(DirectionType.RIGHT)}>&rarr;</button>
        </div>
    )
};

export default Button;







// import React, { useState, useEffect } from 'react';
// import * as THREE from 'three';
// import IButton from '../common/interfaces/ButtonInterface';
// import { DirectionType } from '../common/enums/ButtonEnum';
// import { PCDModel } from '../common/classes/PCDLoader';
// import '../style/button.css';

// const Button: React.FC<IButton> = (props): JSX.Element => {

//     const [pcdFile, setPcdFile] = useState<string>('file1');
//     let { scene, renderFunc } = props;
//     let pcdModel: PCDModel | null = null;

//     useEffect(() => {
//         loadNewFile(pcdFile);
//         const axesHelper = new THREE.AxesHelper();
//         scene.add(axesHelper);
//     }, [pcdFile]);

//     const handleClick = (dir: DirectionType): void => {
//         if (dir === 0) {
//             const currentFileNumber = parseInt(pcdFile.replace('file', ''));
//             const newFileNumber = currentFileNumber - 1;
//             if (newFileNumber >= 1) {
//                 loadNewPcdFile(`file${newFileNumber}`);
//             }
//         } else if (dir === 1) {
//             const currentFileNumber = parseInt(pcdFile.replace('file', ''));
//             const newFileNumber = currentFileNumber + 1;
//             const maxFileNumber = 6;
//             if (newFileNumber <= maxFileNumber) {
//                 loadNewPcdFile(`file${newFileNumber}`);
//             }
//         }
//     };

//     const loadNewPcdFile = (newFrame: string): void => {
//         if (scene) {
//             while (scene.children.length > 0) {
//                 scene.removeLastChildren();
//             }
//         }
//         setPcdFile(newFrame);
//         loadNewFile(newFrame);
//     };

//     const loadNewFile = (pcdFile: string): void => {
//         if (!pcdModel) {
//             pcdModel = new PCDModel();
//         }
//         pcdModel.loadModel(`./models/${pcdFile}.pcd`, (points) => {
//             points.geometry.center();
//             points.geometry.rotateX(Math.PI);
//             points.material.size = 0.001;
//             if (scene) {
//                 scene.add(points);
//                 renderFunc();
//             }
//         });
//     };

//     return (
//         <div>
//             <button className="leftBtn" onClick={() => handleClick(DirectionType.LEFT)}>&larr;</button>
//             <button className="rightBtn" onClick={() => handleClick(DirectionType.RIGHT)}>&rarr;</button>
//         </div>
//     )
// };

// export default Button;