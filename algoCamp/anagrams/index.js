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

module.exports = anagrams;
