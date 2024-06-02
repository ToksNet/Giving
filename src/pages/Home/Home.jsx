import React from "react";
import Header from "./Header";
// import Categories from "./Categories";
import CustomerService from "./CustomerService";
import Advert from "./Advert";
import NewAdvert from "./NewAdvert";
import BeautySales from "../../components/BeautySales";
import ExploreProduct from "../../components/ExploreProduct";
import ExploreProduct1 from "../../components/ExploreProduct1";
import BlackFriday from "../../components/BlackFriday";
import TimerBanner from "../../components/TimerBanner";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Categories /> */}
      <TimerBanner />
      <BlackFriday />
      <NewAdvert />
      <ExploreProduct1 />
      <NewAdvert />
      <ExploreProduct />
      <BeautySales />
      <ExploreProduct />
      <BeautySales />
      <Advert />
      <CustomerService />
    </div>
  );
};

export default Home;
