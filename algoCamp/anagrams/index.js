function anagrams(str1, str2) {
  return (
    str1
      .toLowerCase()
      .match(/[a-zA-Z0-9]/g)
      .sort()
      .join('') ===
    str2
      .toLowerCase()
      .match(/[a-zA-Z0-9]/g)
      .sort()
      .join('')
  );
}

function anagrams2(str1, str2) {
  function hashtable(str) {
    const hashtable = {};
    for (let ch of str.replace(/[\W_]/g, '').toLowerCase()) {
      hashtable[ch] = hashtable[ch] + 1 || 1;
    }

    return hashtable;
  }
  const hashtable1 = hashtable(str1);
  const hashtable2 = hashtable(str2);

  if (Object.keys(hashtable1).length !== Object.keys(hashtable2).length) {
    return false;
  }

  for (let ch in hashtable1) {
    if (hashtable1[ch] !== hashtable2[ch]) return false;
  }

  return true;
}

module.exports = anagrams2;
