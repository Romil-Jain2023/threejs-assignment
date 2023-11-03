import Scene from '../object/ObjectScene';
import { PCDModel } from '../common/classes/PCDLoader';

export const enum DirectionType {
    'LEFT', "RIGHT"
}

export const loadNewFile = (pcdFile: string, scene: Scene, renderFunc: () => void, pcdModel:PCDModel): void => {
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

const loadNewPcdFile = (newFrame: string, scene: Scene): string => {
    if (scene) {
        while (scene.children.length > 0) {
            scene.removeLastChildren();
        }
    }
    return newFrame;
};

export const handleClick = (dir: DirectionType, pcdFile: string, scene: Scene) => {
    const currentFileNumber = parseInt(pcdFile.replace('file', ''));
    if (dir == 0) {
        const newFileNumber = currentFileNumber - 1;
        if (newFileNumber >= 1) {
            let frameNum = loadNewPcdFile(`file${newFileNumber}`, scene);
            return frameNum;
        }
    } else {
        const newFileNumber = currentFileNumber + 1;
        const maxFileNumber = 6;
        if (newFileNumber <= maxFileNumber) {
            let frameNum = loadNewPcdFile(`file${newFileNumber}`, scene);
            return frameNum;
        }
    }
};