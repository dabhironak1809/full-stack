const express = require("express");
const router = express.Router();

const register = require("../Controller/register.js")
const excel = require("../Controller/excel.js");
const pdf = require("../Controller/pdf.js");


// Export Routes
router.get("/export/excel", excel.downloadexcel);
router.get("/export/pdf", pdf.downloadPDF);

router.get("/",register.getregisters);
router.get("/:id",register.getregister);
router.post("/",register.insertregister)
router.delete("/:id",register.deleteregister);
router.put("/:id",register.updateregister)

module.exports = router;
