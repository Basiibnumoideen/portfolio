import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, fadeInUp, staggerChildren } from '../../hooks/useAnimateOnScroll';
import { Palette, PenTool, Code, Smartphone, Layout, Monitor } from 'lucide-react';

const Services: React.FC = () => {
  const sectionAnimation = useAnimateOnScroll();
  const servicesAnimation = useAnimateOnScroll(staggerChildren);

  const services = [
    {
      title: 'UI/UX Design',
      icon: <Palette className="h-12 w-12 text-primary-600" />,
      description: 'Creating intuitive and engaging user experiences with beautiful interfaces that solve real problems.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      title: 'Web Design',
      icon: <Layout className="h-12 w-12 text-primary-600" />,
      description: 'Crafting responsive websites with modern designs that look great on all devices and load quickly.',
      features: ['Responsive Layouts', 'Interactive Elements', 'Performance Optimization', 'SEO Best Practices']
    },
    {
      title: 'Web Development',
      icon: <Code className="h-12 w-12 text-primary-600" />,
      description: 'Building robust and scalable web applications using modern frameworks and best practices.',
      features: ['Frontend Development', 'Backend Integration', 'API Development', 'Database Design']
    },
    {
      title: 'App Development',
      icon: <Smartphone className="h-12 w-12 text-primary-600" />,
      description: 'Developing native and cross-platform mobile apps that provide seamless user experiences.',
      features: ['iOS & Android', 'Cross-Platform Solutions', 'App Store Optimization', 'Maintenance & Updates']
    },
    {
      title: 'Brand Identity',
      icon: <PenTool className="h-12 w-12 text-primary-600" />,
      description: 'Creating cohesive brand identities that communicate your values and connect with your audience.',
      features: ['Logo Design', 'Color Palettes', 'Typography', 'Brand Guidelines']
    },
    {
      title: 'Interactive Prototypes',
      icon: <Monitor className="h-12 w-12 text-primary-600" />,
      description: 'Building interactive prototypes to test ideas and get feedback before full development.',
      features: ['Animation', 'User Flows', 'Feedback Integration', 'Concept Validation']
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
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
            Services I Offer
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Specialized expertise to help bring your digital vision to life with quality and care.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={servicesAnimation.ref}
          initial="hidden"
          animate={servicesAnimation.controls}
          variants={servicesAnimation.variants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                backgroundColor: '#ffffff',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                borderColor: '#e2e8f0'
              }}
            >
              <motion.div 
                className="mb-6 inline-block p-4 bg-primary-50 rounded-2xl"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center space-x-2 text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Ready to start your project?
          </h3>
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;