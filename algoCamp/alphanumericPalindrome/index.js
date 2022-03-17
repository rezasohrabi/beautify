function palindrome(str) {
  if (str === null || str === undefined || typeof str !== 'string') {
    return false;
  }
  const alphaNumericChars = str.toLowerCase().match(/[a-zA-Z0-9]/gi);
  return alphaNumericChars.join('') === alphaNumericChars.reverse().join('');
}

module.exports = palindrome;
