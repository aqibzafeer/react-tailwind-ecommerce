// src/components/DesktopHeader.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUser } from "react-icons/fi";
import CartDrawer from "./CartDrawer";

const DesktopHeader = () => {
  return (
    <div className="hidden md:flex justify-between items-center py-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Navigation */}
      <nav className="space-x-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Search + Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products..."
            className="pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>
        <FiUser className="text-xl text-gray-700 hover:text-purple-600 cursor-pointer" />
        <CartDrawer />
      </div>
    </div>
  );
};

export default DesktopHeader;
