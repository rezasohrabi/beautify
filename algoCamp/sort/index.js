class Sort {
  constructor(items) {
    this.items = items;
  }
  bubbleSort() {
    for (let i = 0; i < this.items.length; i++) {
      for (let j = 0; j < this.items.length - i - 1; j++) {
        if (this.items[j] > this.items[j + 1]) {
          const temp = this.items[j + 1];
          this.items[j + 1] = this.items[j];
          this.items[j] = temp;
        }
      }
    }
  }
}

module.exports = Sort;
