import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import CustomerService from "./CustomerService";
import Advert from "./Advert";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Advert />
      <CustomerService />
    </div>
  );
};

export default Home;
