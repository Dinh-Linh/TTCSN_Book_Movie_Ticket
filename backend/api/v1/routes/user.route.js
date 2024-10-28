const UserController = require("../controllers/User.controller");
const express = require("express");
const Router = express.Router();

Router.post("/login", UserController.login)
Router.post("/register", UserController.register)


module.exports = Router