const unixTimeStampToDate = require("../../utils/unixTimestampToDate");
const getMax = require("../../utils/getMax");
const countLongestBearish = require("./countLongestBearish");
const isAllSame = require("../../utils/isAllSame");
const getMin = require("../../utils/getMin");
const DATA_KEYS = require("../../config/dataKeys");

const NO_GOOD_DAY_MESSAGE = "There is no any good day to buy.";

module.exports = function countBuyAndSellDates(data) {
  if (data.length - 1 === countLongestBearish(data)) {
    return NO_GOOD_DAY_MESSAGE;
  }

  if (isAllSame(data, DATA_KEYS.trading_volume)) {
    return NO_GOOD_DAY_MESSAGE;
  }

  let buy = [null, null];
  let sell = [null, null];
  let biggestDifference = 0;
  let i = 0;
  const arrayLength = data.length;

  while (i < arrayLength) {
    const restOfArray = data.slice(i, arrayLength);
    const maxData = getMax(restOfArray, DATA_KEYS.trading_volume);
    const maxIndex = restOfArray.findIndex((day) => day === maxData);
    const currentArray = restOfArray.slice(0, maxIndex);

    if (currentArray.length === 0) {
      i = i + maxIndex + 1;
      continue;
    }

    const minData = getMin(currentArray, DATA_KEYS.trading_volume);
    const difference =
      maxData[DATA_KEYS.trading_volume] - minData[DATA_KEYS.trading_volume];

    if (difference > biggestDifference) {
      biggestDifference = difference;
      buy = minData;
      sell = maxData;
    }
    i = i + maxIndex + 1;
  }

  return {
    buy: unixTimeStampToDate(buy[DATA_KEYS.date]),
    sell: unixTimeStampToDate(sell[DATA_KEYS.date]),
  };
};
