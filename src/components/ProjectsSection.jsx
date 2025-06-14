import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, CheckCircle } from 'lucide-react';

const ProjectsSection = ({ projectsData, onViewAllProjects, onProjectInteraction }) => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">Innovative solutions showcasing advanced ML techniques and development skills with real-world applications</p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-3"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-green-100 hover:border-green-300 transition-all duration-300 flex flex-col"
            >
              <div className="h-40 overflow-hidden">
                <img   
                  class="w-full h-full object-cover"
                  alt={project.image}
                  src= {project.url} />
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed flex-grow">{project.description}</p>
                
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-700 mb-1">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((ach, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1.5 flex-shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <Button 
                    onClick={() => project.github === "#" ? onProjectInteraction(project.title) : window.open(project.github, "_blank")}
                    variant="outline" 
                    size="sm"
                    className="border-green-300 text-green-600 hover:bg-green-50 text-xs px-2.5 py-1"
                  >
                    <Github className="w-3 h-3 mr-1.5" />
                    Code
                  </Button>
                  {/* <Button 
                    onClick={() => onProjectInteraction(project.title)}
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-xs px-2.5 py-1"
                  >
                    <ExternalLink className="w-3 h-3 mr-1.5" />
                    Live Demo
                  </Button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: projectsData.length * 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            onClick={() => window.open('https://github.com/Aishjahan', '_blank')}
            variant="outline"
            className="border-green-400 text-green-700 hover:bg-green-100 text-sm px-6 py-2"
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;