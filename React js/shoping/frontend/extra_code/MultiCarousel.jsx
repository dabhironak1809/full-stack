import React, { useRef, useState } from "react";
import "../style.css";
import "../media.css";
import { useNavigate, Link } from "react-router-dom";

export default function MultiCarousel({ items, visibleItems = 5 }) {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;
  const scrollAmount = 50 / visibleItems; // = 20% per step (adjust if needed)

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
            {/* <button class="btn btn-outline-primary "><Link class="text-dark" to="/">Buy Now</Link></button> */}
            {/* <img className="s-right-arrow" src="svg/right_arrow.svg" alt="arrow" /> */}
          </div>
        ))}
      </div>

      <button className="nav-arrow left-arrow" onClick={handlePrev} disabled={currentIndex === 0} >
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
