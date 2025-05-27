import React, { useState } from "react";

function Checkout() {
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("cod");
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
    phone: "",
    notes: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col items-center py-10 px-2">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-10">
        {/* Left: Form */}
        <div className="md:w-2/3 w-full flex flex-col">
          <h1 className="text-3xl font-bold mb-8 text-black-800">Checkout</h1>
          <form
            className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInput}
              placeholder="Full Name"
              className="border-2 border-blue-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-400 transition"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInput}
              placeholder="Email"
              className="border-2 border-blue-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-400 transition"
              required
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleInput}
              placeholder="Address"
              className="border-2 border-blue-200 rounded-lg px-4 py-3 w-full sm:col-span-2 focus:outline-none focus:border-blue-400 transition"
              required
            />
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleInput}
              placeholder="City"
              className="border-2 border-blue-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-400 transition"
              required
            />
            <input
              type="text"
              name="postal"
              value={form.postal}
              onChange={handleInput}
              placeholder="Postal Code"
              className="border-2 border-blue-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-400 transition"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleInput}
              placeholder="Phone Number"
              className="border-2 border-blue-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-400 transition"
              required
            />
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleInput}
              placeholder="Order Notes (optional)"
              className="border-2 border-blue-200 rounded-lg px-4 py-3 w-full sm:col-span-2 focus:outline-none focus:border-blue-400 transition resize-none"
              rows={3}
            />
            <button
              type="submit"
              className="w-1/2 sm:col-span-2 py-3 text-white bg-gradient-to-r from-purple-700 to-blue-900 hover:from-blue-800 hover:to-blue-600 rounded-lg text-lg font-semibold shadow-md transition"
            >
              Place Order Rs:{(quantity * 1000).toFixed(2)}
            </button>
          </form>
        </div>
        {/* Right: Order Summary */}
        <div className="md:w-1/3 w-full mt-10 md:mt-0 flex flex-col bg-blue-50 rounded-xl p-6 shadow-inner">
          <h2 className="text-xl font-bold mb-4 text-black-800">
            Order Summary
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/vite.svg"
              alt="Product"
              className="w-16 h-16 rounded-4xl object-cover"
            />
            <div>
              <div className="font-semibold text-gray-800">Stylish T-Shirt</div>
              <div className="text-sm text-gray-500">Size: M | Color: Blue</div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Price</span>
            <span>Rs: 1000</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Quantity</span>
            <div className="flex items-center">
              <button
                type="button"
                className="px-2 py-1 bg-gray-300 rounded-4xl hover:bg-gray-500 font-bold"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="px-4 font-semibold">{quantity}</span>
              <button
                type="button"
                className="px-2 py-1 bg-gray-300 rounded-4xl hover:bg-gray-500 font-bold"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Shipping</span>
            <span>Rs: 500</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>Tax</span>
            <span>Rs: 200</span>
          </div>
          <div className="flex items-center justify-between font-bold border-t pt-3 mt-3 text-lg">
            <span>Total</span>
            <span>Rs: {(quantity * 1000 + 500 + 200).toFixed(2)}</span>
          </div>
          {/* Payment Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-3 text-black-800">
              Payment Method
            </h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={handlePayment}
                  className="mr-2 accent-blue-600"
                />
                <span className="text-gray-700">Cash on Delivery</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={payment === "card"}
                  onChange={handlePayment}
                  className="mr-2 accent-blue-600"
                />
                <span className="text-gray-700">Credit / Debit Card</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={payment === "upi"}
                  onChange={handlePayment}
                  className="mr-2 accent-blue-600"
                />
                <span className="text-gray-700">Easypaisa</span>
              </label>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-600">
            <span>100% Secure Payment | 7-Day Return Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
