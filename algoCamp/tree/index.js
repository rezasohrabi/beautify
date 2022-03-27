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

  traverseDepthFirst(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }

  levelWidth() {
    let arr = ['s', this.root];
    let widths = [];
    while (arr.length > 1) {
      const node = arr.shift();
      if (node === 's') {
        widths.push(0);
        arr.push('s');
      } else {
        widths[widths.length - 1]++;
        arr.push(...node.children);
      }
    }
    return widths;
  }
}

module.exports = {
  Node,
  Tree,
};
