const palindrome = require('./index');

test('palindrome function should be defined.', () => {
  expect(palindrome).toBeDefined();
});

test('palindrome("eye") should return true', () => {
  expect(palindrome('eye')).toEqual(true);
});

test('palindrome("almostomla") should return false', () => {
  expect(palindrome('almostomla')).toEqual(false);
});
