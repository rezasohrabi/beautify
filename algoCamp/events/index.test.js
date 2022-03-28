const Events = require('./index');

test('Events can be registered then triggered', () => {
  const events = new Events();

  const callback = jest.fn();
  events.on('click', callback);
  events.trigger('click');
  expect(callback.mock.calls.length).toBe(1);
});

test('Multiple events can be registered then triggered', () => {
  const events = new Events();

  const callback1 = jest.fn();
  const callback2 = jest.fn();

  events.on('click', callback1);
  events.on('click', callback2);
  events.trigger('click');

  expect(callback1.mock.calls.length).toBe(1);
  expect(callback2.mock.calls.length).toBe(1);
});

test('Events can be triggered multiple times', () => {
  const events = new Events();

  const callback1 = jest.fn();
  const callback2 = jest.fn();

  events.on('click', callback1);
  events.trigger('click');
  events.on('click', callback2);
  events.trigger('click');
  events.trigger('click');
  expect(callback1.mock.calls.length).toBe(3);
  expect(callback2.mock.calls.length).toBe(2);
});

test('Events can have different names', () => {
  const events = new Events();

  const callback1 = jest.fn();
  const callback2 = jest.fn();

  events.on('click', callback1);
  events.trigger('click');
  events.on('hover', callback2);
  events.trigger('click');
  events.trigger('hover');

  expect(callback1.mock.calls.length).toBe(2);
  expect(callback2.mock.calls.length).toBe(1);
});

test('Events can be toggled off', () => {
  const events = new Events();

  const callback1 = jest.fn();
  const callback2 = jest.fn();

  events.on('hover', callback1);
  events.on('click', callback2);
  events.trigger('click');
  events.off('click');
  events.trigger('click');
  events.trigger('hover');

  expect(callback1.mock.calls.length).toBe(1);
  expect(callback2.mock.calls.length).toBe(1);
});
