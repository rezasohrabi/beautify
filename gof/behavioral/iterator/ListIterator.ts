/// <reference path="Iterator.ts" />

namespace App {
  export class ListIterator implements Iterator<string> {
    private history: BrowseHistory;
    private index: number = 0;

    constructor(history: BrowseHistory) {
      this.history = history;
    }
    hasNext(): boolean {
      return this.index < this.history.urls.length;
    }
    current(): string {
      return this.history.urls[this.index];
    }
    next(): void {
      this.index++;
    }
  }
}
