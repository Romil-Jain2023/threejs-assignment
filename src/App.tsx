import * as React from 'react';
import * as THREE from 'three';
// import * as dat from 'dat.gui';
import { Scene } from './classes/Scene';
import { PCDModel } from './classes/PCDLoader';
import { StatsComponent } from './classes/Stats';
import './css/app.css';

class App extends React.Component {
  state = {
    pcdFile: 'file1',
    scene: null as Scene | null,
  };

  pcdModel: PCDModel | null = null;
  newScene: Scene | null = null;
  // gui: dat.GUI | null = null; // Initialize gui as null

  componentDidMount() {
    const stats = new StatsComponent();
    // if (!this.gui) {
    //   this.gui = new dat.GUI();
    // }

    if (!this.newScene) {
      this.newScene = new Scene();
    }

    this.loadNewFile(this.state.pcdFile);

    const animate = () => {
      requestAnimationFrame(animate);
      if (this.newScene) {
        this.newScene.update();
      }
      stats.update();
      if (this.newScene) {
        this.newScene.render();
      }
    }

    const onWindowResize = () => {
      if (this.newScene) {
        this.newScene.onWindowResize();
      }
    }

    window.addEventListener('resize', onWindowResize, false);

    animate();

    this.setState({ scene: this.newScene });
  }

  private loadNewFile = (pcdFile: string) => {
    if (!this.pcdModel) {
      this.pcdModel = new PCDModel();
    }
    const axesHelper = new THREE.AxesHelper();

    this.pcdModel.loadModel(`./models/${pcdFile}.pcd`, (points: any) => {
      points.geometry.center();
      points.geometry.rotateX(Math.PI);
      points.material.size = 0.001;
      if (this.newScene) {
        this.newScene.adds(points);
        this.newScene.adds(axesHelper);
        this.newScene.render();
      }
      // if (this.gui) {
      //   this.gui.add(points.material, 'size', 0.0001, 0.02);
      //   this.gui.open();
      // }
    });


  };

  private handleClick = (dir: string) => {
    if (dir === 'left') {
      const currentFileNumber = parseInt(this.state.pcdFile.replace('file', ''));
      const newFileNumber = currentFileNumber - 1;
      if (newFileNumber >= 1) {
        this.loadNewPcdFile(`file${newFileNumber}`);
      }
    } else if (dir === 'right') {
      const currentFileNumber = parseInt(this.state.pcdFile.replace('file', ''));
      const newFileNumber = currentFileNumber + 1;
      const maxFileNumber = 6;
      if (newFileNumber <= maxFileNumber) {
        this.loadNewPcdFile(`file${newFileNumber}`);
      }
    }
  };

  private loadNewPcdFile = (newFrame: string) => {
    if (this.newScene) {
      while (this.newScene.getChildren().length > 0) {
        this.newScene.removeLastChildren();
      }
    }

    this.setState({ pcdFile: newFrame });
    this.loadNewFile(newFrame);
  };

  render() {

    return (
      <div>
        <button className="leftBtn" onClick={() => this.handleClick('left')}>&larr;</button>
        <button className="rightBtn" onClick={() => this.handleClick('right')}>&rarr;</button>
      </div>
    );
  }
}

export default App;
