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
  const [entry_date, setEntdate] = useState(""); // This is the date state

  const [formFields, setFormFields] = useState([{ p_name: "", p_detail: "", no_of_person: "" }]);

  // Set the current date when the component mounts
  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0]; // Format date to YYYY-MM-DD
    setEntdate(currentDate); // Auto-fill entry_date
  }, []);

  // Fetch data for `pro` if available
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
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };
      getData();
    }
  }, [pro]);

  const addField = () => {
    setFormFields([...formFields, { p_name: "", p_detail: "", no_of_person: "" }]);
  };

  const removeField = (index) => {
    const fields = formFields.slice();
    fields.splice(index, 1);
    setFormFields(fields);
  };

  const handleInputChange = (index, field, value) => {
    const fields = [...formFields];
    fields[index][field] = value;
    setFormFields(fields);
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
      let res;
      if (pro) {
        res = await api.put("/user", postfield, {
          headers: await headersApplication(),
        });
        if (res?.status === 200) {
          alert(res?.data?.data);
          router.push("/View/Product");
        }
      } else {
        res = await api.post("/user", postfield, {
          headers: await headersApplication(),
        });
        if (res?.status === 200) {
          alert(res?.data?.data);
          router.push("/View/Product");
        }
      }
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
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Email</h1>
              <input
                value={u_email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 gap-y-4">
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Mobile</h1>
              <input
                value={u_mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></input>
            </div>
            <div>
              <h1 className="text-sm md:text-base dark:text-lime-300">Entry Date</h1>
              <input
                value={entry_date}
                type="date"
                onChange={(e) => setEntdate(e.target.value)} // Allows manual date entry
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
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
