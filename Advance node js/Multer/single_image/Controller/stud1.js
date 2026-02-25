const con = require("../db.js");

const getstudes = (req, res) => {
    let sql = "select * from img";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data);
        }
    });
};

const getstude = (req, res) => {
    let sql = "select * from img where id=?";

    con.query(sql, req.params.id, (err, data) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send(data[0])
        }
    });
}

const insertstud = (req, res) => {
    const { name, email } = req.body;

    if (!req.files || req.files.length === 0) {
        return res.send("no image uploadded")
    }

    const images = req.files.map(file => file.filename);
    const imagesJson = JSON.stringify(images)

    const sql = "insert into img(name,email,image)values(?)";

    const values = [name, email, imagesJson];
    con.query(sql, [values], (err, data) => {
        if (err)
            return req.send(err);
        res.send("data inserted succesfully with image(S)")
    });
};


//  const updateStud = (req, res) => {
//     const { id, name, email } = req.body; // assuming id comes from body
//     if (!id) return res.status(400).send("ID is required");

//     // Prepare image updates
//     let imagesJson;

//     if (req.files && req.files.length > 0) {
//         // map files to filenames
//         const images = req.files.map(file => file.filename);
//         imagesJson = JSON.stringify(images);
//     }

//     // Build SQL dynamically depending on whether images exist
//     let sql = "UPDATE img SET name = ?, email = ?";
//     const values = [name, email];

//     if (imagesJson) {
//         sql += ", image = ?";
//         values.push(imagesJson);
//     }

//     sql += " WHERE id = ?"; // Update based on ID
//     values.push(id);

//     con.query(sql, values, (err, data) => {
//         if (err) return res.status(500).send(err);
//         res.send("Data updated successfully with image(s)");
//     });
// };




// const updateStud = (req, res) => {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     if (!id) return res.status(400).send("ID is required");

//     let imagesJson; // Will store JSON array of filenames

//     // Check if files are uploaded
//     if ((req.file && req.file.filename) || (req.files && req.files.length > 0)) {

//         // SINGLE IMAGE (req.file) → convert to array using map for consistency
//         if (req.file) {
//             imagesJson = JSON.stringify([req.file.filename]); // single file as array
//         }

//         // MULTIPLE IMAGES (req.files)
//         if (req.files && req.files.length > 0) {
//             const images = req.files.map(file => file.filename); // map all filenames
//             imagesJson = JSON.stringify(images);
//         }
//     }
//     // Build SQL dynamically
//     let sql = "UPDATE img SET name = ?, email = ?";
//     const values = [name, email];

//     if (imagesJson) {
//         sql += ", image = ?";
//         values.push(imagesJson);
//     }

//     sql += " WHERE id = ?";
//     values.push(id);

//     con.query(sql, values, (err, data) => {
//         if (err) return res.status(500).send(err);
//         res.send("Data updated successfully with image(s)");
//     });
// };

const updateStud = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!id) return res.status(400).send("ID is required");

    let imagesToSave = [];

    // Single image
    if (req.file) {
        imagesToSave = [req.file.filename];
    }

    // Multiple images
    if (req.files && req.files.length > 0) {
        imagesToSave = req.files.map(file => file.filename);
    }

    // If no images uploaded, keep undefined (image column will not be updated)
    const sql = imagesToSave.length > 0
        ? "UPDATE img SET name = ?, email = ?, image = ? WHERE id = ?"
        : "UPDATE img SET name = ?, email = ? WHERE id = ?";

    const values = imagesToSave.length > 0
        ? [name, email, JSON.stringify(imagesToSave), id]
        : [name, email, id];

    con.query(sql, values, (err, data) => {
        if (err) return res.status(500).send(err);
        res.send("Data updated successfully with image(s)");
    });
};

module.exports = { getstude, getstudes, insertstud, updateStud }