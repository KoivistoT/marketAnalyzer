module.exports = function isAllSame(data) {
  return data.every((x) => x[1] === data[0][1]);
};
