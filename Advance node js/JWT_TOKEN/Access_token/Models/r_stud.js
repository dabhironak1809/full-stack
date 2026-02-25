const express = require("express");

const router = express.Router();

const stud = require("../Controller/stud.js");


const verifytoken = require("../Middleware/auth.js");
router.use(verifytoken)

router.get("/",stud.getstuds);
router.get("/:s_id",stud.getstud);
router.post("/",stud.insertstud);
router.put("/:s_id",stud.updatestud)
router.delete("/:s_id",stud.deletestud);

module.exports = router