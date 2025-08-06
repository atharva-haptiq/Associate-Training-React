import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems || []
  );
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartLength = cartItems.length;
  const wishlistLength = wishlistItems.length;

  return (
    <header className="bg-white/90 shadow-md sticky top-0 z-50 backdrop-blur-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-red-700 tracking-wider font-serif"
        >
          ShoPro
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6 text-base font-medium text-gray-800">
            {["Home", "Products", "About", "Contact"].map((page) => (
              <li key={page}>
                <NavLink
                  to={`/${
                    page.toLowerCase() === "home" ? "" : page.toLowerCase()
                  }`}
                  className={({ isActive }) =>
                    `relative inline-block transition-colors duration-300 hover:text-red-600 
                    after:content-[''] after:block after:h-[2px] after:bg-red-500 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left 
                    ${isActive ? "text-red-600 after:scale-x-100" : ""}`
                  }
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-red-600 transition"
          >
            <IoCartOutline className="w-6 h-6" />
            {cartLength > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 shadow animate-bounce">
                {cartLength}
              </span>
            )}
          </Link>

          <Link
            to="/wishlist"
            className="relative text-gray-700 hover:text-red-600 transition"
          >
            <IoHeartOutline className="w-6 h-6 text-red-400" />
            {wishlistLength > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 shadow animate-bounce">
                {wishlistLength}
              </span>
            )}
          </Link>

          {!isAuthenticated ? (
            <div className="flex gap-1">
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-1.5 bg-red-700 hover:bg-red-600 text-white text-sm rounded-md shadow transition-all"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-4 py-1.5 bg-red-700 hover:bg-red-600 text-white text-sm rounded-md shadow transition-all"
              >
                Register
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">
                {user?.email}
              </span>
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}
                className="text-sm text-red-600 hover:underline transition"
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
