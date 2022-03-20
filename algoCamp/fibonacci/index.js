function fibonacci(n) {
  const result = [0, 1];
  let i = 2;
  while (i <= n) {
    result.push(result[i - 2] + result[i - 1]);
    i++;
  }
  return result[n];
}

function fibonacci1(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }
  return result[n];
}

module.exports = fibonacci1;
