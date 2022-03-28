class Events {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let fn of this.events[eventName]) {
        fn();
      }
    }
  }
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
