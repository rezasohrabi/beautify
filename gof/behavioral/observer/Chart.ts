/// <reference path="Observer.ts" />

namespace App {
  export class Chart implements Observer {
    private dataSource: DataSource;
    constructor(dataSource: DataSource) {
      this.dataSource = dataSource;
    }
    update(): void {
      console.log('chart got updated:', this.dataSource.value);
    }
  }
}
