const DATA_KEYS = require("../../config/dataKeys");

module.exports = function countLongestBearish(data) {
  let longestBearishLenght = 0;
  let currentLenght = 0;

  data.reduce((previous, current) => {
    current[DATA_KEYS.trading_volume] < previous[DATA_KEYS.trading_volume]
      ? (currentLenght += 1)
      : (currentLenght = 0);

    if (currentLenght > longestBearishLenght)
      longestBearishLenght = currentLenght;

    return current;
  });

  return longestBearishLenght;
};
