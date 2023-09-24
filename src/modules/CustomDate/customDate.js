/**
 * Custom date formatter function.
 * @param {Date} date - The date to be formatted.
 * @returns {Object} - An object containing formatted date and time information.
 */
function customDate(date) {
  // Days of the week in text
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Months in text
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Extract date information
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // Create and return the formatted object
  const formattedDate = {
    date: {
      "day of the week": dayOfWeek,
      day: day,
      month: month,
      year: year,
    },
    time: {
      hour: hour,
      minute: minute,
      second: second,
    },
  };

  return formattedDate;
}
module.exports = customDate;