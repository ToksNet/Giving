import React from "react";
import { RiFacebookLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiPaperplane } from "react-icons/ci";
import { AiFillApple } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black mt-24 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row md:flex-wrap items-start md:justify-between px-3 md:px-10">
        {/* 1st Column */}
        <div className="flex-1 min-w-[150px] mb-5 md:mb-0">
          <h3
            className="font-bold mb-3"
            style={{
              fontSize: "20px",
            }}
          >
            Gv3n market place
          </h3>
          <p className="mb-3">Subscribe</p>
          <p style={{ fontSize: "12px" }}>Get 10% off your first order</p>
          <form className="mt-3 flex items-center">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email "
                className="p-2 pr-10 rounded-l-md bg-black text-white border border-white focus:ring-2 focus:ring-indigo-500"
                style={{
                  width: "9.5rem",
                  fontSize: "0.85rem",
                  borderRadius: "0.3rem",
                  borderWidth: "1.5px",
                }}
              />
              <button>
                <CiPaperplane className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
              </button>
            </div>
          </form>
        </div>

        {/* 2nd Column */}
        <div className="flex-1 min-w-[150px] mb-5 md:mb-0">
          <h3
            className="mb-3"
            style={{
              fontSize: "18px",
            }}
          >
            Support
          </h3>
          <p className="mb-0 text-sm">111 Bijoy sarani, Dhaka,</p>
          <p className="mb-3 text-sm">DH 1515, Bangladesh.</p>
          <p className="mb-3 text-sm">exclusive@gmail.com</p>
          <p className="mb-3 text-sm">+88015-88888-9999</p>
        </div>

        {/* 3rd Column */}
        <div className="flex-1 min-w-[150px] mb-5 md:mb-0">
          <h3
            className="mb-3"
            style={{
              fontSize: "18px",
            }}
          >
            Account
          </h3>
          <p className="mb-3 text-sm">My Account</p>
          <p className="mb-3 text-sm">Login/Register</p>
          <p className="mb-3 text-sm">Cart</p>
          <p className="mb-3 text-sm">Wishlist</p>
          <p className="mb-3 text-sm">Shop</p>
        </div>

        {/* 4th Column */}
        <div className="flex-1 min-w-[150px] mb-5 md:mb-0">
          <h3
            className="mb-3"
            style={{
              fontSize: "18px",
            }}
          >
            Quick Link
          </h3>
          <p className="mb-3 text-sm">Privacy Policy</p>
          <p className="mb-3 text-sm">Terms Of Use</p>
          <p className="mb-3 text-sm">FAQ</p>
          <p className="mb-3 text-sm">Contact</p>
        </div>

        {/* 5th Column */}
        <div className="flex-1 min-w-[150px]">
          <h3
            className="mb-3"
            style={{
              fontSize: "18px",
            }}
          >
            Download App
          </h3>
          <p className="mb-3 text-xs">Save 3$ with App New User Only</p>
          <div className="flex items-center mb-5 space-x-2 mt-2">
            <img src="./images/QR.jpg" alt="QR Code" className="w-16 h-16" />
            <div>
              <div
                className="flex mb-3 items-center space-x-0 border p-1 rounded-md bg-black border-white text-white"
                style={{ height: "36px", width: "40" }}
              >
                <img
                  src="./images/playstore.png"
                  alt="Google Play Store"
                  className="w-5 h-5"
                />
                <div className="text-sm">
                  <p
                    className="text-xs mb-0"
                    style={{
                      fontSize: "6px",
                    }}
                  >
                    GET IT ON
                  </p>
                  <p
                    className="font-bold"
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    Google Play
                  </p>
                </div>
              </div>

              <div
                className="flex items-center space-x-1 border p-1 rounded-md bg-black border-white text-white"
                style={{ height: "36px", width: "40" }}
              >
                <AiFillApple className="w-5 h-5" />
                <div className="text-sm">
                  <p
                    className="text-xs mb-0"
                    style={{
                      fontSize: "6px",
                    }}
                  >
                    Download on the
                  </p>
                  <p
                    className="font-bold"
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    App Store
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <RiFacebookLine className="w-6 h-6 cursor-pointer" />
            <RiTwitterLine className="w-6 h-6 cursor-pointer" />
            <FaInstagram className="w-6 h-6 cursor-pointer" />
            <RiLinkedinLine className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center mt-10 flex items-center justify-center">
        <span className="mr-2">&copy;</span>
        <p className="inline-block">
          {" "}
          Copyright GV3N 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
