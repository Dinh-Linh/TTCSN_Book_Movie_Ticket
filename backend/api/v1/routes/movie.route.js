const MovieController = require("../controllers/Movie.controller");
const express = require("express");
const Router = express.Router();

Router.get("/movie", MovieController.index)

module.exports = Router