import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";
import toast from "react-hot-toast";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white shadow rounded-lg p-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-3 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    {item.category && (
                      <p className="text-sm text-gray-400">{item.category}</p>
                    )}
                    <p className="text-sm text-gray-500">
                      {item.quantity} × ₹{item.price}
                    </p>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 shadow rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax (10%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => {
                dispatch(clearCart());
                toast.success("Order placed Successfully!");
              }}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
