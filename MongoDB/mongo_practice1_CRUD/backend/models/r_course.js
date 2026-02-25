const express = require("express");
const router = express.Router();
const courseController = require("../Controller/course.js");

router.get("/", courseController.getcourses);
router.post("/", courseController.insertcourse);
router.put("/:_id", courseController.updatecourse);
router.delete("/:_id", courseController.deletecourse);

module.exports = router;