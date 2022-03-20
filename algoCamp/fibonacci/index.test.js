const fibonacci = require('./index');

test('fibonacci(0) should return 0', () => {
  expect(fibonacci(0)).toEqual(0);
});

test('fibonacci(1) should return 1', () => {
  expect(fibonacci(1)).toEqual(1);
});

test('fibonacci(2) should return 1', () => {
  expect(fibonacci(2)).toEqual(1);
});

test('fibonacci(3) should return 2', () => {
  expect(fibonacci(3)).toEqual(2);
});
test('fibonacci(4) should return 3', () => {
  expect(fibonacci(4)).toEqual(3);
});

test('fibonacci(35) should return 9227465', () => {
  expect(fibonacci(35)).toEqual(9227465);
});

test('fibonacci(100) should return 354224848179262000000', () => {
  expect(fibonacci(100)).toEqual(354224848179262000000);
});
