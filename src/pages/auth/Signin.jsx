import React from "react";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  return (
    <div className="h-[205px] top-[400px] relative flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md flex">
        {/* Left Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src="/images/SideImage.png"
            alt="Signup"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 relative">
          {/* Form Container */}
          <div className="mt-32 h-[530px] w-[371px] mx-auto">
            {/* Heading Text */}
            <h2 className="text-2xl font-medium mb-2 ">Login to GV3N market</h2>
            <p className=" mb-6 font-normal ">Enter your details below</p>

            {/* Form */}
            <form className="space-y-4">
              <div className="flex flex-col"></div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-600">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  id="email"
                  className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <button className="w-40 py-2 px-4 bg-red-500 rounded-sm flex items-center justify-center text-white mb-4">
                  Login
                </button>
                <p className="text-gray-600 mb-4">
                  <a href="#" className="text-red-500">
                    Forgot Password?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
