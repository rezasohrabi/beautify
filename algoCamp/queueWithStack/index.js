const Stack = require('./../stack');
class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(item) {
    this.stack1.push(item);
  }

  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    return this.stack2.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }
}

module.exports = Queue;
