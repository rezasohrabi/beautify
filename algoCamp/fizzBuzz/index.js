function fizzBuzz(num) {
  function isThreeMultiply(num) {
    return num % 3 === 0;
  }
  function isFiveMultiply(num) {
    return num % 5 === 0;
  }

  const result = [];
  for (let i = 1; i <= num; i++) {
    if (isThreeMultiply(i) && isFiveMultiply(i)) {
      result.push('FizzBuzz');
    } else if (isThreeMultiply(i)) {
      result.push('Fizz');
    } else if (isFiveMultiply(i)) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
}

module.exports = fizzBuzz;
