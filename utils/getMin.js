module.exports = function getMax(data, key) {
  const getIsKey = (itemKey, item) => {
    if (itemKey) {
      return item[itemKey];
    } else {
      return item;
    }
  };

  return data.reduce((a, b) => (getIsKey(key, a) < getIsKey(key, b) ? a : b));
};
