const dateToUnixTimestamp = require("./dateToUnixTimestamp");

module.exports.editTimeRange = function (data) {
  const oneHour = 3600;
  const { startDate, endDate } = data;

  try {
    data.startDate = dateToUnixTimestamp(startDate);
    data.endDate = dateToUnixTimestamp(endDate) + oneHour;
  } catch (error) {
    return `Date is not valid.`;
  }

  return data;
};
