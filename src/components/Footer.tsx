import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Code,
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/yourusername',
    icon: <Github className="h-6 w-6" />,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    icon: <Linkedin className="h-6 w-6" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://instagram.com/yourusername',
    icon: <Instagram className="h-6 w-6" />,
    label: 'Instagram',
  },
  {
    href: 'https://x.com/yourusername',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.96 3H17.5L13.5 8.26 9.75 3H3.5L9.13 10.95 3 21h3.5l4.38-6.13L14.5 21h6.25l-6.14-9.11L20.96 3Zm-3.38 2.14-3.32 4.41L16.23 12l3.29 5H17.5l-2.66-3.9-4.1 5.72H6.88l5.24-7.31-5.09-7.5h2.58l3.13 4.6L17.58 5.14Z" />
      </svg>
    ),
    label: 'X',
  },
  {
    href:
      'https://wa.me/918590882253?text=Hello%20Basi%2C%20I%E2%80%99m%20reaching%20out%20after%20visiting%20your%20portfolio%20website.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.208-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.28c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.9a9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.942L.057 24l6.306-1.654a11.87 11.87 0 0 0 5.684 1.446h.005c6.554 0 11.89-5.335 11.893-11.892a11.82 11.82 0 0 0-3.48-8.415"/>
      </svg>
    ),
    label: 'WhatsApp',
  },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Web Design',
  'App Development',
  'UI/UX Design',
  'Brand Identity',
  'Web Development',
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-2xl font-bold mb-4 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Code className="h-6 w-6 mr-2 text-primary-400" />
              Basi
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating beautiful digital experiences that deliver results. Let's work together to bring your vision to life.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={idx < 3 ? { scale: 1.2, rotate: 5 } : { y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {quickLinks.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Services */}
          <div>
            <motion.h4
              className="text-lg font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Services
            </motion.h4>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {services.map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Basi. Made with
            <motion.span
              className="inline-block text-red-500 mx-1"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
            >
              <Heart className="h-4 w-4 inline" />
            </motion.span>
            AI.
          </p>

          <motion.a
            href="#home"
            className="flex items-center text-gray-400 hover:text-white transition-colors"
            whileHover={{ y: -5 }}
          >
            Back to Top <ArrowUp className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;