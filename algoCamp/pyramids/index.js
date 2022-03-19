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

function pyramids2(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  const columns = n * 2 - 1;
  const middle = Math.floor(columns / 2);

  if (level.length === columns) {
    console.log(level);
    return pyramids2(n, row + 1);
  }

  if (level.length >= middle - row && level.length <= middle + row) {
    level += '#';
  } else {
    level += ' ';
  }

  pyramids2(n, row, level);
}

module.exports = pyramids2;
