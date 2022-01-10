/// <reference path="../framework/Command.ts" />
/// <reference path="Memory.ts" />

namespace App {
  export class UndoCommand implements Command {
    private memory: Memory;

    constructor(memory: Memory) {
      this.memory = memory;
    }
    execute(): void {
      if (this.memory.size() > 0) {
        this.memory.pop().unexecute();
      }
    }
  }
}
