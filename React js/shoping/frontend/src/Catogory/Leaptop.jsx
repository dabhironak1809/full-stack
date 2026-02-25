 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Leaptop() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:1111/leaptop");
      setProducts(res.data);
    } catch (error) {
      console.error("❌ Error fetching laptop data:", error);
    }
  };

  return (
    <div className="container m-top pb-4">
      <h2 className="mb-4 text-center fw-bold">Latest Laptops</h2>

      <div className="row g-3 g-md-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={product.leaptop_id}
            >
              <div
                className="card h-100 shadow-sm"
                style={{ cursor: "pointer", borderRadius: "10px" }}
                onClick={() =>
                  navigate(`/Product_Detail/${product.leaptop_id}`, {
                    state: product,
                  })
                }
              >
                {/* IMAGE */}
                <img
                  src={`http://localhost:1111/leaptop_img/${product.img}`}
                  className="card-img-top img-fluid"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                  alt={product.name}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{product.name}</h5>

                  <p className="card-text small" style={{ minHeight: "40px" }}>
                    {product.description.length > 50
                      ? product.description.slice(0, 50) + "..."
                      : product.description}
                  </p>

                  <h6 className="fw-bold mt-auto">₹{product.price}</h6>

                  <button
                    className="btn btn-outline-primary w-100 mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/Product_Detail/${product.leaptop_id}`, {
                        state: product,
                      });
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center mt-4">📦 No products available</h4>
        )}
      </div>
    </div>
  );
}


// ===========
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Leaptop() {
//   const navigate = useNavigate();

//   const products = [
//     {
//       id: 1,
//       name: "Apple MacBook Air M2",
//       description: "Powered by the M2 chip, 13-inch Retina display, lightweight and fast.",
//       price: 99999,
//       img: "/catogory/leaptop/Apple MacBook Air M2.png"
//     },
//     {
//       id: 2,
//       name: "HP Pavilion 15",
//       description: "Intel Core i5 12th Gen, 16GB RAM, 512GB SSD, perfect for everyday use.",
//       price: 58999,
//       img: "/catogory/leaptop/HP Pavilion 15.jpg"
//     },
//     {
//       id: 3,
//       name: "Dell Inspiron 14",
//       description: "Compact laptop with Ryzen 5 processor and long battery life.",
//       price: 52999,
//       img: "/catogory/leaptop/Dell Inspiron 14.jpg"
//     },
//     {
//       id: 4,
//       name: "Lenovo IdeaPad Gaming 3",
//       description: "Ryzen 7, RTX 3050, 120Hz display – perfect for gaming and work.",
//       price: 74999,
//       img: "/catogory/leaptop/Lenovo IdeaPad Gaming 3.jpg"
//     },
//   ];

//   return (
//     <div className="container m-top">
//       <h2 className="mb-4">Latest Laptops</h2>

//       <div className="row row-cols-2 row-cols-md-4 g-4">
//         {products.map((product) => (
//           <div className="col" key={product.id}>
//             <div className="card c1">
//               <img src={product.img} className="card-img-top" alt={product.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-text">
//                   <strong>Price: ₹{product.price}</strong>
//                 </p>
//                 <button
//                   className="btn btn-outline-primary"
//                   onClick={() => navigate(`/Product_Detail/${product.id}`, { state: product })}
//                 >
//                   Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
