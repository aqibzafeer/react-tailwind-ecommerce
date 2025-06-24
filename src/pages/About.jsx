function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-800 to-purple-700 py-20 md:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-sm md:text-base font-semibold tracking-widest text-orange-400 uppercase">
            Discover Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-5">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We are passionate about delivering innovative products and outstanding service to our customers worldwide.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-100 p-4 rounded-full mb-4 group-hover:bg-indigo-600 transition-colors">
              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/shopping-cart.png" 
                alt="Products" 
                className="w-10 h-10 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Products</h3>
            <p className="text-gray-600">
              Explore a diverse range of high-quality products tailored to your needs, from electronics to lifestyle essentials.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-100 p-4 rounded-full mb-4 group-hover:bg-indigo-600 transition-colors">
              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/goal.png" 
                alt="Mission" 
                className="w-10 h-10 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower lives through innovation, quality, and exceptional customer service, making every day better.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-100 p-4 rounded-full mb-4 group-hover:bg-indigo-600 transition-colors">
              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/rocket--v1.png" 
                alt="Vision" 
                className="w-10 h-10 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be a global leader in providing innovative solutions that inspire and empower communities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-100 p-4 rounded-full mb-4 group-hover:bg-indigo-600 transition-colors">
              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/diamond.png" 
                alt="Values" 
                className="w-10 h-10 group-hover:invert"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, quality, innovation, and customer satisfaction are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="bg-indigo-100 p-4 rounded-full mb-5">
              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/phone.png" 
                alt="Contact" 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-3">
              Have questions? We're here to help!
            </p>
            <a
              href="mailto:aqib@darwazypy.com"
              className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline"
            >
              aqib@darwazypy.com
            </a>
            <p className="text-gray-600 mt-2">
              or call us at <span className="font-semibold">+92 302 5089439</span>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="bg-indigo-100 p-4 rounded-full mb-5">
              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/group-foreground-selected.png" 
                alt="Team" 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-600">
              Meet our talented team of professionals dedicated to delivering the best experience for you.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <div className="bg-indigo-100 p-4 rounded-full mb-5">
              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/feedback.png" 
                alt="Testimonials" 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Testimonials</h3>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-gray-600 italic">
                "The quality and service exceeded my expectations! Highly recommended."
              </p>
              <p className="text-gray-700 font-medium mt-2">- Jane Doe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-indigo-600 mb-2">10K+</span>
            <span className="text-gray-700 font-medium">Happy Customers</span>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-indigo-600 mb-2">500+</span>
            <span className="text-gray-700 font-medium">Products</span>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-indigo-600 mb-2">50+</span>
            <span className="text-gray-700 font-medium">Awards</span>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-indigo-600 mb-2">24/7</span>
            <span className="text-gray-700 font-medium">Support</span>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Stay updated with our latest products, offers, and news by following us on social media.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Facebook', icon: 'facebook-new', url: 'https://facebook.com' },
              { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
              { name: 'Instagram', icon: 'instagram-new', url: 'https://instagram.com' },
              { name: 'TikTok', icon: 'tiktok', url: 'https://tiktok.com' },
              { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
              { name: 'YouTube', icon: 'youtube-play', url: 'https://youtube.com' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                <img 
                  src={`https://img.icons8.com/ios-filled/24/ffffff/${social.icon}.png`} 
                  alt={social.name}
                  className="w-5 h-5"
                />
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;