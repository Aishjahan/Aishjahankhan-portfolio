import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CalendarDays, BookOpen } from 'lucide-react';

const AboutSection = ({ aboutData, educationData }) => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 md:p-8 border border-purple-100 mb-10 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm text-gray-700 leading-relaxed mb-3">{aboutData.description1}</p>
          <p className="text-sm text-gray-700 leading-relaxed">{aboutData.description2}</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 md:p-8 border border-pink-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold gradient-text mb-6 text-center md:text-left">Education</h3>
              <div className="space-y-4">
                <div className="bg-purple-50/50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center mb-1">
                    <GraduationCap className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-800 text-sm">{educationData.degree}</h4>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">{educationData.university}</p>
                  <div className="flex flex-wrap items-center text-xs text-gray-500 ml-6 mt-1 gap-x-2 gap-y-0.5">
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {educationData.location}</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="flex items-center"><CalendarDays className="w-3 h-3 mr-1" /> {educationData.graduationYear}</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="flex items-center">CGPA: {educationData.cgpa}</span>
                  </div>
                </div>
                <div className="bg-pink-50/50 rounded-lg p-4 border border-pink-200">
                  <div className="flex items-center mb-1">
                    <BookOpen className="w-4 h-4 text-pink-600 mr-2 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-800 text-sm">Intermediate (12th Grade)</h4>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">{educationData.intermediate.school}</p>
                  <div className="flex flex-wrap items-center text-xs text-gray-500 ml-6 mt-1 gap-x-2 gap-y-0.5">
                    <span className="flex items-center"><CalendarDays className="w-3 h-3 mr-1" /> {educationData.intermediate.year}</span>
                    <span className="hidden sm:inline">|</span>
                    <span className="flex items-center">Percentage: {educationData.intermediate.percentage}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
            <img
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-white transform transition-transform duration-500 hover:scale-105"
              alt="Aishjahan Khan - Profile"
              src={aboutData.profileImage}
            />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;