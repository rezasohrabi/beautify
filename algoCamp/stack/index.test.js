const Stack = require('./index');

test('Stack should be a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('Stack should have a push method', () => {
  expect(typeof Stack.prototype.push).toEqual('function');
});

test('Stack should have a pop method', () => {
  expect(typeof Stack.prototype.pop).toEqual('function');
});

test('Stack should have a peek method', () => {
  expect(typeof Stack.prototype.peek).toEqual('function');
});

test('Stack should push and pop and peek items correctly', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toEqual(3);
  expect(stack.pop()).toEqual(2);
  expect(stack.peek()).toEqual(1);
  expect(stack.pop()).toEqual(1);

  expect(stack.pop()).toEqual(undefined);
});
