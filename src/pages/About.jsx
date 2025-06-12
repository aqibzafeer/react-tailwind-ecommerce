function About() {
  return (
    <section className="w-full mx-auto">
      <div className="mt-0 bg-gradient-to-r from-gray-800 to-indigo-600 min-h-[300px] flex flex-col justify-center items-center px-4 md:px-0 rounded-lg shadow-lg">
        <h3 className="text-[13px] text-[#f28123] font-bold uppercase tracking-[7px] text-center">
          See more Details
        </h3>
        <h2 className="text-[32px] md:text-[50px] font-black text-[#f28123] mt-1 text-center">
          About Us
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-50 mx-10">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-50 hover:bg-gradient-to-r from-gray-800 to-indigo-600 hover:text-white">
          <h3 className="text-xl font-bold mb-2">Our Products</h3>
          <p className="text-center">
            Discover our range of products designed to meet your needs.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gradient-to-r from-gray-800 to-indigo-600 hover:text-white">
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-center">
            We aim to provide high-quality products that enhance your lifestyle
            and bring joy to your everyday life.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gradient-to-r from-gray-800 to-indigo-600 hover:text-white">
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-center">
            To be a leading provider of innovative products that inspire and
            empower our customers.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 mx-10">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gradient-to-r from-gray-800 to-indigo-600 hover:text-white">
          <h3 className="text-xl font-bold mb-2">Our Values</h3>
          <p className="text-center">
            We believe in quality, integrity, and customer satisfaction. Our
            products reflect these values in every detail.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gradient-to-r from-gray-800 to-indigo-600 hover:text-white">
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-center">
            If you have any questions or need assistance, feel free to reach out
            to us at <br />
            <a
              href="mailto:admin@darwazypy.com"
              className="text-blue-500 hover:underline"
            >
              admin@darwazypy.com
            </a>
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gradient-to-r from-gray-800 to-indigo-600 hover:text-white">
          <h3 className="text-xl font-bold mb-2">Customer Testimonials</h3>
          <p className="text-center">
            "I love the quality of the products! They have truly enhanced my
            daily routine." - Jane Doe
          </p>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-md p-6 flex flex-col items-center mx-10">
        <h3 className="text-xl font-bold mb-2">Follow Us</h3>
        <p>
          Stay updated with our latest products and offers by following us on
          social media.
        </p>
        <ul className="flex flex-wrap gap-4 mt-2">
          <li>
            <a
              href="https://facebook.com"
              className="text-blue-600 hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="text-red-800 hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              className="text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
