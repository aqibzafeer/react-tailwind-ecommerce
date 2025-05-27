// src/pages/Home.jsx

function Home() {
  return (
    <div>
      {/* Top Banner Section */}
      <section
        className="bg-cover bg-center h-[80vh] sm:h-[50vh] md:h-[80vh] flex items-left justify-left"
        style={{ backgroundImage: "url(/public/banner-img.jpeg)" }}
      >
        <div className="p-4 sm:p-6 rounded w-[90vw] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
            Up to 10% off!{" "}
          </h1>
          <p className="mb-2 sm:mb-4 text-sm sm:text-base">
            Don't miss out on some special items at extraordinary discounted
            prices. For a limited time!
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 rounded text-white font-semibold text-sm sm:text-base">
            Shop Now
          </button>
        </div>
      </section>
      {/* Shop by Category */}
      <section className="p-4 sm:p-6 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            "Electronics",
            "Fashion",
            "Home & Garden",
            "Toys",
            "Books",
            "Sports",
          ].map((cat) => (
            <div
              key={cat}
              className="bg-gray-100 p-3 sm:p-6 text-center rounded shadow hover:shadow-md cursor-pointer w-full"
              style={{ height: "300px" }}
            >
              <h3 className="font-semibold text-base sm:text-lg">{cat}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* /* Feature Section */}
      <section className="p-4 sm:p-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <div className="flex justify-center mb-1 sm:mb-2">
              <img
                src="/public/box.svg"
                alt="Free Shipping"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <h3 className="font-bold text-base sm:text-lg">Free Shipping</h3>
            <p className="text-xs sm:text-sm">
              Free shipping on order over €50
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-1 sm:mb-2">
              {/* Money Back Icon */}
              <img
                src="/public/moneyback.svg"
                alt="Free Shipping"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <h3 className="font-bold text-base sm:text-lg">Money Back</h3>
            <p className="text-xs sm:text-sm">30 days money back guarantee</p>
          </div>
          <div>
            <div className="flex justify-center mb-1 sm:mb-2">
              {/* Secure Payment Icon */}

              <img
                src="/public/secure.svg"
                alt="Free Shipping"
                className="w-20 h-20 sm:w-10 sm:h-10"
              />
            </div>
            <h3 className="font-bold text-base sm:text-lg">Secure Payment</h3>
            <p className="text-xs sm:text-sm">100% Payment Secure</p>
          </div>
          <div>
            <div className="flex justify-center mb-1 sm:mb-2">
              {/* Support 24/7 Icon */}
              <img
                src="/public/support.svg"
                alt="Free Shipping"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <h3 className="font-bold text-base sm:text-lg">Support 24/7</h3>
            <p className="text-xs sm:text-sm">24/7 Online support</p>
          </div>
        </div>
      </section>
      <section className="p-4 sm:p-6 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Sample product cards (You can map actual data here) */}
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="border p-3 sm:p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src="/product-placeholder.png"
                alt="Product"
                className="w-full h-32 sm:h-40 object-cover mb-2 rounded"
              />
              <h3 className="font-semibold text-base sm:text-lg">
                Product Name
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">$99.00</p>
              <button className="mt-2 w-full bg-purple-600 text-white py-1.5 rounded hover:bg-purple-700 text-sm sm:text-base">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
