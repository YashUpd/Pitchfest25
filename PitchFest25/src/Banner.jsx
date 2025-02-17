import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.4
    }
  }
};

const Banner = () => {
  return (
    <div className="w-full px-3 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative bg-[#fefefaa1] rounded-xl overflow-hidden backdrop-blur-sm shadow-lg"
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30" />
        
        {/* Content container */}
        <div className="relative flex items-center justify-between p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Left image */}
          <motion.div 
            variants={imageVariants}
            className="flex items-center justify-center"
          >
            <motion.img
              src="/assets/Banner1.png"
              alt="Banner 1"
              className="w-[60px] sm:w-24 md:w-28 lg:w-40 h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Center image */}
          <motion.div 
            variants={imageVariants}
            className="flex items-center justify-center px-2 sm:px-4"
          >
            <motion.img
              src="/assets/Banner3.png"
              alt="Banner 3"
              className="w-[100px] sm:w-48 md:w-56 lg:w-72 h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Right image */}
          <motion.div 
            variants={imageVariants}
            className="flex items-center justify-center"
          >
            <motion.img
              src="/assets/Banner2.png"
              alt="Banner 2"
              className="w-[80px] sm:w-32 md:w-40 lg:w-60 h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;