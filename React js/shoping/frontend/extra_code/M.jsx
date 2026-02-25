// import React, { useState, useEffect } from "react";
// import "../style.css";
// import "../media.css";
// import "../Catogory_style.css";


// import MultiCarousel from "./MultiCarousel";
// import { href, Link, useNavigate } from "react-router-dom";

// export default function M() {
//     const navigate = useNavigate();

//     const phoneItems = [
//         {
//             id: 1,
//             img: "phone/i1.webp",
//             title: "OPPO k13x 5G",
//             price: "From ₹9,499*",
//             href: "https://www.thewatchcompany.com/",
//         },
//         {
//             id: 2,
//             img: "phone/i2.webp",
//             title: "Moto Edge 60 Pro 5G",
//             price: "From ₹24,999*",
//         },
//         {
//             id: 3,
//             img: "phone/i3.webp",
//             title: "realme P4 5G",
//             price: "From ₹14,999*"
//         },
//         {
//             id: 4,
//             img: "phone/i4.webp", title: "OPPO K13 5G", price: "From ₹14,999*"
//         },
//         {
//             id: 5,
//             img: "phone/i5.webp",
//             title: "Moto G96 5G",
//             price: "Just ₹14,999*"
//         },
//         {
//             id: 6,
//             img: "phone/i6.webp",
//             title: "Realme P3x 5G",
//             price: "From ₹10,999"
//         },
//         {
//             id: 7,
//             img: "phone/i7.jpeg",
//             title: "Samsung Galaxy A35 5G",
//             price: "From ₹17,999",
//         },
//         {
//             id: 8,
//             img: "phone/i8.webp",
//             title: "realme P4 Pro 5G",
//             price: "From ₹21,499*"
//         },
//     ];

//     const productItems = [
//         {
//             id: 1,
//             img: "product - 2/i1.jpeg",
//             title: "Premium TVs",
//             price: "From ₹15,499*",
//         },
//         {
//             id: 2,
//             img: "product - 2/i2.jpeg",
//             title: " Refrigerators",
//             price: "From ₹9,999*",
//         },
//         {
//             id: 3,
//             img: "product - 2/i3.png",
//             title: "Trending deals",
//             price: "Shop now!"
//         },
//         {
//             id: 4,
//             img: "product - 2/i4.jpeg",
//             title: "Kitchen Essentials",
//             price: "From ₹1249",
//         },
//         {
//             id: 5,
//             img: "product - 2/i5.png",
//             title: "Home Essentials",
//             price: "Shop Now!"
//         },
//         {
//             id: 6,
//             img: "product - 2/i6.jpeg",
//             title: "Fans & Geysers",
//             price: "From ₹799"
//         },
//         {
//             id: 7,
//             img: "product - 2/i7.png",
//             title: "Microwave Ovens",
//             price: "From ₹4,990",
//         },
//         {
//             id: 8,
//             img: "product - 2/i7.png",
//             title: "Microwave Ovens",
//             price: "From ₹4,990",
//         },
//     ];

//     return (
//         <>
//             {/* <main id="main" class="main"> */}

//             {/* <!-- Modal --> */}

//             {/* catogory */}
//             <div className="main-category">
//                 <div className="category-box">
//                     <Link to="/men" className="category-card">
//                         <img src="Catogory/men_cloths.jfif" alt="Men Cloths" />
//                         <span>Men Cloths</span>
//                     </Link>

//                     <Link to="/Women" className="category-card">
//                         <img src="Catogory/women.webp" alt="Women Cloths" />
//                         <span>Women Cloths</span>
//                     </Link>

//                     <Link to="/Child" className="category-card">
//                         <img src="Catogory/child.jpg" alt="Kids" />
//                         <span>Kids</span>
//                     </Link>

//                     <Link to="/Kitchan" className="category-card">
//                         <img src="Catogory/kitchan.jpg" alt="Kitchen" />
//                         <span>Kitchen</span>
//                     </Link>

//                     <Link to="/Mobile" className="category-card">
//                         <img src="Catogory/phone.jfif" alt="Mobiles" />
//                         <span>Mobiles</span>
//                     </Link>

//                     <Link to="/Leaptop" className="category-card">
//                         <img src="Catogory/leaptop.jpg" alt="Laptops" />
//                         <span>Laptops</span>
//                     </Link>
//                 </div>
//             </div>


//             {/* === */}
//             <div
//                 class="modal fade"
//                 id="myAutoModal"
//                 tabindex="-1"
//                 aria-labelledby="myAutoModalLabel"
//                 aria-hidden="true"
//             >
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-body">
//                             {/* <div class="form-info">
// <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
// <h3>Business Inquiry</h3>

// <input type="text" class="form-control my-2" placeholder="Your First Name*" required />
// <input type="text" class="form-control my-2" placeholder="Your Last Name*" />
// <input type="text" class="form-control my-2" placeholder="Your Phone Number*" />
// <input type="email" class="form-control my-2" placeholder="Your Email Address*" />

// <button type="button" class="btn btn-light text-dark mt-3">Submit</button>
// <p class="mt-3">Looking to work for us? <span class="text-warning">Check career options.</span></p>
// </div> */}
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             <h3>Business Inquiry</h3>
//                             <div class="card mb-3">
//                                 <div class="card-body">
//                                     <div class="pt-4 pb-2">
//                                         <h5 class="card-title text-center pb-0 fs-4">
//                                             Login to Your Account
//                                         </h5>
//                                         <p class="text-center small">
//                                             Enter your username & password to login
//                                         </p>
//                                     </div>

//                                     <form class="row g-3 needs-validation" novalidate>
//                                         <div class="col-12">
//                                             <label for="Email id" class="form-label">
//                                                 Your Email

//                                             </label>
//                                             <div class="input-group has-validation">
//                                                 <span class="input-group-text" id="inputGroupPrepend">
//                                                     @
//                                                 </span>
//                                                 <input type="email" name="email" class="form-control" id="yourEmail" required />
//                                                 <div class="invalid-feedback">
//                                                     Please enter your username.
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div class="col-12">
//                                             <label for="yourPassword" class="form-label">
//                                                 Password
//                                             </label>
//                                             <input
//                                                 type="password"
//                                                 name="password"
//                                                 class="form-control"
//                                                 id="yourPassword"
//                                                 required
//                                             />
//                                             <div class="invalid-feedback">
//                                                 Please enter your password!
//                                             </div>
//                                         </div>

//                                         <div class="col-12">
//                                             <div class="form-check">
//                                                 <input
//                                                     class="form-check-input"
//                                                     type="checkbox"
//                                                     name="remember"
//                                                     value="true"
//                                                     id="rememberMe"
//                                                 />
//                                                 <label class="form-check-label" for="rememberMe">
//                                                     Remember me
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div class="col-12">
//                                             <button class="btn btn-primary " type="submit">
//                                                 Login
//                                             </button>
//                                         </div>
//                                         <div class="col-12">
//                                             <p class="small mb-0">
//                                                 Don't have account?{" "}
//                                                 <Link to="/register" >Create an account</Link>
//                                             </p>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- ========== --> */}

//             {/* <!-- == --> */}
//             {/* <div class="first-con">

// <div class="f-con-photo">
// <img class="ii" src="product -1/i1.png" alt="" />
// <p>Minutes</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i2.png" alt="" />
// <p>Mobiles & Tablets</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i3.png" alt="" />
// <p>TVs & Appliance</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i4.png" alt="" />
// <p>Electronics</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i5.png" alt="" />
// <p>Fashion</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i6.png" alt="" />
// <p>Home & Kitchen</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i7.png" alt="" />
// <p>Beauty & toys</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i8.png" alt="" />
// <p>Furniture</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i9.png" alt="" />
// <p>Flight Bookings</p>
// </div>
// <div class="f-con-photo">
// <img src="product -1/i10.png" alt="" />
// <p>Grocery</p>
// </div>

// </div> */}

//             {/* <!-- === --> */}

//             <div
//                 id="flipkartCarousel"
//                 class="carousel slide"
//                 data-bs-ride="carousel"
//                 data-bs-interval="3100"
//             >
//                 <div class="carousel-indicators custom-indicators">
//                     <button
//                         type="button"
//                         data-bs-target="#flipkartCarousel"
//                         data-bs-slide-to="0"
//                         class="active"
//                         aria-current="true"
//                         aria-label="Slide 1"
//                     ></button>
//                     <button
//                         type="button"
//                         data-bs-target="#flipkartCarousel"
//                         data-bs-slide-to="1"
//                         aria-label="Slide 2"
//                     ></button>
//                     <button
//                         type="button"
//                         data-bs-target="#flipkartCarousel"
//                         data-bs-slide-to="2"
//                         aria-label="Slide 3"
//                     ></button>
//                     <button
//                         type="button"
//                         data-bs-target="#flipkartCarousel"
//                         data-bs-slide-to="3"
//                         aria-label="Slide 4"
//                     ></button>
//                 </div>

//                 <div class="carousel-inner">
//                     <div class="carousel-item active">
//                         <img
//                             src="sslider_photo/i1.webp"
//                             class="d-block w-100"
//                             alt="First slide"
//                         />
//                     </div>
//                     <div class="carousel-item">
//                         <img
//                             src="sslider_photo/i3.webp"
//                             class="d-block w-100"
//                             alt="Second slide"
//                         />
//                     </div>
//                     <div class="carousel-item">
//                         <img
//                             src="sslider_photo/i2.webp"
//                             class="d-block w-100"
//                             alt="Second slide"
//                         />
//                     </div>
//                     <div class="carousel-item">
//                         <img
//                             src="sslider_photo/i4.webp"
//                             class="d-block w-100"
//                             alt="Third slide"
//                         />
//                     </div>
//                 </div>
//                 <button
//                     class="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#flipkartCarousel"
//                     data-bs-slide="prev"
//                 >
//                     <img src="svg/left_arrow.svg" alt="" />
//                     {/* <!-- <span class="carousel-control-pre-icon" aria-hidden="true"></span> --> */}
//                     <span class="visually-hidden">Previous</span>
//                 </button>

//                 <button
//                     class="carousel-control-next"
//                     type="button"
//                     data-bs-target="#flipkartCarousel"
//                     data-bs-slide="next"
//                 >
//                     {/* <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> --> */}
//                     <img src="svg/right_arrow.svg" alt="" />
//                     <span class="visually-hidden">Next</span>
//                 </button>
//             </div>
//             {/* <!-- ======= --> */}
//             {/* <div class="second-main">
// <div class="second-con">
// <div id="multiItemCarousel" class="carousel-container-wrapper">
// <div class="multi-scroll-track">
// <div class="scroll-item">

//     <img src="phone/i1.webp" alt="" />
//     <p>OPPO k13x 5G</p>
//     <p>From ₹9,499*</p>
//     <img class="s-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item "><img src="phone/i2.webp" alt="" />
//     <p>Moto Edge 60 Pro 5G</p>
//     <p>From ₹24,999*</p>
//     <img class="s-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item"><img src="phone/i3.webp" alt="" />
//     <p>realme P4 5G</p>
//     <p>From ₹14,999*</p>
//     <img class="s-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item"><img src="phone/i4.webp" alt="" />
//     <p>OPPO K13 5G</p>
//     <p>From ₹14,999*</p>
//     <img class="s-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item"><img src="phone/i5.webp" alt="" />
//     <p>Moto G96 5G</p>
//     <p>Just ₹14,999*</p>
//     <img class="s-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item"><img src="phone/i6.webp" alt="" />
//     <p>Realme P3x 5G</p>
//     <p>From ₹10,999</p>
//     <img class="s-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item"><img src="phone/i7.jpeg" alt="Image 7" />
//     <p>Samsung Galaxy A35 5G</p>
//     <p>From ₹17,999</p>
//     <img class="s-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item"><img src="phone/i8.webp" alt="Image 8" />
//     <p>realme P4 Pro 5G</p>
//     <p>From ₹21,499*</p>
//     <img class="s-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>

// </div>

// <button class="nav-arrow left-arrow" id="prevBtn">&#10094;</button>
// <button class="nav-arrow right-arrow" id="nextBtn">&#10095;</button>
// </div>

// </div>
// <img class="img" src="phone/nothing_phone.webp" alt="" />
// </div> */}

//             {/* <!-- ===== --> */}

//             {/* <div class="third-con">

// <img src="card_photo/i1.webp" alt="" />
// <img src="card_photo/i2.jpg" alt="" />
// <img src="card_photo/i3.webp" alt="" />



// <img src="card_photo/i4.webp" alt="" />
// <img src="card_photo/i5.png" alt="" />
// <img src="card_photo/i6.png" alt="" />


// </div> */}
//             <div className="second-main">
//                 <div className="second-con">
//                     <MultiCarousel items={phoneItems} visibleItems={5} />
//                 </div>
//                 <img className="img" src="phone/nothing_phone.webp" alt="" />
//             </div>

//             <div className="third-con">
//                 <img src="card_photo/i1.webp" alt="" />
//                 <img src="card_photo/i2.jpg" alt="" />
//                 <img src="card_photo/i3.webp" alt="" />
//                 {/* <img src="card_photo/i4.webp" alt="" />
// <img src="card_photo/i5.png" alt="" />
// <img src="card_photo/i6.png" alt="" /> */}
//             </div>

//             {/* Another carousel */}
//             <MultiCarousel items={productItems} visibleItems={5} />

//             {/* <div id="multiItemCarousel" class="carousel-container-wrapper1">
// <div class="multi-scroll-track1">
// <div class="scroll-item1"><img src="product - 2/i1.jpeg" alt="" style={{width: '12vw', height: '9vw'}} />
// <p>Premium TVs</p>
// <p>From ₹15,499*</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item1 "><img src="product - 2/i2.jpeg" style={{
// width: '5vw',
// height: '10.5vw'
// , position: 'relative'
// , left: '2vw'
// }} alt="" />
// <p>Best-selling Refrigerators</p>
// <p>From ₹9,999*</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item1"><img src="product - 2/i3.png" alt="" style={{ height: '11vw', width: '8.5vw' }} />
// <p>Trending deals</p>
// <p>Shop now!</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item1"><img src="product - 2/i4.jpeg" alt="" style={{ width: '11vw', height: '11vw;' }} />
// <p>Kitchen Essentials</p>
// <p>From ₹1249</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item1"><img src="product - 2/i5.png" alt="" style={{ width: '8vw', height: '10vw' }} />
// <p>Home Essentials</p>
// <p>Shop Now!</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item1"><img src="product - 2/i6.jpeg" alt="" style={{ height: '10vw', width: '9vw' }} />
// <p>Fans & Geysers</p>
// <p>From ₹799</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item1"><img src="product - 2/i7.png" alt="Image 7" style={{ height: '8vw', width: '12vw' }} />
// <p>Microwave Ovens</p>
// <p>From ₹4,990</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item1"><img src="product - 2/i8.jpeg" alt="Image 8" style={{
// height: '3.4vw',
// width: '13.4vw'
// }} />
// <p>realme P4 Pro 5G</p>
// <p>From ₹21,499*</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>
// <div class="scroll-item1"><img src="product - 2/i8.jpeg" alt="Image 8" style={{ height: '3.4vw', width: '13.4vw' }} />
// <p>realme P4 Pro 5G</p>
// <p>From ₹21,499*</p>
// <img class="f-right-arrow" src="svg/right_arrow.svg" alt="" />
// </div>

// </div>

// <button class="nav-arrow left-arrow" id="prevBtn1">&#10094;</button>
// <button class="nav-arrow right-arrow" id="nextBtn1">&#10095;</button>
// </div> */}

//             <div class="four-con">
//                 <img src="card_photo/i11.webp" alt="" />
//                 <img src="card_photo/i12.webp" alt="" />
//                 <img src="card_photo/i13.jpg" alt="" />
//             </div>
//             {/* </main> */}
//         </>
//     );
// }


import React, { useState, useEffect, useRef } from "react";
import "../style.css";
import "../media.css";
import "../Catogory_style.css";
import { href, Link, useNavigate } from "react-router-dom";

// =========================
// 👇 Merged MultiCarousel.jsx
// =========================
function MultiCarousel({ items, visibleItems = 5 }) {
    const navigate = useNavigate();
    const trackRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = items.length;
    const scrollAmount = 50 / visibleItems; // = 20% per step

    const updateTrackPosition = (index) => {
        if (trackRef.current) {
            const offset = -index * scrollAmount;
            trackRef.current.style.transform = `translateX(${offset}%)`;
        }
    };

    const handleNext = () => {
        if (currentIndex < totalItems - visibleItems) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            updateTrackPosition(newIndex);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            updateTrackPosition(newIndex);
        }
    };

    return (
        <div className="carousel-container-wrapper">
            <div className="multi-scroll-track" ref={trackRef}>
                {items.map((item, index) => (
                    <div className="scroll-item" key={index}>
                        <img src={item.img} alt={item.title} href={item.href} />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>

            <button className="nav-arrow left-arrow" onClick={handlePrev} disabled={currentIndex === 0}>
                &#10094;
            </button>

            <button
                className="nav-arrow right-arrow"
                onClick={handleNext}
                disabled={currentIndex === totalItems - visibleItems}
            >
                &#10095;
            </button>
        </div>
    );
}

// =========================
// ⬇ Original M.jsx (unchanged)
// =========================
export default function M() {
    const navigate = useNavigate();

    const phoneItems = [
        { id: 1, img: "phone/i1.webp", title: "OPPO k13x 5G", price: "From ₹9,499*", href: "https://www.thewatchcompany.com/" },
        { id: 2, img: "phone/i2.webp", title: "Moto Edge 60 Pro 5G", price: "From ₹24,999*" },
        { id: 3, img: "phone/i3.webp", title: "realme P4 5G", price: "From ₹14,999*" },
        { id: 4, img: "phone/i4.webp", title: "OPPO K13 5G", price: "From ₹14,999*" },
        { id: 5, img: "phone/i5.webp", title: "Moto G96 5G", price: "Just ₹14,999*" },
        { id: 6, img: "phone/i6.webp", title: "Realme P3x 5G", price: "From ₹10,999" },
        { id: 7, img: "phone/i7.jpeg", title: "Samsung Galaxy A35 5G", price: "From ₹17,999" },
        { id: 8, img: "phone/i8.webp", title: "realme P4 Pro 5G", price: "From ₹21,499*" },
    ];

    const productItems = [
        { id: 1, img: "product - 2/i1.jpeg", title: "Premium TVs", price: "From ₹15,499*" },
        { id: 2, img: "product - 2/i2.jpeg", title: " Refrigerators", price: "From ₹9,999*" },
        { id: 3, img: "product - 2/i3.png", title: "Trending deals", price: "Shop now!" },
        { id: 4, img: "product - 2/i4.jpeg", title: "Kitchen Essentials", price: "From ₹1249" },
        { id: 5, img: "product - 2/i5.png", title: "Home Essentials", price: "Shop Now!" },
        { id: 6, img: "product - 2/i6.jpeg", title: "Fans & Geysers", price: "From ₹799" },
        { id: 7, img: "product - 2/i7.png", title: "Microwave Ovens", price: "From ₹4,990" },
        { id: 8, img: "product - 2/i7.png", title: "Microwave Ovens", price: "From ₹4,990" },
    ];

    return (
        <>
            {/*  */}
            <div
                class="modal fade"
                id="myAutoModal"
                tabindex="-1"
                aria-labelledby="myAutoModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h3>Business Inquiry</h3>

                            <div class="card mb-3">
                                <div class="card-body">
                                    <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">
                                            Login to Your Account
                                        </h5>
                                        <p class="text-center small">
                                            Enter your username & password to login
                                        </p>
                                    </div>

                                    <form class="row g-3 needs-validation" novalidate>
                                        <div class="col-12">
                                            <label for="Email id" class="form-label">
                                                Your Email
                                            </label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="inputGroupPrepend">
                                                    @
                                                </span>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    class="form-control"
                                                    id="yourEmail"
                                                    required
                                                />
                                                <div class="invalid-feedback">
                                                    Please enter your username.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                class="form-control"
                                                id="yourPassword"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Please enter your password!
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-check">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    name="remember"
                                                    value="true"
                                                    id="rememberMe"
                                                />
                                                <label class="form-check-label" for="rememberMe">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <button class="btn btn-primary" type="submit">
                                                Login
                                            </button>
                                        </div>

                                        <div class="col-12">
                                            <p class="small mb-0">
                                                Don't have account?{" "}
                                                <Link to="/register">Create an account</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            {/* 💡 Your existing code starts from here unchanged */}
            <div className="main-category">
                <div className="category-box">
                    <Link to="/men" className="category-card">
                        <img src="Catogory/men_cloths.jfif" alt="Men Cloths" />
                        <span>Men Cloths</span>
                    </Link>
                    <Link to="/Women" className="category-card">
                        <img src="Catogory/women.webp" alt="Women Cloths" />
                        <span>Women Cloths</span>
                    </Link>
                    <Link to="/Child" className="category-card">
                        <img src="Catogory/child.jpg" alt="Kids" />
                        <span>Kids</span>
                    </Link>
                    <Link to="/Kitchan" className="category-card">
                        <img src="Catogory/kitchan.jpg" alt="Kitchen" />
                        <span>Kitchen</span>
                    </Link>
                    <Link to="/Mobile" className="category-card">
                        <img src="Catogory/phone.jfif" alt="Mobiles" />
                        <span>Mobiles</span>
                    </Link>
                    <Link to="/Leaptop" className="category-card">
                        <img src="Catogory/leaptop.jpg" alt="Laptops" />
                        <span>Laptops</span>
                    </Link>
                </div>
            </div>

            {/* ========= */}
            <div
                id="flipkartCarousel"
                class="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3100"
            >
                <div class="carousel-indicators custom-indicators">
                    <button
                        type="button"
                        data-bs-target="#flipkartCarousel"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#flipkartCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#flipkartCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#flipkartCarousel"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src="sslider_photo/i1.webp"
                            class="d-block w-100"
                            alt="First slide"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="sslider_photo/i3.webp"
                            class="d-block w-100"
                            alt="Second slide"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="sslider_photo/i2.webp"
                            class="d-block w-100"
                            alt="Second slide"
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="sslider_photo/i4.webp"
                            class="d-block w-100"
                            alt="Third slide"
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#flipkartCarousel"
                    data-bs-slide="prev"
                >
                    <img src="svg/left_arrow.svg" alt="" />
                    {/* <!-- <span class="carousel-control-pre-icon" aria-hidden="true"></span> --> */}
                    <span class="visually-hidden">Previous</span>
                </button>

                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#flipkartCarousel"
                    data-bs-slide="next"
                >
                    {/* <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> --> */}
                    <img src="svg/right_arrow.svg" alt="" />
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* ========= */}

            <div className="second-main">
                <div className="second-con">
                    <MultiCarousel items={phoneItems} visibleItems={5} />
                </div>
                <img className="img" src="phone/nothing_phone.webp" alt="" />
            </div>

            <MultiCarousel items={productItems} visibleItems={5} />

            <div className="four-con">
                <img src="card_photo/i11.webp" alt="" />
                <img src="card_photo/i12.webp" alt="" />
                <img src="card_photo/i13.jpg" alt="" />
            </div>
        </>
    );
}


// ==
