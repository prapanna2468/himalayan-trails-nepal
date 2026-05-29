import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: 'Everest Base Camp',
    travelers: '1',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        destination: 'Everest Base Camp',
        travelers: '1',
        date: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const destinations = [
    'Everest Base Camp Trek',
    'Annapurna Circuit Trek',
    'Langtang Valley Trek',
    'Mardi Himal Trek',
    'Manaslu Circuit Trek',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-himalayan-blue to-himalayan-dark-blue py-20 px-4 sm:px-6 lg:px-8"
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
            Start Your <span className="gradient-text">Adventure</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Fill out the form below and let us help you plan your perfect trek
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Details */}
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-display mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 mb-2">📍 Address</p>
                  <p className="text-white">Kathmandu, Nepal</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">📞 Phone</p>
                  <p className="text-white">+977 1-4123456</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">✉️ Email</p>
                  <p className="text-white">info@himalayan-trails.com</p>
                </div>

                <div>
                  <p className="text-gray-400 mb-2">🕐 Hours</p>
                  <p className="text-white">24/7 Support Available</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              className="glassmorphism p-8 rounded-2xl"
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 bg-nepal-orange rounded-full flex items-center justify-center hover:bg-nepal-red transition-colors"
                  >
                    {social[0]}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glassmorphism p-8 md:p-12 rounded-2xl"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nepal-orange transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nepal-orange transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              {/* Destination and Travelers Row */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nepal-orange transition-colors"
                  >
                    {destinations.map((dest) => (
                      <option key={dest} value={dest} className="bg-himalayan-dark-blue">
                        {dest}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    min="1"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nepal-orange transition-colors"
                  />
                </motion.div>
              </div>

              {/* Date */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-nepal-orange transition-colors"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-nepal-orange transition-colors resize-none"
                  placeholder="Tell us about your trekking experience..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full py-4 bg-gradient-to-r from-nepal-orange to-nepal-red text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Inquiry'}
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
