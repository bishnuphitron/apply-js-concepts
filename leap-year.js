// Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800, and 1900 are not leap years, but the years 1600 and 2000 are.

function isLeapYear(year) {
  if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }
  return false;
}

const myYear = 1700;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year: ', isMyYearLeapYear);