 const express = require("express");

const router = express.Router();

const registeruser = require("../Controller/user_register.js");

router.get("/",registeruser.userallget);
router.get("/:user_id",registeruser.userget);
router.delete("/:user_id",registeruser.userdelete);

// nodemail to register a email to sent a email on your email
router.post("/",registeruser.userdatainsert);


module.exports = router;