const unixTimeStampToDate = require("../utils/unixTimestampToDate");
const getMax = require("../utils/getMax");
const countLongestBearish = require("./countLongestBearish");
const isAllSame = require("../utils/isAllSame");
const getMin = require("../utils/getMin");

module.exports = function countBuyAndSellDates(data) {
  const noGoodDayMessage = "There is no any good day to buy.";
  if (data.length - 1 === countLongestBearish(data)) return noGoodDayMessage;
  if (isAllSame(data)) return noGoodDayMessage;

  let buy = [null, null];
  let sell = [null, null];
  let biggestDifference = 0;
  let i = 0;
  const arrayLength = data.length;

  while (i < arrayLength) {
    const restOfArray = data.slice(i, arrayLength);
    const maxValue = getMax(restOfArray);
    const maxIndex = restOfArray.findIndex((x) => x === maxValue);
    const currentArray = restOfArray.slice(0, maxIndex);

    if (currentArray.length === 0) {
      i = i + maxIndex + 1;
      continue;
    }

    const minValue = getMin(currentArray);
    const difference = maxValue[1] - minValue[1];

    if (difference > biggestDifference) {
      biggestDifference = difference;
      buy = minValue;
      sell = maxValue;
    }
    i = i + maxIndex + 1;
  }

  return {
    buy: unixTimeStampToDate(buy[0]),
    sell: unixTimeStampToDate(sell[0]),
  };
};
