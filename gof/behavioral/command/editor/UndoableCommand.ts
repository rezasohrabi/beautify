/// <reference path="../framework/Command.ts" />

namespace App {
  export interface UndoableCommand extends Command {
    unexecute(): void;
  }
}
