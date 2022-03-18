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

function chunk2(array, size) {
  const chunked = [];

  for (let item of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }

  return chunked;
}

module.exports = chunk2;
