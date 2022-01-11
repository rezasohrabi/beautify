/// <reference path="DataSource.ts" />
/// <reference path="SpreadSheet.ts" />
/// <reference path="Chart.ts" />

namespace App {
  export class ObserverPattern {
    constructor() {
      const dataSource = new DataSource();
      const spread1 = new SpreadSheet(dataSource);
      const spread2 = new SpreadSheet(dataSource);
      const chart1 = new Chart(dataSource);
      const chart2 = new Chart(dataSource);
      dataSource.addObserver(spread1);
      dataSource.addObserver(spread2);
      dataSource.addObserver(chart1);
      dataSource.addObserver(chart2);
      dataSource.value = 'this is new string';
    }
  }
}
