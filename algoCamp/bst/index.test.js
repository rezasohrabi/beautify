const BinarySearchTree = require('./index');
describe('SearchBinaryTree', () => {
  test('should be a class', () => {
    expect(typeof BinarySearchTree.prototype.constructor).toEqual('function');
  });
  test('insert() adds a node to tree', () => {
    const bst = new BinarySearchTree();
    bst.insert(1);
    bst.insert(-39);
    bst.insert(40);
    expect(bst.root.leftChild.value).toEqual(-39);
    expect(bst.root.rightChild.value).toEqual(40);
    expect(bst.root.value).toEqual(1);
  });
  test('contains() should return true if value exists in tree', () => {
    const bst = new BinarySearchTree();
    bst.insert(1);
    bst.insert(-39);
    bst.insert(40);
    bst.insert(39);
    bst.insert(9);
    bst.insert(88);
    expect(bst.contains(1)).toEqual(true);
    expect(bst.contains(-39)).toEqual(true);
    expect(bst.contains(40)).toEqual(true);
    expect(bst.contains(39)).toEqual(true);
    expect(bst.contains(9)).toEqual(true);
    expect(bst.contains(88)).toEqual(true);
  });
  test('contains() should return false if value does not exists in tree', () => {
    const bst = new BinarySearchTree();
    bst.insert(1);
    bst.insert(-39);
    bst.insert(40);
    bst.insert(39);
    bst.insert(9);
    bst.insert(88);
    expect(bst.contains(10)).toEqual(false);
    expect(bst.contains(7)).toEqual(false);
    expect(bst.contains(67)).toEqual(false);
    expect(bst.contains(999)).toEqual(false);
    expect(bst.contains(3)).toEqual(false);
    expect(bst.contains(400)).toEqual(false);
  });
});
