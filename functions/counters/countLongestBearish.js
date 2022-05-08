const DATA_KEYS = require("../../config/dataKeys");

module.exports = function countLongestBearish(data) {
  let longestBearishLenght = 0;
  let currentLenght = 0;

  const shouldIncrease = (currentData, previousData) => {
    if (
      currentData[DATA_KEYS.trading_volume] <
      previousData[DATA_KEYS.trading_volume]
    ) {
      currentLenght += 1;
    } else {
      currentLenght = 0;
    }
  };

  data.reduce((previous, current) => {
    shouldIncrease(current, previous);

    if (currentLenght > longestBearishLenght) {
      longestBearishLenght = currentLenght;
    }

    return current;
  });

  return longestBearishLenght;
};
