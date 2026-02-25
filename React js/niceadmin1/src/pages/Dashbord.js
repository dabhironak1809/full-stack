import React from "react";
import BarChart from "./components/BarChart";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Dashbord() {
  return (
    <div className="p-4 mt-14">
      <div>
        <h1 className="text-xl text-blue-950 dark:text-sky-400">Dashboard</h1>
        <div className="flex space-x-3 ">
          <p className="text-gray-400 dark:text-purple-400">Home</p>
          <p className="text-gray-400 dark:text-purple-400">/</p>
          <p className="text-gray-600 dark:text-purple-600">Dashboard</p>
        </div>
        <h2
          className={`${rajdhani.className} text-gray-800 font-semibold text-lg mt-4`}
        >
          {item.solar_name}
        </h2>
        <p className={`${rajdhani.className} text-3xl font-bold mt-2`}>
          {item.amount}
          <span className="text-gray-500 ml-4 text-sm font-normal">/Month</span>
        </p>
      </div>

      {/* <div className='grid grid-cols-3 space-x-3 space-y-3 mt-4'> */}
      <div className="grid grid-cols-1 lg:grid-cols-3   gap-x-4 gap-y-4 ">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mt-4">
            <div className="bg-white rounded-md overflow-x-auto dark:bg-gray-700">
              <div className="flex justify-between m-4">
                <div className="flex space-x-2 ">
                  <p className="text-[#042c72] font-semibold text-lg dark:text-yellow-300">
                    Sales
                  </p>
                  <p className="text-gray-400 text-sm mt-1 dark:text-yellow-600">
                    |
                  </p>
                  <p className="text-gray-400 text-sm mt-1 dark:text-yellow-600">
                    Today
                  </p>
                </div>
                <div className="text-gray-400 hover:text-blue-800 pl-2 dark:text-sky-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </div>
              </div>
              <div className="flex space-x-4 p-4">
                <div className="bg-[#f6f6fe] rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#4154f1]"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-[#012970] font-semibold text-2xl dark:text-orange-400">
                    145
                  </h1>
                  <div className="flex space-x-2">
                    <p className="text-[#198754] font-semibold dark:text-green-400">
                      12%
                    </p>
                    <p className="">increase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md overflow-x-auto dark:bg-gray-700">
              <div className="flex justify-between m-4">
                <div className="flex space-x-2">
                  <p className="text-[#042c72] font-semibold text-lg dark:text-yellow-300">
                    Revenue
                  </p>
                  <p className="text-gray-400 text-sm mt-1 dark:text-yellow-600">
                    |
                  </p>
                  <p className="text-gray-400 text-sm mt-1 dark:text-yellow-600">
                    This Month
                  </p>
                </div>
                <div className="text-gray-400 hover:text-blue-800 dark:text-sky-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </div>
              </div>
              <div className="flex space-x-4 p-4">
                <div className="bg-[#e0f8e9] rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#2eca7a]"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-[#012970] font-semibold text-2xl dark:text-orange-400">
                    $3,264
                  </h1>
                  <div className="flex space-x-2">
                    <p className="text-[#198754] font-semibold dark:text-green-400">
                      8%
                    </p>
                    <p className="">increase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white  md:col-span-2 rounded-md overflow-x-auto dark:bg-gray-700">
              <div className="flex justify-between m-4">
                <div className="flex space-x-2">
                  <p className="text-[#042c72] font-semibold text-lg dark:text-yellow-300">
                    Customers
                  </p>
                  <p className="text-gray-400 text-sm mt-1 dark:text-yellow-600">
                    |
                  </p>
                  <p className="text-gray-400 text-sm mt-1 dark:text-yellow-600">
                    This Year
                  </p>
                </div>
                <div className="text-gray-400 hover:text-blue-800 dark:text-sky-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                  </svg>
                </div>
              </div>
              <div className="flex space-x-4 p-4">
                <div className="bg-[#ffecdf] rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ff8629]"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-[#012970] font-semibold text-2xl dark:text-orange-400">
                    1244
                  </h1>
                  <div className="flex space-x-2">
                    <p className="text-[#dc3545] font-semibold dark:text-red-400">
                      12%
                    </p>
                    <p className="">decrease</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-white md:col-span-2 dark:bg-gray-700">
              <h1 className="text-3xl font-bold mb-6 dark:text-yellow-300">
                Sales Dashboard
              </h1>
              <div className=" ">
                <BarChart />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" bg-white rounded-md md:row-span-3 space-y-2 lg:mt-4 px-2 py-0.5 dark:bg-gray-700">
            <div className="flex justify-between m-4">
              <div className="flex space-x-2">
                <p className="text-[#042c72] font-semibold text-lg dark:text-yellow-300">
                  Recent Activity
                </p>
                <p className="text-gray-400 text-sm mt-1 dark:text-yellow-600">
                  |
                </p>
                <p className="text-gray-400 text-sm mt-1 dark:text-yellow-600">
                  Today
                </p>
              </div>
              <div className="text-gray-400 hover:text-blue-800 dark:text-sky-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3 ">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm dark:text-pink-400">32</p>
                  <p className="text-gray-400 text-sm dark:text-pink-400">
                    {" "}
                    min
                  </p>
                </div>
                <div className="">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#198754] -mt-4"
                      width="54"
                      height="54"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm dark:text-blue-300">
                  Quia quae rerum <b>explicabo officiis</b> beatae
                </p>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm dark:text-pink-400">56</p>
                  <p className="text-gray-400 text-sm dark:text-pink-400">
                    {" "}
                    min
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#dc3545] -mt-4"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm dark:text-blue-300">
                  Voluptatem blanditiis blanditiis eveniet
                </p>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm dark:text-pink-400">2</p>
                  <p className="text-gray-400 text-sm dark:text-pink-400">
                    hrs
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#0d6efd] -mt-4 ml-3"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm dark:text-blue-300">
                  Voluptates corrupti molestias voluptatem
                </p>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm dark:text-pink-400">1</p>
                  <p className="text-gray-400 text-sm dark:text-pink-400">
                    day
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#0dcaf0] -mt-4 ml-2"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm dark:text-blue-300">
                  Tempore autem saepe <b>occaecati voluptatem</b> tempore
                </p>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm dark:text-pink-400">2</p>
                  <p className="text-gray-400 text-sm dark:text-pink-400">
                    days
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ffc107] -mt-4"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm dark:text-blue-300">
                  Est sit eum reiciendis exercitationem
                </p>
              </div>
            </div>

            <div className="px-3 pb-4">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm dark:text-pink-400">4</p>
                  <p className="text-gray-400 text-sm dark:text-pink-400">
                    weeks
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#54585f] -mt-4 -ml-2"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm dark:text-blue-300">
                  Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-md md:row-span-3 space-y-2 lg:mt-4 dark:bg-gray-700">
            <div className="flex justify-between m-4">
              <div className="flex space-x-2">
                <p className="text-[#042c72] font-semibold text-lg">
                  Recent Activity
                </p>
                <p className="text-gray-400 text-sm mt-1 dark:text-sky-600">
                  |
                </p>
                <p className="text-gray-400 text-sm mt-1 dark:text-sky-600">
                  Today
                </p>
              </div>
              <div className="text-gray-400 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm">32</p>
                  <p className="text-gray-400 text-sm"> min</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#198754] -mt-4"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm">
                  Quia quae rerum <b>explicabo officiis</b> beatae
                </p>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm">56</p>
                  <p className="text-gray-400 text-sm"> min</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#dc3545] -mt-4"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm">
                  Voluptatem blanditiis blanditiis eveniet
                </p>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm">2</p>
                  <p className="text-gray-400 text-sm">hrs</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#0d6efd] -mt-4 ml-3"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm">
                  Voluptates corrupti molestias voluptatem
                </p>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm">1</p>
                  <p className="text-gray-400 text-sm">day</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#0dcaf0] -mt-4 ml-2"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm">
                  Tempore autem saepe <b>occaecati voluptatem</b> tempore
                </p>
              </div>
            </div>

            <div className="px-3">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm">2</p>
                  <p className="text-gray-400 text-sm">days</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#ffc107] -mt-4"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm">Est sit eum reiciendis exercitationem</p>
              </div>
            </div>

            <div className="px-3 pb-4">
              <div className="flex space-x-3">
                <div className="flex space-x-1">
                  <p className="text-gray-400 text-sm">4</p>
                  <p className="text-gray-400 text-sm">weeks</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#54585f] -mt-4 -ml-2"
                    width="54"
                    height="54"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                </div>
                <p className="text-sm">
                  Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='flex gap-x-4 gap-y-4 mt-4'>
        <div className='basis-4/6 space-y-4'>
          <div className='flex space-x-4'>

            <div className='bg-white rounded-md '>
              <div className='flex justify-between m-4'>
                <div className='flex space-x-2 '>
                  <p className='text-[#042c72] font-semibold text-lg'>Sales</p>
                  <p className='text-gray-400 text-sm mt-1'>|</p>
                  <p className='text-gray-400 text-sm mt-1'>Today</p>
                </div>
                <div className='text-gray-400 hover:text-blue-800'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                  </svg>
                </div>
              </div>
              <div className='flex space-x-4 p-4'>
                <div className='bg-[#f6f6fe] rounded-full p-4'> 
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-[#4154f1]' width="28" height="28" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                </div>
                <div>
                  <h1 className='text-[#012970] font-semibold text-2xl'>145</h1>
                  <div className='flex space-x-2'>
                    <p className='text-[#198754] font-semibold'>12%</p>
                    <p>increase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-md'>
            <div className='flex justify-between m-4'>
              <div className='flex space-x-2'>
                <p className='text-[#042c72] font-semibold text-lg'>Revenue</p>
                <p className='text-gray-400 text-sm mt-1'>|</p>
                <p className='text-gray-400 text-sm mt-1'>This Month</p>
              </div>
              <div className='text-gray-400 hover:text-blue-800'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
              </div>
            </div>
            <div className='flex space-x-4 p-4'>
              <div className='bg-[#e0f8e9] rounded-full p-4'> 
                <svg xmlns="http://www.w3.org/2000/svg" className='text-[#2eca7a]' width="28" height="28" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                </svg>
              </div>
              <div>
                <h1 className='text-[#012970] font-semibold text-2xl'>$3,264</h1>
                <div className='flex space-x-2'>
                  <p className='text-[#198754] font-semibold'>8%</p>
                  <p>increase</p>
                </div>
              </div>
            </div>
            </div>
          </div>
          
          <div className='bg-white  rounded-md'>
          <div className='flex justify-between m-4'>
            <div className='flex space-x-2'>
              <p className='text-[#042c72] font-semibold text-lg'>Customers</p>
              <p className='text-gray-400 text-sm mt-1'>|</p>
              <p className='text-gray-400 text-sm mt-1'>This Year</p>
            </div>
            <div className='text-gray-400 hover:text-blue-800'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
              </svg>
            </div>
          </div>
          <div className='flex space-x-4 p-4'>
            <div className='bg-[#ffecdf] rounded-full p-4'> 
              <svg xmlns="http://www.w3.org/2000/svg" className='text-[#ff8629]' width="28" height="28" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
              </svg>
            </div>
            <div>
              <h1 className='text-[#012970] font-semibold text-2xl'>1244</h1>
              <div className='flex space-x-2'>
                <p className='text-[#dc3545] font-semibold'>12%</p>
                <p>decrease</p>
              </div>
            </div>
          </div>
          </div>

          <div className="p-10 bg-white">
          <h1 className="text-3xl font-bold mb-6">Sales Dashboard</h1>
          <div className=" ">
            <BarChart />
          </div>
          </div>

        </div>

        <div className='basis-2/6'>
          <div className=' bg-white rounded-md space-y-2'>
            <div className='flex justify-between m-4'>
              <div className='flex space-x-2'>
                <p className='text-[#042c72] font-semibold text-lg'>Recent Activity</p>
                <p className='text-gray-400 text-sm mt-1'>|</p>
                <p className='text-gray-400 text-sm mt-1'>Today</p>
              </div>
              <div className='text-gray-400 hover:text-blue-800'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
              </div>
            </div>

            <div className='px-3'>
              <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                  <p className='text-gray-400 text-sm'>32</p>
                  <p className='text-gray-400 text-sm'> min</p>
                  </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-[#198754] -mt-4' width="54" height="54" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                  </svg>
                  
                </div>
                <p className='text-sm'>Quia quae rerum <b>explicabo officiis</b> beatae</p>
              </div>
            </div>

            <div className='px-3'>
              <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                  <p className='text-gray-400 text-sm'>56</p>
                  <p className='text-gray-400 text-sm'> min</p>
                  </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-[#dc3545] -mt-4' width="54" height="54" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                  </svg>
                  
                </div>
                <p className='text-sm'>Voluptatem blanditiis blanditiis eveniet</p>
              </div>
            </div>

            <div className='px-3'>
              <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                  <p className='text-gray-400 text-sm'>2</p>
                  <p className='text-gray-400 text-sm'>hrs</p>
                  </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-[#0d6efd] -mt-4 ml-3' width="54" height="54" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                  </svg>
                  
                </div>
                <p className='text-sm'>Voluptates corrupti molestias voluptatem</p>
              </div>
            </div>

            <div className='px-3'>
              <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                  <p className='text-gray-400 text-sm'>1</p>
                  <p className='text-gray-400 text-sm'>day</p>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-[#0dcaf0] -mt-4 ml-2' width="54" height="54" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                  </svg>
                  
                </div>
                <p className='text-sm'>Tempore autem saepe <b>occaecati voluptatem</b> tempore</p>
              </div>
            </div>

            <div className='px-3'>
              <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                  <p className='text-gray-400 text-sm'>2</p>
                  <p className='text-gray-400 text-sm'>days</p>
                  </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-[#ffc107] -mt-4' width="54" height="54" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                  </svg>
                  
                </div>
                <p className='text-sm'>Est sit eum reiciendis exercitationem</p>
              </div>
            </div>

            <div className='px-3 pb-4'>
              <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                  <p className='text-gray-400 text-sm'>4</p>
                  <p className='text-gray-400 text-sm'>weeks</p>
                  </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className='text-[#54585f] -mt-4 -ml-2' width="54" height="54" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                  </svg>
                  
                </div>
                <p className='text-sm'>Dicta dolorem harum nulla eius. Ut quidem quidem sit quas</p>
              </div>
            </div>
          </div>
        </div>
        

        
        
        

        
        
      </div> */}
    </div>
  );
}
