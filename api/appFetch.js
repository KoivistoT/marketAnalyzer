const fetch = require("node-fetch");

module.exports.appFetch = async (url) => {
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};
