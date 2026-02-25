// const XLSX = require("xlsx");
// const db = require("../db.js");
// const fs = require("fs");

// const uploadexcel = (req, res) => {
//     try {
//         const filepath = req.file.path;
//         // read excel 
//         const workbook = XLSX.readFile(filepath);
//         const sheetName = workbook.SheetNames[0];
//         const sheetData = XLSX.utils.sheet_to_json(
//             workbook.Sheets[sheetName]
//         );
//         //loop and insert data databse ni andart 
//         // 1 st declare
//         sheetData.forEach((row) => {
//             const sql = "insert into college(college_name,email)values(?,?)";
//             db.query(sql, [row.college_name, row.email])
//         });

//         //  2 nd declare

//         //  sheetData.forEach((row) => {
//         //     const sql = "INSERT INTO college SET ?";
//         //     db.query(sql, row, (err) => {
//         //         if (err) console.log(err);
//         //     });
//         // });

//         // bane rite thi sake ama insert nu 



//         res.send("excel data imported succesully");
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("error uploading file");
//     }
// }

// module.exports = { uploadexcel }
 
// upload folder ma store na kare ne te temp memory ma thi data ne read kari ne upload kare 

const XLSX = require("xlsx");
const db = require("../db.js");

const uploadexcel = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        // ✅ Read from memory buffer (IMPORTANT)
        const workbook = XLSX.read(req.file.buffer, { type: "buffer" });

        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName]
        );

        console.log("Sheet Data:", sheetData);

        if (sheetData.length === 0) {
            return res.status(400).send("Excel file is empty");
        }

        const values = sheetData.map(row => [
            row.college_name,
            row.email
        ]);

        const sql = "INSERT INTO college (college_name, email) VALUES ?";

        db.query(sql, [values], (err, result) => {
            if (err) {
                console.log("DB ERROR:", err);
                return res.status(500).send(err.message);
            }

            res.send(`Inserted ${result.affectedRows} rows successfully 🚀`);
        });

    } catch (error) {
        console.log("SERVER ERROR:", error);
        res.status(500).send("Error processing file");
    }
};

module.exports = { uploadexcel };