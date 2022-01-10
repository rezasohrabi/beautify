/// <reference path="AddCustomerCommand.ts" />
/// <reference path="CustomerService.ts" />
/// <reference path="framework/Button.ts" />
/// <reference path="composite/CompositeCommand.ts" />
/// <reference path="composite/DrawCircleCommand.ts" />
/// <reference path="composite/ResizeCommand.ts" />

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
    }
  }
}
