const express = require("express")
const fs = require("fs");

const multer = require("multer")
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        const dir = "./mobile_img";

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

const mobile = require("../Controller/mobile.js");

router.get("/", mobile.getmobiles);
router.get("/:mobile_id", mobile.getmobile);
router.post("/", upload.single("img"), mobile.insermobile)
router.put("/:mobile_id", mobile.updatemobile);
router.delete("/:mobile_id", mobile.deletemobile);

module.exports = router;
