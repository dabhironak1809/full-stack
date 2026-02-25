const express = require("express");

const adminController = require("../Controller/a.js");

const admin = express.Router();

admin.get("/",adminController.test_admin);

module.exports = admin;
