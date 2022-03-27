const t = require('./index');
const Node = t.Node;
const Tree = t.Tree;

describe('Node', () => {
  test('should be a class', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('should has children and value properties', () => {
    const a = new Node('a');
    expect(a.value).toEqual('a');
    expect(a.children.length).toEqual(0);
  });

  test('add() should add a children to node', () => {
    const node = new Node('parent');
    node.add('child one');
    expect(node.children.length).toEqual(1);
    expect(node.children[0].value).toEqual('child one');
    expect(node.children[0].children).toEqual([]);
  });

  test('remove() should remove a children', () => {
    const node = new Node('parent');
    node.add('child one');
    node.add('child two');
    node.add('child three');
    node.add('child four');
    node.add('child five');
    expect(node.children.length).toEqual(5);
    expect(node.children[3].value).toEqual('child four');
    node.remove('child four');
    expect(node.children.length).toEqual(4);
    expect(node.children[3].value).toEqual('child five');
  });
});

describe('Tree', () => {
  test('should start with null root', () => {
    const tree = new Tree();
    expect(tree.root).toEqual(null);
  });
  test('should traverse breadth-first', () => {
    const letters = [];
    const tree = new Tree();
    tree.root = new Node('a');
    tree.root.add('b');
    tree.root.add('c');
    tree.root.add('d');
    tree.root.children[1].add('e');
    tree.root.children[2].add('g');
    tree.root.children[2].add('h');
    tree.root.children[2].add('i');
    tree.traverseBreadthFirst((node) => {
      letters.push(node.value);
    });
    expect(letters).toEqual(['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i']);
  });
});
