import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-himalayan-dark-blue to-black text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-3xl">🏔️</div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Himalayan Trails</h3>
                <p className="text-xs text-nepal-orange">Nepal Adventures</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Experience the majesty of the Himalayas with professional guides and premium trekking experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#packages" className="hover:text-nepal-orange transition-colors">
                  Trek Packages
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-nepal-orange transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-nepal-orange transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-nepal-orange transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Trek Categories */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Popular Treks</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-nepal-orange transition-colors cursor-pointer">Everest Base Camp</li>
              <li className="hover:text-nepal-orange transition-colors cursor-pointer">Annapurna Circuit</li>
              <li className="hover:text-nepal-orange transition-colors cursor-pointer">Langtang Valley</li>
              <li className="hover:text-nepal-orange transition-colors cursor-pointer">Mardi Himal</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6 font-display">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-nepal-orange mt-1 flex-shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-nepal-orange" />
                <span>+977 1-4123456</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-nepal-orange" />
                <span>info@himalayan-trails.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12 py-8 border-t border-b border-white/10"
        >
          {[
            { Icon: FaFacebook, label: 'Facebook' },
            { Icon: FaInstagram, label: 'Instagram' },
            { Icon: FaTwitter, label: 'Twitter' },
            { Icon: FaYoutube, label: 'YouTube' },
          ].map(({ Icon, label }) => (
            <motion.a
              key={label}
              href="#"
              whileHover={{ scale: 1.2, color: '#ff6b35' }}
              className="text-2xl text-gray-400 hover:text-nepal-orange transition-colors"
              aria-label={label}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500"
        >
          <p className="mb-4">
            © {currentYear} Himalayan Trails Nepal. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-xs">
            <a href="#" className="hover:text-nepal-orange transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-nepal-orange transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-nepal-orange transition-colors">
              Sitemap
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-600">
            Built with ❤️ for adventure seekers • Eco-friendly trekking since 2009
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;