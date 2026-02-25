const express = require("express");
const router = express.Router();


const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./uploads";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir);
    },
    filename: function (req, file, cb) {
        // cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);

    },
});

const upload = multer({ storage })


const register = require("../Controller/register.js");

router.get("/", register.getregisters);
router.get("/:id", register.getregister);
// router.post("/", register.insertregister);

router.post("/", upload.single("attachment"), register.insertregister);



router.delete("/:id", register.deleteregister);

module.exports = router;
