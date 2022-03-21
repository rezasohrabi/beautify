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
