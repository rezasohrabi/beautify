/// <reference path="Compressor.ts" />

namespace App {
  export class JpegCompressor implements Compressor {
    compress(fileName: string): void {
      console.log('Compressing using jpeg ', fileName);
    }
  }
}
