const powerset = require('./index');

test('powerset should be a function', () => {
  expect(typeof powerset).toEqual('function');
});

test('powerset() should return null', () => {
  expect(powerset()).toEqual(null);
});

test('powerset("") should return [""]', () => {
  expect(powerset('')).toEqual(['']);
});

test("powerset('a') should return [ '', 'a' ]", () => {
  expect(powerset('a')).toEqual(['', 'a']);
});

test("powerset('ab') should return ['', 'a', 'b', 'ab']", () => {
  expect(powerset('ab')).toEqual(['', 'a', 'b', 'ab']);
});

test("powerset('abc') should return [ '', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc' ]", () => {
  expect(powerset('abc')).toEqual(['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']);
});

test(`powerset("abcd") should return [ '', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc', 'd', 'ad', 'bd', 'abd', 'cd', 'acd', 'bcd', 'abcd' ]`, () => {
  expect(powerset('abcd')).toEqual([
    '',
    'a',
    'b',
    'ab',
    'c',
    'ac',
    'bc',
    'abc',
    'd',
    'ad',
    'bd',
    'abd',
    'cd',
    'acd',
    'bcd',
    'abcd',
  ]);
});
