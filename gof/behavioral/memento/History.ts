/// <reference path="EditorState.ts" />
namespace App {
  export class History {
    private states: EditorState[] = [];

    public pop(): EditorState {
      return this.states.pop()!;
    }

    public push(state: EditorState): void {
      this.states.push(state);
    }
  }
}
