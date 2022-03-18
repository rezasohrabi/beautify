const chunk = require('./index');

test('chunk([1,2,3,4], 2) should return [[1,2],[3,4]]', () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test('chunk([1,2,3,4,5], 2) should return [[1,2],[3,4],[5]]', () => {
  expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test('chunk([1,2,3,4], 5) should return [[1,2,3,4]]', () => {
  expect(chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
});

test('chunk([1,2,3,4,5,6,7,8,9], 3) should return [[1,2,3],[4,5,6],[7,8,9]]', () => {
  expect(chunk([1, 2, 3, 4], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});
