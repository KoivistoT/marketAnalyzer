const fetch = require("node-fetch");

module.exports.appFetch =  (url) => {
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
