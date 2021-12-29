/// <reference path="EditorState.ts" />

namespace App {
  export class Editor {
    private _content: string = '';

    public get content() {
      return this._content;
    }

    public createStore(): EditorState {
      return new EditorState(this._content);
    }

    public restore(state: EditorState) {
      this._content = state.content;
    }

    public set content(content: string) {
      this._content = content;
    }
  }
}
