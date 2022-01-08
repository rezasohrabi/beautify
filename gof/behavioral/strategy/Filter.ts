namespace App {
  export interface Filter {
    apply(fileName: string): void;
  }
}
