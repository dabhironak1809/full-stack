import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch cart items
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:1111/cart");
      setCartItems(res.data);
    } catch (error) {
      console.error("❌ Error fetching cart:", error);
      alert("Failed to load cart data.");
    }
  };

  // Delete cart product
  const deleteProduct = async (cart_id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await axios.delete(`http://localhost:1111/cart/${cart_id}`);
      fetchCart();
    }
  }; 

  // ⭐ FINAL ORDER FUNCTION (with login check)
  const proceedToOrder = async (item) => {
    try {
      // 1️⃣ CHECK LOGIN
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData) {
        alert("⚠️ Please login first!");
        navigate("/login");
        return;
      }

      // 2️⃣ PREPARE ORDER DATA
      const orderData = {
        user_id: userData.user_id,
        product_id: item.product_id,
        catogory: item.catogory,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total_price: item.total_price,
        img: item.img,
        description: item.description,
      };

      // 3️⃣ SAVE ORDER TO DATABASE
      await axios.post("http://localhost:1111/order", orderData);

      // 4️⃣ REMOVE ITEM FROM CART
      await axios.delete(`http://localhost:1111/cart/${item.cart_id}`);

      alert("🎉 Order Placed Successfully!");
      navigate("/order");

    } catch (error) {
      console.error("❌ Error placing order:", error);
      alert("Failed to place order.");
    }
  };

  if (cartItems.length === 0) {
    return <h3 className="text-center mt-5">🛒 No items in your cart</h3>;
  }

  return (
    <div className="container m-top">
      <h2 className="mb-4 fw-bold">🛒 Shopping Cart</h2>

      {cartItems.map((item) => {
        const imgPath =
          item.catogory === "men"
            ? `http://localhost:1111/men_img/${item.img}`
            : item.catogory === "mobile"
            ? `http://localhost:1111/mobile_img/${item.img}`
            : item.catogory === "women"
            ? `http://localhost:1111/women_img/${item.img}`
            : item.catogory === "child"
            ? `http://localhost:1111/child_img/${item.img}`
            : item.catogory === "leaptop"
            ? `http://localhost:1111/leaptop_img/${item.img}`
            : `http://localhost:1111/kitchan_img/${item.img}`;

        return (
          <div className="card shadow-lg p-3 mb-3" key={item.cart_id}>
            <div className="row align-items-center">

              {/* IMAGE */}
              <div className="col-md-3 text-center">
                <img
                  src={imgPath}
                  alt={item.name}
                  className="img-fluid rounded"
                  style={{ maxHeight: "120px", objectFit: "contain" }}
                />
              </div>

              {/* PRODUCT INFO */}
              <div className="col-md-5">
                <h5>{item.name}</h5>
                <p className="text-muted small">{item.description}</p>
                <p><strong>Category:</strong> {item.catogory}</p>
                <p><strong>Price:</strong> ₹{item.price}</p>
                <p><strong>Qty:</strong> {item.quantity}</p>
              </div>

              {/* TOTAL + ACTIONS */}
              <div className="col-md-4 text-end">
                <h4 className="text-success">₹{item.total_price}</h4>
                <p>Total Price</p>

                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => deleteProduct(item.cart_id)}
                >
                  ❌ Remove
                </button>

                <div>
                  <button
                    className="btn btn-success btn-sm mt-2"
                    onClick={() => proceedToOrder(item)}
                  >
                    💳 Proceed to Order
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Continue Shopping */}
      <div className="text-end">
        <button
          className="btn btn-outline-dark"
          onClick={() => navigate("/")}
        >
          🛍 Continue Shopping
        </button>
      </div>
    </div>
  );
}
