import React from 'react';
import { motion } from 'framer-motion';

const BuySection = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 font-sans">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          How to Buy Our Clothes?
        </h1>
        <p className="text-lg text-gray-600">
          We have a large showroom near the city center, and from April 1, the second MELANI boutique will open!
        </p>
      </motion.div>

      {/* Steps Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="text-indigo-600 text-4xl mb-4">1</div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact us</h2>
          <p className="text-gray-600">
            If you want to order exclusive clothes or buy something from our collections, you need to make an appointment.
          </p>
        </motion.div>

        {/* Visit Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="text-indigo-600 text-4xl mb-4">2</div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h2>
          <p className="text-gray-600">
            In a cozy studio, you can chat with the designer and come up with a unique design, try ready clothes and make measurements.
          </p>
        </motion.div>

        {/* Make a Purchase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >
          <div className="text-indigo-600 text-4xl mb-4">3</div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Make a Purchase</h2>
          <p className="text-gray-600">
            If you ordered bespoke tailoring, your order will be ready in 5-15 days. You may be asked to come for the fit check 1 or 2 times.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg">
          Book an Appointment
        </button>
        <p className="mt-4 text-gray-500">
          Or call us at <span className="text-indigo-600 font-medium">+1 (555) 123-4567</span>
        </p>
      </motion.div>
    </div>
  );
};

export default BuySection;