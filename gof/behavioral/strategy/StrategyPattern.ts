/// <reference path="ImageStorage.ts" />
/// <reference path="JpegCompressor.ts" />
/// <reference path="BlackAndWhiteFilter.ts" />

namespace App {
  export class StrategyPattern {
    constructor() {
      const storage = new ImageStorage(
        new JpegCompressor(),
        new BlackAndWhiteFilter()
      );
      storage.store('jpeg-image-file');
    }
  }
}
