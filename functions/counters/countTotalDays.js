module.exports = function countTotalDays(firstDay, lastDay) {
  const difference = lastDay - firstDay;
  const dayInMilliseconds = 86400000;
  const totalDays = Math.floor(difference / dayInMilliseconds) + 1;

  return totalDays;
};
