module.exports = function validate(data) {
  let error = null;

  const schema = {
    startDate: "date",
    endDate: "date",
  };

  const createError = (message) => {
    error = {};
    error.message = message;
  };

  for (const key in schema) {
    if (typeof data[key] === "undefined") {
      createError(`${key} is undefined.`);
      break;
    }

    if (schema[key] !== "date" && typeof data[key] !== schema[key]) {
      createError(`${key} is not valid.`);
      break;
    }

    if (schema[key] === "date") {
      const date = data[key].split("-");

      if (date[0].length != 4 || date[0] < 0) {
        createError(`${key} is not valid.`);
        break;
      }

      if (date[1].length != 2 || date[1] < 0) {
        createError(`${key} is not valid.`);
        break;
      }

      if (date[2].length != 2 || date[2] < 0) {
        createError(`${key} is not valid.`);
        break;
      }
    }

    if (schema[key] === "date" && new Date(data[key]) == "Invalid Date") {
      createError(`${key} is not valid.`);
      break;
    }
  }

  if (new Date(data.startDate) >= new Date(data.endDate))
    createError(`endDate should be bigger than startDate.`);

  return error;
};
