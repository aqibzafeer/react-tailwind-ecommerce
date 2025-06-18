function About() {
  return (
    <section className="w-full mx-auto">
      <div className="mt-0 bg-gradient-to-r from-indigo-900 via-indigo-600 to-purple-500 min-h-[350px] flex flex-col justify-center items-center px-4 md:px-0 rounded-lg shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center rounded-lg"></div>
        <h3 className="relative z-10 text-[15px] text-[#f28123] font-bold uppercase tracking-[8px] text-center drop-shadow-lg">
          Discover Our Story
        </h3>
        <h2 className="relative z-10 text-[40px] md:text-[60px] font-extrabold text-white mt-2 text-center drop-shadow-lg">
          About Us
        </h2>
        <p className="relative z-10 text-lg text-white text-center mt-4 max-w-2xl drop-shadow">
          We are passionate about delivering innovative products and outstanding service to our customers worldwide.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 mx-6">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-gradient-to-br from-indigo-600 to-purple-400 hover:text-white transition-all duration-300">
          <img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" alt="Products" className="mb-3 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-2">Our Products</h3>
          <p className="text-center">
            Explore a diverse range of high-quality products tailored to your needs, from electronics to lifestyle essentials.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-gradient-to-br from-indigo-600 to-purple-400 hover:text-white transition-all duration-300">
          <img src="https://img.icons8.com/ios-filled/50/000000/goal.png" alt="Mission" className="mb-3 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-center">
            To empower lives through innovation, quality, and exceptional customer service, making every day better.
          </p>
        </div>
   <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-gradient-to-br from-indigo-600 to-purple-400 hover:text-white transition-all duration-300">
  <img src="https://img.icons8.com/ios-filled/50/000000/rocket--v1.png" alt="Vision" className="mb-3 w-12 h-12" />
  <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
  <p className="text-center">
    To be a global leader in providing innovative solutions that inspire and empower communities.
  </p>
</div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-gradient-to-br from-indigo-600 to-purple-400 hover:text-white transition-all duration-300">
          <img src="https://img.icons8.com/ios-filled/50/000000/diamond.png" alt="Values" className="mb-3 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-2">Our Values</h3>
          <p className="text-center">
            Integrity, quality, innovation, and customer satisfaction are at the heart of everything we do.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 mx-6">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-gradient-to-br from-indigo-600 to-purple-400 hover:text-white transition-all duration-300">
          <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="Contact" className="mb-3 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
          <p className="text-center">
            Have questions? Reach out at <br />
            <a
              href="mailto:aqib@darwazypy.com"
              className="hover:underline"
            >
              aqib@darwazypy.com
            </a>
            <br />
            or call us at <span className="font-semibold">+923025089439</span>
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-gradient-to-br from-indigo-600 to-purple-400 hover:text-white transition-all duration-300">
          <img src="https://img.icons8.com/ios-filled/50/000000/group-foreground-selected.png" alt="Team" className="mb-3 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-2">Our Team</h3>
          <p className="text-center">
            Meet our talented team of professionals dedicated to delivering the best experience for you.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-gradient-to-br from-indigo-600 to-purple-400 hover:text-white transition-all duration-300">
          <img src="https://img.icons8.com/ios-filled/50/000000/feedback.png" alt="Testimonials" className="mb-3 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-2">Customer Testimonials</h3>
          <p className="text-center italic">
            "The quality and service exceeded my expectations! Highly recommended." <br />- Jane Doe
          </p>
          <p className="text-center italic mt-2">
            "Fast delivery and amazing support. Will shop again!" <br />- John Smith
          </p>
        </div>
      </div>

      <div className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-xl shadow-lg p-8 flex flex-col items-center mx-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Follow Us</h3>
        <p>
          Stay updated with our latest products, offers, and news by following us on social media.
        </p>
        <ul className="flex flex-wrap gap-6 mt-4">
          <li>
            <a
              href="https://facebook.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" />
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/tiktok.png" alt="LinkedIn" />
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="YouTube" />
              YouTube
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-10 mx-6">
        <h3 className="text-2xl font-bold mb-10 text-indigo-700 text-center">Our Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-4xl font-extrabold text-indigo-600">10K+</span>
            <span className="mt-2 text-gray-700">Happy Customers</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-4xl font-extrabold text-indigo-600">500+</span>
            <span className="mt-2 text-gray-700">Products</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-4xl font-extrabold text-indigo-600">50+</span>
            <span className="mt-2 text-gray-700">Awards</span>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-4xl font-extrabold text-indigo-600">24/7</span>
            <span className="mt-2 text-gray-700">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
