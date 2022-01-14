/// <reference path="UIControl.ts" />
/// <reference path="DialogBox.ts" />

namespace Mediator {
  export class Button extends UIControl {
    private _isDisabled: boolean = false;
    constructor(owner: DialogBox) {
      super(owner);
    }

    get isDisabled() {
      return this._isDisabled;
    }

    set isDisabled(isDisabled: boolean) {
      this._isDisabled = isDisabled;
      this.owner.changed(this);
    }
  }
}
