// import React from "react";
// import "../style.css";
// import "../media.css";
// import { Link, useNavigate } from "react-router-dom";

// export default function Admin() {
//   const navigate = useNavigate();

//   // Admin  Check
//   if (localStorage.getItem("isAdmin") !== "true") {
//     navigate("/Admin_log");
//     return null;
//   }

//   return (
//     <div className="admin-container">
//       {/* Sidebar */}
//       <div className="admin-sidebar">
//         <h2>Admin Panel</h2>
//         <ul>
//           <li><Link to="/admin">📊 Dashboard</Link></li>
//           <li><Link to="/admin/products">📦 Products</Link></li>
//           <li><Link to="/admin/orders">🧾 Orders</Link></li>
//           <li><Link to="/admin/users">👤 Users</Link></li>
//           <li onClick={() => { localStorage.removeItem("isAdmin"); navigate("/"); }}>🚪 Logout</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="admin-content">
//         <div className="admin-header">
//           <h2>Welcome, Admin 👋</h2>
//         </div>

//         <div className="admin-cards">
//           <div className="dashboard-box">
//             <h3>📦 Products</h3>
//             <p>00 total</p>
//             <Link to="/admin/products">Manage</Link>
//           </div>

//           <div className="dashboard-box">
//             <h3>🧾 Orders</h3>
//             <p>00 total</p>
//             <Link to="/admin/orders">View</Link>
//           </div>

//           <div className="dashboard-box">
//             <h3>👤 Users</h3>
//             <p>00 total</p>
//             <Link to="/admin/users">Manage</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect } from "react";
import "../style.css";
import "../media.css";
import { Link, useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if admin is logged in
        const isAdmin = localStorage.getItem("isAdmin") === "true";

        if (!isAdmin) {
            navigate("/login"); // Redirect to login page if not logged in
        }
    }, [navigate]);

    const handleLogout = () => {
        // Remove admin info from localStorage
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("admin"); // remove stored admin data
        navigate("/"); // redirect to login page
    };

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <div className="admin-sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li><Link to="/adminproducts">📦 Products</Link></li>
                    <li><Link to="/AdminOrders">🧾 Orders</Link></li>
                    <li><Link to="/admin/users">👤 Users</Link></li>
                    <li onClick={handleLogout} style={{ cursor: "pointer", color: "red" }}>🚪 Logout</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="admin-content">
                <div className="admin-header">
                    <h2>Welcome, Admin 👋</h2>
                </div>

                <div className="admin-cards">
                    <div className="dashboard-box">
                        <h3>📦 Products</h3>
                        <p>00 total</p>
                        <Link to="/adminproducts">Manage</Link>
                    </div>

                    <div className="dashboard-box">
                        <h3>🧾 Orders</h3>
                        <p>00 total</p>
                        <Link to="/AdminOrders">View</Link>
                    </div>

                    <div className="dashboard-box">
                        <h3>👤 Users</h3>
                        <p>00 total</p>
                        <Link to="/admin/users">Manage</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
