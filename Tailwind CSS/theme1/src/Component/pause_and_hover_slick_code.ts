import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonials() {
   const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Shows 2 cards as per your requirement
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 card on mobile
        }
      }
    ]
  };
    return (
        <>
            // <div className="slider-container bg-amber-300">
            //     <Slider {...settings}>
            //         <div className="bg-amber-200">
            //             <h3>ronak</h3>
            //         </div>
            //         <div>
            //             <h3>2</h3>
            //         </div>
            //         <div>
            //             <h3>3</h3>
            //         </div>
            //         <div>
            //             <h3>4</h3>
            //         </div>
            //         <div>
            //             <h3>5</h3>
            //         </div>
            //         <div>
            //             <h3>6</h3>
            //         </div>
            //     </Slider>
            // </div>



        </>
    )
}
