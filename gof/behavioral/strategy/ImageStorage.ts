namespace App {
  export class ImageStorage {
    private _compressor: Compressor;
    private _filter: Filter;

    constructor(compressor: Compressor, filter: Filter) {
      this._compressor = compressor;
      this._filter = filter;
    }

    public store(fileName: string): void {
      this._compressor.compress(fileName);
      this._filter.apply(fileName);
    }
  }
}
