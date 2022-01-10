/// <reference path="UndoableCommand.ts" />
/// <reference path="HtmlDocument.ts" />
/// <reference path="Memory.ts" />

namespace App {
  export class BoldCommand implements UndoableCommand {
    private prevContent: string = '';
    private document: HtmlDocument;
    private memory: Memory;

    constructor(document: HtmlDocument, memory: Memory) {
      this.document = document;
      this.memory = memory;
    }

    execute(): void {
      this.prevContent = this.document.content;
      this.document.makeBold();
      this.memory.push(this);
    }

    unexecute(): void {
      this.document.content = this.prevContent;
    }
  }
}
