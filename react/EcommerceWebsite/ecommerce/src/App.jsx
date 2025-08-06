import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import axios from "axios";
import Footer from "./components/Footer";
import Products from "./pages/Product";
import ProductDetail from "./components/ProductDetail";
import Wishlist from "./pages/Wishlist";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
// import { useDispatch } from "react-redux";
// import { loadUserFromStorage } from "./store/authSlice";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUserFromStorage());
  // }, [dispatch]);

  const [location, setLocation] = useState();
  const [openDropdown, setOpendDropdown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude, "-----------");

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        // console.log(location);
        setLocation(exactLocation);
        setOpendDropdown(false);
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpendDropdown={setOpendDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
