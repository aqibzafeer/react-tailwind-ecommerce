const FeaturedProducts = () => (
  <section className="p-4 sm:p-6 max-w-7xl mx-auto">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
      Featured Products
    </h2>
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
          <h3 className="font-semibold text-base sm:text-lg">Product Name</h3>
          <p className="text-gray-600 text-sm sm:text-base">$99.00</p>
          <button className="mt-2 w-full bg-purple-600 text-white py-1.5 rounded hover:bg-purple-700 text-sm sm:text-base">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProducts;
