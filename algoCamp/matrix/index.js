function matrix(n) {
  let result = emptyMatrix(n);
  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;
  let counter = 1;
  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter++;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter++;
    }
    startColumn++;
  }
  return result;
}

function emptyMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) matrix.push([]);
  return matrix;
}

module.exports = matrix;
