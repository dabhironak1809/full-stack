import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {

  const [display_product, setDisplayProduct] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  // Get product from location state
  let product = location.state;
  const totalPrice = product?.price * qty;

  useEffect(() => {
    if (!product) {
      fetchProduct(); // If refreshed
    } else {
      setDisplayProduct([product]); // Product already in state
    }
  }, []);

  // 🔥 Fetch from backend (all categories)
  const fetchProduct = async () => {
    try {
      const apiList = [
        axios.get(`http://localhost:1111/men/${id}`),
        axios.get(`http://localhost:1111/mobile/${id}`),
        axios.get(`http://localhost:1111/women/${id}`),
        axios.get(`http://localhost:1111/child/${id}`),
        axios.get(`http://localhost:1111/leaptop/${id}`),
        axios.get(`http://localhost:1111/kitchan/${id}`)
      ];

      const responses = await Promise.allSettled(apiList);

      for (let res of responses) {
        if (res.status === "fulfilled" && res.value.data.length > 0) {
          setDisplayProduct(res.value.data);
          return;
        }
      }

      alert("⚠️ Product not found!");
      navigate(-1);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // 🚨 Prevent crash before data loads
  if (display_product.length === 0) {
    return <h3 className="text-center mt-5">Loading Product...</h3>;
  }

  const prod = display_product[0];

  // 🎯 Detect correct category for image
  let imgPath = "";
  if (prod.men_id) imgPath = `http://localhost:1111/men_img/${prod.img}`;
  else if (prod.mobile_id) imgPath = `http://localhost:1111/mobile_img/${prod.img}`;
  else if (prod.women_id) imgPath = `http://localhost:1111/women_img/${prod.img}`;
  else if (prod.child_id) imgPath = `http://localhost:1111/child_img/${prod.img}`;
  else if (prod.leaptop_id) imgPath = `http://localhost:1111/leaptop_img/${prod.img}`;
  else if (prod.kitchan_id) imgPath = `http://localhost:1111/kitchan_img/${prod.img}`;
  else imgPath = "https://via.placeholder.com/300"; // Fallback

  const handleAddToCart = async () => {
    try {
      // 1️⃣ Prepare data
      const cartData = {
        product_id: prod.men_id || prod.mobile_id || prod.women_id || prod.child_id || prod.leaptop_id || prod.kitchan_id,
        category: prod.men_id ? "men" :
          prod.mobile_id ? "mobile" :
            prod.women_id ? "women" :
              prod.child_id ? "child" :
                prod.leaptop_id ? "leaptop" :
                  prod.kitchan_id ? "kitchan" : "",
        name: prod.name,
        price: prod.price,
        quantity: qty,
        total_price: totalPrice,
        img: prod.img,
        description: prod.description
      };

      // 2️⃣ Insert into database
      const res = await axios.post("http://localhost:1111/cart", cartData);

      // 3️⃣ After successful insert -> navigate to cart page
      // if (res.status === 200) {
      navigate("/cart");
      // } else {
      //   alert("Failed to insert data");
      // }
    } catch (error) {
      console.error(error);
      alert("❌ Error adding to cart. Check backend console.");
    }
  };



  // ====== buy direct a product

  const handleBuyNow = async () => {
    try {
      // Check if user is logged in
     const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData) {
        alert("⚠️ Please login first!");
        navigate("/login");
        return;
      }

      // Prepare product data
      const orderData = {
        user_id: userData.user_id,
        product_id: prod.men_id || prod.mobile_id || prod.women_id || prod.child_id || prod.leaptop_id || prod.kitchan_id,
        catogory: prod.men_id ? "men" :
          prod.mobile_id ? "mobile" :
            prod.women_id ? "women" :
              prod.child_id ? "child" :
                prod.leaptop_id ? "leaptop" :
                  prod.kitchan_id ? "kitchan" : "",
        name: prod.name,
        price: prod.price,
        quantity: qty,
        total_price: totalPrice,
        img: prod.img,
        description: prod.description
      };

      // Option 1: Add to cart then go to cart/checkout
      await axios.post("http://localhost:1111/order", orderData);

      // Option 2: Or directly create order in orders table
      // await axios.post("http://localhost:1111/order", orderData);

      // Redirect to cart or checkout
      navigate("/order"); // or /checkout
    } catch (error) {
      console.error(error);
      alert("❌ Error processing Buy Now.");
    }
  };



  return (
    <div className="container m-top" style={{ zIndex: 0, position: "relative" }}>
      <button className="btn btn-outline-dark mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="card shadow-lg border-0">
        <div className="row g-0 p-4 align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={imgPath}
              alt={prod.name}
              className="img-fluid rounded"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-7">
            <h2 className="fw-bold">{prod.name}</h2>
            <p className="text-muted">{prod.description}</p>
            <h3 className="text-success fw-bold">₹{prod.price * qty}</h3>

            <div className="my-3">
              <label className="me-2 fw-medium">Quantity:</label>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => qty > 1 && setQty(qty - 1)}
              >
                -
              </button>
              <span className="mx-2 fw-bold">{qty}</span>
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
            <div className="my-3">
              <button
                className="btn btn-success btn-lg me-3"
                onClick={handleAddToCart}
              >
                🛒 Add to Cart
              </button>

              <button
                className="btn btn-primary btn-lg"
                onClick={handleBuyNow}
              >
                💰 Buy Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

 
 