const express = require("express");
const Router = express.Router();
const { signUp, logIn } = require("../controller/authController");

Router.route("/signup").post(signUp); // on post request run signUp function
Router.route("/login").post(logIn);

module.exports = Router;
