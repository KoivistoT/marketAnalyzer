module.exports = function countLongestBearish(data) {
  let longestBearishLenght = 0;
  let currentLenght = 0;

  data.reduce((previous, current) => {
    current[1] < previous[1] ? (currentLenght += 1) : (currentLenght = 0);

    if (currentLenght > longestBearishLenght)
      longestBearishLenght = currentLenght;

    return current;
  });

  return longestBearishLenght;
};
