import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerSeller } from '../../api/seller';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    business_name: Yup.string().required('Business Name is required'),
    business_email: Yup.string().email('Invalid email format').required('Business Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character @$!%*?& ')
      .required('Password is required'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await registerSeller(values);
      alert('Account created successfully!');
    } catch (err) {
      setErrors({ apiError: err.message || 'An error occurred. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-[205px] top-[500px] relative flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md flex">
        <div className="hidden md:block w-1/2">
          <img
            src="/images/SideImage.png"
            alt="Signup"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 relative">
          <div className="flex space-x-8 absolute top-[60px] left-1/2 transform -translate-x-1/2">
            <button className="py-2 px-4 bg-red-500 text-white rounded-sm w-40">
              Buyer's Account
            </button>
            <button className="py-2 px-4 bg-white border border-red-500 text-black rounded-sm w-40">
              Seller's Account
            </button>
          </div>
          <div className="mt-32  w-[371px] mx-auto">
            <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
            <p className="text-gray-600 mb-6">Enter your details below</p>
            <Formik
              initialValues={{
                firstname: '',
                lastname: '',
                business_name: '',
                business_email: '',
                password: '',
                password_confirmation: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors }) => (
                <Form className="space-y-2">
                  <div className="flex flex-col">
                    <label htmlFor="firstname" className="text-sm text-gray-600">First Name</label>
                    <Field
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                    />
                    <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lastname" className="text-sm text-gray-600">Last Name</label>
                    <Field
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                    />
                    <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="business_name" className="text-sm text-gray-600">Business Name</label>
                    <Field
                      type="text"
                      id="business_name"
                      name="business_name"
                      className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                    />
                    <ErrorMessage name="business_name" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="business_email" className="text-sm text-gray-600">Business Email</label>
                    <Field
                      type="email"
                      id="business_email"
                      name="business_email"
                      className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                    />
                    <ErrorMessage name="business_email" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm text-gray-600">Password</label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="password_confirmation" className="text-sm text-gray-600">Confirm Password</label>
                    <Field
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                      className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                    />
                    <ErrorMessage name="password_confirmation" component="div" className="text-red-500 text-sm" />
                  </div>
                  {errors.apiError && <p className="text-red-500 text-sm">{errors.apiError}</p>}
                  <button type="submit" className="w-full py-2 px-4 bg-red-500 rounded-sm flex items-center justify-center text-white mb-4" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </button>
                  <button className="w-full py-2 px-4 border border-gray-300 text-black rounded-sm flex items-center justify-center">
                    <FcGoogle className="w-[39px]" />
                    Sign up with Google
                  </button>
                </Form>
              )}
            </Formik>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <a
                  href="/auth/Signin"
                  className="text-black border-b border-gray-300"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
