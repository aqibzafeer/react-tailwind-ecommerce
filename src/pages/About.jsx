import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook-new', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'instagram-new', url: 'https://instagram.com' },
    { name: 'TikTok', icon: 'tiktok', url: 'https://tiktok.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'YouTube', icon: 'youtube-play', url: 'https://youtube.com' },
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero Banner */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative h-[80vh] min-h-[500px] bg-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <motion.div 
            variants={item}
            className="max-w-2xl"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
              variants={item}
            >
            
     <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
        Our Fashion Story
        </span> 

              
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8"
              variants={item}
            >
     <span className="bg-clip-text text-transparent bg-white">
              Curating exceptional style since 2012. Where quality craftsmanship meets contemporary design.
        </span> 



            </motion.p>
            <motion.button 
              onClick={() => navigate("/categories")}
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1"              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={item}
            >
              Shop Our Collections
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={item}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              
                                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Our Core Values
          </span> 
              
              </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "https://img.icons8.com/ios-filled/50/4a6cf7/shopping-cart.png",
                title: "Our Products",
                desc: "High-quality products tailored to your needs"
              },
              {
                icon: "https://img.icons8.com/ios-filled/50/4a6cf7/goal.png",
                title: "Our Mission",
                desc: "Empower lives through innovation and quality"
              },
              {
                icon: "https://img.icons8.com/ios-filled/50/4a6cf7/rocket--v1.png",
                title: "Our Vision",
                desc: "Global leader in innovative solutions"
              },
              {
                icon: "https://img.icons8.com/ios-filled/50/4a6cf7/diamond.png",
                title: "Our Values",
                desc: "Integrity, quality, and customer satisfaction"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="bg-indigo-100 p-4 rounded-full mb-4">
                  <img src={value.icon} alt={value.title} className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">

           {value.title}</span> </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sustainability */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="py-20 bg-gray-50"
      >
        


        <div className="container mx-auto px-6 py-16">
  <motion.div 
    className="flex flex-col lg:flex-row items-center gap-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={container}
  >
    {/* Image Section */}
    <motion.div 
      className="lg:w-1/2 relative"
      variants={item}
    >
      <motion.img 
           src="/banner-img.jpeg"
        alt="Sustainable garment production"
        className="rounded-xl shadow-xl w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-lg shadow-md border border-gray-100"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <p className="font-medium text-indigo-600">Since 2015</p>
      </motion.div>
    </motion.div>

    {/* Content Section */}
    <motion.div 
      className="lg:w-1/2"
      variants={container}
    >
      <motion.div variants={item}>
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
         Our Commitment
        </span>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6"
          variants={item}
        >
                           <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
       
          Ethical Fashion Forward</span>
        </motion.h2>
        <p className="text-gray-600 mb-8">
          At our garment store, we believe style shouldn't compromise our planet's future. 
          Discover how we're redefining fashion sustainability.
        </p>
      </motion.div>

      <div className="space-y-6">
        {[
          {
   
            title: "Eco-Fabrics",
            desc: "We use 85% organic cotton, bamboo, and recycled polyester in our collections",
            color: "text-green-500"
          },
          {
      
            title: "Artisan Crafted",
            desc: "Hand-finished by skilled tailors using traditional techniques",
            color: "text-amber-500"
          },
          // {
          
          //   title: "Carbon Neutral",
          //   desc: "Offsetting 100% of our carbon footprint through reforestation",
          //   color: "text-blue-500"
          // },
          // {
         
          //   title: "Water Wise",
          //   desc: "Using innovative dyeing processes that reduce water usage by 70%",
          //   color: "text-cyan-500"
          // }
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
            variants={item}
            whileHover={{ x: 5 }}
          >
            <div className={`text-3xl ${item.color}`}>{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
      
        {item.title}</span> </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-8"
        variants={item}
      >
        <motion.button
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1"          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Learn About Our Process
        </motion.button>
      </motion.div>
    </motion.div>
  </motion.div>
</div>
      </motion.section>

      {/* Info Cards */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "https://img.icons8.com/ios-filled/50/4a6cf7/phone.png",
                title: "Contact Us",
                content: (
                  <>
                    <p className="text-gray-600 mb-3">Have questions?</p>
                    <a href="mailto:aqib@darwazypy.com" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      aqib@darwazypy.com
                    </a>
                    <p className="text-gray-600 mt-2">
                      or call us at <a href="tel:+923025089439" className="text-indigo-600 hover:text-indigo-800 font-medium">
                        +92 302 5089439
                      </a>
                    </p>
                  </>
                )
              },
              {
                icon: "https://img.icons8.com/ios-filled/50/4a6cf7/group-foreground-selected.png",
                title: "Our Team",
                content: (
                  <p className="text-gray-600">
                    Talented professionals dedicated to delivering the best experience.
                  </p>
                )
              },
              {
                icon: "https://img.icons8.com/ios-filled/50/4a6cf7/feedback.png",
                title: "Testimonials",
                content: (
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-gray-600 italic">
                      "The quality and service exceeded my expectations! Highly recommended."
                    </p>
                  </div>
                )
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="bg-indigo-100 p-4 rounded-full mb-5">
                  <img src={card.icon} alt={card.title} className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
        
        {card.title}</span></h3>
                {card.content}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 bg-gray-100"
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-serif font-bold mb-4"
            variants={item}
          >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
       Join Our Community
        </span> 
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8"
            variants={item}
          >
            Get 15% off your first order and exclusive access to new collections
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            variants={item}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
            />
            <motion.button 
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1"
whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="bg-gradient-to-r from-indigo-700 to-purple-600 py-16"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            variants={item}
          >
            Follow Us
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 max-w-2xl mx-auto mb-8"
            variants={item}
          >
            Stay updated with our latest products, offers, and news.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={container}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg flex items-center gap-2 transition-colors"
                whileHover={{ y: -5 }}
                variants={item}
              >
                <img 
                  src={`https://img.icons8.com/ios-filled/24/ffffff/${social.icon}.png`} 
                  alt={social.name}
                  className="w-5 h-5"
                />
                <span>{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
