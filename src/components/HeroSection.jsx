import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = ({ name, tagline, heroImage, onViewWork, onGetInTouch }) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white p-8 md:p-10 rounded-xl shadow-2xl"
        >
          
          <h1 className="mb-3 text-gray-800">
            <span className="text-2xl font-bold">Hi, I'm</span>{' '}
            <span className="gradient-text text-4xl font-bold">{name}</span>
          </h1>
          <motion.p 
            className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {tagline}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button 
              onClick={onViewWork}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 text-xs"
            >
              View My Work
            </Button>
            <Button 
              onClick={onGetInTouch}
              variant="outline" 
              className="border-purple-400 text-purple-600 hover:bg-purple-50 hover:text-purple-700 px-6 py-2 text-xs bg-white hover:border-purple-500"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;