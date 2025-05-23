import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin , Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #4338ca, #6d28d9, #be185d)', 
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50 flex items-center justify-center">
        <div className="container-custom text-center text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block mb-2">Hi, I'm Basi </span>
              <span className="text-accent-400">Web Designer & App Creator</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I create beautiful, functional, and user-friendly digital experiences
              that help businesses grow and succeed in the digital world.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a 
                href="#projects" 
                className="btn bg-white text-primary-700 hover:bg-gray-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn btn-secondary border-white text-white hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a 
                href="https://github.com/Basiibnumoideen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/basiibnumoideen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>

              <motion.a 
                href="https://www.instagram.com/basi.ibnu.moideen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-300 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="instagram"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              
              
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10"
          animate={{ 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/10"
          animate={{ 
            y: [0, -70, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-white/10"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12, 
            ease: "easeInOut" 
          }}
        />
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0] 
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;