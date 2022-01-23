const daysWeek = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];

const daysInMonth = 28;
const monthYear = 12;
const daysYear = 336;
// const daysHighYear = 337;

const defineHighYear = (year) => {
  if (year % 500 === 0 || (year % 5 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};
