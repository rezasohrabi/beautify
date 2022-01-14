namespace Mediator {
  export class UIControl {
    protected owner: DialogBox;
    constructor(owner: DialogBox) {
      this.owner = owner;
    }
  }
}
