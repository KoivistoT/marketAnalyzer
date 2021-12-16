module.exports = function getMax(data, key) {
  return data.reduce((a, b) =>
    (key ? a[key] : a) < (key ? b[key] : b) ? a : b
  );
};
