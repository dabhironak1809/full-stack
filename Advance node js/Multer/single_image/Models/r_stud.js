const express = require("express")
const router = express.Router();

const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = "./image";
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


const stud = require("../Controller/stud.js");

router.get("/", stud.getstuds);
router.get("/:id", stud.getstud);
// router.post("/", upload.array("image",5), stud.insertstud);
router.post("/", upload.any(), stud.insertstud);

router.delete("/:id", stud.deletestud)
router.put("/:id", upload.single("image"), stud.updatestud)

module.exports = router