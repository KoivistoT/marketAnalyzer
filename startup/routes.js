const express = require("express");
const analyze = require("../routes/analyze");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/analyze", analyze);
  app.use(error);
};
