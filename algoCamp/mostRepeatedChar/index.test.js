const mostRepeatedChar = require('./index');

test('mostRepeatedChar should be defined', () => {
  expect(mostRepeatedChar).toBeDefined();
});

test('mostRepeatedChar("this is most repeated") should return s', () => {
  expect(mostRepeatedChar('this is most repeated')).toEqual('s');
});

test('mostRepeatedChar("hello world") should return l', () => {
  expect(mostRepeatedChar('hello world')).toEqual('l');
});

test('mostRepeatedChar("yes") should return y', () => {
  expect(mostRepeatedChar('yes')).toEqual('y');
});
