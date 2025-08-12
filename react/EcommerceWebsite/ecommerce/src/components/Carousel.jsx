import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]); // Added dependency to follow React best practices

  // Custom Previous Arrow for Carousel
  const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
      onClick={onClick}
      className={`arrow ${className}`}
      style={{ zIndex: 3 }}
    >
      <AiOutlineArrowLeft
        className="arrows"
        style={{
          ...style,
          display: "block",
          borderRadius: "50px",
          background: "#f53347",
          color: "white",
          position: "absolute",
          padding: "2px",
          left: "50px",
        }}
      />
    </div>
  );

  // Custom Next Arrow for Carousel
  const SampleNextArrow = ({ className, style, onClick }) => (
    <div onClick={onClick} className={`arrow ${className}`}>
      <AiOutlineArrowRight
        className="arrows"
        style={{
          ...style,
          display: "block",
          borderRadius: "50px",
          background: "#f53347",
          color: "white",
          position: "absolute",
          padding: "2px",
          right: "50px",
        }}
      />
    </div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {data?.slice(0, 2).map((item, index) => (
          <div key={index} className="bg-black bg-opacity-90">
            <div className="flex flex-col md:flex-row justify-center items-center px-6 py-16 md:py-32 gap-12 relative">
              {/* Text Section */}
              <div className="text-center md:text-left max-w-md backdrop-blur-sm bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
                <h3 className="text-pink-500 text-sm font-semibold tracking-wider mb-2 uppercase">
                  Premium Tech
                </h3>
                <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
                  {item.title}
                </h1>
                <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-4">
                  {item.description}
                </p>
                <button className="bg-pink-600 hover:bg-pink-700 transition px-6 py-2 text-white rounded-full shadow-md hover:shadow-lg">
                  Shop Now
                </button>
              </div>

              {/* Image Section */}
              <div className="max-w-[400px] md:max-w-[500px] transition-transform duration-500 hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
