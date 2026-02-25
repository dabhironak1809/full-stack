const express = require("express");
const fs = require("fs");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./kitchan_img";

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


const router = express.Router();

const kitchan = require("../Controller/kitchan.js");

router.get("/", kitchan.getkitchans);
router.get("/:kitchan_id", kitchan.getkitchan);
router.post("/", upload.single("img"), kitchan.inserkitchan)
router.put("/:kitchan_id", kitchan.updatekitchan);
router.delete("/:kitchan_id", kitchan.deletekitchan);

module.exports = router;
