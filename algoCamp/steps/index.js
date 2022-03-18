function steps(num) {
  let step = ' '.repeat(num).split('');
  for (let i = 0; i < num; i++) {
    step[i] = '#';
    console.log(step.join(''));
  }
}

function steps2(num) {
  for (let row = 0; row < num; row++) {
    let step = '';

    for (let column = 0; column < num; column++) {
      if (column <= row) {
        step += '#';
      } else {
        step += ' ';
      }
    }
    console.log(step);
  }
}

function step3(num, row = 0, step = '') {
  if (row === num) {
    return;
  }

  if (step.length === num) {
    console.log(step);
    return step3(num, row + 1);
  }

  if (step.length <= row) {
    step += '#';
  } else {
    step += ' ';
  }
  step3(num, row, step);
}

module.exports = step3;
