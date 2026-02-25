const express = require("express")
const fs = require("fs");

const multer = require("multer")
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        const dir = "./women_img";

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });

        }
        cb(null, dir)
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`)
    },
});


const upload = multer({ storage });

const router = express.Router();

const women = require("../Controller/women.js")

router.get("/", women.getwomens);
router.get("/:women_id", women.getwomen);
router.post("/", upload.single("img"), women.insertwomen);
router.put("/:women_id", women.updatawomen)
router.delete("/:women_id", women.deletewomen)

module.exports = router;
