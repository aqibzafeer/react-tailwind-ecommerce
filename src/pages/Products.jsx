import { useState } from "react";

const dummyProducts = [
  {
    id: 1,
    name: "Ship Your Idea",
    price: 18,
    category: "Posters",
    size: "Large",
    image: "https://via.placeholder.com/200x250?text=Ship+Your+Idea",
  },
  {
    id: 2,
    name: "Patient Ninja",
    price: 36,
    category: "Hoodies",
    size: "Medium",
    image: "https://via.placeholder.com/200x250?text=Patient+Ninja",
  },
  {
    id: 3,
    name: "Flying Ninja",
    price: 12.5,
    category: "Posters",
    size: "Small",
    image: "https://via.placeholder.com/200x250?text=Flying+Ninja",
  },
  {
    id: 4,
    name: "Woo Album #4",
    price: 9,
    category: "Albums",
    size: "Medium",
    image: "https://via.placeholder.com/200x250?text=Woo+Album+%234",
  },
];

const Product = () => {
  const [priceRange, setPriceRange] = useState([0, 90]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const filteredProducts = dummyProducts.filter((product) => {
    const inPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const inCategory = selectedCategories.length
      ? selectedCategories.includes(product.category)
      : true;
    const inSize = selectedSizes.length
      ? selectedSizes.includes(product.size)
      : true;
    return inPriceRange && inCategory && inSize;
  });

  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Mobile filter toggle button */}
      <button
        className="md:hidden mb-4 px-4 py-2 bg-gray-200 rounded font-semibold"
        onClick={() => setShowFilters((prev) => !prev)}
      >
        {showFilters ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Sidebar filters */}
      <aside
        className={`
          w-full md:w-64 md:pr-4
          ${showFilters ? "block" : "hidden"}
          md:block
          mb-4 md:mb-0
        `}
      >
        <h3 className="font-bold mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="90"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full"
        />
        <p className="mb-4">
          ${priceRange[0]} - ${priceRange[1]}
        </p>

        <h3 className="font-bold mb-2">Categories</h3>
        {[
          "Accessories",
          "Albums",
          "Clothing",
          "Decor",
          "Hoodies",
          "Music",
          "Posters",
          "T-shirts",
        ].map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            />{" "}
            {cat}
          </label>
        ))}

        <h3 className="font-bold mt-4 mb-2">Size</h3>
        {["Large", "Medium", "Small"].map((size) => (
          <label key={size} className="block">
            <input
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />{" "}
            {size}
          </label>
        ))}
      </aside>

      {/* Products grid */}
      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-md p-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-2"
            />
            <h4 className="font-semibold text-lg">{product.name}</h4>
            <p className="text-gray-700">€{product.price.toFixed(2)}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Product;
