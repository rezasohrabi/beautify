/// <reference path="UIControl.ts" />
/// <reference path="DialogBox.ts" />

namespace Mediator {
  export class TextBox extends UIControl {
    private _content: string = '';
    constructor(owner: DialogBox) {
      super(owner);
    }

    get content() {
      return this._content;
    }

    set content(content: string) {
      this._content = content;
    }
  }
}
