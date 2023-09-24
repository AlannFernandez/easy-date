const assert = require("assert");
const calculateAge = require("./calculateAge");

// Test cases
const testCases = [
  {
    description: "Calculate age on the same day",
    birthDate: new Date("1990-09-24"),
    referenceDate: new Date("2023-09-24"),
    expected: 33,
  },
  {
    description: "Calculate age before birthday",
    birthDate: new Date("1990-09-24"),
    referenceDate: new Date("2023-09-23"),
    expected: 32,
  },
  {
    description: "Calculate age after birthday",
    birthDate: new Date("1990-09-24"),
    referenceDate: new Date("2023-09-25"),
    expected: 33,
  },
  {
    description: "Calculate age on a leap year birthday",
    birthDate: new Date("2000-02-29"),
    referenceDate: new Date("2024-02-29"),
    expected: 24,
  },
  {
    description: "Calculate age on a leap year birthday before February 29",
    birthDate: new Date("2000-02-29"),
    referenceDate: new Date("2023-02-28"),
    expected: 22,
  },
];

function testCalculateAge() {
  for (const testCase of testCases) {
    const actual = calculateAge(testCase.birthDate, testCase.referenceDate);
    const message = `${testCase.description} (Actual: ${actual}, Expected: ${testCase.expected})`;
    assert.strictEqual(actual, testCase.expected, message);
  }
}

testCalculateAge();

console.log("All tests for calculateAge have passed successfully.");
