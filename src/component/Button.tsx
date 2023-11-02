import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import IButton from '../common/interfaces/ButtonInterface';
import { DirectionType } from '../common/enums/ButtonEnum';
import { PCDModel } from '../common/classes/PCDLoader';
import { loadNewFile, handleClick } from '../helper/ButtonHelper';
import '../style/button.css';

const Button: React.FC<IButton> = (props): JSX.Element => {

    const [pcdFile, setPcdFile] = useState<string>('file1');
    let { scene, renderFunc } = props;
    let pcdModel: PCDModel;

    useEffect(() => {
        const axesHelper = new THREE.AxesHelper();
        scene.add(axesHelper);
        loadNewFile(pcdFile, scene, renderFunc, pcdModel);
    }, [pcdFile]);

    const handleButtonClick = (dir: DirectionType):void => {
        let frame = handleClick(dir, pcdFile, scene)!;
        if (frame) {
            setPcdFile(frame);
        }
    };

    return (
        <div>
            <button className="leftBtn" onClick={() => { handleButtonClick(DirectionType.LEFT) }}>&larr;</button>
            <button className="rightBtn" onClick={() => { handleButtonClick(DirectionType.RIGHT) }}>&rarr;</button>
        </div>
    )
};

export default Button;