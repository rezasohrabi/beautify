const matrix = require('./index');

test('matrix should be a function', () => {
  expect(typeof matrix).toEqual('function');
});

test('matrix(2) should return [[1,2],[4,3]]', () => {
  const m = matrix(2);
  expect(m[0]).toEqual([1, 2]);
  expect(m[1]).toEqual([4, 3]);
});

test('matrix(3) should return [[1,2,3],[8,9,4],[7,6,5]]', () => {
  const m = matrix(3);
  expect(m[0]).toEqual([1, 2, 3]);
  expect(m[1]).toEqual([8, 9, 4]);
  expect(m[2]).toEqual([7, 6, 5]);
});

test(`matrix(4) should return [[1,2,3,4],
                              [12,13,14,5],
                              [11,16,15,6],
                              [10,9,8,7]]`, () => {
  const m = matrix(4);
  expect(m[0]).toEqual([1, 2, 3, 4]);
  expect(m[1]).toEqual([12, 13, 14, 5]);
  expect(m[2]).toEqual([11, 16, 15, 6]);
  expect(m[3]).toEqual([10, 9, 8, 7]);
});
