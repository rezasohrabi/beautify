/// <reference path="ListIterator.ts" />

namespace App {
  export class BrowseHistory {
    private _urls: string[] = [];

    public push(url: string) {
      this._urls.push(url);
    }

    public pop(): string {
      return this._urls.pop()!;
    }

    get urls(): string[] {
      return this._urls;
    }

    public createIterator(): ListIterator {
      return new ListIterator(this);
    }
  }
}
