import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Image_upload() {
  const formik = useFormik({
    initialValues: {
      image: null,
    },

    validationSchema: Yup.object({
      image: Yup.mixed()
        .required("Image is required")
        .test(
          "fileSize",
          "Image size must be less than 2MB",
          (value) => value && value.size <= 2 * 1024 * 1024
        )
        .test(
          "fileType",
          "Only JPG, JPEG, PNG files are allowed",
          (value) =>
            value &&
            ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
        ),
    }),

    onSubmit: (values) => {
      console.log("Uploaded Image:", values.image);
    //   alert("Image uploaded successfully!");
    },
  });

  return (
    <div  className="p-20">
      <form onSubmit={formik.handleSubmit}>
        <h3>Upload Image</h3>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(event) => {
            formik.setFieldValue("image", event.currentTarget.files[0]);
          }}
          onBlur={formik.handleBlur} className="border"
        />

        {formik.touched.image && formik.errors.image ?(
          <div className="text-red-600">{formik.errors.image}</div>
        ):null}

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Image_upload
