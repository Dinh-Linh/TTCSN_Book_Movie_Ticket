const MovieController = require("../controllers/Movie.controller");
const express = require("express");
const Router = express.Router();

Router.get("/movies", MovieController.index)

module.exports = Router