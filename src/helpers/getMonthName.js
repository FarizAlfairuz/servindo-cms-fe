export const getMonthName = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateData = new Date(date);
  const month = months[dateData.getMonth()];

  return month;
};
