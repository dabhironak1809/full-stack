import { useFormik } from 'formik'
import React from 'react'

import * as Yup from 'yup'

const test = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        // validate
        validationSchema: Yup.object({
            name: Yup.string().required('required'),
            email: Yup.string().email('Invalid email formate').required('required'),
            password: Yup.string().required('required')
        }),
        onSubmit: values => {
            console.log("form data ", values);
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col border items-start gap-5'>

                    <div className='mb-10'>
                        <label htmlFor='name'>name</label>
                        <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className='border-2 w-50' />

                        {formik.touched.name && formik.errors.name ? (<div className='text-red-600'>{formik.errors.name}</div>) : null}
                    </div>

                    <div className='mb-10'>
                        <label htmlFor='email'>email</label>
                        <input type='email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className='border-2 w-50' />

                        {formik.touched.email && formik.errors.email ? (<div className='text-red-600'>{formik.errors.email} </div>) : null}
                    </div>

                    <div className='mb-10'>
                        <label htmlFor='password'>password</label>
                        <input type='password' id='password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className='border-2 w-50' />

                        {formik.touched.password && formik.errors.password ? (<div className='text-red-600'>{formik.errors.password}</div>) : null}
                    </div>
                    <button className='border hover:bg-indigo-500 hover:text-amber-700' type='submit' >Submit</button>
                </div>
            </form>

        </div>
    )
}

export default test
