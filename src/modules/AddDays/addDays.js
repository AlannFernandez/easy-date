/**
 * Add a specified number of days to a given date.
 * @param {Date} date - The initial date.
 * @param {number} days - The number of days to add (positive or negative).
 * @returns {Date} - A new Date object representing the result of adding the days.
 */
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}

module.exports = addDays;
