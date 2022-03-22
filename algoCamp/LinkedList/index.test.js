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

test('LinkedList.addLast() method should add node to last', () => {
  const list = new LinkedList();
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  expect(list.getLast().value).toEqual(30);
  expect(list.size()).toEqual(3);
  list.removeLast();
  expect(list.getLast().value).toEqual(20);
  expect(list.size()).toEqual(2);
  list.removeLast();
  expect(list.getLast().value).toEqual(10);
  expect(list.getFirst().value).toEqual(10);
  expect(list.size()).toEqual(1);
  list.removeLast();
  expect(list.getLast()).toEqual(null);
  expect(list.size()).toEqual(0);
});

describe('LinkedList.getAt(index)', () => {
  test(' should return node at specified index when list is not empty', () => {
    const list = new LinkedList();
    list.addLast(30);
    list.addLast(50);
    list.addLast(80);
    list.addLast(90);
    list.addLast(100);
    expect(list.getAt(4).value).toEqual(100);
    expect(list.getAt(3).value).toEqual(90);
    expect(list.getAt(2).value).toEqual(80);
    expect(list.getAt(1).value).toEqual(50);
    expect(list.getAt(0).value).toEqual(30);
  });
  test('shoud return null when index is less than zero', () => {
    const list = new LinkedList();
    list.addLast(30);
    list.addLast(50);
    list.addLast(80);
    list.addLast(90);
    list.addLast(100);
    expect(list.getAt(-10)).toEqual(null);
  });
  test('should return null when index is greater than list size', () => {
    const list = new LinkedList();
    list.addLast(30);
    list.addLast(50);
    list.addLast(80);
    list.addLast(90);
    list.addLast(100);
    expect(list.getAt(10)).toEqual(null);
  });
});

describe('LinkedList.removeAt(index)', () => {
  test('should return null when list is empty', () => {
    const list = new LinkedList();
    expect(list.removeAt(0)).toEqual(null);
  });
  test('should remove list first node', () => {
    const list = new LinkedList();
    list.addLast(30);
    list.addLast(50);
    list.addLast(80);
    list.removeAt(0);
    expect(list.getFirst().value).toEqual(50);
    list.removeAt(0);
    expect(list.getFirst().value).toEqual(80);
    list.removeAt(0);
    expect(list.getFirst()).toEqual(null);
  });
  test('should remove list last node', () => {
    const list = new LinkedList();
    list.addLast(10);
    list.addLast(20);
    list.addLast(30);
    list.removeAt(2);
    expect(list.getLast().value).toEqual(20);
    expect(list.size()).toEqual(2);
    list.removeAt(1);
    expect(list.getLast().value).toEqual(10);
    expect(list.size()).toEqual(1);
    list.removeAt(0);
    expect(list.getLast()).toEqual(null);
    expect(list.size()).toEqual(0);
  });
  test('should remove node in middle of list at specified index', () => {
    const list = new LinkedList();
    list.addLast(10);
    list.addLast(20);
    list.addLast(30);
    list.addLast(40);
    list.addLast(50);
    expect(list.getAt(3).value).toEqual(40);
    expect(list.size()).toEqual(5);
    list.removeAt(3);
    expect(list.getAt(3).value).toEqual(50);
    expect(list.size()).toEqual(4);
  });
});

describe('LinkedList.addAt(index,value)', () => {
  test('should add node when list is empty', () => {
    const list = new LinkedList();
    expect(list.size()).toEqual(0);
    list.addAt(0, 30);
    expect(list.getFirst().value).toEqual(30);
    expect(list.getLast().value).toEqual(30);
    expect(list.size()).toEqual(1);
  });
  test('should throw error when index is less than zero', () => {
    const list = new LinkedList();
    expect(() => list.addAt(-10, 999)).toThrowError();
  });
  test('should throw error when index is greater than list size', () => {
    const list = new LinkedList();
    list.addFirst(10);
    list.addFirst(9);
    list.addLast(12);
    list.addFirst(6);
    expect(() => list.addAt(10, 999)).toThrowError();
  });
  test('should add node to middle of list correctly', () => {
    const list = new LinkedList();
    list.addLast(10);
    list.addFirst(9);
    list.addLast(12);
    list.addFirst(6);
    list.addLast(20);
    list.addFirst(1);
    expect(list.getAt(4).value).toEqual(12);
    expect(list.size()).toEqual(6);
    list.addAt(4, 999);
    expect(list.getAt(4).value).toEqual(999);
    expect(list.size()).toEqual(7);
  });
  test('should add node to the start of list correctly', () => {
    const list = new LinkedList();
    list.addLast(10);
    list.addLast(12);
    list.addLast(20);
    expect(list.size()).toEqual(3);
    list.addAt(0, 999);
    expect(list.getFirst().value).toEqual(999);
    expect(list.size()).toEqual(4);
  });
  test('should add node to the end of list correctly', () => {
    const list = new LinkedList();
    list.addLast(10);
    list.addLast(12);
    list.addLast(20);
    expect(list.size()).toEqual(3);
    list.addAt(3, 999);
    expect(list.getLast().value).toEqual(999);
    expect(list.size()).toEqual(4);
  });
});

test('LinkedList.forEach() should iterate through list', () => {
  const list = new LinkedList();
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);
  list.forEach((node) => {
    node.value += 100;
  });
  expect(list.getAt(0).value).toEqual(110);
  expect(list.getAt(1).value).toEqual(120);
  expect(list.getAt(2).value).toEqual(130);
});

test('LinkedList support for ... of loop', () => {
  const list = new LinkedList();
  list.addLast(30);
  list.addLast(50);
  list.addLast(70);
  for (let node of list) {
    node.value *= 10;
  }
  expect(list.getAt(0).value).toEqual(300);
  expect(list.getAt(1).value).toEqual(500);
  expect(list.getAt(2).value).toEqual(700);
});
