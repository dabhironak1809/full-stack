
"use client";

import { useFormik, FieldArray, FormikProvider } from 'formik'
import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery';
import select2 from 'select2';
// import "select2/dist/css/select2.min.css";


import * as Yup from 'yup';

function contactus({ isLight }) {

    // // ----- 1 dropdown allocate function 

    // const selectRef = useRef(null);
    // const [value, setValue] = useState("");

    // useEffect(() => {
    //     // Check if jQuery is loaded globally
    //     if (typeof window !== "undefined" && window.$) {
    //         const $el = window.$(selectRef.current);

    //         // Initialize
    //         $el.select2({
    //             placeholder: "-- Select Country --",
    //             width: "100%",
    //             // allowClear: true,  // this a show a cancel button.

    //         });

    //         // Simple listener to update React State
    //         $el.on("change", (e) => setValue(e.target.value));

    //         // Cleanup: This prevents "double" dropdowns or memory leaks
    //         return () => {
    //             $el.off("change");
    //             $el.select2("destroy");
    //         };
    //     }
    // }, []);

    // 1 st end  ========================

    // 2 . dropdown start here

    useEffect(() => {
        select2($);

        // --- 1 single select dropdown

        $("#country").select2({
            placeholder: "-- Select Country --",
            width: "80%",

            allowClear: true,
        });

        // --- 2 multiple select dropdown

        $(".js-example-basic-multiple-limit").select2({
            placeholder: "-- Select Country --",
            width: "80%",
            allowClear: true,
            maximumSelectionLength: 2, // any number declare you 

        });

        return () => {
            //  - 1 -  single select drop down 
            $("#country").select2("destroy");

            // - 2- multiple select drop down 
            $(".js-example-basic-multiple-limit").select2("destroy");

        };
    }, [])

    // const phnumber = Yup.array().of(
    //     Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit number').required('required')
    // ).required('required')


    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            reason: '',
            message: '',
            check: '',
            phnumber: [''],
            country: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('required'),
            lastname: Yup.string().required('required'),
            email: Yup.string().email("Invalid email formate ").required('required'),
            reason: Yup.string().required("select any one reason"),
            check: Yup.array().min(1, 'slect as one condition'),
            message: Yup.string().required("required"),
            // phnumber: phnumber
            phnumber: Yup.array().of(
                Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit number').required('required')
            ).required('required'),
            country: Yup.string().required('select any one city')

        }),
        onSubmit: values => {
            console.log("form data", values);
        }

    })
    return (
        <FormikProvider value={formik}>

            <div className=' 2xl:container mx-auto '>
                <div className='mx-auto '>
                    <div className='py-12 md:py-20'>

                        <div className=' container mx-auto max-w-6xl  2xl:max-w-7xl pb-10 text-center justify-center md:pb-16'>

                            <div className='flex flex-col font-semibold items-center justify-center mb-9'>
                                <p className={`text-2xl  uppercase ${isLight ? "text-[#307fff]" : "text-[#c0e4f6]"} `}>Demo Contact Page</p>
                                <p className={`text-4xl font-bold tacking-tighter md:text-5xl lg:text-7xl   ${isLight ? "text-[#000000]" : "text-[#94a3b8]"} `}> Get in touch with us</p>

                            </div>
                            <div>
                                <p className={`text-[20] font-medium tacking-tighter  px-25  md:text-2xl 2xl:text-3xl  ${isLight ? "text-[#000000a2]" : "text-[#94a3b8]"} `}>
                                    Thank you for considering us for your project! We're excited to hear from you. Our team can assist you in building your dream website.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className={`w-full   pb-20 pt-24 ${isLight ? "bg-[#eff6ff]" : "bg-[#1e293b]"} `}>
                    <div className=' container mx-auto max-w-6xl  2xl:max-w-7xl pb-10 text-center md:pb-16'>


                        <div className='flex flex-col items-center justify-center mb-9'>
                            <p className={` text-4xl font-bold tacking-tighter md:text-5xl lg:text-7xl   ${isLight ? "text-[#000000]" : "text-[#ffffffc7]"} `}> Contact us</p>

                        </div>
                        <div>
                            <p className={`text-[20] font-medium px-25 tacking-tighter md:text-2xl 2xl:text-3xl  ${isLight ? "text-[#0000006d]" : "text-[#94a3b8]"} `}>
                                Please take a moment to fill out this form. So we can better understand your needs and get the process started smoothly.
                            </p>
                        </div>


                    </div>

                    <form className='   flex justify-center container mx-auto' onSubmit={formik.handleSubmit} >

                        <div className={`justify-center w-full  max-w-2xl 2xl:max-w-5xl  items-center rounded-2xl p-17 ${isLight ? "bg-[#ffffff]" : "bg-[#0f172a]"}`}>

                            <p className={`text-4xl  font-bold  ${isLight ? "text-[#000000]" : "text-[#ffffffc9]"} `}>Ready to Get Started?</p>

                            <div class="flex  flex-col mb-4 w-full mt-5  ">
                                <label for="firstName" class={`text-lg  font-medium mb-1 ${isLight ? "text-[#000000]" : "text-gray-300"} `}>FIRST NAME</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name='firstname'
                                    placeholder="First name"
                                    class={` placeholder:text-2xl rounded-md px-4  py-2 2xl:py-5 focus:outline-none focus:ring-2  ${isLight ? "bg-[#ffffff] focus:ring-black border border-gray-600" : "bg-[#3b3b3b] focus:ring-white text-gray-200 placeholder-gray-400  "} `}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstname}
                                />
                                {formik.touched.firstname && formik.errors.firstname ? (<div className='text-red-500'>{formik.errors.firstname}</div>) : null}

                            </div>

                            <div class="flex  flex-col mb-4 w-full mt-7  ">
                                <label for="lastname" class={`text-lg   font-medium mb-1 ${isLight ? "text-[#000000]" : "text-gray-300"}`}>LAST NAME</label>

                                <input
                                    type="text"
                                    id="lastname"
                                    name='lastname'
                                    placeholder="Last name"
                                    class={` placeholder:text-2xl rounded-md px-4 py-2 2xl:py-5 focus:outline-none focus:ring-2  ${isLight ? "bg-[#ffffff] focus:ring-black border border-gray-600" : "bg-[#3b3b3b] focus:ring-white text-gray-200 placeholder-gray-400  "}`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastname}
                                />
                                {formik.touched.lastname && formik.errors.lastname ? (<div className='text-red-500'>{formik.errors.lastname}</div>) : null}
                            </div>

                            <div class="flex  flex-col mb-4 w-full mt-7  ">
                                <label for="email" class={`text-lg font-medium mb-1 ${isLight ? "text-[#000000]" : "text-gray-300"} `}>Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name='email'
                                    placeholder="Email Address"
                                    class={`  placeholder:text-2xl rounded-md px-4 py-2 2xl:py-5 focus:outline-none focus:ring-2 focus:ring-white ${isLight ? "bg-[#ffffff] focus:ring-black border border-gray-600" : "bg-[#3b3b3b] focus:ring-white text-gray-200 placeholder-gray-400  "} `}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (<div className='text-red-500'>{formik.errors.email}</div>) : null}
                            </div>


                            {/* ---- single drop down select  */}

                            <div className='flex flex-col mb-4 w-full mt-7 '>

                                <label htmlFor='country' className={`text-lg   font-medium mb-1 ${isLight ? "text-[#000000]" : "text-gray-300"} `}>
                                    Country
                                </label>

                                <select id='country' className={` py-2 2xl:py-5 w-full   border-0 ${isLight ? "bg-[#ffffff] focus:ring-black border border-gray-600" : "bg-[#3b3b3b] focus:ring-white text-gray-200 placeholder-gray-400  "} `}>
                                    <option value="" className='bg-[#3b3b3b]'></option>
                                    <option value="Indian" className='bg-[#3b3b3b]'>Indian</option>
                                    <option value="Usa" className='bg-[#3b3b3b]'>Usa</option>
                                    <option value="UK" className='bg-[#3b3b3b]'>UK</option>
                                    <option value="Japan" className='bg-[#3b3b3b]'>Japan</option>
                                    <option value="Canada" className='bg-[#3b3b3b]'>Canada</option>
                                    <option value="HonkKong" className='bg-[#3b3b3b]'>Hong Kong</option>
                                </select>

                            </div>

                            {/* ---- multiple drop down select  */}

                            <div className='flex flex-col mb-4 w-full mt-10'>

                                <label htmlFor='country' className={`text-lg  font-medium mb-1 ${isLight ? "text-[#000000]" : "text-gray-300"} `}>
                                    Country
                                </label>

                                <select id='multiple' className='w-full js-example-basic-multiple-limit' multiple>
                                    <option value=""></option>
                                    <option value="Indian">Indian</option>
                                    <option value="Usa">Usa</option>
                                    <option value="UK">UK</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Canada">Canada</option>
                                    <option value="HonkKong">Hong Kong</option>
                                </select>

                            </div>


                            <div class={`  gap-6 grid grid-cols-2 lg:grid-cols-4  mt-10 mb-5 ${isLight ? "text-[#000000]" : "text-gray-300"} `}>

                                <label class="flex items-center 2xl:text-2xl gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="reason"
                                        value="general"
                                        class="accent-[#3b3b3b]"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.reason === "general"}
                                    />
                                    General inquiries
                                </label>

                                <label class="flex items-center 2xl:text-2xl gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="reason"
                                        value="technical"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.reason === "technical"}
                                    />
                                    Technical help
                                </label>

                                <label class="flex items-center 2xl:text-2xl gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="reason"
                                        value="claims"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.reason === "claims"}
                                    />
                                    Claims
                                </label>
                                <label class="flex items-center 2xl:text-2xl gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="reason"
                                        value="Other"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.reason === "Other"}
                                    />
                                    Other
                                </label>

                            </div>
                            {formik.touched.reason && formik.errors.reason && (
                                <div className="text-red-600 mt-2">{formik.errors.reason}</div>
                            )}

                            {/* dynamic add a phone number  */}

                            {/* <FieldArray name='phnumber'>
                                {(fielsArrayProps) => {
                                    const { push, remove, form } = fielsArrayProps;

                                    const phnumbers = form.values?.FieldArray?.phnumbers || [];
                                    return (
                                        <div>
                                            <div className='flex flex-row'>
                                                {phnumbers.map((phnumbers, index) => (
                                                    <div key={index} className='flex gap-2 mb-2'>
                                                        <input name={`phnumbers[${index}]`} className='border-2' />
                                                        {index > 0 && (
                                                            <button type='button' onClick={() => remove(index)}>{''}-{''}</button>
                                                        )}
                                                        <button type='button' onClick={() => push('')}>{''}+{''}</button>
                                                    </div>
                                                ))}
                                                {formik.touched.phnumbers?.[0] && formik.errors.phnumbers?.[0] ? (<div className='text-red-600'>{formik.errors.phnumber[0]}</div>) : null}
                                            </div>
                                        </div>
                                    );
                                }}
                            </FieldArray> */}
                            <FieldArray name="phnumber">
                                {({ push, remove }) => (
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                                        {formik.values.phnumber.map((value, index) => (
                                            <div key={index} className="flex gap-2 mb-2 items-center justify-start">
                                                <input
                                                    type="tel"
                                                    name={`phnumber[${index}]`}
                                                    value={value}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={`bg-[#3b3b3b] text-gray-200 placeholder-gray-400 placeholder:text-2xl rounded-md  px-8 2xl:px-24 py-2 2xl:py-5 focus:outline-none focus:ring-2 focus:ring-white"
                                                    placeholder="Phone number ${isLight ? "bg-[#ffffff] focus:ring-black border border-gray-600" : "bg-[#3b3b3b] focus:ring-white text-gray-200 placeholder-gray-400  "} `} />

                                                {index > 0 && (
                                                    <button type="button" className=' ' onClick={() => remove(index)}>
                                                        -
                                                    </button>
                                                )}

                                                {index === formik.values.phnumber.length - 1 && (
                                                    <button type="button" className=' ' onClick={() => push('')}>
                                                        +
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </FieldArray>

                            {formik.touched.phnumber?.[0] && formik.errors.phnumber?.[0] && (<div className='text-red-500' >{formik.errors.phnumber[0]}</div>)}

                            {/*  */}




                            <div class="flex  flex-col mb-4 w-full mt-7  ">
                                <label for="firstName" class={`text-lg   font-medium mb-1 uppercase ${isLight ? "text-[#000000]" : "text-gray-300"} `}>how we can help you </label>
                                <textarea rows={'5'}
                                    type="text"
                                    id="message"
                                    name='message'
                                    placeholder="write your message..."
                                    class={` placeholder:text-2xl rounded-lg px-4 py-2 2xl:py-5 focus:outline-none focus:ring-2 focus:ring-white ${isLight ? "bg-[#ffffff] focus:ring-black border border-gray-600" : "bg-[#3b3b3b] focus:ring-white text-gray-200 placeholder-gray-400  "} `}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                />
                                {formik.touched.message && formik.errors.message ? (<div className='text-red-600'>{formik.errors.message}</div>) : null}
                            </div>

                            <label className={`flex items-center gap-2 ${isLight ? "text-[#000000]" : "text-gray-300"}`}>
                                <input
                                    type="checkbox"
                                    name='check'
                                    className="text-[#3b3b3b]"
                                />
                                Have you read our privacy policy?
                            </label>

                            <label className={`flex items-center gap-2 ${isLight ? "text-[#000000]" : "text-gray-300"} `}>
                                <input
                                    type="checkbox"
                                    name='check'
                                    className="text-[#3b3b3b]"
                                />
                                Do you want to receive monthly updates by email?
                            </label>



                            <div className='flex justify-end'>
                                <button className='p-3 2xl:p-5 bg-[#1d4ed8] text-white 2xl:text-2xl px-8 2xl:px-15 rounded-lg mt-5 '>Send Message</button>
                            </div>

                        </div>

                    </form>
                </div>

            </div>
        </FormikProvider>
    )
}

export default contactus
