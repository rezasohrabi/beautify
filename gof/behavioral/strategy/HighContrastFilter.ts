/// <reference path="Filter.ts" />

namespace App {
  export class HighContrastFilter implements Filter {
    apply(fileName: string): void {
      console.log('Applying high contrast filter ', fileName);
    }
  }
}
