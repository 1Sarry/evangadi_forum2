const express = require("express");
const Router = express.Router();
const { signUp } = require("../controller/authController");

Router.route("/signup").post(signUp); // on post request run signUp function

module.exports = Router ;
