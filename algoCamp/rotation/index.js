function checkRotation(str, rotated) {
  return str.length === rotated.length && str.repeat(2).includes(rotated);
}
module.exports = checkRotation;
