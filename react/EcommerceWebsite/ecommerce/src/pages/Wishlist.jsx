import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice"; // You need this action
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems || []
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center"> Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-sm hover:shadow-md p-4 bg-white flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 object-contain mb-4 cursor-pointer"
                onClick={() => navigate(`/products/${item.id}`)}
              />

              <h3 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-red-500 font-bold mb-2">${item.price}</p>

              <button
                onClick={() => {
                  dispatch(removeFromWishlist(item.id));
                  alert("Removed from wishList");
                }}
                className="mt-auto py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
