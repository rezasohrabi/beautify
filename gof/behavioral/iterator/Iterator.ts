namespace App {
  export interface Iterator<T> {
    hasNext(): boolean;
    current(): T;
    next(): void;
  }
}
