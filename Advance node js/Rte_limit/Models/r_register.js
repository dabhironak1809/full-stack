const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

const { registerLimiter,apiLimiter } = require("../rateLimit.js");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./uploads";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
    },
});

const upload = multer({ storage })

const register = require("../Controller/register.js");

router.get("/", apiLimiter, register.getregisters);
// router.get("/:id",apiLimiter, register.getregister);

// only sent a email
// router.post("/", register.insertregister);

// this sent a email with attach a image 
// router.post("/", upload.single("attachment"), register.insertregister);

router.post("/", registerLimiter, register.insertregister)


module.exports = router;