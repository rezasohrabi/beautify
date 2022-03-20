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
