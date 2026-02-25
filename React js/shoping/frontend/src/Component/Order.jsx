 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./OrdersList.css"; // separate CSS

export default function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:1111/order");
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
    fetchOrders();
  }, []);

  const getImagePath = (item) => {
    const categoryMap = {
      men: "men_img",
      women: "women_img",
      mobile: "mobile_img",
      child: "child_img",
      leaptop: "leaptop_img",
      kitchan: "kitchan_img",
    };
    return `http://localhost:1111/${categoryMap[item.catogory] || "kitchan_img"}/${item.img}`;
  };

  if (orders.length === 0) {
    return (
      <div className="orders-no-orders">
        <h2>❌ No Orders Found</h2>
        <button onClick={() => navigate("/")}>Go Back Home</button>
      </div>
    );
  }

  const totalAmount = orders.reduce((acc, item) => acc + item.total_price, 0);

  return (
    <div className="orders-list-container">
      <h2>🎉 Your Orders</h2>

      {orders.map((item, idx) => (
        <div className="order-row" key={idx}>
          <div className="order-img-wrapper">
            <img src={getImagePath(item)} alt={item.name} />
          </div>
          <div className="order-info">
            <h3>🛒 {item.name}</h3>
            <p>🆔 Order ID: <b>{item.order_id || "N/A"}</b></p>
            <p>📦 Quantity: <b>{item.quantity}</b></p>
            <p>💰 Total Price: <b>₹{item.total_price}</b></p>
            <p>🏷 Category: <b>{item.catogory}</b></p>
            <p>📝 Description: {item.description}</p>
            <p>🕒 Status:
              <span className={item.status === "Pending" ? "status-pending" : "status-completed"}>
                {item.status}
              </span>
            </p>
            <p>📅 Date: <b>{item.date || new Date().toLocaleDateString()}</b></p>
          </div>
        </div>
      ))}

      <div className="orders-total">
        <h3>Total Amount: <span>₹{totalAmount}</span></h3>
        <button onClick={() => navigate("/")}>Continue Shopping 🛍</button>
      </div>
    </div>
  );
}
