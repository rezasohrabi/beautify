class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  add(value) {
    this.children.push(new Node(value));
  }

  remove(value) {
    this.children = this.children.filter((node) => node.value !== value);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBreadthFirst(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }
}

module.exports = {
  Node,
  Tree,
};
