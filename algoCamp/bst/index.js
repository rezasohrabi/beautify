class Node {
  constructor(value) {
    this.value = value;
    this.rightChild = null;
    this.leftChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    return this._contains(this.root, value);
  }

  _contains(root, value) {
    if (root === null) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this._contains(root.leftChild, value);
    } else {
      return this._contains(root.rightChild, value);
    }
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    this._insert(this.root, value);
  }
  _insert(root, value) {
    if (root == null) {
      return new Node(value);
    }

    if (value < root.value) {
      root.leftChild = this._insert(root.leftChild, value);
    } else {
      root.rightChild = this._insert(root.rightChild, value);
    }

    return root;
  }
}

module.exports = BinarySearchTree;
