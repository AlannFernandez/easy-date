const assert = require("assert");
const addDays = require("./addDays");

// Test cases
const testCases = [
  {
    description: "Add 1 day to a date",
    date: new Date("2023-09-24"),
    days: 1,
    expected: new Date("2023-09-25"),
  },
  {
    description: "Add 7 days to a date",
    date: new Date("2023-09-24"),
    days: 7,
    expected: new Date("2023-10-01"),
  },
  {
    description: "Subtract 1 day from a date",
    date: new Date("2023-09-24"),
    days: -1,
    expected: new Date("2023-09-23"),
  },
];

function testAddDays() {
  for (const testCase of testCases) {
    const actual = addDays(testCase.date, testCase.days);
    const message = `${testCase.description} (Actual: ${actual}, Expected: ${testCase.expected})`;
    assert.deepEqual(actual, testCase.expected, message);
  }
}

testAddDays();

console.log("All tests have passed successfully.");
