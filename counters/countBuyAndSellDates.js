const unixTimeStampToDate = require("../utils/unixTimestampToDate");
const getMax = require("../utils/getMax");
const countLongestBearish = require("./countLongestBearish");

module.exports = function countBuyAndSellDates(data) {
  if (data.length - 1 === countLongestBearish(data))
    return "There is no any good day to buy.";

  let biggestValueDifference = 0;
  let buy = [null, null];
  let sell = [null, null];

  const arrayLength = data.length;

  for (let i = 0; i < arrayLength; i++) {
    const restOfArray = data.slice(i, arrayLength);
    const currentDay = data[i];

    if (restOfArray.some((day) => day[1] > currentDay[1])) {
      const maxAfter = getMax(restOfArray);
      const difference = maxAfter[1] - currentDay[1];

      if (difference > biggestValueDifference) {
        biggestValueDifference = difference;
        buy = currentDay;
        sell = maxAfter;
      }
    }
  }

  return {
    buy: unixTimeStampToDate(buy[0]),
    sell: unixTimeStampToDate(sell[0]),
  };
};
