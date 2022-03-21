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
  }

  addFirst(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = this.last = value;
    }
    const second = this.first;
    this.first = node;
    node.next = second;
  }
}

module.exports = { LinkedList, Node };
