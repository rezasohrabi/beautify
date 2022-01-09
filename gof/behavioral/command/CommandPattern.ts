/// <reference path="AddCustomerCommand.ts" />
/// <reference path="CustomerService.ts" />
/// <reference path="framework/Button.ts" />

namespace App {
  export class CommandPattern {
    constructor() {
      const service = new CustomerService();
      const addCustomerCommand = new AddCustomerCommand(service);
      const button = new Button(addCustomerCommand);
      button.click();
    }
  }
}
