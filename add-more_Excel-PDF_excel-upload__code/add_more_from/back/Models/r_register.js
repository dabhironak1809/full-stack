const express = require("express");
const router = express.Router();

const register = require("../Controller/register.js")

router.get("/",register.getregisters);
router.get("/:id",register.getregister);
router.post("/",register.insertregister)
router.delete("/:id",register.deleteregister);
router.put("/:id",register.updateregister)

module.exports = router;
