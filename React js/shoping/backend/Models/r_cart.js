const express = require("express");
const router = express.Router();
const cart = require("../Controller/cart.js");

router.get("/", cart.getCartItems);
router.post("/", cart.insertCartItem); // 👈 IMPORTANT
router.delete("/:cart_id", cart.deleteCartItem);
router.put("/:cart_id", cart.updateCartItem);

module.exports = router;
