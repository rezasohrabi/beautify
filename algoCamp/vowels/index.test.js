const findVowels = require('./index');

test('findVowels("this is your vowels") should return 6', () => {
  expect(findVowels('this is your vowels')).toEqual(6);
});

test('findVowels("hi there!") should return 3', () => {
  expect(findVowels('hi there!')).toEqual(3);
});

test('findVowels("HI THERE!") should return 3', () => {
  expect(findVowels('HI THERE!')).toEqual(3);
});

test('findVowels("Why do you ask?") should return 4', () => {
  expect(findVowels('Why do you ask?')).toEqual(4);
});

test('findVowels("Why") should return 0', () => {
  expect(findVowels('Why')).toEqual(0);
});
