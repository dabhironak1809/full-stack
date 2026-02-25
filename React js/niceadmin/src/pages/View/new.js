import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "select2";
import "select2/dist/css/select2.min.css";
import $ from "jquery";
// import AccessRights from "./accessRights";
// import AccessDenied from "./accessDenied";
// import { IoMdArrowBack } from "react-icons/io";
// import AcademicYearSelection from "./Components/AcademicYearSelection";
// import Program from "./Components/Program";
// import Semester from "./Components/Semester";
// import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import api from "../utills/api";
// import { headersApplication } from "../utills/headers";
import { useRouter } from "next/router";
// import { encrypt } from "@/utills/enc_dec_ids";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { MdOutlineAddCircleOutline } from "react-icons/md";

export default function AddAdmissionFeeSlot() {
  const router = useRouter();
  const { afs_id } = router.query;
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [admissionData, setAdmissionData] = useState([]);
  const [reScheduleData, setReScheduleData] = useState([]);

  /** Rights Variables */
  const [roleId, setRole] = useState("");
  const [accessRight, setAccessRight] = useState("");
  const [showAccessDenied, setShowAccessDenied] = useState(false);

  useEffect(() => {
    if ((afs_id && roleId == 1) || accessRight?.is_edited == 1) {
      getAdmissionFeeSlotData();
    }

    $("#student_id")
      .select2({ width: "100%", })
      .on("change", function (e) {
        formik.setFieldValue("student_id", e.target.value);
      });

    $("#schedule_id")
      .select2({ width: "100%", })
      .on("change", function (e) {
        formik.setFieldValue("schedule_id", e.target.value);
      });

    setRole(localStorage.getItem("role"));
  }, [afs_id, roleId, accessRight]);

  const formik = useFormik({
    initialValues: {
      program_id: "",
      schedule_for: 1,
      semester_id: "",
      year_id: "",
      student_id: "",
      schedule_id: "",
      admission_fees: "",
      re_schedule_session_id: "",
      fee_details: [
        {
          slot_fee_amount: "",
          from_date: new Date().toISOString().split("T")[0],
          to_date: (() => {
            const fromDate = new Date(); // Get today's date
            const nextMonthDate = new Date(fromDate.setMonth(fromDate.getMonth() + 1)); // Add one month
            return nextMonthDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
          })(),
          late_fee: 0,
        },
      ],
    },
    validationSchema: Yup.object({
      program_id: Yup.string().required("Program Name is required"),
      schedule_for: Yup.string().required("Schedule For is required"),
      semester_id: Yup.string().required("Semester Title is required"),
      year_id: Yup.string().required("Academic Year is required"),
      schedule_id: Yup.string().required("Admission Title is required"),
      re_schedule_session_id: Yup.string().required("Re Schedule Session is required"),
      admission_fees: Yup.string().required("Admission Fees is required"),
      student_id: Yup.string().required("Student is required"),
      fee_details: Yup.array().of(
        Yup.object().shape({
          slot_fee_amount: Yup.string().when('payment_paid_status', {
            is: (status) => status != 1, // Validate only if payment_paid_status is not 1
            then: (schema) => schema.required("Fees Amount is required"),
            otherwise: (schema) => schema.notRequired(),
          }),
          from_date: Yup.string().when('payment_paid_status', {
            is: (status) => status != 1,
            then: (schema) => schema.required("From Date is required"),
            otherwise: (schema) => schema.notRequired(),
          }),
          to_date: Yup.string()
            .when('payment_paid_status', {
              is: (status) => status != 1,
              then: (schema) =>
                schema
                  .required("To Date is required")
                  .test(
                    "is-greater",
                    "To Date must be greater than From Date",
                    function (value) {
                      const { from_date } = this.parent; // Access sibling field
                      return new Date(value) > new Date(from_date); // Ensure to_date is greater than from_date
                    }
                  ),
              otherwise: (schema) => schema.notRequired(),
            }),
          late_fee: Yup.string().when('payment_paid_status', {
            is: (status) => status != 1,
            then: (schema) => schema.required("Late Fee is required"),
            otherwise: (schema) => schema.notRequired(),
          }),
        })
      )

      // fee_details: Yup.array().of(
      //   Yup.object().shape({
      //     slot_fee_amount: Yup.string().required("Fees Amount is required"),
      //     from_date: Yup.string().required("From Date is required"),
      //     to_date: Yup.string()
      //       .required("To Date is required")
      //       .test(
      //         "is-greater",
      //         "To Date must be greater than From Date",
      //         function (value) {
      //           const { from_date } = this.parent; // Access sibling field
      //           return new Date(value) > new Date(from_date); // Ensure to_date is greater than from_date
      //         }
      //       ),
      //     late_fee: Yup.string().required("Late Fee is required"),
      //   })
      // ),
    }),
    onSubmit: async () => {
      const {
        program_id,
        schedule_for,
        semester_id,
        year_id,
        student_id,
        fee_details,
        admission_fees,
        schedule_id,
        re_schedule_session_id
      } = formik?.values;
      setLoading(true);
      let res = "";
      try {
        // Calculate the total of slot fees
        const totalFees = fee_details.reduce(
          (acc, curr) => acc + (parseFloat(curr.slot_fee_amount) || 0),
          0
        );

        // Check if the total fees matches the admission fees
        if (totalFees === parseFloat(admission_fees)) {
          if (!afs_id && !afs_id) {
            if (roleId == 1 || accessRight?.is_added == 1) {
              res = await api.post(
                `/admission_fee_slot_api/?Rights_menu_name=manage admission fee slot`,
                {
                  program_id,
                  schedule_for,
                  semester_id,
                  year_id,
                  student_id,
                  fee_details,
                  admission_fees,
                  schedule_id,
                  re_schedule_session_id
                },
                { headers: await headersApplication() }
              );
            } else {
              toast.error("🚫 Sorry you have no rights");
              setLoading(false);
            }
          } else {
            if (roleId == 1 || accessRight?.is_edited == 1) {
              // console.log("updated fee_details array with actions == > ", formik?.values?.fee_details)
              res = await api.put(
                `/admission_fee_slot_api/${afs_id}/?Rights_menu_name=manage admission fee slot`,
                {
                  program_id,
                  schedule_for,
                  semester_id,
                  year_id,
                  student_id,
                  fee_details,
                  admission_fees,
                  schedule_id,
                  re_schedule_session_id
                },
                { headers: await headersApplication() }
              );
              // setLoading(false);

            } else {
              toast.error("🚫 Sorry you have no rights");
              setLoading(false);
            }
          }
          if (res?.status === 200) {
            if (res?.data?.msg) {
              toast.error(res?.data?.msg);
              setLoading(false);
            } else {
              toast(res?.data?.data);
              setTimeout(() => {
                setLoading(false);
                router.push("/manageadmissionfeeslot");
              }, 3000);
            }
          }
        } else {
          toast.error("🚫 Total slot fees must equal the admission fees.");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
  });

  const getAdmissionFeeSlotData = async () => {
    try {
      const res = await api.get(`/admission_fee_slot_api/${afs_id}/?Rights_menu_name=manage admission fee slot`, {
        headers: await headersApplication()
      });
      if (res?.status === 200) {
        const mstData = res?.data?.data?.[0]?.[0];
        const trnData = res?.data?.data?.[1];
        formik?.setValues({
          ...formik?.values,
          program_id: mstData?.program_id,
          schedule_for: mstData?.schedule_for,
          year_id: mstData?.year_id,
          semester_id: mstData?.semester,
          student_id: mstData?.student_id,
          schedule_id: mstData?.admission_schedule_id,
          re_schedule_session_id: mstData?.re_schedule_session_id,
          admission_fees: mstData?.total_amount,
        });
        const fees_details_arr = [];
        trnData?.map((item) => {
          fees_details_arr.push({
            atfs_id: item?.admission_trn_fee_slot_id,
            slot_fee_amount: item?.slot_fee_amount,
            from_date: item?.from_date,
            to_date: item?.to_date,
            late_fee: item?.late_fee,
            payment_paid_status: item?.payment_paid_status
          })
        });
        formik?.setFieldValue("fee_details", fees_details_arr);
        setTimeout(() => {
          $("#year_id").trigger("change.select2");
        }, 1000);
      }
    } catch (error) {
      console.log("Error occured while fetching admission fee slot data == >", error)
    }
  }

  const fetchStudentData = async () => {
    try {
      const res = await api.get(
        `/admission_schedule_api/admissionSlotStudentData/?programId=${encrypt(
          formik?.values?.program_id
        )}&schedule_for=${encrypt(formik?.values?.schedule_for)}&yearId=${encrypt(
          formik?.values?.year_id
        )}&Rights_menu_name=manage admission fee slot`,
        { headers: await headersApplication() }
      );
      if (res?.status === 200) {
        setStudentData(res?.data?.data);
      }
    } catch (error) {
      console.log("Error while fetching reassessment session data = > ", error);
    }
  };

  const fetchAdmissionData = async () => {
    try {
      const { program_id, schedule_for, year_id, semester_id } = formik?.values;
      const res = await api.get(`/admission_schedule_api/programwiseSchedules/?yearId=${encrypt(year_id)}&programId=${encrypt(program_id)}&schedule_for=${encrypt(schedule_for)}&semesterId=${encrypt(semester_id)}&Rights_menu_name=manage admission fee slot`, {
        headers: await headersApplication()
      });
      if (res?.status === 200) {
        setAdmissionData(res?.data?.data);
      }
    } catch (error) {
      console.log("Error occured while fetching admission data == > ", error);
    }
  };

  const fetchAdmissionSchedule = async () => {
    try {
      const res = await api.get(
        `/admission_schedule_api/admissionReSchedule/?programId=${encrypt(formik?.values?.program_id)}&schedule_for=${encrypt(formik?.values?.schedule_for)}&schedule_id=${encrypt(formik?.values?.schedule_id)}&semesterId=${encrypt(formik?.values?.semester_id)}&yearId=${encrypt(formik?.values?.year_id)}&Rights_menu_name=manage admission schedule`,
        { headers: await headersApplication() }
      );
      if (res?.status === 200) {
        setReScheduleData(res?.data?.data);
      }
    } catch (error) {
      console.log("Error while fetching admission session data = > ", error);
    }
  };

  const fetchTotalAmounntForStudentSloat = async () => {
    try {
      const { program_id, schedule_for, year_id, semester_id, student_id, schedule_id, re_schedule_session_id } = formik?.values;
      const res = await api.get(`/admission_fee_slot_api/totalFeesAmountForSloats/?yearId=${encrypt(year_id)}&programId=${encrypt(program_id)}&schedule_for=${encrypt(schedule_for)}&semesterId=${encrypt(semester_id)}&studentId=${encrypt(student_id)}&scheduleId=${encrypt(schedule_id)}&re_schedule_session_id=${encrypt(re_schedule_session_id)}&Rights_menu_name=manage admission fee slot`, {
        headers: await headersApplication()
      });
      if (res?.status === 200) {
        formik?.setFieldValue("admission_fees", res?.data?.data?.total_fees_amount || 0);
      }
    } catch (error) {
      console.log("Error occured while fetching admission data == > ", error);
    }
  }

  useEffect(() => {
    if (formik?.values?.program_id !== "" && formik?.values?.year_id !== "" && formik?.values?.schedule_for) {
      fetchStudentData();
    } else {
      setStudentData([]);
    }
  }, [formik?.values?.program_id, formik?.values?.year_id, formik?.values?.schedule_for]);

  useEffect(() => {
    if (
      formik?.values?.program_id !== "" &&
      formik?.values?.year_id !== "" &&
      formik?.values?.semester_id !== "" &&
      formik?.values?.student_id !== "" &&
      formik?.values?.schedule_id !== "" &&
      formik?.values?.re_schedule_session_id
    ) {
      fetchTotalAmounntForStudentSloat();
    } else {
      formik?.setFieldValue("admission_fees", "");
    }

    if (
      formik?.values?.program_id != "" &&
      formik?.values?.schedule_for != "" &&
      formik?.values?.schedule_id != "" &&
      formik?.values?.semester_id != "" &&
      formik?.values?.academic_year != ""
    ) {

      fetchAdmissionSchedule();
    } else {
      setReScheduleData([]);
    }

  }, [
    formik?.values?.program_id,
    formik?.values?.year_id,
    formik?.values?.semester_id,
    formik?.values?.student_id,
    formik?.values?.schedule_id,
    formik?.values?.re_schedule_session_id
  ]);

  useEffect(() => {

    if (
      formik?.values?.program_id !== "" &&
      formik?.values?.schedule_for !== "" &&
      formik?.values?.year_id !== "" &&
      formik?.values?.semester_id !== ""
    ) {
      fetchAdmissionData();
    }

  }, [
    formik?.values?.program_id,
    formik?.values?.schedule_for,
    formik?.values?.year_id,
    formik?.values?.semester_id
  ]);

  const addForm = async () => {
    // Calculate the total fees entered so far from non-deleted records
    const totalEnteredFees = formik?.values?.fee_details?.reduce(
      (acc, curr) =>
        curr.action !== "deleted" ? acc + (parseFloat(curr.slot_fee_amount) || 0) : acc,
      0
    );

    // Ensure adding a new slot is possible only if the total is less than admission_fees
    if (totalEnteredFees < parseFloat(formik?.values?.admission_fees)) {
      formik.setFieldValue("fee_details", [
        ...formik?.values?.fee_details,
        {
          ...(afs_id && { atfs_id: null, action: "new added" }),
          slot_fee_amount: "",
          from_date: new Date().toISOString().split("T")[0],
          to_date: (() => {
            const fromDate = new Date(); // Get today's date
            const nextMonthDate = new Date(fromDate.setMonth(fromDate.getMonth() + 1)); // Add one month
            return nextMonthDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
          })(),
          late_fee: 0,
        },
      ]);
    } else {
      toast.error("You cannot add more slots as the total fees equals the admission fees.");
    }
  };

  const removeForm = (index) => {
    // Map over the full fee_details array and mark the matching record as deleted
    const updatedDetails = formik?.values?.fee_details?.map((record, i) => {
      if (displayedFeeDetails[index] === record) {
        // Mark as deleted in the full array
        return afs_id
          ? { ...record, action: "deleted", slot_fee_amount: 0 }
          : null; // Remove if no afs_id exists
      }
      return record;
    }).filter(Boolean); // Remove null entries for fully removed records

    formik.setFieldValue("fee_details", updatedDetails);
  };

  // Handle input changes while maintaining indices for visible records
  const handleChange = (index, e) => {
    const { name, value } = e.target;

    // Identify the corresponding index in the full fee_details array
    const fullIndex = formik?.values?.fee_details?.findIndex(
      (record) => record === displayedFeeDetails[index]
    );

    if (fullIndex !== -1) {
      // Create a copy of the full fee details and update the matching record
      const updatedRecords = formik?.values?.fee_details?.map((record, i) => {
        if (i === fullIndex) {
          return {
            ...record,
            [name]: value,
            ...(afs_id && { action: record?.atfs_id ? "updated" : "new added" }), // Mark as updated if afs_id exists
          };
        }
        return record;
      });

      // Calculate the new total fees from non-deleted records
      const totalEnteredFees = updatedRecords.reduce(
        (acc, curr) =>
          curr.action !== "deleted" ? acc + (parseFloat(curr.slot_fee_amount) || 0) : acc,
        0
      );

      // Ensure the total fees do not exceed the admission_fees
      if (totalEnteredFees <= parseFloat(formik?.values?.admission_fees)) {
        formik.setFieldValue("fee_details", updatedRecords);
      } else {
        alert(
          "The total fees cannot exceed the admission fees. Please adjust the entered values."
        );
      }
    }
  };

  // Filter out deleted records for display
  const displayedFeeDetails = formik?.values?.fee_details?.filter(
    (record) => record.action !== "deleted"
  );


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAccessDenied(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <ToastContainer autoClose={2000} />
      
        <div className="lg:ml-64 pt-20">
          <section className="container-fluid px-4 mx-auto overflow-hidden">
            <div className="flex justify-between items-center">
              <div className="flex flex-col md:flex-row items-start md:items-center md:gap-3">
                <h2 className="text-lg font-bold text-black dark:text-white">
                  {afs_id ? "Edit" : "Add"} Admission Fee Slot
                </h2>
              </div>
              <div className="mt-3 md:mt-0 md:text-end">
                <Link href={"/manageadmissionfeeslot"}>
                  <button
                    className="flex items-center bg-gray-100 text-gray-700 border border-gray-500 font-bold uppercase text-xs px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    
                    Back
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-4 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-2 border-gray-200 justify-end">
              <div className="flex-auto px-4 lg:px-6 py-3 pt-0">
                <form onSubmit={formik.handleSubmit}>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Fees Information
                  </h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <div className="w-full">
                      <div className="relative w-full mb-3">
                        {/* <AcademicYearSelection
                          label={"Year of study*:"}
                          selectionName={"Year of study"}
                          formik={formik}
                          errors={formik?.errors?.year_id}
                          touched={formik?.touched?.year_id}
                          values={formik?.values?.year_id}
                          formikName={"year_id"}
                          disabledElement={afs_id ? true : false}
                        /> */}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative w-full mb-3">
                        {/* <Program
                          roleId={roleId}
                          formik={formik}
                          label={"Select Program Name*:"}
                          disabledElement={afs_id ? true : false}
                        /> */}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="schedule_for"
                        >
                          Schedule For*:
                        </label>
                        <select
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="schedule_for"
                          name="schedule_for"
                          value={formik?.values?.schedule_for}
                          onChange={formik?.handleChange}
                          onBlur={formik?.handleBlur}
                        >
                          <option value="">Select Schedule For</option>
                          <option value={1}>Single Major</option>
                          <option value={2}>Double Major</option>

                        </select>
                        {formik?.errors?.schedule_for && formik?.touched?.schedule_for && (
                          <div className="text-red-500 text-sm">
                            {formik?.errors?.schedule_for}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative w-full mb-3">
                        {/* <Semester
                          formik={formik}
                          disabledElement={afs_id ? true : false}
                        /> */}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="schedule_id"
                        >
                          Admission Title*
                        </label>
                        <select
                          type="text"
                          name="schedule_id"
                          id="schedule_id"
                          value={formik?.values?.schedule_id}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          disabled={afs_id}
                        >
                          <option value="">Select Admission Title</option>
                          {Array.isArray(admissionData) &&
                            admissionData.map((item, key) => (
                              <option value={item?.admission_schedule_id} key={key}>
                                {item?.admission_form_title}
                              </option>
                            ))}
                        </select>
                        {formik?.errors?.schedule_id &&
                          formik?.touched?.schedule_id && (
                            <div className="text-red-500 text-sm">
                              {formik?.errors?.schedule_id}
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="re_schedule_session_id"
                        >
                          Select Admission Re-Schedule*
                        </label>
                        <select
                          className="disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="re_schedule_session_id"
                          name="re_schedule_session_id"
                          value={formik?.values?.re_schedule_session_id}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          disabled={afs_id}
                        >
                          <option value={""}>
                            Select Admission Re-Schedule
                          </option>
                          {Array.isArray(reScheduleData) &&
                            reScheduleData?.map((item, key) => (
                              <option
                                value={item?.r_schedule_session_id}
                                key={key}
                              >
                                {item?.reschedule}
                              </option>
                            ))}
                        </select>
                        {formik?.errors?.re_schedule_session_id &&
                          formik?.touched?.re_schedule_session_id && (
                            <div className="text-red-500 text-sm">
                              {formik?.errors?.re_schedule_session_id}
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="student_name"
                        >
                          Select Student
                        </label>
                        <select
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="student_id"
                          name="student_id"
                          value={formik?.values?.student_id}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          placeholder="Select Student"
                          disabled={afs_id}
                        >
                          <option value="">Select Students</option>
                          {Array.isArray(studentData) &&
                            studentData.map((item, key) => (
                              <option value={item?.student_id} key={key}>
                                {item?.student_name}
                              </option>
                            ))}
                        </select>
                        {formik?.touched?.student_id &&
                          formik?.errors?.student_id && (
                            <div className="text-red-500 text-xs mt-1">
                              {formik?.errors?.student_id}
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="admission_fees"
                        >
                          Admission Fees*
                        </label>
                        <input
                          type="text"
                          name="admission_fees"
                          id="admission_fees"
                          placeholder="Enter Admission Fees"
                          className="disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value={formik?.values?.admission_fees}
                          disabled
                        />
                        {formik?.errors?.admission_fees &&
                          formik?.touched?.admission_fees && (
                            <div className="text-red-500 text-sm">
                              {formik?.errors?.admission_fees}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
                    {displayedFeeDetails?.map((item, key) => (
                      <div
                        className="border-2 border-gray-200 p-2 rounded-lg"
                        key={key}
                      >
                        <div className="flex justify-between items-center">
                          <h5 className="text-blueGray-400 text-sm lg:text-base font-bold uppercase">
                            {key + 1}
                          </h5>
                          <div className="flex gap-2 items-center">
                            {key == displayedFeeDetails?.length - 1
                              // && item?.payment_paid_status != 1 
                              && (
                                <button
                                  className="bg-gray-900 text-white font-bold uppercase text-xs px-1 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    addForm();
                                  }}
                                >
                                  {/* <MdOutlineAddCircleOutline className="text-2xl" /> */}
                                </button>
                              )}
                            {key > 0 && item?.payment_paid_status != 1 && (
                              <button
                                className="bg-red-500 text-white font-bold uppercase text-xs px-1 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  removeForm(key);
                                }}
                              >
                                <RiDeleteBinLine className="text-2xl" />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
                          <div className="w-full">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="slot_fee_amount"
                              >
                                Fees Amount*{item?.payment_paid_status == 1 &&
                                  <span className="text-green-600">&nbsp;(Paid)</span>
                                }
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id={`fee_details_${key}`}
                                name="slot_fee_amount"
                                placeholder="Enter Fees Amount"
                                value={item?.slot_fee_amount}
                                onChange={(e) => handleChange(key, e)}
                                disabled={item?.payment_paid_status == 1}
                              />

                              {formik?.errors?.fee_details?.[key]
                                ?.slot_fee_amount &&
                                formik?.touched?.fee_details?.[key]
                                  ?.slot_fee_amount && (
                                  <div className="text-red-500 text-sm">
                                    {
                                      formik?.errors?.fee_details?.[key]
                                        ?.slot_fee_amount
                                    }
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="from_date"
                              >
                                From Date*
                              </label>
                              <input
                                type="date"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id={`fee_details_${key}`}
                                name="from_date"
                                value={item?.from_date}
                                onChange={(e) => handleChange(key, e)}
                                disabled={item?.payment_paid_status == 1}
                              />

                              {formik?.errors?.fee_details?.[key]
                                ?.from_date &&
                                formik?.touched?.fee_details?.[key]
                                  ?.from_date && (
                                  <div className="text-red-500 text-sm">
                                    {
                                      formik?.errors?.fee_details?.[key]
                                        ?.from_date
                                    }
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="to_date"
                              >
                                To Date*
                              </label>
                              <input
                                type="date"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id={`fee_details_${key}`}
                                name="to_date"
                                value={item?.to_date}
                                onChange={(e) => handleChange(key, e)}
                                disabled={item?.payment_paid_status == 1}
                              />

                              {formik?.errors?.fee_details?.[key]
                                ?.to_date &&
                                formik?.touched?.fee_details?.[key]
                                  ?.to_date && (
                                  <div className="text-red-500 text-sm">
                                    {
                                      formik?.errors?.fee_details?.[key]
                                        ?.to_date
                                    }
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="relative w-full mb-3">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="late_fee"
                              >
                                Late Fee*
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 disabled:bg-gray-300 disabled:text-gray-700 disabled:cursor-not-allowed bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id={`fee_details_${key}`}
                                name="late_fee"
                                placeholder="Enter Late Fees Amount"
                                value={item?.late_fee}
                                onChange={(e) => handleChange(key, e)}
                                disabled={item?.payment_paid_status == 1}
                              />

                              {formik?.errors?.fee_details?.[key]
                                ?.late_fee &&
                                formik?.touched?.fee_details?.[key]
                                  ?.late_fee && (
                                  <div className="text-red-500 text-sm">
                                    {
                                      formik?.errors?.fee_details?.[key]
                                        ?.late_fee
                                    }
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr className="mt-4 border-b-1 border-blueGray-300" />
                  {roleId == 1 ||
                    accessRight?.is_added == 1 ||
                    (accessRight?.is_edited == 1 && afs_id) ? (
                    <div className="text-center flex justify-center mt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        onClick={(e) => {
                          e.preventDefault();
                          formik?.handleSubmit();
                        }}
                        className="bg-gray-900 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      >
                        {loading ? (
                          <div className="flex">
                            <Oval
                              height={20}
                              width={20}
                              color="white"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                              ariaLabel="oval-loading"
                              secondaryColor="white"
                              strokeWidth={5}
                              strokeWidthSecondary={3}
                            />{" "}
                            <span className="ml-1">Saving</span>
                          </div>
                        ) : (
                          <>
                            <div />
                            Submit
                          </>
                        )}
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </section>
        </div>
      
    </div>
  );
}