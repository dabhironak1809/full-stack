import Slider from "react-slick";
import { useState } from "react";

function H() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const images3 = [
        { img: "https://m.media-amazon.com/images/I/71At9zBj1gL._AC_SY195_.jpg" },
        { img: "https://m.media-amazon.com/images/I/61qSHoQM5AL._AC_SY195_.jpg" },
        { img: "https://m.media-amazon.com/images/I/71At9zBj1gL._AC_SY195_.jpg" },
        { img: "https://m.media-amazon.com/images/I/71At9zBj1gL._AC_SY195_.jpg" },
    ];
    return (
        <div>
            <div className="w-[350px]">
                {/* MAIN IMAGE */}
                <Slider
                    asNavFor={nav2}
                    ref={(slider) => setNav1(slider)}
                    arrows={false}
                    fade
                >
                    {images3.map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={item.img}
                                className="h-[300px] object-contain"
                                alt=""
                            />
                        </div>
                    ))}
                </Slider>

                {/* THUMBNAILS */}
                <Slider
                    asNavFor={nav1}
                    ref={(slider) => setNav2(slider)}
                    slidesToShow={4}
                    swipeToSlide
                    focusOnSelect
                    arrows={false}
                    className="mt-3"
                >
                    {images3.map((item, index) => (
                        <div key={index} className="px-1 cursor-pointer">
                            <img
                                src={item.img}
                                className="h-[70px] border object-contain"
                                alt=""
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default H


//  import { useState } from "react";

// function H() {
//   const images = [
//     "https://m.media-amazon.com/images/I/71At9zBj1gL._AC_SY195_.jpg",
//     "https://m.media-amazon.com/images/I/61qSHoQM5AL._AC_SY195_.jpg",
//     "https://m.media-amazon.com/images/I/71At9zBj1gL._AC_SY195_.jpg",
//     "https://m.media-amazon.com/images/I/61qSHoQM5AL._AC_SY195_.jpg",
//   ];

//   const [activeImg, setActiveImg] = useState(images[0]);

//   return (
//     <div className="w-[350px]">
//       {/* MAIN IMAGE */}
//       <div className="flex justify-center">
//         <img
//           src={activeImg}
//           className="h-[300px] object-contain"
//           alt=""
//         />
//       </div>

//       {/* THUMBNAILS */}
//       <div className="flex gap-2 mt-3 justify-center">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             onClick={() => setActiveImg(img)}
//             className={`h-[70px] object-contain border cursor-pointer
//               ${activeImg === img ? "border-blue-500" : "border-gray-300"}`}
//             alt=""
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default H;
