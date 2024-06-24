import React from "react";
import SellersBalance from "../../components/SellersBalance";
import SellersDashboardList from "../../components/SellersDashboardList";
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
      <SellersPageNav />
      <div className="p-4 md:mt-20 mt-40 md:mx-10">
        <h1 className="text-2xl ml-5 font-bold mb-4">Dashboard</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <SellersBalance />
          <SellersDashboardList items={items} />
        </div>
      </div>
    </>
  );
};

export default SellersDashboard;
