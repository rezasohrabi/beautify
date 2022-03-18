function capitalize(str) {
  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

function capitalize2(str) {
  return str
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (ch) => ch.toUpperCase());
}

function capitalize3(str) {
  let capitalized = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      capitalized += str[i].toUpperCase();
    } else {
      capitalized += str[i].toLowerCase();
    }
  }

  return capitalized;
}

module.exports = capitalize3;
