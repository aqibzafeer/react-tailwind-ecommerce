// src/components/MobileHeader.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Top bar with hamburger and logo */}
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <button
            className="text-2xl text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="bg-white shadow-md px-4 py-4">
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
            {["Home", "Products", "Categories", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            <div className="flex items-center space-x-4 mt-2">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="pl-10 pr-4 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
                <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
              </div>
              <FiUser className="text-xl text-gray-700 hover:text-purple-600 cursor-pointer" />
              <FiShoppingCart className="text-xl text-gray-700 hover:text-purple-600 cursor-pointer" />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
