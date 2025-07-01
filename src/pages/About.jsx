const About = () => {
  // Data for reusable components
  // const teamMembers = [
  //   {
  //     name: "Sarah Chen",
  //     role: "Creative Director",
  //     bio: "Former Vogue editor with 10+ years in fashion trends",
  //     img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
  //   },
  //   {
  //     name: "James Wilson",
  //     role: "Head Designer",
  //     bio: "Specializes in sustainable fabrics and modern silhouettes",
  //     img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  //   },
  //   {
  //     name: "Priya Patel",
  //     role: "Customer Experience",
  //     bio: "Ensures every order meets our quality standards",
  //     img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
  //   }
  // ];

  // const values = [
  //   {
  //     icon: "🌱",
  //     title: "Sustainable Fashion",
  //     description: "Ethically sourced materials with minimal environmental impact"
  //   },
  //   {
  //     icon: "✂️",
  //     title: "Artisan Crafted",
  //     description: "Hand-finished details by skilled craftspeople"
  //   },
  //   {
  //     icon: "💎",
  //     title: "Timeless Quality",
  //     description: "Investment pieces designed to last for years"
  //   },
  //   {
  //     icon: "🌎",
  //     title: "Global Inspiration",
  //     description: "Designs influenced by cultures worldwide"
  //   }
  // ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Banner */}
      <section className="relative h-96 md:h-screen/75 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200')] bg-cover bg-center opacity-70"></div>
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Our Fashion Story</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Curating exceptional style since 2012. Where quality craftsmanship meets contemporary design.
            </p>
            <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors font-medium">
              Shop Our Collections
            </button>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6"> */}
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The MODA Ethos</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We believe fashion should be both beautiful and responsible. Our pieces are designed to transcend seasons.
            </p>
          </div> */}
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div> */}
        {/* </div>
      </section> */}
{/* ???? */}
       {/* Core Values Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
            <div className="bg-indigo-100 p-4 rounded-full mb-4 transition-colors">
              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/shopping-cart.png" 
                alt="Products" 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Products</h3>
            <p className="text-gray-600">
              Explore a diverse range of high-quality products tailored to your needs, from electronics to lifestyle essentials.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
             <div className="bg-indigo-100 p-4 rounded-full mb-4 transition-colors">

              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/goal.png" 
                alt="Mission" 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower lives through innovation, quality, and exceptional customer service, making every day better.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
                <div className="bg-indigo-100 p-4 rounded-full mb-4 transition-colors">

              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/rocket--v1.png" 
                alt="Vision" 
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be a global leader in providing innovative solutions that inspire and empower communities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
                 <div className="bg-indigo-100 p-4 rounded-full mb-4 transition-colors">

              <img 
                src="https://img.icons8.com/ios-filled/50/4a6cf7/diamond.png" 
                alt="Values" 
                className="w-10 h-10 "
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
              Have questions?
            </p>
            <a
              href="mailto:aqib@darwazypy.com"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              aqib@darwazypy.com
            </a>
            <p className="text-gray-600 mt-2">
              or call us at      <a
              href="tel:+923025089439"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            ><span className="font-semibold">+92 302 5089439</span></a>
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
              Meet our talented team of professionals dedicated to delivering the best experience.
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
            </div>
          </div>
        </div>
      </div>

   
      {/* Sustainability */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800" 
                alt="Sustainable materials"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Sustainable Practices</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">♻️</div>
                  <div>
                    <h3 className="font-medium text-lg">Eco-Friendly Materials</h3>
                    <p className="text-gray-600">85% of our fabrics are organic, recycled, or biodegradable</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🌿</div>
                  <div>
                    <h3 className="font-medium text-lg">Ethical Production</h3>
                    <p className="text-gray-600">Fair wages and safe working conditions at all partner factories</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📦</div>
                  <div>
                    <h3 className="font-medium text-lg">Reduced Waste</h3>
                    <p className="text-gray-600">Plastic-free packaging and minimal inventory waste</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}


      {/* Customer Promise */}

  <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-8">
            Get 15% off your first order and exclusive access to new collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

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
    

      {/* Newsletter */}
    
    </div>
  );
};

export default About;
