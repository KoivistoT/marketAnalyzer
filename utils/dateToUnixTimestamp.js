module.exports = function dateToUnixTimestamp(date) {
  const milliseconds = 1000;
  return new Date(date).valueOf() / milliseconds;
};
