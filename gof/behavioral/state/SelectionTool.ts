/// <reference path="Tool.ts" />

namespace App {
  export class SelectionTool implements Tool {
    mouseDown(): void {
      console.log('Selection icon');
    }
    mouseUp(): void {
      console.log('Draw a rectangle');
    }
  }
}
