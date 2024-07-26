import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CountDown from "./CountDown";

const IndexCarousel = ({
    slidesToShow = 4,
    slidesToScroll = 1,
    speed = 400,
    autoplay = false,
    autoplaySpeed = 3000,
    dots = false,
    infinite = true,
    touchMove = true,
    responsive = [],
    children,
    headerTitle = "Today’s",
    headerSubtitle = "Flash Sales",
    showCountDown = false,
    countDownTime,
    rtl = true,
    padding = ''
}) => {
    const sliderRef = useRef(null);

    const defaultResponsive = [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 440,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    const settings = {
        dots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        touchMove,
        autoplay,
        autoplaySpeed,
        responsive: responsive.length ? responsive : defaultResponsive,
        rtl
    };

    return (
        <div>
            <div className="flex items-center gap-3 ">
                <div className="bg-primary w-4 h-7 rounded"></div>
                <h2 className="font-semibold md:text-[16px] text-primary">{headerTitle}</h2>
            </div>
            <div className="flex items-end justify-between my-3">
                <h1 className="text-md md:text-[24px] font-semibold md:flex items-end gap-5">
                    <span>{headerSubtitle}</span>
                    {showCountDown && countDownTime && <CountDown initialTime={countDownTime} />}
                </h1>
                <div

                    className="hidden md:flex gap-1"
                    style={{ paddingRight: padding }}
                >
                    <button
                        className="bg-gray-200 rounded-full p-2 w-10 h-10"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <ArrowBackIcon />
                    </button>
                    <button
                        className="bg-gray-200 rounded-full p-2 w-10 h-10"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <ArrowForwardIcon />
                    </button>
                </div>
                <div

                    className="flex gap-1 md:hidden"
                >
                    <button
                        className="bg-gray-200 rounded-full p-2 w-10 h-10"
                        onClick={() => sliderRef.current.slickPrev()}
                    >
                        <ArrowBackIcon />
                    </button>
                    <button
                        className="bg-gray-200 rounded-full p-2 w-10 h-10"
                        onClick={() => sliderRef.current.slickNext()}
                    >
                        <ArrowForwardIcon />
                    </button>
                </div>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {children}
            </Slider>
        </div>
    );
};

export default IndexCarousel;
