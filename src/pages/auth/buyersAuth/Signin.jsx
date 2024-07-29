import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../components/InputField';
import AuthButton from '../../../components/AuthButton';
import { Link } from "react-router-dom";


const validationSchema = Yup.object({
  email: Yup.string().required('Email or phone number is required'),
  password: Yup.string().required('Password is required'),
});

const Signin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='md:flex gap-[30px]'>
        <button className='px-[30px] w-full md:w-fit py-4 rounded bg-[#DB4444] text-base mt-4 md:mt-0 font-medium text-[#FFFFFF]'>Buyer’s Account</button>
        <button className='px-[30px] w-full md:w-fit  py-4 rounded bg-[white] mt-4 md:mt-0  border border-[#FB1314] text-base font-medium text-[#000000]'>Seller’s Account</button>
      </div>
      <div className=' mt-[70px] md:mt-[120px]'> 
        <h1 className='font-medium text-[38px] text-[#000000]'>Log in to Gv3n market</h1>
        <p className='font-normal text-base text-[#000000] mt-6'>Enter your details below</p>
      </div>
      <div  className='mt-12 w-full max-w-full md:w-[409px]'> 
      <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, isSubmitting }) => (
              <Form className='w-full'>
                <InputField label="Email address or phone number" type="email" name="email" className="w-full" />
                <InputField label="Password" type="password" name="password" />
                <div className='mt-10 flex items-center justify-between'>
                  <AuthButton type="submit" disabled={!isValid || isSubmitting}>
                    Log in
                  </AuthButton>
                  <p className='text-base font-normal text-[#DB4444]'><Link to="/auth/forgot-password" >Forget Password?</Link></p>
                </div>
              </Form>
            )}
          </Formik>
      </div>
    </div>
  );
};

export default Signin;

