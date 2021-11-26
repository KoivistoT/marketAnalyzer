const countTotalDays = require("../counters/countTotalDays");

module.exports = function getDailyValues(data) {
  const totalDays = countTotalDays(data[0][0], data[data.length - 1][0]);

  let dailyValues = data;

  if (totalDays < data.length) {
    dailyValues = data.reduce(
      (collector, current) => {
        if (
          new Date(current[0]).getUTCDay() !==
          new Date(collector[collector.length - 1][0]).getUTCDay()
        )
          collector.push(current);

        return collector;
      },
      [data[0]]
    );
  }

  return dailyValues;
};
