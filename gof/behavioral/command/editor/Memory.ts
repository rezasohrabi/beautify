/// <reference path="UndoableCommand.ts" />

namespace App {
  export class Memory {
    private commands: UndoableCommand[] = [];

    pop(): UndoableCommand {
      return this.commands.pop()!;
    }

    push(command: UndoableCommand): void {
      this.commands.push(command);
    }

    size() {
      return this.commands.length;
    }
  }
}
