const List = require('./index');
const LinkedList = List.LinkedList;
const Node = List.Node;

test('LinkedList is a class', () => {
  expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node should has property value and next ', () => {
  const node1 = new Node('node one');
  const node2 = new Node('node two');
  node1.next = node2;

  expect(node1.value).toEqual('node one');
  expect(node1.next).toEqual(node2);
});

test('LinkedList.addFirst() method should add correct value to the start of list', () => {
  const list = new LinkedList();
  list.addFirst(5);
  expect(list.first.value).toEqual(5);
  list.addFirst(8);
  expect(list.first.value).toEqual(8);
});

test('LinkedList.size() should return correct number of items in list', () => {
  const list = new LinkedList();
  expect(list.size()).toEqual(0);
  list.addFirst(1);
  list.addFirst(2);
  list.addFirst(3);
  expect(list.size()).toEqual(3);
});
