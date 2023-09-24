/**
 * Get various date formats for the current date.
 * @returns {Object} - An object containing different date formats.
 */
function getAllDateFormats() {
  const today = new Date();
  return {
    originalDate: today,
    "ISO 8601": today.toISOString(),
    "Day/Month/Year": `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`,
    "Month/Day/Year": `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`,
    "Year/Month/Day": `${today.getFullYear()}/${
      today.getMonth() + 1
    }/${today.getDate()}`,
    "Day of the Week, Month Day Year": today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    Abbreviated: today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }),
    "Unix Timestamp": Math.floor(today.getTime() / 1000),
  };
}

module.exports = getAllDateFormats;
