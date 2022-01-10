/// <reference path="../framework/Command.ts" />

namespace App {
  export class CompositeCommand implements Command {
    private commands: Command[] = [];

    add(command: Command) {
      this.commands.push(command);
    }
    execute(): void {
      for (let command of this.commands) {
        command.execute();
      }
    }
  }
}
