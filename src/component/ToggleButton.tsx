import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { PCDModel } from '../common/classes/PCDLoader';
import Scene from '../common/classes/Scene';
import { loadNewFile, handleClick, DirectionType } from '../utility/ButtonHelper';
import '../style/button.css';

type ButtonProps = {
    scene: Scene;
    renderFunc: () => void;
};

const Button: React.FC<ButtonProps> = (props:ButtonProps): JSX.Element => {
    const [pcdFile, setPcdFile] = useState('file1');
    const pcdModel = new PCDModel();

    useEffect(() => {
        const axesHelper = new THREE.AxesHelper();
        props.scene.add(axesHelper);
        loadNewFile(pcdFile, props.scene, props.renderFunc, pcdModel);
    }, [pcdFile]);

    const handleButtonClick = (dir: DirectionType):void => {
        let frame = handleClick(dir, pcdFile, props.scene)!;
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