function isString(str) {
  return str !== null && str !== undefined && typeof str === 'string';
}

function reverse(str) {
  if (!isString(str)) {
    throw new Error('illegal argument');
  }

  let stack = [];
  let reversed = '';
  for (let i = 0; i < str.length; i++) stack.push(str.charAt(i));

  while (stack.length !== 0) reversed += stack.pop();

  return reversed;
}

function reverse2(str) {
  if (!isString(str)) throw new Error('illegal argument');

  return str.split('').reverse('').join('');
}

function reverse3(str) {
  if (!isString(str)) throw new Error('illegal argument');

  let reversed = '';
  for (let character of str) reversed = character + reversed;

  return reversed;
}

function reverse4(str) {
  if (!isString(str)) throw new Error('illegal argument');

  return str.split('').reduce((reversed, char) => char + reversed);
}

function reverse5(str) {
  if (!isString(str)) throw new Error('illegal argument');

  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) reversed += str.charAt(i);

  return reversed;
}

module.exports = reverse5;
