const con = require("../db.js");
const nodemailer = require("nodemailer");
require("dotenv").config();

const path = require("path");
const fs = require("fs");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const getregisters = (req, res) => {
    let sql = "select * from mail";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}
const getregister = (req, res) => {
    let sql = "select * from mail where id=?";
    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}

// ========== [  mail three type 1.simple mail, 2. mail sent with attachment and store a database :-> table:mail , 3. mail sent with attachment and dont store on databse attachment ]

// =============== this is simple mail sent 

// const insertregister = (req, res) => {
//     let sql = "insert into mail1 (name,email,password)values(?)";

//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]

//     con.query(sql, [values], (err, data) => {
//         if (err) {
//             return res.send(err)
//         }
//         else {
//             const mailOptions = {
//                 from: process.env.EMAIL_USER,
//                 to: req.body.email,
//                 subject: "🎉 Welcome to Dabhi Ronak – You’re All Set!",
    //             html: `
    // <div style="background:#eef2ff; padding:40px 0; font-family: 'Segoe UI', Arial, sans-serif;">
    //     <table width="100%" cellpadding="0" cellspacing="0">
    //         <tr>
    //             <td align="center">
    //                 <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08);">

    //                     <!-- Header -->
    //                     <tr>
    //                         <td style="background:linear-gradient(135deg,#4f46e5,#6366f1); padding:30px; text-align:center; color:#ffffff;">
    //                             <h1 style="margin:0; font-size:28px; font-weight:600;">
    //                                 Welcome to Dabhi Ronak 🚀
    //                             </h1>
    //                             <p style="margin-top:8px; font-size:16px; opacity:0.9;">
    //                                 We’re excited to have you with us
    //                             </p>
    //                         </td>
    //                     </tr>

    //                     <!-- Body -->
    //                     <tr>
    //                         <td style="padding:35px 40px; color:#333333;">
    //                             <h2 style="color:#4f46e5; margin-top:0;">
    //                                 Hi ${req.body.name}, 👋
    //                             </h2>

    //                             <p style="font-size:16px; line-height:1.7; margin-bottom:20px;">
    //                                 Thank you for registering on <strong>Dabhi Ronak</strong>.
    //                                 Your account has been created successfully, and you’re now part of a growing community.
    //                             </p>

    //                             <p style="font-size:16px; line-height:1.7; margin-bottom:30px;">
    //                                 You can now explore features, stay updated, and get the most out of our platform.
    //                             </p>

    //                             <!-- CTA Button -->
    //                             <div style="text-align:center; margin:35px 0;">
    //                                 <a href="#" 
    //                                    style="
    //                                    background:#4f46e5;
    //                                    color:#ffffff;
    //                                    text-decoration:none;
    //                                    padding:14px 30px;
    //                                    font-size:16px;
    //                                    border-radius:8px;
    //                                    display:inline-block;
    //                                    font-weight:500;">
    //                                     Go to Dashboard
    //                                 </a>
    //                             </div>

    //                             <p style="font-size:15px; color:#555;">
    //                                 If you have any questions or need assistance, simply reply to this email — we’re always happy to help.
    //                             </p>

    //                             <p style="font-size:15px; margin-top:30px;">
    //                                 Warm regards,<br>
    //                                 <strong>Dabhi Ronak Team</strong>
    //                             </p>
    //                         </td>
    //                     </tr>

    //                     <!-- Divider -->
    //                     <tr>
    //                         <td style="height:1px; background:#e5e7eb;"></td>
    //                     </tr>

    //                     <!-- Footer -->
    //                     <tr>
    //                         <td style="padding:20px; text-align:center; font-size:13px; color:#6b7280; background:#fafafa;">
    //                             © ${new Date().getFullYear()} Dabhi Ronak. All rights reserved.<br>
    //                             This email was sent because you registered on our website.
    //                         </td>
    //                     </tr>

    //                 </table>
    //             </td>
    //         </tr>
    //     </table>
    // </div>
    // `,
//             };

//             transporter.sendMail(mailOptions, (err, info) => {
//                 if (err) {
//                     return res.send(`error senging email : ${err}`);
//                 }
//                 else {
//                     console.log('email sent :' + info.response);
//                     return res.send("user register succesfully and configration email sent");

//                 }
//             })
//         }
//     })
// }


// ====== this function sent a mail and attach a file,img etc and that store on databse 

// const insertregister = (req, res) => {
//     let sql = "INSERT INTO mail (name,email,password,attachment) VALUES (?)";

//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password,
//         req.file ? req.file.path : null  // save uploaded file path in DB
//     ];

//     con.query(sql, [values], (err, data) => {
//         if (err) return res.status(500).send(err);

//         // Prepare mail options with attachment
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: req.body.email,
//             subject: "🎉 Welcome to Dabhi Ronak – You’re All Set!",
//             html: `... your HTML ...`,  // keep your HTML as is
//             attachments: req.file
//                 ? [{
//                     filename: req.file.originalname,  // original file name
//                     path: path.resolve(req.file.path) // absolute path
//                 }]
//                 : []  // empty array if no attachment
//         };

//         transporter.sendMail(mailOptions, (err, info) => {
//             if (err) {
//                 console.error("Email sending error:", err);
//                 return res.status(500).send("User registered, but email with attachment failed: " + err.message);
//             }

//             console.log("Email sent:", info.response);
//             res.send("User registered & email sent with attachment!");
//         });
//     });
// };


// this not store on data bse that only folder using upload a attachment 

const insertregister = (req, res) => {
    // Insert only name, email, password — NO attachment path in DB
    let sql = "INSERT INTO mail1 (name,email,password) VALUES (?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    con.query(sql, [values], (err, data) => {
        if (err) return res.status(500).send(err);

        // Prepare email with attachment if a file was uploaded
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: "🎉 Welcome to Dabhi Ronak – You’re All Set!",
            html: `<div style="background:#eef2ff; padding:40px 0; font-family: 'Segoe UI', Arial, sans-serif;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="center">
                                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden;">
                                    <tr>
                                        <td style="background:linear-gradient(135deg,#4f46e5,#6366f1); padding:30px; text-align:center; color:#fff;">
                                            <h1>Welcome to Dabhi Ronak 🚀</h1>
                                            <p>We’re excited to have you with us</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:35px 40px;">
                                            <h2>Hi ${req.body.name}, 👋</h2>
                                            <p>Thank you for registering on <strong>Dabhi Ronak</strong>.</p>
                                            <p>Please find your attachment below (if any).</p>
                                            <p>Warm regards,<br>Dabhi Ronak Team</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>`,
            attachments: req.file
                ? [{
                    filename: req.file.originalname,
                    path: path.resolve(req.file.path)
                }]
                : []
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error("Email sending error:", err);
                return res.status(500).send("User registered, but email with attachment failed: " + err.message);
            }

            console.log("Email sent:", info.response);
            res.send("User registered & email sent with attachment! File saved in uploads folder only, not in DB.");
        });
    });
};


const deleteregister = (req, res) => {
    let sql = "delete from mail where id=?";
    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted")
        }
    })
}

module.exports = { getregister, getregisters, insertregister, deleteregister };