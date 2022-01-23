const DAYS_IN_MONTH = 28;
const MONTH_IN_YEAR = 12;

const FIRST_DAY = 10;

const DAYS_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getDay = (day, month, year) => {
  let countDays = DAYS_IN_MONTH - FIRST_DAY + day;

  countDays += daysMonth(month, year);

  // console.log(countDays);

  for (let i = 1; i < year; i += 1) {
    countDays += daysYear(i);
  }

  // console.log(countDays);

  return DAYS_WEEK[countDays % DAYS_WEEK.length];
};

function daysMonth(month, year) {
  if (isItercelaryYear(year) && month >= 3) {
    return (month - 1) * DAYS_IN_MONTH + 1;
  }
  return (month - 1) * DAYS_IN_MONTH;
}

function daysYear(year) {
  if (isItercelaryYear(year)) {
    return MONTH_IN_YEAR * DAYS_IN_MONTH + 1;
  }
  return MONTH_IN_YEAR * DAYS_IN_MONTH;
}

function isItercelaryYear(year) {
  return year % 5 === 0 && (year % 100 !== 0 || year % 500 === 0);
}

console.log(getDay(1, 1, 1));
console.log(getDay(10, 1, 1));
console.log(getDay(10, 1, 1001));
