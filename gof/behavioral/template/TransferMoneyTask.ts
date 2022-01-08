/// <reference path="Task.ts" />

namespace App {
  export class TransferMoneyTask extends Task {
    doExecute(): void {
      console.log('transfer money task');
    }
  }
}
