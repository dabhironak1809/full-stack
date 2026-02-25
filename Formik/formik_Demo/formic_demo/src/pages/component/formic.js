import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

// const initialValues = {
//     name: '',
//     email: '',
//     password: ''
// }

// const validationSchema = Yup.object({
//     name: Yup.string().required('required'),
//     email: Yup.string().email('invalid email formate').required('required'),
//     password: Yup.string().required('required')
// })

// const onSubmit = values => {
//     console.log("form data ", values);

// }

// const formic = () => {

function formic() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('required'),
            email: Yup.string().email('invalid email formate').required('required'),
            password: Yup.string().required('required')
        }),
        onSubmit: values => {
            console.log("form data ", values);

        }
    })

    console.log("form error ", formik.errors);
    console.log("visited filed", formik.touched);

    return (
        <form onSubmit={formik.handleSubmit}>

            <div className='flex flex-col items-start gap-10 ml-20'>
                <div className='flex flex-col'>
                    <label htmlFor='name'>name</label>
                    <input type='text' id='name' name='name' className='border-2 w-50'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (<div className='text-red-500'> {formik.errors.name}</div>) : null}
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='email'>email</label>
                    <input type='email' id='email' name='email' className='border-2 w-50'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (<div className='text-red-500'>{formik.errors.email}</div>) : null}
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' name='password' className='border-2 w-50'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (<div className='text-red-500'>{formik.errors.password}</div>) : null}
                </div>

                <button type='submit' className='border px-3 rounded-full'>submit</button>

            </div>

        </form>
    )
}

export default formic







