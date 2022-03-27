class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(value) {
    this.children.push(new Node(value));
  }

  remove(value) {
    this.children = this.children.filter(node.value !== value);
  }
}

class Tree {}

module.exports = {
  Node,
  Tree,
};
