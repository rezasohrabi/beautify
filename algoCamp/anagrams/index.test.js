const anagrams = require('./index');

test('anagrams("rail safety", "fairy tales") should return true', () => {
  expect(anagrams('_Rail safety!', 'fairy tales')).toEqual(true);
});

test('anagrams("_Rail safety", "fairy tales") should return true', () => {
  expect(anagrams('_Rail safety!', 'fairy tales')).toEqual(true);
});

test('anagrams("hi there", "bye there") should return false', () => {
  expect(anagrams('hi there', 'bye there')).toEqual(false);
});
