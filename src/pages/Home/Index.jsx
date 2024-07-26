import React from "react";
import { categoryImages, todayProducts, products, newArrival, exploreProducts } from "../../constants/constants.js";
import NewAdvert from "../../components/NewAdvert.jsx";
import BeautySales from "../../components/BeautySales";
import TimerBanner from "../../components/TimerBanner";
import "../../index.css";
import ProductsCards from "../../components/productsCards.jsx";
import IndexCarousel from "../../components/IndexCarousel.jsx";
import CategoryCard from "../../components/CategoryCard.jsx";
import Hero from "../../components/Hero.jsx";
import SectionHeaders from "../../components/SectionHeaders.jsx";
import FeatureCard from "../../components/FeatureCard.jsx";

const initialTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

const Home = () => {
  const flashResponsive = [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <>
      <Hero />
      <div className="mt-8 px-6 md:px-[150px]">
        <IndexCarousel
          headerTitle="Categories"
          headerSubtitle="Browse By Category"
          showCountDown={false}
          countDownTime={initialTime}
          slidesToShow={6}
          autoplaySpeed={2000}
          id="slider"
        >
          {categoryImages.map((category) => (
            <div key={category.id} >
              <CategoryCard image={category.image} name={category.name} />
            </div>
          ))}
        </IndexCarousel>

      </div>
      
      <div className="mt-8 px-6 md:px-0 md:pl-[150px]">
        <IndexCarousel
          headerTitle="Today’s"
          headerSubtitle="Flash Sales"
          showCountDown={true}
          countDownTime={initialTime}
          slidesToShow={4.5}
          autoplaySpeed={2000}
          id="slider"
          responsive={flashResponsive}
          padding="150px"
        >
          {Array.isArray(todayProducts) && todayProducts.map(product => (
            <ProductsCards
              key={product.id}
              id={product.id}
              imageSrc={product.image}
              title={product.prodName}
              price={product.price}
              originalPrice={product.discountPrice}
              discount={product.discountRate}
              rating={product.starsNo}
              reviews={product.reviewsNo}
              prodStatus={product.prodStatus}
              availColors={product.availColors}
            />
          ))}
        </IndexCarousel>
      </div>
      <div>
        <div className="h-[1px] bg-[#CDC1C1] w-full px-5 mt-[84px]"></div>
        <TimerBanner />
        <NewAdvert />
      </div>

      <div className="px-4 md:px-[150px]">
        <SectionHeaders
          title="Best Selling Products"
          subtitle="This Month"
          buttonText="View All"
        />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {products.map((product, index) => (
              <ProductsCards
                key={product.id}
                id={product.id}
                imageSrc={product.image}
                title={product.prodName}
                price={product.price}
                originalPrice={product.discountPrice}
                discount={product.discountRate}
                rating={product.starsNo}
                reviews={product.reviewsNo}
                prodStatus={product.prodStatus}
                margin="0px"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#CDC1C1] w-full px-5 mt-[84px]"></div>
      <NewAdvert />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[30px] px-4 md:px-[150px]">
        {newArrival.map((product, index) => (
          <ProductsCards
            key={product.id}
            id={product.id}
            imageSrc={product.image}
            title={product.prodName}
            price={product.price}
            originalPrice={product.discountPrice}
            discount={product.discountRate}
            rating={product.starsNo}
            reviews={product.reviewsNo}
            prodStatus={product.prodStatus}
            margin="0px"
          />
        ))}
      </div>
      <div className="px-4 md:px-[150px] mt-[100px]">
        <BeautySales />
      </div>
      <div className="px-4 md:px-[150px] mt-[120px]">
        <SectionHeaders
          title="Our Products"
          subtitle="Explore Our Products"
        />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[30px]">
            {exploreProducts.map((product, index) => (
              <ProductsCards
                key={product.id}
                id={product.id}
                imageSrc={product.image}
                title={product.prodName}
                price={product.price}
                originalPrice={product.discountPrice}
                discount={product.discountRate}
                rating={product.starsNo}
                reviews={product.reviewsNo}
                prodStatus={product.prodStatus}
                margin="0px"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[100px] px-4 md:px-[150px]">
        <BeautySales />
      </div>
      <div>
        <NewAdvert />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        <FeatureCard
          imageSrc="./images/Services.png"
          message1="FREE AND FAST DELIVERY"
          message2="Free delivery for all orders over $140"
        />
        <FeatureCard
          imageSrc="./images/Services (1).png"
          message1="24/7 CUSTOMER SERVICE"
          message2="Friendly 24/7 customer support"
        />
        <FeatureCard
          imageSrc="./images/Services (2).png"
          message1="MONEY BACK GUARANTEE"
          message2="We return money within 30 days"
        />
      </div> 
    </>
  );
};

export default Home;
