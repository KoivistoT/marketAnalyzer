module.exports = function unixTimeStampToDate(date) {
  return new Date(date).toISOString().slice(0, 10);
};
