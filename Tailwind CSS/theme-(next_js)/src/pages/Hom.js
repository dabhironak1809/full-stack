 import React from 'react'
 
 function Hom({ isLight }) {
 
     const services = [
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
     const services1 = [
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
         <main className=''>
 
             <div className='mx-auto '>
                 <div className='py-12 md:py-20'>
 
                     <div className='mx-auto max-w-4xl xl:max-w-5xl 2xl:max-w-[91rem] pb-10 text-center px-5 lg:px-1 md:pb-16'>
 
 
                         <div className='flex flex-col items-center justify-center mb-9'>
 
                             <p className={`text-4xl md:text-5xl font-bold tacking-tighter lg:text-6xl 2xl:text-[5rem] ${isLight ? "text-[#000000c5]" : "text-[#ffffffe0]"}  `}>
                                 Free template for <span className='hidden  md:inline ' > starts a website using </span> Next.js + Tailwind CSS</p>
 
                         </div>
                         <div className='mx-auto max-w-3xl xl:max-w-4xl 2xl:max-w-7xl'>
                             <p className={`text-[20px] tacking-tighter md:text-2xl  2xl:text-3xl  ${isLight ? "text-[#000000ba]" : "text-[#94a3b8]"} `}>
                                 <span className='hidden  md:inline'>
                                     TailNext is a production ready template to start your new website using {''}
                                 </span>
 
                                 <span className='italic hidden  md:inline '>
                                     Next.js + Tailwind CSS. </span>
                                 <span className='text-[50]'>
 
                                     It has been designed following Best Practices, SEO, Accessibility, Dark  Mode, great Page Speed, image optimization.
                                 </span>
                             </p>
                         </div>
 
                         {/* button */}
                         <div className="flex flex-col sm:flex-row gap-8 justify-center mt-5 px-10 w-full">
 
                             <button className="w-full sm:w-auto border-0 flex items-center justify-center gap-2 px-10 py-4  2xl:py-5 2xl:px-10 2xl:text-2xl bg-blue-700 hover:bg-blue-800 font-semibold rounded-lg text-white ">
                                 <img src="/download.svg" alt="Download" />
                                 Get template
                             </button>
 
                             <button className="w-full border sm:w-auto border  px-10 py-4 2xl:py-5 2xl:px-10 2xl:text-2xl rounded-lg hover:bg-white/20">
                                 Learn more
                             </button>
 
                         </div>
 
                     </div>
 
                 </div>
             </div>
 
             {/* image container */}
 
             <div className="lg:container lg:mx-auto px-4 sm:px-6 md:px-5 xl:px-20 mb-10">
                 <img
                     src="/image/hero.jpg"
                     alt="Hero"
                     className="w-full h-auto rounded-lg object-cover"
                 />
             </div>
 
 
             {/* logo assign  */}
             <div className="container mx-auto flex justify-center items-center gap-4 sm:gap-10 mt-20 sm:mt-50 mb-20 2xl::mb-50">
                 <img
                     src="/nextjs-logo.png"
                     className="w-10 md:w-14  2xl:w-25 grayscale hover:grayscale-0 transition duration-300"
                 />
 
                 <img
                     src="/react-logo.png"
                     className="w-10 md:w-14 2xl:w-25 grayscale hover:grayscale-0 transition duration-300" />
 
                 <img
                     src="/tailwind-css-logo.webp"
                     className="w-10 md:w-14 2xl:w-25 grayscale hover:grayscale-0 transition duration-300" />
 
                 <img
                     src="/typescript-logo.png"
                     className="w-10 md:w-14 2xl:w-25 grayscale hover:grayscale-0 transition duration-300" />
             </div>
 
             {/* -- cards heading  */}
 
             <div>
 
                 <div className='mx-auto '>
                     <div className='py-12 md:pt-20'>
 
                         <div className='mx-auto max-w-6xl pb-10 text-center md:pb-1'>
                             <div className={`text-[5] 2xl:text-[10] font-bold uppercase  ${isLight ? "text-[#3f9aea]" : "text-[#d0e9ff]"}`}>Features</div>
                             <div className='flex flex-col items-center justify-center mb-5 2xl:mb-9'>
                                 <p className={` text-4xl font-bold tacking-tighter   lg:text-5xl 2xl:text-6xl  ${isLight ? "text-[#000000c5]" : "text-[#ffffffc7]"} `}>What you get with TailNext</p>
 
                             </div>
                             <div>
                                 <p className={`mx-auto sm:w-auto md:w-3xl 2xl:w-7xl  font-medium tacking-tighter sm:text-[20px] 2xl:text-3xl ${isLight ? "text-[#0000008b]" : "text-[#94a3b8]"} `}>
                                     Elevating Your Digital Presence: Discover the Synergies Unleashed in Our Platform's Core Strengths, from Seamless Integration to Open Collaboration.
                                 </p>
                             </div>
                         </div>
 
                     </div>
                 </div>
 
                 {/* -==- */}
 
                 <div className={` lg:container px-13 lg:px-0  mx-auto w-full md:mb-20 ${isLight ? "text-[#000000c5]" : "text-[#ffffffc7]"} `}>
 
 
                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0 xl:px-13 gap-10 w-full '>
 
                         {/* 1 */}
                         <div className={` font-semibold gap-4 xl:gap-6 md:py-5 xl:py-2 xl:px-1 rounded-lg card flex flex-start   items-stretch w-full h-full ${isLight ? "text-[#000000c5]" : "text-[#015effc7]"} `}>
                             {/* Icon */}
                             <div className="flex flex-shrink-0">
                                 <img
                                     src="/service/white/tailwind.svg"
                                     className=" h-12 w-12 p-3  2xl:h-18 2xl:w-18 2xl:p-5 rounded-md text-white  bg-[#1e3a8a]"
                                     alt="Tailwind" />
                             </div>
                             {/* Text */}
                             <div className={`flex flex-col   ${isLight ? "text-[#000000c1]" : "text-[#ffffffc7]"} `}>
                                 <span className={` text-2xl 2xl:text-3xl font-semibold  ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"} `}>
                                     Next.Js + Tailwind CSS Integration
                                 </span>
                                 <p className=" 2xl:text-2xl mt-3 xl:mt-8 leading-md max-w-xl ">
                                     A seamless integration between two great frameworks that offer high productivity, performance and versatility.</p>
                                 <a className={`mt-4  font-bold 2xl:text-2xl hover:underline  ${isLight ? "text-[#2563eb]" : "text-[#ffffffc7]"} `}>Discover now</a>
                             </div>
                         </div>
 
                         {/* 2 */}
                         <div className={` gap-4 xl:gap-6 md:py-5 xl:py-2 xl:px-1 rounded-lg card flex flex-start min-w-screen-md w-full    items-stretch h-full  ${isLight ? "text-[#000000c1]" : "text-[#ffffffc7]"} `}>
                             {/* Icon */}
                             <div className="flex flex-shrink-0">
                                 <img
                                     src="/service/white/redy_to_use.svg"
                                     className="h-12 w-12 p-3  2xl:h-18 2xl:w-18 2xl:p-5 rounded-md text-white   bg-[#1e3a8a]"
                                     alt="Tailwind" />
                             </div>
                             {/* Text */}
                             <div className={`flex font-semibold flex-col  ${isLight ? "text-[#000000d1]" : "text-[#ffffffc7]"}`}>
                                 <span className={`text-2xl 2xl:text-3xl font-semibold ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"}`}>
                                     Ready-to-use Components
                                 </span>
                                 <p className="2xl:text-2xl mt-3 xl:mt-8 leading-md max-w-xl">
                                     Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...
                                 </p>
                                 <a className={`mt-4   2xl:text-2xl hover:underline  ${isLight ? "text-[#2563eb]" : "text-[#ffffffc7]"} `}>Discover now</a>
 
                             </div>
                         </div>
 
                         {/* 3 */}
 
                         <div className={` gap-4 xl:gap-6 md:py-5 xl:py-2 xl:px-1 rounded-lg card flex flex-start min-w-screen-sm    items-stretch h-full  ${isLight ? "text-[#000000c1]" : "text-[#ffffffc7]"}  `}>
                             {/* Icon */}
                             <div className="flex flex-shrink-0">
                                 <img
                                     src="/service/white/best_practice.svg"
                                     className="h-12 w-12 p-3  2xl:h-18 2xl:w-18 2xl:p-5 rounded-md text-white   bg-[#1e3a8a]"
 
                                     alt="Tailwind" />
                             </div>
                             {/* Text */}
                             <div className={`flex font-semibold flex-col ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"}`}>
                                 <span className="text-2xl 2xl:text-3xl font-semibold  ">
                                     Best Practices
                                 </span>
                                 <p className="2xl:text-2xl mt-3 xl:mt-8 leading-md max-w-xl">
                                     By prioritizing maintainability and scalability through coding standards and design principles, your website stays robust and efficient.
                                 </p>
                                 <a className={`mt-4   2xl:text-2xl hover:underline  ${isLight ? "text-[#2563eb]" : "text-[#ffffffc7]"} `} >Discover now</a>
 
                             </div>
                         </div>
 
                         {/* 4 */}
                         <div className={` gap-6 md:py-2 px-1 rounded-lg card flex flex-start min-w-screen-sm items-stretch h-full  ${isLight ? "text-[#000000c1]" : "text-[#ffffffc7]"}  `}>
                             {/* Icon */}
                             <div className="flex flex-shrink-0">
                                 <img
                                     src="/service/white/rocket.svg"
                                     className="h-12 w-12 p-3  2xl:h-18 2xl:w-18 2xl:p-5 rounded-md text-white   bg-[#1e3a8a]"
 
                                     alt="Tailwind" />
                             </div>
                             {/* Text */}
                             <div className={`flex flex-col ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"}`}>
                                 <span className={`text-2xl 2xl:text-3xl font-semibold ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"} `}>
                                     Excellent Page Speed
                                 </span>
                                 <p className="2xl:text-2xl mt-3 xl:mt-8 leading-md max-w-xl">
                                     Excellent Page Speed
                                     Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.
                                 </p>
                                 <a className={`mt-4 2xl:text-2xl hover:underline `} >Discover now</a>
 
                             </div>
                         </div>
 
                         {/* 5 */}
 
                         <div className={` gap-4 xl:gap-6 md:py-5 xl:py-2 xl:px-1 rounded-lg card flex flex-start min-w-screen-sm    items-stretch h-full  ${isLight ? "text-[#000000c1]" : "text-[#ffffffc7]"}  `}>
                             {/* Icon */}
                             <div className="flex flex-shrink-0">
                                 <img
                                     src="/service/white/search.svg"
                                     className="h-12 w-12 p-3  2xl:h-18 2xl:w-18 2xl:p-5 rounded-md text-white   bg-[#1e3a8a]"
 
                                     alt="Tailwind" />
                             </div>
                             {/* Text */}
                             <div className={`flex font-semibold flex-col ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"} `}>
                                 <span className={`text-2xl 2xl:text-3xl font-semibold ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"}  `}>
                                     Excellent Page Speed
                                 </span>
                                 <p className="2xl:text-2xl mt-3 xl:mt-8 leading-md max-w-xl">
                                     Excellent Page Speed
                                     Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.
                                 </p>
                                 <a className={`mt-4   2xl:text-2xl hover:underline  ${isLight ? "text-[#2563eb]" : "text-[#ffffffc7]"}`}>Discover now</a>
 
                             </div>
                         </div>
 
                         {/* 6 */}
                         <div className={` gap-4 xl:gap-6 mb-20 md:mb-0 md:py-5 xl:py-2 xl:px-1 rounded-lg card flex flex-start min-w-screen-sm    items-stretch h-full  ${isLight ? "text-[#000000c1]" : "text-[#ffffffc7]"}  `}>
                             {/* Icon */}
                             <div className="flex flex-shrink-0">
                                 <img
                                     src="/service/white/idea.svg"
                                     className="h-12 w-12 p-3  2xl:h-18 2xl:w-18 2xl:p-5 rounded-md text-white   bg-[#1e3a8a]"
 
                                     alt="Tailwind" />
                             </div>
                             {/* Text */}
                             <div className={`flex font-semibold flex-col  ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"}`}>
                                 <span className={`text-2xl 2xl:text-3xl font-semibold ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"}`}>
                                     Excellent Page Speed
                                 </span>
                                 <p className=" 2xl:text-2xl mt-3 xl:mt-8 leading-md max-w-xl">
                                     Excellent Page Speed
                                     Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.
                                 </p>
                                 <a className={`mt-4   2xl:text-2xl hover:underline  ${isLight ? "text-[#2563eb]" : "text-[#ffffffc7]"} `} >Discover now</a>
 
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
 
             {/* --container  --- */}
 
             <div className={`  w-full  ${isLight ? "bg-[#ffffff]" : "bg-[#1e293b]"}  `}>
                 <div className='py-12 md:pt-20'>
 
                     <div className='mx-auto max-w-6xl pb-10 text-center md:pb-1'>
                         <div className={`text-[5] 2xl:text-[10] font-bold uppercase ${isLight ? "text-[#1558e9]" : "text-[#94a0f5c9]"} `}>Content</div>
                         <div className='flex flex-col items-center justify-center mb-5 2xl:mb-9'>
                             <p className={` text-4xl font-bold tacking-tighter   lg:text-5xl 2xl:text-6xl ${isLight ? "text-[#0a0a0a]" : "text-[#ffffffc7]"} `}>Aliquip definiebas ad est</p>
 
                         </div>
                         <div>
                             <p className={`mx-auto sm:w-auto md:w-3xl 2xl:w-7xl text-[20px] font-medium tacking-tighter sm:text-[20px] 2xl:text-3xl ${isLight ? "text-[#000000b0]" : "text-[#94a3b8]"} `}>
                                 Quando cetero his ne, eum admodum sapientem ut
                             </p>
                         </div>
                     </div>
 
                 </div>
 
                 {/* -- first - */}
 
                 <div className={`grid grid-cols-1 md:grid-cols-2 md:gap-20   px-5 sm:px-5  xl:px-0   xl:container xl:mx-auto 2xl:px-10 ${isLight ? "bg-[#ffffff]" : "bg-[#1e293b]"} `}>
 
                     {/* TEXT CONTENT */}
                     <div className="order-2 md:order-1 gap-4 xl:gap-6  md:mb-20   md:py-5 xl:py-2 xl:px-1 rounded-lg card flex items-stretch h-full">
                         <div className='flex flex-col items-center justify-center 2xl:justify-start 2xl:items-start gap-4'>
                             <p className={` text-[20px] 2xl:text-[29px] mb-10 2xl:mb-15 2xl:leading-relaxed ${isLight ? "text-[#000000b1]" : "text-[#94a3b8]"}  `}>
                                 Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione
                                 ut, persius eripuit quo id. Sit te euismod tacimates.
                             </p>
 
                             {services.map((item, index) => (
                                 <div
                                     key={index}
                                     className={` gap-4 xl:gap-6 mb-10 md:mb-0 xl:py-1  xl:px-1 rounded-lg flex items-stretch ${isLight ? "bg-[#fff]" : "bg-[#1e293b]"} `}>
                                     {/* Icon */}
                                     <div className="flex flex-shrink-0">
                                         <img
                                             src={item.icon}
                                             className="h-7 w-7 p-1 2xl:h-10 2xl:w-10 2xl:p-1 rounded-full bg-[#1e3a8a]"
                                             alt={item.title}
                                         />
                                     </div>
 
                                     {/* Text */}
                                     <div className="flex flex-col text-[#ffffffad]">
                                         <span className={`text-[18px] 2xl:text-3xl font-semibold ${isLight ? "text-[#000000c5]" : "text-white"} `}>
                                             {item.title}
                                         </span>
 
                                         <p className={`2xl:text-2xl mt-3 xl:mt-3  leading-md max-w-xl ${isLight ? "text-[#000000c5]" : "text-[#94a3b8]"} `}>
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
                     <div className="order-2 md:order-2">
                         <img
                             src="/image/home/camera-front.jpg"
                             className="rounded-xl w-full h-auto"
                             alt="Camera"
                         />
                     </div>
 
                 </div>
 
                 {/* -- second */}
                 <div className={`grid grid-cols-1 md:grid-cols-2 md:gap-20   px-5 sm:px-5  xl:px-0   xl:container xl:mx-auto 2xl:px-10  mt-20 ${isLight ? "bg-[#ffffff]" : "bg-[#1e293b]"}`}>
 
                     {/* IMAGE */}
                     <div className="order-2 md:order-1">
                         <img
                             src="/image/home/camera-back.jpg"
                             className="rounded-xl w-full h-auto"
                             alt="Camera"
                         />
                     </div>
 
 
                     {/* TEXT CONTENT */}
                     <div className="order-1 md:order-2 gap-4 xl:gap-6  md:mb-20   md:py-5 xl:py-2 xl:px-1 rounded-lg card flex items-stretch h-full   md:mt-0 ">
                         <div className='flex flex-col items-start justify-start 2xl:justify-start 2xl:items-start gap-4'>
                             <p className={`  text-[20px] 2xl:text-[29px] mb-10 2xl:mb-15 2xl:leading-relaxed ${isLight ? "text-[#000000b1]" : "text-[#94a3b8]"}  `}>
                                 Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.
                             </p>
 
                             {services1.map((item, index) => (
                                 <div
                                     key={index}
                                     className={` gap-4 xl:gap-6 mb-1 md:mb-0 xl:py-1  xl:px-1 rounded-lg flex items-stretch ${isLight ? "bg-[#fff]" : "bg-[#1e293b]"}`}>
                                     {/* Icon */}
                                     <div className="flex flex-shrink-0">
                                         <img
                                             src={item.icon}
                                             className="h-7 w-7 p-1 2xl:h-10 2xl:w-10 2xl:p-1 rounded-full bg-[#1e3a8a]"
                                             alt={item.title}
                                         />
                                     </div>
 
                                     {/* Text */}
                                     <div className="flex flex-col  ">
                                         <span className={`text-[18px] 2xl:text-3xl font-semibold   ${isLight ? "text-[#000000c5]" : "text-white"}`}>
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
 
             </div>
 
 
         </main>
     )
 }
 
 export default Hom
 
 
 
 