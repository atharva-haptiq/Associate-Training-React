import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";
import toast from "../../node_modules/react-hot-toast/src/index";
import { addToCheckout } from "../store/checkoutSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center border rounded p-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />

              <div className="flex-1">
                <h4 className="text-gray-800 text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="text-gray-600">Brand: {item.brand}</p>
                <p className="text-gray-600">Category: {item.category}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>

              <button
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                  toast.success("Removed from cart!");
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 mt-4">
            <h3 className="text-xl font-bold">Total:</h3>
            <span className="text-xl font-semibold text-green-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="text-center flex gap-64">
            <button
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <button
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              onClick={() => {
                dispatch(addToCheckout());
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
