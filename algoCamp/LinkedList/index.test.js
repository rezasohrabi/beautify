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

test('LinkedList.getFirst() should return first node', () => {
  const list = new LinkedList();
  list.addFirst(3);
  list.addFirst(89);
  expect(list.getFirst().value).toEqual(89);
  list.addFirst(100);
  expect(list.getFirst().value).toEqual(100);
});

test('LinkedList.getLast() should return last node', () => {
  const list = new LinkedList();
  list.addFirst(300);
  list.addFirst(500);
  list.addFirst(600);
  expect(list.getLast()).toEqual({ value: 300, next: null });
});

test('LinkedList.clear() method should remove all nodes', () => {
  const list = new LinkedList();
  list.addFirst(300);
  list.addFirst(500);
  list.addFirst(600);
  expect(list.size()).toEqual(3);
  list.clear();
  expect(list.size()).toEqual(0);
  expect(list.getFirst()).toEqual(null);
  expect(list.getLast()).toEqual(null);
});

test('LinkedList.removeFirst() method should remove first node', () => {
  const list = new LinkedList();
  list.addFirst(300);
  list.addFirst(500);
  list.addFirst(600);
  list.removeFirst();
  expect(list.size()).toEqual(2);
  expect(list.getFirst().value).toEqual(500);
  list.removeFirst();
  list.removeFirst();
  expect(list.getFirst()).toEqual(null);
  expect(list.size()).toEqual(0);
});

describe('LinkedList.removeLast()', () => {
  test('should remove last node when list length is 1', () => {
    const list = new LinkedList();
    list.addFirst(1);
    list.removeLast();
    expect(list.getFirst()).toEqual(null);
    expect(list.getLast()).toEqual(null);
    expect(list.size()).toEqual(0);
  });
  test('should remove last node when list length is 2', () => {
    const list = new LinkedList();
    list.addFirst(1);
    list.addFirst(2);
    list.removeLast();
    expect(list.getFirst().value).toEqual(2);
    expect(list.getLast().value).toEqual(2);
    expect(list.size()).toEqual(1);
  });
  test('should remove last node when list length is 3', () => {
    const list = new LinkedList();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.removeLast();
    expect(list.getLast().value).toEqual(2);
    expect(list.size()).toEqual(2);
    list.removeLast();
    expect(list.getLast().value).toEqual(3);
    expect(list.size()).toEqual(1);
    list.removeLast();
    expect(list.getLast()).toEqual(null);
    expect(list.size()).toEqual(0);
  });
});
