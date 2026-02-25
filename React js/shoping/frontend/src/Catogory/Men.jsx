// import React, { useEffect, useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Men() {
//   const navigate = useNavigate();
//   //  const products = [
//   //   {
//   //     id: 1,
//   //     name: "Classic Leather Jacket",
//   //     description: "Slim-fit leather jacket, black, perfect for casual or semi-formal occasions. Sizes S-XXL.",
//   //     price: 699,
//   //     img: "/catogory/men/Classic Leather Jacket.jpg"
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Light Blue Oxford Shirt",
//   //     description: "Breathable cotton shirt, ideal for office and casual wear.",
//   //     price: 449,
//   //     img: "/catogory/men/Light Blue Oxford Shirt.webp"
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Casual fancy wody",
//   //     description: "Comfortable and fancy wody .  everyday wear.",
//   //     price: 719,
//   //     img: "/catogory/men/wody.webp"
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "Black T-shirt",
//   //     description: "Slim-fit leather t-shirt, black, perfect for casual or semi-formal occasions. Sizes XXL.",
//   //     price: 30  9,
//   //     img: "/catogory/men/t-shirt.webp"
//   //   },
//   // ];

  
//   const [products, setproducts] = useState([]);

//   useEffect(() => {
//     getproducts();
//   }, [])

//   const getproducts = async () => {
//     const res = await axios.get("http://localhost:1111/men")
//     setproducts(res.data)
//   }

//    return (
//     <div className="container m-top">
//       <h2 className="mb-4">Men's Fashion Collection</h2>
//       <div className="row row-cols-2 row-cols-md-4 g-4">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div className="col" key={product.men_id}>
//               <div
//                 className="card c1"
//                 style={{ cursor: "pointer" }}
//                 onClick={() =>
//                   navigate(`/Product_Detail/${product.men_id}`, { state: product })
//                 }
//               >
//                 <img
//                   src={`http://localhost:1111/men_img/${product.img}`}
//                   className="card-img-top"
//                   alt={product.name}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">{product.description}</p>
//                   <p className="card-text">
//                     <strong>Price: ₹{product.price}</strong>
//                   </p>
//                   <button
//                     className="btn btn-outline-success me-2"
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent card click
//                       navigate(`/Product_Detail/${product.men_id}`, { state: product });
//                     }}
//                   >
//                     Details
//                   </button>
//                   {/* <button className="btn btn-outline-primary">Add to Cart</button> */}
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h4 className="text-center mt-4">📦 No products available</h4>
//         )}
//       </div>
//     </div>
//   );
// }
 import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Men() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:1111/men");
      setProducts(res.data);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    }
  };

  return (
    <div className="container m-top pb-4">
      
      <h2 className="mb-4 text-center fw-bold">Men's Fashion Collection</h2>

      <div className="row g-3 g-md-4">

        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.men_id}>
              <div 
                className="card h-100 shadow-sm"
                style={{ cursor: "pointer", borderRadius: "10px" }}
                onClick={() =>
                  navigate(`/Product_Detail/${product.men_id}`, { state: product })
                }
              >
                
                {/* IMAGE */}
               <img
  src={`http://localhost:1111/men_img/${product.img}`}
  className="card-img-top img-fluid"
  style={{
    height: "220px",
    width: "100%",
    objectFit: "contain",
    background: "#fff",
    padding: "10px",
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
                      navigate(`/Product_Detail/${product.men_id}`, { state: product });
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
