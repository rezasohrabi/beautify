class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  first = null;
  last = null;
}

module.exports = { LinkedList, Node };
