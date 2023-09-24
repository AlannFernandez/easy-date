const assert = require("assert");
const formatDate = require("./formatDate");

// Test cases
const testCases = [
  {
    description: "Format a date",
    inputDate: new Date("2023-09-24 19:22:28"),
    expectedOutput: {
      date: {
        "day of the week": "Saturday",
        day: 24,
        month: "September",
        year: 2023,
      },
      time: {
        hour: 19,
        minute: 22,
        second: 28,
      },
    },
  },
  // Add more test cases as needed
];

function testFormatDate() {
  for (const testCase of testCases) {
    const actualOutput = formatDate(testCase.inputDate);
    const message = `${testCase.description} (Actual: ${JSON.stringify(
      actualOutput
    )}, Expected: ${JSON.stringify(testCase.expectedOutput)})`;
    assert.deepStrictEqual(actualOutput, testCase.expectedOutput, message);
  }
}

testFormatDate();

console.log("All tests for formatDate have passed successfully.");
