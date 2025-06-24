const categoryData = [
  {
    name: "Cardigans & Jumpers",
    image:
      "https://kaleidoscope.scene7.com/is/image/OttoUK/300w/LASCANA-Ajour-Pattern-Cardigan~15120560FRSP.jpg",
  },
  {
    name: "Dresses",
    image:
      "https://ayeshaandusman.com/cdn/shop/products/pinkbridalwear_1024x1024.jpg",
  },
  {
    name: "Shawl",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png",
  },
  {
    name: "Jackets & Coats",
    image:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/3de3f5de-4a1f-466b-ae72-d6399f125f83.__CR0,0,600,450_PT0_SX600_V1___.jpg",
  },
  {
    name: "Shorts",
    image: "https://m.media-amazon.com/images/I/61SwRFfJerL._AC_UY1100_.jpg",
  },
  {
    name: "Tops",
    image:
      "https://m.media-amazon.com/images/I/51SJ-kW06HL._QL92_SH45_SR240,220_.jpg",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Shop by Category
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collections
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.map((cat) => (
          <div
            key={cat.name}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-80 sm:h-96"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-0">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Category Name */}
            <div className="absolute inset-0 flex items-end p-6 z-10">
              <div className="w-full text-center transform transition-all duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {cat.name}
                </h3>
                <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 font-medium py-2 px-6 rounded-full shadow-md transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-gray-100">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-5"></div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all hover:shadow-xl">
          View All Categories
        </button>
      </div>
    </section>
  );
};

export default CategoryGrid;