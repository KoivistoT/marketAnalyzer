module.exports = function getMax(data, key) {
  const getIsKey = (key, item) => {
    if (key) {
      return item[key];
    } else {
      return item;
    }
  };

  return data.reduce((a, b) => (getIsKey(key, a) < getIsKey(key, a) ? a : b));
};
