module.exports = function countTotalDays(firstDay, lastDay) {
  const difference = lastDay - firstDay;
  const dayInMilliseconds = 86400000;

  return Math.floor(difference / dayInMilliseconds) + 1;
};
