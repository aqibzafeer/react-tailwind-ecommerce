import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../pages/api/FetchData";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };
    loadProducts();
  }, []);

  return (
    <section className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 mt-20 text-gray-900">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col overflow-hidden"
          >
            <div className="relative group">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.images?.[0]?.src || "/ImageNotFound.png"}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <span className="absolute top-3 right-3 bg-red-900 text-white text-xs px-2 py-1 rounded-full shadow">
                New
              </span>
            </div>
            <div className="flex-1 flex flex-col p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {product.name}
                </h3>
              </Link>

              <p className="text-gray-900 font-bold text-base mb-4">
                Rs. {product.sale_price || product.price}
              </p>
              <button className="mt-auto w-1/2 bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

// const products = [
//   {
//     id: 1,
//     name: "Stylish T-Shirt 1",
//     price: "Rs:1200",
//     image:
//       "https://v3.woonuxt.com/.netlify/images?w=640&h=640&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2Fposter_2_up.jpg",
//   },
//   {
//     id: 2,
//     name: "Stylish T-Shirt 2",
//     price: "Rs:600",
//     image:
//       "https://v3.woonuxt.com/.netlify/images?w=640&h=640&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2Fposter_2_up.jpg",
//   },
//   {
//     id: 3,
//     name: " Stylish T-Shirt 3",
//     price: "RS:2400",
//     image:
//       "https://v3.woonuxt.com/.netlify/images?w=640&h=640&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2Fposter_2_up.jpg",
//   },
//   {
//     id: 4,
//     name: "Stylish T-Shirt 4",
//     price: "RS:2000",
//     image:
//       "https://v3.woonuxt.com/.netlify/images?w=640&h=640&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2Fposter_2_up.jpg",
//   },
// ];

// const FeaturedProducts = () => (
//   <section className="p-4 sm:p-8 max-w-7xl mx-auto">
//     <h2 className="text-2xl sm:text-3xl font-bold mb-10 mt-20 text-gray-900">
//       Featured Products
//     </h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col overflow-hidden"
//         >
//           <div className="relative group">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <span className="absolute top-3 right-3 bg-red-900 text-white text-xs px-2 py-1 rounded-full shadow">
//               New
//             </span>
//           </div>
//           <div className="flex-1 flex flex-col p-4">
//             <h3 className="font-semibold text-lg text-gray-800 mb-1">
//               {product.name}
//             </h3>
//             <p className="text-gray-900 font-bold text-base mb-4">
//               {product.price}
//             </p>
//             <button className="mt-auto w-1/2 bg-gradient-to-r from-gray-800 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default FeaturedProducts;
