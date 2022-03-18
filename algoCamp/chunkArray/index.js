function chunk(array, size) {
  let result = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);

    if (chunk.length === size) {
      result.push(chunk);
      chunk = [];
    }
  }
  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
}

module.exports = chunk;
