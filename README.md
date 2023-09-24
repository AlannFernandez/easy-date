# Easy-Date: Node.js Date Management Library

Easy-Date is a straightforward Node.js date management library that provides various useful functions for handling dates effortlessly.

## Installation

You can easily install Easy-Date via npm with the following command:

```bash
npm install easy-date

Usage

Adding Days to a Date
You can use the addDays function to calculate a future date by adding a specific number of days to a given date.

const easyDate = require('easy-date');
const currentDate = new Date('2023-09-24');
const futureDate = easyDate.addDays(currentDate, 7); // Add 7 days
console.log(futureDate); // Result: Date 7 days in the future


Subtracting Days from a Date
The subtractDays function allows you to calculate a past date by subtracting a specific number of days from a given date.

const easyDate = require('easy-date');
const currentDate = new Date('2023-09-24');
const pastDate = easyDate.subtractDays(currentDate, 30); // Subtract 30 days
console.log(pastDate); // Result: Date 30 days in the past


Checking Leap Years
You can use the isLeapYear function to determine whether a specific year is a leap year or not.

const easyDate = require('easy-date');
const year = 2024;
const isLeap = easyDate.isLeapYear(year);
console.log(`Is the year ${year} a leap year? ${isLeap ? 'Yes' : 'No'}`);


Calculating Age
The calculateAge function allows you to calculate a person's age based on their date of birth and a reference date.

const easyDate = require('easy-date');
const birthDate = new Date('1990-05-15');
const referenceDate = new Date(); // Current date
const age = easyDate.calculateAge(birthDate, referenceDate);
console.log(`Age: ${age.years} years, ${age.months} months, and ${age.days} days`);



Available Functions
Easy-Date offers the following functions:

getFormats(): Get all date formats for the current date.
addDays(date, days): Add a specified number of days to a date.
subtractDays(date, days): Subtract a specified number of days from a date.
isLeapYear(year): Determine if a year is a leap year.
calculateAge(birthDate, referenceDate): Calculate age based on the date of birth and a reference date.


Contributions
Contributions to Easy-Date are welcome! If you have ideas to enhance this library or encounter any issues, please don't hesitate to contribute. Here are ways you can help:

Report Issues: If you find a bug or have a suggestion, open an issue in the repository.

Submit Pull Requests: If you'd like to contribute code, you can open a pull request with your changes. Please adhere to any contribution guidelines (if provided) and include appropriate tests.

Improve Documentation: Documentation is essential. If you can improve existing documentation or add more details, it's highly appreciated.

Share the Library: If you find Easy-Date useful, please share it with other developers. The more users, the more feedback and potential contributions.

Please follow our code of conduct when contributing.

Thank you for contributing to Easy-Date!

License
This project is licensed under the MIT License - see the LICENSE file for details.

You can use this README.md as a template and customize it with specific information about your "easy-date" library, usage examples, and any additional details you'd like to provide to users.
