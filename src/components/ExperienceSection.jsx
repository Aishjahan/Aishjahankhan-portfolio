import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Award, Star, Briefcase } from 'lucide-react';

const ExperienceSection = ({ experiencesData, achievementsData }) => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Experience & Achievements</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">Professional journey in machine learning and data science with impactful results</p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-3"></div>
        </motion.div>

        <div className="mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-gray-700 mb-8 text-center flex items-center justify-center">
            <Briefcase className="w-5 h-5 mr-2 text-orange-500" /> Work Experience
          </motion.h3>
          <div className="relative experience-timeline-centered">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-orange-300 to-red-300 transform -translate-x-1/2"></div>
            {experiencesData.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-full md:w-5/12 px-2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 shadow-xl border border-orange-100 relative">
                    <div className={`absolute top-1/2 -mt-2 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full border-2 border-white ${index % 2 === 0 ? '-right-2 md:-right-[18px]' : '-left-2 md:-left-[18px]'}`}></div>
                    {exp.tag && (
                      <span className={`absolute top-2 right-2 text-xs font-semibold px-1.5 py-0.5 rounded ${exp.tag.includes("Latest") ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                        {exp.tag}
                      </span>
                    )}
                    <div className="flex items-center gap-2 mb-1">
                      <Building className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-orange-600 font-semibold text-sm">{exp.company}</span>
                    </div>
                    <h4 className="text-md font-bold text-gray-800 mb-1">{exp.title}</h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mb-2">
                      <div className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {exp.period}</div>
                      <div className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {exp.location}</div>
                    </div>
                    
                    {Array.isArray(exp.description) ? (
  <ul className="list-disc pl-5 text-xs text-gray-700 leading-relaxed space-y-1">
    {exp.description.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
) : (
  <p className="text-xs text-gray-700 leading-relaxed">{exp.description}</p>
)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: experiencesData.length * 0.2 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-gray-700 mb-8 text-center flex items-center justify-center">
            <Award className="w-5 h-5 mr-2 text-yellow-500" /> Key Achievements
          </motion.h3>
          <div className="space-y-4">
            {achievementsData.map((ach, index) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (experiencesData.length * 0.2) + (index * 0.15) }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-xl border border-yellow-100 max-w-2xl mx-auto"
              >
                <div className="flex items-center mb-1">
                  <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                  <h4 className="font-semibold text-gray-800 text-sm">{ach.title}</h4>
                </div>
                <p className="text-xs text-gray-600 ml-6 leading-relaxed">{ach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;