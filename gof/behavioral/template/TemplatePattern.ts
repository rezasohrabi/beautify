/// <reference path="TransferMoneyTask.ts" />
/// <reference path="GenerateReportTask.ts" />

namespace App {
  export class TemplatePattern {
    constructor() {
      const transferMoneyTask = new TransferMoneyTask();
      transferMoneyTask.execute();
      const generateReportTask = new GenerateReportTask();
      generateReportTask.execute();
    }
  }
}
