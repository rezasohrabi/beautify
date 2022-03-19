const pyramids = require('./index');

test('pyramids is a function', () => {
  expect(typeof pyramids).toEqual('function');
});

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('pyramids(1) should print a one level pyramids', () => {
  pyramids(1);
  expect(console.log.mack.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls.length).toEqual(1);
});

test('pyramids(2) should print a two level pyramids', () => {
  pyramids(2);
  console.log(console.log.mock.calls);
  expect(console.log.mock.calls[0][0]).toEqual(' # ');
  expect(console.log.mock.calls[1][0]).toEqual('###');
  expect(console.log.mock.calls.length).toEqual(2);
});

test('pyramids(3) should print a three level pyramids', () => {
  pyramids(3);
  expect(console.log.mock.calls[0][0]).toEqual('  #  ');
  expect(console.log.mock.calls[1][0]).toEqual(' ### ');
  expect(console.log.mock.calls[2][0]).toEqual('#####');

  expect(console.log.mock.calls.length).toEqual(3);
});

test('pyramids(4) should print a four level pyramids', () => {
  pyramids(4);
  expect(console.log.mock.calls[0][0]).toEqual('   #   ');
  expect(console.log.mock.calls[1][0]).toEqual('  ###  ');
  expect(console.log.mock.calls[2][0]).toEqual(' ##### ');
  expect(console.log.mock.calls[3][0]).toEqual('#######');

  expect(console.log.mock.calls.length).toEqual(4);
});

test('pyramids(5) should print a five level pyramids', () => {
  pyramids(5);
  expect(console.log.mock.calls[0][0]).toEqual('    #    ');
  expect(console.log.mock.calls[1][0]).toEqual('   ###   ');
  expect(console.log.mock.calls[2][0]).toEqual('  #####  ');
  expect(console.log.mock.calls[3][0]).toEqual(' ####### ');
  expect(console.log.mock.calls[4][0]).toEqual('#########');

  expect(console.log.mock.calls.length).toEqual(5);
});
