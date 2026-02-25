const express = require("express");

const adminController = require("../Controller/admin_login.js");

const router = express.Router();

router.get("/", adminController.adminlogin);

module.exports = router;