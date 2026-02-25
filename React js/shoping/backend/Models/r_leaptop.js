const express = require("express")
const fs = require("fs");

const multer = require("multer")
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        const dir = "./leaptop_img";

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

const leaptop = require("../Controller/leaptop.js");

router.get("/",leaptop.getleaptops);
router.get("/:leaptop_id",leaptop.getleaptop);
router.post("/",upload.single("img"),leaptop.inserleaptop)
router.put("/:leaptop_id",leaptop.updateleaptop);
router.delete("/:leaptop_id",leaptop.deleteleaptop);

module.exports = router;
