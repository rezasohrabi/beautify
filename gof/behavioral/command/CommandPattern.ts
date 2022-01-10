/// <reference path="AddCustomerCommand.ts" />
/// <reference path="CustomerService.ts" />
/// <reference path="framework/Button.ts" />
/// <reference path="composite/CompositeCommand.ts" />
/// <reference path="composite/DrawCircleCommand.ts" />
/// <reference path="composite/ResizeCommand.ts" />
/// <reference path="editor/Memory.ts" />
/// <reference path="editor/HtmlDocument.ts" />
/// <reference path="editor/BoldCommand.ts" />
/// <reference path="editor/UndoCommand.ts" />

namespace App {
  export class CommandPattern {
    constructor() {
      const service = new CustomerService();
      const addCustomerCommand = new AddCustomerCommand(service);
      const button = new Button(addCustomerCommand);
      button.click();

      console.log('-- composite command pattern --');
      const compositeCommand = new CompositeCommand();
      compositeCommand.add(new ResizeCommand());
      compositeCommand.add(new DrawCircleCommand());
      compositeCommand.execute();

      console.log('-- undo with command pattern --');
      const memory = new Memory();
      const document = new HtmlDocument('this is undoable content');
      const boldCommand = new BoldCommand(document, memory);
      boldCommand.execute();
      console.log(document.content);
      const undoCommand = new UndoCommand(memory);
      undoCommand.execute();
      console.log(document.content);
    }
  }
}
