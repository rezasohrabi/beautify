const Sort = require('./index');

describe('Sort', () => {
  test('should be a class', () => {
    expect(typeof Sort.prototype.constructor).toEqual('function');
  });
  test('bubbleSort() should sort array', () => {
    const sort = new Sort([34, 5, 4, 68, 999, 2, 1, 0, -1222, 89]);
    sort.bubbleSort();
    expect(sort.items).toEqual([-1222, 0, 1, 2, 4, 5, 34, 68, 89, 999]);
  });
  test('selectionSort() should sort array', () => {
    const sort = new Sort([34, 5, 4, 68, 999, 2, 1, 0, -1222, 89]);
    sort.selectionSort();
    expect(sort.items).toEqual([-1222, 0, 1, 2, 4, 5, 34, 68, 89, 999]);
  });
  test('mergeSort() should sort array', () => {
    const sort = new Sort([34, 5, 4, 68, 999, 2, 1, 0, -1222, 89]);
    expect(sort.mergeSort(sort.items)).toEqual([
      -1222, 0, 1, 2, 4, 5, 34, 68, 89, 999,
    ]);
  });
});
