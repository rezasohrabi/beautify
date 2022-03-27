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

    if (this.size() === 1) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }
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

  getAt(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let counter = 0;
    let current = this.first;
    while (current) {
      if (counter === index) {
        return current;
      }
      current = current.next;
      counter++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size() || !this.first) {
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    }
    if (index === this.size() - 1) {
      return this.removeLast();
    }

    let counter = 0;
    let current = this.first;
    let previous;
    while (counter !== index) {
      previous = current;
      current = current.next;
      counter++;
    }
    previous.next = current.next;
    this._size--;
  }

  addAt(index, value) {
    const node = new Node(value);
    if (index < 0 || index > this.size()) {
      throw new Error('illegal argument');
    }
    if (!this.first) {
      this.first = this.last = node;
    }
    if (index === 0) {
      node.next = this.first;
      this.first = node;
    } else if (index === this.size()) {
      this.last.next = node;
      this.last = node;
    } else {
      let current = this.first;
      let previous;
      let counter = 0;
      while (counter !== index) {
        previous = current;
        current = current.next;
        counter++;
      }
      node.next = current;
      previous.next = node;
    }
    this._size++;
  }

  forEach(fn) {
    let current = this.first;
    let index = 0;
    while (current) {
      fn(current, index);
      current = current.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let current = this.first;
    while (current) {
      yield current;
      current = current.next;
    }
  }

  middle() {
    let slow = this.first;
    let fast = this.first;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  fromLast(k) {
    let a = this.first;
    let b = this.first;
    for (let i = 0; i < k - 1; i++) {
      b = b.next;
    }
    while (b.next) {
      b = b.next;
      a = a.next;
    }
    return a;
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

  isCircular() {
    return this.last.next === this.first;
  }

  makeCircular() {
    this.last.next = this.first;
  }
}

module.exports = { LinkedList, Node };
