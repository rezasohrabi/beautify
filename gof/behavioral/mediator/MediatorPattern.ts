/// <reference path="ArticlesDialogBox.ts" />

namespace Mediator {
  export class MediatorPattern {
    constructor() {
      const dialog = new ArticlesDialogBox();
      dialog.simulateUserInteraction();
    }
  }
}
