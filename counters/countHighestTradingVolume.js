const getMax = require("../utils/getMax");
const unixTimeStampToDate = require("../utils/unixTimestampToDate");

module.exports = function countHighestTradingVolume(data) {
  const result = getMax(data);

  return [unixTimeStampToDate(result[0]), result[1]];
};
