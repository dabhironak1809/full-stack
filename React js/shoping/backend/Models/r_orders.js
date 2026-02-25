const express = require("express");
const router = express.Router();
const order = require("../Controller/orders.js");

router.get("/", order.getOrders);
router.get("/:order_id", order.getOrder);
router.post("/", order.insertOrder);
router.delete("/:order_id", order.deleteorder);
// router.put("/:order_id", order.updateOrderStatus);

router.put("/:order_id", order.updateOrderStatus);



module.exports = router;
