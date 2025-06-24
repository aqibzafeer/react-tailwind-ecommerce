import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0">
        <img
          src="/banner-img.jpeg"
          alt="New Year Collection"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
        <div className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl sm:p-10 lg:p-12 transform transition-all duration-500 hover:scale-[1.01]">
          <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            New Arrivals
          </span>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Just Landed
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mt-2 sm:text-3xl lg:mt-4">
            The New Year Collection
          </h2>
          
          <div className="mt-6 space-y-4 text-gray-700">
            <p className="text-lg">
              Don't miss out on special items at extraordinary discounted prices. 
              <span className="block font-medium text-indigo-600 mt-1">
                Limited time offer!
              </span>
            </p>
            <p className="text-lg">
              We believe in easy access to things that are good for mind, body and spirit.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/products")}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1"
            >
              Shop Now
            </button>
            <button
              onClick={() => window.scrollTo({ top: document.getElementById('features').offsetTop, behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-gray-800 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-all border border-gray-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;