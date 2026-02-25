const con = require("../db.js");

const getstuds = (req, res) => {
    let sql = "select * from img";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data);
        }
    });
};

const getstud = (req, res) => {
    let sql = "select * from img where id=?";
    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data[0]);
        }
    });
};

// const insertstud = (req, res) => {

//     let sql = "insert into img(name,email,image)values(?)"

//     const values = [
//         req.body.name,
//         req.body.email,
//         req?.file?.filename
//     ]

//     con.query(sql, [values], (err, data) => {
//         if (err) {
//             return res.send(err)
//         }
//         else {
//             return res.send("data inserted")
//         }
//     })

// }
const insertstud = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (!req.files || req.files.length === 0) {
        return res.send("No images uploaded");
    }

    // Get all uploaded file names
    const images = req.files.map(file => file.filename);
    // Convert to JSON string to store in database
    const imagesJson = JSON.stringify(images);

    const sql = "INSERT INTO img(name,email,image) VALUES (?)";
    const values = [name, email, imagesJson];

    con.query(sql, [values], (err, data) => {
        if (err) return res.send(err);
        res.send("Data inserted successfully with image(s)");
    });
};


const deletestud = (req, res) => {
    let sql = "delete from img where id=?";
    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send("data deleted");
        }
    });
};

const updatestud = (req, res) => {
    // const { id } = req.params;
    const { name, email, oldimage } = req.body;

    if (req.file) {
        const newimage = req.file.filename;
        let sql = "update img set name=? ,email=?,image=? where id=? ";
        con.query(sql, [name, email, newimage, req.params.id], (err, data) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send("data updated new image");
            }
        })
    }
    else {
        let sql = "update img set name=? ,email=?,image=? where id=? ";

        con.query(sql, [name, email, oldimage, req.params.id], (err, data) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send("data updated old image");
            }
        })
    }
}





module.exports = { getstud, getstuds, insertstud, deletestud, updatestud }