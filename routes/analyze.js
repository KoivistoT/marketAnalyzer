const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../middleware/async");
const { coinGecko } = require("../services/coinGeckoService");
const countBuyAndSellDates = require("../functions/counters/countBuyAndSellDates");
const countHighestTradingVolume = require("../functions/counters/countHighestTradingVolume");
const countLongestBearish = require("../functions/counters/countLongestBearish");
const getDailyValues = require("../functions/getters/getDailyValues");
const validate = require("../validate/reqBody");
const noDataMessage = `Could not provide any data with the given dates.`;

router.get(
  "/longest_bearish",
  asyncMiddleware(async (req, res) => {
    const error = validate(req.body);
    if (error) return res.status(400).send(error.message);

    const { prices, error: fetchError } = await coinGecko.getRange(req.body);
    if (fetchError) return res.status(404).send(fetchError);
    if (prices.length === 0) return res.status(404).send(noDataMessage);

    const values = getDailyValues(prices);
    const sum = countLongestBearish(values).toString();

    res.status(200).send(sum);
  })
);

router.get(
  "/highest_trading_volume",
  asyncMiddleware(async (req, res) => {
    const error = validate(req.body);
    if (error) return res.status(400).send(error.message);

    const { total_volumes, error: fetchError } = await coinGecko.getRange(
      req.body
    );
    if (fetchError) return res.status(404).send(fetchError);
    if (total_volumes.length === 0) return res.status(404).send(noDataMessage);

    const values = getDailyValues(total_volumes);
    const result = countHighestTradingVolume(values);

    res.status(200).send(result);
  })
);

router.get(
  "/buy_and_sell",
  asyncMiddleware(async (req, res) => {
    const error = validate(req.body);
    if (error) return res.status(400).send(error.message);

    const { prices, error: fetchError } = await coinGecko.getRange(req.body);

    if (fetchError) return res.status(404).send(fetchError);
    if (prices.length === 0) return res.status(404).send(noDataMessage);

    const values = getDailyValues(prices);
    const result = countBuyAndSellDates(values);

    res.status(200).send(result);
  })
);

module.exports = router;
