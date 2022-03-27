const t = require('./index');
const Node = t.Node;
const Tree = t.Tree;

test('Node should be a class', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node should has children and value properties', () => {
  const a = new Node('a');
  expect(a.value).toEqual('a');
  expect(a.children.length).toEqual(0);
});

test('Node.add() should add a children to node', () => {
  const node = new Node('parent');
  node.add('child one');
  expect(node.children.length).toEqual(1);
  expect(node.children[0].value).toEqual('child one');
  expect(node.children[0].children).toEqual([]);
});
