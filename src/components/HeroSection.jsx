import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">

      <div className="absolute inset-0 z-0">

        <div className="absolute inset-0 bg-black opacity-70" />
        <img
          src="/banner-img.jpeg"
          alt="New Year Collection"
          className="w-full h-full object-cover object-center"
          width="1920"
          height="1080"
          loading="eager"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
        <motion.div 
          className="max-w-2xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl sm:p-10 lg:p-12 border border-white/20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span 
            className="text-sm font-semibold tracking-widest text-indigo-300 uppercase"
            variants={itemVariants}
          >
            New Arrivals
          </motion.span>
          
          <motion.h1 
            className="mt-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            variants={itemVariants}
          >
            Just Landed
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-bold text-indigo-200 mt-2 sm:text-3xl lg:mt-4"
            variants={itemVariants}
          >
            The New Year Collection
          </motion.h2>
          
          <motion.div 
            className="mt-6 space-y-4 text-gray-200"
            variants={itemVariants}
          >
            <p className="text-lg">
              Exclusive items at extraordinary prices. 
            </p>
            <p className="text-xl font-medium text-indigo-300">
              Limited time offer!
            </p>
            <p className="text-lg">
              Premium quality for mind, body and spirit.
            </p>
          </motion.div>

          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <button
              onClick={() => navigate("/products")}
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-xl active:scale-95"
              aria-label="Shop Now"
            >
              Shop Now
            </button>
 
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      >
        
      </motion.div>
    </section>
  );
};

export default HeroSection;