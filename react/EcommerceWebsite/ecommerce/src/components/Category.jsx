import React from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

// React Icons
import { FaBath, FaTshirt, FaShoppingBag, FaSocks } from "react-icons/fa";
import { GiClothes, GiSunglasses } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";

const Category = () => {
  const navigate = useNavigate();
  const { data } = getData();

  // Extract unique categories
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property]);
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  // Category to Icon mapping
  const categoryIcons = {
    "Personal Care": (
      <MdOutlineCleaningServices className="text-cyan-500 text-2xl" />
    ),
    Accessories: <GiSunglasses className="text-cyan-500 text-2xl" />,
    Coats: <GiClothes className="text-cyan-500 text-2xl" />,
    "Sweat Pants": <FaSocks className="text-cyan-500 text-2xl" />,
    Clothing: <FaTshirt className="text-cyan-500 text-2xl" />,
    "Bath Items": <FaBath className="text-cyan-500 text-2xl" />,
    Default: <FaShoppingBag className="text-cyan-500 text-2xl" />,
  };

  return (
    <div className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Shop by Category
        </h2>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {categoryOnlyData?.map((item, index) => {
            const Icon = categoryIcons[item] || categoryIcons["Default"];
            return (
              <button className="flex items-center gap-3 px-5 py-3 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all duration-200">
                {Icon}
                <span className="text-gray-800 font-medium">{item}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
