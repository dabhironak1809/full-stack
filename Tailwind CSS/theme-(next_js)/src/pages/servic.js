import React from 'react'

function servic({ isLight }) {
    const services = [
        {
            id: 1,
            title: "Next.Js + Tailwind CSS Integration",
            description: "Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.",
            icon: "/service/tailwind.svg",
        },
        {
            id: 2,
            title: "Ready-to-use Components",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            icon: "/service/redy_to_use.svg",
        },
        {
            id: 3,
            title: "Best Practices",
            description: "Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.",
            icon: "/service/Best_practice.svg",
        },
        {
            id: 4,
            title: "Excellent Page Speed",
            description:
                "Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.",
            icon: "/service/rocket.svg",
        },
        {
            id: 5,
            title: "Search Engine Optimization (SEO)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            icon: "/service/search.svg",
        },
        {
            id: 6,
            title: "Open to new ideas and contributions",
            description:
                "Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.",
            icon: "/service/idea.svg",
        },
    ];

    const services1 = [
        {
            icon: "/image/true.svg",
            title: "Per ei quaeque sensibus",
            description: "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.",
        },
        {
            icon: "/image/true.svg",
            title: " Cu imperdiet posidonium sed",
            description: "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.",
        },
        {
            icon: "/image/true.svg",
            title: "Nulla omittam sadipscing mel ne",
            description: "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.",
        },
    ];
    const services2 = [
        {
            icon: "/image/true.svg",
            title: "Per ei quaeque sensibus",
            // description: "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.",
        },
        {
            icon: "/image/true.svg",
            title: " Cu imperdiet posidonium sed",
            // description: "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.",
        },
        {
            icon: "/image/true.svg",
            title: "Nulla omittam sadipscing mel ne",
            // description: "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.",
        },
        {
            icon: "/image/true.svg",
            title: "Per ei quaeque sensibus",
            // description: "Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.",
        },
        {
            icon: "/image/true.svg",
            title: " Cu imperdiet posidonium sed",
            // description: "Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.",
        },
        {
            icon: "/image/true.svg",
            title: "Nulla omittam sadipscing mel ne",
            // description: "At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.",
        },
    ];

    return (
        <div className=''>
            <div className='mx-auto '>
                <div className='py-12 md:py-20'>

                    <div className='mx-auto max-w-4xl xl:max-w-5xl 2xl:max-w-[91rem] pb-10 text-center px-5 lg:px-0 md:pb-16'>


                        <div className='flex flex-col items-center justify-center mb-9'>
                            <p className={`text-4xl md:text-5xl font-bold tacking-tighter lg:text-6xl 2xl:text-[5rem] ${isLight ? "text-[#000e]" : "text-[#ffffffc5]"} `}>Elevate your projects with our stunning templates</p>

                        </div>
                        <div>
                            <p className={`mx-auto sm:w-auto md:w-3xl 2xl:w-[76rem]  font-medium tacking-tighter sm:text-[20px] 2xl:text-3xl  ${isLight ? "text-[#0000009e]" : "text-[#94a3b8]"}`}>
                                Donec aliquam pharetra nibh quis vestibulum. Praesent hendrerit sem at lacus ullamcorper egestas. Morbi lacinia ipsum in nulla gravida, ac sagittis turpis pretium.
                            </p>
                        </div>

                        {/* button */}
                        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-5 px-10 w-full">

                            <button className={`w-full sm:w-auto border-0 flex items-center justify-center gap-2 px-10 py-4  2xl:py-5 2xl:px-10 2xl:text-2xl bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-white `}>
                                {/* <img src="/download.svg" alt="Download" /> */}
                                Start Exploring
                            </button>


                        </div>

                    </div>

                </div>
            </div>
            {/* image  */}


            {/* <div className="lg:container lg:mx-auto px-4 sm:px-6 md:px-5 xl:px-20 mb-10">
                <img
                    src="/image/hero.jpg"
                    alt="Hero"
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div> */}
            <div className="lg:container lg:mx-auto px-4 sm:px-6 md:px-5 xl:px-10 mb-10">
                <img
                    src="/image/hero.jpg"
                    alt="Hero"
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/*  */}

            <div className={`h-full 2xl:container   2xl:px-0 2xl:mx-auto pb-20 pt-24 ${isLight ? "bg-white" : "bg-[#1e293b]"} `}>
                {/* <div className='bg-[#1e293b] h-[40rem] 2xl:h-[53rem] '> */}
                <div className="  flex items-center justify-center">
                    <p className={` text-5xl 2xl:text-7xl font-bold   mb-10 ${isLight ? "text-[#000]" : "text-[#ffffff]"} `}>Our Services</p>
                </div>

                {/* cart design  */}

                {/* <div className='grid grid-cols-1 md:grid-cols-2  container mx-auto lg:grid-cols-3 px-10 gap-10 mt-20'> */}
                <div className=" lg:container px-5 lg:px-0  mx-auto w-full md:mb-20  ">


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0 xl:px-20 gap-10 w-full '>

                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={` gap-6 py-11 px-6 2xl:py-13 2xl:px-9 rounded-lg border  shadow-sm card flex flex-start min-w-screen-sm items-stretch h-full ${isLight ? "bg-[#fff] border-gray-100" : "bg-[#0f172a] border-gray-700 "} `} >

                                {/* Icon */}
                                <div className="flex flex-shrink-0">
                                    <img
                                        src={service.icon}
                                        className={` h-8 w-8 2xl:h-12 2xl:w-12  `}
                                        alt={service.title}
                                    />
                                </div>
                                {/* Text */}
                                <div className={`flex flex-col   `}>
                                    <span className={` text-[20px] 2xl:text-3xl font-bold text-[#ffffffce]${isLight ? "text-[#ffffffc5]" : "text-[#1e293b]"} `}>
                                        {service.title}
                                    </span>
                                    <p className={`2xl:text-2xl mt-4 2xl:mt-8 leading-md max-w-xl ${isLight ? "text-[#00000091]" : "text-[#ffffffd3]"} `}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* </div> */}
            </div>

            {/* ========================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 mt-10  px-5 sm:px-5  xl:px-0   xl:container xl:mx-auto 2xl:px-10  ">

                {/* TEXT CONTENT */}
                <div className="order-1 md:order-2 gap-4 xl:gap-6  md:mb-20   md:py-5 xl:py-2 xl:px-1 rounded-lg card flex items-stretch h-full">
                    <div className='flex flex-col items-center justify-center 2xl:justify-start 2xl:items-start gap-4'>
                        <p className={` text-[20px] 2xl:text-[29px] mb-10 2xl:mb-15 2xl:leading-relaxed ${isLight ? "text-[#000000b0]" : "text-[#94a3b8]"}  `}>
                            Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione
                            ut, persius eripuit quo id. Sit te euismod tacimates.
                        </p>

                        {services1.map((item, index) => (
                            <div
                                key={index}
                                className="  gap-4 xl:gap-6 mb-10 md:mb-0 xl:py-1  xl:px-1 rounded-lg flex items-stretch">
                                {/* Icon */}
                                <div className="flex flex-shrink-0">
                                    <img
                                        src={item.icon}
                                        className="h-7 w-7 p-1 2xl:h-10 2xl:w-10 2xl:p-1 rounded-full bg-[#1e3a8a]  "
                                        alt={item.title}
                                    />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col text-[#ffffffad]">
                                    <span className={`text-[18px] 2xl:text-3xl font-semibold ${isLight ? "text-[#131313cf]" : "text-[#ffffff]"} `}>
                                        {item.title}
                                    </span>

                                    <p className={`2xl:text-2xl mt-3 xl:mt-3  leading-md max-w-xl ${isLight ? "text-[#000000b0]":"text-[#94a3b8]"} `}>
                                        {item.description}
                                    </p>

                                    <a className="mt-4 text-white 2xl:text-2xl hover:underline">
                                        {item.link}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* IMAGE */}
                <div className="order-2 md:order-1">
                    <img
                        src="/image/home/camera-front.jpg"
                        className="rounded-xl w-full h-auto "
                        alt="Camera"
                    />
                </div>

            </div>

            {/* -- second */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20   px-5 sm:px-5  xl:px-0   xl:container xl:mx-auto 2xl:px-10  mt-20 ">

                {/* IMAGE */}
                <div className="order-2 md:order-2">
                    <img
                        src="/image/home/camera-back.jpg"
                        className="rounded-xl w-full h-auto"
                        alt="Camera"
                    />
                </div>


                {/* TEXT CONTENT */}
                <div className="order-1 md:order-1 gap-4 xl:gap-6  md:mb-20   md:py-5 xl:py-2 xl:px-1 rounded-lg card flex items-stretch h-full   md:mt-0 ">
                    <div className='flex flex-col items-start justify-start 2xl:justify-start 2xl:items-start gap-4'>
                        <p className={`text-[20px] 2xl:text-[29px] mb-10 2xl:mb-15 2xl:leading-relaxed ${isLight ? "text-[#000000b0]" : "text-[#94a3b8]"}  `}>
                            Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.
                        </p>

                        {services2.map((item, index) => (
                            <div
                                key={index}
                                className="  gap-4 xl:gap-6 mb-1 md:mb-0 xl:py-1  xl:px-1 rounded-lg flex items-stretch">
                                {/* Icon */}
                                <div className="flex flex-shrink-0">
                                    <img
                                        src={item.icon}
                                        className="h-7 w-7 p-1 2xl:h-10 2xl:w-10 2xl:p-1 rounded-full bg-[#1e3a8a] "
                                        alt={item.title}
                                    />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col text-[#ffffffad]">
                                    <span className={`text-[18px] 2xl:text-3xl font-semibold ${isLight ? "text-[#000000ee]" : "text-[#ffffff]"} `}>
                                        {item.title}
                                    </span>
                                    <a className="mt-4 text-white 2xl:text-2xl hover:underline">
                                        {item.link}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* ========================= */}




        </div>
    )
}

export default servic
