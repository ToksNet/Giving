import React from "react";

function SellersReg() {
  return (
    <div className="h-[205px] top-[400px] relative flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md flex">
        {/* Left Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src="/images/SideImage.png"
            alt="Signup"
            className="object-cover  w-full h-full"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 relative">
          {/* Top Inline Buttons */}
          <div className="flex space-x-8 absolute top-[60px] left-1/2 transform -translate-x-1/2">
            <button className="py-2 px-4 bg-white border border-red-500 rounded-sm w-40">
              Buyer's Account
            </button>
            <button className="py-2 px-4  bg-red-500 text-white text-black rounded-sm w-40">
              Seller's Account
            </button>
          </div>

          {/* Form Container */}
          <div className="mt-32 h-[530px] w-[371px] mx-auto">
            {/* Heading Text */}
            <h2 className="text-2xl font-medium mb-2 ">Create an Account</h2>
            <p className="text-gray-600 mb-6 ">Enter your details below</p>

            {/* Form */}
            <form className="space-y-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-600">
                  Name of store
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                />
              </div>
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
                <label htmlFor="Address" className="text-sm text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
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
              <div className="flex flex-col">
                <label
                  htmlFor="confirm password"
                  className="text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm password"
                  className="border-b-2 border-gray-300 focus:border-gray-500 outline-none py-2"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="mt-6">
              <button className="w-full py-2 px-4 bg-red-500 rounded-sm flex items-center justify-center text-white mb-4">
                Create Account
              </button>
            </div>

            {/* Login Link */}
            <div className="flex mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a
                  href="/auth/Signin"
                  className="text-black border-b border-gray-300 "
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
}

export default SellersReg;
