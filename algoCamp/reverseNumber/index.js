function reverse(num) {
  if (num == null || typeof num !== 'number') return NaN;
  return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

module.exports = reverse;
