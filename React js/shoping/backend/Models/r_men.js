const express = require("express");
const fs = require("fs");
const multer = require("multer")


/**  Configure Multer storage settings */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./men_img";

    // Check if the directory exists
    if (!fs.existsSync(dir)) {
      // Create the directory if it doesn't exist
      fs.mkdirSync(dir, { recursive: true });
    }

    /** Define the destination folder where uploaded files will be stored */
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    /**  Define the filename for uploaded files, including a timestamp */
    cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
  },
});

/** Create an instance of Multer with the specified storage settings */
const upload = multer({ storage });

const router = express.Router();
const men = require("../Controller/men.js");

router.get("/",men.getmens);
router.get("/:men_id",men.getmen);

router.post("/", upload.single("img"),men.insertmen)

// router.put("/:men_id",upload.single("img"),men.updatemen);
router.put("/:men_id", upload.single("img"), men.updatemen);


router.delete("/:men_id",men.deletemen);

module.exports = router;
