function steps(num) {
  let step = ' '.repeat(num).split('');
  for (let i = 0; i < num; i++) {
    step[i] = '#';
    console.log(step.join(''));
  }
}

module.exports = steps;
