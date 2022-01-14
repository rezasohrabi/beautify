/// <reference path="UIControl.ts" />

namespace Mediator {
  export abstract class DialogBox {
    abstract changed(control: UIControl): void;
  }
}
