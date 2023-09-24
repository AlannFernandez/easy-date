/**
 * Detect the current time zone.
 * @returns {Date} - The current time zone.
 */
function detectTimeZone() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timeZone;
}
module.exports = detectTimeZone;
