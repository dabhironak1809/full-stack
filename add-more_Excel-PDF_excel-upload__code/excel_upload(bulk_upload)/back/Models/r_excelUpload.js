// const express = require("express");
// const router = express.Router();

// const multer = require("multer");
// const fs = require("fs");

// const excelupload = require("../Controller/excelUpload.js");

// // store config
// // Ensure uploads folder exists
// if (!fs.existsSync("uploads")) {
//   fs.mkdirSync("uploads");
// }

// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"uploads/")
//     },
//     filename:function(req,file,cb){
//         cb(null,Date.now()+ "-"+file.originalname);
//     },
// });

// const upload = multer({storage:storage});

// router.post("/upload-excel",upload.single("file"),excelupload.uploadexcel)

// module.exports = router;


// --------- ama upload nai kartu te aem nam j database ma store kare che ....

const express = require("express");
const router = express.Router();

const multer = require("multer");
const excelupload = require("../Controller/excelUpload.js");

// Use Memory Storage (NO file saved in folder)
const upload = multer({
    storage: multer.memoryStorage()
});

router.post(
    "/upload-excel",
    upload.single("file"),
    excelupload.uploadexcel
);

module.exports = router;