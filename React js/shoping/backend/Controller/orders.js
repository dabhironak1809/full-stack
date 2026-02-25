// const con = require("../db.js");

// // Insert into order
// const insertOrder = (req, res) => {
//   let sql = `INSERT INTO orders 
//     (product_id, catogory, name, price, quantity, total_price, img, description, status) 
//     VALUES (?)`;

//   const values = [
//     req.body.product_id,
//     req.body.catogory,
//     req.body.name,
//     req.body.price,
//     req.body.quantity,
//     req.body.total_price,
//     req.body.img,
//     req.body.description,
//     "Pending" // Default status
//   ];

//   con.query(sql, [values], (err, data) => {
//     if (err) return res.status(500).send("Error placing order");
//     return res.status(200).send("Order placed successfully");
//   });
// };

// // Fetch all orders 
// const getOrders = (req, res) => {
//   let sql = "SELECT * FROM orders";
//   con.query(sql, (err, data) => {
//     if (err) return res.send(err);
//     return res.send(data);
//   });
// };

// module.exports = { insertOrder, getOrders };

const con = require("../db.js");

// Insert order
const insertOrder = (req, res) => {
  let sql = `INSERT INTO orders (product_id, catogory, name, price, quantity, total_price, img, description, status, ordered_at)VALUES(?)`;

  const values = [
    req.body.product_id,
    req.body.catogory,
    req.body.name,
    req.body.price,
    req.body.quantity,
    req.body.total_price,
    req.body.img,
    req.body.description,
    "Pending",         // Default status
    new Date()         // Orders date-time
  ];

  con.query(sql, [values], (err, data) => {
    if (err) {
      console.log("❌ ORDER INSERT ERROR:", err);
      return res.status(500).send("Error placing order");
    }
    return res.status(200).send("Order placed successfully");
  });
};

// Fetch all orders
const getOrders = (req, res) => {
  let sql = "SELECT * FROM orders ";

  con.query(sql, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
};
const getOrder = (req, res) => {
  let sql = "SELECT * FROM orders where order_id=?";

  con.query(sql, req.params.order_id, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
};


const deleteorder = (req, res) => {
  let sql = "delete from orders where order_id=?";

  con.query(sql, req.params.order_id, (err, data) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.send("data deleted");
    }
  })
}

// Update order status
const updateOrderStatus = (req, res) => {
  // if (!req.body || !req.body.status) {
  //   return res.status(400).send("Status is required");
  // }

  const sql = "UPDATE orders SET status=? WHERE order_id=?";
  const values = [req.body.status];

  con.query(sql, [values,req.params.order_id], (err, result) => {
    if (err) {
      return res.status(500).send("Error updating status");
    }
    else {
      return res.status(200).send("Status updated successfully");
    }
  });
};

// const updatestudent = (req, res) => {
//   let sql =
//     "update student set student_name=?, student_email=?, student_mobile=? where student_id=?";
//   const values = [
//     req.body.student_name,
//     req.body.student_email,
//     req.body.student_mobile,
//   ];
//   con.query(sql, [...values, req.params.student_id], (err, data) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.send("data updated");
//     }
//   });
// };


module.exports = { insertOrder, getOrders, getOrder, deleteorder, updateOrderStatus };
