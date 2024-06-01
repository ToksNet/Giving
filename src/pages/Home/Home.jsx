import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import CustomerService from "./CustomerService";
import Advert from "./Advert";
import BeautySales from "../../components/BeautySales";
import ExploreProduct from "../components/ExploreProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <ExploreProduct />
      <BeautySales />
      <Advert />
      <CustomerService />
    </div>
  );
};

export default Home;
