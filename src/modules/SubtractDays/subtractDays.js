/**
 * Subtract a specified number of days from a given date.
 * @param {Date} date - The initial date.
 * @param {number} days - The number of days to subtract (positive or negative).
 * @returns {Date} - A new Date object representing the result of subtracting the days.
 */
function subtractDays(date, days) {
  const result = new Date(date);
  result.setDate(date.getDate() - days);
  return result;
}

module.exports = subtractDays;
