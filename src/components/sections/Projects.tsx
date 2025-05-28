import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimateOnScroll, staggerChildren, fadeInUp } from '../../hooks/useAnimateOnScroll';
import { ExternalLink, Github } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
   title: 'ICE Institute Website',
  category: 'Web Design',
  image: 'https://media.istockphoto.com/id/1493075632/photo/technician-repairing-the-cell-phone-parts-and-tools-for-recovery-repair-phone-smartphone.jpg?s=612x612&w=0&k=20&c=neHGcd8G5Rhr03PmApjSsxkwMijtPMTgfUq0UrT3tVE=',
  description: 'A modern, responsive website developed for the Institute of Communication and Electronics (ICE) featuring sections like Our Gallery, About, Contact, and more.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PhP'],
  link: 'https://icekerala.com/',
  github: 'https://github.com/yourusername/ice-institute-project'
  },
  {
    id: 2,
    title: 'Portfolio WhatsApp Integration',
  category: 'Web App',
  image: 'https://media.istockphoto.com/id/1395757652/photo/hashtag-sign-symbol-in-social-media-notification-icon.jpg?s=612x612&w=0&k=20&c=MvXjiAPnxO8fO_9AXzEuuRp6vaiXrog5OpJ9aLRCh-A=',
  description: 'A React-based portfolio with a WhatsApp bot integration using Baileys, enabling direct messaging for contact forms and real-time communication.',
  technologies: ['React', 'Node.js', 'Baileys', 'MongoDB'],
  link: 'https://your-portfolio-url.com',
  github: 'https://github.com/yourusername/yourrepo'
  },
  {
    id: 3,
  title: 'Vandalz Portfolio website',
  category: 'Web Design',
  image: 'https://media.istockphoto.com/id/1410274487/photo/digital-marketing-concept.jpg?s=612x612&w=0&k=20&c=-2ZryLW1AyEMWMBdfMeA_v-Dq7ZcM3RQymp6fGR65kE=',
  description: 'Creative agency offering digital marketing, 3D modeling, web, and graphic design to boost brand impact and growth.',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  link: 'https://your-live-site.com',  // Replace with your actual hosted site
  github: 'https://github.com/yourusername/vandalz-clothing' 
  },
  {
    id: 4,
   title: 'Club Management System',
  category: 'Web & Mobile App',
  image: 'https://media.istockphoto.com/id/1180620748/photo/soccer-coach-high-fiving-with-boy-during-practice.jpg?s=612x612&w=0&k=20&c=MgvGotdhL8ohWNJcfC-DiRW9BimbSnLUteERN155hYs=',
  description: 'A full-stack platform for managing club operations including ground bookings, member and batch registrations, and notice updates, all under admin control.',
  technologies: ['Python', 'Django', 'Flutter', 'SQLite'],
  link: 'https://example.com', // replace with live demo link if available
  github: 'https://github.com/yourusername/club-management-system' // replace with actual repo
  },
  {
    id: 5,
    title: 'College Alumni Network',
  category: 'Web Design',
  image: 'https://media.istockphoto.com/id/2164232127/photo/cropped-hands-of-people-throwing-mortarboards-against-clear-sky.jpg?s=612x612&w=0&k=20&c=fnLryvotqB5UoXkMXFSBBX-iOKPKvSw2-kiCQKPUN7c=',
  description: 'A Django-based web app that connects former and current students of the college. Features include alumni registration, event updates, job postings, and a message board for networking.',
  technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
  link: 'https://example.com', // replace with live demo if available
  github: 'https://github.com/yourusername/college-alumni-network'
  },
  {
    id: 6,
    title: 'AI Chatbot for WhatsApp',
  category: 'Web App',
  image: 'https://media.istockphoto.com/id/1488335095/vector/3d-vector-robot-chatbot-ai-in-science-and-business-technology-and-engineering-concept.jpg?s=612x612&w=0&k=20&c=MSxiR6V1gROmrUBe1GpylDXs0D5CHT-mn0Up8D50mr8=',
  description: 'A feature-rich WhatsApp bot that supports AI-based chat (beta), language translation, weather and news updates, and file/image storage. Designed for seamless interaction and task automation through text commands.',
  technologies: ['Node.js', 'Baileys', 'JavaScript'],
  link: 'https://example.com', // Optional: your live demo link
  github: 'https://github.com/yourusername/ai-whatsapp-chatbot'
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionAnimation = useAnimateOnScroll();
  const projectsAnimation = useAnimateOnScroll(staggerChildren);

  useEffect(() => {
    setFilteredProjects(
      filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter)
    );
  }, [filter]);

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
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="card card-hover overflow-hidden bg-white rounded-xl"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                layout
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
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
