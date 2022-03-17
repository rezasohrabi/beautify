const palindrome = require('./index');

test('palindrome function should be defined', () => {
  expect(palindrome).toBeDefined();
});

test('palindrome(null) should return false', () => {
  expect(palindrome(null)).toEqual(false);
});

test('palindrome({}) should return false', () => {
  expect(palindrome({})).toEqual(false);
});

test('palindrome(undefined) should return false', () => {
  expect(palindrome(undefined)).toEqual(false);
});

test('palindrome("eye") should return true', () => {
  expect(palindrome('eye')).toEqual(true);
});

test('palindrome("_eye") should return true', () => {
  expect(palindrome('_eye')).toEqual(true);
});

test('palindrome("not a palindrome") should return false', () => {
  expect(palindrome('not a palindrome')).toEqual(false);
});

test('palindrome("never odd or even") should return true', () => {
  expect(palindrome('never odd or even')).toEqual(true);
});

test('palindrome("A man, a plan, a canal. Panama") should return true', () => {
  expect(palindrome('A man, a plan, a canal. Panama')).toEqual(true);
});

test('palindrome("0_0 (: /- :) 0-0") should return true', () => {
  expect(palindrome('0_0 (: /- :) 0-0')).toEqual(true);
});
