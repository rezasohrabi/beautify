function palindrome(str) {
  if (str === null || str === undefined || typeof str !== 'string') {
    return false;
  }
  const alphaNumericChars = str.toLowerCase().match(/[a-zA-Z0-9]/g);
  return alphaNumericChars.join('') === alphaNumericChars.reverse().join('');
}

function palindrome2(str) {
  if (str === null || str === undefined || typeof str !== 'string') {
    return false;
  }

  const alphaNumericStr = str.toLowerCase().replace(/[\W_]/g, '');
  const middleIndex = alphaNumericStr.length / 2;

  for (let i = 0; i < middleIndex; i++)
    if (alphaNumericStr[i] !== alphaNumericStr[alphaNumericStr.length - 1 - i])
      return false;

  return true;
}

module.exports = palindrome2;
