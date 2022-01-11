/// <reference path="Observer.ts" />
/// <reference path="DataSource.ts" />

namespace App {
  export class SpreadSheet implements Observer {
    private dataSource: DataSource;
    constructor(dataSource: DataSource) {
      this.dataSource = dataSource;
    }

    update(): void {
      console.log('spreadsheet got updated:', this.dataSource.value);
    }
  }
}
