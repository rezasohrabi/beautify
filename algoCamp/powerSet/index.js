function powerset(str) {
  if (str === null || str === undefined || typeof str !== 'string') {
    return null;
  }

  return Array.from(str).reduce(
    (acc, char) => {
      return acc.concat(acc.map((prev) => `${prev}${char}`));
    },
    ['']
  );
}

module.exports = powerset;
