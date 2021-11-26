module.exports = function dateToUnixTimestamp(date) {
  const milliseconds = 1000;
  const unixFormat = new Date(date).valueOf() / milliseconds;
  return unixFormat;
};
