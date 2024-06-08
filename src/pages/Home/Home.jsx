import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import TodayProduct from "./TodayProduct";
import CustomerService from "./CustomerService";
import Advert from "./Advert";
import NewAdvert from "./NewAdvert";
// import HotSalesBanner from "./HotSalesBanner";
import BeautySales from "../../components/BeautySales";
import ExploreProduct from "../../components/ExploreProduct";
import ExploreProduct1 from "../../components/ExploreProduct1";
import NewArrival from "../../components/NewArrival";
import BlackFriday from "../../components/BlackFriday";
import TimerBanner from "../../components/TimerBanner";
// import ExploreProduct from "../components/ExploreProduct";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Categories />
      <TodayProduct />
      <TimerBanner />
      <NewAdvert />
      <BlackFriday />
      <ExploreProduct1 />
      <NewAdvert />
      <NewArrival />
      <BeautySales />
      <ExploreProduct />
      <Advert />
      <CustomerService />
    </div>
  );
};

export default Home;
