import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../components/InputField';
import AuthButton from '../../../components/AuthButton';
import { Link } from "react-router-dom";
import googleicon from '../../../assets/images/googleicon.png'
import AuthText from '../../../components/AuthText';

const validationSchema = Yup.object({
  name: Yup.string().required('Password is required'),
  address: Yup.string().required('Address is required'),
  email: Yup.string().email('Invalid email address').required('Email or phone number is required'),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SellersSignup = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    address:'',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center px-4 md:px-0'>
      <div className='md:flex gap-[30px] mt-4 lg:mt-0'>
        <button className='px-[30px] w-full md:w-fit py-4 rounded bg-[#DB4444] text-base font-medium text-[#FFFFFF]'>Buyer’s Account</button>
        <button className='mt-4 md:mt-0 w-full md:w-fit px-[30px] py-4 rounded bg-[white]  border border-[#FB1314] text-base font-medium text-[#000000]'>Seller’s Account </button>
      </div>
      <div className='w-full max-w-full md:w-[409px] mt-[60px]'>
        <AuthText title="Create an account" description="Enter your details below" />
        <div className='mt-8 w-full md:w-[409px]'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, isSubmitting }) => (
              <Form className='w-full'>
                <InputField label="Name of Store" type="text" name="name" className="w-full" />
                <InputField label="Email address" type="email" name="email" className="w-full" />
                <InputField label="Address of Store" type="text" name="address" className="w-full" />
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                />
                <InputField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                />
                <div className='mt-10'>
                  <AuthButton type="submit" className="w-full" disabled={!isValid || isSubmitting}>
                    Create Account
                  </AuthButton>
                 
                </div>
              </Form>
            )}
          </Formik>
          <div className='w-full self-end mt-[34px]'>
            <p className='text-base font-normal text-[#000000] text-left'>
              Already have account?
              <span className='ml-2 border-b border-b-[black]'>
                <Link to="/auth/seller-login">Log in</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersSignup;
