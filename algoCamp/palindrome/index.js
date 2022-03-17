function palindrome(str) {
  return str === str.split('').reverse().join('');
}

module.exports = palindrome;
