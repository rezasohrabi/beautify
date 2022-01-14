/// <reference path="DialogBox.ts" />
/// <reference path="Button.ts" />
/// <reference path="ListBox.ts" />
/// <reference path="TextBox.ts" />

namespace Mediator {
  export class ArticlesDialogBox extends DialogBox {
    private articlesListBox: ListBox = new ListBox(this);
    private titleTextBox: TextBox = new TextBox(this);
    private saveButton: Button = new Button(this);

    changed(control: UIControl): void {
      if (control == this.articlesListBox) {
        this.articleSelected();
      } else if (control == this.titleTextBox) this.titleChanged();
    }

    public simulateUserInteraction(): void {
      this.articlesListBox.selection =
        "this is selected article of article's list";
      console.log('title:', this.titleTextBox.content);
      console.log('button is enabled? :', this.saveButton.isDisabled);
    }

    private articleSelected(): void {
      this.titleTextBox.content = this.articlesListBox.selection;
      this.saveButton.isDisabled = true;
    }

    private titleChanged(): void {
      const content = this.titleTextBox.content;
      const isEmpty = content == null || !content;
      this.saveButton.isDisabled = isEmpty;
    }
  }
}
