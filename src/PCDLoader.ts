import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';

export class PCDModel {
  private loader: PCDLoader;

  constructor() {
    this.loader = new PCDLoader();
  }

  loadModel(path: string, callback: (points: any) => void) {
    this.loader.load(path, callback);
  }
}
