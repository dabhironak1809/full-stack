import React, { useState, useEffect, useRef } from "react";
import "../style.css";
import "../media.css";
import "../Catogory_style.css";
import { href, Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

    // =========[[]]
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

 



    return (
        <>
            {/*  */}
           

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
