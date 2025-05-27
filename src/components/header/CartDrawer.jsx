import { useState } from "react";
import { FiShoppingCart, FiX, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <>
      {/* Shopping Cart Icon Button */}
      <div className="relative">
        <FiShoppingCart
          onClick={toggleDrawer}
          className="text-xl text-gray-700 hover:text-purple-600 cursor-pointer"
        />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleDrawer}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] sm:w-[400px] bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
        style={{ maxWidth: "100vw" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <FiX onClick={toggleDrawer} className="text-xl cursor-pointer" />
          <span className="text-lg font-semibold">Cart (1)</span>
          <FiTrash2 className="text-gray-600" />
        </div>

        {/* Item */}
        <div className="flex items-start gap-4 p-4 border-b">
          <img src="vite.svg" alt="item" className="w-14 h-20 object-cover" />
          <div className="flex-1">
            <p className="font-medium">Stylish T-Shirt</p>
            <p className="text-sm text-gray-500">Rs:1000</p>
            <div className="flex items-center mt-2 gap-2 flex-wrap">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-2 py-1 bg-gray-300 rounded-4xl hover:bg-gray-500 font-bold"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-2 py-1 bg-gray-300 rounded-4xl hover:bg-gray-500 font-bold"
              >
                +
              </button>
              <button className="ml-auto text-xs text-gray-500 hover:underline">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Checkout */}
        <div className="p-4 mt-auto border-t">
          <Link to="/checkout" className="block px-4 py-2 hover:bg-gray-100">
            <button
              className="w-full py-3 text-white bg-gray-900 hover:bg-gray-800 rounded text-base sm:text-lg"
              onClick={() => setIsOpen(false)}
            >
              Checkout Rs:{(quantity * 1000).toFixed(2)}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
