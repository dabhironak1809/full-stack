 import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [user_name, setuser_name] = useState("");
  const [mobile_number, setmobile_number] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const insertuser = async (e) => {
    e.preventDefault();

    if (!user_name || !mobile_number || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await axios.post("http://localhost:1111/userregister", {
        user_name,
        mobile_number,
        email,
        password
      });
      alert("User Registered Successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Error:", err);
      alert("Registration failed! Check console.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "45.5vw",
        background: "linear-gradient(135deg, #020024, #090979, #00d4ff)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
          padding: "30px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "15px", color: "#090979" }}>
          Create an Account
        </h2>
        <p style={{ textAlign: "center", marginBottom: "25px", color: "#555" }}>
          Enter your details to create your account
        </p>

        <form onSubmit={insertuser}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "600" }}>Your Name</label>
            <input
              type="text"
              value={user_name}
              onChange={(e) => setuser_name(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "600" }}>Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "600" }}>Mobile Number</label>
            <input
              type="text"
              maxLength="10"
              value={mobile_number}
              onChange={(e) => setmobile_number(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "600" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                marginTop: "5px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#090979",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Create Account
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#555" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#090979", fontWeight: "600" }}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
