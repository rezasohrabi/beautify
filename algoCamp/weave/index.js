const Queue = require('../queue');

function weave(queue1, queue2) {
  const queue = new Queue();
  while (queue1.peek() || queue2.peek()) {
    if (queue1.peek()) {
      queue.enqueue(queue1.dequeue());
    }
    if (queue2.peek()) {
      queue.enqueue(queue2.dequeue());
    }
  }
  return queue;
}

module.exports = weave;
