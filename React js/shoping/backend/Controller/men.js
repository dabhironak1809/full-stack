const con = require("../db.js");

const getmens = (req, res) => {
    let sql = "select * from men";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data);
        }
    });
};
const getmen = (req, res) => {
    let sql = "select * from men where men_id=?";
    con.query(sql, req.params.men_id, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data);
        }
    });
};

const insertmen = (req, res) => {
    let sql = "insert into men(name,description,price,img)values(?)";
    // let sql = "insert into men(name,description,price)values(?)";
    // console.log("Data :", res)

    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req?.file?.filename
    ];
    // console.log("values :", values)
    con.query(sql, [values], (err, data) => {
        // console.log("Data inserted :", data)

        if (err) {
            return res.send(err)
        }
        else {
            return res.send("data inserted")
        }
    })
};

const deletemen = (req, res) => {
    let sql = "delete from men where men_id=?";
    con.query(sql, req.params.men_id, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send("data deleted");
        }
    });
};

// const updatemen = (req, res) => {
//     let sql =
//         "update men set name=?,description=?, price=?, img=? where men_id=?";
//     const values = [
//         req.body.name,
//         req.body.description,
//         req.body.price,
//         req.body.img,
//     ];
//     con.query(sql, [...values, req.params.men_id], (err, data) => {
//         if (err) {
//             return res.send(err);
//         } else {
//             return res.send("data updated");
//         }
//     });
// };

// ==============

// const updatemen = (req, res) => {
//     const men_id = req.params.men_id;

//     const { name, description, price, old_img } = req.body;

//     const img = req.file ? req.file.filename : old_img;

//     let sql = `update men set name=?, description=?,price=?,img=? where men_id=?`;

//     con.query(sql,[name,description,price,img,men_id],(err,result)=>{
//         if(err){
//             return res.status(500).send("update failed");
//         }
//         return res.send("data updated");
//     });

// };

// ===========

// const updatemen = (req, res) => {
//     const { men_id } = req.params;
//     const { name, description, price, old_img } = req.body;

//     // CASE-1: Admin uploads a new image
//     if (req.file) {
//         const newImg = req.file.filename;

//         const sql = `
//             UPDATE men 
//             SET name=?, description=?, price=?, img=?
//             WHERE men_id=?
//         `;

//         con.query(sql, [name, description, price, newImg, men_id], (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send("Update failed");
//             }
//             return res.send("Updated with NEW image");
//         });
//     }

//     // CASE-2: Admin did NOT upload image → keep old image
//     else {
//         const sql = `
//             UPDATE men 
//             SET name=?, description=?, price=?, img=?
//             WHERE men_id=?
//         `;

//         con.query(sql, [name, description, price, old_img, men_id], (err, data) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send("Update failed");
//             }
//             return res.send("Updated WITHOUT new image (old image as it is)");
//         });
//     }
// };


// const updatemen = (req, res) => {
//     const { men_id } = req.params;
//     const { name, description, price, old_img } = req.body;

//     // CASE 1: Admin uploaded NEW image
//     if (req.file) {
//         const newImage = req.file.filename;

//         const sql = `
//             UPDATE men 
//             SET name=?, description=?, price=?, img=?
//             WHERE men_id=?
//         `;

//         con.query(sql, [name, description, price, newImage, men_id], (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send("Update failed (new image)");
//             }
//             return res.send("Updated with NEW image");
//         });
//     }

//     // CASE 2: No new image → keep old image
//     else {
//         const sql = `
//             UPDATE men 
//             SET name=?, description=?, price=?, img=?
//             WHERE men_id=?
//         `;

//         con.query(sql, [name, description, price, old_img, men_id], (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send("Update failed (old image)");
//             }
//             return res.send("Updated with OLD image");
//         });
//     }
// };

const updatemen = (req, res) => {
    const { men_id } = req.params;
    const { name, description, price, old_img } = req.body;

    // CASE 1: Admin uploaded NEW image
    if (req.file) {

        const newImage = req.file.filename;

        const sql = `
            UPDATE men 
            SET name=?, description=?, price=?, img=?
            WHERE men_id=?
        `;

        con.query(sql, [name, description, price, newImage, men_id], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Update failed (new image)");
            }
            return res.send("Updated with NEW image");
        });
    }

    // CASE 2: No new image → keep old image
    else {
        const sql = `
            UPDATE men 
            SET name=?, description=?, price=?, img=?
            WHERE men_id=?
        `;

        con.query(sql, [name, description, price, old_img, men_id], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Update failed (old image)");
            }
            return res.send("Updated with OLD image");
        });
    }
};


module.exports = { getmens, getmen, insertmen, updatemen, deletemen };
