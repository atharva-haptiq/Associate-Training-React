import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataContext } from "../context/DataContext";
import { addToCart } from "../store/cartSlice";
import toast from "../../node_modules/react-hot-toast/src/index";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = data?.find((item) => item.id.toString() === id);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error("Please login to add products to cart!");
      navigate("/login");
      return;
    }
    dispatch(addToCart(product));
    toast.success("Added to cart!");
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      <div className="flex justify-center items-center">
        <img
          src={product.image || "https://via.placeholder.com/400"}
          alt={product.title}
          className="rounded-lg shadow-md w-full max-w-md object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-lg text-gray-600">Brand: {product.brand}</p>
        <p className="text-lg text-gray-600">Category: {product.category}</p>
        <p className="text-2xl font-semibold text-red-600">${product.price}</p>

        <p className="text-gray-700 leading-relaxed">
          {product.description || "No description available."}
        </p>

        <div>
          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
