/// <reference path="Filter.ts" />

namespace App {
  export class BlackAndWhiteFilter implements Filter {
    apply(fileName: string): void {
      console.log('Applying B&W filter ', fileName);
    }
  }
}
