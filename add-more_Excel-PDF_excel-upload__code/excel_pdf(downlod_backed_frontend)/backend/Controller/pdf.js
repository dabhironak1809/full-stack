// const con = require("../db.js");

// const PDFDocument = require("pdfkit");

// const downloadPDF = (req, res) => {
//     const sql = "select * from register";
//     con.query(sql, (err, data) => {
//         if (err)
//             return res.send(err)

//         const doc = new PDFDocument();

//         res.setHeader("Content-Type", "application/pdf");
//         res.setHeader(
//             "Content-Disposition",
//             "attachment; filename=register.pdf"
//         );

//         doc.pipe(res);

//         doc.fontSize(18).text("register data report", { align: "center" }).moveDown(2);

//         // table Header

//         const tableTop = 120;
//         const itemSpacing = 30;

//         doc
//             .fontSize(12)
//             .text("ID", 50, tableTop)
//             .text("Name", 100, tableTop)
//             .text("Email", 220, tableTop)
//             .text("Mobile", 380, tableTop);


//         // Line under header
//         doc
//             .moveTo(50, tableTop + 15)
//             .lineTo(550, tableTop + 15)
//             .stroke();

//         // Table Rows
//         let y = tableTop + 25;



//         data.forEach((row) => {
//             doc
//                 .fontSize(10)
//                 .text(row.id, 50, y)
//                 .text(row.name, 100, y)
//                 .text(row.email, 220, y)
//                 .text(row.mobile, 380, y);

//             y += itemSpacing;

//             // New page if space full
//             if (y > 750) {
//                 doc.addPage();
//                 y = 50;
//             }
//         });
        
//         doc.end();
//     })
// }

// module.exports = { downloadPDF }



const PDFDocument = require("pdfkit");
const db = require("../db");

const downloadPDF = async (req, res) => {
  try {
    const sql = "SELECT * FROM register";

    db.query(sql, (err, data) => {
      if (err) return res.send(err);

      const doc = new PDFDocument({ margin: 40, size: "A4" });

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=Register_Report.pdf"
      );

      doc.pipe(res);

      // ===== TITLE =====

      doc
        .fillColor("#2E86C1")
        .fontSize(22)
        .text("REGISTER REPORT", { align: "center" })
        .moveDown(0.5);

      doc
        .fillColor("gray")
        .fontSize(10)
        .text(`Generated on: ${new Date().toLocaleString()}`, {
          align: "right",
        })
        .moveDown(2);

      const tableTop = 150;
      const rowHeight = 30;

      // ===== TABLE HEADER BACKGROUND =====
      
      doc
        .rect(40, tableTop, 520, rowHeight)
        .fill("#2E86C1");

      doc
        .fillColor("white")
        .fontSize(12)
        .font("Helvetica-Bold")
        .text("ID", 50, tableTop + 8)
        .text("Name", 100, tableTop + 8)
        .text("Email", 220, tableTop + 8)
        .text("Mobile", 400, tableTop + 8);

      let y = tableTop + rowHeight;

      // ===== TABLE ROWS =====
      data.forEach((row, index) => {
        // Alternate row color
        if (index % 2 === 0) {
          doc.rect(40, y, 520, rowHeight).fill("#F2F4F4");
        }

        doc
          .fillColor("black")
          .font("Helvetica")
          .fontSize(11)
          .text(row.id, 50, y + 8)
          .text(row.name, 100, y + 8)
          .text(row.email, 220, y + 8)
          .text(row.mobile, 400, y + 8);

        y += rowHeight;

        // New page support
        if (y > 750) {
          doc.addPage();
          y = 50;
        }
      });

      doc.end();
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { downloadPDF };