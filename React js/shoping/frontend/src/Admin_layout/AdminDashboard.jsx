import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    pending: 0,
    shipped: 0,
    delivered: 0,
  });

  // Only fetch stats, no extra checks or navigation
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    setStats({
      totalOrders: orders.length,
      pending: orders.filter((o) => o.status === "Pending").length,
      shipped: orders.filter((o) => o.status === "Shipped").length,
      delivered: orders.filter((o) => o.status === "Delivered").length,
    });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📊 Admin Dashboard</h2>

      <p><b>Total Orders:</b> {stats.totalOrders}</p>
      <p><b>Pending:</b> {stats.pending}</p>
      <p><b>Shipped:</b> {stats.shipped}</p>
      <p><b>Delivered:</b> {stats.delivered}</p>
    </div>
  );
}
