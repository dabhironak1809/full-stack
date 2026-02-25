const express = require("express");
const router = express.Router();

const stude = require("../Controller/stud.js");


router.get("/",stude.getstuds);
router.get("/:s_id",stude.getstud)
router.delete("/:s_id",stude.deletstud);
router.post("/",stude.insertstud);
router.put("/:s_id",stude.updatestude);

module.exports = router;
