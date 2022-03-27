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
