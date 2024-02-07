import PropTypes from "prop-types";

const DateConverter = ({ gregorianDate }) => {
  // Assumes gregorianDate is in the format "MM/DD/YYYY"
  const [month, day, year] = gregorianDate.split("/").map(Number);

  // Configuration for Ethiopian calculation
  const ethiopianStartYear = 7; // Ethiopian calendar is 7 or 8 years behind
  const ethiopianLeapYearCycle = 4; // Ethiopian leap year cycle
  const ethiopianLeapYearOffset = 112; // Ethiopian specific offset days

  // Calculate leap years in Gregorian calendar till given date
  const gregorianLeapYears =
    Math.floor((year - 1) / 4) -
    Math.floor((year - 1) / 100) +
    Math.floor((year - 1) / 400);

  // Calculate total number of days till given date in Gregorian calendar
  let gregorianCalendarDays = year * 365 + gregorianLeapYears + day;

  // Adding the days of each month by assuming each month have 30 days
  for (let m = 1; m < month; m++) {
    gregorianCalendarDays += new Date(year, m, 0).getDate();
  }

  // Calculate leap years in Ethiopian calendar till given date
  const ethiopianLeapYears = Math.floor(
    (year + ethiopianStartYear - 1) / ethiopianLeapYearCycle
  );

  // Calculate total number of days till given date in Ethiopian calendar
  let ethiopianCalendarDays =
    gregorianCalendarDays - ethiopianLeapYearOffset - ethiopianLeapYears;

  // Calculate number of leap years passed in Ethiopian calendar
  const leapYearsPassed = Math.floor((ethiopianCalendarDays - 2) / 1461);

  // Adjust the number of days by removing the leap years day (extra day)
  ethiopianCalendarDays -= leapYearsPassed;

  // Now calculate Ethiopian year
  let ethiopianYear =
    Math.floor(ethiopianCalendarDays / 365) + ethiopianStartYear;
  ethiopianCalendarDays = ethiopianCalendarDays % 365;

  // Adjust if year change is there
  if (ethiopianCalendarDays === 0) {
    ethiopianYear -= 1;
    ethiopianCalendarDays = 365;
  }

  // Determine Ethiopian month and day
  let ethiopianMonth = Math.floor((ethiopianCalendarDays - 1) / 30) + 1;
  let ethiopianDay = ((ethiopianCalendarDays - 1) % 30) + 1;

  // Ethiopian month names
  const ethiopianMonthNames = [
    "Meskerem",
    "Tikimt",
    "Hidar",
    "Tahsas",
    "Tir",
    "Yekatit",
    "Megabit",
    "Miazia",
    "Genbot",
    "Sene",
    "Hamle",
    "Nehase",
    "Pagumae",
  ];

  const ethiopianMonthName = ethiopianMonthNames[ethiopianMonth - 1];

  return (
    <div>
      {ethiopianMonthName} {ethiopianDay}, {ethiopianYear}
    </div>
  );
};

DateConverter.propTypes = {
  gregorianDate: PropTypes.string.isRequired,
};

export default DateConverter;
