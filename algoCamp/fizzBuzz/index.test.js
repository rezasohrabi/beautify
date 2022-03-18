const fizzBuzz = require('./index');

test('fizzBuzz() should return empty array', () => {
  expect(fizzBuzz()).toEqual([]);
});

test('fizzBuzz(5) should return [1,2,"Fizz",4,"Buzz"]', () => {
  expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
});

test('fizzBuzz(15) should return [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]', () => {
  expect(fizzBuzz(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
});
