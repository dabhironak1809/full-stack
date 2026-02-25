import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "@/utilliy/api";
import { useRouter } from "next/router";
import { headersApplication } from "../../utilliy/headers";

export default function Change_pass() {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      oldpassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      oldpassword: Yup.string().required("Password is required"),

      password: Yup.string()
        .matches(passwordRules, {
          message: "Please create a stronger password",
        })
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),

    onSubmit: async () => {
      const { oldpassword, password } = formik?.values;
      const encodedPassword = btoa(password); // Encoding password (example)
      const encodedPassword1 = btoa(oldpassword); // Encoding password (example)

      try {
        const bodyData = {
          old_password: encodedPassword1,
          s_password: encodedPassword,
        };
        console.log(encodedPassword1, encodedPassword);
        const res = await api.put(
          "/change",
          { old_password: encodedPassword1, s_password: encodedPassword },
          {
            headers: await headersApplication(),
          }
        );

        if (res?.status === 200) {
          console.log("Password changed successfully:", res?.data);
          router.push("/View/Dashbord");
        }
      } catch (error) {
        console.error("Error ", error);
      }
    },

    // onSubmit: async () => {
    //   const { oldpassword, password } = formik?.values;
    //   const encodedPassword = btoa(password);

    //   console.log(oldpassword,encodedPassword);
    //   try {
    //     console.log( await headersApplication())
    //     const res = await api.put("/change",
    //       {
    //         headers: await headersApplication(),
    //       }
    //     );

    //     if (res?.status === 200) {
    //       console.log(res?.data);
    //       // router.push("/");
    //     }
    //   } catch (error) {
    //     console.error("Error ", error);

    //   }
    // },
    // // onSubmit: (values) => {
    //   console.log('Form Submitted', values);
    // },
  });

  return (
    <div className="mt-20">
      <form
        className="bg-white p-4 max-w-full mx-auto dark:bg-gray-700"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <h1 className="text-base md:text-lg lg:text-xl text-[#323670] font-semibold dark:text-teal-300">
            Password Change Page
          </h1>
        </div>
        <div className="pt-4 space-y-4 max-w-2xl mx-auto">
          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">
              Old Password
            </h1>
            <input
              name="oldpassword"
              type="password"
              value={formik.values.oldpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Old Password"
              className={`bg-gray-50 border ${
                formik.errors.oldpassword && formik.touched.oldpassword
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {formik.touched.oldpassword && formik.errors.oldpassword && (
              <p className="text-red-500 text-sm">
                {formik.errors.oldpassword}
              </p>
            )}
          </div>

          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">
              New Password
            </h1>
            <input
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your New Password"
              className={`bg-gray-50 border ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <div>
            <h1 className="text-sm md:text-base dark:text-lime-300">
              Confirm Password
            </h1>
            <input
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirm Your Password"
              className={`bg-gray-50 border ${
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <div className="flex justify-center space-x-2">
            <button
              type="submit"
              className="bg-[#0d6efd] hover:bg-blue-700 px-3 py-1 text-white rounded-md text-lg dark:bg-emerald-600"
            >
              Submit
            </button>
            <Link
              href={"/"}
              className="bg-[#6c757d] px-3 py-1 text-white rounded-md text-lg dark:bg-red-700"
            >
              Reset
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
