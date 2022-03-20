const Queue = require('./index');

test('Queue should be a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add element to queue', () => {
  const queue = new Queue();
  expect(() => {
    queue.enqueue(1);
  }).not.toThrow();
});

test('can remove element from queue', () => {
  const queue = new Queue();
  expect(() => {
    queue.enqueue(1);
    queue.dequeue();
  }).not.toThrow();
});

test('elements should be added and removed in fifo order', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue()).toEqual(1);
  expect(queue.dequeue()).toEqual(2);
  expect(queue.dequeue()).toEqual(3);
  expect(queue.dequeue()).toEqual(undefined);
});
