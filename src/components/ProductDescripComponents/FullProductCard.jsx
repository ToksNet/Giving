import React, { useState } from "react";
import { Prod1 } from "../../constants/constants";
import Star from "../Star";

const FullProductCard = () => {
    const [selectedColor, setSelectedColor] = useState(null);
  const {
    id,
    image,
    otherImages,
    prodName,
    price,
    discountPrice,
    reviewsNo,
    starsNo,
    discountRate,
    availColors,
    availSizes,
    shortDescription,
    instock,
  } = Prod1[0];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };  
  return (
    <div className="flex mt-">
      <div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div></div>
      </div>
      <div className=" space-y-2">
        <h2 className="font-bold">{prodName} </h2>
        <div className="flex gap-2 items-center">
          <Star starsNo={starsNo} />
          <span className="text-sm">({reviewsNo} Reviews )</span>{" "}
          <span className="text-gray-400">|</span>{" "}
          <span style={{ color: instock ? "orange" : "red" }}>
            {instock ? "In stock" : "Out of stock"}
          </span>
        </div>
        <h2 className="font-semibold ">${discountPrice}</h2>
        <div>{shortDescription}</div>

        <hr className="border-gray-400"/>

      <div className="flex">
        <p>Colors:</p>
        <div className="flex gap-2">
            {availColors.map((color) => (
              <label key={color.id} className="relative">
                <input
                  type="radio"
                  name="color"
                  value={color.name}
                  className="appearance-none"
                  onChange={() => handleColorChange(color.code)}
                />
                <span
                  className={`block w-6 h-6 rounded-full border-2 p-0.5 ${selectedColor === color.code ? "border-black" : "border-transparent"}`}
                >
                  <span
                    className="block w-full h-full rounded-full"
                    style={{ backgroundColor: color.code }}
                  ></span>
                </span>
              </label>
            ))}
          </div>
      </div>
      </div>
    </div>
  );
};

export default FullProductCard;
