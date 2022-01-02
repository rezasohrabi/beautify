/// <reference path="Tool.ts" />

namespace App {
  export class Canvas {
    private _currentTool!: Tool;
    mouseUp(): void {
      this._currentTool?.mouseUp();
    }
    mouseDown(): void {
      this._currentTool?.mouseDown();
    }

    get currentTool() {
      return this._currentTool;
    }

    set currentTool(currentTool: Tool) {
      this._currentTool = currentTool;
    }
  }
}
