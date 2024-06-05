import React from "react";
import AdvertCard from "../../components/AdvertCard";

const Advert = () => {
  return (
    <div className="  bg-white md:mx-32 mb-16 md:mb-28 md:ml-16 md:mr-10">
      <AdvertCard
        image1="./images/advert(1).png"
        image2="./images/advert(2).png"
        image3="./images/advert(3).png"
        image4="./images/advert(4).png"
      />
    </div>
  );
};

export default Advert;
