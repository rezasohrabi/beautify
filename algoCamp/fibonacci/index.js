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

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

const memoizedFibo = memoize(slowFibonacci);

function slowFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return memoizedFibo(n - 1) + memoizedFibo(n - 2);
}

module.exports = memoizedFibo;
