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

  containsIterative(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (current > current.value) {
        current = current.rightChild;
      } else {
        return true;
      }
    }
    return false;
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

  isBinarySearchTree() {
    return this._isBinarySearchTree(this.root);
  }
  _isBinarySearchTree(root, min = null, max = null) {
    if (min !== null && root.value < min) {
      return false;
    }
    if (max !== null && root.value > max) {
      return false;
    }
    if (
      root.leftChild &&
      !this._isBinarySearchTree(root.leftChild, min, root.value)
    ) {
      return false;
    }
    if (
      root.rightChild &&
      !this._isBinarySearchTree(root.rightChild, root.value, max)
    ) {
      return false;
    }
    return true;
  }
}

module.exports = { BinarySearchTree, Node };
