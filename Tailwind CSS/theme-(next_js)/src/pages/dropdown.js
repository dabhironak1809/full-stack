// // next image code 

//  import Image from 'next/image'

// export default function Page() {
//   return (
//     <div className="grid-element">
//       <Image
//         fill
//         src="/image/hero.jpg"
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       />
//     </div>
//   )
// }

// ==

// import Image from "next/image";

// export default function Page() {
//     return (
//         //  this image get on online any website to get this image and that type structure
//         <Image
//             // src="https://softwingz.com/assets/img/about.gif"
//             src="https://softwingz.com/assets/img/icons/11.png"
//             alt="Nature"
//             width={500}
//             height={400}
//             unoptimized  // IMPORTANT for GIFs
//         />
//     );
// }

// import Image from "next/image";

// export default function Page() {
//   return (
//     <Image
//       src="https://softwingz.com/assets/img/about.gif"
//       alt="About GIF"
//       width={500}
//       height={400}
//       unoptimized   // IMPORTANT for GIFs
//     />
//   );
// }


// "use client";
// import React, { useEffect } from "react";
// import $ from "jquery";
// import "select2";
// import "select2/dist/css/select2.min.css";

// export default function Dropdown() {
//   useEffect(() => {
//     $("#country").select2({
//       placeholder: "-- Select Country --",
//       width: "80%",
//       allowClear: true,
//     });

//     // OPTIONAL: cleanup to avoid duplicate initialization
//     return () => {
//       $("#country").select2("destroy");
//     };
//   }, []);

//   return (
//     <div className="flex flex-col mb-4 w-full mt-7">
//       <label
//         htmlFor="country"
//         className="text-lg text-gray-300 font-medium mb-1"
//       >
//         Country
//       </label>

//       <select id="country">
//         <option value=""></option>
//         <option value="Indian">Indian</option>
//         <option value="Usa">Usa</option>
//         <option value="UK">UK</option>
//         <option value="japan">Japan</option>
//         <option value="canada">Canada</option>
//         <option value="HongKong">Hong Kong</option>
//       </select>
//     </div>
//   );
// }

// normal select a dropdown selection 

// "use client";

// import React, { useEffect } from "react";
// import $ from "jquery";
// import select2 from "select2";
// import "select2/dist/css/select2.min.css";

// export default function Dropdown() {
//     useEffect(() => {
//         // IMPORTANT: bind select2 to jQuery instance
//         select2($);

//         $("#country").select2({
//             placeholder: "-- Select Country --",
//             width: "80%",
//             allowClear: true,
//         });

//         return () => {
//             $("#country").select2("destroy");
//         };
//     }, []);

//     return (
//         <div className="flex flex-col mb-4 w-full mt-7">
//             <label htmlFor="country" className="text-lg text-gray-300 font-medium mb-1">
//                 Country
//             </label>

//             <select id="country">
//                 <option value=""></option>
//                 <option value="Indian">Indian</option>
//                 <option value="Usa">Usa</option>
//                 <option value="UK">UK</option>
//                 <option value="Japan">Japan</option>
//                 <option value="Canada">Canada</option>
//                 <option value="HongKong">Hong Kong</option>
//             </select>
//         </div>
//     );
// }

// multiple select a drop down 

"use client";

import React, { useEffect } from "react";
import $ from "jquery";
import select2 from "select2";
import "select2/dist/css/select2.min.css";

export default function Dropdown() {
    useEffect(() => {
        // Bind select2 to jQuery (REQUIRED for Turbopack)
        select2($);

        $(".js-example-basic-multiple-limit").select2({
            placeholder: "-- Select Countries --",
            width: "80%",
            maximumSelectionLength: 2,
        });

        return () => {
            $(".js-example-basic-multiple-limit").select2("destroy");
        };
    }, []);

    return (
        <div className="flex flex-col mb-4 w-full mt-7">
            <label className="text-lg text-gray-300 font-medium mb-1">
                Country
            </label>

            <select
                className="js-example-basic-multiple-limit"
                multiple
            >
                <option value="Indian">Indian</option>
                <option value="Usa">USA</option>
                <option value="UK">UK</option>
                <option value="Japan">Japan</option>
                <option value="Canada">Canada</option>
                <option value="HongKong">Hong Kong</option>
            </select>
        </div>
    );
}
