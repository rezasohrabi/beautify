namespace App {
  export class HtmlDocument {
    private _content: string;

    constructor(content: string) {
      this._content = content;
    }

    makeBold(): void {
      this._content = `<strong>${this._content}</strong>`;
    }

    get content() {
      return this._content;
    }
    set content(content: string) {
      this._content = content;
    }
  }
}
