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

function fibonacci2(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

module.exports = fibonacci2;
