import { useNavigate } from "react-router-dom";


const categoryData = [
  {
    name: "Men | T-Shirt",
    image:
      "https://flyingcart.pk/cdn/shop/files/01_2d4b06fd-e7ea-4fcd-aba9-11d2e3831ec6.jpg",
  },
  
   {
    name: "Men | Polo Shirt",
    image:
      "https://saeedajmalstores.com/cdn/shop/files/Men-Short-Sleeve-Polo-Shirt-Parrot-2.jpg",
  },
  

  {
    name: "Men | Suits",
    image:
      "https://edge.pk/cdn/shop/files/IMG_5206_f5366b9c-4bf9-4e8d-a1fd-dcbb24c93b4c.jpg",
  },


    {
    name: "Men | Suits (Unstiched)",
    image:
      "https://edge.pk/cdn/shop/files/IMG_5206_f5366b9c-4bf9-4e8d-a1fd-dcbb24c93b4c.jpg",
  },


  {
    name: "Women",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png",
  },

  {
    name: "Women | Suits(Unstiched)",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png",
  },



  {
    name: "Boys",
    image:
      "https://www.saeedajmalstores.com/cdn/shop/products/gry-1_400x.jpg",
  },



  {
    name: "Girls",
    image: "https://www.affordable.pk/uploads/products/thumbs/large_16680945710_Blue-Bells-khaddar-shalwar-kameez-Stitched-by-Modest-winter-03.jpg",
  },



];

const CategoryGrid = () => {

    const navigate = useNavigate();
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">


        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
             Shop by Category
          </span> 
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collections
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryData.map((cat) => (
          <div
            key={cat.name}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-150 sm:h-120"
          >
            {/* Background Image with blur on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
              style={{ backgroundImage: `url(${cat.image})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-end p-6 z-20">
              <div onClick={() => navigate("/products")} className="w-full text-center transform transition-all duration-500 group-hover:-translate-y-2">
            
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {cat.name}
                </h3>
            {/* <button
              
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1"
            >
              Shop Now
            </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {/* <div className="text-center mt-10">
                <button
              onClick={() => navigate("/products")}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1"
            >
          View All Categories
        </button>
        
      </div> */}
    </section>
  );
};

export default CategoryGrid;
