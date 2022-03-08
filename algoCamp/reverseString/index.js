function reverse(str) {
  if (str === null || str === undefined) {
    throw new Error('illegal argument');
  }

  let stack = [];
  let convertedStr = String(str);
  let reversed = '';
  for (let i = 0; i < convertedStr.length; i++)
    stack.push(convertedStr.charAt(i));

  while (stack.length !== 0) reversed += stack.pop();

  return reversed;
}
module.exports = reverse;
