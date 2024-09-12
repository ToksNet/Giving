import React from "react";
import SellersBalance from "../../components/SellersBalance";
import SellersPageNav from "../../components/SellersPageNav";

const items = [
  {
    image: "../images/Vector.png",
    title: "Orders",
    description:
      "Create new order, Track, return, cancel and order, download invoice or buy again",
  },
  {
    image: "../images/transaction-minus.png",
    title: "Transactions",
    description: "View all transactions, manage payment methods and settings",
  },
  {
    image: "/images/item3.png",
    title: "Your Addresses",
    description: "Edit, remove and set default address",
  },
  {
    image: "/images/item4.png",
    title: "Your Lists",
    description: "View, modify, and share your lists, or create new ones.",
  },
  {
    image: "/images/item5.png",
    title: "Store Analytics",
    description: "View all the store analysis.",
  },
  {
    image: "/images/item6.png",
    title: "Products",
    description: "View all the products",
  },
  {
    image: "/images/item7.png",
    title: "Profile",
    description:
      "Manage, add, or remove user profiles for personalized experiences.",
  },
  {
    image: "../images/messages.png",
    title: "Messages",
    description: "View all messages",
  },
];

const SellersDashboard = () => {
  return (
    <>
      <div className="p-4 md:mt-10 mt-40 md:px-[88px] ">
        <h1 className="text-2xl  font-bold mb-4">Dashboard</h1>
        <div className="flex flex-col lg:flex-row gap-[56px]">
          <div className="lg:w-2/3 ">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-y-[54px] gap-x-[38px]">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#CCCCCC] md:h-[100px] rounded-lg p-2 flex items-center shadow-md"
                >
                  <div className="bg-[#FAE3E3] flex items-center justify-center rounded-full flex-shrink-0 w-10 h-10 mr-3">

                    <img
                      src={item.image}
                      alt={item.title}
                      className=" w-5 h-5 "
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-[10px] text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SellersBalance />
        </div>
      </div>
    </>
  );
};

export default SellersDashboard;
