function findVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

function findVowels2(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

module.exports = findVowels2;
