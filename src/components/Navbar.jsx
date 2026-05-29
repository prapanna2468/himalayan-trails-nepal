import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: 'hero', offset: -80 },
    { label: 'Packages', to: 'packages', offset: -80 },
    { label: 'Why Us', to: 'why-us', offset: -80 },
    { label: 'Gallery', to: 'gallery', offset: -80 },
    { label: 'Contact', to: 'contact', offset: -80 },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism bg-himalayan-dark-blue/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="text-3xl font-bold gradient-text">🏔️</div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white font-display">
                Himalayan Trails
              </h1>
              <p className="text-xs text-nepal-orange">Nepal Adventures</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                offset={item.offset}
                smooth={true}
                duration={500}
                className="text-gray-200 hover:text-nepal-orange transition-colors cursor-pointer font-medium"
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-nepal-orange to-nepal-red rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-nepal-orange text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                offset={item.offset}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-200 hover:text-nepal-orange transition-colors rounded hover:bg-himalayan-blue/50 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-2 mt-4 bg-gradient-to-r from-nepal-orange to-nepal-red rounded-full font-semibold"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
