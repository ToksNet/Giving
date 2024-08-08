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

});

const ProfileSignup = () => {
  const initialValues = {
    name: '',

  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className='w-full max-w-full md:w-[762px] mt-8 md:mt-[58px]'>
      
      <div className=''>

        <div className=''>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, isSubmitting }) => (
              <Form className='w-full' id='form'>
                <div className='flex  w-full gap-[34px]'>
                <div className='w-full'>
               <InputField label="First Name" type="text" name="firstName" id="outlined-basic form" variant="outlined" className="w-full" />
               </div>
               <div className='w-full'>
               <InputField label="Last Name" type="text" name="lastName" id="outlined-basic" variant="outlined" className="w-full" />
               </div>
                </div>
                <InputField label="Name of Store" type="text" name="store" id="outlined-basic" variant="outlined" className="w-full" />
                <div className='flex  w-full gap-[34px]'>
                <div className='w-[270px]'>
               <InputField label="Street Number" type="numer" name="streetNumber" id="outlined-basic" variant="outlined" className="w-full" />
               </div>
               <div className='w-full'>
               <InputField label="Street Name" type="text" name="streetName" id="outlined-basic" variant="outlined" className="w-full" />
               </div>
                </div>
                <div className='flex  w-full gap-[34px]'>
                <div className='w-[309px]'>
               <InputField label="City" type="text" name="city" id="outlined-basic" variant="outlined" className="w-full" />
               </div>
               <div className='w-full'>
               <InputField label="State" type="text" name="state" id="outlined-basic" variant="outlined" className="w-full" />
               </div>
                </div>
                <div className='flex  w-full gap-[34px]'>
                <div className='w-[309px]'>
               <InputField label="Postal Code" type="numer" name="postal" id="outlined-basic" variant="outlined" className="w-full" />
               </div>
               <div className='w-full'>
               <InputField label="Country" type="text" name="country" id="outlined-basic" variant="outlined" className="w-full" />
               </div>
                </div>
              </Form>
            )}
          </Formik>
      
        </div>
      </div>
    </div>
  );
};

export default ProfileSignup;
