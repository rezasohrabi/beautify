function palindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindrome2(str) {
  return str.split('').every((ch, i) => {
    return ch === str.charAt(str.length - 1 - i);
  });
}

module.exports = palindrome2;
