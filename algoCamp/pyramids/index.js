function pyramids(n) {
  const columns = n * 2 - 1;
  const middle = Math.floor(columns / 2);
  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < columns; column++) {
      if (column >= middle - row && column <= middle + row) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

module.exports = pyramids;
