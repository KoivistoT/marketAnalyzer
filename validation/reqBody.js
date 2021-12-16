const DATA_KEYS = require("../config/dataKeys");

const SCHEMA = {
  startDate: "date",
  endDate: "date",
};

module.exports = function validate(data) {
  let error = null;

  const createError = (message) => {
    error = {};
    error.message = message;
  };

  for (const key in SCHEMA) {
    if (typeof data[key] === "undefined") {
      createError(`${key} is undefined.`);
      break;
    }

    if (SCHEMA[key] !== "date" && typeof data[key] !== SCHEMA[key]) {
      createError(`${key} is not valid.`);
      break;
    }

    if (SCHEMA[key] === "date") {
      const date = data[key].split("-");

      if (
        date[DATA_KEYS.year.key].length != DATA_KEYS.year.length ||
        date[DATA_KEYS.year.key] < 0
      ) {
        createError(`${key} ${DATA_KEYS.year.label} is not valid.`);
        break;
      }

      if (
        date[DATA_KEYS.month.key].length != DATA_KEYS.month.length ||
        date[DATA_KEYS.month.key] < 0
      ) {
        createError(`${key} ${DATA_KEYS.month.label} is not valid.`);
        break;
      }

      if (
        date[DATA_KEYS.day.key].length != DATA_KEYS.day.length ||
        date[DATA_KEYS.day.key] < 0
      ) {
        createError(`${key} ${DATA_KEYS.day.label} is not valid.`);
        break;
      }
    }

    if (SCHEMA[key] === "date" && new Date(data[key]) == "Invalid Date") {
      createError(`${key} is not valid.`);
      break;
    }
  }

  if (new Date(data.startDate) >= new Date(data.endDate)) {
    createError(`endDate should be bigger than startDate.`);
  }

  return error;
};
