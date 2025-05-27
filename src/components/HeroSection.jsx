const HeroSection = () => (
  <section
    className="bg-cover bg-center h-[60vh] sm:h-[50vh] md:h-[80vh] flex items-center justify-start"
    style={{ backgroundImage: "url(/banner-img.jpeg)" }}
  >
    <div className="flex flex-col md:flex-row h-full w-full md:w-4/5 md:ml-20 px-4 md:px-0">
      <div className="flex flex-col justify-center h-full w-full md:w-1/2 p-4 sm:p-5 rounded bg-white/60 md:bg-transparent">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
          Just landed.
        </h1>
        <h2 className="text-md sm:text-xl md:text-md font-bold mb-2 sm:mb-4 pb-5">
          The New Year Collection
        </h2>
        <p className="mb-6 sm:mb-4 text-sm sm:text-base text-justify">
          Don't miss out on some special items at extraordinary discounted
          prices. For a limited time!
        </p>
        <p className="mb-6 sm:mb-5 text-sm sm:text-base text-justify">
          We believe in easy access to things that are good for our mind, body
          and spirit. With a clever offering, superb support and a secure
          checkout you’re in good hands.
        </p>
        <button className="w-1/2 sm:w-1/3 bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 rounded text-white font-semibold text-sm sm:text-base">
          Shop Now
        </button>
      </div>
      <div className="hidden md:block w-1/2" />
    </div>
  </section>
);

export default HeroSection;
