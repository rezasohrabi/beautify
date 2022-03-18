function mostRepeatedChar(str) {
  const hashtable = {};
  let maxChar = str.charAt(0);
  for (let ch of str) {
    hashtable[ch] = hashtable[ch] + 1 || 1;
    if (hashtable[ch] > hashtable[maxChar]) maxChar = ch;
  }

  return maxChar;
}

module.exports = mostRepeatedChar;
