import React from "react";
// 1. Added FormikProvider to the import
import { useFormik, FieldArray, Field, FormikProvider } from "formik";
import * as Yup from "yup";

function test2() {
    const phonenumbers = Yup.array().of(
        Yup.string().matches(/^[0-9]{10}$/, 'Must be a valid 10-digit number')
            .required('required')
    ).required('required');

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            social: {
                facebook: '',
                twitter: ''
            },
            phonenumbers: ["", ""],
            phnumbers: ['']
        },
        validationSchema: Yup.object({
            name: Yup.string().required('required'),
            email: Yup.string().email('Invalid email formate').required('required'),
            password: Yup.string().required('required'),
            social: Yup.object({
                facebook: Yup.string().required('required'),
                twitter: Yup.string().required('required')
            }),
            phonenumbers: phonenumbers,
            phnumbers: phonenumbers
        }),
        onSubmit: values => {
            console.log("form data ", values);
        }
    })

    return (
        // 2. Wrap everything in FormikProvider so <FieldArray> can work
        <FormikProvider value={formik}>
            <div className="flex justify-center  ">
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col items-start gap-5 '>

                        <div className='flex flex-col mb-10'>
                            <label htmlFor='name'>name</label>
                            <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className='border-2 w-50' />
                            {formik.touched.name && formik.errors.name ? (<div className='text-red-600'>{formik.errors.name}</div>) : null}
                        </div>

                        <div className='flex flex-col mb-10'>
                            <label htmlFor='email'>email</label>
                            <input type='email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className='border-2 w-50' />
                            {formik.touched.email && formik.errors.email ? (<div className='text-red-600'>{formik.errors.email} </div>) : null}
                        </div>

                        <div className='flex flex-col mb-10'>
                            <label htmlFor='password'>password</label>
                            <input type='password' id='password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className='border-2 w-50' />
                            {formik.touched.password && formik.errors.password ? (<div className='text-red-600'>{formik.errors.password}</div>) : null}
                        </div>

                        <div className=' flex flex-col mb-10'>
                            <label htmlFor='facebook'>FAcebook</label>
                            <input type='text' id='facebook' name='social.facebook' className='border-2 w-50' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.social.facebook} />
                            {formik.touched.social?.facebook && formik.errors.social?.facebook ? (
                                <div className='text-red-600'>{formik.errors.social.facebook}</div>
                            ) : null}
                        </div>

                        <div className='flex flex-col mb-10'>
                            <label htmlFor='twitter'>Twitter</label>
                            <input type='text' id='twitter' name='social.twitter' className='border-2 w-50' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.social.twitter} />
                            {formik.touched.social?.twitter && formik.errors.social?.twitter ? (<div className='text-red-500'>{formik.errors.social.twitter}</div>) : null}
                        </div>

                        <div className='flex flex-col mb-10'>
                            <label htmlFor='primaryph'>primary number</label>
                            <input type='number' id='primaryph' name='phonenumbers[0]' className='border-2 w-50'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phonenumbers[0]} />
                            {formik.touched.phonenumbers?.[0] && formik.errors.phonenumbers?.[0] ? (<div className="text-red-500" >{formik.errors.phonenumbers[0]}</div>) : null}
                        </div>

                        <div className='flex flex-col mb-10'>
                            <label htmlFor='secondaryph'>secondary number</label>
                            <input type='number' id='secondaryph' name='phonenumbers[1]' className='border-2 w-50'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phonenumbers[1]} />
                            {formik.touched.phonenumbers?.[1] && formik.errors.phonenumbers?.[1] ? (<div className="text-red-500" >{formik.errors.phonenumbers[1]}</div>) : null}

                        </div>

                        <div className='flex flex-col mb-10'>
                            <label htmlFor='secondaryph'>dynamic number</label>

                            <FieldArray name='phnumbers'>
                                {(fieldArrayProps) => {
                                    const { push, remove, form } = fieldArrayProps;
                                    const phnumbers = form.values?.phnumbers || [];
                                    return (
                                        <div >
                                            <div className="flex">
                                                {/* {phnumbers.map((phnumbers, index) => ( */}
                                                {phnumbers.map((phnumbers, index) => (
                                                    <div key={index} className="flex gap-2 mb-2">
                                                        {/* <Field name={`phnumbers[${index}]`} className="border-2" /> */}
                                                        <input type="number"   name={`phnumbers[${index}]`} className="border-2" />
                                                        {index > 0 && (

                                                            <button type='button' onClick={() => remove(index)}>{''}{""} - {''}</button>
                                                        )
                                                        }
                                                        <button type='button' onClick={() => push('')}>{''}{""}+{""}{''}</button>
                                                    </div>
                                                ))}
                                            </div>
                                            {formik.touched.phnumbers?.[0] && formik.errors.phnumbers?.[0] ? (<div className="text-red-500" >{formik.errors.phnumbers[0]}</div>) : null}

                                        </div>
                                    );
                                }}
                            </FieldArray>


                        </div>

                        <button className='border hover:bg-indigo-500 hover:text-amber-700' type='submit' >Submit</button>
                    </div>
                </form>
            </div>
        </FormikProvider>
    )
}

export default test2