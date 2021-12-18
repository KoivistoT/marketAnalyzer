const DATA_KEYS = require("../config/dataKeys");

const SCHEMA = {
  startDate: "date",
  endDate: "date",
};

module.exports = function validate(data) {
  let error;

  for (const key in SCHEMA) {
    if (typeof data[key] === "undefined") {
      error = createError(`${key} is undefined.`);
      break;
    }

    if (SCHEMA[key] === "date") {
      error = validateDate(data, key);
      if (error) {
        break;
      }
    }
  }

  return error;
};

const createError = (message) => {
  error = {};
  error.message = message;
  return error;
};

const validateDate = (data, key) => {
  const date = data[key].split("-");

  if (
    date[DATA_KEYS.year.key].length != DATA_KEYS.year.length ||
    date[DATA_KEYS.year.key] < 0
  ) {
    return createError(`${key} ${DATA_KEYS.year.label} is not valid.`);
  }

  if (
    date[DATA_KEYS.month.key].length != DATA_KEYS.month.length ||
    date[DATA_KEYS.month.key] < 0
  ) {
    return createError(`${key} ${DATA_KEYS.month.label} is not valid.`);
  }

  if (
    date[DATA_KEYS.day.key].length != DATA_KEYS.day.length ||
    date[DATA_KEYS.day.key] < 0
  ) {
    return createError(`${key} ${DATA_KEYS.day.label} is not valid.`);
  }

  if (new Date(data[key]) == "Invalid Date") {
    return createError(`${key} is not valid.`);
  }

  if (new Date(data.startDate) >= new Date(data.endDate)) {
    return createError(`endDate should be bigger than startDate.`);
  }

  return null;
};
