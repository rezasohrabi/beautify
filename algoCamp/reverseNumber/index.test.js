const reverse = require('./index');

test('reverse(null) should return NaN', () => {
  expect(reverse(null)).toBeNaN();
});

test('reverse(undefined) should return NaN', () => {
  expect(reverse(undefined)).toBeNaN();
});

test('reverse([]) should return NaN', () => {
  expect(reverse([])).toBeNaN();
});

test('reverse(123) should return 321', () => {
  expect(reverse([])).toBeNaN();
});

test('reverse(200) should return 2', () => {
  expect(reverse([])).toBeNaN();
});

test('reverse(-876) should return -678', () => {
  expect(reverse([])).toBeNaN();
});

test('reverse(-200) should return -2', () => {
  expect(reverse([])).toBeNaN();
});
