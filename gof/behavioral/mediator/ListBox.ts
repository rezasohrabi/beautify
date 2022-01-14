/// <reference path="UIControl.ts" />
/// <reference path="DialogBox.ts" />

namespace Mediator {
  export class ListBox extends UIControl {
    private _selection: string = '';
    constructor(owner: DialogBox) {
      super(owner);
    }

    get selection() {
      return this._selection;
    }

    set selection(selection: string) {
      this._selection = selection;
      this.owner.changed(this);
    }
  }
}
