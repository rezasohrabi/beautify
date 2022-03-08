const reverse = require('./index');

test('reverse("hello") should return "olleh" ', () => {
  expect(reverse('hello')).toEqual('olleh');
});

test('reverse function should be defined', () => {
  expect(reverse).toBeDefined();
});

test('reverse(null) should throw illegal argument error', () => {
  expect(() => reverse(null)).toThrow(Error('illegal argument'));
});

test('reverse(undefined) should throw illegal argument error', () => {
  expect(() => reverse(undefined)).toThrowError();
});

test('reverse() should throw illegal argument error', () => {
  expect(() => reverse()).toThrowError(Error('illegal argument'));
});

test('reverse(56) should return "65"', () => {
  expect(reverse(56)).toEqual('65');
});

test('reverse("this is test   ") should return "   tset si siht"', () => {
  expect(reverse('this is test   ')).toEqual('   tset si siht');
});
