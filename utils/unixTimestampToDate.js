module.exports = function unixTimeStampToDate(date) {
  var dateFormat = new Date(date).toISOString().slice(0, 10);
  return dateFormat;
};
