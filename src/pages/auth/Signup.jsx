

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/InputField';
import AuthButton from '../../components/AuthButton';
import { Link } from "react-router-dom";
import googleicon from '../../assets/images/googleicon.png'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Signup = () => {
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
      <div className='w-[409px]'>
        <div className=' mt-[69px] w-full text-left'>
          <h1 className='font-medium text-[38px] text-[#000000]'>Create an account</h1>
          <p className='font-normal text-base text-[#000000] mt-6'>Enter your details below</p>
        </div>
        <div className='mt-12 w-[409px]'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className='w-full'>
                <InputField label="Name" type="text" name="name" className="w-full" />
                <InputField label="Email address" type="email" name="email" className="w-full" id={sata}/>
                <InputField label="Password" type="password" name="password" />
                <div className='mt-10'>
                  <AuthButton type="submit" className="w-full">Create Account</AuthButton>
                  <button className='px-[30px] py-4 rounded bg-[white] w-full mt-4 border border-[#00000066] text-base font-medium text-[#000000] flex items-center gap-2 justify-center'><img src={googleicon} alt='googleicon' />Sign up with Google</button>
                </div>
              </Form>
            )}
          </Formik>
          <div className='w-full self-end mt-[34px]'>
            <p className='text-base font-normal text-[#000000] text-center'>Already have account?<span className='ml-2'><Link to="/auth/Signin" >Log in</Link></span></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
