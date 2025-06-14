import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ footerData, onSocialConnect }) => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-bold gradient-text mb-2">{footerData.name}</p>
          <p className="text-xs text-gray-400 mb-4">{footerData.role}</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button 
              onClick={() => window.open("https://github.com/Aishjahan", "_blank")}
              variant="ghost" 
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button 
              onClick={() => window.open("https://www.linkedin.com/in/aishjahan-khan-a10943242/", "_blank")}
              variant="ghost" 
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button 
              onClick={() => {
      window.location.href = "mailto: aishjahankhan7376@gmail.com";
    }}
              variant="ghost" 
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;