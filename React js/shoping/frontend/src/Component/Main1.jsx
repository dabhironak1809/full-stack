import React, { useEffect, useState } from "react";
import M from "./M"; // Base page without categories
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import "../media.css";
import "../Catogory_style.css";

export default function Main1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check user login status
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);

    // If user not logged in → redirect to only M.jsx view
    if (!loginStatus) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {/* Render core homepage UI (without categories) */}
      <M />

      {/* 🔒 Show categories only if user logged in */}
      {isLoggedIn && (
        <div className="main-category">
          <div className="category-box">
            <Link to="/men" className="category-card">
              <img src="Catogory/men_cloths.jfif" alt="Men Cloths" />
              <span>Men Cloths</span>
            </Link>
            <Link to="/women" className="category-card">
              <img src="Catogory/women.webp" alt="Women Cloths" />
              <span>Women Cloths</span>
            </Link>
            <Link to="/child" className="category-card">
              <img src="Catogory/child.jpg" alt="Kids" />
              <span>Kids</span>
            </Link>
            <Link to="/kitchan" className="category-card">
              <img src="Catogory/kitchan.jpg" alt="Kitchen" />
              <span>Kitchen</span>
            </Link>
            <Link to="/mobile" className="category-card">
              <img src="Catogory/phone.jfif" alt="Mobiles" />
              <span>Mobiles</span>
            </Link>
            <Link to="/leaptop" className="category-card">
              <img src="Catogory/leaptop.jpg" alt="Laptops" />
              <span>Laptops</span>
            </Link>
          </div>
        </div>
      )}

      {/* If not logged in show a message (optional) */}
      {!isLoggedIn && (
        <p style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
          🔒 Please login to access categories <Link to="/register">Login</Link>
        </p>
      )}
    </>
  );
}
