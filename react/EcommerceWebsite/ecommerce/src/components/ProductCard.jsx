import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../store/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("Please log in to add to cart.");
      navigate("/login");
      return;
    }

    dispatch(addToCart(product));
    alert("Added to cart!");
  };

  const handleAddToWishList = () => {
    if (!isAuthenticated) {
      alert("Please log in to add to wishlist.");
      navigate("/login");
      return;
    }

    dispatch(addToWishlist(product));
    alert("Added to wishlist!");
  };

  return (
    <div className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] bg-white">
      <div
        className="bg-gray-100 aspect-square overflow-hidden cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="px-4 py-3">
        <h1 className="line-clamp-2 text-gray-800 font-semibold text-sm mb-1 min-h-[3.5rem]">
          {product.title}
        </h1>
        <p className="text-red-500 text-lg font-bold mb-3">${product.price}</p>

        <div className="flex gap-1">
          <button
            onClick={handleAddToCart}
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 font-medium transition"
          >
            <IoCartOutline className="w-5 h-5" />
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md flex items-center justify-center gap-2 font-medium transition"
            onClick={handleAddToWishList}
          >
            <IoHeartOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
