class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.unshift(item);
  }

  dequeue() {
    return this.items.pop();
  }
}

module.exports = Queue;
