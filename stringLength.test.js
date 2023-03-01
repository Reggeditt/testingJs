const stringLength = require('./main.js');

test('string length', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('hello guy')).toBe(9);
});

test('throws an error if string length is less than 1', () => {
  try {
    stringLength('');
  } catch (error) {
    expect(error.message).toBe('String length must be between 1 and 10');
  }
});