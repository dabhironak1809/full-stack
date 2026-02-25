const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: "image/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

const stud = require("../Controller/stud1.js");

router.get("/", stud.getstudes);
router.get("/:id", stud.getstude);

router.post("/", upload.any(), stud.insertstud);

// router.put("/update", upload.any(), stud.updateStud);
// Single API for single/multiple image update
// router.put("/update", upload.any(), stud.updateStud);


// ✅ Single API for single OR multiple image update both support to upload 
router.put("/update/:id", upload.any(), stud.updateStud);


module.exports = router