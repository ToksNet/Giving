import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../components/InputField';
import AuthButton from '../../../components/AuthButton';
import AuthText from '../../../components/AuthText';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email or phone number is required'),
});

const ForgotPassword = () => {
  const initialValues = {
    email: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='w-full flex flex-col justify-center items-center px-4 md:px-0'>
      <div className='w-full max-w-full md:w-[409px] mt-[60px]'>
        <AuthText title="Forgot Password " description="Enter your email  below"/> 
        <div className='mt-8 w-full md:w-[409px]'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, isSubmitting }) => (
              <Form className='w-full'>
                <InputField label="Email address" type="email" name="email" className="w-full" />
                  <AuthButton type="submit" className="mt-10" disabled={!isValid || isSubmitting}>
                  Continue 
                  </AuthButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
