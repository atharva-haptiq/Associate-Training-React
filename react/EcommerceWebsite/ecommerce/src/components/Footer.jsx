import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <Link to="/" className="block mb-3">
            <h1 className="text-red-500 text-4xl font-extrabold tracking-wide">
              ShoPro
            </h1>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Powering your world with the best in electronics.
          </p>
          <div className="text-sm mt-4 space-y-1 text-gray-400">
            <p>123 Electronics St, Style City, NY</p>
            <p>support@shoppro.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Customer Service Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Customer Service
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {[
              "Contact Us",
              "Shipping & Returns",
              "FAQs",
              "Order Tracking",
              "Size Guide",
            ].map((item, idx) => (
              <li
                key={idx}
                className="hover:text-red-500 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <p className="text-sm text-gray-400 mb-4">
            Stay connected on social media
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
            <FaTwitterSquare className="hover:text-sky-500 transition-colors duration-300 cursor-pointer" />
            <FaPinterest className="hover:text-red-500 transition-colors duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Stay in the Loop
          </h3>
          <p className="text-sm text-gray-400">
            Subscribe for exclusive offers, giveaways, and product updates.
          </p>
          <form className="mt-5 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-2 rounded-md sm:rounded-l-md sm:rounded-r-none bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-red-500 font-semibold">ShoPro</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
