import React from 'react';
import { motion } from 'framer-motion';

const BuySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
            How to Book ?
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience luxury fashion in our flagship showroom or visit our new MELANI boutique opening April 1st
        </p>
      </motion.div>

      {/* Steps Section */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-indigo-200 transition-all"
        >
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 text-2xl font-bold mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <p className="text-gray-600 text-lg">
            Schedule a private appointment to explore our exclusive collections and discuss custom design options with our stylists.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              By appointment only
            </span>
          </div>
        </motion.div>

        {/* Visit Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-pink-200 transition-all"
        >
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 text-2xl font-bold mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Personalized Experience</h2>
          </div>
          <p className="text-gray-600 text-lg">
            Enjoy a curated shopping experience in our elegant studio with champagne service and one-on-one styling consultations.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
              VIP treatment
            </span>
          </div>
        </motion.div>

        {/* Make a Purchase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-purple-200 transition-all"
        >
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 text-2xl font-bold mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Seamless Delivery</h2>
          </div>
          <p className="text-gray-600 text-lg">
            Receive your bespoke pieces in 5-15 days with complimentary alterations and worldwide shipping options available.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              White-glove service
            </span>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-20 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
         className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all hover:shadow-xl"
        
        >



          Book Now
          
        </motion.button>
        <p className="mt-6 text-gray-500 text-lg">
          Prefer to call? <span className="text-indigo-600 font-semibold">+92(302)5089439</span>
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <span className="text-sm text-gray-400">Exclusive members</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-400">By appointment only</span>
          <span className="text-sm text-gray-400">•</span>
          <span className="text-sm text-gray-400">Worldwide shipping</span>
        </div>
      </motion.div>
    </div>
  );
};

export default BuySection;
