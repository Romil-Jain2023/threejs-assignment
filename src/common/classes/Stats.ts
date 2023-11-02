// src/Stats.ts
import Stats from 'three/examples/jsm/libs/stats.module';

export class StatsComponent {
  private stats: Stats;

  constructor() {
    this.stats = Stats();
    document.body.appendChild(this.stats.dom);
  }

  protected update():void {
    this.stats.update();
  }
}
