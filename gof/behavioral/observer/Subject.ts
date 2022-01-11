/// <reference path="Observer.ts" />

namespace App {
  export class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }

    removeObserver(): void {
      this.observers.pop();
    }

    notifyObservers() {
      for (let observer of this.observers) {
        observer.update();
      }
    }
  }
}
