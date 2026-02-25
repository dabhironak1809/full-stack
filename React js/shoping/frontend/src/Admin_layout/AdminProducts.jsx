import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminProducts() {

  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showForm3, setShowForm3] = useState(false);
  const [showForm4, setShowForm4] = useState(false);
  const [showForm5, setShowForm5] = useState(false);

  const [activeCategory, setActiveCategory] = useState("");

  const [name, setname] = useState();
  const [description, setdescription] = useState();
  const [price, setprice] = useState();
  const [img, setimg] = useState(null);

  const [currentProduct, setCurrentProduct] = useState(null); // NEW


  const [mendata, setmendata] = useState([]);
  const [mobiledata, setmobiledata] = useState([]);
  const [kitchandata, setkitchandata] = useState([]);
  const [childdata, setchilddata] = useState([]);
  const [leaptopdata, setleaptopdata] = useState([]);
  const [womendata, setwomendata] = useState([]);


  useEffect(() => {
    getmendata();
    getmobiledata();
    getkitchandata();
    getchilddata();
    getleaptopdata();
    getwomendata();
  }, [])

  const openForm = (cat) => {
    closeForm();
    setActiveCategory(cat);

    if (cat === "men") setShowForm(true);
    else if (cat === "mobile") setShowForm1(true);
    else if (cat === "kitchen") setShowForm2(true);
    else if (cat === "child") setShowForm3(true);
    else if (cat === "leaptop") setShowForm4(true);
    else if (cat === "women") setShowForm5(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setShowForm1(false);
    setShowForm2(false);
    setShowForm3(false);
    setShowForm4(false);
    setShowForm5(false);
    setActiveCategory("");

    setActiveCategory("");
    setname("");
    setdescription("");
    setprice("");
    setimg(null);
    setCurrentProduct(null);

  };

  // men products manage code ==========


  const getmendata = async () => {
    const res = await axios.get("http://localhost:1111/men")
    setmendata(res.data)
    // console.log(res.data);

  }


  const insertmendata = async () => {

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);
    if (img) formdata.append("img", img);

    const res = await axios.post("http://localhost:1111/men",
      formdata);

    if (res.data) {
      alert("data inserted")
      getmendata();
      closeForm();

    } else {
      alert("data not insert")
    }
  }
  const deletemendata = async (men_id) => {

    const res = await axios.delete("http://localhost:1111/men/" + men_id);
    alert(res.data);
    getmendata();

  }
  // const updatemendata = async () => {
  //   if (!currentProduct) return;

  //   const formdata = new FormData();
  //   formdata.append("name", name);
  //   formdata.append("description", description);
  //   formdata.append("price", price);

  //   if (img) {
  //     // Admin selected a new image
  //     formdata.append("img", img);
  //   } else {
  //     // Keep the old image
  //     formdata.append("img", currentProduct.img);
  //   }

  //   try {
  //     const res = await axios.put(`http://localhost:1111/men/${currentProduct.men_id}`, formdata);

  //     if (res.data) {
  //       alert("Product updated successfully!");
  //       getmendata(); // refresh list
  //       closeForm();   // close edit form
  //     } else {
  //       alert("Failed to update product.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Error updating product.");
  //   }
  // };



  const updatemendata = async () => {
    if (!currentProduct) return;

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);

    // Check if admin selected a new image
    if (img) {
      formdata.append("img", img);  // NEW FILE
    } else {
      formdata.append("old_img", currentProduct.img); // OLD FILE NAME
    }

    try {
      const res = await axios.put(
        `http://localhost:1111/men/${currentProduct.men_id}`,
        formdata,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert(res.data);
      getmendata();
      closeForm();

    } catch (err) {
      console.error(err);
      alert("Error updating!");
    }
  };

  // ======================= > MOBILE catogory Manage ..

  const getmobiledata = async () => {
    const res = await axios.get("http://localhost:1111/mobile");
    setmobiledata(res.data)
    // console.log(res.data);

  }

  const insermobiledata = async () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);
    if (img) formdata.append("img", img);

    const res = await axios.post("http://localhost:1111/mobile", formdata);
    if (res.data) {
      alert("mobile catogory data inserted");
      getmobiledata()
      closeForm();
    }
  }

  const deletemobiledata = async (mobile_id) => {
    const res = await axios.delete("http://localhost:1111/mobile/" + mobile_id);
    alert(res.data)
    getmobiledata();
  }

  const updatemobiledata = async () => {
    if (!currentProduct) return;

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);

    if (img) {
      formdata.append("img", img);
    } else {
      formdata.append("img", currentProduct.img);
    }
    try {

      const res = await axios.put(`http://localhost:1111/mobile/${currentProduct.mobile_id}`, formdata);

      if (res.data) {
        alert("product updated succesfully");
        getmobiledata();
        closeForm();
      }
      else {
        alert("failed to update products");
      }

    } catch (error) {
      console.log(error);
      alert("error updating products");
    }
  };

  // =================== kitchan catogory Manage 
  const getkitchandata = async () => {
    const res = await axios.get("http://localhost:1111/kitchan");
    setkitchandata(res.data)
    // console.log(res.data);

  }

  const insertkitchandata = async () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description)
    formdata.append("price", price)
    if (img) formdata.append("img", img);

    const res = await axios.post("http://localhost:1111/kitchan", formdata);
    if (res.data) {
      alert("kitchan data inserted")
      getkitchandata();
      closeForm()
    }
  }

  const deletekitchandata = async (kitchan_id) => {
    const res = await axios.delete("http://localhost:1111/kitchan/" + kitchan_id);
    alert(res.data);
    getkitchandata();
  }

  const updatekitchandata = async () => {
    if (!currentProduct) return;

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);

    if (img) {
      formdata.append("img", img);
    } else {
      formdata.append("img", currentProduct.img);
    }

    try {
      const res = await axios.put(`http://localhost:1111/kitchan/${currentProduct.kitchan_id}`, formdata);

      if (res.data) {
        alert("product updates succesfully");
        getkitchandata();
        closeForm();
      } else {
        alert("error updating products");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating product.");
    }

  };

  // ===== child query

  const getchilddata = async () => {
    const res = await axios.get("http://localhost:1111/child");
    setchilddata(res.data)
    console.log(res.data);

  }

  const insertchilddata = async () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description)
    formdata.append("price", price)
    if (img) formdata.append("img", img);

    const res = await axios.post("http://localhost:1111/child", formdata);
    if (res.data) {
      alert("child data inserted")
      getchilddata();
      closeForm()
    }
  }

  const deletechilddata = async (child_id) => {
    const res = await axios.delete("http://localhost:1111/child/" + child_id);
    alert(res.data);
    getkitchandata();
  }


  const updatechilddata = async () => {
    if (!currentProduct) return;

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);

    if (img) {
      // Admin selected a new image
      formdata.append("img", img);
    } else {
      // Keep the old image
      formdata.append("img", currentProduct.img);
    }
    try {
      const res = await axios.put(`http://localhost:1111/child/${currentProduct.child_id}`, formdata);

      if (res.data) {
        alert("Product updated successfully!");
        getmendata(); // refresh list
        closeForm();   // close edit form
      } else {
        alert("Failed to update product.");
      }
    }
    catch (error) {
      console.error(error);
      alert("Error updating product.");
    }
  }

  // ============= leaptop 

  const getleaptopdata = async () => {
    const res = await axios.get("http://localhost:1111/leaptop");
    setleaptopdata(res.data)
  }

  const insertleaptopndata = async () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description)
    formdata.append("price", price)
    if (img) formdata.append("img", img);

    const res = await axios.post("http://localhost:1111/leaptop", formdata);
    if (res.data) {
      alert("kitchan data inserted")
      getleaptopdata();
      closeForm()
    }
  }

  const deleteleaptopdata = async (leaptop_id) => {
    const res = await axios.delete("http://localhost:1111/leaptop/" + leaptop_id);
    alert(res.data);
    getkitchandata();
  }

  const updateleaptopdata = async () => {
    if (!currentProduct) return;

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);

    if (img) {
      // Admin selected a new image
      formdata.append("img", img);
    } else {
      // Keep the old image
      formdata.append("img", currentProduct.img);
    }
    try {
      const res = await axios.put(`http://localhost:1111/leaptop/${currentProduct.leaptop_id}`, formdata);

      if (res.data) {
        alert("Product updated successfully!");
        getmendata(); // refresh list
        closeForm();   // close edit form
      } else {
        alert("Failed to update product.");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating product.");
    }
  }


  // ==== women query 

  const getwomendata = async () => {
    const res = await axios.get("http://localhost:1111/women");
    setwomendata(res.data)
  }

  const insertwomendata = async () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description)
    formdata.append("price", price)
    if (img) formdata.append("img", img);

    const res = await axios.post("http://localhost:1111/women", formdata);
    if (res.data) {
      alert("kitchan data inserted")
      getwomendata();
      closeForm()
    }
  }

  const deletewomendata = async (women_id) => {
    const res = await axios.delete("http://localhost:1111/women/" + women_id);
    alert(res.data);
    getkitchandata();
  }

  const updatewomendata = async () => {
    if (!currentProduct) return;

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("description", description);
    formdata.append("price", price);

    if (img) {
      // Admin selected a new image
      formdata.append("img", img);
    } else {
      // Keep the old image
      formdata.append("img", currentProduct.img);
    }

    try {
      const res = await axios.put(`http://localhost:1111/women/${currentProduct.women_id}`, formdata);

      if (res.data) {
        alert("Product updated successfully!");
        getmendata(); // refresh list
        closeForm();   // close edit form
      } else {
        alert("Failed to update product.");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating product.");
    }
  }

  return (
    <div className="container m-top">
      <h2>📦 Admin Product Management</h2>
      <button className="btn btn-outline-dark mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>
      {/* ================= MEN Products */}


      {showForm && (
        <div className="card p-3 mb-4">
          <h4>
            {currentProduct ? `✏️ Edit ${currentProduct.name}` : `➕ Add ${activeCategory.toUpperCase()} Product`}
          </h4>

          <input
            type="text"
            placeholder="Product Name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <textarea
            placeholder="Product Description"
            className="form-control mb-2"
            rows="3"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>

          <input
            type="number"
            placeholder="Price ₹"
            className="form-control mb-2"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />

          {/* IMAGE PREVIEW */}
          {currentProduct && (
            <div className="mb-2">
              <p>Current Image:</p>
              <img
                src={`http://localhost:1111/men_img/${currentProduct.img}`}
                width="100"
                height="100"
                alt="Current Product"
                className="border rounded mb-2"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="form-control mb-2"
            onChange={(e) => setimg(e.target.files[0])}
          />

          <button className="btn btn-success" onClick={currentProduct ? updatemendata : insertmendata}>
            {currentProduct ? "💾 Update" : "✔ Save"}
          </button>
          <button className="btn btn-secondary ms-2" onClick={closeForm}>
            ❌ Cancel
          </button>
        </div>
      )}

      {/*  */}
      <div className="mb-4">
        <h3>MEN Products</h3>
        <button
          className="btn btn-primary mb-2"
          onClick={() => openForm("men")}
        >
          ➕ Add Men Product
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Details</th>
              <th>Price ₹</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {mendata.map((product) => (

              <tr>
                <td>

                  <img
                    src={`http://localhost:1111/men_img/${product.img}`}
                    width="80"
                    height="80"
                    alt="Product"
                  />

                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      // Use the product object directly from mendata (or fetch by ID if needed)
                      setCurrentProduct(product);   // store the full product
                      setname(product.name);        // prefill the form
                      setdescription(product.description);
                      setprice(product.price);
                      setimg(null);                 // clear file input
                      setShowForm(true);            // open the form
                      setActiveCategory("men");     // for heading
                    }}
                  >
                    Edit
                  </button>
                  {" "}
                  <button className="btn btn-danger btn-sm" onClick={() => deletemendata(product.men_id)}>Delete</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* ========================= MOBILE Products */}

      {showForm1 && (
        <div className="card p-3 mb-4">
          <h4>
            {currentProduct ? `✏️ Edit ${currentProduct.name}` : `➕ Add ${activeCategory.toUpperCase()} Product`}
          </h4>

          <input
            type="text"
            placeholder="Product Name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <textarea
            placeholder="Product Description"
            className="form-control mb-2"
            rows="3"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>

          <input
            type="number"
            placeholder="Price ₹"
            className="form-control mb-2"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />

          {currentProduct && (
            <div className="mb-2">
              <p>Current Image:</p>
              <img
                src={`http://localhost:1111/mobile_img/${currentProduct.img}`}
                width="100"
                height="100"
                alt="Current Product"
                className="border rounded mb-2"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="form-control mb-2"
            onChange={(e) => setimg(e.target.files[0])}
          />

          <button className="btn btn-success" onClick={currentProduct ? updatemobiledata : insermobiledata}>
            {currentProduct ? "💾 Update" : "✔ Save"}
          </button>
          <button className="btn btn-secondary ms-2" onClick={closeForm}>
            ❌ Cancel
          </button>
        </div>
      )}

      {/* ==== */}
      <div className="mb-4">
        <h3>MOBILE Products</h3>
        <button
          className="btn btn-primary mb-2"
          onClick={() => openForm("mobile")}
        >
          ➕ Add Mobile Product
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>image</th>
              <th>Name</th>
              <th>Price ₹</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {mobiledata.map((product) => (
              <tr>
                <td>
                  <img
                    src={`http://localhost:1111/mobile_img/${product.img}`}
                    width="80"
                    height="80"
                    alt="Product"
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={() => {
                    setCurrentProduct(product);
                    setname(product.name);
                    setdescription(product.description);
                    setprice(product.price);
                    setimg(null);
                    setShowForm1(true);

                    setActiveCategory("mobile");

                  }} >Edit</button>{" "}
                  <button className="btn btn-danger btn-sm" onClick={() => deletemobiledata(product.mobile_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* =================================== KITCHEN Products */}
      {showForm2 && (
        <div className="card p-3 mb-4">
          <h4>
            {currentProduct ? `✏️ Edit ${currentProduct.name}` : `➕ Add ${activeCategory.toUpperCase()} Product`}
          </h4>
          <input
            type="text"
            placeholder="Product Name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <textarea
            placeholder="Product Description"
            className="form-control mb-2"
            rows="3"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>

          <input
            type="number"
            placeholder="Price ₹"
            className="form-control mb-2"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          {currentProduct && (
            <div className="mb-2">
              <p>Current Image:</p>
              <img
                src={`http://localhost:1111/kitchan_img/${currentProduct.img}`}
                width="100"
                height="100"
                alt="Current Product"
                className="border rounded mb-2"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="form-control mb-2"
            onChange={(e) => setimg(e.target.files[0])}
          />

          <button className="btn btn-success" onClick={currentProduct ? updatekitchandata : insertkitchandata}>
            {currentProduct ? "💾 Update" : "✔ Save"}
          </button>
          <button className="btn btn-secondary ms-2" onClick={closeForm}>
            ❌ Cancel
          </button>
        </div>

      )}
      {/* === */}
      <div className="mb-4">
        <h3>KITCHEN Products</h3>
        <button
          className="btn btn-primary mb-2"
          onClick={() => openForm("kitchen")}
        >
          ➕ Add Kitchen Product
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Details</th>
              <th>Price ₹</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {kitchandata.map((product) => (

              <tr>
                <td>
                  <img src={`http://localhost:1111/kitchan_img/${product.img}`} width="80"
                    height="80"
                    alt="Product" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      // Use the product object directly from mendata (or fetch by ID if needed)
                      setCurrentProduct(product);   // store the full product
                      setname(product.name);        // prefill the form
                      setdescription(product.description);
                      setprice(product.price);
                      setimg(null);                 // clear file input
                      setShowForm2(true);            // open the form
                      setActiveCategory("kitchen");     // for heading
                    }}
                  >
                    Edit
                  </button>{" "}
                  <button className="btn btn-danger btn-sm" onClick={() => deletekitchandata(product.kitchan_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ====================== child products */}

      {showForm3 && (
        <div className="card p-3 mb-4">
          <h4>
            {currentProduct ? `✏️ Edit ${currentProduct.name}` : `➕ Add ${activeCategory.toUpperCase()} Product`}
          </h4>

          <input
            type="text"
            placeholder="Product Name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <textarea
            placeholder="Product Description"
            className="form-control mb-2"
            rows="3"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>

          <input
            type="number"
            placeholder="Price ₹"
            className="form-control mb-2"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />

          {currentProduct && (
            <div className="mb-2">
              <p>Current Image:</p>
              <img
                src={`http://localhost:1111/child_img/${currentProduct.img}`}
                width="100"
                height="100"
                alt="Current Product"
                className="border rounded mb-2"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="form-control mb-2" onChange={(e) => setimg(e.target.files[0])}
          />
          {/* 
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={activeCategory}
                    disabled
                  /> */}
          <button className="btn btn-success" onClick={currentProduct ? updatechilddata : insertchilddata}>
            {currentProduct ? "💾 Update" : "✔ Save"}
          </button>
          <button className="btn btn-secondary ms-2" onClick={closeForm}>
            ❌ Cancel
          </button>
        </div>

      )}
      {/* === */}
      <div className="mb-4">
        <h3>child Products</h3>
        <button
          className="btn btn-primary mb-2"
          onClick={() => openForm("child")}
        >
          ➕ Add Kitchen Product
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Details</th>
              <th>Price ₹</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {childdata.map((product) => (

              <tr>
                <td>
                  <img src={`http://localhost:1111/child_img/${product.img}`} width="80"
                    height="80"
                    alt="Product" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      // Use the product object directly from mendata (or fetch by ID if needed)
                      setCurrentProduct(product);   // store the full product
                      setname(product.name);        // prefill the form
                      setdescription(product.description);
                      setprice(product.price);
                      setimg(null);                 // clear file input
                      setShowForm3(true);            // open the form
                      setActiveCategory("child");     // for heading
                    }}
                  >
                    Edit
                  </button>{" "}
                  <button className="btn btn-danger btn-sm" onClick={() => deletechilddata(product.child_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ====================== leaptop product    */}

      {showForm4 && (
        <div className="card p-3 mb-4">
          <h4>
            {currentProduct ? `✏️ Edit ${currentProduct.name}` : `➕ Add ${activeCategory.toUpperCase()} Product`}
          </h4>

          <input
            type="text"
            placeholder="Product Name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <textarea
            placeholder="Product Description"
            className="form-control mb-2"
            rows="3"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>

          <input
            type="number"
            placeholder="Price ₹"
            className="form-control mb-2"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          {currentProduct && (
            <div className="mb-2">
              <p>Current Image:</p>
              <img
                src={`http://localhost:1111/leaptop_img/${currentProduct.img}`}
                width="100"
                height="100"
                alt="Current Product"
                className="border rounded mb-2"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="form-control mb-2" onChange={(e) => setimg(e.target.files[0])}
          />
          {/* 
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={activeCategory}
                    disabled
                  /> */}
          <button className="btn btn-success" onClick={currentProduct ? updateleaptopdata : insertleaptopndata}>
            {currentProduct ? "💾 Update" : "✔ Save"}
          </button>
          <button className="btn btn-secondary ms-2" onClick={closeForm}>
            ❌ Cancel
          </button>
        </div>

      )}
      {/* === */}
      <div className="mb-4">
        <h3>leaptop Products</h3>
        <button
          className="btn btn-primary mb-2"
          onClick={() => openForm("leaptop")}
        >
          ➕ Add Kitchen Product
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Details</th>
              <th>Price ₹</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaptopdata.map((product) => (

              <tr>
                <td>
                  <img src={`http://localhost:1111/leaptop_img/${product.img}`} width="80"
                    height="80"
                    alt="Product" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      // Use the product object directly from mendata (or fetch by ID if needed)
                      setCurrentProduct(product);   // store the full product
                      setname(product.name);        // prefill the form
                      setdescription(product.description);
                      setprice(product.price);
                      setimg(null);                 // clear file input
                      setShowForm4(true);            // open the form
                      setActiveCategory("leaptop");     // for heading
                    }}
                  >
                    Edit
                  </button>{" "}
                  <button className="btn btn-danger btn-sm" onClick={() => deleteleaptopdata(product.leaptop_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ============ women products */}

      {showForm5 && (
        <div className="card p-3 mb-4">
          <h4>
            {currentProduct ? `✏️ Edit ${currentProduct.name}` : `➕ Add ${activeCategory.toUpperCase()} Product`}
          </h4>

          <input
            type="text"
            placeholder="Product Name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <textarea
            placeholder="Product Description"
            className="form-control mb-2"
            rows="3"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>

          <input
            type="number"
            placeholder="Price ₹"
            className="form-control mb-2"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />

          {currentProduct && (
            <div className="mb-2">
              <p>Current Image:</p>
              <img
                src={`http://localhost:1111/women_img/${currentProduct.img}`}
                width="100"
                height="100"
                alt="Current Product"
                className="border rounded mb-2"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="form-control mb-2" onChange={(e) => setimg(e.target.files[0])}
          />
          {/* 
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={activeCategory}
                    disabled
                  /> */}
          <button className="btn btn-success" onClick={currentProduct ? updatewomendata : insertwomendata}>
            {currentProduct ? "💾 Update" : "✔ Save"}
          </button>
          <button className="btn btn-secondary ms-2" onClick={closeForm}>
            ❌ Cancel
          </button>
        </div>

      )}
      {/* === */}
      <div className="mb-4">
        <h3>women  Products</h3>
        <button
          className="btn btn-primary mb-2"
          onClick={() => openForm("women")}
        >
          ➕ Add Kitchen Product
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Details</th>
              <th>Price ₹</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {womendata.map((product) => (

              <tr>
                <td>
                  <img src={`http://localhost:1111/women_img/${product.img}`} width="80"
                    height="80"
                    alt="Product" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => {
                      // Use the product object directly from mendata (or fetch by ID if needed)
                      setCurrentProduct(product);   // store the full product
                      setname(product.name);        // prefill the form
                      setdescription(product.description);
                      setprice(product.price);
                      setimg(null);                 // clear file input
                      setShowForm5(true);            // open the form
                      setActiveCategory("women");     // for heading
                    }}
                  >
                    Edit
                  </button>{" "}
                  <button className="btn btn-danger btn-sm" onClick={() => deletewomendata(product.women_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



    </div>
  );
}

