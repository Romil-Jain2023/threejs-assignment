// src/Stats.ts
import Stats from 'three/examples/jsm/libs/stats.module';

export class StatsComponent {
  private stats: any;

  constructor() {
    this.stats = Stats();
    document.body.appendChild(this.stats.dom);
  }

  update() {
    this.stats.update();
  }
}
