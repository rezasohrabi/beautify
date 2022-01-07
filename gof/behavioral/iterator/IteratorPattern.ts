/// <reference path="BrowseHistory.ts" />
/// <reference path="Iterator.ts" />

namespace App {
  export class IteratorPattern {
    constructor() {
      const history: BrowseHistory = new BrowseHistory();
      history.push('browser first page');
      history.push('browser second page');
      history.push('browser third page');
      history.push('browser fourth page');

      const iterator = history.createIterator();
      while (iterator.hasNext()) {
        console.log(iterator.current());
        iterator.next();
      }
    }
  }
}
