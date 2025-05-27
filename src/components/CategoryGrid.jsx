const categoryData = [
  {
    name: "Cardigans & Jumpers",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png",
  },
  {
    name: "Dresses",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png",
  },
  {
    name: "Shawl",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png",
  },
  {
    name: "Jackets & Coats",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png",
  },
  {
    name: "Shorts",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png",
  },
  {
    name: "Tops",
    image:
      "https://v3.woonuxt.com/.netlify/images?w=220&h=248&url=https:%2F%2Fsecure.woonuxt.com%2Fwp-content%2Fuploads%2F2021%2F10%2FScreenshot-2021-10-10-at-10.50.32-a.m..png  },",
  },
];

const CategoryGrid = () => {
  return (
    <section className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {categoryData.map((cat) => (
          <div
            key={cat.name}
            className="relative bg-gray-100 p-0 text-center rounded shadow hover:shadow-md cursor-pointer w-full overflow-hidden"
            style={{
              height: "300px",
              backgroundImage: `url(${cat.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black  flex items-center justify-center">
              <h3 className="font-semibold text-base sm:text-lg text-white drop-shadow">
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
