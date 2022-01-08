/// <reference path="Compressor.ts" />

namespace App {
  export class PngCompressor implements Compressor {
    compress(fileName: string): void {
      console.log('Compressing using png ', fileName);
    }
  }
}
