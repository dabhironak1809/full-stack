// components/SimpleSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { GoChevronRight } from "react-icons/go";
// import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="absolute right-0.5  sm:right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white p-2 md:h-20 items-center flex  shadow"
            onClick={onClick} >
            <GoChevronRight className="size-5 md:size-7" />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="absolute  leading-0.5 sm:left-2  top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white p-2 md:h-20 items-center flex  shadow"
            onClick={onClick} >
            <GoChevronLeft className="size-5 md:size-7" />  
        </div>
    );
};

const NextArrow1 = ({ onClick }) => {
    return (
        <div className="absolute -right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-[#ffffffc7] md:bg-transparent p-2 md:h-20 items-center flex  "
            onClick={onClick} >
            <GoChevronRight className="size-3 sm:size-10 " />
        </div>
    );
};

const PrevArrow1 = ({ onClick }) => {
    return (
        <div className="absolute  -left-2 sm:left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-[#ffffffcc] md:bg-transparent p-2 md:h-20 items-center flex   "
            onClick={onClick} >
            <GoChevronLeft className="size-3 sm:size-10" />
        </div>
    );
};

// this main function
const SimpleSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 4000,
    };

    const images = [
        "/slider_main/a.jpg",
        "/slider_main/e.jpg",
        "/slider_main/b.jpg",
        "/slider_main/c.jpg",
        "/slider_main/d.jpg",
    ];

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
        autoplay: false,
        autoplaySpeed: 4000, //4 second to automatic image change
    };

    const images2 = [
        "https://m.media-amazon.com/images/I/71At9zBj1gL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/61qSHoQM5AL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/61ak10XfnOL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/61ILDjdQknL._AC_SY195_.jpg",
        "https://m.media-amazon.com/images/I/619xtdjklyL._AC_SY195_.jpg",
    ];

    const settings3 = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        nextArrow: <NextArrow1 />,
        prevArrow: <PrevArrow1 />,
        autoplay: false,
        autoplaySpeed: 4000, //4 second to automatic image change
        responsive: [
            {
                breakpoint: 1239,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                },
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ]
    };

    const images3 = [
        {
            img: "https://m.media-amazon.com/images/I/71OW7nY-JdL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "LEGAL BRIBE Textured Tote Bag Combo Of 4",
            price: "₹678.00",
            price_cancel: "₹2,660.00",
        },
        {
            img: "https://m.media-amazon.com/images/I/716urAg+QYL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "Mochi Women Lightgreen Zip Top Sling Bag (66-7354)",
            price: "₹678.00",
            price_cancel: "₹999.00",
        },
        {
            img: "https://m.media-amazon.com/images/I/71L18OHjSsL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "Shining Diva Fashion Latest Stylish Design...",
            price: "₹598.00",
            price_cancel: "₹2999.00",
        },
        {
            img: "https://m.media-amazon.com/images/I/71ooQyvpGCL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "ZENEME Rhodium Plated Silver Toned White",
            price: "₹778.00",
            price_cancel: "₹3999.00",
        },
        {
            img: "https://m.media-amazon.com/images/I/81Bkqg-dDnL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "Shining Diva Fashion Latest Stylish Design...",
            price: "₹678.00",
            price_cancel: "₹1999.00",
        },
        {
            img: "https://m.media-amazon.com/images/I/716urAg+QYL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "Mochi Women Lightgreen Zip Top Sling Bag (66-7354)",
            price: "₹678.00",
            price_cancel: "₹999.00",
        },

        {
            img: "https://m.media-amazon.com/images/I/71OW7nY-JdL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "LEGAL BRIBE Textured Tote Bag Combo Of 4",
            price: "₹678.00",
            price_cancel: "₹2,660.00",
        },
        {
            img: "https://m.media-amazon.com/images/I/81Bkqg-dDnL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "Shining Diva Fashion Latest Stylish Design...",
            price: "₹678.00",
            price_cancel: "₹1999.00",
        },
        {
            img: "https://m.media-amazon.com/images/I/71ooQyvpGCL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "ZENEME Rhodium Plated Silver Toned White",
            price: "₹778.00",
            price_cancel: "₹3999.00",
        },
        {
            img: "https://m.media-amazon.com/images/I/71L18OHjSsL._SX240_QL100_AC_SCLZZZZZZZ_.jpg",
            desc: "Shining Diva Fashion Latest Stylish Design...",
            price: "₹598.00",
            price_cancel: "₹2999.00",
        },

    ];



    const settings1 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1239,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
        ],
    };

    const images1 = [
        "https://m.media-amazon.com/images/I/51RxNootgvL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61JU2HicMQL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71+0DeLcfNL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/711l4y8aNlL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/51B4bKd3VbL._AC_SY200_.jpg",
        // "https://m.media-amazon.com/images/I/61faDMBMdmL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/517lSvEVVsL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71QdB7hDCAL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71QdB7hDCAL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71QdB7hDCAL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/51RxNootgvL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61JU2HicMQL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71+0DeLcfNL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/711l4y8aNlL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/51B4bKd3VbL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61faDMBMdmL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/517lSvEVVsL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71QdB7hDCAL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71QdB7hDCAL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71QdB7hDCAL._AC_SY200_.jpg",

    ]


    return (
        // <main className="relative bg-[#e3e6e6] w-full min-h-screen  " >
        <main className="bg-[#e3e6e6] min-h-screen pb-10 2xl:container 2xl:mx-auto " id="home-top ">

            {/* <div className=" w-full h-full mx-auto p-4"> */}
            <div className="relative w-full overflow-hidden">

                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* <div className="absolute top-85 grid grid-cols-3 xl:grid-cols-4 gap-5 bottom-2 h-fit px-10 z-10  p-4 rounded  "> */}
            {/* <div className=" bg-[#ffffff0d] relative top-[20vw] sm:top-40 md:top-55 lg:top-60 xl:top-60 grid grid-cols-3 xl:grid-cols-4 gap-1.5 sm:gap-2  md:gap-3 lg:gap-4 xl:gap-5 bottom-2 h-fit lg:px-5 xl:px-10 z-10  p-4 rounded "> */}
            <div className="relative z-10 px-4 md:px-10 -mt-15 sm:-mt-30 md:-mt-45 lg:-mt-70">
                <div className="grid  grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                    {/* cart 1  */}
                    <div className="bg-white flex flex-col p-1 md:p-2 lg:p-3 xl:p-4   w-full">
                        <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
                            Bulk order discounts + Up to 18% GST savings
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 lg:gap-3 pt-2  md:pt-4">
                            <div className="flex flex-col gap-1">
                                <img src="/cart3/c1.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw] leading-tight  md:font-normal ">
                                    Up to 45% off | Laptops
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart3/c2.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw] leading-tight">
                                    Up to 60% off | Kitchen appliances
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart3/c3.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw] leading-tight">
                                    Min. 50% off | Office furniture
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart3/c4.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw] leading-tight">
                                    Up to 60% off | for Business purchases
                                </span>
                            </div>
                        </div>
                        <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
                            Create a free account
                        </p>
                    </div>
                    {/* cart 2  */}


                    <div className="bg-white flex flex-col p-1 xl:p-4   w-full">
                        <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
                            Revamp your home in style
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 lg:gap-3 pt-4">
                            <div className="flex flex-col gap-1">
                                <img src="/cart1/a1.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Cushion covers, bedsheets & more
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart1/a2.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Figurines, vases & more
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart1/a3.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Home storage
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart1/a4.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Up to 60% off | for Business purchases
                                </span>
                            </div>
                        </div>
                        <p className="text-[#2162a1] text-[0.8vw]   sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
                            Explore All
                        </p>
                    </div>

                    {/* =3 */}
                    <div className="bg-white flex flex-col p-1 xl:p-4  w-full">
                        <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
                            Appliances for your home | Up to 55% off
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 lg:gap-3 pt-4">
                            <div className="flex flex-col gap-1">
                                <img src="/cart2/b1.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Air conditioners
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart2/b2.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Refrigerators
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart2/b3.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Microwaves
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/cart2/b4.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Washing machines
                                </span>
                            </div>
                        </div>
                        <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
                            See more
                        </p>
                    </div>

                    {/* == */}

                    <div className=" grid gap-2 xl:gap-5  hidden xl:block   ">
                        <div className="bg-white flex flex-col p-1 sm:p-2 lg:p-3 xl:p-5 h-fit ">
                            <span className="text-[1vw] sm:text-[1.5vw] xl:text-2xl font-semibold">Sign in for your best experience</span>
                            <button className="mt-3 text-black bg-[#ffd814] rounded-2xl text-[1vw] sm:text-[1.5vw] p-1" >Sign in securely</button>
                        </div>

                        <div className="flex flex-col  lg:gap-8 xl:gap-15 bg-white h-fit md:p-2 xl:p-4 max-w- mx-auto ">
                            {/* Images side by side */}
                            <div className="grid grid-cols-2 items-center   h-16 gap-4 lg:mb-4">
                                <img src="/ptron_logo.avif" className="h-full w-auto object-contain" alt="Logo" />
                                <img src="/ptron.jpg" className="h-full w-auto object-contain" alt="Product" />
                            </div>

                            {/* Text and button aligned vertically */}
                            <div className="flex flex-col">
                                <span className="text-blue-800 font-semibold text-[1vw] sm:text-[1vw]">
                                    pTron Newly Launched Bassed Prism
                                </span>
                                <button className="self-start px-4 py-1 bg-red-500 text-white rounded  text-[0.5vw] sm:text-[1.5vw]   hover:bg-red-600 transition">
                                    Limited time deal
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* ================== */}
                    {/* == cart  */}
                    <div className="bg-white flex flex-col p-1 xl:p-4   w-full">
                        <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
                            Starting ₹49 | Deals on home essentials
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 lg:gap-3 pt-4">
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Cleaning supplies
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Bathroom accessories
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Home tools
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Wallpapers
                                </span>
                            </div>
                        </div>
                        <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
                            Explore All
                        </p>
                    </div>
                    {/*  */}

                    <div className="bg-white flex flex-col p-1 xl:p-4   w-full">
                        <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
                            Starting ₹149 | Headphones
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-4">
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Starting ₹249 | boAt
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Starting ₹349 | boult
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Starting ₹649 | Noise
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Starting ₹149 | Zebronics
                                </span>
                            </div>
                        </div>
                        <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
                            See all offers
                        </p>
                    </div>
                    {/*  */}

                    <div className="bg-white flex flex-col p-1 xl:p-4   w-full  hidden xl:block  ">
                        <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
                            Automotive essentials | Up to 60% off
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-4">
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Cleaning accessories
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Tyre & rim care
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Helmets
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Vacuum cleaner
                                </span>
                            </div>
                        </div>
                        <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
                            See more
                        </p>
                    </div>
                    {/*  */}
                    <div className="bg-white flex flex-col p-1 xl:p-4 hidden xl:block  w-full">
                        <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
                            Starting ₹199 | Amazon Brands & more
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-4">
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Starting ₹199 | Bedsheets
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Starting ₹199 | Curtains
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg" alt="" className="w-full   object-cover" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Minimum 40% off | Ironing board & more
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg" />
                                <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
                                    Up to 60% off | Home decor
                                </span>
                            </div>
                        </div>
                        <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
                            See more
                        </p>
                    </div>
                    {/* == */}
                    {/* ============= */}

                    <div className=" grid gap-2 xl:gap-5  xl:hidden ">
                        <div className="bg-white flex flex-col p-1 sm:p-2 lg:p-3 xl:p-5 h-fit ">
                            <span className="text-[1vw] sm:text-[1.5vw] xl:text-2xl font-semibold">Sign in for your best experience</span>
                            <button className="mt-3 text-black bg-[#ffd814] rounded-2xl text-[1vw] sm:text-[1.5vw] p-1" >Sign in securely</button>
                        </div>

                        <div className="flex flex-col items-center lg:gap-8 xl:gap-15 bg-white h-fit md:p-2 xl:p-4 max-w- mx-auto ">
                            {/* Images side by side */}
                            <div className="grid  items-center   xl:h-16 gap-4 lg:mb-4">
                                {/* <img src="/ptron_logo.avif" className="h-full w-auto object-contain" alt="Logo" /> */}
                                <img src="/ptron.jpg" className=" w-[20vw] sm:w-30 md:w-27 lg:w-30  xl:w-30 object-contain  " alt="Product" />
                            </div>

                            {/* Text and button aligned vertically */}
                            <div className="flex flex-col items-start text-left gap-1">
                                <span className="text-blue-800 font-semibold text-[1vw] sm:text-[1vw]">
                                    pTron Newly Launched Bassed Prism
                                </span>
                                <button className=" px-4 py-1 bg-red-500 text-white rounded  text-[0.6vw] md:text-[0.9vw]   hover:bg-red-600 transition">
                                    Limited time deal
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ============= */}

                    {/* ========== */}
                </div>
            </div>

            <div className=" mt-3  md:mt-8 px-4 md:px-10">
                <div className="bg-white p-1 md:p-3.5 shadow-sm    ">
                    <div className="flex items-center  gap-5">
                        <h2 className=" text-[2vw] md:text-xl font-bold mb-2">Top deals and essentials</h2>
                        <a href="/" className="text-[#0015ff] text-[2vw] md:text-sm" >See more</a>
                    </div>
                    {/* <GoChevronLeft className="bg-amber-100 " /> */}

                    <Slider {...settings1} className="product-slider">
                        {images1.map((src, index) => (
                            <div key={index} className="md:px-2 outline-none">
                                <img
                                    src={src}
                                    alt={`Product ${index + 1}`}
                                    className="   h-[20vw]   md:h-[160px]   xl:h-[180px]   w-auto   mx-auto    object-fill sm:object-contain   hover:scale-105   transition-transform   duration-300   cursor-pointer " />
                            </div>
                        ))}
                        {/* <GoChevronRight className="bg-amber-100 " /> */}
                    </Slider>
                </div>
            </div>
            {/* ========== */}

            {/* ======= -> slide cart ====== */}

            <div className="   sm:h-auto  sm:w-auto p-2 mt-5">
                <div className="  bg-white flex   flex-col sm:flex-row  gap-4  px-4 md:px-8 2xl:container 2xl:mx-auto">

                    {/* LEFT CARD */}
                    <div className=" w-auto h-[48vw] sm:h-auto   sm:w-[35vw]  md:w-[30vw]  xl:w-1/4 2xl:w-1/4">
                        <div className="bg-white flex flex-col p-3 shadow h-full">

                            <p className=" text-[1.6vw] sm:text-sm xl:text-lg font-bold leading-snug mb-2">
                                Starting ₹199 | Bring joy home with every toy
                            </p>

                            {/* Slider 1 */}
                            <Slider {...settings2}>
                                {images2.map((src, index) => (
                                    <div key={index} className="flex justify-center items-center   sm:px-4 xl:px-20 sm:py-4">
                                        <div className="sm:h-40 sm:w-40 flex justify-center items-center">
                                            <img
                                                src={src}
                                                alt={`Slide ${index + 1}`}
                                                className=" h-[20vw] sm:max-h-full sm:max-w-full object-contain "
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>


                            <div className=" flex flex-col items-center gap-">
                                <p className=" text-[2vw] sm:text-sm text-gray-800 mt-2 hover:underline cursor-pointer line-clamp-2">
                                    qwik3D Dummy 13 Fully Articulated Action Figure | 3D Printed Robot Assembly Kit | 5…
                                </p>

                                <div className="flex flex-row justify-start items-start">
                                    <span className="font-bold text-[2.4vw] sm:text-[1.2vw]  md:text-[1.6vw] xl:text-lg">₹256.00</span>
                                    <span className="text-[1.8vw] sm:text-[1.2vw]  md:text-[1.6vw] xl:text-xs text-gray-700">M.R.P:</span> {''}
                                    <span className="text-gray-500 line-through text-[2.4vw] sm:text-[1.2vw]  md:text-[1.6vw] xl:text-sm">₹999.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="w-auto h-[55vw] sm:h-auto  sm:w-[55vw]  md:w-[60vw]  lg:w-[62vw] xl:w-[69vw]  2xl:w-[66rem]">
                        <div className="bg-white p-3 shadow">

                            <Slider {...settings3}>
                                {images3.map((item, index) => (
                                    <div key={index} className="px-3">
                                        <div className="  h-[40vw] sm:h-[330px]   flex flex-col   items-center text-center   p-4 ">
                                            {/* Image */}
                                            <div className="h-40 w-40 sm:w-30 md:w-30 lg:w-auto flex items-center justify-center  ">
                                                <img
                                                    src={item.img}
                                                    alt={`Slide ${index + 1}`}
                                                    className="   h-[19vw] sm:w-auto sm:max-h-full sm:max-w-full object-contain"
                                                />
                                            </div>

                                            {/* Description */}

                                            {/* Price */}
                                            <div className="flex flex-col items-center  sm:mt-auto">
                                                <p className="text-[2.5vw] sm:text-sm text-gray-800  line-clamp-2 mt-5 sm:mt-0">
                                                    {item.desc}
                                                </p>
                                                <div className="">
                                                    <span className="font-bold text-[3vw] sm:text-[1.2vw]  md:text-[1.6vw] xl:text-lg">
                                                        {item.price}
                                                    </span> {''}
                                                    <span className="text-gray-400 line-through text-[2vw] md:text-sm">
                                                        {item.price_cancel}
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </div>

                    </div>

                </div>
            </div>


        </main>

    );
};

export default SimpleSlider;



// // components/SimpleSlider.js
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SimpleSlider = () => {
//     const settings = {
//         dots: false,          // Show navigation dots
//         infinite: true,      // Loop slides
//         speed: 500,          // Transition speed
//         slidesToShow: 1,     // Show 1 slide at a time
//         slidesToScroll: 1,   // Scroll 1 slide at a time
//         arrows: false,        // Show next/prev arrows
//     };

//     const images = [
//         "/slider_main/a.jpg",
//         "/slider_main/e.jpg",
//         "/slider_main/b.jpg",
//         "/slider_main/c.jpg",
//         "/slider_main/d.jpg",
//     ];


//     //

//     const settings1 = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 4,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 4,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 4
//                 }
//             }
//         ]
//     };
//     const images1 = [
//         "/slider_main/e.jpg",
//         "/slider_main/a.jpg",
//         "/slider_main/b.jpg",
//         "/slider_main/c.jpg",
//         "/slider_main/d.jpg",
//         "/slider_main/e.jpg",
//         "/slider_main/a.jpg",
//         "/slider_main/b.jpg",
//         "/slider_main/c.jpg",
//         "/slider_main/d.jpg",
//     ]


//     return (
//         <main className="relative bg-[#e3e6e6] w-full min-h-screen  " >
//             <div className=" w-full h-full mx-auto p-4">
//                 <Slider {...settings}>
//                     {images.map((src, index) => (
//                         <div key={index}>
//                             <img
//                                 src={src}
//                                 alt={`Slide ${index + 1}`}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>

//             {/* <div className="absolute top-85 grid grid-cols-3 xl:grid-cols-4 gap-5 bottom-2 h-fit px-10 z-10  p-4 rounded  "> */}
//             <div className=" bg-[#ffffff0d] absolute top-[20vw] sm:top-40 md:top-55 lg:top-60 xl:top-60 grid grid-cols-3 xl:grid-cols-4 gap-1.5 sm:gap-2  md:gap-3 lg:gap-4 xl:gap-5 bottom-2 h-fit lg:px-5 xl:px-10 z-10  p-4 rounded  ">
//                 {/* cart 1  */}
//                 <div className="bg-white flex flex-col p-1 md:p-2 lg:p-3 xl:p-4   w-full">
//                     <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
//                         Bulk order discounts + Up to 18% GST savings
//                     </p>
//                     <div className="grid grid-cols-2 gap-1.5 lg:gap-3 pt-2  md:pt-4">
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart3/c1.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw] leading-tight  md:font-normal ">
//                                 Up to 45% off | Laptops
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart3/c2.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw] leading-tight">
//                                 Up to 60% off | Kitchen appliances
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart3/c3.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw] leading-tight">
//                                 Min. 50% off | Office furniture
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart3/c4.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw] leading-tight">
//                                 Up to 60% off | for Business purchases
//                             </span>
//                         </div>
//                     </div>
//                     <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
//                         Create a free account
//                     </p>
//                 </div>
//                 {/* cart 2  */}


//                 <div className="bg-white flex flex-col p-1 xl:p-4   w-full">
//                     <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
//                         Revamp your home in style
//                     </p>
//                     <div className="grid grid-cols-2 gap-1.5 lg:gap-3 pt-4">
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart1/a1.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Cushion covers, bedsheets & more
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart1/a2.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Figurines, vases & more
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart1/a3.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Home storage
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart1/a4.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Up to 60% off | for Business purchases
//                             </span>
//                         </div>
//                     </div>
//                     <p className="text-[#2162a1] text-[0.8vw]   sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
//                         Explore All
//                     </p>
//                 </div>

//                 {/* =3 */}
//                 <div className="bg-white flex flex-col p-1 xl:p-4  w-full">
//                     <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
//                         Appliances for your home | Up to 55% off
//                     </p>
//                     <div className="grid grid-cols-2 gap-1.5 lg:gap-3 pt-4">
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart2/b1.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Air conditioners
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart2/b2.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Refrigerators
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart2/b3.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Microwaves
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="/cart2/b4.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Washing machines
//                             </span>
//                         </div>
//                     </div>
//                     <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
//                         See more
//                     </p>
//                 </div>

//                 {/* == */}

//                 <div className=" grid gap-2 xl:gap-5  hidden xl:block   ">
//                     <div className="bg-white flex flex-col p-1 sm:p-2 lg:p-3 xl:p-5 h-fit ">
//                         <span className="text-[1vw] sm:text-[1.5vw] xl:text-2xl font-semibold">Sign in for your best experience</span>
//                         <button className="mt-3 text-black bg-[#ffd814] rounded-2xl text-[1vw] sm:text-[1.5vw] p-1" >Sign in securely</button>
//                     </div>

//                     <div className="flex flex-col  lg:gap-8 xl:gap-15 bg-white h-fit md:p-2 xl:p-4 max-w- mx-auto ">
//                         {/* Images side by side */}
//                         <div className="grid grid-cols-2 items-center   h-16 gap-4 lg:mb-4">
//                             <img src="/ptron_logo.avif" className="h-full w-auto object-contain" alt="Logo" />
//                             <img src="/ptron.jpg" className="h-full w-auto object-contain" alt="Product" />
//                         </div>

//                         {/* Text and button aligned vertically */}
//                         <div className="flex flex-col">
//                             <span className="text-blue-800 font-semibold text-[1vw] sm:text-[1vw]">
//                                 pTron Newly Launched Bassed Prism
//                             </span>
//                             <button className="self-start px-4 py-1 bg-red-500 text-white rounded  text-[0.5vw] sm:text-[1.5vw]   hover:bg-red-600 transition">
//                                 Limited time deal
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* ================== */}
//                 {/* == cart  */}
//                 <div className="bg-white flex flex-col p-1 xl:p-4   w-full">
//                     <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
//                         Starting ₹49 | Deals on home essentials
//                     </p>
//                     <div className="grid grid-cols-2 gap-1.5 lg:gap-3 pt-4">
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Cleaning supplies
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Bathroom accessories
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Home tools
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Wallpapers
//                             </span>
//                         </div>
//                     </div>
//                     <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
//                         Explore All
//                     </p>
//                 </div>
//                 {/*  */}

//                 <div className="bg-white flex flex-col p-1 xl:p-4   w-full">
//                     <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
//                         Starting ₹149 | Headphones
//                     </p>
//                     <div className="grid grid-cols-2 gap-3 pt-4">
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Starting ₹249 | boAt
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Starting ₹349 | boult
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Starting ₹649 | Noise
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Starting ₹149 | Zebronics
//                             </span>
//                         </div>
//                     </div>
//                     <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
//                         See all offers
//                     </p>
//                 </div>
//                 {/*  */}

//                 <div className="bg-white flex flex-col p-1 xl:p-4   w-full  hidden xl:block  ">
//                     <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
//                         Automotive essentials | Up to 60% off
//                     </p>
//                     <div className="grid grid-cols-2 gap-3 pt-4">
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Cleaning accessories
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Tyre & rim care
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Helmets
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Vacuum cleaner
//                             </span>
//                         </div>
//                     </div>
//                     <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
//                         See more
//                     </p>
//                 </div>
//                 {/*  */}
//                 <div className="bg-white flex flex-col p-1 xl:p-4 hidden xl:block  w-full">
//                     <p className="text-[2vw] sm:text-[1.7vw] xl:text-[1.5vw] font-bold sm:font-semibold leading-snug">
//                         Starting ₹199 | Amazon Brands & more
//                     </p>
//                     <div className="grid grid-cols-2 gap-3 pt-4">
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Starting ₹199 | Bedsheets
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Starting ₹199 | Curtains
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg" alt="" className="w-full   object-cover" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Minimum 40% off | Ironing board & more
//                             </span>
//                         </div>
//                         <div className="flex flex-col gap-1">
//                             <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg" />
//                             <span className="text-[1.5vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1.2vw] xl:text-[0.8vw]">
//                                 Up to 60% off | Home decor
//                             </span>
//                         </div>
//                     </div>
//                     <p className="text-[#2162a1] text-[0.8vw] sm:text-[0.9vw] mt-auto cursor-pointer hover:underline">
//                         See more
//                     </p>
//                 </div>
//                 {/* == */}
//                 {/* ============= */}

//                 <div className=" grid gap-2 xl:gap-5  xl:hidden ">
//                     <div className="bg-white flex flex-col p-1 sm:p-2 lg:p-3 xl:p-5 h-fit ">
//                         <span className="text-[1vw] sm:text-[1.5vw] xl:text-2xl font-semibold">Sign in for your best experience</span>
//                         <button className="mt-3 text-black bg-[#ffd814] rounded-2xl text-[1vw] sm:text-[1.5vw] p-1" >Sign in securely</button>
//                     </div>

//                     <div className="flex flex-col items-center lg:gap-8 xl:gap-15 bg-white h-fit md:p-2 xl:p-4 max-w- mx-auto ">
//                         {/* Images side by side */}
//                         <div className="grid  items-center   xl:h-16 gap-4 lg:mb-4">
//                             {/* <img src="/ptron_logo.avif" className="h-full w-auto object-contain" alt="Logo" /> */}
//                             <img src="/ptron.jpg" className=" w-[20vw] sm:w-30 md:w-27 lg:w-30  xl:w-30 object-contain  " alt="Product" />
//                         </div>

//                         {/* Text and button aligned vertically */}
//                         <div className="flex flex-col items-start text-left gap-1">
//                             <span className="text-blue-800 font-semibold text-[1vw] sm:text-[1vw]">
//                                 pTron Newly Launched Bassed Prism
//                             </span>
//                             <button className=" px-4 py-1 bg-red-500 text-white rounded  text-[0.6vw] md:text-[0.9vw]   hover:bg-red-600 transition">
//                                 Limited time deal
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ============= */}

//                 {/* ========== */}
//             </div>

//             <div className=" absolute top-[100vw] sm:top-[100vw] xl:top-[70vw]   w-full h-full mx-auto p-4">
//                 <Slider {...settings1}>
//                     {images1.map((src, index) => (
//                         <div key={index}>
//                             <img
//                                 src={src}
//                                 alt={`Slide ${index + 1}`}
//                                 className=" object-cover"
//                             />
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//             {/* ========== */}

//         </main>

//     );
// };

// export default SimpleSlider;
