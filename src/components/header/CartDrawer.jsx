import { useState } from "react";
import { FiShoppingCart, FiX, FiTrash2 } from "react-icons/fi";

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
          <img
            src="https://dummyimage.com/60x80/000/fff&text=Img"
            alt="item"
            className="w-14 h-20 object-cover"
          />
          <div className="flex-1">
            <p className="font-medium">Ship Your Idea</p>
            <p className="text-sm text-gray-500">€18.00</p>
            <div className="flex items-center mt-2 gap-2 flex-wrap">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-6 h-6 text-center border rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-6 h-6 text-center border rounded"
              >
                +
              </button>
              <button className="ml-auto text-xs text-blue-500 hover:underline">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Checkout */}
        <div className="p-4 mt-auto border-t">
          <button className="w-full py-3 text-white bg-gray-900 hover:bg-gray-800 rounded text-base sm:text-lg">
            Checkout €{(quantity * 18).toFixed(2)}
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
