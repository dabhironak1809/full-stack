import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AdminOrders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [tempStatusMap, setTempStatusMap] = useState({}); // <-- fixed initialization

  // Fetch orders on mount
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:1111/order");
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  // Update order status
  const updateStatus = async (order_id) => {
    console.log("call");

    const selectedStatus = tempStatusMap[order_id];

    console.log("Selected Status:", selectedStatus);

    await axios.put(`http://localhost:1111/order/${order_id}`, {
      status: selectedStatus,
    });

    console.log("query done");
    fetchOrders();
  };


  // Delete order
  const deleteOrder = async (order_id) => {
    if (!window.confirm("Are you sure delete this?")) return;

    try {
      await axios.delete(`http://localhost:1111/order/${order_id}`);
      fetchOrders();
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  return (
    <div className="container m-top">
      <h2>🧾 Admin Order Management</h2>
      <button className="btn btn-outline-dark mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order.order_id}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.catogory}</td>
                <td>{order.quantity}</td>
                <td>{order.total_price}</td>
                <td>₹{order.price}</td>

                <td>
                  <span
                    className={order.status === "Pending" ? "badge bg-warning" : order.status === "Shipped"
                      ? "badge bg-info" : "badge bg-success"}>
                    {order.status}
                  </span>
                </td>

                <td style={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
                  

                  <select
                    value={tempStatusMap[order.order_id] || order.status}
                    onChange={(e) =>
                      setTempStatusMap({
                        ...tempStatusMap,
                        [order.order_id]: e.target.value,
                      })
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                  <button
                    onClick={() =>
                      updateStatus(order.order_id, tempStatusMap[order.order_id] || order.status)
                    }
                    className="btn btn-sm btn-success"
                  >
                    Save
                  </button>

                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteOrder(order.order_id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// ======
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [tempStatusMap, setTempStatusMap] = useState({}); // temporary selected statuses

//   // Fetch orders
//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/order");
//       setOrders(res.data);

//       // Initialize tempStatusMap
//       const map = {};
//       res.data.forEach((order) => {
//         map[order.order_id] = order.status;
//       });
//       setTempStatusMap(map);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Update status when Save button is clicked
//   const updateStatus = async (order_id) => {
//     try {
//       const newStatus = tempStatusMap[order_id];
//       await axios.put(`http://localhost:1111/order/status/${order_id}`, { status: newStatus });

//       // Update UI immediately
//       setOrders((prev) =>
//         prev.map((o) => (o.order_id === order_id ? { ...o, status: newStatus } : o))
//       );
//     } catch (err) {
//       console.error("Error updating status:", err);
//     }
//   };

//   // Delete order
//   const deleteOrder = async (order_id) => {
//     if (!window.confirm("Are you sure to delete this order?")) return;
//     try {
//       await axios.delete(`http://localhost:1111/order/${order_id}`);
//       setOrders((prev) => prev.filter((o) => o.order_id !== order_id));
//     } catch (err) {
//       console.error("Error deleting order:", err);
//     }
//   };

//   return (
//     <div className="container m-top">
//       <h2>🧾 Admin Order Management</h2>

//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <table className="table table-bordered mt-3">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Product</th>
//               <th>Category</th>
//               <th>Quantity</th>
//               <th>Total Price</th>
//               <th>Payment</th>
//               <th>Status</th>
//               <th>Change Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map((order, index) => (
//               <tr key={order.order_id}>
//                 <td>{index + 1}</td>
//                 <td>{order.name}</td>
//                 <td>{order.catogory}</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.total_price}</td>
//                 <td>₹{order.price}</td>

//                 <td>
//                   <span
//                     className={
//                       order.status === "Pending"
//                         ? "badge bg-warning"
//                         : order.status === "Shipped"
//                         ? "badge bg-info"
//                         : "badge bg-success"
//                     }
//                   >
//                     {order.status}
//                   </span>
//                 </td>

// <td style={{ display: "flex", gap: "6px", alignItems: "center" }}>
//   {/* Save Button */}
//   <button
//     onClick={() => updateStatus(order.order_id)}
//     className="btn btn-sm btn-success"
//   >
//     Save
//   </button>

//   {/* Dropdown */}
//   <select
//     className="form-select"
//     value={tempStatusMap[order.order_id] || order.status}
//     onChange={(e) =>
//       setTempStatusMap({
//         ...tempStatusMap,
//         [order.order_id]: e.target.value,
//       })
//     }
//   >
//     <option value="Pending">Pending</option>
//     <option value="Shipped">Shipped</option>
//     <option value="Delivered">Delivered</option>
//   </select>
// </td>

//                 <td>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => deleteOrder(order.order_id)}
//                   >
//                     🗑 Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
