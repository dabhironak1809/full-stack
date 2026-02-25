// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../Catogory_style.css";

// export default function Login() {
//   const [loginType, setLoginType] = useState("admin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     let url =
//       loginType === "admin"
//         ? "http://localhost:1111/admin"
//         : "http://localhost:1111/userlogin";

//     try {
//       const res = await axios.get(url, { params: { email, pass: password } });

//       if (res.data.status === 200) {
//         if (loginType === "admin") {
//           localStorage.setItem("isAdmin", "true");
//           localStorage.setItem("admin", JSON.stringify(res.data.user));
//           navigate("/admin");
//         } else {
//           localStorage.setItem("isUser", "true");
//           localStorage.setItem("user", JSON.stringify(res.data.user));
//           navigate("/");
//         }
//       } else {
//         alert("Invalid login details!");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="d-flex" style={{ height: "100vh" }}>

//       {/* LEFT SIDE */}
//       <div
//         style={{
//           flex: 1,
//           background: "linear-gradient(135deg, #2874f0, #003f8f)",
//           color: "white",
//         }}
//         className="d-flex flex-column justify-content-center align-items-center"
//       >
//         <h1 style={{ fontWeight: "700", fontSize: "40px" }}>Welcome Back!</h1>
//         <p style={{ fontSize: "18px", opacity: 0.9 }}>
//           We're excited to see you again
//         </p>
//         <img
//           src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img.png"
//           alt=""
//           style={{ width: "320px", marginTop: "20px" }}
//         />
//       </div>

//       {/* RIGHT SIDE */}
//       <div
//         style={{ flex: 1 }}
//         className="d-flex justify-content-center align-items-center"
//       >
//         <div
//           className="p-5"
//           style={{
//             width: "380px",
//             borderRadius: "20px",
//             backdropFilter: "blur(10px)",
//             background: "rgba(255, 255, 255, 0.9)",
//             boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <h2 className="text-center mb-4" style={{ fontWeight: "700" }}>
//             Login
//           </h2>

//           {/* TOGGLE BUTTON */}
//           {/* <div
//             className="d-flex mb-4"
//             style={{
//               background: "#e8e8e8",
//               padding: "5px",
//               borderRadius: "50px",
//             }}
//           >
//             <button
//               className="btn w-50"
//               style={{
//                 borderRadius: "50px",
//                 background: loginType === "admin" ? "#2874f0" : "transparent",
//                 color: loginType === "admin" ? "white" : "#333",
//                 border: "none",
//                 transition: "0.3s",
//                 fontWeight: "600",
//               }}
//               onClick={() => setLoginType("admin")}
//             >
//               Admin
//             </button>

//             <button
//               className="btn w-50"
//               style={{
//                 borderRadius: "50px",
//                 background: loginType === "user" ? "#28a745" : "transparent",
//                 color: loginType === "user" ? "white" : "#333",
//                 border: "none",
//                 transition: "0.3s",
//                 fontWeight: "600",
//               }}
//               onClick={() => setLoginType("user")}
//             >
//               User
//             </button>
//           </div> */}
//           {/* Sliding Toggle */}
//           <div className="login-toggle">
//             <div
//               className={`slider ${loginType === "user" ? "move-right" : ""}`}
//             ></div>

//             <button
//               className={`toggle-btn ${loginType === "admin" ? "active" : ""}`}
//               onClick={() => setLoginType("admin")}
//             >
//               Admin
//             </button>

//             <button
//               className={`toggle-btn ${loginType === "user" ? "active" : ""}`}
//               onClick={() => setLoginType("user")}
//             >
//               User
//             </button>
//           </div>


//           {/* FORM */}
//           <form onSubmit={handleLogin}>
//             {/* Email */}
//             {/* <label style={{ fontWeight: "600" }}>Email / Mobile</label>
//             <input
//               type="text"
//               className="form-control mb-3"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={{ height: "45px", borderRadius: "10px" }}
//               required
//             /> */}
//             <div className="floating-group">
//               <input
//                 type="text"
//                 className="floating-input"
//                 placeholder=" "
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <label className="floating-label">Email / Mobile</label>
//             </div>

//             {/* Password */}
//             {/* <label style={{ fontWeight: "600" }}>Password</label>
//             <div className="position-relative mb-3">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="form-control"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={{ height: "45px", borderRadius: "10px" }}
//                 required
//               />
//               <span
//                 style={{
//                   position: "absolute",
//                   right: "15px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   cursor: "pointer",
//                   fontSize: "18px",
//                 }}
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "👁️" : "👁️‍🗨️"}
//               </span>
//             </div> */}
//             <div className="floating-group position-relative">
//   <input
//     type={showPassword ? "text" : "password"}
//     className="floating-input"
//     placeholder=" "
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     required
//   />
//   <label className="floating-label">Password</label>

//   <span
//     onClick={() => setShowPassword(!showPassword)}
//     style={{
//       position: "absolute",
//       right: "15px",
//       top: "50%",
//       transform: "translateY(-50%)",
//       cursor: "pointer",
//       fontSize: "18px",
//     }}
//   >
//     {showPassword ? "👁️" : "👁️‍🗨️"}
//   </span>
// </div>


//             {/* Login Button */}
//             <button
//               className="btn w-100"
//               style={{
//                 background: "#000",
//                 color: "white",
//                 borderRadius: "10px",
//                 height: "45px",
//                 fontWeight: "600",
//                 letterSpacing: "1px",
//               }}
//             >
//               Login
//             </button>

//             {/* Create Account Link */}
//             <p className="text-center mt-3">
//               Don’t have an account?{" "}
//               <span
//                 style={{
//                   color: "#2874f0",
//                   cursor: "pointer",
//                   fontWeight: "600",
//                 }}
//                 onClick={() => navigate("/register")}
//               >
//                 Register Now
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Catogory_style.css";

export default function Login() {
  const [loginType, setLoginType] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let url =
      loginType === "admin"
        ? "http://localhost:1111/admin"
        : "http://localhost:1111/userlogin";

    try {
      const res = await axios.get(url, { params: { email, pass: password } });

      if (res.data.status === 200) {
        if (loginType === "admin") {
          localStorage.setItem("isAdmin", "true");
          localStorage.setItem("admin", JSON.stringify(res.data.user));
          navigate("/admin");
        } else {
          localStorage.setItem("isUser", "true");
          localStorage.setItem("user", JSON.stringify(res.data.user));

          navigate("/");
        }

      } else {
        alert("Invalid login details!");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #020024, #090979, #00d4ff)",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          background: "rgba(255, 255, 255, 0.12)",
          boxShadow: "0px 0px 25px rgba(0, 255, 255, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "700",
            fontSize: "32px",
            color: "white",
            textShadow: "0px 0px 10px #00eaff",
          }}
        >
          Welcome Back 👋
        </h2>

        {/* MODERN SLIDE TOGGLE */}
        <div className="login-toggle" style={{ marginBottom: "25px" }}>
          <div
            className={`slider ${loginType === "user" ? "move-right" : ""}`}
          ></div>

          <button
            className={`toggle-btn ${loginType === "admin" ? "active" : ""}`}
            onClick={() => setLoginType("admin")}
          >
            Admin
          </button>

          <button
            className={`toggle-btn ${loginType === "user" ? "active" : ""}`}
            onClick={() => setLoginType("user")}
          >
            User
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin}>
          {/* Floating Email */}
          <div className="floating-group">
            <input
              type="text"
              className="floating-input"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="floating-label">Email / Mobile</label>
          </div>

          {/* Floating Password */}
          <div className="floating-group position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="floating-input"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="floating-label">Password</label>

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "18px",
                color: "#00eaff",
              }}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>

          {/* Login Button */}
          <button
            className="btn login-btn  mt-3">
            LOGIN
          </button>


          {/* Register Link */}
          <p className="text-center mt-3" style={{ color: "white" }}>
            Don’t have an account?{" "}
            <span
              style={{ color: "#00eaff", cursor: "pointer", fontWeight: "600" }}
              onClick={() => navigate("/register")}
            >
              Register Now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
