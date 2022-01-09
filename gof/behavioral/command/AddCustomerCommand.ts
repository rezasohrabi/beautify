/// <reference path="framework/Command.ts" />
/// <reference path="CustomerService.ts" />
namespace App {
  export class AddCustomerCommand implements Command {
    private service: CustomerService;

    constructor(service: CustomerService) {
      this.service = service;
    }

    execute(): void {
      this.service.addCustomer();
    }
  }
}
