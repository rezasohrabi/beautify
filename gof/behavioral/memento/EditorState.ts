namespace App {
  export class EditorState {
    private _content: string;
    constructor(content: string) {
      this._content = content;
    }

    public get content() {
      return this._content;
    }

    public set content(content: string) {
      this._content = content;
    }
  }
}
