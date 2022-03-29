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
  selectionSort() {
    for (let i = 0; i < this.items.length; i++) {
      let indexOfMin = i;
      for (let j = i + 1; j < this.items.length; j++) {
        if (this.items[j] < this.items[indexOfMin]) {
          indexOfMin = j;
        }
      }
      if (indexOfMin !== i) {
        const temp = this.items[indexOfMin];
        this.items[indexOfMin] = this.items[i];
        this.items[i] = temp;
      }
    }
  }
  mergeSort(array) {
    if (array.length === 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  }
}

module.exports = Sort;
