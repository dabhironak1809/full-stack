 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Kitchen() {
  const navigate = useNavigate();
  const [kitchenData, setKitchenData] = useState([]);

  useEffect(() => {
    const getKitchenData = async () => {
      try {
        const res = await axios.get("http://localhost:1111/kitchan");
        setKitchenData(res.data);
      } catch (error) {
        console.error("❌ Error fetching kitchen products:", error);
        setKitchenData([]);
      }
    };
    getKitchenData();
  }, []);

  return (
    <div className="container m-top pb-4">
      <h2 className="mb-4 text-center fw-bold">Kitchen Essentials Collection</h2>

      <div className="row g-3 g-md-4">
        {kitchenData.length > 0 ? (
          kitchenData.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.kitchan_id}>
              <div
                className="card h-100 shadow-sm"
                style={{ cursor: "pointer", borderRadius: "10px" }}
                onClick={() =>
                  navigate(`/Product_Detail/${product.kitchan_id}`, {
                    state: product,
                  })
                }
              >
                {/* IMAGE */}
                <img
                  src={`http://localhost:1111/kitchan_img/${product.img}`}
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
                      navigate(`/Product_Detail/${product.kitchan_id}`, {
                        state: product,
                      });
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center mt-4">📦 No kitchen products available</h4>
        )}
      </div>
    </div>
  );
}
