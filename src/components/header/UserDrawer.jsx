// import { FiUser } from "react-icons/fi";
// const UserDrawer = () => {
//   return (
//     <div className="flex items-center justify-end p-4">
//       <FiUser className="text-2xl text-gray-700 hover:text-purple-600 cursor-pointer" />
//     </div>
//   );
// };

// export default UserDrawer;

import { FiUser } from "react-icons/fi";
import { useState } from "react";
import { FiShoppingCart, FiX, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const UserDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <>
      <div className="relative">
        <FiUser
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
      {/* User Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] sm:w-[400px] bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center justify-center`}
        style={{ maxWidth: "100vw" }}
      >
        {/* Header */}
        <div className="absolute top-4 right-4">
          <FiX onClick={toggleDrawer} className="text-xl cursor-pointer" />
        </div>

        {/* Content Centered */}
        <div className="flex flex-col items-center justify-center w-full px-8">
          {/* User Image */}
          <img
            src="https://cdn1.iconfinder.com/data/icons/elevator/154/elevator-user-man-ui-round-login-512.png"
            alt="User"
            className="w-24 h-24 rounded-full mb-6 object-cover"
          />

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Username"
            className="text-center w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-center w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* Login Button */}
          <Link to="/dashboard" className="w-full">
            <button
              className="w-full bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDrawer;
