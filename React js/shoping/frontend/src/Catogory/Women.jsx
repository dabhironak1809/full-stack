 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Women() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:1111/women");
      setProducts(res.data);
    } catch (error) {
      console.error("❌ Error fetching women products:", error);
    }
  };

  return (
    <div className="container m-top pb-4">

      <h2 className="mb-4 text-center fw-bold">Women's Fashion Collection</h2>

      <div className="row g-3 g-md-4">

        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.women_id}>
              <div
                className="card h-100 shadow-sm"
                style={{ cursor: "pointer", borderRadius: "10px" }}
                onClick={() =>
                  navigate(`/Product_Detail/${product.women_id}`, { state: product })
                }
              >
                {/* IMAGE FIXED + RESPONSIVE */}
                <img
                  src={`http://localhost:1111/women_img/${product.img}`}
                  className="card-img-top img-fluid"
                  style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "contain",
                    padding: "10px",
                    background: "#f8f8f8",
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
                    className="btn btn-outline-success w-100 mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/Product_Detail/${product.women_id}`, { state: product });
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



// ==========

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Women() {
//   const navigate = useNavigate();

//   const products = [
//     {
//       id: 1,
//       name: "Elegant Floral Maxi Dress",
//       description:
//         "Flowing rayon dress with a vibrant floral print, suitable for summer events. Sizes XS-XL.",
//       price: 899,
//       img: "/catogory/women/Elegant Floral Maxi Dress.jpg",
//     },
//     {
//       id: 2,
//       name: "High-Waisted Skinny Jeans",
//       description:
//         "Stretch denim jeans in a dark wash, comfortable for everyday wear.",
//       price: 529,
//       img: "/catogory/women/High-Waisted Skinny Jeans.webp",
//     },
//     {
//       id: 3,
//       name: "Cashmere Turtleneck Sweater",
//       description:
//         "Luxuriously soft black cashmere sweater, ideal for the winter season.",
//       price: 950,
//       img: "/catogory/women/Cashmere Turtleneck Sweater.webp",
//     },
//     {
//       id: 4,
//       name: "Classic White Blouse",
//       description:
//         "Formal cotton blouse with puff sleeves, versatile for office or casual.",
//       price: 419,
//       img: "/catogory/women/Classic White Blouse.jpg",
//     },
//   ];

//   return (
//     <div className="container m-top">
//       <h2 className="mb-4">Women's Fashion Collection</h2>
//       <div className="row row-cols-2 row-cols-md-4 g-4">
//         {products.map((product) => (
//           <div className="col" key={product.id}>
//             <div
//               className="card c1"
//               onClick={() => navigate(`/product/${product.id}`, { state: product })}
//               style={{ cursor: "pointer" }} // 👈 Add pointer cursor
//             >
//               <img
//                 src={product.img}
//                 className="card-img-top"
//                 alt={product.name}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-text">
//                   <strong>Price: ₹{product.price}</strong>
//                 </p>
//                 <button
//                   className="btn btn-outline-primary"
//                   onClick={(e) => {
//                     e.stopPropagation(); // ❗ Prevent card click event
//                     navigate(`/Product_Detail/${product.id}`, { state: product });
//                   }}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
