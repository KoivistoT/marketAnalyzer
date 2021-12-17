const countTotalDays = require("../counters/countTotalDays");
const DATA_KEYS = require("../../config/dataKeys");

module.exports = function getDailyValues(data) {
  const totalDays = countTotalDays(
    data[DATA_KEYS.first_object][DATA_KEYS.date],
    data[data.length - 1][DATA_KEYS.date]
  );

  let dailyValues = data;

  if (totalDays < data.length) {
    dailyValues = data.reduce(
      (collector, current) => {
        if (
          new Date(current[DATA_KEYS.date]).getUTCDate() !==
          new Date(collector[collector.length - 1][DATA_KEYS.date]).getUTCDate()
        )
          collector.push(current);

        return collector;
      },
      [data[DATA_KEYS.first_object]]
    );
  }

  return dailyValues;
};
