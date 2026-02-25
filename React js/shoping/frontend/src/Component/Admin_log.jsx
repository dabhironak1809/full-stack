import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Admin_log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Invalid Admin Credentials!");
    }
  };

  return (
    <div className="admin-login-container fade-in">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit " className="btnn">Login</button>
        <Link className="Link" to="/"><button  className="btn1">Back to Home </button></Link>
      </form>
    </div>
  );
}
