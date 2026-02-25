import React, { useEffect } from "react";
import $ from "jquery"; // Make sure to import jQuery if you're using it
import "select2";
import "select2/dist/css/select2.min.css";
import he from "he";

const DepartmentNameData = ({ formik, departmentData,showAll }) => {
  useEffect(() => {
    $("#department_id").select2({
      width: "100%",
    });
    $("#department_id").on("select2:select", function (e) {
      // Reset product_id when category changes
      formik.setValues({
        ...formik.values,
        department_id: e.target.value,
      });
    });
  }, [departmentData, formik]);

  return (
    <div className="relative w-full mb-3">
    
      <select
        name="department_id"
        id="department_id"
        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        value={formik?.values?.department_id}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      >
        <option value="">{showAll ? `All Departments`:`Please Select Department`} </option>
        {departmentData?.length > 0 ? (
          departmentData?.map((item, key) => (
            <option value={item?.department_id} key={key}>
              {he.decode(item?.department_name || "")}
            </option>
          ))
        ) : (
          <option disabled>Departments are not available</option>
        )}
      </select>
      {formik?.errors?.department_id && formik?.touched?.department_id && (
        <div className="text-red-500 text-sm">
          {formik?.errors?.department_id}
        </div>
      )}
    </div>
  );
};

export default DepartmentNameData;