class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this._size = 0;
  }

  addFirst(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = this.last = node;
    } else {
      const second = this.first;
      this.first = node;
      node.next = second;
    }
    this._size++;
  }

  getFirst() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  size() {
    return this._size;
  }

  clear() {
    this.first = this.last = null;
    this._size = 0;
  }
}

module.exports = { LinkedList, Node };
