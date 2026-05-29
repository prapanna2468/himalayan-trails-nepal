import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaLock,
  FaLeaf,
  FaHeadset,
  FaMap,
  FaAward,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaUsers,
      title: 'Experienced Guides',
      description: 'Our certified guides have decades of combined experience in Himalayan trekking',
    },
    {
      icon: FaAward,
      title: 'Affordable Packages',
      description: 'Premium trekking experiences at competitive prices with flexible payment options',
    },
    {
      icon: FaLock,
      title: 'Safety First',
      description: 'Comprehensive safety measures and emergency protocols on every trek',
    },
    {
      icon: FaMap,
      title: 'Local Expertise',
      description: 'Deep knowledge of local culture, customs, and hidden gems of Nepal',
    },
    {
      icon: FaLeaf,
      title: 'Eco-Friendly',
      description: 'Committed to sustainable trekking practices and environmental conservation',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support before, during, and after your trek',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="why-us"
      className="min-h-screen bg-gradient-to-b from-himalayan-dark-blue to-himalayan-blue py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're committed to providing the best trekking experience in Nepal with professional service and unforgettable memories
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(255, 107, 53, 0.2)',
                }}
                className="glassmorphism p-8 rounded-2xl group cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-6 inline-block p-4 bg-gradient-to-br from-nepal-orange to-nepal-red rounded-xl group-hover:shadow-lg transition-all"
                >
                  <Icon className="text-3xl text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-nepal-orange transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Ready to start your Himalayan adventure?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-nepal-orange to-nepal-red text-white font-bold rounded-full text-lg hover:shadow-lg transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
