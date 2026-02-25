// const getStates = async (id) => {
//     try {
//         const res = await axios.get(`http://localhost:2004/nodejs/manage_state/${id}`);
//         const data = res?.data?.data;
//         if (Array.isArray(data)) {
//             setStates(data);
//         } else {
//             setStates([]); // Reset to empty array if response is not an array
//             console.error("States response is not an array:", data);
//         }
//     } catch (error) {
//         console.error(error);
//         setStates([]); // Reset to empty array in case of error
//     }
// };

// import React,{useEffect,useState} from 'react'
// import axios from 'axios'

// export default function Custom_book() {

//     const [countries,setCountries] = useState([])
//     const [states,setStates] = useState([])
//     const [cities,setCities] = useState([])
//     const [hotel,setHotel] = useState([])

//     useEffect(()=>{
//         getCountries()
//     },[])
//     const getCountries = async() =>{
//         try {
//             const res= await axios.get("http://localhost:2004/nodejs/manage_country/")
//             setCountries(res?.data?.data)
//             console.log(res?.data?.data)
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     const getStates = async(id) =>{
//         try {
//             const res= await axios.get("http://localhost:2004/nodejs/manage_state/"+id)
//             setStates(res?.data?.data)
//             console.log(res?.data?.data)
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const getCities = async(id) =>{
//         try {
//             const res= await axios.get("http://localhost:2004/nodejs/manage_cities/"+id)
//             setCities(res?.data?.data)
//             console.log(res?.data?.data)
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const getHotel = async(id) =>{
//         try {
//             const res= await axios.get("http://localhost:2004/nodejs/manage_hotel/"+id)
//             setHotel(res?.data?.data)
//             console.log(res?.data?.data)
//         } catch (error) {
//             console.log(error);
//         }
//     };

//   return (
//     <div className='mt-20'>
//         <div className='box-border h-20 bg-white rounded-full'>
//             <div className='flex items-center justify-center pt-5'>
//                 <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 mr-4'></div>
//                 <h1 className='md:text-3xl sm:text-2xl text-xl font-bold text-red-700'>Custom Bookings Form</h1>
//                 <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 ml-4'></div>
//             </div>
//         </div>
//         <form class="max-w-7xl mx-auto bg-slate-200 p-4 mt-4" >
//         <div class="mb-5 flex space-x-6">
//           <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
//             Select Your Destination
//           </label>
//           <div className="col-4 ">
//                 <select name="cars" id="cars" onChange={(e)=>getStates(e.target.value)} className=' rounded-md px-4 py-2'>
//                     <option value="0">Select Country</option>
//                     {countries?.map(obj=>
//                          <option value={obj.cou_id}>{obj.cou_name}</option>
//                     )}

//                 </select>
//             </div>
//             <div className="col-4">
//             <select name="cars" id="cars" onChange={(e)=>getCities(e.target.value)} className='px-4 py-2'>
//                     <option value="0">Select State</option>
//                     {states?.map(obj=>
//                          <option value={obj.stat_id}>{obj.stat_name}</option>
//                     )}

//                 </select>
//             </div>
//             <div className="col-4">
//                 <select name="cars" id="cars" onChange={(e)=>getHotel(e.target.value)} className='px-4 py-2'>
//                     <option value="0">Select City</option>
//                     {cities?.map(obj=>
//                          <option value={obj.citi_id}>{obj.citie_name}</option>
//                     )}

//                 </select>
//             </div>

//         </div>
//         </form>
//     </div>
//   )
// }

{
  /* <div className="col-4">
    <select name="cars" id="cars"  className='px-4 py-2'>
        <option value="0">Select Hotel</option> 
        {hotel?.map(obj=>
             <option value={obj.hotel_id}>{obj.hotal_name}</option> 
        )}
               
    </select>
</div> */
}
{
  /* <select name="states" id="states" onChange={(e) => getCities(e.target.value)} className="px-4 py-2">
    <option value="0">Select State</option>
    {(states) &&
        states.map((obj) => <option value={obj.stat_id}>{obj.stat_name}</option>)}
</select> */
}

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Select from 'react-select';  // Import Select from react-select

// export default function Custom_book() {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [hotel, setHotel] = useState([]);
//   const [selectedHotels, setSelectedHotels] = useState([]);

//   useEffect(() => {
//     getCountries();
//     getHotel();
//   }, []);

//   const getCountries = async () => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_country/");
//       setCountries(res?.data?.data?.map(country => ({ label: country.cou_name, value: country.cou_id })));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getStates = async (id) => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_state/" + id);
//       setStates(res?.data?.data?.map(state => ({ label: state.stat_name, value: state.stat_id })));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getCities = async (id) => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_cities/" + id);
//       setCities(res?.data?.data?.map(city => ({ label: city.citie_name, value: city.citi_id })));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getHotel = async () => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_hotel/");
//       setHotel(res?.data?.data?.map(hotels => ({ label: hotels.hotal_name, value: hotels.hotel_id })));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className='mt-20'>
//       <div className='box-border h-20 bg-white rounded-full'>
//         <div className='flex items-center justify-center pt-5'>
//           <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 mr-4'></div>
//           <h1 className='md:text-3xl sm:text-2xl text-xl font-bold text-red-700'>Custom Bookings Form</h1>
//           <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 ml-4'></div>
//         </div>
//       </div>
//       <form className="max-w-7xl mx-auto bg-slate-200 p-4 mt-4">
//         <div className="mb-5 flex space-x-6">
//           <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
//             Select Your Destination
//           </label>
//           <div className="col-4">
//             <Select
//               options={countries}
//               onChange={(selected) => getStates(selected.value)}
//               placeholder="Select Country"
//             />
//           </div>
//           <div className="col-4">
//             <Select
//               options={states}
//               onChange={(selected) => getCities(selected.value)}
//               placeholder="Select State"
//             />
//           </div>
//           <div className="col-4">
//             <Select
//               options={cities}
//               placeholder="Select City"
//             />
//           </div>
//         </div>
//         <div className="col-4">
//           <Select
//             options={hotel}
//             isMulti  // Enable multiple select
//             onChange={(selected) => setSelectedHotels(selected)}
//             placeholder="Select Hotel(s)"
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Select from "react-select"; // Import Select from react-select

// export default function Custom_book() {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [hotel, setHotel] = useState([]);
//   const [selectedHotels, setSelectedHotels] = useState([]);

//   useEffect(() => {
//     getCountries();
//     getHotel();
//   }, []);

//   const getCountries = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:2004/nodejs/manage_country/"
//       );
//       setCountries(
//         res?.data?.data?.map((country) => ({
//           label: country.cou_name,
//           value: country.cou_id,
//         }))
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getStates = async (id) => {
//     try {
//       const res = await axios.get(
//         "http://localhost:2004/nodejs/manage_state/" + id
//       );
//       setStates(
//         res?.data?.data?.map((state) => ({
//           label: state.stat_name,
//           value: state.stat_id,
//         }))
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getCities = async (id) => {
//     try {
//       const res = await axios.get(
//         "http://localhost:2004/nodejs/manage_cities/" + id
//       );
//       setCities(
//         res?.data?.data?.map((city) => ({
//           label: city.citie_name,
//           value: city.citi_id,
//         }))
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getHotel = async () => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_hotel/");
//       setHotel(
//         res?.data?.data?.map((hotels) => ({
//           label: hotels.hotal_name,
//           value: hotels.hotel_id,
//         }))
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="mt-20">
//       <div className="box-border h-20 bg-white rounded-full">
//         <div className="flex items-center justify-center pt-5">
//           <div className="md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 mr-4"></div>
//           <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-red-700">
//             Custom Bookings Form
//           </h1>
//           <div className="md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 ml-4"></div>
//         </div>
//       </div>
//       <form className="max-w-7xl mx-auto bg-slate-200 p-4 mt-4">
//         <div className="mb-5 flex space-x-6">
//           <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
//             Select Your Destination
//           </label>
//           <div className="col-4">
//             {/* <Select className="w-48"
//               options={countries}
//               onChange={(selected) => getStates(selected.value)}
//               placeholder="Select Country"
//             /> */}
//             <Select
//               className="w-48"
//               options={countries}
//               onChange={(selected) => {
//                 setStates([]); // Clear previous states
//                 setCities([]); // Clear previous cities
//                 getStates(selected.value); // Load states for the newly selected country
//               }}
//               placeholder="Select Country"
//             />
//           </div>
//           <div className="col-4">
//             {/* <Select className="w-52"
//               options={states}
//               onChange={(selected) => getCities(selected.value)}
//               placeholder="Select State"
//             /> */}
//             <Select
//               className="w-52"
//               options={states}
//               onChange={(selected) => {
//                 setCities([]); // Clear previous cities
//                 getCities(selected.value); // Load cities for the newly selected state
//               }}
//               placeholder="Select State"
//             />
//           </div>
//           <div className="col-4">
//             {/* <Select className="w-48" options={cities} placeholder="Select City" /> */}
//             <Select
//               className="w-48"
//               options={cities}
//               placeholder="Select City"
//             />
//           </div>
//         </div>
//         <div className="col-4">
//           <Select
//             options={hotel}
//             isMulti // Enable multiple select
//             isSearchable={hotel.length > 1} // Limit search box to large result sets
//             onChange={(selected) => setSelectedHotels(selected)}
//             placeholder="Select Hotel(s)"
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Select from "react-select";

// export default function Custom_book() {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [hotel, setHotel] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [selectedHotels, setSelectedHotels] = useState([]);

//   useEffect(() => {
//     getCountries();
//     getHotel();
//   }, []);

//   const getCountries = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:2004/nodejs/manage_country/"
//       );
//       setCountries(
//         res?.data?.data?.map((country) => ({
//           label: country.cou_name,
//           value: country.cou_id,
//         }))
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getStates = async (id) => {
//     try {
//       const res = await axios.get(
//         "http://localhost:2004/nodejs/manage_state/" + id
//       );
//       setStates(
//         res?.data?.data?.map((state) => ({
//           label: state.stat_name,
//           value: state.stat_id,
//         }))
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getCities = async (id) => {
//     try {
//       const res = await axios.get(
//         "http://localhost:2004/nodejs/manage_cities/" + id
//       );
//       setCities(
//         res?.data?.data?.map((city) => ({
//           label: city.citie_name,
//           value: city.citi_id,
//         }))
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getHotel = async () => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_hotel/");
//       setHotel(
//         res?.data?.data?.map((hotels) => ({
//           label: hotels.hotal_name,
//           value: hotels.hotel_id,
//         }))
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCountryChange = (selected) => {
//     setSelectedCountry(selected); // Set selected country
//     setSelectedState(null); // Reset selected state
//     setSelectedCity(null); // Reset selected city
//     setStates([]); // Clear state options
//     setCities([]); // Clear city options

//     if (selected) {
//       getStates(selected.value); // Fetch states for the selected country
//     }
//   };

//   const handleStateChange = (selected) => {
//     setSelectedState(selected); // Set selected state
//     setSelectedCity(null); // Reset selected city
//     setCities([]); // Clear city options

//     if (selected) {
//       getCities(selected.value); // Fetch cities for the selected state
//     }
//   };

//   return (
//     <div className="mt-20">
//       <div className="box-border h-20 bg-white rounded-full">
//         <div className="flex items-center justify-center pt-5">
//           <div className="md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 mr-4"></div>
//           <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-red-700">
//             Custom Bookings Form
//           </h1>
//           <div className="md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 ml-4"></div>
//         </div>
//       </div>
//       <form className="max-w-7xl mx-auto bg-slate-200 p-4 mt-4">
//         <div className="mb-5 flex space-x-6">
//           <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
//             Select Your Destination
//           </label>
//           <div className="col-4">
//             <Select
//               className="w-48"
//               options={countries}
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               placeholder="Select Country"
//             />
//           </div>
//           <div className="col-4">
//             <Select
//               className="w-52"
//               options={states}
//               value={selectedState}
//               onChange={handleStateChange}
//               placeholder="Select State"
//             />
//           </div>
//           <div className="col-4">
//             <Select
//               className="w-48"
//               options={cities}
//               value={selectedCity}
//               onChange={(selected) => setSelectedCity(selected)}
//               placeholder="Select City"
//             />
//           </div>
//         </div>
//         <div className="col-4">
//           <Select
//             options={hotel}
//             isMulti // Enable multiple select
//             isSearchable={hotel.length > 1} // Limit search box to large result sets
//             onChange={(selected) => setSelectedHotels(selected)}
//             placeholder="Select Hotel(s)"
//           />
//         </div>
//       </form>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import $ from "jquery";
// import "select2/dist/css/select2.min.css";
// import "select2";

// export default function CustomBook() {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [hotel, setHotel] = useState([]);

//   useEffect(() => {
//     getCountries();
//     getHotel();
//     initializeSelect2();
//   }, []);

//   useEffect(() => {
//     initializeSelect2();
//   }, [countries, states, cities, hotel]);

//   const initializeSelect2 = () => {
//     $(".js-select-country").select2({
//       placeholder: "Select Country",
//       allowClear: true,
//     }).on("change", function () {
//       const countryId = $(this).val();
//       handleCountryChange(countryId);
//     });

//     $(".js-select-state").select2({
//       placeholder: "Select State",
//       allowClear: true,
//     }).on("change", function () {
//       const stateId = $(this).val();
//       handleStateChange(stateId);
//     });

//     $(".js-select-city").select2({
//       placeholder: "Select City",
//       allowClear: true,
//     });

//     $(".js-select-hotel").select2({
//       placeholder: "Select Hotel(s)",
//       allowClear: true,
//     });
//   };

//   const getCountries = async () => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_country/");
//       setCountries(res.data.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getStates = async (id) => {
//     try {
//       setStates([]); // Clear states before fetching new ones
//       const res = await axios.get("http://localhost:2004/nodejs/manage_state/" + id);
//       setStates(res.data.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getCities = async (id) => {
//     try {
//       setCities([]); // Clear cities before fetching new ones
//       const res = await axios.get("http://localhost:2004/nodejs/manage_cities/" + id);
//       setCities(res.data.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getHotel = async () => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_hotel/");
//       setHotel(res.data.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCountryChange = (id) => {
//     if (id) {
//       getStates(id);
//     } else {
//       setStates([]);
//       setCities([]);
//     }
//   };

//   const handleStateChange = (id) => {
//     if (id) {
//       getCities(id);
//     } else {
//       setCities([]);
//     }
//   };

//   return (
//     <div className="mt-20">
//       <form className="max-w-7xl mx-auto bg-slate-200 p-4 mt-4">
//         <div className="mb-5 flex space-x-6">
//           <label className="block mb-2 text-lg font-medium text-gray-900">
//             Select Your Destination
//           </label>
//           <div className="col-4">
//             <select className="js-select-country w-48 form-control">
//               <option value="">Select Country</option>
//               {countries.map((country) => (
//                 <option key={country.cou_id} value={country.cou_id}>
//                   {country.cou_name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-4">
//             <select className="js-select-state w-52 form-control">
//               <option value="">Select State</option>
//               {states.map((state) => (
//                 <option key={state.stat_id} value={state.stat_id}>
//                   {state.stat_name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="col-4">
//             <select className="js-select-city w-48 form-control">
//               <option value="">Select City</option>
//               {cities.map((city) => (
//                 <option key={city.citi_id} value={city.citi_id}>
//                   {city.citie_name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <div className="col-4">
//           <select className="js-select-hotel w-full form-control" multiple>
//             {hotel.map((hotels) => (
//               <option key={hotels.hotel_id} value={hotels.hotel_id}>
//                 {hotels.hotal_name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import "select2/dist/css/select2.min.css";
import "select2";

export default function CustomBook() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    getCountries();
    getHotel();
    initializeSelect2();
  }, []);

  useEffect(() => {
    initializeSelect2();
  }, [countries, states, cities, hotel]);

  const initializeSelect2 = () => {
    $(".js-select-country").select2({
      
      placeholder: "Select Country",
      allowClear: true,
    }).on("change", function () {
      const countryId = $(this).val();
      handleCountryChange(countryId);
    });

    $(".js-select-state").select2({
      placeholder: "Select State",
      allowClear: true,
    }).on("change", function () {
      const stateId = $(this).val();
      handleStateChange(stateId);
    });

    $(".js-select-city").select2({
      placeholder: "Select City",
      allowClear: true,
    });

    $(".js-select-hotel").select2({
      placeholder: "Select Hotel(s)",
      allowClear: true,
    });
  };

  const getCountries = async () => {
    try {
      const res = await axios.get("http://localhost:2004/nodejs/manage_country/");
      setCountries(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const getStates = async (id) => {
    try {
      setStates([]); 
      const res = await axios.get("http://localhost:2004/nodejs/manage_state/" + id);
      setStates(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const getCities = async (id) => {
    try {
      setCities([]); 
      const res = await axios.get("http://localhost:2004/nodejs/manage_cities/" + id);
      setCities(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const getHotel = async (id) => {
    try {
      const res = await axios.get("http://localhost:2004/nodejs/manage_hotel/" + id);
      setHotel(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleCountryChange = (id) => {
  //   if (id) {
  //     setCities([]); 
  //     getStates(id); 
  //   } else {
  //     setStates([]); 
  //     setCities([]); 
  //   }
  // };

  // const handleStateChange = (id) => {
  //   if (id) {
  //     getCities(id); 
  //   } else {
  //     setCities([]); 
  //   }
  // };

  const handleCountryChange = (id) => {
    if (id) {
      setStates([]);
      setCities([]);
      setHotel([]); // Reset hotel selection
      getStates(id);
    } else {
      setStates([]);
      setCities([]);
      setHotel([]); // Reset hotel selection when no country is selected
    }
  };

  const handleStateChange = (id) => {
    if (id) {
      setCities([]);
      setHotel([]); // Reset hotel selection
      getCities(id);
    } else {
      setCities([]);
      setHotel([]); // Reset hotel selection when no state is selected
    }
  };
  
  

  return (
    <div className="mt-20">
      <div className='box-border h-20 bg-white rounded-full'>
            <div className='flex items-center justify-center pt-5'>
                <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 mr-4'></div>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold text-red-700'>Custom Bookings Form</h1>
                <div className='md:w-20 sm:w-14 w-9 sm:h-1 h-0.5 bg-sky-600 ml-4'></div>
            </div>
        </div>
      <form className="max-w-7xl mx-auto bg-slate-200 p-4 mt-4">
        <div className="mb-5 flex space-x-6">
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Select Your Destination
          </label>
          <div className="col-4">
            <select className="js-select-country w-48 form-control">
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.cou_id} value={country.cou_id}>
                  {country.cou_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <select className="js-select-state w-52 form-control">
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.stat_id} value={state.stat_id}>
                  {state.stat_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <select className="js-select-city w-48 form-control">
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.citi_id} value={city.citi_id}>
                  {city.citie_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-4">
          {/* <select className="js-select-hotel w-full form-control">
            {hotel.map((hotels) => (
              <option key={hotels.hotel_id} value={hotels.hotel_id}>
                {hotels.hotal_name}
              </option>
            ))}
          </select> */}
          <select className="js-select-hotel w-full form-control">
  <option value="">Select Hotel(s)</option>
  {hotel.map((hotels) => (
    <option key={hotels.hotel_id} value={hotels.hotel_id}>
      {hotels.hotal_name}
    </option>
  ))}
</select>

        </div>
      </form>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import $ from "jquery";
// import "select2/dist/css/select2.min.css";
// import "select2";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// export default function CustomBook() {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [hotel, setHotel] = useState([]);

//   useEffect(() => {
//     getCountries();
//     getHotel();
//     initializeSelect2();
//   }, []);

//   useEffect(() => {
//     initializeSelect2();
//   }, [countries, states, cities, hotel]);

//   const initializeSelect2 = () => {
//     $(".js-select-country").select2({
//       placeholder: "Select Country",
//       allowClear: true,
//     }).on("change", function () {
//       const countryId = $(this).val();
//       handleCountryChange(countryId);
//     });

//     $(".js-select-state").select2({
//       placeholder: "Select State",
//       allowClear: true,
//     }).on("change", function () {
//       const stateId = $(this).val();
//       handleStateChange(stateId);
//     });

//     $(".js-select-city").select2({
//       placeholder: "Select City",
//       allowClear: true,
//     });

//     $(".js-select-hotel").select2({
//       placeholder: "Select Hotel(s)",
//       allowClear: true,
//     });
//   };

//   const getCountries = async () => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_country/");
//       setCountries(res.data.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getStates = async (id) => {
//     try {
//       setStates([]);
//       const res = await axios.get(`http://localhost:2004/nodejs/manage_state/${id}`);
//       setStates(res.data.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getCities = async (id) => {
//     try {
//       setCities([]);
//       const res = await axios.get(`http://localhost:2004/nodejs/manage_cities/${id}`);
//       setCities(res.data.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getHotel = async () => {
//     try {
//       const res = await axios.get("http://localhost:2004/nodejs/manage_hotel/");
//       setHotel(res.data.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCountryChange = (id) => {
//     if (id) {
//       setCities([]);
//       getStates(id);
//     } else {
//       setStates([]);
//       setCities([]);
//     }
//   };

//   const handleStateChange = (id) => {
//     if (id) {
//       getCities(id);
//     } else {
//       setCities([]);
//     }
//   };

//   const validationSchema = Yup.object().shape({
//     country: Yup.string().required("Country is required"),
//     state: Yup.string().required("State is required"),
//     city: Yup.string().required("City is required"),
//     hotel: Yup.array().min(1, "At least one hotel must be selected")
//   });

//   return (
//     <div className="mt-20">
//       <Formik
//         initialValues={{ country: "", state: "", city: "", hotel: [] }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           console.log("Form Submitted:", values);
//         }}
//       >
//         {({ setFieldValue }) => (
//           <Form className="max-w-7xl mx-auto bg-slate-200 p-4 mt-4">
//             <div className="mb-5 flex space-x-6">
//               <label className="block mb-2 text-lg font-medium text-gray-900">
//                 Select Your Destination
//               </label>
//               <div className="col-4">
//                 <Field as="select" name="country" className="js-select-country w-48 form-control" onChange={(e) => setFieldValue("country", e.target.value)}>
//                   <option value="">Select Country</option>
//                   {countries.map((country) => (
//                     <option key={country.cou_id} value={country.cou_id}>
//                       {country.cou_name}
//                     </option>
//                   ))}
//                 </Field>
//                 <ErrorMessage name="country" component="div" className="text-red-500" />
//               </div>
//               <div className="col-4">
//                 <Field as="select" name="state" className="js-select-state w-52 form-control" onChange={(e) => setFieldValue("state", e.target.value)}>
//                   <option value="">Select State</option>
//                   {states.map((state) => (
//                     <option key={state.stat_id} value={state.stat_id}>
//                       {state.stat_name}
//                     </option>
//                   ))}
//                 </Field>
//                 <ErrorMessage name="state" component="div" className="text-red-500" />
//               </div>
//               <div className="col-4">
//                 <Field as="select" name="city" className="js-select-city w-48 form-control" onChange={(e) => setFieldValue("city", e.target.value)}>
//                   <option value="">Select City</option>
//                   {cities.map((city) => (
//                     <option key={city.citi_id} value={city.citi_id}>
//                       {city.citie_name}
//                     </option>
//                   ))}
//                 </Field>
//                 <ErrorMessage name="city" component="div" className="text-red-500" />
//               </div>
//             </div>
//             <div className="col-4">
//               <Field as="select" name="hotel" className="js-select-hotel w-full form-control" multiple onChange={(e) => setFieldValue("hotel", [...e.target.selectedOptions].map(o => o.value))}>
//                 {hotel.map((hotels) => (
//                   <option key={hotels.hotel_id} value={hotels.hotel_id}>
//                     {hotels.hotal_name}
//                   </option>
//                 ))}
//               </Field>
//               <ErrorMessage name="hotel" component="div" className="text-red-500" />
//             </div>
//             <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }


