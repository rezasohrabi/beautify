const weave = require('./index');
const Queue = require('./../queue');

test('Queue should has peek method', () => {
  const queue = new Queue();
  expect(typeof queue.peek).toEqual('function');
});

test('weave should be a function', () => {
  expect(typeof weave).toEqual('function');
});

test('peek method should return first item without removing it', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.peek()).toEqual(1);
  expect(queue.dequeue()).toEqual(1);
  expect(queue.peek()).toEqual(2);
  expect(queue.dequeue()).toEqual(2);

  expect(queue.peek()).toEqual(3);
  expect(queue.dequeue()).toEqual(3);

  expect(queue.peek()).not.toBeDefined();
});

test('weave(queueA, queueB) should combine two queue', () => {
  const queue1 = new Queue();
  queue1.enqueue(1);
  queue1.enqueue(2);
  queue1.enqueue(3);
  const queue2 = new Queue();
  queue2.enqueue('one');
  queue2.enqueue('two');
  queue2.enqueue('three');
  const combinedQueue = weave(queue1, queue2);
  expect(combinedQueue.dequeue()).toEqual(1);
  expect(combinedQueue.dequeue()).toEqual('one');
  expect(combinedQueue.dequeue()).toEqual(2);
  expect(combinedQueue.dequeue()).toEqual('two');
  expect(combinedQueue.dequeue()).toEqual(3);
  expect(combinedQueue.dequeue()).toEqual('three');
  expect(combinedQueue.dequeue()).not.toBeDefined();
});
