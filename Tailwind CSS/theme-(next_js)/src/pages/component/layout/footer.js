import React from "react";

function footer({ isLight }) {
  return (
    <main className={`w-full  ${isLight ? "bg-white" : "bg-[#0f172a]"} `}>
      <footer className={`container mx-auto  `}>
        <div className=" text-white flex justify-start items-start py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10  items-start justify-start    md:items-start md:justify-start  lg:items-center lg:justify-center  px-7  md:px-10">
            {/* Address */}
            <div className="flex flex-col gap-3 2xl:gap-5">
              <p className={`2xl:text-2xl font-semibold ${isLight ? "text-black" : "text-white"} `}>Address</p>
              <p className={`2xl:text-2xl  ${isLight ? "text-[#000000dc]" : "text-[#ffffff78]"} `}>
                51 Phasellus Avenue Maecenas Aliquam, AQ 52098
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-3 2xl:gap-5">
              <p className={`2xl:text-2xl font-semibold ${isLight ? "text-black" : "text-white"} `}>Phone</p>
              <p className={`2xl:text-2xl ${isLight ? "text-[#000000dc]" : "text-[#ffffff78]"} `}>
                Reception: +105 123 4567 <br />
                Office: +107 235 7890
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3 2xl:gap-5">
              <p className={`2xl:text-2xl font-semibold ${isLight ? "text-black" : "text-white"}`}>Email</p>
              <p className={`2xl:text-2xl ${isLight ? "text-[#000000dc]" : "text-[#ffffff78]"} `}>
                Office: info@example.com <br />
                Site: https://example.com
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3 2xl:gap-5">
              <p className={`2xl:text-2xl font-semibold ${isLight ? "text-black" : "text-white"}`}>Social</p>
              <div className="flex gap-5">
                <img
                  src="/footer/twiter.svg"
                  className={`w-7 h-10 transition-filter duration-300 ${isLight ? "filter invert" : "filter invert-0"
                    }`}
                  alt="Twitter"
                />

                <img
                  src="/footer/instagram.svg"
                  className={`w-7 h-10 transition-filter duration-300 ${isLight ? "filter invert" : "filter invert-0"
                    }`}
                  alt="Instagram"
                />
                <img
                  src="/footer/facebook.svg"
                  className={`w-7 h-10 transition-filter duration-300 ${isLight ? "filter invert" : "filter invert-0"
                    }`}
                  alt="Facebook"
                />
                <img src="/footer/network.svg" className={`w-7 h-10 transition-filter duration-300 ${isLight ? "filter invert" : "filter invert-0"
                  }`} alt="Network" />

                <img src="/footer/github.svg" className={`w-7 h-10 transition-filter duration-300 ${isLight ? "filter invert" : "filter invert-0"
                  }`} alt="Github" />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className={`md:container md:mx-auto md:px-20 py-6 flex flex-col md:flex-row items-start justify-start px-5   md:items-center md:justify-between gap-4 text-sm ${isLight ? "text-[#000000dc]" : "text-[#ffffff78]"}`}>

            <p className={`text-center md:text-left 2xl:text-2xl `}>
              Made by{" "}
              <a
                href="#"
                className={`hover:text-blue-500 hover:underline ${isLight ? "text-[#000000] font-bold" : "text-[#ffffff] font-bold"}`}
              >
                onWidget
              </a>{" "}
              · All rights reserved.
            </p>

            <p className="flex gap-2 2xl:text-2xl">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <span>·</span>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </p>

          </div>
        </div>

      </footer>
    </main>
  );
}

export default footer;
