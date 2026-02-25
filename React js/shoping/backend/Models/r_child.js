const express = require("express")
const fs = require("fs");

const multer = require("multer")
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        const dir = "./child_img";

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

const child = require("../Controller/child.js");

router.get("/",child.getchilds);
router.get("/:child_id",child.getchild)
router.post("/",upload.single("img"),child.insertchild)
router.put("/:child_id",child.updatechild)
router.delete("/:child_id",child.deletechild);

module.exports = router;


