const assert = require("assert");
const isLeapYear = require("./isLeapYear");

// Test cases
const testCases = [
  {
    description: "Check if a leap year (2000)",
    year: 2000,
    expected: true,
  },
  {
    description: "Check if a leap year (2024)",
    year: 2024,
    expected: true,
  },
  {
    description: "Check if not a leap year (1900)",
    year: 1900,
    expected: false,
  },
  {
    description: "Check if not a leap year (2022)",
    year: 2022,
    expected: false,
  },
];

function testIsLeapYear() {
  for (const testCase of testCases) {
    const actual = isLeapYear(testCase.year);
    const message = `${testCase.description} (Actual: ${actual}, Expected: ${testCase.expected})`;
    assert.strictEqual(actual, testCase.expected, message);
  }
}

testIsLeapYear();

console.log("All tests for isLeapYear have passed successfully.");
