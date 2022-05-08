const getMax = require("../../utils/getMax");
const unixTimeStampToDate = require("../../utils/unixTimestampToDate");
const DATA_KEYS = require("../../config/dataKeys");

module.exports = function countHighestTradingVolume(data) {
  const result = getMax(data, DATA_KEYS.trading_volume);

  return [unixTimeStampToDate(result[DATA_KEYS.date]), result[DATA_KEYS.date]];
};
