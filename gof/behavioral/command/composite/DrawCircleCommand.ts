/// <reference path="../framework/Command.ts" />

namespace App {
  export class DrawCircleCommand implements Command {
    execute(): void {
      console.log('draw...');
    }
  }
}
