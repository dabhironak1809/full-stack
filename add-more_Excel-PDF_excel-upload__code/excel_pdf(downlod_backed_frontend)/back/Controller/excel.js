const con = require("../db.js")

const Exceljs = require("exceljs");

const downloadexcel = async (req, res) => {
    try {
        const sql = "select * from register";

        con.query(sql, async (err, data) => {
            if (err)
                return res.send(err);

            const workbook = new Exceljs.Workbook();
            const worksheet = workbook.addWorksheet("register data");

            worksheet.columns = [
                { header: "ID", key: "id", width: 10 },
                { header: "Name", key: "name", width: 20 },
                { header: "Email", key: "email", width: 30 },
                { header: "Mobile", key: "mobile", width: 20 },
            ];

            data.forEach((row) => {
                worksheet.addRow(row);
            });

            res.setHeader(
                "Content-Type",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            );

            res.setHeader(
                "Content-Disposition",
                "attachment; filename=register.xlsx"
            );

            await workbook.xlsx.write(res);
            res.end();
        });
    } catch (error) {
        console.log(error);

    }
}

module.exports = {downloadexcel}