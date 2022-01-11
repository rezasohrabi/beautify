/// <reference path="Subject.ts" />

namespace App {
  export class DataSource extends Subject {
    private _value: string = '';

    get value(): string {
      return this._value;
    }

    set value(value: string) {
      this._value = value;
      this.notifyObservers();
    }
  }
}
