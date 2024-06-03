import React from "react";
import Header from "./Header";
import Categories from "./Categories";
import CustomerService from "./CustomerService";
import Advert from "./Advert";
import NewAdvert from "./NewAdvert";
import TodayProduct from "./TodayProduct";
import HotSalesBanner from "./HotSalesBanner";
import BeautySales from "../../components/BeautySales";
import ExploreProduct from "../../components/ExploreProduct";
import ExploreProduct1 from "../../components/ExploreProduct1";
import NewArrival from "../../components/NewArrival";
import BlackFriday from "../../components/BlackFriday";
import TimerBanner from "../../components/TimerBanner";
import ExploreProduct from "../components/ExploreProduct";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <TodayProduct />
      <HotSalesBanner />
      <TimerBanner />
      <NewAdvert />
      <BlackFriday />
      <ExploreProduct1 />
      <NewAdvert />
      <NewArrival />
      <ExploreProduct />
      <BeautySales />

      <ExploreProduct />
      <Advert />
      <CustomerService />
    </div>
  );
};

export default Home;
