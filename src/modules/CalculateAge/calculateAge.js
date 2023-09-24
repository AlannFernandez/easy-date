/**
 * Calculate a person's age based on their birth date and a reference date.
 * @param {Date} birthDate - The person's birth date.
 * @param {Date} referenceDate - The reference date to calculate the age against.
 * @returns {number} - The calculated age as a whole number.
 */
function calculateAge(birthDate, referenceDate) {
  const birthYear = birthDate.getFullYear();
  const referenceYear = referenceDate.getFullYear();
  const age = referenceYear - birthYear;

  if (
    referenceDate <
    new Date(referenceYear, birthDate.getMonth(), birthDate.getDate())
  ) {
    return age - 1;
  }

  return age;
}
module.exports = calculateAge;
