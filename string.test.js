const stringLength = require('./stringLength.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
// const { describe, default: test } = require('node:test');
const capitalize = require('./capitalize.js');

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
describe("reverseString", () => {
  test("checks if the string is reversed", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("hello guy")).toBe("yug olleh");
  });
});

// calculator test cases
describe('calculator', () => {
  test('checks if the calculator adds two numbers', () => {
    expect(calculator.add(10, 5)).toBe(15);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(-3, -6)).toBe(-9);
    expect(calculator.add(-30000, 60000)).toBe(30000);
  });

  test('checks if the calculator subtracts two numbers', () => {
    expect(calculator.subtract(10, 5)).toBe(5);
    expect(calculator.subtract(1, 6)).toBe(-5);
    expect(calculator.subtract(-1, -6)).toBe(5);
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  test('checks if the calculator multiplies two numbers', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
    expect(calculator.multiply(-1, -6)).toBe(6);
    expect(calculator.multiply(1, -6)).toBe(-6);
  });

  test('checks if the calculator divides two numbers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
    expect(calculator.divide(1, 5)).toBe(0.2);
    expect(calculator.divide(1, -5)).toBe(-0.2);
  });
});

// test driven development approach
describe('capitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toMatch('Hello');
  });
});