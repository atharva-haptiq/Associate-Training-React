import React from "react";
import { getData } from "../context/DataContext";

import { FaBath, FaTshirt, FaShoppingBag, FaSocks } from "react-icons/fa";
import { GiClothes, GiSunglasses } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";

const Category = () => {
  const { data } = getData();

  // Returns unique values from a specific property in data
  const getUniqueValues = (items, property) => {
    const values = items?.map((item) => item[property]);
    return [...new Set(values)];
  };

  const categoryOnlyData = getUniqueValues(data, "category");

  // Category-to-Icon mapping
  const categoryIcons = {
    "Personal Care": (
      <MdOutlineCleaningServices className="text-cyan-500 text-3xl" />
    ),
    Accessories: <GiSunglasses className="text-cyan-500 text-3xl" />,
    Coats: <GiClothes className="text-cyan-500 text-3xl" />,
    "Sweat Pants": <FaSocks className="text-cyan-500 text-3xl" />,
    Clothing: <FaTshirt className="text-cyan-500 text-3xl" />,
    "Bath Items": <FaBath className="text-cyan-500 text-3xl" />,
    Default: <FaShoppingBag className="text-cyan-500 text-3xl" />,
  };

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categoryOnlyData?.map((category, index) => {
            const Icon = categoryIcons[category] || categoryIcons.Default;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 p-5 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-all duration-200"
              >
                {Icon}
                <span className="text-gray-800 font-medium text-sm md:text-base text-center">
                  {category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
