module.exports = function getMax(data) {
  return data.reduce((a, b) => (a[1] > b[1] ? a : b));
};
