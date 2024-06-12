import React from "react";
import { prod4 } from "../../assets/images";
import Tabs from "../../components/ProductDescripComponents/TabComponent";

const ProductDescription = () => {
  const tabs = [
    {
      label: "Overview",
      content: (
        <div className="space-y-4">
          <p>
            The DualShock 4 Wireless Controller features familiar controls, and
            incorporates several innovative features to usher in a new era of
            interactive experiences. Its definitive analog sticks and trigger
            buttons have been improved for greater feel and sensitivity. A multi
            touch, clickable touch pad expands gameplay possibilities, while the
            incorporated light bar in conjunction with the PlayStation Camera
            allows for easy player identification and screen adjustment when
            playing with friends in the same room. The addition of the Share
            button makes utilizing the social capabilities of the PlayStation 4
            as easy as the push of a button. The DualShock 4 Wireless Controller
            is more than a controller; it's your physical connection to a new
            era of gaming. Pair your controller you will need to pair your
            controller when you use it for the first time and when you use it
            with another PS4 system. Turn on the PS4 system and connect the
            controller with the USB cable to complete device pairing charging
            your controller With the PS4 system turned on or in rest mode,
            connect your controller using the USB cable.
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Buttons</strong>
              <ul className="list-disc pl-5">
                <li>PS button</li>
                <li>Share button</li>
                <li>Options button</li>
                <li>D Pad (up, down, right, left)</li>
                <li>Action buttons (triangle, circle, cross, square)</li>
                <li>Trigger buttons (R1, R2, L1, L2)</li>
                <li>Touch Pad button</li>
              </ul>
            </li>
            <li>
              <strong>Touch Pad</strong>
              <ul className="list-disc pl-5">
                <li>2 point capacitive touch with click mechanism</li>
              </ul>
            </li>
            <li>
              <strong>Motion Sensor</strong>
              <ul className="list-disc pl-5">
                <li>
                  Six axis motion sensing systems (three axis gyroscope, three
                  axis accelerometer)
                </li>
              </ul>
            </li>
            <li>
              <strong>Ports</strong>
              <ul className="list-disc pl-5">
                <li>1 x Micro USB</li>
                <li>1 x Extension port</li>
                <li>1 x Stereo headset jack</li>
              </ul>
            </li>
            <li>
              <strong>Wireless Connectivity</strong>
              <ul className="list-disc pl-5">
                <li>Bluetooth 2.1+EDR</li>
              </ul>
            </li>
          </ul>
          <p>
            Your satisfaction is very important to us. If you are satisfied with
            our products and services, please leave positive feedback and 5
            stars. All items in our store will be tested before packaging.
          </p>
          <p>
            About the size of the goods: Sizes are measured according to the
            product's details page measurement method. Please carefully compare
            the size before purchasing. Since measurement methods and tools
            vary, some errors are normal. If you have questions, please consult
            customer service.
          </p>
          <p>
            Regarding after-sales: We value each evaluation you provide. If you
            are not satisfied with our products or services, please contact our
            customer service first. We will give you a satisfactory solution
            within a reasonable time.
          </p>
          <p>
            Select from a wide range of unique products on Jumia and enjoy
            convenient and secure online shopping, nationwide delivery,
            guaranteed products, and competitive pricing.
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Package Included:</strong>
              <ul className="list-disc pl-5">
                <li>1 x Game Handle ps4 controller</li>
                <li>1 x Charging Cable</li>
                <li>1 x English user manual</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      label: "Specification",
      content: <p>Specifications content goes here...</p>,
    },
    {
      label: "Verified Customer Feedback",
      content: <p>Verified Customer Feedback content goes here...</p>,
    },
  ];
  return (
    <div className="mt-7 px-[5%] ">
      <div className="flex items-center gap-3">
        <div className="bg-primary w-3 h-7 rounded "></div>
        <div className="md:flex justify-between my-3">
          <h1 className="text-md md:text-[16px] md:flex items-center gap-5 text-primary  font-medium">
            <span>Product Description</span>
          </h1>
        </div>
      </div>
      <div className="mt-3 ">
        <Tabs tabs={tabs} />

        <div className="md:flex gap-5 mt-10 md:mt-20">
          <div className="p-2 bg-gray-200 w-full flex justify-center items-center rounded-md">
            <img src={prod4} alt="" className="w-[10rem]" />
          </div>
          <div className="space-y-5 ">
            <h2 className="mt-10 md:mt-0 text-primary font-bold">
              Key Features
            </h2>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur. Est ornare hendrerit donec
              enim pulvinar auctor. Egestas eget bibendum pulvinar enim odio.
              Habitant accumsan vulputate senectus urna amet at tempus ultrices
              eget. Risus dolor praesent nisl sapien vestibulum. Leo vel. Lorem
              ipsum dolor sit amet consectetur. Est ornare hendrerit donec enim
              pulvinar auctor. Egestas eget bibendum pulvinar enim odio.
              Habitant accumsan vulputate senectus urna amet at tempus ultrices
              eget. Risus dolor praesent nisl sapien vestibulum. Leo vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
