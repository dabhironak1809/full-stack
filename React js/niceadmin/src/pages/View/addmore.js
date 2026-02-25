import React, { useState, useEffect } from "react";
import api from "@/utilliy/api";
import { headersApplication } from "@/utilliy/headers";
import { useRouter } from "next/router";

export default function AddMore() {
  const router = useRouter();
  const { pro } = router.query;
  const [u_name, setName] = useState("");
  const [u_email, setEmail] = useState("");
  const [u_mobile, setMobile] = useState("");
  const [entry_date, setEntdate] = useState("");

  const [formFields, setFormFields] = useState([{ p_name: "", p_detail: "", no_of_person: "" }]);
  // const formattedDate = entry_date ? new Date(entry_date).toISOString().split("T")[0] : '';

  // Set the current date when the component mounts
  if (pro) {
  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0]; // Format date to YYYY-MM-DD
    setEntdate(currentDate); // Auto-fill entry_date
  }, []);
}

  console.log("date",entry_date)

  // useEffect(() => {
  //     getProfile();
  //   }, []);

  //   const getProfile = async () => {
  //           try {
  //             const res = await api.get(`/user`, {
  //               headers: await headersApplication(),
  //             });
  //             setName(res?.data?.data?.[0]?.u_name || "");
  //             setEmail(res?.data?.data?.[0]?.u_email || "");
  //             setMobile(res?.data?.data?.[0]?.u_mobile || "");
  //             setEntdate(res?.data?.data?.[0]?.entry_date || "");
  //             setFormFields(res?.data?.data?.project || []);
    
  //             console.log("data", res?.data?.data);
  //           } catch (error) {
  //             console.error("Error fetching profile data:", error);
  //           }
  //         };
          
  
  useEffect(() => {
    if (pro) {
      const getData = async () => {
        try {
          const res = await api.get("/user/", {
            headers: await headersApplication(),
          });
          setName(res?.data?.data?.[0]?.u_name || "");
          setEmail(res?.data?.data?.[0]?.u_email || "");
          setMobile(res?.data?.data?.[0]?.u_mobile || "");
          setEntdate(res?.data?.data?.[0]?.entry_date || "");
          setFormFields(res?.data?.data?.project || []);

          console.log("data", res?.data?.data);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };
      getData();
    }
  }, [pro]);
        

  // const [formFields, setFormFields] = useState([
  //   { p_name: "", p_detail: "", no_of_person: "" },
  // ]);
  // state array holds the form field objects
  // pdf lip

  const addField = () => {
    setFormFields([
      ...formFields,
      { p_name: "", p_detail: "", no_of_person: "" },
    ]);
  };
  // adds a new form field object to the formFields array.

  const removeField = (index) => {
    const fields = formFields.slice(); // Creates a one copy of the formFields array
    fields.splice(index, 1); // pass index parameter, Removes the item at the specified index
    setFormFields(fields); // Updates the state with the modified array
  };

  // index represents the position or order of an item within a collection or list.
  // field represents the name or key of a specific data element or form input.
  // value represents the data or content stored in a field or element.
  const handleInputChange = (index, field, value) => {
    // console.log(index, value, field);
    const fields = [...formFields]; // Copies formFields to avoid direct mutation
    fields[index][field] = value; // Updates the specific field in the form object
    setFormFields(fields); // Updates the state with the modified fields
  };

  const btnsubmit = async (e) => {
    e.preventDefault();
    try {
      const postfield = {
        u_name,
        u_email,
        u_mobile,
        entry_date,
        project: formFields,
      };
      // console.log("data is a ", postfield);
      // const res = await api.post("/user", postfield, {
      //           headers: await headersApplication(),
      //         });
      let res;
      if (pro) {
        console.log("if condition",pro)
        res = await api.put("/user", postfield, {
          headers: await headersApplication(),
        });
        if (res?.status === 200) {
          alert(res?.data?.data );
          router.push("/View/Product")
        };
      } else {
        res = await api.post("/user", postfield, {
          headers: await headersApplication(),
        });
        if (res?.status === 200) {
          alert(res?.data?.data);
          router.push("/View/Product")
        };
      }

      // if (res?.status === 200) {
      //   alert(res?.data?.data || "Data submitted successfully!");
      //   // router.push("/View/Product")
      // }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Please try again.");
    }
  };

  return (
    <div className="mt-20">
      <form className="bg-white p-4 max-w-full mx-auto dark:bg-gray-700 rounded-md">
        <div className="pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Name</h1>
              <input
                value={u_name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
              <input
                value={u_email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">
                Mobile
              </h1>
              <input
                value={u_mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">
                Entry Date
              </h1>
              <input
                value={entry_date}
                type="date"
                // pattern="\d{4}-\d{2}-\d{2}"
                onChange={(e) => setEntdate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {/* <input
                value={formattedDate}
                type="date"
                onChange={(e) => setEntdate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              /> */}

            </div>
          </div>
        </div>
        <div>
          {formFields.map((field, index) => (
            <div key={index} className="pt-4 space-y-4">
              <hr />
              <div className="flex justify-between">
                <h1>{index + 1}</h1>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeField(index)}
                    className="px-2 py-1 bg-red-300 rounded dark:text-black"
                  >
                    Delete
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
                <div>
                  <h1 className="text-sm md:text-base dark:text-lime-300">
                    Product Name
                  </h1>
                  <input
                    value={field.p_name}
                    onChange={(e) =>
                      handleInputChange(index, "p_name", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <h1 className="text-sm md:text-base dark:text-lime-300">
                    Product Detail
                  </h1>
                  <textarea
                    value={field.p_detail}
                    onChange={(e) =>
                      handleInputChange(index, "p_detail", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    rows="1" // Adjust the number of rows based on your design
                  />
                </div>

                <div>
                  <h1 className="text-sm md:text-base dark:text-lime-300">
                    No. Sales Person
                  </h1>
                  <input
                    value={field.no_of_person}
                    onChange={(e) =>
                      handleInputChange(index, "no_of_person", e.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                {/* <div>
                  <h1 className='text-sm md:text-base dark:text-lime-300'>Entry Date</h1>
                  <input
                    type='date'
                    value={field.entry_date}
                    onChange={(e) => handleInputChange(index, 'entry_date', e.target.value)}
                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />
                </div> */}
              </div>
              <hr />
            </div>
          ))}
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={addField}
              className="px-2 py-1 bg-cyan-300 rounded dark:text-black"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={btnsubmit}
            className="px-2 py-1 bg-cyan-300 rounded dark:text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
