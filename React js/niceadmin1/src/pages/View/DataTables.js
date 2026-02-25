import React from "react";

export default function DataTables() {
  return (
    <div className="p-2 mt-14">
      <div>
        <h1 className="text-[#012970] text-2xl dark:text-sky-400">
          Data Tables
        </h1>
      </div>
      <div className="flex space-x-2 text-sm">
        <p className="text-[#889abc] font-semibold dark:text-purple-400">
          Home
        </p>
        <p className="text-[#889abc] font-semibold dark:text-purple-400">/</p>
        <p className="text-[#889abc] font-semibold dark:text-purple-400">
          Tabels
        </p>
        <p className="text-[#889abc] font-semibold dark:text-purple-400">/</p>
        <p className="text-[#51679d] font-semibold dark:text-purple-600">
          Data
        </p>
      </div>

      <form className="max-w-72 sm:max-w-full mx-auto bg-white rounded-md p-5 mt-3 dark:bg-gray-700">
        <div className="">
          <h1 className="text-[#012970] font-semibold tracking-wide dark:text-teal-300">
            Datatables
          </h1>
        </div>
        <div className="mt-4">
          <p className="tracking-wide dark:text-gray-200">
            Add lightweight datatables to your project with using the{" "}
            <span className="text-[#4154f1]">Simple DataTables</span> library.
            Just add <span className="text-[#d633a4] text-sm">.datatable</span>{" "}
            class name to any table you wish to conver to a datatable. Check for{" "}
            <span className="text-[#4154f1]">more examples.</span>
          </p>
        </div>
        <div className="px-2 py-6 grid grid-cols-1 sm:grid-cols-2 gap-y-3">
          <div className="flex space-x-2 items-center">
            <select
              name="select"
              className="px-1 py-2 border-2 border-black dark:text-gray-700"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="All">All</option>
            </select>
            <p className="dark:text-gray-700">entries per page</p>
          </div>
          <div className="text-right">
            <input
              type="text"
              placeholder="Search"
              class="flex-grow   focus:border-black text-gray-600 border-2 border-black px-2 py-2"
            />
          </div>
        </div>
        <div className="overflow-x-scroll">
          <table className="table-auto w-full text-left border-collapse mt-4">
            <thead className="text-black ">
              <tr>
                {/* <div className='flex justify-between'>
                                <th className="px-4 py-2  border-gray-300">Name</th>
                                <div className='space-y-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" className='text-[#cccccc]' fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" className='text-[#cccccc]' fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                </div>
                            </div> */}
                <th className="px-4 py-2  border-gray-300 dark:text-orange-300">
                  <div className="flex justify-between items-center">
                    Name
                    <div className="space-y-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2  border-gray-300 dark:text-orange-300">
                  <div className="flex justify-between items-center gap-x-4">
                    Ext.
                    <div className="space-y-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2  border-gray-300 dark:text-orange-300">
                  <div className="flex justify-between items-center">
                    City
                    <div className="space-y-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2  border-gray-300 dark:text-orange-300">
                  <div className="flex justify-between items-center">
                    Start Date
                    <div className="space-y-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2  border-gray-300 dark:text-orange-300">
                  <div className="flex justify-between items-center gap-x-4 ">
                    Completion
                    <div className="space-y-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className="text-[#cccccc] hover:text-[#9e9e9e] dark:text-sky-600 dark:hover:text-sky-800"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Unity Pugh
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  9958
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Curicó
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2005/02/11
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  37%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Theodore Duran4
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  8971
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Dhanbad
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  1999/04/07
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  97%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Kylie Bishop
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  3147
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Norman
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2005/09/08
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  63%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Willow Gilliam
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  3497
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Amqui
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2009/29/11
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  30%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Blossom Dickerson
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  5018
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Kempten
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2006/11/09
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  17%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Elliott Snyder
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  3925
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Enines
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2006/03/08
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  57%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Castor Pugh
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  9488
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Neath
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2014/23/12
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  93%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Pearl Carlson
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  6231
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Cobourg
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2014/31/08
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  100%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Deirdre Bridges
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  1579
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Eberswalde-Finow
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2014/26/08
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  44%
                </td>
              </tr>
              <tr className="dark:text-lime-300">
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Daniel Baldwin
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  6095
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  Moircy
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  2000/11/01
                </td>
                <td className="px-4 py-2 border-y border-gray-300 dark:border-lime-600 space-x-2 ">
                  33%
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="mt-4 text-black dark:border-red-700" />
          <div className="mt-2 p-2 grid grid-cols-1 md:grid-cols-2 space-y-2 dark:text-cyan-400">
            <div>
              <p className="tracking-wide mt-3">
                Showing 1 to 10 of 100 entries
              </p>
            </div>
            <div className="flex space-x-2 justify-end items-center">
              <p className="px-3 py-1 bg-[#d9d9d9] dark:bg-sky-950">1</p>
              <p className="px-3 py-1 hover:bg-[#d9d9d9] dark:hover:bg-sky-950">
                2
              </p>
              <p className="px-3 py-1 hover:bg-[#d9d9d9] dark:hover:bg-sky-950">
                3
              </p>
              <p className="px-3 py-1 hover:bg-[#d9d9d9] dark:hover:bg-sky-950">
                4
              </p>
              <p className="px-3 py-1 hover:bg-[#d9d9d9] dark:hover:bg-sky-950">
                5
              </p>
              <p className="px-3 py-1 hover:bg-[#d9d9d9] dark:hover:bg-sky-950">
                6
              </p>
              <p className="px-3 py-1 hover:bg-[#d9d9d9] dark:hover:bg-sky-950">
                7
              </p>
              <p className="px-3">...</p>
              <p className="px-3 py-1 hover:bg-[#d9d9d9]">10</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="10"
                  height="10"
                  className=""
                >
                  <path d="M285.5 272.5L91.5 466.5c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 46.2 91.5c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l194 194c12.5 12.5 12.5 32.8 0 45.3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
