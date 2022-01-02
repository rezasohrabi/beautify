/// <reference path="Tool.ts" />

namespace App {
  export class EraserTool implements Tool {
    mouseDown(): void {
      console.log('Eraser icon');
    }
    mouseUp(): void {
      console.log('Erase...');
    }
  }
}
