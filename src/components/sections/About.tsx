import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, fadeInLeft, fadeInRight, fadeInUp } from '../../hooks/useAnimateOnScroll';
import { Code, Palette, Layout, Monitor, Database, Server } from 'lucide-react';

const About: React.FC = () => {
  const sectionAnimation = useAnimateOnScroll();
  const imageAnimation = useAnimateOnScroll(fadeInLeft);
  const contentAnimation = useAnimateOnScroll(fadeInRight);
  const skillsAnimation = useAnimateOnScroll(fadeInUp, 0.2);

  const skills = [
    { name: 'UX/UI Design', icon: <Palette className="h-6 w-6" /> },
    { name: 'Frontend Development', icon: <Layout className="h-6 w-6" /> },
    { name: 'Backend Development', icon: <Server className="h-6 w-6" /> },
    { name: 'Mobile Development', icon: <Monitor className="h-6 w-6" /> },
    { name: 'Database Design', icon: <Database className="h-6 w-6" /> },
    { name: 'Code Architecture', icon: <Code className="h-6 w-6" /> },
  ];

  return (
    <section id="about" className="section-padding bg-white">
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know my background, skills, and passion for creating amazing digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            ref={imageAnimation.ref}
            initial="hidden"
            animate={imageAnimation.controls}
            variants={imageAnimation.variants}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Basi - Web Designer & App Creator" 
                className="w-full h-auto" 
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-32 h-32 bg-primary-100 rounded-lg -z-10"
              animate={{ 
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6, 
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-100 rounded-lg -z-10"
              animate={{ 
                rotate: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 6, 
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>

          <motion.div
            ref={contentAnimation.ref}
            initial="hidden"
            animate={contentAnimation.controls}
            variants={contentAnimation.variants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Hello, I'm <span className="text-primary-600 ">BASI</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Hello, I'm Muhammed Abdul Basith, a passionate web developer and tech
               enthusiast with a growing expertise in Python Django, MERN stack, and creative digital solutions.
                I'm currently pursuing my B.Sc. in Computer Science at Regional College, Mundamparamba, 
                and have already built real-world projects that blend functionality,
                 design, and innovation.
              , a startup focused on web development, graphics design, motion graphics, 3D modeling, 
              and digital marketing. With every project, I aim to push creative boundaries and deliver meaningful,
               performance-driven results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I specialize in creating clean, modern, and responsive websites and applications
              that not only look great but also perform exceptionally well. My passion lies in
              the intersection of beautiful design and functional technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not designing or coding, you can find me exploring new design trends,
              attending tech conferences, or hiking in the great outdoors to find inspiration
              for my next creative project.
            </p>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold mb-4 text-gray-800">My Skills</h4>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                ref={skillsAnimation.ref}
                initial="hidden"
                animate={skillsAnimation.controls}
                variants={skillsAnimation.variants}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-primary-300 transition-all"
                    whileHover={{ scale: 1.05, backgroundColor: '#f0f9ff' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="text-primary-600">{skill.icon}</span>
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;