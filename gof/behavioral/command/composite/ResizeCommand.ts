/// <reference path="../framework/Command.ts" />

namespace App {
  export class ResizeCommand implements Command {
    execute(): void {
      console.log('resize...');
    }
  }
}
