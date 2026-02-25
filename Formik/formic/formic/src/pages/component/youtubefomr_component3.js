// video 13 - formik component 
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextError from './TextError'


const initialValues = {
    name: '',
    email: '',
    password: ''
}


const onSubmit = values => {
    console.log("form data ", values);
}

// ======= video 11 to add a yup ...

const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string().email('Invalid email formate').required('required'),
    password: Yup.string().required('required')
})

function youtubefomr_component3() {

    // remove on video 13 cmponent ...
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate
    //     validationSchema
    // })

    // console.log("form value : " ,formik.values);
    // console.log("form errors : ", formik.errors);  // this a show a error on console window 
    // console.log("visited fields : ", formik.touched);

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {/* <Form onSubmit={formik.handleSubmit}> */}
            <Form >
                <div className='flex flex-col border items-start gap-5'>

                    <div className='mb-10'>
                        <label htmlFor='name'>name</label>
                        <Field type='text' id='name' name='name' className='border-2 w-50'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.name} className='border-2 w-50'// relapce this three line to one line to that are easy to declare a one line to all work 

                        // this use to 3 line of code not right on use ⬇ to 3 line code not right as up side 

                        // {...formik.getFieldProps('name')}// remove on video - 15
                        />

                        {/* {formik.touched.name && formik.errors.name ? (<div className='text-red-600'>{formik.errors.name}</div>) : null} */}   {/* remove this video 16 to use a erroemessage   */}

                        {/* 1. first type declare error color */}
                        <ErrorMessage name='name' component={TextError} />

                    </div>

                    <div className='mb-10'>
                        <label htmlFor='email'>email</label>
                        <Field type='email' id='email' name='email' className='border-2 w-50'

                        // {...formik.getFieldProps('email')}

                        />
                        {/* {formik.touched.email && formik.errors.email ? (<div className='text-red-600'>{formik.errors.email} </div>) : null} */}

                        {/* 2. second type declare error color */}
                        <ErrorMessage name='email' >
                            {errormsg => <div className='text-red-500'>{errormsg}</div>}
                        </ErrorMessage>
                    </div>

                    <div className='mb-10'>
                        <label htmlFor='password'>password</label>
                        <Field type='text' id='password' name='password'
                            className='border-2 w-50'

                        // {...formik.getFieldProps('password')}
                        />
                        {/* {formik.touched.password && formik.errors.password ? (<div className='text-red-600'>{formik.errors.password}</div>) : null} */}

                        <ErrorMessage name='password' />


                    </div>
                    <button className='border hover:bg-indigo-500 hover:text-amber-700' type='submit' >Submit</button>
                </div>

            </Form>
        </Formik>
    )
}

export default youtubefomr_component3


