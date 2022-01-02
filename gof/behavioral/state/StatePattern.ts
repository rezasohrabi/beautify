/// <reference path="Canvas.ts" />
/// <reference path="BrushTool.ts" />

namespace App {
  export class StatePattern {
    constructor() {
      const canvas: Canvas = new Canvas();
      canvas.currentTool = new BrushTool();
      canvas.mouseDown();
      canvas.mouseUp();
    }
  }
}
