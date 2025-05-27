const CategoryGrid = () => {
  const categories = [
    "Cardigans & Jumpers",
    "Dresses",
    "Shawl",
    "Jackets & Coats",
    "Shorts",
    "Tops",
  ];

  return (
    <section className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {categories.map((cat) => (
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
  );
};

export default CategoryGrid;
