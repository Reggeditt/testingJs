const stringLength = require('./stringLength.js');
const reverseString = require('./reverseString.js');

// stringLength test casses
test('checks various string inputs to verify if outputs match our expectations', () => {
  try {
    expect(stringLength("hello")).toBe(5);
    expect(stringLength("hello guy")).toBe(9);
    stringLength('');
    stringLength('hello world');
  } catch (error) {
    expect(error.message).toBe('String length must be between 1 and 10');
  }
});

// reverseString test cases
test('checks if the string is reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('hello guy')).toBe('yug olleh');
});