 import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Catogory_style.css";
import "../navbar.css";

export default function Navbar() {

  const navigate = useNavigate();

  // Check login user
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You are logged out!");
    navigate("/");
  };

  return (
    <>
      <nav id="navbar" >
        {/* LOGO */}
        <div className="logo-box">
          <img className="hamburger" src="/svg/hamburger.svg" alt="" />
          <Link to="/">
            <img src="/logo/fkheaderlogo_exploreplus-44005d.svg" alt="" />
          </Link>
        </div>

        {/* SEARCH */}
        <div className="search">
          <img className="search-svg" src="/svg/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        {/* APP INSTALL ICON */}
         

        {/* USER / LOGIN SECTION */}
        <div className="btn-group dropdown">
          <div className="login">
            <img src="/svg/profile.svg" alt="" />

            {/* If user logged in -> show name, else show Login */}
            {!user ? (
              <>
                <button type="button" className="btn text-dark">Login</button>
                <img className="down_arrow" src="/svg/down_arrow.svg" alt="" />

                <ul className="dropdown-menu dropdown-menu1">
                  <li className="d-item1">
                    <Link to="/login" className="dropdown-item text-primary">
                      Log-in
                    </Link>
                  </li>
                  <li><p className="sepration"></p></li>

                  <li className="d-item1">
                    <span className="dropdown-item">New Customer?</span>
                    <Link to="/register" className="dropdown-item text-primary">
                      Sign Up
                    </Link>
                  </li>

                  <li><a className="dropdown-item">My Profile</a></li>
                  <li><a className="dropdown-item">Orders</a></li>
                  <li><a className="dropdown-item">Wishlist</a></li>
                </ul>
              </>
            ) : (
              <>
                <button type="button" className="btn text-dark fw-bold">
                  Hi, {user.user_name}
                </button>
                <img className="down_arrow" src="/svg/down_arrow.svg" alt="" />

                <ul className="dropdown-menu dropdown-menu1">
                  <li><a className="dropdown-item">My Profile</a></li>
                  <li>
                    <Link to="/order" className="dropdown-item">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger fw-bold"
                      onClick={handleLogout}
                    >
                      🚪 Logout
                    </button>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>

        {/* CART */}
        <div className="cart">
          <Link to="/cart">
            <button className="btn g-2 text-dark">
              <span>
                <img src="/svg/header_cart-eed150.svg" alt="" />
                Cart
              </span>
            </button>
          </Link>
        </div>

        {/* SELLER */}
        <div className="sellor">
          <img src="/svg/Store-9eeae2.svg" alt="" />
          <button className="btn text-dark">
            <span>Become a Seller</span>
          </button>
        </div>

        {/* THREE DOT MENU */}
        <div className="btn-group2 dropdown1">
          <div className="three-dot">
            <img src="/svg/header_3verticalDots-ea7819.svg" alt="" />

            <ul className="dropdown-menu dropdown-menu2">
              <li>
                <Link to="/order" className="dropdown-item">
                  <img
                    src="/svg/order_svg.png"
                    style={{ width: "20px", marginRight: "8px" }}
                    alt=""
                  />
                  Orders
                </Link>
              </li>

              <li><a className="dropdown-item">Notification Preferences</a></li>
              <li><a className="dropdown-item">Customer Care</a></li>
              <li><a className="dropdown-item">Advertise</a></li>
              <li><a className="dropdown-item">Download App</a></li>

              {user && (
                <li>
                  <button
                    className="dropdown-item text-danger fw-bold"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* SMALL SCREEN SEARCH */}
      <div className="search2" id="navbar1">
        <div className="search-box">
          <img className="search2-svg" src="/svg/search.svg" alt="" />
          <input type="text" placeholder="Search for Products, Brands and More" />
        </div>
      </div>
    </>
  );
}
