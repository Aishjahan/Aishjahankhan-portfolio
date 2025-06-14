import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection, portfolioName }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold gradient-text"
            onClick={() => scrollToSection('home')}
            style={{cursor: 'pointer'}}
          >
            {portfolioName}'s Portfolio
          </motion.div>
          
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-xs transition-colors duration-300 ${
                  activeSection === item 
                    ? 'text-purple-600 font-semibold' 
                    : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-xs px-3 py-1.5 md:hidden"
            size="sm"
          >
             <Briefcase className="w-3 h-3 mr-1.5" />
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;