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

module.exports = capitalize2;
