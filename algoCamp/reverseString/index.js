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

module.exports = reverse2;
