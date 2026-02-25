 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Child() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:1111/child");
      setProducts(res.data);
    } catch (error) {
      console.error("❌ Error fetching child products:", error);
    }
  };

  return (
    <div className="container m-top pb-4">
      <h2 className="mb-4 text-center fw-bold">Child's Fashion Collection</h2>

      <div className="row g-3 g-md-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.child_id}>
              <div
                className="card h-100 shadow-sm"
                style={{ cursor: "pointer", borderRadius: "10px" }}
                onClick={() =>
                  navigate(`/Product_Detail/${product.child_id}`, {
                    state: product,
                  })
                }
              >
                {/* IMAGE */}
                <img
                  src={`http://localhost:1111/child_img/${product.img}`}
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
                    className="btn btn-outline-success w-100 mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/Product_Detail/${product.child_id}`, {
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
          <h4 className="text-center mt-4">📦 No child products available</h4>
        )}
      </div>
    </div>
  );
}


// ======
// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Child() {
//   const navigate = useNavigate();

//   const products = [
//     {
//       id: 1,
//       name: "Classic T-Shirt & Pant",
//       description:
//         "Slim-fit T-shirt, pink and black fancy style. Size M.",
//       price: 499,
//       img: "/Catogory/child/c1.webp",
//     },
//     {
//       id: 2,
//       name: "Black Kurta & White Pant",
//       description:
//         "Long black kurta with white pant. Size M.",
//       price: 699,
//       img: "/Catogory/child/c2.webp",
//     },
//     {
//       id: 3,
//       name: "Pink Punjabi Camiz Fancy",
//       description:
//         "Fancy Punjabi suit with salwar. Size M.",
//       price: 549,
//       img: "/Catogory/child/c3.jpeg",
//     },
//     {
//       id: 4,
//       name: "Pink Casual Kurti",
//       description:
//         "Simple kurti with salwar. Size M.",
//       price: 469,
//       img: "/Catogory/child/c4.jpeg",
//     },
//   ];

//   return (
//     <div className="container m-top">
//       <h2 className="mb-4">Child's Fashion Collection</h2>
//       <div className="row row-cols-2 row-cols-md-4 g-4">
//         {products.map((product) => (
//           <div className="col" key={product.id}>
//             <div
//               className="card c1"
//               onClick={() => navigate(`/product/${product.id}`, { state: product })}
//               style={{ cursor: "pointer" }} // 👈 Makes the card clickable
//             >
//               <img
//                 src={product.img}
//                 className="card-img-top"
//                 alt={product.name}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p>
//                   <strong>Price: ₹{product.price}</strong>
//                 </p>

//                 {/* 🔍 View Details Button */}
//                 <button
//                   className="btn btn-outline-primary"
//                   onClick={(e) => {
//                     e.stopPropagation(); // 🚫 Prevent card click event
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
