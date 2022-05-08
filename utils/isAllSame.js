module.exports = function isAllSame(data, key) {
  return data.every((day) => day[key] === data[0][key]);
};
