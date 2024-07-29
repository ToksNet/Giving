import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import InputField from '../../../components/InputField';
import AuthButton from '../../../components/AuthButton';
import { Link } from "react-router-dom";
import AuthText from '../../../components/AuthText';

const validationSchema = Yup.object({
  password: Yup.string()
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const ChangePassword = () => {
  const initialValues = {
    password: '',
    confirmPassword: '',
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full max-w-full md:w-[409px]'>
        <AuthText title="Create New Password" description="Please enter your new password below" />
        <div className='mt-12'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, isSubmitting }) => (
              <Form className='w-full'>
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
                <div className='flex items-center justify-between w-full mt-4'>
                  <AuthButton type="submit" disabled={!isValid || isSubmitting}>
                    Submit
                  </AuthButton>
                  <Link to="/auth/forgot-password">
                    <p className='font-normal text-base text-[#DB4444]'>Forgot Password?</p>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
