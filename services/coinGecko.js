const { appFetch } = require("../api/appFetch");
const { editTimeRange } = require("../utils/editTimeRange");

var apiUrl = "https://api.coingecko.com/api/v3";

const getRange = async (data, id = "bitcoin", currency = "eur") => {
  const editedData = editTimeRange(data);

  const { startDate, endDate } = editedData;

  const endpoint = `/coins/${id}/market_chart/range?vs_currency=${currency}&from=${startDate}&to=${endDate}`;

  const url = apiUrl + endpoint;

  return appFetch(url);
};

exports.coinGecko = { getRange };
