const express = require("express");
const router = express.Router();

const emp = require("../Controller/emp.js");

// tokon required to use a crud perfom this auth1 code allocate to tokon required 
const verifytoken1 = require("../middleware/auth.js")
router.use(verifytoken1);

router.get("/", emp.getemps);
router.get("/:emp_id", emp.getemp)
router.delete("/:emp_id", emp.deletemp);
router.post("/", emp.insertemp);
router.put("/:emp_id", emp.updateemp);

module.exports = router;
