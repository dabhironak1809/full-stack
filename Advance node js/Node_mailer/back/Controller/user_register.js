const con = require("../db.js");
const nodemailer = require('nodemailer');



// Set up the Nodemailer transporter with Gmail (you can replace it with other services if needed)

const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services, e.g., SendGrid
    auth: {
        user: EMAIL_USER,   //'ronakd795@gmail.com', // your email
        pass: EMAIL_PASS,   //'woiy celi biee mfbb',  // your email password or an app-specific password
    },
});



const userallget = (req, res) => {
    let sql = "select * from user";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data)
        }
    })
}
const userget = (req, res) => {
    let sql = "select * from user where user_id=?";
    con.query(sql, req.params.user_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    })
}


const userdatainsert = (req, res) => {
    let sql = "insert into user(user_name,mobile_number,email,password)values(?)";

    const values = [
        req.body.user_name,
        req.body.mobile_number,
        req.body.email,
        req.body.password,
    ];

    con.query(sql, [values], (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            // Send a confirmation email after successful insertion
            const mailOptions = {
                from: 'your-email@gmail.com', // sender address
                to: req.body.email,           // receiver's email
                subject: 'Registration Successful', // email subject
                text: `Hello ${req.body.user_name},\n\nThank you register for dabhi ronak website. Your registration was successful!`, // email body text
            };

            // Send email using the transporter
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.send(`Error sending email: ${error}`);
                } else {
                    console.log('Email sent: ' + info.response);
                    return res.send("User registered successfully and confirmation email sent!");
                }
            });
        }
    })
}


const userdelete = (req, res) => {
    let sql = "delete from user where user_id=?";
    con.query(sql, req.params.user_id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data deleted")
        }
    })
}


module.exports = { userallget, userget, userdatainsert, userdelete }