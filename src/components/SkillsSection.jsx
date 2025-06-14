import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ skillsData }) => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">{skillsData.title}</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">{skillsData.subtitle}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3"></div>
        </motion.div>

        {skillsData.categories.map((category, catIndex) => (
          <div key={category.name} className="mb-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-gray-700 mb-6 text-center md:text-left"
            >
              {category.name}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (catIndex * 0.1) + (index * 0.05) }}
                  viewport={{ once: true }}
                  className="skill-card bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-100 hover:border-purple-300 transition-all duration-300"
                >
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-medium text-xs text-gray-800">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;