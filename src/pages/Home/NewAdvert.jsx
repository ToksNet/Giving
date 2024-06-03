import React from "react";
import AdvertCard from "../../components/NewAdvertCard";

const NewAdvert = () => {
  return (
    <div className=" min-h-screen w-full bg-white ml-[55px]">
      <AdvertCard
        image1="./images/advert(1).png"
        image2="./images/advert(2).png"
        image3="./images/advert(3).png"
        image4="./images/advert(4).png"
      />
    </div>
  );
};

export default NewAdvert;
