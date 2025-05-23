import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerChildren, fadeInUp } from '../../hooks/useAnimateOnScroll';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'A fully responsive e-commerce site with custom animations and seamless checkout flow',
    technologies: ['React', 'Node.js', 'Stripe', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 2,
    title: 'Travel Companion App',
    category: 'App Development',
    image: 'https://images.pexels.com/photos/7345444/pexels-photo-7345444.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Mobile application for travel enthusiasts with trip planning and local recommendations',
    technologies: ['React Native', 'Firebase', 'Google Maps API'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/7821579/pexels-photo-7821579.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Interactive dashboard with data visualization for financial analysis and insights',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    category: 'App Development',
    image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Personalized workout app with progress tracking and custom exercise routines',
    technologies: ['Flutter', 'Firebase', 'Health Kit'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Elegant booking platform for restaurants with real-time availability and custom admin dashboard',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 6,
    title: 'Smart Home Controller',
    category: 'App Development',
    image: 'https://images.pexels.com/photos/3935551/pexels-photo-3935551.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'IoT app for controlling smart home devices with voice commands and automation scheduling',
    technologies: ['React Native', 'Node.js', 'MQTT', 'WebSockets'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const sectionAnimation = useAnimateOnScroll();
  const projectsAnimation = useAnimateOnScroll(staggerChildren);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <motion.div 
        className="container-custom"
        ref={sectionAnimation.ref}
        initial="hidden"
        animate={sectionAnimation.controls}
        variants={sectionAnimation.variants}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore my latest works showcasing my skills in web design and app development.
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-primary-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={projectsAnimation.ref}
          initial="hidden"
          animate={projectsAnimation.controls}
          variants={projectsAnimation.variants}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="card card-hover overflow-hidden bg-white rounded-xl"
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="relative overflow-hidden group h-48 md:h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div>
                    <span className="text-xs font-medium px-3 py-1 bg-primary-500 text-white rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-3 mt-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View Live Project"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;