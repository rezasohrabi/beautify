const chunk = require('./index');

test('chunk([a,b,c,d], 2) should return [[a,b],[c,d]]', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([
    ['a', 'b'],
    ['c', 'd'],
  ]);
});

test('chunk([a,b,c,d,e], 2) should return [[a,b],[c,d],[e]]', () => {
  expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([
    ['a', 'b'],
    ['c', 'd'],
    ['e'],
  ]);
});

test('chunk([a,b,c,d], 5) should return [[a,b,c,d]]', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 5)).toEqual([['a', 'b', 'c', 'd']]);
});

test('chunk([a,b,c,d,e,f,g,h,j], 3) should return [[a,b,c],[d,e,f],[g,h,j]]', () => {
  expect(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j'], 3)).toEqual([
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'j'],
  ]);
});
