import React, { useRef, useState } from "react";
import "../style.css";
import "../media.css";

// --- START of MultiCarousel.jsx content (now a nested component) ---

function MultiCarousel({ items, visibleItems = 5 }) {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;

  const scrollAmount = 50 / visibleItems;

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
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <img className="s-right-arrow" src="svg/right_arrow.svg" alt="arrow" />
          </div>
        ))}
      </div>

      <button className="nav-arrow left-arrow" onClick={handlePrev} disabled={currentIndex === 0}>
        &#10094;
      </button>

      <button className="nav-arrow right-arrow" onClick={handleNext} disabled={currentIndex === totalItems - visibleItems} >
        &#10095;
      </button>
    </div>
  );
}
// --- END of MultiCarousel.jsx content ---

// --- START of M1.jsx content (using MultiCarousel) ---

export default function M1() {
  const phoneItems = [
    { img: "phone/i1.webp", title: "OPPO k13x 5G", price: "From ₹9,499*" },
    { img: "phone/i2.webp", title: "Moto Edge 60 Pro 5G", price: "From ₹24,999*" },
    { img: "phone/i3.webp", title: "realme P4 5G", price: "From ₹14,999*" },
    { img: "phone/i4.webp", title: "OPPO K13 5G", price: "From ₹14,999*" },
    { img: "phone/i5.webp", title: "Moto G96 5G", price: "Just ₹14,999*" },
    { img: "phone/i6.webp", title: "Realme P3x 5G", price: "From ₹10,999" },
    { img: "phone/i7.jpeg", title: "Samsung Galaxy A35 5G", price: "From ₹17,999" },
    { img: "phone/i8.webp", title: "realme P4 Pro 5G", price: "From ₹21,499*" },
  ];

  const productItems = [
    { img: "product - 2/i1.jpeg", title: "Premium TVs", price: "From ₹15,499*" },
    { img: "product - 2/i2.jpeg", title: "Best-selling Refrigerators", price: "From ₹9,999*" },
    { img: "product - 2/i3.png", title: "Trending deals", price: "Shop now!" },
    { img: "product - 2/i4.jpeg", title: "Kitchen Essentials", price: "From ₹1249" },
    { img: "product - 2/i5.png", title: "Home Essentials", price: "Shop Now!" },
    { img: "product - 2/i6.jpeg", title: "Fans & Geysers", price: "From ₹799" },
    { img: "product - 2/i7.png", title: "Microwave Ovens", price: "From ₹4,990" },
    { img: "product - 2/i8.jpeg", title: "realme P4 Pro 5G", price: "From ₹21,499*" },
  ];

  return (
    <>
      <div className="second-main">
        <div className="second-con">
          <MultiCarousel items={phoneItems} visibleItems={5} />
        </div>
        <img className="img" src="phone/nothing_phone.webp" alt="" />
      </div>

      <div className="third-con">
        <img src="card_photo/i1.webp" alt="" />
        <img src="card_photo/i2.jpg" alt="" />
        <img src="card_photo/i3.webp" alt="" />
        <img src="card_photo/i4.webp" alt="" />
        <img src="card_photo/i5.png" alt="" />
        <img src="card_photo/i6.png" alt="" />
      </div>

      {/* Another carousel */}
      <MultiCarousel items={productItems} visibleItems={5} />
    </>
  );
}
// --- END of M1.jsx content ---