function findVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

module.exports = findVowels;
