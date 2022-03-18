const capitalize = require('./index');

test('capitalize("this is a string!") should return "This Is A String!"', () => {
  expect(capitalize('this is a string!')).toEqual('This Is A String!');
});

test('capitalize("A SHORT SENTENCE") should return "A Short Sentence"', () => {
  expect(capitalize('A SHORT SENTENCE')).toEqual('A Short Sentence');
});

test('capitalize("cAPITAL") should return "Capital"', () => {
  expect(capitalize('cAPITAL')).toEqual('Capital');
});

test('capitalize("hello World") should return "Hello World"', () => {
  expect(capitalize('hello World')).toEqual('Hello World');
});
