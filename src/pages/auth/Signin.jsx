import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField';
import AuthButton from '../../components/AuthButton';
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
      <div className='flex gap-[30px]'>
        <button className='px-[30px] py-4 rounded bg-[#DB4444] text-base font-medium text-[#FFFFFF]'>Buyer’s Account</button>
        <button className='px-[30px] py-4 rounded bg-[white]  border border-[#FB1314] text-base font-medium text-[#000000]'>Seller’s Account</button>
      </div>
      <div className=' mt-[170px]'> 
        <h1 className='font-medium text-[38px] text-[#000000]'>Log in to Gv3n market</h1>
        <p className='font-normal text-base text-[#000000] mt-6'>Enter your details below</p>
      </div>
      <div  className='mt-12 w-[409px]'> 
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className='w-full'>
            <InputField label="Email or Phone Number" type="email" name="email" className="w-full" />
            <InputField label="Password" type="password" name="password" />
           <div className='flex items-center justify-between w-full'>
           <button className='signup-button' type="submit">Submit</button>
           <p className='font-normal text-base text-[#DB4444]'>Forget Password?</p>
           </div>
          </Form>
        )}
      </Formik>
      <div className='w-full self-end mt-[34px]'>
        <p className='text-base font-normal text-[#000000] text-center'>Dont have an account?<span className='ml-2'><Link to="/auth/Signup" >Sign Up</Link></span></p>
      </div>
      </div>
      
    </div>
  );
};

export default Signin;

