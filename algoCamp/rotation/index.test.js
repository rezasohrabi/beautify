const checkRotation = require('./index');

describe('checkRotation()', () => {
  test('Should return true if are rotation of another string', () => {
    expect(checkRotation('abcd', 'cdab')).toEqual(true);
    expect(checkRotation('this has rotation', 'ationthis has rot')).toEqual(
      true
    );
  });
  test('Should return false if are not rotation of another string', () => {
    expect(checkRotation('abcd', 'cddab')).toEqual(false);
    expect(checkRotation('this has rotation', 'this has rot')).toEqual(false);
  });
});
