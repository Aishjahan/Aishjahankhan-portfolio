import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = ({ contactData, onSendEmail, onSocialConnect }) => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Let's Connect</h2>
          <p className="text-sm text-gray-600 mt-4 max-w-xl mx-auto">{contactData.cta}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3"></div>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-purple-100"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-purple-100">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">Email</h3>
                  <a href={`mailto:${contactData.email}`} className="text-xs text-purple-600 hover:underline">{contactData.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-purple-100">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">LinkedIn</h3>
                  <a href={`https://${contactData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">{contactData.linkedin}</a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-purple-100">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">GitHub</h3>
                  <a href={`https://${contactData.github}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-700 hover:underline">{contactData.github}</a>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-md font-semibold text-gray-800 mb-2">{contactData.connectButtonText}?</h3>
              <p className="text-xs text-gray-600 mb-4">{contactData.cta}</p>
              <Button 
                onClick={() => {
      window.location.href = "mailto: aishjahankhan7376@gmail.com";
    }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 text-sm w-full"
              >
                {contactData.buttonText}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;