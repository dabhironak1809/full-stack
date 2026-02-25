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
    let sql = "select * from mail1";
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
    let sql = "select * from mail1 where id=?";
    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}

const insertregister = (req, res) => {
    const sql = "insert into mail1(name,email,password)values(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    con.query(sql, [values], (err, data) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send("data inserted")
        }
    })
}

// nodemailer code to user register to sent a emial 
// only email sent that type code 

// const insertregister = (req, res) => {
//     let sql = "insert into mail1(name,email,password)values(?)";

//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]

//     con.query(sql, [values], (err, data) => {
//         if (err) {
//             if (err) return res.status(500).send(err);

//         }
//         else {
//             const mailOptions = {
//                 from: process.env.EMAIL_USER,
//                 to: req.body.email,
//                 subject: "🎉 Welcome to Dabhi Ronak – You’re All Set!",
//                 html: `
//     <div style="background:#eef2ff; padding:40px 0; font-family: 'Segoe UI', Arial, sans-serif;">
//         <table width="100%" cellpadding="0" cellspacing="0">
//             <tr>
//                 <td align="center">
//                     <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08);">

//                         <!-- Header -->
//                         <tr>
//                             <td style="background:linear-gradient(135deg,#4f46e5,#6366f1); padding:30px; text-align:center; color:#ffffff;">
//                                 <h1 style="margin:0; font-size:28px; font-weight:600;">
//                                     Welcome to Dabhi Ronak 🚀
//                                 </h1>
//                                 <p style="margin-top:8px; font-size:16px; opacity:0.9;">
//                                     We’re excited to have you with us
//                                 </p>
//                             </td>
//                         </tr>

//                         <!-- Body -->
//                         <tr>
//                             <td style="padding:35px 40px; color:#333333;">
//                                 <h2 style="color:#4f46e5; margin-top:0;">
//                                     Hi ${req.body.name}, 👋
//                                 </h2>

//                                 <p style="font-size:16px; line-height:1.7; margin-bottom:20px;">
//                                     Thank you for registering on <strong>Dabhi Ronak</strong>.
//                                     Your account has been created successfully, and you’re now part of a growing community.
//                                 </p>

//                                 <p style="font-size:16px; line-height:1.7; margin-bottom:30px;">
//                                     You can now explore features, stay updated, and get the most out of our platform.
//                                 </p>

//                                 <!-- CTA Button -->
//                                 <div style="text-align:center; margin:35px 0;">
//                                     <a href="#" 
//                                        style="
//                                        background:#4f46e5;
//                                        color:#ffffff;
//                                        text-decoration:none;
//                                        padding:14px 30px;
//                                        font-size:16px;
//                                        border-radius:8px;
//                                        display:inline-block;
//                                        font-weight:500;">
//                                         Go to Dashboard
//                                     </a>
//                                 </div>

//                                 <p style="font-size:15px; color:#555;">
//                                     If you have any questions or need assistance, simply reply to this email — we’re always happy to help.
//                                 </p>

//                                 <p style="font-size:15px; margin-top:30px;">
//                                     Warm regards,<br>
//                                     <strong>Dabhi Ronak Team</strong>
//                                 </p>
//                             </td>
//                         </tr>

//                         <!-- Divider -->
//                         <tr>
//                             <td style="height:1px; background:#e5e7eb;"></td>
//                         </tr>

//                         <!-- Footer -->
//                         <tr>
//                             <td style="padding:20px; text-align:center; font-size:13px; color:#6b7280; background:#fafafa;">
//                                 © ${new Date().getFullYear()} Dabhi Ronak. All rights reserved.<br>
//                                 This email was sent because you registered on our website.
//                             </td>
//                         </tr>

//                     </table>
//                 </td>
//             </tr>
//              </table>    </div>`,
//             };

//             transporter.sendMail(mailOptions, (err, info) => {
//                 if (err) {
//                     return res.send(`error sending email :${err}`);
//                 }
//                 else {
//                     console.log(`email sent : ` + info.response);
//                     return res.send("user register succesfully and congiharation email sent");

//                 }
//             })

//         }


//     })
// }

// const insertregister = (req, res) => {


//     let sql = "INSERT INTO mail1 (name,email,password) VALUES (?)";

//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ];

//     con.query(sql, [values], (err, data) => {
//         if (err) return res.status(500).send(err);


//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: req.body.email,
//             subject: "🎉 Welcome to Dabhi Ronak – You’re All Set!",
//             html: `<div style="background:linear-gradient(135deg,#eef2ff,#fdf4ff); padding:60px 0; font-family:Segoe UI, Arial, sans-serif;">
//   <table width="100%" cellpadding="0" cellspacing="0">
//     <tr>
//       <td align="center">

//         <table width="600" cellpadding="0" cellspacing="0"
//           style="
//             background:#ffffff;
//             border-radius:18px;
//             overflow:hidden;
//             box-shadow:
//               0 20px 45px rgba(79,70,229,0.15),
//               inset 0 1px 0 rgba(255,255,255,0.6);
//           ">

//           <!-- HEADER -->
//           <tr>
//             <td style="
//               background:linear-gradient(135deg,#4f46e5,#7c3aed,#6366f1);
//               padding:45px;
//               text-align:center;
//               color:#ffffff;
//             ">
//               <h1 style="
//                 margin:0;
//                 font-size:30px;
//                 font-weight:700;
//                 letter-spacing:0.5px;
//                 text-shadow:0 4px 10px rgba(0,0,0,0.25);
//               ">
//                 Welcome to Dabhi Ronak 🚀
//               </h1>

//               <p style="
//                 margin-top:12px;
//                 font-size:15px;
//                 opacity:0.95;
//               ">
//                 Let’s build something amazing together
//               </p>
//             </td>
//           </tr>

//           <!-- BODY -->
//           <tr>
//             <td style="padding:42px 48px; color:#374151;">
//               <h2 style="
//                 margin:0 0 18px;
//                 font-size:22px;
//                 color:#111827;
//               ">
//                 Hi ${req.body.name}, 👋
//               </h2>

//               <p style="
//                 font-size:15px;
//                 line-height:1.75;
//                 margin-bottom:16px;
//               ">
//                 Thank you for joining
//                 <strong style="color:#4f46e5;">Dabhi Ronak</strong>.
//                 We’re genuinely excited to have you with us.
//               </p>

//               <p style="
//                 font-size:15px;
//                 line-height:1.75;
//                 margin-bottom:30px;
//               ">
//                 Please find your attachment below (if any).
//                 If you ever need help, our team is just one message away.
//               </p>

//               <!-- CTA (Fake animation feel via gradient depth) -->
//               <table cellpadding="0" cellspacing="0">
//                 <tr>
//                   <td style="
//                     background:linear-gradient(135deg,#4f46e5,#7c3aed);
//                     border-radius:10px;
//                     padding:14px 26px;
//                     box-shadow:0 10px 20px rgba(79,70,229,0.35);
//                   ">
//                     <span style="
//                       color:#ffffff;
//                       font-size:14px;
//                       font-weight:600;
//                       letter-spacing:0.3px;
//                     ">
//                       Get Started →
//                     </span>
//                   </td>
//                 </tr>
//               </table>

//               <div style="border-top:1px solid #e5e7eb; padding-top:24px; margin-top:35px;">
//                 <p style="font-size:14px; color:#6b7280; margin:0;">
//                   Warm regards,<br>
//                   <strong style="color:#111827;">Dabhi Ronak Team</strong>
//                 </p>
//               </div>
//             </td>
//           </tr>

//           <!-- FOOTER -->
//           <tr>
//             <td style="
//               background:#f9fafb;
//               padding:18px;
//               text-align:center;
//               font-size:12px;
//               color:#9ca3af;
//             ">
//               © 2026 Dabhi Ronak. Crafted with care ✨
//             </td>
//           </tr>

//         </table>

//       </td>
//     </tr>
//   </table>
// </div>`,
//             attachments: req.file
//                 ? [{
//                     filename: req.file.originalname,
//                     path: path.resolve(req.file.path)
//                 }] : []
//         };


//         transporter.sendMail(mailOptions, (err, info) => {
//             if (err) {
//                 console.error("email sending error", err);
//                 return res.status(500).send("user registerd but email with attachment faiiled" + err.message);
//             }
//             console.log("email sent", info.response);
//             res.send("user register & email sent a with attachment file save in uploaded folder")

//         })

//     })

// }



module.exports = { getregister, getregisters, insertregister }