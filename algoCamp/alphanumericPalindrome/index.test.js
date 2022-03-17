const palindrome = require('./index');

test('palindrome function should be defined', () => {
  expect(palindrome).toBeDefined();
});

test('palindrome(null) should return false', () => {
  expect(palindrome(null)).toBeEqual(false);
});

test('palindrome({}) should return false', () => {
  expect(palindrome({})).toBeEqual(false);
});

test('palindrome(undefined) should return false', () => {
  expect(palindrome(undefined)).toBeEqual(false);
});

test('palindrome("eye") should return true', () => {
  expect(palindrome('eye')).toBeEqual(true);
});

test('palindrome("_eye") should return true', () => {
  expect(palindrome('_eye')).toBeEqual(true);
});

test('palindrome("not a palindrome") should return false', () => {
  expect(palindrome('not a palindrome')).toBeEqual(false);
});

test('palindrome("never odd or even") should return true', () => {
  expect(palindrome('never odd or even')).toBeEqual(true);
});

test('palindrome("A man, a plan, a canal. Panama") should return true', () => {
  expect(palindrome('A man, a plan, a canal. Panama')).toBeEqual(true);
});

test('palindrome("0_0 (: /- :) 0-0") should return true', () => {
  expect(palindrome('0_0 (: /- :) 0-0')).toBeEqual(true);
});
