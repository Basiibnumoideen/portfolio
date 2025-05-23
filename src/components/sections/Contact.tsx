import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, fadeInLeft, fadeInRight } from '../../hooks/useAnimateOnScroll';
import { Mail, Phone, MapPin, Send, Github,  Linkedin,Instagram ,} from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const sectionAnimation = useAnimateOnScroll();
  const formAnimation = useAnimateOnScroll(fadeInLeft);
  const infoAnimation = useAnimateOnScroll(fadeInRight);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
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
            Get In Touch
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-8"
            ref={formAnimation.ref}
            initial="hidden"
            animate={formAnimation.controls}
            variants={formAnimation.variants}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send a Message</h3>
            
            {formStatus.type && (
              <motion.div 
                className={`p-4 mb-6 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {formStatus.message}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full md:w-auto flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            ref={infoAnimation.ref}
            initial="hidden"
            animate={infoAnimation.controls}
            variants={infoAnimation.variants}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <a 
                    href="mailto:basiibnumoideen@gmail.com" 
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                   basiibnumoideen@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    +91 8590 8822 53
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary-100 p-3 rounded-lg text-primary-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Location</h4>
                <p className="text-gray-700 text-sm sm:text-base"> Areekode, Malappuram, Kerala – <span className="font-medium">PIN 673639</span>
                </p>
                </div>
              </motion.div>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Connect With Me</h4>
              <div className="flex gap-4">

  {/* WhatsApp */}
  <div className="flex flex-col items-center group">
    <motion.a 
      href="https://wa.me/918590882253?text=Hello%20Basi%2C%20I%E2%80%99m%20reaching%20out%20after%20visiting%20your%20portfolio%20website." 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.208-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.28c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.9a9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.942L.057 24l6.306-1.654a11.87 11.87 0 0 0 5.684 1.446h.005c6.554 0 11.89-5.335 11.893-11.892a11.82 11.82 0 0 0-3.48-8.415"/>
      </svg>
    </motion.a>
    <span className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      WhatsApp
    </span>
  </div>

  {/* GitHub */}
  <div className="flex flex-col items-center group">
    <motion.a 
      href="https://github.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Github className="h-6 w-6" />
    </motion.a>
    <span className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      GitHub
    </span>
  </div>

  {/* Instagram */}
  <div className="flex flex-col items-center group">
    <motion.a 
      href="https://www.instagram.com/basi.ibnu.moideen" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Instagram className="h-6 w-6" />
    </motion.a>
    <span className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Instagram
    </span>
  </div>

  {/* X */}
  <div className="flex flex-col items-center group">
  <motion.a 
    href="https://x.com/your_username" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M20.96 3H17.5L13.5 8.26 9.75 3H3.5L9.13 10.95 3 21h3.5l4.38-6.13L14.5 21h6.25l-6.14-9.11L20.96 3Zm-3.38 2.14-3.32 4.41L16.23 12l3.29 5H17.5l-2.66-3.9-4.1 5.72H6.88l5.24-7.31-5.09-7.5h2.58l3.13 4.6L17.58 5.14Z" />
    </svg>
  </motion.a>
  <span className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    X
  </span>
</div>


  {/* Twitter */}
 

  {/* LinkedIn */}
  <div className="flex flex-col items-center group">
    <motion.a 
      href="https://linkedin.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Linkedin className="h-6 w-6" />
    </motion.a>
    <span className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      LinkedIn
    </span>
  </div>

</div>

            </div>
            <div className="pt-8 mt-8 border-t border-gray-200">
  <h4 className="text-lg font-semibold mb-4 text-gray-800">Currently Open For</h4>
  <ul className="space-y-2 text-gray-600">
    <li>🔹 Freelance Web Projects</li>
    <li>🔹 Internship Opportunities</li>
    <li>🔹 Collaborations in Design & Development</li>
  </ul>
</div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;