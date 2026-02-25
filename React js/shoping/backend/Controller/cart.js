const con = require("../db.js");

// 1️⃣ Get all cart items
const getCartItems = (req, res) => {
    let sql = "SELECT * FROM cart";
    con.query(sql, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data);
        }
    });
};

// 2️⃣ Get single cart item
const getCartItem = (req, res) => {
    let sql = "SELECT * FROM cart WHERE cart_id=?";
    con.query(sql, req.params.cart_id, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data);
        }
    });
};

// 3️⃣ Insert product into cart
const insertCartItem = (req, res) => {
  let sql = `INSERT INTO cart
      (product_id, catogory, name, price, quantity, total_price, img, description, add_at)
      VALUES (?)`;

  const values = [
    req.body.product_id,
    req.body.category,  // <- matches catogory
    req.body.name,
    req.body.price,
    req.body.quantity,
    req.body.total_price,
    req.body.img,
    req.body.description,
    new Date()          // Auto save current time
  ];

  con.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error adding product to cart");
    }
    return res.status(200).send("Product added to cart");
  });
};

// 4️⃣ Delete item from cart
const deleteCartItem = (req, res) => {
    let sql = "DELETE FROM cart WHERE cart_id=?";
    con.query(sql, req.params.cart_id, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send("Cart item deleted ");
        }
    });
};

// 5️⃣ Update cart item (optional if you want qty update)
const updateCartItem = (req, res) => {
    let sql = `
      UPDATE cart
      SET product_id=?, catogory=?, name=?, price=?, quantity=?, total_price=?, img=?, description=?
      WHERE cart_id=?`;

    const values = [
        req.body.product_id,
        req.body.category,
        req.body.name,
        req.body.price,
        req.body.quantity,
        req.body.total_price,
        req.body.img,
        // req?.file?.filename,
        req.body.description,
        req.params.cart_id,
    ];

    con.query(sql, values, (err, data) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send("Cart item updated");
        }
    });
};

module.exports = { getCartItems, getCartItem, insertCartItem, updateCartItem, deleteCartItem };
