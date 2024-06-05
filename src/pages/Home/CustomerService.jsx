import React from "react";
import FeatureCard from "../../components/FeatureCard";

const CustomerService = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
      <FeatureCard
        imageSrc="./images/Services.png"
        message1="FREE AND FAST DELIVERY"
        message2="Free delivery for all orders over $140"
      />
      <FeatureCard
        imageSrc="./images/Services (1).png"
        message1="24/7 CUSTOMER SERVICE"
        message2="Friendly 24/7 customer support"
      />
      <FeatureCard
        imageSrc="./images/Services (2).png"
        message1="MONEY BACK GUARANTEE"
        message2="We return money within 30 days"
      />
    </div>
  );
};
export default CustomerService;
