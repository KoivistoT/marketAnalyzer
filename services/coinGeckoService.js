const { appFetch } = require("../functions/appFetch");
const { editTimeRange } = require("../utils/editTimeRange");

apiUrl = "https://api.coingecko.com/api/v3";

getRange = async (data, id = "bitcoin", currency = "eur") => {
  const editedData = editTimeRange(data);
  const { startDate, endDate } = editedData;

  const endpoint = `/coins/${id}/market_chart/range?vs_currency=${currency}&from=${startDate}&to=${endDate}`;

  const url = apiUrl + endpoint;
  return await appFetch(url);
};

exports.coinGecko = { getRange };
