import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="border p-4 rounded shadow text-center">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
