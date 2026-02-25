const XLSX = require("xlsx");
const db = require("../db.js");

const uploadexcel = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        // 🔥 Read Excel from memory buffer
        const workbook = XLSX.read(req.file.buffer, { type: "buffer" });

        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName]
        );

        if (sheetData.length === 0) {
            return res.status(400).send("Excel file is empty");
        }

        // Convert to 2D array for bulk insert
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


// ------------------

const XLSX = require("xlsx");
const db = require("../db.js");

const uploadexcel = (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded");
        }

        // 🔥 Read Excel from memory buffer
        const workbook = XLSX.read(req.file.buffer, { type: "buffer" });

        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName]
        );

        if (sheetData.length === 0) {
            return res.status(400).send("Excel file is empty");
        }

        // Convert to 2D array for bulk insert
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