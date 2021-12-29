/// <reference path="EditorState.ts" />
/// <reference path="Editor.ts" />
/// <reference path="History.ts" />

namespace App {
  export class MementoPattern {
    constructor() {
      const editor: Editor = new Editor();
      const history: History = new History();

      editor.content = 'Do operation one';
      history.push(editor.createStore());

      editor.content = 'Do operation two';
      history.push(editor.createStore());

      editor.content = 'Do operation three';
      editor.restore(history.pop());
      console.log(editor.content);
    }
  }
}
