import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import CustomerService from "./CustomerService";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <CustomerService />
    </div>
  );
};

export default Home;
