import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import api from '@/utilliy/api';
import { headerFormData } from '../../utilliy/headers';

export default function EditProfile() {
  const router = useRouter();
  const { name, mobile, email, image } = router.query; // Access query parameters

  const [profileImage, setProfileImage] = useState(image || null); // Handle image state
  
  useEffect(() => {
    if (name && mobile && email) {
      formik.setValues({ name, mobile, email, image }); // Prefill form values
    }
    console.log(image)
  }, [name, mobile, email]);

  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      image: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Minimum 3 letters required')
        .required('Name is required'),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
        .required('Mobile number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('s_name', values.name);
        formData.append('s_mobile', values.mobile);
        formData.append('s_email', values.email);
        if (values.image) formData.append('s_img', values.image);

        const response = await api.put(`/profile/`, formData, {
          headers: await headerFormData(),
        });
        console.log('Profile updated successfully:', response.data);
        router.push('/View/Profile'); 
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue('image', file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className='mt-20'>
      <div>
        <h1 className='text-xl text-blue-950 dark:text-sky-400'>Edit Profile</h1>
      </div>
      <form onSubmit={formik.handleSubmit} className='bg-white p-4 max-w-3xl rounded-md mx-auto dark:bg-gray-700'>
        <div className='max-w-2xl mx-auto p-4'>
          <div>
            {profileImage && <img src={profileImage} alt="Profile" className='h-40 mb-4' />}
            <input type="file" name="image" onChange={handleImageChange} />
            {formik.errors.image && formik.touched.image && (
              <p className="text-red-500 text-sm">{formik.errors.image}</p>
            )}
          </div>
          <div className='space-y-4'>
            <div>
              <h1 className='text-sm md:text-base dark:text-lime-300'>Name</h1>
              <input
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter Your Name'
                className={`bg-gray-50 border py-2 px-2 ${
                  formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 rounded-lg focus:ring-blue-500 block w-full dark:bg-gray-600`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <h1 className='text-sm md:text-base dark:text-lime-300'>Mobile</h1>
              <input
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter Your Mobile'
                className={`bg-gray-50 border py-2 px-2 ${
                  formik.errors.mobile && formik.touched.mobile ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 rounded-lg focus:ring-blue-500 block w-full dark:bg-gray-600`}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
              )}
            </div>
            <div>
              <h1 className='text-sm md:text-base dark:text-lime-300'>Email</h1>
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter Your Email'
                className={`bg-gray-50 border py-2 px-2 ${
                  formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 rounded-lg focus:ring-blue-500 block w-full dark:bg-gray-600`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>

          </div>
        </div>
        <div className='flex justify-center'>
          <button type='submit' className='bg-blue-600 px-4 py-1 text-white rounded-md'>Submit</button>
        </div>
      </form>
    </div>
  );
}
