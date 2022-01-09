/// <reference path="Command.ts" />

namespace App {
  export class Button {
    private _label: string = '';
    private _command: Command;

    constructor(command: Command) {
      this._command = command;
    }

    click(): void {
      console.log('button clicked');
    }

    get label(): string {
      return this._label;
    }

    get command(): Command {
      return this._command;
    }
  }
}
