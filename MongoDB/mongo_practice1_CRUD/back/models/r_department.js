const express = require("express");
const router = express.Router();
const deptController = require("../Controller/department.js");

router.get("/", deptController.getdepartments);
router.post("/", deptController.insertdepartment);

module.exports = router;