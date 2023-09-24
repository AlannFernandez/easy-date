const assert = require("assert");
const subtractDays = require("./subtractDays");

// Test cases
const testCases = [
  {
    description: "Subtract 1 day from a date",
    date: new Date("2023-09-24"),
    days: 1,
    expected: new Date("2023-09-23"),
  },
  {
    description: "Subtract 7 days from a date",
    date: new Date("2023-09-24"),
    days: 7,
    expected: new Date("2023-09-17"),
  },
  {
    description: "Subtract 30 days from a date",
    date: new Date("2023-09-24"),
    days: 30,
    expected: new Date("2023-08-25"),
  },
];

function testSubtractDays() {
  for (const testCase of testCases) {
    const actual = subtractDays(testCase.date, testCase.days);
    const message = `${testCase.description} (Actual: ${actual}, Expected: ${testCase.expected})`;
    assert.deepEqual(actual, testCase.expected, message);
  }
}

testSubtractDays();

console.log("All tests for subtractDays have passed successfully.");
