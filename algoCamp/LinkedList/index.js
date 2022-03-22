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

  removeFirst() {
    if (!this.first) {
      return;
    }

    this.first = this.first.next;
    this._size--;
  }

  addLast(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this._size++;
  }

  removeLast() {
    if (!this.first) {
      return;
    }

    if (this.size() === 1) {
      this.first = this.last = null;
    } else {
      let current = this.first;
      let previous;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.last = previous;
    }
    this._size--;
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
