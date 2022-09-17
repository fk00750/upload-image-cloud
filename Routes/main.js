const express = require("express");

const Router = express.Router();


Router.route("/user").post(async (req, res) => {
  res.send("--- User Created ---")
});

Router.route("/user").get(async (req, res) => {
  res.send("--- Get All User ---");
});

module.exports = Router;
